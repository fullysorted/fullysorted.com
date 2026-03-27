import { pgTable, serial, text, integer, boolean, timestamp, decimal, jsonb, varchar, index } from 'drizzle-orm/pg-core';

// ─── Users ───────────────────────────────────────────────
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  avatarUrl: text('avatar_url'),
  role: varchar('role', { length: 50 }).default('user').notNull(), // user, admin, chris
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ─── Listings ────────────────────────────────────────────
export const listings = pgTable('listings', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 500 }).notNull().unique(),

  // Vehicle info
  year: integer('year').notNull(),
  make: varchar('make', { length: 100 }).notNull(),
  model: varchar('model', { length: 200 }).notNull(),
  trim: varchar('trim', { length: 200 }),
  vin: varchar('vin', { length: 17 }),

  // Details
  mileage: integer('mileage'),
  transmission: varchar('transmission', { length: 50 }),
  engine: text('engine'),
  drivetrain: varchar('drivetrain', { length: 50 }),
  exteriorColor: varchar('exterior_color', { length: 100 }),
  interiorColor: varchar('interior_color', { length: 100 }),
  bodyStyle: varchar('body_style', { length: 100 }),

  // Category
  category: varchar('category', { length: 50 }),

  // Location
  city: varchar('city', { length: 100 }),
  state: varchar('state', { length: 50 }),
  zipCode: varchar('zip_code', { length: 10 }),

  // Pricing
  price: integer('price').notNull(),
  sortedPrice: boolean('sorted_price').default(false),

  // Description
  description: text('description'),
  aiDescription: text('ai_description'),
  highlights: jsonb('highlights').$type<string[]>(),
  chrisTake: text('chris_take'),

  // Market data
  compAvg: integer('comp_avg'),
  compCount: integer('comp_count'),

  // Media
  photos: jsonb('photos').$type<string[]>().default([]),
  heroPhoto: text('hero_photo'),

  // Status
  status: varchar('status', { length: 50 }).default('draft').notNull(), // draft, pending, active, sold, denied, expired
  featured: boolean('featured').default(false),

  // Sales tracking
  soldPrice: integer('sold_price'),
  adminNotes: text('admin_notes'), // internal notes from Chris
  deniedReason: text('denied_reason'),

  // Engagement
  views: integer('views').default(0).notNull(),

  // Ownership
  sellerId: integer('seller_id').references(() => users.id),

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  publishedAt: timestamp('published_at'),
  soldAt: timestamp('sold_at'),
});

