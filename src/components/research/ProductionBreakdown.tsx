"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Factory, Star, ArrowRight } from "lucide-react";

/**
 * Production by variant — turns the build numbers already cited in a model's
 * notable-variant notes into a proportional, rarity-framed picture. Nothing is
 * fabricated: we parse counts the page already sources, and only render when at
 * least two variants have a confident figure. One hue encodes magnitude; the
 * rarest variant is flagged with gold + a star (never colour alone).
 */

type Trim = { name: string; note: string };
type Row = { name: string; note: string; count: number };

function extractCount(note: string): number | null {
  // A number tied to a production verb: "20,395 built", "3,660 built",
  // "911 units built", "~948 made", "about 2,282 produced".
  const m = note.match(/(\d{1,3}(?:,\d{3})+|\d{2,7})\s*\+?\s*(?:units?|cars|examples)?\s*(?:were\s+)?(?:built|made|produced)\b/i);
  if (!m) return null;
  const n = parseInt(m[1].replace(/,/g, ""), 10);
  if (!Number.isFinite(n) || n < 1 || n > 50_000_000) return null;
  return n;
}

function trimName(name: string): string {
  return name.replace(/\s*\([^)]*\)\s*$/, "").trim(); // drop trailing "(…)" for the value-guide query
}

export function ProductionBreakdown({
  variants,
  total,
  make,
  model,
}: {
  variants: Trim[];
  total: number | null;
  make: string;
  model: string;
}) {
  const rows: Row[] = (variants || [])
    .map((t) => {
      const count = extractCount(t.note || "");
      return count ? { name: t.name, note: t.note, count } : null;
    })
    .filter((r): r is Row => r !== null)
    .sort((a, b) => b.count - a.count);

  if (rows.length < 2) return null;

  const max = rows[0].count;
  const rarest = rows[rows.length - 1];
  const sum = rows.reduce((s, r) => s + r.count, 0);
  const denom = total && total >= sum ? total : sum;
  const listedShare = total && total > 0 ? Math.min(100, Math.round((sum / total) * 100)) : null;

  return (
    <div className="rounded-2xl bg-white p-5 sm:p-6" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
      <div className="flex items-center gap-2 mb-1">
        <Factory className="w-4 h-4" style={{ color: "#1E6091" }} />
        <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6b6b5e" }}>Production by variant</p>
      </div>
      <p className="text-sm mb-5" style={{ color: "#6b6b5e" }}>
        How the {model} run breaks down — and which variants are the scarce ones. Approximate figures from this model&rsquo;s cited sources.
      </p>

      <div className="space-y-3">
        {rows.map((r, i) => {
          const pctOfMax = Math.max(4, (r.count / max) * 100);
          const share = denom > 0 ? (r.count / denom) * 100 : 0;
          const isRarest = r.name === rarest.name;
          const oneOf = Math.round(denom / r.count);
          const barColor = isRarest ? "#B08D3F" : "#1E6091";
          const q = `/value-guide?make=${encodeURIComponent(make)}&model=${encodeURIComponent(trimName(r.name) || model)}`;
          return (
            <Link key={r.name} href={q} className="group block" title={`${r.name}: ~${r.count.toLocaleString()} built · about 1 of every ${oneOf.toLocaleString()}`}>
              <div className="flex items-baseline justify-between mb-1 gap-2">
                <span className="text-sm font-semibold inline-flex items-center gap-1.5 min-w-0" style={{ color: "#1a1a18" }}>
                  {isRarest && <Star className="w-3.5 h-3.5 shrink-0" style={{ color: "#B08D3F" }} fill="#B08D3F" />}
                  <span className="truncate">{r.name}</span>
                </span>
                <span className="text-xs tabular-nums shrink-0" style={{ color: "#6b6b5e" }}>
                  ~{r.count.toLocaleString()}{share >= 0.5 ? ` · ${share < 10 ? share.toFixed(1) : Math.round(share)}%` : ""}
                </span>
              </div>
              <div className="relative h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.05)" }}>
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full"
                  style={{ background: barColor }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${pctOfMax}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Rarest callout — the fun, useful bit */}
      <div className="mt-5 rounded-xl p-3.5 flex items-start gap-2.5" style={{ background: "rgba(176,141,63,0.08)", border: "1px solid rgba(176,141,63,0.25)" }}>
        <Star className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#B08D3F" }} fill="#B08D3F" />
        <p className="text-xs leading-relaxed" style={{ color: "#3a3a34" }}>
          <span className="font-bold">Rarest of the bunch:</span> the {rarest.name} — only about {rarest.count.toLocaleString()} built
          {denom > 0 ? `, roughly 1 in every ${Math.round(denom / rarest.count).toLocaleString()} ${model}s.` : "."} If provenance and rarity drive your buy, this is the one to hunt.
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between gap-3 flex-wrap">
        <p className="text-[11px]" style={{ color: "#9a9a8a" }}>
          {listedShare != null
            ? `Variants shown ≈ ${listedShare}% of the ~${total!.toLocaleString()} built. Figures approximate; see Sources below.`
            : "Figures approximate; tap a variant to value it. See Sources below."}
        </p>
        <Link href={`/value-guide?make=${encodeURIComponent(make)}&model=${encodeURIComponent(model)}`} className="text-xs font-bold inline-flex items-center gap-1 shrink-0" style={{ color: "#1E6091" }}>
          Value these <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
