/**
 * Tidy what shops type into the application form before it reaches a title
 * tag, a heading or the database.
 *
 * A provider's business name and town go straight into the page title since
 * 2026-09-17, so "aces collision center" in "Gardena ca" was live as exactly
 * that. These helpers fix the common cases without pretending to know the
 * right casing of every trade name: a name typed ALL IN ONE CASE is
 * title-cased; a name with mixed case (BMW Werks, McLaren Specialists) is
 * left alone.
 */

const US_STATES = new Set([
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD',
  'MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC',
  'SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC',
]);

const SMALL_WORDS = new Set(['of', 'and', 'the', 'at', 'by', 'for', 'in', 'on', 'or', 'a', 'an', '&']);

function titleCase(s: string): string {
  return s
    .split(/(\s+|-|\/)/)
    .map((part, i) => {
      if (!part || /^(\s+|-|\/)$/.test(part)) return part;
      const lower = part.toLowerCase();
      if (i > 0 && SMALL_WORDS.has(lower)) return lower;
      if (lower.startsWith('mc') && lower.length > 3) return 'Mc' + lower[2].toUpperCase() + lower.slice(3);
      return lower[0].toUpperCase() + lower.slice(1);
    })
    .join('');
}

/** Collapse whitespace; title-case only when the whole name is one case. */
export function formatBusinessName(raw: string | null | undefined): string {
  const s = (raw ?? '').replace(/\s+/g, ' ').trim();
  if (!s) return '';
  const letters = s.replace(/[^a-z]/gi, '');
  if (!letters) return s;
  const oneCase = letters === letters.toLowerCase() || letters === letters.toUpperCase();
  return oneCase ? titleCase(s) : s;
}

/**
 * "gardena ca" -> "Gardena, CA"; "san diego, california" left as
 * "San Diego, California"; "Los Angeles, CA" unchanged. Never invents a
 * state that was not typed.
 */
export function formatLocation(raw: string | null | undefined): string {
  let s = (raw ?? '').replace(/\s+/g, ' ').replace(/\s*,\s*/g, ', ').trim().replace(/,$/, '');
  if (!s) return '';
  // Trailing two-letter state with no comma before it.
  const m = s.match(/^(.*?[a-z])\s+([a-z]{2})$/i);
  if (m && US_STATES.has(m[2].toUpperCase())) s = `${m[1]}, ${m[2]}`;
  // Uppercase a two-letter state after the last comma.
  s = s.replace(/,\s*([a-z]{2})$/i, (_, st: string) => (US_STATES.has(st.toUpperCase()) ? `, ${st.toUpperCase()}` : `, ${st}`));
  // Title-case the place part only when it was typed in one case.
  const [place, ...rest] = s.split(', ');
  const letters = place.replace(/[^a-z]/gi, '');
  const oneCase = !letters || letters === letters.toLowerCase() || letters === letters.toUpperCase();
  return [oneCase ? titleCase(place) : place, ...rest].join(', ');
}
