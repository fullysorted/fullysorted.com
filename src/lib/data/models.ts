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
 *
 * That graceful degradation had one cost: a caller receiving [] could not tell
 * "nothing is published yet" from "the database did not answer", so an outage
 * rendered as an editorial empty state ("check back shortly") and a live model
 * URL 404'd. The `*Result` variants below carry that distinction. `ok` is true
 * only when the query actually ran and returned; it is false both when the
 * query threw and when there is no DATABASE_URL to query, because in neither
 * case do we have an answer to report. The original functions are unchanged.
 */

/** A list query that knows whether it got an answer. `ok: false` = no answer. */
export interface ModelQueryResult<T> {
  rows: T[];
  ok: boolean;
}

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

export interface ModelContribution {
  id: number;
  kind: string;
  section: string | null;
  body: string;
  submitter_name: string | null;
  submitter_credential: string | null;
  published_at: string | null;
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
  hero_photo_credit: string | null;
  overall_confidence: string | null;
  status: string;
  published_at: string | null;
  updated_at: string | null;
}

export interface ModelPage extends VehicleModelRow {
  sources: ModelSource[];
  claims: ModelClaim[];
  contributions?: ModelContribution[];
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

/**
 * Same query as getPublishedModels(), reporting whether the database answered.
 * Callers that render an empty state must use this one — see the note at the
 * top of this file.
 */
export async function getPublishedModelsResult(): Promise<ModelQueryResult<VehicleModelRow>> {
  if (!hasDb()) return { rows: [], ok: false };
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT * FROM vehicle_models
      WHERE status = 'published'
      ORDER BY make ASC, model ASC, year_start ASC
    `) as unknown as VehicleModelRow[];
    return { rows, ok: true };
  } catch (e) {
    console.error('getPublishedModelsResult failed:', (e as Error)?.message);
    return { rows: [], ok: false };
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

/** getPublishedModelsWithMeta(), reporting whether the database answered. */
export async function getPublishedModelsWithMetaResult(): Promise<ModelQueryResult<VehicleModelRowMeta>> {
  if (!hasDb()) return { rows: [], ok: false };
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
    return { rows, ok: true };
  } catch (e) {
    console.error('getPublishedModelsWithMetaResult failed:', (e as Error)?.message);
    return { rows: [], ok: false };
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

    const [sources, claims, contributions] = await Promise.all([
      sql`SELECT id, title, url, publisher, source_type, reliability
          FROM model_sources WHERE model_id = ${m.id} ORDER BY id ASC` as unknown as Promise<ModelSource[]>,
      sql`SELECT id, section, claim_text, confidence, status, source_ids, conflict_note
          FROM model_claims WHERE model_id = ${m.id} ORDER BY id ASC` as unknown as Promise<ModelClaim[]>,
      // Approved owner contributions only — pending text must never render.
      sql`SELECT id, kind, section, body, submitter_name, submitter_credential, published_at
          FROM model_contributions
          WHERE model_id = ${m.id} AND status = 'approved'
          ORDER BY published_at DESC NULLS LAST, id DESC` as unknown as Promise<ModelContribution[]>,
    ]);

    return { ...m, sources, claims, contributions };
  } catch (e) {
    console.error('getPublishedModelBySlug failed:', (e as Error)?.message);
    return null;
  }
}

/**
 * The same lookup, reporting whether the database answered. `model: null` with
 * `ok: true` means there genuinely is no such published model (a real 404);
 * `ok: false` means the lookup never got an answer, which must NOT 404 — a URL
 * that is live today would otherwise be dropped by crawlers on a bad minute.
 */
export interface ModelLookupResult {
  model: ModelPage | null;
  ok: boolean;
}

export async function getPublishedModelBySlugResult(
  make: string,
  modelSlug: string
): Promise<ModelLookupResult> {
  if (!hasDb()) return { model: null, ok: false };
  const slug = `${make}/${modelSlug}`.toLowerCase();
  try {
    const sql = await sqlClient();
    const rows = (await sql`
      SELECT * FROM vehicle_models
      WHERE LOWER(slug) = ${slug} AND status = 'published'
      LIMIT 1
    `) as unknown as VehicleModelRow[];
    const m = rows[0];
    if (!m) return { model: null, ok: true };

    const [sources, claims, contributions] = await Promise.all([
      sql`SELECT id, title, url, publisher, source_type, reliability
          FROM model_sources WHERE model_id = ${m.id} ORDER BY id ASC` as unknown as Promise<ModelSource[]>,
      sql`SELECT id, section, claim_text, confidence, status, source_ids, conflict_note
          FROM model_claims WHERE model_id = ${m.id} ORDER BY id ASC` as unknown as Promise<ModelClaim[]>,
      // Approved owner contributions only — pending text must never render.
      sql`SELECT id, kind, section, body, submitter_name, submitter_credential, published_at
          FROM model_contributions
          WHERE model_id = ${m.id} AND status = 'approved'
          ORDER BY published_at DESC NULLS LAST, id DESC` as unknown as Promise<ModelContribution[]>,
    ]);

    return { model: { ...m, sources, claims, contributions }, ok: true };
  } catch (e) {
    console.error('getPublishedModelBySlugResult failed:', (e as Error)?.message);
    return { model: null, ok: false };
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
    // Same minimum-n rule the Value Guide publishes, because this snapshot is
    // the same claim made in a smaller box: under three sales there is nothing
    // worth showing, and under six there is no honest midpoint — only a range.
    // This used to print a bold median off a single sale.
    const n = prices.length;
    if (n < 3) return { ...empty, count: n };
    const mid = Math.floor(n / 2);
    const hasMidpoint = n >= 6;
    // Same IQR pass the comps API runs, for the same reason: without it a
    // four-sale Corvette set holding one seven-figure L88 printed a range of
    // "$72,000 – $3,850,000", which describes no car anyone is likely to buy.
    const q = (pct: number) => {
      const pos = (n - 1) * pct;
      const base = Math.floor(pos);
      const rest = pos - base;
      return prices[base + 1] !== undefined ? prices[base] + rest * (prices[base + 1] - prices[base]) : prices[base];
    };
    let band = prices;
    if (n >= 4) {
      const iqr = q(0.75) - q(0.25);
      const trimmed = prices.filter((v) => v >= q(0.25) - 1.5 * iqr && v <= q(0.75) + 1.5 * iqr);
      if (trimmed.length >= 3) band = trimmed;
    }
    return {
      count: n,
      median: hasMidpoint ? (n % 2 === 1 ? prices[mid] : Math.round((prices[mid - 1] + prices[mid]) / 2)) : null,
      avg: hasMidpoint ? Math.round(band.reduce((a, b) => a + b, 0) / band.length) : null,
      low: band[0],
      high: band[band.length - 1],
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

/** A generation label that only repeats the model name ("F40 (F40)") is dropped. */
export function displayGeneration(m: Pick<VehicleModelRow, 'model' | 'generation'>): string | null {
  if (!m.generation) return null;
  return m.generation.trim().toLowerCase() === m.model.trim().toLowerCase() ? null : m.generation;
}

export function modelDisplayName(m: Pick<VehicleModelRow, 'make' | 'model' | 'generation'>): string {
  const gen = displayGeneration(m);
  return [m.make, m.model, gen && `(${gen})`].filter(Boolean).join(' ');
}
