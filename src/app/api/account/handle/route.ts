import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { rateLimit } from '@/lib/rate-limit';
import { resolveCurrentUser } from '@/lib/identity';
import { checkHandle, setHandle } from '@/lib/wanted';

/** GET ?h=name  is it free?   POST { handle }  claim it for the signed-in member. */
export async function GET(req: NextRequest) {
  const limited = rateLimit(req, 'handle-check', 60, 60_000);
  if (limited) return limited;
  const checked = checkHandle(new URL(req.url).searchParams.get('h') ?? '');
  if (!checked.ok) return NextResponse.json({ available: false, reason: checked.reason });
  if (!process.env.DATABASE_URL) return NextResponse.json({ available: false, reason: 'Unavailable right now.' });
  try {
    const sql = neon(process.env.DATABASE_URL);
    const me = await resolveCurrentUser();
    const rows = await sql`SELECT id FROM users WHERE LOWER(handle) = LOWER(${checked.handle}) LIMIT 1`;
    const free = rows.length === 0 || (me !== null && Number(rows[0].id) === me.id);
    return NextResponse.json(free ? { available: true, handle: checked.handle } : { available: false, reason: 'Somebody already has that one.' });
  } catch {
    return NextResponse.json({ available: false, reason: 'Could not check just now.' });
  }
}

export async function POST(req: NextRequest) {
  const limited = rateLimit(req, 'handle-set', 10, 60 * 60_000);
  if (limited) return limited;
  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 });
  const { handle } = await req.json().catch(() => ({ handle: '' }));
  const set = await setHandle(user.id, String(handle ?? ''));
  if (!set.ok) return NextResponse.json({ error: set.reason }, { status: 400 });
  return NextResponse.json({ ok: true, handle: set.handle });
}
