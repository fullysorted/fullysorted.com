import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { events } from "@/lib/events";
import { getPublishedModels } from "@/lib/data/models";
import { getActiveGigs } from "@/lib/data/gigs";
import { getPublicProviderSlugs } from "@/lib/data/providers";
import { PROVIDER_TRACKS } from "@/lib/data/providerTracks";
import { isServiceCategory } from "@/lib/service-categories";
import { VALUE_GUIDE_PUBLIC } from "@/lib/features";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://fullysorted.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/browse`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/sell`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...(VALUE_GUIDE_PUBLIC
      ? [{ url: `${base}/value-guide`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 }]
      : []),
    { url: `${base}/research`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/research/models`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    // The research hub's four newer surfaces. These are the pages built to be
    // found — reference material with no equivalent elsewhere on the site.
    { url: `${base}/research/buying-guides`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/research/where-to-buy`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/research/importing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/research/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    // Was absent despite carrying its own metadata and canonical.
    { url: `${base}/research/compare`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/gigs`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/vin`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/events/f1`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/services/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/services/apply/business`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/services/apply/freelancer`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/submit-sale`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/services/guide`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    // The guide pages were missing entirely — eight trade playbooks and the
    // business guide, all substantial content, none of it crawlable. This is
    // the cheapest acquisition asset the site has; it belongs in here.
    { url: `${base}/services/guide/business`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/insurance`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/shop`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/trust`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  const trackPages: MetadataRoute.Sitemap = PROVIDER_TRACKS
    .filter((t) => isServiceCategory(t.slug))
    .map((t) => ({
      url: `${base}/services/guide/${t.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }));

  const articlePages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${base}/research/${a.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const eventPages: MetadataRoute.Sitemap = events.map((e) => ({
    url: `${base}/events/${e.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Published model-history pages (empty at build with no DB — safe).
  let modelPages: MetadataRoute.Sitemap = [];
  try {
    const models = await getPublishedModels();
    modelPages = models.map((m) => ({
      url: `${base}/research/models/${m.slug}`,
      lastModified: m.updated_at ? new Date(m.updated_at) : now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch {
    modelPages = [];
  }

  // Live provider profiles (empty at build with no DB — safe).
  let providerPages: MetadataRoute.Sitemap = [];
  try {
    const providers = await getPublicProviderSlugs();
    providerPages = providers.map((pr) => ({
      url: `${base}/services/${pr.slug}`,
      lastModified: pr.updated_at ? new Date(pr.updated_at) : now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    providerPages = [];
  }

  // Active marketplace listings (empty at build with no DB — safe). Without
  // these the whole inventory was reachable only through /browse, so no
  // individual car could ever rank for its own year/make/model.
  let listingPages: MetadataRoute.Sitemap = [];
  try {
    if (process.env.DATABASE_URL) {
      const { neon } = await import("@neondatabase/serverless");
      const sql = neon(process.env.DATABASE_URL);
      const rows = (await sql`
        SELECT slug, updated_at FROM listings
        WHERE status = 'active' AND slug IS NOT NULL
        ORDER BY created_at DESC
        LIMIT 5000
      `) as { slug: string; updated_at: string | null }[];
      listingPages = rows.map((l) => ({
        url: `${base}/listings/${l.slug}`,
        lastModified: l.updated_at ? new Date(l.updated_at) : now,
        changeFrequency: "daily" as const,
        priority: 0.7,
      }));
    }
  } catch {
    listingPages = [];
  }

  // Active public gigs (empty at build with no DB — safe).
  let gigPages: MetadataRoute.Sitemap = [];
  try {
    const gigs = await getActiveGigs();
    gigPages = gigs.map((g) => ({
      url: `${base}/gigs/${g.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch {
    gigPages = [];
  }

  return [...staticPages, ...trackPages, ...articlePages, ...eventPages, ...modelPages, ...providerPages, ...gigPages, ...listingPages];
}
