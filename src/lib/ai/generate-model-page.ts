/**
 * Model-history drafter, QUICK tier (2026-10-14).
 *
 * One Sonnet call with web search and web fetch drafts a cited model history
 * to the house standard in MODEL-HISTORY-SPEC.md, at about half the full
 * depth: 6 to 10 sources and 8 to 14 claims instead of 12+ and 14+. It writes
 * status = 'draft' only. A person reads it in /admin/models and publishes.
 *
 * Why a quick tier: the full-depth seed (26-35 KB, 12+ sources, verbatim quote
 * evidence on every claim) is a long multi-hour research job that belongs on a
 * Team seat, where it costs nothing extra. On the Console credits a quick draft
 * costs roughly $0.30 to $0.80 and fills a gap the same day. The quick draft
 * already carries evidence quotes, so scripts/verify-quotes.mjs can check it,
 * and a later full-depth run replaces it in place.
 *
 * Cost controls: search and fetch counts are capped, page fetches are trimmed
 * to 8k tokens each, effort is 'medium', and the long system prompt is cached.
 */

import {
  MODELS,
  runAgent,
  parseJson,
  webSearchTool,
  webFetchTool,
  houseDashes,
  bannedCopyHits,
  type UsageTotals,
} from './client';

export const GENERATION_MODEL = MODELS.write;

/** Spec section 6: blocked to automated retrieval. Never cite. */
const BLOCKED = ['bringatrailer.com', 'cars.bonhams.com', 'glenmarch.com'];

export type SourceType =
  | 'manufacturer'
  | 'journalism'
  | 'reference-book'
  | 'encyclopedia'
  | 'club-forum'
  | 'registry'
  | 'auction-house'
  | 'market-data'
  | 'specialist'
  | 'government';

export interface GenSource {
  ref: string;
  title: string;
  url: string;
  publisher: string;
  sourceType: SourceType;
  reliability: 'high' | 'medium' | 'low';
  notes: string;
}

export interface GenClaim {
  section: 'summary' | 'history' | 'production' | 'specs' | 'problems' | 'market';
  claimText: string;
  confidence: 'high' | 'medium' | 'low';
  status: 'verified' | 'unverified' | 'disputed';
  sourceRefs: string[];
  conflictNote?: string | null;
  evidence: { ref: string; quote: string }[];
}

export interface GeneratedModelPage {
  slug: string;
  make: string;
  model: string;
  generation: string | null;
  generationCode: string | null;
  yearStart: number | null;
  yearEnd: number | null;
  bodyStyles: string[];
  engines: string[];
  productionTotal: number | null;
  productionNotes: string;
  notableTrims: { name: string; note: string }[];
  specs: Record<string, string>;
  summary: string;
  history: string;
  marketNotes: string;
  whatToLookFor: string;
  commonProblems: string;
  valueTrajectory: string;
  overallConfidence: 'high' | 'medium' | 'low';
  sources: GenSource[];
  claims: GenClaim[];
  chrisTakeQuestions: string[];
  gaps: string;
}

