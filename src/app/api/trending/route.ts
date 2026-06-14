import { NextResponse } from 'next/server';

export const revalidate = 300; // cache 5 min

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ trending: [], hot: [] });
    }

    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    // Most viewed active listings (first-party data)
    const trending = await sql`
      SELECT id, slug, year, make, model, trim, price, mileage,
             hero_photo, category, views, city, state, created_at
      FROM listings
      WHERE status = 'active'
      ORDER BY views DESC, created_at DESC
      LIMIT 10
    `;

    // Disabled — do not surface externally-scraped third-party (competitor) listings;
    // pending licensed data partnership. Return first-party data only.
    const hot: unknown[] = [];

    return NextResponse.json({ trending, hot });
  } catch (error: any) {
    return NextResponse.json({ trending: [], hot: [], error: error.message });
  }
}
