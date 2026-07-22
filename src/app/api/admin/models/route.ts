import { NextRequest, NextResponse } from 'next/server';
import { generateModelPage } from '@/lib/ai/generate-model-page';

function isAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get('fs_admin')?.value;
  const header = request.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  return neon(process.env.DATABASE_URL!);
}

// GET /api/admin/models — all models (any status) + queue, for the review console.
export async function GET(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ models: [], queue: [], noDb: true });

  const sql = await getSql();
  try {
    const models = await sql`
      SELECT m.id, m.slug, m.make, m.model, m.generation, m.year_start, m.year_end,
        m.status, m.overall_confidence, m.ai_model, m.updated_at,
        (SELECT COUNT(*) FROM model_sources s WHERE s.model_id = m.id)::int AS source_count,
        (SELECT COUNT(*) FROM model_claims c WHERE c.model_id = m.id)::int AS claim_count,
        (SELECT COUNT(*) FROM model_claims c WHERE c.model_id = m.id AND c.status='disputed')::int AS disputed_count
      FROM vehicle_models m
      ORDER BY
        CASE m.status WHEN 'draft' THEN 0 WHEN 'reviewed' THEN 1 ELSE 2 END,
        m.updated_at DESC
    `;
    const queue = await sql`
      SELECT id, make, model, generation, priority, status, created_at
      FROM model_queue ORDER BY status ASC, priority DESC, created_at ASC
    `;
    return NextResponse.json({ models, queue });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message, models: [], queue: [] }, { status: 500 });
  }
}

// POST /api/admin/models — { action: 'generate' | 'enqueue', make, model, generation? }
export async function POST(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const body = await request.json();
  const { action, make, model, generation } = body;

  // Bulk publish every non-published model page (no make/model needed).
  if (action === 'publish-all') {
    const sqlp = await getSql();
    const rows = (await sqlp`
      UPDATE vehicle_models
      SET status='published', published_at=COALESCE(published_at, NOW()), updated_at=NOW()
      WHERE status != 'published'
      RETURNING id
    `) as { id: number }[];
    return NextResponse.json({ success: true, published: rows.length });
  }

  if (!make || !model) return NextResponse.json({ error: 'make and model required' }, { status: 400 });

  const sql = await getSql();

  if (action === 'enqueue') {
    await sql`INSERT INTO model_queue (make, model, generation, priority, status)
              VALUES (${make}, ${model}, ${generation ?? null}, ${body.priority ?? 50}, 'queued')`;
    return NextResponse.json({ success: true });
  }

  // action === 'generate' — run the AI agent, store as DRAFT (never auto-publish).
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'ANTHROPIC_API_KEY not configured' }, { status: 503 });
  }
  try {
    const { page, model: aiModel } = await generateModelPage({ make, model, generation });

    const inserted = (await sql`
      INSERT INTO vehicle_models
        (slug, make, model, generation, generation_code, year_start, year_end,
         body_styles, engines, production_total, production_notes, notable_trims, specs,
         summary, history, market_notes, what_to_look_for, common_problems, value_trajectory,
         overall_confidence, status, ai_model, generated_at)
      VALUES
        (${page.slug}, ${page.make}, ${page.model}, ${page.generation}, ${page.generationCode},
         ${page.yearStart}, ${page.yearEnd}, ${JSON.stringify(page.bodyStyles || [])}, ${JSON.stringify(page.engines || [])},
         ${page.productionTotal}, ${page.productionNotes}, ${JSON.stringify(page.notableTrims || [])}, ${JSON.stringify(page.specs || {})},
         ${page.summary}, ${page.history}, ${page.marketNotes}, ${page.whatToLookFor}, ${page.commonProblems}, ${page.valueTrajectory},
         ${page.overallConfidence}, 'draft', ${aiModel}, NOW())
      ON CONFLICT (slug) DO UPDATE SET
        summary=EXCLUDED.summary, history=EXCLUDED.history, market_notes=EXCLUDED.market_notes,
        what_to_look_for=EXCLUDED.what_to_look_for, common_problems=EXCLUDED.common_problems,
        value_trajectory=EXCLUDED.value_trajectory, ai_model=EXCLUDED.ai_model,
        generated_at=NOW(), status='draft', updated_at=NOW()
      RETURNING id
    `) as { id: number }[];
    const modelId = inserted[0].id;

    await sql`DELETE FROM model_claims WHERE model_id=${modelId}`;
    await sql`DELETE FROM model_sources WHERE model_id=${modelId}`;

    const refToId = new Map<string, number>();
    for (const src of page.sources || []) {
      const r = (await sql`
        INSERT INTO model_sources (model_id, title, url, publisher, source_type, reliability, notes)
        VALUES (${modelId}, ${src.title}, ${src.url}, ${src.publisher}, ${src.sourceType}, ${src.reliability}, ${src.notes ?? null})
        RETURNING id`) as { id: number }[];
      refToId.set(src.ref, r[0].id);
    }
    for (const c of page.claims || []) {
      const ids = (c.sourceRefs || []).map((ref) => refToId.get(ref)).filter((x): x is number => typeof x === 'number');
      await sql`INSERT INTO model_claims (model_id, section, claim_text, confidence, status, source_ids, conflict_note)
                VALUES (${modelId}, ${c.section}, ${c.claimText}, ${c.confidence}, ${c.status}, ${JSON.stringify(ids)}, ${c.conflictNote ?? null})`;
    }

    // Mark queue row drafted if present.
    await sql`UPDATE model_queue SET status='drafted'
              WHERE make=${make} AND model=${model} AND COALESCE(generation,'')=COALESCE(${generation ?? null},'')`;

    return NextResponse.json({ success: true, modelId, slug: page.slug, status: 'draft' });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message || 'Generation failed' }, { status: 500 });
  }
}
