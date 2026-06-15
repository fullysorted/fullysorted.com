"use client";

import { useState } from "react";
import { Check, Clock, RefreshCw, Loader2, CheckCircle2 } from "lucide-react";

interface Pkg {
  id: number; tier: string; title: string | null; description: string | null;
  price: number; delivery_days: number | null; revisions: number | null; features: string[] | null;
}

export function OrderPanel({ gigSlug, packages }: { gigSlug: string; packages: Pkg[] }) {
  const [sel, setSel] = useState(0);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ buyerName: "", buyerEmail: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const pkg = packages[sel];

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true); setError("");
    try {
      const res = await fetch("/api/gigs/order", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ gigSlug, packageId: pkg?.id, ...form }),
      });
      const d = await res.json();
      if (res.ok) setDone(true);
      else setError(d.error || "Something went wrong.");
    } catch { setError("Network error — try again."); }
    setSubmitting(false);
  }

  if (packages.length === 0) {
    return (
      <div className="rounded-2xl bg-white p-5 text-sm" style={{ border: "1px solid rgba(0,0,0,0.07)", color: "#6b6b5e" }}>
        This provider hasn’t set pricing yet. Check back soon.
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white overflow-hidden sticky top-6" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
      {/* Tier tabs */}
      <div className="flex" style={{ borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        {packages.map((p, i) => (
          <button key={p.id} onClick={() => setSel(i)}
            className="flex-1 py-3 text-xs font-bold uppercase tracking-wider transition-colors"
            style={{ background: i === sel ? "rgba(232,114,42,0.08)" : "#fff", color: i === sel ? "#E8722A" : "#9a9a8a",
              borderBottom: i === sel ? "2px solid #E8722A" : "2px solid transparent" }}>
            {p.tier}
          </button>
        ))}
      </div>

      <div className="p-5">
        <div className="flex items-baseline justify-between mb-1">
          <p className="font-bold" style={{ color: "#1a1a18" }}>{pkg.title || pkg.tier}</p>
          <p className="text-2xl font-bold price-display" style={{ color: "#1a1a18" }}>${pkg.price.toLocaleString()}</p>
        </div>
        {pkg.description && <p className="text-sm mb-3" style={{ color: "#6b6b5e" }}>{pkg.description}</p>}
        <div className="flex items-center gap-4 text-xs mb-4" style={{ color: "#6b6b5e" }}>
          {pkg.delivery_days != null && <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {pkg.delivery_days}-day delivery</span>}
          {pkg.revisions != null && <span className="inline-flex items-center gap-1"><RefreshCw className="w-3.5 h-3.5" /> {pkg.revisions} revisions</span>}
        </div>
        {pkg.features && pkg.features.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {pkg.features.map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "#1a1a18" }}>
                <Check className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#6ab04c" }} /> {f}
              </li>
            ))}
          </ul>
        )}

        {done ? (
          <div className="rounded-xl p-4 text-center" style={{ background: "rgba(106,176,76,0.1)" }}>
            <CheckCircle2 className="w-7 h-7 mx-auto mb-2" style={{ color: "#6ab04c" }} />
            <p className="text-sm font-bold" style={{ color: "#1a1a18" }}>Request sent!</p>
            <p className="text-xs mt-1" style={{ color: "#6b6b5e" }}>The provider will reach out to arrange details and payment directly.</p>
          </div>
        ) : !open ? (
          <button onClick={() => setOpen(true)}
            className="w-full h-11 rounded-xl text-white text-sm font-bold transition-opacity hover:opacity-90" style={{ background: "#E8722A" }}>
            Request this gig (${pkg.price.toLocaleString()})
          </button>
        ) : (
          <form onSubmit={submit} className="space-y-2.5">
            <input required placeholder="Your name" value={form.buyerName} onChange={e => setForm({ ...form, buyerName: e.target.value })}
              className="w-full h-10 px-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200" style={{ borderColor: "rgba(0,0,0,0.12)" }} />
            <input required type="email" placeholder="Your email" value={form.buyerEmail} onChange={e => setForm({ ...form, buyerEmail: e.target.value })}
              className="w-full h-10 px-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200" style={{ borderColor: "rgba(0,0,0,0.12)" }} />
            <textarea rows={3} placeholder="Tell them about your car and what you need…" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-200 resize-none" style={{ borderColor: "rgba(0,0,0,0.12)" }} />
            {error && <p className="text-xs" style={{ color: "#b4451f" }}>{error}</p>}
            <button type="submit" disabled={submitting}
              className="w-full h-11 rounded-xl text-white text-sm font-bold inline-flex items-center justify-center gap-2 disabled:opacity-60" style={{ background: "#E8722A" }}>
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              {submitting ? "Sending…" : "Send request"}
            </button>
            <p className="text-[11px] text-center" style={{ color: "#9a9a8a" }}>
              No payment now — you’ll arrange payment with the provider directly.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
