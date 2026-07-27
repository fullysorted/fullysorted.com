import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 3600; // Cache 1 hour

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '20');

  try {
    if (!process.env.DATABASE_URL) {
      // Previously returned FALLBACK_SEGMENTS — hardcoded prices and trend
      // percentages that the UI presented to the public as market research.
      // Return nothing rather than invent figures on a site whose pitch is
      // honest comps.
      return NextResponse.json({ segments: [], source: 'no_db' });
    }

    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    // Get latest snapshot per segment from market_data
    const rows = await sql`
      SELECT DISTINCT ON (segment_key)
        segment, segment_key, avg_price, median_price, high_price, low_price,
        sale_count, trend_percent::float, trend_direction, data_source, recorded_at, category
      FROM market_data
      WHERE segment_key IS NOT NULL
      ORDER BY segment_key, recorded_at DESC
    `;

    if (rows.length < 5) {
      // Fall back to live aggregation from auction_results
      const live = await sql`
        SELECT
          segment,
          LOWER(REPLACE(REPLACE(segment, ' ', '_'), '/', '_')) AS segment_key,
          ROUND(AVG(sale_price))::int AS avg_price,
          ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY sale_price))::int AS median_price,
          MAX(sale_price)::int AS high_price,
          MIN(sale_price)::int AS low_price,
          COUNT(*)::int AS sale_count
        FROM auction_results
        WHERE sold = true AND sale_price > 1000 AND segment IS NOT NULL
        GROUP BY segment
        HAVING COUNT(*) >= 3
        ORDER BY sale_count DESC
        LIMIT ${limit}
      `;

      if (live.length > 0) {
        return NextResponse.json({ segments: live, source: 'live_aggregate' });
      }

      // No snapshots and nothing aggregatable yet — say so rather than serving
      // hardcoded prices as market research.
      return NextResponse.json({ segments: [], source: 'insufficient_data' });
    }

    let segments = rows;
    if (category) {
      // Filter by joining with auction_results category
      segments = rows.filter(r => r.category === category);
    }

    // Date the data rather than let the UI imply it is live.
    const latest = rows
      .map((r) => r.recorded_at)
      .filter(Boolean)
      .sort()
      .pop();
    const asOf = latest
      ? new Date(latest as string).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      : null;

    return NextResponse.json({ segments: segments.slice(0, limit), source: 'market_data', as_of: asOf });
  } catch (error: unknown) {
    // Previously fell back to FALLBACK_SEGMENTS — twenty hardcoded segments
    // with invented prices and trend percentages, served to the public as
    // market research on any transient DB error. An empty result is the only
    // honest answer here; the UI already hides the section when it gets one.
    console.error('GET /api/market failed:', error);
    return NextResponse.json({ segments: [], source: 'error' }, { status: 200 });
  }
}
