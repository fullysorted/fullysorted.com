"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PARTS_ITEM_FEE_CENTS, PARTS_PLAN_CENTS, PARTS_PLAN_MAX_LIVE, centsLabel } from "@/lib/parts-shared";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";

/** Shown to the owner of a listing whose checkout never finished. */
export function FinishPayment({ id }: { id: number }) {
  const router = useRouter();
  const [busy, setBusy] = useState<"item" | "plan" | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function go(pay: "item" | "plan") {
    setBusy(pay);
    setError(null);
    try {
      const res = await fetch(`/api/parts/${id}/pay`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ pay }) });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "Payment did not start.");
      if (d.checkoutUrl) { window.location.href = d.checkoutUrl; return; }
      router.refresh(); // released without payment (plan or free room)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Payment did not start.");
      setBusy(null);
    }
  }

  return (
    <div className="mt-5 rounded-xl p-5" style={{ background: "var(--bg-surface)" }}>
      <p className="font-semibold" style={{ color: INK }}>This listing is saved but not paid for yet.</p>
      <p className="text-sm mt-1" style={{ color: MUTED }}>Only you can see it. Pay for it and it goes to its quick read.</p>
      <div className="flex flex-wrap gap-3 mt-4">
        <button type="button" disabled={busy !== null} onClick={() => go("item")}
          className="px-5 py-2.5 rounded-full text-sm font-bold text-white disabled:opacity-60" style={{ background: TEAL }}>
          {busy === "item" ? "Opening..." : `Pay ${centsLabel(PARTS_ITEM_FEE_CENTS)} for this listing`}
        </button>
        <button type="button" disabled={busy !== null} onClick={() => go("plan")}
          className="px-5 py-2.5 rounded-full text-sm font-semibold disabled:opacity-60" style={{ color: INK, border: `1px solid ${INK}` }}>
          {busy === "plan" ? "Opening..." : `Seller plan, ${centsLabel(PARTS_PLAN_CENTS)} a month (${PARTS_PLAN_MAX_LIVE} listings)`}
        </button>
      </div>
      {error && <p className="text-sm mt-3" style={{ color: "#9a3f2f" }}>{error}</p>}
    </div>
  );
}
