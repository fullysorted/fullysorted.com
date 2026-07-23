// Client-safe payments configuration for the services marketplace.
// Importable by both server and client (no secrets here).

// Platform take rate in basis points. Configurable via env without a code
// change; defaults to 10% (1000 bps). e.g. set NEXT_PUBLIC_PLATFORM_FEE_BPS=1500
// for 15%.
export const PLATFORM_FEE_BPS = (() => {
  const raw = parseInt(process.env.NEXT_PUBLIC_PLATFORM_FEE_BPS || "", 10);
  return Number.isFinite(raw) && raw >= 0 && raw <= 5000 ? raw : 1000;
})();

export const PLATFORM_FEE_PCT_LABEL = `${(PLATFORM_FEE_BPS / 100).toFixed(PLATFORM_FEE_BPS % 100 === 0 ? 0 : 1)}%`;

/** Platform fee, in cents, for a gross amount in cents. */
export function platformFeeCents(grossCents: number): number {
  return Math.round((grossCents * PLATFORM_FEE_BPS) / 10000);
}

/** What the provider nets, in cents, for a gross amount in cents. */
export function providerPayoutCents(grossCents: number): number {
  return Math.max(0, grossCents - platformFeeCents(grossCents));
}

/** Gig package prices are stored in whole USD dollars; Stripe needs cents. */
export function dollarsToCents(dollars: number): number {
  return Math.round(dollars * 100);
}

export function centsToDisplay(cents: number): string {
  return `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: cents % 100 === 0 ? 0 : 2, maximumFractionDigits: 2 })}`;
}

// Order lifecycle for paid gigs (distinct from the legacy 'inquiry' lead flow):
//   pending_payment -> paid (funds held) -> delivered -> completed (released)
//                                          -> cancelled / refunded
export type PaidOrderStatus =
  | "pending_payment"
  | "paid"
  | "delivered"
  | "completed"
  | "cancelled"
  | "refunded";
