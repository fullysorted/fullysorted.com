import { NextRequest, NextResponse } from 'next/server';

function isAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('fs_admin')?.value;
  const header = req.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

// Runs every idempotent migration in one shot: provider/freelancer columns, the
// gig tables, and the full payment/escrow + dispute + buyer columns on gig_orders.
// Safe to run repeatedly. GET or POST (GET is convenient from a signed-in admin
// browser); all statements use IF NOT EXISTS.
async function runAll() {
  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL!);
  const ran: string[] = [];
  const step = async (label: string, fn: () => Promise<unknown>) => {
    await fn();
    ran.push(label);
  };

  // service_providers — freelancer + payout columns
  await step('service_providers columns', async () => {
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS provider_type VARCHAR(20) NOT NULL DEFAULT 'business'`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS headline VARCHAR(200)`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS hourly_rate INTEGER`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS skills JSONB DEFAULT '[]'`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS service_area VARCHAR(200)`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS avatar_url TEXT`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS onboarding_step INTEGER DEFAULT 0`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS onboarding_complete BOOLEAN DEFAULT false`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS payouts_enabled BOOLEAN DEFAULT false`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS stripe_connect_id VARCHAR(255)`;
  });

  await step('provider_applications.provider_type', async () => {
    await sql`ALTER TABLE provider_applications ADD COLUMN IF NOT EXISTS provider_type VARCHAR(20) NOT NULL DEFAULT 'business'`;
  });

  // gig tables
  await step('gigs table', async () => {
    await sql`CREATE TABLE IF NOT EXISTS gigs (
      id SERIAL PRIMARY KEY,
      provider_id INTEGER NOT NULL REFERENCES service_providers(id) ON DELETE CASCADE,
      slug VARCHAR(300) NOT NULL UNIQUE,
      title VARCHAR(200) NOT NULL,
      category VARCHAR(100),
      description TEXT,
      images JSONB DEFAULT '[]',
      faqs JSONB DEFAULT '[]',
      requirements TEXT,
      status VARCHAR(20) NOT NULL DEFAULT 'draft',
      orders_count INTEGER DEFAULT 0,
      rating DECIMAL(3,1) DEFAULT 0,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`;
  });
  await step('gig_packages table', async () => {
    await sql`CREATE TABLE IF NOT EXISTS gig_packages (
      id SERIAL PRIMARY KEY,
      gig_id INTEGER NOT NULL REFERENCES gigs(id) ON DELETE CASCADE,
      tier VARCHAR(20) NOT NULL,
      title VARCHAR(200),
      description TEXT,
      price INTEGER NOT NULL,
      delivery_days INTEGER,
      revisions INTEGER,
      features JSONB DEFAULT '[]'
    )`;
  });
  await step('gig_orders table', async () => {
    await sql`CREATE TABLE IF NOT EXISTS gig_orders (
      id SERIAL PRIMARY KEY,
      gig_id INTEGER NOT NULL REFERENCES gigs(id) ON DELETE CASCADE,
      package_id INTEGER REFERENCES gig_packages(id),
      provider_id INTEGER NOT NULL REFERENCES service_providers(id) ON DELETE CASCADE,
      buyer_name VARCHAR(255),
      buyer_email VARCHAR(255),
      amount INTEGER,
      platform_fee INTEGER,
      status VARCHAR(30) NOT NULL DEFAULT 'inquiry',
      requirements_text TEXT,
      created_at TIMESTAMP NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`;
  });

  // gig_orders — payment/escrow + dispute + buyer-account columns
  await step('gig_orders payment columns', async () => {
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
    await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS buyer_clerk_user_id VARCHAR(255)`;
    await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS paid_at TIMESTAMP`;
    await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS delivered_at TIMESTAMP`;
    await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS completed_at TIMESTAMP`;
    await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS cancelled_at TIMESTAMP`;
    await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS refunded_at TIMESTAMP`;
    await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS dispute_reason TEXT`;
    await sql`ALTER TABLE gig_orders ADD COLUMN IF NOT EXISTS disputed_at TIMESTAMP`;
    await sql`CREATE INDEX IF NOT EXISTS idx_gig_orders_token ON gig_orders(buyer_access_token)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_gig_orders_session ON gig_orders(stripe_session_id)`;
  });

  return ran;
}

async function handle(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });
  try {
    const ran = await runAll();
    return NextResponse.json({ success: true, ran, message: 'All migrations applied. Freelancer signup and payments are ready.' });
  } catch (e) {
    console.error('setup-all failed:', e);
    return NextResponse.json({ success: false, error: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }
}

export async function GET(req: NextRequest) { return handle(req); }
export async function POST(req: NextRequest) { return handle(req); }