const SYSTEM_PROMPT = `You are the research agent for Fully Sorted, a US collector-car site. You draft model-history pages that tell the truth about what is known and what is not. This is a QUICK draft: a person reviews it before anything is published, and a deeper research pass may replace it later.

THE ONE RULE
Fully Sorted's differentiator is that it prints the disagreement. Competitors print one confident production figure. When two credible sources give different numbers, that conflict is the most valuable thing on the page. Never resolve a conflict by picking the more common, rounder, or manufacturer-preferred number. Never manufacture a conflict to look thorough either.

RESEARCH PROCEDURE (budget matters: the cost of a draft is the pages you read)
1. Search first, then fetch only the pages that answer a question below. Stop a category when it is covered.
2. The reader is an American owner or buyer. Cover, in this order:
   a. What exactly was sold in the US, and when (US model years, federalization, US-only trims). Manufacturer US press material, NHTSA, fueleconomy.gov.
   b. What it cost new in dollars (US MSRP from a US source). If not documented, say so.
   c. What the US period press said (Car and Driver, Road & Track, MotorTrend, Automobile, Autoweek, or their retrospectives).
   d. How many were built, and of which variant (manufacturer heritage, marque registry or club).
   e. What goes wrong (US specialist shops, owner forums labeled as forums, NHTSA complaints).
   f. What it trades for now: classic.com first, then individual auction lot pages you actually fetched.
3. Never cite Bring a Trailer, Hagerty valuation pages, cars.bonhams.com or Glenmarch (blocked to retrieval). BaT results quoted on classic.com are fine, cited to classic.com.
4. Wikipedia is sourceType "encyclopedia", reliability "medium": a pointer, never the sole support for a contested figure. Forums are "club-forum", "low": fault patterns only, never production numbers.
5. Every source must be a page you successfully retrieved in this session. A dead or unread URL in sources is worse than a missing source. Twelve pages restating one Wikipedia paragraph is one source.

FABRICATION BANS
- No figure, date, chassis range, price or production number that is not in a page you read in this session.
- No filling a null from memory. No inferring a US figure from a global one, or a generation total from a model-line total.
- If the floor cannot be met for an obscure car, deliver what you have, set overallConfidence "low", and explain in "gaps".

VOICE
Unhurried, factual, the register of a good marque registry newsletter, not a listing site. Specific over emphatic: "213 cars were federalized for the United States" does the work "incredibly rare" does not. Assume the reader knows what a camshaft is and does not know this car. The first ## section of history is the problem the factory was solving and who pushed the car through, not the launch date. Include at least one specific detail a reader would repeat to a friend (a take rate, a supplier, a decision made for an unexpected reason). Do not tell the reader how to feel. No buying or valuation advice in the imperative.
Never use: vetted, verified (as a trust word), guaranteed, no commission, iconic, legendary, holy grail, unicorn, investment-grade, exclamation marks.
Do not write a "Chris's Take". Instead return three pointed chrisTakeQuestions only someone who has driven, sold or judged the car could answer.

US DATA STANDARD
US spelling (color, liter, aluminum, tire, hood, trunk, curb weight, gray, carburetor, percent spelled out, -ize). Units: hp, lb-ft, lb, mph, miles, inches first with mm in parentheses, Fahrenheit, US mpg. Bore and stroke in mm, displacement in cc, bolt patterns in mm stay metric. Convert with arithmetic: 1 in = 25.4 mm, 1 lb = 0.45359237 kg, 1 mph = 1.609344 km/h, 1 lb-ft = 1.35582 Nm, 1 hp = 0.98632 PS = 0.7457 kW. Dollars first; a home-market launch price may follow in parentheses. Values and running costs only from US sources. Every market figure stamped with its month and year ("as of October 2026"). No em dashes and no en dashes anywhere: use " - " or a comma, and a plain hyphen in ranges.

QUICK-TIER SIZES (ranges, not minimums; over the ceiling is padding)
summary 500-900 chars, one paragraph, no headings
history 1,800-3,000 chars, 3-5 "## " sections, a blank line after each heading
productionNotes 400-1,200 chars: where the numbers came from and why they differ
marketNotes 500-1,000 chars, every figure dated
whatToLookFor 600-1,200 chars
commonProblems 500-1,000 chars
valueTrajectory 400-800 chars
notableTrims 3-6 entries, each note says why a collector cares
specs 8-14 snake_case keys including layout, engine, power, torque, transmission, weight; mark manufacturer claims as claims
sources 6-10, spread across the categories above
claims 8-14

CLAIMS AND EVIDENCE
Each claim is a full self-contained sentence. section is one of summary, history, specs, production, market, problems. status is verified, disputed or unverified. Every sourceRef must match a ref in sources. Each claim carries one evidence entry per sourceRef: the exact words from that page, 8 to 30 words, copied not paraphrased. A script re-fetches the page and looks for those words; a quote that is not on the page fails the claim.
Disputed protocol: status "disputed", conflictNote names each figure and who states it and ends by saying it is unresolved. If the dispute is the production total, productionTotal is null.

OUTPUT
After researching, return ONLY one JSON object, no prose before or after, no code fences, with exactly these keys:
{"slug":"make/model-or-generation, lowercase, hyphens","make":"","model":"","generation":"short subtitle label, 40 chars max, or null","generationCode":"factory code or null, never invented","yearStart":0,"yearEnd":0,"bodyStyles":[""],"engines":[""],"productionTotal":null,"productionNotes":"","notableTrims":[{"name":"","note":""}],"specs":{"layout":""},"summary":"","history":"","marketNotes":"","whatToLookFor":"","commonProblems":"","valueTrajectory":"","overallConfidence":"high|medium|low","sources":[{"ref":"kebab-id","title":"","url":"","publisher":"","sourceType":"manufacturer|journalism|reference-book|encyclopedia|club-forum|registry|auction-house|market-data|specialist|government","reliability":"high|medium|low","notes":"what this page specifically establishes"}],"claims":[{"section":"","claimText":"","confidence":"","status":"","sourceRefs":[""],"conflictNote":null,"evidence":[{"ref":"","quote":""}]}],"chrisTakeQuestions":["","",""],"gaps":"one or two sentences on what could not be found, or empty"}`;

// Loose schema for the Haiku repair pass only.
const REPAIR_SCHEMA = {
  type: 'object',
  additionalProperties: true,
  properties: {
    slug: { type: 'string' },
    make: { type: 'string' },
    model: { type: 'string' },
    sources: { type: 'array', items: { type: 'object', additionalProperties: true } },
    claims: { type: 'array', items: { type: 'object', additionalProperties: true } },
  },
  required: ['slug', 'make', 'model', 'sources', 'claims'],
};

