import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { sortIt, type SortItMode } from '@/lib/ai/sort-it';
import { SORT_IT_ENABLED } from '@/lib/features';
import { SORT_IT_DAILY_LIMIT, SORT_IT_WIDE_COST, type SortItAnswer, type SortItEvent } from '@/lib/sort-it-shared';
import { rateLimit } from '@/lib/rate-limit';

// A question runs one to six model turns with web search: 10 to 60 seconds.
// A wide search can run nine turns and ten searches: up to about two minutes.
export const maxDuration = 180;

/**
 * POST /api/sort-it  { question, mode?: 'normal' | 'wide', prior?: SortItAnswer }
 *
 * mode 'wide' is the "Search wider" button on an answer that did not fully
 * find it: a bigger research budget, briefed with what the first pass tried.
 * It counts as SORT_IT_WIDE_COST questions.
 *
 * Gated three ways, cheapest first:
 *   1. SORT_IT_ENABLED flag and a configured key.
 *   2. Signed-in members only (Clerk). Anonymous visitors see the sign-in prompt.
 *   3. SORT_IT_DAILY_LIMIT questions per member per rolling day, and a
 *      site-wide daily dollar ceiling (env SORT_IT_DAILY_USD, default 10).
 *      Past it the box rests until tomorrow rather than spending.
 *
 * Every question and answer is logged to sort_it_log. The log is product
 * research: the weakest answers each week say what the model histories and
 * the house knowledge file need next. Raw SQL on purpose, not in schema.ts,
 * so it can never trip the ORM missing-column outage.
 *
 * Response: NDJSON, one SortItEvent per line, so the box can show each search
 * as it happens.
 */

let ensured = false;
async function getSql() {
  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL!);
  if (!ensured) {
    await sql`CREATE TABLE IF NOT EXISTS sort_it_log (
      id SERIAL PRIMARY KEY,
      clerk_user_id VARCHAR(255) NOT NULL,
      question TEXT NOT NULL,
      answer JSONB,
      confidence VARCHAR(10),
      usd NUMERIC(8,4) DEFAULT 0,
      turns INTEGER DEFAULT 0,
      error TEXT,
      mode VARCHAR(10) DEFAULT 'normal',
      weight INTEGER DEFAULT 1,
      created_at TIMESTAMP NOT NULL DEFAULT NOW()
    )`;
    await sql`ALTER TABLE sort_it_log ADD COLUMN IF NOT EXISTS mode VARCHAR(10) DEFAULT 'normal'`;
    await sql`ALTER TABLE sort_it_log ADD COLUMN IF NOT EXISTS weight INTEGER DEFAULT 1`;
    await sql`CREATE INDEX IF NOT EXISTS sort_it_log_user_idx ON sort_it_log (clerk_user_id, created_at DESC)`;
    ensured = true;
  }
  return sql;
}

function json(event: SortItEvent, status: number) {
  return NextResponse.json(event, { status });
}

