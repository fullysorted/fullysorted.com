/**
 * Directory leads — resolving which shop an enquiry belongs to, and whether we
 * may email them directly.
 *
 * Lives in lib/ rather than inside the route so it can be tested in isolation:
 * the routing rules below decide whether a stranger's message reaches a
 * business's inbox, which is not logic to leave untested inside a handler.
 */

type Sql = (strings: TemplateStringsArray, ...values: unknown[]) => Promise<Record<string, unknown>[]>;

/**
 * Header-injection guard for any address that came from a form, and the same
 * check used before an address becomes a Reply-To on outbound mail. Rejects
 * commas, semicolons, angle brackets, quotes and whitespace.
 */
export function isEmailAddress(v: unknown): v is string {
  return typeof v === 'string' && /^[^@\s,;<>"]+@[^@\s,;<>"]+\.[^@\s,;<>"]+$/.test(v.trim());
}

/**
 * A directory enquiry is stored with listing_slug = "provider:<slug>" — there
 * is no listing, the shop is the subject. Returns the shop's slug, or null for
 * an ordinary listing message.
 */
export function providerSlugOf(listingSlug: string | null | undefined): string | null {
  if (!listingSlug || !listingSlug.startsWith('provider:')) return null;
  const slug = listingSlug.slice('provider:'.length).trim();
  return slug || null;
}

export type Relay = {
  providerId: number;
  email: string;
  businessName: string;
  slug: string;
} | null;

/**
 * Decide whether we can send this lead straight to the shop.
 *
 * Returns null — meaning "route it to Chris, as it always did" — for every case
 * where emailing the shop would be wrong rather than merely inconvenient:
 *
 *   • the slug doesn't resolve to a provider
 *   • the listing isn't active (pending, paused, rejected)
 *   • the shop declined our outreach
 *   • the shop has no email on file
 *   • the address is on the suppression list
 *
 * The lead is never lost in any of those cases: it still saves and still
 * reaches Chris, which is exactly the behaviour that existed before the relay.
 */
export async function resolveRelay(sql: Sql, listingSlug: string | null | undefined): Promise<Relay> {
  const slug = providerSlugOf(listingSlug);
  if (!slug) return null;

  const [p] = await sql`
    SELECT id, email, business_name, slug, status, outreach_status
    FROM service_providers
    WHERE slug = ${slug}
    LIMIT 1
  `;
  if (!p) return null;
  if (p.status !== 'active') return null;
  if (p.outreach_status === 'declined') return null;

  const email = typeof p.email === 'string' ? p.email.trim() : '';
  if (!isEmailAddress(email)) return null;

  const [suppressed] = await sql`
    SELECT 1 FROM outreach_suppression WHERE LOWER(email) = ${email.toLowerCase()} LIMIT 1
  `;
  if (suppressed) return null;

  return {
    providerId: Number(p.id),
    email,
    businessName: String(p.business_name),
    slug: String(p.slug),
  };
}

/* ─────────────────────────────────────────────────────────────────────────
 * The car brief
 *
 * An owner writing "how much to sort my 911" gives a shop nothing to quote
 * from, so the shop writes back asking the same four questions every time and
 * the thread dies. These fields are those four questions, asked once.
 *
 * EVERY FIELD IS OPTIONAL, and the form defaults to the plain message box.
 * A brief is a bonus, never a toll gate: plenty of owners are on a phone, or
 * do not know where the chassis number lives on a 1967 car, and a form that
 * insists loses the lead that a shop most wants. Nothing here is required,
 * nothing here is validated against a car database, and an empty brief is a
 * perfectly good enquiry.
 * ───────────────────────────────────────────────────────────────────────── */

export type LeadBrief = Record<string, string>;

/** Answer sets. Free text is never coerced into these — it is dropped. */
const CHOICES: Record<string, readonly string[]> = {
  condition: ['drives', 'runs-not-road', 'not-running', 'project', 'unsure'],
  transport: ['needed', 'can-deliver', 'unsure'],
  timeline: ['now', 'few-weeks', 'few-months', 'planning'],
  budget: ['under-1k', '1-5k', '5-15k', '15-50k', 'over-50k', 'not-sure'],
};

/** Free-text brief fields and their caps. */
const TEXT_FIELDS: Record<string, number> = {
  year: 4,
  make: 60,
  model: 80,
  chassis: 40,     // VIN, chassis or engine number — whatever they have
  serviceType: 60,
  location: 120,
};

/** Human labels, used in the shop's email and in /admin. */
const LABELS: Record<string, string> = {
  car: 'Car',
  chassis: 'Chassis / VIN',
  serviceType: 'Wants',
  condition: 'Condition',
  location: 'Where the car is',
  transport: 'Transport',
  timeline: 'Timeline',
  budget: 'Budget in mind',
};

const CHOICE_LABELS: Record<string, string> = {
  drives: 'Drives and is road-legal',
  'runs-not-road': 'Runs, not road-ready',
  'not-running': 'Not running',
  project: 'Project / apart',
  unsure: 'Not sure',
  needed: 'Needs collecting',
  'can-deliver': 'Can deliver it',
  now: 'As soon as possible',
  'few-weeks': 'Next few weeks',
  'few-months': 'Next few months',
  planning: 'Just planning ahead',
  'under-1k': 'Under $1,000',
  '1-5k': '$1,000 – $5,000',
  '5-15k': '$5,000 – $15,000',
  '15-50k': '$15,000 – $50,000',
  'over-50k': 'Over $50,000',
  'not-sure': 'No idea yet — tell me',
};

/**
 * Take whatever the form sent and keep only what we recognise. Unknown keys,
 * over-long values and off-list choices are dropped rather than stored: this
 * object is rendered into an email we send to a third party, so it holds only
 * values this file defines.
 *
 * Returns null when nothing survives, so "no brief" is a null column rather
 * than an empty object that later code has to special-case.
 */
export function normalizeBrief(input: unknown): LeadBrief | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const src = input as Record<string, unknown>;
  const out: LeadBrief = {};

  for (const [key, max] of Object.entries(TEXT_FIELDS)) {
    const v = src[key];
    if (typeof v !== 'string') continue;
    const trimmed = v.trim().slice(0, max);
    if (trimmed) out[key] = trimmed;
  }
  for (const [key, allowed] of Object.entries(CHOICES)) {
    const v = src[key];
    if (typeof v === 'string' && allowed.includes(v)) out[key] = v;
  }

  return Object.keys(out).length > 0 ? out : null;
}

