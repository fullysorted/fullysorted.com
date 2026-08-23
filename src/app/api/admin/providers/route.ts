import { NextRequest, NextResponse } from 'next/server';
import { ensureAccountLinkColumns, mintAccountLink, LINK_TOKEN_TTL_DAYS } from '@/lib/account-link';

const SITE = 'https://fullysorted.com';

function isAdmin(request: NextRequest): boolean {
  const secret = request.cookies.get('fs_admin')?.value;
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

// GET /api/admin/providers — all service providers with optional status filter + search
export async function GET(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const { searchParams } = new URL(request.url);
  const status = searchParams.get('status') || 'all';
  const search = searchParams.get('q') || '';
  const limit = Math.min(parseInt(searchParams.get('limit') || '100'), 200);
  const offset = parseInt(searchParams.get('offset') || '0');

  let rows;
  if (status !== 'all' && search) {
    const term = `%${search}%`;
    rows = await sql`
      SELECT * FROM service_providers
      WHERE status = ${status}
        AND (business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term})
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (status !== 'all') {
    rows = await sql`
      SELECT * FROM service_providers
      WHERE status = ${status}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (search) {
    const term = `%${search}%`;
    rows = await sql`
      SELECT * FROM service_providers
      WHERE business_name ILIKE ${term} OR owner_name ILIKE ${term} OR email ILIKE ${term} OR location ILIKE ${term}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else {
    rows = await sql`
      SELECT * FROM service_providers
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  }

  // Aggregate counts for header chips
  const counts = await sql`
    SELECT status, COUNT(*)::int AS count
    FROM service_providers
    GROUP BY status
  `;

  return NextResponse.json({ providers: rows, counts });
}

// PATCH /api/admin/providers — update a provider (status, verified, founding, etc.)
export async function PATCH(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const body = await request.json();
  const { id, status, verified, foundingProvider, businessName, category, location, priceRange } = body;

  if (!id) {
    return NextResponse.json({ error: 'id required' }, { status: 400 });
  }

  const result = await sql`
    UPDATE service_providers SET
      status = COALESCE(${status ?? null}, status),
      verified = COALESCE(${verified ?? null}, verified),
      founding_provider = COALESCE(${foundingProvider ?? null}, founding_provider),
      business_name = COALESCE(${businessName ?? null}, business_name),
      category = COALESCE(${category ?? null}, category),
      location = COALESCE(${location ?? null}, location),
      price_range = COALESCE(${priceRange ?? null}, price_range),
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `;

  if (!result.length) {
    return NextResponse.json({ error: 'Provider not found' }, { status: 404 });
  }

  // Keep the matching application row in sync if status moved to approved/rejected
  if (status === 'active') {
    await sql`UPDATE provider_applications SET status = 'approved' WHERE id = ${result[0].application_id}`;
  } else if (status === 'rejected') {
    await sql`UPDATE provider_applications SET status = 'rejected' WHERE id = ${result[0].application_id}`;
  }

  // ─── Tell the provider they were approved ──────────────────────────────
  //
  // Approving used to be entirely silent. The apply form promises an answer in
  // 3-5 business days, the admin flips the row to `active`, and the shop is
  // never told — their listing goes live and the only people who know are us.
  //
  // Worse for the rows that came in through the public apply form: it does not
  // require sign-in, so `clerk_user_id` is null and the shop has a live listing
  // it can never log in to manage. So when there is no account on the row we
  // mint an account-link token here and put it in the same email — approval and
  // "here is how you get in" as one message, not two we never send.
  //
  // Everything below is best-effort and wrapped: the status change is already
  // committed and must stand even if the mail provider is down. What it must
  // NOT do is fail silently, so the response reports whether it went, and hands
  // the admin the link when it didn't. Mirrors the team branch of
  // /api/providers/link/request.
  let emailOutcome: Record<string, unknown> = {};
  if (status === 'active') {
    try {
      const p = result[0];
      const to = typeof p.email === 'string' ? p.email.trim() : '';
      const profileUrl = `${SITE}/services/${p.slug}`;

      let linkUrl: string | undefined;
      let mintFailed: string | undefined;
      if (!p.clerk_user_id) {
        await ensureAccountLinkColumns(sql);
        const minted = await mintAccountLink(sql, { providerId: Number(p.id) });
        if (minted.ok) {
          linkUrl = `${SITE}/services/link/${minted.target.token}`;
        } else {
          // 'already_linked' can't happen on this branch; the rest are real
          // states the admin needs to see (no email on file, shop declined).
          mintFailed = minted.reason;
        }
      }

      if (!to) {
        emailOutcome = { emailed: false, emailError: 'No email address on that listing — approved, but nobody was told.' };
      } else if (mintFailed) {
        emailOutcome = {
          emailed: false,
          emailError: `Approved, but couldn't create a login link (${mintFailed}) — no email sent.`,
        };
      } else {
        const { sendProviderApprovedEmail } = await import('@/lib/email');
        const sent = await sendProviderApprovedEmail({
          to,
          businessName: String(p.business_name),
          profileUrl,
          ...(linkUrl ? { linkUrl, ttlDays: LINK_TOKEN_TTL_DAYS } : {}),
        });
        emailOutcome = sent
          ? { emailed: true, sentTo: to }
          : {
              emailed: false,
              sentTo: to,
              ...(linkUrl ? { linkUrl } : {}),
              emailError: linkUrl
                ? "Approved, but the email didn't send — send them this link by hand."
                : "Approved, but the email didn't send — tell them their listing is live.",
            };
        if (!sent) console.error('[admin/providers] approval email not sent for provider', p.id);
      }
    } catch (err) {
      // The approval itself is done and durable. Never let this throw out of
      // the handler and 500 a change that already happened.
      console.error('[admin/providers] approval notification threw (status IS saved)', err);
      emailOutcome = { emailed: false, emailError: "Approved, but the notification failed. Check the logs and contact them by hand." };
    }
  }

  return NextResponse.json({ provider: result[0], ...emailOutcome });
}

// DELETE /api/admin/providers?id=123 — hard delete (use sparingly)
export async function DELETE(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

  await sql`DELETE FROM service_providers WHERE id = ${parseInt(id)}`;
  return NextResponse.json({ success: true });
}
