'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, MapPin, Star, Phone, Globe, Shield, Camera, Wrench, Truck, ClipboardCheck, Paintbrush, Hammer, Sparkles, AtSign, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// ─── Service Categories ────────────────────────────────
const CATEGORIES = [
  { key: 'all', label: 'All Services', icon: <Sparkles className="w-5 h-5" /> },
  { key: 'photography', label: 'Photography', icon: <Camera className="w-5 h-5" /> },
  { key: 'detailing', label: 'Detailing', icon: <Paintbrush className="w-5 h-5" /> },
  { key: 'mechanical', label: 'Mechanics', icon: <Wrench className="w-5 h-5" /> },
  { key: 'transport', label: 'Transport', icon: <Truck className="w-5 h-5" /> },
  { key: 'inspection', label: 'Inspections', icon: <ClipboardCheck className="w-5 h-5" /> },
  { key: 'restoration', label: 'Restoration', icon: <Hammer className="w-5 h-5" /> },
  { key: 'bodywork', label: 'Body & Paint', icon: <Shield className="w-5 h-5" /> },
] as const;

type CategoryKey = typeof CATEGORIES[number]['key'];

// ─── Category header tints (distinct, brand-harmonious; no stock photos) ──
const CATEGORY_TINT: Record<string, string> = {
  photography: '#1E6091',
  detailing: '#29ABE2',
  mechanical: '#5a6b74',
  transport: '#3f6f8a',
  inspection: '#4b8b2e',
  restoration: '#B08D3F',
  bodywork: '#9a5a33',
};
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
  verified: boolean;
  foundingProvider: boolean;
  specialties: string[];
  priceRange: string;
  slug: string;
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
      {/* Photographic category header */}
      <div className="relative h-28 overflow-hidden listing-image-container">
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${CATEGORY_TINT[provider.category] ?? DEFAULT_TINT} 0%, #0b1a2e 92%)` }}
        />
        <div className="absolute inset-0 film-grain opacity-[0.07] pointer-events-none" />
        <span className="absolute bottom-2.5 left-5 text-[11px] font-bold uppercase tracking-widest text-white/90">
          {categoryLabel}
        </span>
      </div>
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-bold text-stone-900">{provider.businessName}</h3>
              {provider.verified && (
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full">
                  <Shield className="w-3 h-3" /> Verified
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

        {/* Contact Row */}
        <div className="flex items-center gap-4 pt-4 border-t border-stone-100">
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

  // Fetch providers from API
  useEffect(() => {
    fetch('/api/providers')
      .then(res => res.json())
      .then(data => {
        if (data.providers) {
          setProviders(data.providers);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filtered = providers.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.businessName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Search */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
        <input
          type="text"
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

      {/* Results Count */}
      <p className="text-sm text-stone-500 mb-6">
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" /> Loading providers...
          </span>
        ) : (
          <>
            {filtered.length} {filtered.length === 1 ? 'provider' : 'providers'} found
            {activeCategory !== 'all' && ` in ${CATEGORIES.find((c) => c.key === activeCategory)?.label}`}
          </>
        )}
      </p>

      {/* Listings Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && !loading && (
        <div className="text-center py-16">
          <Wrench className="w-12 h-12 text-stone-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-stone-700 mb-2">No providers yet</h3>
          <p className="text-stone-500">
            {providers.length === 0
              ? 'We\'re building the directory now. Apply below to be one of the first listed.'
              : 'Try a different search or category. We\'re always adding new providers.'}
          </p>
        </div>
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
          If you do exceptional work with collector cars — detailing, mechanical, transport, inspection, restoration — apply to join the directory, build your review record, and get in front of serious collectors who care about who touches their car.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/services/apply"
            className="shine inline-flex items-center justify-center gap-2 bg-white hover:bg-accent-light text-accent font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
          >
            Apply to Be Listed
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
