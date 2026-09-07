/**
 * INTEGRATION TEST -- runs the app's OWN migration and logic code against a
 * real Postgres, on a database that starts completely empty.
 *
 * The build proves this code compiles. This proves it works together, which is
 * a different question and the one that has bitten this project before.
 *
 * ── How to run it ─────────────────────────────────────────────────────────
 * Easiest: point it at a THROWAWAY Neon branch and run it unmodified.
 *
 *   DATABASE_URL='postgres://...neon-test-branch...' npx tsx scripts/logic-test.mts
 *
 * It writes users, vehicles, listings and messages, so never point it at
 * production. Create a Neon branch, run it, delete the branch.
 *
 * Offline alternative: a local Postgres. @neondatabase/serverless speaks
 * Neon's HTTP protocol rather than the Postgres wire protocol, so a local
 * server needs a small `neon()` shim backed by `pg`. Written 2026-09-07; ask
 * and it can be committed alongside.
 *
 * ── What it found the first time it was run ───────────────────────────────
 * Two real defects, both since fixed, plus one pre-existing gap: on a brand
 * new database the boot migration gives up partway and eleven tables are
 * never created, because `model_contributions` references `vehicle_models`
 * and nothing at boot creates that table. See section 2.
 */
process.env.NEXT_RUNTIME = 'nodejs';
process.env.DATABASE_URL ||= 'postgres://fs@127.0.0.1:5433/fstest';

import { readFileSync } from 'fs';
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

let pass = 0, fail = 0;
const fails: string[] = [];
function ok(name: string, cond: boolean, detail = '') {
  if (cond) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; fails.push(name + (detail ? ` :: ${detail}` : '')); console.log(`  FAIL ${name}${detail ? ' :: ' + detail : ''}`); }
}
function section(t: string) { console.log(`\n== ${t} ==`); }

// ── 1. Migrations on a completely empty database ──────────────────────────
section('1. instrumentation.register() on an EMPTY database');
const criticals: string[] = [];
const realError = console.error;
console.error = (...a: unknown[]) => { const s = a.map(String).join(' '); if (/CRITICAL/.test(s)) criticals.push(s); realError('   [app]', s.slice(0, 160)); };

const { register } = await import('../src/instrumentation.js');
await register();
// provider_reviews is created by lib/reviews.ts, not instrumentation, so the
// app only has it after a review request. Do what the app does.
const { ensureReviewTable } = await import('../src/lib/reviews.js');
await ensureReviewTable(sql as never);
// Second boot must be a no-op, the way every Vercel cold start is.
await register();
console.error = realError;

ok('no CRITICAL errors on a fresh database', criticals.length === 0, criticals.join(' | ').slice(0, 300));

// ── 2. Every column schema.ts declares actually exists ────────────────────
section('2. schema.ts vs the real database, column by column (the outage rule)');
const schemaSrc = readFileSync(new URL('../src/lib/db/schema.ts', import.meta.url), 'utf8');
const tableBlocks = [...schemaSrc.matchAll(/pgTable\(\s*'([a-z_]+)'\s*,\s*\{([\s\S]*?)\n\}\)/g)];
ok('found table definitions in schema.ts', tableBlocks.length > 10, `found ${tableBlocks.length}`);

