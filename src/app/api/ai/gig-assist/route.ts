import { NextRequest, NextResponse } from 'next/server';
import { generateGigCopy } from '@/lib/ai/generate-gig-copy';

export async function POST(request: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: 'AI service not configured' }, { status: 503 });
  }
  try {
    const body = await request.json();
    if (!body.service) {
      return NextResponse.json({ error: 'Tell us what you do first' }, { status: 400 });
    }
    const result = await generateGigCopy({
      service: body.service,
      category: body.category,
      experience: body.experience,
      area: body.area,
    });
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json({ error: (e as Error)?.message || 'Failed to generate' }, { status: 500 });
  }
}
