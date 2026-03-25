"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Search, Eye, CheckCircle, XCircle, DollarSign,
  Star, StarOff, Loader2, ChevronDown, ExternalLink,
  MessageSquare, Edit3, Check, X, Filter,
} from "lucide-react";
import { formatPrice, formatMileage } from "@/lib/utils";
import { Suspense } from "react";

interface Listing {
  id: number; slug: string; year: number; make: string; model: string; trim: string;
  price: number; status: string; featured: boolean; views: number; mileage: number;
  transmission: string; exterior_color: string; city: string; state: string;
  seller_name: string; seller_email: string; message_count: number;
  admin_notes: string; denied_reason: string; sold_price: number;
  chris_take: string; created_at: string; sold_at: string; published_at: string;
}

const STATUS_OPTIONS = ["all", "pending", "active", "sold", "denied", "draft"];

const STATUS_COLORS: Record<string, { color: string; bg: string }> = {
  active:  { color: "#16a34a", bg: "#dcfce7" },
  pending: { color: "#d97706", bg: "#fef3c7" },
  sold:    { color: "#2563eb", bg: "#dbeafe" },
  denied:  { color: "#dc2626", bg: "#fee2e2" },
  draft:   { color: "#6b7280", bg: "#f3f4f6" },
};

function StatusBadge({ status }: { status: string }) {
  const s = STATUS_COLORS[status] || { color: "#6b7280", bg: "#f3f4f6" };
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold"
      style={{ color: s.color, backgroundColor: s.bg }}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

function EditNoteInline({
  label, value, onSave, multiline = false
}: {
  label: string; value: string; onSave: (v: string) => void; multiline?: boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value || "");

  const save = () => { onSave(draft); setEditing(false); };
  const cancel = () => { setDraft(value || ""); setEditing(false); };

  if (!editing) {
    return (
      <div className="flex items-start gap-2">
        <span className="text-xs text-text-tertiary shrink-0">{label}:</span>
        <button onClick={() => setEditing(true)} className="text-xs text-left text-text-secondary hover:text-accent transition-colors flex items-center gap-1">
          {value || <span className="italic text-text-tertiary">Add note…</span>}
          <Edit3 className="w-3 h-3 shrink-0" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2">
      <span className="text-xs text-text-tertiary shrink-0 pt-1">{label}:</span>
      <div className="flex-1">
        {multiline ? (
          <textarea
            value={draft}
            onChange={e => setDraft(e.target.value)}
            rows={2}
            className="w-full text-xs px-2 py-1 border border-accent/50 rounded focus:outline-none resize-none"
            autoFocus
          />
        ) : (
          <input
            value={draft}
            onChange={e => setDraft(e.target.value)}
            className="w-full text-xs px-2 py-1 border border-accent/50 rounded focus:outline-none"
            autoFocus
          />
        )}
        <div className="flex gap-1 mt-1">
          <button onClick={save} className="p-1 rounded bg-green-600 text-white"><Check className="w-3 h-3" /></button>
          <button onClick={cancel} className="p-1 rounded bg-gray-300"><X className="w-3 h-3" /></button>
        </div>
      </div>
    </div>
  );
}

function ListingsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState(searchParams.get("status") || "all");
  const [updating, setUpdating] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [soldPriceInput, setSoldPriceInput] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ limit: "100" });
    if (statusFilter !== "all") params.set("status", statusFilter);
    if (search) params.set("q", search);
    const res = await fetch(`/api/admin/listings?${params}`);
    if (res.ok) {
      const data = await res.json();
      setListings(data.listings || []);
    }
    setLoading(false);
  }, [statusFilter, search]);

  useEffect(() => { load(); }, [load]);

  async function updateListing(id: number, updates: Record<string, unknown>) {
    setUpdating(id);
    await fetch("/api/admin/listings", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...updates }),
    });
    await load();
    setUpdating(null);
  }

  function timeAgo(dateStr: string): string {
    if (!dateStr) return "—";
    const diff = Date.now() - new Date(dateStr).getTime();
    const days = Math.floor(diff / 86400000);
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    return `${days}d ago`;
  }

  const filtered = listings; // server-side filtering

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Listings</h1>
          <p className="text-sm text-text-secondary mt-0.5">
            {filtered.length} listing{filtered.length !== 1 ? "s" : ""} · approve, deny, track sales
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border border-border rounded-xl p-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-48">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search make, model, slug…"
            className="w-full h-9 pl-9 pr-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {STATUS_OPTIONS.map(s => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                statusFilter === s
                  ? "text-white"
                  : "bg-surface text-text-secondary hover:bg-surface/80"
              }`}
              style={statusFilter === s ? { backgroundColor: "#C1440E" } : {}}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      {loading ? (
        <div className="flex items-center justify-center py-16 gap-3 text-text-secondary">
          <Loader2 className="w-5 h-5 animate-spin text-accent" />
          Loading listings…
        </div>
      ) : filtered.length === 0 ? (
        <div className="bg-white border border-border rounded-xl py-16 text-center text-text-tertiary text-sm">
          No listings found
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((l) => (
            <div key={l.id} className="bg-white border border-border rounded-xl overflow-hidden">
              {/* Main row */}
              <div className="p-4 flex items-start gap-4">
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-semibold text-foreground">
                      {l.year} {l.make} {l.model} {l.trim}
                    </h3>
                    <StatusBadge status={l.status} />
                    {l.featured && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs text-text-secondary">
                    <span className="price-display font-semibold text-foreground">{formatPrice(l.price)}</span>
                    {l.mileage && <span>{formatMileage(l.mileage)}</span>}
                    {l.transmission && <span>{l.transmission}</span>}
                    {(l.city || l.state) && <span>{[l.city, l.state].filter(Boolean).join(", ")}</span>}
                    <span className="flex items-center gap-1"><Eye className="w-3 h-3" />{l.views} views</span>
                    {l.message_count > 0 && (
                      <span className="flex items-center gap-1 text-accent">
                        <MessageSquare className="w-3 h-3" />{l.message_count} msg
                      </span>
                    )}
                    <span className="text-text-tertiary">Added {timeAgo(l.created_at)}</span>
                  </div>
                  {l.seller_email && (
                    <p className="text-xs text-text-tertiary mt-1">
                      Seller: {l.seller_name || "—"} · {l.seller_email}
                    </p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0 flex-wrap justify-end">
                  {/* Approve */}
                  {(l.status === "pending" || l.status === "draft") && (
                    <button
                      onClick={() => updateListing(l.id, { status: "active" })}
                      disabled={updating === l.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-green-600 hover:bg-green-700 transition-colors disabled:opacity-60"
                    >
                      <CheckCircle className="w-3.5 h-3.5" /> Approve
                    </button>
                  )}
                  {/* Deny */}
                  {l.status !== "denied" && l.status !== "sold" && (
                    <button
                      onClick={() => updateListing(l.id, { status: "denied" })}
                      disabled={updating === l.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors disabled:opacity-60"
                    >
                      <XCircle className="w-3.5 h-3.5" /> Deny
                    </button>
                  )}
                  {/* Mark Sold */}
                  {l.status === "active" && (
                    <button
                      onClick={() => {
                        setExpandedId(expandedId === l.id ? null : l.id);
                        setSoldPriceInput(l.sold_price?.toString() || l.price?.toString() || "");
                      }}
                      disabled={updating === l.id}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors disabled:opacity-60"
                    >
                      <DollarSign className="w-3.5 h-3.5" /> Mark Sold
                    </button>
                  )}
                  {/* Feature toggle */}
                  <button
                    onClick={() => updateListing(l.id, { featured: !l.featured })}
                    disabled={updating === l.id}
                    className="p-1.5 rounded-lg border border-border hover:bg-surface transition-colors"
                    title={l.featured ? "Remove from featured" : "Feature this listing"}
                  >
                    {l.featured ? (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ) : (
                      <StarOff className="w-4 h-4 text-text-tertiary" />
                    )}
                  </button>
                  {/* View on site */}
                  <a
                    href={`/listings/${l.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg border border-border hover:bg-surface transition-colors"
                    title="View on site"
                  >
                    <ExternalLink className="w-4 h-4 text-text-tertiary" />
                  </a>
                  {/* Expand */}
                  <button
                    onClick={() => setExpandedId(expandedId === l.id ? null : l.id)}
                    className="p-1.5 rounded-lg border border-border hover:bg-surface transition-colors"
                  >
                    <ChevronDown className={`w-4 h-4 text-text-tertiary transition-transform ${expandedId === l.id ? "rotate-180" : ""}`} />
                  </button>

                  {updating === l.id && <Loader2 className="w-4 h-4 animate-spin text-accent" />}
                </div>
              </div>

              {/* Expanded panel */}
              {expandedId === l.id && (
                <div className="border-t border-border bg-surface/30 p-4 space-y-3">
                  {/* Mark sold form */}
                  {l.status === "active" && (
                    <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <DollarSign className="w-4 h-4 text-blue-600 shrink-0" />
                      <input
                        type="number"
                        value={soldPriceInput}
                        onChange={e => setSoldPriceInput(e.target.value)}
                        placeholder="Final sale price"
                        className="flex-1 h-9 px-3 text-sm border border-border rounded-lg focus:outline-none"
                      />
                      <button
                        onClick={() => updateListing(l.id, { status: "sold", soldPrice: parseInt(soldPriceInput) || l.price })}
                        className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                      >
                        Confirm Sale
                      </button>
                    </div>
                  )}

                  {/* Sold info */}
                  {l.status === "sold" && (
                    <div className="text-sm text-text-secondary">
                      Sold {l.sold_at ? `on ${new Date(l.sold_at).toLocaleDateString()}` : ""}{" "}
                      {l.sold_price ? `for ${formatPrice(l.sold_price)}` : ""}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <EditNoteInline
                      label="Admin notes"
                      value={l.admin_notes}
                      onSave={v => updateListing(l.id, { adminNotes: v })}
                      multiline
                    />
                    {l.status === "denied" && (
                      <EditNoteInline
                        label="Denial reason"
                        value={l.denied_reason}
                        onSave={v => updateListing(l.id, { deniedReason: v })}
                        multiline
                      />
                    )}
                    <EditNoteInline
                      label="Chris's Take"
                      value={l.chris_take}
                      onSave={v => updateListing(l.id, { chrisTake: v })}
                      multiline
                    />
                  </div>

                  {/* Re-activate denied */}
                  {l.status === "denied" && (
                    <button
                      onClick={() => updateListing(l.id, { status: "active" })}
                      className="text-xs text-green-700 hover:underline"
                    >
                      → Re-activate this listing
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AdminListingsPage() {
  return (
    <Suspense>
      <ListingsContent />
    </Suspense>
  );
}
