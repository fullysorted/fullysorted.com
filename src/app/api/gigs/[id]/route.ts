import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { eq, and } from 'drizzle-orm';
import { auth } from '@clerk/nextjs/server';

// Confirm the signed-in user owns this gig (via their provider profile).
async function ownedGig(gigId: number, userId: string) {
  const db = getDb();
  const [provider] = await db.select().from(schema.serviceProviders)
    .where(eq(schema.serviceProviders.clerkUserId, userId)).limit(1);
  if (!provider) return null;
  const [gig] = await db.select().from(schema.gigs)
    .where(and(eq(schema.gigs.id, gigId), eq(schema.gigs.providerId, provider.id))).limit(1);
  return gig ? { db, provider, gig } : null;
}

// PATCH /api/gigs/[id] — update title/description/category or status (publish/pause).
export async function PATCH(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id } = await ctx.params;
    const owned = await ownedGig(Number(id), userId);
    if (!owned) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const body = await request.json();
    const { db } = owned;
    const [updated] = await db.update(schema.gigs).set({
      ...(body.title && { title: body.title }),
      ...(body.description !== undefined && { description: body.description }),
      ...(body.category && { category: body.category }),
      ...(body.status && ['draft', 'active', 'paused'].includes(body.status) && { status: body.status }),
      updatedAt: new Date(),
    }).where(eq(schema.gigs.id, Number(id))).returning();

    return NextResponse.json({ gig: updated });
  } catch (error) {
    console.error('update gig error:', error);
    return NextResponse.json({ error: 'Failed to update gig' }, { status: 500 });
  }
}

// DELETE /api/gigs/[id]
export async function DELETE(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    const { id } = await ctx.params;
    const owned = await ownedGig(Number(id), userId);
    if (!owned) return NextResponse.json({ error: 'Not found' }, { status: 404 });

    const { db } = owned;
    await db.delete(schema.gigPackages).where(eq(schema.gigPackages.gigId, Number(id)));
    await db.delete(schema.gigs).where(eq(schema.gigs.id, Number(id)));
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('delete gig error:', error);
    return NextResponse.json({ error: 'Failed to delete gig' }, { status: 500 });
  }
}
