import { NextRequest, NextResponse } from 'next/server';
import type { RegisterSeed, RegisterSeedChassis } from '@/lib/data/register';
import { normalizeChassis, normalizeVin, EVENT_TYPES, OUTCOMES, SOURCE_TYPES, EVENT_STATUSES } from '@/lib/register/chassis';
import { REGISTER_SEEDS } from '@/lib/data/register/index';

/**
 * Upserts chassis-register seed files into registry_chassis / registry_events.
 *
 * POST /api/admin/seed-register?model=ferrari/f40&offset=0&limit=100
 *   - `model` picks a seed from REGISTER_SEEDS (all of them when omitted).
 *   - offset/limit page through that seed's chassis so one call stays inside
 *     the function timeout. A thrown insert reports which chassis failed and
 *     returns 500 WITH a body (the seed-models route returned an empty 500 and
 *     hid a VARCHAR overflow for a week).
 *   - Optionally accepts a RegisterSeed JSON body instead of a bundled seed.
 *
 * Chassis rows are matched on (model_slug, chassis); events on
 * (chassis_id, source_url, event_date). Re-seeding refreshes facts in place,
 * never duplicates, and never touches a chassis row's `status` (an admin may
 * have hidden one on purpose).
 */

export const maxDuration = 300;

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

const LIMITS = {
  chassis: 64, vin: 32, variant: 80, marketSpec: 40, exteriorColor: 80, interiorColor: 80, engineNumber: 64,
  title: 300, venue: 200, location: 200, sourceTitle: 300, sourcePublisher: 120, eventDate: 10,
} as const;

