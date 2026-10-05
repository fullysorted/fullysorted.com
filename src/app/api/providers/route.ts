import { normalizeFocus, normalizeLogoKind, normalizeLogoUrl } from '@/lib/provider-images';
import { NextRequest, NextResponse } from 'next/server';
import { normalizeExtraCategories } from '@/lib/service-categories';
import { auth } from '@clerk/nextjs/server';
import { getDb, schema } from '@/lib/db';
import { and, eq, sql } from 'drizzle-orm';
import { rateLimit } from '@/lib/rate-limit';
import { isMuse } from '@/lib/muse-auth';
import { isBlobImageUrl, PHOTO_REQUIRED_MESSAGE } from '@/lib/images';
import { normalizeWorkSettings, normalizeTeamSize, radiusForSettings } from '@/lib/work-settings';

// Cap a free-text field to a sane length to prevent abuse / DB bloat.
import { formatBusinessName, formatLocation } from '@/lib/provider-format';

const cap = (v: unknown, n: number): string | null => {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  return s ? s.slice(0, n) : null;
};

// ─── GET /api/providers ─────────────────────────────────
// Returns active service providers for the directory.
//
// Query params (all optional, 2026-10-05):
//   q=        server-side search on name, location, description, specialties
//   category= headline category OR one of the extra service_types
//   limit=    hard cap; default 500, max 500. With q, default 20.
//   fields=card  the slim shape the directory card and the claim search
//             actually render. The default (full) shape stays for callers
//             that predate this and for the Muse connector.
//
// The directory still filters client-side today, but at 500 shops a full
// payload on every visit is a megabyte on a phone; the slim shape is about
// half the bytes and the cap means it can never grow without bound.
//
// SECURITY: select an explicit PUBLIC column set only. Never expose
// claim_token (grants listing takeover/deletion), clerk_user_id,
// email, phone, stripe_connect_id, or outreach_status on this public route.
const MAX_ROWS = 500;

export async function GET(request: NextRequest) {
  try {
    const db = getDb();
    const sp = request.nextUrl.searchParams;
    const q = (sp.get('q') || '').trim().slice(0, 80);
    const category = (sp.get('category') || '').trim().slice(0, 40);
    const slim = sp.get('fields') === 'card';
    const askedLimit = Number(sp.get('limit'));
    const limit = Math.min(
      MAX_ROWS,
      Number.isInteger(askedLimit) && askedLimit > 0 ? askedLimit : q ? 20 : MAX_ROWS,
    );

    const conditions = [eq(schema.serviceProviders.status, 'active')];
    if (q) {
      const like = `%${q.replace(/[%_\\]/g, '\\$&')}%`;
      conditions.push(sql`(
        ${schema.serviceProviders.businessName} ILIKE ${like}
        OR ${schema.serviceProviders.location} ILIKE ${like}
        OR ${schema.serviceProviders.description} ILIKE ${like}
        OR ${schema.serviceProviders.specialties}::text ILIKE ${like}
      )`);
    }
    if (category) {
      conditions.push(sql`(
        ${schema.serviceProviders.category} = ${category}
        OR COALESCE(${schema.serviceProviders.serviceTypes}, '[]'::jsonb) ? ${category}::text
      )`);
    }

    const providers = await db
      .select({
        id: schema.serviceProviders.id,
        businessName: schema.serviceProviders.businessName,
        ownerName: schema.serviceProviders.ownerName,
        slug: schema.serviceProviders.slug,
        category: schema.serviceProviders.category,
        location: schema.serviceProviders.location,
        phone: schema.serviceProviders.phone, // business contact, members only (stripped below for signed-out requests)
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
        serviceTypes: schema.serviceProviders.serviceTypes,
        teamSize: schema.serviceProviders.teamSize,
        serviceRadiusMiles: schema.serviceProviders.serviceRadiusMiles,
        headline: schema.serviceProviders.headline,
        skills: schema.serviceProviders.skills,
        serviceArea: schema.serviceProviders.serviceArea,
        hourlyRate: schema.serviceProviders.hourlyRate,
        avatarUrl: schema.serviceProviders.avatarUrl,
        logoUrl: schema.serviceProviders.logoUrl,
        logoKind: schema.serviceProviders.logoKind,
        bannerFocus: schema.serviceProviders.bannerFocus,
        createdAt: schema.serviceProviders.createdAt,
      })
      .from(schema.serviceProviders)
      .where(and(...conditions))
      .limit(limit);

    // Contact details are for signed-in members only; everyone else gets the
    // inquiry form. Must match the gate on /services/[slug].
    let signedIn = false;
    try {
      signedIn = Boolean((await auth()).userId);
    } catch {
      signedIn = false;
    }

    const rows = providers.map((p) => {
      const base = signedIn ? p : { ...p, phone: null, website: null, instagram: null };
      if (!slim) return base;
      // The card shape: what ProviderCard, the homepage strip and the claim
      // search render, and nothing else. Description is clamped to two lines
      // on screen, so 240 characters is already more than shows.
      const {
        id, businessName, slug, category, location, rating, reviewCount, foundingProvider,
        workSettings, serviceTypes, specialties, priceRange, avatarUrl, logoUrl, logoKind,
        bannerFocus, phone, website, instagram,
      } = base;
      return {
        id, businessName, slug, category, location, rating, reviewCount, foundingProvider,
        workSettings, serviceTypes, specialties, priceRange, avatarUrl, logoUrl, logoKind,
        bannerFocus, phone, website, instagram,
        description: (base.description || '').slice(0, 240),
      };
    });

    return NextResponse.json({ providers: rows, truncated: providers.length >= limit });
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
  // Muse skill requests (x-muse-key) get a generous bucket; everything still
  // lands pending for admin review.
  const muse = isMuse(request);
  const limited = rateLimit(request, muse ? 'apply-provider:muse' : 'apply-provider', muse ? 120 : 5, 60_000);
  if (limited) return limited;
  try {
    const body = await request.json();
    const {
      businessName, ownerName, category, location, email,
      phone, website, instagram, yearsInBusiness,
      specialties, description, idealClient, whyList, referredBy,
      priceRange, avatarUrl, workSettings, teamSize, serviceRadiusMiles,
      serviceTypes, logoUrl, logoKind, bannerFocus,
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
    // The mark is optional; one we do not host is refused, not silently dropped.
    const logo = normalizeLogoUrl(logoUrl ?? null);
    if (!logo.ok) {
      return NextResponse.json({ error: 'The logo must be uploaded here, not linked from another site.' }, { status: 400 });
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
      businessName: cap(formatBusinessName(String(businessName)), 255)!,
      ownerName: cap(ownerName, 255)!,
      slug,
      category: cap(category, 100)!,
      location: cap(formatLocation(String(location)), 255)!,
      email: cap(email, 255)!,
      phone: cap(phone, 50),
      website: cap(website, 500),
      instagram: cap(instagram, 100),
      description: cap(description, 4000)!,
      specialties: specialtiesArray.slice(0, 30).map((s: string) => String(s).slice(0, 80)),
      yearsInBusiness: cap(yearsInBusiness, 50),
      priceRange: priceRange || '$$',
      avatarUrl: String(avatarUrl),
      bannerFocus: normalizeFocus(bannerFocus),
      logoUrl: logo.value,
      logoKind: logo.value ? normalizeLogoKind(logoKind) : null,
      // Whitelisted, not trusted — these render as factual claims on a public
      // business profile, so an unrecognised value is dropped, not stored.
      workSettings: normalizeWorkSettings(workSettings),
      serviceTypes: normalizeExtraCategories(serviceTypes, String(category)),
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
