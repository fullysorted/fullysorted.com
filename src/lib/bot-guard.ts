/**
 * Quiet bot filter for public forms (added 2026-10-20).
 *
 * The contact form took about one script submission a week from April to
 * October 2026: a random-letter name and message from a dotted Gmail address.
 * The in-memory rate limit never saw them because they arrive days apart.
 *
 * Three checks, none of which a real person ever sees:
 *  1. Honeypot: `fs_hp`, a field hidden from people and screen readers. Filled
 *     in means a script filled in every field.
 *  2. Fill time: `fs_t` is when the form was drawn (ms since epoch). Under 3
 *     seconds from draw to submit is not a person typing. Absent (an old cached
 *     page) is allowed through.
 *  3. Gibberish: a message that is one unbroken run of mixed-case letters
 *     ("BFlEKwpvZaQOyvlyjlZMdnDC") is the exact shape this bot sends.
 *
 * A caught submission gets the same success response a real one does, so the
 * script learns nothing. This is the one exception to the deliver() rule that
 * success means it reached Chris: the sender is not a person.
 */

export const HONEYPOT_FIELD = 'fs_hp';
export const STARTED_FIELD = 'fs_t';
const MIN_FILL_MS = 3000;

function isGibberish(text: unknown): boolean {
  if (typeof text !== 'string') return false;
  const t = text.trim();
  if (t.length < 10 || /\s/.test(t) || !/^[A-Za-z]+$/.test(t)) return false;
  const innerCaps = (t.slice(1).match(/[A-Z]/g) || []).length;
  return innerCaps >= 3;
}

export type BotVerdict = { bot: false } | { bot: true; reason: 'honeypot' | 'too-fast' | 'gibberish' };

/**
 * @param body   the parsed request body
 * @param textFields  which free-text fields to run the gibberish check on
 */
export function checkForBot(body: Record<string, unknown> | null | undefined, textFields: string[] = ['message']): BotVerdict {
  if (!body || typeof body !== 'object') return { bot: false };
  const hp = body[HONEYPOT_FIELD];
  if (typeof hp === 'string' && hp.trim() !== '') return { bot: true, reason: 'honeypot' };
  const started = Number(body[STARTED_FIELD]);
  if (Number.isFinite(started) && started > 0 && Date.now() - started < MIN_FILL_MS) {
    return { bot: true, reason: 'too-fast' };
  }
  const texts = textFields.map((f) => body[f]).filter((v) => typeof v === 'string' && v.trim() !== '');
  if (texts.length > 0 && texts.every(isGibberish)) return { bot: true, reason: 'gibberish' };
  return { bot: false };
}
