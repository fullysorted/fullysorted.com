# Membership + The Stable -- build spec

Drafted 2026-09-06. Status: proposed, nothing built.

## 1. What is actually broken today

Read the schema and the truth is blunt: Fully Sorted has **two identity systems that
have never been introduced to each other**, plus six one-off ways of proving who you
are, and no concept of a car that outlives a listing.

**a. Two identities.**
`users` (serial id, unique email, role) is referenced by `listings.seller_id`,
`saved_listings.user_id` and `comments.user_id`. Almost nothing writes to it, so those
three features are dead wiring. Meanwhile the real signed-in identity is a loose string,
`clerk_user_id`, living on `service_providers` and `gig_orders`. Neither side knows the
other exists. Two systems, zero joins.

**b. Email is already the spine, unacknowledged.**
Eight tables store a bare email string: checkout, enquiry sender, lead, review author,
registry submitter, gig buyer, provider, outreach suppression. Every one of those is the
same person to the business and a different person to the database.

**c. Six bespoke token flows.**
`account_link_token` on providers, `/lead/[token]`, `/review/[token]`, `/orders/[token]`,
`/services/claim/[token]`, `/services/link/[token]`. The pattern is right -- email a
single-use expiring token, no login required -- but it is implemented six times, with
six sets of columns and six expiry rules.

**d. Admin is a shared password, not a person.**
`/admin` is one cookie compared against `ADMIN_SECRET`. `/team` is a second shared
password. Neither is a user, so nothing is attributable and nothing can be revoked
individually. `users.role` already has the values ('user', 'admin', 'chris') and is unused.

**e. No vehicle exists.**
A listing IS the car. Sell the car and the record dies with the listing. That is the
exact opposite of "the record is the product". The register (`registry_chassis` /
`registry_events`) is the only durable per-car record we have, and it is editorial, not
owner-facing.

## 2. The fix, in one sentence

Make `users` the single spine keyed on **email**, demote `clerk_user_id` to an attribute
of a user rather than an identity, turn all six token flows into a single **claim** onto
a user row, and introduce **`vehicles`** as the durable record that listings, register
entries and service history all hang off.

## 3. The clever bits (these are what make it cheap instead of a rewrite)

### 3.1 Shadow accounts -- the cold-start fix
Every email that touches the site gets a `users` row **immediately**, with
`status = 'shadow'`. No password, no signup, no email sent, no UI. It is a filing
cabinet, not an account.

When that person later signs in with Clerk using the same address, the shadow row is
**claimed**: `clerk_user_id` is stamped on it and everything they already did becomes
theirs retroactively -- their listing, their enquiries, their reviews, their registry
submission, their cars.

This is the whole trick. Nobody joins an empty garage. They sign in and their car is
already in it, with the history already attached. Signup stops being a wall in front of
the product and becomes the moment the product pays off.

### 3.2 One claim table, not six
```
claim_tokens(id, purpose, subject_type, subject_id, email, token, expires_at,
             used_at, created_at)
```
`purpose` is 'account_link' | 'lead_outcome' | 'review' | 'order' | 'stable_claim'.
Same entropy, same expiry policy, same single-use rule, one place to audit. The existing
provider `account_link_token` columns stay until the new path is proven in production,
then get deprecated the way `provider_type` was -- deprecated, not dropped.

### 3.3 Vehicles as parent, listings as child -- zero-downtime retrofit
Add `vehicles`. Add `listings.vehicle_id`, **nullable**. Backfill one vehicle per existing
listing. Nothing in the listing read path changes on day one; every existing page keeps
working. The Stable reads `vehicles`. Selling a car marks the listing sold and leaves the
vehicle standing, which is the point.

### 3.4 Free history via the register
`vehicles.chassis_id` references `registry_chassis`. When an owner adds a car whose VIN or
chassis matches a published register row, their Stable page shows the public history we
already researched. That is the single most impressive thing the site can do for a new
member and it costs one nullable column, because the register already exists.

### 3.5 Admin becomes a role, not a password
Keep the `ADMIN_SECRET` cookie as break-glass. Additionally accept a signed-in user whose
`users.role` is 'admin' or 'chris'. Fold `/team` in as `role = 'rep'`. One console, three
permission levels, per-person revocation, and every admin action becomes attributable.

## 4. Schema

### users (extend, do not replace)
```
clerk_user_id  varchar(255) UNIQUE   -- nullable until claimed
status         varchar(20) NOT NULL DEFAULT 'shadow'  -- shadow | active | suspended
handle         varchar(40) UNIQUE    -- nullable; required only for a public profile
bio            text
location       varchar(120)
phone          varchar(40)
last_seen_at   timestamp
```
Email is stored lowercased and trimmed on every write. That is the join key; get it wrong
once and two people become one.

