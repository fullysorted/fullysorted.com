import { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { events } from "@/lib/events";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://fullysorted.com";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "daily", priority: 1.0 },
    { url: `${base}/browse`, lastModified: now, changeFrequency: "hourly", priority: 0.9 },
    { url: `${base}/sell`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/value-guide`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/research`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/events`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/events/f1`, lastModified: now, changeFrequency: "daily", priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/services/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
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

  return [...staticPages, ...articlePages, ...eventPages];
}
