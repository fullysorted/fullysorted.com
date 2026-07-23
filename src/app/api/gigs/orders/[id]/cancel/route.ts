import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getStripe } from '@/lib/stripe';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { getProviderForUser } from '@/lib/data/providerAuth';

// POST /api/gigs/orders/[id]/cancel — provider declines/cancels a paid order and
// the buyer is refunded in full. Only allowed before funds are released.
export async function POST(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Sign in required' }, { status: 401 });
    const provider = await getProviderForUser(userId);
    if (!provider) return NextResponse.json({ error: 'No provider profile' }, { status: 404 });

    const { id } = await params;
    const db = getDb();
    const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.id, Number(id))).limit(1);
    if (!order || order.providerId !== provider.id) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    if (order.status !== 'paid' && order.status !== 'delivered') {
      return NextResponse.json({ error: `Can't cancel an order in '${order.status}'` }, { status: 409 });
    }

    const stripe = getStripe();
    let refundId: string | null = null;
    if (order.stripePaymentIntentId) {
      const refund = await stripe.refunds.create({ payment_intent: order.stripePaymentIntentId }, { idempotencyKey: `gig-refund-${order.id}` });
      refundId = refund.id;
    }
    await db.update(schema.gigOrders)
      .set({ status: 'refunded', refundedAt: new Date(), stripeRefundId: refundId, updatedAt: new Date() })
      .where(eq(schema.gigOrders.id, order.id));

    try {
      const [gig] = await db.select({ title: schema.gigs.title }).from(schema.gigs).where(eq(schema.gigs.id, order.gigId)).limit(1);
      const { notifyOrderRefundedToBuyer } = await import('@/lib/email');
      const { centsToDisplay } = await import('@/lib/payments');
      await notifyOrderRefundedToBuyer({
        buyerEmail: order.buyerEmail || undefined,
        gigTitle: gig?.title || 'your order',
        amountDisplay: centsToDisplay(order.amountCents ?? 0),
      });
    } catch (e) { console.error('refund email failed', e); }

    return NextResponse.json({ ok: true, status: 'refunded' });
  } catch (e) {
    console.error('cancel error:', e);
    return NextResponse.json({ error: 'Could not cancel/refund' }, { status: 500 });
  }
}
