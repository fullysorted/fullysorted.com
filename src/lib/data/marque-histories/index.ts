/**
 * Marque histories: the short, cited story of a make shown at the top of
 * /research/models/<make>. Static content, no database read. Spec:
 * MARQUE-HISTORY-SPEC.md. Validate: scripts/validate-marque.mjs.
 */
import { marqueBmw } from "./bmw";
import { marqueChevrolet } from "./chevrolet";
import { marqueDodge } from "./dodge";
import { marqueFerrari } from "./ferrari";
import { marqueFord } from "./ford";
import { marqueLancia } from "./lancia";
import { marqueMazda } from "./mazda";
import { marqueMercedesBenz } from "./mercedes-benz";
import { marqueNissan } from "./nissan";
import { marquePorsche } from "./porsche";
import { marqueToyota } from "./toyota";
import { marqueVolkswagen } from "./volkswagen";

export interface MarqueSource { ref: string; title: string; url?: string | null; publisher?: string | null; sourceType: string; reliability: string }
export interface MarqueClaim { section: string; claimText: string; status: string; sourceRefs: string[]; conflictNote?: string | null }
export interface MarqueHistory {
  slug: string; name: string; founded: string; founder?: string; headquarters: string;
  summary: string; history: string; inAmerica: string;
  timeline: { year: number; event: string; sourceRefs: string[] }[];
  sources: MarqueSource[]; claims: MarqueClaim[];
}

const ALL = [
  marqueBmw, marqueChevrolet, marqueDodge, marqueFerrari, marqueFord, marqueLancia,
  marqueMazda, marqueMercedesBenz, marqueNissan, marquePorsche, marqueToyota, marqueVolkswagen,
] as unknown as MarqueHistory[];

const BY_SLUG = new Map(ALL.map((m) => [m.slug, m]));

export function getMarqueHistory(slug: string): MarqueHistory | null {
  return BY_SLUG.get(slug.toLowerCase()) ?? null;
}
