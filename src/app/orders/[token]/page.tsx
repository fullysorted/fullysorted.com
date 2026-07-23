import type { Metadata } from "next";
import { OrderView } from "./OrderView";

export const metadata: Metadata = { title: "Your Order — Fully Sorted", robots: { index: false } };

export default async function OrderPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  return (
    <div style={{ backgroundColor: "#faf9f7" }} className="min-h-screen py-12 sm:py-16 px-4 sm:px-6">
      <OrderView token={token} />
    </div>
  );
}
