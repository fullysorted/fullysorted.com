import { NextRequest, NextResponse } from 'next/server';
import { ensureWantedTables, WANTED_DAYS } from '@/lib/wanted';
import { sendWantedApproved } from '@/lib/email';

/**
 * Admin moderation for the Wanted board.
 * GET  ?status=pending|open|closed     posts with their owner and reply count
 * POST { action: 'approve' | 'reject' | 'remove' | 'reopen', id, note? }
 * Approving starts the 60-day clock and emails the poster once.
 */
function isAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get('fs_admin')?.value;
  const header = request.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 503 });
  const view = new URL(req.url).searchParams.get('status') || 'pending';
  try {
    await ensureWantedTables();
    const sql = await getSql();
    const [summary] = await sql`
      SELECT
        COUNT(*) FILTER (WHERE status = 'pending')::int AS pending,
        COUNT(*) FILTER (WHERE status = 'open' AND expires_at > NOW())::int AS open,
        COUNT(*) FILTER (WHERE status = 'found')::int AS found,
        COUNT(*) FILTER (WHERE status = 'open' AND fee_text IS NOT NULL AND expires_at > NOW())::int AS with_fee,
        (SELECT COUNT(*)::int FROM wanted_replies) AS replies
      FROM wanted_posts
    `;
    const posts = await sql`
      SELECT p.id, p.kind, p.title, p.body, p.make, p.category, p.location, p.budget, p.fee_text, p.fee_terms,
             p.status, p.admin_note, p.reply_count, p.created_at, p.approved_at, p.expires_at,
             (p.status = 'open' AND p.expires_at <= NOW()) AS expired,
             u.id AS user_id, u.handle, u.email, u.name
      FROM wanted_posts p JOIN users u ON u.id = p.user_id
      WHERE CASE ${view}
        WHEN 'pending' THEN p.status = 'pending'
        WHEN 'open' THEN p.status = 'open' AND p.expires_at > NOW()
        ELSE p.status NOT IN ('pending') AND NOT (p.status = 'open' AND p.expires_at > NOW())
      END
      ORDER BY p.created_at DESC LIMIT 200
    `;
    return NextResponse.json({ summary, posts });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 503 });
  try {
    const { action, id, note } = await req.json();
    const rowId = Number(id);
    if (!Number.isInteger(rowId) || rowId <= 0) return NextResponse.json({ error: 'id required' }, { status: 400 });
    await ensureWantedTables();
    const sql = await getSql();
    const adminNote = note ? String(note).slice(0, 500) : null;

    if (action === 'approve' || action === 'reopen') {
      const done = await sql`
        UPDATE wanted_posts
        SET status = 'open', approved_at = NOW(), expires_at = NOW() + make_interval(days => ${WANTED_DAYS}::int), closed_at = NULL
        WHERE id = ${rowId} AND (status <> 'open' OR expires_at <= NOW())
        RETURNING id, title, user_id, (SELECT email FROM users WHERE users.id = wanted_posts.user_id) AS email
      `;
      if (!done.length) return NextResponse.json({ error: 'Already live.' }, { status: 400 });
      const emailed = await sendWantedApproved({ to: String(done[0].email), id: rowId, title: String(done[0].title) }).catch(() => false);
      return NextResponse.json({ ok: true, emailed });
    }
    if (action === 'reject' || action === 'remove') {
      const status = action === 'reject' ? 'rejected' : 'removed';
      const done = await sql`
        UPDATE wanted_posts SET status = ${status}, admin_note = COALESCE(${adminNote}, admin_note), closed_at = NOW()
        WHERE id = ${rowId} RETURNING id
      `;
      if (!done.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
