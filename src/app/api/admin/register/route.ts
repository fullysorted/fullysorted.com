import { NextRequest, NextResponse } from 'next/server';

/**
 * Admin review for Chassis Register submissions.
 * GET  ?status=pending|approved|rejected  (list + counts)
 * POST { id, action: 'approve' | 'reject', adminNote? }
 *
 * Approving is the only path from registry_submissions into the public
 * tables. It finds or creates the chassis row (status published) and inserts
 * exactly one registry_events row with status 'owner_reported', whose details
 * are the submitted body and whose source is the supplied URL or, failing
 * that, the submission's own anchor on the chassis page. The submitter's name
 * and email are never copied onto the event.
 */
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

type SubmissionRow = {
  id: number;
  model_slug: string;
  chassis: string;
  vin: string | null;
  kind: string;
  body: string;
  event_date: string | null;
  source_url: string | null;
  status: string;
};

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ submissions: [], counts: [], noDb: true });

  const statusParam = new URL(req.url).searchParams.get('status') || 'pending';
  const status = ['pending', 'approved', 'rejected'].includes(statusParam) ? statusParam : 'pending';
  try {
    const sql = await getSql();
    const submissions = await sql`
      SELECT s.*, m.make, m.model
      FROM registry_submissions s
      LEFT JOIN vehicle_models m ON m.slug = s.model_slug
      WHERE s.status = ${status}
      ORDER BY s.created_at DESC
      LIMIT 300
    `;
    const counts = await sql`
      SELECT status, COUNT(*)::int AS n FROM registry_submissions GROUP BY status
    `;
    return NextResponse.json({ submissions, counts });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message, submissions: [], counts: [] }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  try {
    const { id, action, adminNote } = await req.json();
    const subId = Number(id);
    if (!Number.isFinite(subId) || !['approve', 'reject'].includes(action)) {
      return NextResponse.json({ error: 'id and action required' }, { status: 400 });
    }
    const note = adminNote == null ? null : String(adminNote).trim().slice(0, 2000) || null;
    const sql = await getSql();

    const subs = (await sql`
      SELECT id, model_slug, chassis, vin, kind, body, event_date, source_url, status
      FROM registry_submissions WHERE id = ${subId} LIMIT 1
    `) as SubmissionRow[];
    const sub = subs[0];
    if (!sub) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (sub.status !== 'pending') {
      return NextResponse.json({ error: `Already ${sub.status}` }, { status: 409 });
    }

    if (action === 'reject') {
      await sql`
        UPDATE registry_submissions
        SET status = 'rejected', admin_note = COALESCE(${note}, admin_note), reviewed_at = NOW()
        WHERE id = ${subId}
      `;
      return NextResponse.json({ success: true, id: subId, status: 'rejected' });
    }

    // 1. Find or create the chassis row.
    const modelRows = (await sql`SELECT id FROM vehicle_models WHERE slug = ${sub.model_slug} LIMIT 1`) as { id: number }[];
    const modelId = modelRows[0]?.id ?? null;
    let chassisRows = (await sql`
      SELECT id, vin FROM registry_chassis WHERE model_slug = ${sub.model_slug} AND chassis = ${sub.chassis} LIMIT 1
    `) as { id: number; vin: string | null }[];
    if (!chassisRows.length) {
      chassisRows = (await sql`
        INSERT INTO registry_chassis (model_id, model_slug, chassis, vin, confidence, status)
        VALUES (${modelId}, ${sub.model_slug}, ${sub.chassis}, ${sub.vin}, 'low', 'published')
        RETURNING id, vin
      `) as { id: number; vin: string | null }[];
    } else if (sub.vin && !chassisRows[0].vin) {
      await sql`UPDATE registry_chassis SET vin = ${sub.vin}, updated_at = NOW() WHERE id = ${chassisRows[0].id}`;
    }
    const chassisId = chassisRows[0].id;

    // 2. One owner-reported event. Never a name, never an inferred type.
    const title = sub.kind === 'ownership' ? 'Owner report' : sub.kind === 'correction' ? 'Correction submitted' : 'Record submitted';
    const sourceUrl = sub.source_url || `https://fullysorted.com/register/${sub.model_slug}/${encodeURIComponent(sub.chassis)}#submission-${sub.id}`;
    await sql`
      INSERT INTO registry_events
        (chassis_id, event_type, event_date, title, details, source_url, source_type, source_publisher, status)
      VALUES (${chassisId}, 'registry', ${sub.event_date}, ${title}, ${sub.body}, ${sourceUrl},
              'owner', 'Fully Sorted submission', 'owner_reported')
    `;

    // 3. Mark the submission.
    await sql`
      UPDATE registry_submissions
      SET status = 'approved', admin_note = COALESCE(${note}, admin_note), reviewed_at = NOW()
      WHERE id = ${subId}
    `;
    return NextResponse.json({ success: true, id: subId, status: 'approved', chassisId });
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message || 'Failed' }, { status: 500 });
  }
}
