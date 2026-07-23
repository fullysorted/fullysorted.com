import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getStripe } from '@/lib/stripe';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { getProviderForUser } from '@/lib/data/providerAuth';

// POST /api/connect/onboard — create (or reuse) a Stripe Connect Express account
// for the signed-in provider and return a hosted onboarding link. This is how a
// provider becomes eligible to receive payouts. No money moves here.
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Sign in required' }, { status: 401 });

    let stripe;
    try { stripe = getStripe(); }
    catch { return NextResponse.json({ error: 'Payments not configured' }, { status: 503 }); }

    const provider = await getProviderForUser(userId);
    if (!provider) return NextResponse.json({ error: 'No provider profile found for this account' }, { status: 404 });

    const db = getDb();
    let accountId = provider.stripeConnectId;

    if (!accountId) {
      const account = await stripe.accounts.create({
        type: 'express',
        email: provider.email || undefined,
        capabilities: { transfers: { requested: true } },
        business_profile: {
          name: provider.businessName || undefined,
          product_description: 'Collector-car services sold via Fully Sorted',
        },
        metadata: { providerId: String(provider.id), fullysorted: 'provider' },
      });
      accountId = account.id;
      await db.update(schema.serviceProviders)
        .set({ stripeConnectId: accountId, updatedAt: new Date() })
        .where(eq(schema.serviceProviders.id, provider.id));
    }

    const origin =
      request.headers.get('origin') ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      'https://www.fullysorted.com';

    const link = await stripe.accountLinks.create({
      account: accountId,
      refresh_url: `${origin}/dashboard/provider?connect=refresh`,
      return_url: `${origin}/dashboard/provider?connect=done`,
      type: 'account_onboarding',
    });

    return NextResponse.json({ url: link.url });
  } catch (error) {
    console.error('connect onboard error:', error);
    return NextResponse.json({ error: 'Could not start payout setup' }, { status: 500 });
  }
}
