/**
 * Data access for the Research model-history database (Phase 1).
 *
 * Public pages ONLY ever read rows with status = 'published'. Drafts and
 * reviewed-but-unpublished rows are invisible to the public and live only in
 * the /admin review queue.
 *
 * Everything degrades gracefully when DATABASE_URL is unset (local build /
 * preview deploys) — list functions return [] and lookups return null, so the
 * site builds and renders empty states instead of crashing.
 */

export interface ModelSource {
  id: number;
  title: string;
  url: string | null;
  publisher: string | null;
  source_type: string | null;
  reliability: string | null;
}

export interface ModelClaim {
  id: number;
  section: string | null;
  claim_text: string;
  confidence: string | null;
  status: string | null;
  source_ids: number[] | null;
  conflict_note: string | null;
}

export interface VehicleModelRow {
  id: number;
  slug: string;
  make: string;
  model: string;
  generation: string | null;
  generation_code: string | null;
  trim: string | null;
  year_start: number | null;
  year_end: number | null;
  body_styles: string[] | null;
  engines: string[] | null;
  production_total: number | null;
  production_notes: string | null;
  notable_trims: { name: string; note: string }[] | null;
  specs: Record<string, string> | null;
  summary: string | null;
  history: string | null;
  market_notes: string | null;
  what_to_look_for: string | null;
  common_problems: string | null;
  value_trajectory: string | null;
  hero_photo: string | null;
  overall_confidence: string | null;
  status: string;
  published_at: string | null;
  updated_at: string | null;
}

export interface ModelPage extends VehicleModelRow {
  sources: ModelSource[];
  claims: ModelClaim[];
}

function hasDb(): boolean {
  return !!process.env.DATABASE_URL;
}

async function sqlClient() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

/** All published models, newest first. Safe to call at build (returns [] with no DB). */
export async function getPublishedModels(): Promise<VehicleModelRow[]> {
  if (!hasDb()) return [];
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT * FROM vehicle_models
      WHERE status = 'published'
      ORDER BY make ASC, model ASC, year_start ASC
    `) as unknown as VehicleModelRow[];
    return rows;
  } catch (e) {
    console.error('getPublishedModels failed:', (e as Error)?.message);
    return [];
  }
}

export interface VehicleModelRowMeta extends VehicleModelRow {
  source_count: number;
  claim_count: number;
  disputed_count: number;
}

/** Published models + source/claim/disputed counts, for the browse directory. */
export async function getPublishedModelsWithMeta(): Promise<VehicleModelRowMeta[]> {
  if (!hasDb()) return [];
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT m.*,
        (SELECT COUNT(*) FROM model_sources s WHERE s.model_id = m.id)::int AS source_count,
        (SELECT COUNT(*) FROM model_claims c WHERE c.model_id = m.id)::int AS claim_count,
        (SELECT COUNT(*) FROM model_claims c WHERE c.model_id = m.id AND c.status = 'disputed')::int AS disputed_count
      FROM vehicle_models m
      WHERE m.status = 'published'
      ORDER BY m.make ASC, m.model ASC, m.year_start ASC
    `) as unknown as VehicleModelRowMeta[];
    return rows;
  } catch (e) {
    console.error('getPublishedModelsWithMeta failed:', (e as Error)?.message);
    return [];
  }
}

/** A single PUBLISHED model by make + model-or-generation slug, with sources + claims. */
export async function getPublishedModelBySlug(
  make: string,
  modelSlug: string
): Promise<ModelPage | null> {
  if (!hasDb()) return null;
  const slug = `${make}/${modelSlug}`.toLowerCase();
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT * FROM vehicle_models
      WHERE LOWER(slug) = ${slug} AND status = 'published'
      LIMIT 1
    `) as unknown as VehicleModelRow[];
    const m = rows[0];
    if (!m) return null;

    const [sources, claims] = await Promise.all([
      sql`SELECT id, title, url, publisher, source_type, reliability
          FROM model_sources WHERE model_id = ${m.id} ORDER BY id ASC` as unknown as Promise<ModelSource[]>,
      sql`SELECT id, section, claim_text, confidence, status, source_ids, conflict_note
          FROM model_claims WHERE model_id = ${m.id} ORDER BY id ASC` as unknown as Promise<ModelClaim[]>,
    ]);

    return { ...m, sources, claims };
  } catch (e) {
    console.error('getPublishedModelBySlug failed:', (e as Error)?.message);
    return null;
  }
}

export interface ModelMarketSnapshot {
  count: number;
  median: number | null;
  avg: number | null;
  low: number | null;
  high: number | null;
}

/** Live sold-price snapshot for a model, aggregated from public auction results. */
export async function getModelMarketSnapshot(make: string, model: string): Promise<ModelMarketSnapshot> {
  const empty: ModelMarketSnapshot = { count: 0, median: null, avg: null, low: null, high: null };
  if (!hasDb()) return empty;
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT sale_price FROM auction_results
      WHERE LOWER(make) = ${make.toLowerCase()}
        AND LOWER(model) LIKE ${`%${model.toLowerCase().split(' ')[0]}%`}
        AND sold = true AND sale_price IS NOT NULL AND sale_price > 1000
      ORDER BY auction_date DESC
      LIMIT 80
    `) as { sale_price: number }[];
    const prices = rows.map((r) => r.sale_price).filter(Boolean).sort((a, b) => a - b);
    if (!prices.length) return empty;
    return {
      count: prices.length,
      median: prices[Math.floor(prices.length / 2)],
      avg: Math.round(prices.reduce((a, b) => a + b, 0) / prices.length),
      low: prices[0],
      high: prices[prices.length - 1],
    };
  } catch (e) {
    console.error('getModelMarketSnapshot failed:', (e as Error)?.message);
    return empty;
  }
}

export interface SimilarListing {
  slug: string;
  year: number;
  make: string;
  model: string;
  price: number;
  hero_photo: string | null;
  photos: string[] | null;
  sorted_price: boolean | null;
  mileage: number | null;
  city: string | null;
  state: string | null;
}

/** Active marketplace listings that match a model — the research-to-buy bridge. */
export async function getActiveListingsForModel(make: string, model: string, limit = 4): Promise<SimilarListing[]> {
  if (!hasDb()) return [];
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT slug, year, make, model, price, hero_photo, photos, sorted_price, mileage, city, state
      FROM listings
      WHERE status = 'active'
        AND LOWER(make) = ${make.toLowerCase()}
        AND LOWER(model) LIKE ${`%${model.toLowerCase().split(' ')[0]}%`}
      ORDER BY sorted_price DESC NULLS LAST, featured DESC, created_at DESC
      LIMIT ${limit}
    `) as unknown as SimilarListing[];
    return rows;
  } catch (e) {
    console.error('getActiveListingsForModel failed:', (e as Error)?.message);
    return [];
  }
}

/** Split a stored slug "porsche/911-964" → { make: "porsche", modelSlug: "911-964" }. */
export function parseModelSlug(slug: string): { make: string; modelSlug: string } {
  const [make, ...rest] = slug.split('/');
  return { make, modelSlug: rest.join('/') };
}

export function modelDisplayName(m: Pick<VehicleModelRow, 'make' | 'model' | 'generation'>): string {
  return [m.make, m.model, m.generation && `(${m.generation})`].filter(Boolean).join(' ');
}
