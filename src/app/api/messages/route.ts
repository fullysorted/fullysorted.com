import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { deliver, undeliverableResponse } from '@/lib/submissions';

// POST /api/messages — public. A buyer contacts a seller about a listing.
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

  const kind = type || 'inquiry';

  const result = await deliver({
    label: `listing ${kind}`,
    save: process.env.DATABASE_URL
      ? async () => {
          const { neon } = await import('@neondatabase/serverless');
          const sql = neon(process.env.DATABASE_URL!);
          await sql`
            INSERT INTO messages (listing_id, listing_slug, listing_title, sender_name, sender_email, sender_phone, message_text, type, offer_amount, status)
            VALUES (
              ${listingId || null}, ${listingSlug || null}, ${listingTitle || null},
              ${senderName}, ${senderEmail}, ${senderPhone || null},
              ${messageText}, ${kind}, ${offerAmount || null}, 'new'
            )
          `;
        }
      : undefined,
    notify: async () => {
      const { notifyNewMessage } = await import('@/lib/email');
      return notifyNewMessage({
        senderName, senderEmail, senderPhone, messageText,
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

  return NextResponse.json({ success: true, saved: result.saved });
}
