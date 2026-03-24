import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
  BarChart3,
  Calendar,
  BookOpen,
} from "lucide-react";
import { marketMovers } from "@/lib/sample-data";
import { cn, formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Market Research — Collector Car Trends & Analysis",
  description:
    "Weekly collector car market analysis by Chris Peterson. Auction results, price trends, segment breakdowns, and expert commentary based on 25 years in the industry.",
};

/* ---------- mock research articles ---------- */
const articles = [
  {
    slug: "monday-market-movers-march-24",
    title: "Monday Market Movers — March 24, 2026",
    excerpt:
      "Air-cooled Porsches continue to soften, E30 M3s hold steady, and the JDM market posts another strong week. Here's what moved and why.",
    date: "Mar 24, 2026",
    category: "Weekly Report",
    readTime: "5 min",
  },
  {
    slug: "what-would-chris-buy-march",
    title: "What Would Chris Buy? — Best European Sports Cars Under $50k",
    excerpt:
      "If I had $50k and wanted a European sports car I could actually drive, these are the five I'd be shopping. Not one of them is a Porsche — and that's the point.",
    date: "Mar 20, 2026",
    category: "What Would Chris Buy?",
    readTime: "8 min",
  },
  {
    slug: "sorted-or-not-e-type",
    title: "Sorted or Not: This $89k Jaguar E-Type Series 1",
    excerpt:
      "A reader sent me a Series 1 E-Type listed at $89k with a color change and an automatic transmission. Here's whether it's sorted or not.",
    date: "Mar 17, 2026",
    category: "Sorted or Not",
    readTime: "4 min",
  },
  {
    slug: "jdm-market-2026",
    title: "The JDM Market in 2026: Where the Money Is Going",
    excerpt:
      "Supra, NSX, GT-R — the icons are priced in. But the next wave of JDM collectibles is already here, and most people aren't paying attention yet.",
    date: "Mar 12, 2026",
    category: "The Long Game",
    readTime: "10 min",
  },
  {
    slug: "san-diego-spring-events",
    title: "San Diego Spring Car Events: Your Complete 2026 Guide",
    excerpt:
      "From Cruisin' Grand opening night in April to La Jolla Concours, here's every event worth your Saturday this spring.",
    date: "Mar 8, 2026",
    category: "San Diego Car Culture",
    readTime: "6 min",
  },
];

/* ---------- segment data ---------- */
const segmentData = [
  { name: "Air-Cooled Porsche 911", avgPrice: 68400, volume: 342, trend: "down" as const, pct: 3.2 },
  { name: "Ford Mustang (1st Gen)", avgPrice: 42800, volume: 518, trend: "down" as const, pct: 2.1 },
  { name: "BMW M3 E30", avgPrice: 79200, volume: 86, trend: "up" as const, pct: 1.8 },
  { name: "Datsun 240Z / 260Z / 280Z", avgPrice: 44600, volume: 124, trend: "up" as const, pct: 5.6 },
  { name: "Chevrolet Corvette (C2)", avgPrice: 88500, volume: 198, trend: "flat" as const, pct: 0.8 },
  { name: "Toyota Supra (A80)", avgPrice: 112000, volume: 47, trend: "up" as const, pct: 4.1 },
  { name: "Ferrari 308 / 328", avgPrice: 94800, volume: 72, trend: "down" as const, pct: 1.5 },
  { name: "Mercedes-Benz W113 Pagoda", avgPrice: 118000, volume: 58, trend: "flat" as const, pct: 0.4 },
];

function TrendIndicator({ trend, pct }: { trend: "up" | "down" | "flat"; pct: number }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 text-xs font-semibold",
        trend === "up" && "text-green",
        trend === "down" && "text-accent",
        trend === "flat" && "text-text-secondary"
      )}
    >
      {trend === "up" && <TrendingUp className="w-3.5 h-3.5" />}
      {trend === "down" && <TrendingDown className="w-3.5 h-3.5" />}
      {trend === "flat" && <Minus className="w-3.5 h-3.5" />}
      {trend === "up" ? "+" : trend === "down" ? "-" : ""}
      {pct}%
    </span>
  );
}

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-light text-accent text-xs font-semibold rounded-full mb-4">
          <BarChart3 className="w-3.5 h-3.5" />
          Updated Weekly
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
          Market Research
        </h1>
        <p className="text-text-secondary mt-2 text-lg max-w-2xl">
          Weekly analysis of the collector car market — auction results, price
          trends, and where the smart money is going. By Chris Peterson.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Column: Articles */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-accent" />
            Latest Analysis
          </h2>
          <div className="space-y-4">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/research/${article.slug}`}
                className="block bg-white border border-border rounded-xl p-5 hover:shadow-md hover:border-border-medium transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-accent bg-accent-light px-2 py-0.5 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-text-tertiary flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="text-xs text-text-tertiary">
                    &middot; {article.readTime} read
                  </span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1.5 leading-relaxed">
                  {article.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Market Movers Quick View */}
          <div className="bg-white border border-border rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-border">
              <h3 className="font-semibold text-foreground text-sm">
                This Week&apos;s Movers
              </h3>
            </div>
            <div className="divide-y divide-border">
              {marketMovers.slice(0, 4).map((m) => (
                <div key={m.segment} className="px-5 py-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {m.segment}
                    </span>
                    <TrendIndicator trend={m.trend} pct={m.percentage} />
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-border bg-surface/30">
              <Link
                href="#segments"
                className="text-xs font-semibold text-accent flex items-center gap-1"
              >
                View all segments <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Value Guide CTA */}
          <div className="bg-surface border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground text-sm mb-2">
              Check Your Car&apos;s Value
            </h3>
            <p className="text-xs text-text-secondary mb-3">
              Get a pricing verdict backed by real comps and my analysis.
            </p>
            <Link
              href="/value-guide"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-hover transition-colors"
            >
              Open Value Guide <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Newsletter */}
          <div className="bg-white border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground text-sm mb-1">
              Monday Market Movers
            </h3>
            <p className="text-xs text-text-secondary mb-3">
              Get my weekly market analysis delivered to your inbox every Monday.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full h-10 px-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              />
              <button
                type="submit"
                className="w-full h-10 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors"
              >
                Subscribe — Free
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Segment Breakdown Table */}
      <section id="segments" className="mt-14">
        <h2 className="text-xl font-bold text-foreground mb-6">
          Market Segments — Price & Trend Overview
        </h2>
        <div className="bg-white border border-border rounded-xl overflow-hidden overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface/50">
                <th className="text-left px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">
                  Segment
                </th>
                <th className="text-right px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">
                  Avg. Price
                </th>
                <th className="text-right px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">
                  Sales (12 Mo)
                </th>
                <th className="text-right px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">
                  12-Mo Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {segmentData.map((seg) => (
                <tr key={seg.name} className="hover:bg-surface/30 transition-colors">
                  <td className="px-5 py-3.5 font-medium text-foreground">
                    {seg.name}
                  </td>
                  <td className="px-5 py-3.5 text-right price-display">
                    {formatPrice(seg.avgPrice)}
                  </td>
                  <td className="px-5 py-3.5 text-right text-text-secondary">
                    {seg.volume}
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <TrendIndicator trend={seg.trend} pct={seg.pct} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-text-tertiary mt-3">
          Data sources: Bring a Trailer, Classic.com, RM Sotheby&apos;s,
          Bonhams, Gooding &amp; Company. Updated weekly.
        </p>
      </section>
    </div>
  );
}
