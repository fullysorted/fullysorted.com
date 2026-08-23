import { NextRequest, NextResponse } from 'next/server';

// POST /api/providers/claim
// Body: { token: string, action: 'claim' | 'list_only' | 'remove' }
//
// claim       → mark as active + record claim time. Owner intends to manage the listing
//                (they'll be prompted to create an account on the success page).
// list_only   → mark as active without account creation. Owner is fine being listed
//                but doesn't want to maintain a profile right now.
// remove      → hard-delete the staged provider + add the email/business to the
//                outreach_suppression list so it's never re-seeded.
export async function POST(request: NextRequest) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  let body: { token?: string; action?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const { token, action } = body;
  if (!token || !action) {
    return NextResponse.json({ error: 'token and action are required' }, { status: 400 });
  }
  if (!['claim', 'list_only', 'remove'].includes(action)) {
    return NextResponse.json({ error: 'invalid action' }, { status: 400 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  // Look up the staged provider by token
  // Remember which token was used, as a hash. The plain token is still cleared
  // (it grants listing takeover), but the hash lets a second click on the same
  // emailed link land on "you're already listed" instead of a 404 at the exact
  // moment of highest intent.
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS claim_token_used VARCHAR(64)`;
  // Same soft-delete columns the team console uses; this route can be the first
  // to touch the table, so it cannot assume they already exist.
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_prev_status VARCHAR(30)`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_prev_public_status VARCHAR(30)`;
  await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_opted_out_at TIMESTAMPTZ`;
  const { createHash } = await import('crypto');
  const tokenHash = createHash('sha256').update(token).digest('hex');

  const rows = await sql`
    SELECT id, business_name, email, application_id, outreach_status
    FROM service_providers
    WHERE claim_token = ${token}
    LIMIT 1
  `;
  const provider = rows[0];

  if (!provider) {
    return NextResponse.json({ error: 'Token not found or already used' }, { status: 404 });
  }
  if (provider.outreach_status === 'opted_out' || provider.outreach_status === 'declined') {
    return NextResponse.json({ error: 'This listing has been removed' }, { status: 410 });
  }

  if (action === 'remove') {
    // Add to suppression list
    const domain = (provider.email as string)?.split('@')[1] || null;
    await sql`
      INSERT INTO outreach_suppression (business_name, email, domain, reason)
      VALUES (${provider.business_name}, ${provider.email}, ${domain}, 'Owner declined via claim link')
    `;
    // Soft delete. The suppression row above already keeps the promise — we
    // stop contacting them and the listing comes down. Destroying the record
    // with CASCADE as well only means an accidental click is unrecoverable.
    await sql`
      UPDATE service_providers
      SET outreach_prev_status = COALESCE(outreach_prev_status, outreach_status),
          outreach_prev_public_status = COALESCE(outreach_prev_public_status, status),
          outreach_status = 'declined',
          status = 'declined',
          outreach_opted_out_at = NOW(),
          claim_token = NULL,
          claim_token_used = ${tokenHash},
          updated_at = NOW()
      WHERE id = ${provider.id}
    `;
    if (provider.application_id) {
      await sql`UPDATE provider_applications SET status = 'rejected' WHERE id = ${provider.application_id}`;
    }
    return NextResponse.json({ ok: true, action: 'removed' });
  }

  // claim or list_only → activate the listing
  const newOutreachStatus = action === 'claim' ? 'claimed' : 'list_only';

  // SECURITY: clear the claim_token once the listing is activated so a leaked
  // token can't later be replayed to hijack or remove the (now public) profile.
  await sql`
    UPDATE service_providers
    SET status = 'active',
        outreach_status = ${newOutreachStatus},
        outreach_responded_at = NOW(),
        claim_token = NULL,
        claim_token_used = ${tokenHash},
        updated_at = NOW()
    WHERE id = ${provider.id}
  `;
  if (provider.application_id) {
    await sql`UPDATE provider_applications SET status = 'approved' WHERE id = ${provider.application_id}`;
  }

  // A shop that CLAIMED said they want to manage this themselves — so give them
  // the way to. Until now this branch ended here and the invite email's promise
  // ("we'll follow up with a link to edit your details and add photos") had no
  // code behind it: clerk_user_id was never set by any route, so a claimed
  // listing was permanently unmanageable. Best effort; the listing is already
  // live and a mail failure must not turn into an error for the shop.
  //
  // What a mail failure MUST do is stop the success page saying "we'll email you
  // a link shortly". Nothing is queued and nothing retries, so that sentence was
  // a delivery we never made, and the shop waited for an email that was never
  // coming. Report what actually happened instead and let the page hand them the
  // reply-to address — the same principle as deliver()/undeliverableResponse()
  // in lib/submissions.ts, applied to a claim that must stay saved either way.
  let linkUrl: string | null = null;
  let loginEmailSent = false;
  if (newOutreachStatus === 'claimed') {
    try {
      const { ensureAccountLinkColumns, mintAccountLink, LINK_TOKEN_TTL_DAYS } = await import('@/lib/account-link');
      await ensureAccountLinkColumns(sql);
      const minted = await mintAccountLink(sql, { providerId: Number(provider.id) });
      if (minted.ok) {
        linkUrl = `https://fullysorted.com/services/link/${minted.target.token}`;
        const { sendAccountLinkInvite } = await import('@/lib/email');
        // sendEmail() has always returned a boolean here; nothing read it.
        loginEmailSent = (await sendAccountLinkInvite({
          to: minted.target.email,
          businessName: minted.target.businessName,
          linkUrl,
          ttlDays: LINK_TOKEN_TTL_DAYS,
        })) === true;
        if (!loginEmailSent) {
          console.error(`[claim] login link minted but not emailed (provider ${provider.id})`);
        }
      } else {
        console.error(`[claim] could not mint a login link (provider ${provider.id}): ${minted.reason}`);
      }
    } catch (e) {
      console.error('[claim] account link setup failed', e);
    }
  }

  // linkUrl: the on-screen route in, when there is one. loginEmailSent: whether
  // the copy is allowed to mention an email. contactEmail: where they go when
  // neither worked.
  return NextResponse.json({
    ok: true,
    action: newOutreachStatus,
    linkUrl,
    loginEmailSent,
    contactEmail: 'chris@fullysorted.com',
  });
}

// GET /api/providers/claim?token=... — used by the claim page to fetch the staged listing
export async function GET(request: NextRequest) {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }
  const token = new URL(request.url).searchParams.get('token');
  if (!token) {
    return NextResponse.json({ error: 'token required' }, { status: 400 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const rows = await sql`
    SELECT id, business_name, owner_name, category, location, website, phone,
           description, specialties, years_in_business, status, outreach_status, slug
    FROM service_providers
    WHERE claim_token = ${token}
    LIMIT 1
  `;
  const provider = rows[0];

  if (!provider) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
  return NextResponse.json({ provider });
}
