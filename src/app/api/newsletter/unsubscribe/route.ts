import { NextRequest, NextResponse } from 'next/server';
import { unsubscribeByToken } from '@/lib/newsletter';

/**
 * RFC 8058 one-click unsubscribe target (List-Unsubscribe-Post). Mail clients
 * POST here with ?t=token. The /newsletter?u= page posts here too.
 */
export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  let token = url.searchParams.get('t');
  if (!token) {
    try { token = ((await req.json()) as { token?: string }).token ?? null; } catch { /* form post */ }
  }
  try {
    const sub = await unsubscribeByToken(token);
    if (!sub) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[newsletter] unsubscribe failed', err);
    return NextResponse.json({ error: 'Could not unsubscribe just now. Reply to any email with "unsubscribe" and it will be done by hand.' }, { status: 503 });
  }
}
