"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Loader2, TrendingUp, Lock, AlertTriangle, ListChecks, ChevronDown,
  CheckCircle2, XCircle, Mail, DollarSign,
} from "lucide-react";

interface Order {
  id: number;
  status: string;
  amountCents: number | null;
  platformFeeCents: number | null;
  providerAmountCents: number | null;
  buyerName: string | null;
  buyerEmail: string | null;
  requirementsText: string | null;
  disputeReason: string | null;
  createdAt: string | null;
  paidAt: string | null;
  deliveredAt: string | null;
  completedAt: string | null;
  disputedAt: string | null;
  gigTitle: string | null;
  providerName: string | null;
  providerEmail: string | null;
}
interface Summary { gmvCents: number; feesCents: number; heldCents: number; disputesOpen: number; completed: number; total: number; }

const money = (c: number | null) => (c == null ? "$0" : `$${(c / 100).toLocaleString("en-US", { minimumFractionDigits: c % 100 ? 2 : 0 })}`);
const fmtDate = (s: string | null) => (s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : "—");

const STATUS_STYLE: Record<string, { label: string; bg: string; fg: string }> = {
  pending_payment: { label: "Awaiting payment", bg: "#f1f1ee", fg: "#6b6b5e" },
  paid: { label: "Paid — held", bg: "#f4ecd8", fg: "#8a6d2f" },
  delivered: { label: "Delivered", bg: "#e2edf5", fg: "#1E6091" },
  disputed: { label: "Disputed", bg: "#f3ddd6", fg: "#9a3f2f" },
  completed: { label: "Completed", bg: "#e3f0da", fg: "#4b8b2e" },
  cancelled: { label: "Cancelled", bg: "#f1f1ee", fg: "#9a9a8a" },
  refunded: { label: "Refunded", bg: "#f1f1ee", fg: "#9a9a8a" },
  inquiry: { label: "Inquiry", bg: "#f1f1ee", fg: "#6b6b5e" },
};

const FILTERS = ["disputed", "attention", "held", "completed", "all"] as const;
const FILTER_LABEL: Record<string, string> = { disputed: "Disputes", attention: "Needs action", held: "Held", completed: "Completed", all: "All" };
const matches = (o: Order, f: string) =>
  f === "all" ? true
  : f === "disputed" ? o.status === "disputed"
  : f === "attention" ? ["paid", "disputed"].includes(o.status)
  : f === "held" ? ["paid", "delivered", "disputed"].includes(o.status)
  : o.status === "completed";

