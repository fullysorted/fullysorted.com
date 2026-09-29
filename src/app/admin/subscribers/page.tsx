"use client";

/** Who signed up, from where, and the CSV for the sending tool. Phone first. */
import { useCallback, useEffect, useState } from "react";
import { RefreshCw, Download, Mail } from "lucide-react";

type Summary = { active: number; pending: number; unsubscribed: number; cars: number; shops: number; research: number; with_zip: number };
type Row = {
  id: number; email: string; status: string; want_cars: boolean; want_shops: boolean; want_research: boolean;
  zip: string | null; radius_mi: number; marques: string | null; source: string | null; source_path: string | null;
  created_at: string; confirmed_at: string | null;
};
const day = (s: string | null) => (s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "");

export default function AdminSubscribersPage() {
  const [summary, setSummary] = useState<Summary | null>(null);
  const [bySource, setBySource] = useState<{ source: string; n: number }[]>([]);
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch("/api/admin/subscribers");
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "Could not load subscribers.");
      setSummary(d.summary); setBySource(d.bySource || []); setRows(d.rows || []);
    } catch (e) { setError(e instanceof Error ? e.message : "Could not load subscribers."); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const stat = (label: string, n: number | undefined) => (
    <div className="rounded-xl bg-white p-3" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
      <p className="text-2xl font-bold text-stone-900">{n ?? "-"}</p>
      <p className="text-xs text-stone-500">{label}</p>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3 mb-5">
        <h1 className="text-xl font-bold text-stone-900 flex items-center gap-2"><Mail className="w-5 h-5" /> Subscribers</h1>
        <div className="flex gap-2">
          <a href="/api/admin/subscribers?format=csv" className="inline-flex items-center gap-1.5 h-9 px-3 rounded-lg text-sm font-semibold text-white" style={{ background: "#1C8C87" }}>
            <Download className="w-4 h-4" /> CSV
          </a>
          <button onClick={load} className="h-9 w-9 rounded-lg border border-stone-200 flex items-center justify-center" aria-label="Refresh">
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
          </button>
        </div>
      </div>
      {error && <p className="text-sm text-red-700 mb-4">{error}</p>}

      <div className="grid grid-cols-3 sm:grid-cols-7 gap-2 mb-4">
        {stat("Confirmed", summary?.active)}
        {stat("Pending", summary?.pending)}
        {stat("Unsubscribed", summary?.unsubscribed)}
        {stat("Want cars", summary?.cars)}
        {stat("Want shops", summary?.shops)}
        {stat("Research", summary?.research)}
        {stat("Gave ZIP", summary?.with_zip)}
      </div>
      {bySource.length > 0 && (
        <p className="text-xs text-stone-500 mb-5">
          Confirmed by placement: {bySource.map((s) => `${s.source} ${s.n}`).join(" · ")}
        </p>
      )}

      <div className="space-y-2">
        {rows.map((r) => (
          <div key={r.id} className="rounded-xl bg-white p-3 text-sm" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <div className="flex items-center justify-between gap-2">
              <span className="font-semibold text-stone-900 truncate">{r.email}</span>
              <span className={`text-[11px] px-2 py-0.5 rounded-full ${r.status === "active" ? "bg-emerald-50 text-emerald-800" : r.status === "pending" ? "bg-amber-50 text-amber-800" : "bg-stone-100 text-stone-500"}`}>
                {r.status}
              </span>
            </div>
            <p className="text-xs text-stone-500 mt-1">
              {[r.want_cars && "cars", r.want_shops && "shops", r.want_research && "research"].filter(Boolean).join(", ")}
              {r.zip ? ` · ${r.zip}${r.radius_mi ? ` within ${r.radius_mi} mi` : " anywhere"}` : ""}
              {r.marques ? ` · ${r.marques.split("|").join(", ")}` : ""}
            </p>
            <p className="text-[11px] text-stone-400 mt-0.5">
              {r.source || "page"}{r.source_path ? ` on ${r.source_path}` : ""} · signed up {day(r.created_at)}{r.confirmed_at ? ` · confirmed ${day(r.confirmed_at)}` : ""}
            </p>
          </div>
        ))}
        {!loading && rows.length === 0 && !error && <p className="text-sm text-stone-500">Nobody yet. The forms are live once this deploys.</p>}
      </div>
    </div>
  );
}
