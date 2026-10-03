"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  PARTS_KINDS, PARTS_CONDITIONS, categoriesFor, partsCategory,
  type PartsPost, type PartsKind, type PartsCategoryKey,
} from "@/lib/parts-shared";
import { PartsCard } from "./PartsCard";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";

type Sort = "newest" | "low" | "high";
type Initial = { q: string; make: string; kind: "all" | PartsKind; shelf: "all" | PartsCategoryKey };

type BoardProps = {
  posts: PartsPost[];
  /** Category pages pin the shelf; the kind tabs and shelf chips are then hidden. */
  lockCategory?: PartsCategoryKey;
  /** /parts and /memorabilia pin the kind; the kind tabs are hidden, shelf chips stay. */
  lockKind?: PartsKind;
};

/**
 * The board reads ?q=, ?make=, ?kind= and ?shelf= itself, inside Suspense, so
 * the page around it can stay statically cached (useSearchParams would
 * otherwise bail the whole page out).
 */
export function PartsBoard(props: BoardProps) {
  const blank: Initial = { q: "", make: "", kind: "all", shelf: "all" };
  return (
    <Suspense fallback={<Board {...props} initial={blank} />}>
      <BoardWithQuery {...props} />
    </Suspense>
  );
}

function BoardWithQuery(props: BoardProps) {
  const params = useSearchParams();
  const kindRaw = params.get("kind");
  const shelf = partsCategory(params.get("shelf"));
  const initial: Initial = {
    q: params.get("q") ?? "",
    make: params.get("make") ?? "",
    kind: shelf ? shelf.kind : PARTS_KINDS.some((k) => k.key === kindRaw) ? (kindRaw as PartsKind) : "all",
    shelf: shelf ? shelf.key : "all",
  };
  return <Board {...props} initial={initial} />;
}

const norm = (s: string | null) => (s ?? "").trim().toLowerCase();

