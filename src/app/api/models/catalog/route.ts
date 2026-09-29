import { NextResponse } from 'next/server';

/**
 * GET /api/models/catalog -- the published model histories, slimmed down to
 * what a form needs to suggest make, model, trim and body: no history text.
 *
 * Feeds the pickers on /sell so a seller chooses "911 (long-hood), 1964-73"
 * from the same list the research hub is built on, instead of typing a model
 * name we then have to guess at. Cached for an hour at the edge; the list only
 * changes when a seed lands, and Neon should not see this per keystroke.
 */
export const revalidate = 3600;

type Row = Record<string, unknown>;

function names(v: unknown): string[] {
  if (!Array.isArray(v)) return [];
  return v
    .map((x) => (typeof x === 'string' ? x : x && typeof x === 'object' && 'name' in x ? String((x as { name: unknown }).name) : ''))
    .map((s) => s.trim())
    .filter((s) => s && s.length <= 80);
}

export async function GET() {
  if (!process.env.DATABASE_URL) return NextResponse.json({ models: [] });
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = (await sql`
      SELECT slug, make, model, generation, year_start, year_end, notable_trims, body_styles
      FROM vehicle_models
      WHERE status = 'published'
      ORDER BY make ASC, model ASC, year_start ASC
    `) as Row[];
    const models = rows.map((r) => ({
      slug: String(r.slug),
      make: String(r.make),
      model: String(r.model),
      generation: r.generation ? String(r.generation) : null,
      yearStart: r.year_start == null ? null : Number(r.year_start),
      yearEnd: r.year_end == null ? null : Number(r.year_end),
      trims: names(r.notable_trims).slice(0, 20),
      bodies: names(r.body_styles).slice(0, 8),
    }));
    return NextResponse.json(
      { models },
      { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } },
    );
  } catch (err) {
    console.error('[models/catalog] failed:', err);
    // Suggestions are a convenience. Their absence must never block a listing.
    return NextResponse.json({ models: [] }, { status: 503 });
  }
}
