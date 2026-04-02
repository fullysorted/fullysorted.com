import { NextRequest, NextResponse } from 'next/server';
import { createListing, tempListings, getStats, slugify } from '@/lib/listing-store';

export async function GET() {
  const stats = getStats();
  return NextResponse.json({ listings: tempListings, ...stats });
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

    const listing = createListing({
      slug: slugify(parseInt(year), make, model),
      tier: tier || 'standard',
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
      featured: tier === 'featured' || tier === 'premium',
      sortedPrice: false,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { listing, message: 'Listing created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create listing error:', error);
    return NextResponse.json({ error: 'Failed to create listing' }, { status: 500 });
  }
}
