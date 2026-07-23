import { NextRequest, NextResponse } from 'next/server';
import { isTeam } from '@/lib/team-auth';
import { rateLimit } from '@/lib/rate-limit';

// POST /api/team/invite — send (or re-send) the claim invite email.
// Body: { id: number, reminder?: boolean }
export async function POST(request: NextRequest) {
  if (!isTeam(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  if (!process.env.DATABASE_URL) return NextResponse.json({ error: 'No database' }, { status: 500 });

  const limited = rateLimit(request, 'team-invite', 100, 60 * 60 * 1000);
  if (limited) return limited;

  let body: { id?: number; reminder?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const id = typeof body.id === 'number' ? body.id : parseInt(String(body.id || ''));
  if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 });

  const { neon } = await import('@neondatabase/serverless');
  const sql = neon(process.env.DATABASE_URL);

  const rows = await sql`
    SELECT id, business_name, owner_name, email, category, location,
           status, outreach_status, claim_token, outreach_sent_at
    FROM service_providers
    WHERE id = ${id}
    LIMIT 1
  `;
  const provider = rows[0];
  if (!provider) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (!provider.outreach_status) {
    return NextResponse.json({ error: 'Not an outreach-pipeline provider' }, { status: 403 });
  }
  if (!provider.claim_token) {
    return NextResponse.json(
      { error: 'This listing has already been claimed — no invite needed.' },
      { status: 409 },
    );
  }
  if (['claimed', 'list_only'].includes(provider.outreach_status)) {
    return NextResponse.json({ error: 'Already approved — no invite needed.' }, { status: 409 });
  }
  if (!provider.email || provider.email.startsWith('outreach+')) {
    return NextResponse.json(
      { error: 'No real email on file for this provider. Add their email first (expand the row and edit).' },
      { status: 400 },
    );
  }

  const claimUrl = `https://www.fullysorted.com/services/claim/${provider.claim_token}`;
  const isReminder = body.reminder === true || provider.outreach_status === 'sent';

  const { sendProviderInvite, sendProviderInviteReminder } = await import('@/lib/email');
  const send = isReminder ? sendProviderInviteReminder : sendProviderInvite;
  const sent = await send({
    to: provider.email as string,
    businessName: provider.business_name as string,
    ownerName: (provider.owner_name as string) || '',
    category: provider.category as string,
    location: provider.location as string,
    claimUrl,
  });

  if (!sent) {
    return NextResponse.json(
      { error: 'Email failed to send (check RESEND_API_KEY / Vercel logs).' },
      { status: 502 },
    );
  }

  await sql`
    UPDATE service_providers
    SET outreach_status = 'sent', outreach_sent_at = NOW(), updated_at = NOW()
    WHERE id = ${id}
  `;

  return NextResponse.json({ ok: true, reminder: isReminder, sentTo: provider.email });
}
