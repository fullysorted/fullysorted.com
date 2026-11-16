/**
 * The scanner's read (2026-11-16): photos of one item in, listing fields out.
 *
 * What it is for: a member with a shelf of models, a box of brochures or a
 * wall of posters photographs each one and gets a draft to correct, instead
 * of typing every headline from nothing.
 *
 * What it must never do, and the prompt says so:
 *   - State anything it cannot read or see in the photos. A reference number
 *     that is not legible is left empty, not guessed from the look of the box.
 *   - Call anything original, period, signed, limited or rare on its own
 *     judgment. Those are the seller's claims to make (Parts board rule 2).
 *   - Give a value. Prices come from sources, never from the model's memory.
 *
 * Instead it reports `seen` (what the read rests on) and `missing` (the photo
 * that would settle what is open), so the member knows what to check.
 *
 * Model: Sonnet at low effort with structured output, same shape of call as
 * the /sell writer. Up to SCAN_READ_PHOTOS photos, already shrunk to 1600px
 * by the browser. Expect one to three cents a read; the real figure is the
 * "[ai] scan-read ... est=$" line in the Vercel logs.
 */
import { getAnthropic, MODELS, houseDashes, logUsage, emptyUsage, addUsage } from './client';
import { PARTS_KINDS, PARTS_CATEGORIES, PARTS_CONDITIONS, type PartsKind, type PartsCategoryKey, type PartsCondition } from '@/lib/parts-shared';
import { SCAN_READ_PHOTOS, type ScanConfidence } from '@/lib/scan-shared';

export interface ScanRead {
  kind: PartsKind;
  category: PartsCategoryKey;
  title: string;
  body: string;
  make: string | null;
  model: string | null;
  partNumber: string | null;
  condition: PartsCondition | null;
  maker: string | null;
  scale: string | null;
  reference: string | null;
  era: string | null;
  confidence: ScanConfidence;
  seen: string[];
  missing: string[];
  usd: number;
}

const SHELVES = PARTS_CATEGORIES.map((c) => `  ${c.key} (${c.kind}): ${c.label}. ${c.blurb}`).join('\n');
const CONDITIONS = PARTS_CONDITIONS.map((c) => `${c.key} = ${c.label}`).join('; ');

const SYSTEM = `You read photographs of ONE item for Fully Sorted, a US collector car site, and draft the fields of a for-sale listing. The owner corrects your draft before anything is published, under their own name. The item is automotive: a scale model or toy, a car part, a brochure or manual, a sign, a poster, a painting or photograph, apparel, or another collectible.

WHAT YOU MAY STATE
- Only what you can read or plainly see in the photos: printed text on the box, label, baseplate, plinth, casting, spine or margin; the item itself; visible wear and damage.
- Copy numbers and names exactly as printed. If text is present but not legible, do not guess it: leave the field empty and name the photo that would settle it in "missing".
- Never decide on your own that something is original, period, a first printing, signed, numbered, limited, rare, race-used or matching. If the item itself says so in print ("Limited Edition 0345/1000"), report that the box or plaque says it. Otherwise leave it out.
- Never give a price, a value or an opinion on desirability.
- If the photos show more than one item, describe the one that is most central and say so in "missing".

FIELDS
- kind and category: pick the one shelf that fits from this list. The category decides the kind.
${SHELVES}
- title: the headline a buyer scans. Lead with what identifies it. Scale model: maker, scale, car, then year, color or race number if visible, then "boxed" if a box is in the photos. Part: what it is, part number if legible, what it is marked for. Print or poster: event or subject, year if printed, medium if evident. At most 110 characters. No adjectives.
- body: two to five plain sentences. What it is. What is in the photos (box, plinth, certificate, mirrors and aerials present or not, both sides of a sign). Visible condition, stated plainly, including damage. For a part, any stamped or cast numbers you can read. Write as the owner would ("Comes with its box."), without "I". Do not mention photos, the camera or yourself. No hype, no exclamation marks, no em dashes or en dashes, no emoji, US spelling.
- make and model: the car the item is of or for (Ferrari, 250 GTO). Empty if it is not tied to one.
- maker: who made the item itself (CMC, BBR, Minichamps, Bburago, Bosch, Weber, the printer or the artist as printed). Empty if not legible or evident from a mark.
- scale: for models only, as printed or stamped, in the form 1:18. Empty unless you can read it or the box states it. Do not estimate scale from apparent size.
- reference: the maker's own catalog or reference number as printed on the box or base. Empty if not legible.
- partNumber: for car parts only, the stamped, cast or labeled part number. Empty otherwise.
- era: the year or decade of the item itself if printed or evident from a dated mark (a brochure print code, a copyright line). This is not the year of the car depicted. Empty if not shown.
- condition: one of ${CONDITIONS}; or empty. Use "new" only for an item visibly sealed. A displayed model with or without its box is "used". Use "repro" only when the item is marked as a reproduction. Empty when you cannot tell.
- confidence: "high" when maker and subject are both read from print on the item or its box; "medium" when the subject is clear but maker, scale or reference is not read from print; "low" when you are identifying mostly from appearance.
- seen: two to five short notes on what the read rests on, quoting print where you can ("Box end label reads M-153").
- missing: up to four short notes naming the photo or fact that would settle what is open ("Photo of the baseplate for maker and scale"). Empty when nothing is open.

Use an empty string for any field you cannot fill. An empty field is correct; a guess is not.`;

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    category: { type: 'string', enum: PARTS_CATEGORIES.map((c) => c.key) },
    title: { type: 'string' },
    body: { type: 'string' },
    make: { type: 'string' },
    model: { type: 'string' },
    maker: { type: 'string' },
    scale: { type: 'string' },
    reference: { type: 'string' },
    partNumber: { type: 'string' },
    era: { type: 'string' },
    condition: { type: 'string', enum: ['', ...PARTS_CONDITIONS.map((c) => c.key)] },
    confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
    seen: { type: 'array', items: { type: 'string' } },
    missing: { type: 'array', items: { type: 'string' } },
  },
  required: ['category', 'title', 'body', 'make', 'model', 'maker', 'scale', 'reference', 'partNumber', 'era', 'condition', 'confidence', 'seen', 'missing'],
};

