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

---

## PHASE 2 -- BUILT 2026-09-07 (uncommitted). THE STABLE IS REAL.

Ten files. Typechecks, lints, and a full `next build` passes end to end.

### Schema
`vehicles` and `vehicle_records` created; `listings.vehicle_id` added, nullable.
ALTERs sit in a third ORM-critical block at the end of `register()`, after the
identity block, because `vehicles` references `users(id)` and the chassis link
points at `registry_chassis`. Every existing listing read keeps working from the
moment this deploys, because `vehicle_id` is nullable and backfilled separately.

Every car is `visibility = 'private'`. There is no code path that creates a
public one. Location is not stored on a vehicle at all.

### `src/lib/stable/match.ts` -- the highest-leverage function in the project
`make + model + year -> the published research page for that GENERATION`.

NHTSA hands back "PORSCHE / 911 / 2013". Model pages are slugged by generation
with `year_start` / `year_end` on the row. Without this, a VIN decode is a table
of specifications that every site has. With it, the decode lands on his car's
page. Scoring runs in JavaScript, not SQL: fewer than a hundred published models,
a handful per make, and the ranking rules are easier to be wrong about in one
readable place than inside a CASE expression.

Exact model name +4, containment +2, a generation code typed into the field +3,
year inside the generation span +3, year OUTSIDE it **-4**. Threshold 4, and it
returns null below that. Sending a Boxster owner to the 911 page is worse than
sending him nowhere: the first costs the moment, the second costs his trust in
everything else on the page.

`parseCarText` pulls "1972 Datsun 240Z" apart. The year is the anchor wherever it
appears; the make is matched against makes we actually publish, longest name
first, so "Land Rover Defender" never becomes make "Land".

### The intake, exactly as settled on 2026-08-31
`/stable` is deliberately **PUBLIC**. A signed-out visitor gets the whole payoff
before anything is asked of them: the car, its research page, shops that work on
that marque. Only then does anything mention keeping it. Protecting the route
would put the wall back.

An identified car is held in `sessionStorage`, so signing in does not throw it
away and make them type it twice. That is the difference between the account
being a save button and being a wall.

The specialists block renders only when it is non-empty. `service_providers.marques`
still has no data, so it will be empty for a while, and an empty "specialists near
you" heading is a worse first impression than no heading at all.

### Files
`src/lib/stable/match.ts`, `src/lib/stable/vehicles.ts` (ownership enforced in the
WHERE clause of every query, never in a component), `POST /api/stable/identify`
(public, writes nothing), `/api/stable/vehicles` (GET/POST/DELETE, signed in),
`/stable` + `StableIntake.tsx`, `/account` reworked so Your Stable is first and
"Listed for sale" is a separate panel, `scripts/backfill-vehicles.mjs`, and The
Stable added to the header's signed-in cluster only -- the public nav order stays
Services, Marketplace, Research.

### Deploy order
1. Ship. The three ORM-critical blocks run at boot, in order.
2. Check the boot log for `CRITICAL: could not ensure Stable tables`.
3. `DATABASE_URL='...' node scripts/backfill-vehicles.mjs --dry` then for real.
   It reports how many listings have no owner at all and skips them.

### Phase 2b, not built
The model-specific checklist. Generate yes / no / don't-know items from
`vehicle_models.commonProblems` and `whatToLookFor`, already written and cited for
85 models. Recognition is cheap, recall is expensive, and every "no" is a job that
maps to a provider. This is the part that makes the Stable something people open
on a Tuesday rather than a list of cars, and `vehicle_records` is already shaped
for the answers.

Then: the lead-outcome link a shop clicks extended one notch to "did this job
happen?", and review invitations, both writing dated `vehicle_records` rows with
the shop's name on them. After that first checklist the owner should essentially
never fill in a form again.

---

## ADVERSARIAL REVIEW + HARDENING, 2026-09-07

A second model reviewed the whole change set before deploy. It earned its keep.
Seven real defects, all now fixed. Ownership and privacy came back clean: no
cross-member read, write or delete path, every query scoped by `user_id`,
visibility hard-coded private, and the public identify route writes nothing.

**1. The migration block could silently half-run.** `provider_reviews` is NOT
created in `instrumentation.ts`. It is created lazily by `ensureReviewTable()`
in `lib/reviews.ts`, on the first review request. So on any database where no
review has happened yet, a bare `ALTER TABLE provider_reviews` throws, the whole
try/catch aborts, and every statement after it is skipped, leaving
`gig_orders.buyer_user_id` and `provider_applications.user_id` missing while
schema.ts declares them. That breaks every read of both tables. The 2026-08-22
outage, rebuilt by hand.

