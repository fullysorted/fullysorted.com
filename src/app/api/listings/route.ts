import { NextRequest, NextResponse } from 'next/server';

function slugify(year: number, make: string, model: string): string {
  const base = `${year}-${make}-${model}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const suffix = Math.random().toString(36).substring(2, 8);
  return `${base}-${suffix}`;
}

export async function GET() {
  try {
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ listings: [] });
    }

    const { getDb, schema } = await import('@/lib/db');
    const { eq, desc } = await import('drizzle-orm');
    const db = getDb();

    const listings = await db
      .select()
      .from(schema.listings)
      .where(eq(schema.listings.status, 'active'))
      .orderBy(desc(schema.listings.createdAt))
      .limit(100);

    return NextResponse.json({ listings });
  } catch (error: any) {
    console.error('Get listings error:', error?.message || error);
    return NextResponse.json({ listings: [] });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      year, make, model, trim, price, mileage, transmission, engine, drivetrain,
      exteriorColor, interiorColor, bodyStyle, category, city, state, zipCode,
      description, aiDescription, highlights,
      chrisTake, expertTake, // accept both field names
      photos, heroPhoto,
    } = body;

    if (!year || !make || !model || !price) {
      return NextResponse.json(
        { error: 'Year, make, model, and price are required' },
        { status: 400 }
      );
    }

    const slug = slugify(parseInt(year), make, model);
    const christake = chrisTake || expertTake || null;

    if (!process.env.DATABASE_URL) {
      // Dev fallback — return a mock listing so the checkout flow can continue
      return NextResponse.json({
        listing: {
          id: Math.floor(Math.random() * 10000),
          slug,
          year: parseInt(year),
          make,
          model,
          price: parseInt(price),
          status: 'pending',
          createdAt: new Date().toISOString(),
        },
        message: 'Listing created (dev mode — not persisted to DB)',
      }, { status: 201 });
    }

    const { getDb, schema } = await import('@/lib/db');
    const db = getDb();

    const [listing] = await db
      .insert(schema.listings)
      .values({
        slug,
        year: parseInt(year),
        make,
        model,
        trim: trim || null,
        price: parseInt(price),
        mileage: mileage ? parseInt(mileage) : null,
        transmission: transmission || null,
        engine: engine || null,
        drivetrain: drivetrain || null,
        exteriorColor: exteriorColor || null,
        interiorColor: interiorColor || null,
        bodyStyle: bodyStyle || null,
        category: category || null,
        city: city || null,
        state: state || null,
        zipCode: zipCode || null,
        description: description || null,
        aiDescription: aiDescription || null,
        highlights: highlights || [],
        chrisTake: christake,
        photos: photos || [],
        heroPhoto: heroPhoto || (photos?.[0] ?? null),
        status: 'pending',
        featured: false,
        sortedPrice: false,
      })
      .returning();

    return NextResponse.json(
      { listing, message: 'Listing created successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Create listing error:', error?.message || error);
    return NextResponse.json(
      { error: error?.message || 'Failed to create listing' },
      { status: 500 }
    );
  }
}
