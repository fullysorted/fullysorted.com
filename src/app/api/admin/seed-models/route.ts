import { NextRequest, NextResponse } from 'next/server';
import { seed964 } from '@/lib/data/model-seed-964';
import { seed240z } from '@/lib/data/model-seed-240z';
import { seed993 } from '@/lib/data/model-seed-993';
import { seedE30M3 } from '@/lib/data/model-seed-e30-m3';
import { seed308 } from '@/lib/data/model-seed-308';
import { seedSupraA80 } from '@/lib/data/model-seed-supra-a80';
import { seedNsx } from '@/lib/data/model-seed-nsx';

// All researched model drafts to seed (status='draft' for human review).
const SEEDS = [seed964, seed240z, seed993, seedE30M3, seed308, seedSupraA80, seedNsx];

// Auth: header x-admin-secret OR fs_admin cookie (matches other admin routes).
function isAuthorized(request: NextRequest): boolean {
  const header = request.headers.get('x-admin-secret');
  const cookie = request.cookies.get('fs_admin')?.value;
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (header === secret || cookie === secret);
}

// Collectibles-first starter queue. The agent drains highest priority first;
// daily-driver future-classics (4Runner et al.) sit low until collectibles are done.
const STARTER_QUEUE: { make: string; model: string; generation: string | null; priority: number }[] = [
  { make: 'Porsche', model: '911', generation: '993', priority: 95 },
  { make: 'Porsche', model: '911', generation: '930 Turbo', priority: 90 },
  { make: 'BMW', model: 'M3', generation: 'E30', priority: 90 },
  { make: 'Ferrari', model: '308 GTB/GTS', generation: null, priority: 88 },
  { make: 'Nissan', model: '240Z', generation: 'S30', priority: 86 },
  { make: 'Toyota', model: 'Supra', generation: 'A80 (Mk4)', priority: 85 },
  { make: 'Acura', model: 'NSX', generation: 'NA1/NA2', priority: 84 },
  { make: 'Mazda', model: 'RX-7', generation: 'FD', priority: 82 },
  { make: 'Chevrolet', model: 'Corvette', generation: 'C2 Sting Ray', priority: 80 },
  { make: 'Ford', model: 'Mustang', generation: '1965–1968', priority: 78 },
  { make: 'Toyota', model: '4Runner', generation: 'N120/N130 (2nd gen)', priority: 20 },
];

