"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Search, ShieldCheck, AlertTriangle, X } from "lucide-react";

export interface DirectoryItem {
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

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 text-xs font-semibold rounded-full transition-colors"
      style={
        active
          ? { background: "#1E6091", color: "#fff", border: "1px solid #1E6091" }
          : { background: "#fff", color: "#6b6b5e", border: "1px solid rgba(0,0,0,0.12)" }
      }
    >
      {children}
    </button>
  );
}

export function ModelsDirectory({ items }: { items: DirectoryItem[] }) {
  const [q, setQ] = useState("");
  const [make, setMake] = useState<string | null>(null);
  const [era, setEra] = useState<string | null>(null);

  const makes = useMemo(() => Array.from(new Set(items.map((m) => m.make))).sort(), [items]);
  const eras = useMemo(() => {
    const d = new Set<string>();
    items.forEach((m) => {
      if (m.year_start) d.add(`${Math.floor(m.year_start / 10) * 10}s`);
    });
    return Array.from(d).sort();
  }, [items]);

  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return items.filter((m) => {
      if (make && m.make !== make) return false;
      if (era && !(m.year_start && `${Math.floor(m.year_start / 10) * 10}s` === era)) return false;
      if (qq && !`${m.make} ${m.model} ${m.generation || ""}`.toLowerCase().includes(qq)) return false;
      return true;
    });
  }, [items, q, make, era]);

  const active = Boolean(make || era || q.trim());
  const reset = () => {
    setQ("");
    setMake(null);
    setEra(null);
  };

  return (
    <div>
      <div className="mb-7 space-y-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#9a9a8a" }} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search make, model, or generation…"
            className="w-full h-11 pl-10 pr-4 text-sm rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
          />
        </div>
        {makes.length > 1 && (
          <div className="flex flex-wrap gap-2">
            <Chip active={!make} onClick={() => setMake(null)}>All makes</Chip>
            {makes.map((mk) => (
              <Chip key={mk} active={make === mk} onClick={() => setMake(make === mk ? null : mk)}>{mk}</Chip>
            ))}
          </div>
        )}
        {eras.length > 1 && (
          <div className="flex flex-wrap gap-2">
            <Chip active={!era} onClick={() => setEra(null)}>All eras</Chip>
            {eras.map((e) => (
              <Chip key={e} active={era === e} onClick={() => setEra(era === e ? null : e)}>{e}</Chip>
            ))}
          </div>
        )}
        <div className="flex items-center gap-3 text-xs" style={{ color: "#9a9a8a" }}>
          <span>
            {filtered.length} of {items.length} {items.length === 1 ? "model" : "models"}
          </span>
          {active && (
            <button onClick={reset} className="inline-flex items-center gap-1 font-semibold" style={{ color: "#1E6091" }}>
              <X className="w-3 h-3" /> Clear filters
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-14 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-sm" style={{ color: "#9a9a8a" }}>
            No models match those filters.{" "}
            <button onClick={reset} className="font-semibold" style={{ color: "#1E6091" }}>Clear</button> to see all.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((m) => {
            const parts = m.slug.split("/");
            const href = `/research/models/${parts[0]}/${parts.slice(1).join("/")}`;
            const conf = CONF[(m.overall_confidence || "medium").toLowerCase()] || CONF.medium;
            return (
              <Link
                key={m.id}
                href={href}
                className="flex flex-col rounded-2xl p-5 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all group"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#1E6091" }}>{m.make}</span>
                <h2 className="font-display font-semibold mt-1 leading-snug group-hover:text-accent transition-colors" style={{ color: "#1a1a18" }}>
                  {m.model} {m.generation && <span style={{ color: "#9a9a8a" }}>({m.generation})</span>}
                </h2>
                <p className="text-xs mt-1" style={{ color: "#9a9a8a" }}>
                  {[m.year_start, m.year_end].filter(Boolean).join("–")}
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
                  <BookOpen className="w-3 h-3" /> Read history <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
