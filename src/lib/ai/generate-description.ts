/**
 * Listing writer for /sell (rewritten 2026-10-14 to the credits-plan rules).
 *
 * What changed from the first version, and why:
 *   - It writes ONLY from what the seller typed and what our published model
 *     history says about that generation. No invented provenance, no "rare",
 *     no "one of the best examples" unless the seller said why.
 *   - Every description has a "What needs attention" paragraph. If the seller
 *     lists nothing, the route asks once before writing (see the route).
 *   - The "Expert take" is gone. It was an AI opinion signed "Fully Sorted"
 *     on a stranger's car, which is exactly the claim this site does not make.
 *   - Structured output (no tools), so the JSON always parses.
 *
 * Model: Sonnet at low effort. A short piece of writing, about 1 to 2 cents.
 */

import { getAnthropic, MODELS, houseDashes, logUsage, type UsageTotals } from './client';

interface VehicleInfo {
  year: number;
  make: string;
  model: string;
  trim?: string;
  mileage?: number;
  transmission?: string;
  engine?: string;
  exteriorColor?: string;
  interiorColor?: string;
  bodyStyle?: string;
  condition?: string;
  sellerNotes?: string;
  /** What needs attention, in the seller's words. "none" if they confirmed nothing. */
  attention?: string;
}

interface GeneratedContent {
  description: string;
  highlights: string[];
  /** Kept for the form's shape; always empty now. */
  expertTake: string;
}

const SYSTEM = `You write private-party collector car listings for Fully Sorted, a US classifieds site. The seller edits your draft before it is published, under their name.

RULES
- Use only facts the seller gave you, and general facts about this generation from the Fully Sorted model history if one is provided. Never invent history, ownership, service records, mileage claims, matching numbers, awards, rarity, or condition.
- Never write "rare", "one of the best", "investment", "must see", "won't last", "iconic", "legendary", "pristine", "concours" or any superlative unless the seller used that word themselves.
- Write in the seller's voice, first person ("I", "we" if the seller wrote "we"), plain and specific. Like a knowledgeable owner, not a dealer. No hype, no exclamation marks, no emoji, no em dashes or en dashes. US spelling.
- Structure: two to four short paragraphs. First what the car is and its spec. Then what has been done and how it has been used. Then a paragraph that starts with "What needs attention:" and states the seller's listed issues plainly. If the seller said nothing needs attention, write "What needs attention: nothing I know of. An independent pre-purchase inspection is welcome." Never soften or omit an issue the seller listed.
- You may add one sentence of context from the model history (for example what the generation is known for, or what buyers check), labeled as general to the model, never as a claim about this car.
- highlights: 3 to 6 short factual bullets taken from the seller's information only (spec, documented work, known history). No adjectives.`;

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    description: { type: 'string' },
    highlights: { type: 'array', items: { type: 'string' } },
  },
  required: ['description', 'highlights'],
};

async function modelHistoryContext(make: string, model: string, year: number): Promise<string> {
  if (!process.env.DATABASE_URL) return '';
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const rows = (await sql`
      SELECT make, model, generation, year_start, year_end, summary, what_to_look_for, common_problems
      FROM vehicle_models
      WHERE status = 'published' AND make ILIKE ${make}
        AND (model ILIKE ${`%${model}%`} OR ${model} ILIKE '%' || model || '%')
        AND (year_start IS NULL OR year_start <= ${year}) AND (year_end IS NULL OR year_end >= ${year})
      ORDER BY updated_at DESC LIMIT 1
    `) as Record<string, string | number | null>[];
    const m = rows[0];
    if (!m) return '';
    const clip = (s: unknown, n: number) => String(s ?? '').replace(/\s+/g, ' ').slice(0, n);
    return `FULLY SORTED MODEL HISTORY (general to the model, not this car): ${m.make} ${m.model}${m.generation ? ` ${m.generation}` : ''} (${m.year_start}-${m.year_end}).
Summary: ${clip(m.summary, 700)}
What buyers check: ${clip(m.what_to_look_for, 700)}
Known issues: ${clip(m.common_problems, 600)}`;
  } catch {
    return '';
  }
}

export async function generateListingDescription(
  vehicle: VehicleInfo
): Promise<GeneratedContent & { usd: number }> {
  const spec = [
    `${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.trim ? ` ${vehicle.trim}` : ''}`,
    vehicle.mileage ? `${vehicle.mileage.toLocaleString('en-US')} miles (as stated by seller)` : null,
    vehicle.transmission,
    vehicle.engine,
    vehicle.exteriorColor ? `${vehicle.exteriorColor} exterior` : null,
    vehicle.interiorColor ? `${vehicle.interiorColor} interior` : null,
    vehicle.bodyStyle,
    vehicle.condition,
  ]
    .filter(Boolean)
    .join(', ');

  const history = await modelHistoryContext(vehicle.make, vehicle.model, vehicle.year);
  const attention =
    vehicle.attention && vehicle.attention.trim().toLowerCase() !== 'none'
      ? vehicle.attention.trim()
      : 'The seller confirmed nothing needs attention.';

  const user = [
    `CAR: ${spec}`,
    `SELLER'S NOTES: ${vehicle.sellerNotes?.trim() || '(none given)'}`,
    `WHAT NEEDS ATTENTION (seller's words): ${attention}`,
    history,
  ]
    .filter(Boolean)
    .join('\n\n');

  const client = getAnthropic();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = {
    model: MODELS.write,
    max_tokens: 1500,
    system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
    messages: [{ role: 'user', content: user }],
    output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA } },
  };
  const msg = await client.messages.create(params);
  const u = msg.usage;
  const usage: UsageTotals = {
    input: u.input_tokens ?? 0,
    output: u.output_tokens ?? 0,
    cacheWrite: u.cache_creation_input_tokens ?? 0,
    cacheRead: u.cache_read_input_tokens ?? 0,
    searches: 0,
    fetches: 0,
    usd: 0,
  };
  usage.usd = (usage.input * 2 + usage.output * 10 + usage.cacheWrite * 2.5 + usage.cacheRead * 0.1) / 1_000_000;
  logUsage('listing-description', MODELS.write, usage);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const text = (msg.content as any[]).find((b) => b?.type === 'text')?.text ?? '{}';
  const parsed = JSON.parse(text) as { description?: string; highlights?: string[] };
  return {
    description: houseDashes(parsed.description ?? '').replace(/!/g, '.').trim(),
    highlights: (parsed.highlights ?? []).slice(0, 6).map((h) => houseDashes(h).replace(/!/g, '').trim()),
    expertTake: '',
    usd: usage.usd,
  };
}
