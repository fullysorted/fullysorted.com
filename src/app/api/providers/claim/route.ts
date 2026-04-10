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
  if (provider.outreach_status === 'opted_out') {
    return NextResponse.json({ error: 'This listing has been removed' }, { status: 410 });
  }

  if (action === 'remove') {
    // Add to suppression list
    const domain = (provider.email as string)?.split('@')[1] || null;
    await sql`
      INSERT INTO outreach_suppression (business_name, email, domain, reason)
      VALUES (${provider.business_name}, ${provider.email}, ${domain}, 'Owner declined via claim link')
    `;
    // Hard delete provider + application
    await sql`DELETE FROM service_providers WHERE id = ${provider.id}`;
    if (provider.application_id) {
      await sql`UPDATE provider_applications SET status = 'rejected' WHERE id = ${provider.application_id}`;
    }
    return NextResponse.json({ ok: true, action: 'removed' });
  }

  // claim or list_only → activate the listing
  const newOutreachStatus = action === 'claim' ? 'claimed' : 'list_only';

  await sql`
    UPDATE service_providers
    SET status = 'active',
        outreach_status = ${newOutreachStatus},
        outreach_responded_at = NOW(),
        updated_at = NOW()
    WHERE id = ${provider.id}
  `;
  if (provider.application_id) {
    await sql`UPDATE provider_applications SET status = 'approved' WHERE id = ${provider.application_id}`;
  }

  return NextResponse.json({ ok: true, action: newOutreachStatus });
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
