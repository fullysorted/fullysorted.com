import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { isTeam } from '@/lib/team-auth';
import { rateLimit } from '@/lib/rate-limit';
import { normalizeWorkSettings, normalizeTeamSize, radiusForSettings } from '@/lib/work-settings';
import { isBlobImageUrl } from '@/lib/images';
import { isServiceCategory } from '@/lib/service-categories';

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
  // One shared team login means the console cannot prove WHO edited a row, but
  // it can record the name the rep typed and when — enough for Chris to ask.
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_last_edited_by VARCHAR(100)`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_last_edited_at TIMESTAMPTZ`;
  // Where the work happens (2026-08-31). instrumentation.ts owns these as
  // ORM-critical columns; repeated here because this console talks raw SQL
  // and must not 500 on a box where the boot hook has not run yet.
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS work_settings JSONB DEFAULT '[]'::JSONB`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS team_size VARCHAR(20)`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS service_radius_miles INTEGER`;
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
             instagram, description, specialties, years_in_business,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at, avatar_url,
             outreach_opted_out_at, clerk_user_id IS NOT NULL AS owner_linked,
             outreach_last_edited_by, outreach_last_edited_at,
             work_settings, team_size, service_radius_miles
      FROM service_providers
      WHERE outreach_status = ${stageFilter}
        AND (business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term})
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  } else if (stageFilter) {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             instagram, description, specialties, years_in_business,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at, avatar_url,
             outreach_opted_out_at, clerk_user_id IS NOT NULL AS owner_linked,
             outreach_last_edited_by, outreach_last_edited_at,
             work_settings, team_size, service_radius_miles
      FROM service_providers
      WHERE outreach_status = ${stageFilter}
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  } else if (term) {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             instagram, description, specialties, years_in_business,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at, avatar_url,
             outreach_opted_out_at, clerk_user_id IS NOT NULL AS owner_linked,
             outreach_last_edited_by, outreach_last_edited_at,
             work_settings, team_size, service_radius_miles
      FROM service_providers
      WHERE outreach_status IS NOT NULL AND outreach_status <> 'declined'
        AND (business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term})
      ORDER BY created_at DESC LIMIT ${limit}
    `;
  } else {
    rows = await sql`
      SELECT id, business_name, owner_name, email, phone, category, location, website,
             instagram, description, specialties, years_in_business,
             status, outreach_status, outreach_sent_at, outreach_responded_at,
             outreach_notes, outreach_added_by, claim_token, slug, created_at, avatar_url,
             outreach_opted_out_at, clerk_user_id IS NOT NULL AS owner_linked,
             outreach_last_edited_by, outreach_last_edited_at,
             work_settings, team_size, service_radius_miles
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
  // Captured on the first call rather than left for a second visit. Normalised
  // through lib/work-settings like every other write path, so a rep cannot
  // create a row in a shape the directory does not understand.
  const newWorkSettings = normalizeWorkSettings(body.workSettings);
  const newTeamSize = normalizeTeamSize(body.teamSize);
  const newRadius = radiusForSettings(newWorkSettings, body.serviceRadiusMiles);
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
       status, application_id, outreach_status, claim_token, outreach_notes, outreach_added_by, avatar_url,
       work_settings, team_size, service_radius_miles)
    VALUES
      (${businessName}, ${ownerName}, ${slug}, ${category}, ${location}, ${email}, ${phone}, ${website}, ${instagram},
       ${description}, ${JSON.stringify(specialtiesArray)}::jsonb, ${yearsInBusiness}, '$$', false, true,
       'pending', ${applicationId}, 'staged', ${claimToken}, ${notes}, ${addedBy}, ${avatarUrl || null},
       ${JSON.stringify(newWorkSettings)}::jsonb, ${newTeamSize}, ${newRadius})
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

// PATCH /api/team/providers — the updates the rep is allowed to make.
// Body: { id, action: 'opt_out' | 'undo_opt_out' }
//     | { id, ...any of: businessName, ownerName, email, phone, category, location,
//              website, instagram, description, specialties, yearsInBusiness,
//              avatarUrl, notes, workSettings, teamSize, serviceRadiusMiles }
// Still admin-only: status, verified, founding_provider, price_range, delete.
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
    SELECT id, business_name, owner_name, email, phone, category, location, website,
           instagram, description, specialties, years_in_business, avatar_url,
           outreach_notes, application_id, outreach_status, status, clerk_user_id, slug,
           outreach_prev_status, outreach_prev_public_status,
           work_settings, team_size, service_radius_miles
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
    // A shop can also decline from the claim link itself, which writes a
    // suppression row with a different reason. Undo used to delete only the
    // call-day reason, so the row came back into the pipeline while the
    // suppression stood — and the invite button would then email someone who
    // had clicked "remove me" on our own page. Refuse rather than half-restore.
    const stillSuppressed = await sql`
      SELECT reason FROM outreach_suppression WHERE LOWER(email) = LOWER(${provider.email}) LIMIT 1
    `;
    if (stillSuppressed.length > 0) {
      return NextResponse.json(
        {
          error: `${provider.business_name} is on the do-not-contact list for another reason (${stillSuppressed[0].reason || 'unspecified'}). Undo would put them back in the pipeline while that stands — ask Chris.`,
        },
        { status: 409 },
      );
    }
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

  // ── Work preferences ───────────────────────────────────────────────────
  // Its own action rather than another entry in EDITABLE_KEYS: these are the
  // shop's answers to "what should we send you", collected on the call, and
  // they are the one part of the record a rep should be able to set without
  // touching public copy. The linked-owner guard still applies — a shop that
  // manages its own listing owns this too.
  if (body.action === 'set_preferences') {
    if (provider.clerk_user_id) {
      return NextResponse.json(
        { error: 'This shop manages its own listing now — it sets its own work preferences.' },
        { status: 403 },
      );
    }
    const limitedPrefs = rateLimit(request, 'team-edit', 300, 60 * 60 * 1000);
    if (limitedPrefs) return limitedPrefs;

    const strList = (v: unknown, maxItems: number, maxLen: number): string[] | undefined => {
      if (!Array.isArray(v)) return undefined;
      return v
        .filter((x): x is string => typeof x === 'string')
        .map((x) => x.trim().slice(0, maxLen))
        .filter(Boolean)
        .slice(0, maxItems);
    };
    const num = (v: unknown, max: number): number | null | undefined => {
      if (v === null || v === '') return null;
      if (v === undefined) return undefined;
      const n = typeof v === 'number' ? v : parseInt(String(v).replace(/[^0-9]/g, ''), 10);
      if (!Number.isFinite(n) || n < 0) return undefined;
      return Math.min(Math.round(n), max);
    };

    const marques = strList(body.marques, 25, 40);
    const serviceTypes = strList(body.serviceTypes, 12, 40);
    const minJob = num(body.minJobValue, 1_000_000);
    const radius = num(body.serviceRadiusMiles, 3_000);
    const accepting = typeof body.acceptingWork === 'boolean' ? body.acceptingWork : undefined;
    // Where the work happens. A rep onboarding a shop by phone is usually the
    // FIRST person to learn this ("do they come to you, or do you take the car
    // to them?"), so the console has to be able to set it — otherwise every
    // seeded row stays blank until the shop claims its listing, which most
    // never do. undefined = not sent, leave alone. An empty array clears it.
    const settings = Array.isArray(body.workSettings)
      ? normalizeWorkSettings(body.workSettings)
      : undefined;
    const teamSizeVal =
      body.teamSize === undefined ? undefined : normalizeTeamSize(body.teamSize);

    await sql`
      UPDATE service_providers
      SET accepting_work = COALESCE(${accepting ?? null}::boolean, accepting_work),
          work_settings = CASE WHEN ${settings === undefined} THEN work_settings ELSE ${settings ? JSON.stringify(settings) : '[]'}::jsonb END,
          team_size = CASE WHEN ${teamSizeVal === undefined} THEN team_size ELSE ${teamSizeVal ?? null} END,
          marques = COALESCE(${marques ? JSON.stringify(marques) : null}::jsonb, marques),
          service_types = COALESCE(${serviceTypes ? JSON.stringify(serviceTypes) : null}::jsonb, service_types),
          min_job_value = CASE WHEN ${minJob === undefined} THEN min_job_value ELSE ${minJob ?? null} END,
          service_radius_miles = CASE WHEN ${radius === undefined} THEN service_radius_miles ELSE ${radius ?? null} END,
          outreach_last_edited_by = COALESCE(${typeof body.editedBy === 'string' ? body.editedBy.trim().slice(0, 100) : null}, outreach_last_edited_by),
          outreach_last_edited_at = NOW(),
          updated_at = NOW()
      WHERE id = ${id}
    `;
    return NextResponse.json({ ok: true, action: 'preferences_saved' });
  }

  // POST was rate limited and PATCH was not, which left the widest write path
  // in the console unbounded if the shared team cookie ever leaked. It is
  // applied HERE, below the two opt-out branches: recording that someone asked
  // to be removed is the compliance record and must never be the request that
  // gets turned away.
  const limitedEdit = rateLimit(request, 'team-edit', 300, 60 * 60 * 1000);
  if (limitedEdit) return limitedEdit;

  // ── Field edits ────────────────────────────────────────────────────────
  //
  // The rep owns this record while WE are the ones maintaining it, so the whole
  // editable profile lives here — not just the contact line. What is
  // deliberately NOT here stays admin-only: status, verified, founding_provider,
  // price_range, and hard delete. `slug` is frozen on purpose: a rename must
  // never break a live profile URL, an emailed claim link or an indexed page.
  //
  // A field that isn't sent is left alone. An optional field sent EMPTY is
  // cleared to NULL — that is the only way a rep can remove a wrong website or
  // Instagram handle. A required field sent empty is an error, not a blanking.
  const EDITABLE_KEYS = [
    'businessName', 'ownerName', 'email', 'phone', 'category', 'location',
    'website', 'instagram', 'description', 'specialties', 'yearsInBusiness', 'avatarUrl',
    // Where the work happens. Listed here on purpose: a rep must not be able to
    // rewrite this on a shop that has linked its own login, for exactly the
    // reason the other fields are protected.
    'workSettings', 'teamSize', 'serviceRadiusMiles',
  ];
  const touched = EDITABLE_KEYS.filter((k) => body[k] !== undefined);

  // Two records this console must never quietly rewrite.
  //
  // 1. A shop that has linked its own login is writing its own copy from
  //    /dashboard/provider. A rep saving over that is invisible to the owner
  //    and there is no version history to recover it from.
  // 2. A shop that declined. Its email must stay pinned to the address the
  //    suppression row was written against, or Undo lifts the wrong
  //    suppression and we re-contact someone who said no.
  //
  // Call notes stay editable in both cases — that is the rep's own record.
  if (touched.length > 0) {
    if (provider.clerk_user_id) {
      return NextResponse.json(
        {
          error:
            'This shop manages its own listing now — editing it here would overwrite what the owner wrote, with no way back. Ask them to change it, or ask Chris.',
        },
        { status: 403 },
      );
    }
    if (provider.outreach_status === 'declined') {
      return NextResponse.json(
        { error: 'This shop asked to be removed. Undo that first if it was a mistake — its details are frozen until then.' },
        { status: 403 },
      );
    }
  }

  // Over-length input is rejected rather than trimmed. Silently keeping the
  // first 2,000 characters of a description the owner wrote looks like a
  // successful save and loses the rest.
  const tooLong: string[] = [];
  const bounded = (k: string, max: number): string | undefined => {
    if (typeof body[k] !== 'string') return undefined;
    const v = (body[k] as string).trim();
    if (v.length > max) tooLong.push(`${k} (max ${max} characters)`);
    return v;
  };
  const optional = (k: string, max: number): string | null | undefined => {
    const v = bounded(k, max);
    if (v === undefined) return undefined;
    return v === '' ? null : v;
  };
  const required = bounded;
  const pick = <T,>(v: T | null | undefined, current: T): T | null =>
    v === undefined ? current : v;

  const notes = optional('notes', 2000);
  const emailNew = required('email', 255)?.toLowerCase();
  const phoneNew = optional('phone', 50);
  const ownerNew = required('ownerName', 255);
  const avatarNew = required('avatarUrl', 1000);
  const businessNew = required('businessName', 255);
  const categoryNew = required('category', 100);
  const locationNew = required('location', 255);
  // 4000 matches the public apply form — the two write the same column.
  const descriptionNew = required('description', 4000);
  const websiteNew = optional('website', 500);
  const instagramNew = optional('instagram', 100);
  const yearsNew = optional('yearsInBusiness', 50);
  const editedBy = typeof body.editedBy === 'string' ? body.editedBy.trim().slice(0, 100) : null;

  // Where the work happens. undefined = not sent, leave it alone. An empty
  // array is a real answer ("I got this wrong, clear it"), so it is NOT folded
  // into undefined. Whitelisted by lib/work-settings — the same normaliser the
  // public form and the provider dashboard run through, so the three surfaces
  // cannot store different shapes.
  const workSettingsNew =
    body.workSettings === undefined ? undefined : normalizeWorkSettings(body.workSettings);
  const teamSizeNew = body.teamSize === undefined ? undefined : normalizeTeamSize(body.teamSize);
  const radiusNew: unknown = body.serviceRadiusMiles;

  if (tooLong.length > 0) {
    return NextResponse.json({ error: `Too long: ${tooLong.join(', ')}.` }, { status: 400 });
  }

  // Required fields can be corrected but never emptied — a provider row with a
  // blank business name or category renders as a broken card in the directory.
  const blanked = (
    [
      ['business name', businessNew],
      ['owner name', ownerNew],
      ['email', emailNew],
      ['category', categoryNew],
      ['location', locationNew],
      ['description', descriptionNew],
      ['photo', avatarNew],
    ] as Array<[string, string | undefined]>
  ).find(([, v]) => v !== undefined && v === '');
  if (blanked) {
    return NextResponse.json({ error: `The ${blanked[0]} can be changed but not left empty.` }, { status: 400 });
  }

  if (emailNew && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailNew)) {
    return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
  }
  if (avatarNew && !isValidImageUrl(avatarNew)) {
    return NextResponse.json({ error: 'Photo URL is not valid.' }, { status: 400 });
  }
  if (categoryNew && !isServiceCategory(categoryNew)) {
    return NextResponse.json(
      { error: 'Pick a category from the list — a free-text category cannot be filtered for in the directory.' },
      { status: 400 },
    );
  }

  // A website typed as "shopname.com" on a call is the normal case, not the
  // exception. Take it, and store something a browser can actually open.
  let websiteValue = websiteNew;
  if (typeof websiteValue === 'string') {
    const withScheme = /^https?:\/\//i.test(websiteValue) ? websiteValue : `https://${websiteValue}`;
    try {
      const parsed = new URL(withScheme);
      if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname.includes('.')) throw new Error('bad');
      // Adding the scheme and the trailing slash can push a 500-char input over
      // the limit; truncating it here would store a broken link that looks fine.
      websiteValue = parsed.toString();
      if (websiteValue.length > 500) {
        return NextResponse.json({ error: 'That website address is too long (max 500 characters).' }, { status: 400 });
      }
    } catch {
      return NextResponse.json({ error: 'That website address does not look right.' }, { status: 400 });
    }
  }

  // Accept "@shop", "shop", or a pasted profile URL — store the bare handle.
  let instagramValue = instagramNew;
  if (typeof instagramValue === 'string') {
    instagramValue = instagramValue
      .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
      .replace(/[/?].*$/, '')
      .replace(/^@/, '')
      .slice(0, 100);
    if (!/^[A-Za-z0-9._]+$/.test(instagramValue)) {
      return NextResponse.json({ error: 'That Instagram handle does not look right.' }, { status: 400 });
    }
  }

  // Specialties arrive as an array. A comma-separated string is still accepted
  // for the older callers, but the edit form sends a real array — splitting a
  // joined string on commas turned a stored "Porsche 911, air-cooled" into two
  // separate chips every time anyone touched the field.
  let specialtiesValue: string[] | undefined;
  const rawSpecialties: string[] | undefined = Array.isArray(body.specialties)
    ? (body.specialties as unknown[]).filter((x): x is string => typeof x === 'string')
    : typeof body.specialties === 'string'
      ? (body.specialties as string).split(',')
      : undefined;
  if (rawSpecialties) {
    specialtiesValue = rawSpecialties.map((x) => x.trim()).filter(Boolean);
    // Same rule as every other field: too long is an error, not a quiet trim.
    if (specialtiesValue.length > 30) {
      return NextResponse.json({ error: 'That is more than 30 specialties — trim the list.' }, { status: 400 });
    }
    const overlong = specialtiesValue.find((x) => x.length > 100);
    if (overlong) {
      return NextResponse.json(
        { error: `One specialty is too long (max 100 characters): "${overlong.slice(0, 40)}…"` },
        { status: 400 },
      );
    }
  }

  // A rename must not collide with another shop, and neither a rename nor an
  // email change may point this record at anyone who asked to be removed. The
  // add form checks name, exact email AND company domain against the
  // suppression list; an edit that checked less would be the way around it.
  const suppressionHit = async (
    email: string | null,
    businessName: string | null,
  ): Promise<string | null> => {
    const domain = email ? email.split('@')[1] || '' : '';
    const companyDomain = domain && !FREE_EMAIL_DOMAINS.has(domain) ? domain : null;
    const hit = await sql`
      SELECT business_name, email FROM outreach_suppression
      WHERE (${email}::text IS NOT NULL AND LOWER(email) = ${email})
         OR (${businessName}::text IS NOT NULL AND LOWER(business_name) = ${businessName})
         OR (${companyDomain}::text IS NOT NULL AND LOWER(domain) = ${companyDomain})
      LIMIT 1
    `;
    return hit.length > 0 ? String(hit[0].business_name || hit[0].email || 'That contact') : null;
  };

  if (businessNew && businessNew.toLowerCase() !== String(provider.business_name).toLowerCase()) {
    const clash = await sql`
      SELECT id, business_name FROM service_providers
      WHERE LOWER(business_name) = ${businessNew.toLowerCase()} AND id <> ${id} LIMIT 1
    `;
    if (clash.length > 0) {
      return NextResponse.json(
        { error: `Another record is already called "${clash[0].business_name}". Merge them rather than renaming this one.` },
        { status: 409 },
      );
    }
  }
  if (emailNew && emailNew !== String(provider.email).toLowerCase()) {
    const clash = await sql`
      SELECT id, business_name FROM service_providers
      WHERE LOWER(email) = ${emailNew} AND id <> ${id} LIMIT 1
    `;
    if (clash.length > 0) {
      return NextResponse.json({ error: `${clash[0].business_name} already uses that email address.` }, { status: 409 });
    }
  }

  const renamed = businessNew && businessNew.toLowerCase() !== String(provider.business_name).toLowerCase()
    ? businessNew.toLowerCase()
    : null;
  const remailed = emailNew && emailNew !== String(provider.email).toLowerCase() ? emailNew : null;
  if (renamed || remailed) {
    const who = await suppressionHit(remailed, renamed);
    if (who) {
      return NextResponse.json(
        { error: `${who} previously asked to be removed from Fully Sorted. Do not point a listing at them without their explicit OK.` },
        { status: 409 },
      );
    }
  }

  const next = {
    businessName: pick(businessNew, provider.business_name as string),
    ownerName: pick(ownerNew, provider.owner_name as string),
    email: pick(emailNew, provider.email as string),
    phone: pick(phoneNew, (provider.phone as string | null) ?? null),
    category: pick(categoryNew, provider.category as string),
    location: pick(locationNew, provider.location as string),
    website: pick(websiteValue, (provider.website as string | null) ?? null),
    instagram: pick(instagramValue, (provider.instagram as string | null) ?? null),
    description: pick(descriptionNew, provider.description as string),
    yearsInBusiness: pick(yearsNew, (provider.years_in_business as string | null) ?? null),
    avatarUrl: pick(avatarNew, (provider.avatar_url as string | null) ?? null),
    notes: pick(notes, (provider.outreach_notes as string | null) ?? null),
    specialties: specialtiesValue ?? ((provider.specialties as string[] | null) ?? []),
    workSettings:
      workSettingsNew ?? normalizeWorkSettings(provider.work_settings),
    teamSize: teamSizeNew !== undefined ? teamSizeNew : normalizeTeamSize(provider.team_size),
    serviceRadiusMiles: radiusForSettings(
      workSettingsNew ?? normalizeWorkSettings(provider.work_settings),
      radiusNew !== undefined ? radiusNew : ((provider.service_radius_miles as number | null) ?? null),
    ),
  };

  // Who last touched this row. There is one shared team login, so this is the
  // name the rep typed into the console — a working record for Chris, not an
  // authenticated audit trail. Only stamped when a real field changed.
  // A rep who never filled in the name box would otherwise blank out the name
  // already recorded there, so the row ends up with a timestamp and nobody's
  // name — worse than never having recorded one. COALESCE would be worse still:
  // it would sign this edit with the previous rep's name.
  const stampBy = touched.length > 0 ? editedBy || 'unknown' : null;

  const result = await sql`
    UPDATE service_providers SET
      business_name = ${next.businessName},
      owner_name = ${next.ownerName},
      email = ${next.email},
      phone = ${next.phone},
      category = ${next.category},
      location = ${next.location},
      website = ${next.website},
      instagram = ${next.instagram},
      description = ${next.description},
      years_in_business = ${next.yearsInBusiness},
      specialties = ${JSON.stringify(next.specialties)}::jsonb,
      work_settings = ${JSON.stringify(next.workSettings)}::jsonb,
      team_size = ${next.teamSize},
      service_radius_miles = ${next.serviceRadiusMiles},
      avatar_url = ${next.avatarUrl},
      outreach_notes = ${next.notes},
      outreach_last_edited_by = CASE WHEN ${touched.length > 0} THEN ${stampBy} ELSE outreach_last_edited_by END,
      outreach_last_edited_at = CASE WHEN ${touched.length > 0} THEN NOW() ELSE outreach_last_edited_at END,
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING id, business_name, owner_name, email, phone, category, location, website,
              instagram, description, specialties, years_in_business, avatar_url, outreach_notes,
              outreach_last_edited_by, outreach_last_edited_at,
              work_settings, team_size, service_radius_miles
  `;

  // Keep the originating application in step, so the admin Applications view
  // and any later approval email do not quote a name the shop has since
  // corrected. Cosmetic only — the claim flow reads service_providers.
  if (provider.application_id && touched.length > 0) {
    await sql`
      UPDATE provider_applications SET
        business_name = ${next.businessName},
        owner_name = ${next.ownerName},
        email = ${next.email},
        phone = ${next.phone},
        category = ${next.category},
        location = ${next.location},
        website = ${next.website},
        instagram = ${next.instagram},
        years_in_business = ${next.yearsInBusiness}
      WHERE id = ${provider.application_id}
    `;
  }

  // Changing the contact address on a listing that is already PUBLIC is the
  // first half of a listing takeover: repoint the email, then send the login
  // link. The rep has to be able to fix wrong addresses, so this is not
  // blocked — but it does not get to happen quietly.
  if (remailed && provider.status === 'active') {
    const { notifyProviderEmailChanged } = await import('@/lib/email');
    await notifyProviderEmailChanged({
      businessName: next.businessName as string,
      previousEmail: provider.email as string,
      newEmail: remailed,
      editedBy: stampBy,
      profileUrl: `https://www.fullysorted.com/services/${provider.slug ?? ''}`,
    });
  }

  return NextResponse.json({ ok: true, provider: result[0] });
}
