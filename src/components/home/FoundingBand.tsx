import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Founding-member band.
 *
 * Deliberately NOT a "coming soon" notice. Coming-soon tells a visitor to leave
 * and return later, and they don't — it also wastes the SEO already earned by
 * the research pages. This reframes early as opportunity, which is honest about
 * where the platform is while still asking for something.
 *
 * Remove it once the directory has enough providers to speak for itself.
 */
export function FoundingBand() {
  return (
    <div style={{ background: "#0F2032" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded"
          style={{ background: "rgba(176,141,63,0.22)", color: "#D9BC72" }}
        >
          Founding members
        </span>
        <span className="text-sm" style={{ color: "#C9D4E2" }}>
          We&apos;re signing our first specialists now: inspectors, transporters,
          mechanics, body shops, restorers, detailers, storage and photographers.
        </span>
        <Link
          href="/services/apply"
          className="inline-flex items-center gap-1 text-sm font-bold transition-colors hover:text-white"
          style={{ color: "#8FBBDF" }}
        >
          Get listed free <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
