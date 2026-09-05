/**
 * Next.js Instrumentation Hook
 * Runs once on server startup (each Vercel cold start / deployment).
 * Ensures the database schema is always up to date.
 */
export async function register() {
  // Public forms reach Chris by two routes: a database row and a notification
  // email. If BOTH are unconfigured, every submission is silently lost, so say
  // so loudly at boot rather than discovering it from a missing enquiry.
  {
    const hasDb = !!process.env.DATABASE_URL;
    const hasEmail = !!process.env.RESEND_API_KEY;
    if (!hasDb && !hasEmail) {
      console.error(
        "[startup] CRITICAL: neither DATABASE_URL nor RESEND_API_KEY is set — " +
          "public form submissions cannot be delivered by any route."
      );
    } else if (!hasDb) {
      console.warn("[startup] DATABASE_URL not set — submissions rely on email only.");
    } else if (!hasEmail) {
      console.warn("[startup] RESEND_API_KEY not set — submissions are stored but no notifications will be sent.");
    }
  }

  // Only run in Node.js runtime (not Edge), and only on server
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  if (!process.env.DATABASE_URL) return;

  // ─────────────────────────────────────────────────────────────────────────
  // ORM-CRITICAL COLUMNS — their own try/catch, and they run FIRST.
  //
  // Drizzle names every mapped column explicitly in the SQL it emits, so a bare
  // .select() on service_providers compiles to
  //   select "id", "slug", ..., "account_link_token" from "service_providers"
  // A column that schema.ts declares but the database lacks therefore breaks
  // EVERY read and write of that table, not just the feature that added it.
  //
  // This block used to live inside the big migration try/catch below. On
  // 2026-08-22 that took production down: something earlier in that block threw,
  // the single catch swallowed it, every statement after it was skipped, and
  // every public provider profile 404'd (the page catches the query error and
  // calls notFound()). Nothing surfaced it because both failures are silent.
  //
  // So: separate try/catch, before anything else can fail, and a loud log.
  // Add a column to schema.ts, add it here — not to an admin-only setup route.
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_sent_at TIMESTAMP`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS outreach_responded_at TIMESTAMP`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS account_link_token VARCHAR(64)`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS account_link_sent_at TIMESTAMP`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS account_link_expires_at TIMESTAMP`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS account_linked_at TIMESTAMP`;
    await sql`CREATE UNIQUE INDEX IF NOT EXISTS service_providers_account_link_token_idx
              ON service_providers (account_link_token)`;
    // Work preferences (2026-08-25). In schema.ts, therefore ORM-critical:
    // without these every provider read fails, not just the preferences panel.
    // accepting_work is NOT NULL DEFAULT TRUE so existing rows keep today's
    // behaviour — a shop is presumed open until it says otherwise.
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS accepting_work BOOLEAN NOT NULL DEFAULT TRUE`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS marques JSONB DEFAULT '[]'::JSONB`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS service_types JSONB DEFAULT '[]'::JSONB`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS min_job_value INTEGER`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS service_radius_miles INTEGER`;
    // Where the work happens (2026-08-31). Replaces the business/freelancer
    // split as the axis the directory is cut on. In schema.ts, therefore
    // ORM-critical: without these every provider read fails, not just the new
    // filter. Both default to "hasn't told us" so existing rows are unchanged
    // and render exactly as they do today.
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS work_settings JSONB DEFAULT '[]'::JSONB`;
    await sql`ALTER TABLE service_providers ADD COLUMN IF NOT EXISTS team_size VARCHAR(20)`;
  } catch (err) {
    console.error(
      '[Fully Sorted] CRITICAL: could not ensure ORM-critical service_providers columns. ' +
        'Every provider read will fail until this is resolved:',
      err,
    );
  }

  // ─────────────────────────────────────────────────────────────────────────
  // MESSAGES — every directory lead and every listing enquiry lands here.
  //
  // Its own try/catch for the same reason as the block above: if this table is
  // wrong, a real owner's enquiry to a real shop is lost, and the only symptom
  // is silence. Two separate faults are repaired here.
  //
  // 1. The CREATE TABLE further down this file has ALWAYS declared a different
  //    shape from the one /api/messages inserts into (`content`/`read` versus
  //    `message_text`/`type`/`status`). Production was built by an admin setup
  //    route and has the right shape, so this was invisible — but any fresh
  //    database threw on every insert. The ALTERs below bring either shape up
  //    to the real one.
  // 2. The brief and lead-outcome columns (2026-08-25) are declared in
  //    schema.ts, so they must exist here rather than in an admin-only route.
  // ─────────────────────────────────────────────────────────────────────────
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS listing_slug VARCHAR(500)`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS listing_title TEXT`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS provider_id INTEGER`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS sender_phone VARCHAR(50)`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS message_text TEXT`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS type VARCHAR(50) NOT NULL DEFAULT 'inquiry'`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS offer_amount INTEGER`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS status VARCHAR(50) NOT NULL DEFAULT 'new'`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS admin_notes TEXT`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP NOT NULL DEFAULT NOW()`;
    // The car brief + the shop's own report of what happened to the lead.
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS brief JSONB`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS action_token VARCHAR(64)`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS replied_at TIMESTAMP`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS outcome VARCHAR(30)`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS junk BOOLEAN DEFAULT FALSE`;
    await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS junk_reason VARCHAR(120)`;
    await sql`CREATE UNIQUE INDEX IF NOT EXISTS messages_action_token_idx ON messages (action_token)`;
    await sql`CREATE INDEX IF NOT EXISTS messages_provider_idx ON messages (provider_id, created_at DESC)`;
  } catch (err) {
    console.error(
      '[Fully Sorted] CRITICAL: could not ensure messages columns. ' +
        'Directory leads may fail to save until this is resolved:',
      err,
    );
  }

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
    // Dealer listings (2026-09-04). Same commit as the schema.ts columns.
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS seller_type VARCHAR(20) NOT NULL DEFAULT 'private'`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS dealer_name VARCHAR(200)`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS dealer_license VARCHAR(100)`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS dealer_fees_note TEXT`;

    // The shape /api/messages actually inserts into. This declaration used to
    // say `content`/`read`, which no code has ever written — see the repair
    // block near the top of this file.
    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        listing_id INTEGER REFERENCES listings(id),
        listing_slug VARCHAR(500),
        listing_title TEXT,
        provider_id INTEGER,
        sender_name VARCHAR(255) NOT NULL,
        sender_email VARCHAR(255) NOT NULL,
        sender_phone VARCHAR(50),
        message_text TEXT NOT NULL,
        type VARCHAR(50) NOT NULL DEFAULT 'inquiry',
        offer_amount INTEGER,
        status VARCHAR(50) NOT NULL DEFAULT 'new',
        admin_notes TEXT,
        brief JSONB,
        action_token VARCHAR(64),
        replied_at TIMESTAMP,
        outcome VARCHAR(30),
        junk BOOLEAN DEFAULT FALSE,
        junk_reason VARCHAR(120),
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
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

    // ─── User-submitted sold prices (first-party data, reviewed before publish) ───
    await sql`
      CREATE TABLE IF NOT EXISTS sale_submissions (
        id SERIAL PRIMARY KEY,
        make VARCHAR(100) NOT NULL,
        model VARCHAR(200) NOT NULL,
        year INTEGER,
        trim VARCHAR(200),
        vin VARCHAR(32),
        sale_price INTEGER,
        currency VARCHAR(10) DEFAULT 'usd',
        sale_date TIMESTAMP,
        venue VARCHAR(200),
        mileage INTEGER,
        exterior_color VARCHAR(100),
        location VARCHAR(200),
        source_url TEXT,
        notes TEXT,
        submitter_name VARCHAR(255),
        submitter_email VARCHAR(255),
        status VARCHAR(20) NOT NULL DEFAULT 'pending',
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        reviewed_at TIMESTAMP
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS sale_submissions_status ON sale_submissions(status)`;

    // ─── Owner contributions to model histories ──────────────────────────────
    // Corrections and stories submitted against an encyclopedia page. Always
    // reviewed before anything appears publicly: these pages carry Chris's name
    // and promise cited research, so unreviewed text must never render beside it.
    // `kind` distinguishes a factual correction from a personal story so the two
    // can be surfaced differently (stories stay dark until there is traffic).
    await sql`
      CREATE TABLE IF NOT EXISTS model_contributions (
        id SERIAL PRIMARY KEY,
        model_id INTEGER NOT NULL REFERENCES vehicle_models(id) ON DELETE CASCADE,
        kind VARCHAR(20) NOT NULL DEFAULT 'correction',
        section VARCHAR(40),
        body TEXT NOT NULL,
        source_url TEXT,
        submitter_name VARCHAR(255),
        submitter_email VARCHAR(255),
        submitter_credential VARCHAR(255),
        status VARCHAR(20) NOT NULL DEFAULT 'pending',
        admin_note TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        reviewed_at TIMESTAMP,
        published_at TIMESTAMP
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS model_contributions_status ON model_contributions(status)`;
    await sql`CREATE INDEX IF NOT EXISTS model_contributions_model ON model_contributions(model_id, status)`;

    // Model-history hero photos (2026-09-05). vehicle_models is created lazily by
    // /api/admin/seed-models, so guard the ALTER on the table existing.
    await sql`ALTER TABLE IF EXISTS vehicle_models ADD COLUMN IF NOT EXISTS hero_photo_credit TEXT`;

    // ─── Chassis Register ────────────────────────────────────────────────────
    // See schema.ts: one row per car, every fact an event with a source URL.
    // vehicle_models is created lazily by /api/admin/seed-models, so the FK is
    // nullable and the register keys on model_slug; model_id is a convenience.
    await sql`
      CREATE TABLE IF NOT EXISTS registry_chassis (
        id SERIAL PRIMARY KEY,
        model_id INTEGER,
        model_slug VARCHAR(300) NOT NULL,
        chassis VARCHAR(64) NOT NULL,
        vin VARCHAR(32),
        build_year INTEGER,
        variant VARCHAR(80),
        market_spec VARCHAR(40),
        exterior_color VARCHAR(80),
        interior_color VARCHAR(80),
        engine_number VARCHAR(64),
        notes TEXT,
        confidence VARCHAR(20) DEFAULT 'medium',
        status VARCHAR(20) NOT NULL DEFAULT 'published',
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
        UNIQUE (model_slug, chassis)
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS registry_chassis_model ON registry_chassis(model_slug, status)`;
    await sql`CREATE INDEX IF NOT EXISTS registry_chassis_vin ON registry_chassis(vin)`;
    await sql`
      CREATE TABLE IF NOT EXISTS registry_events (
        id SERIAL PRIMARY KEY,
        chassis_id INTEGER NOT NULL REFERENCES registry_chassis(id) ON DELETE CASCADE,
        event_type VARCHAR(30) NOT NULL,
        event_date VARCHAR(10),
        title VARCHAR(300) NOT NULL,
        venue VARCHAR(200),
        location VARCHAR(200),
        outcome VARCHAR(30),
        price_amount NUMERIC(14,2),
        price_currency VARCHAR(3),
        estimate_low NUMERIC(14,2),
        estimate_high NUMERIC(14,2),
        mileage INTEGER,
        mileage_unit VARCHAR(5),
        details TEXT,
        source_url TEXT NOT NULL,
        source_title VARCHAR(300),
        source_publisher VARCHAR(120),
        source_type VARCHAR(30),
        status VARCHAR(20) NOT NULL DEFAULT 'confirmed',
        conflict_note TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS registry_events_chassis ON registry_events(chassis_id, event_date)`;
    await sql`
      CREATE TABLE IF NOT EXISTS registry_submissions (
        id SERIAL PRIMARY KEY,
        model_slug VARCHAR(300) NOT NULL,
        chassis VARCHAR(64) NOT NULL,
        vin VARCHAR(32),
        kind VARCHAR(20) NOT NULL DEFAULT 'event',
        body TEXT NOT NULL,
        event_date VARCHAR(10),
        source_url TEXT,
        submitter_name VARCHAR(255),
        submitter_email VARCHAR(255),
        submitter_relation VARCHAR(40),
        status VARCHAR(20) NOT NULL DEFAULT 'pending',
        admin_note TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        reviewed_at TIMESTAMP
      )
    `;
    await sql`CREATE INDEX IF NOT EXISTS registry_submissions_status ON registry_submissions(status)`;

    console.log('[Fully Sorted] DB schema verified/migrated on startup.');
  } catch (err) {
    // Never crash the server over a migration — just log
    console.error('[Fully Sorted] DB migration warning:', err);
  }
}
