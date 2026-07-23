import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { releaseGigOrder } from '@/lib/server/gigRelease';

// POST /api/gigs/orders/[id]/accept — buyer confirms the job is done (escrow
// release). Token-gated (no login). Delegates to the shared, idempotent release.
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await req.json().catch(() => ({}));
    const token = body?.token;
    if (!token) return NextResponse.json({ error: 'Missing order token' }, { status: 400 });

    const db = getDb();
    const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.id, Number(id))).limit(1);
    if (!order || order.buyerAccessToken !== token) return NextResponse.json({ error: 'Order not found' }, { status: 404 });

    const result = await releaseGigOrder(order.id);
    if (!result.ok) return NextResponse.json({ error: result.error, status: result.status }, { status: 409 });
    return NextResponse.json({ ok: true, status: result.status });
  } catch (e) {
    console.error('accept/release error:', e);
    return NextResponse.json({ error: 'Could not release payment. Please try again.' }, { status: 500 });
  }
}
