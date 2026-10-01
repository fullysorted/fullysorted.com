"use client";

import { useState } from "react";
import { Check, Mail, Plus } from "lucide-react";

/**
 * Open "send us a car" box for the model-history hub and make pages.
 *
 * The list is growing daily and readers know cars we have not covered. Anything
 * sent here lands in registry_submissions as kind 'new_car' (pending), so a car
 * request and a chassis number both reach the register review queue. A car
 * without a history is filed under unlisted/<slug>; approval only logs it.
 */
const RELATIONS = [
  { value: "owner", label: "I own it" },
  { value: "former_owner", label: "I used to own it" },
  { value: "dealer", label: "Dealer or auction house" },
  { value: "historian", label: "Historian or registrar" },
  { value: "other", label: "Just a fan" },
];

export function SendUsACar({ make }: { make?: string }) {
  const [open, setOpen] = useState(false);
  const [f, setF] = useState({ car: make ? `${make} ` : "", chassis: "", body: "", submitterRelation: "owner", submitterName: "", submitterEmail: "" });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [mailto, setMailto] = useState<string | null>(null);

  const set = (k: keyof typeof f, v: string) => setF((p) => ({ ...p, [k]: v }));
  const inputCls =
    "w-full px-3 py-2 text-sm rounded-lg border border-stone-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent/25 focus:border-accent";
  const labelCls = "block text-[11px] font-semibold tracking-[0.12em] uppercase mb-1";
  const labelStyle = { color: "#9a9a8a" };

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setError(""); setMailto(null);
    try {
      const res = await fetch("/api/register/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "new_car", ...f }),
      });
      const d = await res.json().catch(() => ({}));
      if (res.ok) setDone(d.message || "Thank you.");
      else if (d?.undelivered && d?.mailto) { setMailto(d.mailto); setError(d.error); }
      else setError(d?.error || "Could not send that. Please try again.");
    } catch {
      setError("Could not reach the server. Check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white p-5 sm:p-6 mb-8" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
      <p className="text-[15px] leading-relaxed" style={{ color: "#3d3d35" }}>
        We are building this list and adding cars every day. Know one that is missing, or have a chassis
        number for the register? Send it in. A person reads every one before anything goes up.
      </p>

      {done ? (
        <p className="mt-4 text-sm flex items-start gap-2" style={{ color: "#6b6b5e" }}>
          <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#6ab04c" }} /> {done}
        </p>
      ) : !open ? (
        <button type="button" onClick={() => setOpen(true)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold hover:opacity-70 transition-opacity"
          style={{ color: "#1E6091" }}>
          <Plus className="w-4 h-4" /> Send us a car or a chassis number
        </button>
      ) : (
        <form onSubmit={submit} className="mt-5 space-y-3.5 max-w-2xl">
          <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-2">
            <div>
              <label htmlFor="sc-car" className={labelCls} style={labelStyle}>The car</label>
              <input id="sc-car" required minLength={3} maxLength={200} className={inputCls}
                placeholder="1967 Ferrari 330 GTC" value={f.car} onChange={(e) => set("car", e.target.value)} />
            </div>
            <div>
              <label htmlFor="sc-chassis" className={labelCls} style={labelStyle}>Chassis or VIN (optional)</label>
              <input id="sc-chassis" maxLength={64} className={`${inputCls} font-mono`}
                value={f.chassis} onChange={(e) => set("chassis", e.target.value)} />
            </div>
          </div>
          <div>
            <label htmlFor="sc-body" className={labelCls} style={labelStyle}>Anything we should know (optional)</label>
            <textarea id="sc-body" rows={3} maxLength={2000} className={inputCls}
              placeholder="History, owners, where it has been shown, a link to a sale."
              value={f.body} onChange={(e) => set("body", e.target.value)} />
          </div>
          <div className="grid gap-2.5 grid-cols-1 sm:grid-cols-3">
            <div>
              <label htmlFor="sc-rel" className={labelCls} style={labelStyle}>Your connection</label>
              <select id="sc-rel" className={inputCls} value={f.submitterRelation} onChange={(e) => set("submitterRelation", e.target.value)}>
                {RELATIONS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="sc-name" className={labelCls} style={labelStyle}>Name (optional)</label>
              <input id="sc-name" maxLength={255} className={inputCls} value={f.submitterName} onChange={(e) => set("submitterName", e.target.value)} />
            </div>
            <div>
              <label htmlFor="sc-email" className={labelCls} style={labelStyle}>Email</label>
              <input id="sc-email" type="email" required maxLength={255} className={inputCls} value={f.submitterEmail} onChange={(e) => set("submitterEmail", e.target.value)} />
            </div>
          </div>
          <p className="text-xs" style={{ color: "#9a9a8a" }}>We never publish names or contact details.</p>
          {error && (
            <p className="text-sm" style={{ color: "#b4442c" }}>
              {error}{" "}
              {mailto && <a href={mailto} className="underline inline-flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> Send it by email instead</a>}
            </p>
          )}
          <button type="submit" disabled={busy}
            className="px-4 py-2 text-sm font-semibold rounded-lg text-white disabled:opacity-60"
            style={{ background: "#1E6091" }}>
            {busy ? "Sending" : "Send it"}
          </button>
        </form>
      )}
    </div>
  );
}
