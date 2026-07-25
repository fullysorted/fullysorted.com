import { NextRequest, NextResponse } from 'next/server';
import type { GeneratedModelPage } from '@/lib/ai/generate-model-page';

/**
 * POST /api/admin/models/import — insert a model page that was authored
 * elsewhere, without calling the generation agent.
 *
 * Same destination and same review rules as `action: 'generate'` on
 * /api/admin/models: the page lands as a DRAFT and is never auto-published.
 * The only difference is where the writing came from, which means research
 * done outside the app doesn't spend Anthropic credit on the deployment.
 *
 * Body: { page: GeneratedModelPage, authoredBy?: string }
 */
function isAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get('fs_admin')?.value;
  const header = request.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

export async function POST(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  let body: { page?: GeneratedModelPage; authoredBy?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const page = body.page;
  if (!page || !page.slug || !page.make || !page.model) {
    return NextResponse.json({ error: 'page.slug, page.make and page.model are required' }, { status: 400 });
  }
  if (!page.summary || !page.history) {
    return NextResponse.json({ error: 'page.summary and page.history are required' }, { status: 400 });
  }
  // A page with no sources cannot honour the cited-research promise the rest of
  // the encyclopedia makes, so refuse it rather than publish an unsourced page.
  if (!Array.isArray(page.sources) || page.sources.length === 0) {
    return NextResponse.json({ error: 'page.sources must contain at least one source' }, { status: 400 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);
  const authoredBy = (body.authoredBy || 'authored-external').slice(0, 80);

  try {
    const inserted = (await sql`
      INSERT INTO vehicle_models
        (slug, make, model, generation, generation_code, year_start, year_end,
         body_styles, engines, production_total, production_notes, notable_trims, specs,
         summary, history, market_notes, what_to_look_for, common_problems, value_trajectory,
         overall_confidence, status, ai_model, generated_at)
      VALUES
        (${page.slug}, ${page.make}, ${page.model}, ${page.generation ?? null}, ${page.generationCode ?? null},
         ${page.yearStart ?? null}, ${page.yearEnd ?? null},
         ${JSON.stringify(page.bodyStyles || [])}, ${JSON.stringify(page.engines || [])},
         ${page.productionTotal ?? null}, ${page.productionNotes ?? ''},
         ${JSON.stringify(page.notableTrims || [])}, ${JSON.stringify(page.specs || {})},
         ${page.summary}, ${page.history}, ${page.marketNotes ?? ''}, ${page.whatToLookFor ?? ''},
         ${page.commonProblems ?? ''}, ${page.valueTrajectory ?? ''},
         ${page.overallConfidence ?? 'medium'}, 'draft', ${authoredBy}, NOW())
      ON CONFLICT (slug) DO UPDATE SET
        summary=EXCLUDED.summary, history=EXCLUDED.history, market_notes=EXCLUDED.market_notes,
        what_to_look_for=EXCLUDED.what_to_look_for, common_problems=EXCLUDED.common_problems,
        value_trajectory=EXCLUDED.value_trajectory, production_total=EXCLUDED.production_total,
        production_notes=EXCLUDED.production_notes, notable_trims=EXCLUDED.notable_trims,
        specs=EXCLUDED.specs, body_styles=EXCLUDED.body_styles, engines=EXCLUDED.engines,
        year_start=EXCLUDED.year_start, year_end=EXCLUDED.year_end,
        overall_confidence=EXCLUDED.overall_confidence,
        ai_model=EXCLUDED.ai_model, generated_at=NOW(), status='draft', updated_at=NOW()
      RETURNING id
    `) as { id: number }[];
    const modelId = inserted[0].id;

    // Replace sources/claims wholesale so a re-import never leaves orphans.
    await sql`DELETE FROM model_claims WHERE model_id=${modelId}`;
    await sql`DELETE FROM model_sources WHERE model_id=${modelId}`;

    const refToId = new Map<string, number>();
    for (const src of page.sources) {
      const r = (await sql`
        INSERT INTO model_sources (model_id, title, url, publisher, source_type, reliability, notes)
        VALUES (${modelId}, ${src.title}, ${src.url}, ${src.publisher}, ${src.sourceType}, ${src.reliability}, ${src.notes ?? null})
        RETURNING id`) as { id: number }[];
      refToId.set(src.ref, r[0].id);
    }
    for (const c of page.claims || []) {
      const ids = (c.sourceRefs || [])
        .map((ref) => refToId.get(ref))
        .filter((x): x is number => typeof x === 'number');
      await sql`INSERT INTO model_claims (model_id, section, claim_text, confidence, status, source_ids, conflict_note)
                VALUES (${modelId}, ${c.section}, ${c.claimText}, ${c.confidence}, ${c.status}, ${JSON.stringify(ids)}, ${c.conflictNote ?? null})`;
    }

    await sql`UPDATE model_queue SET status='drafted'
              WHERE make=${page.make} AND model=${page.model}
                AND COALESCE(generation,'')=COALESCE(${page.generation ?? null},'')`;

    return NextResponse.json({
      success: true, modelId, slug: page.slug, status: 'draft',
      sources: page.sources.length, claims: (page.claims || []).length,
    });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message || 'Import failed' }, { status: 500 });
  }
}
