import { NextResponse } from 'next/server';

export const revalidate = 300; // cache 5 min

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ trending: [], hot: [] });
    }

    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    // Most viewed active listings
    const trending = await sql`
      SELECT id, slug, year, make, model, trim, price, mileage,
             hero_photo, category, views, city, state, created_at
      FROM listings
      WHERE status = 'active'
      ORDER BY views DESC, created_at DESC
      LIMIT 10
    `;

    // Hot deals from BaT RSS (recent, not yet expired)
    const hot = await sql`
      SELECT id, title, source_url, year, make, model, image_url, source_site, created_at
      FROM deal_alerts
      WHERE status IN ('new', 'hot')
        AND created_at > NOW() - INTERVAL '14 days'
      ORDER BY created_at DESC
      LIMIT 20
    `;

    return NextResponse.json({ trending, hot });
  } catch (error: any) {
    return NextResponse.json({ trending: [], hot: [], error: error.message });
  }
}
