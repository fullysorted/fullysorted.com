'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, MapPin, Star, Phone, Globe, Shield, Camera, Wrench, Truck, ClipboardCheck, Paintbrush, Hammer, Warehouse, Sparkles, AtSign, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICE_CATEGORIES, CATEGORY_TINTS } from '@/lib/service-categories';

// ─── Service Categories ────────────────────────────────
// Order and labels come from the canonical list so the directory matches the
// homepage exactly. Inactive categories keep an icon so an existing provider
// row never renders without one.
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  detailing: <Paintbrush className="w-5 h-5" />,
  inspection: <ClipboardCheck className="w-5 h-5" />,
  photography: <Camera className="w-5 h-5" />,
  mechanical: <Wrench className="w-5 h-5" />,
  transport: <Truck className="w-5 h-5" />,
  storage: <Warehouse className="w-5 h-5" />,
  restoration: <Hammer className="w-5 h-5" />,
  bodywork: <Shield className="w-5 h-5" />,
};
const CATEGORIES = [
  { key: 'all', label: 'All Services', icon: <Sparkles className="w-5 h-5" /> },
  ...SERVICE_CATEGORIES.map((c) => ({
    key: c.key, label: c.label, icon: CATEGORY_ICONS[c.key],
  })),
];

type CategoryKey = string;

const CATEGORY_TINT = CATEGORY_TINTS;
const DEFAULT_TINT = '#1E6091';

// ─── Provider Type ────────────────────────────────────
interface Provider {
  id: number;
  businessName: string;
  category: string;
  description: string;
  location: string;
  rating: string | number;
  reviewCount: number;
  phone: string | null;
  website: string | null;
  instagram: string | null;
  foundingProvider: boolean;
  providerType?: string; // 'business' (a shop) | 'freelancer' (an independent)
  specialties: string[];
  priceRange: string;
  slug: string;
  avatarUrl: string | null;
}

