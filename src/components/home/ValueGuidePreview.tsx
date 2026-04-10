"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, DollarSign, TrendingUp, TrendingDown } from "lucide-react";
import { motion } from "framer-motion";

const popularSearches = [
  { label: "Porsche 911 (1970–1989)",         avgPrice: "$68,400", trend: "+2.1%" },
  { label: "Ford Mustang (1965–1970)",         avgPrice: "$42,800", trend: "-1.4%" },
  { label: "BMW M3 E30 (1986–1991)",           avgPrice: "$79,200", trend: "+1.8%" },
  { label: "Datsun 240Z (1970–1973)",          avgPrice: "$44,600", trend: "+5.6%" },
  { label: "Chevrolet Corvette C2 (1963–67)",  avgPrice: "$88,500", trend: "-0.8%" },
];

export function ValueGuidePreview() {
  return (
    <section className="py-14 sm:py-20" style={{ background: "#f5f4f0" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 rounded-full" style={{ background: "#6ab04c" }} />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#6ab04c" }}
              >
                Value Guide
              </span>
            </div>

            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full mb-4"
              style={{ background: "rgba(106,176,76,0.15)", color: "#6ab04c" }}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              Powered by Real Auction Data
            </div>

            <h2 className="text-2xl sm:text-3xl font-black mb-3" style={{ color: "#1a1a18" }}>
              Know what your car is worth
            </h2>
            <p className="leading-relaxed text-sm sm:text-base" style={{ color: "#6b6b5e" }}>
              Our Value Guide aggregates publicly available sale results from
              across the collector-car market — online auction results, classified
              listings, concours price guides, and Chris&apos;s own 25 years of
              transaction notes — to give you a pricing verdict backed by actual
              comps instead of asking prices.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-7">
              <Link
                href="/value-guide"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-white text-sm font-bold rounded-lg transition-opacity hover:opacity-80"
                style={{ background: "#E8722A" }}
              >
                Open Value Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold rounded-lg transition-colors hover:bg-stone-200"
                style={{
                  border: "1.5px solid rgba(0,0,0,0.14)",
                  color: "#6b6b5e",
                }}
              >
                Market Research
              </Link>
            </div>
          </motion.div>

          {/* Right: popular valuations table */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(0,0,0,0.08)" }}
          >
            {/* Table header */}
            <div
              className="px-5 py-3.5 flex items-center justify-between"
              style={{
                background: "#ffffff",
                borderBottom: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <h3 className="text-sm font-bold" style={{ color: "#1a1a18" }}>Popular Valuations</h3>
              <span
                className="text-xs font-semibold"
                style={{ color: "#9a9a8a" }}
              >
                Avg sale price
              </span>
            </div>

            {/* Rows */}
            <div style={{ background: "#ffffff" }}>
              {popularSearches.map((item, i) => {
                const isUp = item.trend.startsWith("+");
                const isDown = item.trend.startsWith("-");
                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between px-5 py-3.5"
                    style={{
                      borderBottom:
                        i < popularSearches.length - 1
                          ? "1px solid rgba(0,0,0,0.06)"
                          : undefined,
                    }}
                  >
                    <span className="text-sm font-medium" style={{ color: "#3a3a30" }}>
                      {item.label}
                    </span>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <span className="text-sm font-bold flex items-center gap-0.5" style={{ color: "#1a1a18" }}>
                        <DollarSign className="w-3 h-3" style={{ color: "#9a9a8a" }} />
                        {item.avgPrice.replace("$", "")}
                      </span>
                      <span
                        className="text-xs font-bold flex items-center gap-0.5"
                        style={{
                          color: isUp ? "#6ab04c" : isDown ? "#E8722A" : "#9a9a8a",
                        }}
                      >
                        {isUp ? <TrendingUp className="w-3 h-3" /> : isDown ? <TrendingDown className="w-3 h-3" /> : null}
                        {item.trend}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div
              className="px-5 py-3"
              style={{
                background: "#faf9f7",
                borderTop: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <Link
                href="/value-guide"
                className="text-xs font-bold flex items-center gap-1 transition-opacity hover:opacity-70"
                style={{ color: "#E8722A" }}
              >
                Search any vehicle <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
