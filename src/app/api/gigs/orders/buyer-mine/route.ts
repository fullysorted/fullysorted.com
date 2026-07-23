import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import { getDb, schema } from '@/lib/db';
import { desc, eq, or, inArray } from 'drizzle-orm';

// GET /api/gigs/orders/buyer-mine — a signed-in buyer's orders, matched by their
// linked account id or any of their verified account emails (so orders placed
// before signing in still show up).
export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Sign in required' }, { status: 401 });

    const user = await currentUser();
    const emails = (user?.emailAddresses || []).map((e) => e.emailAddress).filter(Boolean);

    const db = getDb();
    const conditions = [eq(schema.gigOrders.buyerClerkUserId, userId)];
    if (emails.length) conditions.push(inArray(schema.gigOrders.buyerEmail, emails));

    const rows = await db
      .select({
        id: schema.gigOrders.id,
        status: schema.gigOrders.status,
        amountCents: schema.gigOrders.amountCents,
        buyerAccessToken: schema.gigOrders.buyerAccessToken,
        createdAt: schema.gigOrders.createdAt,
        deliveredAt: schema.gigOrders.deliveredAt,
        completedAt: schema.gigOrders.completedAt,
        gigTitle: schema.gigs.title,
        gigSlug: schema.gigs.slug,
        providerName: schema.serviceProviders.businessName,
      })
      .from(schema.gigOrders)
      .leftJoin(schema.gigs, eq(schema.gigOrders.gigId, schema.gigs.id))
      .leftJoin(schema.serviceProviders, eq(schema.gigOrders.providerId, schema.serviceProviders.id))
      .where(or(...conditions))
      .orderBy(desc(schema.gigOrders.createdAt))
      .limit(100);

    return NextResponse.json({ orders: rows });
  } catch (e) {
    console.error('buyer-mine error:', e);
    return NextResponse.json({ error: 'Could not load your orders' }, { status: 500 });
  }
}
