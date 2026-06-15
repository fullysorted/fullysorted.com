import { pgTable, serial, text, integer, boolean, timestamp, decimal, jsonb, varchar } from 'drizzle-orm/pg-core';

// âââ Users âââââââââââââââââââââââââââââââââââââââââââââââ
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }),
  avatarUrl: text('avatar_url'),
  role: varchar('role', { length: 50 }).default('user').notNull(), // user, admin, chris
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// âââ Listings ââââââââââââââââââââââââââââââââââââââââââââ
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

// âââ Saved Listings (Favorites) âââââââââââââââââââââââââ
export const savedListings = pgTable('saved_listings', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').references(() => users.id).notNull(),
  listingId: integer('listing_id').references(() => listings.id).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// âââ Comments ââââââââââââââââââââââââââââââââââââââââââââ
export const comments = pgTable('comments', {
  id: serial('id').primaryKey(),
  listingId: integer('listing_id').references(() => listings.id).notNull(),
  userId: integer('user_id').references(() => users.id).notNull(),
  content: text('content').notNull(),
  parentId: integer('parent_id'), // For threaded replies
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// âââ Market Data (for Value Guide & Monday Movers) ââââââ
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

// âââ Deal Alerts (Early Bird Scraper Results) ââââââââââââ
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

// âââ Provider Applications (Intake Queue) âââââââââââââââ
// Messages (Contact + Listing Inquiries)
// Buyer-to-seller inquiries and offers on listings, plus generic contact form submissions.
// Previously created via raw SQL in /api/messages — adding here so drizzle-kit keeps it in sync.
export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  listingId: integer('listing_id').references(() => listings.id),
  listingSlug: varchar('listing_slug', { length: 500 }),
  listingTitle: text('listing_title'),
  senderName: varchar('sender_name', { length: 255 }).notNull(),
  senderEmail: varchar('sender_email', { length: 255 }).notNull(),
  senderPhone: varchar('sender_phone', { length: 50 }),
  messageText: text('message_text').notNull(),
  type: varchar('type', { length: 50 }).default('inquiry').notNull(), // inquiry, offer, contact
  offerAmount: integer('offer_amount'),
  status: varchar('status', { length: 50 }).default('new').notNull(), // new, read, replied, archived
  adminNotes: text('admin_notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const providerApplications = pgTable('provider_applications', {
  id: serial('id').primaryKey(),
  businessName: varchar('business_name', { length: 255 }).notNull(),
  ownerName: varchar('owner_name', { length: 255 }).notNull(),
  category: varchar('category', { length: 100 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  website: text('website'),
  instagram: varchar('instagram', { length: 100 }),
  yearsInBusiness: varchar('years_in_business', { length: 50 }),
  specialties: text('specialties').notNull(),
  idealClient: text('ideal_client'),
  whyList: text('why_list'),
  referredBy: varchar('referred_by', { length: 255 }),
  providerType: varchar('provider_type', { length: 20 }).default('business').notNull(), // business | freelancer
  status: varchar('status', { length: 50 }).default('pending').notNull(), // pending, approved, rejected
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// âââ Service Providers (Published Profiles) âââââââââââââ
export const serviceProviders = pgTable('service_providers', {
  id: serial('id').primaryKey(),
  clerkUserId: varchar('clerk_user_id', { length: 255 }), // Linked Clerk account (nullable until claimed)

  // Business info
  businessName: varchar('business_name', { length: 255 }).notNull(),
  ownerName: varchar('owner_name', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 300 }).notNull().unique(),
  category: varchar('category', { length: 100 }).notNull(),
  location: varchar('location', { length: 255 }).notNull(),

  // Contact
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  website: text('website'),
  instagram: varchar('instagram', { length: 100 }),

  // Profile (provider-written)
  description: text('description').notNull(), // Provider writes their own description
  specialties: jsonb('specialties').$type<string[]>().default([]),
  yearsInBusiness: varchar('years_in_business', { length: 50 }),
  priceRange: varchar('price_range', { length: 10 }).default('$$'), // $, $$, $$$, $$$$

  // Trust signals
  verified: boolean('verified').default(false),
  foundingProvider: boolean('founding_provider').default(false),

  // Ratings
  rating: decimal('rating', { precision: 3, scale: 1 }).default('0'),
  reviewCount: integer('review_count').default(0),

  // Status
  status: varchar('status', { length: 50 }).default('pending').notNull(), // pending, active, paused, rejected

  // Source application (if created from an application)
  applicationId: integer('application_id').references(() => providerApplications.id),

  // Outreach pipeline (for staged providers we're contacting)
  // outreachStatus: 'staged' | 'sent' | 'opened' | 'claimed' | 'opted_out' | null
  outreachStatus: varchar('outreach_status', { length: 50 }),
  claimToken: varchar('claim_token', { length: 64 }).unique(),
  outreachSentAt: timestamp('outreach_sent_at'),
  outreachRespondedAt: timestamp('outreach_responded_at'),

  // ─── Provider type split (Phase 4: business vs freelancer) ──────
  providerType: varchar('provider_type', { length: 20 }).default('business').notNull(), // business | freelancer
  // Freelancer-specific
  headline: varchar('headline', { length: 200 }),       // e.g. "Mobile detailer — air-cooled specialist"
  hourlyRate: integer('hourly_rate'),                    // optional, USD
  skills: jsonb('skills').$type<string[]>().default([]),
  serviceArea: varchar('service_area', { length: 200 }),
  avatarUrl: text('avatar_url'),
  // Guided onboarding progress
  onboardingStep: integer('onboarding_step').default(0),
  onboardingComplete: boolean('onboarding_complete').default(false),
  // Payments — SCAFFOLDING ONLY. Disabled until legal/accounting sign-off
  // (1099/Stripe Connect). No money moves until payoutsEnabled is true AND a
  // real Connect account is wired. See RESEARCH-AND-REGISTRY-ROADMAP.md Phase 5.
  payoutsEnabled: boolean('payouts_enabled').default(false),
  stripeConnectId: varchar('stripe_connect_id', { length: 255 }),

  // Timestamps
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ─── Gigs (Fiverr-style fixed-scope service packages) ──────────────
export const gigs = pgTable('gigs', {
  id: serial('id').primaryKey(),
  providerId: integer('provider_id').references(() => serviceProviders.id).notNull(),
  slug: varchar('slug', { length: 300 }).notNull().unique(),
  title: varchar('title', { length: 200 }).notNull(),     // "I will do a concours-level pre-purchase inspection"
  category: varchar('category', { length: 100 }),
  description: text('description'),
  images: jsonb('images').$type<string[]>().default([]),
  faqs: jsonb('faqs').$type<{ q: string; a: string }[]>().default([]),
  requirements: text('requirements'),                     // what the buyer must provide
  status: varchar('status', { length: 20 }).default('draft').notNull(), // draft, active, paused
  ordersCount: integer('orders_count').default(0),
  rating: decimal('rating', { precision: 3, scale: 1 }).default('0'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Three-tier package pricing per gig (Basic / Standard / Premium).
export const gigPackages = pgTable('gig_packages', {
  id: serial('id').primaryKey(),
  gigId: integer('gig_id').references(() => gigs.id).notNull(),
  tier: varchar('tier', { length: 20 }).notNull(),        // basic, standard, premium
  title: varchar('title', { length: 200 }),
  description: text('description'),
  price: integer('price').notNull(),                      // USD
  deliveryDays: integer('delivery_days'),
  revisions: integer('revisions'),
  features: jsonb('features').$type<string[]>().default([]),
});

// Orders — earnings/ledger SCAFFOLDING. Payment capture & payout are NOT wired;
// rows are created in a 'pending' state for tracking only until legal sign-off.
export const gigOrders = pgTable('gig_orders', {
  id: serial('id').primaryKey(),
  gigId: integer('gig_id').references(() => gigs.id).notNull(),
  packageId: integer('package_id').references(() => gigPackages.id),
  providerId: integer('provider_id').references(() => serviceProviders.id).notNull(),
  buyerName: varchar('buyer_name', { length: 255 }),
  buyerEmail: varchar('buyer_email', { length: 255 }),
  amount: integer('amount'),                              // USD, gross
  platformFee: integer('platform_fee'),                  // computed, not charged yet
  status: varchar('status', { length: 30 }).default('inquiry').notNull(), // inquiry, accepted, in_progress, delivered, completed, cancelled
  requirementsText: text('requirements_text'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ─── Outreach Suppression List ───────────────────────────
// Businesses that have opted out — never re-seed these.
export const outreachSuppression = pgTable('outreach_suppression', {
  id: serial('id').primaryKey(),
  businessName: varchar('business_name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  domain: varchar('domain', { length: 255 }),
  reason: text('reason'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// ─── Vehicle Models (Research history database — Phase 1) ──────────
// One row per collectible model / generation / trim. Narrative is drafted by
// the AI generation agent from cross-checked public sources, then HUMAN-REVIEWED
// before publish. Nothing is shown publicly until status = 'published'.
export const vehicleModels = pgTable('vehicle_models', {
  id: serial('id').primaryKey(),
  slug: varchar('slug', { length: 300 }).notNull().unique(), // e.g. "porsche/911-964"
  make: varchar('make', { length: 100 }).notNull(),
  model: varchar('model', { length: 200 }).notNull(),
  generation: varchar('generation', { length: 100 }),      // "964"
  generationCode: varchar('generation_code', { length: 50 }),
  trim: varchar('trim', { length: 200 }),
  yearStart: integer('year_start'),
  yearEnd: integer('year_end'),

  // Structured facts
  bodyStyles: jsonb('body_styles').$type<string[]>().default([]),
  engines: jsonb('engines').$type<string[]>().default([]),
  productionTotal: integer('production_total'),
  productionNotes: text('production_notes'),
  notableTrims: jsonb('notable_trims').$type<{ name: string; note: string }[]>().default([]),
  specs: jsonb('specs').$type<Record<string, string>>().default({}),

  // Narrative sections (lightweight markdown, rendered to HTML)
  summary: text('summary'),
  history: text('history'),
  marketNotes: text('market_notes'),
  whatToLookFor: text('what_to_look_for'),
  commonProblems: text('common_problems'),
  valueTrajectory: text('value_trajectory'),

  heroPhoto: text('hero_photo'),

  // Governance / truth-seeking
  overallConfidence: varchar('overall_confidence', { length: 20 }).default('medium'), // high, medium, low
  status: varchar('status', { length: 20 }).default('draft').notNull(),    // draft → reviewed → published
  reviewedBy: varchar('reviewed_by', { length: 255 }),
  reviewerNotes: text('reviewer_notes'),
  aiModel: varchar('ai_model', { length: 100 }),     // provenance of the AI draft
  generatedAt: timestamp('generated_at'),
  reviewedAt: timestamp('reviewed_at'),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Citations — every non-obvious fact links back here.
export const modelSources = pgTable('model_sources', {
  id: serial('id').primaryKey(),
  modelId: integer('model_id').references(() => vehicleModels.id).notNull(),
  title: text('title').notNull(),
  url: text('url'),
  publisher: varchar('publisher', { length: 200 }),
  // registry, factory-record, reference-book, journalism, club-forum, manufacturer
  sourceType: varchar('source_type', { length: 50 }),
  reliability: varchar('reliability', { length: 20 }).default('medium'),  // high, medium, low
  accessedAt: timestamp('accessed_at').defaultNow(),
  notes: text('notes'),
});

// Per-claim review queue. Conflicts are stored as 'disputed' with both sides
// captured neutrally in conflictNote — never flattened into one story.
export const modelClaims = pgTable('model_claims', {
  id: serial('id').primaryKey(),
  modelId: integer('model_id').references(() => vehicleModels.id).notNull(),
  section: varchar('section', { length: 50 }),   // summary, history, production, specs, problems, market
  claimText: text('claim_text').notNull(),
  confidence: varchar('confidence', { length: 20 }).default('medium'),  // high, medium, low
  status: varchar('status', { length: 20 }).default('unverified'),      // verified, unverified, disputed
  sourceIds: jsonb('source_ids').$type<number[]>().default([]),
  conflictNote: text('conflict_note'),  // when disputed: both accounts, neutral
  reviewerNote: text('reviewer_note'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const modelMedia = pgTable('model_media', {
  id: serial('id').primaryKey(),
  modelId: integer('model_id').references(() => vehicleModels.id).notNull(),
  url: text('url').notNull(),
  caption: text('caption'),
  credit: varchar('credit', { length: 255 }),
  sourceUrl: text('source_url'),
  license: varchar('license', { length: 100 }),
  sortOrder: integer('sort_order').default(0),
});

// What the generation agent should draft next.
export const modelQueue = pgTable('model_queue', {
  id: serial('id').primaryKey(),
  make: varchar('make', { length: 100 }).notNull(),
  model: varchar('model', { length: 200 }).notNull(),
  generation: varchar('generation', { length: 100 }),
  priority: integer('priority').default(0),
  status: varchar('status', { length: 20 }).default('queued').notNull(), // queued, generating, drafted, failed
  notes: text('notes'),
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
export type ServiceProvider = typeof serviceProviders.$inferSelect;
export type NewServiceProvider = typeof serviceProviders.$inferInsert;
export type ProviderApplication = typeof providerApplications.$inferSelect;
export type Message = typeof messages.$inferSelect;
export type NewMessage = typeof messages.$inferInsert;
export type Gig = typeof gigs.$inferSelect;
export type NewGig = typeof gigs.$inferInsert;
export type GigPackage = typeof gigPackages.$inferSelect;
export type GigOrder = typeof gigOrders.$inferSelect;