export async function POST(request: NextRequest) {
  if (!SORT_IT_ENABLED || !process.env.ANTHROPIC_API_KEY || !process.env.DATABASE_URL) {
    return json({ type: 'error', code: 'off', message: 'This box is switched off for the moment. The directory search still works.' }, 503);
  }
  const { userId } = await auth();
  if (!userId) {
    return json({ type: 'error', code: 'signin', message: 'Sign in to ask. It is free.' }, 401);
  }
  const burst = rateLimit(request, 'sort-it', 4, 60_000);
  if (burst) return burst;

  let question = '';
  let mode: SortItMode = 'normal';
  let prior: SortItAnswer | null = null;
  try {
    const body = await request.json();
    question = String(body?.question ?? '').trim().slice(0, 600);
    mode = body?.mode === 'wide' ? 'wide' : 'normal';
    // The member's own previous answer, echoed back to brief the wide pass.
    // Only the fields the harness reads, trimmed.
    if (mode === 'wide' && body?.prior && typeof body.prior === 'object') {
      const p = body.prior;
      // Search wider is for hunts only (cars, parts, memorabilia for sale).
      if (p.kind && p.kind !== 'hunt') {
        return json({ type: 'error', code: 'failed', message: 'A wider search is for finding a car or part for sale.' }, 400);
      }
      prior = {
        answer: String(p.answer ?? '').slice(0, 1500),
        searched: Array.isArray(p.searched) ? p.searched.slice(0, 6).map((x: unknown) => String(x).slice(0, 60)) : [],
        relaxed: Array.isArray(p.relaxed) ? p.relaxed.slice(0, 4).map((x: unknown) => String(x).slice(0, 100)) : [],
        confidence: 'low', sources: [], next: null, followUps: [], kind: 'hunt', found: 'partial', mode: 'normal',
      };
    }
  } catch { /* handled below */ }
  const weight = mode === 'wide' ? SORT_IT_WIDE_COST : 1;
  if (question.length < 3) {
    return json({ type: 'error', code: 'failed', message: 'Ask a question about a car, a part, or the work it needs.' }, 400);
  }

  const sql = await getSql();
  const [mine] = (await sql`
    SELECT COALESCE(SUM(COALESCE(weight, 1)), 0)::int AS n FROM sort_it_log
    WHERE clerk_user_id = ${userId} AND created_at > NOW() - INTERVAL '1 day' AND error IS NULL
  `) as { n: number }[];
  if ((mine?.n ?? 0) + weight > SORT_IT_DAILY_LIMIT) {
    const left = Math.max(0, SORT_IT_DAILY_LIMIT - (mine?.n ?? 0));
    const msg = mode === 'wide' && left > 0
      ? `A wide search uses ${SORT_IT_WIDE_COST} questions and ${left === 1 ? 'one is' : `${left} are`} left today. It opens again tomorrow.`
      : `That is ${SORT_IT_DAILY_LIMIT} questions today. The box opens again tomorrow.`;
    return json({ type: 'error', code: 'limit', message: msg }, 429);
  }
  const ceiling = Number(process.env.SORT_IT_DAILY_USD ?? 10);
  const [spend] = (await sql`
    SELECT COALESCE(SUM(usd), 0)::float AS usd FROM sort_it_log WHERE created_at > date_trunc('day', NOW())
  `) as { usd: number }[];
  if ((spend?.usd ?? 0) >= ceiling) {
    console.warn(`[ai] sort-it resting: daily ceiling $${ceiling} reached`);
    return json({ type: 'error', code: 'resting', message: 'The box has done its reading for today. It opens again tomorrow. The directory search still works.' }, 503);
  }
  const remainingBefore = SORT_IT_DAILY_LIMIT - (mine?.n ?? 0);

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (e: SortItEvent) => controller.enqueue(encoder.encode(JSON.stringify(e) + '\n'));
      send({ type: 'step', label: 'Reading the question' });
      try {
        const { answer, usage, turns } = await sortIt(question, (label) => send({ type: 'step', label }), { mode, prior });
        await sql`INSERT INTO sort_it_log (clerk_user_id, question, answer, confidence, usd, turns, mode, weight)
                  VALUES (${userId}, ${question}, ${JSON.stringify(answer)}::jsonb, ${answer.confidence}, ${usage.usd}, ${turns}, ${mode}, ${weight})`;
        send({ type: 'answer', answer, remaining: Math.max(0, remainingBefore - weight) });
      } catch (e) {
        const msg = (e as Error).message || 'failed';
        console.error('[ai] sort-it failed:', msg);
        await sql`INSERT INTO sort_it_log (clerk_user_id, question, error, mode) VALUES (${userId}, ${question}, ${msg.slice(0, 500)}, ${mode})`.catch(() => {});
        send({ type: 'error', code: 'failed', message: 'That one did not come together. Try asking it a different way, or use the directory search.' });
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}
