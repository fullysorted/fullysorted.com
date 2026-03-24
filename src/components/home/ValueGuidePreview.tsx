"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, TrendingUp, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

const popularSearches = [
  { label: "Porsche 911 (1970–1989)", slug: "porsche-911-1970-1989", avgPrice: "$68,400", trend: "+2.1%" },
  { label: "Ford Mustang (1965–1970)", slug: "ford-mustang-1965-1970", avgPrice: "$42,800", trend: "-1.4%" },
  { label: "BMW M3 E30 (1986–1991)", slug: "bmw-m3-e30", avgPrice: "$79,200", trend: "+1.8%" },
  { label: "Datsun 240Z (1970–1973)", slug: "datsun-240z", avgPrice: "$44,600", trend: "+5.6%" },
  { label: "Chevrolet Corvette C2 (1963–1967)", slug: "corvette-c2", avgPrice: "$88,500", trend: "-0.8%" },
];

export function ValueGuidePreview() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-light text-accent text-xs font-semibold rounded-full mb-4">
              <BarChart3 className="w-3.5 h-3.5" />
              Powered by Real Auction Data
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Know what your car is worth
            </h2>
            <p className="text-text-secondary mt-3 leading-relaxed">
              Our Value Guide pulls real results from Bring a Trailer,
              Classic.com, and private sales — not guesswork. Enter any year,
              make, and model and get a pricing verdict backed by actual comps,
              plus my take on where the market is heading.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link
                href="/value-guide"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                Open Value Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-foreground text-sm font-semibold rounded-lg hover:bg-surface transition-colors"
              >
                Market Research
              </Link>
            </div>
          </motion.div>

          {/* Right: Popular Searches */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl border border-border overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-border bg-surface/50">
              <h3 className="font-semibold text-foreground text-sm">
                Popular Valuations
              </h3>
            </div>
            <div className="divide-y divide-border">
              {popularSearches.map((item) => (
                <Link
                  key={item.slug}
                  href={`/value-guide/${item.slug}`}
                  className="flex items-center justify-between px-5 py-3.5 hover:bg-surface/50 transition-colors group"
                >
                  <span className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-3 text-right">
                    <div className="flex items-center gap-1 text-xs font-medium text-text-secondary">
                      <DollarSign className="w-3 h-3" />
                      {item.avgPrice}
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        item.trend.startsWith("+")
                          ? "text-green"
                          : item.trend.startsWith("-")
                          ? "text-accent"
                          : "text-text-secondary"
                      }`}
                    >
                      {item.trend}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-border bg-surface/30">
              <Link
                href="/value-guide"
                className="text-xs font-semibold text-accent hover:text-accent-hover transition-colors flex items-center gap-1"
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
