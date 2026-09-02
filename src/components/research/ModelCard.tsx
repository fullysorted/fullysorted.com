import Link from "next/link";
import { ArrowRight, AlertTriangle, ShieldCheck } from "lucide-react";

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
  overall_confidence: string | null;
  source_count: number;
  claim_count: number;
  disputed_count: number;
}

const CONF: Record<string, { label: string; bg: string; fg: string }> = {
  high: { label: "High confidence", bg: "rgba(106,176,76,0.14)", fg: "#3f7a2e" },
  medium: { label: "Medium confidence", bg: "rgba(176,141,63,0.16)", fg: "#8a6d2f" },
  low: { label: "Low confidence", bg: "rgba(193,68,14,0.12)", fg: "#a5390c" },
};

export function modelHref(slug: string): string {
  const parts = slug.split("/");
  return `/research/models/${parts[0]}/${parts.slice(1).join("/")}`;
}

/** Drop a generation label that only repeats the model name ("F40 (F40)"). */
export function displayGeneration(m: Pick<ModelCardItem, "model" | "generation">): string | null {
  if (!m.generation) return null;
  return m.generation.trim().toLowerCase() === m.model.trim().toLowerCase() ? null : m.generation;
}

/**
 * One model history in a grid. `showMake` is off on make pages, where the
 * make is the page title and repeating it on every card is noise.
 */
export function ModelCard({ m, showMake = true }: { m: ModelCardItem; showMake?: boolean }) {
  const conf = CONF[(m.overall_confidence || "medium").toLowerCase()] || CONF.medium;
  const generation = displayGeneration(m);
  const years = [m.year_start, m.year_end].filter(Boolean).join("–");
  return (
    <Link
      href={modelHref(m.slug)}
      className="flex flex-col p-5 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all group rounded-xl"
      style={{ border: "1px solid rgba(0,0,0,0.08)", borderTop: "2px solid #1a1a18" }}
    >
      {showMake && (
        <span className="text-[11px] font-semibold tracking-[0.18em] uppercase" style={{ color: "#6b6b5e" }}>{m.make}</span>
      )}
      <h3 className="font-display font-semibold text-lg mt-1 leading-snug group-hover:text-accent transition-colors" style={{ color: "#1a1a18" }}>
        {m.model} {generation && <span className="font-normal" style={{ color: "#9a9a8a" }}>({generation})</span>}
      </h3>
      <p className="text-xs mt-1 price-display" style={{ color: "#9a9a8a" }}>
        {years}
        {m.production_total ? ` · ${m.production_total.toLocaleString()} built` : ""}
      </p>
      {m.summary && (
        <p className="text-sm mt-3 line-clamp-3 flex-1" style={{ color: "#6b6b5e" }}>
          {m.summary.replace(/[#*]/g, "").slice(0, 155)}…
        </p>
      )}
      <div className="flex flex-wrap items-center gap-2 mt-3.5">
        <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full" style={{ background: conf.bg, color: conf.fg }}>
          <ShieldCheck className="w-3 h-3" /> {conf.label}
        </span>
        {m.source_count > 0 && (
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full" style={{ background: "#f3f2ee", color: "#6b6b5e" }}>
            {m.source_count} cited {m.source_count === 1 ? "source" : "sources"}
          </span>
        )}
        {m.disputed_count > 0 && (
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "rgba(176,141,63,0.16)", color: "#8a6d2f" }}>
            <AlertTriangle className="w-3 h-3" /> {m.disputed_count} disputed
          </span>
        )}
      </div>
      <div className="flex items-center gap-1 mt-3 text-xs font-semibold" style={{ color: "#1E6091" }}>
        Read history <ArrowRight className="w-3 h-3" />
      </div>
    </Link>
  );
}
