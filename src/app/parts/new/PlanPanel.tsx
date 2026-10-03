"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const INK = "#12352A";
const TEAL = "#1C8C87";
const MUTED = "#6B7280";
const RULE = "rgba(18,53,42,0.14)";

/** The member's seller plan, with the one control it needs: stop or keep renewing. */
export function PlanPanel({
  plan, live, maxLive, active,
}: {
  plan: { status: string; periodEnd: string | null; cancelAtPeriodEnd: boolean };
  live: number;
  maxLive: number;
  active: boolean;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const end = plan.periodEnd ? new Date(plan.periodEnd).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) : null;

  async function act(action: "cancel" | "resume") {
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/parts/plan", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action }) });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(d.error || "That did not go through.");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "That did not go through.");
    } finally {
      setBusy(false);
    }
  }

  if (!active) {
    return (
      <div className="rounded-2xl p-5 mb-8 bg-white" style={{ border: `1px solid ${RULE}` }}>
        <p className="text-sm" style={{ color: MUTED }}>
          Your seller plan has ended. Listings already up stay up until they expire. You can start it again when you list.
        </p>
      </div>
    );
  }

  if (plan.status === "past_due") {
    return (
      <div className="rounded-2xl p-5 mb-8 bg-white" style={{ border: `1px solid ${RULE}` }}>
        <p className="font-semibold" style={{ color: INK }}>Seller plan</p>
        <p className="text-sm mt-1" style={{ color: MUTED }}>
          The last renewal did not go through. Stripe will try the card again; you can update it from the link in
          Stripe&apos;s email. Your listings stay up meanwhile.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl p-5 mb-8 bg-white" style={{ border: `1px solid ${RULE}` }}>
      <p className="font-semibold" style={{ color: INK }}>Seller plan</p>
      <p className="text-sm mt-1" style={{ color: MUTED }}>
        {live} of {maxLive} listings up.{" "}
        {end && (plan.cancelAtPeriodEnd ? `Ends ${end}; it will not renew.` : `Renews ${end}.`)}
      </p>
      <button
        type="button"
        disabled={busy}
        onClick={() => act(plan.cancelAtPeriodEnd ? "resume" : "cancel")}
        className="mt-3 text-sm font-semibold underline underline-offset-4 disabled:opacity-60"
        style={{ color: TEAL }}
      >
        {busy ? "Working..." : plan.cancelAtPeriodEnd ? "Keep the plan" : "Cancel the plan"}
      </button>
      {error && <p className="text-sm mt-2" style={{ color: "#9a3f2f" }}>{error}</p>}
    </div>
  );
}
