"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Loader2, ShieldCheck, CheckCircle2, Clock, PackageCheck, AlertCircle, AlertTriangle } from "lucide-react";

interface OrderData {
  id: number;
  status: string;
  amountCents: number | null;
  currency: string | null;
  buyerName: string | null;
  requirementsText: string | null;
  paidAt: string | null;
  deliveredAt: string | null;
  completedAt: string | null;
  disputedAt: string | null;
  disputeReason: string | null;
  gigTitle: string;
  gigSlug: string | null;
  providerName: string;
}

const money = (c: number | null) =>
  c == null ? "—" : `$${(c / 100).toLocaleString("en-US", { minimumFractionDigits: c % 100 ? 2 : 0 })}`;

export function OrderView({ token }: { token: string }) {
  const [order, setOrder] = useState<OrderData | null>(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [acting, setActing] = useState(false);
  const [reporting, setReporting] = useState(false);
  const [reason, setReason] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch(`/api/gigs/orders/lookup?token=${encodeURIComponent(token)}`);
      const d = await res.json();
      if (res.ok) setOrder(d.order);
      else setErr(d.error || "Order not found");
    } catch { setErr("Could not load this order."); }
    setLoading(false);
  }, [token]);

  useEffect(() => { load(); }, [load]);

  async function accept() {
    if (!order) return;
    setActing(true); setErr("");
    try {
      const res = await fetch(`/api/gigs/orders/${order.id}/accept`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      const d = await res.json();
      if (res.ok) await load();
      else setErr(d.error || "Could not release payment.");
    } catch { setErr("Network error — try again."); }
    setActing(false);
  }

  async function report() {
    if (!order || !reason.trim()) return;
    setActing(true); setErr("");
    try {
      const res = await fetch(`/api/gigs/orders/${order.id}/dispute`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, reason }),
      });
      const d = await res.json();
      if (res.ok) { setReporting(false); setReason(""); await load(); }
      else setErr(d.error || "Could not submit.");
    } catch { setErr("Network error — try again."); }
    setActing(false);
  }

  if (loading) return <div className="flex justify-center py-20"><Loader2 className="w-6 h-6 animate-spin" style={{ color: "#1E6091" }} /></div>;
  if (err && !order) return (
    <div className="max-w-lg mx-auto text-center py-20">
      <AlertCircle className="w-10 h-10 mx-auto mb-3" style={{ color: "#9a9a8a" }} />
      <p className="font-semibold" style={{ color: "#1a1a18" }}>{err}</p>
    </div>
  );
  if (!order) return null;

  const isDisputed = order.status === "disputed";
  const canAct = order.status === "paid" || order.status === "delivered" || isDisputed;
  const steps = [
    { key: "paid", label: "Payment held", done: !!order.paidAt, icon: ShieldCheck },
    { key: "delivered", label: "Work delivered", done: !!order.deliveredAt || order.status === "completed", icon: PackageCheck },
    { key: "completed", label: "Released to provider", done: order.status === "completed", icon: CheckCircle2 },
  ];

  return (
    <div className="max-w-xl mx-auto">
      <div className="rounded-2xl bg-white p-6 sm:p-8" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>
        <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#1E6091" }}>Your order</p>
        <h1 className="font-display text-2xl font-semibold tracking-tight mb-1" style={{ color: "#1a1a18" }}>{order.gigTitle}</h1>
        <p className="text-sm mb-6" style={{ color: "#6b6b5e" }}>with {order.providerName} · {money(order.amountCents)}</p>

        {/* Progress */}
        <div className="space-y-3 mb-6">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.key} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: s.done ? "rgba(106,176,76,0.14)" : "rgba(0,0,0,0.05)" }}>
                  <Icon className="w-4 h-4" style={{ color: s.done ? "#4b8b2e" : "#b7b7ab" }} />
                </div>
                <span className="text-sm" style={{ color: s.done ? "#1a1a18" : "#9a9a8a", fontWeight: s.done ? 600 : 400 }}>{s.label}</span>
              </div>
            );
          })}
        </div>

        {order.status === "completed" ? (
          <div className="rounded-xl p-4 text-center" style={{ background: "rgba(106,176,76,0.1)" }}>
            <CheckCircle2 className="w-7 h-7 mx-auto mb-2" style={{ color: "#4b8b2e" }} />
            <p className="text-sm font-bold" style={{ color: "#1a1a18" }}>All done — payment released.</p>
            <p className="text-xs mt-1" style={{ color: "#6b6b5e" }}>Thanks for using Fully Sorted.</p>
          </div>
        ) : order.status === "refunded" || order.status === "cancelled" ? (
          <div className="rounded-xl p-4 text-center" style={{ background: "rgba(0,0,0,0.04)" }}>
            <p className="text-sm font-semibold" style={{ color: "#1a1a18" }}>This order was {order.status} and refunded.</p>
          </div>
        ) : canAct ? (
          <>
            {isDisputed ? (
              <div className="rounded-xl p-4 mb-4 flex items-start gap-2.5" style={{ background: "rgba(176,85,63,0.08)", border: "1px solid rgba(176,85,63,0.25)" }}>
                <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#B0553F" }} />
                <div>
                  <p className="text-xs font-semibold mb-0.5" style={{ color: "#8a3f2f" }}>Problem reported — we&rsquo;re on it</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#6b6b5e" }}>
                    Your payment stays held while you and {order.providerName} sort it out — it won&rsquo;t auto-release. If it gets resolved, you can release payment below; otherwise the provider can refund you.
                  </p>
                </div>
              </div>
            ) : (
              <div className="rounded-xl p-4 mb-4 flex items-start gap-2.5" style={{ background: "rgba(30,96,145,0.05)", border: "1px solid rgba(30,96,145,0.16)" }}>
                <Clock className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#1E6091" }} />
                <p className="text-xs leading-relaxed" style={{ color: "#6b6b5e" }}>
                  Your payment is held securely. {order.deliveredAt
                    ? "The provider has marked the work delivered — review it, then release payment below."
                    : "Once you're happy with the completed work, release the payment to the provider."}
                </p>
              </div>
            )}
            {err && <p className="text-xs mb-2" style={{ color: "#DC2626" }}>{err}</p>}
            <button onClick={accept} disabled={acting}
              className="w-full h-11 rounded-xl text-white text-sm font-bold inline-flex items-center justify-center gap-2 disabled:opacity-60 bg-accent hover:bg-accent-hover transition-colors">
              {acting && !reporting ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
              {isDisputed ? "It's resolved — release payment" : "Accept work & release payment"}
            </button>

            {/* Report a problem */}
            {!isDisputed && !reporting && (
              <button onClick={() => setReporting(true)} className="w-full mt-3 text-xs font-semibold" style={{ color: "#9a3f2f" }}>
                Something wrong? Report a problem
              </button>
            )}
            {reporting && (
              <div className="mt-4 rounded-xl p-4" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
                <p className="text-sm font-semibold mb-2" style={{ color: "#1a1a18" }}>Report a problem</p>
                <p className="text-xs mb-3" style={{ color: "#6b6b5e" }}>Tell us what&rsquo;s wrong. This pauses the payment and notifies the provider and our team.</p>
                <textarea rows={4} value={reason} onChange={(e) => setReason(e.target.value)}
                  placeholder="e.g. The work delivered doesn't match what was agreed…"
                  className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-light focus:border-accent resize-none" style={{ borderColor: "rgba(0,0,0,0.12)" }} />
                <div className="flex gap-2 mt-2">
                  <button onClick={report} disabled={acting || !reason.trim()}
                    className="flex-1 h-10 rounded-lg text-white text-sm font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60"
                    style={{ backgroundColor: "#B0553F" }}>
                    {acting ? <Loader2 className="w-4 h-4 animate-spin" /> : <AlertTriangle className="w-4 h-4" />} Submit report
                  </button>
                  <button onClick={() => { setReporting(false); setReason(""); }} className="px-4 h-10 rounded-lg text-sm font-semibold" style={{ color: "#6b6b5e", border: "1px solid rgba(0,0,0,0.12)" }}>Cancel</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="rounded-xl p-4 text-center" style={{ background: "rgba(0,0,0,0.04)" }}>
            <p className="text-sm" style={{ color: "#6b6b5e" }}>Awaiting payment confirmation…</p>
          </div>
        )}

        {order.gigSlug && (
          <div className="mt-6 text-center">
            <Link href={`/gigs/${order.gigSlug}`} className="text-xs font-semibold" style={{ color: "#1E6091" }}>View the gig</Link>
          </div>
        )}
      </div>
    </div>
  );
}
