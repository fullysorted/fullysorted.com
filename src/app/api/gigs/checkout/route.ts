import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import { auth } from '@clerk/nextjs/server';
import { getStripe } from '@/lib/stripe';
import { getDb, schema } from '@/lib/db';
import { and, eq } from 'drizzle-orm';
import { dollarsToCents, platformFeeCents, providerPayoutCents } from '@/lib/payments';

// POST /api/gigs/checkout — buyer pays for a gig package. Funds are captured to
// the PLATFORM account and HELD (escrow); they're released to the provider via a
// Stripe Transfer only when the buyer accepts delivery. If the provider hasn't
// finished payout onboarding, we return 409 so the UI falls back to the inquiry
// flow instead of taking money we can't pay out.
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    const body = await request.json();
    const { gigSlug, packageId, buyerName, buyerEmail, message } = body;
    if (!gigSlug || !packageId || !buyerName || !buyerEmail) {
      return NextResponse.json({ error: 'Name, email, gig, and package are required.' }, { status: 400 });
    }

    let stripe;
    try { stripe = getStripe(); }
    catch { return NextResponse.json({ error: 'Payments not configured', fallback: 'inquiry' }, { status: 503 }); }

    const db = getDb();
    const [gig] = await db.select().from(schema.gigs)
      .where(and(eq(schema.gigs.slug, gigSlug), eq(schema.gigs.status, 'active'))).limit(1);
    if (!gig) return NextResponse.json({ error: 'Gig not found' }, { status: 404 });

    const [pkg] = await db.select().from(schema.gigPackages)
      .where(eq(schema.gigPackages.id, Number(packageId))).limit(1);
    if (!pkg || pkg.gigId !== gig.id) return NextResponse.json({ error: 'Package not found' }, { status: 404 });

    const [provider] = await db.select().from(schema.serviceProviders)
      .where(eq(schema.serviceProviders.id, gig.providerId)).limit(1);
    if (!provider) return NextResponse.json({ error: 'Provider not found' }, { status: 404 });

    // Guard: never take money we can't pay out.
    if (!provider.payoutsEnabled || !provider.stripeConnectId) {
      return NextResponse.json(
        { error: 'This provider is not yet set up to accept payment. Send an inquiry instead.', fallback: 'inquiry' },
        { status: 409 },
      );
    }

    const amountCents = dollarsToCents(pkg.price);
    if (amountCents < 100) return NextResponse.json({ error: 'Invalid package price' }, { status: 400 });
    const feeCents = platformFeeCents(amountCents);
    const providerCents = providerPayoutCents(amountCents);
    const token = randomBytes(24).toString('hex');

    const [order] = await db.insert(schema.gigOrders).values({
      gigId: gig.id,
      packageId: pkg.id,
      providerId: provider.id,
      buyerName,
      buyerEmail,
      amount: pkg.price,          // legacy dollars column, kept populated
      amountCents,
      platformFeeCents: feeCents,
      providerAmountCents: providerCents,
      currency: 'usd',
      status: 'pending_payment',
      requirementsText: message || null,
      buyerAccessToken: token,
      buyerClerkUserId: userId || null,
    }).returning();

    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://www.fullysorted.com';

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      customer_email: buyerEmail,
      line_items: [{
        quantity: 1,
        price_data: {
          currency: 'usd',
          unit_amount: amountCents,
          product_data: {
            name: `${gig.title} — ${pkg.title || pkg.tier}`,
            description: (pkg.description || '').slice(0, 300) || undefined,
          },
        },
      }],
      success_url: `${origin}/orders/${token}?paid=1`,
      cancel_url: `${origin}/gigs/${gigSlug}`,
      metadata: { kind: 'gig', orderId: String(order.id), token },
      payment_intent_data: {
        metadata: { kind: 'gig', orderId: String(order.id), token },
      },
    });

    await db.update(schema.gigOrders)
      .set({ stripeSessionId: session.id, updatedAt: new Date() })
      .where(eq(schema.gigOrders.id, order.id));

    return NextResponse.json({ url: session.url, orderToken: token });
  } catch (error) {
    console.error('gig checkout error:', error);
    return NextResponse.json({ error: 'Could not start checkout. Please try again.' }, { status: 500 });
  }
}
