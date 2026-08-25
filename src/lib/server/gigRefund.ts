import { getStripe } from '@/lib/stripe';
import { getDb, schema } from '@/lib/db';
import { and, eq, inArray } from 'drizzle-orm';
import { centsToDisplay } from '@/lib/payments';
import { notifyOrderRefundedToBuyer } from '@/lib/email';

// Must match RELEASABLE in gigRelease.ts. Sharing the source-status set is what
// makes release and refund mutually exclusive (see gigRelease.ts for the full
// rationale). If you change one, change both.
const REFUNDABLE = ['paid', 'delivered', 'disputed'];

/**
 * Refund a held order to the buyer. Shared by the provider "cancel" action and
 * the admin console.
 *
 * Concurrency: the refund is GATED by an atomic compare-and-set that flips the
 * status to 'refunded' BEFORE calling Stripe. A concurrent release claims the
 * same source statuses, so at most one of {release, refund} can proceed —
 * closing the double-spend (transfer to provider + refund to buyer) that was
 * possible when each path only checked its own terminal status. On Stripe
 * failure the claim is rolled back. Retries stay safe via the idempotency key.
 */
export async function refundGigOrder(orderId: number): Promise<{ ok: boolean; status: string; error?: string }> {
  const db = getDb();
  const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.id, orderId)).limit(1);
  if (!order) return { ok: false, status: 'not_found', error: 'Order not found' };
  if (order.status === 'refunded') return { ok: true, status: 'refunded' };
  if (!REFUNDABLE.includes(order.status)) {
    return { ok: false, status: order.status, error: `Cannot refund from '${order.status}'` };
  }

  // ── ATOMIC CLAIM ─────────────────────────────────────────
  // Flip to 'refunded' only if still refundable; serializes against a
  // concurrent release's identical claim so only one path moves money.
  const claimed = await db.update(schema.gigOrders)
    .set({ status: 'refunded', refundedAt: new Date(), updatedAt: new Date() })
    .where(and(eq(schema.gigOrders.id, order.id), inArray(schema.gigOrders.status, REFUNDABLE)))
    .returning({ id: schema.gigOrders.id });
  if (claimed.length === 0) {
    const [fresh] = await db.select({ status: schema.gigOrders.status })
      .from(schema.gigOrders).where(eq(schema.gigOrders.id, order.id)).limit(1);
    const status = fresh?.status ?? 'unknown';
    if (status === 'refunded') return { ok: true, status };
    return { ok: false, status, error: `Order no longer refundable (now '${status}')` };
  }

  const stripe = getStripe();
  let refundId: string | null = null;
  if (order.stripePaymentIntentId) {
    try {
      const refund = await stripe.refunds.create(
        { payment_intent: order.stripePaymentIntentId },
        { idempotencyKey: `gig-refund-${order.id}` },
      );
      refundId = refund.id;
    } catch (err) {
      // Refund failed — release the claim so it can be retried.
      await db.update(schema.gigOrders)
        .set({ status: order.status, refundedAt: null, updatedAt: new Date() })
        .where(and(eq(schema.gigOrders.id, order.id), eq(schema.gigOrders.status, 'refunded')));
      return { ok: false, status: order.status, error: err instanceof Error ? err.message : 'Refund failed' };
    }
  }

  const updated = await db.update(schema.gigOrders)
    .set({ stripeRefundId: refundId, updatedAt: new Date() })
    .where(eq(schema.gigOrders.id, order.id))
    .returning({ id: schema.gigOrders.id });

  if (updated.length > 0) {
    try {
      const [gig] = await db.select({ title: schema.gigs.title }).from(schema.gigs).where(eq(schema.gigs.id, order.gigId)).limit(1);
      await notifyOrderRefundedToBuyer({
        buyerEmail: order.buyerEmail || undefined,
        gigTitle: gig?.title || 'your order',
        amountDisplay: centsToDisplay(order.amountCents ?? 0),
      });
    } catch { /* email best-effort */ }
  }
  return { ok: true, status: 'refunded' };
}
