import { NextRequest, NextResponse } from 'next/server';
import { getDb, schema } from '@/lib/db';
import { and, eq, lt } from 'drizzle-orm';
import { AUTO_RELEASE_DAYS } from '@/lib/payments';
import { releaseGigOrder } from '@/lib/server/gigRelease';

export const dynamic = 'force-dynamic';

// GET /api/cron/auto-release — releases orders the provider marked delivered
// more than AUTO_RELEASE_DAYS ago and the buyer never accepted. Runs on a
// Vercel Cron daily. Protected by CRON_SECRET (Vercel injects it as a Bearer
// token) or the admin secret for manual runs.
function authorized(req: NextRequest): boolean {
  const auth = req.headers.get('authorization') || '';
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && auth === `Bearer ${cronSecret}`) return true;
  const admin = process.env.ADMIN_SECRET;
  if (admin && (req.headers.get('x-admin-secret') === admin || req.cookies.get('fs_admin')?.value === admin)) return true;
  // If no CRON_SECRET is configured, allow (still gated by obscure path); tighten by setting CRON_SECRET.
  return !cronSecret && !admin;
}

export async function GET(req: NextRequest) {
  if (!authorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const db = getDb();
  const cutoff = new Date(Date.now() - AUTO_RELEASE_DAYS * 24 * 60 * 60 * 1000);

  const due = await db.select({ id: schema.gigOrders.id })
    .from(schema.gigOrders)
    .where(and(eq(schema.gigOrders.status, 'delivered'), lt(schema.gigOrders.deliveredAt, cutoff)))
    .limit(200);

  let released = 0;
  const errors: { id: number; error?: string }[] = [];
  for (const o of due) {
    try {
      const r = await releaseGigOrder(o.id);
      if (r.ok) released++; else errors.push({ id: o.id, error: r.error });
    } catch (e) {
      errors.push({ id: o.id, error: e instanceof Error ? e.message : 'unknown' });
    }
  }

  return NextResponse.json({ scanned: due.length, released, errors, windowDays: AUTO_RELEASE_DAYS });
}
