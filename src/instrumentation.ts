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

    console.log('[Fully Sorted] DB schema verified/migrated on startup.');
  } catch (err) {
    // Never crash the server over a migration — just log
    console.error('[Fully Sorted] DB migration warning:', err);
  }
}
