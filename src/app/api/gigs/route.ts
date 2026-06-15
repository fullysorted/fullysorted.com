import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '-' + Math.random().toString(36).substring(2, 7);
}

// POST /api/gigs — create a new draft gig for the signed-in freelancer.
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const db = getDb();
    const [provider] = await db
      .select()
      .from(schema.serviceProviders)
      .where(eq(schema.serviceProviders.clerkUserId, userId))
      .limit(1);
    if (!provider) return NextResponse.json({ error: 'No freelancer profile found' }, { status: 404 });

    const body = await request.json();
    const title = body.title || 'Untitled gig';
    const [gig] = await db.insert(schema.gigs).values({
      providerId: provider.id,
      slug: slugify(title),
      title,
      category: body.category || provider.category,
      description: body.description || null,
      status: 'draft',
    }).returning();

    const pkgs = Array.isArray(body.packages) ? body.packages : [];
    for (const p of pkgs) {
      if (p && typeof p.price === 'number') {
        await db.insert(schema.gigPackages).values({
          gigId: gig.id, tier: p.tier || 'basic', title: p.title || null,
          price: p.price, deliveryDays: p.deliveryDays ?? null, revisions: p.revisions ?? null,
          features: Array.isArray(p.features) ? p.features : [],
        });
      }
    }
    return NextResponse.json({ gig }, { status: 201 });
  } catch (error) {
    console.error('create gig error:', error);
    return NextResponse.json({ error: 'Failed to create gig' }, { status: 500 });
  }
}
