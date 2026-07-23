/**
 * Next.js Instrumentation Hook
 * Runs once on server startup (each Vercel cold start / deployment).
 * Ensures the database schema is always up to date.
 */
export async function register() {
  // Only run in Node.js runtime (not Edge), and only on server
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  if (!process.env.DATABASE_URL) return;

  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    // Create tables (idempotent)
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        name VARCHAR(255),
        avatar_url TEXT,
        role VARCHAR(50) NOT NULL DEFAULT 'user',
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS listings (
        id SERIAL PRIMARY KEY,
        slug VARCHAR(500) NOT NULL UNIQUE,
        year INTEGER NOT NULL,
        make VARCHAR(100) NOT NULL,
        model VARCHAR(200) NOT NULL,
        trim VARCHAR(200),
        vin VARCHAR(17),
        mileage INTEGER,
        transmission VARCHAR(50),
        engine TEXT,
        drivetrain VARCHAR(50),
        exterior_color VARCHAR(100),
        interior_color VARCHAR(100),
        body_style VARCHAR(100),
        category VARCHAR(50),
        city VARCHAR(100),
        state VARCHAR(50),
        zip_code VARCHAR(10),
        price INTEGER NOT NULL,
        sorted_price BOOLEAN DEFAULT FALSE,
        description TEXT,
        ai_description TEXT,
        highlights JSONB DEFAULT '[]'::JSONB,
        chris_take TEXT,
        comp_avg INTEGER,
        comp_count INTEGER,
        photos JSONB DEFAULT '[]'::JSONB,
        hero_photo TEXT,
        status VARCHAR(50) NOT NULL DEFAULT 'draft',
        featured BOOLEAN DEFAULT FALSE,
        seller_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        published_at TIMESTAMP,
        sold_at TIMESTAMP
      )
    `;

    // Add new columns safely (IF NOT EXISTS — no-op if already present)
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS tier VARCHAR(20) NOT NULL DEFAULT 'standard'`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS is_free_early_adopter BOOLEAN DEFAULT FALSE`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS video_url TEXT`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS admin_notes TEXT`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS denied_reason TEXT`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS sold_price INTEGER`;

    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        listing_id INTEGER REFERENCES listings(id),
        sender_name VARCHAR(255),
        sender_email VARCHAR(255),
        content TEXT NOT NULL,
        read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS provider_applications (
        id SERIAL PRIMARY KEY,
        business_name VARCHAR(255) NOT NULL,
        owner_name VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        location VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        website TEXT,
        instagram VARCHAR(100),
        years_in_business VARCHAR(50),
        specialties TEXT NOT NULL,
        ideal_client TEXT,
        why_list TEXT,
        referred_by VARCHAR(255),
        status VARCHAR(50) NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS market_data (
        id SERIAL PRIMARY KEY,
        segment VARCHAR(200) NOT NULL,
        avg_price INTEGER,
        trend_percent DECIMAL(5,2),
        trend_direction VARCHAR(10),
        commentary TEXT,
        data_source VARCHAR(100),
        recorded_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS deal_alerts (
        id SERIAL PRIMARY KEY,
        source_url TEXT NOT NULL,
        source_site VARCHAR(100),
        title TEXT NOT NULL,
        price INTEGER,
        estimated_value INTEGER,
        deal_score INTEGER,
        image_url TEXT,
        location VARCHAR(200),
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    // ─── Services marketplace: providers, gigs, orders (idempotent) ───
    await sql`ALTER TABLE provider_applications ADD COLUMN IF NOT EXISTS provider_type VARCHAR(20) NOT NULL DEFAULT 'business'`;

    await sql`
      CREATE TABLE IF NOT EXISTS service_providers (
        id SERIAL PRIMARY KEY,
        clerk_user_id VARCHAR(255),
        business_name VARCHAR(255) NOT NULL,
        owner_name VARCHAR(255) NOT NULL,
        slug VARCHAR(300) NOT NULL UNIQUE,
        category VARCHAR(100) NOT NULL,
        location VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        website TEXT,
        instagram VARCHAR(100),
        description TEXT NOT NULL,
        specialties JSONB DEFAULT '[]',
        years_in_business VARCHAR(50),
        price_range VARCHAR(10) DEFAULT '$$',
        verified BOOLEAN DEFAULT FALSE,
        founding_provider BOOLEAN DEFAULT FALSE,
        rating DECIMAL(3,1) DEFAULT 0,
        review_count INTEGER DEFAULT 0,
        status VARCHAR(50) NOT NULL DEFAULT 'pending',
        application_id INTEGER,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    // Provider columns added over time (freelancer + payouts)
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
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_status VARCHAR(50)`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS claim_token VARCHAR(64)`;

    await sql`
      CREATE TABLE IF NOT EXISTS gigs (
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
      )
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS gig_packages (
        id SERIAL PRIMARY KEY,
        gig_id INTEGER NOT NULL REFERENCES gigs(id) ON DELETE CASCADE,
        tier VARCHAR(20) NOT NULL,
        title VARCHAR(200),
        description TEXT,
        price INTEGER NOT NULL,
        delivery_days INTEGER,
        revisions INTEGER,
        features JSONB DEFAULT '[]'
      )
    `;
    await sql`
      CREATE TABLE IF NOT EXISTS gig_orders (
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
      )
    `;
    // gig_orders payment/escrow + dispute + buyer-account columns
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

    // ─── Auction results (market comps) — table + ingest columns ───
    await sql`
      CREATE TABLE IF NOT EXISTS auction_results (
        id SERIAL PRIMARY KEY,
        source VARCHAR(80) NOT NULL DEFAULT 'import',
        source_url TEXT,
        lot_title TEXT,
        year INTEGER,
        make VARCHAR(100),
        model VARCHAR(200),
        trim VARCHAR(200),
        mileage INTEGER,
        transmission VARCHAR(50),
        engine TEXT,
        exterior_color VARCHAR(100),
        sale_price INTEGER,
        estimate_high INTEGER,
        estimate_low INTEGER,
        sold BOOLEAN DEFAULT TRUE,
        auction_date TIMESTAMP,
        auction_house VARCHAR(200),
        thumbnail_url TEXT,
        segment VARCHAR(100),
        category VARCHAR(50),
        notes TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await sql`ALTER TABLE auction_results ADD COLUMN IF NOT EXISTS external_id VARCHAR(255)`;
    await sql`ALTER TABLE auction_results ADD COLUMN IF NOT EXISTS dedupe_key TEXT`;
    await sql`ALTER TABLE auction_results ADD COLUMN IF NOT EXISTS vin VARCHAR(32)`;
    await sql`ALTER TABLE auction_results ADD COLUMN IF NOT EXISTS currency VARCHAR(10) DEFAULT 'usd'`;
    await sql`ALTER TABLE auction_results ADD COLUMN IF NOT EXISTS location VARCHAR(200)`;
    await sql`ALTER TABLE auction_results ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP NOT NULL DEFAULT NOW()`;
    await sql`CREATE UNIQUE INDEX IF NOT EXISTS auction_results_dedupe ON auction_results(dedupe_key)`;
    await sql`CREATE INDEX IF NOT EXISTS auction_results_make_model ON auction_results(make, model)`;

    console.log('[Fully Sorted] DB schema verified/migrated on startup.');
  } catch (err) {
    // Never crash the server over a migration — just log
    console.error('[Fully Sorted] DB migration warning:', err);
  }
}
