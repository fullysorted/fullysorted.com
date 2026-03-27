'use client';

import { useState } from 'react';
import {
  Search, MapPin, Star, Phone, Globe, ChevronDown, Shield,
  Camera, Wrench, Truck, ClipboardCheck, Paintbrush, Hammer, Sparkles, X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// ─── Service Categories ────────────────────────────────
const CATEGORIES = [
  { key: 'all', label: 'All Services', icon: <Sparkles className="w-4 h-4" /> },
  { key: 'photography', label: 'Photography', icon: <Camera className="w-4 h-4" /> },
  { key: 'detailing', label: 'Detailing', icon: <Paintbrush className="w-4 h-4" /> },
  { key: 'mechanical', label: 'Mechanics', icon: <Wrench className="w-4 h-4" /> },
  { key: 'transport', label: 'Transport', icon: <Truck className="w-4 h-4" /> },
  { key: 'inspection', label: 'Inspections', icon: <ClipboardCheck className="w-4 h-4" /> },
  { key: 'restoration', label: 'Restoration', icon: <Hammer className="w-4 h-4" /> },
  { key: 'bodywork', label: 'Body & Paint', icon: <Shield className="w-4 h-4" /> },
] as const;

type CategoryKey = typeof CATEGORIES[number]['key'];

// ─── Category accent colors ────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  photography: '#29ABE2',
  detailing: '#8b5cf6',
  mechanical: '#E8722A',
  transport: '#6ab04c',
  inspection: '#E8722A',
  restoration: '#f59e0b',
  bodywork: '#29ABE2',
};

