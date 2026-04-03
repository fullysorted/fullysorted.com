import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';

// âââ GET /api/providers/me ââââââââââââââââââââââââââââââ
// Get the current user's provider profile
export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = getDb();
    const [provider] = await db
      .select()
      .from(schema.serviceProviders)
      .where(eq(schema.serviceProviders.clerkUserId, userId))
      .limit(1);

    if (!provider) {
      return NextResponse.json({ provider: null });
    }

    return NextResponse.json({ provider });
  } catch (error) {
    console.error('Fetch my provider profile error:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

// âââ PUT /api/providers/me ââââââââââââââââââââââââââââââ
// Update the current user's provider profile
export async function PUT(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const db = getDb();

    // Find existing profile
    const [existing] = await db
      .select()
      .from(schema.serviceProviders)
      .where(eq(schema.serviceProviders.clerkUserId, userId))
      .limit(1);

    if (!existing) {
      return NextResponse.json({ error: 'No provider profile found' }, { status: 404 });
    }

    const body = await request.json();
    const {
      businessName, ownerName, category, location,
      phone, website, instagram,
      description, specialties, yearsInBusiness, priceRange,
    } = body;

    // Only allow editing certain fields (not email, status, verified, etc.)
    const [updated] = await db
      .update(schema.serviceProviders)
      .set({
        ...(businessName && { businessName }),
        ...(ownerName && { ownerName }),
        ...(category && { category }),
        ...(location && { location }),
        ...(phone !== undefined && { phone }),
        ...(website !== undefined && { website }),
        ...(instagram !== undefined && { instagram }),
        ...(description && { description }),
        ...(specialties && { specialties }),
        ...(yearsInBusiness !== undefined && { yearsInBusiness }),
        ...(priceRange && { priceRange }),
        updatedAt: new Date(),
      })
      .where(eq(schema.serviceProviders.clerkUserId, userId))
      .returning();

    return NextResponse.json({ provider: updated, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Update provider profile error:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
