import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { generateListingDescription } from '@/lib/ai/generate-description';
import { rateLimit } from '@/lib/rate-limit';
import { AI_ASSIST_ENABLED } from '@/lib/features';

/**
 * POST /api/ai/describe: the /sell listing writer.
 *
 * Gates, per the credits plan: AI_ASSIST_ENABLED, a configured key, a signed-in
 * seller, and five drafts an hour per seller (about five per listing, since a
 * listing is written in one sitting).
 *
 * "What needs attention" is asked once: if the seller leaves it empty and has
 * not confirmed "none", the route answers { ask } instead of writing, and the
 * form shows the question. Buyers trust listings that admit something.
 */
export async function POST(request: NextRequest) {
  try {
    if (!AI_ASSIST_ENABLED) {
      return NextResponse.json({ error: 'The listing writer is turned off right now.' }, { status: 503 });
    }
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json({ error: 'The listing writer is not configured.' }, { status: 503 });
    }
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Sign in (top right) to use the listing writer. Your form stays as it is.', code: 'signin' }, { status: 401 });
    }
    const limited = rateLimit(request, `ai-describe:${userId}`, 5, 60 * 60_000);
    if (limited) {
      return NextResponse.json({ error: 'That is five drafts this hour. Edit the last one by hand, or try again later.' }, { status: 429 });
    }

    const body = await request.json();
    const s = (k: string, n: number) => (body?.[k] == null ? '' : String(body[k]).trim().slice(0, n));
    const year = parseInt(s('year', 4), 10);
    const make = s('make', 60);
    const model = s('model', 80);
    if (!year || !make || !model) {
      return NextResponse.json({ error: 'Year, make and model are required.' }, { status: 400 });
    }

    const attention = s('attention', 1500);
    if (!attention && body?.noIssuesConfirmed !== true) {
      return NextResponse.json({ ask: 'Nothing needs attention? Buyers trust listings that admit something.' });
    }

    const mileage = parseInt(s('mileage', 9).replace(/[^0-9]/g, ''), 10);
    const result = await generateListingDescription({
      year,
      make,
      model,
      trim: s('trim', 80) || undefined,
      mileage: Number.isFinite(mileage) ? mileage : undefined,
      transmission: s('transmission', 60) || undefined,
      engine: s('engine', 120) || undefined,
      exteriorColor: s('exteriorColor', 60) || undefined,
      interiorColor: s('interiorColor', 60) || undefined,
      bodyStyle: s('bodyStyle', 60) || undefined,
      condition: s('condition', 60) || undefined,
      sellerNotes: s('sellerNotes', 3000) || undefined,
      attention: attention || 'none',
    });

    return NextResponse.json({ description: result.description, highlights: result.highlights, expertTake: '' });
  } catch (error) {
    console.error('[ai] listing-description failed:', (error as Error)?.message || error);
    return NextResponse.json({ error: 'The writer did not come through. Try again, or write it yourself below.' }, { status: 500 });
  }
}
