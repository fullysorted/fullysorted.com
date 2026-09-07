/**
 * make + model + year -> the published research page for that GENERATION.
 *
 * This is the smallest, highest-leverage piece of code in The Stable.
 *
 * NHTSA hands back "PORSCHE / 911 / 2013". Our model pages are slugged by
 * generation, `porsche/911-991`, with `year_start` and `year_end` on the row.
 * Without this function a VIN decode is a row of specifications, which every
 * site has. With it, the decode lands on HIS car's page, with the history, the
 * production numbers and the things to look for. That is the difference
 * between the Stable feeling like a database and feeling like we know his car.
 *
 * Scoring happens in JavaScript rather than SQL on purpose: there are fewer
 * than a hundred published models, a single make returns a handful of rows,
 * and the ranking rules are easier to read, tune and be wrong about in one
 * place than buried in a CASE expression.
 */

export type ModelMatch = {
  slug: string;
  make: string;
  model: string;
  generation: string | null;
  yearStart: number | null;
  yearEnd: number | null;
  heroPhoto: string | null;
  /** How the match was reached, so callers can decide how loudly to claim it. */
  confidence: 'high' | 'medium';
};

type Row = Record<string, unknown>;

function db() {
  if (!process.env.DATABASE_URL) return null;
  // Imported lazily so this module is safe to pull into any route.
  return import('@neondatabase/serverless').then(({ neon }) =>
    neon(process.env.DATABASE_URL!),
  );
}

