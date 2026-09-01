/**
 * WHERE THE WORK HAPPENS — the single source of truth.
 *
 * This replaces the business-vs-freelancer split that used to be the first
 * question on the application form, and the two bands the directory was cut
 * into. That question asked about a provider's legal form, which is the one
 * thing an owner shopping for a service does not care about — and on a live
 * directory of three it got the answer wrong: every provider had picked
 * "business" (because everyone signing up IS a business), including a one-man
 * mobile appraiser who was then filed under a heading promising "a premises
 * you can visit". The other band sat empty with a dashed placeholder.
 *
 * What actually differs between providers, and what an owner uses to choose,
 * is where the car has to be for the work to happen. So that is what we ask.
 *
 * MULTI-SELECT ON PURPOSE. Most real providers are two of these: a detailer
 * with a unit who also travels, an appraiser who inspects on site and writes
 * the report at a desk. Forcing one would recreate the bug we are fixing.
 *
 * A provider who has told us nothing has an empty array and renders nothing.
 * Silence is never filled with a guess.
 */

export type WorkSettingKey = 'workshop' | 'mobile' | 'remote';

export interface WorkSetting {
  key: WorkSettingKey;
  /** How the provider is asked, in their own terms, on the application. */
  providerLabel: string;
  /** Help text under the option — what picking it commits them to. */
  providerHint: string;
  /** How an owner reads it. Used for filter chips and profile lines. */
  ownerLabel: string;
  /** One line on the provider's public profile. */
  ownerBlurb: string;
}

export const WORK_SETTINGS: WorkSetting[] = [
  {
    key: 'workshop',
    providerLabel: 'Customers bring the car to me',
    providerHint: 'A workshop, unit, studio or yard — anywhere with an address a car turns up at.',
    ownerLabel: 'You take the car to them',
    ownerBlurb: 'Work happens at their premises — you drop the car off.',
  },
  {
    key: 'mobile',
    providerLabel: 'I travel to the car',
    providerHint: 'Mobile work at the owner’s home, storage unit, or wherever the car is kept.',
    ownerLabel: 'They come to you',
    ownerBlurb: 'Mobile — they come to wherever the car is.',
  },
  {
    key: 'remote',
    providerLabel: 'The work is off-site or remote',
    providerHint: 'Desk appraisals, document and history research, buying advice, brokerage — no hands on the car, or the car ships to them.',
    ownerLabel: 'Remote or off-site',
    ownerBlurb: 'Handled off-site — remotely, or with the car shipped to them.',
  },
];

const BY_KEY = new Map<string, WorkSetting>(WORK_SETTINGS.map((w) => [w.key, w]));

export function isWorkSettingKey(v: unknown): v is WorkSettingKey {
  return typeof v === 'string' && BY_KEY.has(v);
}

export function workSetting(key: string): WorkSetting | undefined {
  return BY_KEY.get(key);
}

/**
 * Whitelist, de-duplicate and canonically order whatever arrived.
 *
 * Called on every write path. These values drive public copy on somebody
 * else's business profile, so an unrecognised string is dropped rather than
 * stored and rendered.
 */
export function normalizeWorkSettings(v: unknown): WorkSettingKey[] {
  if (!Array.isArray(v)) return [];
  const seen = new Set<WorkSettingKey>();
  for (const item of v) if (isWorkSettingKey(item)) seen.add(item);
  return WORK_SETTINGS.map((w) => w.key).filter((k) => seen.has(k));
}

/** Owner-facing labels, in canonical order. Empty in, empty out. */
export function workSettingLabels(v: unknown): string[] {
  return normalizeWorkSettings(v).map((k) => BY_KEY.get(k)!.ownerLabel);
}

/**
 * HOW BIG THE OUTFIT IS.
 *
 * Kept deliberately separate from where the work happens, because conflating
 * them is exactly what "business or freelancer?" did. In the collector world
 * "who actually has their hands on my car" is a real trust signal — but it is
 * a fact on a profile, not a routing decision, and it never splits the
 * directory.
 */
export type TeamSizeKey = 'solo' | 'small' | 'team';

export const TEAM_SIZES: { key: TeamSizeKey; providerLabel: string; ownerLabel: string }[] = [
  { key: 'solo', providerLabel: 'Just me', ownerLabel: 'One-person operation' },
  { key: 'small', providerLabel: 'A small team (2–10)', ownerLabel: 'Small team' },
  { key: 'team', providerLabel: 'More than 10 of us', ownerLabel: 'Team of 10+' },
];

const TEAM_BY_KEY = new Map<string, (typeof TEAM_SIZES)[number]>(
  TEAM_SIZES.map((t) => [t.key, t]),
);

/** Null for "not told us", which renders as nothing at all. */
export function normalizeTeamSize(v: unknown): TeamSizeKey | null {
  return typeof v === 'string' && TEAM_BY_KEY.has(v) ? (v as TeamSizeKey) : null;
}

export function teamSizeLabel(v: unknown): string | null {
  const key = normalizeTeamSize(v);
  return key ? TEAM_BY_KEY.get(key)!.ownerLabel : null;
}

/**
 * The travel radius a row should actually store, given what it says about
 * where it works.
 *
 * One rule, one place. A provider who drops "I travel to the car" must not keep
 * a stale "travels about 75 miles" line on a public profile that no longer
 * claims to travel anywhere — and this is decided on FOUR write paths (the
 * public application, the provider dashboard, the team console's add form and
 * its edit panel), which is three too many to re-derive by hand.
 *
 * Returns null for "store nothing": not mobile, blank, unparseable, or zero.
 * Clamped, because a provider typing 99999 into "how far do you travel" has
 * slipped rather than made a statement.
 */
export function radiusForSettings(settings: unknown, raw: unknown): number | null {
  if (!normalizeWorkSettings(settings).includes('mobile')) return null;
  if (raw === null || raw === undefined || raw === '') return null;
  const n = typeof raw === 'number' ? raw : parseInt(String(raw).replace(/[^0-9]/g, ''), 10);
  if (!Number.isFinite(n) || n <= 0) return null;
  return Math.min(Math.round(n), 3_000);
}
