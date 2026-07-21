"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import {
  ArrowLeft, ArrowRight, Check, Loader2, Sparkles, Info, PartyPopper,
  User, Tag, DollarSign, ClipboardCheck, Lightbulb,
} from "lucide-react";

const CATEGORIES = [
  "Detailing & Paint Correction", "Mechanical & Repair", "Restoration",
  "Transport & Shipping", "Pre-Purchase Inspection", "Body Work & Paint",
  "Storage", "Automotive Photography", "Other",
];

type Tier = "basic" | "standard" | "premium";
interface Pkg { title: string; price: string; deliveryDays: string; revisions: string; features: string }

const EMPTY_PKG: Record<Tier, Pkg> = {
  basic: { title: "Basic", price: "", deliveryDays: "", revisions: "1", features: "" },
  standard: { title: "Standard", price: "", deliveryDays: "", revisions: "2", features: "" },
  premium: { title: "Premium", price: "", deliveryDays: "", revisions: "3", features: "" },
};

const STEPS = [
  { id: "welcome", label: "Welcome", icon: Lightbulb },
  { id: "about", label: "About you", icon: User },
  { id: "gig", label: "Your gig", icon: Tag },
  { id: "pricing", label: "Pricing", icon: DollarSign },
  { id: "review", label: "Review", icon: ClipboardCheck },
];

function Help({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2 text-xs rounded-lg p-3 mt-2" style={{ background: "rgba(41,171,226,0.07)", color: "#3a6b80" }}>
      <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
      <span>{children}</span>
    </div>
  );
}

const input = "w-full px-3 py-2.5 bg-white border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent";

