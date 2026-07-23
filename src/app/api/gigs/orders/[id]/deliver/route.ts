import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { getProviderForUser } from '@/lib/data/providerAuth';

// POST /api/gigs/orders/[id]/deliver — provider marks the work delivered.
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
    if (order.status !== 'paid') return NextResponse.json({ error: `Can't deliver an order in '${order.status}'` }, { status: 409 });

    await db.update(schema.gigOrders)
      .set({ status: 'delivered', deliveredAt: new Date(), updatedAt: new Date() })
      .where(eq(schema.gigOrders.id, order.id));
    return NextResponse.json({ ok: true, status: 'delivered' });
  } catch (e) {
    console.error('deliver error:', e);
    return NextResponse.json({ error: 'Could not mark delivered' }, { status: 500 });
  }
}
