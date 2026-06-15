"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import {
  Loader2, CheckCircle2, Circle, DollarSign, Lock, Tag, Eye, EyeOff,
  Plus, ArrowRight, Sparkles, Wallet, Inbox, Trash2,
} from "lucide-react";

interface Pkg { id: number; tier: string; title: string | null; price: number; deliveryDays: number | null; features: string[] | null }
interface Gig { id: number; slug: string; title: string; description: string | null; status: string; packages: Pkg[] }
interface Provider { id: number; ownerName: string; headline: string | null; status: string; avatarUrl: string | null; category: string }

const STATUS_BADGE: Record<string, string> = {
  draft: "bg-orange-100 text-orange-700", active: "bg-green-100 text-green-700",
  paused: "bg-stone-200 text-stone-600", pending: "bg-blue-100 text-blue-700",
};

export default function FreelancerDashboard() {
  const [provider, setProvider] = useState<Provider | null>(null);
  const [gigs, setGigs] = useState<Gig[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<number | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/freelancers/me");
      const d = await res.json();
      setProvider(d.provider); setGigs(d.gigs || []);
    } catch { /* graceful */ }
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function setGigStatus(gig: Gig, status: string) {
    setBusy(gig.id);
    await fetch(`/api/gigs/${gig.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ status }) });
    await load(); setBusy(null);
  }
  async function removeGig(gig: Gig) {
    if (!confirm(`Delete “${gig.title}”?`)) return;
    setBusy(gig.id);
    await fetch(`/api/gigs/${gig.id}`, { method: "DELETE" });
    await load(); setBusy(null);
  }

  const hasGig = gigs.length > 0;
  const hasLiveGig = gigs.some(g => g.status === "active");
  const approved = provider?.status === "active";
  const checklist = [
    { done: !!provider, label: "Create your freelancer profile", href: "/services/apply/freelancer" },
    { done: hasGig, label: "Build your first gig", href: "/services/apply/freelancer" },
    { done: !!provider?.avatarUrl, label: "Add a profile photo", href: "#profile" },
    { done: approved, label: "Get approved by the Fully Sorted team", href: "#" },
    { done: hasLiveGig, label: "Publish a gig so buyers can find you", href: "#gigs" },
  ];
  const completed = checklist.filter(c => c.done).length;

  if (loading) {
    return <div className="flex items-center justify-center py-24 gap-3 text-text-secondary"><Loader2 className="w-5 h-5 animate-spin text-accent" /> Loading your dashboard…</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            {provider ? `Welcome back, ${provider.ownerName.split(" ")[0]}` : "Your freelancer dashboard"}
          </h1>
          <p className="text-sm text-text-secondary mt-0.5">
            {provider ? (provider.headline || provider.category) : "Set up your profile to start getting found by collectors."}
          </p>
        </div>
        {provider && (
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${STATUS_BADGE[provider.status] || "bg-surface text-text-secondary"}`}>
            {provider.status === "active" ? "Approved & live" : provider.status === "pending" ? "In review" : provider.status}
          </span>
        )}
      </div>

      {/* No profile yet → onboarding CTA */}
      {!provider && (
        <div className="rounded-2xl border-2 border-accent bg-white p-8 text-center">
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
          <h2 className="text-xl font-bold text-foreground mb-2">Let’s get you set up</h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto mb-5">
            Our guided setup walks you through everything — we’ll even draft your gig for you. Takes about five minutes.
          </p>
          <Link href="/services/apply/freelancer" className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl">
            Start guided setup <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Getting started checklist */}
      <div className="rounded-2xl border border-border bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-foreground">Getting started</h2>
          <span className="text-sm text-text-secondary">{completed}/{checklist.length} done</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-surface mb-5 overflow-hidden">
          <div className="h-full rounded-full transition-all" style={{ width: `${(completed / checklist.length) * 100}%`, background: "#6ab04c" }} />
        </div>
        <ul className="space-y-2.5">
          {checklist.map((c) => (
            <li key={c.label} className="flex items-center gap-3">
              {c.done ? <CheckCircle2 className="w-5 h-5 text-green shrink-0" /> : <Circle className="w-5 h-5 text-stone-300 shrink-0" />}
              <span className={`text-sm ${c.done ? "text-text-secondary line-through" : "text-foreground"}`}>{c.label}</span>
              {!c.done && c.href !== "#" && (
                <Link href={c.href} className="text-xs font-semibold text-accent ml-auto hover:underline">Do it →</Link>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Earnings — scaffolding, payments disabled */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-2 text-text-secondary mb-1"><Wallet className="w-4 h-4" /><span className="text-xs font-semibold uppercase tracking-wider">Earnings</span></div>
          <p className="text-2xl font-bold text-foreground price-display">$0.00</p>
          <p className="text-xs text-text-tertiary mt-1">Lifetime, paid out</p>
        </div>
        <div className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-2 text-text-secondary mb-1"><DollarSign className="w-4 h-4" /><span className="text-xs font-semibold uppercase tracking-wider">Pending</span></div>
          <p className="text-2xl font-bold text-foreground price-display">$0.00</p>
          <p className="text-xs text-text-tertiary mt-1">In-progress orders</p>
        </div>
        <div className="rounded-2xl border border-border bg-white p-5">
          <div className="flex items-center gap-2 text-text-secondary mb-1"><Inbox className="w-4 h-4" /><span className="text-xs font-semibold uppercase tracking-wider">Orders</span></div>
          <p className="text-2xl font-bold text-foreground">0</p>
          <p className="text-xs text-text-tertiary mt-1">All time</p>
        </div>
      </div>
      <div className="rounded-xl p-4 flex items-start gap-3" style={{ background: "rgba(0,0,0,0.03)" }}>
        <Lock className="w-4 h-4 text-text-secondary mt-0.5 shrink-0" />
        <p className="text-xs text-text-secondary">
          <strong className="text-foreground">Payments are coming soon.</strong> We’re putting the right legal and tax pieces in place
          (independent-contractor terms, 1099 handling, secure payouts) before turning on in-platform payments. For now, connect with
          buyers directly — your earnings tracker switches on automatically once payouts go live.
        </p>
      </div>

      {/* Gigs */}
      <div id="gigs" className="rounded-2xl border border-border bg-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-foreground flex items-center gap-2"><Tag className="w-4 h-4 text-accent" /> Your gigs</h2>
          <Link href="/services/apply/freelancer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline">
            <Plus className="w-4 h-4" /> New gig
          </Link>
        </div>
        {gigs.length === 0 ? (
          <p className="text-sm text-text-secondary py-6 text-center">No gigs yet. Build your first one — we’ll help you write it.</p>
        ) : (
          <div className="space-y-3">
            {gigs.map((g) => {
              const prices = g.packages.map(p => p.price).filter(Boolean);
              const from = prices.length ? Math.min(...prices) : null;
              return (
                <div key={g.id} className="rounded-xl border border-border p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${STATUS_BADGE[g.status]}`}>{g.status}</span>
                        {from != null && <span className="text-xs text-text-secondary">from <strong className="text-foreground">${from}</strong></span>}
                      </div>
                      <p className="font-semibold text-foreground mt-1.5 truncate">{g.title}</p>
                      {g.description && <p className="text-xs text-text-secondary mt-1 line-clamp-2">{g.description}</p>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {g.status === "active" ? (
                        <button onClick={() => setGigStatus(g, "paused")} disabled={busy === g.id}
                          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg border border-border hover:bg-surface">
                          <EyeOff className="w-3.5 h-3.5" /> Pause
                        </button>
                      ) : (
                        <button onClick={() => setGigStatus(g, "active")} disabled={busy === g.id || provider?.status !== "active"}
                          title={provider?.status !== "active" ? "You can publish once your profile is approved" : ""}
                          className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg text-white disabled:opacity-50" style={{ background: "#6ab04c" }}>
                          {busy === g.id ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Eye className="w-3.5 h-3.5" />} Publish
                        </button>
                      )}
                      <button onClick={() => removeGig(g)} disabled={busy === g.id} className="p-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50">
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  {g.packages.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mt-3">
                      {g.packages.sort((a, b) => a.price - b.price).map((p) => (
                        <div key={p.id} className="rounded-lg bg-surface p-2 text-center">
                          <p className="text-[10px] uppercase font-bold text-accent">{p.tier}</p>
                          <p className="font-bold text-foreground text-sm price-display">${p.price}</p>
                          {p.deliveryDays && <p className="text-[10px] text-text-secondary">{p.deliveryDays} days</p>}
                        </div>
                      ))}
                    </div>
                  )}
                  {provider?.status !== "active" && g.status !== "active" && (
                    <p className="text-[11px] text-text-tertiary mt-2">Publish unlocks once your profile is approved.</p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
