import { NextRequest, NextResponse } from 'next/server';

// Auth: header x-admin-secret OR fs_admin cookie.
function isAuthorized(request: NextRequest): boolean {
  const header = request.headers.get('x-admin-secret');
  const cookie = request.cookies.get('fs_admin')?.value;
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (header === secret || cookie === secret);
}

// Adds the paid-order (Stripe escrow) columns to gig_orders. Idempotent.
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS amount_cents INTEGER`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS platform_fee_cents INTEGER`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS provider_amount_cents INTEGER`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS currency VARCHAR(10) DEFAULT 'usd'`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS stripe_session_id VARCHAR(255)`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS stripe_payment_intent_id VARCHAR(255)`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS stripe_charge_id VARCHAR(255)`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS stripe_transfer_id VARCHAR(255)`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS stripe_refund_id VARCHAR(255)`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS buyer_access_token VARCHAR(64)`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS paid_at TIMESTAMP`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS delivered_at TIMESTAMP`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS completed_at TIMESTAMP`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS cancelled_at TIMESTAMP`;
  await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS refunded_at TIMESTAMP`;
  await sql`CREATE INDEX IF NOT EXISTS idx_gig_orders_token ON gig_orders(buyer_access_token)`;
  await sql`CREATE INDEX IF NOT EXISTS idx_gig_orders_session ON gig_orders(stripe_session_id)`;

  return NextResponse.json({
    success: true,
    message: 'gig_orders extended with the Stripe escrow columns. Set STRIPE keys + enable Connect, then test in test mode before going live.',
  });
}
