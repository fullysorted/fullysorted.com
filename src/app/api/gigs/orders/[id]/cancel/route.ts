import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { getProviderForUser } from '@/lib/data/providerAuth';
import { refundGigOrder } from '@/lib/server/gigRefund';

// POST /api/gigs/orders/[id]/cancel — provider cancels a held order; the buyer is
// refunded in full. Only allowed before funds are released.
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

    const result = await refundGigOrder(order.id);
    if (!result.ok) return NextResponse.json({ error: result.error, status: result.status }, { status: 409 });
    return NextResponse.json({ ok: true, status: result.status });
  } catch (e) {
    console.error('cancel error:', e);
    return NextResponse.json({ error: 'Could not cancel/refund' }, { status: 500 });
  }
}
