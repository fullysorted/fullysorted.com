import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { getStripe } from '@/lib/stripe';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { getProviderForUser } from '@/lib/data/providerAuth';

// GET /api/connect/status — sync and report whether the provider can receive
// payouts. Called from the dashboard after Connect onboarding returns.
export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Sign in required' }, { status: 401 });

    const provider = await getProviderForUser(userId);
    if (!provider) return NextResponse.json({ error: 'No provider profile' }, { status: 404 });

    if (!provider.stripeConnectId) {
      return NextResponse.json({ connected: false, payoutsEnabled: false });
    }

    let stripe;
    try { stripe = getStripe(); }
    catch { return NextResponse.json({ connected: true, payoutsEnabled: !!provider.payoutsEnabled }); }

    const acct = await stripe.accounts.retrieve(provider.stripeConnectId);
    const enabled = !!(
      acct.details_submitted &&
      acct.payouts_enabled &&
      acct.capabilities?.transfers === 'active'
    );

    if (enabled !== !!provider.payoutsEnabled) {
      const db = getDb();
      await db.update(schema.serviceProviders)
        .set({ payoutsEnabled: enabled, updatedAt: new Date() })
        .where(eq(schema.serviceProviders.id, provider.id));
    }

    return NextResponse.json({
      connected: true,
      payoutsEnabled: enabled,
      detailsSubmitted: !!acct.details_submitted,
    });
  } catch (error) {
    console.error('connect status error:', error);
    return NextResponse.json({ error: 'Could not check payout status' }, { status: 500 });
  }
}
