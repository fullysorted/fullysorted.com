import { NextRequest, NextResponse } from 'next/server';
import { generateGigCopy } from '@/lib/ai/generate-gig-copy';
import { rateLimit } from '@/lib/rate-limit';

const cap = (v: unknown, n: number) => (v == null ? undefined : String(v).slice(0, n));

export async function POST(request: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'AI service not configured' }, { status: 503 });
  }
  // Abuse control: these calls cost money (Anthropic API). Throttle hard.
  const limited = rateLimit(request, 'ai', 8, 60_000);
  if (limited) return limited;
  try {
    const body = await request.json();
    if (!body.service) {
      return NextResponse.json({ error: 'Tell us what you do first' }, { status: 400 });
    }
    const result = await generateGigCopy({
      service: cap(body.service, 600)!,
      category: cap(body.category, 100),
      experience: cap(body.experience, 400),
      area: cap(body.area, 200),
    });
    return NextResponse.json(result);
  } catch (e) {
    console.error('gig-assist error:', e);
    return NextResponse.json({ error: 'Failed to generate. Please try again.' }, { status: 500 });
  }
}