// ─── Sample Service Providers ──────────────────────────
const PROVIDERS = [
  {
    id: 1,
    name: 'Pacific Coast Auto Photography',
    category: 'photography',
    description: 'Studio and on-location shoots that make your car look like it belongs in a magazine. Drone footage available.',
    location: 'San Diego, CA',
    rating: 4.9,
    reviewCount: 47,
    phone: '(619) 555-0142',
    website: 'https://pacificcoastauto.photo',
    verified: true,
    chrisNote: 'These guys shot my 1967 Mustang and the photos sold the car before I even wrote the listing. Worth every penny.',
    specialties: ['Studio Shoots', 'On-Location', 'Drone', 'Auction Prep'],
    priceRange: '$$',
  },
  {
    id: 2,
    name: 'SoCal Concours Detailing',
    category: 'detailing',
    description: 'Full paint correction, ceramic coating, and concours-level prep. They treat your car like it\'s headed to Pebble Beach. I\'ve sent three of my own cars here.',
    location: 'Carlsbad, CA',
    rating: 5.0,
    reviewCount: 82,
    phone: '(760) 555-0198',
    website: 'https://socalconcours.com',
    verified: true,
    chrisNote: 'When I need a car to look its absolute best — pre-sale or for a show — these are the only people I call.',
    specialties: ['Paint Correction', 'Ceramic Coating', 'Interior Restoration', 'Concours Prep'],
    priceRange: '$$$',
  },
  {
    id: 3,
    name: 'Heritage Motor Works',
    category: 'mechanical',
    description: 'European specialists with a focus on air-cooled Porsche, vintage Mercedes, and classic BMW. Factory-trained techs.',
    location: 'Vista, CA',
    rating: 4.8,
    reviewCount: 63,
    phone: '(760) 555-0234',
    website: 'https://heritagemotorworks.com',
    verified: true,
    chrisNote: 'If you own an air-cooled 911, stop looking. These guys are the best in San Diego County, period.',
    specialties: ['Air-Cooled Porsche', 'Vintage Mercedes', 'Classic BMW', 'Pre-Purchase Inspections'],
    priceRange: '$$$',
  },
  {
    id: 4,
    name: 'West Coast Collector Transport',
    category: 'transport',
    description: 'Enclosed transport for collector vehicles. Coast-to-coast coverage with GPS tracking and full insurance.',
    location: 'Escondido, CA',
    rating: 4.7,
    reviewCount: 35,
    phone: '(858) 555-0176',
    website: 'https://wccollectortransport.com',
    verified: true,
    chrisNote: 'I\'ve shipped over two dozen cars with these folks. Not one scratch. They understand that your car isn\'t freight — it\'s family.',
    specialties: ['Enclosed Transport', 'Coast-to-Coast', 'Auction Pickup', 'GPS Tracking'],
    priceRange: '$$',
  },
  {
    id: 5,
    name: 'AutoScope Inspections',
    category: 'inspection',
    description: 'Comprehensive pre-purchase inspections with detailed reports and photos. Mobile service — they come to the car.',
    location: 'San Diego, CA',
    rating: 4.9,
    reviewCount: 128,
    phone: '(619) 555-0211',
    website: 'https://autoscope.pro',
    verified: true,
    chrisNote: 'Before you buy anything over $20k sight-unseen, pay these guys $300 to go look at it. It\'ll save you thousands.',
    specialties: ['Pre-Purchase Inspection', 'Condition Reports', 'Auction Previews', 'Mobile Service'],
    priceRange: '$',
  },
  {
    id: 6,
    name: 'Rancho Santa Fe Restoration',
    category: 'restoration',
    description: 'Full frame-off restorations for American muscle and European classics. Concours-winning results.',
    location: 'Rancho Santa Fe, CA',
    rating: 4.8,
    reviewCount: 22,
    phone: '(858) 555-0099',
    website: 'https://rsfrestoration.com',
    verified: true,
    chrisNote: 'Not cheap, but the work speaks for itself. They\'ve done three Pebble Beach cars. If you\'re doing a full restoration, talk to these guys first.',
    specialties: ['Frame-Off Restoration', 'American Muscle', 'European Classics', 'Concours Prep'],
    priceRange: '$$$$',
  },
  {
    id: 7,
    name: 'Del Mar Collision & Customs',
    category: 'bodywork',
    description: 'Classic car body and paint work. Color matching for vintage finishes. Rust repair and fabrication.',
    location: 'Del Mar, CA',
    rating: 4.6,
    reviewCount: 41,
    phone: '(858) 555-0333',
    website: 'https://delmarcc.com',
    verified: true,
    chrisNote: 'They matched the original Wimbledon White on my \'65 Shelby so perfectly you\'d think it just rolled off the assembly line.',
    specialties: ['Color Matching', 'Rust Repair', 'Panel Fabrication', 'Vintage Finishes'],
    priceRange: '$$$',
  },
  {
    id: 8,
    name: 'Garage Sixteen Mobile Mechanics',
    category: 'mechanical',
    description: 'Mobile mechanic service for classic and muscle cars. They come to your garage for service, tuning, and diagnosis.',
    location: 'San Diego County',
    rating: 4.7,
    reviewCount: 56,
    phone: '(619) 555-0456',
    website: 'https://garagesixteen.com',
    verified: false,
    chrisNote: 'Great for the stuff you don\'t want to trailer the car for — carb tuning, brake bleeds, fluid changes. They get it.',
    specialties: ['Mobile Service', 'Carburetor Tuning', 'Brake Service', 'Classic American'],
    priceRange: '$$',
  },
];

