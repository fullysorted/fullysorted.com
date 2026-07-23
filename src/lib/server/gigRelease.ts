import { getStripe } from '@/lib/stripe';
import { getDb, schema } from '@/lib/db';
import { and, eq, ne, sql as dsql } from 'drizzle-orm';
import { centsToDisplay } from '@/lib/payments';
import { notifyOrderReleasedToProvider } from '@/lib/email';

/**
 * Escrow release — the single correct path used by both the buyer's "accept"
 * action and the auto-release cron. Idempotent: a Stripe idempotency key keyed
 * to the order guarantees at most one transfer, and a compare-and-set flips the
 * status to 'completed' exactly once even under concurrent calls.
 */
export async function releaseGigOrder(orderId: number): Promise<{ ok: boolean; status: string; error?: string }> {
  const db = getDb();
  const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.id, orderId)).limit(1);
  if (!order) return { ok: false, status: 'not_found', error: 'Order not found' };
  if (order.status === 'completed') return { ok: true, status: 'completed' };
  if (order.status !== 'paid' && order.status !== 'delivered' && order.status !== 'disputed') {
    return { ok: false, status: order.status, error: `Cannot release from '${order.status}'` };
  }

  const [provider] = await db.select().from(schema.serviceProviders)
    .where(eq(schema.serviceProviders.id, order.providerId)).limit(1);
  if (!provider?.stripeConnectId) return { ok: false, status: order.status, error: 'Provider payout account missing' };

  const stripe = getStripe();

  let chargeId = order.stripeChargeId;
  if (!chargeId && order.stripePaymentIntentId) {
    const pi = await stripe.paymentIntents.retrieve(order.stripePaymentIntentId);
    chargeId = typeof pi.latest_charge === 'string' ? pi.latest_charge : pi.latest_charge?.id ?? null;
  }

  const transfer = await stripe.transfers.create(
    {
      amount: order.providerAmountCents ?? 0,
      currency: order.currency || 'usd',
      destination: provider.stripeConnectId,
      ...(chargeId ? { source_transaction: chargeId } : {}),
      metadata: { orderId: String(order.id), kind: 'gig-release' },
    },
    { idempotencyKey: `gig-release-${order.id}` },
  );

  const updated = await db.update(schema.gigOrders)
    .set({ status: 'completed', completedAt: new Date(), stripeTransferId: transfer.id, stripeChargeId: chargeId, updatedAt: new Date() })
    .where(and(eq(schema.gigOrders.id, order.id), ne(schema.gigOrders.status, 'completed')))
    .returning({ id: schema.gigOrders.id });

  if (updated.length > 0) {
    await db.update(schema.gigs)
      .set({ ordersCount: dsql`COALESCE(${schema.gigs.ordersCount}, 0) + 1` })
      .where(eq(schema.gigs.id, order.gigId));
    const [gig] = await db.select({ title: schema.gigs.title }).from(schema.gigs).where(eq(schema.gigs.id, order.gigId)).limit(1);
    try {
      await notifyOrderReleasedToProvider({
        providerEmail: provider.email,
        gigTitle: gig?.title || 'your gig',
        netDisplay: centsToDisplay(order.providerAmountCents ?? 0),
      });
    } catch { /* email best-effort */ }
  }

  return { ok: true, status: 'completed' };
}
