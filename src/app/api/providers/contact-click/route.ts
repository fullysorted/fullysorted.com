import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

/**
 * POST /api/providers/contact-click  { providerId, kind: phone|website|instagram }
 *
 * Counts taps on a shop's contact links. Deliberately NOT in schema.ts: it is a
 * raw append-only log read only by /api/admin/leads, so it can never take the
 * ORM down (see fully_sorted_orm_column_outage). The table creates itself on
 * first use instead of adding another DDL statement to every cold boot.
 * Always answers 204: a failed count must never surface to the person calling.
 */
const KINDS = new Set(['phone', 'website', 'instagram']);

export async function POST(request: NextRequest) {
  const limited = rateLimit(request, 'contact-click', 20, 60_000);
  if (limited) return new NextResponse(null, { status: 204 });
  if (!process.env.DATABASE_URL) return new NextResponse(null, { status: 204 });

  let body: Record<string, unknown>;
  try { body = JSON.parse(await request.text()); } catch { return new NextResponse(null, { status: 204 }); }
  const providerId = Number(body.providerId);
  const kind = String(body.kind || '');
  if (!Number.isInteger(providerId) || providerId <= 0 || !KINDS.has(kind)) {
    return new NextResponse(null, { status: 204 });
  }
  // Crawlers do not tap phone numbers on purpose; skip the obvious ones.
  const ua = request.headers.get('user-agent') || '';
  if (/bot|crawl|spider|preview|fetch/i.test(ua)) return new NextResponse(null, { status: 204 });

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);
  const insert = () => sql`INSERT INTO contact_clicks (provider_id, kind) VALUES (${providerId}, ${kind})`;
  try {
    await insert();
  } catch (err) {
    if ((err as { code?: string })?.code === '42P01') {
      try {
        await sql`CREATE TABLE IF NOT EXISTS contact_clicks (
          id SERIAL PRIMARY KEY,
          provider_id INTEGER NOT NULL,
          kind VARCHAR(20) NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT NOW()
        )`;
        await sql`CREATE INDEX IF NOT EXISTS contact_clicks_provider_idx ON contact_clicks (provider_id, created_at DESC)`;
        await insert();
      } catch (e) {
        console.error('[contact-click] could not create/insert', e);
      }
    } else {
      console.error('[contact-click] insert failed', err);
    }
  }
  return new NextResponse(null, { status: 204 });
}
