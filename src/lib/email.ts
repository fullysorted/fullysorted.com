/**
 * Email notifications via Resend
 *
 * Requires RESEND_API_KEY in your environment variables.
 * Get a free key at https://resend.com (3,000 emails/month free)
 *
 * Add to Vercel: Settings → Environment Variables → RESEND_API_KEY
 */

const NOTIFY_TO = "chris@fullysorted.com";
const FROM = "Fully Sorted <notifications@updates.fullysorted.com>";

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
          <p style="margin:0 0 8px;"><strong>Gig:</strong> ${data.gigTitle}</p>
          <p style="margin:0 0 8px;"><strong>Provider:</strong> ${data.providerName}</p>
          ${data.tier ? `<p style="margin:0 0 8px;"><strong>Package:</strong> ${data.tier}${data.amount ? ` — $${data.amount}` : ""}</p>` : ""}
          <p style="margin:0 0 8px;"><strong>From:</strong> ${data.buyerName} (${data.buyerEmail})</p>
          ${data.message ? `<p style="margin:12px 0 0;color:#6b6b5e;">${data.message}</p>` : ""}
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
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;width:140px;">Business</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.businessName}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Owner</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.ownerName}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Category</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.category}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Location</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.location}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="mailto:${data.email}" style="color:#1E6091;">${data.email}</a></td></tr>
            ${data.phone ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.phone}</td></tr>` : ""}
            ${data.website ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Website</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="${data.website}" style="color:#1E6091;">${data.website}</a></td></tr>` : ""}
            ${data.instagram ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Instagram</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">@${data.instagram.replace("@", "")}</td></tr>` : ""}
            ${data.referredBy ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Referred by</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.referredBy}</td></tr>` : ""}
          </table>
          <div style="margin-top:16px;padding:16px;background:#faf9f7;border-radius:8px;">
            <p style="margin:0 0 8px;font-weight:600;font-size:14px;">Specialties</p>
            <p style="margin:0;font-size:14px;color:#6b6b5e;">${data.specialties}</p>
          </div>
          ${data.whyList ? `<div style="margin-top:12px;padding:16px;background:#faf9f7;border-radius:8px;"><p style="margin:0 0 8px;font-weight:600;font-size:14px;">Why they want to list</p><p style="margin:0;font-size:14px;color:#6b6b5e;">${data.whyList}</p></div>` : ""}
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
          ${data.listingTitle ? `<p style="margin:0 0 16px;padding:12px;background:#EEF4FA;border:1px solid #CFE0EF;border-radius:8px;font-size:14px;"><strong>Listing:</strong> ${data.listingTitle}</p>` : ""}
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;width:120px;">From</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.senderName}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="mailto:${data.senderEmail}" style="color:#1E6091;">${data.senderEmail}</a></td></tr>
            ${data.senderPhone ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Phone</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="tel:${data.senderPhone}" style="color:#1E6091;">${data.senderPhone}</a></td></tr>` : ""}
            ${isOffer ? `<tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Offer</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-size:18px;font-weight:700;color:#6ab04c;">$${data.offerAmount?.toLocaleString()}</td></tr>` : ""}
          </table>
          <div style="margin-top:16px;padding:16px;background:#faf9f7;border-radius:8px;">
            <p style="margin:0 0 8px;font-weight:600;font-size:14px;">Message</p>
            <p style="margin:0;font-size:14px;color:#6b6b5e;white-space:pre-line;">${data.messageText}</p>
          </div>
          <div style="margin-top:24px;">
            <a href="mailto:${data.senderEmail}?subject=Re: ${encodeURIComponent(data.listingTitle || "Your Fully Sorted inquiry")}" style="display:inline-block;background:#1E6091;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;margin-right:8px;">Reply to ${data.senderName}</a>
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
          <p style="font-size:24px;font-weight:700;margin:0 0 8px;">${data.year} ${data.make} ${data.model}</p>
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
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;width:100px;">From</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.name}</td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Email</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;"><a href="mailto:${data.email}" style="color:#1E6091;">${data.email}</a></td></tr>
            <tr><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;font-weight:600;">Subject</td><td style="padding:8px 0;border-bottom:1px solid #f0f0ea;">${data.subject}</td></tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#faf9f7;border-radius:8px;">
            <p style="margin:0;font-size:14px;color:#6b6b5e;white-space:pre-line;">${data.message}</p>
          </div>
          <div style="margin-top:24px;">
            <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}" style="display:inline-block;background:#1E6091;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">Reply to ${data.name}</a>
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
      <p style="text-align:center;font-size:12px;color:#9a9a8a;margin-top:16px;">Fully Sorted · fullysorted.com</p>
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
      bodyHtml: `<p><strong>${d.gigTitle}</strong></p>
        <p>${d.buyerName ? `${d.buyerName} ` : "A buyer "}has paid and the funds are held securely. Start the work, then mark it delivered from your dashboard. You'll receive <strong>${d.netDisplay}</strong> when the buyer accepts.</p>`,
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
      bodyHtml: `<p>Thanks for your order with <strong>${d.providerName}</strong>.</p>
        <p><strong>${d.gigTitle}</strong> — ${d.amountDisplay}</p>
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
      bodyHtml: `<p><strong>${d.providerName}</strong> has marked <strong>${d.gigTitle}</strong> as delivered.</p>
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
      bodyHtml: `<p><strong>${d.netDisplay}</strong> for <strong>${d.gigTitle}</strong> is on its way to your connected account.</p>
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
      bodyHtml: `<p>Your order <strong>${d.gigTitle}</strong> was cancelled and <strong>${d.amountDisplay}</strong> has been refunded to your original payment method. Refunds typically take 5–10 business days to appear.</p>`,
    }),
  });
}

// Buyer reported a problem — notify the provider and Chris (admin).
export async function notifyOrderDisputed(d: { providerEmail?: string; gigTitle: string; buyerName?: string; buyerEmail?: string; reason: string; orderId: number }) {
  const bodyHtml = `<p><strong>${d.gigTitle}</strong></p>
    <p>${d.buyerName ? `${d.buyerName}` : "The buyer"}${d.buyerEmail ? ` (${d.buyerEmail})` : ""} reported a problem with this order. The held payment is paused — it will not auto-release until this is resolved.</p>
    <div style="margin-top:12px;padding:16px;background:#faf9f7;border-radius:8px;">
      <p style="margin:0 0 6px;font-weight:600;">What they said</p>
      <p style="margin:0;color:#6b6b5e;white-space:pre-line;">${d.reason}</p>
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
