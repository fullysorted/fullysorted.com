import { NextRequest, NextResponse } from 'next/server';
import { matchModelPage } from '@/lib/stable/match';

/**
 * Admin view of The Stable.
 * GET  ?view=vehicles|members&q=&filter=all|unmatched   (list + headline counts)
 * POST { action, id, modelSlug? }
 *   rematch         re-run the generation matcher against one vehicle
 *   set_model       pin a vehicle to a published research page by slug ('' clears it)
 *   delete_vehicle  remove a vehicle and its records (spam and test rows)
 *   suspend | unsuspend   block or restore a member
 *
 * Every vehicle is private. This route is the only place anyone other than
 * the owner sees one, so VINs are returned as the last six characters only and
 * nothing here ever changes a vehicle's visibility.
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

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 503 });

  const params = new URL(req.url).searchParams;
  const view = params.get('view') === 'members' ? 'members' : 'vehicles';
  const filter = params.get('filter') === 'unmatched' ? 'unmatched' : 'all';
  const q = (params.get('q') || '').trim().slice(0, 100);
  const like = `%${q}%`;

  try {
    const sql = await getSql();
    const [summary] = await sql`
      SELECT
        (SELECT COUNT(*)::int FROM users) AS members,
        (SELECT COUNT(*)::int FROM users WHERE status = 'active') AS members_active,
        (SELECT COUNT(*)::int FROM users WHERE status = 'suspended') AS members_suspended,
        (SELECT COUNT(*)::int FROM vehicles) AS vehicles,
        (SELECT COUNT(*)::int FROM vehicles WHERE model_slug IS NULL) AS unmatched,
        (SELECT COUNT(*)::int FROM vehicles WHERE created_at > NOW() - INTERVAL '7 days') AS vehicles_week,
        (SELECT COUNT(DISTINCT user_id)::int FROM vehicles) AS owners,
        (SELECT COUNT(*)::int FROM vehicle_records) AS records
    `;
    const topMakes = await sql`
      SELECT make, COUNT(*)::int AS n FROM vehicles
      WHERE make IS NOT NULL GROUP BY make ORDER BY n DESC, make LIMIT 8
    `;

    if (view === 'members') {
      const members = await sql`
        SELECT u.id, u.email, u.name, u.status, u.role, u.location, u.created_at, u.last_seen_at,
               (u.clerk_user_id IS NOT NULL) AS signed_in,
               (SELECT COUNT(*)::int FROM vehicles v WHERE v.user_id = u.id) AS vehicles,
               (SELECT COUNT(*)::int FROM listings l WHERE l.seller_id = u.id) AS listings
        FROM users u
        WHERE (${q} = '' OR u.email ILIKE ${like} OR u.name ILIKE ${like})
        ORDER BY u.last_seen_at DESC NULLS LAST, u.created_at DESC
        LIMIT 200
      `;
      return NextResponse.json({ summary, topMakes, members });
    }

    const vehicles = await sql`
      SELECT v.id, v.year, v.make, v.model, v.trim, v.nickname, v.chassis,
             RIGHT(v.vin, 6) AS vin_tail, v.model_slug, v.chassis_id, v.status, v.visibility,
             v.mileage, v.mileage_unit, v.created_at,
             u.id AS user_id, u.email AS owner_email, u.name AS owner_name,
             (SELECT COUNT(*)::int FROM vehicle_records r WHERE r.vehicle_id = v.id) AS records,
             (SELECT l.slug FROM listings l WHERE l.vehicle_id = v.id ORDER BY l.created_at DESC LIMIT 1) AS listing_slug
      FROM vehicles v
      JOIN users u ON u.id = v.user_id
      WHERE (${filter} = 'all' OR v.model_slug IS NULL)
        AND (${q} = '' OR v.make ILIKE ${like} OR v.model ILIKE ${like}
             OR v.vin ILIKE ${like} OR v.chassis ILIKE ${like} OR u.email ILIKE ${like})
      ORDER BY v.created_at DESC
      LIMIT 200
    `;
    return NextResponse.json({ summary, topMakes, vehicles });
  } catch (e) {
    // An outage must never look like an empty Stable.
    return NextResponse.json({ error: (e as Error).message }, { status: 503 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 503 });

  try {
    const { action, id, modelSlug } = await req.json();
    const rowId = Number(id);
    if (!Number.isInteger(rowId) || rowId <= 0) {
      return NextResponse.json({ error: 'id required' }, { status: 400 });
    }
    const sql = await getSql();

    if (action === 'rematch') {
      const rows = await sql`SELECT make, model, year FROM vehicles WHERE id = ${rowId} LIMIT 1`;
      if (!rows.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      const found = await matchModelPage({
        make: rows[0].make as string | null,
        model: rows[0].model as string | null,
        year: rows[0].year as number | null,
      });
      // Same rule as intake: a wrong model page is worse than none, so an
      // ambiguous result changes nothing and the choice comes back to the admin.
      if (found.match) {
        await sql`UPDATE vehicles SET model_slug = ${found.match.slug}, updated_at = NOW() WHERE id = ${rowId}`;
      }
      return NextResponse.json({ ok: true, match: found.match, alternatives: found.alternatives });
    }

    if (action === 'set_model') {
      const slug = String(modelSlug ?? '').trim().replace(/^\/?research\/models\//, '').replace(/^\/+|\/+$/g, '');
      if (slug) {
        const exists = await sql`SELECT 1 FROM vehicle_models WHERE slug = ${slug} AND status = 'published' LIMIT 1`;
        if (!exists.length) return NextResponse.json({ error: `No published model page at "${slug}"` }, { status: 400 });
      }
      const done = await sql`
        UPDATE vehicles SET model_slug = ${slug || null}, updated_at = NOW() WHERE id = ${rowId} RETURNING id
      `;
      if (!done.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json({ ok: true, modelSlug: slug || null });
    }

    if (action === 'delete_vehicle') {
      // listings.vehicle_id carries no FK, so clear it by hand; records cascade.
      await sql`UPDATE listings SET vehicle_id = NULL WHERE vehicle_id = ${rowId}`;
      const done = await sql`DELETE FROM vehicles WHERE id = ${rowId} RETURNING id`;
      if (!done.length) return NextResponse.json({ error: 'Not found' }, { status: 404 });
      return NextResponse.json({ ok: true });
    }

    if (action === 'suspend' || action === 'unsuspend') {
      // Restoring goes to 'shadow' for a row that never signed in, so the
      // status keeps meaning what it says.
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
