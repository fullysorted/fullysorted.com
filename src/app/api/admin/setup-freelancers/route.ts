import { NextRequest, NextResponse } from 'next/server';

// Auth: header x-admin-secret OR fs_admin cookie.
function isAuthorized(request: NextRequest): boolean {
  const header = request.headers.get('x-admin-secret');
  const cookie = request.cookies.get('fs_admin')?.value;
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (header === secret || cookie === secret);
}

// Creates the gig tables and adds freelancer columns. Idempotent — safe to re-run.
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  // Extend existing tables (Postgres supports ADD COLUMN IF NOT EXISTS).
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
  await sql`ALTER TABLE provider_applications ADD COLUMN IF NOT EXISTS provider_type VARCHAR(20) NOT NULL DEFAULT 'business'`;

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

  return NextResponse.json({
    success: true,
    message: 'Freelancer + gig tables ready. Payments remain DISABLED (scaffolding only) until legal/accounting sign-off.',
  });
}
