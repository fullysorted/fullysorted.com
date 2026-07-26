"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Check, X, ExternalLink, Loader2, PenLine } from "lucide-react";

type Contribution = {
  id: number; kind: string; section: string | null; body: string;
  source_url: string | null; submitter_name: string | null;
  submitter_email: string | null; submitter_credential: string | null;
  status: string; created_at: string; make: string; model: string; slug: string;
};

const TABS = ["pending", "approved", "rejected"] as const;

export default function ContributionsPage() {
  const [tab, setTab] = useState<typeof TABS[number]>("pending");
  const [rows, setRows] = useState<Contribution[]>([]);
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<number | null>(null);
  const [error, setError] = useState("");

  const load = useCallback(async (status: string) => {
    setLoading(true); setError("");
    try {
      const res = await fetch(`/api/admin/contributions?status=${status}`);
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      const d = await res.json();
      setRows(d.contributions || []);
      const c: Record<string, number> = {};
      for (const row of d.counts || []) c[row.status] = row.n;
      setCounts(c);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Couldn't load contributions.");
      setRows([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(tab); }, [tab, load]);

  async function act(id: number, action: "approve" | "reject") {
    setBusyId(id);
    try {
      const res = await fetch("/api/admin/contributions", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action }),
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
      <h1 className="font-display text-2xl font-semibold tracking-tight mb-1">Nerd Notes — review</h1>
      <p className="text-sm text-stone-500 mb-6">
        Owner corrections and stories. Nothing is public until you approve it. Approving a correction
        publishes the note — it does not change the cited research, which stays yours to edit deliberately.
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
          <Loader2 className="w-4 h-4 animate-spin" /> Loading…
        </p>
      ) : rows.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-12 text-center">
          <PenLine className="w-8 h-8 mx-auto mb-3 text-stone-300" />
          <p className="text-sm text-stone-500">
            Nothing {tab} right now. Contributions arrive from the Nerd Notes box on each model page.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {rows.map((c) => (
            <li key={c.id} className="rounded-2xl border border-stone-200 bg-white p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded"
                  style={c.kind === "correction"
                    ? { background: "rgba(30,96,145,0.10)", color: "#1E6091" }
                    : { background: "rgba(176,141,63,0.14)", color: "#8a6d1f" }}>
                  {c.kind}
                </span>
                {c.section && <span className="text-xs text-stone-400">{c.section}</span>}
                <Link href={`/research/models/${c.slug}`} target="_blank"
                  className="text-sm font-semibold text-accent hover:underline inline-flex items-center gap-1">
                  {c.make} {c.model} <ExternalLink className="w-3 h-3" />
                </Link>
                <span className="ml-auto text-xs text-stone-400">
                  {new Date(c.created_at).toLocaleDateString()}
                </span>
              </div>

              <p className="text-sm text-stone-700 whitespace-pre-wrap leading-relaxed">{c.body}</p>

              {c.source_url && (
                <p className="mt-2.5 text-xs">
                  <span className="text-stone-400">Source: </span>
                  <a href={c.source_url} target="_blank" rel="noopener noreferrer nofollow"
                    className="text-accent hover:underline break-all">{c.source_url}</a>
                </p>
              )}

              <p className="mt-2.5 text-xs text-stone-500">
                {c.submitter_name || "Anonymous"}
                {c.submitter_credential ? ` · ${c.submitter_credential}` : ""}
                {c.submitter_email ? ` · ${c.submitter_email}` : ""}
              </p>

              {c.status === "pending" && (
                <div className="flex gap-2 mt-4">
                  <button onClick={() => act(c.id, "approve")} disabled={busyId === c.id}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-60">
                    <Check className="w-4 h-4" /> Approve &amp; publish
                  </button>
                  <button onClick={() => act(c.id, "reject")} disabled={busyId === c.id}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg border border-stone-200 text-stone-600 hover:bg-stone-50 disabled:opacity-60">
                    <X className="w-4 h-4" /> Reject
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
