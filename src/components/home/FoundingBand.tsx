import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Founding-member band.
 *
 * Deliberately NOT a "coming soon" notice. Coming-soon tells a visitor to leave
 * and return later, and they don't. This reframes early as opportunity.
 *
 * Restyled 2026-09-17 to sit inside the homepage's own palette (deep green,
 * cream, teal, mono eyebrow) instead of the old navy-and-gold strip. The trade
 * roll call is gone: the tiles below the hero already show every trade.
 *
 * Remove it once the directory has enough providers to speak for itself.
 */
export function FoundingBand() {
  return (
    <div style={{ background: "#12352A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center">
        <span
          className="text-[11px] uppercase"
          style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: "0.12em", color: "#F2B27A" }}
        >
          Founding 500
        </span>
        <span className="text-sm" style={{ color: "rgba(245,239,230,0.85)" }}>
          Shops and specialists are joining now. Founding members list free.
        </span>
        <Link
          href="/services/apply"
          className="inline-flex items-center gap-1 text-sm font-bold hover:underline underline-offset-4"
          style={{ color: "#F5EFE6" }}
        >
          Get listed free <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
