"use client";

import { Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PARTS_KINDS, type PartsPost } from "@/lib/parts-shared";
import { PartsCard } from "./PartsCard";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";

type Sort = "newest" | "low" | "high";

/**
 * The board reads ?q= itself, inside Suspense, so the page around it can stay
 * statically cached (useSearchParams would otherwise bail the whole page out).
 */
export function PartsBoard({ posts }: { posts: PartsPost[] }) {
  return (
    <Suspense fallback={<Board posts={posts} initialQuery="" />}>
      <BoardWithQuery posts={posts} />
    </Suspense>
  );
}

function BoardWithQuery({ posts }: { posts: PartsPost[] }) {
  const params = useSearchParams();
  return <Board posts={posts} initialQuery={params.get("q") ?? ""} />;
}

function Board({ posts, initialQuery }: { posts: PartsPost[]; initialQuery: string }) {
  const [kind, setKind] = useState<"all" | PartsPost["kind"]>("all");
  const [sort, setSort] = useState<Sort>("newest");
  const [q, setQ] = useState(initialQuery);

  const shown = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    const list = posts.filter((p) => {
      if (kind !== "all" && p.kind !== kind) return false;
      const hay = `${p.title} ${p.body} ${p.make ?? ""} ${p.model ?? ""} ${p.partNumber ?? ""} ${p.location ?? ""}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
    if (sort === "newest") return list;
    // "Make an offer" sorts last either way: a buyer sorting by price wants numbers.
    const v = (p: PartsPost) => (p.price == null ? Number.POSITIVE_INFINITY : p.price);
    return [...list].sort((a, b) => (sort === "low" ? v(a) - v(b) : (v(b) === Infinity ? -1 : v(a) === Infinity ? 1 : v(b) - v(a))));
  }, [posts, kind, sort, q]);

  const chip = (on: boolean) => `px-4 py-2 rounded-full text-sm font-medium transition-colors ${on ? "text-white" : "bg-white"}`;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {[{ key: "all" as const, label: "Everything" }, ...PARTS_KINDS].map((k) => (
          <button key={k.key} onClick={() => setKind(k.key)} aria-pressed={kind === k.key} className={chip(kind === k.key)}
            style={kind === k.key ? { background: INK } : { color: INK, border: `1px solid ${RULE}` }}>
            {k.label}
          </button>
        ))}
        <label className="ml-auto text-sm" style={{ color: MUTED }}>
          <span className="sr-only">Sort</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="h-10 px-3 rounded-full bg-white text-sm" style={{ border: `1px solid ${RULE}`, color: INK }}>
            <option value="newest">Newest first</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
        </label>
      </div>
      <input
        type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search: make, model, part number, city"
        aria-label="Search parts listings"
        className="w-full h-12 px-4 mb-6 rounded-xl bg-white text-base focus:outline-none focus:ring-2"
        style={{ border: `1px solid ${RULE}`, color: INK }}
      />

      {shown.length > 0 ? (
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => <li key={p.id}><PartsCard p={p} /></li>)}
        </ul>
      ) : (
        <div className="rounded-2xl px-6 py-12 text-center" style={{ border: `1px dashed ${RULE}` }}>
          <p className="text-sm max-w-md mx-auto" style={{ color: MUTED }}>
            {posts.length === 0
              ? "Nothing on the board yet. The first listing is free, and so is the thousandth."
              : "Nothing fits that. Clear a filter, or list what you have."}
          </p>
          <Link href="/parts/new" className="inline-block mt-4 px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: TEAL }}>
            List a part
          </Link>
        </div>
      )}
    </div>
  );
}
