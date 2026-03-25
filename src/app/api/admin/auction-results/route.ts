import { NextRequest, NextResponse } from 'next/server';

function isAdmin(request: NextRequest): boolean {
  const secret = request.cookies.get('fs_admin')?.value;
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

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
  const limit = Math.min(parseInt(searchParams.get('limit') || '200'), 500);
  const offset = parseInt(searchParams.get('offset') || '0');
  const search = searchParams.get('q') || '';
  const segment = searchParams.get('segment') || '';

  let rows;
  if (search && segment) {
    rows = await sql`
      SELECT * FROM auction_results
      WHERE segment = ${segment}
        AND (lot_title ILIKE ${'%' + search + '%'} OR make ILIKE ${'%' + search + '%'} OR model ILIKE ${'%' + search + '%'})
      ORDER BY auction_date DESC NULLS LAST
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (search) {
    rows = await sql`
      SELECT * FROM auction_results
      WHERE lot_title ILIKE ${'%' + search + '%'} OR make ILIKE ${'%' + search + '%'} OR model ILIKE ${'%' + search + '%'}
      ORDER BY auction_date DESC NULLS LAST
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (segment) {
    rows = await sql`
      SELECT * FROM auction_results WHERE segment = ${segment}
      ORDER BY auction_date DESC NULLS LAST
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else {
    rows = await sql`
      SELECT * FROM auction_results
      ORDER BY auction_date DESC NULLS LAST
      LIMIT ${limit} OFFSET ${offset}
    `;
  }

  return NextResponse.json({ results: rows });
}

// POST — manually add an auction result
export async function POST(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const body = await request.json();
  const {
    source, sourceUrl, lotTitle, year, make, model, trim, mileage, transmission,
    exteriorColor, salePrice, sold, auctionDate, auctionHouse, thumbnailUrl,
    segment, category, notes
  } = body;

  if (!lotTitle || !year || !make || !model) {
    return NextResponse.json({ error: 'lotTitle, year, make, model required' }, { status: 400 });
  }

  const result = await sql`
    INSERT INTO auction_results (
      source, source_url, lot_title, year, make, model, trim, mileage, transmission,
      exterior_color, sale_price, sold, auction_date, auction_house, thumbnail_url,
      segment, category, notes
    ) VALUES (
      ${source || 'manual'}, ${sourceUrl || null}, ${lotTitle}, ${year}, ${make}, ${model},
      ${trim || null}, ${mileage || null}, ${transmission || null}, ${exteriorColor || null},
      ${salePrice || null}, ${sold !== false}, ${auctionDate || null}, ${auctionHouse || null},
      ${thumbnailUrl || null}, ${segment || null}, ${category || null}, ${notes || null}
    )
    RETURNING *
  `;

  return NextResponse.json({ result: result[0] });
}
