import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';

// ─── GET /api/providers/me ──────────────────────────────
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

// ─── PUT /api/providers/me ──────────────────────────────
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
      avatarUrl, headline, serviceArea, skills, hourlyRate,
      acceptingWork, marques, serviceTypes, minJobValue, serviceRadiusMiles,
    } = body;

    // ── Work preferences ────────────────────────────────────────────────
    // Bounded here rather than trusted: marques render on a public page, and
    // an unbounded list would be a paste-anything field on someone else's site.
    const strList = (v: unknown, maxItems: number, maxLen: number): string[] | undefined => {
      if (!Array.isArray(v)) return undefined;
      return v
        .filter((x): x is string => typeof x === 'string')
        .map((x) => x.trim().slice(0, maxLen))
        .filter(Boolean)
        .slice(0, maxItems);
    };
    // Null clears the field; a number is clamped to something sane. A shop
    // typing 999999 into "minimum job" has made a mistake, not a statement.
    const num = (v: unknown, max: number): number | null | undefined => {
      if (v === null || v === '') return null;
      if (v === undefined) return undefined;
      const n = typeof v === 'number' ? v : parseInt(String(v).replace(/[^0-9]/g, ''), 10);
      if (!Number.isFinite(n) || n < 0) return undefined;
      return Math.min(Math.round(n), max);
    };
    const marquesClean = strList(marques, 25, 40);
    const serviceTypesClean = strList(serviceTypes, 12, 40);
    const minJobClean = num(minJobValue, 1_000_000);
    const radiusClean = num(serviceRadiusMiles, 3_000);

    // Only allow editing certain fields (not email, status, verified, etc.)
    //
    // NOTE the WHERE below is `id = existing.id`, NOT `clerkUserId = userId`.
    // It used to be the latter, which updates EVERY row the user owns. That is
    // not hypothetical: until the duplicate guards landed, a provider who
    // submitted the apply form twice owned two rows, and one save from this
    // dashboard overwrote both listings with a single business's details.
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
        // Photo is REQUIRED on both cold-apply paths but was never settable
        // here, so a listing claimed by its owner could never get one. The
        // freelancer fields were in the same position.
        ...(avatarUrl !== undefined && { avatarUrl }),
        ...(headline !== undefined && { headline }),
        ...(serviceArea !== undefined && { serviceArea }),
        ...(skills && { skills }),
        ...(hourlyRate !== undefined && { hourlyRate }),
        // Work preferences. acceptingWork is a real boolean or nothing —
        // `...(x && {})` would make "false" unsettable, which is the only value
        // that matters here.
        ...(typeof acceptingWork === 'boolean' && { acceptingWork }),
        ...(marquesClean !== undefined && { marques: marquesClean }),
        ...(serviceTypesClean !== undefined && { serviceTypes: serviceTypesClean }),
        ...(minJobClean !== undefined && { minJobValue: minJobClean }),
        ...(radiusClean !== undefined && { serviceRadiusMiles: radiusClean }),
        updatedAt: new Date(),
      })
      .where(eq(schema.serviceProviders.id, existing.id))
      .returning();

    return NextResponse.json({ provider: updated, message: 'Profile updated successfully' });
  } catch (error) {
    console.error('Update provider profile error:', error);
    return NextResponse.json({ error: 'Failed to update profile' }, { status: 500 });
  }
}
