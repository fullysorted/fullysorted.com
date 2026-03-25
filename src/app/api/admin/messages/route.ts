import { NextRequest, NextResponse } from 'next/server';

function isAdmin(request: NextRequest): boolean {
  const secret = request.cookies.get('fs_admin')?.value;
  return !!process.env.ADMIN_SECRET && secret === process.env.ADMIN_SECRET;
}

// GET /api/admin/messages
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
  const status = searchParams.get('status') || 'all';
  const type = searchParams.get('type') || 'all';
  const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 200);
  const offset = parseInt(searchParams.get('offset') || '0');

  let rows;
  if (status !== 'all' && type !== 'all') {
    rows = await sql`
      SELECT * FROM messages
      WHERE status = ${status} AND type = ${type}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (status !== 'all') {
    rows = await sql`
      SELECT * FROM messages
      WHERE status = ${status}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else if (type !== 'all') {
    rows = await sql`
      SELECT * FROM messages
      WHERE type = ${type}
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  } else {
    rows = await sql`
      SELECT * FROM messages
      ORDER BY created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
  }

  return NextResponse.json({ messages: rows });
}

// PATCH /api/admin/messages — update status, add admin notes
export async function PATCH(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json({ error: 'No database' }, { status: 500 });
  }

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const { id, status, adminNotes } = await request.json();

  if (!id) {
    return NextResponse.json({ error: 'id required' }, { status: 400 });
  }

  const result = await sql`
    UPDATE messages SET
      status = COALESCE(${status || null}, status),
      admin_notes = COALESCE(${adminNotes || null}, admin_notes)
    WHERE id = ${id}
    RETURNING *
  `;

  return NextResponse.json({ message: result[0] });
}
