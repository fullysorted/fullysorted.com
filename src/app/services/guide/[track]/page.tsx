import { permanentRedirect } from "next/navigation";

/**
 * 2026-10-05: the eight per-trade provider guides are retired. They were
 * written around fixed-price gigs and pricing tiers, which the product does
 * not have, and told shops to do things the directory never asks of them.
 * Every one of them now lands on the single playbook. The route stays so the
 * indexed URLs resolve instead of 404ing; the sitemap no longer lists them.
 */
export default function RetiredTrackGuide() {
  permanentRedirect("/services/guide");
}
