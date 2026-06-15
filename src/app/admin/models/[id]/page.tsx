"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Loader2, ArrowLeft, Save, ShieldCheck, Globe, Undo2, Trash2,
  ExternalLink, AlertTriangle, Scale,
} from "lucide-react";

interface Model {
  id: number; slug: string; make: string; model: string; generation: string | null;
  status: string; overall_confidence: string | null; ai_model: string | null;
  production_notes: string | null; summary: string | null; history: string | null;
  market_notes: string | null; what_to_look_for: string | null;
  common_problems: string | null; value_trajectory: string | null; reviewer_notes: string | null;
}
interface Source {
  id: number; title: string; url: string | null; publisher: string | null;
  source_type: string | null; reliability: string | null;
}
interface Claim {
  id: number; section: string | null; claim_text: string; confidence: string | null;
  status: string | null; source_ids: number[] | null; conflict_note: string | null; reviewer_note: string | null;
}

const SECTIONS: { key: keyof Model; label: string }[] = [
  { key: "summary", label: "Summary" },
  { key: "history", label: "History" },
  { key: "common_problems", label: "Common Problems" },
  { key: "what_to_look_for", label: "What to Look For" },
  { key: "market_notes", label: "Market Notes" },
  { key: "value_trajectory", label: "Value Trajectory" },
  { key: "production_notes", label: "Production Notes" },
];

