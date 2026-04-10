import { NextRequest, NextResponse } from 'next/server';

function isAdmin(request: NextRequest): boolean {
  const secret = request.cookies.get('fs_admin')?.value;
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

// GET /api/admin/providers — all service providers with optional status filter + search
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
  const limit = Math.min(parseInt(searchParams.get('limit') || '100'), 200);
  const offset = parseInt(searchParams.get('offset') || '0');

  let rows;
  if (status !== 'all' && search) {
    const term = `%${search}%`;
    rows = await sql`
      SELECT * FROM service_providers
      WHERE status = ${status}
        AND (business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term})
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (status !== 'all') {
    rows = await sql`
      SELECT * FROM service_providers
      WHERE status = ${status}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (search) {
    const term = `%${search}%`;
    rows = await sql`
      SELECT * FROM service_providers
      WHERE business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else {
    rows = await sql`
      SELECT * FROM service_providers
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  }

  // Aggregate counts for header chips
  const counts = await sql`
    SELECT status, COUNT(*)::int AS count
    FROM service_providers
    GROUP BY status
  `;

  return NextResponse.json({ providers: rows, counts });
}

// PATCH /api/admin/providers — update a provider (status, verified, founding, etc.)
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
  const { id, status, verified, foundingProvider, businessName, category, location, priceRange } = body;

  if (!id) {
    return NextResponse.json({ error: 'id required' }, { status: 400 });
  }

  const result = await sql`
    UPDATE service_providers SET
      status = COALESCE(${status ?? null}, status),
      verified = COALESCE(${verified ?? null}, verified),
      founding_provider = COALESCE(${foundingProvider ?? null}, founding_provider),
      business_name = COALESCE(${businessName ?? null}, business_name),
      category = COALESCE(${category ?? null}, category),
      location = COALESCE(${location ?? null}, location),
      price_range = COALESCE(${priceRange ?? null}, price_range),
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `;

  if (!result.length) {
    return NextResponse.json({ error: 'Provider not found' }, { status: 404 });
  }

  // Keep the matching application row in sync if status moved to approved/rejected
  if (status === 'active') {
    await sql`UPDATE provider_applications SET status = 'approved' WHERE id = ${result[0].application_id}`;
  } else if (status === 'rejected') {
    await sql`UPDATE provider_applications SET status = 'rejected' WHERE id = ${result[0].application_id}`;
  }

  return NextResponse.json({ provider: result[0] });
}

// DELETE /api/admin/providers?id=123 — hard delete (use sparingly)
export async function DELETE(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

  await sql`DELETE FROM service_providers WHERE id = ${parseInt(id)}`;
  return NextResponse.json({ success: true });
}