for (const [, table, body] of tableBlocks) {
  const declared = [...body.matchAll(/\b(?:serial|varchar|integer|text|boolean|timestamp|jsonb|decimal)\(\s*'([a-z_]+)'/g)].map((m) => m[1]);
  const rows = await sql`
    SELECT column_name FROM information_schema.columns WHERE table_name = ${table}
  `;
  const actual = new Set(rows.map((r: Record<string, unknown>) => String(r.column_name)));
  if (!rows.length) { ok(`${table}: table exists`, false, 'table missing entirely'); continue; }
  const missing = declared.filter((c) => !actual.has(c));
  ok(`${table}: all ${declared.length} declared columns exist`, missing.length === 0, missing.join(', '));
}

// ── 2b. Tables instrumentation.ts does NOT create ─────────────────────────
// Reported above as failures on purpose. They are created by admin-only setup
// routes rather than at boot, so a brand new database does not have them.
// Created minimally here so the rest of the suite can run.
section('2b. compensating for tables the boot migration never creates');
await sql`CREATE TABLE IF NOT EXISTS vehicle_models (
  id SERIAL PRIMARY KEY, slug VARCHAR(300) NOT NULL UNIQUE, make VARCHAR(100) NOT NULL,
  model VARCHAR(200) NOT NULL, generation VARCHAR(100), generation_code VARCHAR(50),
  year_start INTEGER, year_end INTEGER, hero_photo TEXT,
  status VARCHAR(20) NOT NULL DEFAULT 'draft', common_problems TEXT, what_to_look_for TEXT)`;
await sql`CREATE TABLE IF NOT EXISTS registry_chassis (
  id SERIAL PRIMARY KEY, model_slug VARCHAR(300) NOT NULL, chassis VARCHAR(64) NOT NULL,
  vin VARCHAR(32), status VARCHAR(20) NOT NULL DEFAULT 'published')`;
await sql`CREATE TABLE IF NOT EXISTS registry_submissions (
  id SERIAL PRIMARY KEY, model_slug VARCHAR(300) NOT NULL, chassis VARCHAR(64) NOT NULL,
  kind VARCHAR(20) NOT NULL DEFAULT 'event', body TEXT NOT NULL,
  submitter_email VARCHAR(255), status VARCHAR(20) NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP NOT NULL DEFAULT NOW())`;
console.log('  (created vehicle_models, registry_chassis, registry_submissions)');
// Re-run the boot migration now that they exist: the identity block must pick
// up the columns and indexes it had to skip the first time.
const c2: string[] = [];
const e2 = console.error;
console.error = (...a: unknown[]) => { const s = a.map(String).join(' '); if (/CRITICAL|failed/.test(s)) c2.push(s); };
await register();
console.error = e2;
ok('second boot adds what it skipped, with no CRITICAL', !c2.some((x) => /CRITICAL/.test(x)), c2.join(' | ').slice(0, 200));
const rsu = await sql`SELECT 1 FROM information_schema.columns WHERE table_name='registry_submissions' AND column_name='user_id'`;
ok('registry_submissions.user_id added on the later boot', rsu.length === 1);
const lsi = await sql`SELECT 1 FROM pg_indexes WHERE indexname='listings_seller_idx'`;
ok('an index AFTER the failing one still got created', lsi.length === 1);

// ── 3. Identity spine ─────────────────────────────────────────────────────
section('3. identity: shadow accounts, claiming, and the rules that protect them');
const idm = await import('../src/lib/identity.js');

const a1 = await idm.getOrCreateUserByEmail({ email: '  Chris@Example.COM ', name: 'Chris' });
const a2 = await idm.getOrCreateUserByEmail({ email: 'chris@example.com', name: 'Someone Else' });
ok('case and whitespace collapse to ONE row', !!a1 && !!a2 && a1!.id === a2!.id, `${a1?.id} vs ${a2?.id}`);
ok('a shadow row starts as shadow', a1!.status === 'shadow', a1!.status);
ok('a later form cannot overwrite an existing name', a2!.name === 'Chris', String(a2!.name));
ok('a junk address creates nothing', (await idm.getOrCreateUserByEmail({ email: 'not-an-email' })) === null);

const claimed = await idm.claimUserForClerk({ clerkUserId: 'user_AAA', email: 'chris@example.com', name: 'Chris P', avatarUrl: 'http://x/a.png' });
ok('signing in claims the existing shadow row', !!claimed && claimed.id === a1!.id);
ok('claiming promotes shadow -> active', claimed!.status === 'active', claimed!.status);
ok('Clerk name overwrites a form-supplied name', claimed!.name === 'Chris P', String(claimed!.name));

const hijack = await idm.claimUserForClerk({ clerkUserId: 'user_BBB', email: 'chris@example.com' });
ok('a SECOND Clerk account cannot take that row', hijack === null);

await sql`UPDATE users SET status = 'suspended' WHERE id = ${a1!.id}`;
const resus = await idm.claimUserForClerk({ clerkUserId: 'user_AAA', email: 'chris@example.com' });
ok('a suspended member stays suspended on sign-in', resus?.status === 'suspended', String(resus?.status));
await sql`UPDATE users SET status = 'active' WHERE id = ${a1!.id}`;

await idm.claimUserForClerk({ clerkUserId: 'user_AAA', email: 'chris.new@example.com' });
const synced = await idm.getUserByClerkId('user_AAA');
ok('a changed Clerk email follows the account', synced?.email === 'chris.new@example.com', String(synced?.email));

const other = await idm.getOrCreateUserByEmail({ email: 'taken@example.com' });
await idm.claimUserForClerk({ clerkUserId: 'user_AAA', email: 'taken@example.com' });
const notMerged = await idm.getUserByClerkId('user_AAA');
ok('email sync refuses to collide with someone else', notMerged?.id === a1!.id && notMerged?.email !== 'taken@example.com', String(notMerged?.email));
ok('the other person still owns their row', (await idm.getUserByEmail('taken@example.com'))?.id === other!.id);

// ── 4. The Stable ─────────────────────────────────────────────────────────
section('4. the Stable: ownership is enforced in SQL, not in a component');
const veh = await import('../src/lib/stable/vehicles.js');
const me = a1!.id, them = other!.id;

const mine = await veh.createVehicle({ userId: me, year: 1972, make: 'Datsun', model: '240Z', vin: 'HLS30012345' });
ok('a car saves', !!mine && mine.make === 'Datsun');
ok('a new car is PRIVATE', mine!.visibility === 'private', mine!.visibility);
const theirs = await veh.createVehicle({ userId: them, year: 1987, make: 'Porsche', model: '911' });

ok('I see only my own cars', (await veh.listVehicles(me)).length === 1);
ok('they see only theirs', (await veh.listVehicles(them)).length === 1);
ok('I cannot read their car by id', (await veh.getVehicle(me, theirs!.id)) === null);
ok('I cannot delete their car', (await veh.deleteVehicle(me, theirs!.id)) === false);
ok('their car is still there', (await veh.listVehicles(them)).length === 1);
ok('a car with nothing but a VIN is allowed', !!(await veh.createVehicle({ userId: me, vin: 'WP0AB2A99BS7' })));

// ── 5. The matcher ────────────────────────────────────────────────────────
section('5. the generation matcher');
const models: [string, string, string, string, number, number][] = [
  ['porsche/911-964', 'Porsche', '911', '964', 1989, 1994],
  ['porsche/911-993', 'Porsche', '911', '993', 1994, 1998],
  ['porsche/911-930-turbo', 'Porsche', '911 Turbo', '930', 1975, 1989],
  ['porsche/carrera-3-2', 'Porsche', '911 Carrera 3.2', 'G-Series', 1984, 1989],
  ['datsun/240z', 'Datsun', '240Z', 'S30', 1969, 1973],
  ['bmw/m3-e30', 'BMW', 'M3', 'E30', 1986, 1991],
];
for (const [slug, mk, md, gen, ys, ye] of models) {
  await sql`INSERT INTO vehicle_models (slug, make, model, generation, year_start, year_end, status)
            VALUES (${slug}, ${mk}, ${md}, ${gen}, ${ys}, ${ye}, 'published')
            ON CONFLICT (slug) DO NOTHING`;
}
const mt = await import('../src/lib/stable/match.js');

const p90 = await mt.matchModelPage({ make: 'Porsche', model: '911', year: 1990 });
ok('1990 911 -> 964', p90.match?.slug === 'porsche/911-964', String(p90.match?.slug));
const p95 = await mt.matchModelPage({ make: 'Porsche', model: '911', year: 1995 });
ok('1995 911 -> 993', p95.match?.slug === 'porsche/911-993', String(p95.match?.slug));

const p85 = await mt.matchModelPage({ make: 'Porsche', model: '911', year: 1985 });
ok('1985 911 refuses to guess', p85.match === null, String(p85.match?.slug));
ok('1985 911 offers the candidates instead', p85.alternatives.length >= 2, String(p85.alternatives.length));

const parsed = await mt.parseCarText('1972 Datsun 240Z');
ok('free text parses', parsed.year === 1972 && parsed.make === 'Datsun' && parsed.model === '240Z', JSON.stringify(parsed));
const z = await mt.matchModelPage({ make: 'Datsun', model: '240Z', year: 1972 });
ok('1972 240Z -> S30', z.match?.slug === 'datsun/240z', String(z.match?.slug));
const junk = await mt.matchModelPage({ make: 'Datsun', model: 'spaceship', year: 2050 });
ok('nonsense matches nothing', junk.match === null, String(junk.match?.slug));
const wrongYear = await mt.matchModelPage({ make: 'BMW', model: 'M3', year: 2020 });
ok('an M3 outside every published span matches nothing', wrongYear.match === null, String(wrongYear.match?.slug));
ok('no specialists invented from empty marques', (await mt.specialistsForMake('Porsche')).length === 0);

// ── 6. Listing attribution + the vehicle backfill ─────────────────────────
section('6. a listing gets an owner, and the backfill links it to a car');
await sql`INSERT INTO listings (slug, year, make, model, price, status, seller_id, vin, chassis, matching_numbers, provenance)
          VALUES ('1972-datsun-240z-test', 1972, 'Datsun', '240Z', 48000, 'active', ${me}, 'HLS30012345', '8891', 'yes', 'Two owners from new.')`;
const [l] = await sql`SELECT id, seller_id, chassis, matching_numbers, vehicle_id FROM listings WHERE slug = '1972-datsun-240z-test'`;
ok('the new collector columns store', l.chassis === '8891' && l.matching_numbers === 'yes');
ok('the listing has an owner', Number(l.seller_id) === me);
ok('vehicle_id starts null', l.vehicle_id === null);

// what scripts/backfill-vehicles.mjs does, as one atomic statement
const done = await sql`
  WITH v AS (
    INSERT INTO vehicles (user_id, year, make, model, vin, visibility, status)
    VALUES (${l.seller_id}, 1972, 'Datsun', '240Z', 'HLS30012345', 'private', 'owned')
    RETURNING id
  )
  UPDATE listings SET vehicle_id = v.id FROM v
   WHERE listings.id = ${l.id} AND listings.vehicle_id IS NULL
  RETURNING listings.vehicle_id`;
ok('backfill links the listing to a car', done.length === 1 && done[0].vehicle_id != null);
const rerun = await sql`SELECT id FROM listings WHERE id = ${l.id} AND vehicle_id IS NULL`;
ok('a re-run would skip it (idempotent)', rerun.length === 0);
ok('the car now shows in the owner Stable', (await veh.listVehicles(me)).some((v) => v.vin === 'HLS30012345'));

// deleting a car must not be blocked by a listing pointing at it
const [linked] = await sql`SELECT vehicle_id FROM listings WHERE id = ${l.id}`;
ok('deleting a linked car is allowed', await veh.deleteVehicle(me, Number(linked.vehicle_id)));
const [after] = await sql`SELECT vehicle_id FROM listings WHERE id = ${l.id}`;
ok('the listing survives with a null link (ON DELETE SET NULL)', after.vehicle_id === null);

// ── 7. Identity FKs on the inbound tables ─────────────────────────────────
section('7. the write paths can record WHO');
for (const [t, col] of [['messages', 'user_id'], ['provider_reviews', 'user_id'], ['registry_submissions', 'user_id'], ['gig_orders', 'buyer_user_id'], ['provider_applications', 'user_id']]) {
  const r = await sql`SELECT 1 FROM information_schema.columns WHERE table_name = ${t} AND column_name = ${col}`;
  ok(`${t}.${col} exists`, r.length === 1);
}
await sql`INSERT INTO messages (sender_name, sender_email, message_text, user_id, type, status)
          VALUES ('Chris', 'chris.new@example.com', 'Is it still available?', ${me}, 'inquiry', 'new')`;
const mine2 = await sql`SELECT id FROM messages WHERE user_id = ${me}`;
ok('an enquiry is attributable to a member', mine2.length === 1);

console.log(`\n${'='.repeat(52)}\n  ${pass} passed, ${fail} failed\n${'='.repeat(52)}`);
if (fails.length) { console.log('\nFailures:'); fails.forEach((f) => console.log('  - ' + f)); }
process.exit(fail ? 1 : 0);
