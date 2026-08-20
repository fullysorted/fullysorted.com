import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { isTeam } from '@/lib/team-auth';
import { rateLimit } from '@/lib/rate-limit';
import { ensureReviewTable } from '@/lib/reviews';
import { PROVIDER_REVIEWS_PUBLIC } from '@/lib/features';

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

const SITE = 'https://fullysorted.com';

function makeToken(): string {
  return randomBytes(24).toString('base64url');
}

// ─── POST /api/reviews/invite  (team console) ───────────
// Create a one-time review link for a named client of a named provider and
// email it to them.
//
// Why the rep sends these rather than the shop: at launch most shops have no
// claimed account, and the ones that do are not going to run a review
// programme on their own in week one. The rep is on the phone with them during
// onboarding — "who are three clients who'd say something good?" — and the
// invite goes out from us, to the client, with the shop named. That produces
// verified reviews on day one without waiting for the identity work.
//
// Selective solicitation (a shop nominating happy clients) is allowed. What is
// not allowed, and what this system makes impossible, is suppressing the answer
// once it comes back: the shop never sees the token, cannot withdraw the
// review, and cannot stop it publishing.
export async function POST(request: NextRequest) {
  if (!isTeam(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!PROVIDER_REVIEWS_PUBLIC) {
    return NextResponse.json({ error: 'Reviews are switched off site-wide.' }, { status: 503 });
  }
  const limited = rateLimit(request, 'review-invite', 30, 60_000);
  if (limited) return limited;
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const providerId = Number(body.providerId);
  const clientName = String(body.clientName ?? '').trim();
  const clientEmail = String(body.clientEmail ?? '').trim().toLowerCase();
  const workType = String(body.workType ?? '').trim() || null;
  const sourceMessageId = body.sourceMessageId ? Number(body.sourceMessageId) : null;
  const invitedBy = String(body.invitedBy ?? '').trim().slice(0, 100) || null;

  if (!providerId || !clientName || !clientEmail) {
    return NextResponse.json({ error: 'Provider, client name and client email are all required.' }, { status: 400 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(clientEmail)) {
    return NextResponse.json({ error: 'That email address does not look right.' }, { status: 400 });
  }

  const sql = await getSql();
  await ensureReviewTable(sql);

  const [provider] = await sql`
    SELECT id, business_name, status FROM service_providers WHERE id = ${providerId} LIMIT 1
  `;
  if (!provider) return NextResponse.json({ error: 'Provider not found.' }, { status: 404 });

  // Never mail an address that has opted out of anything we send.
  const [suppressed] = await sql`
    SELECT 1 FROM outreach_suppression WHERE LOWER(email) = ${clientEmail} LIMIT 1
  `;
  if (suppressed) {
    return NextResponse.json({ error: 'That address has opted out of our email — we cannot invite them.' }, { status: 409 });
  }

  // One open invite per client per provider. Re-asking the same person for the
  // same job is nagging, and duplicate tokens make the audit trail useless.
  const [existing] = await sql`
    SELECT id, token_used_at FROM provider_reviews
    WHERE provider_id = ${providerId} AND LOWER(author_email) = ${clientEmail}
    ORDER BY created_at DESC LIMIT 1
  `;
  if (existing && !existing.token_used_at) {
    return NextResponse.json({ error: 'They already have an open invite for this shop.' }, { status: 409 });
  }
  if (existing && existing.token_used_at) {
    return NextResponse.json({ error: 'They have already reviewed this shop.' }, { status: 409 });
  }

  const token = makeToken();

  // The row exists from the moment the invite is sent, in a 'pending' state
  // with an empty body. That is deliberate: it means an unredeemed invite is
  // visible in the queue, so we can see who was asked and never answered.
  await sql`
    INSERT INTO provider_reviews
      (provider_id, source, source_message_id, review_token, invited_at,
       author_name, author_email, work_type, body, status, submitted_by)
    VALUES
      (${providerId}, 'verified', ${sourceMessageId}, ${token}, NOW(),
       ${clientName}, ${clientEmail}, ${workType}, '', 'invited', ${invitedBy})
  `;

  const reviewUrl = `${SITE}/review/${token}`;
  const { sendReviewInvite } = await import('@/lib/email');
  const sent = await sendReviewInvite({
    to: clientEmail,
    clientName,
    businessName: String(provider.business_name),
    workType,
    reviewUrl,
  });

  if (!sent) {
    // Keep the row — the link still works if the rep passes it on by hand.
    return NextResponse.json(
      {
        success: false,
        emailed: false,
        reviewUrl,
        error: "We couldn't send that email. The link below still works — pass it to them directly.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, emailed: true, reviewUrl });
}
