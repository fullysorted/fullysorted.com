/**
 * Email notifications via Resend
 *
 * Requires RESEND_API_KEY in your environment variables.
 * Get a free key at https://resend.com (3,000 emails/month free)
 *
 * Add to Vercel: Settings → Environment Variables → RESEND_API_KEY
 */

import { escapeHtml as esc, safeUrl } from "./escape-html";
import { isEmailAddress, briefRows, type LeadBrief } from "./leads";
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
  /**
   * Per-send reply path. Defaults to Chris.
   *
   * This override exists for one case that matters: a lead relayed to a shop.
   * Without it every message we forward carries Chris's address, so a shop
   * hitting Reply answers Chris instead of the customer who is waiting — and
   * the lead dies in an inbox. Anything user-supplied must be validated before
   * it reaches here; see isEmailAddress below.
   */
  replyTo?: string;
  /** Silent copy. Used to keep Chris on relayed leads without exposing him. */
  bcc?: string;
};

async function sendEmail({ to = NOTIFY_TO, subject, html, replyTo, bcc }: EmailPayload): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Gracefully skip — log so it shows in Vercel logs but don't crash
    console.warn("[email] RESEND_API_KEY not set — email skipped:", subject);
    return false;
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM,
      replyTo: isEmailAddress(replyTo) ? replyTo.trim() : REPLY_TO,
      to,
      ...(isEmailAddress(bcc) ? { bcc: bcc.trim() } : {}),
      subject,
      html,
    });
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
          ${data.tier ? `<p style="margin:0 0 8px;"><strong>Package:</strong> ${esc(data.tier)}${data.amount ? `: $${esc(data.amount)}` : ""}</p>` : ""}
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
          <h2 style="color:#fff;margin:0;font-size:20px;">${isOffer ? `New Offer: $${data.offerAmount?.toLocaleString()}` : "New Inquiry"}</h2>
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
    subject: `✉️ Contact form: ${data.subject} from ${data.name}`,
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
        <p><strong>${esc(d.gigTitle)}</strong>: ${esc(d.amountDisplay)}</p>
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
      bodyHtml: `<p>Your order <strong>${esc(d.gigTitle)}</strong> was canceled and <strong>${esc(d.amountDisplay)}</strong> has been refunded to your original payment method. Refunds typically take 5–10 business days to appear.</p>`,
    }),
  });
}

