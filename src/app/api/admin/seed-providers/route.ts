import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { CATEGORY_OPTIONS } from '@/lib/service-categories';

function isAdmin(request: NextRequest): boolean {
  const secret = request.cookies.get('fs_admin')?.value;
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function makeClaimToken(): string {
  // 32-byte URL-safe random — long enough that guessing is impossible
  return randomBytes(24).toString('base64url');
}

// POST /api/admin/seed-providers
// Body: { providers: Array<{ businessName, category, location, website?, yearsInBusiness?, description, specialties }> }
// Inserts each as a pending provider_application + matching pending service_provider row.
// Uses raw SQL to avoid drift between drizzle schema and the actual columns in Neon.
export async function POST(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  let body: { providers?: Array<Record<string, string>> };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const providers = body.providers ?? [];
  if (!Array.isArray(providers) || providers.length === 0) {
    return NextResponse.json({ error: 'No providers in body' }, { status: 400 });
  }

  // Idempotently ensure both tables exist (drizzle schema has them, but
  // production DB was never migrated). Safe to run repeatedly.
  await sql`
    CREATE TABLE IF NOT EXISTS provider_applications (
      id SERIAL PRIMARY KEY,
      business_name VARCHAR(255) NOT NULL,
      owner_name VARCHAR(255) NOT NULL,
      category VARCHAR(100) NOT NULL,
      location VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      website TEXT,
      instagram VARCHAR(100),
      years_in_business VARCHAR(50),
      specialties TEXT NOT NULL,
      ideal_client TEXT,
      why_list TEXT,
      referred_by VARCHAR(255),
      status VARCHAR(50) NOT NULL DEFAULT 'pending',
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `;
  await sql`
    CREATE TABLE IF NOT EXISTS service_providers (
      id SERIAL PRIMARY KEY,
      clerk_user_id VARCHAR(255),
      business_name VARCHAR(255) NOT NULL,
      owner_name VARCHAR(255) NOT NULL,
      slug VARCHAR(300) NOT NULL UNIQUE,
      category VARCHAR(100) NOT NULL,
      location VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      website TEXT,
      instagram VARCHAR(100),
      description TEXT NOT NULL,
      specialties JSONB DEFAULT '[]'::jsonb,
      years_in_business VARCHAR(50),
      price_range VARCHAR(10) DEFAULT '$$',
      verified BOOLEAN DEFAULT FALSE,
      founding_provider BOOLEAN DEFAULT FALSE,
      rating NUMERIC(3,1) DEFAULT 0,
      review_count INTEGER DEFAULT 0,
      status VARCHAR(50) NOT NULL DEFAULT 'pending',
      application_id INTEGER REFERENCES provider_applications(id),
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `;
  // Outreach pipeline columns (added later — idempotent)
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_status VARCHAR(50)`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS claim_token VARCHAR(64) UNIQUE`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_sent_at TIMESTAMP`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_responded_at TIMESTAMP`;
  // Suppression list — businesses that opted out, never re-seed
  await sql`
    CREATE TABLE IF NOT EXISTS outreach_suppression (
      id SERIAL PRIMARY KEY,
      business_name VARCHAR(255),
      email VARCHAR(255),
      domain VARCHAR(255),
      reason TEXT,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )
  `;

  // Claim model (2026-10-03, strict opt-in 2026-10-07): a seeded row is built
  // but NOT public. It stays 'pending' with outreach_status 'staged' until the
  // shop approves it from its claim link, which flips it to 'active'.
  //
  // ?dryRun=1 runs every check below and writes nothing. Run it first.
  const dryRun = new URL(request.url).searchParams.get('dryRun') === '1';

  // Checked once per request, not per row.
  const suppression = (await sql`
    SELECT LOWER(COALESCE(business_name, '')) AS name, LOWER(COALESCE(email, '')) AS email,
           LOWER(COALESCE(domain, '')) AS domain
    FROM outreach_suppression
  `) as Array<{ name: string; email: string; domain: string }>;
  const supNames = new Set(suppression.map((r) => r.name).filter(Boolean));
  const supEmails = new Set(suppression.map((r) => r.email).filter(Boolean));
  const supDomains = new Set(suppression.map((r) => r.domain).filter(Boolean));

  const existing = (await sql`
    SELECT LOWER(business_name) AS name, LOWER(COALESCE(location, '')) AS location,
           LOWER(COALESCE(website, '')) AS website
    FROM service_providers
    WHERE COALESCE(status, '') <> 'rejected'
  `) as Array<{ name: string; location: string; website: string }>;
  const existingNameLoc = new Set(existing.map((r) => `${r.name}|${r.location}`));
  const existingDomains = new Set(existing.map((r) => domainOf(r.website)).filter(Boolean));

  const validCategories = new Set<string>(CATEGORY_OPTIONS.map((c) => c.value));
  const seenInBatch = new Set<string>();

  type Result = { businessName: string; ok: boolean; id?: number; claimUrl?: string; skipped?: string; error?: string };
  const results: Result[] = [];

  for (const p of providers) {
    const businessName = String(p.businessName ?? '').trim();
    try {
      const category = String(p.category ?? '').trim();
      const location = String(p.location ?? '').trim();
      const description = String(p.description ?? '').trim();
      const specialties = p.specialties || '';
      const website = p.website ? String(p.website).trim() : null;
      const years = p.yearsInBusiness || null;
      const domain = domainOf(website);
      const providedEmail = p.email ? String(p.email).trim().toLowerCase() : '';

      const skip = (reason: string) => results.push({ businessName: businessName || '(missing)', ok: false, skipped: reason });

      if (!businessName || !category || !location || !description) { skip('missing required field'); continue; }
      if (!validCategories.has(category)) { skip(`unknown category '${category}'`); continue; }
      // Title and registration: Chris vets every one by hand. Never seeded.
      if (category === 'titling') { skip('titling is vetted by hand'); continue; }
      // Transport: carriers only, never brokers.
      if (category === 'transport' && (String(p.isBroker ?? '') === 'true' || /\bbroker/i.test(`${businessName} ${description}`))) {
        skip('transport broker'); continue;
      }
      if (supNames.has(businessName.toLowerCase()) || (domain && supDomains.has(domain)) || (providedEmail && supEmails.has(providedEmail))) {
        skip('suppressed'); continue;
      }
      const nameLoc = `${businessName.toLowerCase()}|${location.toLowerCase()}`;
      if (existingNameLoc.has(nameLoc) || (domain && existingDomains.has(domain))) { skip('already on the site'); continue; }
      if (seenInBatch.has(nameLoc) || (domain && seenInBatch.has(domain))) { skip('duplicate in this batch'); continue; }
      seenInBatch.add(nameLoc);
      if (domain) seenInBatch.add(domain);

      if (dryRun) { results.push({ businessName, ok: true }); continue; }

      const ownerName = (p.ownerName as string) || 'Outreach Pending';
      const email = (p.email as string) || `outreach+${slugify(businessName).slice(0, 30)}@fullysorted.com`;
      const phone = (p.phone as string) || null;
      const slug = `${slugify(businessName)}-${Math.random().toString(36).slice(2, 8)}`;
      const claimToken = makeClaimToken();

      // 1) Insert into provider_applications
      const appRows = await sql`
        INSERT INTO provider_applications
          (business_name, owner_name, category, location, email, phone, website, years_in_business, specialties, why_list, status)
        VALUES
          (${businessName}, ${ownerName}, ${category}, ${location}, ${email}, ${phone}, ${website}, ${years}, ${specialties},
           ${'Seeded profile from public information (claim model). Awaiting approval from the business owner.'},
           'pending')
        RETURNING id
      `;
      const applicationId = appRows[0]?.id ?? null;

      // 2) Insert into service_providers, hidden until approved. price_range is
      // NULL on purpose: the column default is our guess, not the shop's read.
      const specialtiesArray = String(specialties)
        .split(',')
        .map((s: string) => s.trim())
        .filter(Boolean);

      const provRows = await sql`
        INSERT INTO service_providers
          (business_name, owner_name, slug, category, location, email, phone, website, description,
           specialties, years_in_business, price_range, verified, founding_provider, status, application_id,
           outreach_status, claim_token)
        VALUES
          (${businessName}, ${ownerName}, ${slug}, ${category}, ${location}, ${email}, ${phone}, ${website}, ${description},
           ${JSON.stringify(specialtiesArray)}::jsonb, ${years}, NULL, false, false, 'pending', ${applicationId},
           'staged', ${claimToken})
        RETURNING id
      `;

      const claimUrl = `https://www.fullysorted.com/services/claim/${claimToken}`;
      results.push({ businessName, ok: true, id: provRows[0]?.id, claimUrl });
    } catch (e) {
      results.push({
        businessName: businessName || '(unknown)',
        ok: false,
        error: e instanceof Error ? e.message : String(e),
      });
    }
  }

  const skipCounts: Record<string, number> = {};
  for (const r of results) if (r.skipped) skipCounts[r.skipped] = (skipCounts[r.skipped] ?? 0) + 1;

  return NextResponse.json({
    dryRun,
    [dryRun ? 'wouldInsert' : 'inserted']: results.filter((r) => r.ok).length,
    skipped: results.filter((r) => r.skipped).length,
    skipCounts,
    failed: results.filter((r) => !r.ok && !r.skipped).length,
    results,
  });
}

function domainOf(url: string | null | undefined): string {
  const t = String(url ?? '').trim().toLowerCase();
  if (!t) return '';
  try {
    return new URL(/^https?:\/\//.test(t) ? t : `https://${t}`).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}
