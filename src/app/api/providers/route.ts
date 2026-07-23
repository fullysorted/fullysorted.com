import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { rateLimit } from '@/lib/rate-limit';

// Cap a free-text field to a sane length to prevent abuse / DB bloat.
const cap = (v: unknown, n: number): string | null => {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  return s ? s.slice(0, n) : null;
};

// ─── GET /api/providers ─────────────────────────────────
// Returns all active service providers for the directory.
// SECURITY: select an explicit PUBLIC column set only. Never expose
// claim_token (grants listing takeover/deletion), clerk_user_id,
// email, phone, stripe_connect_id, or outreach_status on this public route.
export async function GET() {
  try {
    const db = getDb();
    const providers = await db
      .select({
        id: schema.serviceProviders.id,
        businessName: schema.serviceProviders.businessName,
        ownerName: schema.serviceProviders.ownerName,
        slug: schema.serviceProviders.slug,
        category: schema.serviceProviders.category,
        location: schema.serviceProviders.location,
        phone: schema.serviceProviders.phone, // business contact — intended for the public directory
        description: schema.serviceProviders.description,
        specialties: schema.serviceProviders.specialties,
        yearsInBusiness: schema.serviceProviders.yearsInBusiness,
        priceRange: schema.serviceProviders.priceRange,
        website: schema.serviceProviders.website,
        instagram: schema.serviceProviders.instagram,
        rating: schema.serviceProviders.rating,
        reviewCount: schema.serviceProviders.reviewCount,
        foundingProvider: schema.serviceProviders.foundingProvider,
        providerType: schema.serviceProviders.providerType,
        headline: schema.serviceProviders.headline,
        skills: schema.serviceProviders.skills,
        serviceArea: schema.serviceProviders.serviceArea,
        hourlyRate: schema.serviceProviders.hourlyRate,
        avatarUrl: schema.serviceProviders.avatarUrl,
        createdAt: schema.serviceProviders.createdAt,
      })
      .from(schema.serviceProviders)
      .where(eq(schema.serviceProviders.status, 'active'));

    return NextResponse.json({ providers });
  } catch (error) {
    console.error('Fetch providers error:', error);
    // Fallback: return empty array so directory still renders
    return NextResponse.json({ providers: [] });
  }
}

// ─── POST /api/providers ────────────────────────────────
// Submit a new provider application & create pending profile
export async function POST(request: NextRequest) {
  // Abuse control: throttle anonymous application spam.
  const limited = rateLimit(request, 'apply-provider', 5, 60_000);
  if (limited) return limited;
  try {
    const body = await request.json();
    const {
      businessName, ownerName, category, location, email,
      phone, website, instagram, yearsInBusiness,
      specialties, description, idealClient, whyList, referredBy,
      priceRange,
    } = body;

    if (!businessName || !ownerName || !category || !location || !email || !description) {
      return NextResponse.json(
        { error: 'Business name, owner name, category, location, email, and description are required' },
        { status: 400 }
      );
    }

    // SECURITY: bind ownership to the authenticated session only — never trust a
    // client-supplied clerkUserId. Null for anonymous applications.
    const { userId } = await auth();

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
      clerkUserId: userId || null,
      businessName: cap(businessName, 255)!,
      ownerName: cap(ownerName, 255)!,
      slug,
      category: cap(category, 100)!,
      location: cap(location, 255)!,
      email: cap(email, 255)!,
      phone: cap(phone, 50),
      website: cap(website, 500),
      instagram: cap(instagram, 100),
      description: cap(description, 4000)!,
      specialties: specialtiesArray.slice(0, 30).map((s: string) => String(s).slice(0, 80)),
      yearsInBusiness: cap(yearsInBusiness, 50),
      priceRange: priceRange || '$$',
      verified: false,
      foundingProvider: false, // TODO: check count for founding badge
      status: 'pending',
    }).returning();

    // Notify Chris of the new application
    try {
      const { notifyNewProviderApplication } = await import('@/lib/email');
      await notifyNewProviderApplication({
        businessName,
        ownerName,
        category,
        location,
        email,
        phone: phone || undefined,
        website: website || undefined,
        instagram: instagram || undefined,
        specialties: typeof specialties === 'string' ? specialties : (specialties || []).join(', '),
        whyList: whyList || undefined,
        referredBy: referredBy || undefined,
      });
    } catch (emailErr) {
      console.error('Failed to send provider application email:', emailErr);
    }

    return NextResponse.json(
      { provider, message: 'Application submitted successfully! We\'ll review it within 3-5 business days.' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create provider error:', error);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}