// Buyer reported a problem — notify the provider and Chris (admin).
export async function notifyOrderDisputed(d: { providerEmail?: string; gigTitle: string; buyerName?: string; buyerEmail?: string; reason: string; orderId: number }) {
  const bodyHtml = `<p><strong>${esc(d.gigTitle)}</strong></p>
    <p>${d.buyerName ? `${esc(d.buyerName)}` : "The buyer"}${d.buyerEmail ? ` (${esc(d.buyerEmail)})` : ""} reported a problem with this order. The held payment is paused. It will not auto-release until this is resolved.</p>
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
    subject: `⚠️ Dispute reported: order #${d.orderId}: ${d.gigTitle}`,
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
      bodyHtml: `<p><strong>${esc(car)}</strong>${d.salePrice ? `: $${d.salePrice.toLocaleString()}` : ""}</p>
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
    subject: `Your Fully Sorted listing is ready to approve: ${d.businessName}`,
    html: orderShell({
      accent: "#1E6091",
      heading: "Your founding-provider listing is ready",
      bodyHtml: `<p>${firstName ? `Hi ${esc(firstName)},` : "Hi,"}</p>
        <p>We've put together a <strong>free founding-provider listing</strong> for <strong>${esc(d.businessName)}</strong> in the Fully Sorted ${esc(categoryLabel(d.category))} directory for the ${esc(d.location)} area. Nothing is published until you say so.</p>
        <p>One click to review it. Then choose whichever suits you:</p>
        <p style="margin:12px 0 0 0;"><strong>Yes, this is mine: claim it</strong>. Goes live now; we'll follow up with a link to edit your details and add photos.<br/>
        <strong>List it, but I don't want an account</strong>. Goes live as-is, nothing to maintain.<br/>
        <strong>No thanks, remove me</strong>. We take you off and never contact you again.</p>
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
    subject: `Quick reminder: your ${d.businessName} listing is waiting`,
    html: orderShell({
      accent: "#1E6091",
      heading: "Your listing is one click away",
      bodyHtml: `<p>${firstName ? `Hi ${esc(firstName)},` : "Hi,"}</p>
        <p>Just a quick nudge. Your free founding-provider listing for <strong>${esc(d.businessName)}</strong> is built and waiting for your OK. It takes about 30 seconds to review, and you can choose to claim it, have us list it as-is, or remove it entirely.</p>`,
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

// A reader submits a record, a correction or an ownership note to the Chassis
// Register. Pending until approved in /admin/register. The submitter's name
// and email go to Chris only and are never rendered on the register.
export async function notifyRegisterSubmission(d: {
  modelSlug: string;
  chassis: string;
  vin?: string | null;
  kind: string;
  body: string;
  eventDate?: string | null;
  sourceUrl?: string | null;
  relation?: string | null;
  name?: string | null;
  email?: string | null;
}) {
  const kindLabel = d.kind === "correction" ? "Correction" : d.kind === "ownership" ? "Owner report" : "Record";
  return sendEmail({
    subject: `Register ${kindLabel.toLowerCase()}: ${d.modelSlug} chassis ${d.chassis}`,
    html: `
      <h2>Chassis register: ${esc(kindLabel)}</h2>
      <p><strong>Model:</strong> ${esc(d.modelSlug)}<br/>
         <strong>Chassis:</strong> ${esc(d.chassis)}${d.vin ? `<br/><strong>VIN:</strong> ${esc(d.vin)}` : ""}${d.eventDate ? `<br/><strong>Date:</strong> ${esc(d.eventDate)}` : ""}</p>
      <blockquote style="border-left:3px solid #1E6091;padding-left:12px;color:#333">
        ${esc(d.body).replace(/\n/g, "<br/>")}
      </blockquote>
      ${d.sourceUrl ? `<p><strong>Source given:</strong> <a href="${safeUrl(d.sourceUrl)}">${esc(d.sourceUrl)}</a></p>` : "<p><em>No source supplied. If approved, the event will cite the submission itself.</em></p>"}
      <p><strong>From:</strong> ${esc(d.name || "anonymous")}${d.email ? ` &lt;${esc(d.email)}&gt;` : ""}${d.relation ? `, ${esc(d.relation.replace(/_/g, " "))}` : ""}</p>
      <p style="color:#6b6b5e;font-size:13px">Nothing is public until you approve it in /admin/register. Approval publishes an owner-reported event; the name and email stay private.</p>
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
        <p>It takes a minute, and it is the single most useful thing you can do for the next owner deciding who to trust with their car. Be honest, good or bad. The shop can reply to what you write, but they cannot edit it, hide it, or take it down.</p>
        <p style="font-size:13px;color:#6a6a5e;">This link works once and is just for you. We never publish your email address.</p>`,
      ctaLabel: "Write your review",
      ctaUrl: safeUrl(d.reviewUrl),
      footerHtml:
        "Chris Peterson · Founder, Fully Sorted · fullysorted.com<br/>" +
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
  const stars = d.rating ? "★".repeat(d.rating) + "☆".repeat(5 - d.rating) : "No rating";
  return sendEmail({
    subject: `New ${d.source === "testimonial" ? "testimonial" : "review"}: ${d.businessName} (${d.rating ?? "no rating"})`,
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
        <p>It is live on your profile now. You have a public right of reply. Replying well to a critical review does more for your reputation than the review costs you.</p>
        <p style="font-size:13px;color:#6a6a5e;">Reviews cannot be edited or removed by the business. If you believe this one is fraudulent or defamatory rather than simply unfavorable, reply to this email and we'll look at it.</p>`,
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
        <p>If you'd rather not, that is completely fine. This is the only reminder we will send.</p>`,
      ctaLabel: "Write your review",
      ctaUrl: safeUrl(d.reviewUrl),
      footerHtml:
        "Chris Peterson · Founder, Fully Sorted · fullysorted.com<br/>" +
        `You received this because ${esc(d.businessName)} asked us to. Don't want to hear from us again? Email <a href="mailto:${REPLY_TO}" style="color:#9a9a8a;">${REPLY_TO}</a> and we'll remove you.`,
    }),
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Directory leads — relayed to the shop
// ─────────────────────────────────────────────────────────────────────────────

/**
 * An owner enquires about a shop through its profile page. This goes to the
 * SHOP, with the owner as the reply path, and a blind copy to Chris.
 *
 * Until now `notifyNewMessage` was called with no recipient at all, so every
 * directory enquiry landed in Chris's inbox and was forwarded by hand — while
 * the form told the customer "Sent to {businessName}". That was survivable at
 * two shops a week and is the reason the directory felt dead to providers.
 *
 * Three things this template has to get right that the admin one did not:
 *   1. Reply goes to the customer. The whole point.
 *   2. No /admin links, no internal language — a shop owner is reading this.
 *   3. A postal address and a way out, because it is unsolicited mail to a
 *      business (CAN-SPAM applies even though the message is wanted).
 */
export async function notifyProviderLead(d: {
  providerEmail: string;
  businessName: string;
  senderName: string;
  senderEmail: string;
  senderPhone?: string | null;
  messageText: string;
  /** Optional structured answers about the car — see lib/leads.ts. */
  brief?: LeadBrief | null;
  /** Where the shop tells us what happened to this lead. Null if unsaved. */
  actionUrl?: string | null;
  profileUrl: string;
  copyTo?: string | null;
}) {
  // The car brief, when they filled it in. Rendered from briefRows so this
  // email, /admin and anything later agree on wording and order.
  const rows = briefRows(d.brief ?? null);
  const briefHtml = rows.length
    ? `<table style="width:100%;border-collapse:collapse;font-size:14px;margin:16px 0;background:#f4f7fa;border-radius:8px;">
         ${rows
           .map(
             ([k, v]) =>
               `<tr><td style="padding:8px 14px;font-weight:600;width:150px;color:#2C4A63;">${esc(k)}</td><td style="padding:8px 14px;">${esc(v)}</td></tr>`,
           )
           .join("")}
       </table>`
    : "";

  // Two links, no login. Most shops in the directory have not linked an
  // account yet, and a lead that can only be actioned from a dashboard they
  // have never seen is a lead nobody ever reports on.
  const actionHtml = d.actionUrl
    ? `<p style="font-size:13px;color:#6a6a5e;margin-top:20px;border-top:1px solid #e6e3da;padding-top:14px;">
         Once you have dealt with it:
         <a href="${safeUrl(d.actionUrl + "?do=replied")}" style="color:#1E6091;font-weight:600;">I replied to this</a>
         &nbsp;&middot;&nbsp;
         <a href="${safeUrl(d.actionUrl + "?do=junk")}" style="color:#9a5a33;font-weight:600;">Not a real inquiry</a><br/>
         One click. It tells us nothing about what you said. It is how we
         keep time-wasters out of your inbox.
       </p>`
    : "";

  return sendEmail({
    to: d.providerEmail,
    replyTo: d.senderEmail,
    bcc: d.copyTo || undefined,
    subject: `New inquiry for ${d.businessName} from ${d.senderName}`,
    html: orderShell({
      accent: "#1E6091",
      heading: "Someone wants to talk to you about their car",
      bodyHtml: `<p><strong>${esc(d.senderName)}</strong> found <strong>${esc(d.businessName)}</strong> in the Fully Sorted directory and sent this:</p>
        <div style="margin:16px 0;padding:14px 16px;background:#faf9f6;border-radius:8px;">
          <p style="margin:0;white-space:pre-line;">${esc(d.messageText)}</p>
        </div>
        ${briefHtml}
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:6px 0;font-weight:600;width:90px;">Email</td><td style="padding:6px 0;"><a href="mailto:${esc(d.senderEmail)}" style="color:#1E6091;">${esc(d.senderEmail)}</a></td></tr>
          ${d.senderPhone ? `<tr><td style="padding:6px 0;font-weight:600;">Phone</td><td style="padding:6px 0;"><a href="tel:${esc(d.senderPhone)}" style="color:#1E6091;">${esc(d.senderPhone)}</a></td></tr>` : ""}
        </table>
        <p style="margin-top:16px;"><strong>Just hit Reply</strong>. It goes straight to them, not to us.</p>
        <p style="font-size:13px;color:#6a6a5e;">Owners tend to contact two or three shops at once, so the first useful reply usually wins the job.</p>
        ${actionHtml}`,
      ctaLabel: "See your profile",
      ctaUrl: safeUrl(d.profileUrl),
      footerHtml:
        "Chris Peterson · Founder, Fully Sorted · fullysorted.com<br/>" +
        `You're getting this because ${esc(d.businessName)} is listed in our directory. Don't want inquiries by email? Reply to <a href="mailto:${REPLY_TO}" style="color:#9a9a8a;">${REPLY_TO}</a> and we'll sort it.`,
    }),
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Account linking — set up a login for a listing that already exists
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Sent to the address already on the provider row. Always to that address,
 * never to one a caller supplied — that property is what makes "request a link"
 * safe to expose publicly.
 */
export async function sendAccountLinkInvite(d: {
  to: string;
  businessName: string;
  linkUrl: string;
  ttlDays: number;
}) {
  return sendEmail({
    to: d.to,
    subject: `Set up your login for ${d.businessName}`,
    html: orderShell({
      accent: "#1E6091",
      heading: "Take control of your listing",
      bodyHtml: `<p><strong>${esc(d.businessName)}</strong> is listed on Fully Sorted, and this link sets up the login that lets you manage it yourself.</p>
        <p>Once you're in you can edit your details, reply to reviews, and keep the listing current without going through us.</p>
        <p style="font-size:13px;color:#6a6a5e;">The link works once and expires in ${d.ttlDays} days. If you didn't ask for it, ignore it. Nothing changes until someone uses it.</p>`,
      ctaLabel: "Set up my login",
      ctaUrl: safeUrl(d.linkUrl),
      footerHtml:
        "Chris Peterson · Founder, Fully Sorted · fullysorted.com<br/>" +
        `Not your listing? Tell us at <a href="mailto:${REPLY_TO}" style="color:#9a9a8a;">${REPLY_TO}</a> and we'll take it down.`,
    }),
  });
}

/**
 * Security notice, sent after a link succeeds. The token went to the business's
 * own address, but invite emails get forwarded around an office — so the
 * business hears about it either way, and has somewhere to go if it was not them.
 */
export async function notifyAccountLinked(d: {
  to: string;
  businessName: string;
  profileUrl: string;
}) {
  return sendEmail({
    to: d.to,
    subject: `A login was set up for ${d.businessName}`,
    html: orderShell({
      accent: "#1E6091",
      heading: "Your listing now has a login",
      bodyHtml: `<p>Someone just set up an account to manage <strong>${esc(d.businessName)}</strong> on Fully Sorted, using the link we emailed to this address.</p>
        <p>If that was you, nothing else to do. Your dashboard is at <a href="https://fullysorted.com/dashboard/provider" style="color:#1E6091;">fullysorted.com/dashboard/provider</a>.</p>
        <p><strong>If it wasn't you, reply to this email straight away</strong> and we'll unlink it while we sort it out.</p>`,
      ctaLabel: "See your listing",
      ctaUrl: safeUrl(d.profileUrl),
    }),
  });
}

/**
 * Sent to Chris when the team console repoints a LIVE listing's contact email.
 *
 * The /team console runs on one shared secret with no per-rep identity. On a
 * listing that is already public, changing the contact address is the one edit
 * that is also the first half of a takeover: change the email, send the login
 * link, and the listing belongs to whoever asked for it. Nothing in the console
 * needs to be locked down for that — the rep genuinely does have to fix wrong
 * addresses — but it must not be able to happen quietly.
 */
export async function notifyProviderEmailChanged(d: {
  businessName: string;
  previousEmail: string;
  newEmail: string;
  editedBy: string | null;
  profileUrl: string;
}) {
  return sendEmail({
    subject: `Contact email changed on a live listing: ${d.businessName}`,
    html: orderShell({
      accent: "#b45309",
      heading: "A live listing's contact email was changed",
      bodyHtml: `<p><strong>${esc(d.businessName)}</strong> is live, and the team console just changed the address on file.</p>
        <p>Was: ${esc(d.previousEmail)}<br/>Now: ${esc(d.newEmail)}<br/>By: ${esc(d.editedBy || "no name given")}</p>
        <p>If that matches a call you know about, nothing to do. If it doesn't, change it back and rotate <code>TEAM_SECRET</code>. The next step after an email change is a login link to that address.</p>`,
      ctaLabel: "See the listing",
      ctaUrl: safeUrl(d.profileUrl),
    }),
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// Provider approval — the message that closes the loop on an application
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Sent when an admin flips an application from `pending` to `active`.
 *
 * There was no template here at all, which meant a shop filled in the apply
 * form, read "we'll review it within 3-5 business days", and then heard nothing
 * — ever. Their listing went live and the only person who knew was us.
 *
 * The optional `linkUrl` is the second half of the same problem. The public
 * apply form does not require sign-in, so `clerk_user_id` is null on most of
 * these rows and the shop has a live listing it cannot log in to manage. When
 * the caller has minted a link token, this email carries it, so approval and
 * "here is how you get in" arrive as one message rather than two we never send.
 * When the row is already linked, the CTA is the listing itself.
 */
export async function sendProviderApprovedEmail(d: {
  to: string;
  businessName: string;
  profileUrl: string;
  /** Present only when the row has no account attached yet. */
  linkUrl?: string;
  ttlDays?: number;
}) {
  const hasLink = !!d.linkUrl;
  return sendEmail({
    to: d.to,
    subject: `Your Fully Sorted listing is live: ${d.businessName}`,
    html: orderShell({
      accent: "#1E6091",
      heading: "Your listing is live",
      bodyHtml: hasLink
        ? `<p>We've approved <strong>${esc(d.businessName)}</strong>. Your profile is published in the Fully Sorted directory now, and owners looking for your kind of work can find it and contact you.</p>
        <p>You applied without an account, so the last thing to do is set up a login. That is what the button below does. Once you're in you can edit your details, add photos, reply to reviews, and keep the listing current without going through us.</p>
        <p>Inquiries reach you by email either way, so nothing is waiting on this. It just means you own the page rather than us.</p>
        <p style="font-size:13px;color:#6a6a5e;">The link works once and expires in ${esc(d.ttlDays ?? 14)} days. Your listing is at <a href="${safeUrl(d.profileUrl)}" style="color:#1E6091;">${esc(d.profileUrl)}</a>.</p>`
        : `<p>We've approved <strong>${esc(d.businessName)}</strong>. Your profile is published in the Fully Sorted directory now, and owners looking for your kind of work can find it and contact you.</p>
        <p>Inquiries come straight to you by email. You reply to the customer, not to us. Everything else about the listing is yours to manage from your dashboard at <a href="https://fullysorted.com/dashboard/provider" style="color:#1E6091;">fullysorted.com/dashboard/provider</a>: details, photos, and replies to any reviews you get.</p>
        <p style="font-size:13px;color:#6a6a5e;">Something on the page wrong? Reply to this email and we'll fix it.</p>`,
      ctaLabel: hasLink ? "Set up my login" : "See your listing",
      ctaUrl: safeUrl(hasLink ? d.linkUrl! : d.profileUrl),
      footerHtml:
        "Chris Peterson · Founder, Fully Sorted · fullysorted.com<br/>" +
        `You're getting this because ${esc(d.businessName)} applied to be listed in our directory. Questions, or want the listing removed? Email <a href="mailto:${REPLY_TO}" style="color:#9a9a8a;">${REPLY_TO}</a>.`,
    }),
  });
}
