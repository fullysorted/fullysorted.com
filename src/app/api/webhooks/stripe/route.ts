import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
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

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const listingData = session.metadata?.listingData;

    if (listingData) {
      try {
        const parsed = JSON.parse(listingData);
        console.log('Payment received for listing:', parsed.year, parsed.make, parsed.model);
        console.log('Session ID:', session.id);
        console.log('Payment status:', session.payment_status);
        // TODO: Save to Neon database via Drizzle
      } catch (e) {
        console.error('Failed to parse listing data from webhook:', e);
      }
    }
  }

  return NextResponse.json({ received: true });
}
