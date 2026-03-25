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
  Flame,
  Clock,
  Eye,
} from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Market Research — Collector Car Trends & Analysis",
  description:
    "Weekly collector car market analysis by Chris Peterson. Auction results, price trends, segment breakdowns, and expert commentary based on 25 years in the industry.",
};

export const revalidate = 300; // 5-minute cache

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
    const res = await fetch(`${baseUrl}/api/market?limit=25`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    return { segments: [], source: "error" };
  }
}

async function getTrending(): Promise<{ trending: TrendingListing[]; hot: DealAlert[] }> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.fullysorted.com";
    const res = await fetch(`${baseUrl}/api/trending`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error("Failed");
    return res.json();
  } catch {
    return { trending: [], hot: [] };
  }
}

/* ---------- Static editorial content ---------- */
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
      {trend === "up" ? "+" : trend === "down" ? "-" : "±"}
      {pct.toFixed(1)}%
    </span>
  );
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hours = Math.floor(diff / 3600000);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

/* ---------- Page ---------- */
export default async function ResearchPage() {
  const [marketData, trendingData] = await Promise.all([getMarketData(), getTrending()]);
  const segments = marketData.segments.map(normalize);

  // Top movers: biggest absolute trend changes, excluding flat
  const topMovers = [...segments]
    .filter((s) => s.trendDirection !== "flat" && s.trendPercent > 0)
    .sort((a, b) => b.trendPercent - a.trendPercent)
    .slice(0, 5);

  const categories = [...new Set(segments.map((s) => s.category))].filter(Boolean);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-light text-accent text-xs font-semibold rounded-full mb-4">
          <BarChart3 className="w-3.5 h-3.5" />
          {marketData.source === "fallback" ? "Curated Data" : "Live Market Data"}
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
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Latest Analysis */}
          <div>
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
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

          {/* Hot Listings from BaT RSS */}
          {trendingData.hot.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-accent" />
                Fresh on Bring a Trailer
              </h2>
              <div className="bg-white border border-border rounded-xl overflow-hidden">
                <div className="divide-y divide-border">
                  {trendingData.hot.slice(0, 10).map((deal) => (
                    <a
                      key={deal.id}
                      href={deal.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 px-5 py-4 hover:bg-surface/40 transition-colors group"
                    >
                      {deal.image_url && (
                        <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-surface">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={deal.image_url}
                            alt={deal.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors truncate">
                          {deal.title}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-xs text-text-tertiary flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {timeAgo(deal.created_at)}
                          </span>
                          <span className="text-xs px-1.5 py-0.5 bg-accent-light text-accent rounded font-medium">
                            BaT
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-tertiary group-hover:text-accent transition-colors shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Popular Listings on Fully Sorted */}
          {trendingData.trending.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                <Eye className="w-5 h-5 text-accent" />
                Most Viewed on Fully Sorted
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {trendingData.trending.slice(0, 6).map((listing) => (
                  <Link
                    key={listing.id}
                    href={`/listings/${listing.slug}`}
                    className="bg-white border border-border rounded-xl p-4 hover:shadow-md hover:border-border-medium transition-all group"
                  >
                    {listing.hero_photo && (
                      <div className="aspect-[16/9] rounded-lg overflow-hidden mb-3 bg-surface">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={listing.hero_photo}
                          alt={`${listing.year} ${listing.make} ${listing.model}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {listing.year} {listing.make} {listing.model}
                      {listing.trim ? ` ${listing.trim}` : ""}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="price-display text-sm text-accent font-semibold">
                        {formatPrice(listing.price)}
                      </span>
                      <span className="text-xs text-text-tertiary flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {listing.views.toLocaleString()} views
                      </span>
                    </div>
                    {(listing.city || listing.state) && (
                      <p className="text-xs text-text-tertiary mt-0.5">
                        {[listing.city, listing.state].filter(Boolean).join(", ")}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Market Movers */}
          {topMovers.length > 0 && (
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-border">
                <h3 className="font-semibold text-foreground text-sm">
                  Biggest Movers
                </h3>
                <p className="text-xs text-text-tertiary mt-0.5">12-month trend</p>
              </div>
              <div className="divide-y divide-border">
                {topMovers.map((m) => (
                  <div key={m.segmentKey} className="px-5 py-3">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-sm font-medium text-foreground leading-tight">
                        {m.segment}
                      </span>
                      <TrendIndicator trend={m.trendDirection} pct={m.trendPercent} />
                    </div>
                    <p className="text-xs text-text-tertiary mt-0.5">
                      Avg {formatPrice(m.avgPrice)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="px-5 py-3 border-t border-border bg-surface/30">
                <a
                  href="#segments"
                  className="text-xs font-semibold text-accent flex items-center gap-1"
                >
                  View all segments <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          )}

          {/* Value Guide CTA */}
          <div className="bg-surface border border-border rounded-xl p-5">
            <h3 className="font-semibold text-foreground text-sm mb-2">
              Check Your Car&apos;s Value
            </h3>
            <p className="text-xs text-text-secondary mb-3">
              Get a pricing verdict backed by real auction comps and market data.
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

          {/* Data sources note */}
          <div className="text-xs text-text-tertiary leading-relaxed">
            <p className="font-medium text-text-secondary mb-1">Data Sources</p>
            <p>
              Bring a Trailer · RM Sotheby&apos;s · Bonhams · Gooding & Co ·
              Mecum · Barrett-Jackson · Classic.com · Hemmings
            </p>
            <p className="mt-1">Updated twice daily via automated scraping.</p>
          </div>
        </div>
      </div>

      {/* Full Segment Table */}
      {segments.length > 0 && (
        <section id="segments" className="mt-14">
          <h2 className="text-xl font-bold text-foreground mb-2">
            Market Segments — Price & Trend Overview
          </h2>
          <p className="text-sm text-text-secondary mb-6">
            {segments.length} segments tracked · {marketData.source === "fallback"
              ? "Curated historical data"
              : marketData.source === "live_aggregate"
              ? "Live aggregated from auction results"
              : "From market_data table"}
          </p>

          {/* By category */}
          {categories.map((cat) => {
            const catSegs = segments.filter((s) => s.category === cat);
            if (catSegs.length === 0) return null;
            return (
              <div key={cat} className="mb-8">
                <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-3">
                  {cat}
                </h3>
                <div className="bg-white border border-border rounded-xl overflow-hidden overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-surface/50">
                        <th className="text-left px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">
                          Segment
                        </th>
                        <th className="text-right px-4 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">
                          Avg Price
                        </th>
                        <th className="text-right px-4 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider hidden sm:table-cell">
                          Median
                        </th>
                        <th className="text-right px-4 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider hidden md:table-cell">
                          High
                        </th>
                        <th className="text-right px-4 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider hidden md:table-cell">
                          Low
                        </th>
                        <th className="text-right px-4 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider hidden sm:table-cell">
                          Sales
                        </th>
                        <th className="text-right px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">
                          Trend
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {catSegs.map((seg) => (
                        <tr key={seg.segmentKey} className="hover:bg-surface/30 transition-colors">
                          <td className="px-5 py-3.5 font-medium text-foreground">
                            {seg.segment}
                          </td>
                          <td className="px-4 py-3.5 text-right price-display">
                            {formatPrice(seg.avgPrice)}
                          </td>
                          <td className="px-4 py-3.5 text-right text-text-secondary hidden sm:table-cell">
                            {seg.medianPrice ? formatPrice(seg.medianPrice) : "—"}
                          </td>
                          <td className="px-4 py-3.5 text-right text-text-secondary hidden md:table-cell">
                            {seg.highPrice ? formatPrice(seg.highPrice) : "—"}
                          </td>
                          <td className="px-4 py-3.5 text-right text-text-secondary hidden md:table-cell">
                            {seg.lowPrice ? formatPrice(seg.lowPrice) : "—"}
                          </td>
                          <td className="px-4 py-3.5 text-right text-text-secondary hidden sm:table-cell">
                            {seg.saleCount > 0 ? seg.saleCount.toLocaleString() : "—"}
                          </td>
                          <td className="px-5 py-3.5 text-right">
                            <TrendIndicator trend={seg.trendDirection} pct={seg.trendPercent} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}

          {/* If no categories, show flat table */}
          {categories.length === 0 && (
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
                    <th className="text-right px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider hidden sm:table-cell">
                      Sales
                    </th>
                    <th className="text-right px-5 py-3 font-semibold text-text-secondary text-xs uppercase tracking-wider">
                      Trend
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {segments.map((seg) => (
                    <tr key={seg.segmentKey} className="hover:bg-surface/30 transition-colors">
                      <td className="px-5 py-3.5 font-medium text-foreground">
                        {seg.segment}
                      </td>
                      <td className="px-5 py-3.5 text-right price-display">
                        {formatPrice(seg.avgPrice)}
                      </td>
                      <td className="px-5 py-3.5 text-right text-text-secondary hidden sm:table-cell">
                        {seg.saleCount > 0 ? seg.saleCount.toLocaleString() : "—"}
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <TrendIndicator trend={seg.trendDirection} pct={seg.trendPercent} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <p className="text-xs text-text-tertiary mt-3">
            Data sources: Bring a Trailer, Classic.com, RM Sotheby&apos;s,
            Bonhams, Gooding &amp; Company, Mecum, Barrett-Jackson. Updated twice daily.
          </p>
        </section>
      )}
    </div>
  );
}
