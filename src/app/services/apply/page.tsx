import type { Metadata } from "next";
import { CATEGORY_OPTIONS } from "@/lib/service-categories";
import ApplyForm from "./ApplyForm";

export const metadata: Metadata = {
  title: "List your services on Fully Sorted",
  description:
    "Get your collector-car services in front of owners who are actively buying and maintaining. One application, whether you run a workshop, travel to the car, or work remotely.",
  alternates: { canonical: "/services/apply" },
};

/**
 * This was a chooser: "I'm a business or shop" vs "I'm an independent /
 * freelancer", each with its own form and its own API route. It is now one
 * application, because the fork asked the wrong question — see
 * lib/work-settings.ts for the reasoning. /services/apply/business and
 * /services/apply/freelancer 308 here.
 *
 * The category deep link (/services/apply?category=detailing, used by every
 * provider guide page) is resolved HERE rather than with useSearchParams in
 * the form. That hook forces a client-side bailout, which would have shipped
 * this page as an empty shell on first paint — a form nobody can see is worse
 * than the fork it replaced.
 */
export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; claim?: string }>;
}) {
  const { category, claim } = await searchParams;
  // Validated against the canonical list, never trusted: an unknown key just
  // leaves the select empty.
  let preset = CATEGORY_OPTIONS.some((c) => c.value === category) ? category! : "";
  // ?claim=<slug> comes from the "Claim it" line on an unclaimed profile. Only
  // the public name and trade come back, and only for a live row.
  let presetClaim = "";
  if (claim && /^[a-z0-9-]{1,300}$/.test(claim) && process.env.DATABASE_URL) {
    try {
      const { neon } = await import("@neondatabase/serverless");
      const sql = neon(process.env.DATABASE_URL);
      const [row] = await sql`
        SELECT business_name, category FROM service_providers
        WHERE slug = ${claim} AND status = 'active' LIMIT 1
      `;
      if (row) {
        presetClaim = String(row.business_name ?? "");
        if (!preset && CATEGORY_OPTIONS.some((c) => c.value === row.category)) preset = String(row.category);
      }
    } catch {
      // A failed lookup just means an empty search box, never a broken page.
    }
  }
  return <ApplyForm presetCategory={preset} presetClaim={presetClaim} />;
}
