"use client";

import { TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { marketMovers, type MarketMover } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

function TrendIcon({ trend }: { trend: MarketMover["trend"] }) {
  switch (trend) {
    case "up":
      return <TrendingUp className="w-5 h-5 text-green" />;
    case "down":
      return <TrendingDown className="w-5 h-5 text-accent" />;
    case "flat":
      return <Minus className="w-5 h-5 text-text-tertiary" />;
  }
}

function TrendBadge({ trend, percentage }: { trend: MarketMover["trend"]; percentage: number }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold rounded-md",
        trend === "up" && "bg-green-light text-green",
        trend === "down" && "bg-accent-light text-accent",
        trend === "flat" && "bg-surface text-text-secondary"
      )}
    >
      {trend === "up" ? "+" : trend === "down" ? "-" : ""}
      {percentage}%
    </span>
  );
}

export function MarketMovers() {
  return (
    <section className="py-14 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Monday Market Movers
            </h2>
            <p className="text-text-secondary mt-1">
              This week&apos;s collector car market at a glance — by Chris Peterson
            </p>
          </div>
          <Link
            href="/research"
            className="hidden sm:flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          >
            Full Research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {marketMovers.map((mover, i) => (
            <motion.div
              key={mover.segment}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-white rounded-xl border border-border p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <TrendIcon trend={mover.trend} />
                  <h3 className="font-semibold text-foreground text-sm">
                    {mover.segment}
                  </h3>
                </div>
                <TrendBadge trend={mover.trend} percentage={mover.percentage} />
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {mover.insight}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
          >
            Full Market Research
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
