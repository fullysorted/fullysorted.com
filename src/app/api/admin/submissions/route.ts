import { NextRequest, NextResponse } from 'next/server';
import { upsertResults } from '@/lib/server/ingestResults';

function isAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('fs_admin')?.value;
  const header = req.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

// GET — list submissions (default pending).
export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ submissions: [] });
  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);
  const status = new URL(req.url).searchParams.get('status') || 'pending';
  const rows = await sql`
    SELECT * FROM sale_submissions WHERE status = ${status} ORDER BY created_at DESC LIMIT 300
  `;
  return NextResponse.json({ submissions: rows });
}

// POST — { id, action: 'approve' | 'reject' }. Approve ingests via the shared core.
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });
  try {
    const { id, action } = await req.json();
    if (!id || !['approve', 'reject'].includes(action)) return NextResponse.json({ error: 'id and action required' }, { status: 400 });

    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const [sub] = await sql`SELECT * FROM sale_submissions WHERE id = ${Number(id)} LIMIT 1`;
    if (!sub) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    if (action === 'reject') {
      await sql`UPDATE sale_submissions SET status = 'rejected', reviewed_at = NOW() WHERE id = ${Number(id)}`;
      return NextResponse.json({ ok: true, status: 'rejected' });
    }

    // Approve → normalize + upsert into auction_results via the shared ingest core.
    const result = await upsertResults([{
      source: 'user-submitted',
      external_id: `sub-${sub.id}`,
      make: sub.make, model: sub.model, year: sub.year, trim: sub.trim, vin: sub.vin,
      sale_price: sub.sale_price, currency: sub.currency, sold: true,
      auction_date: sub.sale_date, auction_house: sub.venue, mileage: sub.mileage,
      exterior_color: sub.exterior_color, location: sub.location, source_url: sub.source_url,
      notes: sub.notes,
    }], 'user-submitted');
    await sql`UPDATE sale_submissions SET status = 'approved', reviewed_at = NOW() WHERE id = ${Number(id)}`;
    return NextResponse.json({ ok: true, status: 'approved', ingested: result });
  } catch (e) {
    console.error('submission review error:', e);
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Action failed' }, { status: 500 });
  }
}
