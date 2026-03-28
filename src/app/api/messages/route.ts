import { NextRequest, NextResponse } from 'next/server';

// POST /api/messages — public endpoint, saves contact form to DB
export async function POST(request: NextRequest) {
  const body = await request.json();
  const { listingId, listingSlug, listingTitle, senderName, senderEmail, senderPhone, messageText, type, offerAmount } = body;

  if (!senderName || !senderEmail || !messageText) {
    return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
  }

  if (!process.env.DATABASE_URL) {
    // Gracefully degrade — message not saved but don't break the form
    return NextResponse.json({ success: true, saved: false });
  }

  try {
    const { neon } = await import('@neondatabase/serverless');
    const sql = neon(process.env.DATABASE_URL);

    const result = await sql`
      INSERT INTO messages (listing_id, listing_slug, listing_title, sender_name, sender_email, sender_phone, message_text, type, offer_amount, status)
      VALUES (
        ${listingId || null},
        ${listingSlug || null},
        ${listingTitle || null},
        ${senderName},
        ${senderEmail},
        ${senderPhone || null},
        ${messageText},
        ${type || 'inquiry'},
        ${offerAmount || null},
        'new'
      )
      RETURNING id
    `;

    // Send email notification to Chris
    const { notifyNewMessage } = await import('@/lib/email');
    await notifyNewMessage({
      senderName,
      senderEmail,
      senderPhone,
      messageText,
      listingTitle,
      listingSlug,
      type: type || 'inquiry',
      offerAmount,
    });

    return NextResponse.json({ success: true, saved: true, id: result[0]?.id });
  } catch (err) {
    console.error('Failed to save message:', err);
    // Don't expose DB errors to the public — just degrade
    // Still attempt to send email notification even if DB fails
    try {
      const { notifyNewMessage } = await import('@/lib/email');
      await notifyNewMessage({ senderName, senderEmail, senderPhone, messageText, listingTitle, listingSlug, type: type || 'inquiry', offerAmount });
    } catch {}
    return NextResponse.json({ success: true, saved: false });
  }
}