// ─── Auction Results (scraped from BaT, RM Sotheby's, etc.) ──
export const auctionResults = pgTable('auction_results', {
  id: serial('id').primaryKey(),
  source: varchar('source', { length: 50 }).notNull(), // bat, rmsothebys, bonhams, gooding, classiccars, hemmings
  sourceUrl: text('source_url'),
  lotTitle: text('lot_title').notNull(),

  // Vehicle
  year: integer('year').notNull(),
  make: varchar('make', { length: 100 }).notNull(),
  model: varchar('model', { length: 200 }).notNull(),
  trim: varchar('trim', { length: 200 }),
  mileage: integer('mileage'),
  transmission: varchar('transmission', { length: 50 }),
  engine: text('engine'),
  exteriorColor: varchar('exterior_color', { length: 100 }),

  // Sale
  salePrice: integer('sale_price'), // null if no-sale/reserve not met
  estimateHigh: integer('estimate_high'),
  estimateLow: integer('estimate_low'),
  sold: boolean('sold').default(true),
  auctionDate: timestamp('auction_date'),
  auctionHouse: varchar('auction_house', { length: 100 }), // e.g. "RM Sotheby's Amelia Island 2024"

  // Meta
  thumbnailUrl: text('thumbnail_url'),
  segment: varchar('segment', { length: 100 }), // for grouping: "air_cooled_911", "e30_m3", etc.
  category: varchar('category', { length: 50 }), // Muscle, European, JDM, etc.
  notes: text('notes'), // e.g. "numbers matching", "low reserve"

  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => [
  index('auction_results_year_make_model_idx').on(t.year, t.make, t.model),
  index('auction_results_segment_idx').on(t.segment),
  index('auction_results_auction_date_idx').on(t.auctionDate),
]);

// ─── Saved Listings (Favorites) ─────────────────────────
export const savedListings = pgTable('saved_listings', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  listingId: integer('listing_id').references(() => listings.id).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ─── Comments ────────────────────────────────────────────
export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  listingId: integer('listing_id').references(() => listings.id).notNull(),
  userId: integer('user_id').references(() => users.id).notNull(),
  content: text('content').notNull(),
  parentId: integer('parent_id'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ─── Market Data (computed segment summaries) ──────────
export const marketData = pgTable('market_data', {
  id: serial('id').primaryKey(),
  segment: varchar('segment', { length: 200 }).notNull(),
  segmentKey: varchar('segment_key', { length: 100 }), // machine-readable key
  avgPrice: integer('avg_price'),
  medianPrice: integer('median_price'),
  highPrice: integer('high_price'),
  lowPrice: integer('low_price'),
  saleCount: integer('sale_count'),
  trendPercent: decimal('trend_percent', { precision: 5, scale: 2 }),
  trendDirection: varchar('trend_direction', { length: 10 }), // up, down, flat
  commentary: text('commentary'),
  dataSource: varchar('data_source', { length: 100 }),
  recordedAt: timestamp('recorded_at').defaultNow().notNull(),
});

// ─── Messages (contact form submissions) ─────────────────
export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  listingId: integer('listing_id').references(() => listings.id),
  listingSlug: varchar('listing_slug', { length: 500 }),
  listingTitle: text('listing_title'), // denormalized for easy display
  senderName: varchar('sender_name', { length: 255 }).notNull(),
  senderEmail: varchar('sender_email', { length: 255 }).notNull(),
  senderPhone: varchar('sender_phone', { length: 50 }),
  messageText: text('message_text').notNull(),
  type: varchar('type', { length: 50 }).default('inquiry'), // inquiry, offer, general
  offerAmount: integer('offer_amount'),
  status: varchar('status', { length: 50 }).default('new'), // new, read, replied, archived
  adminNotes: text('admin_notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
}, (t) => [
  index('messages_listing_id_idx').on(t.listingId),
  index('messages_status_idx').on(t.status),
  index('messages_created_at_idx').on(t.createdAt),
]);

// ─── Deal Alerts (active listings from BaT RSS etc.) ────
export const dealAlerts = pgTable('deal_alerts', {
  id: serial('id').primaryKey(),
  sourceUrl: text('source_url').notNull().unique(),
  sourceSite: varchar('source_site', { length: 100 }),
  title: text('title').notNull(),
  year: integer('year'),
  make: varchar('make', { length: 100 }),
  model: varchar('model', { length: 200 }),
  price: integer('price'),
  estimatedValue: integer('estimated_value'),
  dealScore: integer('deal_score'), // 1-100
  imageUrl: text('image_url'),
  location: varchar('location', { length: 200 }),
  status: varchar('status', { length: 50 }).default('new'), // new, reviewed, hot, expired
  expiresAt: timestamp('expires_at'), // auction end date
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ─── Provider Applications ──────────────────────────────
export const providerApplications = pgTable('provider_applications', {
  id: serial('id').primaryKey(),
  businessName: varchar('business_name', { length: 200 }).notNull(),
  ownerName: varchar('owner_name', { length: 200 }).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  location: varchar('location', { length: 200 }).notNull(),
  email: varchar('email', { length: 300 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  website: text('website'),
  instagram: varchar('instagram', { length: 200 }),
  yearsInBusiness: varchar('years_in_business', { length: 50 }),
  specialties: text('specialties').notNull(),
  idealClient: text('ideal_client'),
  whyList: text('why_list'),
  referredBy: varchar('referred_by', { length: 300 }),
  status: varchar('status', { length: 50 }).default('pending'), // pending, approved, rejected
  adminNotes: text('admin_notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type ProviderApplication = typeof providerApplications.$inferSelect;

// Type exports
export type Message = typeof messages.$inferSelect;
export type NewMessage = typeof messages.$inferInsert;

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Listing = typeof listings.$inferSelect;
export type NewListing = typeof listings.$inferInsert;
export type AuctionResult = typeof auctionResults.$inferSelect;
export type NewAuctionResult = typeof auctionResults.$inferInsert;
export type Comment = typeof comments.$inferSelect;
export type MarketData = typeof marketData.$inferSelect;
export type DealAlert = typeof dealAlerts.$inferSelect;