export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database configured' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  // 1. Create tables if they don't exist (so no drizzle-kit CLI is required).
  await sql`CREATE TABLE IF NOT EXISTS vehicle_models (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(300) NOT NULL UNIQUE,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(200) NOT NULL,
    generation VARCHAR(100),
    generation_code VARCHAR(50),
    trim VARCHAR(200),
    year_start INTEGER,
    year_end INTEGER,
    body_styles JSONB DEFAULT '[]',
    engines JSONB DEFAULT '[]',
    production_total INTEGER,
    production_notes TEXT,
    notable_trims JSONB DEFAULT '[]',
    specs JSONB DEFAULT '{}',
    summary TEXT,
    history TEXT,
    market_notes TEXT,
    what_to_look_for TEXT,
    common_problems TEXT,
    value_trajectory TEXT,
    hero_photo TEXT,
    overall_confidence VARCHAR(20) DEFAULT 'medium',
    status VARCHAR(20) NOT NULL DEFAULT 'draft',
    reviewed_by VARCHAR(255),
    reviewer_notes TEXT,
    ai_model VARCHAR(100),
    generated_at TIMESTAMP,
    reviewed_at TIMESTAMP,
    published_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
  )`;
  await sql`CREATE TABLE IF NOT EXISTS model_sources (
    id SERIAL PRIMARY KEY,
    model_id INTEGER NOT NULL REFERENCES vehicle_models(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    url TEXT,
    publisher VARCHAR(200),
    source_type VARCHAR(50),
    reliability VARCHAR(20) DEFAULT 'medium',
    accessed_at TIMESTAMP DEFAULT NOW(),
    notes TEXT
  )`;
  await sql`CREATE TABLE IF NOT EXISTS model_claims (
    id SERIAL PRIMARY KEY,
    model_id INTEGER NOT NULL REFERENCES vehicle_models(id) ON DELETE CASCADE,
    section VARCHAR(50),
    claim_text TEXT NOT NULL,
    confidence VARCHAR(20) DEFAULT 'medium',
    status VARCHAR(20) DEFAULT 'unverified',
    source_ids JSONB DEFAULT '[]',
    conflict_note TEXT,
    reviewer_note TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
  )`;
  await sql`CREATE TABLE IF NOT EXISTS model_media (
    id SERIAL PRIMARY KEY,
    model_id INTEGER NOT NULL REFERENCES vehicle_models(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    caption TEXT,
    credit VARCHAR(255),
    source_url TEXT,
    license VARCHAR(100),
    sort_order INTEGER DEFAULT 0
  )`;
  await sql`CREATE TABLE IF NOT EXISTS model_queue (
    id SERIAL PRIMARY KEY,
    make VARCHAR(100) NOT NULL,
    model VARCHAR(200) NOT NULL,
    generation VARCHAR(100),
    priority INTEGER DEFAULT 0,
    status VARCHAR(20) NOT NULL DEFAULT 'queued',
    notes TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
  )`;

  // 2. Upsert each researched draft (idempotent — re-running refreshes them).
  const results: { slug: string; sources: number; claims: number }[] = [];
  for (const s of SEEDS) {
  const existing = (await sql`SELECT id FROM vehicle_models WHERE slug = ${s.slug} LIMIT 1`) as { id: number }[];
  let modelId: number;

  if (existing[0]) {
    modelId = existing[0].id;
    await sql`
      UPDATE vehicle_models SET
        make=${s.make}, model=${s.model}, generation=${s.generation}, generation_code=${s.generationCode},
        year_start=${s.yearStart}, year_end=${s.yearEnd},
        body_styles=${JSON.stringify(s.bodyStyles)}, engines=${JSON.stringify(s.engines)},
        production_total=${s.productionTotal}, production_notes=${s.productionNotes},
        notable_trims=${JSON.stringify(s.notableTrims)}, specs=${JSON.stringify(s.specs)},
        summary=${s.summary}, history=${s.history}, market_notes=${s.marketNotes},
        what_to_look_for=${s.whatToLookFor}, common_problems=${s.commonProblems},
        value_trajectory=${s.valueTrajectory}, overall_confidence=${s.overallConfidence},
        ai_model='human-researched (pilot)', generated_at=NOW(), updated_at=NOW()
      WHERE id=${modelId}
    `;
    // Replace children so the seed is the source of truth.
    await sql`DELETE FROM model_claims WHERE model_id=${modelId}`;
    await sql`DELETE FROM model_sources WHERE model_id=${modelId}`;
  } else {
    const inserted = (await sql`
      INSERT INTO vehicle_models
        (slug, make, model, generation, generation_code, year_start, year_end,
         body_styles, engines, production_total, production_notes, notable_trims, specs,
         summary, history, market_notes, what_to_look_for, common_problems, value_trajectory,
         overall_confidence, status, ai_model, generated_at)
      VALUES
        (${s.slug}, ${s.make}, ${s.model}, ${s.generation}, ${s.generationCode}, ${s.yearStart}, ${s.yearEnd},
         ${JSON.stringify(s.bodyStyles)}, ${JSON.stringify(s.engines)}, ${s.productionTotal}, ${s.productionNotes},
         ${JSON.stringify(s.notableTrims)}, ${JSON.stringify(s.specs)},
         ${s.summary}, ${s.history}, ${s.marketNotes}, ${s.whatToLookFor}, ${s.commonProblems}, ${s.valueTrajectory},
         ${s.overallConfidence}, 'draft', 'human-researched (pilot)', NOW())
      RETURNING id
    `) as { id: number }[];
    modelId = inserted[0].id;
  }

  // 3. Insert sources, capturing ref → id mapping.
  const refToId = new Map<string, number>();
  for (const src of s.sources) {
    const r = (await sql`
      INSERT INTO model_sources (model_id, title, url, publisher, source_type, reliability, notes)
      VALUES (${modelId}, ${src.title}, ${src.url}, ${src.publisher}, ${src.sourceType}, ${src.reliability}, ${src.notes ?? null})
      RETURNING id
    `) as { id: number }[];
    refToId.set(src.ref, r[0].id);
  }

  // 4. Insert claims, resolving sourceRefs → source ids.
  for (const c of s.claims) {
    const ids = c.sourceRefs.map((ref) => refToId.get(ref)).filter((x): x is number => typeof x === 'number');
    await sql`
      INSERT INTO model_claims (model_id, section, claim_text, confidence, status, source_ids, conflict_note)
      VALUES (${modelId}, ${c.section}, ${c.claimText}, ${c.confidence}, ${c.status}, ${JSON.stringify(ids)}, ${c.conflictNote ?? null})
    `;
  }

    results.push({ slug: s.slug, sources: s.sources.length, claims: s.claims.length });
  } // end for SEEDS

  // 5. Seed the starter queue (idempotent-ish: only add rows that aren't there).
  for (const q of STARTER_QUEUE) {
    const dupe = (await sql`
      SELECT id FROM model_queue WHERE make=${q.make} AND model=${q.model}
      AND COALESCE(generation,'')=COALESCE(${q.generation},'') LIMIT 1
    `) as { id: number }[];
    if (!dupe[0]) {
      await sql`INSERT INTO model_queue (make, model, generation, priority, status)
                VALUES (${q.make}, ${q.model}, ${q.generation}, ${q.priority}, 'queued')`;
    }
  }
  // Mark the 964 as already drafted in the queue (if listed) — it's done.
  await sql`INSERT INTO model_queue (make, model, generation, priority, status)
            SELECT 'Porsche', '911', '964', 100, 'drafted'
            WHERE NOT EXISTS (SELECT 1 FROM model_queue WHERE make='Porsche' AND model='911' AND generation='964')`;

  return NextResponse.json({
    success: true,
    seeded: results,
    count: results.length,
    status: 'draft',
    message: `Tables ready. ${results.length} model drafts seeded — review them in /admin/models before publishing.`,
  });
}