// ─── Provider Card ────────────────────────────────────
function ProviderCard({ provider }: { provider: Provider }) {
  const categoryLabel = CATEGORIES.find((c) => c.key === provider.category)?.label ?? provider.category;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      whileHover={{ y: -3 }}
      className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-[0_24px_60px_-20px_rgba(26,26,24,0.35)] transition-shadow"
    >
      {/* Header — the shop's own photo when we have one (required at
          onboarding), category tint as the fallback for older rows. */}
      <Link href={`/services/${provider.slug}`} className="block relative h-36 overflow-hidden listing-image-container">
        {provider.avatarUrl ? (
          <>
            <Image
              src={provider.avatarUrl}
              alt={`${provider.businessName} — photo`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(rgba(11,26,46,0.05) 30%, rgba(11,26,46,0.72) 100%)' }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{ background: `linear-gradient(135deg, ${CATEGORY_TINT[provider.category] ?? DEFAULT_TINT} 0%, #0b1a2e 92%)` }}
          />
        )}
        <div className="absolute inset-0 film-grain opacity-[0.07] pointer-events-none" />
        <span className="absolute bottom-2.5 left-5 text-[11px] font-bold uppercase tracking-widest text-white/90">
          {categoryLabel}
        </span>
      </Link>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-stone-900">
                <Link
                  href={`/services/${provider.slug}`}
                  className="transition-colors hover:text-accent focus-visible:underline"
                >
                  {provider.businessName}
                </Link>
              </h3>
              {/* Earned by the review record, not by an admin flag. This was
                  gated on `provider.verified` — a retired trust badge that
                  /api/providers never even selected, so it never rendered. */}
              {Number(provider.rating) >= 4.5 && provider.reviewCount >= 3 && (
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full">
                  <Star className="w-3 h-3" aria-hidden /> Top-rated
                </span>
              )}
              {provider.foundingProvider && (
                <span
                  className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: 'var(--accent-gold-light)', color: '#8A6E31' }}
                >
                  <Sparkles className="w-3 h-3" /> Founding
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-sm text-stone-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {provider.location}
              </span>
              {Number(provider.rating) > 0 && provider.reviewCount > 0 && (
                <>
                  <span className="text-stone-300">|</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                    {Number(provider.rating).toFixed(1)} ({provider.reviewCount})
                  </span>
                </>
              )}
              <span className="text-stone-300">|</span>
              <span className="text-stone-600 font-medium">{provider.priceRange}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-stone-600 mb-4">{provider.description}</p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-4">
          {provider.specialties.map((spec) => (
            <span
              key={spec}
              className="bg-stone-100 text-stone-600 text-xs font-medium px-2.5 py-1 rounded-full"
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Contact Row — the profile comes first; phone, website and Instagram
            are secondary, because sending someone straight off-site is the
            one thing a directory should not do. */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-stone-100">
          <Link
            href={`/services/${provider.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-accent transition-transform hover:translate-x-0.5"
          >
            View profile <ArrowRight className="w-4 h-4" aria-hidden />
          </Link>
          {provider.phone && (
            <a
              href={`tel:${provider.phone}`}
              className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" /> {provider.phone}
            </a>
          )}
          {provider.website && (
            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-accent transition-colors"
            >
              <Globe className="w-4 h-4" /> Website
            </a>
          )}
          {provider.instagram && (
            <a
              href={`https://instagram.com/${provider.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-accent transition-colors"
            >
              <AtSign className="w-4 h-4" /> {provider.instagram}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── One labelled band of the directory ───────────────
function ProviderSection({
  title, blurb, icon, providers, categorySuffix, emptyLine, footerLink,
}: {
  title: string;
  blurb: string;
  icon: React.ReactNode;
  providers: Provider[];
  categorySuffix: string;
  emptyLine: string;
  footerLink?: { href: string; label: string };
}) {
  return (
    <section className="mb-12">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
        <h2 className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight text-stone-900">
          <span className="text-accent">{icon}</span>
          {title}
        </h2>
        <span className="text-sm text-stone-500">
          {providers.length} {providers.length === 1 ? 'specialist listed' : 'specialists listed'}{categorySuffix}
        </span>
      </div>
      <p className="text-sm text-stone-500 mb-5 max-w-2xl">{blurb}</p>

      {providers.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {providers.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-6 py-10 text-center">
          <p className="text-sm text-stone-500 max-w-md mx-auto">{emptyLine}</p>
        </div>
      )}

      {footerLink && providers.length === 0 && (
        <div className="mt-3 text-center">
          <Link href={footerLink.href} className="text-sm font-semibold text-accent hover:underline">
            {footerLink.label} →
          </Link>
        </div>
      )}
    </section>
  );
}

// ─── Main Directory Component ──────────────────────────
export default function ServicesDirectory() {
  // Initialize from URL params so homepage search + category chips deep-link
  // into a pre-filtered directory (/services?q=... or /services?type=...).
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type');
  const initialQuery = searchParams.get('q') ?? '';
  const validType = CATEGORIES.some((c) => c.key === initialType)
    ? (initialType as CategoryKey)
    : 'all';

  const [activeCategory, setActiveCategory] = useState<CategoryKey>(validType);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  // An outage and an empty directory are NOT the same thing and must not look
  // the same. "No specialists yet" during a database failure reads as churn.
  const [loadFailed, setLoadFailed] = useState(false);

  // Fetch providers from API
  useEffect(() => {
    fetch('/api/providers')
      .then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.error) throw new Error(data.error || 'Request failed');
        setProviders(Array.isArray(data.providers) ? data.providers : []);
      })
      .catch(() => setLoadFailed(true))
      .finally(() => setLoading(false));
  }, []);

  // The directory holds two genuinely different kinds of supply: established
  // shops with premises, and independent specialists who travel to the car.
  // Owners shop for them differently, so they get their own sections rather
  // than being blended into one grid.
  const matches = (p: Provider) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  };

  const filtered = providers.filter(matches);
  const shops = filtered.filter((p) => (p.providerType ?? 'business') !== 'freelancer');
  const freelancers = filtered.filter((p) => (p.providerType ?? 'business') === 'freelancer');
  const categorySuffix =
    activeCategory !== 'all'
      ? ` in ${CATEGORIES.find((c) => c.key === activeCategory)?.label}`
      : '';

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
        <input
          type="text"
          aria-label="Search specialists by name, specialty or service type"
          placeholder="Search by name, specialty, or service type..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.key
                ? 'bg-accent text-white shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-accent hover:border-accent hover:text-white'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {loading && (
        <p className="text-sm text-stone-500 mb-6 flex items-center gap-2">
          <Loader2 className="w-4 h-4 animate-spin" /> Loading providers...
        </p>
      )}

      {!loading && loadFailed && (
        <div className="rounded-2xl border p-6 text-center mb-6" style={{ borderColor: "rgba(176,85,63,0.3)", background: "rgba(176,85,63,0.06)" }}>
          <p className="font-semibold text-sm" style={{ color: "#9a3f2f" }}>We couldn&apos;t load the directory just now</p>
          <p className="text-sm text-stone-500 mt-1 max-w-md mx-auto">
            This is a problem at our end, not an empty directory. Please refresh in a moment &mdash; and if it keeps happening, tell us.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 text-sm font-semibold text-white rounded-lg"
            style={{ background: "#1E6091" }}
          >
            Try again
          </button>
        </div>
      )}

      {!loading && !loadFailed && (
        <>
          <ProviderSection
            title="Shops & businesses"
            blurb="Established workshops, detailers and specialists with a premises you can visit."
            icon={<Wrench className="w-4 h-4" />}
            providers={shops}
            categorySuffix={categorySuffix}
            emptyLine={
              providers.length === 0
                ? "We're building the directory now — apply below to be one of the first shops listed."
                : 'No shops match this search yet. Tell us who should be here and we will go and ask them.'
            }
          />

          <ProviderSection
            title="Independent specialists"
            blurb="One-person operations and mobile pros who come to the car — often with fixed-price gigs you can book outright."
            icon={<Sparkles className="w-4 h-4" />}
            providers={freelancers}
            categorySuffix={categorySuffix}
            emptyLine={
              providers.length === 0
                ? "None listed yet. If you work on collector cars solo, this is your section."
                : 'No independent specialists match this search yet. Tell us who should be here and we will go and ask them.'
            }
            footerLink={{ href: '/gigs', label: 'Browse fixed-price gigs' }}
          />
        </>
      )}

      {/* CTA to Apply */}
      <div className="mt-12 relative overflow-hidden rounded-2xl text-center">
        {/* Photographic backdrop under a racing-green overlay */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(900px 500px at 80% -10%, rgba(30,96,145,0.38) 0%, rgba(14,33,54,0) 60%), linear-gradient(160deg, #10233b 0%, #0b1a2e 55%, #0a1626 100%)' }}
        />
        <div className="absolute inset-0 film-grain opacity-[0.05] pointer-events-none" />
        <div className="relative p-8">
        <div className="flex justify-center gap-1.5 mb-4" aria-hidden>
          {['#6ab04c', '#29ABE2', '#B08D3F'].map((c) => (
            <span key={c} className="w-2 h-2 rounded-sm" style={{ background: c }} />
          ))}
        </div>
        <h3 className="font-display font-semibold tracking-tight text-2xl sm:text-3xl text-white mb-3">Join the Directory</h3>
        <p className="text-stone-200 mb-2 font-medium">Are you a specialist? Get listed.</p>
        <p className="text-stone-300 mb-6 max-w-xl mx-auto">
          If you do exceptional work with collector cars — photography, inspection, detailing, storage, transport, mechanical — apply to join the directory, build your review record, and get in front of serious collectors who care about who touches their car.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/services/apply"
            className="shine inline-flex items-center justify-center gap-2 bg-white hover:bg-accent-light text-accent font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Apply to be listed
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-white/35 hover:border-white/70 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-xl transition-all"
          >
            Recommend a Provider
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
}
