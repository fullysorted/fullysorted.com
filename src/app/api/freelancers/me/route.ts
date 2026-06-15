import { NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq, desc } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';

// GET /api/freelancers/me — the signed-in freelancer's profile + gigs + orders.
// Returns { provider:null } gracefully when there's no profile or no auth, so
// the dashboard can render its getting-started guide instead of erroring.
export async function GET() {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ provider: null, gigs: [], orders: [] });

    const db = getDb();
    const [provider] = await db
      .select()
      .from(schema.serviceProviders)
      .where(eq(schema.serviceProviders.clerkUserId, userId))
      .limit(1);

    if (!provider) return NextResponse.json({ provider: null, gigs: [], orders: [] });

    const gigRows = await db
      .select()
      .from(schema.gigs)
      .where(eq(schema.gigs.providerId, provider.id))
      .orderBy(desc(schema.gigs.createdAt));

    const gigsWithPackages = await Promise.all(
      gigRows.map(async (g: typeof gigRows[number]) => {
        const packages = await db
          .select()
          .from(schema.gigPackages)
          .where(eq(schema.gigPackages.gigId, g.id));
        return { ...g, packages };
      })
    );

    const orders = await db
      .select()
      .from(schema.gigOrders)
      .where(eq(schema.gigOrders.providerId, provider.id))
      .orderBy(desc(schema.gigOrders.createdAt));

    return NextResponse.json({ provider, gigs: gigsWithPackages, orders });
  } catch (error) {
    console.error('freelancers/me error:', error);
    return NextResponse.json({ provider: null, gigs: [], orders: [] });
  }
}
