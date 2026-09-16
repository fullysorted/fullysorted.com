import Link from "next/link";

/** A make earns its own landing page at this many published histories. */
export const MAKE_PAGE_MIN = 3;

export interface ModelCardItem {
  id: number;
  slug: string;
  make: string;
  model: string;
  generation: string | null;
  year_start: number | null;
  year_end: number | null;
  production_total: number | null;
  summary: string | null;
  hero_photo?: string | null;
  overall_confidence: string | null;
  source_count: number;
  claim_count: number;
  disputed_count: number;
}

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

export function modelHref(slug: string): string {
  const parts = slug.split("/");
  return `/research/models/${parts[0]}/${parts.slice(1).join("/")}`;
}

/** Drop a generation label that only repeats the model name ("F40 (F40)"). */
export function displayGeneration(m: Pick<ModelCardItem, "model" | "generation">): string | null {
  if (!m.generation) return null;
  return m.generation.trim().toLowerCase() === m.model.trim().toLowerCase() ? null : m.generation;
}

export function yearsLabel(m: Pick<ModelCardItem, "year_start" | "year_end">): string {
  if (!m.year_start) return "";
  if (!m.year_end || m.year_end === m.year_start) return String(m.year_start);
  return `${m.year_start}-${m.year_end}`;
}

/**
 * One model history in a grid. Restyled 2026-09-16 to match the homepage
 * research picks: photo (or a quiet placeholder), years, name, one meta
 * line. The summary blurb is gone; the page it links to is the summary.
 * `showMake` is off on make pages, where the make is the page title.
 */
export function ModelCard({ m, showMake = true }: { m: ModelCardItem; showMake?: boolean }) {
  const generation = displayGeneration(m);
  const years = yearsLabel(m);
  const meta = [
    m.production_total ? `${m.production_total.toLocaleString("en-US")} built` : null,
    m.source_count > 0 ? `${m.source_count} ${m.source_count === 1 ? "source" : "sources"}` : null,
  ].filter(Boolean).join(" · ");

  return (
    <Link
      href={modelHref(m.slug)}
      className="group flex flex-col rounded-[20px] overflow-hidden bg-white transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(18,53,42,0.45)]"
      style={{ border: `1px solid ${RULE}` }}
    >
      <div className="relative aspect-[16/10] overflow-hidden" style={{ background: INK }}>
        {m.hero_photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={m.hero_photo}
            alt={`${m.make} ${m.model}`}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-4" aria-hidden="true">
            <span className="font-display text-2xl leading-none" style={{ color: "rgba(245,239,230,0.35)" }}>
              {m.model}
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col gap-1">
        <span className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.08em", color: MUTED }}>
          {showMake ? m.make : years}
          {showMake && years ? ` · ${years}` : ""}
        </span>
        <h3 className="font-display text-[1.15rem] leading-tight transition-colors group-hover:text-[#1C8C87]" style={{ color: INK }}>
          {m.model}
          {generation && <span className="text-[0.85em]" style={{ color: MUTED }}> ({generation})</span>}
        </h3>
        {meta && (
          <span className="text-[12px]" style={{ fontFamily: MONO, color: MUTED }}>
            {meta}
          </span>
        )}
        <span className="text-[13px] font-bold mt-1" style={{ color: TEAL }}>
          Read the history &rarr;
        </span>
      </div>
    </Link>
  );
}
