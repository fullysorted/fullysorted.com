import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, BookOpen, ArrowRight } from "lucide-react";
import { articles, getArticleBySlug } from "@/lib/articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | Fully Sorted`,
    description: article.excerpt,
  };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

// Very lightweight markdown → HTML: headings, paragraphs, bold
function renderContent(content: string): string {
  return content
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("## ")) {
        return `<h2>${trimmed.slice(3)}</h2>`;
      }
      if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
        return `<p><strong>${trimmed.slice(2, -2)}</strong></p>`;
      }
      // Inline bold
      const withBold = trimmed.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
      return `<p>${withBold}</p>`;
    })
    .join("");
}

// Category badge colours
const categoryColor: Record<string, string> = {
  "Weekly Report": "#E8722A",
  "What Would Chris Buy?": "#29ABE2",
  "Sorted or Not": "#6ab04c",
  "The Long Game": "#8b5cf6",
  "San Diego Car Culture": "#E8722A",
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const color = categoryColor[article.category] ?? "#E8722A";
  const html = renderContent(article.content);

  // Related articles (everything except this one, max 3)
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <div style={{ background: "#faf9f7" }} className="min-h-screen">
      {/* Light Header */}
      <div className="relative" style={{ background: "#fff", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          {/* Breadcrumb */}
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors hover:text-stone-900"
            style={{ color: "#6b6b5e" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Market Research
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full"
              style={{ background: `${color}22`, color }}
            >
              {article.category}
            </span>
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: "#9a9a8a" }}
            >
              <Calendar className="w-3 h-3" />
              {article.date}
            </span>
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: "#9a9a8a" }}
            >
              <Clock className="w-3 h-3" />
              {article.readTime} read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4" style={{ color: "#1a1a18" }}>
            {article.title}
          </h1>

          {/* Excerpt */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ color: "#6b6b5e" }}
          >
            {article.excerpt}
          </p>

          {/* Byline */}
          <div className="flex items-center gap-3 mt-8 pt-6" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0"
              style={{ background: "#E8722A" }}
            >
              CP
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#1a1a18" }}>Chris Peterson</p>
              <p className="text-xs" style={{ color: "#9a9a8a" }}>
                Founder, Fully Sorted · 25 years in the collector car market
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div
              className="article-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            {/* End cap */}
            <div
              className="mt-12 pt-8 flex items-center justify-between"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              <Link
                href="/research"
                className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors"
                style={{ color: "#E8722A" }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Research
              </Link>
              <p className="text-xs text-stone-400">
                Questions? chris@fullysorted.com
              </p>
            </div>
          </div>

          {/* Sticky sidebar */}
          <div className="space-y-6">
            {/* Newsletter */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">
                Monday Market Movers
              </p>
              <h3 className="font-bold text-stone-800 mb-2">
                Get the weekly analysis free
              </h3>
              <p className="text-sm text-stone-500 mb-4">
                Every Monday morning: what moved, what didn't, and what to watch.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full h-10 px-3 text-sm border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400"
                />
                <button
                  type="submit"
                  className="w-full h-10 text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity"
                  style={{ background: "#E8722A" }}
                >
                  Subscribe — Free
                </button>
              </form>
            </div>

            {/* Value Guide CTA */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "rgba(232,114,42,0.06)",
                border: "1px solid rgba(232,114,42,0.15)",
              }}
            >
              <p className="font-bold text-stone-800 text-sm mb-1">
                What&apos;s your car worth?
              </p>
              <p className="text-xs text-stone-500 mb-3">
                Get a comp-backed pricing verdict in under 60 seconds.
              </p>
              <Link
                href="/value-guide"
                className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors"
                style={{ color: "#E8722A" }}
              >
                Open Value Guide <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Sell CTA */}
            <div
              className="rounded-2xl p-5"
              style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
              }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#E8722A" }}>
                List Your Car
              </p>
              <p className="font-bold text-sm mb-2" style={{ color: "#1a1a18" }}>
                Reach serious buyers
              </p>
              <p className="text-xs mb-4" style={{ color: "#9a9a8a" }}>
                Listings from $9.99. No commissions. Fully Sorted audience.
              </p>
              <Link
                href="/sell"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
                style={{ background: "#E8722A" }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-px" style={{ background: "#E8722A" }} />
              <h2 className="text-sm font-bold text-stone-400 uppercase tracking-widest">
                More from the Research Desk
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((rel) => {
                const relColor = categoryColor[rel.category] ?? "#E8722A";
                return (
                  <Link
                    key={rel.slug}
                    href={`/research/${rel.slug}`}
                    className="block rounded-2xl p-5 bg-white hover:shadow-md transition-all group"
                    style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: relColor }}
                    >
                      {rel.category}
                    </span>
                    <h3 className="font-bold text-stone-800 mt-2 leading-snug group-hover:text-orange-600 transition-colors text-sm">
                      {rel.title}
                    </h3>
                    <p className="text-xs text-stone-400 mt-2 line-clamp-2">
                      {rel.excerpt}
                    </p>
                    <div className="flex items-center gap-1 mt-3 text-xs font-semibold" style={{ color: relColor }}>
                      <BookOpen className="w-3 h-3" />
                      {rel.readTime}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
