import { permanentRedirect } from "next/navigation";

/**
 * RETIRED 2026-08-31. There is one application now, at /services/apply.
 *
 * A 308 rather than a deleted route: this URL is in the sitemap, in outreach
 * emails already sent to shops, and linked from the provider guide pages. A
 * shop clicking a six-week-old email must land on the form, not a 404.
 */
export default function ApplyBusinessRedirect() {
  permanentRedirect("/services/apply");
}
