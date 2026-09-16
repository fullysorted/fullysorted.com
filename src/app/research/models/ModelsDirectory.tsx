"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import { ModelCard, MAKE_PAGE_MIN, modelHref, yearsLabel, type ModelCardItem } from "@/components/research/ModelCard";

export type DirectoryItem = ModelCardItem;
/** Below this, a make is folded into the "Other makes" section. */
const SECTION_MIN = 2;
/** Cards shown per make before "All N" takes over. One row on desktop. */
const PREVIEW = 4;

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

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

/**
 * The hub, rebuilt 2026-09-16 so it is not 14,000px of cards.
 *
 * - Make tiles at the top filter the page in place (no navigation, no reload).
 * - With nothing picked, every make shows one row (PREVIEW cards) and an
 *   "All N" link: to the make page when one exists, otherwise it expands here.
 * - Search still cuts across everything.
 * - An A to Z text index at the bottom links every model, so nothing depends
 *   on client state to be reachable or crawlable.
 */
export function ModelsDirectory({ items }: { items: DirectoryItem[] }) {
  const [q, setQ] = useState("");
  const [picked, setPicked] = useState<string | null>(null);
  const qq = q.trim().toLowerCase();

  const all = useMemo(() => groupByMake(items), [items]);
  const filtered = useMemo(
    () => (qq ? items.filter((m) => `${m.make} ${m.model} ${m.generation || ""}`.toLowerCase().includes(qq)) : items),
    [items, qq],
  );
  const { groups, other } = useMemo(() => groupByMake(filtered), [filtered]);

  const tiles = [
    ...all.groups.map((g) => ({ key: g.makeSlug, label: g.make, n: g.items.length })),
    ...(all.other.length ? [{ key: "other-makes", label: "Other makes", n: all.other.length }] : []),
  ];

  const pick = (key: string) => {
    setPicked((cur) => (cur === key ? null : key));
    setQ("");
  };

  const visibleGroups = picked && picked !== "other-makes" ? groups.filter((g) => g.makeSlug === picked) : groups;
  const showOther = other.length > 0 && (!picked || picked === "other-makes");
  const expanded = !!picked || !!qq;

  const az = useMemo(
    () => [...items].sort((a, b) => a.make.localeCompare(b.make) || (a.year_start ?? 9999) - (b.year_start ?? 9999) || a.model.localeCompare(b.model)),
    [items],
  );

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-md mb-8">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: MUTED }} />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setPicked(null); }}
          placeholder="Search make, model or generation"
          aria-label="Search model histories"
          className="w-full h-11 pl-11 pr-10 text-sm rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-[#1C8C87]/30"
          style={{ border: `1px solid ${RULE}`, color: INK }}
        />
        {qq && (
          <button onClick={() => setQ("")} aria-label="Clear search" className="absolute right-3.5 top-1/2 -translate-y-1/2" style={{ color: MUTED }}>
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Make tiles */}
      {!qq && tiles.length > 1 && (
        <nav aria-label="Browse by make" className="mb-12">
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <h2 className="font-display text-xl sm:text-2xl" style={{ color: INK }}>Browse by make</h2>
            {picked && (
              <button onClick={() => setPicked(null)} className="text-sm font-bold hover:underline underline-offset-4" style={{ color: TEAL }}>
                Show every make
              </button>
            )}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
            {tiles.map((t) => {
              const on = picked === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => pick(t.key)}
                  aria-pressed={on}
                  className="flex items-baseline justify-between gap-2 rounded-2xl px-4 py-3 text-left text-[15px] font-medium transition-colors"
                  style={{
                    background: on ? INK : "#ffffff",
                    color: on ? "#F5EFE6" : INK,
                    border: `1px solid ${on ? INK : RULE}`,
                  }}
                >
                  <span className="truncate">{t.label}</span>
                  <span className="text-[11px] shrink-0" style={{ fontFamily: MONO, color: on ? "rgba(245,239,230,0.7)" : MUTED }}>{t.n}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {qq && (
        <p className="text-xs mb-6" style={{ fontFamily: MONO, color: MUTED }}>
          {filtered.length} of {items.length} models match
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="rounded-2xl bg-white px-6 py-14 text-center" style={{ border: `1px solid ${RULE}` }}>
          <p className="text-sm" style={{ color: MUTED }}>
            Nothing matches that search.{" "}
            <button onClick={() => setQ("")} className="font-bold" style={{ color: TEAL }}>Clear</button> to see every model.
          </p>
        </div>
      ) : (
        <div className="space-y-12">
          {visibleGroups.map((g) => (
            <MakeSection
              key={g.makeSlug}
              id={g.makeSlug}
              title={g.make}
              items={expanded ? g.items : g.items.slice(0, PREVIEW)}
              total={g.items.length}
              moreHref={g.items.length >= MAKE_PAGE_MIN ? `/research/models/${g.makeSlug}` : null}
              onMore={() => pick(g.makeSlug)}
            />
          ))}
          {showOther && (
            <MakeSection
              id="other-makes"
              title="Other makes"
              items={expanded ? other : other.slice(0, PREVIEW)}
              total={other.length}
              moreHref={null}
              onMore={() => pick("other-makes")}
              showMake
            />
          )}
        </div>
      )}

      {/* A to Z: every model as a plain link */}
      {!qq && (
        <section className="mt-16 pt-8" style={{ borderTop: `1px solid ${RULE}` }} aria-label="Every model history, A to Z">
          <h2 className="font-display text-xl sm:text-2xl mb-4" style={{ color: INK }}>Every model, A to Z</h2>
          <ul className="columns-2 sm:columns-3 lg:columns-4 gap-x-8 text-[14px] leading-7">
            {az.map((m) => (
              <li key={m.id} className="break-inside-avoid">
                <Link href={modelHref(m.slug)} className="hover:underline underline-offset-4" style={{ color: INK }}>
                  {m.make} {m.model}
                </Link>
                {yearsLabel(m) && (
                  <span className="text-[11px] ml-1.5" style={{ fontFamily: MONO, color: MUTED }}>{yearsLabel(m)}</span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function MakeSection({
  id, title, items, total, moreHref, onMore, showMake = false,
}: {
  id: string; title: string; items: DirectoryItem[]; total: number;
  moreHref: string | null; onMore: () => void; showMake?: boolean;
}) {
  const more = total > items.length;
  return (
    <section id={id} className="scroll-mt-24">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-4">
        <h2 className="font-display text-2xl" style={{ color: INK }}>
          {title} <span className="text-sm ml-1" style={{ fontFamily: MONO, color: MUTED }}>{total}</span>
        </h2>
        {more && (moreHref ? (
          <Link href={moreHref} className="inline-flex items-center gap-1 text-sm font-bold hover:underline underline-offset-4" style={{ color: TEAL }}>
            All {total} {title} <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <button onClick={onMore} className="inline-flex items-center gap-1 text-sm font-bold hover:underline underline-offset-4" style={{ color: TEAL }}>
            All {total} <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((m) => (
          <ModelCard key={m.id} m={m} showMake={showMake} />
        ))}
      </div>
    </section>
  );
}
