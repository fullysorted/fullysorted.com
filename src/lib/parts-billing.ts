/**
 * Stripe checkout for parts, memorabilia and artwork listings (2026-10-02).
 *
 * Two ways to pay once the free allowance is gone:
 *   item  one-time PARTS_ITEM_FEE_CENTS for one listing (mode: payment)
 *   plan  PARTS_PLAN_CENTS a month, up to PARTS_PLAN_MAX_LIVE live listings
 *         (mode: subscription)
 *
 * Prices are inline price_data, so nothing has to be created in the Stripe
 * dashboard. The webhook (api/webhooks/stripe) finishes the job: it reads
 * metadata.kind 'parts_item' or 'parts_plan', moves the listing from 'unpaid'
 * to 'pending' for review, and keeps seller_plans in step with the
 * subscription. Subscription events need customer.subscription.updated and
 * customer.subscription.deleted switched on for the webhook endpoint.
 */
import { neon } from '@neondatabase/serverless';
import { getStripe, LISTING_FEE_CURRENCY } from '@/lib/stripe';
import { PARTS_ITEM_FEE_CENTS, PARTS_PLAN_CENTS, PARTS_PLAN_MAX_LIVE } from '@/lib/parts-shared';

export type PayChoice = 'item' | 'plan';

/** Thrown when a member who already has a plan asks for another. */
export class PlanExistsError extends Error {}

export async function createPartsCheckout(o: {
  choice: PayChoice;
  postId: number;
  userId: number;
  email: string | null;
  title: string;
  kindLabel: string;
  origin: string;
}): Promise<string> {
  const stripe = getStripe(); // throws when payments are not configured
  const meta = { postId: String(o.postId), userId: String(o.userId) };
  const success = `${o.origin}/parts/${o.postId}?posted=1&paid=1`;
  const cancel = `${o.origin}/parts/${o.postId}?unpaid=1`;

  if (o.choice === 'item') {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      // Card only: a delayed method (bank debit) completes checkout unpaid.
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: LISTING_FEE_CURRENCY,
          product_data: { name: `${o.kindLabel} listing: ${o.title.slice(0, 80)}`, description: 'One listing, up for 90 days.' },
          unit_amount: PARTS_ITEM_FEE_CENTS,
        },
        quantity: 1,
      }],
      customer_email: o.email ?? undefined,
      metadata: { kind: 'parts_item', ...meta },
      payment_intent_data: { metadata: { kind: 'parts_item', ...meta } },
      success_url: success,
      cancel_url: cancel,
    });
    if (!session.url) throw new Error('Stripe returned no checkout URL');
    return session.url;
  }

  // Reuse the member's Stripe customer if they have had a plan before, and
  // never open a second plan while one is still alive: two subscriptions
  // would both bill and only one could be cancelled from the site.
  let customer: string | undefined;
  if (process.env.DATABASE_URL) {
    const sql = neon(process.env.DATABASE_URL);
    const r = await sql`SELECT stripe_customer_id, status FROM seller_plans WHERE user_id = ${o.userId} LIMIT 1`;
    if (r[0]?.stripe_customer_id) customer = String(r[0].stripe_customer_id);
    const st = r[0]?.status ? String(r[0].status) : null;
    if (st && ['active', 'trialing', 'past_due', 'incomplete'].includes(st)) {
      throw new PlanExistsError(
        st === 'incomplete'
          ? 'A seller plan payment is still going through. Give it a minute and refresh.'
          : 'You already have a seller plan.',
      );
    }
  }
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: LISTING_FEE_CURRENCY,
        product_data: { name: 'Fully Sorted seller plan', description: `Up to ${PARTS_PLAN_MAX_LIVE} live parts, memorabilia and artwork listings. Cancel any time.` },
        unit_amount: PARTS_PLAN_CENTS,
        recurring: { interval: 'month' },
      },
      quantity: 1,
    }],
    ...(customer ? { customer } : { customer_email: o.email ?? undefined }),
    metadata: { kind: 'parts_plan', ...meta },
    subscription_data: { metadata: { kind: 'parts_plan', userId: String(o.userId) } },
    success_url: success,
    cancel_url: cancel,
  });
  if (!session.url) throw new Error('Stripe returned no checkout URL');
  return session.url;
}

type SubLike = {
  id: string;
  status: string;
  customer: string | { id: string } | null;
  cancel_at_period_end?: boolean | null;
  metadata?: Record<string, string> | null;
  items?: { data?: { current_period_end?: number | null }[] } | null;
};

/**
 * Write a subscription's state to seller_plans. userId comes from metadata.
 * The subscription is re-read from Stripe first: events arrive out of order
 * and retries replay old snapshots, so the payload is only a pointer.
 */
export async function syncSellerPlan(subIn: SubLike, userIdHint?: number): Promise<void> {
  if (!process.env.DATABASE_URL) return;
  let sub: SubLike = subIn;
  try {
    sub = (await getStripe().subscriptions.retrieve(subIn.id)) as unknown as SubLike;
  } catch (e) {
    console.error('[parts] subscription re-read failed, using the event payload:', e);
  }
  const userId = userIdHint ?? Number(sub.metadata?.userId || subIn.metadata?.userId || 0);
  if (!Number.isInteger(userId) || userId <= 0) return;
  const sql = neon(process.env.DATABASE_URL);
  const customer = typeof sub.customer === 'string' ? sub.customer : sub.customer?.id ?? null;
  // An ended subscription only touches the row if it is still the member's
  // current one, so a late event for an old plan cannot cancel a new plan.
  if (['canceled', 'incomplete_expired'].includes(sub.status)) {
    await sql`
      UPDATE seller_plans SET status = ${sub.status}, cancel_at_period_end = FALSE, updated_at = NOW()
      WHERE user_id = ${userId} AND stripe_subscription_id = ${sub.id}
    `;
    return;
  }
  // In this API version the period end lives on the subscription item.
  const end = sub.items?.data?.[0]?.current_period_end ?? null;
  const endTs = end ? new Date(end * 1000).toISOString() : null;
  await sql`
    INSERT INTO seller_plans (user_id, stripe_customer_id, stripe_subscription_id, status, current_period_end, cancel_at_period_end, updated_at)
    VALUES (${userId}, ${customer}, ${sub.id}, ${sub.status}, ${endTs}, ${Boolean(sub.cancel_at_period_end)}, NOW())
    ON CONFLICT (user_id) DO UPDATE SET
      stripe_customer_id = COALESCE(EXCLUDED.stripe_customer_id, seller_plans.stripe_customer_id),
      stripe_subscription_id = EXCLUDED.stripe_subscription_id,
      status = EXCLUDED.status,
      current_period_end = EXCLUDED.current_period_end,
      cancel_at_period_end = EXCLUDED.cancel_at_period_end,
      updated_at = NOW()
    -- A different subscription only takes the row over once the stored one has ended.
    WHERE seller_plans.stripe_subscription_id IS NULL
       OR seller_plans.stripe_subscription_id = EXCLUDED.stripe_subscription_id
       OR seller_plans.status IN ('canceled', 'incomplete_expired', 'unpaid')
  `;
}
