import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getDb, schema } from '@/lib/db';
import { eq, sql } from 'drizzle-orm';
import { rateLimit } from '@/lib/rate-limit';
import { isBlobImageUrl, PHOTO_REQUIRED_MESSAGE } from '@/lib/images';
import { normalizeWorkSettings, normalizeTeamSize, radiusForSettings } from '@/lib/work-settings';

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
        // provider_type is DEPRECATED and deliberately NOT selected: it used to
        // split this directory into "shops" and "freelancers", an answer about
        // legal form that was wrong on every live row. work_settings is what
        // replaced it.
        workSettings: schema.serviceProviders.workSettings,
        teamSize: schema.serviceProviders.teamSize,
        serviceRadiusMiles: schema.serviceProviders.serviceRadiusMiles,
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
    // NOT an empty array. Returning [] made a database outage indistinguishable
    // from "nobody has signed up", which on a directory that is just filling up
    // reads as churn — and hides the outage from us entirely.
    return NextResponse.json(
      { error: 'Could not load the directory right now.', providers: [] },
      { status: 503 }
    );
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
      priceRange, avatarUrl, workSettings, teamSize, serviceRadiusMiles,
    } = body;

    if (!businessName || !ownerName || !category || !location || !email || !description) {
      return NextResponse.json(
        { error: 'Business name, owner name, category, location, email, and description are required' },
        { status: 400 }
      );
    }

    // A photo is required here for the same reason it is required in the /team
    // console: a directory card without one is a card nobody clicks, and half
    // a directory with photos looks worse than none. Blob-host only — an
    // arbitrary URL would 500 the profile page at render time.
    if (!isBlobImageUrl(avatarUrl)) {
      return NextResponse.json({ error: PHOTO_REQUIRED_MESSAGE }, { status: 400 });
    }

    // SECURITY: bind ownership to the authenticated session only — never trust a
    // client-supplied clerkUserId. Null for anonymous applications.
    const { userId } = await auth();

    const db = getDb();

    // Refuse a second listing for a business we already hold.
    //
    // This route had no duplicate check at all, while /api/team/providers has
    // had one all along — so the commonest failure was our own doing: a shop
    // onboarded by phone signs up, the dashboard can't match them (their row
    // has no clerk_user_id), it offers "Apply to Be Listed", and they end up
    // with two listings on two slugs. The answer is not a second row, it's the
    // account-link flow, so point them at it.
    const [duplicate] = await db
      .select({ id: schema.serviceProviders.id, slug: schema.serviceProviders.slug })
      .from(schema.serviceProviders)
      // Exclude rows the link flow will refuse to mint for (rejected listings
      // and shops that asked to be removed). Without this a declined shop that
      // later changed its mind was blocked from applying AND could never get a
      // link — a permanent dead end with no way forward.
      .where(sql`LOWER(${schema.serviceProviders.email}) = ${String(email).trim().toLowerCase()}
                 AND COALESCE(${schema.serviceProviders.status}, '') <> 'rejected'
                 AND COALESCE(${schema.serviceProviders.outreachStatus}, '') <> 'declined'`)
      .limit(1);
    if (duplicate) {
      return NextResponse.json(
        {
          error:
            'There is already a listing using that email address. Rather than creating a second one, we can send that address a link to manage the existing listing.',
          duplicate: true,
          linkRequest: true,
        },
        { status: 409 },
      );
    }

    // One rule for this, in lib/work-settings — a radius is only ever stored
    // on a row that says it travels.
    const radiusMiles = radiusForSettings(workSettings, serviceRadiusMiles);

    // Create slug from business name
    const slug = businessName
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      + '-' + Math.random().toString(36).substring(2, 8);

    // Save application record.
    //
    // The inserted id has to be captured. Without it the provider row below was
    // written with a null application_id, and /api/admin/providers' "keep the
    // application row in sync" UPDATE ran `WHERE id = NULL` — matching nothing.
    // Every application therefore sat at 'pending' forever no matter what the
    // admin did to the listing.
    const [application] = await db.insert(schema.providerApplications).values({
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
    }).returning({ id: schema.providerApplications.id });

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
      avatarUrl: String(avatarUrl),
      // Whitelisted, not trusted — these render as factual claims on a public
      // business profile, so an unrecognised value is dropped, not stored.
      workSettings: normalizeWorkSettings(workSettings),
      teamSize: normalizeTeamSize(teamSize),
      serviceRadiusMiles: radiusMiles,
      verified: false,
      foundingProvider: false, // TODO: check count for founding badge
      status: 'pending',
      applicationId: application?.id ?? null,
    }).returning();

    // The application row above is already durable and shows in /admin/providers,
    // so a failed notification is not data loss — but it must not be invisible.
    try {
      const { notifyNewProviderApplication } = await import('@/lib/email');
      const emailed = await notifyNewProviderApplication({
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
      if (!emailed) {
        console.error('[submission] provider application: notification not sent (application IS stored)');
      }
    } catch (emailErr) {
      console.error('[submission] provider application: notification threw (application IS stored)', emailErr);
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
