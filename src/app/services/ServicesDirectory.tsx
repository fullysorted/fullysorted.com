'use client';

import { useState } from 'react';
import { Search, MapPin, Star, Phone, Globe, ChevronDown, Shield, Camera, Wrench, Truck, ClipboardCheck, Paintbrush, Hammer, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    description: 'Full paint correction, ceramic coating, and concours-level prep. They treat your car like it\'s headed to Pebble Beach.',
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

// ─── Provider Card ────────────────────────────────────
function ProviderCard({ provider }: { provider: typeof PROVIDERS[number] }) {
  const [expanded, setExpanded] = useState(false);

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
              <h3 className="text-lg font-bold text-stone-900">{provider.name}</h3>
              {provider.verified && (
                <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-0.5 rounded-full">
                  <Shield className="w-3 h-3" /> Verified
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
                {provider.rating} ({provider.reviewCount})
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

        {/* Expand for Chris's Take */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800 transition-colors"
        >
          Chris&apos;s Take
          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-3 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <p className="text-stone-700 italic text-sm">&ldquo;{provider.chrisNote}&rdquo;</p>
                <p className="text-amber-700 text-xs font-medium mt-2">— Chris Peterson, Fully Sorted</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Row */}
        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-stone-100">
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
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Directory Component ──────────────────────────
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
        {filtered.length} {filtered.length === 1 ? 'provider' : 'providers'} found
        {activeCategory !== 'all' && ` in ${CATEGORIES.find((c) => c.key === activeCategory)?.label}`}
      </p>

      {/* Listings Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <Wrench className="w-12 h-12 text-stone-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-stone-700 mb-2">No providers found</h3>
          <p className="text-stone-500">Try a different search or category. We&apos;re always adding new vetted providers.</p>
        </div>
      )}

      {/* CTA to Submit */}
      <div className="mt-12 p-8 bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl text-center">
        <h3 className="text-2xl font-bold text-white mb-3">Know a great specialist?</h3>
        <p className="text-stone-300 mb-6 max-w-xl mx-auto">
          If you work with someone amazing — a mechanic, a detailer, a transporter — we want to
          know about them. Help us build the best directory in the collector car world.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Recommend a Provider
        </a>
      </div>
    </div>
  );
}
