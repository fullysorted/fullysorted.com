/**
 * Email notifications via Resend
 *
 * Requires RESEND_API_KEY in your environment variables.
 * Get a free key at https://resend.com (3,000 emails/month free)
 *
 * Add to Vercel: Settings → Environment Variables → RESEND_API_KEY
 */

import { escapeHtml as esc, safeUrl } from "./escape-html";
import { categoryLabel } from "./service-categories";

const NOTIFY_TO = "chris@fullysorted.com";
const FROM = "Fully Sorted <notifications@updates.fullysorted.com>";
// The FROM subdomain is send-only (no MX record), so replies to it hard-bounce.
// Every send must carry a reply path that actually receives mail.
const REPLY_TO = "chris@fullysorted.com";

// CAN-SPAM §7704(a)(5)(A)(iii): commercial email must carry a valid physical
// postal address. There is no B2B exemption. Override per-environment if needed.
const POSTAL_ADDRESS =
  process.env.FS_POSTAL_ADDRESS || "3532 Don Lorenzo, San Diego, CA 92117";

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
    const { error } = await resend.emails.send({ from: FROM, replyTo: REPLY_TO, to, subject, html });
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

// Buyer requests a gig → notify Chris (and CC the provider when known).
export async function notifyGigInquiry(data: {
  gigTitle: string;
  providerName: string;
  providerEmail?: string;
  tier?: string;
  amount?: number;
  buyerName: string;
  buyerEmail: string;
  message?: string;
}) {
  return sendEmail({
    to: data.providerEmail || NOTIFY_TO,
    subject: `🛠️ New gig request: ${data.gigTitle}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a18;">
        <div style="background:#1E6091;padding:16px 24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:18px;">New Gig Request</h2>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
          <p style="margin:0 0 8px;"><strong>Gig:</strong> ${esc(data.gigTitle)}</p>
          <p style="margin:0 0 8px;"><strong>Provider:</strong> ${esc(data.providerName)}</p>
          ${data.tier ? `<p style="margin:0 0 8px;"><strong>Package:</strong> ${esc(data.tier)}${data.amount ? ` — $${esc(data.amount)}` : ""}</p>` : ""}
          <p style="margin:0 0 8px;"><strong>From:</strong> ${esc(data.buyerName)} (${esc(data.buyerEmail)})</p>
          ${data.message ? `<p style="margin:12px 0 0;color:#6b6b5e;">${esc(data.message)}</p>` : ""}
        </div>
      </div>`,
  });
}

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
        <div style="background:#1E6091;padding:16px 24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:20px;">New Provider Application</h2>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;width:140px;">Business</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${esc(data.businessName)}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Owner</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${esc(data.ownerName)}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Category</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${esc(data.category)}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Location</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${esc(data.location)}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="mailto:${esc(data.email)}" style="color:#1E6091;">${esc(data.email)}</a></td></tr>
            ${data.phone ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${esc(data.phone)}</td></tr>` : ""}
            ${data.website ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Website</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="${safeUrl(data.website)}" style="color:#1E6091;">${esc(data.website)}</a></td></tr>` : ""}
            ${data.instagram ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Instagram</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">@${esc(data.instagram.replace("@", ""))}</td></tr>` : ""}
            ${data.referredBy ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Referred by</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${esc(data.referredBy)}</td></tr>` : ""}
          </table>
          <div style="margin-top:16px;padding:16px;background:#faf9f7;border-radius:8px;">
            <p style="margin:0 0 8px;font-weight:600;font-size:14px;">Specialties</p>
            <p style="margin:0;font-size:14px;color:#6b6b5e;">${esc(data.specialties)}</p>
          </div>
          ${data.whyList ? `<div style="margin-top:12px;padding:16px;background:#faf9f7;border-radius:8px;"><p style="margin:0 0 8px;font-weight:600;font-size:14px;">Why they want to list</p><p style="margin:0;font-size:14px;color:#6b6b5e;">${esc(data.whyList)}</p></div>` : ""}
          <div style="margin-top:24px;text-align:center;">
            <a href="https://fullysorted.com/admin/listings" style="display:inline-block;background:#1E6091;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Review in Admin Panel</a>
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
        <div style="background:${isOffer ? "#6ab04c" : "#1E6091"};padding:16px 24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:20px;">${isOffer ? `New Offer — $${data.offerAmount?.toLocaleString()}` : "New Inquiry"}</h2>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
          ${data.listingTitle ? `<p style="margin:0 0 16px;padding:12px;background:#EEF4FA;border:1px solid #CFE0EF;border-radius:8px;font-size:14px;"><strong>Listing:</strong> ${esc(data.listingTitle)}</p>` : ""}
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;width:120px;">From</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${esc(data.senderName)}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="mailto:${esc(data.senderEmail)}" style="color:#1E6091;">${esc(data.senderEmail)}</a></td></tr>
            ${data.senderPhone ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="tel:${esc(data.senderPhone)}" style="color:#1E6091;">${esc(data.senderPhone)}</a></td></tr>` : ""}
            ${isOffer ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Offer</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-size:18px;font-weight:700;color:#6ab04c;">$${data.offerAmount?.toLocaleString()}</td></tr>` : ""}
          </table>
          <div style="margin-top:16px;padding:16px;background:#faf9f7;border-radius:8px;">
            <p style="margin:0 0 8px;font-weight:600;font-size:14px;">Message</p>
            <p style="margin:0;font-size:14px;color:#6b6b5e;white-space:pre-line;">${esc(data.messageText)}</p>
          </div>
          <div style="margin-top:24px;">
            <a href="mailto:${esc(data.senderEmail)}?subject=Re: ${encodeURIComponent(data.listingTitle || "Your Fully Sorted inquiry")}" style="display:inline-block;background:#1E6091;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-right:8px;">Reply to ${esc(data.senderName)}</a>
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
          <h2 style="color:#1E6091;margin:0;font-size:20px;">New Listing Live</h2>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
          <p style="font-size:24px;font-weight:700;margin:0 0 8px;">${esc(data.year)} ${esc(data.make)} ${esc(data.model)}</p>
          <p style="font-size:20px;color:#1E6091;font-weight:700;margin:0 0 24px;">$${Number(data.price).toLocaleString()}</p>
          <p style="margin:0 0 16px;font-size:14px;color:#6b6b5e;">Payment was received and the listing is now active on the site. Review it and add a Chris's Take if you haven't already.</p>
          <div style="margin-top:24px;">
            ${data.slug ? `<a href="https://fullysorted.com/listings/${data.slug}" style="display:inline-block;background:#1E6091;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-right:8px;">View Listing</a>` : ""}
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
        <div style="background:#1E6091;padding:16px 24px;border-radius:12px 12px 0 0;">
          <h2 style="color:#fff;margin:0;font-size:20px;">Contact Form Message</h2>
        </div>
        <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;width:100px;">From</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${esc(data.name)}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="mailto:${esc(data.email)}" style="color:#1E6091;">${esc(data.email)}</a></td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Subject</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${esc(data.subject)}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#faf9f7;border-radius:8px;">
            <p style="margin:0;font-size:14px;color:#6b6b5e;white-space:pre-line;">${esc(data.message)}</p>
          </div>
          <div style="margin-top:24px;">
            <a href="mailto:${esc(data.email)}?subject=Re: ${encodeURIComponent(data.subject)}" style="display:inline-block;background:#1E6091;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Reply to ${esc(data.name)}</a>
          </div>
        </div>
        <p style="text-align:center;font-size:12px;color:#9a9a8a;margin-top:16px;">Fully Sorted · fullysorted.com</p>
      </div>
    `,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Gig order lifecycle (paid → delivered → released / refunded)
// ─────────────────────────────────────────────────────────────────────────────

function orderShell(opts: {
  accent: string;
  heading: string;
  bodyHtml: string;
  ctaLabel?: string;
  ctaUrl?: string;
  /**
   * Replaces the default signature line. Pass this rather than string-replacing
   * the rendered HTML — the old `.replace()` approach broke silently whenever
   * the footer text changed.
   */
  footerHtml?: string;
}): string {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;color:#1a1a18;">
      <div style="background:${opts.accent};padding:16px 24px;border-radius:12px 12px 0 0;">
        <h2 style="color:#fff;margin:0;font-size:18px;">${opts.heading}</h2>
      </div>
      <div style="background:#fff;border:1px solid #e5e5e0;border-top:none;border-radius:0 0 12px 12px;padding:24px;font-size:14px;color:#3a3a34;line-height:1.6;">
        ${opts.bodyHtml}
        ${opts.ctaLabel && opts.ctaUrl ? `<div style="margin-top:24px;"><a href="${opts.ctaUrl}" style="display:inline-block;background:${opts.accent};color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">${opts.ctaLabel}</a></div>` : ""}
      </div>
      <p style="text-align:center;font-size:12px;color:#9a9a8a;margin-top:16px;line-height:1.7;">
        ${opts.footerHtml || "Fully Sorted · fullysorted.com"}<br/>
        ${POSTAL_ADDRESS}
      </p>
    </div>`;
}

// Provider: you have a new PAID order — funds are held, start the work.
export async function notifyOrderPaidToProvider(d: { providerEmail?: string; gigTitle: string; buyerName?: string; netDisplay: string }) {
  if (!d.providerEmail) return false;
  return sendEmail({
    to: d.providerEmail,
    subject: `💳 New paid order: ${d.gigTitle}`,
    html: orderShell({
      accent: "#1E6091",
      heading: "You've got a paid order",
      bodyHtml: `<p><strong>${esc(d.gigTitle)}</strong></p>
        <p>${d.buyerName ? `${esc(d.buyerName)} ` : "A buyer "}has paid and the funds are held securely. Start the work, then mark it delivered from your dashboard. You'll receive <strong>${esc(d.netDisplay)}</strong> when the buyer accepts.</p>`,
      ctaLabel: "Open your dashboard",
      ctaUrl: "https://fullysorted.com/dashboard/provider",
    }),
  });
}

// Buyer: payment received (held) — here's your order link.
export async function sendOrderReceiptToBuyer(d: { buyerEmail?: string; gigTitle: string; providerName: string; amountDisplay: string; orderUrl: string }) {
  if (!d.buyerEmail) return false;
  return sendEmail({
    to: d.buyerEmail,
    subject: `Order confirmed: ${d.gigTitle}`,
    html: orderShell({
      accent: "#1E6091",
      heading: "Payment received & held",
      bodyHtml: `<p>Thanks for your order with <strong>${esc(d.providerName)}</strong>.</p>
        <p><strong>${esc(d.gigTitle)}</strong> — ${esc(d.amountDisplay)}</p>
        <p>Your payment is held securely by Fully Sorted and only released to the provider when you accept the completed work. You can check the status or release payment any time from your order page.</p>`,
      ctaLabel: "View your order",
      ctaUrl: d.orderUrl,
    }),
  });
}

// Buyer: provider marked it delivered — review & accept to release.
export async function notifyOrderDeliveredToBuyer(d: { buyerEmail?: string; gigTitle: string; providerName: string; orderUrl: string }) {
  if (!d.buyerEmail) return false;
  return sendEmail({
    to: d.buyerEmail,
    subject: `✅ Delivered: ${d.gigTitle}`,
    html: orderShell({
      accent: "#B08D3F",
      heading: "Your work has been delivered",
      bodyHtml: `<p><strong>${esc(d.providerName)}</strong> has marked <strong>${esc(d.gigTitle)}</strong> as delivered.</p>
        <p>Please review the work. When you're happy, release the payment from your order page. If you don't act, the payment auto-releases after the review window.</p>`,
      ctaLabel: "Review & release payment",
      ctaUrl: d.orderUrl,
    }),
  });
}

// Provider: payment released to you.
export async function notifyOrderReleasedToProvider(d: { providerEmail?: string; gigTitle: string; netDisplay: string }) {
  if (!d.providerEmail) return false;
  return sendEmail({
    to: d.providerEmail,
    subject: `🎉 You've been paid: ${d.gigTitle}`,
    html: orderShell({
      accent: "#4b8b2e",
      heading: "Payment released",
      bodyHtml: `<p><strong>${esc(d.netDisplay)}</strong> for <strong>${esc(d.gigTitle)}</strong> is on its way to your connected account.</p>
        <p>Payout timing follows your Stripe settings. Thanks for the great work.</p>`,
      ctaLabel: "View your dashboard",
      ctaUrl: "https://fullysorted.com/dashboard/provider",
    }),
  });
}

// Buyer: your order was refunded.
export async function notifyOrderRefundedToBuyer(d: { buyerEmail?: string; gigTitle: string; amountDisplay: string }) {
  if (!d.buyerEmail) return false;
  return sendEmail({
    to: d.buyerEmail,
    subject: `Refunded: ${d.gigTitle}`,
    html: orderShell({
      accent: "#6b6b5e",
      heading: "Your order was refunded",
      bodyHtml: `<p>Your order <strong>${esc(d.gigTitle)}</strong> was cancelled and <strong>${esc(d.amountDisplay)}</strong> has been refunded to your original payment method. Refunds typically take 5–10 business days to appear.</p>`,
    }),
  });
}

// Buyer reported a problem — notify the provider and Chris (admin).
export async function notifyOrderDisputed(d: { providerEmail?: string; gigTitle: string; buyerName?: string; buyerEmail?: string; reason: string; orderId: number }) {
  const bodyHtml = `<p><strong>${esc(d.gigTitle)}</strong></p>
    <p>${d.buyerName ? `${esc(d.buyerName)}` : "The buyer"}${d.buyerEmail ? ` (${esc(d.buyerEmail)})` : ""} reported a problem with this order. The held payment is paused — it will not auto-release until this is resolved.</p>
    <div style="margin-top:12px;padding:16px;background:#faf9f7;border-radius:8px;">
      <p style="margin:0 0 6px;font-weight:600;">What they said</p>
      <p style="margin:0;color:#6b6b5e;white-space:pre-line;">${esc(d.reason)}</p>
    </div>
    <p style="margin-top:12px;">Reach out to the buyer to resolve it. You can refund from your dashboard, or the buyer can release payment once it's sorted.</p>`;
  // Provider
  if (d.providerEmail) {
    await sendEmail({
      to: d.providerEmail,
      subject: `⚠️ A problem was reported on order #${d.orderId}`,
      html: orderShell({ accent: "#B0553F", heading: "A buyer reported a problem", bodyHtml, ctaLabel: "Open your dashboard", ctaUrl: "https://fullysorted.com/dashboard/provider" }),
    });
  }
  // Admin (Chris)
  return sendEmail({
    subject: `⚠️ Dispute reported — order #${d.orderId}: ${d.gigTitle}`,
    html: orderShell({ accent: "#B0553F", heading: "Order dispute reported", bodyHtml, ctaLabel: "Review orders", ctaUrl: "https://fullysorted.com/admin/messages" }),
  });
}

// A user submitted a sold price — notify Chris to review.
export async function notifySaleSubmission(d: { make: string; model: string; year: number | null; salePrice: number | null; venue: string | null; submitter: string | null; sourceUrl: string | null }) {
  const car = `${d.year || ""} ${d.make} ${d.model}`.trim();
  return sendEmail({
    subject: `📥 New sold-price submission: ${car}`,
    html: orderShell({
      accent: "#1E6091",
      heading: "New sold-price submission",
      bodyHtml: `<p><strong>${esc(car)}</strong>${d.salePrice ? ` — $${d.salePrice.toLocaleString()}` : ""}</p>
        ${d.venue ? `<p>Venue: ${esc(d.venue)}</p>` : ""}
        ${d.submitter ? `<p>From: ${esc(d.submitter)}</p>` : ""}
        ${d.sourceUrl ? `<p>Proof: <a href="${safeUrl(d.sourceUrl)}">${esc(d.sourceUrl)}</a></p>` : ""}
        <p>Review and approve it into the market database.</p>`,
      ctaLabel: "Review submissions",
      ctaUrl: "https://fullysorted.com/admin/submissions",
    }),
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Provider onboarding — claim invite + reminder (sent from the /team console)
// ─────────────────────────────────────────────────────────────────────────────

type ProviderInviteData = {
  to: string;
  businessName: string;
  ownerName?: string;
  category: string;
  location: string;
  claimUrl: string;
};

/**
 * Footer for the two cold outreach templates. These are commercial email under
 * CAN-SPAM, so they need a working reply path and a clear opt-out. The postal
 * address is appended by orderShell for every template.
 */
const PROVIDER_EMAIL_FOOTER =
  "Chris Peterson · Founder, Fully Sorted · fullysorted.com<br/>" +
  `Questions, or don't want to hear from us again? Email <a href="mailto:${REPLY_TO}" style="color:#9a9a8a;">${REPLY_TO}</a> and we'll remove you.`;

// First invite: "we built your listing — one click to approve it."
export async function sendProviderInvite(d: ProviderInviteData) {
  const firstName = (d.ownerName || "").split(" ")[0];
  return sendEmail({
    to: d.to,
    subject: `Your Fully Sorted listing is ready to approve — ${d.businessName}`,
    html: orderShell({
      accent: "#1E6091",
      heading: "Your founding-provider listing is ready",
      bodyHtml: `<p>${firstName ? `Hi ${esc(firstName)},` : "Hi,"}</p>
        <p>We've put together a <strong>free founding-provider listing</strong> for <strong>${esc(d.businessName)}</strong> in the Fully Sorted ${esc(categoryLabel(d.category))} directory for the ${esc(d.location)} area. Nothing is published until you say so.</p>
        <p>One click to review it — then choose whichever suits you:</p>
        <p style="margin:12px 0 0 0;"><strong>Yes, this is mine — claim it</strong> — goes live now; we'll follow up with a link to edit your details and add photos.<br/>
        <strong>List it, but I don't want an account</strong> — goes live as-is, nothing to maintain.<br/>
        <strong>No thanks — remove me</strong> — we take you off and never contact you again.</p>
        <p>The listing is free and there is no contract.</p>`,
      ctaLabel: "Review your listing",
      ctaUrl: d.claimUrl,
      footerHtml: PROVIDER_EMAIL_FOOTER,
    }),
  });
}

// Gentle nudge if the invite hasn't been acted on.
export async function sendProviderInviteReminder(d: ProviderInviteData) {
  const firstName = (d.ownerName || "").split(" ")[0];
  return sendEmail({
    to: d.to,
    subject: `Quick reminder — your ${d.businessName} listing is waiting`,
    html: orderShell({
      accent: "#1E6091",
      heading: "Your listing is one click away",
      bodyHtml: `<p>${firstName ? `Hi ${esc(firstName)},` : "Hi,"}</p>
        <p>Just a quick nudge — your free founding-provider listing for <strong>${esc(d.businessName)}</strong> is built and waiting for your OK. It takes about 30 seconds to review, and you can choose to claim it, have us list it as-is, or remove it entirely.</p>`,
      ctaLabel: "Review your listing",
      ctaUrl: d.claimUrl,
      footerHtml: PROVIDER_EMAIL_FOOTER,
    }),
  });
}

// An owner submits a correction or a story against a model history page.
export async function notifyModelContribution(d: {
  modelName: string;
  kind: string;
  section: string;
  body: string;
  sourceUrl?: string | null;
  name?: string | null;
  email?: string | null;
  credential?: string | null;
}) {
  const isCorrection = d.kind === "correction";
  return sendEmail({
    subject: `${isCorrection ? "Correction" : "Owner story"}: ${d.modelName}`,
    html: `
      <h2>${isCorrection ? "Suggested correction" : "Owner story"}</h2>
      <p><strong>Page:</strong> ${esc(d.modelName)}<br/>
         <strong>Section:</strong> ${esc(d.section)}</p>
      <blockquote style="border-left:3px solid #1E6091;padding-left:12px;color:#333">
        ${esc(d.body).replace(/\n/g, "<br/>")}
      </blockquote>
      ${d.sourceUrl ? `<p><strong>Source given:</strong> <a href="${safeUrl(d.sourceUrl)}">${esc(d.sourceUrl)}</a></p>` : "<p><em>No source supplied.</em></p>"}
      <p><strong>From:</strong> ${esc(d.name || "anonymous")}${d.email ? ` &lt;${esc(d.email)}&gt;` : ""}<br/>
         ${d.credential ? `<strong>Says they are:</strong> ${esc(d.credential)}` : ""}</p>
      <p style="color:#6b6b5e;font-size:13px">Nothing is public until you approve it in /admin/contributions.</p>
    `,
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Provider reviews — client invite + moderation notice
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Sent to a shop's client, asking them to review work that has already been
 * done. Commercial email under CAN-SPAM even though it is solicited by the
 * shop, so it carries the postal address (via orderShell) and an opt-out.
 *
 * The link is one-time and scoped to a single review row. We never tell the
 * shop who did or didn't respond beyond what appears publicly, and the shop
 * cannot withdraw the review once it is in.
 */
export async function sendReviewInvite(d: {
  to: string;
  clientName?: string;
  businessName: string;
  workType?: string | null;
  reviewUrl: string;
}) {
  const firstName = (d.clientName || "").split(" ")[0];
  return sendEmail({
    to: d.to,
    subject: `How did ${d.businessName} do?`,
    html: orderShell({
      accent: "#1E6091",
      heading: `Tell other owners about ${esc(d.businessName)}`,
      bodyHtml: `<p>${firstName ? `Hi ${esc(firstName)},` : "Hi,"}</p>
        <p><strong>${esc(d.businessName)}</strong> asked us to invite you to review${d.workType ? ` the ${esc(d.workType)}` : ""} they did for you. They are listed in the Fully Sorted directory, where owners find specialists to work on collector cars.</p>
        <p>It takes a minute, and it is the single most useful thing you can do for the next owner deciding who to trust with their car. Be honest — good or bad. The shop can reply to what you write, but they cannot edit it, hide it, or take it down.</p>
        <p style="font-size:13px;color:#6a6a5e;">This link works once and is just for you. We never publish your email address.</p>`,
      ctaLabel: "Write your review",
      ctaUrl: safeUrl(d.reviewUrl),
      footerHtml:
        "Fully Sorted · fullysorted.com<br/>" +
        `You received this because ${esc(d.businessName)} asked us to. Don't want to hear from us again? Email <a href="mailto:${REPLY_TO}" style="color:#9a9a8a;">${REPLY_TO}</a> and we'll remove you.`,
    }),
  });
}

// A review landed and is waiting in the moderation queue.
export async function notifyNewReview(d: {
  businessName: string;
  authorName: string;
  rating: number | null;
  body: string;
  source: string;
  adminUrl: string;
}) {
  const stars = d.rating ? "★".repeat(d.rating) + "☆".repeat(5 - d.rating) : "—";
  return sendEmail({
    subject: `New ${d.source === "testimonial" ? "testimonial" : "review"} — ${d.businessName} (${d.rating ?? "no rating"})`,
    html: orderShell({
      accent: "#1E6091",
      heading: "A review is waiting for moderation",
      bodyHtml: `<p><strong>${esc(d.businessName)}</strong></p>
        <p style="font-size:18px;letter-spacing:2px;color:#B08D3F;margin:4px 0;">${stars}</p>
        <p style="margin:0 0 4px 0;"><strong>${esc(d.authorName)}</strong> · ${esc(d.source)}</p>
        <p style="white-space:pre-line;background:#faf9f6;padding:12px;border-radius:8px;">${esc(d.body)}</p>
        <p style="font-size:13px;color:#6a6a5e;">Moderation is for abuse, spam and off-topic noise only. A negative review that describes real work gets published.</p>`,
      ctaLabel: "Open the queue",
      ctaUrl: safeUrl(d.adminUrl),
    }),
  });
}

// The review went live — tell the shop, and tell them how to reply.
export async function notifyReviewPublished(d: {
  to?: string | null;
  businessName: string;
  authorName: string;
  rating: number | null;
  profileUrl: string;
}) {
  if (!d.to) return false;
  return sendEmail({
    to: d.to,
    subject: `A new review is live on your Fully Sorted profile`,
    html: orderShell({
      accent: "#1E6091",
      heading: "You have a new review",
      bodyHtml: `<p><strong>${esc(d.authorName)}</strong> left ${d.rating ? `a ${d.rating}-star review` : "a review"} for ${esc(d.businessName)}.</p>
        <p>It is live on your profile now. You have a public right of reply — replying well to a critical review does more for your reputation than the review costs you.</p>
        <p style="font-size:13px;color:#6a6a5e;">Reviews cannot be edited or removed by the business. If you believe this one is fraudulent or defamatory rather than simply unfavourable, reply to this email and we'll look at it.</p>`,
      ctaLabel: "See your profile",
      ctaUrl: safeUrl(d.profileUrl),
    }),
  });
}

/**
 * One nudge, seven days after the invite, and never again.
 *
 * The person we are emailing owes us nothing — they already paid the shop and
 * we are asking them for a favour. A drip sequence here would be the site
 * nagging the public to generate its own content, so REVIEW_REMINDER_DAYS is a
 * single reminder and the cron marks the row so it cannot fire twice.
 */
export async function sendReviewInviteReminder(d: {
  to: string;
  clientName?: string;
  businessName: string;
  reviewUrl: string;
}) {
  const firstName = (d.clientName || "").split(" ")[0];
  return sendEmail({
    to: d.to,
    subject: `Still happy to review ${d.businessName}?`,
    html: orderShell({
      accent: "#1E6091",
      heading: "One quick nudge, then we'll leave you alone",
      bodyHtml: `<p>${firstName ? `Hi ${esc(firstName)},` : "Hi,"}</p>
        <p>We asked last week whether you'd write a few lines about the work <strong>${esc(d.businessName)}</strong> did for you. The link is still open if you have a minute.</p>
        <p>If you'd rather not, that is completely fine — this is the only reminder we will send.</p>`,
      ctaLabel: "Write your review",
      ctaUrl: safeUrl(d.reviewUrl),
      footerHtml:
        "Fully Sorted · fullysorted.com<br/>" +
        `You received this because ${esc(d.businessName)} asked us to. Don't want to hear from us again? Email <a href="mailto:${REPLY_TO}" style="color:#9a9a8a;">${REPLY_TO}</a> and we'll remove you.`,
    }),
  });
}
