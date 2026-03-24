import { NextRequest, NextResponse } from 'next/server';
import { getStripe, LISTING_FEE_AMOUNT, LISTING_FEE_CURRENCY } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Payment service not configured' },
        { status: 503 }
      );
    }

    const stripe = getStripe();
    const body = await request.json();
    const { listingData } = body;

    if (!listingData?.year || !listingData?.make || !listingData?.model) {
      return NextResponse.json(
        { error: 'Listing data is required' },
        { status: 400 }
      );
    }

    const vehicleTitle = `${listingData.year} ${listingData.make} ${listingData.model}`;
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: LISTING_FEE_CURRENCY,
            product_data: {
              name: `Fully Sorted Listing: ${vehicleTitle}`,
              description: 'One-time listing fee with AI-generated description',
            },
            unit_amount: LISTING_FEE_AMOUNT,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${siteUrl}/sell/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/sell?cancelled=true`,
      metadata: {
        listingData: JSON.stringify(listingData),
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}