/** "1973 Porsche 911", or whatever part of it they gave us. */
export function briefCarLine(brief: LeadBrief | null): string {
  if (!brief) return '';
  return [brief.year, brief.make, brief.model].filter(Boolean).join(' ').trim();
}

/**
 * The brief as label/value pairs, in reading order, ready to render. Kept in
 * one place so the shop's email, the admin view and anything later all show
 * the same thing in the same order.
 */
export function briefRows(brief: LeadBrief | null): Array<[string, string]> {
  if (!brief) return [];
  const rows: Array<[string, string]> = [];
  const car = briefCarLine(brief);
  if (car) rows.push([LABELS.car, car]);
  for (const key of ['chassis', 'serviceType', 'condition', 'location', 'transport', 'timeline', 'budget']) {
    const v = brief[key];
    if (!v) continue;
    rows.push([LABELS[key] ?? key, CHOICE_LABELS[v] ?? v]);
  }
  return rows;
}

/**
 * A plain-text rendering appended to message_text.
 *
 * This is deliberate belt-and-braces: message_text is what /admin shows, what
 * the fallback email prints and what a `SELECT *` export contains. Keeping a
 * readable copy there means every surface that existed before the brief did
 * still shows the whole enquiry, with no code change and nothing to migrate.
 */
export function briefToText(brief: LeadBrief | null): string {
  const rows = briefRows(brief);
  if (rows.length === 0) return '';
  return ['', '— About the car —', ...rows.map(([k, v]) => `${k}: ${v}`)].join('\n');
}
