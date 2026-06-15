import { NextRequest, NextResponse } from 'next/server';

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

// Editable narrative/text fields (whitelist).
const TEXT_FIELDS = new Set([
  'summary', 'history', 'market_notes', 'what_to_look_for',
  'common_problems', 'value_trajectory', 'production_notes', 'overall_confidence',
]);

// GET /api/admin/models/[id] — full record for review.
export async function GET(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });
  const { id } = await ctx.params;
  const sql = await getSql();

  const rows = (await sql`SELECT * FROM vehicle_models WHERE id=${Number(id)} LIMIT 1`) as Record<string, unknown>[];
  if (!rows[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  const [sources, claims] = await Promise.all([
    sql`SELECT * FROM model_sources WHERE model_id=${Number(id)} ORDER BY id ASC`,
    sql`SELECT * FROM model_claims WHERE model_id=${Number(id)} ORDER BY id ASC`,
  ]);
  return NextResponse.json({ model: rows[0], sources, claims });
}

// PATCH /api/admin/models/[id]
// body: { status?, reviewerNotes?, reviewedBy?, fields?:{...}, claimUpdates?:[{id,status,reviewerNote}] }
export async function PATCH(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });
  const { id } = await ctx.params;
  const modelId = Number(id);
  const body = await request.json();
  const sql = await getSql();

  // Field edits (whitelisted, explicit columns — no dynamic SQL identifiers).
  if (body.fields && typeof body.fields === 'object') {
    const f = body.fields as Record<string, string>;
    if (TEXT_FIELDS.has('summary') && typeof f.summary === 'string')
      await sql`UPDATE vehicle_models SET summary=${f.summary}, updated_at=NOW() WHERE id=${modelId}`;
    if (typeof f.history === 'string')
      await sql`UPDATE vehicle_models SET history=${f.history}, updated_at=NOW() WHERE id=${modelId}`;
    if (typeof f.market_notes === 'string')
      await sql`UPDATE vehicle_models SET market_notes=${f.market_notes}, updated_at=NOW() WHERE id=${modelId}`;
    if (typeof f.what_to_look_for === 'string')
      await sql`UPDATE vehicle_models SET what_to_look_for=${f.what_to_look_for}, updated_at=NOW() WHERE id=${modelId}`;
    if (typeof f.common_problems === 'string')
      await sql`UPDATE vehicle_models SET common_problems=${f.common_problems}, updated_at=NOW() WHERE id=${modelId}`;
    if (typeof f.value_trajectory === 'string')
      await sql`UPDATE vehicle_models SET value_trajectory=${f.value_trajectory}, updated_at=NOW() WHERE id=${modelId}`;
    if (typeof f.production_notes === 'string')
      await sql`UPDATE vehicle_models SET production_notes=${f.production_notes}, updated_at=NOW() WHERE id=${modelId}`;
    if (typeof f.overall_confidence === 'string')
      await sql`UPDATE vehicle_models SET overall_confidence=${f.overall_confidence}, updated_at=NOW() WHERE id=${modelId}`;
  }

  if (typeof body.reviewerNotes === 'string') {
    await sql`UPDATE vehicle_models SET reviewer_notes=${body.reviewerNotes}, updated_at=NOW() WHERE id=${modelId}`;
  }

  // Status transitions: draft → reviewed → published (and back to draft).
  if (body.status === 'reviewed') {
    await sql`UPDATE vehicle_models SET status='reviewed', reviewed_at=NOW(),
              reviewed_by=${body.reviewedBy ?? 'admin'}, updated_at=NOW() WHERE id=${modelId}`;
  } else if (body.status === 'published') {
    await sql`UPDATE vehicle_models SET status='published', published_at=COALESCE(published_at, NOW()),
              reviewed_by=COALESCE(reviewed_by, ${body.reviewedBy ?? 'admin'}),
              reviewed_at=COALESCE(reviewed_at, NOW()), updated_at=NOW() WHERE id=${modelId}`;
  } else if (body.status === 'draft') {
    await sql`UPDATE vehicle_models SET status='draft', updated_at=NOW() WHERE id=${modelId}`;
  }

  // Per-claim review (resolve disputes, mark verified, add reviewer note).
  if (Array.isArray(body.claimUpdates)) {
    for (const cu of body.claimUpdates) {
      if (!cu?.id) continue;
      if (typeof cu.status === 'string') {
        await sql`UPDATE model_claims SET status=${cu.status} WHERE id=${Number(cu.id)} AND model_id=${modelId}`;
      }
      if (typeof cu.reviewerNote === 'string') {
        await sql`UPDATE model_claims SET reviewer_note=${cu.reviewerNote} WHERE id=${Number(cu.id)} AND model_id=${modelId}`;
      }
    }
  }

  const updated = (await sql`SELECT id, status, published_at, reviewed_at FROM vehicle_models WHERE id=${modelId} LIMIT 1`) as Record<string, unknown>[];
  return NextResponse.json({ success: true, model: updated[0] });
}

// DELETE /api/admin/models/[id]
export async function DELETE(request: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  if (!isAdmin(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });
  const { id } = await ctx.params;
  const sql = await getSql();
  await sql`DELETE FROM model_claims WHERE model_id=${Number(id)}`;
  await sql`DELETE FROM model_sources WHERE model_id=${Number(id)}`;
  await sql`DELETE FROM vehicle_models WHERE id=${Number(id)}`;
  return NextResponse.json({ success: true });
}