### vehicles (new)
```
id, user_id -> users.id NOT NULL
year, make, model, trim, body_style, exterior_color, interior_color
vin varchar(17), chassis varchar(64)
chassis_id -> registry_chassis.id      -- nullable, the free-history link
mileage, mileage_unit
nickname varchar(120)
story text                              -- owner's own words
photos jsonb, hero_photo text
visibility varchar(20) NOT NULL DEFAULT 'private'   -- private | public
status varchar(20) NOT NULL DEFAULT 'owned'         -- owned | sold | former | wanted
acquired_at date, sold_at date
created_at, updated_at
```

### vehicle_records (new) -- the actual moat
```
id, vehicle_id -> vehicles.id NOT NULL
kind varchar(30)          -- service | restoration | modification | inspection |
                          -- show | mileage | document | note
occurred_on varchar(10)   -- ISO or partial, same convention as registry_events
title varchar(300), details text
provider_id -> service_providers.id    -- nullable; set when the work came through us
cost_amount decimal(12,2), cost_currency varchar(3)
documents jsonb, photos jsonb
visibility varchar(20) DEFAULT 'private'
created_by -> users.id
created_at
```
This is where "nobody owns the record of what has been done to a car" gets answered. A
provider who did the work can be invited to confirm a record, which is the bridge from the
services hub back into membership.

### listings (extend)
```
vehicle_id -> vehicles.id      -- nullable, backfilled
```
`seller_id` already exists and already points at `users.id`. It just needs to be written.

### claim_tokens (new)
As in 3.2.

**ORM RULE, non-negotiable:** every column above goes into `src/instrumentation.ts` as an
`ADD COLUMN IF NOT EXISTS` in the **same commit** that adds it to `schema.ts`. Drizzle names
every mapped column in its SQL, so a column in schema.ts that the database lacks breaks
every read of that table. That is the 2026-08-22 outage. Do not repeat it.

## 5. Decisions already made (do not relitigate)

1. **Private by default.** Every vehicle is `private` unless the owner flips it. A public
   profile at `/stable/[handle]` exists only once the user picks a handle. Collectors are
   twitchy about publishing what is in the garage and where it lives. Never show location
   finer than city, and never on a private car.
2. **Membership is free and stays free.** The listing fee is a listing fee. Joining, keeping
   cars, and keeping records cost nothing, ever. Charging for access to your own records
   is the Angie's List mistake.
3. **Login is never a precondition for posting.** Anonymous sell, anonymous enquiry and
   anonymous registry submission all keep working exactly as they do now. Shadow accounts
   mean we capture the identity anyway. Login is an upgrade, not a gate.
4. **One account per person, one Clerk id per account.** Never auto-merge two user rows.
   A merge requires a token sent to both addresses.
5. **`/account` is the one member surface.** Provider dashboard, Stable, saved cars,
   enquiries and orders become tabs of it, not separate URLs to remember.

## 6. Build order (each phase ships on its own and is useful alone)

**Phase 0 -- the spine. Invisible.**
Extend `users`. Write `src/lib/identity.ts` with `getOrCreateUserByEmail()` and
`resolveCurrentUser()`. Add the Clerk webhook (or a first-request hook) that claims a
shadow row by email on sign-in. Backfill a `users` row for every distinct email already in
the database. Nothing on the site changes. This is the load-bearing wall.

**Phase 1 -- route existing writes through it. Still invisible.**
Sell checkout, enquiry, review, registry submission and gig order all call
`getOrCreateUserByEmail()` and set the foreign key alongside the email string they already
write. Keep writing the email string; it is the audit trail and the fallback.

**Phase 2 -- The Stable.**
`vehicles` + `vehicle_records`. Backfill one vehicle per listing. `/stable` (yours),
`/stable/[handle]` (public, opt-in). The sell flow becomes "add the car" then "list it",
which means a car can exist without ever being for sale. Wire `chassis_id` matching.

**Phase 3 -- membership surface.**
`/account` with tabs. Saved listings and comments finally work because `users` finally has
rows. One nav entry. Sign-in copy that says what you get.

**Phase 4 -- admin consolidation.**
Role-based `/admin`, `/team` folded in, and a user detail page that shows everything one
email address has ever done on the site: listings, cars, enquiries, reviews, orders,
submissions. That page is worth the whole project on its own.

## 7. Known traps

