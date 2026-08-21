import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { deliver, undeliverableResponse } from '@/lib/submissions';
import { resolveRelay, isEmailAddress, type Relay } from '@/lib/leads';

// POST /api/messages — public. A buyer contacts a seller about a listing, or an
// owner contacts a shop through its directory profile.
//
// This route previously returned `{ success: true, saved: false }` when
// DATABASE_URL was unset — without even attempting the email — so the message
// went nowhere while the UI said "Message sent!". It now reports success only
// when the message actually reached us.

export async function POST(request: NextRequest) {
  const limited = rateLimit(request, 'messages', 8, 60_000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const {
    listingId, listingSlug, listingTitle,
    senderName, senderEmail, senderPhone,
    messageText, type, offerAmount,
  } = body as {
    listingId?: number; listingSlug?: string; listingTitle?: string;
    senderName?: string; senderEmail?: string; senderPhone?: string;
    messageText?: string; type?: string; offerAmount?: number;
  };

  if (!senderName || !senderEmail || !messageText) {
    return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
  }
  // Validated here rather than trusted, because senderEmail becomes the Reply-To
  // header on mail we send to a third party.
  if (!isEmailAddress(senderEmail)) {
    return NextResponse.json({ error: 'That email address does not look right.' }, { status: 400 });
  }

  // `type` lands in a varchar(50); an over-long value threw on insert and the
  // failure was swallowed, leaving the message as an email only.
  const kind = String(type || 'inquiry').slice(0, 50);

  // A relay lookup failure must never cost us the lead — fall back to Chris.
  let relay: Relay = null;
  if (process.env.DATABASE_URL) {
    try {
      const { neon } = await import('@neondatabase/serverless');
      relay = await resolveRelay(neon(process.env.DATABASE_URL), listingSlug);
    } catch (e) {
      console.error('[messages] provider relay lookup failed', e);
    }
  }

  const result = await deliver({
    label: relay ? `provider lead (${relay.businessName})` : `listing ${kind}`,
    save: process.env.DATABASE_URL
      ? async () => {
          const { neon } = await import('@neondatabase/serverless');
          const sql = neon(process.env.DATABASE_URL!);
          // Idempotent: provider_id was added after this table shipped, so a
          // deployed database will not have it until this runs once.
          await sql`ALTER TABLE messages ADD COLUMN IF NOT EXISTS provider_id INTEGER`;
          await sql`
            INSERT INTO messages (listing_id, listing_slug, listing_title, provider_id, sender_name, sender_email, sender_phone, message_text, type, offer_amount, status)
            VALUES (
              ${listingId || null}, ${listingSlug || null}, ${listingTitle || null},
              ${relay?.providerId ?? null},
              ${senderName}, ${senderEmail.trim()}, ${senderPhone || null},
              ${messageText}, ${kind}, ${offerAmount || null}, 'new'
            )
          `;
        }
      : undefined,
    notify: async () => {
      // A directory lead goes to the shop, with the owner as the reply path and
      // a blind copy to us. Everything else goes to us, as before.
      if (relay) {
        const { notifyProviderLead } = await import('@/lib/email');
        return notifyProviderLead({
          providerEmail: relay.email,
          businessName: relay.businessName,
          senderName,
          senderEmail: senderEmail.trim(),
          senderPhone,
          messageText,
          profileUrl: `https://fullysorted.com/services/${relay.slug}`,
          copyTo: 'chris@fullysorted.com',
        });
      }
      const { notifyNewMessage } = await import('@/lib/email');
      return notifyNewMessage({
        senderName, senderEmail: senderEmail.trim(), senderPhone, messageText,
        listingTitle, listingSlug, type: kind, offerAmount,
      });
    },
  });

  if (!result.delivered) {
    return undeliverableResponse(
      listingTitle ? `Enquiry: ${listingTitle}` : 'Listing enquiry',
      {
        Listing: listingTitle,
        Name: senderName,
        Email: senderEmail,
        Phone: senderPhone,
        Offer: offerAmount,
        Message: messageText,
      }
    );
  }

  // `relayed` lets the form tell the truth about where the message just went,
  // rather than claiming delivery to the shop in both cases.
  return NextResponse.json({
    success: true,
    saved: result.saved,
    relayed: !!relay && result.emailed,
  });
}
