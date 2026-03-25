import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ listing: null });
  }

  try {
    const { getDb, schema } = await import('@/lib/db');
    const { eq } = await import('drizzle-orm');
    const db = getDb();

    const [listing] = await db
      .select()
      .from(schema.listings)
      .where(eq(schema.listings.slug, slug))
      .limit(1);

    return NextResponse.json({ listing: listing ?? null });
  } catch (error: any) {
    console.error('Get listing error:', error?.message || error);
    return NextResponse.json({ listing: null });
  }
}
