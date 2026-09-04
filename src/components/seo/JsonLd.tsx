/**
 * JSON-LD helper — renders a server-side <script type="application/ld+json">
 * block for structured data. Use a single component per schema entity so
 * Next.js de-duplicates cleanly and search/AI crawlers can parse each graph.
 */
import { serializeJsonLd } from "@/lib/escape-html";

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}

/**
 * Canonical Organization entity for Fully Sorted. Referenced by `@id` from
 * other schema graphs so we don't duplicate the org payload on every page.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://fullysorted.com/#organization",
  name: "Fully Sorted",
  alternateName: "Fully Sorted: Collector Car Services Hub",
  url: "https://fullysorted.com",
  logo: {
    "@type": "ImageObject",
    url: "https://fullysorted.com/icon.png",
    width: 512,
    height: 512,
  },
  image: "https://fullysorted.com/opengraph-image.png",
  description:
    "A collector car services hub: an owner-reviewed directory of specialists for inspection, detailing, transport, mechanical, restoration and body work, alongside a marketplace of private and dealer listings with flat listing fees and a research center built on real sold prices.",
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Chris Peterson",
    jobTitle: "Founder",
    description:
      "Collector car industry veteran with 25+ years in the market, including time at major automotive companies and major auction houses.",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Diego",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [
    "https://x.com/fully_sorted",
    "https://www.instagram.com/fully.sorted/",
  ],
  knowsAbout: [
    "collector cars",
    "classic cars",
    "vintage cars",
    "car valuation",
    "car restoration",
    "concours d'elegance",
  ],
};

/**
 * Canonical WebSite entity with SearchAction so Google / AI crawlers can
 * surface sitelinks search box pointing at our browse page.
 */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://fullysorted.com/#website",
  url: "https://fullysorted.com",
  name: "Fully Sorted",
  description:
    "The collector car services hub: specialists, marketplace and research in one place.",
  publisher: { "@id": "https://fullysorted.com/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://fullysorted.com/services?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-US",
};
