"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Check, X, ExternalLink, Loader2, Hash } from "lucide-react";

type Submission = {
  id: number; model_slug: string; chassis: string; vin: string | null;
  kind: string; body: string; event_date: string | null; source_url: string | null;
  submitter_name: string | null; submitter_email: string | null; submitter_relation: string | null;
  status: string; admin_note: string | null; created_at: string;
  make: string | null; model: string | null;
};

const TABS = ["pending", "approved", "rejected"] as const;

const KIND_LABEL: Record<string, string> = {
  event: "Record", correction: "Correction", ownership: "Owner report",
};

export default function RegisterReviewPage() {
  const [tab, setTab] = useState<typeof TABS[number]>("pending");
  const [rows, setRows] = useState<Submission[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [notes, setNotes] = useState<Record<number, string>>({});
  const [error, setError] = useState("");

  const load = useCallback(async (status: string) => {
    setLoading(true); setError("");
    try {
      const res = await fetch(`/api/admin/register?status=${status}`);
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const d = await res.json();
      setRows(d.submissions || []);
      const c: Record<string, number> = {};
      for (const row of d.counts || []) c[row.status] = row.n;
      setCounts(c);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load submissions.");
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(tab); }, [tab, load]);

  async function act(id: number, action: "approve" | "reject") {
    setBusyId(id); setError("");
    try {
      const res = await fetch("/api/admin/register", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action, adminNote: notes[id] || undefined }),
      });
      if (!res.ok) { const d = await res.json().catch(() => ({})); throw new Error(d.error || "Failed"); }
      await load(tab);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Action failed.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="font-display text-2xl font-semibold tracking-tight mb-1">Chassis Register: review</h1>
      <p className="text-sm text-stone-500 mb-6">
        Records, corrections and owner reports sent from the register. Approving creates the chassis if it is
        new and adds one owner-reported event with the submitted text. Names and emails are never published.
      </p>

      <div className="flex gap-2 mb-6">
        {TABS.map((t) => (
          <button
            key={t} onClick={() => setTab(t)}
            className="px-3.5 py-2 text-sm font-semibold rounded-lg border transition-colors capitalize"
            style={tab === t
              ? { background: "#1E6091", color: "#fff", borderColor: "#1E6091" }
              : { background: "#fff", color: "#6b6b5e", borderColor: "rgba(0,0,0,0.12)" }}
          >
            {t}{counts[t] ? ` (${counts[t]})` : ""}
          </button>
        ))}
      </div>

      {error && <p className="mb-4 text-sm text-red-600">{error}</p>}

      {loading ? (
        <p className="flex items-center gap-2 text-sm text-stone-500">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading...
        </p>
      ) : rows.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-12 text-center">
          <Hash className="w-8 h-8 mx-auto mb-3 text-stone-300" />
          <p className="text-sm text-stone-500">
            Nothing {tab} right now. Submissions arrive from the forms on the register pages.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {rows.map((s) => (
            <li key={s.id} className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded"
                  style={s.kind === "correction"
                    ? { background: "rgba(30,96,145,0.10)", color: "#1E6091" }
                    : { background: "rgba(176,141,63,0.14)", color: "#8a6d1f" }}>
                  {KIND_LABEL[s.kind] ?? s.kind}
                </span>
                <Link href={`/register/${s.model_slug}/${encodeURIComponent(s.chassis)}`} target="_blank"
                  className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1">
                  {s.make && s.model ? `${s.make} ${s.model}` : s.model_slug} <span className="font-mono">{s.chassis}</span> <ExternalLink className="w-3 h-3" />
                </Link>
                {s.vin && <span className="font-mono text-xs text-stone-500">VIN {s.vin}</span>}
                {s.event_date && <span className="font-mono text-xs text-stone-500">{s.event_date}</span>}
                <span className="ml-auto text-xs text-stone-400">
                  {new Date(s.created_at).toLocaleDateString()}
                </span>
              </div>

              <p className="text-sm text-stone-700 whitespace-pre-wrap leading-relaxed">{s.body}</p>

              {s.source_url ? (
                <p className="mt-2.5 text-xs">
                  <span className="text-stone-400">Source: </span>
                  <a href={s.source_url} target="_blank" rel="noopener noreferrer nofollow"
                    className="text-accent hover:underline break-all">{s.source_url}</a>
                </p>
              ) : (
                <p className="mt-2.5 text-xs text-stone-400">No source given. The event will cite the submission itself.</p>
              )}

              <p className="mt-2.5 text-xs text-stone-500">
                {s.submitter_name || "Anonymous"}
                {s.submitter_relation ? ` · ${s.submitter_relation.replace(/_/g, " ")}` : ""}
                {s.submitter_email ? ` · ${s.submitter_email}` : ""}
              </p>

              {s.admin_note && <p className="mt-2 text-xs text-stone-500"><span className="text-stone-400">Note: </span>{s.admin_note}</p>}

              {s.status === "pending" && (
                <div className="mt-4 space-y-2.5">
                  <input
                    value={notes[s.id] ?? ""}
                    onChange={(e) => setNotes((p) => ({ ...p, [s.id]: e.target.value }))}
                    placeholder="Optional note (kept private)"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent"
                  />
                  <div className="flex gap-2">
                    <button onClick={() => act(s.id, "approve")} disabled={busyId === s.id}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-60">
                      <Check className="w-4 h-4" /> Approve as owner-reported
                    </button>
                    <button onClick={() => act(s.id, "reject")} disabled={busyId === s.id}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-60">
                      <X className="w-4 h-4" /> Reject
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
