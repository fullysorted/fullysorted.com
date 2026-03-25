"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Car,
  MessageSquare,
  DollarSign,
  Eye,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  BarChart3,
  RefreshCw,
  Loader2,
  ArrowRight,
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

interface Stats {
  listings: {
    total: number; active: number; pending: number; sold: number;
    denied: number; draft: number; total_views: number; total_sold_value: number;
  };
  messages: { total: number; unread: number; offers: number; today: number };
  auctionResults: { total: number };
  market: { total: number; segments: number };
  recentMessages: {
    id: number; sender_name: string; sender_email: string; listing_title: string;
    type: string; offer_amount: number | null; status: string; created_at: string;
  }[];
  recentListings: {
    id: number; slug: string; year: number; make: string; model: string;
    trim: string; price: number; status: string; views: number; created_at: string;
  }[];
  topListings: {
    id: number; slug: string; year: number; make: string; model: string; price: number; views: number;
  }[];
}

function StatCard({
  label, value, sub, icon: Icon, color, href
}: {
  label: string; value: string | number; sub?: string;
  icon: React.ElementType; color: string; href?: string;
}) {
  const content = (
    <div className="bg-white border border-border rounded-xl p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {sub && <p className="text-xs text-text-tertiary mt-1">{sub}</p>}
        </div>
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: color + "20" }}>
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
      </div>
    </div>
  );
  return href ? <Link href={href}>{content}</Link> : content;
}

