import type { Metadata } from "next";
import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  ArrowRight,
  BarChart3,
  Calendar,
  Clock,
  Flame,
  Eye,
  BookOpen,
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Market Research — Collector Car Trends & Analysis | Fully Sorted",
  description:
    "Weekly collector car market analysis by Chris Peterson. Auction results, price trends, segment breakdowns, and expert commentary based on 25 years in the industry.",
};

export const revalidate = 300;

/* ---------- Types ---------- */
interface MarketSegment {
  segment: string;
  segment_key?: string;
  avg_price?: number;
  avgPrice?: number;
  median_price?: number;
  medianPrice?: number;
  high_price?: number;
  highPrice?: number;
  low_price?: number;
  lowPrice?: number;
  sale_count?: number;
  saleCount?: number;
  trend_percent?: number;
  trendPercent?: number;
  trend_direction?: string;
  trendDirection?: string;
  category?: string;
}

interface DealAlert {
  id: number;
  title: string;
  source_url: string;
  year?: number;
  make?: string;
  model?: string;
  image_url?: string;
  source_site?: string;
  created_at: string;
}

interface TrendingListing {
  id: number;
  slug: string;
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  hero_photo?: string;
  category?: string;
  views: number;
  city?: string;
  state?: string;
}

/* ---------- Data fetching ---------- */
async function getMarketData(): Promise<{ segments: MarketSegment[]; source: string }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.fullysorted.com";
    const res = await fetch(`${baseUrl}/api/market?limit=25`, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    return { segments: [], source: "error" };
  }
}

async function getTrending(): Promise<{ trending: TrendingListing[]; hot: DealAlert[] }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.fullysorted.com";
    const res = await fetch(`${baseUrl}/api/trending`, { next: { revalidate: 300 } });
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    return { trending: [], hot: [] };
  }
}

