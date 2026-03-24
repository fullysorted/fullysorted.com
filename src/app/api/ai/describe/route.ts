import { NextRequest, NextResponse } from 'next/server';
import { generateListingDescription } from '@/lib/ai/generate-description';

export async function POST(request: NextRequest) {
  try {
    // Check for API key
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'AI service not configured' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { year, make, model, trim, mileage, transmission, engine, exteriorColor, interiorColor, bodyStyle, condition, sellerNotes } = body;

    // Validate required fields
    if (!year || !make || !model) {
      return NextResponse.json(
        { error: 'Year, make, and model are required' },
        { status: 400 }
      );
    }

    const result = await generateListingDescription({
      year: parseInt(year),
      make,
      model,
      trim,
      mileage: mileage ? parseInt(mileage) : undefined,
      transmission,
      engine,
      exteriorColor,
      interiorColor,
      bodyStyle,
      condition,
      sellerNotes,
    });

    return NextResponse.json(result);
  } catch (error: any) {
    console.error('AI description error:', error?.message || error);
    return NextResponse.json(
      { error: error?.message || 'Failed to generate description' },
      { status: 500 }
    );
  }
}
