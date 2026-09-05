"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";

/**
 * Submission form for the Chassis Register.
 *
 * Three kinds: add a record, correct a record, "I own this car". Everything
 * goes to /api/register/submit as a pending row and reaches the public
 * register only after a person approves it, at which point it is rendered as
 * an owner-reported event and stays labelled that way forever.
 *
 * Names and email addresses are stored for follow-up and are never rendered.
 */
const KINDS = [
  { value: "event", label: "Add a record" },
  { value: "correction", label: "Correct a record" },
  { value: "ownership", label: "I own this car" },
] as const;

const RELATIONS = [
  { value: "owner", label: "Current owner" },
  { value: "former_owner", label: "Former owner" },
  { value: "dealer", label: "Dealer or auction house" },
  { value: "historian", label: "Historian or registrar" },
  { value: "other", label: "Other" },
] as const;

type Kind = (typeof KINDS)[number]["value"];

export function RegisterSubmitForm({
  modelSlug,
  chassis,
  compact = false,
}: {
  modelSlug: string;
  /** Prefilled on a chassis page. Left empty on a model register. */
  chassis?: string | null;
  compact?: boolean;
}) {
  const prefilled = !!chassis;
  const [f, setF] = useState({
    kind: "event" as Kind,
    chassis: chassis ?? "",
    vin: "",
    eventDate: "",
    body: "",
    sourceUrl: "",
    submitterRelation: "owner",
    submitterName: "",
    submitterEmail: "",
  });
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
        body: JSON.stringify({ modelSlug, ...f, chassis: prefilled ? chassis : f.chassis }),
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

  if (done) {
    return (
      <div className="rounded-2xl bg-white p-5 flex items-start gap-3" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
        <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#6ab04c" }} />
        <p className="text-sm" style={{ color: "#6b6b5e" }}>{done}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl bg-white p-5 space-y-3.5" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
      <div>
        <h3 className="text-sm font-bold" style={{ color: "#1a1a18" }}>
          {prefilled ? `Add to chassis ${chassis}` : "Send us a record"}
        </h3>
        <p className="text-xs mt-0.5" style={{ color: "#6b6b5e" }}>
          Nothing you send is published until a person has checked it. We never publish names or contact details.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {KINDS.map((k) => (
          <button
            key={k.value} type="button" onClick={() => set("kind", k.value)}
            className="px-3 py-1.5 text-xs font-semibold rounded-full border transition-colors"
            style={f.kind === k.value
              ? { background: "#1E6091", color: "#fff", borderColor: "#1E6091" }
              : { background: "#fff", color: "#6b6b5e", borderColor: "rgba(0,0,0,0.12)" }}
          >
            {k.label}
          </button>
        ))}
      </div>

      <div className={`grid gap-2.5 ${compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2"}`}>
        <div>
          <label className={labelCls} style={labelStyle} htmlFor="rs-chassis">Chassis</label>
          <input
            id="rs-chassis" required={!prefilled} disabled={prefilled}
            value={prefilled ? chassis ?? "" : f.chassis} onChange={(e) => set("chassis", e.target.value)}
            placeholder="84028" className={`${inputCls} font-mono disabled:opacity-60`}
          />
        </div>
        <div>
          <label className={labelCls} style={labelStyle} htmlFor="rs-vin">VIN (optional)</label>
          <input id="rs-vin" value={f.vin} onChange={(e) => set("vin", e.target.value)} placeholder="ZFFGJ34B000084028" className={`${inputCls} font-mono`} />
        </div>
      </div>

      <div>
        <label className={labelCls} style={labelStyle} htmlFor="rs-body">
          {f.kind === "correction" ? "What is wrong, and what should it say" : f.kind === "ownership" ? "What you can tell us about the car" : "What happened, where, and when"}
        </label>
        <textarea
          id="rs-body" required rows={compact ? 3 : 5} minLength={20} maxLength={2000}
          value={f.body} onChange={(e) => set("body", e.target.value)}
          placeholder="Facts only: dates, venues, mileage, specification. Please do not include anyone's name."
          className={`${inputCls} resize-none`}
        />
        <p className="text-xs mt-1" style={{ color: "#9a9a8a" }}>20 to 2,000 characters. {f.body.length > 0 ? `${f.body.length} so far.` : ""}</p>
      </div>

      <div className={`grid gap-2.5 ${compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2"}`}>
        <div>
          <label className={labelCls} style={labelStyle} htmlFor="rs-date">Date (optional)</label>
          <input id="rs-date" value={f.eventDate} onChange={(e) => set("eventDate", e.target.value)} placeholder="YYYY-MM-DD" className={`${inputCls} font-mono`} />
        </div>
        <div>
          <label className={labelCls} style={labelStyle} htmlFor="rs-source">Source link (optional)</label>
          <input id="rs-source" type="url" value={f.sourceUrl} onChange={(e) => set("sourceUrl", e.target.value)} placeholder="https://" className={inputCls} />
        </div>
      </div>

      <div>
        <label className={labelCls} style={labelStyle} htmlFor="rs-relation">Your connection to the car</label>
        <select id="rs-relation" value={f.submitterRelation} onChange={(e) => set("submitterRelation", e.target.value)} className={inputCls}>
          {RELATIONS.map((r) => <option key={r.value} value={r.value}>{r.label}</option>)}
        </select>
      </div>

      <div className={`grid gap-2.5 ${compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2"}`}>
        <div>
          <label className={labelCls} style={labelStyle} htmlFor="rs-name">Your name (optional)</label>
          <input id="rs-name" value={f.submitterName} onChange={(e) => set("submitterName", e.target.value)} className={inputCls} />
        </div>
        <div>
          <label className={labelCls} style={labelStyle} htmlFor="rs-email">Email (we may reply)</label>
          <input id="rs-email" required type="email" value={f.submitterEmail} onChange={(e) => set("submitterEmail", e.target.value)} className={inputCls} />
        </div>
      </div>

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
        {busy ? "Sending..." : "Send for review"}
      </button>
    </form>
  );
}