export default function ReviewModelPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [model, setModel] = useState<Model | null>(null);
  const [sources, setSources] = useState<Source[]>([]);
  const [claims, setClaims] = useState<Claim[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch(`/api/admin/models/${id}`);
    if (res.ok) {
      const d = await res.json();
      setModel(d.model); setSources(d.sources || []); setClaims(d.claims || []);
    }
    setLoading(false);
  }, [id]);
  useEffect(() => { load(); }, [load]);

  function setField(key: keyof Model, v: string) {
    setModel(m => (m ? { ...m, [key]: v } : m));
  }
  function setClaim(cid: number, patch: Partial<Claim>) {
    setClaims(cs => cs.map(c => (c.id === cid ? { ...c, ...patch } : c)));
  }

  async function save(extra: Record<string, unknown> = {}) {
    if (!model) return;
    setSaving(true); setMsg("");
    const fields = {
      summary: model.summary, history: model.history, market_notes: model.market_notes,
      what_to_look_for: model.what_to_look_for, common_problems: model.common_problems,
      value_trajectory: model.value_trajectory, production_notes: model.production_notes,
      overall_confidence: model.overall_confidence,
    };
    const claimUpdates = claims.map(c => ({ id: c.id, status: c.status, reviewerNote: c.reviewer_note }));
    const res = await fetch(`/api/admin/models/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fields, reviewerNotes: model.reviewer_notes, claimUpdates, ...extra }),
    });
    const d = await res.json();
    setSaving(false);
    if (res.ok) { setMsg("✓ Saved"); load(); }
    else setMsg(`✗ ${d.error}`);
  }

  async function remove() {
    if (!confirm("Delete this model page permanently?")) return;
    await fetch(`/api/admin/models/${id}`, { method: "DELETE" });
    router.push("/admin/models");
  }

  if (loading) return <div className="flex items-center justify-center py-20 gap-3 text-text-secondary"><Loader2 className="w-5 h-5 animate-spin text-accent" /> Loading…</div>;
  if (!model) return <div className="text-center py-20 text-text-secondary">Not found. <button onClick={() => router.push("/admin/models")} className="text-accent underline">Back</button></div>;

  const disputed = claims.filter(c => c.status === "disputed");

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <button onClick={() => router.push("/admin/models")} className="inline-flex items-center gap-1.5 text-sm text-text-secondary mb-2 hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> All models
          </button>
          <h1 className="text-2xl font-bold text-foreground">
            {model.make} {model.model} {model.generation && <span className="text-text-tertiary">({model.generation})</span>}
          </h1>
          <p className="text-xs text-text-tertiary mt-1">
            {model.slug} · drafted by {model.ai_model || "—"} · status <strong className="capitalize">{model.status}</strong>
          </p>
        </div>
        {model.status === "published" && (
          <a href={`/research/models/${model.slug}`} target="_blank" rel="noreferrer"
            className="text-sm font-semibold text-accent inline-flex items-center gap-1.5 hover:underline">
            View live <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      {/* Action bar */}
      <div className="sticky top-0 z-10 bg-surface/80 backdrop-blur border border-border rounded-xl p-3 flex flex-wrap items-center gap-2">
        <button onClick={() => save()} disabled={saving}
          className="h-9 px-4 text-sm font-semibold rounded-lg border border-border bg-white hover:bg-surface inline-flex items-center gap-2 disabled:opacity-60">
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />} Save edits
        </button>
        <button onClick={() => save({ status: "reviewed" })} disabled={saving}
          className="h-9 px-4 text-sm font-semibold rounded-lg bg-blue-600 text-white hover:opacity-90 inline-flex items-center gap-2 disabled:opacity-60">
          <ShieldCheck className="w-4 h-4" /> Mark reviewed
        </button>
        <button onClick={() => { if (confirm("Publish this page live to the public site?")) save({ status: "published" }); }} disabled={saving}
          className="h-9 px-4 text-sm font-semibold rounded-lg text-white hover:opacity-90 inline-flex items-center gap-2 disabled:opacity-60"
          style={{ backgroundColor: "#6ab04c" }}>
          <Globe className="w-4 h-4" /> Publish
        </button>
        {model.status !== "draft" && (
          <button onClick={() => save({ status: "draft" })} disabled={saving}
            className="h-9 px-4 text-sm font-semibold rounded-lg border border-border bg-white hover:bg-surface inline-flex items-center gap-2">
            <Undo2 className="w-4 h-4" /> Back to draft
          </button>
        )}
        <div className="flex-1" />
        <button onClick={remove} className="h-9 px-3 text-sm font-semibold rounded-lg border border-red-200 text-red-600 hover:bg-red-50 inline-flex items-center gap-2">
          <Trash2 className="w-4 h-4" /> Delete
        </button>
        {msg && <span className="text-xs text-text-secondary w-full sm:w-auto">{msg}</span>}
      </div>

      {/* Disputed claims first — the truth-seeking review */}
      {disputed.length > 0 && (
        <div className="rounded-xl border border-orange-200 bg-orange-50 p-4">
          <div className="flex items-center gap-2 mb-3 text-orange-800">
            <Scale className="w-4 h-4" /><h2 className="text-sm font-bold uppercase tracking-wide">Disputed claims — resolve before publishing</h2>
          </div>
          <div className="space-y-3">
            {disputed.map(c => (
              <div key={c.id} className="bg-white rounded-lg border border-orange-200 p-3">
                <p className="text-sm font-semibold text-foreground">{c.claim_text}</p>
                {c.conflict_note && <p className="text-xs text-text-secondary mt-1">{c.conflict_note}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Editable sections */}
      {SECTIONS.map(({ key, label }) => (
        <div key={String(key)}>
          <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">{label}</label>
          <textarea
            value={(model[key] as string) || ""}
            onChange={e => setField(key, e.target.value)}
            rows={key === "summary" || key === "history" ? 8 : 4}
            className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30 font-mono leading-relaxed"
          />
        </div>
      ))}

      {/* Confidence */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Overall confidence</label>
        <select value={model.overall_confidence || "medium"} onChange={e => setField("overall_confidence", e.target.value)}
          className="h-9 px-3 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30">
          <option value="high">High — well documented</option>
          <option value="medium">Medium — reasonably documented</option>
          <option value="low">Low — thin / uncertain</option>
        </select>
      </div>

      {/* All claims */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-3">Claims ({claims.length})</h2>
        <div className="space-y-2">
          {claims.map(c => (
            <div key={c.id} className="bg-white border border-border rounded-lg p-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-sm text-foreground">{c.claim_text}</p>
                  <p className="text-xs text-text-tertiary mt-1">
                    {c.section} · confidence {c.confidence} · sources {(c.source_ids || []).map(sid => {
                      const idx = sources.findIndex(s => s.id === sid);
                      return idx >= 0 ? `[${idx + 1}]` : "";
                    }).join(" ")}
                  </p>
                  {c.conflict_note && (
                    <p className="text-xs text-orange-700 mt-1 flex items-start gap-1">
                      <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0" /> {c.conflict_note}
                    </p>
                  )}
                </div>
                <select value={c.status || "unverified"} onChange={e => setClaim(c.id, { status: e.target.value })}
                  className="h-8 px-2 text-xs border border-border rounded-lg shrink-0">
                  <option value="verified">verified</option>
                  <option value="unverified">unverified</option>
                  <option value="disputed">disputed</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-3">Sources ({sources.length})</h2>
        <ol className="space-y-1.5 list-decimal list-inside">
          {sources.map(s => (
            <li key={s.id} className="text-sm text-text-secondary">
              {s.url ? <a href={s.url} target="_blank" rel="noreferrer" className="font-medium text-foreground hover:underline">{s.title}</a> : <span className="font-medium text-foreground">{s.title}</span>}
              {s.publisher && ` — ${s.publisher}`}
              {s.source_type && <span className="text-text-tertiary"> · {s.source_type} · {s.reliability}</span>}
            </li>
          ))}
        </ol>
      </div>

      {/* Reviewer notes */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Reviewer notes (internal)</label>
        <textarea value={model.reviewer_notes || ""} onChange={e => setField("reviewer_notes", e.target.value)} rows={3}
          className="w-full px-3 py-2.5 text-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/30" />
      </div>
    </div>
  );
}
