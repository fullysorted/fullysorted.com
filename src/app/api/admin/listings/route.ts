import { NextRequest, NextResponse } from 'next/server';

function isAdmin(request: NextRequest): boolean {
  const secret = request.cookies.get('fs_admin')?.value;
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

// GET /api/admin/listings — all listings with filters
export async function GET(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || 'all';
  const search = searchParams.get('q') || '';
  const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100);
  const offset = parseInt(searchParams.get('offset') || '0');

  let rows;
  if (status !== 'all' && search) {
    rows = await sql`
      SELECT l.*, u.name AS seller_name, u.email AS seller_email,
        (SELECT COUNT(*) FROM messages WHERE listing_id = l.id)::int AS message_count
      FROM listings l
      LEFT JOIN users u ON l.seller_id = u.id
      WHERE l.status = ${status}
        AND (l.make ILIKE ${'%' + search + '%'} OR l.model ILIKE ${'%' + search + '%'} OR l.slug ILIKE ${'%' + search + '%'})
      ORDER BY l.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (status !== 'all') {
    rows = await sql`
      SELECT l.*, u.name AS seller_name, u.email AS seller_email,
        (SELECT COUNT(*) FROM messages WHERE listing_id = l.id)::int AS message_count
      FROM listings l
      LEFT JOIN users u ON l.seller_id = u.id
      WHERE l.status = ${status}
      ORDER BY l.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (search) {
    rows = await sql`
      SELECT l.*, u.name AS seller_name, u.email AS seller_email,
        (SELECT COUNT(*) FROM messages WHERE listing_id = l.id)::int AS message_count
      FROM listings l
      LEFT JOIN users u ON l.seller_id = u.id
      WHERE l.make ILIKE ${'%' + search + '%'} OR l.model ILIKE ${'%' + search + '%'} OR l.slug ILIKE ${'%' + search + '%'}
      ORDER BY l.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else {
    rows = await sql`
      SELECT l.*, u.name AS seller_name, u.email AS seller_email,
        (SELECT COUNT(*) FROM messages WHERE listing_id = l.id)::int AS message_count
      FROM listings l
      LEFT JOIN users u ON l.seller_id = u.id
      ORDER BY l.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  }

  return NextResponse.json({ listings: rows });
}

// PATCH /api/admin/listings — update a listing (status, notes, sold price, featured)
export async function PATCH(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const body = await request.json();
  const { id, status, adminNotes, deniedReason, soldPrice, featured, price, chrisTake } = body;

  if (!id) {
    return NextResponse.json({ error: 'id required' }, { status: 400 });
  }

  // Build dynamic update
  const updates: Record<string, unknown> = { updated_at: new Date() };
  if (status !== undefined) updates.status = status;
  if (adminNotes !== undefined) updates.admin_notes = adminNotes;
  if (deniedReason !== undefined) updates.denied_reason = deniedReason;
  if (soldPrice !== undefined) updates.sold_price = soldPrice;
  if (featured !== undefined) updates.featured = featured;
  if (price !== undefined) updates.price = price;
  if (chrisTake !== undefined) updates.chris_take = chrisTake;

  // Set published_at when going active
  if (status === 'active') updates.published_at = new Date();
  // Set sold_at when marking sold
  if (status === 'sold') updates.sold_at = new Date();

  const result = await sql`
    UPDATE listings SET
      status = COALESCE(${updates.status as string | null}, status),
      admin_notes = COALESCE(${updates.admin_notes as string | null}, admin_notes),
      denied_reason = COALESCE(${updates.denied_reason as string | null}, denied_reason),
      sold_price = COALESCE(${updates.sold_price as number | null}, sold_price),
      featured = COALESCE(${updates.featured as boolean | null}, featured),
      price = COALESCE(${updates.price as number | null}, price),
      chris_take = COALESCE(${updates.chris_take as string | null}, chris_take),
      published_at = CASE WHEN ${status} = 'active' AND published_at IS NULL THEN NOW() ELSE published_at END,
      sold_at = CASE WHEN ${status} = 'sold' AND sold_at IS NULL THEN NOW() ELSE sold_at END,
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `;

  if (!result.length) {
    return NextResponse.json({ error: 'Listing not found' }, { status: 404 });
  }

  return NextResponse.json({ listing: result[0] });
}
