import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { isTeam } from '@/lib/team-auth';
import { isEmailAddress } from '@/lib/leads';
import { ensureAccountLinkColumns, mintAccountLink, LINK_TOKEN_TTL_DAYS } from '@/lib/account-link';

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

const SITE = 'https://fullysorted.com';

// ─── POST /api/providers/link/request ───────────────────
// "I'm already listed — send me a login." Two callers:
//
//   • the public dashboard empty state, which passes an email
//   • the /team console, which passes a providerId during an onboarding call
//
// The public path NEVER reveals whether an address is listed. A shop's presence
// in the directory is public, but which address we hold for it is not, and an
// endpoint that answered honestly would be a free enumeration oracle. Every
// public outcome returns the same 200 and the same sentence; the real state is
// in the server log.
//
// The safety property that makes this exposable at all: the destination is
// always the address already stored on the row. A caller cannot redirect the
// email anywhere, so the worst a stranger can do is mail a shop about its own
// listing.
export async function POST(request: NextRequest) {
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const team = isTeam(request);
  if (!team) {
    const limited = rateLimit(request, 'link-request', 5, 15 * 60_000);
    if (limited) return limited;
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const providerId = team && body.providerId ? Number(body.providerId) : undefined;
  const email = String(body.email ?? '').trim();

  if (!providerId && !isEmailAddress(email)) {
    return NextResponse.json({ error: 'Enter the email address on your listing.' }, { status: 400 });
  }

  const sql = await getSql();
  await ensureAccountLinkColumns(sql);

  const minted = await mintAccountLink(sql, providerId ? { providerId } : { email });

  // Identical answer whichever way it went — see the note above.
  const opaque = NextResponse.json({
    success: true,
    message: "If that address is on a listing, we've sent it a link. Check your inbox.",
  });

  if (!minted.ok) {
    console.warn(`[link-request] no link sent (${minted.reason})`);
    if (team) {
      const teamMessages: Record<string, string> = {
        not_found: 'No listing found for that.',
        already_linked: 'That listing already has an account attached.',
        no_email: 'That listing has no email address on file — add one first.',
        declined: 'That shop asked not to be listed. Do not email them.',
      };
      return NextResponse.json({ error: teamMessages[minted.reason] }, { status: 409 });
    }
    return opaque;
  }

  const { sendAccountLinkInvite } = await import('@/lib/email');
  const sent = await sendAccountLinkInvite({
    to: minted.target.email,
    businessName: minted.target.businessName,
    linkUrl: `${SITE}/services/link/${minted.target.token}`,
    ttlDays: LINK_TOKEN_TTL_DAYS,
  });

  if (team) {
    // The rep is on the phone and needs to know whether it actually went, plus
    // a copyable link if the mail provider is having a bad day.
    return NextResponse.json({
      success: sent,
      emailed: sent,
      sentTo: minted.target.email,
      linkUrl: `${SITE}/services/link/${minted.target.token}`,
      ...(sent ? {} : { error: "Couldn't send the email — read them the link instead." }),
    });
  }

  // The public branch used to return `opaque` here regardless of `sent`, which
  // told someone "we've sent it a link" when nothing had been sent. Email is
  // the ONLY durable channel on this path — the token in the database is no use
  // to a person who never receives it — so a failed send must not report
  // success. See the deliver() contract in lib/submissions.ts.
  //
  // This does not leak whether the address is on a listing: a send failure is a
  // mail-provider outage, which is global rather than per-address, and the
  // not-found branch above still returns the same opaque success it always did.
  if (!sent) {
    console.error('[link-request] send failed for a real provider row');
    return NextResponse.json(
      {
        error:
          "We couldn't send that email just now. Please email chris@fullysorted.com and we'll set your login up by hand.",
      },
      { status: 502 },
    );
  }

  return opaque;
}
