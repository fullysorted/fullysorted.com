"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Loader2, Warehouse, ExternalLink, RefreshCw, Trash2, Search, Ban, RotateCcw } from "lucide-react";

type Summary = {
  members: number; members_active: number; members_suspended: number;
  vehicles: number; unmatched: number; vehicles_week: number; owners: number; records: number;
};
type VehicleRow = {
  id: number; year: number | null; make: string | null; model: string | null; trim: string | null;
  nickname: string | null; chassis: string | null; vin_tail: string | null; model_slug: string | null;
  chassis_id: number | null; status: string; visibility: string; mileage: number | null;
  mileage_unit: string | null; created_at: string; user_id: number; owner_email: string;
  owner_name: string | null; records: number; listing_slug: string | null;
};
type MemberRow = {
  id: number; email: string; name: string | null; status: string; role: string; location: string | null;
  created_at: string; last_seen_at: string | null; signed_in: boolean; vehicles: number; listings: number;
};
type Alt = { slug: string; make?: string; model?: string; generation?: string | null };

const VIEWS = ["vehicles", "members"] as const;
type View = typeof VIEWS[number];

function day(s: string | null) {
  return s ? new Date(s).toLocaleDateString() : "never";
}

export default function AdminStablePage() {
  const [view, setView] = useState<View>("vehicles");
  const [filter, setFilter] = useState<"all" | "unmatched">("all");
  const [q, setQ] = useState("");
  const [query, setQuery] = useState("");
  const [summary, setSummary] = useState<Summary | null>(null);
  const [topMakes, setTopMakes] = useState<{ make: string; n: number }[]>([]);
  const [vehicles, setVehicles] = useState<VehicleRow[]>([]);
  const [members, setMembers] = useState<MemberRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const [note, setNote] = useState("");
  const [slugDraft, setSlugDraft] = useState<Record<number, string>>({});
  const [alts, setAlts] = useState<Record<number, Alt[]>>({});

  const load = useCallback(async () => {
    setLoading(true); setError("");
    try {
      const res = await fetch(`/api/admin/stable?view=${view}&filter=${filter}&q=${encodeURIComponent(query)}`);
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || `Request failed (${res.status})`);
      setSummary(d.summary || null);
      setTopMakes(d.topMakes || []);
      setVehicles(d.vehicles || []);
      setMembers(d.members || []);
    } catch (e) {
      // Keep whatever was on screen. A failed load is not an empty Stable.
      setError(e instanceof Error ? e.message : "Could not load The Stable.");
    } finally {
      setLoading(false);
    }
  }, [view, filter, query]);

  useEffect(() => { load(); }, [load]);

  async function act(id: number, action: string, extra: Record<string, unknown> = {}) {
    setBusyId(id); setError(""); setNote("");
    try {
      const res = await fetch("/api/admin/stable", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action, ...extra }),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "Failed");
      if (action === "rematch") {
        if (d.match) setNote(`Matched to ${d.match.slug}.`);
        else if (d.alternatives?.length) {
          setAlts((p) => ({ ...p, [id]: d.alternatives }));
          setNote("More than one generation fits. Pick one below.");
        } else setNote("No published page fits this car. Nothing changed.");
      }
      if (action !== "rematch" || d.match) { setAlts((p) => ({ ...p, [id]: [] })); await load(); }
    } catch (e) {
      setError(e instanceof Error ? e.message : "Action failed.");
    } finally {
      setBusyId(null);
    }
  }

  const tiles = summary ? [
    { label: "Members", value: summary.members, sub: `${summary.members_active} signed in${summary.members_suspended ? ` · ${summary.members_suspended} suspended` : ""}` },
    { label: "Cars", value: summary.vehicles, sub: `${summary.owners} owners · ${summary.vehicles_week} this week` },
    { label: "No research page", value: summary.unmatched, sub: "cars the matcher could not place" },
    { label: "Records", value: summary.records, sub: "work logged against cars" },
  ] : [];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h1 className="font-display text-2xl font-semibold tracking-tight">The Stable</h1>
        <button onClick={load} aria-label="Refresh"
          className="p-2.5 rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50">
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>
      <p className="text-sm text-stone-500 mb-5">
        Every car here is private to its owner. VINs show the last six only. Nothing on this page can make a car public.
      </p>

      {tiles.length > 0 && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-2xl font-bold text-stone-900">{t.value}</p>
              <p className="text-xs font-semibold text-stone-700 mt-0.5">{t.label}</p>
              <p className="text-xs text-stone-500 mt-0.5">{t.sub}</p>
            </div>
          ))}
        </div>
      )}

      {topMakes.length > 0 && (
        <p className="text-xs text-stone-500 mb-5">
          <span className="font-semibold text-stone-700">By make: </span>
          {topMakes.map((m) => `${m.make} ${m.n}`).join(" · ")}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-3">
        {VIEWS.map((v) => (
          <button key={v} onClick={() => setView(v)}
            className="px-4 py-2.5 text-sm font-semibold rounded-lg border transition-colors capitalize"
            style={view === v
              ? { background: "#1E6091", color: "#fff", borderColor: "#1E6091" }
              : { background: "#fff", color: "#6b6b5e", borderColor: "rgba(0,0,0,0.12)" }}>
            {v === "vehicles" ? "Cars" : "Members"}
          </button>
        ))}
        {view === "vehicles" && (
          <button onClick={() => setFilter(filter === "all" ? "unmatched" : "all")}
            className="px-4 py-2.5 text-sm font-semibold rounded-lg border transition-colors"
            style={filter === "unmatched"
              ? { background: "#8a6d1f", color: "#fff", borderColor: "#8a6d1f" }
              : { background: "#fff", color: "#6b6b5e", borderColor: "rgba(0,0,0,0.12)" }}>
            No research page{summary?.unmatched ? ` (${summary.unmatched})` : ""}
          </button>
        )}
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setQuery(q.trim()); }} className="flex gap-2 mb-5">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input value={q} onChange={(e) => setQ(e.target.value)} inputMode="search"
            placeholder={view === "vehicles" ? "Make, model, VIN, chassis or owner email" : "Name or email"}
            className="w-full pl-9 pr-3 py-2.5 text-base sm:text-sm rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent" />
        </div>
        <button type="submit" className="px-4 py-2.5 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover">Search</button>
      </form>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
      {note && <p className="mb-4 text-sm text-stone-700">{note}</p>}

      {loading && !summary ? (
        <p className="flex items-center gap-2 text-sm text-stone-500"><Loader2 className="w-4 h-4 animate-spin" /> Loading...</p>
      ) : view === "vehicles" ? (
        vehicles.length === 0 ? (
          <Empty text={query || filter === "unmatched" ? "No cars fit that." : "No cars yet. They arrive when a signed-in member keeps one from /stable."} />
        ) : (
          <ul className="space-y-3">
            {vehicles.map((v) => (
              <li key={v.id} className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-5">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <p className="text-sm font-semibold text-stone-900">
                    {[v.year, v.make, v.model, v.trim].filter(Boolean).join(" ") || "Unnamed car"}
                  </p>
                  {v.nickname && <span className="text-xs text-stone-500">&ldquo;{v.nickname}&rdquo;</span>}
                  <span className="ml-auto text-xs text-stone-400">{day(v.created_at)}</span>
                </div>
                <p className="mt-1 text-xs text-stone-500 break-all">
                  {v.owner_name ? `${v.owner_name} · ` : ""}{v.owner_email}
                </p>
                <p className="mt-1 text-xs text-stone-500 font-mono">
                  {v.vin_tail ? `VIN ...${v.vin_tail}` : "no VIN"}
                  {v.chassis ? ` · chassis ${v.chassis}` : ""}
                  {v.mileage != null ? ` · ${v.mileage.toLocaleString()} ${v.mileage_unit || "mi"}` : ""}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] font-bold uppercase tracking-wider">
                  <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600">{v.status}</span>
                  <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600">{v.records} records</span>
                  {v.chassis_id && <span className="px-2 py-0.5 rounded" style={{ background: "rgba(176,141,63,0.14)", color: "#8a6d1f" }}>in the register</span>}
                  {v.visibility !== "private" && <span className="px-2 py-0.5 rounded bg-red-100 text-red-700">{v.visibility}</span>}
                </div>

                <div className="mt-3 text-xs">
                  {v.model_slug ? (
                    <Link href={`/research/models/${v.model_slug}`} target="_blank"
                      className="text-accent font-semibold hover:underline inline-flex items-center gap-1 break-all">
                      {v.model_slug} <ExternalLink className="w-3 h-3 shrink-0" />
                    </Link>
                  ) : (
                    <span className="font-semibold" style={{ color: "#8a6d1f" }}>No research page matched</span>
                  )}
                  {v.listing_slug && (
                    <Link href={`/listings/${v.listing_slug}`} target="_blank" className="ml-3 text-accent hover:underline">listed for sale</Link>
                  )}
                </div>

                {(alts[v.id]?.length ?? 0) > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {alts[v.id].map((a) => (
                      <button key={a.slug} onClick={() => act(v.id, "set_model", { modelSlug: a.slug })} disabled={busyId === v.id}
                        className="px-3 py-2 text-xs font-semibold rounded-lg border border-stone-200 text-stone-700 hover:bg-stone-50 disabled:opacity-60">
                        {a.slug}
                      </button>
                    ))}
                  </div>
                )}

                <div className="mt-3 flex flex-col sm:flex-row gap-2">
                  <input value={slugDraft[v.id] ?? ""} onChange={(e) => setSlugDraft((p) => ({ ...p, [v.id]: e.target.value }))}
                    placeholder="make/model-slug, or blank to clear" autoCapitalize="none" autoCorrect="off"
                    className="flex-1 px-3 py-2.5 text-base sm:text-sm rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent" />
                  <div className="flex gap-2">
                    <button onClick={() => act(v.id, "set_model", { modelSlug: slugDraft[v.id] ?? "" })} disabled={busyId === v.id}
                      className="flex-1 sm:flex-none px-3.5 py-2.5 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-60">
                      Set page
                    </button>
                    <button onClick={() => act(v.id, "rematch")} disabled={busyId === v.id}
                      className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-sm font-semibold rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-60">
                      <RotateCcw className="w-4 h-4" /> Rematch
                    </button>
                    <button
                      onClick={() => { if (window.confirm("Delete this car and its records? The owner loses it and it cannot be undone.")) act(v.id, "delete_vehicle"); }}
                      disabled={busyId === v.id} aria-label="Delete car"
                      className="px-3.5 py-2.5 rounded-lg border border-stone-200 text-red-600 hover:bg-red-50 disabled:opacity-60">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )
      ) : members.length === 0 ? (
        <Empty text={query ? "No members fit that." : "No members yet."} />
      ) : (
        <ul className="space-y-3">
          {members.map((m) => (
            <li key={m.id} className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-5">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <p className="text-sm font-semibold text-stone-900 break-all">{m.name || m.email}</p>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded"
                  style={m.status === "suspended"
                    ? { background: "#fee2e2", color: "#b91c1c" }
                    : m.status === "active"
                      ? { background: "rgba(30,96,145,0.10)", color: "#1E6091" }
                      : { background: "#f5f5f4", color: "#78716c" }}>
                  {m.status}
                </span>
                {m.role !== "user" && <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500">{m.role}</span>}
              </div>
              {m.name && <p className="mt-1 text-xs text-stone-500 break-all">{m.email}</p>}
              <p className="mt-1 text-xs text-stone-500">
                {m.vehicles} cars · {m.listings} listings{m.location ? ` · ${m.location}` : ""} · joined {day(m.created_at)} · last seen {day(m.last_seen_at)}
              </p>
              <div className="mt-3 flex gap-2">
                {m.vehicles > 0 && (
                  <button onClick={() => { setView("vehicles"); setFilter("all"); setQ(m.email); setQuery(m.email); }}
                    className="px-3.5 py-2.5 text-sm font-semibold rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50">
                    See cars
                  </button>
                )}
                {m.status === "suspended" ? (
                  <button onClick={() => act(m.id, "unsuspend")} disabled={busyId === m.id}
                    className="px-3.5 py-2.5 text-sm font-semibold rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-60">
                    Restore
                  </button>
                ) : !["admin", "chris"].includes(m.role) && (
                  <button
                    onClick={() => { if (window.confirm(`Suspend ${m.email}? They will be treated as signed out until restored.`)) act(m.id, "suspend"); }}
                    disabled={busyId === m.id}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-semibold rounded-lg border border-stone-200 text-red-600 hover:bg-red-50 disabled:opacity-60">
                    <Ban className="w-4 h-4" /> Suspend
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Empty({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-12 text-center">
      <Warehouse className="w-8 h-8 mx-auto mb-3 text-stone-300" />
      <p className="text-sm text-stone-500">{text}</p>
    </div>
  );
}
