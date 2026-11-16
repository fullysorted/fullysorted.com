import { NextResponse } from 'next/server';
import { resolveCurrentUser } from '@/lib/identity';
import { listScanItems } from '@/lib/scan';
import { scanCsv } from '@/lib/scan-shared';

/** GET /api/scan/export  the member's whole inventory as a CSV file. Their own rows only. */
export async function GET() {
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });
  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 });
  try {
    const items = await listScanItems(user.id, { limit: 5000 });
    const day = new Date().toISOString().slice(0, 10);
    // The BOM makes Excel read the file as UTF-8.
    return new NextResponse('﻿' + scanCsv(items), {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="fully-sorted-inventory-${day}.csv"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (e) {
    console.error('[scan] export failed:', e);
    return NextResponse.json({ error: 'The export did not run.' }, { status: 500 });
  }
}
