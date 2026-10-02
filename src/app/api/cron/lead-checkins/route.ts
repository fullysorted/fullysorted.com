import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { LEAD_CHECKINS_ENABLED } from '@/lib/features';
import { sendLeadCheckinEmail } from '@/lib/email';

export const dynamic = 'force-dynamic';

// Same default-DENY posture as the other crons: this sends mail to the public.
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

const MIN_DAYS = 7;
const MAX_DAYS = 30;
const PER_RUN = 25;

/**
 * GET /api/cron/lead-checkins: daily. Asks owners, once, how a directory
 * enquiry went. Rules:
 *   - provider leads only (provider_id set), 7 to 30 days old
 *   - never asked before (owner_asked_at IS NULL), never junk, no answer yet
 *   - capped per run, and the row is CLAIMED (asked_at + token written) before
 *     the send, so a double-fire or a crash mid-run can never email twice
 */
export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!LEAD_CHECKINS_ENABLED) return NextResponse.json({ ok: true, skipped: 'LEAD_CHECKINS_ENABLED is false' });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const due = await sql`
    SELECT m.id, m.sender_name, m.sender_email, p.business_name
    FROM messages m
    JOIN service_providers p ON p.id = m.provider_id
    WHERE m.provider_id IS NOT NULL
      AND m.owner_asked_at IS NULL
      AND COALESCE(m.junk, FALSE) = FALSE
      AND m.job_status IS NULL
      AND m.status <> 'archived'
      AND m.created_at < NOW() - (${MIN_DAYS} * INTERVAL '1 day')
      AND m.created_at > NOW() - (${MAX_DAYS} * INTERVAL '1 day')
    ORDER BY m.created_at ASC
    LIMIT ${PER_RUN}
  `;

  let sent = 0;
  let failed = 0;
  for (const r of due as { id: number; sender_name: string; sender_email: string; business_name: string }[]) {
    const token = randomBytes(24).toString('base64url');
    const claimed = await sql`
      UPDATE messages SET owner_token = ${token}, owner_asked_at = NOW(), updated_at = NOW()
      WHERE id = ${r.id} AND owner_asked_at IS NULL
      RETURNING id
    `;
    if (!claimed.length) continue;
    const ok = await sendLeadCheckinEmail({
      to: r.sender_email,
      ownerName: r.sender_name,
      businessName: r.business_name,
      token,
    });
    // A failed send stays claimed on purpose: one attempt per lead, never a
    // retry loop into someone's inbox. It shows as "asked" with no answer.
    if (ok) sent++; else failed++;
  }

  return NextResponse.json({ ok: true, due: due.length, sent, failed });
}
