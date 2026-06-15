import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq, and } from 'drizzle-orm';

// POST /api/gigs/order — buyer requests a gig (lead/inquiry).
// Payments are NOT processed here — this creates a 'inquiry' order row and
// notifies the provider/Chris. Real checkout waits on legal/payment sign-off.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { gigSlug, packageId, buyerName, buyerEmail, message } = body;

    if (!gigSlug || !buyerName || !buyerEmail) {
      return NextResponse.json({ error: 'Name, email, and gig are required.' }, { status: 400 });
    }

    const db = getDb();
    const [gig] = await db
      .select()
      .from(schema.gigs)
      .where(and(eq(schema.gigs.slug, gigSlug), eq(schema.gigs.status, 'active')))
      .limit(1);
    if (!gig) return NextResponse.json({ error: 'Gig not found' }, { status: 404 });

    const [provider] = await db
      .select()
      .from(schema.serviceProviders)
      .where(eq(schema.serviceProviders.id, gig.providerId))
      .limit(1);

    let amount: number | null = null;
    let tier: string | undefined;
    if (packageId) {
      const [pkg] = await db
        .select()
        .from(schema.gigPackages)
        .where(eq(schema.gigPackages.id, Number(packageId)))
        .limit(1);
      if (pkg) { amount = pkg.price; tier = pkg.tier; }
    }

    await db.insert(schema.gigOrders).values({
      gigId: gig.id,
      packageId: packageId ? Number(packageId) : null,
      providerId: gig.providerId,
      buyerName,
      buyerEmail,
      amount,
      status: 'inquiry',
      requirementsText: message || null,
    });

    try {
      const { notifyGigInquiry } = await import('@/lib/email');
      await notifyGigInquiry({
        gigTitle: gig.title,
        providerName: provider?.businessName || 'Provider',
        providerEmail: provider?.email,
        tier,
        amount: amount ?? undefined,
        buyerName,
        buyerEmail,
        message,
      });
    } catch (e) {
      console.error('gig inquiry notify failed:', e);
    }

    return NextResponse.json({
      success: true,
      message: 'Request sent! The provider will reach out to arrange details and payment directly.',
    });
  } catch (error) {
    console.error('gig order error:', error);
    return NextResponse.json({ error: 'Failed to send request. Please try again.' }, { status: 500 });
  }
}
