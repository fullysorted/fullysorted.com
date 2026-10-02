import { NextRequest, NextResponse } from 'next/server';
import { stageOf, JOB_STATUSES } from '@/lib/lead-stages';

function isAdmin(request: NextRequest): boolean {
  const secret = request.cookies.get('fs_admin')?.value;
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

/**
 * GET /api/admin/leads: every directory enquiry from the last 180 days with
 * its stage, plus the timing the page needs. One query, no new tables: the
 * stage is derived from columns the lead relay and the outcome links already
 * write. Kept to a single round trip for Neon's sake.
 */
export async function GET(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });
  const sql = await getSql();

  const rows = (await sql`
    SELECT m.id, m.created_at, m.sender_name, m.sender_email, m.sender_phone,
           LEFT(m.message_text, 600) AS message_text, m.provider_id,
           p.business_name, p.slug, p.location,
           m.replied_at, m.junk, m.junk_reason, m.job_status,
           m.owner_asked_at, m.owner_answered_at, m.admin_notes, m.status
    FROM messages m
    LEFT JOIN service_providers p ON p.id = m.provider_id
    WHERE m.provider_id IS NOT NULL
      AND m.created_at > NOW() - INTERVAL '180 days'
    ORDER BY m.created_at DESC
    LIMIT 500
  `) as Record<string, unknown>[];

  const now = Date.now();
  const leads = rows.map((r) => {
    const created = new Date(r.created_at as string).getTime();
    const replied = r.replied_at ? new Date(r.replied_at as string).getTime() : null;
    return {
      ...r,
      stage: stageOf(r as never, now),
      hours_to_reply: replied ? Math.max(0, Math.round((replied - created) / 360_000) / 10) : null,
    };
  });
  // Contact-link taps per shop. The table only exists once someone has tapped,
  // so a missing table is "no taps yet", not an error.
  let clicks: { provider_id: number; business_name: string | null; kind: string; n: number }[] = [];
  try {
    clicks = (await sql`
      SELECT c.provider_id, p.business_name, c.kind, COUNT(*)::int AS n
      FROM contact_clicks c
      LEFT JOIN service_providers p ON p.id = c.provider_id
      WHERE c.created_at > NOW() - INTERVAL '180 days'
      GROUP BY c.provider_id, p.business_name, c.kind
    `) as typeof clicks;
  } catch (err) {
    if ((err as { code?: string })?.code !== '42P01') console.error('[admin/leads] clicks query failed', err);
  }
  return NextResponse.json({ leads, clicks });
}

/**
 * PATCH /api/admin/leads: record what you learned on the phone.
 * { id, job_status?: booked|talking|not_going_ahead|no_reply|null, junk?: boolean, admin_notes?: string }
 */
export async function PATCH(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: 'Bad JSON' }, { status: 400 }); }
  const id = Number(body.id);
  if (!Number.isInteger(id) || id <= 0) return NextResponse.json({ error: 'Bad id' }, { status: 400 });
  const sql = await getSql();

  if ('job_status' in body) {
    const js = body.job_status === null || body.job_status === ''
      ? null
      : (JOB_STATUSES as readonly string[]).includes(body.job_status as string) ? (body.job_status as string) : undefined;
    if (js === undefined) return NextResponse.json({ error: 'Bad job_status' }, { status: 400 });
    await sql`UPDATE messages SET job_status = ${js}, updated_at = NOW() WHERE id = ${id} AND provider_id IS NOT NULL`;
  }
  if (typeof body.junk === 'boolean') {
    await sql`UPDATE messages SET junk = ${body.junk}, outcome = CASE WHEN ${body.junk} THEN 'junk' ELSE outcome END, updated_at = NOW() WHERE id = ${id} AND provider_id IS NOT NULL`;
  }
  if (typeof body.admin_notes === 'string') {
    await sql`UPDATE messages SET admin_notes = ${body.admin_notes.slice(0, 2000)}, updated_at = NOW() WHERE id = ${id}`;
  }
  return NextResponse.json({ ok: true });
}
