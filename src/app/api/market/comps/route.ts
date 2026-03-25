import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const year = parseInt(searchParams.get('year') || '0');
  const make = searchParams.get('make')?.toLowerCase().trim() || '';
  const model = searchParams.get('model')?.toLowerCase().trim() || '';
  const yearRange = parseInt(searchParams.get('yearRange') || '3');

  if (!year || !make || !model) {
    return NextResponse.json({ error: 'year, make, and model are required' }, { status: 400 });
  }

  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ comps: [], total: 0, avgPrice: null, source: 'no_db' });
    }

    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    const comps = await sql`
      SELECT
        id, source, lot_title, year, make, model, trim,
        sale_price, auction_date, auction_house, mileage,
        transmission, exterior_color, thumbnail_url, source_url, sold
      FROM auction_results
      WHERE
        LOWER(make) = ${make}
        AND LOWER(model) LIKE ${`%${model.split(' ')[0]}%`}
        AND year BETWEEN ${year - yearRange} AND ${year + yearRange}
        AND sold = true
        AND sale_price IS NOT NULL
        AND sale_price > 1000
      ORDER BY auction_date DESC
      LIMIT 50
    `;

    const prices = comps.filter(c => c.sale_price).map(c => c.sale_price as number);
    const avgPrice = prices.length > 0 ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length) : null;
    const medianPrice = prices.length > 0 ? prices.sort((a, b) => a - b)[Math.floor(prices.length / 2)] : null;
    const highPrice = prices.length > 0 ? Math.max(...prices) : null;
    const lowPrice = prices.length > 0 ? Math.min(...prices) : null;

    return NextResponse.json({
      comps,
      total: comps.length,
      avgPrice,
      medianPrice,
      highPrice,
      lowPrice,
      source: 'auction_results',
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, comps: [], total: 0 }, { status: 500 });
  }
}
