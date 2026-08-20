import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 3600; // Cache 1 hour

/**
 * A market segment is the same claim as a Value Guide search, made in a
 * smaller box, so it answers to the same rule.
 *
 * This was NOT true until now. `/research` printed an "Avg Price" column
 * straight from the row: the Chevrolet Corvette C2 segment showed an average of
 * $1,039,500 off four sales, because one of them is a $3.85M L88 — the exact
 * figure the Value Guide was fixed to suppress. Air-Cooled Porsche 911 showed
 * $171,583 against a $95,000 median and was on the homepage.
 */
const MIN_SEGMENT_SALES = 3;      // below this the segment is not a segment
const MIN_SEGMENT_MIDPOINT = 6;   // below this there is no midpoint to publish
const MEAN_SKEW_RATIO = 1.8;      // same threshold as /api/market/comps

type SegmentRow = Record<string, unknown>;

function shapeSegments(rows: SegmentRow[]): SegmentRow[] {
  return rows
    .filter((r) => Number(r.sale_count ?? 0) >= MIN_SEGMENT_SALES)
    .map((r) => {
      const n = Number(r.sale_count ?? 0);
      const median = r.median_price == null ? null : Number(r.median_price);
      const avg = r.avg_price == null ? null : Number(r.avg_price);
      const meanSkewed = !!(avg && median && median > 0 && avg / median >= MEAN_SKEW_RATIO);
      const hasMidpoint = n >= MIN_SEGMENT_MIDPOINT;
      return {
        ...r,
        sale_count: n,
        median_price: hasMidpoint ? median : null,
        avg_price: hasMidpoint && !meanSkewed ? avg : null,
        mean_skewed: meanSkewed,
        has_midpoint: hasMidpoint,
      };
    });
}

/**
 * How recent the DATA is, not when we happened to run the rollup. The snapshot
 * rows were recorded in March 2026 off sales that stop in December 2025, so
 * stamping the homepage with the snapshot date overstated freshness by four
 * months.
 */
async function newestSaleMonth(sql: (s: TemplateStringsArray, ...v: unknown[]) => Promise<Record<string, unknown>[]>): Promise<string | null> {
  try {
    const rows = await sql`SELECT MAX(auction_date) AS latest FROM auction_results WHERE sold = true`;
    const latest = rows[0]?.latest;
    if (!latest) return null;
    return new Date(latest as string).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  } catch {
    return null;
  }
}

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
        HAVING COUNT(*) >= ${MIN_SEGMENT_SALES}::int
        ORDER BY sale_count DESC
        LIMIT ${limit}
      `;

      const shapedLive = shapeSegments(live as SegmentRow[]);
      if (shapedLive.length > 0) {
        return NextResponse.json({
          segments: shapedLive,
          source: 'live_aggregate',
          as_of: await newestSaleMonth(sql),
        });
      }

      // No snapshots and nothing aggregatable yet — say so rather than serving
      // hardcoded prices as market research.
      return NextResponse.json({ segments: [], source: 'insufficient_data' });
    }

    let segments = shapeSegments(rows as SegmentRow[]);
    if (category) {
      // Filter by joining with auction_results category
      segments = segments.filter((r) => r.category === category);
    }

    // Date the data by the newest SALE behind it, not by when the rollup ran.
    const asOf = await newestSaleMonth(sql);
    const snapshotLatest = rows
      .map((r) => r.recorded_at)
      .filter(Boolean)
      .sort()
      .pop();

    return NextResponse.json({
      segments: segments.slice(0, limit),
      source: 'market_data',
      as_of: asOf,
      snapshot_taken: snapshotLatest
        ? new Date(snapshotLatest as string).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        : null,
    });
  } catch (error: unknown) {
    // Previously fell back to FALLBACK_SEGMENTS — twenty hardcoded segments
    // with invented prices and trend percentages, served to the public as
    // market research on any transient DB error. An empty result is the only
    // honest answer here; the UI already hides the section when it gets one.
    console.error('GET /api/market failed:', error);
    return NextResponse.json({ segments: [], source: 'error' }, { status: 200 });
  }
}