export interface GenerateOptions {
  make: string;
  model: string;
  generation?: string | null;
  /** Optional steer from Chris, e.g. "US-market manual cars only". */
  focus?: string | null;
}

export interface DraftCheck {
  /** Problems a reviewer should see before publishing. */
  warnings: string[];
}

/** Mechanical post-check, a cut-down validate-seed.mjs that runs server-side. */
export function checkDraft(p: GeneratedModelPage): DraftCheck {
  const w: string[] = [];
  const refs = new Set((p.sources ?? []).map((s) => s.ref));
  if ((p.sources?.length ?? 0) < 6) w.push(`only ${p.sources?.length ?? 0} sources (quick floor 6)`);
  if ((p.claims?.length ?? 0) < 8) w.push(`only ${p.claims?.length ?? 0} claims (quick floor 8)`);
  for (const c of p.claims ?? []) {
    const bad = (c.sourceRefs ?? []).filter((r) => !refs.has(r));
    if (bad.length) w.push(`claim cites unknown source ${bad.join(', ')}: "${c.claimText.slice(0, 60)}"`);
    if (c.status === 'disputed' && !c.conflictNote) w.push(`disputed claim has no conflictNote: "${c.claimText.slice(0, 60)}"`);
    if ((c.evidence?.length ?? 0) < (c.sourceRefs?.length ?? 0)) w.push(`claim missing evidence quote: "${c.claimText.slice(0, 60)}"`);
  }
  const used = new Set((p.claims ?? []).flatMap((c) => c.sourceRefs ?? []));
  const orphan = (p.sources ?? []).filter((s) => !used.has(s.ref)).map((s) => s.ref);
  if (orphan.length) w.push(`sources no claim uses: ${orphan.join(', ')}`);
  for (const s of p.sources ?? []) {
    if (BLOCKED.some((d) => (s.url ?? '').includes(d))) w.push(`cites a blocked site: ${s.url}`);
  }
  const prose = [p.summary, p.history, p.marketNotes, p.whatToLookFor, p.commonProblems, p.valueTrajectory, p.productionNotes].join('\n');
  const hits = bannedCopyHits(prose);
  if (hits.length) w.push(`banned copy: ${hits.join(', ')}`);
  if (/\b(bhp|kerb|tyre|colour|aluminium|km\/h|Nm)\b/.test(prose)) w.push('non-US spelling or unit in prose');
  if ((p.history ?? '').length < 1500) w.push(`history is short (${(p.history ?? '').length} chars)`);
  return { warnings: w };
}

function cleanProse(p: GeneratedModelPage): GeneratedModelPage {
  const f = (s: string | null | undefined) => houseDashes(s ?? '');
  // markdown-lite needs a blank line after headings.
  const history = f(p.history).replace(/^(##[^\n]*)\n(?!\n)/gm, '$1\n\n');
  return {
    ...p,
    summary: f(p.summary),
    history,
    productionNotes: f(p.productionNotes),
    marketNotes: f(p.marketNotes),
    whatToLookFor: f(p.whatToLookFor),
    commonProblems: f(p.commonProblems),
    valueTrajectory: f(p.valueTrajectory),
    generation: p.generation ? houseDashes(p.generation) : null,
    notableTrims: (p.notableTrims ?? []).map((t) => ({ name: houseDashes(t.name), note: houseDashes(t.note) })),
    claims: (p.claims ?? []).map((c) => ({
      ...c,
      claimText: houseDashes(c.claimText),
      conflictNote: c.conflictNote ? houseDashes(c.conflictNote) : null,
    })),
  };
}

export async function generateModelPage(
  opts: GenerateOptions
): Promise<{ page: GeneratedModelPage; model: string; check: DraftCheck; usage: UsageTotals }> {
  const name = [opts.make, opts.model, opts.generation && `(${opts.generation})`].filter(Boolean).join(' ');
  const user =
    `Draft the quick-tier model history for the ${name}.` +
    (opts.focus ? `\nFocus from the editor: ${opts.focus}` : '') +
    `\nToday is ${new Date().toISOString().slice(0, 10)}. Stamp market figures with the current month and year.`;

  const { text, usage, stopReason } = await runAgent({
    feature: 'model-history',
    model: MODELS.write,
    effort: 'medium',
    system: SYSTEM_PROMPT,
    user,
    tools: [
      webSearchTool({ maxUses: 10, blockedDomains: BLOCKED }),
      webFetchTool({ maxUses: 10, maxContentTokens: 8000, blockedDomains: BLOCKED }),
    ],
    maxTokens: 32000,
  });
  if (stopReason === 'max_tokens') throw new Error('Draft ran past the output limit. Try again, or narrow it with a focus line.');

  const { value } = await parseJson<GeneratedModelPage>('model-history', text, REPAIR_SCHEMA);
  const page = cleanProse(value);
  return { page, model: MODELS.write, check: checkDraft(page), usage };
}
