/**
 * Email notifications via Resend
 *
 * Requires RESEND_API_KEY in your environment variables.
 * Get a free key at https://resend.com (3,000 emails/month free)
 *
 * Add to Vercel: Settings → Environment Variables → RESEND_API_KEY
 */

const NOTIFY_TO = "chris@fullysorted.com";
const FROM = "Fully Sorted <notifications@fullysorted.com>";

type EmailPayload = {
  to?: string;
  subject: string;
  html: string;
};

async function sendEmail({ to = NOTIFY_TO, subject, html }: EmailPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Gracefully skip — log so it shows in Vercel logs but don't crash
    console.warn("[email] RESEND_API_KEY not set — email skipped:", subject);
    return false;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({ from: FROM, to, subject, html });
    if (error) {
      console.error("[email] Resend error:", error);
      return false;
    }
    return true;
  } catch (err) {
    console.error("[email] Failed to send:", err);
    return false;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Notification templates
// ─────────────────────────────────────────────────────────────────────────────

export async function notifyNewProviderApplication(data: {
  businessName: string;
  ownerName: string;
  category: string;
  location: string;
  email: string;
  phone?: string;
  website?: string;
  instagram?: string;
  specialties: string;
  whyList?: string;
  referredBy?: string;
}) {
  return sendEmail({
    subject: `🔔 New provider application: ${data.businessName}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a18;">
        <div style="background:#E8722A;padding:16px 24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:20px;">New Provider Application</h2>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;width:140px;">Business</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.businessName}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Owner</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.ownerName}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Category</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.category}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Location</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.location}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="mailto:${data.email}" style="color:#E8722A;">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.phone}</td></tr>` : ""}
            ${data.website ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Website</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="${data.website}" style="color:#E8722A;">${data.website}</a></td></tr>` : ""}
            ${data.instagram ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Instagram</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">@${data.instagram.replace("@", "")}</td></tr>` : ""}
            ${data.referredBy ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Referred by</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.referredBy}</td></tr>` : ""}
          </table>
          <div style="margin-top:16px;padding:16px;background:#faf9f7;border-radius:8px;">
            <p style="margin:0 0 8px;font-weight:600;font-size:14px;">Specialties</p>
            <p style="margin:0;font-size:14px;color:#6b6b5e;">${data.specialties}</p>
          </div>
          ${data.whyList ? `<div style="margin-top:12px;padding:16px;background:#faf9f7;border-radius:8px;"><p style="margin:0 0 8px;font-weight:600;font-size:14px;">Why they want to list</p><p style="margin:0;font-size:14px;color:#6b6b5e;">${data.whyList}</p></div>` : ""}
          <div style="margin-top:24px;text-align:center;">
            <a href="https://fullysorted.com/admin/listings" style="display:inline-block;background:#E8722A;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Review in Admin Panel</a>
          </div>
        </div>
        <p style="text-align:center;font-size:12px;color:#9a9a8a;margin-top:16px;">Fully Sorted · fullysorted.com</p>
      </div>
    `,
  });
}

