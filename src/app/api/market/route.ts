import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 3600; // Cache 1 hour

// Fallback data when DB not connected
const FALLBACK_SEGMENTS = [
  { segment: 'Air-Cooled Porsche 911', segmentKey: 'air_cooled_911', avgPrice: 72400, medianPrice: 64000, highPrice: 385000, lowPrice: 22000, saleCount: 847, trendPercent: -2.8, trendDirection: 'down', category: 'European' },
  { segment: 'BMW M3 E30', segmentKey: 'e30_m3', avgPrice: 89200, medianPrice: 82000, highPrice: 210000, lowPrice: 48000, saleCount: 134, trendPercent: 4.1, trendDirection: 'up', category: 'European' },
  { segment: 'Ford Mustang 1st Gen (1964–1973)', segmentKey: 'mustang_gen1', avgPrice: 44800, medianPrice: 38000, highPrice: 320000, lowPrice: 8000, saleCount: 1240, trendPercent: -1.9, trendDirection: 'down', category: 'Muscle' },
  { segment: 'Chevrolet Camaro 1st Gen (1967–1969)', segmentKey: 'camaro_gen1', avgPrice: 52300, medianPrice: 44000, highPrice: 440000, lowPrice: 12000, saleCount: 612, trendPercent: -0.8, trendDirection: 'flat', category: 'Muscle' },
  { segment: 'Toyota Supra MK4 (JZA80)', segmentKey: 'supra_mk4', avgPrice: 118000, medianPrice: 98000, highPrice: 380000, lowPrice: 42000, saleCount: 89, trendPercent: 6.2, trendDirection: 'up', category: 'JDM' },
  { segment: 'Nissan GT-R R34', segmentKey: 'gtr_r34', avgPrice: 264000, medianPrice: 220000, highPrice: 620000, lowPrice: 95000, saleCount: 43, trendPercent: 9.4, trendDirection: 'up', category: 'JDM' },
  { segment: 'Honda NSX (NA1/NA2)', segmentKey: 'nsx_na', avgPrice: 142000, medianPrice: 128000, highPrice: 290000, lowPrice: 58000, saleCount: 172, trendPercent: 5.8, trendDirection: 'up', category: 'JDM' },
  { segment: 'Datsun 240Z / 260Z / 280Z', segmentKey: 'datsun_z', avgPrice: 46800, medianPrice: 38000, highPrice: 310000, lowPrice: 8000, saleCount: 384, trendPercent: 3.2, trendDirection: 'up', category: 'JDM' },
  { segment: 'Ferrari 308 / 328 GTS', segmentKey: 'ferrari_308_328', avgPrice: 98400, medianPrice: 88000, highPrice: 260000, lowPrice: 42000, saleCount: 218, trendPercent: -1.4, trendDirection: 'down', category: 'European' },
  { segment: 'Jaguar E-Type', segmentKey: 'etype', avgPrice: 112000, medianPrice: 94000, highPrice: 1800000, lowPrice: 28000, saleCount: 289, trendPercent: 0.6, trendDirection: 'flat', category: 'European' },
  { segment: 'Mercedes-Benz W113 Pagoda (280SL)', segmentKey: 'pagoda_280sl', avgPrice: 118000, medianPrice: 104000, highPrice: 340000, lowPrice: 44000, saleCount: 156, trendPercent: 1.8, trendDirection: 'up', category: 'European' },
  { segment: 'Porsche 356', segmentKey: 'porsche_356', avgPrice: 138000, medianPrice: 112000, highPrice: 1200000, lowPrice: 28000, saleCount: 198, trendPercent: 2.4, trendDirection: 'up', category: 'European' },
  { segment: 'Chevrolet Corvette C2 (1963–1967)', segmentKey: 'corvette_c2', avgPrice: 96800, medianPrice: 82000, highPrice: 3850000, lowPrice: 24000, saleCount: 428, trendPercent: -0.4, trendDirection: 'flat', category: 'Muscle' },
  { segment: 'Lamborghini Countach', segmentKey: 'countach', avgPrice: 520000, medianPrice: 420000, highPrice: 3800000, lowPrice: 140000, saleCount: 62, trendPercent: 8.2, trendDirection: 'up', category: 'European' },
  { segment: 'Volkswagen Golf GTI Mk1', segmentKey: 'gti_mk1', avgPrice: 34200, medianPrice: 28000, highPrice: 128000, lowPrice: 8000, saleCount: 112, trendPercent: 7.6, trendDirection: 'up', category: 'European' },
  { segment: 'BMW 2002 / 2002tii', segmentKey: 'bmw_2002', avgPrice: 38400, medianPrice: 32000, highPrice: 280000, lowPrice: 6000, saleCount: 262, trendPercent: 2.1, trendDirection: 'up', category: 'European' },
  { segment: 'Ford Bronco 1st Gen (1966–1977)', segmentKey: 'bronco_gen1', avgPrice: 88000, medianPrice: 72000, highPrice: 385000, lowPrice: 22000, saleCount: 284, trendPercent: -3.2, trendDirection: 'down', category: 'Truck / SUV' },
  { segment: 'Land Rover Defender 90/110', segmentKey: 'defender', avgPrice: 72000, medianPrice: 58000, highPrice: 285000, lowPrice: 18000, saleCount: 198, trendPercent: 1.4, trendDirection: 'up', category: 'Truck / SUV' },
  { segment: 'Mazda RX-7 FD3S', segmentKey: 'rx7_fd', avgPrice: 48600, medianPrice: 42000, highPrice: 188000, lowPrice: 12000, saleCount: 144, trendPercent: 8.9, trendDirection: 'up', category: 'JDM' },
  { segment: 'Porsche 993 (1994–1998)', segmentKey: 'porsche_993', avgPrice: 146000, medianPrice: 124000, highPrice: 780000, lowPrice: 58000, saleCount: 312, trendPercent: -1.2, trendDirection: 'down', category: 'European' },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const limit = parseInt(searchParams.get('limit') || '20');

  try {
    if (!process.env.DATABASE_URL) {
      let segments = FALLBACK_SEGMENTS;
      if (category) segments = segments.filter(s => s.category === category);
      return NextResponse.json({ segments: segments.slice(0, limit), source: 'fallback' });
    }

    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    // Get latest snapshot per segment from market_data
    const rows = await sql`
      SELECT DISTINCT ON (segment_key)
        segment, segment_key, avg_price, median_price, high_price, low_price,
        sale_count, trend_percent::float, trend_direction, data_source, recorded_at
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

      // Use fallback
      let segments = FALLBACK_SEGMENTS;
      if (category) segments = segments.filter(s => s.category === category);
      return NextResponse.json({ segments: segments.slice(0, limit), source: 'fallback' });
    }

    let segments = rows;
    if (category) {
      // Filter by joining with auction_results category
      segments = rows.filter(r => r.category === category);
    }

    return NextResponse.json({ segments: segments.slice(0, limit), source: 'market_data' });
  } catch (error: any) {
    let segments = FALLBACK_SEGMENTS;
    if (category) segments = segments.filter(s => s.category === category);
    return NextResponse.json({ segments: segments.slice(0, limit), source: 'fallback', error: error.message });
  }
}
