"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { ModelCard, MAKE_PAGE_MIN, type ModelCardItem } from "@/components/research/ModelCard";

export type DirectoryItem = ModelCardItem;
/** Below this, a make is folded into the "Other makes" section. */
const SECTION_MIN = 2;

export interface MakeGroup {
  make: string;
  makeSlug: string;
  items: DirectoryItem[];
}

/**
 * Group published models by make. Makes with fewer than SECTION_MIN cars are
 * folded into one trailing "Other makes" group so the page does not end in a
 * column of one-card sections. Models within a make sort by first model year.
 */
export function groupByMake(items: DirectoryItem[]): { groups: MakeGroup[]; other: DirectoryItem[] } {
  const byMake = new Map<string, MakeGroup>();
  for (const m of items) {
    const makeSlug = m.slug.split("/")[0];
    const g = byMake.get(makeSlug) ?? { make: m.make, makeSlug, items: [] };
    g.items.push(m);
    byMake.set(makeSlug, g);
  }
  const byYear = (a: DirectoryItem, b: DirectoryItem) => (a.year_start ?? 9999) - (b.year_start ?? 9999) || a.model.localeCompare(b.model);
  const all = Array.from(byMake.values()).sort((a, b) => a.make.localeCompare(b.make));
  const groups = all.filter((g) => g.items.length >= SECTION_MIN);
  const other = all.filter((g) => g.items.length < SECTION_MIN).flatMap((g) => g.items);
  for (const g of groups) g.items.sort(byYear);
  other.sort((a, b) => a.make.localeCompare(b.make) || byYear(a, b));
  return { groups, other };
}

export function ModelsDirectory({ items }: { items: DirectoryItem[] }) {
  const [q, setQ] = useState("");
  const qq = q.trim().toLowerCase();

  const filtered = useMemo(
    () => (qq ? items.filter((m) => `${m.make} ${m.model} ${m.generation || ""}`.toLowerCase().includes(qq)) : items),
    [items, qq],
  );
  const { groups, other } = useMemo(() => groupByMake(filtered), [filtered]);
  const jump = useMemo(() => groupByMake(items).groups.map((g) => ({ make: g.make, makeSlug: g.makeSlug, n: g.items.length })), [items]);

  return (
    <div>
      {/* Search + jump bar */}
      <div className="mb-10 space-y-5">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2" style={{ color: "#9a9a8a" }} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search make, model or generation"
            aria-label="Search model histories"
            className="w-full h-11 pl-10 pr-10 text-sm rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-accent/30"
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
          />
          {qq && (
            <button onClick={() => setQ("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2" style={{ color: "#9a9a8a" }}>
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {!qq && jump.length > 1 && (
          <nav aria-label="Jump to make" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {jump.map((g) => (
              <a key={g.makeSlug} href={`#${g.makeSlug}`} className="inline-flex items-baseline gap-1 font-semibold hover:underline underline-offset-4" style={{ color: "#1a1a18" }}>
                {g.make} <span className="text-[11px] font-medium price-display" style={{ color: "#9a9a8a" }}>{g.n}</span>
              </a>
            ))}
            {other.length > 0 && (
              <a href="#other-makes" className="inline-flex items-baseline gap-1 font-semibold hover:underline underline-offset-4" style={{ color: "#1a1a18" }}>
                Other makes <span className="text-[11px] font-medium price-display" style={{ color: "#9a9a8a" }}>{other.length}</span>
              </a>
            )}
          </nav>
        )}

        <p className="text-xs" style={{ color: "#9a9a8a" }}>
          {qq ? `${filtered.length} of ${items.length} models match` : `${items.length} models across ${jump.length + (other.length ? 1 : 0)} sections`}
        </p>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-14 text-center" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <p className="text-sm" style={{ color: "#9a9a8a" }}>
            Nothing matches that search.{" "}
            <button onClick={() => setQ("")} className="font-semibold" style={{ color: "#1E6091" }}>Clear</button> to see every model.
          </p>
        </div>
      ) : (
        <div className="space-y-14">
          {groups.map((g) => (
            <MakeSection key={g.makeSlug} id={g.makeSlug} title={g.make} count={g.items.length} href={g.items.length >= MAKE_PAGE_MIN ? `/research/models/${g.makeSlug}` : null} items={g.items} />
          ))}
          {other.length > 0 && (
            <MakeSection id="other-makes" title="Other makes" count={other.length} href={null} items={other} showMake />
          )}
        </div>
      )}
    </div>
  );
}

function MakeSection({ id, title, count, href, items, showMake = false }: { id: string; title: string; count: number; href: string | null; items: DirectoryItem[]; showMake?: boolean }) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-5 pb-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}>
        <h2 className="font-display font-semibold tracking-tight text-2xl sm:text-3xl" style={{ color: "#1a1a18" }}>
          {title} <span className="text-base font-normal price-display ml-1" style={{ color: "#9a9a8a" }}>{count}</span>
        </h2>
        {href && (
          <Link href={href} className="inline-flex items-center gap-1 text-sm font-semibold hover:opacity-70 transition-opacity" style={{ color: "#1E6091" }}>
            All {title} histories <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((m) => (
          <ModelCard key={m.id} m={m} showMake={showMake} />
        ))}
      </div>
    </section>
  );
}
