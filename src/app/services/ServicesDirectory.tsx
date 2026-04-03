'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Star, Phone, Globe, Shield, Camera, Wrench, Truck, ClipboardCheck, Paintbrush, Hammer, Sparkles, AtSign, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// âââ Service Categories ââââââââââââââââââââââââââââââââ
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

// âââ Provider Type ââââââââââââââââââââââââââââââââââââ
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

// âââ Provider Card ââââââââââââââââââââââââââââââââââââ
function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-white rounded-xl border border-stone-200 overflow-hidden hover:shadow-lg transition-shadow"
    >
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
                <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-medium px-2 py-0.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> Founding
                </span>
              )}
            </div>
            <div className="flex items-center gap-3 text-sm text-stone-500">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {provider.location}
              </span>
              <span className="text-stone-300">|</span>
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                {Number(provider.rating).toFixed(1)} ({provider.reviewCount})
              </span>
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
              className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-amber-700 transition-colors"
            >
              <Phone className="w-4 h-4" /> {provider.phone}
            </a>
          )}
          {provider.website && (
            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-amber-700 transition-colors"
            >
              <Globe className="w-4 h-4" /> Website
            </a>
          )}
          {provider.instagram && (
            <a
              href={`https://instagram.com/${provider.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-stone-600 hover:text-amber-700 transition-colors"
            >
              <AtSign className="w-4 h-4" /> {provider.instagram}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// âââ Main Directory Component ââââââââââââââââââââââââââ
export default function ServicesDirectory() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
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
          className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border border-stone-200 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
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
                ? 'bg-amber-600 text-white shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:border-amber-300 hover:text-amber-700'
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
              : 'Try a different search or category. We\'re always adding new vetted providers.'}
          </p>
        </div>
      )}

      {/* CTA to Apply */}
      <div className="mt-12 p-8 bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Join the Directory</h3>
        <p className="text-stone-300 mb-2 font-medium">Are you a specialist? Get listed.</p>
        <p className="text-stone-400 mb-6 max-w-xl mx-auto">
          If you do exceptional work with collector cars â detailing, mechanical, transport, inspection, restoration â apply to join the vetted directory and get in front of serious collectors who care about who touches their car.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/services/apply"
            className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Apply to Be Listed
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-stone-700 hover:bg-stone-600 text-white font-medium px-6 py-3 rounded-xl transition-colors"
          >
            Recommend a Provider
          </Link>
        </div>
      </div>
    </div>
  );
}
