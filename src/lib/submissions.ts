import { NextResponse } from "next/server";

/**
 * Delivery accounting for public submissions.
 *
 * Every public form on the site has two independent ways of reaching Chris:
 * a row in the database (which he works through in /admin) and a notification
 * email. Either one on its own means the submission is safe.
 *
 * Before this helper, routes reported `success: true` whenever the request
 * didn't throw — so with DATABASE_URL or RESEND_API_KEY unset, a buyer's
 * inquiry could be neither stored nor emailed while the UI showed a green
 * checkmark. The `notify*` helpers in lib/email.ts have always returned a
 * boolean; nothing read it.
 *
 * `delivered` is the honest predicate: at least one durable channel worked.
 */
export type DeliveryResult = {
  /** True when the submission reached Chris by at least one route. */
  delivered: boolean;
  /** Persisted to the database. */
  saved: boolean;
  /** Notification email accepted by the provider. */
  emailed: boolean;
};

/**
 * Run the save and the notify independently — one failing must never prevent
 * the other from being attempted — and report which succeeded.
 *
 * Pass `save: undefined` when there is no database path for this submission.
 */
export async function deliver(opts: {
  /** Short label for logs, e.g. "listing inquiry". */
  label: string;
  save?: () => Promise<unknown>;
  notify?: () => Promise<boolean>;
}): Promise<DeliveryResult> {
  let saved = false;
  let emailed = false;

  if (opts.save) {
    try {
      await opts.save();
      saved = true;
    } catch (err) {
      console.error(`[submission] ${opts.label}: DB save failed`, err);
    }
  }

  if (opts.notify) {
    try {
      emailed = (await opts.notify()) === true;
      if (!emailed) {
        console.error(`[submission] ${opts.label}: notification not sent`);
      }
    } catch (err) {
      console.error(`[submission] ${opts.label}: notification threw`, err);
      emailed = false;
    }
  }

  const delivered = saved || emailed;
  if (!delivered) {
    // The single line worth grepping for in production logs.
    console.error(
      `[submission] UNDELIVERED ${opts.label} — neither stored nor emailed. ` +
        `Check DATABASE_URL and RESEND_API_KEY.`
    );
  }
  return { delivered, saved, emailed };
}

const CONTACT_EMAIL = "chris@fullysorted.com";

/**
 * Build a mailto: the user can send themselves, pre-filled with everything
 * they already typed. Used only when nothing else worked — the point is that
 * a failed submit never costs someone their message.
 */
export function fallbackMailto(
  subject: string,
  fields: Record<string, string | number | null | undefined>
): string {
  const body = Object.entries(fields)
    .filter(([, v]) => v != null && String(v).trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

/**
 * The standard response when a submission could not be delivered by any route.
 * 503 rather than 500: nothing is wrong with the request, the delivery
 * channels are down. The client renders the mailto so the user sends it in one
 * click instead of retyping.
 */
export function undeliverableResponse(
  subject: string,
  fields: Record<string, string | number | null | undefined>
) {
  return NextResponse.json(
    {
      error:
        "We couldn't get that through to us just now. Send it as an email instead. Everything you typed is already in it.",
      undelivered: true,
      mailto: fallbackMailto(subject, fields),
      contactEmail: CONTACT_EMAIL,
    },
    { status: 503 }
  );
}
