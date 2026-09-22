"use client";

/** Approve, reject and tidy the Wanted board. Phone first, like the rest of admin. */
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { RefreshCw, Check, X, Trash2, Megaphone } from "lucide-react";

type Summary = { pending: number; open: number; found: number; with_fee: number; replies: number };
type Row = {
  id: number; kind: string; title: string; body: string; make: string | null; category: string | null; location: string | null;
  budget: string | null; fee_text: string | null; fee_terms: string | null; status: string; admin_note: string | null;
  reply_count: number; created_at: string; expires_at: string | null; expired: boolean;
  handle: string | null; email: string; name: string | null;
};

const VIEWS = [{ key: "pending", label: "To review" }, { key: "open", label: "Live" }, { key: "closed", label: "Closed" }] as const;
const day = (s: string | null) => (s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "");

export default function AdminWantedPage() {
  const [view, setView] = useState<(typeof VIEWS)[number]["key"]>("pending");
  const [summary, setSummary] = useState<Summary | null>(null);
  const [posts, setPosts] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true); setError(null);
    try {
      const res = await fetch(`/api/admin/wanted?status=${view}`);
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "Could not load the board.");
      setSummary(d.summary ?? null); setPosts(d.posts || []);
    } catch (e) { setError(e instanceof Error ? e.message : "Could not load the board."); }
    finally { setLoading(false); }
  }, [view]);
  useEffect(() => { load(); }, [load]);

  async function act(id: number, action: "approve" | "reject" | "remove" | "reopen") {
    let note: string | null = null;
    if (action === "reject") { note = window.prompt("Reason (kept in admin only, optional):") ?? null; }
    if (action === "remove" && !window.confirm("Take this post off the board?")) return;
    setBusyId(id); setError(null);
    try {
      const res = await fetch("/api/admin/wanted", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action, id, note }) });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "Action failed.");
      await load();
    } catch (e) { setError(e instanceof Error ? e.message : "Action failed."); }
    finally { setBusyId(null); }
  }

  const btn = "inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-semibold rounded-lg disabled:opacity-60";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <div className="flex items-start justify-between gap-3 mb-1">
        <h1 className="font-display text-2xl font-semibold tracking-tight">Wanted board</h1>
        <button onClick={load} aria-label="Refresh" className="p-2.5 rounded-lg border border-stone-200 bg-white text-stone-600 hover:bg-stone-50">
          <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
        </button>
      </div>
      <p className="text-sm text-stone-500 mb-5">
        Nothing is public until it is approved here. Approving starts the 60 days and emails the poster. The public board can take up to five minutes to catch up.
      </p>

      {summary && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
          {[["To review", summary.pending], ["Live", summary.open], ["With a fee", summary.with_fee], ["Replies sent", summary.replies]].map(([l, v]) => (
            <div key={l} className="rounded-xl border border-stone-200 bg-white p-4">
              <p className="text-2xl font-bold text-stone-900">{v}</p>
              <p className="text-xs font-semibold text-stone-700 mt-0.5">{l}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-5">
        {VIEWS.map((v) => (
          <button key={v.key} onClick={() => setView(v.key)} aria-pressed={view === v.key}
            className={`px-3.5 py-2 rounded-full text-sm font-medium ${view === v.key ? "bg-stone-900 text-white" : "bg-white text-stone-600 border border-stone-200"}`}>
            {v.label}{v.key === "pending" && summary?.pending ? ` (${summary.pending})` : ""}
          </button>
        ))}
      </div>

      {error && <div className="rounded-xl border p-4 mb-5 text-sm" style={{ borderColor: "rgba(176,85,63,0.3)", background: "rgba(176,85,63,0.06)", color: "#9a3f2f" }}>{error}</div>}

      {!loading && !error && posts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-12 text-center">
          <Megaphone className="w-8 h-8 mx-auto mb-3 text-stone-300" />
          <p className="text-sm text-stone-500">{view === "pending" ? "Nothing waiting." : "Nothing here."}</p>
        </div>
      ) : (
        <ul className="space-y-3">
          {posts.map((p) => (
            <li key={p.id} className="rounded-2xl border border-stone-200 bg-white p-4 sm:p-5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                {p.kind} · {p.expired ? "expired" : p.status}{p.fee_text ? ` · fee: ${p.fee_text}` : ""}
              </p>
              <p className="text-[15px] font-semibold text-stone-900 mt-1">{p.title}</p>
              <p className="text-sm text-stone-600 mt-1.5 whitespace-pre-line">{p.body}</p>
              <p className="text-xs text-stone-500 mt-2">
                {[p.make, p.category, p.location, p.budget && `budget ${p.budget}`, p.fee_terms && `fee paid: ${p.fee_terms}`].filter(Boolean).join(" · ")}
              </p>
              <p className="text-xs text-stone-500 mt-1 break-all">
                {p.handle ? `@${p.handle} · ` : ""}{p.email} · {day(p.created_at)}
                {p.status === "open" ? ` · ${p.reply_count} replies · until ${day(p.expires_at)}` : ""}
                {p.admin_note ? ` · note: ${p.admin_note}` : ""}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.status === "pending" && (
                  <>
                    <button onClick={() => act(p.id, "approve")} disabled={busyId === p.id} className={`${btn} text-white`} style={{ background: "#1C8C87" }}><Check className="w-4 h-4" /> Approve</button>
                    <button onClick={() => act(p.id, "reject")} disabled={busyId === p.id} className={`${btn} border border-stone-200 text-red-600 hover:bg-red-50`}><X className="w-4 h-4" /> Reject</button>
                  </>
                )}
                {p.status === "open" && !p.expired && (
                  <>
                    <Link href={`/wanted/${p.id}`} className={`${btn} border border-stone-200 text-stone-700 hover:bg-stone-50`}>View</Link>
                    <button onClick={() => act(p.id, "remove")} disabled={busyId === p.id} className={`${btn} border border-stone-200 text-red-600 hover:bg-red-50`}><Trash2 className="w-4 h-4" /> Take down</button>
                  </>
                )}
                {(p.expired || ["rejected", "removed"].includes(p.status)) && (
                  <button onClick={() => act(p.id, "reopen")} disabled={busyId === p.id} className={`${btn} border border-stone-200 text-stone-700 hover:bg-stone-50`}>Put it back up for 60 days</button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