const tidy = (v: unknown, max: number): string =>
  houseDashes(String(v ?? '')).replace(/!/g, '.').replace(/\s+/g, ' ').trim().slice(0, max);
const orNull = (v: unknown, max: number): string | null => tidy(v, max) || null;
const list = (v: unknown, max: number): string[] =>
  Array.isArray(v) ? v.map((x) => tidy(x, 200)).filter(Boolean).slice(0, max) : [];

/**
 * Turn the model's JSON into fields the site will accept. Pure, so it can be
 * tested without a key. Anything off-list is dropped rather than trusted.
 */
export function shapeScanRead(raw: Record<string, unknown>, hintKind?: PartsKind): Omit<ScanRead, 'usd'> {
  const cat =
    PARTS_CATEGORIES.find((c) => c.key === raw.category) ??
    PARTS_CATEGORIES.find((c) => c.key === (hintKind === 'part' ? 'other_part' : hintKind === 'art' ? 'other_art' : 'other_memo'))!;
  const kind = PARTS_KINDS.find((k) => k.key === cat.kind)!.key;
  const scaleRaw = tidy(raw.scale, 12).replace(/\s+/g, '').replace('/', ':');
  const scale = /^1:\d{1,3}$/.test(scaleRaw) ? scaleRaw : null;
  const condition = PARTS_CONDITIONS.find((c) => c.key === raw.condition)?.key ?? null;
  const confidence = (['high', 'medium', 'low'].includes(String(raw.confidence)) ? raw.confidence : 'low') as ScanConfidence;
  return {
    kind,
    category: cat.key,
    title: tidy(raw.title, 140) || 'Untitled item',
    body: tidy(raw.body, 3000),
    make: orNull(raw.make, 60),
    model: orNull(raw.model, 80),
    // A part number only means something on a part; a model's number is its reference.
    partNumber: kind === 'part' ? orNull(raw.partNumber, 60) : null,
    condition,
    maker: orNull(raw.maker, 60),
    scale: cat.key === 'models' ? scale : null,
    reference: orNull(raw.reference, 60),
    era: orNull(raw.era, 40),
    confidence,
    seen: list(raw.seen, 5),
    missing: list(raw.missing, 4),
  };
}

/** Read one item from its photos. `photos` must already be URLs we host. */
export async function readItem(input: { photos: string[]; kind?: PartsKind; hint?: string }): Promise<ScanRead> {
  const photos = input.photos.slice(0, SCAN_READ_PHOTOS);
  const kindLabel = PARTS_KINDS.find((k) => k.key === input.kind)?.label;
  const lines = [
    `${photos.length} photo${photos.length === 1 ? '' : 's'} of one item.`,
    kindLabel ? `The owner filed it under: ${kindLabel}. Use that unless the photos plainly show otherwise.` : '',
    input.hint ? `The owner's note (treat as their claim, not as something you saw): ${input.hint}` : '',
  ].filter(Boolean);

  const client = getAnthropic();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const params: any = {
    model: MODELS.write,
    max_tokens: 1500,
    system: [{ type: 'text', text: SYSTEM, cache_control: { type: 'ephemeral' } }],
    messages: [
      {
        role: 'user',
        content: [
          ...photos.map((url) => ({ type: 'image', source: { type: 'url', url } })),
          { type: 'text', text: lines.join('\n') },
        ],
      },
    ],
    output_config: { effort: 'low', format: { type: 'json_schema', schema: SCHEMA } },
  };
  const msg = await client.messages.create(params);
  const usage = emptyUsage();
  addUsage(usage, MODELS.write, msg.usage);
  logUsage('scan-read', MODELS.write, usage, `photos=${photos.length}`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const text = (msg.content as any[]).find((b) => b?.type === 'text')?.text ?? '{}';
  const raw = JSON.parse(text) as Record<string, unknown>;
  return { ...shapeScanRead(raw, input.kind), usd: usage.usd };
}
