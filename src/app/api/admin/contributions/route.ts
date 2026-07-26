import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin review for owner contributions to model histories.
 * GET  ?status=pending|approved|rejected  — list
 * POST { id, action: 'approve' | 'reject', adminNote? }
 *
 * Approving is what makes text public, so it is the only path that sets
 * published_at. Nothing here ever edits the cited research itself — if a
 * correction is right, Chris still updates the model page deliberately.
 */
function isAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('fs_admin')?.value;
  const header = req.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ contributions: [], noDb: true });

  const status = new URL(req.url).searchParams.get('status') || 'pending';
  const sql = await getSql();
  try {
    const contributions = await sql`
      SELECT c.*, m.make, m.model, m.slug
      FROM model_contributions c
      JOIN vehicle_models m ON m.id = c.model_id
      WHERE c.status = ${status}
      ORDER BY c.created_at DESC
      LIMIT 300
    `;
    const counts = await sql`
      SELECT status, COUNT(*)::int AS n FROM model_contributions GROUP BY status
    `;
    return NextResponse.json({ contributions, counts });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message, contributions: [] }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  try {
    const { id, action, adminNote } = await req.json();
    if (!id || !['approve', 'reject'].includes(action)) {
      return NextResponse.json({ error: 'id and action required' }, { status: 400 });
    }
    const sql = await getSql();
    const status = action === 'approve' ? 'approved' : 'rejected';
    const rows = (await sql`
      UPDATE model_contributions
      SET status = ${status},
          admin_note = COALESCE(${adminNote ?? null}, admin_note),
          reviewed_at = NOW(),
          published_at = CASE WHEN ${status} = 'approved' THEN NOW() ELSE NULL END
      WHERE id = ${Number(id)}
      RETURNING id, status
    `) as { id: number; status: string }[];
    if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, ...rows[0] });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message || 'Failed' }, { status: 500 });
  }
}
