"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Loader2, RefreshCw, Sparkles, BookOpen, AlertTriangle,
  CheckCircle2, FileText, ListOrdered, ExternalLink,
} from "lucide-react";

interface ModelRow {
  id: number; slug: string; make: string; model: string; generation: string | null;
  year_start: number | null; year_end: number | null; status: string;
  overall_confidence: string | null; ai_model: string | null; updated_at: string;
  source_count: number; claim_count: number; disputed_count: number;
}
interface QueueRow {
  id: number; make: string; model: string; generation: string | null;
  priority: number; status: string;
}

const STATUS_STYLE: Record<string, string> = {
  draft: "bg-orange-100 text-orange-700",
  reviewed: "bg-blue-100 text-blue-700",
  published: "bg-green-100 text-green-700",
};

export default function AdminModelsPage() {
  const [models, setModels] = useState<ModelRow[]>([]);
  const [queue, setQueue] = useState<QueueRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [noDb, setNoDb] = useState(false);
  const [tab, setTab] = useState<"models" | "queue">("models");

  // Generate form
  const [gMake, setGMake] = useState("");
  const [gModel, setGModel] = useState("");
  const [gGen, setGGen] = useState("");
  const [generating, setGenerating] = useState(false);
  const [genMsg, setGenMsg] = useState("");

  async function load() {
    setLoading(true);
    const res = await fetch("/api/admin/models");
    if (res.ok) {
      const d = await res.json();
      setModels(d.models || []);
      setQueue(d.queue || []);
      setNoDb(!!d.noDb);
    }
    setLoading(false);
  }
  useEffect(() => { load(); }, []);

  async function seed() {
    setGenMsg("Seeding 964 + creating tables…");
    const res = await fetch("/api/admin/seed-models", { method: "POST" });
    const d = await res.json();
    setGenMsg(res.ok ? `✓ ${d.message}` : `✗ ${d.error}`);
    load();
  }

  async function publishAll() {
    const n = models.filter(m => m.status !== "published").length;
    if (n === 0) { setGenMsg("All model pages are already published."); return; }
    if (!confirm(`Publish all ${n} unpublished model ${n === 1 ? "page" : "pages"} live to the public site?`)) return;
    setGenMsg("Publishing…");
    const res = await fetch("/api/admin/models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "publish-all" }),
    });
    const d = await res.json();
    setGenMsg(res.ok ? `✓ Published ${d.published} page${d.published === 1 ? "" : "s"} — they are now live.` : `✗ ${d.error}`);
    load();
  }

  async function runGenerate(e: React.FormEvent) {
    e.preventDefault();
    setGenerating(true); setGenMsg("Researching across sources — this can take a minute…");
    const res = await fetch("/api/admin/models", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "generate", make: gMake, model: gModel, generation: gGen || null }),
    });
    const d = await res.json();
    setGenMsg(res.ok ? `✓ Drafted ${gMake} ${gModel} — review it below.` : `✗ ${d.error}`);
    setGenerating(false);
    if (res.ok) { setGMake(""); setGModel(""); setGGen(""); load(); }
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Research — Model Histories</h1>
          <p className="text-sm text-text-secondary mt-0.5">
            {models.length} pages · {models.filter(m => m.status === "draft").length} awaiting review · {queue.filter(q => q.status === "queued").length} queued
          </p>
        </div>
        <div className="flex items-center gap-2">
          {models.some(m => m.status !== "published") && (
            <button onClick={publishAll}
              className="h-9 px-4 text-sm font-semibold text-white rounded-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#3f7a2e" }}>
              <CheckCircle2 className="w-4 h-4" /> Publish all ({models.filter(m => m.status !== "published").length})
            </button>
          )}
          <button onClick={load} className="p-2 border border-border rounded-lg hover:bg-surface transition-colors">
            <RefreshCw className="w-4 h-4 text-text-secondary" />
          </button>
        </div>
      </div>

      {noDb && (
        <div className="rounded-xl p-4 bg-orange-50 border border-orange-200 text-sm text-orange-800">
          No database is connected in this environment. Connect <code>DATABASE_URL</code>, then click
          “Seed 964 + create tables.”
        </div>
      )}

      {/* Generate / seed panel */}
      <div className="bg-white border border-border rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-accent" />
          <h2 className="text-sm font-bold text-foreground">Draft a new model page</h2>
        </div>
        <form onSubmit={runGenerate} className="flex flex-wrap items-end gap-3">
          <div>
            <label className="block text-xs text-text-secondary mb-1">Make</label>
            <input value={gMake} onChange={e => setGMake(e.target.value)} placeholder="Porsche" required
              className="h-9 px-3 w-32 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30" />
          </div>
          <div>
            <label className="block text-xs text-text-secondary mb-1">Model</label>
            <input value={gModel} onChange={e => setGModel(e.target.value)} placeholder="911" required
              className="h-9 px-3 w-32 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30" />
          </div>
          <div>
            <label className="block text-xs text-text-secondary mb-1">Generation (optional)</label>
            <input value={gGen} onChange={e => setGGen(e.target.value)} placeholder="993"
              className="h-9 px-3 w-32 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30" />
          </div>
          <button type="submit" disabled={generating}
            className="h-9 px-4 text-sm font-semibold text-white rounded-lg inline-flex items-center gap-2 disabled:opacity-60"
            style={{ backgroundColor: "#C1440E" }}>
            {generating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {generating ? "Researching…" : "Generate draft"}
          </button>
          <button type="button" onClick={seed}
            className="h-9 px-4 text-sm font-semibold rounded-lg border border-border hover:bg-surface inline-flex items-center gap-2">
            <FileText className="w-4 h-4" /> Seed 964 + create tables
          </button>
        </form>
        {genMsg && <p className="text-xs text-text-secondary mt-3">{genMsg}</p>}
        <p className="text-xs text-text-tertiary mt-2">
          Drafts are never auto-published. Every page is reviewed by you before it goes live.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-surface p-1 rounded-xl w-fit border border-border">
        {(["models", "queue"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
              tab === t ? "bg-white text-foreground shadow-sm" : "text-text-secondary hover:text-foreground"}`}>
            {t === "models" ? `Pages (${models.length})` : `Queue (${queue.length})`}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16 gap-3 text-text-secondary">
          <Loader2 className="w-5 h-5 animate-spin text-accent" /> Loading…
        </div>
      ) : tab === "models" ? (
        models.length === 0 ? (
          <div className="bg-white border border-border rounded-xl py-16 text-center text-text-tertiary text-sm">
            No model pages yet. Seed the 964 pilot or generate a draft above.
          </div>
        ) : (
          <div className="bg-white border border-border rounded-xl overflow-hidden overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface/50">
                  {["Model", "Years", "Status", "Confidence", "Sources", "Claims", "Updated", ""].map(h => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-text-secondary uppercase tracking-wider whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {models.map(m => (
                  <tr key={m.id} className="hover:bg-surface/30 transition-colors">
                    <td className="px-4 py-3 font-medium text-foreground whitespace-nowrap">
                      {m.make} {m.model} {m.generation && <span className="text-text-tertiary">({m.generation})</span>}
                    </td>
                    <td className="px-4 py-3 text-text-secondary whitespace-nowrap">{[m.year_start, m.year_end].filter(Boolean).join("–")}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLE[m.status] || "bg-surface text-text-secondary"}`}>{m.status}</span>
                    </td>
                    <td className="px-4 py-3 text-text-secondary capitalize">{m.overall_confidence || "—"}</td>
                    <td className="px-4 py-3 text-text-secondary">{m.source_count}</td>
                    <td className="px-4 py-3">
                      <span className="text-text-secondary">{m.claim_count}</span>
                      {m.disputed_count > 0 && (
                        <span className="ml-2 text-xs font-semibold text-orange-600 inline-flex items-center gap-1">
                          <AlertTriangle className="w-3 h-3" />{m.disputed_count} disputed
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-xs text-text-tertiary whitespace-nowrap">{m.updated_at ? new Date(m.updated_at).toLocaleDateString() : "—"}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Link href={`/admin/models/${m.id}`} className="text-xs font-semibold text-accent hover:underline inline-flex items-center gap-1">
                          <BookOpen className="w-3 h-3" /> Review
                        </Link>
                        {m.status === "published" && (
                          <a href={`/research/models/${m.slug}`} target="_blank" rel="noreferrer" className="text-text-tertiary hover:text-foreground">
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      ) : (
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border flex items-center gap-2 text-text-secondary">
            <ListOrdered className="w-4 h-4" /><span className="text-xs font-semibold uppercase tracking-wider">Generation queue — collectibles first</span>
          </div>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-border">
              {queue.map(q => (
                <tr key={q.id} className="hover:bg-surface/30">
                  <td className="px-4 py-3 font-medium text-foreground">{q.make} {q.model} {q.generation && <span className="text-text-tertiary">({q.generation})</span>}</td>
                  <td className="px-4 py-3 text-text-secondary">priority {q.priority}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${q.status === "drafted" ? "bg-green-100 text-green-700" : "bg-surface text-text-secondary"}`}>
                      {q.status === "drafted" ? <span className="inline-flex items-center gap-1"><CheckCircle2 className="w-3 h-3" />drafted</span> : q.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
