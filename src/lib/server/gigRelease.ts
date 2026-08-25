import { getStripe } from '@/lib/stripe';
import { getDb, schema } from '@/lib/db';
import { and, eq, inArray, sql as dsql } from 'drizzle-orm';
import { centsToDisplay } from '@/lib/payments';
import { notifyOrderReleasedToProvider } from '@/lib/email';

// The only statuses from which an escrow order may be released OR refunded.
// Release and refund share this set, so their atomic claims are mutually
// exclusive: whichever flips the row first wins, and the other's claim matches
// zero rows and aborts before any money moves.
const RELEASABLE = ['paid', 'delivered', 'disputed'];

/**
 * Escrow release — the single correct path used by both the buyer's "accept"
 * action and the auto-release cron.
 *
 * Concurrency: the money move is GATED by an atomic compare-and-set that flips
 * the status to 'completed' BEFORE any Stripe call. A concurrent refund claims
 * the same source statuses, so at most one of {release, refund} can proceed on
 * a given order — closing the double-spend where a release and a refund both
 * ran because each only checked its own terminal status. If the Stripe transfer
 * then fails, the claim is rolled back so the order can be retried or refunded.
 * Retries remain safe via the Stripe idempotency key keyed to the order.
 */
export async function releaseGigOrder(orderId: number): Promise<{ ok: boolean; status: string; error?: string }> {
  const db = getDb();
  const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.id, orderId)).limit(1);
  if (!order) return { ok: false, status: 'not_found', error: 'Order not found' };
  if (order.status === 'completed') return { ok: true, status: 'completed' };
  if (!RELEASABLE.includes(order.status)) {
    return { ok: false, status: order.status, error: `Cannot release from '${order.status}'` };
  }

  const [provider] = await db.select().from(schema.serviceProviders)
    .where(eq(schema.serviceProviders.id, order.providerId)).limit(1);
  if (!provider?.stripeConnectId) return { ok: false, status: order.status, error: 'Provider payout account missing' };

  // ── ATOMIC CLAIM ─────────────────────────────────────────
  // Flip to 'completed' only if the row is still releasable. This UPDATE
  // serializes against a concurrent refund's identical claim at the DB row
  // level, so exactly one of them matches a row.
  const claimed = await db.update(schema.gigOrders)
    .set({ status: 'completed', completedAt: new Date(), updatedAt: new Date() })
    .where(and(eq(schema.gigOrders.id, order.id), inArray(schema.gigOrders.status, RELEASABLE)))
    .returning({ id: schema.gigOrders.id });
  if (claimed.length === 0) {
    const [fresh] = await db.select({ status: schema.gigOrders.status })
      .from(schema.gigOrders).where(eq(schema.gigOrders.id, order.id)).limit(1);
    const status = fresh?.status ?? 'unknown';
    if (status === 'completed') return { ok: true, status };
    return { ok: false, status, error: `Order no longer releasable (now '${status}')` };
  }

  const stripe = getStripe();

  let chargeId = order.stripeChargeId;
  if (!chargeId && order.stripePaymentIntentId) {
    const pi = await stripe.paymentIntents.retrieve(order.stripePaymentIntentId);
    chargeId = typeof pi.latest_charge === 'string' ? pi.latest_charge : pi.latest_charge?.id ?? null;
  }

  let transfer;
  try {
    transfer = await stripe.transfers.create(
      {
        amount: order.providerAmountCents ?? 0,
        currency: order.currency || 'usd',
        destination: provider.stripeConnectId,
        ...(chargeId ? { source_transaction: chargeId } : {}),
        metadata: { orderId: String(order.id), kind: 'gig-release' },
      },
      { idempotencyKey: `gig-release-${order.id}` },
    );
  } catch (err) {
    // Payout failed — release the claim so the order can be retried or refunded.
    await db.update(schema.gigOrders)
      .set({ status: order.status, completedAt: null, updatedAt: new Date() })
      .where(and(eq(schema.gigOrders.id, order.id), eq(schema.gigOrders.status, 'completed')));
    return { ok: false, status: order.status, error: err instanceof Error ? err.message : 'Payout failed' };
  }

  const updated = await db.update(schema.gigOrders)
    .set({ stripeTransferId: transfer.id, stripeChargeId: chargeId, updatedAt: new Date() })
    .where(eq(schema.gigOrders.id, order.id))
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