function Board({ posts, lockCategory, lockKind, initial }: BoardProps & { initial: Initial }) {
  const locked = lockCategory ? partsCategory(lockCategory) : null;
  const pinnedKind: PartsKind | null = locked ? locked.kind : lockKind ?? null;
  const [kind, setKind] = useState<"all" | PartsKind>(pinnedKind ?? initial.kind);
  const [shelf, setShelf] = useState<"all" | PartsCategoryKey>(locked ? locked.key : initial.shelf);
  const [make, setMake] = useState(norm(initial.make));
  const [condition, setCondition] = useState("");
  const [shipsOnly, setShipsOnly] = useState(false);
  const [sort, setSort] = useState<Sort>("newest");
  const [q, setQ] = useState(initial.q);

  // Makes come from what is actually listed, spelled the way most sellers spelled them.
  const makes = useMemo(() => {
    const seen = new Map<string, { label: string; n: number }>();
    for (const p of posts) {
      const k = norm(p.make);
      if (!k) continue;
      const cur = seen.get(k);
      seen.set(k, { label: cur?.label ?? p.make!.trim(), n: (cur?.n ?? 0) + 1 });
    }
    return [...seen.entries()].sort((a, b) => a[1].label.localeCompare(b[1].label)).map(([key, v]) => ({ key, ...v }));
  }, [posts]);

  const shown = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    const list = posts.filter((p) => {
      if (kind !== "all" && p.kind !== kind) return false;
      if (shelf !== "all" && p.category !== shelf) return false;
      if (make && norm(p.make) !== make) return false;
      if (condition && p.condition !== condition) return false;
      if (shipsOnly && p.shipping !== "ships" && p.shipping !== "both") return false;
      const hay = `${p.title} ${p.body} ${p.make ?? ""} ${p.model ?? ""} ${p.partNumber ?? ""} ${p.location ?? ""}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
    if (sort === "newest") return list;
    // "Make an offer" sorts last either way: a buyer sorting by price wants numbers.
    const v = (p: PartsPost) => (p.price == null ? null : p.price);
    return [...list].sort((a, b) => {
      const x = v(a), y = v(b);
      if (x == null && y == null) return 0;
      if (x == null) return 1;
      if (y == null) return -1;
      return sort === "low" ? x - y : y - x;
    });
  }, [posts, kind, shelf, make, condition, shipsOnly, sort, q]);

  const filtered = (!locked && ((kind !== "all" && !lockKind) || shelf !== "all")) || make || condition || shipsOnly || q.trim();
  const reset = () => {
    if (!locked) { setKind(pinnedKind ?? "all"); setShelf("all"); }
    setMake(""); setCondition(""); setShipsOnly(false); setQ("");
  };

  const chip = (on: boolean) => `px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${on ? "text-white" : "bg-white hover:bg-[#F4F6F5]"}`;
  const chipStyle = (on: boolean) => (on ? { background: INK } : { color: INK, border: `1px solid ${RULE}` });
  const select = "h-10 px-3 rounded-full bg-white text-sm";
  const countFor = (k: "all" | PartsKind) => posts.filter((p) => k === "all" || p.kind === k).length;
  const shelfCount = (k: PartsCategoryKey) => posts.filter((p) => p.category === k).length;

  return (
    <div>
      {!locked && (
        <>
          {!lockKind && <div role="tablist" aria-label="Parts or memorabilia" className="flex flex-wrap items-center gap-2 mb-3">
            {[{ key: "all" as const, label: "Everything" }, ...PARTS_KINDS].map((k) => (
              <button key={k.key} role="tab" aria-selected={kind === k.key}
                onClick={() => { setKind(k.key); setShelf("all"); }}
                className={chip(kind === k.key)} style={chipStyle(kind === k.key)}>
                {k.label}
                <span className="ml-1.5 tabular-nums opacity-60">{countFor(k.key)}</span>
              </button>
            ))}
          </div>}
          {kind !== "all" && (
            <div className="flex gap-2 mb-4 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
              <button onClick={() => setShelf("all")} aria-pressed={shelf === "all"}
                className="px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap"
                style={shelf === "all" ? { background: TEAL, color: "#fff" } : { color: INK, border: `1px solid ${RULE}`, background: "#fff" }}>
                All {PARTS_KINDS.find((k) => k.key === kind)?.label.toLowerCase()}
              </button>
              {categoriesFor(kind).map((c) => (
                <button key={c.key} onClick={() => setShelf(c.key)} aria-pressed={shelf === c.key}
                  className="px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap"
                  style={shelf === c.key ? { background: TEAL, color: "#fff" } : { color: INK, border: `1px solid ${RULE}`, background: "#fff" }}>
                  {c.label}
                  {shelfCount(c.key) > 0 && <span className="ml-1 tabular-nums opacity-60">{shelfCount(c.key)}</span>}
                </button>
              ))}
            </div>
          )}
        </>
      )}

      <div className="flex flex-col sm:flex-row gap-2 mb-3">
        <input
          type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search: make, model, part number, city"
          aria-label="Search parts listings"
          className="flex-1 h-12 px-4 rounded-xl bg-white text-base focus:outline-none focus:ring-2"
          style={{ border: `1px solid ${RULE}`, color: INK }}
        />
      </div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        {makes.length > 0 && (
          <label>
            <span className="sr-only">Make</span>
            <select value={make} onChange={(e) => setMake(e.target.value)} className={select} style={{ border: `1px solid ${RULE}`, color: INK }}>
              <option value="">Any make</option>
              {makes.map((m) => <option key={m.key} value={m.key}>{m.label} ({m.n})</option>)}
            </select>
          </label>
        )}
        <label>
          <span className="sr-only">Condition</span>
          <select value={condition} onChange={(e) => setCondition(e.target.value)} className={select} style={{ border: `1px solid ${RULE}`, color: INK }}>
            <option value="">Any condition</option>
            {PARTS_CONDITIONS.map((c) => <option key={c.key} value={c.key}>{c.label}</option>)}
          </select>
        </label>
        <label className="inline-flex items-center gap-2 h-10 px-4 rounded-full bg-white text-sm cursor-pointer" style={{ border: `1px solid ${RULE}`, color: INK }}>
          <input type="checkbox" checked={shipsOnly} onChange={(e) => setShipsOnly(e.target.checked)} className="accent-[#1C8C87]" />
          Ships
        </label>
        <label className="sm:ml-auto">
          <span className="sr-only">Sort</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className={select} style={{ border: `1px solid ${RULE}`, color: INK }}>
            <option value="newest">Newest first</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </label>
      </div>

      {posts.length > 0 && (
        <p className="text-sm mb-4" style={{ color: MUTED }}>
          {shown.length === posts.length ? `${posts.length} listed` : `${shown.length} of ${posts.length}`}
          {filtered && (
            <button onClick={reset} className="ml-3 underline" style={{ color: TEAL }}>Clear filters</button>
          )}
        </p>
      )}

      {shown.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => <li key={p.id}><PartsCard p={p} /></li>)}
        </ul>
      ) : (
        <div className="rounded-2xl px-6 py-12 text-center" style={{ border: `1px dashed ${RULE}` }}>
          <p className="text-sm max-w-md mx-auto" style={{ color: MUTED }}>
            {posts.length === 0
              ? locked
                ? `Nothing on this shelf yet. List the first one; it is free.`
                : "Nothing on the board yet. The first listing is free, and so is the thousandth."
              : "Nothing fits that. Clear a filter, or list what you have."}
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <Link href={locked ? `/parts/new?shelf=${locked.key}` : lockKind && lockKind !== "part" ? `/parts/new?kind=${lockKind}` : "/parts/new"} className="inline-block px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: TEAL }}>
              List one
            </Link>
            <Link href="/wanted/new" className="inline-block px-5 py-3 rounded-full text-sm font-semibold" style={{ color: INK, border: `1px solid ${INK}` }}>
              Post a wanted ad
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
