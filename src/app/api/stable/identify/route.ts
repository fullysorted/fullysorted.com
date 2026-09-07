import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { parseCarText, matchModelPage, specialistsForMake } from '@/lib/stable/match';
import { isPlausibleVin, decodeVin } from '@/lib/vin/nhtsa';

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

  if (isPlausibleVin(candidate)) {
    vin = candidate;
    try {
      const decoded = await decodeVin(candidate);
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

  const [modelPage, specialists] = await Promise.all([
    matchModelPage({ make, model, year }),
    specialistsForMake(make),
  ]);

  return NextResponse.json({
    car: { year, make, model, trim, vin },
    vinNote,
    // Null when we are not confident. A wrong model page is worse than none.
    modelPage,
    specialists,
  });
}
