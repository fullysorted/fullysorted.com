import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 });
  }

  const stripe = getStripe();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error('Webhook signature verification failed:', message);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  // ── Paid gig order: funds captured to platform, HELD until buyer accepts ──
  if (event.type === 'checkout.session.completed' && (event.data.object as { metadata?: Record<string, string> }).metadata?.kind === 'gig') {
    const session = event.data.object;
    const orderId = Number(session.metadata?.orderId || 0);
    if (orderId && process.env.DATABASE_URL) {
      try {
        const { getDb, schema } = await import('@/lib/db');
        const { eq, and } = await import('drizzle-orm');
        const db = getDb();
        const piId = typeof session.payment_intent === 'string'
          ? session.payment_intent
          : session.payment_intent?.id ?? null;
        let chargeId: string | null = null;
        if (piId) {
          try {
            const pi = await stripe.paymentIntents.retrieve(piId);
            chargeId = typeof pi.latest_charge === 'string' ? pi.latest_charge : pi.latest_charge?.id ?? null;
          } catch (e) { console.error('PI retrieve failed', e); }
        }
        // Idempotent: only the first completed event advances pending_payment → paid.
        const advanced = await db.update(schema.gigOrders).set({
          status: 'paid',
          paidAt: new Date(),
          stripePaymentIntentId: piId,
          stripeChargeId: chargeId,
          updatedAt: new Date(),
        }).where(and(eq(schema.gigOrders.id, orderId), eq(schema.gigOrders.status, 'pending_payment')))
          .returning({ id: schema.gigOrders.id });

        if (advanced.length > 0) {
          console.log(`Gig order #${orderId} paid — funds held pending delivery/accept.`);
          try {
            const [order] = await db.select().from(schema.gigOrders).where(eq(schema.gigOrders.id, orderId)).limit(1);
            const [gig] = await db.select({ title: schema.gigs.title }).from(schema.gigs).where(eq(schema.gigs.id, order.gigId)).limit(1);
            const [provider] = await db.select({ email: schema.serviceProviders.email, name: schema.serviceProviders.businessName })
              .from(schema.serviceProviders).where(eq(schema.serviceProviders.id, order.providerId)).limit(1);
            const origin = process.env.NEXT_PUBLIC_SITE_URL || 'https://fullysorted.com';
            const email = await import('@/lib/email');
            const { centsToDisplay } = await import('@/lib/payments');
            await email.notifyOrderPaidToProvider({
              providerEmail: provider?.email,
              gigTitle: gig?.title || 'a gig',
              buyerName: order.buyerName || undefined,
              netDisplay: centsToDisplay(order.providerAmountCents ?? 0),
            });
            await email.sendOrderReceiptToBuyer({
              buyerEmail: order.buyerEmail || undefined,
              gigTitle: gig?.title || 'your order',
              providerName: provider?.name || 'the provider',
              amountDisplay: centsToDisplay(order.amountCents ?? 0),
              orderUrl: `${origin}/orders/${order.buyerAccessToken}`,
            });
          } catch (e) { console.error('paid emails failed', e); }
        }
      } catch (e) {
        console.error('Gig paid handler failed:', e);
      }
    }
    return NextResponse.json({ received: true });
  }

  if (event.type === 'checkout.session.expired' && (event.data.object as { metadata?: Record<string, string> }).metadata?.kind === 'gig') {
    const session = event.data.object;
    const orderId = Number(session.metadata?.orderId || 0);
    if (orderId && process.env.DATABASE_URL) {
      try {
        const { getDb, schema } = await import('@/lib/db');
        const { eq } = await import('drizzle-orm');
        const db = getDb();
        await db.update(schema.gigOrders)
          .set({ status: 'cancelled', cancelledAt: new Date(), updatedAt: new Date() })
          .where(eq(schema.gigOrders.id, orderId));
      } catch (e) { console.error('Gig expire handler failed:', e); }
    }
    return NextResponse.json({ received: true });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const { listingId: listing_id, year, make, model } = session.metadata || {};

    console.log(`Payment complete: ${year} ${make} ${model} (listing #${listing_id})`);
    console.log('Stripe session ID:', session.id);
    console.log('Payment status:', session.payment_status);

    // Mark listing as active in the database
    if (listing_id && process.env.DATABASE_URL) {
      try {
        const { getDb, schema } = await import('@/lib/db');
        const { eq } = await import('drizzle-orm');
        const db = getDb();

        await db
          .update(schema.listings)
          .set({
            status: 'active',
            publishedAt: new Date(),
            updatedAt: new Date(),
          })
          .where(eq(schema.listings.id, parseInt(listing_id)));

        console.log(`Listing #${listing_id} activated successfully`);

        // Send email notification to Chris
        try {
          const { notifyNewListing } = await import('@/lib/email');
          await notifyNewListing({ year, make, model, price: session.amount_total ? session.amount_total / 100 : 9.99, listingId: listing_id });
        } catch (emailErr) {
          console.error('Failed to send new listing email:', emailErr);
        }
      } catch (dbError: any) {
        console.error('Failed to activate listing in DB:', dbError?.message || dbError);
        // Don't return error — Stripe already got the payment, log and move on
      }
    } else {
      // No DB — still send the email notification
      try {
        const { notifyNewListing } = await import('@/lib/email');
        await notifyNewListing({ year, make, model, price: session.amount_total ? session.amount_total / 100 : 9.99, listingId: listing_id });
      } catch {}
    }
  }

  if (event.type === 'checkout.session.expired') {
    const session = event.data.object;
    const { listingId: listing_id } = session.metadata || {};

    // Mark listing as expired if payment never completed
    if (listing_id && process.env.DATABASE_URL) {
      try {
        const { getDb, schema } = await import('@/lib/db');
        const { eq } = await import('drizzle-orm');
        const db = getDb();

        await db
          .update(schema.listings)
          .set({ status: 'expired', updatedAt: new Date() })
          .where(eq(schema.listings.id, parseInt(listing_id)));
      } catch (dbError: any) {
        console.error('Failed to expire listing in DB:', dbError?.message || dbError);
      }
    }
  }

  // Keep provider payout eligibility in sync automatically as Stripe updates it.
  if (event.type === 'account.updated') {
    const acct = event.data.object as { id: string; details_submitted?: boolean; payouts_enabled?: boolean; capabilities?: { transfers?: string } };
    if (acct.id && process.env.DATABASE_URL) {
      try {
        const { getDb, schema } = await import('@/lib/db');
        const { eq } = await import('drizzle-orm');
        const db = getDb();
        const enabled = !!(acct.details_submitted && acct.payouts_enabled && acct.capabilities?.transfers === 'active');
        await db.update(schema.serviceProviders)
          .set({ payoutsEnabled: enabled, updatedAt: new Date() })
          .where(eq(schema.serviceProviders.stripeConnectId, acct.id));
      } catch (e) { console.error('account.updated sync failed:', e); }
    }
    return NextResponse.json({ received: true });
  }

  return NextResponse.json({ received: true });
}
