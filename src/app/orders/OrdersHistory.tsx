"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth, SignInButton } from "@clerk/nextjs";
import { Loader2, Package, ArrowRight, ShieldCheck, PackageCheck, CheckCircle2, AlertTriangle } from "lucide-react";

interface Order {
  id: number;
  status: string;
  amountCents: number | null;
  buyerAccessToken: string | null;
  createdAt: string | null;
  gigTitle: string | null;
  gigSlug: string | null;
  providerName: string | null;
}

const money = (c: number | null) => (c == null ? "—" : `$${(c / 100).toLocaleString("en-US", { minimumFractionDigits: c % 100 ? 2 : 0 })}`);
const fmtDate = (s: string | null) => (s ? new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "");

const STATUS: Record<string, { label: string; bg: string; fg: string; icon: React.ElementType }> = {
  paid: { label: "In progress", bg: "rgba(176,141,63,0.14)", fg: "#8a6d2f", icon: ShieldCheck },
  delivered: { label: "Delivered — review", bg: "rgba(30,96,145,0.1)", fg: "#1E6091", icon: PackageCheck },
  disputed: { label: "Problem reported", bg: "rgba(176,85,63,0.12)", fg: "#9a3f2f", icon: AlertTriangle },
  completed: { label: "Completed", bg: "rgba(106,176,76,0.14)", fg: "#4b8b2e", icon: CheckCircle2 },
  refunded: { label: "Refunded", bg: "rgba(0,0,0,0.05)", fg: "#9a9a8a", icon: Package },
  cancelled: { label: "Cancelled", bg: "rgba(0,0,0,0.05)", fg: "#9a9a8a", icon: Package },
  pending_payment: { label: "Awaiting payment", bg: "rgba(0,0,0,0.05)", fg: "#6b6b5e", icon: Package },
};

export function OrdersHistory() {
  const { isSignedIn, isLoaded } = useAuth();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) { setLoading(false); return; }
    fetch("/api/gigs/orders/buyer-mine")
      .then((r) => r.json())
      .then((d) => setOrders(d.orders || []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || loading) return <div className="flex justify-center py-16"><Loader2 className="w-6 h-6 animate-spin" style={{ color: "#1E6091" }} /></div>;

  if (!isSignedIn) return (
    <div className="text-center py-16">
      <Package className="w-10 h-10 mx-auto mb-3" style={{ color: "#b7b7ab" }} />
      <p className="font-semibold text-foreground mb-1">Sign in to see your orders</p>
      <p className="text-sm text-text-secondary mb-5">Your service bookings and their status live here.</p>
      <SignInButton mode="modal"><button className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors">Sign in</button></SignInButton>
    </div>
  );

  if (orders.length === 0) return (
    <div className="text-center py-16">
      <Package className="w-10 h-10 mx-auto mb-3" style={{ color: "#b7b7ab" }} />
      <p className="font-semibold text-foreground mb-1">No orders yet</p>
      <p className="text-sm text-text-secondary mb-5">When you book a service, it&rsquo;ll show up here.</p>
      <Link href="/gigs" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-accent hover:bg-accent-hover transition-colors">Browse services <ArrowRight className="w-4 h-4" /></Link>
    </div>
  );

  return (
    <div className="space-y-3">
      {orders.map((o) => {
        const st = STATUS[o.status] || STATUS.pending_payment;
        const Icon = st.icon;
        const inner = (
          <div className="flex items-center gap-4 bg-white rounded-2xl border border-border p-5 hover:border-accent transition-colors">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: st.bg }}>
              <Icon className="w-5 h-5" style={{ color: st.fg }} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground truncate">{o.gigTitle || "Service"}</p>
              <p className="text-xs text-text-secondary">{o.providerName || "Provider"} · {money(o.amountCents)} · {fmtDate(o.createdAt)}</p>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full shrink-0" style={{ backgroundColor: st.bg, color: st.fg }}>{st.label}</span>
            {o.buyerAccessToken && <ArrowRight className="w-4 h-4 shrink-0" style={{ color: "#9a9a8a" }} />}
          </div>
        );
        return o.buyerAccessToken ? <Link key={o.id} href={`/orders/${o.buyerAccessToken}`}>{inner}</Link> : <div key={o.id}>{inner}</div>;
      })}
    </div>
  );
}
