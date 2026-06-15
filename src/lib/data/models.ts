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

/** Split a stored slug "porsche/911-964" → { make: "porsche", modelSlug: "911-964" }. */
export function parseModelSlug(slug: string): { make: string; modelSlug: string } {
  const [make, ...rest] = slug.split('/');
  return { make, modelSlug: rest.join('/') };
}

export function modelDisplayName(m: Pick<VehicleModelRow, 'make' | 'model' | 'generation'>): string {
  return [m.make, m.model, m.generation && `(${m.generation})`].filter(Boolean).join(' ');
}