export default function FreelancerWizard() {
  const { userId } = useAuth();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [aiLoading, setAiLoading] = useState(false);

  const [f, setF] = useState({
    ownerName: "", email: "", phone: "", headline: "", category: "",
    serviceArea: "", skills: "", bio: "", gigTitle: "", gigDescription: "",
  });
  const [pkgs, setPkgs] = useState<Record<Tier, Pkg>>(EMPTY_PKG);
  const set = (k: string, v: string) => setF((p) => ({ ...p, [k]: v }));
  const setPkg = (tier: Tier, k: keyof Pkg, v: string) => setPkgs((p) => ({ ...p, [tier]: { ...p[tier], [k]: v } }));

  function canAdvance(): boolean {
    if (step === 1) return !!(f.ownerName && f.email && f.category && f.bio);
    if (step === 2) return !!(f.gigTitle && f.gigDescription);
    if (step === 3) return !!pkgs.basic.price;
    return true;
  }

  async function runAi() {
    setAiLoading(true); setError("");
    try {
      const res = await fetch("/api/ai/gig-assist", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service: f.headline || f.skills || f.category, category: f.category, experience: f.bio, area: f.serviceArea }),
      });
      const d = await res.json();
      if (!res.ok) { setError(d.error || "Couldn’t generate — fill it in yourself and keep going."); }
      else {
        if (d.title) set("gigTitle", d.title);
        if (d.description) set("gigDescription", d.description);
        if (Array.isArray(d.packageSuggestions)) {
          setPkgs((prev) => {
            const next = { ...prev };
            for (const s of d.packageSuggestions) {
              const t = s.tier as Tier;
              if (next[t]) next[t] = {
                title: s.title || next[t].title,
                price: s.suggestedPrice ? String(s.suggestedPrice) : next[t].price,
                deliveryDays: s.deliveryDays ? String(s.deliveryDays) : next[t].deliveryDays,
                revisions: next[t].revisions,
                features: Array.isArray(s.features) ? s.features.join("\n") : next[t].features,
              };
            }
            return next;
          });
        }
      }
    } catch { setError("AI is unavailable right now — no problem, write it yourself."); }
    setAiLoading(false);
  }

  async function submit() {
    setSubmitting(true); setError("");
    const packages = (Object.keys(pkgs) as Tier[]).filter(t => pkgs[t].price).map((t) => ({
      tier: t, title: pkgs[t].title, price: parseInt(pkgs[t].price) || 0,
      deliveryDays: parseInt(pkgs[t].deliveryDays) || null, revisions: parseInt(pkgs[t].revisions) || null,
      features: pkgs[t].features.split("\n").map(s => s.trim()).filter(Boolean),
    }));
    try {
      const res = await fetch("/api/freelancers", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ownerName: f.ownerName, email: f.email, phone: f.phone, headline: f.headline,
          serviceArea: f.serviceArea, location: f.serviceArea, category: f.category,
          skills: f.skills.split(",").map(s => s.trim()).filter(Boolean), bio: f.bio,
          clerkUserId: userId || null,
          gig: { title: f.gigTitle, description: f.gigDescription, category: f.category, packages },
        }),
      });
      const d = await res.json();
      if (res.ok) setDone(true);
      else setError(d.error || "Something went wrong. Please try again.");
    } catch { setError("Failed to submit. Check your connection and try again."); }
    setSubmitting(false);
  }

  if (done) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <PartyPopper className="w-16 h-16 mx-auto mb-6" style={{ color: "#B08D3F" }} />
        <h1 className="font-display font-semibold tracking-tight text-3xl text-foreground mb-3">You’re in — nice work.</h1>
        <p className="text-text-secondary mb-2">Your profile and first gig are saved as a draft.</p>
        <p className="text-text-secondary mb-8">We review every applicant personally, usually within 3–5 business days. Meanwhile, you can polish everything in your dashboard.</p>
        <div className="flex gap-3 justify-center">
          <Link href="/dashboard/freelancer" className="px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-colors">
            Go to my dashboard
          </Link>
          <Link href="/services" className="px-6 py-3 bg-surface text-foreground font-medium rounded-xl">View directory</Link>
        </div>
      </div>
    );
  }

  const StepIcon = STEPS[step].icon;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/services/apply" className="inline-flex items-center gap-1.5 text-sm text-text-secondary mb-6 hover:text-foreground">
        <ArrowLeft className="w-4 h-4" /> Business or freelancer?
      </Link>

      {/* Progress */}
      <div className="flex items-center justify-between mb-8">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          const active = i === step, complete = i < step;
          return (
            <div key={s.id} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center gap-1">
                <div className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: complete ? "#6ab04c" : active ? "#1E6091" : "rgba(0,0,0,0.06)", color: complete || active ? "#fff" : "#9a9a8a" }}>
                  {complete ? <Check className="w-4 h-4" /> : <Icon className="w-4 h-4" />}
                </div>
                <span className="text-[10px] font-semibold hidden sm:block" style={{ color: active ? "#1a1a18" : "#9a9a8a" }}>{s.label}</span>
              </div>
              {i < STEPS.length - 1 && <div className="flex-1 h-0.5 mx-2" style={{ background: complete ? "#6ab04c" : "rgba(0,0,0,0.08)" }} />}
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl border border-border p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-1">
          <StepIcon className="w-5 h-5 text-accent" />
          <h1 className="font-display font-semibold tracking-tight text-2xl text-foreground">
            {step === 0 && "Welcome — let’s set you up"}
            {step === 1 && "Tell us about you"}
            {step === 2 && "Create your first gig"}
            {step === 3 && "Set your prices"}
            {step === 4 && "Review & submit"}
          </h1>
        </div>

        {/* STEP 0 — Welcome */}
        {step === 0 && (
          <div className="mt-4 space-y-4 text-text-secondary">
            <p>Fully Sorted lets you offer your collector-car services as simple, fixed-price <strong className="text-foreground">gigs</strong> — like Fiverr, but for people who love these cars. Buyers see exactly what they get and what it costs.</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { n: "1", t: "Tell us about you", d: "Two minutes. Name, what you do, where." },
                { n: "2", t: "Build one gig", d: "We’ll help you write it — even draft it for you." },
                { n: "3", t: "Set prices & submit", d: "Three simple tiers. We review, then you’re live." },
              ].map(x => (
                <div key={x.n} className="rounded-xl border border-border p-4">
                  <div className="w-7 h-7 rounded-full bg-accent-light text-accent font-bold text-sm flex items-center justify-center mb-2">{x.n}</div>
                  <p className="font-semibold text-foreground text-sm">{x.t}</p>
                  <p className="text-xs mt-1">{x.d}</p>
                </div>
              ))}
            </div>
            <Help>It’s free for founding providers. Payments through the platform are coming soon; for now you’ll connect with buyers directly. You can edit anything later, so don’t overthink it.</Help>
          </div>
        )}

        {/* STEP 1 — About you */}
        {step === 1 && (
          <div className="mt-5 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Your name *</label>
                <input className={input} value={f.ownerName} onChange={e => set("ownerName", e.target.value)} placeholder="Alex Rivera" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                <input className={input} type="email" value={f.email} onChange={e => set("email", e.target.value)} placeholder="you@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                <input className={input} value={f.phone} onChange={e => set("phone", e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Service area</label>
                <input className={input} value={f.serviceArea} onChange={e => set("serviceArea", e.target.value)} placeholder="San Diego County" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">One-line headline</label>
              <input className={input} value={f.headline} onChange={e => set("headline", e.target.value)} placeholder="Mobile detailer — air-cooled Porsche specialist" />
              <Help>This is the first thing buyers read. Say what you do and who you’re best for. You can let our AI sharpen it on the next step.</Help>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Primary category *</label>
                <select className={input} value={f.category} onChange={e => set("category", e.target.value)}>
                  <option value="">Choose one…</option>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Skills / specialties</label>
                <input className={input} value={f.skills} onChange={e => set("skills", e.target.value)} placeholder="ceramic coating, PPI, paint correction" />
                <p className="text-xs text-text-secondary mt-1">Separate with commas.</p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Short bio *</label>
              <textarea className={input + " resize-none"} rows={3} value={f.bio} onChange={e => set("bio", e.target.value)} placeholder="15 years detailing show cars; obsessive about soft paint and original finishes." />
              <Help>A few honest sentences about your experience. This builds trust — and our AI uses it to help draft your gig.</Help>
            </div>
          </div>
        )}

        {/* STEP 2 — Gig */}
        {step === 2 && (
          <div className="mt-5 space-y-5">
            <button onClick={runAi} disabled={aiLoading}
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg text-white bg-accent hover:bg-accent-hover transition-colors disabled:opacity-60">
              {aiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" style={{ color: "#E9D8A6" }} />}
              {aiLoading ? "Drafting for you…" : "Draft my gig with AI"}
            </button>
            <p className="text-xs text-text-secondary -mt-2">Uses what you entered to draft a title, description, and starter prices. You edit everything after.</p>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Gig title *</label>
              <input className={input} value={f.gigTitle} onChange={e => set("gigTitle", e.target.value)} placeholder="I will perform a concours-level pre-purchase inspection" />
              <Help>Start with “I will…”. Be specific about the outcome the buyer gets.</Help>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Describe the gig *</label>
              <textarea className={input + " resize-none"} rows={6} value={f.gigDescription} onChange={e => set("gigDescription", e.target.value)} placeholder="What’s included, how it works, what the buyer walks away with…" />
            </div>
          </div>
        )}

        {/* STEP 3 — Pricing */}
        {step === 3 && (
          <div className="mt-5">
            <Help>Three tiers let buyers self-select. <strong>Basic</strong> is your entry offer (required), <strong>Standard</strong> is your most popular, <strong>Premium</strong> is the works. Put one feature per line. Price in whole US dollars.</Help>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {(["basic", "standard", "premium"] as Tier[]).map((t) => (
                <div key={t} className="rounded-xl border border-border p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-accent">{t}</span>
                    {t === "basic" && <span className="text-[10px] text-text-secondary">required</span>}
                  </div>
                  <input className={input} value={pkgs[t].title} onChange={e => setPkg(t, "title", e.target.value)} placeholder="Package name" />
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-[11px] text-text-secondary mb-1">Price $</label>
                      <input className={input} inputMode="numeric" value={pkgs[t].price} onChange={e => setPkg(t, "price", e.target.value.replace(/[^0-9]/g, ""))} placeholder="350" />
                    </div>
                    <div className="w-20">
                      <label className="block text-[11px] text-text-secondary mb-1">Days</label>
                      <input className={input} inputMode="numeric" value={pkgs[t].deliveryDays} onChange={e => setPkg(t, "deliveryDays", e.target.value.replace(/[^0-9]/g, ""))} placeholder="3" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] text-text-secondary mb-1">What’s included (one per line)</label>
                    <textarea className={input + " resize-none text-sm"} rows={4} value={pkgs[t].features} onChange={e => setPkg(t, "features", e.target.value)} placeholder={"On-site visit\nWritten report\nPhotos"} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4 — Review */}
        {step === 4 && (
          <div className="mt-5 space-y-4 text-sm">
            <div className="rounded-xl border border-border p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">You</p>
              <p className="text-foreground font-semibold">{f.ownerName} · {f.category}</p>
              <p className="text-text-secondary">{f.headline}</p>
              <p className="text-text-secondary mt-1">{f.serviceArea} · {f.email}</p>
            </div>
            <div className="rounded-xl border border-border p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-2">Your gig</p>
              <p className="text-foreground font-semibold">{f.gigTitle}</p>
              <p className="text-text-secondary mt-1 whitespace-pre-wrap">{f.gigDescription}</p>
              <div className="grid grid-cols-3 gap-2 mt-3">
                {(["basic", "standard", "premium"] as Tier[]).filter(t => pkgs[t].price).map(t => (
                  <div key={t} className="rounded-lg bg-surface p-2 text-center">
                    <p className="text-[10px] uppercase font-bold text-accent">{t}</p>
                    <p className="font-bold text-foreground">${pkgs[t].price}</p>
                    {pkgs[t].deliveryDays && <p className="text-[11px] text-text-secondary">{pkgs[t].deliveryDays} days</p>}
                  </div>
                ))}
              </div>
            </div>
            <Help>Submitting saves everything as a <strong>draft</strong> and puts you in our review queue. Nothing goes public until we review and you publish from your dashboard.</Help>
          </div>
        )}

        {error && <div className="mt-5 bg-red-50 border border-red-200 text-red-700 rounded-lg p-3 text-sm">{error}</div>}

        {/* Nav */}
        <div className="flex items-center justify-between mt-8 pt-5 border-t border-border">
          <button onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-secondary disabled:opacity-40 hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
          {step < STEPS.length - 1 ? (
            <button onClick={() => canAdvance() && setStep(s => s + 1)} disabled={!canAdvance()}
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-lg text-white bg-accent hover:bg-accent-hover transition-colors disabled:opacity-40">
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button onClick={submit} disabled={submitting}
              className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-lg text-white disabled:opacity-60" style={{ background: "#6ab04c" }}>
              {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
              {submitting ? "Submitting…" : "Submit application"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
