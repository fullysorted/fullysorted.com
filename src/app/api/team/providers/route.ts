import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { isTeam } from '@/lib/team-auth';
import { rateLimit } from '@/lib/rate-limit';

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function makeClaimToken(): string {
  return randomBytes(24).toString('base64url');
}

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

// Idempotent — make sure the notes column exists (rest of the schema is
// created by /api/admin/seed-providers, which has already run in prod).
async function ensureColumns(sql: Awaited<ReturnType<typeof getSql>>) {
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_notes TEXT`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_added_by VARCHAR(100)`;
}

// GET /api/team/providers?stage=all|staged|sent|claimed|list_only&q=...
// The rep's pipeline view: staged providers + outreach status. Scoped columns
// only — no clerk ids, no stripe fields.
export async function GET(request: NextRequest) {
  if (!isTeam(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const sql = await getSql();
  await ensureColumns(sql);

  const { searchParams } = new URL(request.url);
  const stage = searchParams.get('stage') || 'all';
  const q = searchParams.get('q') || '';
  const limit = Math.min(parseInt(searchParams.get('limit') || '200'), 500);

  const stageFilter = ['staged', 'sent', 'claimed', 'list_only'].includes(stage) ? stage : null;
  const term = q ? `%${q}%` : null;

  let rows;
  if (stageFilter && term) {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at
      FROM service_providers
      WHERE outreach_status = ${stageFilter}
        AND (business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term})
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  } else if (stageFilter) {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at
      FROM service_providers
      WHERE outreach_status = ${stageFilter}
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  } else if (term) {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at
      FROM service_providers
      WHERE outreach_status IS NOT NULL
        AND (business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term})
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  } else {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at
      FROM service_providers
      WHERE outreach_status IS NOT NULL
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  }

  const counts = await sql`
    SELECT outreach_status, COUNT(*)::int AS count
    FROM service_providers
    WHERE outreach_status IS NOT NULL
    GROUP BY outreach_status
  `;

  return NextResponse.json({ providers: rows, counts });
}

