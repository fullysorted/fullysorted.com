import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { rateLimit } from '@/lib/rate-limit';
import { consumeAccountLink, ensureAccountLinkColumns } from '@/lib/account-link';

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

// ─── POST /api/providers/link ───────────────────────────
// Redeem a link token for the signed-in user. This is the only route in the
// codebase that attaches a Clerk account to an existing provider listing.
//
// Both factors are required and neither is sufficient: the token proves control
// of the business's email, the session says which account to attach. All the
// refusal rules live in lib/account-link.ts so they can be tested directly.
export async function POST(request: NextRequest) {
  const limited = rateLimit(request, 'provider-link', 10, 60_000);
  if (limited) return limited;
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  const token = String(body.token ?? '').trim();
  if (!token) return NextResponse.json({ error: 'This link is missing its code.' }, { status: 400 });

  const sql = await getSql();
  await ensureAccountLinkColumns(sql);

  const result = await consumeAccountLink(sql, token, userId);

  if (!result.ok) {
    const messages: Record<string, { msg: string; status: number }> = {
      not_found: { msg: 'That link is not valid. It may have already been used.', status: 404 },
      expired: { msg: 'That link has expired. We can send you a fresh one.', status: 410 },
      already_linked: { msg: 'This listing is already managed by an account. Email us if that is not you.', status: 409 },
      user_has_listing: {
        msg: 'This account already manages a different listing. Sign out, create a separate account for this business, and use the link again.',
        status: 409,
      },
    };
    const m = messages[result.reason];
    return NextResponse.json({ error: m.msg, reason: result.reason }, { status: m.status });
  }

  // Tell the address on file, so a link the business didn't expect is visible
  // to them rather than silent. Best effort — the link itself already worked.
  try {
    const { notifyAccountLinked } = await import('@/lib/email');
    if (result.email) {
      await notifyAccountLinked({
        to: result.email,
        businessName: result.businessName,
        profileUrl: `https://fullysorted.com/services/${result.slug}`,
      });
    }
  } catch (e) {
    console.error('[link] notification failed', e);
  }

  return NextResponse.json({ success: true, businessName: result.businessName, slug: result.slug });
}
