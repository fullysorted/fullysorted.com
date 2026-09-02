"use client";

import { useState } from "react";
import { PenLine, Check, Mail, X } from "lucide-react";

/**
 * Owner contribution prompt for a model history page.
 *
 * Deliberately NOT a comment thread. It renders as a single quiet line until
 * clicked, so a page with no contributions looks finished rather than abandoned
 * — the failure mode of putting an empty comment box on an SEO page.
 *
 * Nothing submitted appears publicly without review.
 */
const SECTIONS = [
  { value: "production", label: "Production numbers" },
  { value: "specs", label: "Specs" },
  { value: "history", label: "History" },
  { value: "problems", label: "Common problems" },
  { value: "market", label: "Market & values" },
  { value: "general", label: "Something else" },
];

export function ContributeBox({ modelId, modelName }: { modelId: number; modelName: string }) {
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<"correction" | "story">("correction");
  const [f, setF] = useState({ section: "production", body: "", sourceUrl: "", name: "", email: "", credential: "" });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [mailto, setMailto] = useState<string | null>(null);

  const set = (k: keyof typeof f, v: string) => setF((p) => ({ ...p, [k]: v }));
  const inputCls =
    "w-full px-3 py-2 text-sm rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setError(""); setMailto(null);
    try {
      const res = await fetch("/api/models/contribute", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelId, modelName, kind, ...f }),
      });
      const d = await res.json().catch(() => ({}));
      if (res.ok) setDone(d.message || "Thank you.");
      else if (d?.undelivered && d?.mailto) { setMailto(d.mailto); setError(d.error); }
      else setError(d?.error || "Couldn't send that. Please try again.");
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-white p-5 flex items-start gap-3">
        <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#6ab04c" }} />
        <p className="text-sm text-text-secondary">{done}</p>
      </div>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-2xl border border-dashed border-stone-300 bg-white/60 px-5 py-4 text-left transition-colors hover:border-accent hover:bg-white group"
      >
        <span className="flex items-center gap-2.5">
          <PenLine className="w-4 h-4 shrink-0" style={{ color: "#1E6091" }} />
          <span className="text-sm font-semibold text-foreground">Owned one? Know something we don&apos;t?</span>
        </span>
        <span className="block mt-1 pl-[26px] text-xs text-text-secondary">
          Corrections with a source get the page updated and you credited. Every one gets read.
        </span>
      </button>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-white p-5 space-y-3.5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-bold text-foreground">Add to this page</h3>
          <p className="text-xs text-text-secondary mt-0.5">
            Nothing appears publicly until our team has checked it.
          </p>
        </div>
        <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="text-stone-400 hover:text-stone-600">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-2">
        {([["correction", "Correct something"], ["story", "Share a story"]] as const).map(([k, label]) => (
          <button
            key={k} type="button" onClick={() => setKind(k)}
            className="px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors"
            style={kind === k
              ? { background: "#1E6091", color: "#fff", borderColor: "#1E6091" }
              : { background: "#fff", color: "#6b6b5e", borderColor: "rgba(0,0,0,0.12)" }}
          >
            {label}
          </button>
        ))}
      </div>

      {kind === "correction" && (
        <select value={f.section} onChange={(e) => set("section", e.target.value)} className={inputCls}>
          {SECTIONS.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      )}

      <textarea
        required rows={4} value={f.body} onChange={(e) => set("body", e.target.value)}
        placeholder={kind === "correction"
          ? "What's wrong, and what should it say instead?"
          : "Tell us about your car: when you got it, what it's been through, what surprised you."}
        className={`${inputCls} resize-none`}
      />

      {kind === "correction" && (
        <div>
          <input
            required type="url" value={f.sourceUrl} onChange={(e) => set("sourceUrl", e.target.value)}
            placeholder="Source we can check: link, book, or document" className={inputCls}
          />
          <p className="text-xs text-text-tertiary mt-1">
            We cite everything on these pages, so a correction needs something behind it.
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 gap-2.5">
        <input value={f.name} onChange={(e) => set("name", e.target.value)} placeholder="Your name (for credit)" className={inputCls} />
        <input type="email" value={f.email} onChange={(e) => set("email", e.target.value)} placeholder="Email (if we need to ask)" className={inputCls} />
      </div>
      <input
        value={f.credential} onChange={(e) => set("credential", e.target.value)}
        placeholder="Optional: owned one 12 years, marque registrar, ex-factory…" className={inputCls}
      />

      {error && (
        <div className="rounded-lg px-3 py-2.5"
          style={{ background: mailto ? "rgba(176,141,63,0.10)" : "rgba(220,38,38,0.07)",
                   border: `1px solid ${mailto ? "rgba(176,141,63,0.28)" : "rgba(220,38,38,0.2)"}` }}>
          <p className="text-xs" style={{ color: mailto ? "#8a6d1f" : "#b91c1c" }}>{error}</p>
          {mailto && (
            <a href={mailto} className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: "#1E6091" }}>
              <Mail className="w-3.5 h-3.5" /> Send it as an email instead
            </a>
          )}
        </div>
      )}

      <button
        type="submit" disabled={busy}
        className="w-full h-10 rounded-lg text-sm font-bold text-white bg-accent hover:bg-accent-hover transition-colors disabled:opacity-60"
      >
        {busy ? "Sending…" : kind === "correction" ? "Submit correction" : "Send story"}
      </button>
    </form>
  );
}
