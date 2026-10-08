import { NextRequest, NextResponse } from 'next/server';
import { isTeam } from '@/lib/team-auth';

// GET /api/stats
//
// Read-only aggregate counts behind the /team/board page. Numbers only: no
// names, emails, slugs or ids leave this route. Gated by the team cookie all
// the same, because "3 providers live" is not a number to hand a competitor.
//
// Neon cost: two queries per hit, and the board polls every five minutes, so
// a phone left on this page all day is a few hundred COUNT(*) rows, not a
// connection per second.

export const dynamic = 'force-dynamic';

type Row = Record<string, number | string | null>;
const n = (v: unknown) => (typeof v === 'number' ? v : Number(v) || 0);

export async function GET(request: NextRequest) {
  if (!isTeam(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'unavailable' }, { status: 503 });
  }
  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  try {
    // Core tables. These are created at startup by instrumentation.ts, so a
    // missing one is a real outage, not a soft state.
    const core = (await sql`
      SELECT
        (SELECT COUNT(*) FROM service_providers WHERE status = 'active')                              AS providers_live,
        (SELECT COUNT(*) FROM service_providers WHERE clerk_user_id IS NOT NULL)                       AS providers_linked,
        (SELECT COUNT(*) FROM service_providers WHERE outreach_status = 'staged')                      AS pipeline_staged,
        (SELECT COUNT(*) FROM service_providers WHERE outreach_status = 'sent')                        AS pipeline_sent,
        (SELECT COUNT(*) FROM service_providers WHERE outreach_status = 'claimed')                     AS pipeline_claimed,
        (SELECT COUNT(*) FROM service_providers WHERE outreach_status = 'list_only')                   AS pipeline_list_only,
        (SELECT COUNT(*) FROM service_providers WHERE outreach_status = 'declined')                    AS pipeline_declined,
        (SELECT COUNT(*) FROM service_providers WHERE outreach_sent_at >= NOW() - INTERVAL '7 days')   AS outreach_sent_7d,
        (SELECT COUNT(*) FROM provider_applications WHERE status = 'pending')                          AS applications_pending,
        (SELECT COUNT(*) FROM listings WHERE status = 'active')                                        AS cars_active,
        (SELECT COUNT(*) FROM listings WHERE status IN ('draft', 'pending'))                           AS cars_in_progress,
        (SELECT COUNT(*) FROM listings WHERE status = 'sold')                                          AS cars_sold,
        (SELECT COUNT(*) FROM listings WHERE created_at >= NOW() - INTERVAL '7 days')                  AS cars_new_7d,
        (SELECT COUNT(*) FROM vehicle_models WHERE status = 'published')                               AS models_published,
        (SELECT COUNT(*) FROM vehicle_models WHERE status <> 'published')                              AS models_draft,
        (SELECT COUNT(*) FROM vehicle_models WHERE published_at >= NOW() - INTERVAL '30 days')         AS models_published_30d,
        (SELECT COUNT(*) FROM messages WHERE provider_id IS NOT NULL)                                  AS leads_total,
        (SELECT COUNT(*) FROM messages WHERE provider_id IS NOT NULL AND created_at >= NOW() - INTERVAL '7 days')   AS leads_7d,
        (SELECT COUNT(*) FROM messages WHERE provider_id IS NOT NULL AND created_at >= NOW() - INTERVAL '30 days')  AS leads_30d,
        (SELECT COUNT(*) FROM messages WHERE provider_id IS NULL AND created_at >= NOW() - INTERVAL '7 days')       AS car_enquiries_7d,
        (SELECT COUNT(*) FROM provider_reviews WHERE status = 'published')                             AS reviews_published,
        (SELECT COUNT(*) FROM provider_reviews WHERE status = 'pending')                               AS reviews_pending,
        (SELECT COUNT(*) FROM users)                                                                   AS users_total,
        (SELECT COUNT(*) FROM users WHERE created_at >= NOW() - INTERVAL '7 days')                     AS users_new_7d,
        (SELECT COUNT(*) FROM registry_chassis WHERE status = 'published')                             AS registry_chassis,
        (SELECT COUNT(*) FROM vehicles)                                                                AS stable_vehicles
    `) as Row[];

    // Boards and click tracking create their tables lazily on first write, so
    // on a fresh database these can be absent. Zero, not a 500.
    let boards: Row = {};
    try {
      boards = ((await sql`
        SELECT
          (SELECT COUNT(*) FROM parts_posts WHERE status = 'approved')                                AS parts_live,
          (SELECT COUNT(*) FROM parts_posts WHERE status = 'pending')                                 AS parts_pending,
          (SELECT COUNT(*) FROM wanted_posts WHERE status = 'approved')                               AS wanted_open,
          (SELECT COUNT(*) FROM wanted_posts WHERE status = 'pending')                                AS wanted_pending,
          (SELECT COUNT(*) FROM contact_clicks WHERE created_at >= NOW() - INTERVAL '7 days')         AS contact_clicks_7d
      `) as Row[])[0] || {};
    } catch {
      boards = {};
    }

    const c = core[0] || {};
    const body = {
      generated_at: new Date().toISOString(),
      providers: {
        live: n(c.providers_live),
        linked: n(c.providers_linked),
        applications_pending: n(c.applications_pending),
      },
      pipeline: {
        staged: n(c.pipeline_staged),
        sent: n(c.pipeline_sent),
        claimed: n(c.pipeline_claimed),
        list_only: n(c.pipeline_list_only),
        declined: n(c.pipeline_declined),
        sent_7d: n(c.outreach_sent_7d),
      },
      leads: {
        total: n(c.leads_total),
        last_7d: n(c.leads_7d),
        last_30d: n(c.leads_30d),
        car_enquiries_7d: n(c.car_enquiries_7d),
        contact_clicks_7d: n(boards.contact_clicks_7d),
      },
      marketplace: {
        cars_active: n(c.cars_active),
        cars_in_progress: n(c.cars_in_progress),
        cars_sold: n(c.cars_sold),
        cars_new_7d: n(c.cars_new_7d),
        parts_live: n(boards.parts_live),
        parts_pending: n(boards.parts_pending),
        wanted_open: n(boards.wanted_open),
        wanted_pending: n(boards.wanted_pending),
      },
      research: {
        models_published: n(c.models_published),
        models_draft: n(c.models_draft),
        models_published_30d: n(c.models_published_30d),
        registry_chassis: n(c.registry_chassis),
      },
      community: {
        reviews_published: n(c.reviews_published),
        reviews_pending: n(c.reviews_pending),
        users_total: n(c.users_total),
        users_new_7d: n(c.users_new_7d),
        stable_vehicles: n(c.stable_vehicles),
      },
    };

    return NextResponse.json(body, { headers: { 'Cache-Control': 'private, no-store' } });
  } catch (e) {
    console.error('[stats] query failed', e);
    // Outage must never look like zeros.
    return NextResponse.json({ error: 'unavailable' }, { status: 503 });
  }
}
