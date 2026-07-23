"use client";

import { useState } from "react";
import Link from "next/link";
import { Loader2, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export function SubmitSaleForm() {
  const [f, setF] = useState({
    make: "", model: "", year: "", trim: "", salePrice: "", saleDate: "", venue: "",
    mileage: "", exteriorColor: "", vin: "", location: "", sourceUrl: "", notes: "", name: "", email: "",
  });
  const [consent, setConsent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const set = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }));
  const input = "w-full h-11 px-3 text-sm border border-border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent";
  const label = "block text-xs font-bold uppercase tracking-wider text-text-secondary mb-1.5";

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true); setError("");
    try {
      const res = await fetch("/api/sales/submit", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...f, consent }),
      });
      const d = await res.json();
      if (res.ok) setDone(true);
      else setError(d.error || "Something went wrong.");
    } catch { setError("Network error — try again."); }
    setBusy(false);
  }

  if (done) return (
    <div className="max-w-md mx-auto text-center py-16">
      <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: "#4b8b2e" }} />
      <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground mb-2">Thanks — got it.</h2>
      <p className="text-sm text-text-secondary mb-6">We review every submission before it appears in the data, so it stays trustworthy. Add another, or explore the guides.</p>
      <div className="flex gap-3 justify-center">
        <button onClick={() => { setDone(false); setConsent(false); setF({ make: "", model: "", year: "", trim: "", salePrice: "", saleDate: "", venue: "", mileage: "", exteriorColor: "", vin: "", location: "", sourceUrl: "", notes: "", name: "", email: "" }); }}
          className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors">Add another</button>
        <Link href="/value-guide" className="px-5 py-2.5 text-sm font-semibold text-foreground rounded-xl border border-border hover:bg-surface transition-colors inline-flex items-center gap-1.5">Value Guide <ArrowRight className="w-4 h-4" /></Link>
      </div>
    </div>
  );

  return (
    <form onSubmit={submit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="col-span-1"><label className={label}>Make *</label><input className={input} value={f.make} onChange={(e) => set("make", e.target.value)} placeholder="Porsche" required /></div>
        <div className="col-span-1"><label className={label}>Model *</label><input className={input} value={f.model} onChange={(e) => set("model", e.target.value)} placeholder="911" required /></div>
        <div className="col-span-1"><label className={label}>Year</label><input className={input} value={f.year} onChange={(e) => set("year", e.target.value)} placeholder="1973" inputMode="numeric" /></div>
        <div className="col-span-2 sm:col-span-2"><label className={label}>Trim / variant</label><input className={input} value={f.trim} onChange={(e) => set("trim", e.target.value)} placeholder="Carrera RS 2.7" /></div>
        <div className="col-span-1"><label className={label}>Sale price ($)</label><input className={input} value={f.salePrice} onChange={(e) => set("salePrice", e.target.value)} placeholder="1,250,000" inputMode="numeric" /></div>
        <div className="col-span-1"><label className={label}>Sale date</label><input type="date" className={input} value={f.saleDate} onChange={(e) => set("saleDate", e.target.value)} /></div>
        <div className="col-span-1 sm:col-span-2"><label className={label}>Venue</label><input className={input} value={f.venue} onChange={(e) => set("venue", e.target.value)} placeholder="RM Sotheby's, BaT, private sale…" /></div>
        <div className="col-span-1"><label className={label}>Mileage</label><input className={input} value={f.mileage} onChange={(e) => set("mileage", e.target.value)} placeholder="41,000" inputMode="numeric" /></div>
        <div className="col-span-1"><label className={label}>Color</label><input className={input} value={f.exteriorColor} onChange={(e) => set("exteriorColor", e.target.value)} placeholder="Grand Prix White" /></div>
        <div className="col-span-1"><label className={label}>VIN / chassis</label><input className={input} value={f.vin} onChange={(e) => set("vin", e.target.value)} placeholder="Optional" /></div>
        <div className="col-span-2 sm:col-span-3"><label className={label}>Proof / source link</label><input className={input} value={f.sourceUrl} onChange={(e) => set("sourceUrl", e.target.value)} placeholder="Link to the listing or result (helps us verify faster)" /></div>
        <div className="col-span-2 sm:col-span-3"><label className={label}>Notes</label><input className={input} value={f.notes} onChange={(e) => set("notes", e.target.value)} placeholder="Anything notable — condition, options, provenance" /></div>
        <div className="col-span-1"><label className={label}>Your name</label><input className={input} value={f.name} onChange={(e) => set("name", e.target.value)} /></div>
        <div className="col-span-1 sm:col-span-2"><label className={label}>Your email</label><input type="email" className={input} value={f.email} onChange={(e) => set("email", e.target.value)} placeholder="So we can follow up if needed" /></div>
      </div>

      <label className="flex items-start gap-2.5 mt-5 text-sm text-text-secondary cursor-pointer">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 w-4 h-4 accent-accent shrink-0" />
        <span>This is accurate to the best of my knowledge, and I agree to let Fully Sorted use the <strong className="text-foreground">factual sale data</strong> (price, date, vehicle, venue) in its market data.</span>
      </label>

      {error && <p className="text-sm mt-3" style={{ color: "#DC2626" }}>{error}</p>}

      <button type="submit" disabled={busy || !f.make || !f.model || !consent}
        className="mt-5 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors disabled:opacity-60">
        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShieldCheck className="w-4 h-4" />} Submit sale
      </button>
      <p className="text-[11px] text-text-tertiary mt-3">Reviewed before it appears in the data. We only ever publish the facts of a sale — never your personal details.</p>
    </form>
  );
}
