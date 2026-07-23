# Payments & Payouts — Runbook

The services marketplace uses **Stripe** for two flows:

1. **Listing fees** (seller pays to list a car) — Stripe Checkout, one-off. Already live.
2. **Gig payments** (buyer pays a service provider) — Stripe **Connect** with an
   **escrow hold**: the buyer's money is captured to the platform and released to
   the provider only when the work is accepted, minus the platform fee.

This doc covers the gig payment rail.

## How the escrow flow works

```
Buyer books & pays ──► funds captured to PLATFORM (held)         [order: paid]
Provider "Mark delivered" ─────────────────────────────────────► [order: delivered]
Buyer "Accept & release"  ──► Transfer net to provider          [order: completed]
        (or auto-releases after AUTO_RELEASE_DAYS)
Provider "Cancel"         ──► full refund to buyer              [order: refunded]
```

- Money model: **separate charges & transfers**. The platform is merchant of
  record; the provider's net is sent later via a `Transfer` with
  `source_transaction` (the original charge), so funds are available immediately.
- Platform fee: **10%** by default, configurable (see below).
- Releases are **idempotent** (Stripe idempotency key `gig-release-<orderId>` +
  a compare-and-set on order status), so a payout can never happen twice.
- If a provider hasn't finished payout onboarding, their gigs stay on the
  inquiry flow — the code refuses to take money it can't pay out.

## Environment variables (Vercel)

| Var | Purpose |
| --- | --- |
| `STRIPE_SECRET_KEY` | Stripe secret key. Use `sk_test_…` first, then `sk_live_…`. |
| `STRIPE_WEBHOOK_SECRET` | Signing secret of the webhook endpoint below. |
| `NEXT_PUBLIC_SITE_URL` | e.g. `https://fullysorted.com` — used in success/return URLs and emails. |
| `ADMIN_SECRET` | Guards the one-time migration route (and manual cron runs). |
| `RESEND_API_KEY` | Order emails (optional; skipped gracefully if unset). |
| `NEXT_PUBLIC_PLATFORM_FEE_BPS` | Platform fee in basis points. `1000` = 10% (default). `1500` = 15%. |
| `AUTO_RELEASE_DAYS` | Days after delivery before auto-release. Default `14`. |
| `CRON_SECRET` | Protects the auto-release cron. Vercel injects it as a Bearer token. |

## One-time setup

1. **Enable Connect** in Stripe: Dashboard → Connect → get started (platform).
2. **Add the webhook**: Stripe → Developers → Webhooks → add endpoint
   `https://fullysorted.com/api/webhooks/stripe`, listening to:
   - `checkout.session.completed`
   - `checkout.session.expired`
   - `account.updated`
   Copy the signing secret → `STRIPE_WEBHOOK_SECRET`.
3. **Set env vars** (above) in Vercel and redeploy.
4. **Run the migration** once (adds the escrow columns to `gig_orders`):
   ```bash
   curl -X POST https://fullysorted.com/api/admin/setup-transactions \
     -H "x-admin-secret: $ADMIN_SECRET"
   ```
   (Or, signed in as admin in the browser, `fetch('/api/admin/setup-transactions', {method:'POST'})` — it also accepts the `fs_admin` cookie.)

## Test it (test mode) before going live

1. Sign in as a provider → **Dashboard → Set up payouts** → complete Stripe
   Express onboarding with Stripe's test values → returns as **Payouts active**.
2. Open one of that provider's active gigs → **Book & pay** → pay with test card
   `4242 4242 4242 4242`, any future expiry/CVC → you land on `/orders/<token>`
   showing **Payment held**.
3. Provider dashboard → the order shows **Paid — action needed** → **Mark delivered**.
4. Buyer's order page → **Accept work & release payment** → the provider's net
   transfers; order shows **Paid out**.
5. Try **Cancel** on a paid order to confirm the refund path.

## Going live

- Swap in `sk_live_…`, re-create the webhook on the live account, update
  `STRIPE_WEBHOOK_SECRET`.
- Make sure the marketplace's legal/accounting side is squared away: platform
  ToS, refund policy, and 1099-K/payout reporting (Stripe handles Connect tax
  forms, but confirm your setup).

## Auto-release

`/api/cron/auto-release` runs daily (see `vercel.json`) and releases any order a
provider marked delivered more than `AUTO_RELEASE_DAYS` ago that the buyer never
accepted — so funds never get stuck. Protected by `CRON_SECRET`.

## Changing the platform fee

Set `NEXT_PUBLIC_PLATFORM_FEE_BPS` (basis points) and redeploy. It flows through
checkout math, the provider's "you net …" figures, and the dashboard label. No
code change needed.

## Key files

- `src/lib/payments.ts` — fee math + config (client-safe).
- `src/lib/stripe.ts` — Stripe client + listing tiers.
- `src/lib/server/gigRelease.ts` — the one idempotent release path (accept + cron).
- `src/app/api/connect/*` — provider payout onboarding + status sync.
- `src/app/api/gigs/checkout` — buyer pays (escrow hold).
- `src/app/api/gigs/orders/[id]/{deliver,accept,cancel}` — lifecycle.
- `src/app/api/gigs/orders/{lookup,mine}` — buyer order page + provider dashboard.
- `src/app/api/webhooks/stripe` — paid / expired / account.updated.
- `src/app/api/cron/auto-release` — stuck-funds safety net.
