import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';

// GET /api/gigs/orders/lookup?token=… — buyer-facing order status (token-gated,
// no login). Returns only what the buyer needs to see and act on.
export async function GET(req: NextRequest) {
  try {
    const token = new URL(req.url).searchParams.get('token');
    if (!token) return NextResponse.json({ error: 'Missing token' }, { status: 400 });

    const db = getDb();
    const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.buyerAccessToken, token)).limit(1);
    if (!order) return NextResponse.json({ error: 'Order not found' }, { status: 404 });

    const [gig] = await db.select().from(schema.gigs).where(eq(schema.gigs.id, order.gigId)).limit(1);
    const [provider] = await db.select().from(schema.serviceProviders).where(eq(schema.serviceProviders.id, order.providerId)).limit(1);

    return NextResponse.json({
      order: {
        id: order.id,
        status: order.status,
        amountCents: order.amountCents,
        currency: order.currency,
        buyerName: order.buyerName,
        requirementsText: order.requirementsText,
        paidAt: order.paidAt,
        deliveredAt: order.deliveredAt,
        completedAt: order.completedAt,
        gigTitle: gig?.title ?? 'Service',
        gigSlug: gig?.slug ?? null,
        providerName: provider?.businessName ?? 'Provider',
      },
    });
  } catch (e) {
    console.error('order lookup error:', e);
    return NextResponse.json({ error: 'Could not load order' }, { status: 500 });
  }
}
