import type { Metadata } from "next";
import { OrdersHistory } from "./OrdersHistory";

export const metadata: Metadata = { title: "My Orders — Fully Sorted", robots: { index: false } };

export default function OrdersIndexPage() {
  return (
    <div style={{ backgroundColor: "#faf9f7" }} className="min-h-screen py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground mb-1">My orders</h1>
        <p className="text-sm text-text-secondary mb-8">Your service bookings and their status.</p>
        <OrdersHistory />
      </div>
    </div>
  );
}
