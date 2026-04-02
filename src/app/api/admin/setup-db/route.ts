import { NextResponse } from 'next/server';

/**
 * Database setup/migration endpoint.
 * Creates all tables if they don't exist, and adds any missing columns.
 * Protected by ADMIN_SECRET env var.
 * GET  → health check (no auth required)
 * POST → create/migrate tables (requires x-admin-secret header)
 */

export async function POST(request: Request) {
  const secret = request.headers.get('x-admin-secret');
  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'DATABASE_URL not set' }, { status: 503 });
  }

  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    // ── Create base tables ──────────────────────────────────────────────
    await sql`
      CREATE TABLE IF NOT EXISTS users (
        id          SERIAL PRIMARY KEY,
        email       VARCHAR(255) NOT NULL UNIQUE,
        name        VARCHAR(255),
        avatar_url  TEXT,
        role        VARCHAR(50) NOT NULL DEFAULT 'user',
        created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS listings (
        id              SERIAL PRIMARY KEY,
        slug            VARCHAR(500) NOT NULL UNIQUE,
        year            INTEGER NOT NULL,
        make            VARCHAR(100) NOT NULL,
        model           VARCHAR(200) NOT NULL,
        trim            VARCHAR(200),
        vin             VARCHAR(17),
        mileage         INTEGER,
        transmission    VARCHAR(50),
        engine          TEXT,
        drivetrain      VARCHAR(50),
        exterior_color  VARCHAR(100),
        interior_color  VARCHAR(100),
        body_style      VARCHAR(100),
        category        VARCHAR(50),
        city            VARCHAR(100),
        state           VARCHAR(50),
        zip_code        VARCHAR(10),
        price           INTEGER NOT NULL,
        sorted_price    BOOLEAN DEFAULT FALSE,
        description     TEXT,
        ai_description  TEXT,
        highlights      JSONB DEFAULT '[]'::JSONB,
        chris_take      TEXT,
        comp_avg        INTEGER,
        comp_count      INTEGER,
        photos          JSONB DEFAULT '[]'::JSONB,
        hero_photo      TEXT,
        status          VARCHAR(50) NOT NULL DEFAULT 'draft',
        featured        BOOLEAN DEFAULT FALSE,
        seller_id       INTEGER REFERENCES users(id),
        created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at      TIMESTAMP NOT NULL DEFAULT NOW(),
        published_at    TIMESTAMP,
        sold_at         TIMESTAMP
      )
    `;

    // ── Add missing columns (safe — IF NOT EXISTS) ──────────────────────
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS tier VARCHAR(20) NOT NULL DEFAULT 'standard'`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS is_free_early_adopter BOOLEAN DEFAULT FALSE`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS video_url TEXT`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS admin_notes TEXT`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS denied_reason TEXT`;
    await sql`ALTER TABLE listings ADD COLUMN IF NOT EXISTS sold_price INTEGER`;

    await sql`
      CREATE TABLE IF NOT EXISTS saved_listings (
        id          SERIAL PRIMARY KEY,
        user_id     INTEGER NOT NULL REFERENCES users(id),
        listing_id  INTEGER NOT NULL REFERENCES listings(id),
        created_at  TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS comments (
        id          SERIAL PRIMARY KEY,
        listing_id  INTEGER NOT NULL REFERENCES listings(id),
        user_id     INTEGER NOT NULL REFERENCES users(id),
        content     TEXT NOT NULL,
        parent_id   INTEGER,
        created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at  TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS market_data (
        id               SERIAL PRIMARY KEY,
        segment          VARCHAR(200) NOT NULL,
        avg_price        INTEGER,
        trend_percent    DECIMAL(5,2),
        trend_direction  VARCHAR(10),
        commentary       TEXT,
        data_source      VARCHAR(100),
        recorded_at      TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS deal_alerts (
        id               SERIAL PRIMARY KEY,
        source_url       TEXT NOT NULL,
        source_site      VARCHAR(100),
        title            TEXT NOT NULL,
        price            INTEGER,
        estimated_value  INTEGER,
        deal_score       INTEGER,
        image_url        TEXT,
        location         VARCHAR(200),
        status           VARCHAR(50) DEFAULT 'new',
        created_at       TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS provider_applications (
        id                SERIAL PRIMARY KEY,
        business_name     VARCHAR(255) NOT NULL,
        owner_name        VARCHAR(255) NOT NULL,
        category          VARCHAR(100) NOT NULL,
        location          VARCHAR(255) NOT NULL,
        email             VARCHAR(255) NOT NULL,
        phone             VARCHAR(50),
        website           TEXT,
        instagram         VARCHAR(100),
        years_in_business VARCHAR(50),
        specialties       TEXT NOT NULL,
        ideal_client      TEXT,
        why_list          TEXT,
        referred_by       VARCHAR(255),
        status            VARCHAR(50) NOT NULL DEFAULT 'pending',
        created_at        TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    await sql`
      CREATE TABLE IF NOT EXISTS messages (
        id          SERIAL PRIMARY KEY,
        listing_id  INTEGER REFERENCES listings(id),
        sender_name VARCHAR(255),
        sender_email VARCHAR(255),
        content     TEXT NOT NULL,
        read        BOOLEAN DEFAULT FALSE,
        created_at  TIMESTAMP NOT NULL DEFAULT NOW()
      )
    `;

    // Get current counts
    const [{ listing_count }] = await sql`SELECT COUNT(*)::int AS listing_count FROM listings`;

    return NextResponse.json({
      success: true,
      message: 'Database schema up to date. All tables and columns created.',
      tables: ['users', 'listings', 'saved_listings', 'comments', 'market_data', 'deal_alerts', 'provider_applications', 'messages'],
      stats: { listingCount: listing_count },
    });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('DB setup error:', msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ connected: false, message: 'DATABASE_URL not set' });
  }
  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);
    const [{ count }] = await sql`SELECT COUNT(*)::int AS count FROM listings`;
    return NextResponse.json({ connected: true, listingCount: count });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ connected: false, error: msg });
  }
}