Fixed with `ALTER TABLE IF EXISTS` on all five, so a missing table is a notice
rather than an error, plus the `provider_reviews.user_id` ALTER moved into
`ensureReviewTable()`, which is the only place guaranteed to run after that
table exists. **Carry this forward: `provider_reviews` migrations belong in
`lib/reviews.ts`, not `instrumentation.ts`.**

**2. Account takeover through an unverified address.** `resolveCurrentUser` took
the primary email or, failing that, `emailAddresses[0]`, and claimed the shadow
row for it without checking verification. A shadow row holds everything an
address has ever done: enquiries with a phone number and car brief attached,
reviews, registry submissions. So anyone who could type a stranger's address
into a signup form and get past Clerk unverified would inherit all of it.

Now: primary address only, and only when `verification.status === 'verified'`.
No fallback to `emailAddresses[0]`, because an unverified address that happens
to sort first is precisely the attack. An unverified session simply has no user
row until the address is confirmed.

**3. Anyone could set your display name.** The claim used
`name = COALESCE(name, clerkName)`, so a name written by an unauthenticated form
won permanently. POST an enquiry as someone else's address with any name you
like and they are greeted by it forever. Reversed: Clerk's copy is the verified
source and now overwrites.

**4. A changed Clerk email stranded the next person.** If a member changed their
primary address, `users.email` kept the old one. The next person to sign up with
that freed-up address hit a row they could not claim, `claimUserForClerk`
returned null, and they were signed in but permanently locked out of `/account`
and the Stable. The bound row's email now syncs to the account's primary
address, skipped silently if that address is taken. Still no auto-merging.

**5. Signing in un-suspended a suspended account.** The claim set
`status = 'active'` unconditionally. Now suspended stays suspended, and
`resolveCurrentUser` returns null for a suspended row.

**6. The user backfill created rows but linked nothing.** It filed a `users` row
per address and never set `user_id` on the historic messages, reviews, register
submissions, gig orders or applications, so the promised "your history is
already here" moment would not have happened. Five idempotent UPDATE statements
added, each caught on its own.

It still does NOT copy `service_providers.clerk_user_id` onto the matching user,
deliberately: that address is the BUSINESS address, often not the one the person
signed in with, and a wrong binding is far worse than a late one.
`resolveCurrentUser` binds the right row from their verified address on their
next sign-in.

**7. The vehicle backfill could duplicate on a re-run.** INSERT then UPDATE as
two statements leaves an orphan vehicle if it crashes in between, and the next
run creates a second one. Now a single CTE.

Also: `listings.vehicle_id` gained `ON DELETE SET NULL`, so deleting a car from
a Stable is not refused because a listing still points at it; and the public
identify route got a six second timeout on the NHTSA lookup, because an
unbounded fetch on a public endpoint is a way to tie up a function with somebody
else's outage.

### Closing the last review item, 2026-09-07

**Stripe attributed listings from an address the payer typed.**
`customer_details.email` is whatever somebody types into Stripe's checkout form.
It is never verified, so on its own it could attribute a listing to a stranger's
user row.

`/api/checkout` now resolves the signed-in member, when there is one, and carries
their id in the session metadata. The webhook prefers that over the typed
address, because it is an authenticated fact rather than a form field. A
signed-out seller still falls back to the typed email, which is the old
behaviour and no worse than it was. Both paths stay guarded on
`seller_id IS NULL`, and identity failures never block a sale.

The real fix remains Phase 2's shape: the car exists in a Stable before the
listing does, so the seller is known before money is involved.

---

## THE SELL FLOW, 2026-09-07 (uncommitted)

Chris: the page reads cheap. It did, and the cause was structural rather than
cosmetic.

**Step one was "Choose Plan".** The first thing the site did to a seller was ask
for money, before it knew anything about the car. Somebody with a
numbers-matching car was picking a $9.99 tier before a single question had been
asked about it. That is what made it feel cheap: not the amount, the sequence.

Step order is now Your Car, Details & Photos, Description, Choose Plan, Review &
Pay. Same five steps, the money moved to fourth. The fee is a detail you settle
once the listing exists and is worth paying for.

**The form was a used-car form.** Year, make, model, trim, placeholders "Ford"
and "Mustang", and not one field for the things a collector car is actually
identified by. The vehicle step now opens with a VIN-or-chassis-or-plain-text
lookup that fills the form in, and carries a Numbers block underneath: VIN,
chassis / serial number, engine number, matching numbers, and known history.

All of them optional, and the copy says so, because a 17-digit VIN only exists
from 1981. For most of what this site is for, the chassis number IS the
identity, and a form that insists on a VIN is a form that tells the owner of a
275 GTB he does not qualify.

