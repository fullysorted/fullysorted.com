import { NextRequest, NextResponse } from 'next/server';

// POST /api/sales/submit — public. A user reports a sale they know about. Stored
// as 'pending' and never touches comps until an admin approves it.
export async function POST(req: NextRequest) {
  try {
    let body: Record<string, unknown>;
    try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }

    const s = (v: unknown) => (v == null ? null : String(v).trim().slice(0, 500) || null);
    const n = (v: unknown) => { const x = parseInt(String(v ?? '').replace(/[^0-9.-]/g, ''), 10); return Number.isFinite(x) ? x : null; };

    const make = s(body.make), model = s(body.model);
    const year = n(body.year), salePrice = n(body.salePrice ?? body.sale_price ?? body.price);
    const consent = body.consent === true || body.consent === 'true';

    if (!make || !model) return NextResponse.json({ error: 'Make and model are required.' }, { status: 400 });
    if (year == null && salePrice == null) return NextResponse.json({ error: 'Add at least the year or the sale price.' }, { status: 400 });
    if (!consent) return NextResponse.json({ error: 'Please confirm you agree to share this factual sale data.' }, { status: 400 });

    if (process.env.DATABASE_URL) {
      const { neon } = await import('@neondatabase/serverless');
      const sql = neon(process.env.DATABASE_URL);
      const saleDate = body.saleDate ? new Date(String(body.saleDate)) : null;
      await sql`
        INSERT INTO sale_submissions (make, model, year, trim, vin, sale_price, currency, sale_date, venue, mileage, exterior_color, location, source_url, notes, submitter_name, submitter_email, status)
        VALUES (${make}, ${model}, ${year}, ${s(body.trim)}, ${s(body.vin)}, ${salePrice},
          ${(s(body.currency) || 'usd')}, ${saleDate && !isNaN(saleDate.getTime()) ? saleDate.toISOString() : null},
          ${s(body.venue)}, ${n(body.mileage)}, ${s(body.exteriorColor ?? body.color)}, ${s(body.location)},
          ${s(body.sourceUrl ?? body.source_url)}, ${s(body.notes)}, ${s(body.submitterName ?? body.name)},
          ${s(body.submitterEmail ?? body.email)}, 'pending')
      `;
    }

    // Notify Chris (best-effort).
    try {
      const { notifySaleSubmission } = await import('@/lib/email');
      await notifySaleSubmission({ make, model, year, salePrice, venue: s(body.venue), submitter: s(body.submitterName ?? body.name), sourceUrl: s(body.sourceUrl ?? body.source_url) });
    } catch (e) { console.error('sale submission notify failed', e); }

    return NextResponse.json({ success: true, message: 'Thanks! We review every submission before it goes live.' });
  } catch (e) {
    console.error('sale submit error:', e);
    return NextResponse.json({ error: 'Could not submit. Please try again.' }, { status: 500 });
  }
}
