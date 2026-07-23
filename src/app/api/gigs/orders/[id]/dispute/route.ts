import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';

// POST /api/gigs/orders/[id]/dispute — buyer reports a problem (token-gated).
// Moves the order to 'disputed', which pauses auto-release, and notifies the
// provider + admin. Resolution is either the buyer releasing later or a refund.
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const token = body?.token;
    const reason = (body?.reason || '').toString().trim().slice(0, 2000);
    if (!token) return NextResponse.json({ error: 'Missing order token' }, { status: 400 });
    if (!reason) return NextResponse.json({ error: 'Please describe the problem.' }, { status: 400 });

    const db = getDb();
    const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.id, Number(id))).limit(1);
    if (!order || order.buyerAccessToken !== token) return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    if (order.status !== 'paid' && order.status !== 'delivered') {
      return NextResponse.json({ error: `Can't report a problem on an order in '${order.status}'.` }, { status: 409 });
    }

    await db.update(schema.gigOrders)
      .set({ status: 'disputed', disputedAt: new Date(), disputeReason: reason, updatedAt: new Date() })
      .where(eq(schema.gigOrders.id, order.id));

    try {
      const [gig] = await db.select({ title: schema.gigs.title }).from(schema.gigs).where(eq(schema.gigs.id, order.gigId)).limit(1);
      const [provider] = await db.select({ email: schema.serviceProviders.email }).from(schema.serviceProviders).where(eq(schema.serviceProviders.id, order.providerId)).limit(1);
      const { notifyOrderDisputed } = await import('@/lib/email');
      await notifyOrderDisputed({
        providerEmail: provider?.email,
        gigTitle: gig?.title || 'your order',
        buyerName: order.buyerName || undefined,
        buyerEmail: order.buyerEmail || undefined,
        reason,
        orderId: order.id,
      });
    } catch (e) { console.error('dispute notify failed', e); }

    return NextResponse.json({ ok: true, status: 'disputed' });
  } catch (e) {
    console.error('dispute error:', e);
    return NextResponse.json({ error: 'Could not report the problem. Please try again.' }, { status: 500 });
  }
}
