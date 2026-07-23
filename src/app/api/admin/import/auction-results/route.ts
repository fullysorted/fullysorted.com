import { NextRequest, NextResponse } from 'next/server';
import { upsertResults, parseCsv, type RawResult } from '@/lib/server/ingestResults';

function isAdmin(req: NextRequest): boolean {
  const cookie = req.cookies.get('fs_admin')?.value;
  const header = req.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

// POST /api/admin/import/auction-results
// Body: { rows: [...] }  OR  { csv: "..." }  OR  { json: "[...]" }  (+ optional source)
export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });
  try {
    const body = await req.json();
    const source = (body.source || 'import').toString();
    let rows: RawResult[] = [];
    if (Array.isArray(body.rows)) rows = body.rows;
    else if (typeof body.csv === 'string') rows = parseCsv(body.csv);
    else if (typeof body.json === 'string') {
      const parsed = JSON.parse(body.json);
      rows = Array.isArray(parsed) ? parsed : [parsed];
    }
    if (!rows.length) return NextResponse.json({ error: 'No rows found. Paste CSV or a JSON array.' }, { status: 400 });
    if (rows.length > 5000) return NextResponse.json({ error: 'Max 5,000 rows per import — split into batches.' }, { status: 413 });

    const result = await upsertResults(rows, source);
    return NextResponse.json({ success: true, ...result });
  } catch (e) {
    console.error('import error:', e);
    return NextResponse.json({ error: e instanceof Error ? e.message : 'Import failed' }, { status: 500 });
  }
}
