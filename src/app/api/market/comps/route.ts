import { NextRequest, NextResponse } from 'next/server';

/**
 * Market comps for the Value Guide.
 *
 * Robustness improvements (2026-07-23):
 * - Tiered matching: exact-ish full-model match first, then first-word match,
 *   then automatic year-range widening when results are thin. The response
 *   reports which tier was used (matchTier) + the year range actually applied
 *   (yearRangeUsed) so the UI can be honest about it.
 * - Proper median (averages the two middle values on even counts).
 * - IQR outlier detection: avg is also computed on the IQR-filtered set
 *   (typicalAvgPrice / typicalLow / typicalHigh) so one $1M concours sale
 *   doesn't distort a driver-quality market. Raw high/low still returned.
 * - Data freshness: latestSaleDate / oldestSaleDate for a "data through" stamp.
 */

type Row = Record<string, unknown> & { sale_price: number; auction_date?: string };

function median(sorted: number[]): number | null {
  const n = sorted.length;
  if (!n) return null;
  const mid = Math.floor(n / 2);
  return n % 2 === 1 ? sorted[mid] : Math.round((sorted[mid - 1] + sorted[mid]) / 2);
}

function quartile(sorted: number[], q: number): number {
  const pos = (sorted.length - 1) * q;
  const base = Math.floor(pos);
  const rest = pos - base;
  return sorted[base + 1] !== undefined
    ? sorted[base] + rest * (sorted[base + 1] - sorted[base])
    : sorted[base];
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const year = parseInt(searchParams.get('year') || '0');
  const make = searchParams.get('make')?.toLowerCase().trim() || '';
  const model = searchParams.get('model')?.toLowerCase().trim() || '';
  const yearRange = Math.min(parseInt(searchParams.get('yearRange') || '3'), 10);

  if (!year || !make || !model) {
    return NextResponse.json({ error: 'year, make, and model are required' }, { status: 400 });
  }

  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ comps: [], total: 0, avgPrice: null, source: 'no_db' });
    }

    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    const firstWord = model.split(' ')[0];

    async function query(modelPattern: string, range: number): Promise<Row[]> {
      return (await sql`
        SELECT
          id, source, lot_title, year, make, model, trim,
          sale_price, auction_date, auction_house, mileage,
          transmission, exterior_color, thumbnail_url, source_url, sold
        FROM auction_results
        WHERE
          LOWER(make) = ${make}
          AND LOWER(model) LIKE ${modelPattern}
          AND year BETWEEN ${year - range} AND ${year + range}
          AND sold = true
          AND sale_price IS NOT NULL
          AND sale_price > 1000
        ORDER BY auction_date DESC
        LIMIT 50
      `) as Row[];
    }

    // Tier 1: full model string (tightest match, e.g. "911 carrera 4s")
    let comps = await query(`%${model}%`, yearRange);
    let matchTier: 'exact_model' | 'model_family' | 'widened_years' = 'exact_model';
    let yearRangeUsed = yearRange;

    // Tier 2: model family via first word (existing behavior, e.g. "911")
    if (comps.length < 3 && firstWord && firstWord !== model) {
      const fam = await query(`%${firstWord}%`, yearRange);
      if (fam.length > comps.length) {
        comps = fam;
        matchTier = 'model_family';
      }
    }

    // Tier 3: still thin — widen the year window (capped at ±8)
    if (comps.length < 3) {
      const widened = Math.min(Math.max(yearRange * 2, 6), 8);
      if (widened > yearRange) {
        const wide = await query(`%${firstWord}%`, widened);
        if (wide.length > comps.length) {
          comps = wide;
          matchTier = 'widened_years';
          yearRangeUsed = widened;
        }
      }
    }

    const prices = comps
      .filter((c) => c.sale_price)
      .map((c) => c.sale_price as number)
      .sort((a, b) => a - b);

    const avgPrice = prices.length
      ? Math.round(prices.reduce((a, b) => a + b, 0) / prices.length)
      : null;
    const medianPrice = median(prices);
    const highPrice = prices.length ? prices[prices.length - 1] : null;
    const lowPrice = prices.length ? prices[0] : null;

    // IQR filter — the "typical" market once outliers are set aside.
    let typicalAvgPrice: number | null = null;
    let typicalLow: number | null = null;
    let typicalHigh: number | null = null;
    let outliersExcluded = 0;
    if (prices.length >= 8) {
      const q1 = quartile(prices, 0.25);
      const q3 = quartile(prices, 0.75);
      const iqr = q3 - q1;
      const lo = q1 - 1.5 * iqr;
      const hi = q3 + 1.5 * iqr;
      const typical = prices.filter((p) => p >= lo && p <= hi);
      outliersExcluded = prices.length - typical.length;
      if (typical.length) {
        typicalAvgPrice = Math.round(typical.reduce((a, b) => a + b, 0) / typical.length);
        typicalLow = typical[0];
        typicalHigh = typical[typical.length - 1];
      }
    }

    // Freshness stamp
    const dates = comps
      .map((c) => (c.auction_date ? new Date(c.auction_date as string).getTime() : 0))
      .filter((t) => t > 0)
      .sort((a, b) => a - b);
    const latestSaleDate = dates.length ? new Date(dates[dates.length - 1]).toISOString() : null;
    const oldestSaleDate = dates.length ? new Date(dates[0]).toISOString() : null;

    // Best-effort link to a published Research model page for this make/model.
    let researchSlug: string | null = null;
    try {
      const rs = (await sql`
        SELECT slug FROM vehicle_models
        WHERE status = 'published' AND LOWER(make) = ${make}
          AND (LOWER(model) LIKE ${`%${firstWord}%`} OR LOWER(generation) LIKE ${`%${firstWord}%`})
        ORDER BY (year_start IS NULL) LIMIT 1
      `) as { slug: string }[];
      researchSlug = rs[0]?.slug ?? null;
    } catch { /* vehicle_models table may not exist yet */ }

    return NextResponse.json({
      comps,
      total: comps.length,
      avgPrice,
      medianPrice,
      highPrice,
      lowPrice,
      typicalAvgPrice,
      typicalLow,
      typicalHigh,
      outliersExcluded,
      latestSaleDate,
      oldestSaleDate,
      matchTier,
      yearRangeUsed,
      source: 'auction_results',
      researchSlug,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Query failed';
    return NextResponse.json({ error: message, comps: [], total: 0 }, { status: 500 });
  }
}
