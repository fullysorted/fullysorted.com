import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin view of the membership: who has joined, and what each person has done.
 *
 * GET  ?q=&status=all|active|shadow|suspended&sort=joined|seen   list + headline counts
 * GET  ?id=123                                                  one member and their activity
 * POST { action: 'suspend' | 'unsuspend', id }
 *
 * "Member" means a row in `users`, the identity spine. A shadow row is an
 * email the site has seen that has never signed in. A row here is never
 * permission to email anybody.
 *
 * Cost: the list is one query, the detail runs only when a member is opened.
 * Activity is matched on user_id OR the email string, because rows written
 * before the spine existed carry only the string.
 */
function isAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get('fs_admin')?.value;
  const header = request.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

const STATUSES = ['all', 'active', 'shadow', 'suspended'] as const;

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 503 });

  const params = new URL(req.url).searchParams;

  try {
    const sql = await getSql();

    const id = Number(params.get('id'));
    if (params.has('id')) {
      if (!Number.isInteger(id) || id <= 0) return NextResponse.json({ error: 'Bad id' }, { status: 400 });
      const rows = await sql`
        SELECT id, email, name, handle, bio, location, phone, role, status, avatar_url,
               (clerk_user_id IS NOT NULL) AS signed_in, created_at, last_seen_at
        FROM users WHERE id = ${id} LIMIT 1
      `;
      if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      const member = rows[0];
      const email = String(member.email).toLowerCase();

      // One table missing or renamed must not blank the whole page.
      const safe = <T,>(p: Promise<T>): Promise<T | []> => p.catch(() => []);
      const [vehicles, listings, messages, reviews, registry, contributions, applications, orders, shops] = await Promise.all([
        safe(sql`SELECT id, year, make, model, nickname, model_slug, visibility, created_at
                 FROM vehicles WHERE user_id = ${id} ORDER BY created_at DESC LIMIT 50`),
        safe(sql`SELECT id, slug, year, make, model, price, status, created_at
                 FROM listings WHERE seller_id = ${id} ORDER BY created_at DESC LIMIT 50`),
        safe(sql`SELECT m.id, m.type, m.listing_title, m.status, m.junk, m.created_at, LEFT(m.message_text, 220) AS excerpt,
                        p.business_name AS provider_name
                 FROM messages m LEFT JOIN service_providers p ON p.id = m.provider_id
                 WHERE m.user_id = ${id} OR LOWER(m.sender_email) = ${email}
                 ORDER BY m.created_at DESC LIMIT 50`),
        safe(sql`SELECT r.id, r.rating, r.status, r.created_at, LEFT(r.body, 220) AS excerpt, p.business_name AS provider_name
                 FROM provider_reviews r LEFT JOIN service_providers p ON p.id = r.provider_id
                 WHERE (r.user_id = ${id} OR LOWER(r.author_email) = ${email}) AND r.body IS NOT NULL
                 ORDER BY r.created_at DESC LIMIT 50`),
        safe(sql`SELECT id, model_slug, chassis, kind, status, created_at, LEFT(body, 220) AS excerpt
                 FROM registry_submissions WHERE user_id = ${id} OR LOWER(submitter_email) = ${email}
                 ORDER BY created_at DESC LIMIT 50`),
        safe(sql`SELECT id, kind, status, created_at, LEFT(body, 220) AS excerpt
                 FROM model_contributions WHERE LOWER(submitter_email) = ${email}
                 ORDER BY created_at DESC LIMIT 50`),
        safe(sql`SELECT id, business_name, category, status, created_at
                 FROM provider_applications WHERE user_id = ${id} OR LOWER(email) = ${email}
                 ORDER BY created_at DESC LIMIT 20`),
        safe(sql`SELECT id, status, amount_cents, created_at
                 FROM gig_orders WHERE buyer_user_id = ${id} OR LOWER(buyer_email) = ${email}
                 ORDER BY created_at DESC LIMIT 20`),
        safe(sql`SELECT p.id, p.business_name, p.slug, p.category
                 FROM service_providers p JOIN users u ON u.clerk_user_id = p.clerk_user_id
                 WHERE u.id = ${id} AND p.clerk_user_id IS NOT NULL LIMIT 10`),
      ]);

      return NextResponse.json({ member, vehicles, listings, messages, reviews, registry, contributions, applications, orders, shops });
    }

    const q = (params.get('q') || '').trim().slice(0, 100);
    const like = `%${q}%`;
    const statusParam = params.get('status') || 'all';
    const status = (STATUSES as readonly string[]).includes(statusParam) ? statusParam : 'all';
    const bySeen = params.get('sort') === 'seen';

    const [summary] = await sql`
      SELECT
        COUNT(*)::int AS total,
        COUNT(*) FILTER (WHERE status = 'active')::int AS active,
        COUNT(*) FILTER (WHERE status = 'shadow')::int AS shadow,
        COUNT(*) FILTER (WHERE status = 'suspended')::int AS suspended,
        COUNT(*) FILTER (WHERE handle IS NOT NULL)::int AS with_handle,
        COUNT(*) FILTER (WHERE status = 'active' AND created_at > NOW() - INTERVAL '7 days')::int AS joined_week,
        COUNT(*) FILTER (WHERE last_seen_at > NOW() - INTERVAL '7 days')::int AS seen_week
      FROM users
    `;

    const members = await sql`
      SELECT u.id, u.email, u.name, u.handle, u.status, u.role, u.location, u.created_at, u.last_seen_at,
             (u.clerk_user_id IS NOT NULL) AS signed_in,
             (SELECT COUNT(*)::int FROM vehicles v WHERE v.user_id = u.id) AS vehicles,
             (SELECT COUNT(*)::int FROM listings l WHERE l.seller_id = u.id) AS listings,
             (SELECT COUNT(*)::int FROM messages m WHERE m.user_id = u.id) AS messages,
             (SELECT COUNT(*)::int FROM provider_reviews r WHERE r.user_id = u.id AND r.body IS NOT NULL) AS reviews
      FROM users u
      WHERE (${status} = 'all' OR u.status = ${status})
        AND (${q} = '' OR u.email ILIKE ${like} OR u.name ILIKE ${like} OR u.handle ILIKE ${like} OR u.location ILIKE ${like})
      ORDER BY
        CASE WHEN ${bySeen}::boolean THEN u.last_seen_at END DESC NULLS LAST,
        u.created_at DESC
      LIMIT 200
    `;
    return NextResponse.json({ summary, members });
  } catch (e) {
    // An outage must never look like an empty membership.
    return NextResponse.json({ error: (e as Error).message }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 503 });

  try {
    const { action, id } = await req.json();
    const rowId = Number(id);
    if (!Number.isInteger(rowId) || rowId <= 0) return NextResponse.json({ error: 'id required' }, { status: 400 });
    const sql = await getSql();

    if (action === 'suspend' || action === 'unsuspend') {
      // Same rule as the Stable admin: restoring a row that never signed in
      // goes back to 'shadow', so the status keeps meaning what it says.
      const done = action === 'suspend'
        ? await sql`UPDATE users SET status = 'suspended', updated_at = NOW()
                    WHERE id = ${rowId} AND role NOT IN ('admin', 'chris') RETURNING id`
        : await sql`UPDATE users SET status = CASE WHEN clerk_user_id IS NULL THEN 'shadow' ELSE 'active' END,
                    updated_at = NOW() WHERE id = ${rowId} AND status = 'suspended' RETURNING id`;
      if (!done.length) return NextResponse.json({ error: 'Nothing changed. Admin rows cannot be suspended.' }, { status: 400 });
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 });
  }
}
