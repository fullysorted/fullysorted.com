/**
 * "Sort it": the question box on the homepage. Browser-safe constants and
 * types only. The harness lives in lib/ai/sort-it.ts (server only).
 *
 * The name lives here and nowhere else, so renaming it is one line.
 */
export const SORT_IT_NAME = 'Sort it';

/** The fun line. Dry, true, and says AI plainly. */
export const POWERED_BY_AI = 'Powered by AI. Raised on shop manuals.';
/** The three-word version: the Research Hub badge and under the hero search box. */
export const POWERED_SHORT = 'Powered by AI';

/** Shown under every answer. */
export const SORT_IT_DISCLAIMER =
  'Written by AI from the sources listed. It can be wrong. Check anything that touches safety or money with a pro before you act. Not an appraisal, an inspection, or legal advice.';

/** Shown once near the box before the first question. */
export const SORT_IT_PRIVACY_NOTE =
  'Questions are saved with your account to make answers better. Leave out personal details.';

export const SORT_IT_DAILY_LIMIT = 20;

export type SortItDoor = 'find_pro' | 'listing' | 'wanted' | 'research' | 'none';

export interface SortItAnswer {
  answer: string;
  confidence: 'high' | 'medium' | 'low';
  sources: { title: string; url: string }[];
  next: { door: SortItDoor; label: string; href: string } | null;
  followUps: string[];
  /** Which places were searched, so the answer never implies "everywhere". */
  searched: string[];
  /**
   * hunt: a car, part or memorabilia to buy, or a car to trace. Only hunts
   * get "Search wider", and only hunts widen to the whole country and abroad.
   * pro: a shop or specialist (widens to nearby cities and mobile shops).
   * question: knowledge (no geography at all).
   */
  kind: 'hunt' | 'pro' | 'question';
  /** Did it find what was asked for? Drives the "Search wider" offer. */
  found: 'yes' | 'partial' | 'no';
  /** Widening steps it took, in plain words ("looked at 1970-71 cars too"). */
  relaxed: string[];
  mode: 'normal' | 'wide';
}

/** A wide search costs this many of the member's daily questions. */
export const SORT_IT_WIDE_COST = 2;

/** One line of the stream the route sends back (NDJSON). */
export type SortItEvent =
  | { type: 'step'; label: string }
  | { type: 'answer'; answer: SortItAnswer; remaining: number }
  | { type: 'error'; message: string; code?: 'signin' | 'limit' | 'resting' | 'off' | 'failed' };

/**
 * Does this read like a question rather than a directory search? Cheap and
 * forgiving: the box still offers both, this only decides the default.
 */
export function looksLikeQuestion(q: string): boolean {
  const t = q.trim().toLowerCase();
  if (!t) return false;
  if (t.endsWith('?')) return true;
  const words = t.split(/\s+/).filter(Boolean);
  if (/^(what|how|why|where|which|who|when|is|are|does|do|should|can|could|would|will|find|looking|help|tell|explain|whats|what's)\b/.test(t)) return true;
  return words.length >= 6;
}
