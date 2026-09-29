import { NextRequest, NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';
import { ensureNewsletterTable } from '@/lib/newsletter';

/**
 * GET                 counts + latest 300 subscribers
 * GET ?format=csv     every ACTIVE subscriber as CSV, for the sending tool
 */
function isAdmin(request: NextRequest): boolean {
  const cookie = request.cookies.get('fs_admin')?.value;
  const header = request.headers.get('x-admin-secret');
  const secret = process.env.ADMIN_SECRET;
  return !!secret && (cookie === secret || header === secret);
}

const csvCell = (v: unknown) => {
  const s = v == null ? '' : String(v);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export async function GET(req: NextRequest) {
  if (!isAdmin(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 503 });
  await ensureNewsletterTable();
  const sql = neon(process.env.DATABASE_URL);

  if (new URL(req.url).searchParams.get('format') === 'csv') {
    const rows = await sql`
      SELECT email, want_cars, want_shops, want_research, zip, radius_mi, marques, source, confirmed_at, token
      FROM newsletter_subscribers WHERE status = 'active' ORDER BY confirmed_at
    `;
    const head = 'email,cars,shops,research,zip,radius_mi,marques,source,confirmed_at,unsubscribe_url';
    const lines = rows.map((r) => [
      r.email, r.want_cars, r.want_shops, r.want_research, r.zip, r.radius_mi,
      String(r.marques || '').split('|').join('; '), r.source, r.confirmed_at,
      `https://www.fullysorted.com/newsletter?u=${r.token}`,
    ].map(csvCell).join(','));
    return new NextResponse([head, ...lines].join('\n'), {
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="fully-sorted-subscribers-${new Date().toISOString().slice(0, 10)}.csv"`,
      },
    });
  }

  const [summary] = await sql`
    SELECT
      COUNT(*) FILTER (WHERE status = 'active')::int AS active,
      COUNT(*) FILTER (WHERE status = 'pending')::int AS pending,
      COUNT(*) FILTER (WHERE status = 'unsubscribed')::int AS unsubscribed,
      COUNT(*) FILTER (WHERE status = 'active' AND want_cars)::int AS cars,
      COUNT(*) FILTER (WHERE status = 'active' AND want_shops)::int AS shops,
      COUNT(*) FILTER (WHERE status = 'active' AND want_research)::int AS research,
      COUNT(*) FILTER (WHERE status = 'active' AND zip IS NOT NULL)::int AS with_zip
    FROM newsletter_subscribers
  `;
  const bySource = await sql`
    SELECT COALESCE(source, 'page') AS source, COUNT(*)::int AS n
    FROM newsletter_subscribers WHERE status = 'active' GROUP BY 1 ORDER BY 2 DESC
  `;
  const rows = await sql`
    SELECT id, email, status, want_cars, want_shops, want_research, zip, radius_mi, marques, source, source_path, created_at, confirmed_at
    FROM newsletter_subscribers ORDER BY created_at DESC LIMIT 300
  `;
  return NextResponse.json({ summary, bySource, rows });
}
