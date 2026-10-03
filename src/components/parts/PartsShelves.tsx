import Link from "next/link";
import { PARTS_KINDS, categoriesFor, kindHref, type PartsCategoryKey, type PartsKind } from "@/lib/parts-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";

/**
 * The shelf index: every category as a typographic row with its live count.
 * Plain on purpose (no icons, no tinted circles). Pass `only` to show one kind,
 * and `current` to mark the shelf the reader is on.
 */
export function PartsShelves({
  counts, only, current,
}: { counts: Partial<Record<PartsCategoryKey, number>>; only?: PartsKind; current?: PartsCategoryKey }) {
  const kinds = PARTS_KINDS.filter((k) => !only || k.key === only);
  return (
    <div className={`grid gap-8 ${kinds.length > 1 ? "lg:grid-cols-2" : ""}`}>
      {kinds.map((k) => (
        <div key={k.key}>
          <div className="flex items-baseline justify-between pb-3" style={{ borderBottom: `2px solid ${INK}` }}>
            <h3 className="font-display text-xl" style={{ color: INK }}>{k.label}</h3>
            <Link href={`${kindHref(k.key)}#board`} className="text-sm font-semibold" style={{ color: TEAL }}>
              All {k.label.toLowerCase()}
            </Link>
          </div>
          <ul>
            {categoriesFor(k.key).map((c, i) => {
              const n = counts[c.key] ?? 0;
              const here = c.key === current;
              return (
                <li key={c.key} style={{ borderBottom: `1px solid ${RULE}` }}>
                  <Link href={`/parts/category/${c.slug}`} aria-current={here ? "page" : undefined}
                    className="group flex items-baseline gap-4 py-3.5 transition-colors hover:bg-[#F7F9F8] -mx-2 px-2 rounded-lg">
                    <span className="text-xs tabular-nums shrink-0 w-6" style={{ fontFamily: MONO, color: TEAL }}>{String(i + 1).padStart(2, "0")}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold group-hover:underline underline-offset-4" style={{ color: INK }}>
                        {c.label}{here && <span className="ml-2 text-xs font-normal" style={{ color: MUTED }}>you are here</span>}
                      </span>
                      <span className="block text-sm mt-0.5 leading-snug" style={{ color: MUTED }}>{c.blurb}</span>
                    </span>
                    <span className="text-sm tabular-nums shrink-0" style={{ fontFamily: MONO, color: n ? INK : MUTED }}>
                      {n ? n : ""}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
