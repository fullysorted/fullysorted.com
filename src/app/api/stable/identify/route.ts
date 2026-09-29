import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { parseCarText, matchModelPage, modelPageBySlug, specialistsForMake, type ModelLookup } from '@/lib/stable/match';
import { isPlausibleVin, decodeVin } from '@/lib/vin/nhtsa';
import { decodeChassis, describeDecode } from '@/lib/vin/chassis';

/**
 * POST /api/stable/identify -- PUBLIC, no account, no signup.
 *
 * One field, "What have you got?", accepting a VIN or plain text. VIN is the
 * fast path and never the required one: older owners often will not or cannot
 * find a VIN, and a form that insists loses them.
 *
 * This route exists to deliver the payoff BEFORE anything is asked for. It
 * returns the car, its research page and specialists for the marque. Only
 * after that does anything mention keeping it, because the account is the save
 * button, not the turnstile.
 *
 * It writes nothing. Saving is POST /api/stable/vehicles, which needs a
 * signed-in member.
 */
export async function POST(request: NextRequest) {
  const limited = rateLimit(request, 'stable-identify', 15, 60_000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const input = String(body.input ?? '').trim().slice(0, 200);
  if (!input) {
    return NextResponse.json({ error: 'Tell us what you have got.' }, { status: 400 });
  }

  let year: number | null = null;
  let make: string | null = null;
  let model: string | null = null;
  let trim: string | null = null;
  let vin: string | null = null;
  let vinNote: string | null = null;

  const candidate = input.replace(/\s/g, '').toUpperCase();

  // Pre-1981 chassis numbers first. NHTSA knows nothing about a 1967 911, and
  // for most cars on this site the chassis number is the identity. The make
  // the seller already typed (if any) unlocks the range-only systems.
  const makeHint = String(body.make ?? '').trim().slice(0, 40) || null;
  const chassis = candidate.length === 17 ? null : decodeChassis(input, makeHint);

  /**
   * NHTSA's vPIC is a free government service and is occasionally slow. This
   * route is public and rate limited per IP, so an unbounded fetch is a way to
   * tie up a serverless function with someone else's outage. Six seconds, then
   * fall back to reading the text, which for a collector car is often the
   * better answer anyway.
   */
  const withTimeout = <T,>(p: Promise<T>, ms = 6000): Promise<T> =>
    Promise.race([
      p,
      new Promise<T>((_, reject) =>
        setTimeout(() => reject(new Error('VIN lookup timed out')), ms),
      ),
    ]);

  if (chassis) {
    year = chassis.year;
    make = chassis.make;
    model = chassis.model;
    trim = chassis.variant;
  } else if (isPlausibleVin(candidate)) {
    vin = candidate;
    try {
      const decoded = await withTimeout(decodeVin(candidate));
      year = decoded.modelYear ? parseInt(decoded.modelYear, 10) || null : null;
      make = decoded.make;
      model = decoded.model;
      trim = decoded.trim || decoded.series || null;
      // A failed check digit is worth saying out loud rather than silently
      // returning a car that is not theirs.
      if (decoded.errorText && decoded.errorCode && decoded.errorCode !== '0') {
        vinNote = decoded.errorText;
      }
      // Pre-1981 VINs are shorter and vPIC often returns nothing useful. Fall
      // back to reading the text, which for a collector car is usually better.
      if (!make && !model) {
        const parsed = await parseCarText(input);
        year = parsed.year ?? year;
        make = parsed.make;
        model = parsed.model;
      }
    } catch (err) {
      console.error('[stable/identify] VIN decode failed:', err);
      const parsed = await parseCarText(input);
      year = parsed.year;
      make = parsed.make;
      model = parsed.model;
    }
  } else {
    const parsed = await parseCarText(input);
    year = parsed.year;
    make = parsed.make;
    model = parsed.model;
  }

  const lookupYear = year ?? chassis?.yearRange?.[0] ?? null;
  const findPage = async (): Promise<ModelLookup> => {
    if (chassis?.slug) {
      const direct = await modelPageBySlug(chassis.slug, lookupYear, chassis.confidence);
      if (direct) return { match: direct, alternatives: [] };
    }
    if (chassis && !chassis.model) return { match: null, alternatives: [] };
    return matchModelPage({ make, model, year: lookupYear });
  };
  const [lookupResult, specialists] = await Promise.all([
    findPage(),
    specialistsForMake(make),
  ]);

  return NextResponse.json({
    car: { year, make, model, trim, vin },
    vinNote,
    // Set when the input decoded as a pre-1981 chassis number or VIN.
    chassis: chassis
      ? {
          number: chassis.chassis,
          // Where the form should put it: US makes called theirs a VIN.
          field: /VIN/.test(chassis.system) ? 'vin' : 'chassis',
          summary: describeDecode(chassis),
          system: chassis.system,
          confidence: chassis.confidence,
          yearRange: chassis.yearRange,
          body: chassis.body,
          market: chassis.market,
          engine: chassis.engine,
          plant: chassis.plant,
          candidates: chassis.candidates,
          notes: chassis.notes,
        }
      : null,
    // Null when we are not confident. A wrong model page is worse than none.
    modelPage: lookupResult.match,
    // Set when several published generations fit the car equally well and
    // nothing in the input separates them. The caller should ask rather than
    // pick: "1985 Porsche 911" is genuinely three different cars.
    modelAlternatives: lookupResult.alternatives,
    specialists,
  });
}