// POST /api/team/providers — add one provider from a call.
// Body: { businessName, ownerName, email, phone?, category, location, website?,
//         instagram?, specialties?, yearsInBusiness?, description?, notes?, addedBy?,
//         sendInvite? }
// Creates a pending application + staged provider with a claim token.
// If sendInvite is true, immediately emails the approval link.
export async function POST(request: NextRequest) {
  if (!isTeam(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const limited = rateLimit(request, 'team-add', 60, 60 * 60 * 1000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const str = (k: string, max = 255) =>
    typeof body[k] === 'string' ? (body[k] as string).trim().slice(0, max) : '';

  const businessName = str('businessName');
  const ownerName = str('ownerName');
  const email = str('email').toLowerCase();
  const phone = str('phone', 50) || null;
  const category = str('category', 100);
  const location = str('location');
  const website = str('website', 500) || null;
  const instagram = str('instagram', 100) || null;
  const specialties = str('specialties', 1000);
  const yearsInBusiness = str('yearsInBusiness', 50) || null;
  const notes = str('notes', 2000) || null;
  const addedBy = str('addedBy', 100) || null;
  const sendInvite = body.sendInvite === true;

  if (!businessName || !ownerName || !email || !category || !location) {
    return NextResponse.json(
      { error: 'businessName, ownerName, email, category, and location are required' },
      { status: 400 },
    );
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const sql = await getSql();
  await ensureColumns(sql);

  // Respect the suppression list — never re-add someone who opted out.
  const domain = email.split('@')[1] || '';
  const suppressed = await sql`
    SELECT id FROM outreach_suppression
    WHERE LOWER(email) = ${email}
       OR (LOWER(business_name) = ${businessName.toLowerCase()})
    LIMIT 1
  `;
  if (suppressed.length > 0) {
    return NextResponse.json(
      { error: `${businessName} previously asked to be removed from Fully Sorted. Do not re-add without their explicit OK.` },
      { status: 409 },
    );
  }

  // Duplicate guard — same email or same business name already in the directory.
  const dup = await sql`
    SELECT id, business_name, status, outreach_status FROM service_providers
    WHERE LOWER(email) = ${email} OR LOWER(business_name) = ${businessName.toLowerCase()}
    LIMIT 1
  `;
  if (dup.length > 0) {
    return NextResponse.json(
      {
        error: `Already in the system: "${dup[0].business_name}" (status: ${dup[0].outreach_status || dup[0].status}). Find them in the pipeline below instead of re-adding.`,
        existingId: dup[0].id,
      },
      { status: 409 },
    );
  }

  const specialtiesArray = specialties
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  // Neutral default description the owner can refine when they claim.
  const description =
    str('description', 2000) ||
    `${businessName} is a ${category.toLowerCase()} specialist serving the ${location} area` +
      (specialtiesArray.length ? `, with a focus on ${specialtiesArray.slice(0, 3).join(', ')}.` : '.') +
      ' Profile details are being finalized with the owner.';

  const slug = `${slugify(businessName)}-${randomBytes(3).toString('hex')}`;
  const claimToken = makeClaimToken();

  const appRows = await sql`
    INSERT INTO provider_applications
      (business_name, owner_name, category, location, email, phone, website, instagram,
       years_in_business, specialties, why_list, referred_by, status)
    VALUES
      (${businessName}, ${ownerName}, ${category}, ${location}, ${email}, ${phone}, ${website}, ${instagram},
       ${yearsInBusiness}, ${specialties || category},
       ${'Added by Fully Sorted onboarding team' + (addedBy ? ` (${addedBy})` : '') + ' after direct contact with the owner.'},
       ${addedBy ? `team:${addedBy}` : 'team'}, 'pending')
    RETURNING id
  `;
  const applicationId = appRows[0]?.id ?? null;

  const provRows = await sql`
    INSERT INTO service_providers
      (business_name, owner_name, slug, category, location, email, phone, website, instagram,
       description, specialties, years_in_business, price_range, verified, founding_provider,
       status, application_id, outreach_status, claim_token, outreach_notes, outreach_added_by)
    VALUES
      (${businessName}, ${ownerName}, ${slug}, ${category}, ${location}, ${email}, ${phone}, ${website}, ${instagram},
       ${description}, ${JSON.stringify(specialtiesArray)}::jsonb, ${yearsInBusiness}, '$$', false, true,
       'pending', ${applicationId}, 'staged', ${claimToken}, ${notes}, ${addedBy})
    RETURNING id
  `;
  const providerId = provRows[0]?.id;
  const claimUrl = `https://www.fullysorted.com/services/claim/${claimToken}`;

  let inviteSent = false;
  if (sendInvite) {
    const { sendProviderInvite } = await import('@/lib/email');
    inviteSent = await sendProviderInvite({
      to: email,
      businessName,
      ownerName,
      category,
      location,
      claimUrl,
    });
    if (inviteSent) {
      await sql`
        UPDATE service_providers
        SET outreach_status = 'sent', outreach_sent_at = NOW(), updated_at = NOW()
        WHERE id = ${providerId}
      `;
    }
  }

  return NextResponse.json({
    success: true,
    id: providerId,
    claimUrl,
    inviteSent,
  });
}

// PATCH /api/team/providers — limited updates the rep is allowed to make.
// Body: { id, action: 'opt_out' } | { id, notes } | { id, email | phone | ownerName }
export async function PATCH(request: NextRequest) {
  if (!isTeam(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const id = typeof body.id === 'number' ? body.id : parseInt(String(body.id || ''));
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

  const sql = await getSql();
  await ensureColumns(sql);

  const rows = await sql`
    SELECT id, business_name, email, application_id, outreach_status, status
    FROM service_providers WHERE id = ${id} LIMIT 1
  `;
  const provider = rows[0];
  if (!provider) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  // Rep can only touch providers that are in the outreach pipeline.
  if (!provider.outreach_status) {
    return NextResponse.json({ error: 'Not an outreach-pipeline provider' }, { status: 403 });
  }

  if (body.action === 'opt_out') {
    // Owner said "no thanks" on the phone — same result as clicking Remove.
    const domain = (provider.email as string)?.split('@')[1] || null;
    await sql`
      INSERT INTO outreach_suppression (business_name, email, domain, reason)
      VALUES (${provider.business_name}, ${provider.email}, ${domain}, 'Owner declined during onboarding call')
    `;
    await sql`DELETE FROM service_providers WHERE id = ${id}`;
    if (provider.application_id) {
      await sql`UPDATE provider_applications SET status = 'rejected' WHERE id = ${provider.application_id}`;
    }
    return NextResponse.json({ ok: true, action: 'opted_out' });
  }

  const notes = typeof body.notes === 'string' ? body.notes.trim().slice(0, 2000) : undefined;
  const emailNew = typeof body.email === 'string' ? body.email.trim().toLowerCase().slice(0, 255) : undefined;
  const phoneNew = typeof body.phone === 'string' ? body.phone.trim().slice(0, 50) : undefined;
  const ownerNew = typeof body.ownerName === 'string' ? body.ownerName.trim().slice(0, 255) : undefined;

  if (emailNew && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNew)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const result = await sql`
    UPDATE service_providers SET
      outreach_notes = COALESCE(${notes ?? null}, outreach_notes),
      email = COALESCE(${emailNew ?? null}, email),
      phone = COALESCE(${phoneNew ?? null}, phone),
      owner_name = COALESCE(${ownerNew ?? null}, owner_name),
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING id, business_name, owner_name, email, phone, outreach_notes
  `;

  return NextResponse.json({ ok: true, provider: result[0] });
}
