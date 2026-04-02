// Client-safe listing tier configuration
// This file can be imported by both server and client components

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
    aiDescription: true,
    daysListed: 60,
    socialShare: true,
    priorityPlacement: true,
    escrow: false,
    features: [
      '40 photos + 1 video',
      'AI-generated description',
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
    aiDescription: true,
    daysListed: 9999,
    socialShare: true,
    priorityPlacement: true,
    escrow: true,
    features: [
      'Unlimited photos & video',
      'AI-generated description',
      'Social media promotion',
      'Top browse placement',
      'Listed until sold',
      'Escrow coordination',
    ],
  },
};

// Early adopter free thresholds
export const FREE_LISTINGS_THRESHOLD = 100;
export const FREE_USERS_THRESHOLD = 100;

// Helpers
export function getTierConfig(tier: ListingTier): TierConfig {
  return LISTING_TIERS[tier];
}

export function getMaxPhotos(tier: ListingTier): number {
  const limit = LISTING_TIERS[tier].photos;
  return limit >= 9999 ? 50 : limit; // cap "unlimited" at 50 for the uploader
}