// ─── Provider Card ─────────────────────────────────────
function ProviderCard({ provider }: { provider: typeof PROVIDERS[number] }) {
  const [expanded, setExpanded] = useState(false);
  const accentColor = CATEGORY_COLORS[provider.category] ?? '#E8722A';

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="rounded-2xl overflow-hidden transition-all hover:shadow-lg"
      style={{ background: '#fff', border: '1px solid rgba(0,0,0,0.07)' }}
    >
      {/* Colored top accent bar */}
      <div className="h-1" style={{ background: accentColor }} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h3 className="text-base font-bold text-stone-900 leading-snug">{provider.name}</h3>
              {provider.verified && (
                <span
                  className="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(106,176,76,0.1)', color: '#4a8a32' }}
                >
                  <Shield className="w-2.5 h-2.5" /> Verified
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" /> {provider.location}
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span className="font-semibold text-stone-600">{provider.rating}</span>
                <span>({provider.reviewCount})</span>
              </span>
              <span
                className="font-bold px-1.5 py-0.5 rounded text-xs"
                style={{ background: `${accentColor}14`, color: accentColor }}
              >
                {provider.priceRange}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-stone-500 leading-relaxed mb-4">{provider.description}</p>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {provider.specialties.map((spec) => (
            <span
              key={spec}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: 'rgba(0,0,0,0.04)', color: '#6b7280' }}
            >
              {spec}
            </span>
          ))}
        </div>

        {/* Chris's Take toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-xs font-bold transition-colors"
          style={{ color: accentColor }}
        >
          Chris&apos;s Take
          <ChevronDown
            className="w-3.5 h-3.5 transition-transform"
            style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div
                className="mt-3 p-4 rounded-xl"
                style={{ background: `${accentColor}09`, border: `1px solid ${accentColor}22` }}
              >
                <p className="text-sm text-stone-600 italic leading-relaxed">
                  &ldquo;{provider.chrisNote}&rdquo;
                </p>
                <p className="text-xs font-bold mt-2" style={{ color: accentColor }}>
                  — Chris Peterson, Fully Sorted
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact row */}
        <div
          className="flex items-center gap-4 mt-4 pt-4"
          style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
        >
          {provider.phone && (
            <a
              href={`tel:${provider.phone}`}
              className="flex items-center gap-1.5 text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" /> {provider.phone}
            </a>
          )}
          {provider.website && (
            <a
              href={provider.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors"
              style={{ color: accentColor }}
            >
              <Globe className="w-3.5 h-3.5" /> Website
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Directory ────────────────────────────────────
export default function ServicesDirectory() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = PROVIDERS.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
        <input
          type="text"
          placeholder="Search by name, specialty, or service type..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-10 py-3 bg-white rounded-xl text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-colors"
          style={{ border: '1px solid rgba(0,0,0,0.1)' }}
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => {
          const color = CATEGORY_COLORS[cat.key] ?? '#E8722A';
          const active = activeCategory === cat.key;
          return (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all"
              style={
                active
                  ? {
                      background: cat.key === 'all' ? '#E8722A' : color,
                      color: '#fff',
                    }
                  : {
                      background: '#fff',
                      color: '#6b7280',
                      border: '1px solid rgba(0,0,0,0.1)',
                    }
              }
            >
              {cat.icon}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Count */}
      <p className="text-sm text-stone-400 mb-6">
        {filtered.length} {filtered.length === 1 ? 'provider' : 'providers'} found
        {activeCategory !== 'all' && ` in ${CATEGORIES.find((c) => c.key === activeCategory)?.label}`}
      </p>

      {/* Grid */}
      <div className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{ background: 'rgba(232,114,42,0.08)' }}
          >
            <Wrench className="w-8 h-8" style={{ color: '#E8722A' }} />
          </div>
          <h3 className="text-lg font-bold text-stone-700 mb-2">No providers found</h3>
          <p className="text-stone-400 max-w-sm mx-auto">
            Try a different search or category. We&apos;re always adding new vetted providers.
          </p>
        </div>
      )}

      {/* CTA Strip */}
      <div
        className="relative mt-14 rounded-2xl overflow-hidden"
        style={{ background: '#0f0e08' }}
      >
        <div className="absolute inset-0 speed-lines opacity-20" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(to right, transparent, #E8722A 40%, transparent)' }}
        />
        <div className="relative px-8 py-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-px" style={{ background: '#E8722A' }} />
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#E8722A' }}>
              Join the Directory
            </span>
            <div className="w-6 h-px" style={{ background: '#E8722A' }} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Are you a specialist? Get listed.</h3>
          <p className="max-w-xl mx-auto mb-6 leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
            If you do exceptional work with collector cars — detailing, mechanical, transport,
            inspection, restoration — apply to join the vetted directory and get in front of
            serious collectors who care about who touches their car.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/services/apply"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-opacity hover:opacity-90"
              style={{ background: '#E8722A' }}
            >
              Apply to Be Listed
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-opacity hover:opacity-80"
              style={{ color: 'rgba(255,255,255,0.6)', border: '1.5px solid rgba(255,255,255,0.15)' }}
            >
              Recommend a Provider
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
