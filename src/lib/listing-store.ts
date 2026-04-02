// Server-side in-memory listing store
// Will be replaced with Drizzle/Neon DB queries once DATABASE_URL is connected
import { FREE_LISTINGS_THRESHOLD } from './listing-tiers';

export interface StoredListing {
  id: number;
  slug: string;
  tier: string;
  isFreeEarlyAdopter: boolean;
  year: number;
  make: string;
  model: string;
  trim?: string;
  price: number;
  mileage?: number | null;
  transmission?: string;
  engine?: string;
  drivetrain?: string;
  exteriorColor?: string;
  interiorColor?: string;
  bodyStyle?: string;
  category?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  description?: string;
  aiDescription?: string;
  highlights?: string[];
  chrisTake?: string;
  photos?: string[];
  heroPhoto?: string | null;
  status: string;
  featured: boolean;
  sortedPrice: boolean;
  createdAt: string;
}

// Module-level store (persists across requests in a single server process)
export const tempListings: StoredListing[] = [];
let _totalCreated = 0;

export function createListing(
  data: Omit<StoredListing, 'id' | 'isFreeEarlyAdopter'>
): StoredListing {
  _totalCreated++;
  const isFreeEarlyAdopter = _totalCreated <= FREE_LISTINGS_THRESHOLD;
  const listing: StoredListing = {
    ...data,
    id: _totalCreated,
    isFreeEarlyAdopter,
  };
  tempListings.push(listing);
  return listing;
}

export function getListingById(id: number): StoredListing | null {
  return tempListings.find((l) => l.id === id) ?? null;
}

export function getStats() {
  const spotsRemaining = Math.max(0, FREE_LISTINGS_THRESHOLD - _totalCreated);
  return {
    totalListings: _totalCreated,
    earlyAdopterSpotsRemaining: spotsRemaining,
    isEarlyAdopterActive: spotsRemaining > 0,
  };
}

function slugify(year: number, make: string, model: string): string {
  const base = `${year}-${make}-${model}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const suffix = Math.random().toString(36).substring(2, 8);
  return `${base}-${suffix}`;
}

export { slugify };
