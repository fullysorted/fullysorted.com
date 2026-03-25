"use client";

import { useEffect, useState } from "react";
import {
  BarChart3, RefreshCw, TrendingUp, TrendingDown, Minus,
  Flame, Clock, ExternalLink, Loader2, Search,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface Segment {
  segment: string; segment_key: string; avg_price: number; median_price: number;
  high_price: number; low_price: number; sale_count: number;
  trend_percent: number; trend_direction: string; category: string;
  data_source: string; recorded_at: string;
}

interface AuctionResult {
  id: number; source: string; lot_title: string; year: number; make: string;
  model: string; trim: string; sale_price: number; auction_date: string;
  auction_house: string; segment: string; category: string; sold: boolean;
  mileage: number; exterior_color: string; thumbnail_url: string;
}

interface DealAlert {
  id: number; title: string; source_url: string; source_site: string;
  image_url: string; status: string; created_at: string;
}

function TrendIcon({ dir }: { dir: string }) {
  if (dir === "up") return <TrendingUp className="w-4 h-4 text-green-600" />;
  if (dir === "down") return <TrendingDown className="w-4 h-4 text-red-500" />;
  return <Minus className="w-4 h-4 text-text-tertiary" />;
}

export default function AdminMarketPage() {
  const [segments, setSegments] = useState<Segment[]>([]);
  const [auctions, setAuctions] = useState<AuctionResult[]>([]);
  const [deals, setDeals] = useState<DealAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const [scrapeMsg, setScrapeMsg] = useState("");
  const [activeTab, setActiveTab] = useState<"segments" | "auctions" | "deals">("segments");
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  async function loadAll() {
    setLoading(true);
    const [segRes, auctionRes, dealRes] = await Promise.all([
      fetch("/api/market?limit=100"),
      fetch("/api/admin/auction-results?limit=200").catch(() => null),
      fetch("/api/admin/deal-alerts?limit=100").catch(() => null),
    ]);

    if (segRes.ok) {
      const d = await segRes.json();
      setSegments(d.segments || []);
    }
    if (auctionRes?.ok) {
      const d = await auctionRes.json();
      setAuctions(d.results || []);
    }
    if (dealRes?.ok) {
      const d = await dealRes.json();
      setDeals(d.alerts || []);
    }
    setLoading(false);
  }

  useEffect(() => { loadAll(); }, []);

  async function triggerScrape() {
    setScraping(true);
    setScrapeMsg("");
    // Get admin cookie value
    const cookieVal = document.cookie
      .split(";")
      .map(c => c.trim())
      .find(c => c.startsWith("fs_admin="))
      ?.split("=")[1];

    const res = await fetch("/api/scrape", {
      method: "POST",
      headers: { "x-admin-secret": cookieVal || "" },
    });
    const data = await res.json();
    setScrapeMsg(
      res.ok
        ? `✓ Done — ${data.bat?.inserted ?? 0} new BaT listings scraped, market segments refreshed`
        : `✗ Failed: ${data.error}`
    );
    setScraping(false);
    loadAll();
  }

  const categories = ["all", ...Array.from(new Set(segments.map(s => s.category).filter(Boolean)))];

  const filteredSegments = segments.filter(s => {
    const matchCat = categoryFilter === "all" || s.category === categoryFilter;
    const matchSearch = !search || s.segment.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const filteredAuctions = auctions.filter(a =>
    !search ||
    a.lot_title?.toLowerCase().includes(search.toLowerCase()) ||
    a.make?.toLowerCase().includes(search.toLowerCase()) ||
    a.model?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Market Data</h1>
          <p className="text-sm text-text-secondary mt-0.5">
            {segments.length} segments · {auctions.length} auction results · {deals.length} deal alerts
          </p>
        </div>
        <div className="flex items-center gap-3">
          {scrapeMsg && <span className="text-xs text-text-secondary max-w-xs">{scrapeMsg}</span>}
          <button
            onClick={triggerScrape}
            disabled={scraping}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg transition-colors disabled:opacity-60"
            style={{ backgroundColor: "#C1440E" }}
          >
            {scraping ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
            {scraping ? "Scraping…" : "Run Scrape Now"}
          </button>
          <button onClick={loadAll} className="p-2 border border-border rounded-lg hover:bg-surface transition-colors">
            <RefreshCw className="w-4 h-4 text-text-secondary" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-surface p-1 rounded-xl w-fit border border-border">
        {(["segments", "auctions", "deals"] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              activeTab === tab ? "bg-white text-foreground shadow-sm" : "text-text-secondary hover:text-foreground"
            }`}
          >
            {tab === "segments" ? `Segments (${segments.length})` :
             tab === "auctions" ? `Auction Records (${auctions.length})` :
             `BaT Deals (${deals.length})`}
          </button>
        ))}
      </div>

      {/* Search + filters */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search…"
            className="h-9 pl-9 pr-3 w-52 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        {activeTab === "segments" && categories.length > 1 && (
          <div className="flex gap-1.5 flex-wrap">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => setCategoryFilter(c)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                  categoryFilter === c ? "text-white" : "bg-white border border-border text-text-secondary"
                }`}
                style={categoryFilter === c ? { backgroundColor: "#C1440E" } : {}}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16 gap-3 text-text-secondary">
          <Loader2 className="w-5 h-5 animate-spin text-accent" />
          Loading market data…
        </div>
      ) : (
        <>
          {/* Market Segments */}
          {activeTab === "segments" && (
            <div className="bg-white border border-border rounded-xl overflow-hidden overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface/50">
                    {["Segment", "Category", "Avg Price", "Median", "High", "Low", "Sales", "Trend", "Source", "Updated"].map(h => (
                      <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider whitespace-nowrap">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredSegments.map(seg => (
                    <tr key={seg.segment_key} className="hover:bg-surface/30 transition-colors">
                      <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">{seg.segment}</td>
                      <td className="px-4 py-3 text-text-secondary">{seg.category || "—"}</td>
                      <td className="px-4 py-3 price-display whitespace-nowrap">{seg.avg_price ? formatPrice(seg.avg_price) : "—"}</td>
                      <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{seg.median_price ? formatPrice(seg.median_price) : "—"}</td>
                      <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{seg.high_price ? formatPrice(seg.high_price) : "—"}</td>
                      <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{seg.low_price ? formatPrice(seg.low_price) : "—"}</td>
                      <td className="px-4 py-3 text-text-secondary">{seg.sale_count || "—"}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <TrendIcon dir={seg.trend_direction} />
                          <span className="text-xs">{seg.trend_percent ? `${Math.abs(parseFloat(String(seg.trend_percent))).toFixed(1)}%` : "—"}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-text-tertiary">{seg.data_source || "—"}</td>
                      <td className="px-4 py-3 text-xs text-text-tertiary whitespace-nowrap">
                        {seg.recorded_at ? new Date(seg.recorded_at).toLocaleDateString() : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Auction Results */}
          {activeTab === "auctions" && (
            <div className="bg-white border border-border rounded-xl overflow-hidden overflow-x-auto">
              {filteredAuctions.length === 0 ? (
                <div className="py-16 text-center text-text-tertiary text-sm">No auction results loaded</div>
              ) : (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface/50">
                      {["Lot", "Year", "Make / Model", "Price", "Date", "Auction", "Segment", "Miles", "Color", "Sold"].map(h => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredAuctions.map(a => (
                      <tr key={a.id} className="hover:bg-surface/30 transition-colors">
                        <td className="px-4 py-3 max-w-xs">
                          <p className="text-foreground font-medium truncate">{a.lot_title}</p>
                        </td>
                        <td className="px-4 py-3 text-text-secondary">{a.year}</td>
                        <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{a.make} {a.model} {a.trim}</td>
                        <td className="px-4 py-3 price-display whitespace-nowrap font-semibold">
                          {a.sale_price ? formatPrice(a.sale_price) : "—"}
                        </td>
                        <td className="px-4 py-3 text-text-secondary whitespace-nowrap">
                          {a.auction_date ? new Date(a.auction_date).toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "—"}
                        </td>
                        <td className="px-4 py-3 text-xs text-text-secondary max-w-32 truncate">{a.auction_house || a.source}</td>
                        <td className="px-4 py-3 text-xs text-text-secondary">{a.segment}</td>
                        <td className="px-4 py-3 text-text-secondary">{a.mileage ? a.mileage.toLocaleString() : "—"}</td>
                        <td className="px-4 py-3 text-text-secondary">{a.exterior_color || "—"}</td>
                        <td className="px-4 py-3">
                          {a.sold
                            ? <span className="text-xs font-semibold text-green-700">Sold</span>
                            : <span className="text-xs text-text-tertiary">No sale</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}

          {/* BaT Deal Alerts */}
          {activeTab === "deals" && (
            <div className="space-y-2">
              {deals.length === 0 ? (
                <div className="bg-white border border-border rounded-xl py-16 text-center text-text-tertiary text-sm">
                  No deal alerts yet. Run a scrape to pull from BaT RSS.
                </div>
              ) : (
                deals.map(deal => (
                  <div key={deal.id} className="bg-white border border-border rounded-xl p-4 flex items-center gap-4">
                    {deal.image_url && (
                      <div className="w-16 h-12 rounded-lg overflow-hidden shrink-0 bg-surface">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={deal.image_url} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{deal.title}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-semibold">
                          {deal.source_site || "BaT"}
                        </span>
                        <span className="text-xs text-text-tertiary flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(deal.created_at).toLocaleDateString()}
                        </span>
                        <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${
                          deal.status === "hot" ? "bg-orange-100 text-orange-700" :
                          deal.status === "new" ? "bg-accent/10 text-accent" :
                          "bg-surface text-text-secondary"
                        }`}>{deal.status}</span>
                      </div>
                    </div>
                    <a
                      href={deal.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-border hover:bg-surface transition-colors shrink-0"
                    >
                      <ExternalLink className="w-4 h-4 text-text-secondary" />
                    </a>
                  </div>
                ))
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
