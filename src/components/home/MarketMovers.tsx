"use client";

import { TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { marketMovers, type MarketMover } from "@/lib/sample-data";

function TrendBadge({ trend, percentage }: { trend: MarketMover["trend"]; percentage: number }) {
  const styles = {
    up:   { bg: "rgba(106,176,76,0.18)",  color: "#6ab04c" },
    down: { bg: "rgba(232,114,42,0.18)",  color: "#E8722A" },
    flat: { bg: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" },
  }[trend];

  const Icon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Minus;

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold rounded-md"
      style={{ background: styles.bg, color: styles.color }}
    >
      <Icon className="w-3 h-3" />
      {trend === "up" ? "+" : trend === "down" ? "-" : ""}
      {percentage}%
    </span>
  );
}

export function MarketMovers() {
  return (
    <section className="py-14 sm:py-20" style={{ background: "#0f0e08" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 rounded-full" style={{ background: "#E8722A" }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#E8722A" }}
              >
                Weekly
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Monday Market Movers
            </h2>
            <p className="mt-1 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              This week&apos;s collector car market at a glance — by Chris Peterson
            </p>
          </div>
          <Link
            href="/research"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-70"
            style={{ color: "#E8722A" }}
          >
            Full Research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketMovers.map((mover, i) => (
            <motion.div
              key={mover.segment}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl p-5 transition-colors"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-white text-sm">{mover.segment}</h3>
                <TrendBadge trend={mover.trend} percentage={mover.percentage} />
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
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
            style={{ color: "#E8722A" }}
          >
            Full Market Research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
