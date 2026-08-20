"use client";

import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { MarketMover } from "@/lib/sample-data";

interface Segment {
  segment: string;
  avg_price?: number | null;
  median_price?: number | null;
  sale_count?: number;
  mean_skewed?: boolean;
  has_midpoint?: boolean;
  trend_percent?: number | null;
  trend_direction?: string | null;
}

/**
 * A segment only earns a trend badge when there is a second price snapshot to
 * compare against. With a single snapshot every segment returns a non-null
 * zero, which used to render "0%" on all six cards and read as broken. Same
 * guard as /research — see the note there.
 */
const MIN_TREND = 0.05;

/**
 * Thin segments are noise on a homepage — and worse, they were carrying a
 * headline figure. This used to be 3, and it printed the segment MEAN: the
 * Air-Cooled Porsche 911 card read "avg $171,583" against a $95,000 median,
 * a mean the Value Guide's own rule would have suppressed. Six is the floor
 * for publishing a midpoint anywhere on this site.
 */
const MIN_SALES = 6;

function TrendBadge({ trend, percentage }: { trend: MarketMover["trend"]; percentage: number }) {
  const styles = {
    up:   { bg: "rgba(106,176,76,0.18)", color: "#4b8b2e" },
    down: { bg: "rgba(220,38,38,0.12)",  color: "#DC2626" },
    flat: { bg: "rgba(0,0,0,0.06)",      color: "#9a9a8a" },
  }[trend];

  const Icon = trend === "down" ? TrendingDown : TrendingUp;

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-md shrink-0"
      style={{ background: styles.bg, color: styles.color }}
    >
      <Icon className="w-3 h-3" aria-hidden />
      {trend === "up" ? "+" : "-"}
      {percentage}%
    </span>
  );
}

export function MarketMovers() {
  // Previously rendered a hardcoded array of segments, percentages and
  // "insights" attributed by name to the founder. Now driven by the comp
  // database; if there is nothing worth showing, the section does not render.
  const [movers, setMovers] = useState<MarketMover[] | null>(null);
  const [asOf, setAsOf] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    fetch("/api/market?limit=24")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!live) return;
        const segs: Segment[] = d?.segments ?? [];
        setAsOf(typeof d?.as_of === "string" ? d.as_of : null);
        setMovers(
          segs
            .filter((s) => s.segment && (s.sale_count ?? 0) >= MIN_SALES)
            // Deepest data first — an alphabetical slice is not a story.
            .sort((a, b) => (b.sale_count ?? 0) - (a.sale_count ?? 0))
            .slice(0, 6)
            .map((s) => {
              const raw = Number(s.trend_percent ?? 0);
              const hasTrend = Number.isFinite(raw) && Math.abs(raw) >= MIN_TREND;
              return {
                segment: s.segment,
                trend: hasTrend ? (raw > 0 ? "up" : "down") : "flat",
                percentage: hasTrend ? Math.abs(Math.round(raw * 10) / 10) : 0,
                insight: `${s.sale_count} recorded ${s.sale_count === 1 ? "sale" : "sales"}${
                  s.median_price ? ` · median $${Number(s.median_price).toLocaleString()}` : ""
                }`,
              };
            })
        );
      })
      .catch(() => live && setMovers([]));
    return () => { live = false; };
  }, []);

  // Nothing solid to show yet — stay off the homepage rather than fill it.
  if (!movers || movers.length === 0) return null;

  return (
    <section className="py-14 sm:py-20" style={{ background: "#ffffff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 rounded-full" style={{ background: "#1E6091" }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#1E6091" }}
              >
                Market Data
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight" style={{ color: "#1a1a18" }}>
              What the segments are doing
            </h2>
            <p className="mt-1 text-sm" style={{ color: "#6b6b5e" }}>
              Median sale prices by segment, computed from the sales recorded in our comp database
              {asOf ? ` · data through ${asOf}` : ""}
            </p>
          </div>
          <Link
            href="/research"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70 shrink-0"
            style={{ color: "#1E6091" }}
          >
            Market Analysis
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>

        {/* Cards grid */}
        {/* Raising the floor to six sales legitimately leaves fewer cards. Lay
            four out as a 2x2 rather than 3 + a lonely orphan. */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${movers.length >= 5 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {movers.map((mover, i) => (
            <motion.div
              key={mover.segment}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(0,0,0,0.08)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)"
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-semibold text-sm" style={{ color: "#1a1a18" }}>{mover.segment}</h3>
                {/* No badge until there are two snapshots to compare. */}
                {mover.trend !== "flat" && (
                  <TrendBadge trend={mover.trend} percentage={mover.percentage} />
                )}
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#6b6b5e" }}>
                {mover.insight}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="sm:hidden mt-6 text-center">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: "#1E6091" }}
          >
            Full Market Analysis
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
        </div>

        {/* Disclaimer. Must stay truthful about what is behind these numbers:
            the comp database is still being built and is not yet a licensed
            feed. Tighten this wording the day it is. */}
        <p className="mt-8 text-xs leading-relaxed" style={{ color: "#9a9a8a" }}>
          Our comp database is early and still being built out, so these figures are indicative
          rather than a complete picture of the market. Nothing here is financial or investment
          advice, and past results do not indicate future values.
        </p>
      </div>
    </section>
  );
}
