import { NextRequest, NextResponse } from 'next/server';
import { upsertResults, type RawResult } from '@/lib/server/ingestResults';

// Programmatic ingestion for licensed feeds / external systems.
// Auth: header `x-ingest-key: <INGEST_API_KEY>`. Body: { source?, rows: [...] }.
// Bulk-upserts with dedup; safe to re-send (idempotent on dedupe_key).
export async function POST(req: NextRequest) {
  const key = req.headers.get('x-ingest-key');
  if (!process.env.INGEST_API_KEY || key !== process.env.INGEST_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });
  try {
    const body = await req.json();
    const rows: RawResult[] = Array.isArray(body) ? body : Array.isArray(body.rows) ? body.rows : [];
    const source = (body.source || 'api').toString();
    if (!rows.length) return NextResponse.json({ error: 'Provide { rows: [...] } (or a JSON array).' }, { status: 400 });
    if (rows.length > 5000) return NextResponse.json({ error: 'Max 5,000 rows per request — chunk your feed.' }, { status: 413 });

    const result = await upsertResults(rows, source);
    return NextResponse.json({ success: true, ...result });
  } catch (e) {
    console.error('ingest error:', e);
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Ingest failed' }, { status: 500 });
  }
}

// Simple health/echo so integrators can verify their key.
export async function GET(req: NextRequest) {
  const key = req.headers.get('x-ingest-key');
  if (!process.env.INGEST_API_KEY || key !== process.env.INGEST_API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  return NextResponse.json({ ok: true, endpoint: '/api/ingest/auction-results', method: 'POST', maxRows: 5000 });
}
