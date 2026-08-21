import { NextRequest, NextResponse } from 'next/server';
import { ensureReviewTable, REVIEW_REMINDER_DAYS, REVIEW_INVITE_EXPIRY_DAYS } from '@/lib/reviews';

export const dynamic = 'force-dynamic';

const SITE = 'https://fullysorted.com';

// Same default-DENY posture as /api/cron/auto-release. A misconfigured deploy
// must not leave an endpoint that sends mail to third parties wide open.
function authorized(req: NextRequest): boolean {
  const auth = req.headers.get('authorization') || '';
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && auth === `Bearer ${cronSecret}`) return true;
  const admin = process.env.ADMIN_SECRET;
  if (admin && (req.headers.get('x-admin-secret') === admin || req.cookies.get('fs_admin')?.value === admin)) {
    return true;
  }
  return false;
}

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

// ─── GET /api/cron/review-invites ───────────────────────
// Daily housekeeping on outstanding review invites. Two jobs, in this order:
//
//   1. Expire anything older than REVIEW_INVITE_EXPIRY_DAYS. Done first so a
//      row that is due to expire today can never also be reminded today.
//   2. Send exactly ONE reminder to invites older than REVIEW_REMINDER_DAYS
//      that have not been reminded and have not been answered.
//
// The reminder is capped per run and marked per row, so a stuck cron or a
// double-fire cannot turn into a second email to the same person.
export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const sql = await getSql();
  await ensureReviewTable(sql);

  // ── 1. Expire ──
  // The token is deliberately NOT cleared: /review/[token] can then say "this
  // link has expired" rather than 404 at someone who was doing us a favour.
  // The submit route only accepts status = 'invited', so it is already inert.
  const expired = await sql`
    UPDATE provider_reviews
    SET status = 'expired', expired_at = NOW(), updated_at = NOW()
    WHERE status = 'invited'
      AND invited_at < NOW() - (${REVIEW_INVITE_EXPIRY_DAYS} * INTERVAL '1 day')
    RETURNING id
  `;

  // ── 2. Remind, once ──
  const due = await sql`
    SELECT r.id, r.review_token, r.author_name, r.author_email, p.business_name
    FROM provider_reviews r
    JOIN service_providers p ON p.id = r.provider_id
    WHERE r.status = 'invited'
      AND r.reminder_sent_at IS NULL
      AND r.review_token IS NOT NULL
      AND r.author_email IS NOT NULL
      AND r.invited_at < NOW() - (${REVIEW_REMINDER_DAYS} * INTERVAL '1 day')
    ORDER BY r.invited_at ASC
    LIMIT 100
  `;

  const { sendReviewInviteReminder } = await import('@/lib/email');
  let reminded = 0;
  const failed: number[] = [];

  for (const row of due) {
    const id = Number(row.id);
    // Marked BEFORE the send, not after. If the mail provider accepts the
    // message and then the function times out, the worst case must be one
    // person who never gets a reminder — not one who gets it every morning
    // until someone notices.
    await sql`UPDATE provider_reviews SET reminder_sent_at = NOW(), updated_at = NOW() WHERE id = ${id}`;
    try {
      const ok = await sendReviewInviteReminder({
        to: String(row.author_email),
        clientName: row.author_name ? String(row.author_name) : undefined,
        businessName: String(row.business_name),
        reviewUrl: `${SITE}/review/${row.review_token}`,
      });
      if (ok) reminded++;
      else failed.push(id);
    } catch (e) {
      console.error('[cron/review-invites] reminder failed', id, e);
      failed.push(id);
    }
  }

  return NextResponse.json({
    ok: true,
    expired: expired.length,
    reminded,
    failed: failed.length,
    checked: due.length,
  });
}
