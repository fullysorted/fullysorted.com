import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { events } from "@/lib/events";
import { getPublishedModels } from "@/lib/data/models";
import { getActiveGigs } from "@/lib/data/gigs";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = "https://fullysorted.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/browse`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/sell`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/value-guide`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/research`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/research/models`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/gigs`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/vin`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/events/f1`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/services/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/services/guide`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/shop`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${base}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

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

  return [...staticPages, ...articlePages, ...eventPages, ...modelPages, ...gigPages];
}
