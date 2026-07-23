import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import { getDb, schema } from '@/lib/db';
import { eq, sql as dsql } from 'drizzle-orm';

// POST /api/gigs/orders/[id]/accept — buyer confirms the job is done. This is the
// escrow release: we Transfer the provider's net (gross − platform fee) to their
// connected account, then mark the order completed. Token-gated (no login).
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const token = body?.token;
    if (!token) return NextResponse.json({ error: 'Missing order token' }, { status: 400 });

    const db = getDb();
    const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.id, Number(id))).limit(1);
    if (!order || order.buyerAccessToken !== token) return NextResponse.json({ error: 'Order not found' }, { status: 404 });

    if (order.status === 'completed') return NextResponse.json({ ok: true, status: 'completed' });
    if (order.status !== 'paid' && order.status !== 'delivered') {
      return NextResponse.json({ error: `Can't release an order in '${order.status}'` }, { status: 409 });
    }

    const [provider] = await db.select().from(schema.serviceProviders).where(eq(schema.serviceProviders.id, order.providerId)).limit(1);
    if (!provider?.stripeConnectId) return NextResponse.json({ error: 'Provider payout account missing' }, { status: 409 });

    const stripe = getStripe();

    // Ensure we have the charge to draw from (funds available immediately).
    let chargeId = order.stripeChargeId;
    if (!chargeId && order.stripePaymentIntentId) {
      const pi = await stripe.paymentIntents.retrieve(order.stripePaymentIntentId);
      chargeId = typeof pi.latest_charge === 'string' ? pi.latest_charge : pi.latest_charge?.id ?? null;
    }

    const transfer = await stripe.transfers.create({
      amount: order.providerAmountCents ?? 0,
      currency: order.currency || 'usd',
      destination: provider.stripeConnectId,
      ...(chargeId ? { source_transaction: chargeId } : {}),
      metadata: { orderId: String(order.id), kind: 'gig-release' },
    });

    await db.update(schema.gigOrders)
      .set({ status: 'completed', completedAt: new Date(), stripeTransferId: transfer.id, stripeChargeId: chargeId, updatedAt: new Date() })
      .where(eq(schema.gigOrders.id, order.id));

    // Bump the gig's completed-orders counter.
    await db.update(schema.gigs)
      .set({ ordersCount: dsql`COALESCE(${schema.gigs.ordersCount}, 0) + 1` })
      .where(eq(schema.gigs.id, order.gigId));

    return NextResponse.json({ ok: true, status: 'completed' });
  } catch (e) {
    console.error('accept/release error:', e);
    return NextResponse.json({ error: 'Could not release payment. Please try again.' }, { status: 500 });
  }
}
