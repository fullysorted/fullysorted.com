import { NextRequest, NextResponse } from 'next/server';

function isAdmin(request: NextRequest): boolean {
  const secret = request.cookies.get('fs_admin')?.value;
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

export async function GET(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const { searchParams } = new URL(request.url);
  const limit = Math.min(parseInt(searchParams.get('limit') || '100'), 500);

  const rows = await sql`
    SELECT * FROM deal_alerts
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;

  return NextResponse.json({ alerts: rows });
}