/** "911 Carrera 3.2" and "911carrera32" compare equal. */
function norm(v: unknown): string {
  return String(v ?? '').toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Pull apart what somebody typed into the one field: "1972 Datsun 240Z".
 *
 * The year is the only reliable anchor, so it is taken first wherever it
 * appears. The make is then matched against makes we actually publish, longest
 * name first, so "Land Rover Defender" does not become make "Land". Whatever
 * is left is the model.
 *
 * Deliberately forgiving. This field is the front door, and a person who types
 * "72 240z" should not be told they filled in a form wrong.
 */
export async function parseCarText(input: string): Promise<{
  year: number | null;
  make: string | null;
  model: string | null;
}> {
  const raw = String(input || '').trim();
  if (!raw) return { year: null, make: null, model: null };

  let year: number | null = null;
  let rest = raw;

  const yearMatch = raw.match(/\b(18|19|20)\d{2}\b/);
  if (yearMatch) {
    year = parseInt(yearMatch[0], 10);
    rest = (raw.slice(0, yearMatch.index) + ' ' + raw.slice(yearMatch.index! + 4)).trim();
  }

  let make: string | null = null;
  const sql = await db();
  if (sql) {
    try {
      const rows = (await sql`
        SELECT DISTINCT make FROM vehicle_models WHERE status = 'published'
      `) as Row[];
      const makes = rows
        .map((r) => String(r.make))
        .sort((a, b) => b.length - a.length);
      const flat = norm(rest);
      for (const m of makes) {
        if (flat.startsWith(norm(m)) || flat.includes(norm(m))) {
          make = m;
          // Remove the make from the string without disturbing the rest.
          const re = new RegExp(m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
          rest = rest.replace(re, ' ').trim();
          break;
        }
      }
    } catch {
      // Fall through to the positional guess below.
    }
  }

  if (!make) {
    const parts = rest.split(/\s+/).filter(Boolean);
    make = parts.shift() ?? null;
    rest = parts.join(' ');
  }

  const model = rest.replace(/\s+/g, ' ').trim() || null;
  return { year, make, model };
}

/**
 * Find the published model page for a car.
 *
 * Returns null rather than a plausible-looking wrong answer. Sending a Boxster
 * owner to the 911 page is worse than sending him nowhere: the first costs us
 * the moment, the second costs us his trust in everything else on the page.
 */
export type ModelLookup = {
  /** The one right answer, or null when there is not one. */
  match: ModelMatch | null;
  /** Set only when several generations fit equally well and the caller should ask. */
  alternatives: ModelMatch[];
};

export async function matchModelPage(input: {
  make: string | null | undefined;
  model: string | null | undefined;
  year?: number | null;
}): Promise<ModelLookup> {
  const make = String(input.make ?? '').trim();
  const model = String(input.model ?? '').trim();
  const EMPTY: ModelLookup = { match: null, alternatives: [] };
  if (!make && !model) return EMPTY;

  const sql = await db();
  if (!sql) return EMPTY;

  let rows: Row[];
  try {
    rows = (await sql`
      SELECT slug, make, model, generation, generation_code, year_start, year_end, hero_photo
      FROM vehicle_models
      WHERE status = 'published'
        AND (${make} = '' OR LOWER(make) = LOWER(${make}))
      LIMIT 300
    `) as Row[];
  } catch (err) {
    console.error('[stable/match] lookup failed:', err);
    return EMPTY;
  }
  if (!rows.length) return EMPTY;

  const wantModel = norm(model);
  const year = input.year ?? null;

  const scored: { row: Row; score: number }[] = [];
  let best: { row: Row; score: number } | null = null;

  for (const r of rows) {
    const rModel = norm(r.model);
    const rGen = norm(r.generation);
    const rGenCode = norm(r.generation_code);
    let score = 0;

    // Model name. Exact beats containment, containment beats nothing.
    if (wantModel && rModel && wantModel === rModel) score += 4;
    else if (wantModel && rModel && (wantModel.includes(rModel) || rModel.includes(wantModel))) score += 2;

    // A generation code typed into the field is the strongest possible signal:
    // somebody who writes "911 964" knows exactly which car they own.
    if (wantModel && rGen && wantModel.includes(rGen)) score += 3;
    if (wantModel && rGenCode && wantModel.includes(rGenCode)) score += 3;

    // Year inside the generation's span. This is what separates a 964 from a
    // 993 when the model name for both is just "911".
    const ys = r.year_start == null ? null : Number(r.year_start);
    const ye = r.year_end == null ? null : Number(r.year_end);
    if (year && (ys != null || ye != null)) {
      const afterStart = ys == null || year >= ys;
      const beforeEnd = ye == null || year <= ye;
      if (afterStart && beforeEnd) score += 3;
      else score -= 4; // Wrong generation. Actively disqualify it.
    }

    scored.push({ row: r, score });
    if (!best || score > best.score) best = { row: r, score };
  }

  // Threshold. A make match alone scores 0 and must not resolve to whichever
  // model page happened to sort first.
  if (!best || best.score < 4) return { match: null, alternatives: [] };

  // ── Ambiguity ────────────────────────────────────────────────────────────
  // Found in production 2026-09-07: "1985 Porsche 911" resolved to the 930
  // Turbo. Three published generations cover a 1985 911 -- the Carrera 3.2,
  // the SC and the Turbo -- and the query said nothing to separate them, so
  // scoring them equally meant whichever row sorted first won. A man with a
  // Carrera was being shown the Turbo's page and told it was his car.
  //
  // When nothing in the input distinguishes the top candidates, the honest
  // answer is not the first one. It is to say there are several and let him
  // pick. Same rule as everywhere else here: a wrong model page is worse than
  // no model page.
  const near = scored
    .filter((c) => c.score >= best!.score - 1)
    .sort((a, b) => b.score - a.score);

  const distinct = new Set(near.map((c) => String(c.row.slug)));
  const ambiguous = distinct.size > 1;

  const shape = (c: { row: Row; score: number }): ModelMatch => {
    const r = c.row;
    return {
      slug: String(r.slug),
      make: String(r.make),
      model: String(r.model),
      generation: r.generation ? String(r.generation) : null,
      yearStart: r.year_start == null ? null : Number(r.year_start),
      yearEnd: r.year_end == null ? null : Number(r.year_end),
      heroPhoto: r.hero_photo ? String(r.hero_photo) : null,
      confidence: c.score >= 6 ? 'high' : 'medium',
    };
  };

  if (ambiguous) {
    return { match: null, alternatives: near.slice(0, 4).map(shape) };
  }
  return { match: shape(best), alternatives: [] };
}

/**
 * Specialists for a marque.
 *
 * `service_providers.marques` exists but has no data yet, so this will return
 * nothing for a while. That is fine and it is why the caller must render this
 * section only when it is non-empty: an empty "specialists near you" heading
 * is a worse first impression than no heading at all.
 */
export async function specialistsForMake(make: string | null | undefined, limit = 4) {
  const m = String(make ?? '').trim();
  if (!m) return [];
  const sql = await db();
  if (!sql) return [];
  try {
    const rows = (await sql`
      SELECT slug, business_name, category, location
      FROM service_providers
      WHERE status = 'active'
        AND marques @> ${JSON.stringify([m])}::jsonb
      ORDER BY verified DESC NULLS LAST, id ASC
      LIMIT ${limit}
    `) as Row[];
    return rows.map((r) => ({
      slug: String(r.slug),
      businessName: String(r.business_name),
      category: r.category ? String(r.category) : null,
      location: r.location ? String(r.location) : null,
    }));
  } catch (err) {
    // marques may be absent, empty, or the column may not be indexed for @>.
    console.error('[stable/match] specialists lookup failed:', err);
    return [];
  }
}
