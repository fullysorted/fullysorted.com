import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { resolveCurrentUser } from '@/lib/identity';

// ─── PATCH /api/account/listings/[id] ───────────────────
// A seller edits their own listing. Ownership is seller_id = the signed-in
// member, nothing else: no slug guessing, no admin cookie. Edits to an
// approved listing go live straight away; the admin can still pull it.
// Photos, tier and dealer identity are not editable here on purpose.

const cap = (v: unknown, n: number): string | null => {
  if (v === null || v === undefined) return null;
  const s = String(v).trim();
  return s ? s.slice(0, n) : null;
};
const int = (v: unknown): number | null => {
  if (v === null || v === undefined || v === '') return null;
  const n = parseInt(String(v).replace(/[^0-9]/g, ''), 10);
  return Number.isFinite(n) ? n : null;
};

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const user = await resolveCurrentUser().catch(() => null);
  if (!user) return NextResponse.json({ error: 'Please sign in.' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const { id: rawId } = await params;
  const id = Number(rawId);
  if (!id) return NextResponse.json({ error: 'Listing not found.' }, { status: 404 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const price = int(body.price);
  if (price === null || price <= 0) {
    return NextResponse.json({ error: 'The price needs to be a number above zero.' }, { status: 400 });
  }
  // The only status a seller can set is sold, and only from active.
  const markSold = body.markSold === true;

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const [owned] = await sql`SELECT id, slug, status FROM listings WHERE id = ${id} AND seller_id = ${user.id} LIMIT 1`;
  if (!owned) return NextResponse.json({ error: 'Listing not found.' }, { status: 404 });
  if (['denied', 'expired'].includes(String(owned.status))) {
    return NextResponse.json({ error: 'This listing is closed. Get in touch and we will sort it out.' }, { status: 409 });
  }

  const description = cap(body.description, 8000);
  const [updated] = await sql`
    UPDATE listings SET
      price = ${price},
      mileage = ${int(body.mileage)},
      trim = ${cap(body.trim, 60)},
      transmission = ${cap(body.transmission, 40)},
      engine = ${cap(body.engine, 80)},
      exterior_color = ${cap(body.exteriorColor, 40)},
      interior_color = ${cap(body.interiorColor, 40)},
      city = ${cap(body.city, 80)},
      state = ${cap(body.state, 40)},
      zip_code = ${cap(body.zipCode, 12)},
      description = ${description},
      ai_description = ${description},
      provenance = ${cap(body.provenance, 2000)},
      status = CASE WHEN ${markSold} AND status = 'active' THEN 'sold' ELSE status END,
      sold_at = CASE WHEN ${markSold} AND status = 'active' AND sold_at IS NULL THEN NOW() ELSE sold_at END,
      updated_at = NOW()
    WHERE id = ${id} AND seller_id = ${user.id}
    RETURNING id, slug, status
  `;

  try {
    revalidatePath('/');
    revalidatePath('/browse');
    revalidatePath(`/listings/${owned.slug}`);
  } catch (e) {
    console.error('[account/listings] revalidate failed', e);
  }

  return NextResponse.json({ success: true, listing: updated });
}
