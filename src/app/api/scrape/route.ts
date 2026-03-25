import { NextRequest, NextResponse } from 'next/server';

// BaT RSS item structure
interface BaTItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  imageUrl: string;
  year: number | null;
  make: string;
  model: string;
}

function parseYear(title: string): number | null {
  const m = title.match(/\b(19[0-9]{2}|20[0-2][0-9])\b/);
  return m ? parseInt(m[1]) : null;
}

function parseMakeModel(title: string): { make: string; model: string } {
  // Strip year and leading junk, e.g. "9k-Mile 2004 Porsche 911 Carrera 4S"
  const clean = title.replace(/^[^A-Z]*\d{4}\s+/, '').trim();
  const parts = clean.split(' ');
  const make = parts[0] || 'Unknown';
  const model = parts.slice(1, 3).join(' ') || 'Unknown';
  return { make, model };
}

function parseRSSFeed(xml: string): BaTItem[] {
  const items: BaTItem[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    const titleMatch = item.match(/<title>(?:<!\[CDATA\[)?(.*?)(?:\]\]>)?<\/title>/);
    const linkMatch = item.match(/<link>(https?[^<]+)<\/link>/);
    const pubDateMatch = item.match(/<pubDate>(.*?)<\/pubDate>/);
    const descMatch = item.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/);
    const imgMatch = item.match(/url="(https:\/\/bringatrailer\.com\/wp-content\/uploads\/[^"]+\.jpg[^"]*)"/);

    const title = titleMatch?.[1]?.replace(/&amp;/g, '&').replace(/&#8217;/g, "'") || '';
    const link = linkMatch?.[1] || '';

    if (!title || !link) continue;

    const { make, model } = parseMakeModel(title);

    items.push({
      title,
      link,
      pubDate: pubDateMatch?.[1] || '',
      description: descMatch?.[1]?.substring(0, 500) || '',
      imageUrl: imgMatch?.[1]?.split('?')[0] || '',
      year: parseYear(title),
      make,
      model,
    });
  }

  return items;
}

async function scrapeBaTRSS(): Promise<{ inserted: number; skipped: number }> {
  const response = await fetch('https://bringatrailer.com/feed/', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'application/rss+xml, text/xml, */*',
    },
    next: { revalidate: 0 },
  });

  if (!response.ok) throw new Error(`BaT RSS returned ${response.status}`);
  const xml = await response.text();
  const items = parseRSSFeed(xml);

  if (!process.env.DATABASE_URL) return { inserted: 0, skipped: items.length };

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  let inserted = 0;
  let skipped = 0;

  for (const item of items) {
    // Upsert: skip if URL already exists
    try {
      const existing = await sql`
        SELECT id FROM deal_alerts WHERE source_url = ${item.link} LIMIT 1
      `;
      if (existing.length > 0) { skipped++; continue; }

      await sql`
        INSERT INTO deal_alerts (source_url, source_site, title, year, make, model, image_url, status, created_at)
        VALUES (
          ${item.link},
          'bat',
          ${item.title},
          ${item.year},
          ${item.make},
          ${item.model},
          ${item.imageUrl || null},
          'new',
          NOW()
        )
        ON CONFLICT (source_url) DO NOTHING
      `;
      inserted++;
    } catch {
      skipped++;
    }
  }

  return { inserted, skipped };
}

async function refreshMarketSegments(): Promise<void> {
  if (!process.env.DATABASE_URL) return;
  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  // Recompute segment averages from auction_results
  const segments = await sql`
    SELECT
      segment,
      COUNT(*)::int AS sale_count,
      ROUND(AVG(sale_price))::int AS avg_price,
      ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY sale_price))::int AS median_price,
      MAX(sale_price)::int AS high_price,
      MIN(sale_price)::int AS low_price
    FROM auction_results
    WHERE sold = true
      AND sale_price IS NOT NULL
      AND sale_price > 1000
      AND segment IS NOT NULL
      AND auction_date > NOW() - INTERVAL '3 years'
    GROUP BY segment
    HAVING COUNT(*) >= 3
    ORDER BY sale_count DESC
  `;

  // Also compute 12-month trend vs prior 12 months
  for (const seg of segments) {
    const trend = await sql`
      SELECT
        ROUND(AVG(CASE WHEN auction_date > NOW() - INTERVAL '1 year' THEN sale_price END))::int AS recent_avg,
        ROUND(AVG(CASE WHEN auction_date BETWEEN NOW() - INTERVAL '2 years' AND NOW() - INTERVAL '1 year' THEN sale_price END))::int AS prior_avg
      FROM auction_results
      WHERE segment = ${seg.segment} AND sold = true AND sale_price IS NOT NULL
    `;

    const recentAvg = trend[0]?.recent_avg;
    const priorAvg = trend[0]?.prior_avg;
    let trendPct = 0;
    let trendDir = 'flat';

    if (recentAvg && priorAvg && priorAvg > 0) {
      trendPct = ((recentAvg - priorAvg) / priorAvg) * 100;
      trendDir = trendPct > 1 ? 'up' : trendPct < -1 ? 'down' : 'flat';
    }

    await sql`
      INSERT INTO market_data (segment, segment_key, avg_price, median_price, high_price, low_price, sale_count, trend_percent, trend_direction, data_source, recorded_at)
      VALUES (
        ${seg.segment},
        ${seg.segment.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '')},
        ${seg.avg_price},
        ${seg.median_price},
        ${seg.high_price},
        ${seg.low_price},
        ${seg.sale_count},
        ${trendPct.toFixed(2)},
        ${trendDir},
        'auction_results_aggregate',
        NOW()
      )
      ON CONFLICT DO NOTHING
    `;
  }
}

// POST /api/scrape — protected, called by cron or admin
export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-admin-secret') || request.headers.get('authorization')?.replace('Bearer ', '');

  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const [batResult] = await Promise.allSettled([scrapeBaTRSS()]);
    await refreshMarketSegments();

    return NextResponse.json({
      success: true,
      timestamp: new Date().toISOString(),
      bat: batResult.status === 'fulfilled' ? batResult.value : { error: (batResult as PromiseRejectedResult).reason?.message },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET — public health check
export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ status: 'no_db' });
  }
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const [{ count }] = await sql`SELECT COUNT(*)::int as count FROM deal_alerts`;
    const [{ segments }] = await sql`SELECT COUNT(DISTINCT segment)::int as segments FROM auction_results WHERE segment IS NOT NULL`;
    const [{ results }] = await sql`SELECT COUNT(*)::int as results FROM auction_results`;
    return NextResponse.json({ status: 'ok', dealAlerts: count, auctionResults: results, segments });
  } catch (e: any) {
    return NextResponse.json({ status: 'error', error: e.message });
  }
}
