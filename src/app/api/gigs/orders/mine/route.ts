import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getDb, schema } from '@/lib/db';
import { desc, eq } from 'drizzle-orm';
import { getProviderForUser } from '@/lib/data/providerAuth';

// GET /api/gigs/orders/mine — the signed-in provider's orders (for the dashboard).
export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Sign in required' }, { status: 401 });
    const provider = await getProviderForUser(userId);
    if (!provider) return NextResponse.json({ orders: [], payoutsEnabled: false });

    const db = getDb();
    const rows = await db
      .select({
        id: schema.gigOrders.id,
        status: schema.gigOrders.status,
        amountCents: schema.gigOrders.amountCents,
        providerAmountCents: schema.gigOrders.providerAmountCents,
        buyerName: schema.gigOrders.buyerName,
        buyerEmail: schema.gigOrders.buyerEmail,
        requirementsText: schema.gigOrders.requirementsText,
        disputeReason: schema.gigOrders.disputeReason,
        createdAt: schema.gigOrders.createdAt,
        paidAt: schema.gigOrders.paidAt,
        deliveredAt: schema.gigOrders.deliveredAt,
        completedAt: schema.gigOrders.completedAt,
        gigTitle: schema.gigs.title,
      })
      .from(schema.gigOrders)
      .leftJoin(schema.gigs, eq(schema.gigOrders.gigId, schema.gigs.id))
      .where(eq(schema.gigOrders.providerId, provider.id))
      .orderBy(desc(schema.gigOrders.createdAt))
      .limit(100);

    return NextResponse.json({ orders: rows, payoutsEnabled: !!provider.payoutsEnabled, connected: !!provider.stripeConnectId });
  } catch (e) {
    console.error('orders/mine error:', e);
    return NextResponse.json({ error: 'Could not load orders' }, { status: 500 });
  }
}
