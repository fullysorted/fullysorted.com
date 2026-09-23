/**
 * The marques a shop works on.
 *
 * Stored in the `marques` column on service_providers, which has existed since
 * 2026-08-25 and has never had a field behind it — which is why no row has any
 * data in it. This file is that field's vocabulary.
 *
 * BLANK MEANS ALL. A shop that names no marques is a generalist and appears
 * everywhere, exactly as it does today. It does not mean "hasn't finished the
 * profile" and must never be rendered as an absence or a warning. Silence is
 * never a no.
 */
export const MARQUES_MAX = 25;
export const MARQUE_LEN_MAX = 40;

/**
 * Quick picks, so that naming six marques is six taps rather than six pieces
 * of typing with six chances to spell Lamborghini wrong. Not a closed list:
 * the field takes free text, because the shop that only does Facel Vega
 * knows more about its own business than this array does.
 *
 * Ordered by how often they turn up in the collector trade rather than
 * alphabetically. The first row is what most shops will tap.
 */
export const COMMON_MARQUES = [
  'Porsche', 'Ferrari', 'Mercedes-Benz', 'Jaguar', 'BMW', 'Chevrolet', 'Ford',
  'Alfa Romeo', 'Aston Martin', 'Lamborghini', 'Maserati', 'Bentley', 'Rolls-Royce',
  'Lotus', 'Triumph', 'MG', 'Austin-Healey', 'Land Rover', 'Datsun', 'Toyota',
  'Nissan', 'Honda', 'Mazda', 'Volkswagen', 'Audi', 'Lancia', 'Fiat', 'Citroën',
  'Shelby', 'Pontiac', 'Dodge', 'Buick', 'Cadillac', 'Oldsmobile', 'Lincoln',
  'Studebaker', 'Packard', 'Volvo', 'Saab', 'Morgan', 'TVR', 'De Tomaso',
] as const;

/**
 * Trim, cap, dedupe. Case-insensitive on the duplicate check so that a shop
 * that taps "Porsche" and later types "porsche" gets one tag, not two.
 * The first spelling wins, because it is the one they can see.
 */
export function normalizeMarques(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of value) {
    if (out.length >= MARQUES_MAX) break;
    if (typeof raw !== 'string') continue;
    const tag = raw.trim().replace(/\s+/g, ' ').slice(0, MARQUE_LEN_MAX);
    if (!tag) continue;
    const key = tag.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(tag);
  }
  return out;
}
