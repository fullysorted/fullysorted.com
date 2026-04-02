import { pgTable, serial, text, integer, boolean, timestamp, decimal, jsonb, varchar } from 'drizzle-orm/pg-core';

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
  transmission: varchar('transmission', { length: 50 }), // Manual, Automatic
  engine: text('engine'),
  drivetrain: varchar('drivetrain', { length: 50 }), // RWD, FWD, AWD, 4WD
  exteriorColor: varchar('exterior_color', { length: 100 }),
  interiorColor: varchar('interior_color', { length: 100 }),
  bodyStyle: varchar('body_style', { length: 100 }), // Coupe, Sedan, Convertible, etc.

  // Category
  category: varchar('category', { length: 50 }), // Muscle, European, JDM, Vintage, Modern Classic, Barn Find

  // Location
  city: varchar('city', { length: 100 }),
  state: varchar('state', { length: 50 }),
  zipCode: varchar('zip_code', { length: 10 }),

  // Pricing
  price: integer('price').notNull(),
  sortedPrice: boolean('sorted_price').default(false), // Chris-verified fair price

  // Description
  description: text('description'), // User's raw description
  aiDescription: text('ai_description'), // AI-generated description in Chris's voice
  highlights: jsonb('highlights').$type<string[]>(), // Key selling points
  chrisTake: text('chris_take'), // Chris's personal take

  // Market data
  compAvg: integer('comp_avg'), // Comparable average price
  compCount: integer('comp_count'), // Number of comps found

  // Media
  photos: jsonb('photos').$type<string[]>().default([]), // Array of photo URLs
  heroPhoto: text('hero_photo'), // Primary photo URL

  // Listing tier
  tier: varchar('tier', { length: 20 }).default('standard').notNull(), // standard, featured, premium
  isFreeEarlyAdopter: boolean('is_free_early_adopter').default(false),

  // Media extras
  videoUrl: text('video_url'),

  // Status
  status: varchar('status', { length: 50 }).default('draft').notNull(), // draft, pending, active, sold, expired
  featured: boolean('featured').default(false),

  // Ownership
  sellerId: integer('seller_id').references(() => users.id),

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  publishedAt: timestamp('published_at'),
  soldAt: timestamp('sold_at'),
});

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
  parentId: integer('parent_id'), // For threaded replies
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ─── Market Data (for Value Guide & Monday Movers) ──────
export const marketData = pgTable('market_data', {
  id: serial('id').primaryKey(),
  segment: varchar('segment', { length: 200 }).notNull(), // e.g., "Air-Cooled 911s"
  avgPrice: integer('avg_price'),
  trendPercent: decimal('trend_percent', { precision: 5, scale: 2 }),
  trendDirection: varchar('trend_direction', { length: 10 }), // up, down, flat
  commentary: text('commentary'), // Chris's market commentary
  dataSource: varchar('data_source', { length: 100 }), // BaT, Classic.com, etc.
  recordedAt: timestamp('recorded_at').defaultNow().notNull(),
});

// ─── Deal Alerts (Early Bird Scraper Results) ────────────
export const dealAlerts = pgTable('deal_alerts', {
  id: serial('id').primaryKey(),
  sourceUrl: text('source_url').notNull(),
  sourceSite: varchar('source_site', { length: 100 }), // craigslist, fbmarketplace, etc.
  title: text('title').notNull(),
  price: integer('price'),
  estimatedValue: integer('estimated_value'),
  dealScore: integer('deal_score'), // 1-100, how good the deal is
  imageUrl: text('image_url'),
  location: varchar('location', { length: 200 }),
  status: varchar('status', { length: 50 }).default('new'), // new, reviewed, sent, expired
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Type exports for use in components
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Listing = typeof listings.$inferSelect;
export type NewListing = typeof listings.$inferInsert;
export type Comment = typeof comments.$inferSelect;
export type MarketData = typeof marketData.$inferSelect;
export type DealAlert = typeof dealAlerts.$inferSelect;