export async function notifyNewMessage(data: {
  senderName: string;
  senderEmail: string;
  senderPhone?: string;
  messageText: string;
  listingTitle?: string;
  listingSlug?: string;
  type: string;
  offerAmount?: number;
}) {
  const isOffer = data.type === "offer" && data.offerAmount;
  const subject = isOffer
    ? `💰 New offer on ${data.listingTitle || "a listing"}: $${data.offerAmount?.toLocaleString()}`
    : `📬 New inquiry from ${data.senderName}${data.listingTitle ? ` on ${data.listingTitle}` : ""}`;

  return sendEmail({
    subject,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a18;">
        <div style="background:${isOffer ? "#6ab04c" : "#E8722A"};padding:16px 24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:20px;">${isOffer ? `New Offer — $${data.offerAmount?.toLocaleString()}` : "New Inquiry"}</h2>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
          ${data.listingTitle ? `<p style="margin:0 0 16px;padding:12px;background:#fff8f4;border:1px solid #fde4cf;border-radius:8px;font-size:14px;"><strong>Listing:</strong> ${data.listingTitle}</p>` : ""}
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;width:120px;">From</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.senderName}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="mailto:${data.senderEmail}" style="color:#E8722A;">${data.senderEmail}</a></td></tr>
            ${data.senderPhone ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="tel:${data.senderPhone}" style="color:#E8722A;">${data.senderPhone}</a></td></tr>` : ""}
            ${isOffer ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Offer</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-size:18px;font-weight:700;color:#6ab04c;">$${data.offerAmount?.toLocaleString()}</td></tr>` : ""}
          </table>
          <div style="margin-top:16px;padding:16px;background:#faf9f7;border-radius:8px;">
            <p style="margin:0 0 8px;font-weight:600;font-size:14px;">Message</p>
            <p style="margin:0;font-size:14px;color:#6b6b5e;white-space:pre-line;">${data.messageText}</p>
          </div>
          <div style="margin-top:24px;">
            <a href="mailto:${data.senderEmail}?subject=Re: ${encodeURIComponent(data.listingTitle || "Your Fully Sorted inquiry")}" style="display:inline-block;background:#E8722A;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-right:8px;">Reply to ${data.senderName}</a>
            <a href="https://fullysorted.com/admin/messages" style="display:inline-block;background:#faf9f7;color:#1a1a18;border:1px solid #e5e5e0;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">View in Admin</a>
          </div>
        </div>
        <p style="text-align:center;font-size:12px;color:#9a9a8a;margin-top:16px;">Fully Sorted · fullysorted.com</p>
      </div>
    `,
  });
}

export async function notifyNewListing(data: {
  year: number | string;
  make: string;
  model: string;
  price: number | string;
  listingId?: string;
  slug?: string;
}) {
  return sendEmail({
    subject: `🚗 New listing paid & live: ${data.year} ${data.make} ${data.model}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a18;">
        <div style="background:#1a1a18;padding:16px 24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#E8722A;margin:0;font-size:20px;">New Listing Live</h2>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
          <p style="font-size:24px;font-weight:700;margin:0 0 8px;">${data.year} ${data.make} ${data.model}</p>
          <p style="font-size:20px;color:#E8722A;font-weight:700;margin:0 0 24px;">$${Number(data.price).toLocaleString()}</p>
          <p style="margin:0 0 16px;font-size:14px;color:#6b6b5e;">A $3.99 payment was received and the listing is now active on the site. Review it and add a Chris's Take if you haven't already.</p>
          <div style="margin-top:24px;">
            ${data.slug ? `<a href="https://fullysorted.com/listings/${data.slug}" style="display:inline-block;background:#E8722A;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-right:8px;">View Listing</a>` : ""}
            <a href="https://fullysorted.com/admin/listings" style="display:inline-block;background:#faf9f7;color:#1a1a18;border:1px solid #e5e5e0;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Admin Panel</a>
          </div>
        </div>
        <p style="text-align:center;font-size:12px;color:#9a9a8a;margin-top:16px;">Fully Sorted · fullysorted.com</p>
      </div>
    `,
  });
}

export async function notifyContactForm(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return sendEmail({
    subject: `✉️ Contact form: ${data.subject} — ${data.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a18;">
        <div style="background:#E8722A;padding:16px 24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:20px;">Contact Form Message</h2>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;width:100px;">From</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.name}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="mailto:${data.email}" style="color:#E8722A;">${data.email}</a></td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Subject</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.subject}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#faf9f7;border-radius:8px;">
            <p style="margin:0;font-size:14px;color:#6b6b5e;white-space:pre-line;">${data.message}</p>
          </div>
          <div style="margin-top:24px;">
            <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}" style="display:inline-block;background:#E8722A;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Reply to ${data.name}</a>
          </div>
        </div>
        <p style="text-align:center;font-size:12px;color:#9a9a8a;margin-top:16px;">Fully Sorted · fullysorted.com</p>
      </div>
    `,
  });
}
