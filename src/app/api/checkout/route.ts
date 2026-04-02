import { NextRequest, NextResponse } from 'next/server';
import { getStripe, LISTING_TIERS, LISTING_FEE_CURRENCY, type ListingTier } from '@/lib/stripe';
import { getListingById } from '@/lib/listing-store';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { listingId, year, make, model, tier } = body;

    if (!year || !make || !model) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Determine base URL for redirect
    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://www.fullysorted.com';

    // Check if this listing qualifies for the early adopter free tier
    const listing = listingId ? getListingById(Number(listingId)) : null;
    if (listing?.isFreeEarlyAdopter) {
      // Skip payment — early adopter gets it free
      return NextResponse.json({ url: `${origin}/sell/success?free=true` });
    }

    // Determine price from tier
    const selectedTier: ListingTier = (tier as ListingTier) || 'standard';
    const tierConfig = LISTING_TIERS[selectedTier];
    if (!tierConfig) {
      return NextResponse.json({ error: 'Invalid listing tier' }, { status: 400 });
    }

    // Check Stripe config
    let stripe;
    try {
      stripe = getStripe();
    } catch {
      return NextResponse.json(
        { error: 'Payment service not configured' },
        { status: 503 }
      );
    }

    const vehicleTitle = `${year} ${String(make).substring(0, 50)} ${String(model).substring(0, 50)}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: LISTING_FEE_CURRENCY,
            product_data: {
              name: `${tierConfig.name} Listing — ${vehicleTitle}`,
              description: tierConfig.features.join(' · '),
            },
            unit_amount: tierConfig.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${origin}/sell/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/sell`,
      metadata: {
        listingId: String(listingId || ''),
        tier: selectedTier,
        vehicle: vehicleTitle.substring(0, 100),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 });
  }
}
