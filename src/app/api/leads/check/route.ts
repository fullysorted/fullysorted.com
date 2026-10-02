import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { JOB_STATUSES, type JobStatus } from '@/lib/lead-stages';

/**
 * POST /api/leads/check: the owner's answer to the check-in email.
 * Reached only from the confirming button on /checkin/<token>, never from a
 * GET, for the same mail-scanner reason as /api/leads/action. The owner may
 * change their answer (still talking -> booked), so the latest one wins.
 */
export async function POST(request: NextRequest) {
  const limited = rateLimit(request, 'lead-check', 30, 60_000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }

  const token = typeof body.token === 'string' ? body.token.trim().slice(0, 64) : '';
  const answer = (JOB_STATUSES as readonly string[]).includes(body.answer as string) ? (body.answer as JobStatus) : null;
  if (!token || !answer) return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ ok: true, recorded: false });

  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    await sql`
      UPDATE messages
      SET job_status = ${answer}, owner_answered_at = NOW(), updated_at = NOW()
      WHERE owner_token = ${token}
    `;
  } catch (err) {
    console.error('[lead-check] update failed', err);
    return NextResponse.json({ error: 'Could not record that just now.' }, { status: 503 });
  }
  // Same response whether or not the token matched: no token oracle.
  return NextResponse.json({ ok: true, recorded: true });
}
