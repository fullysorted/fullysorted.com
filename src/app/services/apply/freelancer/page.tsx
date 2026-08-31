import { permanentRedirect } from "next/navigation";

/**
 * RETIRED 2026-08-31. See ../business/page.tsx — same reasoning, and this one
 * mattered more: it was the "recommended for solo operators" door, and its
 * wizard ended in a fixed-price gig, a rail switched off at
 * GIG_PAYMENTS_ENABLED. Solo operators were being funnelled into a dead end.
 */
export default function ApplyFreelancerRedirect() {
  permanentRedirect("/services/apply");
}
