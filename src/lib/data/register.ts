/**
 * Data access for the Chassis Register.
 *
 * Public pages only read chassis rows with status = 'published'. Everything
 * degrades the same way as models.ts: no DATABASE_URL -> empty results with
 * ok:false, a thrown query -> ok:false, so a page can tell an outage from an
 * empty register and never 404 a live chassis URL because the database
 * blinked.
 *
 * Rows come back snake_case straight from neon(); the interfaces below are the
 * contract the pages render against.
 */

import { chassisSortKey } from '@/lib/register/chassis';

export interface RegisterQueryResult<T> {
  data: T;
  ok: boolean;
}

export interface RegisterModelSummary {
  model_slug: string;
  make: string | null;
  model: string | null;
  generation: string | null;
  year_start: number | null;
  year_end: number | null;
  production_total: number | null;
  production_notes: string | null;
  chassis_count: number;
  event_count: number;
  last_event_date: string | null;
}

export interface RegisterChassisRow {
  id: number;
  model_id: number | null;
  model_slug: string;
  chassis: string;
  vin: string | null;
  build_year: number | null;
  variant: string | null;
  market_spec: string | null;
  exterior_color: string | null;
  interior_color: string | null;
  engine_number: string | null;
  notes: string | null;
  confidence: string | null;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface RegisterChassisListItem extends RegisterChassisRow {
  event_count: number;
  first_event_date: string | null;
  last_event_date: string | null;
  last_event_title: string | null;
  last_event_outcome: string | null;
  last_event_type: string | null;
  disputed_count: number;
}

export interface RegisterEventRow {
  id: number;
  chassis_id: number;
  event_type: string;
  event_date: string | null;
  title: string;
  venue: string | null;
  location: string | null;
  outcome: string | null;
  price_amount: string | null;
  price_currency: string | null;
  estimate_low: string | null;
  estimate_high: string | null;
  mileage: number | null;
  mileage_unit: string | null;
  details: string | null;
  source_url: string;
  source_title: string | null;
  source_publisher: string | null;
  source_type: string | null;
  status: string;
  conflict_note: string | null;
  created_at: string;
}

export interface RegisterChassisPage {
  chassis: RegisterChassisRow;
  events: RegisterEventRow[];
  model: {
    slug: string;
    make: string;
    model: string;
    generation: string | null;
    year_start: number | null;
    year_end: number | null;
    production_total: number | null;
    status: string;
  } | null;
  /** Neighbours by chassis order, for prev/next navigation. */
  prev: { chassis: string } | null;
  next: { chassis: string } | null;
}

function hasDb(): boolean {
  return !!process.env.DATABASE_URL;
}

async function sqlClient() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

/** Every model with at least one published chassis. */
export async function getRegisterModels(): Promise<RegisterQueryResult<RegisterModelSummary[]>> {
  if (!hasDb()) return { data: [], ok: false };
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT c.model_slug,
             m.make, m.model, m.generation, m.year_start, m.year_end, m.production_total, m.production_notes,
             COUNT(DISTINCT c.id)::int AS chassis_count,
             COUNT(e.id)::int AS event_count,
             MAX(e.event_date) AS last_event_date
      FROM registry_chassis c
      LEFT JOIN vehicle_models m ON m.slug = c.model_slug
      LEFT JOIN registry_events e ON e.chassis_id = c.id
      WHERE c.status = 'published'
      GROUP BY c.model_slug, m.make, m.model, m.generation, m.year_start, m.year_end, m.production_total, m.production_notes
      ORDER BY m.make NULLS LAST, m.model NULLS LAST, c.model_slug
    `) as RegisterModelSummary[];
    return { data: rows, ok: true };
  } catch (err) {
    console.error('[register] getRegisterModels failed:', err);
    return { data: [], ok: false };
  }
}

export interface RegisterModelPage {
  summary: RegisterModelSummary | null;
  chassis: RegisterChassisListItem[];
}

/** One model's register: every published chassis with a one-line event summary. */
export async function getRegisterForModel(modelSlug: string): Promise<RegisterQueryResult<RegisterModelPage>> {
  const slug = modelSlug.toLowerCase();
  if (!hasDb()) return { data: { summary: null, chassis: [] }, ok: false };
  try {
    const sql = await sqlClient();
    const summaryRows = (await sql`
      SELECT c.model_slug,
             m.make, m.model, m.generation, m.year_start, m.year_end, m.production_total, m.production_notes,
             COUNT(DISTINCT c.id)::int AS chassis_count,
             COUNT(e.id)::int AS event_count,
             MAX(e.event_date) AS last_event_date
      FROM registry_chassis c
      LEFT JOIN vehicle_models m ON m.slug = c.model_slug
      LEFT JOIN registry_events e ON e.chassis_id = c.id
      WHERE c.status = 'published' AND c.model_slug = ${slug}
      GROUP BY c.model_slug, m.make, m.model, m.generation, m.year_start, m.year_end, m.production_total, m.production_notes
    `) as RegisterModelSummary[];
    const summary = summaryRows[0] ?? null;
    if (!summary) return { data: { summary: null, chassis: [] }, ok: true };

    const rows = (await sql`
      SELECT c.*,
             COALESCE(s.event_count, 0)::int AS event_count,
             s.first_event_date, s.last_event_date,
             COALESCE(s.disputed_count, 0)::int AS disputed_count,
             le.title AS last_event_title, le.outcome AS last_event_outcome, le.event_type AS last_event_type
      FROM registry_chassis c
      LEFT JOIN (
        SELECT chassis_id, COUNT(*) AS event_count, MIN(event_date) AS first_event_date, MAX(event_date) AS last_event_date,
               SUM(CASE WHEN status = 'disputed' THEN 1 ELSE 0 END) AS disputed_count
        FROM registry_events GROUP BY chassis_id
      ) s ON s.chassis_id = c.id
      LEFT JOIN LATERAL (
        SELECT title, outcome, event_type FROM registry_events e
        WHERE e.chassis_id = c.id ORDER BY e.event_date DESC NULLS LAST, e.id DESC LIMIT 1
      ) le ON TRUE
      WHERE c.status = 'published' AND c.model_slug = ${slug}
    `) as RegisterChassisListItem[];
    rows.sort((a, b) => (chassisSortKey(a.chassis) < chassisSortKey(b.chassis) ? -1 : 1));
    return { data: { summary, chassis: rows }, ok: true };
  } catch (err) {
    console.error('[register] getRegisterForModel failed:', err);
    return { data: { summary: null, chassis: [] }, ok: false };
  }
}

/** One chassis with its full event timeline (oldest first; undated events last). */
export async function getChassisPage(modelSlug: string, chassis: string): Promise<RegisterQueryResult<RegisterChassisPage | null>> {
  const slug = modelSlug.toLowerCase();
  const key = chassis.toUpperCase();
  if (!hasDb()) return { data: null, ok: false };
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT * FROM registry_chassis
      WHERE model_slug = ${slug} AND status = 'published' AND (chassis = ${key} OR vin = ${key})
      LIMIT 1
    `) as RegisterChassisRow[];
    const row = rows[0];
    if (!row) return { data: null, ok: true };

