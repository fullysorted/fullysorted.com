import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { isTeam } from '@/lib/team-auth';
import { rateLimit } from '@/lib/rate-limit';
import { isBlobImageUrl } from '@/lib/images';

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
// Consumer mailbox providers. A suppression on one of these addresses says
// nothing about anyone else who happens to use the same webmail.
const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'ymail.com', 'hotmail.com', 'outlook.com',
  'live.com', 'msn.com', 'aol.com', 'icloud.com', 'me.com', 'mac.com', 'protonmail.com',
  'proton.me', 'comcast.net', 'sbcglobal.net', 'att.net', 'verizon.net', 'cox.net',
  'earthlink.net', 'pacbell.net', 'roadrunner.com', 'charter.net', 'mail.com', 'gmx.com',
]);

async function ensureColumns(sql: Awaited<ReturnType<typeof getSql>>) {
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_notes TEXT`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_added_by VARCHAR(100)`;
  // avatar_url is in the drizzle schema (Phase 4) but may not exist on older
  // prod tables — the setup route that adds it is manual. Cheap insurance.
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS avatar_url TEXT`;
  // "Owner said no" used to DELETE the row outright, behind a native confirm(),
  // with CASCADE. One misclick on a call day and the record was gone — email,
  // phone, owner name, notes, category, photo, application link, all of it.
  // These three columns turn it into a soft delete the rep can undo.
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_prev_status VARCHAR(30)`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_prev_public_status VARCHAR(30)`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_opted_out_at TIMESTAMPTZ`;
}