- Email case and whitespace. Lowercase and trim on every write, or the spine splits.
- A user changing their email in Clerk. Match on `clerk_user_id` first, email second.
- Two shadow rows for the same human with two addresses. Do not guess. Offer a merge that
  requires a token at both addresses.
- `visibility` must be enforced server-side in the query, not hidden in the component.
- The register link is a claim, not proof. A matched chassis shows public history; it never
  asserts that this member owns that chassis until an admin approves a registry submission.

## 8. Reconciliation with the 2026-08-31 Stable intake design

The intake shape is already settled and this spec does not touch it. It is repeated here
because Phase 2 must build exactly this and nothing else:

- **One field, no account.** "What have you got?" accepts a VIN **or** plain text
  ("1972 Datsun 240Z"). VIN is the fast path, never the required one.
- **Payoff inside ten seconds, before a single question.** His car's model-history page
  plus nearby specialists for that marque.
- **The account is the SAVE button, not the turnstile.** "Keep this in your Stable."
- **The checklist is the data-gathering engine, never a form.** Generate a model-specific
  yes / no / don't-know list from `vehicle_models.commonProblems` and `whatToLookFor`,
  already written and cited for 85 published models. Recognition is cheap, recall is
  expensive. Every "no" is a job that maps to a provider.
- **After that the record fills itself** from things already shipped: the car brief on the
  enquiry form, the no-login lead-outcome link the shop clicks, and review invitations.
  Each of those becomes a `vehicle_records` row with a date and a shop name on it.

**Shadow accounts are the mechanism that makes "the account is the save button" actually
work.** Without them, "value first, account second" leaks: the anonymous person who got
the payoff and did not sign up is lost. With them, the row exists from the first keystroke
and the sign-in that happens two weeks later inherits it.

### Correction to carry forward
The August note records identity as "RESOLVED 2026-08-22". That resolved **provider**
identity only -- `account_link.ts` sets `clerk_user_id` on a `service_providers` row.
**Member** identity was never resolved: `users` is still orphaned, `listings.seller_id` is
still unwritten, and there is no path from a signed-in Clerk session to a `users` row.
Phase 0 of this spec is that missing piece.

### Highest-leverage single function, still unbuilt
`make + model + year-in-range -> generation slug`. NHTSA returns "PORSCHE / 911 / 2013";
model pages are slugged by generation (`porsche/911-964`) with `year_start` / `year_end`
already on `vehicle_models`. That one query is what turns a VIN decode into *his car's
page*, and it is the difference between the Stable feeling like a database and feeling
like we know his car. Build it in Phase 2, first thing.

### Still blocked, unchanged
`service_providers.marques` exists, has no UI and no data. Marque matching is the third
beat of the intake payoff. Cheapest unblock is adding marques to the provider dashboard
and `/team` panels that already exist, and having Sergey tag from the call list.
Match order is marque, then category, then distance. Never paid ranking.

---

## PHASE 0 -- BUILT 2026-09-06 (uncommitted)

Four files. Typechecked and linted clean against a fresh install. Nothing on the
site changes: no route, no component and no copy was touched, and `users` was
read and written by nothing before today, so there is no behaviour to regress.

| File | What |
| --- | --- |
| `src/lib/db/schema.ts` | `users` extended: `clerk_user_id`, `status`, `handle`, `bio`, `location`, `phone`, `last_seen_at` |
| `src/instrumentation.ts` | New ORM-critical block with the matching `ADD COLUMN IF NOT EXISTS`, a partial unique index on `clerk_user_id`, a case-insensitive unique index on `handle`, a `LOWER(email)` index, and a one-off `UPDATE` marking pre-existing rows 'active' rather than 'shadow' |
| `src/lib/identity.ts` | NEW. `normalizeEmail`, `getOrCreateUserByEmail`, `getUserByEmail`, `getUserByClerkId`, `claimUserForClerk`, `resolveCurrentUser`, `isStaff`, `isRep` |
| `scripts/backfill-users.mjs` | NEW. Files a shadow row for every inbound address already in the database. Idempotent, `--dry` supported |

### Two decisions made during the build

**No Clerk webhook.** `resolveCurrentUser()` is self-healing: if a signed-in
session has no `users` row it creates and claims one on the spot, on the first
request that asks who the member is. A webhook is one more secret to set, one
more endpoint to register, and one more thing to discover was silently broken
three months later. The fast path is a single indexed lookup on `clerk_user_id`;
the slow path runs once per member for the life of the account.

