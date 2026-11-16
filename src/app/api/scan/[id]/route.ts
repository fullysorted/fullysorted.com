import { NextRequest, NextResponse } from 'next/server';
import { resolveCurrentUser } from '@/lib/identity';
import { parseScanFields, updateScanItem, deleteScanItem } from '@/lib/scan';

type Ctx = { params: Promise<{ id: string }> };

async function gate(ctx: Ctx) {
  const id = Number((await ctx.params).id);
  if (!Number.isInteger(id) || id <= 0) return { error: NextResponse.json({ error: 'Not found' }, { status: 404 }) };
  if (!process.env.DATABASE_URL) return { error: NextResponse.json({ error: 'Unavailable' }, { status: 503 }) };
  const user = await resolveCurrentUser();
  if (!user) return { error: NextResponse.json({ error: 'Sign in first.', code: 'signin' }, { status: 401 }) };
  return { id, user };
}

/** PATCH /api/scan/:id  the owner corrects a scanned item. Every query is scoped to the owner. */
export async function PATCH(req: NextRequest, ctx: Ctx) {
  const g = await gate(ctx);
  if ('error' in g) return g.error;
  let raw: Record<string, unknown>;
  try { raw = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request' }, { status: 400 }); }
  const parsed = parseScanFields(raw);
  if (!parsed.ok) return NextResponse.json({ error: parsed.reason }, { status: 400 });
  try {
    const item = await updateScanItem(g.id, g.user.id, parsed.fields);
    if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ item });
  } catch (e) {
    console.error('[scan] update failed:', e);
    return NextResponse.json({ error: 'That did not save.' }, { status: 500 });
  }
}

/** DELETE /api/scan/:id  remove an item from the owner's inventory. A listing made from it is not touched. */
export async function DELETE(_req: NextRequest, ctx: Ctx) {
  const g = await gate(ctx);
  if ('error' in g) return g.error;
  try {
    const ok = await deleteScanItem(g.id, g.user.id);
    if (!ok) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[scan] delete failed:', e);
    return NextResponse.json({ error: 'That did not delete.' }, { status: 500 });
  }
}
