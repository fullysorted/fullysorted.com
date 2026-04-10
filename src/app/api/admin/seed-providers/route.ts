import { NextRequest, NextResponse } from 'next/server';

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

  const results: Array<{ businessName: string; ok: boolean; id?: number; error?: string }> = [];

  for (const p of providers) {
    try {
      const businessName = p.businessName;
      const category = p.category;
      const location = p.location;
      const description = p.description;
      const specialties = p.specialties || '';
      const website = p.website || null;
      const years = p.yearsInBusiness || null;

      if (!businessName || !category || !location || !description) {
        results.push({ businessName: businessName || '(missing)', ok: false, error: 'Missing required field' });
        continue;
      }

      const ownerName = 'Outreach Pending';
      const email = `outreach+${slugify(businessName).slice(0, 30)}@fullysorted.com`;
      const slug = `${slugify(businessName)}-${Math.random().toString(36).slice(2, 8)}`;

      // 1) Insert into provider_applications
      const appRows = await sql`
        INSERT INTO provider_applications
          (business_name, owner_name, category, location, email, website, years_in_business, specialties, why_list, status)
        VALUES
          (${businessName}, ${ownerName}, ${category}, ${location}, ${email}, ${website}, ${years}, ${specialties},
           ${'Seeded outreach lead from Fully Sorted SoCal provider research database. Pending direct contact and claim by the business owner.'},
           'pending')
        RETURNING id
      `;
      const applicationId = appRows[0]?.id ?? null;

      // 2) Insert into service_providers as pending
      const specialtiesArray = specialties
        .split(',')
        .map((s: string) => s.trim())
        .filter(Boolean);

      const provRows = await sql`
        INSERT INTO service_providers
          (business_name, owner_name, slug, category, location, email, website, description,
           specialties, years_in_business, price_range, verified, founding_provider, status, application_id)
        VALUES
          (${businessName}, ${ownerName}, ${slug}, ${category}, ${location}, ${email}, ${website}, ${description},
           ${JSON.stringify(specialtiesArray)}::jsonb, ${years}, '$$', false, false, 'pending', ${applicationId})
        RETURNING id
      `;

      results.push({ businessName, ok: true, id: provRows[0]?.id });
    } catch (e) {
      results.push({
        businessName: p.businessName || '(unknown)',
        ok: false,
        error: e instanceof Error ? e.message : String(e),
      });
    }
  }

  return NextResponse.json({
    inserted: results.filter((r) => r.ok).length,
    failed: results.filter((r) => !r.ok).length,
    results,
  });
}
