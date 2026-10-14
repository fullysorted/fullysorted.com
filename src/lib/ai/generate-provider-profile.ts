/**
 * Claim-model profile drafter (2026-10-14).
 *
 * Given a shop's name, website and city, read the shop's own website (and at
 * most two searches when the site is thin) and draft the row that
 * /api/admin/seed-providers takes. Nothing is written here: the draft goes to
 * /admin/draft-profile, Chris edits it, and the existing dry-run-then-seed
 * path stages it unpublished until the shop approves from its claim link.
 *
 * Model: Haiku by default. This is extraction plus a short paragraph, and at
 * roughly a cent a profile the whole 922-business sourcing pool drafts for
 * under $20. "best" switches to Sonnet (about ten cents) for shops worth it,
 * such as the Tier A dealers.
 *
 * Trust rules carried into the prompt: only what the shop's own pages or a
 * named source say; never "vetted" or "verified"; silence is never a no (an
 * empty workSettings means "not stated", never a guess); no rating language.
 */

import { CATEGORY_OPTIONS } from '@/lib/service-categories';
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

export interface ProfileInput {
  businessName: string;
  website?: string | null;
  location?: string | null;
  category?: string | null;
  /** Anything Chris knows that the web does not, e.g. "Sergey: owner is Mike, does Weber carbs". */
  notes?: string | null;
  quality?: 'standard' | 'best';
}

export interface ProfileDraft {
  businessName: string;
  category: string;
  location: string;
  website: string | null;
  phone: string | null;
  email: string | null;
  yearsInBusiness: string | null;
  description: string;
  specialties: string;
  marques: string[];
  workSettings: ('workshop' | 'mobile' | 'remote')[];
  sources: { url: string; used_for: string }[];
  confidence: 'high' | 'medium' | 'low';
  gaps: string[];
  claimQuestions: string[];
  outreachHook: string;
}

const CATEGORY_LIST = CATEGORY_OPTIONS.map((c) => `${c.value} (${c.label})`).join(', ');

const SYSTEM_PROMPT = `You draft directory profiles for Fully Sorted, a US directory of the trades a collector car needs during the year it is owned. We build the profile from public information; the shop reviews it and approves it before anyone sees it. The shop must read it and think "that is us, and it is accurate". If they find one invented fact, they will not approve it.

PROCEDURE
1. Fetch the website you are given. Then fetch at most two more pages on the same site that describe services, history or the cars they work on (About, Services, Restoration, Inventory). Skip galleries, blogs and shop pages.
2. Only if the site is missing, down or nearly empty, run one or two web searches for the business name and city to find its own listing or a press mention. Never use review sites as a source of facts about quality.
3. Stop as soon as you can fill the fields. Do not keep reading for color.

FACT RULES
- Every fact in the profile comes from a page you read in this session or from the editor's notes. Nothing from memory, nothing inferred.
- yearsInBusiness: only a founding year or a stated count, written "Since 1987" or "30+ years" exactly as supported. Otherwise null.
- phone and email: only a business phone and a published business email from the shop's own site. Never a personal address, never a guessed info@.
- marques: only makes the shop names as its focus or shows repeatedly in its own work. Empty if it says "all makes" or nothing. Max 6.
- workSettings: workshop if they have a premises customers bring cars to; mobile if they say they come to the car; remote if the work is done without the car (paperwork, consulting, online). Only what the site states. Empty means "not stated", which is fine. Never guess.
- category: exactly one key from: ${CATEGORY_LIST}. Pick the headline service. If the editor gave a category, keep it unless the site plainly contradicts it, and say so in gaps.
- Transport: if they are a broker rather than a carrier, say "broker" in gaps.

DESCRIPTION (the paragraph on the public profile)
- 50 to 110 words, third person, plain and specific. What they do, on which cars, where, and since when if known. The one or two things that make them distinct, stated as facts.
- Dry, not salesy. No adjectives the shop has not earned with a fact. "Rebuilds Weber and Solex carburetors for 1960s Alfa Romeo and Fiat" beats "passionate experts in Italian classics".
- Never: vetted, verified, trusted, best, premier, world-class, top-rated, guaranteed, passion, one-stop shop, exclamation marks, emoji, first person, em dashes or en dashes. US spelling.
- No ratings, review counts, prices or awards unless the shop's own site states the award by name and year.
- If the shop claims something big ("built the Pebble Beach class winner"), attribute it: "The shop says it restored...".

SPECIALTIES: a comma-separated list of 3 to 8 short service phrases, most specific first ("Weber carburetor rebuilds, Alfa Romeo 105 series, pre-purchase inspections").

FOR THE CLAIM STEP
- gaps: the facts you could not establish that a shop would want right (e.g. "years in business not stated", "unclear if mobile").
- claimQuestions: two or three short questions the claim page should ask the shop to complete the profile, drawn from the gaps.
- outreachHook: one sentence, under 25 words, naming the most specific real thing about their work, for the first line of the email that invites them to claim the page. No flattery, just the specific fact ("Your page leads with the Weber carburetor work on 105-series Alfas.").

OUTPUT
Return ONLY one JSON object, no prose, no code fences:
{"businessName":"","category":"","location":"City, ST","website":"","phone":null,"email":null,"yearsInBusiness":null,"description":"","specialties":"","marques":[],"workSettings":[],"sources":[{"url":"","used_for":""}],"confidence":"high|medium|low","gaps":[],"claimQuestions":[],"outreachHook":""}`;

