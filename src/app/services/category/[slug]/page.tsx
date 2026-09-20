import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/seo/JsonLd';
import { CATEGORY_PAGES, getCategoryPage } from '@/lib/data/categoryPages';
import { SERVICE_CATEGORIES, isServiceCategory } from '@/lib/service-categories';
import { getProvidersForCategory } from '@/lib/data/providers';
import { formatBusinessName, formatLocation } from '@/lib/provider-format';

// One indexable page per trade. The directory itself is a client-side filter,
// so without these there was nothing for "collector car transport" to land on.
export const revalidate = 3600;

const INK = '#12352A';
const TEAL = '#1C8C87';
const CREAM = '#FFFFFF';
const MUTED = '#6B7280';
const MONO = "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace";
const BASE = 'https://fullysorted.com';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CATEGORY_PAGES.filter((c) => isServiceCategory(c.key)).map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getCategoryPage(slug);
  if (!page) return { title: 'Services' };
  const title = `${page.heading}: Find a Specialist`;
  return {
    title,
    description: page.metaDescription,
    alternates: { canonical: `/services/category/${page.slug}` },
    openGraph: { type: 'website', title, description: page.metaDescription, url: `${BASE}/services/category/${page.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const page = getCategoryPage(slug);
  if (!page || !isServiceCategory(page.key)) notFound();

  const cat = SERVICE_CATEGORIES.find((c) => c.key === page.key)!;
  const providers = await getProvidersForCategory(page.key);
  const url = `${BASE}/services/category/${page.slug}`;

  const schemas: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Services', item: `${BASE}/services` },
        { '@type': 'ListItem', position: 2, name: page.heading, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
  if (providers.length) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: page.heading,
      itemListElement: providers.map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: formatBusinessName(p.business_name),
        url: `${BASE}/services/${p.slug}`,
      })),
    });
  }

  const others = CATEGORY_PAGES.filter((c) => c.slug !== page.slug && isServiceCategory(c.key));

  return (
    <div style={{ background: 'var(--bg-primary)' }} className="min-h-screen">
      <JsonLd data={schemas} />

      <div style={{ background: CREAM, borderBottom: '1px solid rgba(18,53,42,0.14)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <nav aria-label="Breadcrumb" className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: '0.12em', color: TEAL }}>
            <Link href="/services" className="hover:underline">Services</Link> / {cat.label}
          </nav>
          <h1 className="font-display tracking-tight text-4xl sm:text-5xl leading-[1.05] mt-3 mb-5" style={{ color: INK }}>
            {page.heading}
          </h1>
          {page.intro.map((p) => (
            <p key={p.slice(0, 24)} className="text-base sm:text-lg leading-relaxed mb-4 max-w-3xl" style={{ color: MUTED }}>
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href={`/services?type=${page.key}`} className="inline-block px-5 py-3 rounded-full text-sm font-semibold text-white" style={{ background: INK }}>
              Browse {cat.label.toLowerCase()} in the directory
            </Link>
            <Link href={`/services/apply?category=${page.key}`} className="inline-block px-5 py-3 rounded-full text-sm font-semibold" style={{ color: INK, border: `1px solid ${INK}` }}>
              Do this work? Apply to be listed
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">
        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-5" style={{ color: INK }}>Specialists on Fully Sorted</h2>
          {providers.length ? (
            <ul className="grid sm:grid-cols-2 gap-4">
              {providers.map((p) => (
                <li key={p.slug}>
                  <Link href={`/services/${p.slug}`} className="block rounded-xl p-5 h-full hover:shadow-md transition-shadow" style={{ background: '#fff', border: '1px solid rgba(18,53,42,0.14)' }}>
                    <span className="block font-semibold" style={{ color: INK }}>{formatBusinessName(p.business_name)}</span>
                    {p.location ? <span className="block text-sm mt-0.5" style={{ color: TEAL }}>{formatLocation(p.location)}</span> : null}
                    {p.description ? (
                      <span className="block text-sm mt-2 leading-relaxed" style={{ color: MUTED }}>
                        {p.description.length > 150 ? `${p.description.slice(0, 150).trimEnd()}...` : p.description}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="leading-relaxed" style={{ color: MUTED }}>
              Nobody is listed under this trade yet. The directory is new and filling by application.{' '}
              <Link href="/services" className="underline" style={{ color: TEAL }}>See every specialist currently listed</Link>, or{' '}
              <Link href={`/services/apply?category=${page.key}`} className="underline" style={{ color: TEAL }}>apply if this is your work</Link>.
            </p>
          )}
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-5" style={{ color: INK }}>What to ask before you book</h2>
          <ol className="space-y-3 list-decimal pl-5">
            {page.ask.map((q) => (
              <li key={q} className="leading-relaxed" style={{ color: INK }}>{q}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl sm:text-3xl mb-5" style={{ color: INK }}>Common questions</h2>
          <div className="space-y-6">
            {page.faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-lg mb-1.5" style={{ color: INK }}>{f.q}</h3>
                <p className="leading-relaxed" style={{ color: MUTED }}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-xl mb-4" style={{ color: INK }}>Other trades</h2>
          <div className="flex flex-wrap gap-2">
            {others.map((c) => (
              <Link key={c.slug} href={`/services/category/${c.slug}`} className="px-3.5 py-2 rounded-full text-sm" style={{ border: '1px solid rgba(18,53,42,0.25)', color: INK }}>
                {c.heading}
              </Link>
            ))}
          </div>
          <p className="text-sm mt-5" style={{ color: MUTED }}>
            Researching a particular car first?{' '}
            <Link href="/research/models" className="underline" style={{ color: TEAL }}>Model histories</Link> cover what to look for and what goes wrong, model by model.
          </p>
        </section>
      </div>
    </div>
  );
}
