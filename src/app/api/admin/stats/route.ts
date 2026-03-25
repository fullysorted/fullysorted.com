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

  const [
    listingStats,
    messageStats,
    auctionStats,
    marketStats,
    recentMessages,
    recentListings,
    topListings,
  ] = await Promise.all([
    sql`
      SELECT
        COUNT(*)::int AS total,
        COUNT(CASE WHEN status = 'active' THEN 1 END)::int AS active,
        COUNT(CASE WHEN status = 'pending' THEN 1 END)::int AS pending,
        COUNT(CASE WHEN status = 'sold' THEN 1 END)::int AS sold,
        COUNT(CASE WHEN status = 'denied' THEN 1 END)::int AS denied,
        COUNT(CASE WHEN status = 'draft' THEN 1 END)::int AS draft,
        COALESCE(SUM(views), 0)::int AS total_views,
        COALESCE(SUM(CASE WHEN status = 'sold' THEN sold_price ELSE 0 END), 0)::int AS total_sold_value
      FROM listings
    `,
    sql`
      SELECT
        COUNT(*)::int AS total,
        COUNT(CASE WHEN status = 'new' THEN 1 END)::int AS unread,
        COUNT(CASE WHEN type = 'offer' THEN 1 END)::int AS offers,
        COUNT(CASE WHEN created_at > NOW() - INTERVAL '24 hours' THEN 1 END)::int AS today
      FROM messages
    `,
    sql`SELECT COUNT(*)::int AS total FROM auction_results`,
    sql`SELECT COUNT(*)::int AS total, COUNT(DISTINCT segment)::int AS segments FROM market_data`,
    sql`
      SELECT id, sender_name, sender_email, listing_title, type, offer_amount, status, created_at
      FROM messages
      ORDER BY created_at DESC
      LIMIT 8
    `,
    sql`
      SELECT id, slug, year, make, model, trim, price, status, views, created_at
      FROM listings
      ORDER BY created_at DESC
      LIMIT 8
    `,
    sql`
      SELECT id, slug, year, make, model, trim, price, views
      FROM listings
      WHERE status = 'active'
      ORDER BY views DESC
      LIMIT 5
    `,
  ]);

  return NextResponse.json({
    listings: listingStats[0],
    messages: messageStats[0],
    auctionResults: auctionStats[0],
    market: marketStats[0],
    recentMessages,
    recentListings,
    topListings,
  });
}