// Shared with the two public apply wizards — see lib/images.ts for why a
// provider photo must be one we host.
const isValidImageUrl = (u: string): boolean => isBlobImageUrl(u);

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

  const stageFilter = ['staged', 'sent', 'claimed', 'list_only', 'declined'].includes(stage) ? stage : null;
  const term = q ? `%${q}%` : null;

  let rows;
  if (stageFilter && term) {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at, avatar_url,
             outreach_opted_out_at
      FROM service_providers
      WHERE outreach_status = ${stageFilter}
        AND (business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term})
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  } else if (stageFilter) {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at, avatar_url,
             outreach_opted_out_at
      FROM service_providers
      WHERE outreach_status = ${stageFilter}
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  } else if (term) {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at, avatar_url,
             outreach_opted_out_at
      FROM service_providers
      WHERE outreach_status IS NOT NULL AND outreach_status <> 'declined'
        AND (business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term})
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  } else {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at, avatar_url,
             outreach_opted_out_at
      FROM service_providers
      WHERE outreach_status IS NOT NULL AND outreach_status <> 'declined'
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
  const avatarUrl = str('avatarUrl', 1000);
  const sendInvite = body.sendInvite === true;

  if (!businessName || !ownerName || !email || !category || !location) {
    return NextResponse.json(
      { error: 'Business name, owner name, email, category and location are all required.' },
      { status: 400 },
    );
  }
  // A listing without a photo is a listing nobody clicks — required by design.
  // (Blob storage verified working in production 2026-08-20.)
  if (!avatarUrl) {
    return NextResponse.json(
      { error: 'A shop photo or logo is required. Upload one before adding the provider.' },
      { status: 400 },
    );
  }
  if (!isValidImageUrl(avatarUrl)) {
    return NextResponse.json({ error: 'Photo URL is not valid.' }, { status: 400 });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }

  const sql = await getSql();
  await ensureColumns(sql);

  // Respect the suppression list — never re-add someone who opted out.
  //
  // The domain was computed here and then never used, so a shop that opted out
  // as info@example.com could be re-added tomorrow as mike@example.com under a
  // slightly different business name. It is checked now — but only for company
  // domains: one owner declining from a gmail address must not suppress every
  // other shop on gmail, which on a 113-shop call sheet is most of them.
  const domain = email.split('@')[1] || '';
  const companyDomain = domain && !FREE_EMAIL_DOMAINS.has(domain) ? domain : null;
  const suppressed = await sql`
    SELECT id, email, business_name, domain FROM outreach_suppression
    WHERE LOWER(email) = ${email}
       OR LOWER(business_name) = ${businessName.toLowerCase()}
       OR (${companyDomain}::text IS NOT NULL AND LOWER(domain) = ${companyDomain})
    LIMIT 1
  `;
  if (suppressed.length > 0) {
    const hit = suppressed[0];
    const byDomain =
      companyDomain &&
      String(hit.email || '').toLowerCase() !== email &&
      String(hit.business_name || '').toLowerCase() !== businessName.toLowerCase();
    return NextResponse.json(
      {
        error: byDomain
          ? `Someone at ${companyDomain} (${hit.business_name || hit.email}) previously asked to be removed from Fully Sorted. Check it is a different business before re-adding.`
          : `${businessName} previously asked to be removed from Fully Sorted. Do not re-add without their explicit OK.`,
      },
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
       status, application_id, outreach_status, claim_token, outreach_notes, outreach_added_by, avatar_url)
    VALUES
      (${businessName}, ${ownerName}, ${slug}, ${category}, ${location}, ${email}, ${phone}, ${website}, ${instagram},
       ${description}, ${JSON.stringify(specialtiesArray)}::jsonb, ${yearsInBusiness}, '$$', false, true,
       'pending', ${applicationId}, 'staged', ${claimToken}, ${notes}, ${addedBy}, ${avatarUrl || null})
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
    SELECT id, business_name, email, application_id, outreach_status, status,
           outreach_prev_status, outreach_prev_public_status
    FROM service_providers WHERE id = ${id} LIMIT 1
  `;
  const provider = rows[0];
  if (!provider) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  // Rep can only touch providers that are in the outreach pipeline.
  if (!provider.outreach_status) {
    return NextResponse.json({ error: 'Not an outreach-pipeline provider' }, { status: 403 });
  }

  if (body.action === 'opt_out') {
    // Owner said "no thanks" on the phone. The listing comes down and the
    // suppression row goes in immediately — but the provider record is kept and
    // parked in a 'declined' stage, so a misdial or a misclick is one Undo away
    // rather than an irreversible CASCADE.
    const domain = (provider.email as string)?.split('@')[1] || null;
    await sql`
      INSERT INTO outreach_suppression (business_name, email, domain, reason)
      VALUES (${provider.business_name}, ${provider.email}, ${domain}, 'Owner declined during onboarding call')
    `;
    await sql`
      UPDATE service_providers
      SET outreach_prev_status = COALESCE(outreach_prev_status, outreach_status),
          outreach_prev_public_status = COALESCE(outreach_prev_public_status, status),
          outreach_status = 'declined',
          status = 'declined',
          outreach_opted_out_at = NOW(),
          updated_at = NOW()
      WHERE id = ${id}
    `;
    if (provider.application_id) {
      await sql`UPDATE provider_applications SET status = 'rejected' WHERE id = ${provider.application_id}`;
    }
    return NextResponse.json({ ok: true, action: 'opted_out' });
  }

  if (body.action === 'undo_opt_out') {
    if (provider.outreach_status !== 'declined') {
      return NextResponse.json({ error: 'That provider is not marked as declined' }, { status: 400 });
    }
    // Lift the suppression we added, and only that one — a provider suppressed
    // for another reason stays suppressed.
    await sql`
      DELETE FROM outreach_suppression
      WHERE LOWER(email) = LOWER(${provider.email}) AND reason = 'Owner declined during onboarding call'
    `;
    await sql`
      UPDATE service_providers
      SET outreach_status = COALESCE(outreach_prev_status, 'staged'),
          status = COALESCE(outreach_prev_public_status, 'pending'),
          outreach_prev_status = NULL,
          outreach_prev_public_status = NULL,
          outreach_opted_out_at = NULL,
          updated_at = NOW()
      WHERE id = ${id}
    `;
    if (provider.application_id) {
      await sql`UPDATE provider_applications SET status = 'pending' WHERE id = ${provider.application_id}`;
    }
    return NextResponse.json({ ok: true, action: 'restored', stage: provider.outreach_prev_status || 'staged' });
  }

  const notes = typeof body.notes === 'string' ? body.notes.trim().slice(0, 2000) : undefined;
  const emailNew = typeof body.email === 'string' ? body.email.trim().toLowerCase().slice(0, 255) : undefined;
  const phoneNew = typeof body.phone === 'string' ? body.phone.trim().slice(0, 50) : undefined;
  const ownerNew = typeof body.ownerName === 'string' ? body.ownerName.trim().slice(0, 255) : undefined;
  const avatarNew = typeof body.avatarUrl === 'string' ? body.avatarUrl.trim().slice(0, 1000) : undefined;

  if (emailNew && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNew)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }
  if (avatarNew && !isValidImageUrl(avatarNew)) {
    return NextResponse.json({ error: 'Photo URL is not valid.' }, { status: 400 });
  }

  const result = await sql`
    UPDATE service_providers SET
      outreach_notes = COALESCE(${notes ?? null}, outreach_notes),
      email = COALESCE(${emailNew ?? null}, email),
      phone = COALESCE(${phoneNew ?? null}, phone),
      owner_name = COALESCE(${ownerNew ?? null}, owner_name),
      avatar_url = COALESCE(${avatarNew ?? null}, avatar_url),
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING id, business_name, owner_name, email, phone, outreach_notes, avatar_url
  `;

  return NextResponse.json({ ok: true, provider: result[0] });
}