function validateChassis(c: RegisterSeedChassis): string | null {
  if (!normalizeChassis(c.chassis)) return 'chassis empty';
  const over = (k: keyof typeof LIMITS, v: string | null | undefined) => v && v.length > LIMITS[k] ? `${k} exceeds ${LIMITS[k]} chars` : null;
  for (const k of ['chassis', 'vin', 'variant', 'marketSpec', 'exteriorColor', 'interiorColor', 'engineNumber'] as const) {
    const msg = over(k, c[k] as string | null | undefined);
    if (msg) return msg;
  }
  if (!Array.isArray(c.events)) return 'events missing';
  for (const e of c.events) {
    if (!e.sourceUrl || !/^https?:\/\//.test(e.sourceUrl)) return `event "${e.title}" has no source URL`;
    if (!e.title) return 'event title empty';
    if (!(EVENT_TYPES as readonly string[]).includes(e.eventType)) return `event type "${e.eventType}" not in closed set`;
    if (e.outcome && !(OUTCOMES as readonly string[]).includes(e.outcome)) return `outcome "${e.outcome}" not in closed set`;
    if (e.sourceType && !(SOURCE_TYPES as readonly string[]).includes(e.sourceType)) return `sourceType "${e.sourceType}" not in closed set`;
    if (e.status && !(EVENT_STATUSES as readonly string[]).includes(e.status)) return `status "${e.status}" not in closed set`;
    if (e.eventDate && !/^\d{4}(-\d{2}(-\d{2})?)?$/.test(e.eventDate)) return `eventDate "${e.eventDate}" not ISO (YYYY, YYYY-MM or YYYY-MM-DD)`;
    for (const k of ['title', 'venue', 'location', 'sourceTitle', 'sourcePublisher'] as const) {
      const msg = over(k, e[k] as string | null | undefined);
      if (msg) return `event "${e.title}": ${msg}`;
    }
    if (e.status === 'disputed' && !e.conflictNote) return `event "${e.title}" is disputed without a conflictNote`;
  }
  return null;
}

export async function POST(request: NextRequest) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const url = new URL(request.url);
  const modelParam = url.searchParams.get('model')?.toLowerCase() ?? null;
  const offset = Math.max(0, parseInt(url.searchParams.get('offset') ?? '0', 10) || 0);
  const limit = Math.min(500, Math.max(1, parseInt(url.searchParams.get('limit') ?? '100', 10) || 100));

  let seeds: RegisterSeed[] = [];
  const raw = await request.text();
  if (raw.trim()) {
    try {
      const body = JSON.parse(raw) as RegisterSeed;
      if (!body?.modelSlug || !Array.isArray(body.chassis)) throw new Error('body must be { modelSlug, chassis[] }');
      seeds = [body];
    } catch (e) {
      return NextResponse.json({ error: `Invalid seed body: ${(e as Error).message}` }, { status: 400 });
    }
  } else {
    seeds = modelParam ? REGISTER_SEEDS.filter((s) => s.modelSlug === modelParam) : REGISTER_SEEDS;
    if (!seeds.length) return NextResponse.json({ error: `No bundled seed for ${modelParam}` }, { status: 404 });
  }

  const sql = await getSql();
  const report: { model: string; seeded: number; skipped: number; events: number; total: number; nextOffset: number | null }[] = [];

  for (const seed of seeds) {
    const modelSlug = seed.modelSlug.toLowerCase();
    const modelRow = (await sql`SELECT id FROM vehicle_models WHERE slug = ${modelSlug} LIMIT 1`) as { id: number }[];
    const modelId = modelRow[0]?.id ?? null;
    const slice = seed.chassis.slice(offset, offset + limit);
    let seeded = 0, skipped = 0, events = 0;

    for (const c of slice) {
      const problem = validateChassis(c);
      if (problem) {
        return NextResponse.json({ error: `Seed ${modelSlug} chassis "${c.chassis}": ${problem}`, report }, { status: 400 });
      }
      const chassis = normalizeChassis(c.chassis)!;
      const vin = normalizeVin(c.vin);
      try {
        const existing = (await sql`SELECT id FROM registry_chassis WHERE model_slug = ${modelSlug} AND chassis = ${chassis} LIMIT 1`) as { id: number }[];
        let chassisId: number;
        if (existing[0]) {
          chassisId = existing[0].id;
          await sql`
            UPDATE registry_chassis SET
              model_id = COALESCE(${modelId}, model_id),
              vin = COALESCE(${vin}, vin),
              build_year = COALESCE(${c.buildYear ?? null}, build_year),
              variant = COALESCE(${c.variant ?? null}, variant),
              market_spec = COALESCE(${c.marketSpec ?? null}, market_spec),
              exterior_color = COALESCE(${c.exteriorColor ?? null}, exterior_color),
              interior_color = COALESCE(${c.interiorColor ?? null}, interior_color),
              engine_number = COALESCE(${c.engineNumber ?? null}, engine_number),
              notes = COALESCE(${c.notes ?? null}, notes),
              confidence = COALESCE(${c.confidence ?? null}, confidence),
              updated_at = NOW()
            WHERE id = ${chassisId}
          `;
        } else {
          const ins = (await sql`
            INSERT INTO registry_chassis
              (model_id, model_slug, chassis, vin, build_year, variant, market_spec, exterior_color, interior_color, engine_number, notes, confidence, status)
            VALUES
              (${modelId}, ${modelSlug}, ${chassis}, ${vin}, ${c.buildYear ?? null}, ${c.variant ?? null}, ${c.marketSpec ?? null},
               ${c.exteriorColor ?? null}, ${c.interiorColor ?? null}, ${c.engineNumber ?? null}, ${c.notes ?? null}, ${c.confidence ?? 'medium'}, 'published')
            RETURNING id
          `) as { id: number }[];
          chassisId = ins[0].id;
        }

        for (const e of c.events) {
          await sql`DELETE FROM registry_events WHERE chassis_id = ${chassisId} AND source_url = ${e.sourceUrl} AND event_date IS NOT DISTINCT FROM ${e.eventDate ?? null}`;
          await sql`
            INSERT INTO registry_events
              (chassis_id, event_type, event_date, title, venue, location, outcome, price_amount, price_currency,
               estimate_low, estimate_high, mileage, mileage_unit, details, source_url, source_title, source_publisher, source_type, status, conflict_note)
            VALUES
              (${chassisId}, ${e.eventType}, ${e.eventDate ?? null}, ${e.title}, ${e.venue ?? null}, ${e.location ?? null}, ${e.outcome ?? null},
               ${e.priceAmount ?? null}, ${e.priceCurrency ?? null}, ${e.estimateLow ?? null}, ${e.estimateHigh ?? null},
               ${e.mileage ?? null}, ${e.mileageUnit ?? null}, ${e.details ?? null}, ${e.sourceUrl}, ${e.sourceTitle ?? null},
               ${e.sourcePublisher ?? null}, ${e.sourceType ?? null}, ${e.status ?? 'confirmed'}, ${e.conflictNote ?? null})
          `;
          events++;
        }
        seeded++;
      } catch (err) {
        return NextResponse.json(
          { error: `Seed ${modelSlug} chassis "${chassis}" failed: ${(err as Error).message}`, report, seeded, events },
          { status: 500 },
        );
      }
    }
    const nextOffset = offset + limit < seed.chassis.length ? offset + limit : null;
    report.push({ model: modelSlug, seeded, skipped, events, total: seed.chassis.length, nextOffset });
  }

  return NextResponse.json({ success: true, report });
}
