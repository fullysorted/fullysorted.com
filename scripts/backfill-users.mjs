#!/usr/bin/env node
/**
 * BACKFILL THE IDENTITY SPINE.
 *
 * Creates a `users` row for every inbound email address already in the
 * database, so that the day membership goes live, a member who signs in finds
 * their history already waiting rather than an empty account.
 *
 * Run once after the users columns are deployed, then whenever you like -- it
 * is idempotent and only ever fills blanks.
 *
 *   DATABASE_URL='postgres://...' node scripts/backfill-users.mjs --dry
 *   DATABASE_URL='postgres://...' node scripts/backfill-users.mjs
 *
 * ── What counts as "inbound" ──────────────────────────────────────────────
 * Only addresses whose owner came to US: they sent an enquiry, ordered a gig,
 * left a review, submitted a register correction, or applied to the directory.
 * Plus providers who have already linked a Clerk account, since those are real
 * signed-up people.
 *
 * DELIBERATELY EXCLUDED:
 *   • service_providers rows with no linked account -- the 113-shop call list
 *     was sourced by us, not submitted by them. They get a row when they
 *     actually claim their listing, which is the honest moment.
 *   • outreach_suppression -- those are people who asked us to stop. Filing
 *     them here would be technically harmless and morally stupid.
 *
 * A ROW HERE IS NOT PERMISSION TO EMAIL ANYBODY. See lib/identity.ts.
 */

import { neon } from '@neondatabase/serverless';

const DRY = process.argv.includes('--dry');

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set.');
  process.exit(1);
}
const sql = neon(process.env.DATABASE_URL);

/** Same normaliser as lib/identity.ts. If you change one, change both. */
function normalizeEmail(raw) {
  if (!raw) return null;
  const e = String(raw).trim().toLowerCase();
  if (e.length < 5 || e.length > 255) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) return null;
  return e;
}

const SOURCES = [
  {
    label: 'enquiries + directory leads',
    query: () =>
      sql`SELECT sender_email AS email, sender_name AS name, created_at FROM messages WHERE sender_email IS NOT NULL`,
  },
  {
    label: 'gig orders',
    query: () =>
      sql`SELECT buyer_email AS email, buyer_name AS name, created_at FROM gig_orders WHERE buyer_email IS NOT NULL`,
  },
  {
    label: 'review authors',
    query: () =>
      sql`SELECT author_email AS email, author_name AS name, created_at FROM provider_reviews WHERE author_email IS NOT NULL`,
  },
  {
    label: 'register submissions',
    query: () =>
      sql`SELECT submitter_email AS email, submitter_name AS name, created_at FROM registry_submissions WHERE submitter_email IS NOT NULL`,
  },
  {
    label: 'directory applications',
    query: () =>
      sql`SELECT email, owner_name AS name, created_at FROM provider_applications WHERE email IS NOT NULL`,
  },
  {
    label: 'providers with a linked account',
    query: () =>
      sql`SELECT email, owner_name AS name, created_at FROM service_providers
          WHERE email IS NOT NULL AND clerk_user_id IS NOT NULL`,
  },
];

