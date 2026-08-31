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
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  // Validated against the canonical list, never trusted: an unknown key just
  // leaves the select empty.
  const preset = CATEGORY_OPTIONS.some((c) => c.value === category) ? category! : "";
  return <ApplyForm presetCategory={preset} />;
}
