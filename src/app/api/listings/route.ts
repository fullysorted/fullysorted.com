import { NextRequest, NextResponse } from 'next/server';
import { FREE_LISTINGS_THRESHOLD } from '@/lib/listing-tiers';
import { rateLimit } from '@/lib/rate-limit';

// Cap free-text input to prevent abuse / DB bloat / content-injection payloads.
const cap = (v: unknown, n: number): string | null => {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  return s ? s.slice(0, n) : null;
};

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
    const rawListings = await sql`
      SELECT * FROM listings
      WHERE status = 'active'
      ORDER BY featured DESC, created_at DESC
    `;
    // SECURITY: strip internal moderation columns from the public payload.
    const listings = rawListings.map((row: Record<string, unknown>) => {
      const { admin_notes, denied_reason, ...pub } = row;
      void admin_notes; void denied_reason;
      return pub;
    });

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
  // Abuse control: cap listing-creation rate per client (spam / content injection).
  const limited = rateLimit(request, 'listings', 10, 60_000);
  if (limited) return limited;
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
        ${parseInt(year)}, ${cap(make, 60)}, ${cap(model, 60)}, ${cap(trim, 60)},
        ${parseInt(price)}, ${mileage ? parseInt(mileage) : null},
        ${cap(transmission, 40)}, ${cap(engine, 80)}, ${cap(drivetrain, 40)},
        ${cap(exteriorColor, 40)}, ${cap(interiorColor, 40)},
        ${cap(bodyStyle, 40)}, ${cap(category, 40)},
        ${cap(city, 80)}, ${cap(state, 40)}, ${cap(zipCode, 12)},
        ${cap(description, 8000)}, ${cap(aiDescription, 8000)},
        ${JSON.stringify((Array.isArray(highlights) ? highlights : []).slice(0, 20).map((h: unknown) => String(h).slice(0, 200)))}, ${cap(chrisTake, 4000)},
        ${JSON.stringify((Array.isArray(photos) ? photos : []).slice(0, 40).map((p: unknown) => String(p).slice(0, 500)))}, ${photos?.[0] ? String(photos[0]).slice(0, 500) : null},
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