function Stat({ icon: Icon, label, value, tone }: { icon: React.ElementType; label: string; value: string; tone: string }) {
  return (
    <div className="bg-white rounded-2xl border border-border p-4">
      <div className="flex items-center gap-1.5 mb-2"><Icon className="w-3.5 h-3.5" style={{ color: tone }} /><span className="text-[11px] font-bold uppercase tracking-wider text-text-secondary">{label}</span></div>
      <p className="text-2xl font-bold text-foreground tabular-nums leading-none">{value}</p>
    </div>
  );
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [summary, setSummary] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>("disputed");
  const [expanded, setExpanded] = useState<number | null>(null);
  const [busy, setBusy] = useState<string>("");
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/orders");
      const d = await res.json();
      if (res.ok) { setOrders(d.orders || []); setSummary(d.summary || null); }
      else setErr(d.error || "Failed to load");
    } catch { setErr("Failed to load orders"); }
    setLoading(false);
  }, []);
  useEffect(() => { load(); }, [load]);

  async function act(id: number, action: "release" | "refund") {
    const msg = action === "release" ? "Release the held payment to the provider?" : "Refund the buyer in full?";
    if (!window.confirm(msg)) return;
    setBusy(`${action}-${id}`); setErr("");
    try {
      const res = await fetch("/api/admin/orders", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ orderId: id, action }) });
      const d = await res.json();
      if (res.ok) await load(); else setErr(d.error || "Action failed");
    } catch { setErr("Action failed"); }
    setBusy("");
  }

  const shown = orders.filter((o) => matches(o, filter));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-display font-semibold tracking-tight text-foreground mb-1">Orders &amp; Disputes</h1>
      <p className="text-sm text-text-secondary mb-8">Every gig transaction across the marketplace. Resolve disputes by releasing to the provider or refunding the buyer.</p>

      {loading ? (
        <div className="flex items-center gap-2 text-sm text-text-secondary py-16 justify-center"><Loader2 className="w-5 h-5 animate-spin" /> Loading…</div>
      ) : (
        <>
          {summary && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
              <Stat icon={TrendingUp} label="GMV" value={money(summary.gmvCents)} tone="#1E6091" />
              <Stat icon={DollarSign} label="Platform fees" value={money(summary.feesCents)} tone="#4b8b2e" />
              <Stat icon={Lock} label="Held in escrow" value={money(summary.heldCents)} tone="#8a6d2f" />
              <Stat icon={AlertTriangle} label="Open disputes" value={String(summary.disputesOpen)} tone="#9a3f2f" />
            </div>
          )}

          {err && <p className="text-sm mb-3" style={{ color: "#DC2626" }}>{err}</p>}

          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <div className="px-6 py-4 border-b border-border flex flex-wrap items-center gap-2 justify-between">
              <h2 className="font-bold text-foreground flex items-center gap-2"><ListChecks className="w-4 h-4" style={{ color: "#1E6091" }} /> Orders</h2>
              <div className="flex flex-wrap gap-1.5">
                {FILTERS.map((f) => {
                  const n = orders.filter((o) => matches(o, f)).length;
                  const on = filter === f;
                  return (
                    <button key={f} onClick={() => setFilter(f)}
                      className={"px-3 py-1 rounded-full text-xs font-medium border transition-colors " + (on ? "text-white border-transparent" : "text-text-secondary border-border hover:border-accent hover:text-accent")}
                      style={on ? { backgroundColor: "#1E6091" } : undefined}>
                      {FILTER_LABEL[f]} {n > 0 && <span className="opacity-70">({n})</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {shown.length === 0 ? (
              <div className="px-6 py-12 text-center text-sm text-text-secondary">No orders in this view.</div>
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
                          <p className="text-xs text-text-secondary truncate">{o.providerName || "Provider"} · buyer {o.buyerName || "—"} · {money(o.amountCents)} · {fmtDate(o.createdAt)}</p>
                        </div>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: st.bg, color: st.fg }}>{st.label}</span>
                        <ChevronDown className={"w-4 h-4 shrink-0 transition-transform " + (open ? "rotate-180" : "")} style={{ color: "#9a9a8a" }} />
                      </button>

                      {open && (
                        <div className="px-6 pb-5">
                          <div className="rounded-xl p-4 mb-3" style={{ background: "#faf9f7" }}>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-xs mb-2" style={{ color: "#6b6b5e" }}>
                              <span>Gross <b className="text-foreground">{money(o.amountCents)}</b></span>
                              <span>Fee <b className="text-foreground">{money(o.platformFeeCents)}</b></span>
                              <span>Provider net <b className="text-foreground">{money(o.providerAmountCents)}</b></span>
                              <span>Paid {fmtDate(o.paidAt)}</span>
                              <span>Delivered {fmtDate(o.deliveredAt)}</span>
                              <span>{o.completedAt ? `Paid out ${fmtDate(o.completedAt)}` : o.disputedAt ? `Disputed ${fmtDate(o.disputedAt)}` : ""}</span>
                            </div>
                            {o.requirementsText && <p className="text-xs mt-1" style={{ color: "#6b6b5e", whiteSpace: "pre-line" }}><b className="text-foreground">Brief:</b> {o.requirementsText}</p>}
                            {o.status === "disputed" && o.disputeReason && (
                              <div className="rounded-lg p-3 mt-2" style={{ background: "rgba(176,85,63,0.08)", border: "1px solid rgba(176,85,63,0.22)" }}>
                                <p className="text-xs font-semibold mb-1" style={{ color: "#9a3f2f" }}>Buyer&rsquo;s problem report</p>
                                <p className="text-sm" style={{ color: "#6b6b5e", whiteSpace: "pre-line" }}>{o.disputeReason}</p>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {o.buyerEmail && <a href={`mailto:${o.buyerEmail}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-border text-foreground hover:bg-surface"><Mail className="w-3.5 h-3.5" /> Buyer</a>}
                            {o.providerEmail && <a href={`mailto:${o.providerEmail}`} className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-border text-foreground hover:bg-surface"><Mail className="w-3.5 h-3.5" /> Provider</a>}
                            {["paid", "delivered", "disputed"].includes(o.status) && (
                              <>
                                <button onClick={() => act(o.id, "release")} disabled={busy === `release-${o.id}`}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-60">
                                  {busy === `release-${o.id}` ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />} Release to provider
                                </button>
                                <button onClick={() => act(o.id, "refund")} disabled={busy === `refund-${o.id}`}
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border disabled:opacity-60"
                                  style={{ borderColor: "rgba(176,85,63,0.4)", color: "#9a3f2f" }}>
                                  {busy === `refund-${o.id}` ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <XCircle className="w-3.5 h-3.5" />} Refund buyer
                                </button>
                              </>
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
        </>
      )}
    </div>
  );
}
