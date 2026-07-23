import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, BadgeCheck } from "lucide-react";
import { getGigBySlug } from "@/lib/data/gigs";
import { JsonLd } from "@/components/seo/JsonLd";
import { OrderPanel } from "./OrderPanel";

export const revalidate = 300;

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gig = await getGigBySlug(slug);
  if (!gig) return { title: "Gig Not Found | Fully Sorted" };
  const desc = (gig.description || "").slice(0, 155) || `${gig.title} by ${gig.provider_name} on Fully Sorted.`;
  return {
    title: `${gig.title} | Fully Sorted`,
    description: desc,
    alternates: { canonical: `/gigs/${gig.slug}` },
    openGraph: { type: "website", title: gig.title, description: desc, url: `https://fullysorted.com/gigs/${gig.slug}` },
  };
}

export default async function GigDetailPage({ params }: Props) {
  const { slug } = await params;
  const gig = await getGigBySlug(slug);
  if (!gig) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: gig.title,
    description: (gig.description || "").slice(0, 250) || undefined,
    category: gig.category || undefined,
    provider: { "@type": "Organization", name: gig.provider_name },
    areaServed: gig.provider_location || undefined,
    offers: gig.packages.map((p) => ({
      "@type": "Offer",
      name: p.title || p.tier,
      price: p.price,
      priceCurrency: "USD",
      url: `https://fullysorted.com/gigs/${gig.slug}`,
    })),
    url: `https://fullysorted.com/gigs/${gig.slug}`,
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Gigs", item: "https://fullysorted.com/gigs" },
      { "@type": "ListItem", position: 2, name: gig.title, item: `https://fullysorted.com/gigs/${gig.slug}` },
    ],
  };

  const initials = gig.provider_name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      <JsonLd data={[serviceSchema, breadcrumb]} />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <Link href="/gigs" className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 hover:text-accent transition-colors" style={{ color: "#6b6b5e" }}>
          <ArrowLeft className="w-4 h-4" /> All gigs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2">
            {gig.category && (
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                <span aria-hidden className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
                  <span className="w-1.5 h-1.5" style={{ background: "#1E6091" }} />
                  <span className="w-1.5 h-1.5" style={{ background: "#B08D3F" }} />
                </span>
                {gig.category}
              </span>
            )}
            <h1 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl mt-2 mb-5" style={{ color: "#1a1a18", lineHeight: 1.1 }}>{gig.title}</h1>

            {/* Provider chip */}
            <Link href={`/services/${gig.provider_slug}`} className="inline-flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold shrink-0 bg-accent">
                {initials}
              </div>
              <div>
                <p className="text-sm font-semibold inline-flex items-center gap-1.5 group-hover:text-accent transition-colors" style={{ color: "#1a1a18" }}>
                  {gig.provider_name}
                  {gig.provider_verified && <BadgeCheck className="w-4 h-4" style={{ color: "#29ABE2" }} />}
                </p>
                <p className="text-xs inline-flex items-center gap-1" style={{ color: "#9a9a8a" }}>
                  {gig.provider_location && <><MapPin className="w-3 h-3" /> {gig.provider_location}</>}
                </p>
              </div>
            </Link>

            {gig.description && (
              <div className="article-body" style={{ color: "#1a1a18" }}>
                {gig.description.split("\n\n").map((para, i) => (
                  <p key={i} className="mb-4 leading-relaxed" style={{ color: "#3a3a36" }}>{para}</p>
                ))}
              </div>
            )}

            {gig.requirements && (
              <div className="mt-8">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "#6b6b5e" }}>What the provider needs from you</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#3a3a36" }}>{gig.requirements}</p>
              </div>
            )}

            {gig.faqs && gig.faqs.length > 0 && (
              <div className="mt-8">
                <h2 className="text-sm font-bold uppercase tracking-widest mb-3" style={{ color: "#6b6b5e" }}>FAQ</h2>
                <div className="space-y-3">
                  {gig.faqs.map((f, i) => (
                    <div key={i}>
                      <p className="text-sm font-semibold" style={{ color: "#1a1a18" }}>{f.q}</p>
                      <p className="text-sm" style={{ color: "#6b6b5e" }}>{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Order panel */}
          <div className="lg:col-span-1">
            <OrderPanel gigSlug={gig.slug} packages={gig.packages} payEnabled={!!gig.provider_payouts_enabled} providerName={gig.provider_name} />
          </div>
        </div>
      </div>
    </div>
  );
}
