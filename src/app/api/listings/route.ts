import { NextRequest, NextResponse } from 'next/server';

// For now, use in-memory storage until Neon is connected
// This will be replaced with Drizzle queries once DATABASE_URL is set
const tempListings: Record<string, unknown>[] = [];

function slugify(year: number, make: string, model: string): string {
  const base = `${year}-${make}-${model}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const suffix = Math.random().toString(36).substring(2, 8);
  return `${base}-${suffix}`;
}

export async function GET() {
  // Return sample listings + any submitted ones
  return NextResponse.json({ listings: tempListings });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { year, make, model, trim, price, mileage, transmission, engine, drivetrain, exteriorColor, interiorColor, bodyStyle, category, city, state, zipCode, description, aiDescription, highlights, chrisTake, photos } = body;

    // Validate required fields
    if (!year || !make || !model || !price) {
      return NextResponse.json(
        { error: 'Year, make, model, and price are required' },
        { status: 400 }
      );
    }

    const slug = slugify(parseInt(year), make, model);

    const listing = {
      id: tempListings.length + 1,
      slug,
      year: parseInt(year),
      make,
      model,
      trim,
      price: parseInt(price),
      mileage: mileage ? parseInt(mileage) : null,
      transmission,
      engine,
      drivetrain,
      exteriorColor,
      interiorColor,
      bodyStyle,
      category,
      city,
      state,
      zipCode,
      description,
      aiDescription,
      highlights: highlights || [],
      chrisTake,
      photos: photos || [],
      heroPhoto: photos?.[0] || null,
      status: 'pending',
      featured: false,
      sortedPrice: false,
      createdAt: new Date().toISOString(),
    };

    tempListings.push(listing);

    return NextResponse.json({ listing, message: 'Listing created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Create listing error:', error);
    return NextResponse.json(
      { error: 'Failed to create listing' },
      { status: 500 }
    );
  }
}
