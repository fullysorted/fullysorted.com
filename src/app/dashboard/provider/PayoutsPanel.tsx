"use client";

import { useState, useEffect, useCallback } from "react";
import { Loader2, ShieldCheck, Wallet, ArrowRight, PackageCheck, CheckCircle2, Clock } from "lucide-react";
import { PLATFORM_FEE_PCT_LABEL } from "@/lib/payments";

interface Order {
  id: number;
  status: string;
  amountCents: number | null;
  providerAmountCents: number | null;
  buyerName: string | null;
  gigTitle: string | null;
  createdAt: string | null;
}

const money = (c: number | null) =>
  c == null ? "—" : `$${(c / 100).toLocaleString("en-US", { minimumFractionDigits: c % 100 ? 2 : 0 })}`;

const STATUS_STYLE: Record<string, { label: string; bg: string; fg: string }> = {
  pending_payment: { label: "Awaiting payment", bg: "rgba(0,0,0,0.05)", fg: "#6b6b5e" },
  paid: { label: "Paid — action needed", bg: "rgba(176,141,63,0.14)", fg: "#8a6d2f" },
  delivered: { label: "Delivered — awaiting buyer", bg: "rgba(30,96,145,0.1)", fg: "#1E6091" },
  completed: { label: "Paid out", bg: "rgba(106,176,76,0.14)", fg: "#4b8b2e" },
  cancelled: { label: "Cancelled", bg: "rgba(0,0,0,0.05)", fg: "#9a9a8a" },
  refunded: { label: "Refunded", bg: "rgba(0,0,0,0.05)", fg: "#9a9a8a" },
  inquiry: { label: "Inquiry", bg: "rgba(0,0,0,0.05)", fg: "#6b6b5e" },
};

export function PayoutsPanel() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [payoutsEnabled, setPayoutsEnabled] = useState(false);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string>("");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/gigs/orders/mine");
      const d = await res.json();
      if (res.ok) {
        setOrders(d.orders || []);
        setPayoutsEnabled(!!d.payoutsEnabled);
        setConnected(!!d.connected);
      }
    } catch { /* ignore */ }
    setLoading(false);
  }, []);

  useEffect(() => {
    // If returning from Stripe Connect onboarding, sync status first.
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("connect")) {
      fetch("/api/connect/status").then((r) => r.json()).then(() => load()).catch(() => load());
    } else {
      load();
    }
  }, [load]);

  async function startOnboarding() {
    setBusy("onboard");
    try {
      const res = await fetch("/api/connect/onboard", { method: "POST" });
      const d = await res.json();
      if (res.ok && d.url) { window.location.href = d.url; return; }
    } catch { /* ignore */ }
    setBusy("");
  }

  async function markDelivered(id: number) {
    setBusy(`deliver-${id}`);
    try {
      const res = await fetch(`/api/gigs/orders/${id}/deliver`, { method: "POST" });
      if (res.ok) await load();
    } catch { /* ignore */ }
    setBusy("");
  }

  const earned = orders.filter((o) => o.status === "completed").reduce((s, o) => s + (o.providerAmountCents || 0), 0);
  const actionable = orders.filter((o) => o.status === "paid" || o.status === "delivered");

  if (loading) return (
    <div className="bg-white rounded-2xl border border-border p-6 flex items-center gap-2 text-sm text-text-secondary">
      <Loader2 className="w-4 h-4 animate-spin" /> Loading payouts…
    </div>
  );

  return (
    <div className="space-y-6 mb-8">
      {/* Payouts status */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Wallet className="w-5 h-5" style={{ color: "#1E6091" }} />
          <h3 className="font-bold text-foreground">Payments & payouts</h3>
        </div>

        {payoutsEnabled ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold"
              style={{ backgroundColor: "rgba(106,176,76,0.14)", color: "#4b8b2e" }}>
              <ShieldCheck className="w-4 h-4" /> Payouts active
            </span>
            <p className="text-sm text-text-secondary">
              Buyers can book &amp; pay your gigs. You keep {100 - Number(PLATFORM_FEE_PCT_LABEL.replace("%", ""))}% — Fully Sorted&rsquo;s fee is {PLATFORM_FEE_PCT_LABEL}. Total paid out: <span className="font-semibold text-foreground">{money(earned)}</span>.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-sm text-text-secondary mb-4">
              Set up payouts to let buyers book and pay your gigs on Fully Sorted. Payment is held securely and released to you when the buyer accepts the work. Fully Sorted&rsquo;s fee is {PLATFORM_FEE_PCT_LABEL} per order.
            </p>
            <button onClick={startOnboarding} disabled={busy === "onboard"}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors disabled:opacity-60">
              {busy === "onboard" ? <Loader2 className="w-4 h-4 animate-spin" /> : <Wallet className="w-4 h-4" />}
              {connected ? "Finish payout setup" : "Set up payouts"} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Orders */}
      {orders.length > 0 && (
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex items-center justify-between">
            <h3 className="font-bold text-foreground">Orders</h3>
            {actionable.length > 0 && (
              <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ backgroundColor: "rgba(176,141,63,0.14)", color: "#8a6d2f" }}>
                {actionable.length} need attention
              </span>
            )}
          </div>
          <div className="divide-y divide-border">
            {orders.map((o) => {
              const st = STATUS_STYLE[o.status] || STATUS_STYLE.inquiry;
              return (
                <div key={o.id} className="px-6 py-4 flex items-center gap-4">
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-foreground truncate">{o.gigTitle || "Gig"}</p>
                    <p className="text-xs text-text-secondary">{o.buyerName || "Buyer"} · you net {money(o.providerAmountCents)}</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: st.bg, color: st.fg }}>{st.label}</span>
                  {o.status === "paid" && (
                    <button onClick={() => markDelivered(o.id)} disabled={busy === `deliver-${o.id}`}
                      className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover transition-colors disabled:opacity-60">
                      {busy === `deliver-${o.id}` ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <PackageCheck className="w-3.5 h-3.5" />}
                      Mark delivered
                    </button>
                  )}
                  {o.status === "delivered" && <Clock className="w-4 h-4 shrink-0" style={{ color: "#1E6091" }} />}
                  {o.status === "completed" && <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "#4b8b2e" }} />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
