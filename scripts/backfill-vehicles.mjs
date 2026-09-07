#!/usr/bin/env node
/**
 * BACKFILL THE STABLE FROM EXISTING LISTINGS.
 *
 * Gives every attributed listing a vehicle row and points the listing at it,
 * so a member who signs in finds the car they listed already in their Stable
 * rather than an empty room.
 *
 *   DATABASE_URL='postgres://...' node scripts/backfill-vehicles.mjs --dry
 *   DATABASE_URL='postgres://...' node scripts/backfill-vehicles.mjs
 *
 * Idempotent: it only touches listings where vehicle_id IS NULL.
 *
 * ── The limit, stated plainly ─────────────────────────────────────────────
 * A listing can only become a vehicle if it has a seller_id, and seller_id is
 * only written from 2026-09-07 onward, by the Stripe webhook, from the address
 * the payer used at checkout. The sell form has never asked for a seller's
 * email, so listings created before that have no owner and no way to find one.
 * They are counted and skipped here, and attributing them needs a human in
 * /admin. That is Phase 4, not a script.
 */

import { neon } from '@neondatabase/serverless';

const DRY = process.argv.includes('--dry');

if (!process.env.DATABASE_URL) {
  console.error('DATABASE_URL is not set.');
  process.exit(1);
}
const sql = neon(process.env.DATABASE_URL);

async function main() {
  const [{ count: orphans }] = await sql`
    SELECT COUNT(*)::int AS count FROM listings
    WHERE seller_id IS NULL AND vehicle_id IS NULL
  `;

  const rows = await sql`
    SELECT id, seller_id, year, make, model, trim, vin, mileage,
           hero_photo, photos, status
    FROM listings
    WHERE seller_id IS NOT NULL AND vehicle_id IS NULL
    ORDER BY id
  `;

  console.log(`\nListings with an owner and no vehicle: ${rows.length}`);
  console.log(`Listings with NO owner (skipped, need /admin): ${orphans}`);

  if (DRY) {
    console.log('\n--dry: nothing written.');
    return;
  }

  let made = 0;
  let failed = 0;

  for (const l of rows) {
    try {
      // A sold listing leaves a car that is still owned by somebody, so the
      // vehicle records the sale rather than disappearing with the listing.
      const status = l.status === 'sold' ? 'sold' : 'owned';

      // INSERT and UPDATE in ONE statement. Run as two, a crash in between
      // leaves a vehicle nothing points at, and the next run -- which still
      // sees vehicle_id IS NULL -- creates a second one. A CTE closes that
      // window entirely.
      const done = await sql`
        WITH v AS (
          INSERT INTO vehicles
            (user_id, year, make, model, trim, vin, mileage, hero_photo, photos,
             visibility, status)
          VALUES
            (${l.seller_id}, ${l.year}, ${l.make}, ${l.model}, ${l.trim},
             ${l.vin}, ${l.mileage}, ${l.hero_photo},
             ${JSON.stringify(Array.isArray(l.photos) ? l.photos : [])}::jsonb,
             'private', ${status})
          RETURNING id
        )
        UPDATE listings SET vehicle_id = v.id, updated_at = NOW()
          FROM v
         WHERE listings.id = ${l.id} AND listings.vehicle_id IS NULL
        RETURNING listings.id
      `;
      if (done.length) made++;
      else console.warn(`  listing #${l.id} was already linked, skipped`);
    } catch (err) {
      failed++;
      console.error(`  listing #${l.id} failed: ${err.message.split('\n')[0]}`);
    }
  }

  console.log(`\nVehicles created: ${made}`);
  if (failed) console.log(`Failed:           ${failed}`);
  console.log('\nEvery car is private. Nothing was published and nothing was emailed.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
