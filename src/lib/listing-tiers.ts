// Client-safe listing tier configuration
// This file can be imported by both server and client components
import { AI_ASSIST_ENABLED } from './features';

export type ListingTier = 'standard' | 'featured' | 'premium';

export interface TierConfig {
  name: string;
  price: number;        // in cents
  displayPrice: string;
  photos: number;       // max photos (9999 = unlimited)
  videos: number;       // max videos (9999 = unlimited)
  aiDescription: boolean;
  daysListed: number;   // 9999 = until sold
  socialShare: boolean;
  priorityPlacement: boolean;
  escrow: boolean;
  features: string[];
  badge?: string;
  highlight?: boolean;
}

export const LISTING_TIERS: Record<ListingTier, TierConfig> = {
  standard: {
    name: 'Standard',
    price: 999,
    displayPrice: '$9.99',
    photos: 20,
    videos: 0,
    aiDescription: false,
    daysListed: 30,
    socialShare: false,
    priorityPlacement: false,
    escrow: false,
    features: [
      '20 photos',
      'Basic listing page',
      'Active for 30 days',
      'Standard browse placement',
    ],
  },
  featured: {
    name: 'Featured',
    price: 2999,
    displayPrice: '$29.99',
    photos: 40,
    videos: 1,
    aiDescription: AI_ASSIST_ENABLED,
    daysListed: 60,
    socialShare: true,
    priorityPlacement: true,
    escrow: false,
    features: [
      '40 photos + 1 video',
      ...(AI_ASSIST_ENABLED ? ['AI-generated description'] : []),
      'Social media promotion',
      'Priority browse placement',
      'Active for 60 days',
    ],
    badge: 'Most Popular',
    highlight: true,
  },
  premium: {
    name: 'Premium',
    price: 4999,
    displayPrice: '$49.99',
    photos: 9999,
    videos: 9999,
    aiDescription: AI_ASSIST_ENABLED,
    daysListed: 9999,
    socialShare: true,
    priorityPlacement: true,
    // We do NOT hold funds on car sales and have no escrow rail for them.
    // What this tier actually buys is help arranging escrow with a licensed
    // third party — which is a referral, and is named as one.
    escrow: true,
    features: [
      'Unlimited photos & video',
      ...(AI_ASSIST_ENABLED ? ['AI-generated description'] : []),
      'Social media promotion',
      'Top browse placement',
      'Listed until sold',
      'Introduction to a licensed escrow company',
    ],
  },
};

// Early adopter free thresholds.
//
// FREE_LISTINGS_THRESHOLD is about CARS: the first N listings on the
// marketplace are free. It is quoted in /terms section 9, and the listings
// API and listing-store both gate free listings on it. Changing it changes
// what the marketplace charges.
//
// FOUNDING_PROVIDER_THRESHOLD is about SHOPS, and is deliberately a separate
// number. It is the founding-member cap quoted in /terms section 6, /pricing,
// /faq and the apply form: the first N providers accepted into the directory
// keep a free listing for life. It used to share FREE_LISTINGS_THRESHOLD,
// which meant raising the founding cap silently gave away free car listings
// too. Do not merge these two again.
export const FREE_LISTINGS_THRESHOLD = 100;
export const FREE_USERS_THRESHOLD = 100;
export const FOUNDING_PROVIDER_THRESHOLD = 500;

// Helpers
export function getTierConfig(tier: ListingTier): TierConfig {
  return LISTING_TIERS[tier];
}

export function getMaxPhotos(tier: ListingTier): number {
  const limit = LISTING_TIERS[tier].photos;
  return limit >= 9999 ? 50 : limit; // cap "unlimited" at 50 for the uploader
}
