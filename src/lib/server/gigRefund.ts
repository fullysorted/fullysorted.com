import { getStripe } from '@/lib/stripe';
import { getDb, schema } from '@/lib/db';
import { and, eq, ne } from 'drizzle-orm';
import { centsToDisplay } from '@/lib/payments';
import { notifyOrderRefundedToBuyer } from '@/lib/email';

/**
 * Refund a held order to the buyer. Shared by the provider "cancel" action and
 * the admin console. Idempotent (Stripe idempotency key + compare-and-set).
 */
export async function refundGigOrder(orderId: number): Promise<{ ok: boolean; status: string; error?: string }> {
  const db = getDb();
  const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.id, orderId)).limit(1);
  if (!order) return { ok: false, status: 'not_found', error: 'Order not found' };
  if (order.status === 'refunded') return { ok: true, status: 'refunded' };
  if (!['paid', 'delivered', 'disputed'].includes(order.status)) {
    return { ok: false, status: order.status, error: `Cannot refund from '${order.status}'` };
  }

  const stripe = getStripe();
  let refundId: string | null = null;
  if (order.stripePaymentIntentId) {
    const refund = await stripe.refunds.create(
      { payment_intent: order.stripePaymentIntentId },
      { idempotencyKey: `gig-refund-${order.id}` },
    );
    refundId = refund.id;
  }

  const updated = await db.update(schema.gigOrders)
    .set({ status: 'refunded', refundedAt: new Date(), stripeRefundId: refundId, updatedAt: new Date() })
    .where(and(eq(schema.gigOrders.id, order.id), ne(schema.gigOrders.status, 'refunded')))
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
