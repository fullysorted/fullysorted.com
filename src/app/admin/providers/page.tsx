"use client";

import { useEffect, useState, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search, CheckCircle, XCircle, Loader2, ExternalLink, Shield,
  Star, StarOff, Mail, Phone, Globe, AtSign, MapPin, Building2,
  Trash2, Award,
} from "lucide-react";

interface Provider {
  id: number;
  business_name: string;
  owner_name: string;
  slug: string;
  category: string;
  location: string;
  email: string;
  phone: string | null;
  website: string | null;
  instagram: string | null;
  description: string;
  specialties: string[] | null;
  years_in_business: string | null;
  price_range: string;
  verified: boolean;
  founding_provider: boolean;
  rating: string;
  review_count: number;
  status: string;
  application_id: number | null;
  created_at: string;
  updated_at: string;
}

const STATUS_OPTIONS = ["all", "pending", "active", "paused", "rejected"];

const STATUS_COLORS: Record<string, { color: string; bg: string }> = {
  active:   { color: "#16a34a", bg: "#dcfce7" },
  pending:  { color: "#d97706", bg: "#fef3c7" },
  paused:   { color: "#6b7280", bg: "#f3f4f6" },
  rejected: { color: "#dc2626", bg: "#fee2e2" },
};

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_COLORS[status] || { color: "#6b7280", bg: "#f3f4f6" };
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold"
      style={{ color: s.color, backgroundColor: s.bg }}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function timeAgo(dateStr: string): string {
  if (!dateStr) return "—";
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

function ProvidersContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [providers, setProviders] = useState<Provider[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState(searchParams.get("status") || "pending");
  const [updating, setUpdating] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ limit: "100" });
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (search) params.set("q", search);
    const res = await fetch(`/api/admin/providers?${params}`);
    if (res.ok) {
      const data = await res.json();
      setProviders(data.providers || []);
      const map: Record<string, number> = {};
      (data.counts || []).forEach((c: { status: string; count: number }) => {
        map[c.status] = c.count;
      });
      setCounts(map);
    }
    setLoading(false);
  }, [statusFilter, search]);

  useEffect(() => { load(); }, [load]);

  async function updateProvider(id: number, updates: Record<string, unknown>) {
    setUpdating(id);
    await fetch("/api/admin/providers", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updates }),
    });
    await load();
    setUpdating(null);
  }

  async function deleteProvider(id: number) {
    if (!confirm("Permanently delete this provider? This cannot be undone.")) return;
    setUpdating(id);
    await fetch(`/api/admin/providers?id=${id}`, { method: "DELETE" });
    await load();
    setUpdating(null);
  }

  function setStatus(s: string) {
    setStatusFilter(s);
    const params = new URLSearchParams(searchParams);
    if (s === "all") params.delete("status");
    else params.set("status", s);
    router.replace(`/admin/providers?${params.toString()}`);
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Service Providers</h1>
          <p className="text-sm text-text-secondary mt-0.5">
            Review applications, approve listings, and manage the directory
          </p>
        </div>
      </div>

      {/* Stat chips */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {["pending", "active", "paused", "rejected"].map((s) => {
          const isActive = statusFilter === s;
          return (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`text-left rounded-xl border p-4 transition-all ${
                isActive ? "border-accent shadow-sm" : "border-border bg-white hover:border-text-tertiary"
              }`}
              style={isActive ? { backgroundColor: "#fef2ee" } : {}}
            >
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                {s}
              </p>
              <p className="text-2xl font-bold text-foreground mt-1">{counts[s] || 0}</p>
            </button>
          );
        })}
      </div>

      {/* Search + filters */}
      <div className="bg-white border border-border rounded-xl p-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search business, owner, email, location…"
            className="w-full h-9 pl-9 pr-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {STATUS_OPTIONS.map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                statusFilter === s ? "text-white" : "bg-surface text-text-secondary hover:bg-surface/80"
              }`}
              style={statusFilter === s ? { backgroundColor: "#C1440E" } : {}}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      {loading ? (
        <div className="flex items-center justify-center py-16 gap-3 text-text-secondary">
          <Loader2 className="w-5 h-5 animate-spin text-accent" />
          Loading providers…
        </div>
      ) : providers.length === 0 ? (
        <div className="bg-white border border-border rounded-xl py-16 text-center">
          <Building2 className="w-10 h-10 text-stone-300 mx-auto mb-3" />
          <p className="text-sm font-semibold text-text-secondary">No providers in this view</p>
          <p className="text-xs text-text-tertiary mt-1">
            {statusFilter === "pending"
              ? "Incoming applications will appear here for review."
              : "Try a different filter."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {providers.map((p) => {
            const expanded = expandedId === p.id;
            const isUpdating = updating === p.id;
            return (
              <div key={p.id} className="bg-white border border-border rounded-xl overflow-hidden">
                {/* Main row */}
                <div className="p-4 flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-semibold text-foreground truncate">
                        {p.business_name}
                      </h3>
                      <StatusBadge status={p.status} />
                      {p.verified && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                          <Shield className="w-3 h-3" /> Verified
                        </span>
                      )}
                      {p.founding_provider && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                          <Award className="w-3 h-3" /> Founding
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-text-secondary mt-0.5">
                      {p.owner_name} · {p.category} · <MapPin className="w-3 h-3 inline" /> {p.location}
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-text-tertiary flex-wrap">
                      <span className="inline-flex items-center gap-1">
                        <Mail className="w-3 h-3" /> {p.email}
                      </span>
                      {p.phone && (
                        <span className="inline-flex items-center gap-1">
                          <Phone className="w-3 h-3" /> {p.phone}
                        </span>
                      )}
                      {p.website && (
                        <a
                          href={p.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-accent hover:underline"
                        >
                          <Globe className="w-3 h-3" /> Website
                        </a>
                      )}
                      {p.instagram && (
                        <span className="inline-flex items-center gap-1">
                          <AtSign className="w-3 h-3" /> {p.instagram}
                        </span>
                      )}
                      <span>· Applied {timeAgo(p.created_at)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 shrink-0">
                    {p.status !== "active" && (
                      <button
                        onClick={() => updateProvider(p.id, { status: "active" })}
                        disabled={isUpdating}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                        style={{ backgroundColor: "#16a34a" }}
                      >
                        <CheckCircle className="w-3.5 h-3.5" /> Approve
                      </button>
                    )}
                    {p.status !== "rejected" && (
                      <button
                        onClick={() => updateProvider(p.id, { status: "rejected" })}
                        disabled={isUpdating}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg disabled:opacity-60"
                        style={{ backgroundColor: "#dc2626" }}
                      >
                        <XCircle className="w-3.5 h-3.5" /> Reject
                      </button>
                    )}
                    {p.status === "active" && (
                      <button
                        onClick={() => updateProvider(p.id, { status: "paused" })}
                        disabled={isUpdating}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-text-secondary border border-border rounded-lg disabled:opacity-60 hover:bg-surface"
                      >
                        Pause
                      </button>
                    )}
                    <button
                      onClick={() => setExpandedId(expanded ? null : p.id)}
                      className="px-3 py-1.5 text-xs font-semibold text-text-secondary border border-border rounded-lg hover:bg-surface"
                    >
                      {expanded ? "Hide" : "Details"}
                    </button>
                  </div>
                </div>

                {/* Expanded detail */}
                {expanded && (
                  <div className="border-t border-border bg-surface/40 p-4 space-y-3 text-sm">
                    <div>
                      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">
                        Description
                      </p>
                      <p className="text-text-secondary whitespace-pre-wrap">
                        {p.description || <span className="italic text-text-tertiary">None</span>}
                      </p>
                    </div>
                    {Array.isArray(p.specialties) && p.specialties.length > 0 && (
                      <div>
                        <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">
                          Specialties
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {p.specialties.map((s, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-white border border-border text-text-secondary"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div>
                        <p className="text-xs text-text-tertiary">Years in business</p>
                        <p className="text-sm text-text-secondary">{p.years_in_business || "—"}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-tertiary">Price range</p>
                        <p className="text-sm text-text-secondary">{p.price_range}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-tertiary">Rating</p>
                        <p className="text-sm text-text-secondary">
                          {p.rating} ({p.review_count})
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-text-tertiary">Slug</p>
                        <p className="text-sm text-text-secondary truncate">{p.slug}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-border">
                      <button
                        onClick={() => updateProvider(p.id, { verified: !p.verified })}
                        disabled={isUpdating}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-border rounded-lg hover:bg-white disabled:opacity-60"
                      >
                        <Shield className="w-3.5 h-3.5" />
                        {p.verified ? "Unverify" : "Mark verified"}
                      </button>
                      <button
                        onClick={() => updateProvider(p.id, { foundingProvider: !p.founding_provider })}
                        disabled={isUpdating}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-border rounded-lg hover:bg-white disabled:opacity-60"
                      >
                        {p.founding_provider ? <StarOff className="w-3.5 h-3.5" /> : <Star className="w-3.5 h-3.5" />}
                        {p.founding_provider ? "Remove founding" : "Mark founding"}
                      </button>
                      <a
                        href={`/services/${p.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-border rounded-lg hover:bg-white"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> View public page
                      </a>
                      <button
                        onClick={() => deleteProvider(p.id)}
                        disabled={isUpdating}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-red-600 border border-red-200 rounded-lg hover:bg-red-50 disabled:opacity-60 ml-auto"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function AdminProvidersPage() {
  return (
    <Suspense>
      <ProvidersContent />
    </Suspense>
  );
}
