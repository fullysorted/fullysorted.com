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
