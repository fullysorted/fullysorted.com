"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { WANTED_KINDS, type WantedPost } from "@/lib/wanted-shared";
import { categoryLabel } from "@/lib/service-categories";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";

const ago = (iso: string) => {
  const d = Math.floor((Date.now() - new Date(iso).getTime()) / 86_400_000);
  return d <= 0 ? "today" : d === 1 ? "yesterday" : `${d} days ago`;
};

export function WantedCard({ p }: { p: WantedPost }) {
  const kind = WANTED_KINDS.find((k) => k.key === p.kind)?.singular ?? p.kind;
  const facts = [p.kind === "service" && p.category ? categoryLabel(p.category) : null, p.make, p.location].filter(Boolean);
  return (
    <Link href={`/wanted/${p.id}`} className="block rounded-2xl bg-white p-5 h-full transition-shadow hover:shadow-md" style={{ border: `1px solid ${RULE}` }}>
      <span className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-wider" style={{ color: TEAL }}>
        {kind} wanted
        {p.feeText && (
          <span className="px-2 py-0.5 rounded normal-case tracking-normal text-[12px]" style={{ background: INK, color: "#fff" }}>
            Finder&apos;s fee: {p.feeText}
          </span>
        )}
      </span>
      <span className="block font-display text-xl leading-snug mt-2" style={{ color: INK }}>{p.title}</span>
      {facts.length > 0 && <span className="block text-sm mt-1" style={{ color: INK }}>{facts.join(" · ")}</span>}
      <span className="block text-sm mt-2 leading-relaxed" style={{ color: MUTED }}>
        {p.body.length > 170 ? `${p.body.slice(0, 170).trimEnd()}...` : p.body}
      </span>
      <span className="block text-xs mt-3" style={{ color: MUTED }}>
        {p.handle ? `@${p.handle}` : "Member"} · posted {ago(p.createdAt)}{p.budget ? ` · budget ${p.budget}` : ""}
      </span>
    </Link>
  );
}

export function WantedBoard({ posts }: { posts: WantedPost[] }) {
  const [kind, setKind] = useState<"all" | WantedPost["kind"]>("all");
  const [feeOnly, setFeeOnly] = useState(false);
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const words = q.toLowerCase().split(/\s+/).filter(Boolean);
    return posts.filter((p) => {
      if (kind !== "all" && p.kind !== kind) return false;
      if (feeOnly && !p.feeText) return false;
      const hay = `${p.title} ${p.body} ${p.make ?? ""} ${p.location ?? ""}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
  }, [posts, kind, feeOnly, q]);

  const chip = (on: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium transition-colors ${on ? "text-white" : "bg-white"}`;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {[{ key: "all" as const, label: "Everything" }, ...WANTED_KINDS].map((k) => (
          <button key={k.key} onClick={() => setKind(k.key)} aria-pressed={kind === k.key} className={chip(kind === k.key)}
            style={kind === k.key ? { background: INK } : { color: INK, border: `1px solid ${RULE}` }}>
            {k.label}
          </button>
        ))}
        <button onClick={() => setFeeOnly((v) => !v)} aria-pressed={feeOnly} className={chip(feeOnly)}
          style={feeOnly ? { background: TEAL } : { color: INK, border: `1px solid ${RULE}` }}>
          Pays a finder&apos;s fee
        </button>
      </div>
      <input
        type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the board: make, model, part, city"
        aria-label="Search wanted posts"
        className="w-full h-12 px-4 mb-6 rounded-xl bg-white text-base focus:outline-none focus:ring-2"
        style={{ border: `1px solid ${RULE}`, color: INK }}
      />

      {shown.length > 0 ? (
        <ul className="grid gap-4 md:grid-cols-2">
          {shown.map((p) => <li key={p.id}><WantedCard p={p} /></li>)}
        </ul>
      ) : (
        <div className="rounded-2xl px-6 py-12 text-center" style={{ border: `1px dashed ${RULE}` }}>
          <p className="text-sm max-w-md mx-auto" style={{ color: MUTED }}>
            {posts.length === 0
              ? "Nothing on the board yet. Somebody has to go first."
              : "Nothing fits that. Clear a filter, or post what you are after."}
          </p>
          <Link href="/wanted/new" className="inline-block mt-4 px-5 py-3 rounded-full text-sm font-bold text-white" style={{ background: TEAL }}>
            Post a wanted
          </Link>
        </div>
      )}
    </div>
  );
}