function statusBadge(status: string) {
  const map: Record<string, { label: string; color: string; bg: string }> = {
    active: { label: "Active", color: "#16a34a", bg: "#dcfce7" },
    pending: { label: "Pending", color: "#d97706", bg: "#fef3c7" },
    sold: { label: "Sold", color: "#2563eb", bg: "#dbeafe" },
    denied: { label: "Denied", color: "#dc2626", bg: "#fee2e2" },
    draft: { label: "Draft", color: "#6b7280", bg: "#f3f4f6" },
    new: { label: "New", color: "#C1440E", bg: "#fef2ee" },
    read: { label: "Read", color: "#6b7280", bg: "#f3f4f6" },
    replied: { label: "Replied", color: "#16a34a", bg: "#dcfce7" },
    archived: { label: "Archived", color: "#6b7280", bg: "#f3f4f6" },
    inquiry: { label: "Inquiry", color: "#2563eb", bg: "#dbeafe" },
    offer: { label: "Offer", color: "#7c3aed", bg: "#ede9fe" },
  };
  const s = map[status] || { label: status, color: "#6b7280", bg: "#f3f4f6" };
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold"
      style={{ color: s.color, backgroundColor: s.bg }}
    >
      {s.label}
    </span>
  );
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const [scrapeResult, setScrapeResult] = useState<string | null>(null);

  async function loadStats() {
    setLoading(true);
    const res = await fetch("/api/admin/stats");
    if (res.ok) setStats(await res.json());
    setLoading(false);
  }

  async function triggerScrape() {
    setScraping(true);
    setScrapeResult(null);
    const res = await fetch("/api/scrape", {
      method: "POST",
      headers: { "x-admin-secret": document.cookie.match(/fs_admin=([^;]+)/)?.[1] || "" },
    });
    const data = await res.json();
    setScrapeResult(
      res.ok
        ? `✓ Scraped ${data.bat?.inserted ?? 0} new BaT listings`
        : `✗ Scrape failed: ${data.error}`
    );
    setScraping(false);
    loadStats();
  }

  useEffect(() => { loadStats(); }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24 gap-3 text-text-secondary">
        <Loader2 className="w-5 h-5 animate-spin text-accent" />
        Loading dashboard…
      </div>
    );
  }

  if (!stats) return null;
  const { listings, messages, auctionResults, recentMessages, recentListings, topListings } = stats;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-text-secondary mt-0.5">Overview of Fully Sorted activity</p>
        </div>
        <div className="flex items-center gap-3">
          {scrapeResult && (
            <span className="text-xs text-text-secondary">{scrapeResult}</span>
          )}
          <button
            onClick={triggerScrape}
            disabled={scraping}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-lg transition-colors disabled:opacity-60"
            style={{ backgroundColor: "#C1440E" }}
          >
            {scraping ? <Loader2 className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
            {scraping ? "Scraping…" : "Run Scrape"}
          </button>
          <button
            onClick={loadStats}
            className="p-2 rounded-lg border border-border hover:bg-surface transition-colors"
            title="Refresh"
          >
            <RefreshCw className="w-4 h-4 text-text-secondary" />
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Active Listings"
          value={listings.active}
          sub={`${listings.total} total · ${listings.pending} pending`}
          icon={Car}
          color="#C1440E"
          href="/admin/listings?status=active"
        />
        <StatCard
          label="Unread Messages"
          value={messages.unread}
          sub={`${messages.offers} offers · ${messages.today} today`}
          icon={MessageSquare}
          color="#7c3aed"
          href="/admin/messages?status=new"
        />
        <StatCard
          label="Cars Sold"
          value={listings.sold}
          sub={listings.total_sold_value > 0 ? `${formatPrice(listings.total_sold_value)} total` : "Track via listings"}
          icon={DollarSign}
          color="#16a34a"
          href="/admin/listings?status=sold"
        />
        <StatCard
          label="Total Views"
          value={listings.total_views.toLocaleString()}
          sub={`${auctionResults.total} auction records`}
          icon={Eye}
          color="#2563eb"
        />
      </div>

      {/* Pending Approvals Banner */}
      {listings.pending > 0 && (
        <Link
          href="/admin/listings?status=pending"
          className="flex items-center gap-3 p-4 rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 transition-colors"
        >
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-amber-900">
              {listings.pending} listing{listings.pending !== 1 ? "s" : ""} waiting for approval
            </p>
            <p className="text-xs text-amber-700">Review and approve or deny each submission</p>
          </div>
          <ArrowRight className="w-4 h-4 text-amber-600" />
        </Link>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Messages */}
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-accent" />
              Recent Messages
            </h2>
            <Link href="/admin/messages" className="text-xs text-accent font-semibold flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {recentMessages.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-text-tertiary">No messages yet</div>
          ) : (
            <div className="divide-y divide-border">
              {recentMessages.map((msg) => (
                <Link
                  key={msg.id}
                  href={`/admin/messages`}
                  className="flex items-start gap-3 px-5 py-3.5 hover:bg-surface/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent text-xs font-bold shrink-0">
                    {msg.sender_name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium text-foreground truncate">{msg.sender_name}</p>
                      {statusBadge(msg.type)}
                      {msg.status === "new" && (
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                      )}
                    </div>
                    {msg.listing_title && (
                      <p className="text-xs text-text-secondary truncate mt-0.5">{msg.listing_title}</p>
                    )}
                    {msg.offer_amount && (
                      <p className="text-xs font-semibold text-green-700">Offer: {formatPrice(msg.offer_amount)}</p>
                    )}
                    <p className="text-xs text-text-tertiary mt-0.5">{timeAgo(msg.created_at)}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recent Listings */}
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-border flex items-center justify-between">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <Car className="w-4 h-4 text-accent" />
              Recent Listings
            </h2>
            <Link href="/admin/listings" className="text-xs text-accent font-semibold flex items-center gap-1">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {recentListings.length === 0 ? (
            <div className="px-5 py-8 text-center text-sm text-text-tertiary">No listings yet</div>
          ) : (
            <div className="divide-y divide-border">
              {recentListings.map((l) => (
                <div key={l.id} className="flex items-center gap-3 px-5 py-3.5">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-foreground truncate">
                      {l.year} {l.make} {l.model} {l.trim}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="price-display text-xs text-text-secondary">{formatPrice(l.price)}</span>
                      <span className="text-xs text-text-tertiary flex items-center gap-0.5">
                        <Eye className="w-3 h-3" /> {l.views}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {statusBadge(l.status)}
                    <span className="text-xs text-text-tertiary">{timeAgo(l.created_at)}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Top listings by views */}
      {topListings.length > 0 && (
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="px-5 py-4 border-b border-border">
            <h2 className="font-semibold text-foreground flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-accent" />
              Most Viewed Active Listings
            </h2>
          </div>
          <div className="divide-y divide-border">
            {topListings.map((l, i) => (
              <div key={l.id} className="flex items-center gap-4 px-5 py-3.5">
                <span className="text-lg font-bold text-text-tertiary w-6 text-center">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {l.year} {l.make} {l.model}
                  </p>
                  <p className="price-display text-xs text-text-secondary">{formatPrice(l.price)}</p>
                </div>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-text-secondary">
                  <Eye className="w-4 h-4" />
                  {l.views.toLocaleString()}
                </div>
                <a
                  href={`/listings/${l.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:underline"
                >
                  View →
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
