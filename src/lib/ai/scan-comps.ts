/**
 * Comps for one scanned item (2026-11-16). Staff only for now.
 *
 * The risk with any model-found price is that it is made up. Two guards:
 *   1. The prompt allows only results seen in this conversation's searches,
 *      each with its address, and forbids an estimate of value.
 *   2. keepSourcedComps() then drops every comp whose address the search tool
 *      did not actually return (runAgent reports those as `sources`). A price
 *      with no real page behind it never reaches the database. If the tool's
 *      result shape ever changes and no addresses are found, every comp is
 *      dropped: it fails empty, not wrong.
 *
 * Asking prices are kept but marked sold:false. An asking price is not a sale
 * and the page says so.
 *
 * Model: Haiku at low effort with up to three searches. Expect three to six
 * cents; the real figure is the "[ai] scan-comps ... est=$" log line.
 */
import { runAgent, parseJson, webSearchTool, MODELS, houseDashes } from './client';
import type { ScanComp, ScanItem } from '@/lib/scan-shared';

const SYSTEM = `You look up what one collectible automotive item has sold for, using web search, for the staff of Fully Sorted. You report prices you found. You never estimate.

RULES
- Search for the item as described: maker, scale or type, subject, and the maker's reference number when given. Prefer completed sales: auction house results, sold listings, dealer "sold" archives. Up to three searches.
- List only a result you actually saw in a search result in this conversation, with its address copied exactly as the search returned it. Never write an address from memory and never alter one.
- The result must be the same item: same maker, same scale, same subject. A different maker's model of the same car is not a comp. If the variant differs (color, race number, edition), say how in "title".
- sold: true only when the page shows a completed sale (sold, hammer, realized, ended with a winning bid). An item still for sale is sold: false, and its price is an asking price.
- price: the number as printed, digits only, in the currency printed. currency: the three-letter code. Do not convert.
- date: the sale date as printed, as YYYY-MM-DD or YYYY-MM. Empty string if the page does not give one. Never guess a date.
- venue: the auction house, marketplace or dealer.
- condition: the condition as that page describes it, in a few words. Empty if not stated.
- premium: "included" or "excluded" only if the page says whether the figure includes buyer's premium; otherwise "unknown".
- At most six results, most recent first. If you find nothing that is the same item, return an empty list. An empty list is a correct answer.
- note: one or two sentences saying what you searched for and what limits the results (few sales, only asking prices, variants). No value estimate, no range, no advice on pricing.

Return ONLY a JSON object: {"comps":[{"title":"","price":0,"currency":"USD","date":"","venue":"","url":"","sold":true,"condition":"","premium":"unknown"}],"note":""}`;

const REPAIR_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    comps: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          title: { type: 'string' },
          price: { type: 'number' },
          currency: { type: 'string' },
          date: { type: 'string' },
          venue: { type: 'string' },
          url: { type: 'string' },
          sold: { type: 'boolean' },
          condition: { type: 'string' },
          premium: { type: 'string', enum: ['included', 'excluded', 'unknown'] },
        },
        required: ['title', 'price', 'currency', 'date', 'venue', 'url', 'sold', 'condition', 'premium'],
      },
    },
    note: { type: 'string' },
  },
  required: ['comps', 'note'],
};

/** Host and path only, so a tracking parameter or a trailing slash does not hide a real match. */
export function urlKey(u: string): string | null {
  try {
    const p = new URL(u.trim());
    if (p.protocol !== 'https:' && p.protocol !== 'http:') return null;
    return `${p.hostname.toLowerCase().replace(/^www\./, '')}${p.pathname.replace(/\/+$/, '')}`;
  } catch {
    return null;
  }
}

/**
 * Keep only comps with a usable price and an address the search tool returned.
 * Pure, so the guard itself is tested without a key.
 */
export function keepSourcedComps(raw: unknown, sources: string[]): ScanComp[] {
  const allowed = new Set(sources.map(urlKey).filter((k): k is string => !!k));
  const out: ScanComp[] = [];
  const seen = new Set<string>();
  for (const c of Array.isArray(raw) ? (raw as Record<string, unknown>[]) : []) {
    if (!c || typeof c !== 'object') continue;
    const url = typeof c.url === 'string' ? c.url.trim() : '';
    const key = urlKey(url);
    if (!key || !allowed.has(key)) continue;
    const price = Number(c.price);
    if (!Number.isFinite(price) || price <= 0 || price > 50_000_000) continue;
    // One archive page can hold several sales; the same sale twice is a repeat.
    const dedupe = `${key}|${price}`;
    if (seen.has(dedupe)) continue;
    const date = typeof c.date === 'string' && /^\d{4}-\d{2}(-\d{2})?$/.test(c.date.trim()) ? c.date.trim() : '';
    const currency = typeof c.currency === 'string' && /^[A-Za-z]{3}$/.test(c.currency.trim()) ? c.currency.trim().toUpperCase() : 'USD';
    const text = (v: unknown, n: number) => houseDashes(String(v ?? '')).replace(/\s+/g, ' ').trim().slice(0, n);
    seen.add(dedupe);
    out.push({
      title: text(c.title, 160) || 'Untitled result',
      price: Math.round(price * 100) / 100,
      currency,
      date,
      venue: text(c.venue, 60),
      url,
      sold: c.sold === true,
      condition: text(c.condition, 80),
      premium: c.premium === 'included' || c.premium === 'excluded' ? c.premium : 'unknown',
    });
    if (out.length >= 6) break;
  }
  return out;
}

export function compsQuery(i: Pick<ScanItem, 'title' | 'maker' | 'scale' | 'reference' | 'make' | 'model' | 'partNumber' | 'era' | 'kind'>): string {
  return [
    `Item: ${i.title}`,
    i.maker ? `Maker: ${i.maker}` : '',
    i.scale ? `Scale: ${i.scale}` : '',
    i.reference ? `Maker's reference: ${i.reference}` : '',
    i.partNumber ? `Part number: ${i.partNumber}` : '',
    i.make || i.model ? `Car: ${[i.make, i.model].filter(Boolean).join(' ')}` : '',
    i.era ? `Date of the item: ${i.era}` : '',
    `Type: ${i.kind === 'part' ? 'car part' : i.kind === 'art' ? 'artwork' : 'memorabilia'}`,
  ].filter(Boolean).join('\n');
}

export async function findComps(item: ScanItem): Promise<{ comps: ScanComp[]; note: string; usd: number; dropped: number }> {
  const { text, usage, sources } = await runAgent({
    feature: 'scan-comps',
    model: MODELS.fast,
    effort: 'low',
    system: SYSTEM,
    user: compsQuery(item),
    tools: [webSearchTool({ maxUses: 3 })],
    maxTokens: 3000,
  });
  const { value, usd: repairUsd } = await parseJson<{ comps?: unknown; note?: string }>('scan-comps', text, REPAIR_SCHEMA);
  const offered = Array.isArray(value.comps) ? value.comps.length : 0;
  const comps = keepSourcedComps(value.comps, sources);
  const dropped = offered - comps.length;
  if (dropped > 0) console.warn(`[ai] scan-comps dropped ${dropped} of ${offered} results with no matching search source`);
  const note = houseDashes(String(value.note ?? '')).replace(/\s+/g, ' ').trim().slice(0, 400);
  return { comps, note, usd: usage.usd + repairUsd, dropped };
}