/* ---------- Helpers ---------- */
function normalize(seg: MarketSegment) {
  return {
    segment: seg.segment,
    segmentKey: seg.segment_key || seg.segment?.toLowerCase().replace(/\s+/g, "_"),
    avgPrice: seg.avg_price ?? seg.avgPrice ?? 0,
    medianPrice: seg.median_price ?? seg.medianPrice,
    highPrice: seg.high_price ?? seg.highPrice,
    lowPrice: seg.low_price ?? seg.lowPrice,
    saleCount: seg.sale_count ?? seg.saleCount ?? 0,
    trendPercent: Math.abs(seg.trend_percent ?? seg.trendPercent ?? 0),
    trendDirection: (seg.trend_direction ?? seg.trendDirection ?? "flat") as "up" | "down" | "flat",
    category: seg.category ?? "Other",
  };
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

// Per-category accent colors
const categoryColors: Record<string, string> = {
  "Weekly Report": "#E8722A",
  "What Would Chris Buy?": "#29ABE2",
  "Sorted or Not": "#6ab04c",
  "The Long Game": "#8b5cf6",
  "San Diego Car Culture": "#E8722A",
};

function TrendBadge({ trend, pct }: { trend: "up" | "down" | "flat"; pct: number }) {
  const color = trend === "up" ? "#6ab04c" : trend === "down" ? "#E8722A" : "#6b7280";
  return (
    <span
      className="inline-flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-lg"
      style={{ color, background: `${color}18` }}
    >
      {trend === "up" && <TrendingUp className="w-3 h-3" />}
      {trend === "down" && <TrendingDown className="w-3 h-3" />}
      {trend === "flat" && <Minus className="w-3 h-3" />}
      {trend === "up" ? "+" : trend === "down" ? "-" : "±"}{pct.toFixed(1)}%
    </span>
  );
}

/* ---------- Page ---------- */
export default async function ResearchPage() {
  const [marketData, trendingData] = await Promise.all([getMarketData(), getTrending()]);
  const segments = marketData.segments.map(normalize);
  const topMovers = [...segments]
    .filter((s) => s.trendDirection !== "flat" && s.trendPercent > 0)
    .sort((a, b) => b.trendPercent - a.trendPercent)
    .slice(0, 5);
  const categories = [...new Set(segments.map((s) => s.category))].filter(Boolean);

  const [featuredArticle, ...restArticles] = articles;

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">

      {/* ─── Dark Header ─────────────────────────────────────── */}
      <div className="relative overflow-hidden" style={{ background: "#0f0e08" }}>
        <div className="absolute inset-0 speed-lines opacity-30" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, #E8722A 35%, #6ab04c 65%, transparent)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-px" style={{ background: "#E8722A" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#E8722A" }}>
              Research Desk
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Market Research
          </h1>
          <p className="text-base sm:text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            Weekly analysis of the collector car market — auction results, price trends, and
            where the smart money is going. By Chris Peterson, 25 years in the industry.
          </p>

          {/* Quick stats row */}
          <div className="flex flex-wrap gap-8 mt-8 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            {[
              { value: segments.length > 0 ? `${segments.length}` : "25+", label: "Segments Tracked" },
              { value: trendingData.hot.length > 0 ? `${trendingData.hot.length}` : "Live", label: "BaT Listings" },
              { value: "2×", label: "Daily Updates" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ─── Main column ──────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-10">

            {/* Featured article */}
            {featuredArticle && (
              <Link
                href={`/research/${featuredArticle.slug}`}
                className="block group"
              >
                <div
                  className="rounded-2xl overflow-hidden transition-all hover:shadow-xl"
                  style={{ background: "#111008", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="p-7 sm:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded-full"
                        style={{
                          background: `${categoryColors[featuredArticle.category] ?? "#E8722A"}22`,
                          color: categoryColors[featuredArticle.category] ?? "#E8722A",
                        }}
                      >
                        {featuredArticle.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                        <Calendar className="w-3 h-3" /> {featuredArticle.date}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                        <Clock className="w-3 h-3" /> {featuredArticle.readTime} read
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-orange-400 transition-colors mb-3">
                      {featuredArticle.title}
                    </h2>
                    <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                      {featuredArticle.excerpt}
                    </p>
                    <div
                      className="flex items-center gap-1.5 mt-5 text-sm font-bold transition-colors"
                      style={{ color: "#E8722A" }}
                    >
                      Read the full analysis <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            )}

            {/* Article grid */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-6 h-px" style={{ background: "#E8722A" }} />
                <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                  Latest Analysis
                </h2>
              </div>
              <div className="space-y-4">
                {restArticles.map((article) => {
                  const color = categoryColors[article.category] ?? "#E8722A";
                  return (
                    <Link
                      key={article.slug}
                      href={`/research/${article.slug}`}
                      className="flex gap-4 p-5 bg-white rounded-2xl hover:shadow-md transition-all group"
                      style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                    >
                      {/* Color accent bar */}
                      <div
                        className="w-1 rounded-full shrink-0"
                        style={{ background: color, minHeight: "100%" }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span
                            className="text-xs font-bold tracking-wider uppercase"
                            style={{ color }}
                          >
                            {article.category}
                          </span>
                          <span className="text-xs text-stone-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {article.date}
                          </span>
                          <span className="text-xs text-stone-400">· {article.readTime} read</span>
                        </div>
                        <h3 className="font-bold text-stone-800 group-hover:text-orange-600 transition-colors leading-snug">
                          {article.title}
                        </h3>
                        <p className="text-sm text-stone-500 mt-1 leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-orange-500 transition-colors shrink-0 mt-1" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* BaT live listings */}
            {trendingData.hot.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-6 h-px" style={{ background: "#E8722A" }} />
                  <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2">
                    <Flame className="w-4 h-4" style={{ color: "#E8722A" }} />
                    Fresh on Bring a Trailer
                  </h2>
                </div>
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <div className="divide-y divide-stone-100">
                    {trendingData.hot.slice(0, 10).map((deal) => (
                      <a
                        key={deal.id}
                        href={deal.source_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 px-5 py-4 hover:bg-stone-50 transition-colors group"
                      >
                        {deal.image_url && (
                          <div className="w-16 h-12 rounded-xl overflow-hidden shrink-0 bg-stone-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={deal.image_url} alt={deal.title} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-stone-800 group-hover:text-orange-600 transition-colors truncate">
                            {deal.title}
                          </p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-xs text-stone-400">{timeAgo(deal.created_at)}</span>
                            <span
                              className="text-xs px-2 py-0.5 rounded-full font-bold"
                              style={{ background: "rgba(232,114,42,0.1)", color: "#E8722A" }}
                            >
                              BaT
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-orange-500 transition-colors shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Most viewed on Fully Sorted */}
            {trendingData.trending.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-6 h-px" style={{ background: "#E8722A" }} />
                  <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest flex items-center gap-2">
                    <Eye className="w-4 h-4" style={{ color: "#E8722A" }} />
                    Most Viewed on Fully Sorted
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {trendingData.trending.slice(0, 6).map((listing) => (
                    <Link
                      key={listing.id}
                      href={`/listings/${listing.slug}`}
                      className="bg-white rounded-2xl p-4 hover:shadow-md transition-all group"
                      style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                    >
                      {listing.hero_photo && (
                        <div className="aspect-[16/9] rounded-xl overflow-hidden mb-3 bg-stone-100">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={listing.hero_photo}
                            alt={`${listing.year} ${listing.make} ${listing.model}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <p className="text-sm font-bold text-stone-800 group-hover:text-orange-600 transition-colors">
                        {listing.year} {listing.make} {listing.model}
                        {listing.trim ? ` ${listing.trim}` : ""}
                      </p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="price-display text-sm font-bold" style={{ color: "#E8722A" }}>
                          {formatPrice(listing.price)}
                        </span>
                        <span className="text-xs text-stone-400 flex items-center gap-1">
                          <Eye className="w-3 h-3" /> {listing.views.toLocaleString()}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ─── Sidebar ──────────────────────────────────────── */}
          <div className="space-y-6">

            {/* Newsletter */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "#0f0e08", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-4 h-px" style={{ background: "#E8722A" }} />
                <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E8722A" }}>
                  Free Newsletter
                </p>
              </div>
              <h3 className="font-bold text-white mb-2">Monday Market Movers</h3>
              <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>
                Weekly auction results, what moved, and where smart money is going.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full h-10 px-3 text-sm rounded-xl focus:outline-none"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                  }}
                />
                <button
                  type="submit"
                  className="w-full h-10 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
                  style={{ background: "#E8722A" }}
                >
                  Subscribe — Free
                </button>
              </form>
            </div>

            {/* Top Movers */}
            {topMovers.length > 0 && (
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div className="px-5 py-4" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="flex items-center gap-2 mb-0.5">
                    <BarChart3 className="w-4 h-4" style={{ color: "#E8722A" }} />
                    <h3 className="font-bold text-stone-800 text-sm">Biggest Movers</h3>
                  </div>
                  <p className="text-xs text-stone-400">12-month trend</p>
                </div>
                <div className="divide-y divide-stone-100">
                  {topMovers.map((m) => (
                    <div key={m.segmentKey} className="px-5 py-3.5">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-sm font-semibold text-stone-800 leading-tight">
                          {m.segment}
                        </span>
                        <TrendBadge trend={m.trendDirection} pct={m.trendPercent} />
                      </div>
                      <p className="text-xs text-stone-400 mt-0.5">
                        Avg {formatPrice(m.avgPrice)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="px-5 py-3" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", background: "#fafafa" }}>
                  <a
                    href="#segments"
                    className="text-xs font-bold flex items-center gap-1 transition-colors hover:opacity-75"
                    style={{ color: "#E8722A" }}
                  >
                    View all segments <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}

            {/* Value Guide CTA */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "rgba(232,114,42,0.06)", border: "1px solid rgba(232,114,42,0.15)" }}
            >
              <p className="font-bold text-stone-800 text-sm mb-1">Check Your Car&apos;s Value</p>
              <p className="text-xs text-stone-500 mb-3">
                Get a pricing verdict backed by real auction comps and market data.
              </p>
              <Link
                href="/value-guide"
                className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors hover:opacity-75"
                style={{ color: "#E8722A" }}
              >
                Open Value Guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Data Sources */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <p className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-2">
                Data Sources
              </p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Bring a Trailer · RM Sotheby&apos;s · Bonhams · Gooding & Co ·
                Mecum · Barrett-Jackson · Classic.com · Hemmings
              </p>
              <p className="text-xs text-stone-300 mt-2">Updated twice daily via automated scraping.</p>
            </div>
          </div>
        </div>

        {/* ─── Full Segment Table ───────────────────────────── */}
        {segments.length > 0 && (
          <section id="segments" className="mt-16">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px" style={{ background: "#E8722A" }} />
              <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                Market Segments
              </h2>
            </div>
            <div className="flex items-end justify-between mb-6">
              <div>
                <p className="text-xl sm:text-2xl font-bold text-stone-800">
                  Price & Trend Overview
                </p>
                <p className="text-sm text-stone-400 mt-1">
                  {segments.length} segments tracked ·{" "}
                  {marketData.source === "fallback"
                    ? "Curated historical data"
                    : marketData.source === "live_aggregate"
                    ? "Live aggregated from auction results"
                    : "From market database"}{" "}
                  · Updated twice daily
                </p>
              </div>
            </div>

            {/* Category-grouped tables */}
            {categories.length > 0 ? (
              categories.map((cat) => {
                const catSegs = segments.filter((s) => s.category === cat);
                if (catSegs.length === 0) return null;
                return (
                  <div key={cat} className="mb-8">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-1 h-4 rounded-full" style={{ background: "#E8722A" }} />
                      <h3 className="text-sm font-bold text-stone-500 uppercase tracking-widest">
                        {cat}
                      </h3>
                    </div>
                    <div
                      className="rounded-2xl overflow-hidden overflow-x-auto"
                      style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
                    >
                      <table className="w-full text-sm">
                        <thead>
                          <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#f9f8f6" }}>
                            <th className="text-left px-5 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider">
                              Segment
                            </th>
                            <th className="text-right px-4 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider">
                              Avg Price
                            </th>
                            <th className="text-right px-4 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider hidden sm:table-cell">
                              Median
                            </th>
                            <th className="text-right px-4 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider hidden md:table-cell">
                              High
                            </th>
                            <th className="text-right px-4 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider hidden md:table-cell">
                              Low
                            </th>
                            <th className="text-right px-4 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider hidden sm:table-cell">
                              Sales
                            </th>
                            <th className="text-right px-5 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider">
                              Trend
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {catSegs.map((seg, i) => (
                            <tr
                              key={seg.segmentKey}
                              className={cn(
                                "hover:bg-stone-50 transition-colors",
                                i > 0 && "border-t border-stone-100"
                              )}
                            >
                              <td className="px-5 py-3.5 font-semibold text-stone-800">
                                {seg.segment}
                              </td>
                              <td className="px-4 py-3.5 text-right price-display text-stone-700">
                                {formatPrice(seg.avgPrice)}
                              </td>
                              <td className="px-4 py-3.5 text-right text-stone-400 hidden sm:table-cell">
                                {seg.medianPrice ? formatPrice(seg.medianPrice) : "—"}
                              </td>
                              <td className="px-4 py-3.5 text-right text-stone-400 hidden md:table-cell">
                                {seg.highPrice ? formatPrice(seg.highPrice) : "—"}
                              </td>
                              <td className="px-4 py-3.5 text-right text-stone-400 hidden md:table-cell">
                                {seg.lowPrice ? formatPrice(seg.lowPrice) : "—"}
                              </td>
                              <td className="px-4 py-3.5 text-right text-stone-400 hidden sm:table-cell">
                                {seg.saleCount > 0 ? seg.saleCount.toLocaleString() : "—"}
                              </td>
                              <td className="px-5 py-3.5 text-right">
                                <TrendBadge trend={seg.trendDirection} pct={seg.trendPercent} />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                );
              })
            ) : (
              /* Flat table fallback */
              <div className="rounded-2xl overflow-hidden overflow-x-auto" style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}>
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#f9f8f6" }}>
                      <th className="text-left px-5 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider">Segment</th>
                      <th className="text-right px-5 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider">Avg Price</th>
                      <th className="text-right px-5 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider hidden sm:table-cell">Sales</th>
                      <th className="text-right px-5 py-3 font-bold text-stone-400 text-xs uppercase tracking-wider">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {segments.map((seg, i) => (
                      <tr key={seg.segmentKey} className={cn("hover:bg-stone-50 transition-colors", i > 0 && "border-t border-stone-100")}>
                        <td className="px-5 py-3.5 font-semibold text-stone-800">{seg.segment}</td>
                        <td className="px-5 py-3.5 text-right price-display text-stone-700">{formatPrice(seg.avgPrice)}</td>
                        <td className="px-5 py-3.5 text-right text-stone-400 hidden sm:table-cell">
                          {seg.saleCount > 0 ? seg.saleCount.toLocaleString() : "—"}
                        </td>
                        <td className="px-5 py-3.5 text-right">
                          <TrendBadge trend={seg.trendDirection} pct={seg.trendPercent} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