async function main() {
  /** email -> { name, firstSeen } -- earliest sighting wins the name. */
  const people = new Map();
  const counts = {};

  for (const s of SOURCES) {
    let rows = [];
    try {
      rows = await s.query();
    } catch (err) {
      // A table that does not exist in this environment is not a failure.
      console.warn(`  skipped ${s.label}: ${err.message.split('\n')[0]}`);
      counts[s.label] = 'skipped';
      continue;
    }
    let kept = 0;
    for (const r of rows) {
      const email = normalizeEmail(r.email);
      if (!email) continue;
      kept++;
      const seen = r.created_at ? new Date(r.created_at).getTime() : Infinity;
      const prev = people.get(email);
      if (!prev || seen < prev.firstSeen) {
        people.set(email, {
          name: (r.name || prev?.name || '').trim() || null,
          firstSeen: seen,
        });
      } else if (!prev.name && r.name) {
        prev.name = String(r.name).trim() || null;
      }
    }
    counts[s.label] = `${kept} addresses from ${rows.length} rows`;
  }

  console.log('\nSources:');
  for (const [k, v] of Object.entries(counts)) console.log(`  ${k}: ${v}`);

  const [{ count: before }] = await sql`SELECT COUNT(*)::int AS count FROM users`;
  console.log(`\nDistinct inbound addresses: ${people.size}`);
  console.log(`users rows before:          ${before}`);

  if (DRY) {
    console.log('\n--dry: nothing written.');
    const sample = [...people.keys()].slice(0, 5);
    console.log('Sample:', sample.join(', ') || '(none)');
    return;
  }

  let created = 0;
  let filled = 0;
  const entries = [...people.entries()];

  // One row at a time on purpose. This runs once, over a few thousand rows at
  // most, and a per-row failure should cost one address rather than the batch.
  for (const [email, { name }] of entries) {
    try {
      const rows = await sql`
        INSERT INTO users (email, name, status)
        VALUES (${email}, ${name}, 'shadow')
        ON CONFLICT (email) DO UPDATE
          SET name = COALESCE(users.name, EXCLUDED.name),
              updated_at = NOW()
        RETURNING (xmax = 0) AS inserted
      `;
      if (rows[0]?.inserted) created++;
      else filled++;
    } catch (err) {
      console.error(`  failed ${email}: ${err.message.split('\n')[0]}`);
    }
  }

  // ── Point the historic rows at the people who wrote them ────────────────
  // Creating the users rows is only half the promise. Without this, a member
  // signs in, /account queries `messages WHERE user_id = ?` and shows nothing,
  // and the whole "your history is already here" moment does not happen.
  //
  // Written as five explicit statements because a table name cannot be
  // parameterised. Each is idempotent (`user_id IS NULL`) and each is caught
  // on its own, so a table that does not exist in this environment costs one
  // link, not the run.
  const link = async (label, fn) => {
    try {
      const rows = await fn();
      console.log(`  linked ${label}: ${rows.length ?? 0}`);
    } catch (err) {
      console.warn(`  skipped ${label}: ${err.message.split('\n')[0]}`);
    }
  };

  console.log('\nLinking existing rows to their people:');
  await link('enquiries', () => sql`
    UPDATE messages m SET user_id = u.id FROM users u
     WHERE m.user_id IS NULL AND LOWER(TRIM(m.sender_email)) = u.email
    RETURNING m.id`);
  await link('reviews', () => sql`
    UPDATE provider_reviews r SET user_id = u.id FROM users u
     WHERE r.user_id IS NULL AND LOWER(TRIM(r.author_email)) = u.email
    RETURNING r.id`);
  await link('register submissions', () => sql`
    UPDATE registry_submissions s SET user_id = u.id FROM users u
     WHERE s.user_id IS NULL AND LOWER(TRIM(s.submitter_email)) = u.email
    RETURNING s.id`);
  await link('gig orders', () => sql`
    UPDATE gig_orders o SET buyer_user_id = u.id FROM users u
     WHERE o.buyer_user_id IS NULL AND LOWER(TRIM(o.buyer_email)) = u.email
    RETURNING o.id`);
  await link('directory applications', () => sql`
    UPDATE provider_applications a SET user_id = u.id FROM users u
     WHERE a.user_id IS NULL AND LOWER(TRIM(a.email)) = u.email
    RETURNING a.id`);

  // NOT done here, on purpose: copying service_providers.clerk_user_id onto the
  // matching users row. The address on a provider row is the BUSINESS address,
  // which is often not the address that person signed in with. Binding on it
  // would attach a Clerk account to the wrong row, and a wrong binding is far
  // worse than a late one. resolveCurrentUser() binds the correct row from
  // their verified Clerk address the next time they sign in.

  const [{ count: after }] = await sql`SELECT COUNT(*)::int AS count FROM users`;
  console.log(`\nCreated:  ${created}`);
  console.log(`Existing: ${filled}`);
  console.log(`users rows after: ${after}`);
  console.log('\nDone. Nothing was emailed and nothing is scheduled to be.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
