import { NextRequest, NextResponse } from 'next/server';
import { FREE_LISTINGS_THRESHOLD } from '@/lib/listing-tiers';

function slugify(year: number, make: string, model: string): string {
  const base = `${year}-${make}-${model}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const suffix = Math.random().toString(36).substring(2, 8);
  return `${base}-${suffix}`;
}

async function getDbSql() {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL not set');
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL);
}

export async function GET() {
  try {
    const sql = await getDbSql();

    // Fetch active listings
    const listings = await sql`
      SELECT * FROM listings
      WHERE status = 'active'
      ORDER BY featured DESC, created_at DESC
    `;

    // Get total count for early adopter tracking
    const [{ total }] = await sql`SELECT COUNT(*)::int AS total FROM listings`;
    const totalCreated = Number(total);
    const spotsRemaining = Math.max(0, FREE_LISTINGS_THRESHOLD - totalCreated);

    return NextResponse.json({
      listings,
      totalListings: totalCreated,
      earlyAdopterSpotsRemaining: spotsRemaining,
      isEarlyAdopterActive: spotsRemaining > 0,
    });
  } catch (error: unknown) {
    console.error('Get listings error:', error);
    // Graceful fallback — DB not ready yet
    return NextResponse.json({
      listings: [],
      totalListings: 0,
      earlyAdopterSpotsRemaining: 100,
      isEarlyAdopterActive: true,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      year, make, model, trim, price, mileage, transmission, engine,
      drivetrain, exteriorColor, interiorColor, bodyStyle, category,
      city, state, zipCode, description, aiDescription, highlights,
      chrisTake, photos, tier,
    } = body;

    if (!year || !make || !model || !price) {
      return NextResponse.json(
        { error: 'Year, make, model, and price are required' },
        { status: 400 }
      );
    }

    const sql = await getDbSql();

    // Determine early adopter status
    const [{ total }] = await sql`SELECT COUNT(*)::int AS total FROM listings`;
    const totalCreated = Number(total);
    const isFreeEarlyAdopter = totalCreated < FREE_LISTINGS_THRESHOLD;
    const slug = slugify(parseInt(year), make, model);
    const selectedTier = tier || 'standard';
    const isFeatured = selectedTier === 'featured' || selectedTier === 'premium';

    const [listing] = await sql`
      INSERT INTO listings (
        slug, tier, is_free_early_adopter, year, make, model, trim,
        price, mileage, transmission, engine, drivetrain,
        exterior_color, interior_color, body_style, category,
        city, state, zip_code, description, ai_description,
        highlights, chris_take, photos, hero_photo,
        status, featured, sorted_price
      ) VALUES (
        ${slug}, ${selectedTier}, ${isFreeEarlyAdopter},
        ${parseInt(year)}, ${make}, ${model}, ${trim ?? null},
        ${parseInt(price)}, ${mileage ? parseInt(mileage) : null},
        ${transmission ?? null}, ${engine ?? null}, ${drivetrain ?? null},
        ${exteriorColor ?? null}, ${interiorColor ?? null},
        ${bodyStyle ?? null}, ${category ?? null},
        ${city ?? null}, ${state ?? null}, ${zipCode ?? null},
        ${description ?? null}, ${aiDescription ?? null},
        ${JSON.stringify(highlights ?? [])}, ${chrisTake ?? null},
        ${JSON.stringify(photos ?? [])}, ${photos?.[0] ?? null},
        'pending', ${isFeatured}, false
      )
      RETURNING *
    `;

    return NextResponse.json(
      { listing, message: 'Listing created successfully' },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Create listing error:', error);
    return NextResponse.json({ error: 'Failed to create listing' }, { status: 500 });
  }
}
