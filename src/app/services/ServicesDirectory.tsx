'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Star, Phone, Globe, Shield, Camera, Wrench, Truck, ClipboardCheck, Paintbrush, Hammer, Sparkles, Instagram, Loader2 } from 'lucide-react';
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

// âââ Fallback Providers (shown while DB is empty) âââââ
const SEED_PROVIDERS: Provider[] = [
  {
    id: 1, businessName: 'Pacific Coast Auto Photography', category: 'photography', slug: 'pacific-coast-auto-photography',
    description: 'Studio and on-location shoots that make your car look like it belongs in a magazine. Drone footage available.',
    location: 'San Diego, CA', rating: 4.9, reviewCount: 47, phone: '(619) 555-0142', website: 'https://pacificcoastauto.photo',
    verified: true, foundingProvider: true, instagram: null,
    specialties: ['Studio Shoots', 'On-Location', 'Drone', 'Auction Prep'], priceRange: '$$',
  },
  {
    id: 2, businessName: 'SoCal Concours Detailing', category: 'detailing', slug: 'socal-concours-detailing',
    description: 'Full paint correction, ceramic coating, and concours-level prep. We treat your car like it\'s headed to Pebble Beach.',
    location: 'Carlsbad, CA', rating: 5.0, reviewCount: 82, phone: '(760) 555-0198', website: 'https://socalconcours.com',
    verified: true, foundingProvider: true, instagram: '@socalconcours',
    specialties: ['Paint Correction', 'Ceramic Coating', 'Interior Restoration', 'Concours Prep'], priceRange: '$$$',
  },
  {
    id: 3, businessName: 'Heritage Motor Works', category: 'mechanical', slug: 'heritage-motor-works',
    description: 'European specialists with a focus on air-cooled Porsche, vintage Mercedes, and classic BMW. Factory-trained techs.',
    location: 'Vista, CA', rating: 4.8, reviewCount: 63, phone: '(760) 555-0234', website: 'https://heritagemotorworks.com',
    verified: true, foundingProvider: true, instagram: null,
    specialties: ['Air-Cooled Porsche', 'Vintage Mercedes', 'Classic BMW', 'Pre-Purchase Inspections'], priceRange: '$$$',
  },
  {
    id: 4, businessName: 'West Coast Collector Transport', category: 'transport', slug: 'west-coast-collector-transport',
    description: 'Enclosed transport for collector vehicles. Coast-to-coast coverage with GPS tracking and full insurance.',
    location: 'Escondido, CA', rating: 4.7, reviewCount: 35, phone: '(858) 555-0176', website: 'https://wccollectortransport.com',
    verified: true, foundingProvider: true, instagram: null,
    specialties: ['Enclosed Transport', 'Coast-to-Coast', 'Auction Pickup', 'GPS Tracking'], priceRange: '$$',
  },
  {
    id: 5, businessName: 'AutoScope Inspections', category: 'inspection', slug: 'autoscope-inspections',
    description: 'Comprehensive pre-purchase inspections with detailed reports and photos. Mobile service â we come to the car.',
    location: 'San Diego, CA', rating: 4.9, reviewCount: 128, phone: '(619) 555-0211', website: 'https://autoscope.pro',
    verified: true, foundingProvider: true, instagram: null,
    specialties: ['Pre-Purchase Inspection', 'Condition Reports', 'Auction Previews', 'Mobile Service'], priceRange: '$',
  },
  {
    id: 6, businessName: 'Rancho Santa Fe Restoration', category: 'restoration', slug: 'rancho-santa-fe-restoration',
    description: 'Full frame-off restorations for American muscle and European classics. Concours-winning results.',
    location: 'Rancho Santa Fe, CA', rating: 4.8, reviewCount: 22, phone: '(858) 555-0099', website: 'https://rsfrestoration.com',
    verified: true, foundingProvider: true, instagram: null,
    specialties: ['Frame-Off Restoration', 'American Muscle', 'European Classics', 'Concours Prep'], priceRange: '$$$$',
  },
  {
    id: 7, businessName: 'Del Mar Collision & Customs', category: 'bodywork', slug: 'del-mar-collision-customs',
    description: 'Classic car body and paint work. Color matching for vintage finishes. Rust repair and fabrication.',
    location: 'Del Mar, CA', rating: 4.6, reviewCount: 41, phone: '(858) 555-0333', website: 'https://delmarcc.com',
    verified: true, foundingProvider: true, instagram: null,
    specialties: ['Color Matching', 'Rust Repair', 'Panel Fabrication', 'Vintage Finishes'], priceRange: '$$$',
  },
  {
    id: 8, businessName: 'Garage Sixteen Mobile Mechanics', category: 'mechanical', slug: 'garage-sixteen-mobile-mechanics',
    description: 'Mobile mechanic service for classic and muscle cars. We come to your garage for service, tuning, and diagnosis.',
    location: 'San Diego County', rating: 4.7, reviewCount: 56, phone: '(619) 555-0456', website: 'https://garagesixteen.com',
    verified: false, foundingProvider: false, instagram: '@garagesixteen',
    specialties: ['Mobile Service', 'Carburetor Tuning', 'Brake Service', 'Classic American'], priceRange: '$$',
  },
];

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
              <Instagram className="w-4 h-4" /> {provider.instagram}
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
  const [providers, setProviders] = useState<Provider[]>(SEED_PROVIDERS);
  const [loading, setLoading] = useState(true);

  // Fetch from API, fallback to seed data
  useEffect(() => {
    fetch('/api/providers')
      .then(res => res.json())
      .then(data => {
        if (data.providers && data.providers.length > 0) {
          setProviders(data.providers);
        }
        // If no providers in DB yet, keep seed data
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
          <h3 className="text-lg font-semibold text-stone-700 mb-2">No providers found</h3>
          <p className="text-stone-500">Try a different search or category. We&apos;re always adding new vetted providers.</p>
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
Ó[ÏÙ]Ù]Ù]
NÂB
