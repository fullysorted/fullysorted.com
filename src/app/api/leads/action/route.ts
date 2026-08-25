import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';

/**
 * POST /api/leads/action — a shop tells us what happened to one enquiry.
 *
 * Public, and deliberately so: it is authorised by a 32-character random token
 * that only exists in the email we sent to that shop's own address. Requiring a
 * login here would mean only the handful of shops that have linked an account
 * could ever report an outcome, which is most of the value gone.
 *
 * What the token can do is therefore kept as small as possible:
 *   • it writes two flags on ONE message row and nothing else
 *   • it never returns the enquiry, the sender, or any other row
 *   • an unknown token gets the same answer as a known one
 *
 * It is a POST behind a page with a button, not a link in the email. Mail
 * scanners and link-preview bots follow links; a lead marked "replied" by a
 * spam filter would be worse than no signal at all.
 */
export async function POST(request: NextRequest) {
  const limited = rateLimit(request, 'lead-action', 30, 60_000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const token = typeof body.token === 'string' ? body.token.trim().slice(0, 64) : '';
  const action = body.action === 'junk' ? 'junk' : body.action === 'replied' ? 'replied' : null;
  const reason = typeof body.reason === 'string' ? body.reason.trim().slice(0, 120) : null;

  if (!token || !action) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  if (!process.env.DATABASE_URL) {
    // Nothing to record against, but the shop did its part — do not show them
    // an error for our missing configuration.
    console.error('[lead-action] no DATABASE_URL — outcome not recorded');
    return NextResponse.json({ ok: true, recorded: false });
  }

  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    if (action === 'replied') {
      // COALESCE: the first report of a reply is the one that counts, so a
      // second click does not quietly reset the response time.
      await sql`
        UPDATE messages
        SET replied_at = COALESCE(replied_at, NOW()),
            outcome = 'replied',
            status = CASE WHEN status = 'archived' THEN status ELSE 'replied' END,
            updated_at = NOW()
        WHERE action_token = ${token}
      `;
    } else {
      await sql`
        UPDATE messages
        SET junk = TRUE,
            junk_reason = ${reason},
            outcome = 'junk',
            updated_at = NOW()
        WHERE action_token = ${token}
      `;
    }
  } catch (err) {
    console.error('[lead-action] update failed', err);
    return NextResponse.json({ error: 'Could not record that just now.' }, { status: 503 });
  }

  // Same answer whether or not the token matched a row — an endpoint that
  // distinguishes them is a way to test tokens.
  return NextResponse.json({ ok: true, recorded: true, action });
}