**Raw SQL in `identity.ts`, not Drizzle.** Drizzle names every mapped column in
its emitted SQL, which is exactly how the 2026-08-22 outage took down every
provider profile. Naming columns explicitly here means a missed migration
degrades identity alone instead of taking `users` down wholesale. Every function
also swallows its own errors and returns null: identity is additive, and it must
never be the reason an enquiry or a review fails to save.

### Deploy order, and it matters
1. Ship the four files. The ALTERs run at boot, on the first cold start.
2. Confirm the boot log has no `CRITICAL: could not ensure ORM-critical users columns`.
3. Only then run the backfill, from a machine with the production connection string:
   ```
   DATABASE_URL='...' node scripts/backfill-users.mjs --dry   # counts only
   DATABASE_URL='...' node scripts/backfill-users.mjs
   ```
   Backfill before step 2 and it fails on missing columns. It is idempotent, so
   a failed run costs nothing but the rerun.

### What the backfill deliberately skips
Cold-sourced `service_providers` rows with no linked Clerk account (the 113-shop
call list was sourced by us, not submitted by them; they get a row when they
actually claim a listing) and everything in `outreach_suppression` (people who
asked us to stop). A row in `users` is never permission to email anybody, and
that sentence is in the code in three places so nobody has to guess later.

### Next: Phase 1
Route the existing write paths through `getOrCreateUserByEmail` and set the
foreign key alongside the email string they already write: `/api/messages`,
`/api/checkout` (sets `listings.seller_id`, which has been nullable and unwritten
since it was declared), `/api/reviews`, `/api/register` submissions,
`/api/gigs/order`. Keep writing the email string. It is the audit trail and the
fallback. Still nothing visible on the site.

---

## PHASE 1 -- BUILT 2026-09-07 (uncommitted)

Every inbound write now records WHO, not just an email string. Ten files, tsc
and eslint clean, no new lint errors.

**Schema + migration.** `user_id` (nullable, `REFERENCES users(id)`) added to
`messages`, `provider_reviews`, `registry_submissions` and
`provider_applications`; `buyer_user_id` on `gig_orders`. Matching
`ADD COLUMN IF NOT EXISTS` in a new ORM-critical block placed at the END of
`register()`, because every one of those tables is created earlier in that file
and a fresh database would otherwise fail all five and heal only on the second
boot. Indexes on all of them plus `listings(seller_id)`, because "everything
this person has ever done" is the query the admin user page will be built on.
A `CREATE TABLE IF NOT EXISTS users` was also added to the top of the Phase 0
block for the same fresh-database reason.

**Write paths.** `/api/messages`, `/api/register/submit`, `/api/reviews`,
`/api/gigs/order`, `/api/apply-provider` each call `getOrCreateUserByEmail`
before saving and set the foreign key. Every email column beside them keeps
being written: the string is the audit trail, the id is the join.

On reviews the id comes from `provider_reviews.author_email` (the address the
invite was actually mailed to), never from a name typed into the form, and the
update uses `COALESCE(user_id, ...)` so a claim is never overwritten.

### The finding: the sell flow has never captured a seller
`POST /api/listings` stores no email, phone or name for the seller. Not one.
Which means `listings.seller_id` was not merely unwritten, it was unwritable:
there was no address to write it from. The only place a seller's address exists
anywhere in the system is Stripe's `customer_details.email` at checkout.

So the attribution now happens in the Stripe webhook, on
`checkout.session.completed`, guarded on `seller_id IS NULL` so a listing
already claimed by a member is never re-pointed by a later payment, in its own
try/catch because Stripe has the money and the listing is already live.

Two consequences to carry:
1. **Free early-adopter listings still have no owner.** They never touch Stripe,
   so nothing attributes them. Phase 2 fixes this properly by making the car
   exist before the listing does.
2. **Existing listings have no seller and cannot get one retroactively.** There
   is no stored address to match on. Attributing them needs a human in
   `/admin`, which is Phase 4.

### Also shipped: `/account`
Not planned for Phase 1, but the header's "Dashboard" link sent every signed-in
person to `/dashboard/provider`, which opens by asking them to list a service.
That assumed every account holder is a shop. Most are car owners, and being
asked to advertise a business you do not run is a strange way to be welcomed.
`/account` was already in the middleware's protected list and did not exist, so
it 404'd.

`/account` now leads with the member's cars, then their enquiries, then service
bookings, and mentions the shop last -- and the shop panel only appears when a
provider row is actually linked to their Clerk account. Otherwise there is one
quiet line at the bottom: "Work on cars for a living? List your business."
Header now points at `/account` and the label reads "Account".

It shows only what is true. Until listings start being attributed by the
webhook, most accounts will correctly show an empty "Your cars".
