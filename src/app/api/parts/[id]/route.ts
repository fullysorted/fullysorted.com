import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { resolveCurrentUser } from '@/lib/identity';
import { ensurePartsTables } from '@/lib/parts';

/** POST /api/parts/:id  { action: 'sold' | 'remove' }  the owner closes their own listing. */
export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const id = Number((await ctx.params).id);
  if (!Number.isInteger(id) || id <= 0) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'Unavailable' }, { status: 503 });

  const user = await resolveCurrentUser();
  if (!user) return NextResponse.json({ error: 'Sign in first.' }, { status: 401 });

  const { action } = await req.json().catch(() => ({ action: null }));
  const status = action === 'sold' ? 'sold' : action === 'remove' ? 'removed' : null;
  if (!status) return NextResponse.json({ error: 'Unknown action' }, { status: 400 });

  try {
    await ensurePartsTables();
    const sql = neon(process.env.DATABASE_URL);
    const done = await sql`
      UPDATE parts_posts SET status = ${status}, closed_at = NOW()
      WHERE id = ${id} AND user_id = ${user.id} AND status IN ('pending', 'open') RETURNING id
    `;
    if (!done.length) return NextResponse.json({ error: 'Nothing to change.' }, { status: 400 });
    return NextResponse.json({ ok: true, status });
  } catch (e) {
    console.error('[parts] close failed:', e);
    return NextResponse.json({ error: 'That did not save.' }, { status: 500 });
  }
}