The history field says "leave it blank rather than guessing. An empty field says
nothing; a wrong one gets found out." That is the register's standard applied to
a listing.

**The lookup reuses `/api/stable/identify`**, the same endpoint The Stable uses,
so a seller and an owner get the same answer about the same car. It decodes a
VIN where there is one, reads the text where there is not, and matches the
generation page: "We have a history for this one." That line, on the sell page,
is the whole argument for listing here rather than anywhere else.

It only ever FILLS BLANKS. Anything already typed wins, because a person who has
corrected a field should not watch a lookup undo it.

**Schema:** `listings` gains `chassis`, `engine_number`, `matching_numbers`
(yes | no | unknown, validated server-side) and `provenance`. ALTERs are in the
Stable block, which already owns listings. `vin` already existed and was never
collected by anything.

**NOT touched: the hero.** It carries live ad traffic and it is the page the
Meta campaign points at. Four separate price statements sit above the fold, the
h1 puts "from $9.99" in gold on its own line, and the closing paragraph does 4.5
percent arithmetic on a $50,000 sale. That is the loudest cheap signal on the
page and it is a copy decision on live ad creative, so it stays until Chris says
otherwise.

**Next, and it closes a hole:** step one now knows what the car is before the
listing is created, so it can create or match a Stable vehicle and set
`listings.vehicle_id` at creation. That makes "add the car, then list it" real
and removes the last dependence on the address a payer types into Stripe.

### Making the whole flow easy, 2026-09-07

Chris: this whole flow needs to be super easy. It was five steps and about
thirty fields, and the numbers block added earlier the same day made it worse.
A man photographing a 911 in his driveway on a phone was being asked for a ZIP
code and a drivetrain before he could get a price on the screen. Nobody
finishes that.

**Three steps: Your Car, Describe It, Publish.** Choose Plan and Review & Pay
were separate screens; picking a tier and paying for it is one decision, so they
are now one screen. Details & Photos was absorbed into Your Car.

**Four required fields in the entire flow: year, make, model, price.** The step
says so out loud, then: "That is enough to publish. Anything you add here makes
the listing better, and none of it is required."

**Everything else is folded away**, in four groups shut by default: Specs,
Numbers, Where the car is, Who is selling. Built on native `<details>`, so they
work without JavaScript, keyboard and screen readers get them for free, and
find-in-page can open them. The seller-type group opens itself when the seller
has said they are a dealer, because it then contains fields that genuinely are
required.

**Price and photos moved up**, next to year/make/model. They were buried in step
two under mileage, gearbox, colors and a ZIP code. Price is the field the seller
came to fill in.

**The draft is kept.** Every change is written to `localStorage`, restored on
return with a line saying so and a "Start fresh" link, and cleared the moment
the listing is created. Somebody loses signal in a driveway or takes a call, and
thirty fields used to go with it. Nobody retypes thirty fields; they just do not
come back.

The photo limit still follows the tier, which is now chosen at the end, so the
label says up to N on the Standard plan and that a bigger plan can be picked
later. Honest, and it does not block anybody.

### The /sell hero, 2026-09-07 (Chris asked for it explicitly)

It carried four separate price statements above the fold. The h1 put "from
$9.99" in gold on its own line, then a flat-fee subhead, then a buyer's-premium
pill, then a paragraph doing percentage arithmetic on a $50,000 sale. A man with
a numbers-matching car read all of that before the page said one word about his
car.

Now:

- **H1:** "Sell your collector car to people who know what it is."
- **Subhead:** chassis numbers, history and full-resolution photographs, on a
  listing that links to our own research on the model. Which is now true, and is
  the only thing here nobody else can say.
- **Pills** say what the listing carries rather than what it costs: chassis and
  VIN on the listing, full-resolution photos, direct buyer contact.
- **One line about money**, stated plainly and then dropped: a flat listing fee
  from $9.99, paid once, up front, no commission when it sells and no buyer's
  premium.
- **The 4.5 to 5 percent comparison moved to the Publish step**, next to the tier
  cards, at the one moment a seller is actually weighing what to pay. It is a
  good argument. It was just in the wrong place, doing the opposite of its job.

Untouched: the hero image, the accent line, the overlay, the grain, and the
"Built by collectors, for collectors" badge, which is the one piece of that hero
that was already doing the right work.

**Also untouched, deliberately: the page metadata.** The title still reads "Sell
Your Collector Car from $9.99". That is an ad and search asset rather than
something a visitor reads on the page, and keeping the fee there preserves
message match with the Meta campaign while the page itself now leads with the
car. Worth a separate decision, not a silent edit.
