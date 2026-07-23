"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Loader2, ShieldCheck, Wallet, ArrowRight, PackageCheck, CheckCircle2, Clock,
  ChevronDown, AlertTriangle, Mail, TrendingUp, Lock, ListChecks, XCircle,
} from "lucide-react";
import { PLATFORM_FEE_PCT_LABEL } from "@/lib/payments";

interface Order {
  id: number;
  status: string;
  amountCents: number | null;
  providerAmountCents: number | null;
  buyerName: string | null;
  buyerEmail: string | null;
  requirementsText: string | null;
  disputeReason: string | null;
  gigTitle: string | null;
  createdAt: string | null;
  paidAt: string | null;
  deliveredAt: string | null;
  completedAt: string | null;
}

const money = (c: number | null) =>
  c == null ? "$0" : `$${(c / 100).toLocaleString("en-US", { minimumFractionDigits: c % 100 ? 2 : 0 })}`;
const fmtDate = (s: string | null) => (s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—");

const STATUS_STYLE: Record<string, { label: string; bg: string; fg: string }> = {
  pending_payment: { label: "Awaiting payment", bg: "rgba(0,0,0,0.05)", fg: "#6b6b5e" },
  paid: { label: "Paid — deliver now", bg: "rgba(176,141,63,0.14)", fg: "#8a6d2f" },
  delivered: { label: "Delivered — awaiting buyer", bg: "rgba(30,96,145,0.1)", fg: "#1E6091" },
  disputed: { label: "Problem reported", bg: "rgba(176,85,63,0.12)", fg: "#9a3f2f" },
  completed: { label: "Paid out", bg: "rgba(106,176,76,0.14)", fg: "#4b8b2e" },
  cancelled: { label: "Cancelled", bg: "rgba(0,0,0,0.05)", fg: "#9a9a8a" },
  refunded: { label: "Refunded", bg: "rgba(0,0,0,0.05)", fg: "#9a9a8a" },
  inquiry: { label: "Inquiry (no payment)", bg: "rgba(0,0,0,0.05)", fg: "#6b6b5e" },
};

const FILTERS: { key: string; label: string; match: (o: Order) => boolean }[] = [
  { key: "attention", label: "Needs attention", match: (o) => o.status === "paid" || o.status === "disputed" },
  { key: "active", label: "In progress", match: (o) => ["paid", "delivered", "disputed"].includes(o.status) },
  { key: "completed", label: "Completed", match: (o) => o.status === "completed" },
  { key: "all", label: "All", match: () => true },
];

function Stat({ icon: Icon, label, value, sub, tone }: { icon: React.ElementType; label: string; value: string; sub?: string; tone: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-4">
      <div className="flex items-center gap-1.5 mb-2">
        <Icon className="w-3.5 h-3.5" style={{ color: tone }} />
        <span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">{label}</span>
      </div>
      <p className="text-2xl font-bold text-foreground tabular-nums leading-none">{value}</p>
      {sub && <p className="text-[11px] text-text-secondary mt-1.5">{sub}</p>}
    </div>
  );
}

export function PayoutsPanel() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [payoutsEnabled, setPayoutsEnabled] = useState(false);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState<string>("");
  const [filter, setFilter] = useState("attention");
  const [expanded, setExpanded] = useState<number | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/gigs/orders/mine");
      const d = await res.json();
      if (res.ok) { setOrders(d.orders || []); setPayoutsEnabled(!!d.payoutsEnabled); setConnected(!!d.connected); }
    } catch { /* ignore */ }
    setLoading(false);
  }, []);

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("connect")) fetch("/api/connect/status").then((r) => r.json()).then(() => load()).catch(() => load());
    else load();
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

  async function act(id: number, path: string, confirmMsg?: string) {
    if (confirmMsg && !window.confirm(confirmMsg)) return;
    setBusy(`${path}-${id}`);
    try { const res = await fetch(`/api/gigs/orders/${id}/${path}`, { method: "POST" }); if (res.ok) await load(); }
    catch { /* ignore */ }
    setBusy("");
  }

  // Earnings math (provider net, in cents)
  const paidOut = orders.filter((o) => o.status === "completed").reduce((s, o) => s + (o.providerAmountCents || 0), 0);
  const held = orders.filter((o) => ["paid", "delivered", "disputed"].includes(o.status)).reduce((s, o) => s + (o.providerAmountCents || 0), 0);
  const completedCount = orders.filter((o) => o.status === "completed").length;
  const attention = orders.filter((o) => o.status === "paid" || o.status === "disputed").length;
  const shown = orders.filter(FILTERS.find((f) => f.key === filter)!.match);

  if (loading) return (
    <div className="bg-white rounded-2xl border border-border p-6 flex items-center gap-2 text-sm text-text-secondary mb-8">
      <Loader2 className="w-4 h-4 animate-spin" /> Loading payouts…
    </div>
  );

  const feePct = Number(PLATFORM_FEE_PCT_LABEL.replace("%", ""));

  return (
    <div className="space-y-6 mb-8">
      {/* Payout status */}
      <div className="bg-white rounded-2xl border border-border p-6">
        <div className="flex items-center gap-2 mb-4">
          <Wallet className="w-5 h-5" style={{ color: "#1E6091" }} />
          <h3 className="font-bold text-foreground">Payments &amp; payouts</h3>
        </div>
        {payoutsEnabled ? (
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: "rgba(106,176,76,0.14)", color: "#4b8b2e" }}>
              <ShieldCheck className="w-4 h-4" /> Payouts active
            </span>
            <p className="text-sm text-text-secondary">
              Buyers can book &amp; pay your gigs. You keep {100 - feePct}% — Fully Sorted&rsquo;s fee is {PLATFORM_FEE_PCT_LABEL}.
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

      {/* Earnings KPIs */}
      {(orders.length > 0 || payoutsEnabled) && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <Stat icon={TrendingUp} label="Paid out" value={money(paidOut)} sub={`${completedCount} completed`} tone="#4b8b2e" />
          <Stat icon={Lock} label="In escrow" value={money(held)} sub="held, not yet released" tone="#1E6091" />
          <Stat icon={ListChecks} label="Completed" value={String(completedCount)} sub="orders delivered & accepted" tone="#1E6091" />
          <Stat icon={AlertTriangle} label="Needs attention" value={String(attention)} sub="to deliver or resolve" tone="#8a6d2f" />
        </div>
      )}

      {/* Orders */}
      {orders.length > 0 && (
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border flex flex-wrap items-center gap-2 justify-between">
            <h3 className="font-bold text-foreground">Orders</h3>
            <div className="flex flex-wrap gap-1.5">
              {FILTERS.map((f) => {
                const n = orders.filter(f.match).length;
                const on = filter === f.key;
                return (
                  <button key={f.key} onClick={() => setFilter(f.key)}
                    className={"px-3 py-1 rounded-full text-xs font-medium border transition-colors " + (on ? "text-white border-transparent" : "text-text-secondary border-border hover:border-accent hover:text-accent")}
                    style={on ? { backgroundColor: "#1E6091" } : undefined}>
                    {f.label} {n > 0 && <span className={on ? "opacity-80" : "opacity-60"}>({n})</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {shown.length === 0 ? (
            <div className="px-6 py-10 text-center text-sm text-text-secondary">No orders in this view.</div>
          ) : (
            <div className="divide-y divide-border">
              {shown.map((o) => {
                const st = STATUS_STYLE[o.status] || STATUS_STYLE.inquiry;
                const open = expanded === o.id;
                return (
                  <div key={o.id}>
                    <button onClick={() => setExpanded(open ? null : o.id)} className="w-full text-left px-6 py-4 flex items-center gap-4 hover:bg-surface/40 transition-colors">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-foreground truncate">{o.gigTitle || "Gig"}</p>
                        <p className="text-xs text-text-secondary">{o.buyerName || "Buyer"} · you net {money(o.providerAmountCents)} · {fmtDate(o.createdAt)}</p>
                      </div>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: st.bg, color: st.fg }}>{st.label}</span>
                      <ChevronDown className={"w-4 h-4 shrink-0 transition-transform " + (open ? "rotate-180" : "")} style={{ color: "#9a9a8a" }} />
                    </button>

                    {open && (
                      <div className="px-6 pb-5 pt-1">
                        <div className="rounded-xl p-4 mb-3" style={{ background: "#faf9f7" }}>
                          {o.requirementsText ? (
                            <><p className="text-xs font-semibold mb-1" style={{ color: "#1a1a18" }}>What the buyer needs</p>
                            <p className="text-sm mb-3" style={{ color: "#6b6b5e", whiteSpace: "pre-line" }}>{o.requirementsText}</p></>
                          ) : null}
                          {o.status === "disputed" && o.disputeReason && (
                            <div className="rounded-lg p-3 mb-3" style={{ background: "rgba(176,85,63,0.08)", border: "1px solid rgba(176,85,63,0.22)" }}>
                              <p className="text-xs font-semibold mb-1" style={{ color: "#9a3f2f" }}>Problem reported</p>
                              <p className="text-sm" style={{ color: "#6b6b5e", whiteSpace: "pre-line" }}>{o.disputeReason}</p>
                            </div>
                          )}
                          <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs" style={{ color: "#9a9a8a" }}>
                            <span>Paid {fmtDate(o.paidAt)}</span>
                            {o.deliveredAt && <span>Delivered {fmtDate(o.deliveredAt)}</span>}
                            {o.completedAt && <span>Paid out {fmtDate(o.completedAt)}</span>}
                            <span>Gross {money(o.amountCents)}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {o.buyerEmail && (
                            <a href={`mailto:${o.buyerEmail}?subject=${encodeURIComponent("Your Fully Sorted order: " + (o.gigTitle || ""))}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-border text-foreground hover:bg-surface transition-colors">
                              <Mail className="w-3.5 h-3.5" /> Message buyer
                            </a>
                          )}
                          {o.status === "paid" && (
                            <button onClick={() => act(o.id, "deliver")} disabled={busy === `deliver-${o.id}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover transition-colors disabled:opacity-60">
                              {busy === `deliver-${o.id}` ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <PackageCheck className="w-3.5 h-3.5" />} Mark delivered
                            </button>
                          )}
                          {o.status === "delivered" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg" style={{ color: "#1E6091", background: "rgba(30,96,145,0.07)" }}>
                              <Clock className="w-3.5 h-3.5" /> Waiting for buyer to accept
                            </span>
                          )}
                          {o.status === "completed" && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg" style={{ color: "#4b8b2e", background: "rgba(106,176,76,0.1)" }}>
                              <CheckCircle2 className="w-3.5 h-3.5" /> {money(o.providerAmountCents)} paid out
                            </span>
                          )}
                          {["paid", "delivered", "disputed"].includes(o.status) && (
                            <button onClick={() => act(o.id, "cancel", "Cancel this order and refund the buyer in full? This can't be undone.")} disabled={busy === `cancel-${o.id}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border transition-colors disabled:opacity-60"
                              style={{ borderColor: "rgba(176,85,63,0.4)", color: "#9a3f2f" }}>
                              {busy === `cancel-${o.id}` ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <XCircle className="w-3.5 h-3.5" />} Cancel &amp; refund
                            </button>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