    const events = (await sql`
      SELECT * FROM registry_events WHERE chassis_id = ${row.id}
      ORDER BY event_date ASC NULLS LAST, id ASC
    `) as RegisterEventRow[];

    const modelRows = (await sql`
      SELECT slug, make, model, generation, year_start, year_end, production_total, status
      FROM vehicle_models WHERE slug = ${slug} LIMIT 1
    `) as RegisterChassisPage['model'][];

    const all = (await sql`
      SELECT chassis FROM registry_chassis WHERE model_slug = ${slug} AND status = 'published'
    `) as { chassis: string }[];
    all.sort((a, b) => (chassisSortKey(a.chassis) < chassisSortKey(b.chassis) ? -1 : 1));
    const idx = all.findIndex((c) => c.chassis === row.chassis);

    return {
      data: {
        chassis: row,
        events,
        model: modelRows[0] ?? null,
        prev: idx > 0 ? all[idx - 1] : null,
        next: idx >= 0 && idx < all.length - 1 ? all[idx + 1] : null,
      },
      ok: true,
    };
  } catch (err) {
    console.error('[register] getChassisPage failed:', err);
    return { data: null, ok: false };
  }
}

/** For the sitemap: every published chassis URL path. */
export async function getAllPublishedChassisPaths(): Promise<{ model_slug: string; chassis: string; updated_at: string }[]> {
  if (!hasDb()) return [];
  try {
    const sql = await sqlClient();
    return (await sql`
      SELECT model_slug, chassis, updated_at FROM registry_chassis WHERE status = 'published' LIMIT 20000
    `) as { model_slug: string; chassis: string; updated_at: string }[];
  } catch {
    return [];
  }
}

/** Count for a model-history page cross-link. */
export async function getRegisterCountForModel(modelSlug: string): Promise<number> {
  if (!hasDb()) return 0;
  try {
    const sql = await sqlClient();
    const r = (await sql`
      SELECT COUNT(*)::int AS n FROM registry_chassis WHERE model_slug = ${modelSlug.toLowerCase()} AND status = 'published'
    `) as { n: number }[];
    return r[0]?.n ?? 0;
  } catch {
    return 0;
  }
}

/**
 * Seed shape. Files under src/lib/data/register/ export one of these per
 * model; /api/admin/seed-register upserts them. Events are matched on
 * (chassis, source_url) so re-seeding refreshes a record without duplicating it.
 */
export interface RegisterSeedEvent {
  eventType: string;
  eventDate: string | null;
  title: string;
  venue?: string | null;
  location?: string | null;
  outcome?: string | null;
  priceAmount?: number | null;
  priceCurrency?: string | null;
  estimateLow?: number | null;
  estimateHigh?: number | null;
  mileage?: number | null;
  mileageUnit?: string | null;
  details?: string | null;
  sourceUrl: string;
  sourceTitle?: string | null;
  sourcePublisher?: string | null;
  sourceType?: string | null;
  status?: 'confirmed' | 'disputed' | 'owner_reported';
  conflictNote?: string | null;
}

export interface RegisterSeedChassis {
  chassis: string;
  vin?: string | null;
  buildYear?: number | null;
  variant?: string | null;
  marketSpec?: string | null;
  exteriorColor?: string | null;
  interiorColor?: string | null;
  engineNumber?: string | null;
  notes?: string | null;
  confidence?: 'high' | 'medium' | 'low';
  events: RegisterSeedEvent[];
}

export interface RegisterSeed {
  modelSlug: string;
  chassis: RegisterSeedChassis[];
}
