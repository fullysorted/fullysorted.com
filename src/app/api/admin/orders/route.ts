import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { desc, eq } from 'drizzle-orm';
import { releaseGigOrder } from '@/lib/server/gigRelease';
import { refundGigOrder } from '@/lib/server/gigRefund';

function isAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get('fs_admin')?.value;
  const header = request.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

// GET /api/admin/orders — every gig order across the marketplace + summary.
export async function GET(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ orders: [], summary: null });

  const db = getDb();
  const rows = await db
    .select({
      id: schema.gigOrders.id,
      status: schema.gigOrders.status,
      amountCents: schema.gigOrders.amountCents,
      platformFeeCents: schema.gigOrders.platformFeeCents,
      providerAmountCents: schema.gigOrders.providerAmountCents,
      buyerName: schema.gigOrders.buyerName,
      buyerEmail: schema.gigOrders.buyerEmail,
      requirementsText: schema.gigOrders.requirementsText,
      disputeReason: schema.gigOrders.disputeReason,
      createdAt: schema.gigOrders.createdAt,
      paidAt: schema.gigOrders.paidAt,
      deliveredAt: schema.gigOrders.deliveredAt,
      completedAt: schema.gigOrders.completedAt,
      disputedAt: schema.gigOrders.disputedAt,
      gigTitle: schema.gigs.title,
      providerName: schema.serviceProviders.businessName,
      providerEmail: schema.serviceProviders.email,
    })
    .from(schema.gigOrders)
    .leftJoin(schema.gigs, eq(schema.gigOrders.gigId, schema.gigs.id))
    .leftJoin(schema.serviceProviders, eq(schema.gigOrders.providerId, schema.serviceProviders.id))
    .orderBy(desc(schema.gigOrders.createdAt))
    .limit(500);

  const paidish = ['paid', 'delivered', 'disputed', 'completed'];
  const held = ['paid', 'delivered', 'disputed'];
  const summary = {
    gmvCents: rows.filter((o) => paidish.includes(o.status)).reduce((s, o) => s + (o.amountCents || 0), 0),
    feesCents: rows.filter((o) => o.status === 'completed').reduce((s, o) => s + (o.platformFeeCents || 0), 0),
    heldCents: rows.filter((o) => held.includes(o.status)).reduce((s, o) => s + (o.amountCents || 0), 0),
    disputesOpen: rows.filter((o) => o.status === 'disputed').length,
    completed: rows.filter((o) => o.status === 'completed').length,
    total: rows.length,
  };

  return NextResponse.json({ orders: rows, summary });
}

// POST /api/admin/orders — admin resolves an order: { orderId, action: 'release' | 'refund' }.
export async function POST(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const { orderId, action } = await request.json();
    if (!orderId || !['release', 'refund'].includes(action)) {
      return NextResponse.json({ error: 'orderId and a valid action are required' }, { status: 400 });
    }
    const result = action === 'release' ? await releaseGigOrder(Number(orderId)) : await refundGigOrder(Number(orderId));
    if (!result.ok) return NextResponse.json({ error: result.error, status: result.status }, { status: 409 });
    return NextResponse.json({ ok: true, status: result.status });
  } catch (e) {
    console.error('admin order action error:', e);
    return NextResponse.json({ error: 'Action failed' }, { status: 500 });
  }
}
