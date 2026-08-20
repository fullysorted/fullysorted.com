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

  // A missing year is a legitimate query ("what does a 911 go for?"), and both
  // the research model pages and the bare search form link here without one.
  // Treat it as an all-years search rather than an error.
  const allYears = !year;
  if (!make || !model) {
    return NextResponse.json({ error: 'make and model are required' }, { status: 400 });
  }

  try {
    if (!process.env.DATABASE_URL) {
      // Must NOT return a well-formed empty result: the UI would render it as
      // "no comparable sales on record", which tells the user the car has no
      // history when the truth is that we never got as far as looking.
      return NextResponse.json(
        { error: 'The comp database is unavailable right now. Please try again shortly.', comps: [], total: 0, source: 'no_db' },
        { status: 503 }
      );
    }

    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    const firstWord = model.split(' ')[0];

    // Match the model column OR the lot title. The seed/ingest schema puts the
    // variant in `trim` ("993" + "Carrera 4S"), so a perfectly reasonable search
    // for "993 Carrera 4S" matched nothing on `model` alone and fell through to
    // the whole 993 family without saying so.
    async function query(modelPattern: string, range: number): Promise<Row[]> {
      return (await sql`
        SELECT
          id, source, lot_title, year, make, model, trim,
          sale_price, auction_date, auction_house, mileage,
          transmission, exterior_color, thumbnail_url, source_url, sold
        FROM auction_results
        WHERE
          LOWER(make) = ${make}
          AND (
            LOWER(model) LIKE ${modelPattern}
            OR LOWER(COALESCE(model, '') || ' ' || COALESCE("trim", '')) LIKE ${modelPattern}
            OR LOWER(COALESCE(lot_title, '')) LIKE ${modelPattern}
          )
          AND year BETWEEN ${allYears ? 1900 : year - range} AND ${allYears ? 2100 : year + range}
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
    //
    // This used to require eight comps before it would run, which is exactly
    // backwards: a small set is where one outlier does the most damage. A
    // four-comp 1965 Corvette set containing a $3.85M L88 returned a mean of
    // $1,039,500 against a median of $118,000 — and that search is linked
    // straight off the homepage. Four is enough to identify a car that does
    // not belong with the others.
    let typicalAvgPrice: number | null = null;
    let typicalLow: number | null = null;
    let typicalHigh: number | null = null;
    let outliersExcluded = 0;
    /** Mean is unsafe to show when one lot has dragged it away from the median. */
    let meanSkewed = false;
    if (prices.length >= 4) {
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

    // Even after the IQR pass, flag any set where the raw mean is more than
    // 1.8x the median so the UI can lead with the median and label the mean
    // honestly rather than printing "Average $1,039,500" with a straight face.
    if (avgPrice && medianPrice && medianPrice > 0) {
      meanSkewed = avgPrice / medianPrice >= 1.8;
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
      meanSkewed,
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
