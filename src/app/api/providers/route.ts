import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';

// âââ GET /api/providers âââââââââââââââââââââââââââââââââ
// Returns all active service providers for the directory
export async function GET() {
  try {
    const db = getDb();
    const providers = await db
      .select()
      .from(schema.serviceProviders)
      .where(eq(schema.serviceProviders.status, 'active'));

    return NextResponse.json({ providers });
  } catch (error) {
    console.error('Fetch providers error:', error);
    // Fallback: return empty array so directory still renders
    return NextResponse.json({ providers: [] });
  }
}

// âââ POST /api/providers ââââââââââââââââââââââââââââââââ
// Submit a new provider application & create pending profile
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      businessName, ownerName, category, location, email,
      phone, website, instagram, yearsInBusiness,
      specialties, description, idealClient, whyList, referredBy,
      priceRange, clerkUserId,
    } = body;

    if (!businessName || !ownerName || !category || !location || !email || !description) {
      return NextResponse.json(
        { error: 'Business name, owner name, category, location, email, and description are required' },
        { status: 400 }
      );
    }

    const db = getDb();

    // Create slug from business name
    const slug = businessName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      + '-' + Math.random().toString(36).substring(2, 8);

    // Save application record
    await db.insert(schema.providerApplications).values({
      businessName,
      ownerName,
      category,
      location,
      email,
      phone: phone || null,
      website: website || null,
      instagram: instagram || null,
      yearsInBusiness: yearsInBusiness || null,
      specialties: typeof specialties === 'string' ? specialties : (specialties || []).join(', '),
      idealClient: idealClient || null,
      whyList: whyList || null,
      referredBy: referredBy || null,
      status: 'pending',
    });

    // Create provider profile (pending until Chris approves)
    const specialtiesArray = typeof specialties === 'string'
      ? specialties.split(',').map((s: string) => s.trim()).filter(Boolean)
      : (specialties || []);

    const [provider] = await db.insert(schema.serviceProviders).values({
      clerkUserId: clerkUserId || null,
      businessName,
      ownerName,
      slug,
      category,
      location,
      email,
      phone: phone || null,
      website: website || null,
      instagram: instagram || null,
      description,
      specialties: specialtiesArray,
      yearsInBusiness: yearsInBusiness || null,
      priceRange: priceRange || '$$',
      verified: false,
      foundingProvider: false, // TODO: check count for founding badge
      status: 'pending',
    }).returning();

    return NextResponse.json(
      { provider, message: 'Application submitted successfully! We\'ll review it within 3-5 business days.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create provider error:', error);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
