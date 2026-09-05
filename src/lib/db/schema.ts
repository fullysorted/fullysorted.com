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
  // Who is selling. 'private' (default) or 'dealer'. Dealer listings are
  // badged and carry the disclosures in lib/dealer.ts. Columns are added at
  // boot in src/instrumentation.ts; a bare .select() emits every column here,
  // so schema and DB must move together or every listing page breaks.
  sellerType: varchar('seller_type', { length: 20 }).default('private').notNull(),
  dealerName: varchar('dealer_name', { length: 200 }),
  dealerLicense: varchar('dealer_license', { length: 100 }),
  /** The dealer's own fee disclosure, e.g. "$85 doc fee, tax and registration extra". */
  dealerFeesNote: text('dealer_fees_note'),

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

// ─── Provider Applications (Intake Queue) ───────────────
// Messages (Contact + Listing Inquiries)
// Buyer-to-seller inquiries and offers on listings, plus generic contact form submissions.
// Previously created via raw SQL in /api/messages — adding here so drizzle-kit keeps it in sync.
export const messages = pgTable('messages', {
  id: serial('id').primaryKey(),
  listingId: integer('listing_id').references(() => listings.id),
  listingSlug: varchar('listing_slug', { length: 500 }),
  listingTitle: text('listing_title'),
  // Set for directory enquiries, where the subject is a shop rather than a car.
  // The slug was already encoded in listingSlug as "provider:<slug>", but as a
  // string with no join — so a provider could not be shown their own leads, and
  // response time could not be measured. This column is what makes both
  // queryable.
  providerId: integer('provider_id'),
  senderName: varchar('sender_name', { length: 255 }).notNull(),
  senderEmail: varchar('sender_email', { length: 255 }).notNull(),
  senderPhone: varchar('sender_phone', { length: 50 }),
  messageText: text('message_text').notNull(),
  type: varchar('type', { length: 50 }).default('inquiry').notNull(), // inquiry, offer, contact
  offerAmount: integer('offer_amount'),
  status: varchar('status', { length: 50 }).default('new').notNull(), // new, read, replied, archived
  adminNotes: text('admin_notes'),

  // ─── The car brief (optional) ─────────────────────────────────────────
  // Structured answers from the "about the car" panel on the enquiry form:
  // year/make/model, chassis number, condition, timeline, budget band. Every
  // field is optional and the form defaults to a plain message box, so this is
  // null for plenty of good enquiries. A readable copy is always appended to
  // message_text as well, so nothing that predates this column loses detail.
  brief: jsonb('brief').$type<Record<string, string>>(),

  // ─── Lead outcome ─────────────────────────────────────────────────────
  // What happened to the lead, reported by the shop from its own email — no
  // login required, which matters because most shops are not linked yet.
  // repliedAt is self-reported, not observed: we do not read anyone's mail and
  // there is no tracking pixel. junk is the shop saying this was not a real
  // enquiry, which is the number that tells us whether the inbox is worth
  // paying for. Nothing here is shown publicly.
  actionToken: varchar('action_token', { length: 64 }),
  repliedAt: timestamp('replied_at'),
  outcome: varchar('outcome', { length: 30 }), // replied, junk
  junk: boolean('junk').default(false),
  junkReason: varchar('junk_reason', { length: 120 }),

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

// ─── Service Providers (Published Profiles) ─────────────
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

  // ─── Account linking ───────────────────────────────────────────
  // clerkUserId above was, for a long time, only ever written at INSERT — there
  // was no UPDATE path anywhere in the codebase. That meant a shop the team
  // seeded could never get an account: they'd sign up, be told "you don't have
  // a provider profile yet" while their listing sat live in the directory, and
  // the only button on offer created a duplicate.
  //
  // These four columns are the fix. A single-use, expiring token is emailed to
  // the address ALREADY on the row, and redeeming it while signed in sets
  // clerkUserId on that existing row. See lib/account-link.ts for the rules.
  accountLinkToken: varchar('account_link_token', { length: 64 }).unique(),
  accountLinkSentAt: timestamp('account_link_sent_at'),
  accountLinkExpiresAt: timestamp('account_link_expires_at'),
  accountLinkedAt: timestamp('account_linked_at'),
  outreachRespondedAt: timestamp('outreach_responded_at'),

  // ─── DEPRECATED 2026-08-31: provider_type ──────────────────────
  // Was the first question on the application form ("business or
  // freelancer?") and the axis the directory was split on. It asked about a
  // provider's legal form, which is the one thing an owner choosing a
  // specialist does not care about, and on the live directory it was wrong on
  // every row: all three providers were 'business' (everyone signing up IS a
  // business), including a one-man mobile appraiser filed under "premises you
  // can visit", while the freelancer band sat empty.
  //
  // Replaced by work_settings + team_size below. The column STAYS — dropping a
  // NOT NULL column that Drizzle names in every select is how you 404 every
  // provider profile ([[fully_sorted_orm_column_outage]]) — but nothing reads
  // it to make a decision and nothing writes anything but the default. Do not
  // reintroduce it as a filter, a band, or a badge.
  providerType: varchar('provider_type', { length: 20 }).default('business').notNull(),

  // ─── Where the work happens (2026-08-31) ───────────────────────
  // Multi-select: ['workshop'] | ['mobile'] | ['workshop','mobile'] | …
  // See lib/work-settings.ts, which owns the keys and the copy. Empty means
  // "hasn't told us" and renders nothing — never a guess.
  workSettings: jsonb('work_settings').$type<string[]>().default([]),
  /** 'solo' | 'small' | 'team'. A trust signal on the profile, never a filter. */
  teamSize: varchar('team_size', { length: 20 }),

  // Optional profile extras (were freelancer-only, now open to everyone —
  // a two-person restoration shop has a headline as surely as a solo detailer).
  headline: varchar('headline', { length: 200 }),       // e.g. "Mobile detailer — air-cooled specialist"
  hourlyRate: integer('hourly_rate'),                    // optional, USD
  skills: jsonb('skills').$type<string[]>().default([]),
  serviceArea: varchar('service_area', { length: 200 }),
  avatarUrl: text('avatar_url'),
  // Guided onboarding progress
  onboardingStep: integer('onboarding_step').default(0),
  onboardingComplete: boolean('onboarding_complete').default(false),
  // Payments — these two columns are what makes a provider payable, and they
  // are set by the PROVIDER, not by us: completing Stripe Connect onboarding
  // flips both. They are therefore NOT a kill switch, which is how they read
  // for a long time. The actual switch is GIG_PAYMENTS_ENABLED in
  // lib/features.ts; it gates checkout and Connect onboarding, and
  // deliberately does not gate release, refund or dispute.
  payoutsEnabled: boolean('payouts_enabled').default(false),
  stripeConnectId: varchar('stripe_connect_id', { length: 255 }),

  // ─── Work preferences ──────────────────────────────────────────────────
  // What this shop actually wants to be sent. The fastest way to kill a
  // directory is to forward everything to everyone: the shop stops opening the
  // emails, and by the time it matters nobody is answering. These are the
  // shop's own answers to "what should we send you".
  //
  // acceptingWork defaults TRUE so every existing row keeps behaving exactly as
  // it does today. It is a display and routing hint, never a gate: an enquiry
  // to a shop that has paused is still delivered — the owner chose that shop,
  // and a lead is never silently dropped. See lib/leads.ts.
  acceptingWork: boolean('accepting_work').default(true).notNull(),
  /** Marques they actually want — free text, e.g. ["Porsche", "Alfa Romeo"]. */
  marques: jsonb('marques').$type<string[]>().default([]),
  /** Service category keys beyond their headline one (lib/service-categories). */
  serviceTypes: jsonb('service_types').$type<string[]>().default([]),
  /** Smallest job worth their time, USD. Shown as "from $X" guidance, not a filter. */
  minJobValue: integer('min_job_value'),
  /** How far they will travel or collect from, miles. */
  serviceRadiusMiles: integer('service_radius_miles'),

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

// Orders. Two rails share this table:
//   'inquiry'          — an unpaid lead. Always available.
//   the paid lifecycle — pending_payment → paid → delivered → completed, with
//                        cancelled / refunded / disputed branches. Real Stripe
//                        capture, escrow and transfers; gated at the entrance
//                        by GIG_PAYMENTS_ENABLED (lib/features.ts).
// Note 'accepted' and 'in_progress' below have never been written by any code.
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

  // ─── Paid-order rail (Stripe escrow: hold on checkout, release on accept) ──
  amountCents: integer('amount_cents'),                  // gross the buyer paid
  platformFeeCents: integer('platform_fee_cents'),       // our take, computed at checkout
  providerAmountCents: integer('provider_amount_cents'), // net transferred to provider
  currency: varchar('currency', { length: 10 }).default('usd'),
  stripeSessionId: varchar('stripe_session_id', { length: 255 }),
  stripePaymentIntentId: varchar('stripe_payment_intent_id', { length: 255 }),
  stripeChargeId: varchar('stripe_charge_id', { length: 255 }),
  stripeTransferId: varchar('stripe_transfer_id', { length: 255 }),
  stripeRefundId: varchar('stripe_refund_id', { length: 255 }),
  buyerAccessToken: varchar('buyer_access_token', { length: 64 }), // buyer views/accepts without an account
  buyerClerkUserId: varchar('buyer_clerk_user_id', { length: 255 }), // links the order to a signed-in buyer, if any
  paidAt: timestamp('paid_at'),
  deliveredAt: timestamp('delivered_at'),
  completedAt: timestamp('completed_at'),
  cancelledAt: timestamp('cancelled_at'),
  refundedAt: timestamp('refunded_at'),
  disputeReason: text('dispute_reason'),
  disputedAt: timestamp('disputed_at'),

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
  // Attribution for a Commons/CC hero ("Photo: Name, CC BY-SA 4.0"). Null when the photo is ours.
  heroPhotoCredit: text('hero_photo_credit'),

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

// ─── Provider Reviews & Testimonials ─────────────────────
// ONE table, two kinds of row, distinguished by `source`:
//
//   'verified'    — written by a client who received a one-time tokenized link
//                   from us. This is the only kind that feeds the star average
//                   and the only kind that may appear in aggregateRating JSON-LD.
//   'testimonial' — praise the shop supplied itself, with attribution. Rendered
//                   in a visually distinct block, labelled as unverified, and
//                   EXCLUDED from every number on the page.
//
// Two rules the code must keep, not just the copy:
//   1. A provider can never delete or hide a published review. They get a
//      public right of reply (`providerReply`) and nothing else. Moderation is
//      for abuse, spam and defamation — never for sentiment. See lib/reviews.ts.
//   2. Star averages and aggregateRating stay hidden below MIN_REVIEWS_FOR_AVG.
//      Same minimum-n discipline the Value Guide uses: say what you know.
export const providerReviews = pgTable('provider_reviews', {
  id: serial('id').primaryKey(),
  providerId: integer('provider_id').references(() => serviceProviders.id).notNull(),

  source: varchar('source', { length: 20 }).default('verified').notNull(), // verified | testimonial

  // Verification chain — the invite rides an existing inquiry row when there is
  // one, so "this person actually contacted this shop" is checkable after the fact.
  sourceMessageId: integer('source_message_id'),
  reviewToken: varchar('review_token', { length: 64 }).unique(), // one-time, cleared on use
  invitedAt: timestamp('invited_at'),
  reminderSentAt: timestamp('reminder_sent_at'), // exactly one nudge, ever
  expiredAt: timestamp('expired_at'),
  tokenUsedAt: timestamp('token_used_at'),

  // Author — email is stored for audit/dispute and is NEVER rendered publicly.
  authorName: varchar('author_name', { length: 255 }).notNull(),
  authorEmail: varchar('author_email', { length: 255 }),
  vehicle: varchar('vehicle', { length: 200 }),   // "1973 911 T"
  workType: varchar('work_type', { length: 120 }), // "Pre-purchase inspection"
  workDate: varchar('work_date', { length: 40 }),

  rating: integer('rating'),   // 1–5. Null on an unrated testimonial.
  body: text('body').notNull(),

  status: varchar('status', { length: 20 }).default('pending').notNull(), // pending | published | rejected
  moderationNote: text('moderation_note'),

  // Right of reply. Public, attributed to the business.
  providerReply: text('provider_reply'),
  providerRepliedAt: timestamp('provider_replied_at'),

  // Provenance for testimonials: who typed it in, and the attestation that the
  // shop has the client's permission to publish it. FTC 16 CFR 465 territory.
  submittedBy: varchar('submitted_by', { length: 100 }),
  consent: boolean('consent').default(false),

  createdAt: timestamp('created_at').defaultNow().notNull(),
  publishedAt: timestamp('published_at'),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// ─── Chassis Register ───────────────────────────────────────────────────────
// One row per physical car, keyed by model slug + chassis number. The register
// never asserts a car's history in prose: every fact about a chassis is an
// EVENT row with a source URL, and the page renders the events it has and says
// plainly where the record is silent. Nothing here is generated; an LLM only
// ever extracts a fact from a cited page into a row. Owner submissions land in
// registry_submissions and reach these tables only after admin approval.
// Owner names are never stored on a chassis or event row (privacy), only public
// facts already published by the cited source.
export const registryChassis = pgTable('registry_chassis', {
  id: serial('id').primaryKey(),
  modelId: integer('model_id').references(() => vehicleModels.id, { onDelete: 'set null' }),
  modelSlug: varchar('model_slug', { length: 300 }).notNull(), // "ferrari/f40"
  chassis: varchar('chassis', { length: 64 }).notNull(),       // canonical serial, e.g. "84028"
  vin: varchar('vin', { length: 32 }),                          // full VIN where the source published it
  buildYear: integer('build_year'),                             // model year as titled by the source
  variant: varchar('variant', { length: 80 }),                  // "F40", "F40 LM", "F40 GTE", "F40 Competizione"
  marketSpec: varchar('market_spec', { length: 40 }),           // "US", "Europe", "Japan" ... only when sourced
  exteriorColor: varchar('exterior_color', { length: 80 }),
  interiorColor: varchar('interior_color', { length: 80 }),
  engineNumber: varchar('engine_number', { length: 64 }),
  notes: text('notes'),                                         // factual, cited-in-events only
  confidence: varchar('confidence', { length: 20 }).default('medium'),
  status: varchar('status', { length: 20 }).default('published').notNull(), // published | draft | hidden
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export const registryEvents = pgTable('registry_events', {
  id: serial('id').primaryKey(),
  chassisId: integer('chassis_id').references(() => registryChassis.id, { onDelete: 'cascade' }).notNull(),
  eventType: varchar('event_type', { length: 30 }).notNull(),   // auction | private_sale | listing | show | registry | factory | service | article
  eventDate: varchar('event_date', { length: 10 }),             // ISO date or partial: "2019-08-16", "2019-08", "2019"
  title: varchar('title', { length: 300 }).notNull(),           // "RM Sotheby's Monterey, Lot 245"
  venue: varchar('venue', { length: 200 }),                     // "RM Sotheby's"
  location: varchar('location', { length: 200 }),               // "Monterey, California"
  outcome: varchar('outcome', { length: 30 }),                  // sold | not_sold | withdrawn | listed | shown | unknown
  priceAmount: decimal('price_amount', { precision: 14, scale: 2 }),
  priceCurrency: varchar('price_currency', { length: 3 }),
  estimateLow: decimal('estimate_low', { precision: 14, scale: 2 }),
  estimateHigh: decimal('estimate_high', { precision: 14, scale: 2 }),
  mileage: integer('mileage'),
  mileageUnit: varchar('mileage_unit', { length: 5 }),          // mi | km
  details: text('details'),                                     // our own short factual note, never copied lot text
  sourceUrl: text('source_url').notNull(),
  sourceTitle: varchar('source_title', { length: 300 }),
  sourcePublisher: varchar('source_publisher', { length: 120 }),
  sourceType: varchar('source_type', { length: 30 }),           // auction-house | market-data | registry | journalism | manufacturer | club-forum | owner
  status: varchar('status', { length: 20 }).default('confirmed').notNull(), // confirmed | disputed | owner_reported
  conflictNote: text('conflict_note'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Public submissions ("I own this car", "this record is wrong", "add this
// event"). Mirrors model_contributions: pending until an admin acts, and the
// approve path is the ONLY way a submission becomes a chassis or event row.
export const registrySubmissions = pgTable('registry_submissions', {
  id: serial('id').primaryKey(),
  modelSlug: varchar('model_slug', { length: 300 }).notNull(),
  chassis: varchar('chassis', { length: 64 }).notNull(),
  vin: varchar('vin', { length: 32 }),
  kind: varchar('kind', { length: 20 }).default('event').notNull(), // event | correction | ownership
  body: text('body').notNull(),
  eventDate: varchar('event_date', { length: 10 }),
  sourceUrl: text('source_url'),
  submitterName: varchar('submitter_name', { length: 255 }),
  submitterEmail: varchar('submitter_email', { length: 255 }),
  submitterRelation: varchar('submitter_relation', { length: 40 }), // owner | former_owner | dealer | historian | other
  status: varchar('status', { length: 20 }).default('pending').notNull(), // pending | approved | rejected
  adminNote: text('admin_note'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  reviewedAt: timestamp('reviewed_at'),
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
export type ProviderReview = typeof providerReviews.$inferSelect;
export type NewProviderReview = typeof providerReviews.$inferInsert;
export type RegistryChassis = typeof registryChassis.$inferSelect;
export type RegistryEvent = typeof registryEvents.$inferSelect;
export type RegistrySubmission = typeof registrySubmissions.$inferSelect;