const REPAIR_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    businessName: { type: 'string' },
    category: { type: 'string' },
    location: { type: 'string' },
    website: { type: ['string', 'null'] },
    phone: { type: ['string', 'null'] },
    email: { type: ['string', 'null'] },
    yearsInBusiness: { type: ['string', 'null'] },
    description: { type: 'string' },
    specialties: { type: 'string' },
    marques: { type: 'array', items: { type: 'string' } },
    workSettings: { type: 'array', items: { type: 'string', enum: ['workshop', 'mobile', 'remote'] } },
    sources: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: { url: { type: 'string' }, used_for: { type: 'string' } },
        required: ['url', 'used_for'],
      },
    },
    confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
    gaps: { type: 'array', items: { type: 'string' } },
    claimQuestions: { type: 'array', items: { type: 'string' } },
    outreachHook: { type: 'string' },
  },
  required: [
    'businessName', 'category', 'location', 'website', 'phone', 'email', 'yearsInBusiness', 'description',
    'specialties', 'marques', 'workSettings', 'sources', 'confidence', 'gaps', 'claimQuestions', 'outreachHook',
  ],
};

function normalizeUrl(u?: string | null): string | null {
  const t = String(u ?? '').trim();
  if (!t) return null;
  return /^https?:\/\//i.test(t) ? t : `https://${t}`;
}

export function checkProfile(d: ProfileDraft): string[] {
  const w: string[] = [];
  const words = d.description.trim().split(/\s+/).filter(Boolean).length;
  if (words < 40 || words > 130) w.push(`description is ${words} words (aim 50-110)`);
  const hits = bannedCopyHits(`${d.description} ${d.specialties}`);
  if (/\b(we|our|us)\b/i.test(d.description)) hits.push('first person');
  if (hits.length) w.push(`copy rule: ${hits.join(', ')}`);
  if (!CATEGORY_OPTIONS.some((c) => c.value === d.category)) w.push(`unknown category "${d.category}"`);
  if (d.category === 'titling') w.push('title and registration is vetted by hand and will be skipped by the seeder');
  if (!d.sources?.length) w.push('no sources: nothing was read, check every fact');
  if (d.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d.email)) w.push('email looks malformed');
  return w;
}

export async function generateProviderProfile(
  input: ProfileInput
): Promise<{ draft: ProfileDraft; warnings: string[]; usage: UsageTotals; model: string }> {
  const website = normalizeUrl(input.website);
  const model = input.quality === 'best' ? MODELS.write : MODELS.fast;

  // The URL must appear in the user message: web fetch only opens URLs the
  // conversation has already seen.
  const user = [
    `Business: ${input.businessName}`,
    website ? `Website: ${website}` : 'Website: none known. Search for it.',
    input.location ? `Location: ${input.location}` : '',
    input.category ? `Editor's category: ${input.category}` : '',
    input.notes ? `Editor's notes (treat as fact): ${input.notes}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const { text, usage } = await runAgent({
    feature: 'provider-profile',
    model,
    effort: 'medium',
    system: SYSTEM_PROMPT,
    user,
    tools: [
      // Small page caps keep a Haiku call under its 100k-token price step.
      webFetchTool({ maxUses: 3, maxContentTokens: 6000, blockedDomains: ['yelp.com', 'facebook.com', 'instagram.com'] }),
      webSearchTool({ maxUses: 2 }),
    ],
    maxTokens: 6000,
  });

  const { value } = await parseJson<ProfileDraft>('provider-profile', text, REPAIR_SCHEMA);
  const draft: ProfileDraft = {
    ...value,
    businessName: value.businessName?.trim() || input.businessName,
    website: value.website || website,
    location: value.location || input.location || '',
    description: houseDashes(value.description ?? '').trim(),
    specialties: houseDashes(value.specialties ?? '').trim(),
    outreachHook: houseDashes(value.outreachHook ?? '').trim(),
    marques: (value.marques ?? []).slice(0, 6),
    workSettings: (value.workSettings ?? []).filter((k) => k === 'workshop' || k === 'mobile' || k === 'remote'),
    gaps: value.gaps ?? [],
    claimQuestions: value.claimQuestions ?? [],
    sources: value.sources ?? [],
  };
  return { draft, warnings: checkProfile(draft), usage, model };
}
