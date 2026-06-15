import Anthropic from '@anthropic-ai/sdk';

let _anthropic: Anthropic | null = null;
function getAnthropic(): Anthropic {
  if (!_anthropic) {
    if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY is not set');
    _anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return _anthropic;
}

export interface GigCopyInput {
  service: string;       // what they do, e.g. "mobile detailing for air-cooled Porsches"
  category?: string;
  experience?: string;   // free text the freelancer typed
  area?: string;
}

export interface GigCopyResult {
  title: string;                 // "I will ..."
  description: string;           // 2 short paragraphs
  packageSuggestions: {
    tier: 'basic' | 'standard' | 'premium';
    title: string;
    suggestedPrice: number;
    deliveryDays: number;
    features: string[];
  }[];
}

// Helps a freelancer turn a few plain inputs into a polished gig + package draft.
// Output is a STARTING POINT the freelancer edits — never auto-published.
export async function generateGigCopy(input: GigCopyInput): Promise<GigCopyResult> {
  const prompt = `You help independent collector-car service providers write their first "gig" listing (Fiverr-style) for the Fully Sorted marketplace. Be practical, specific, and honest — no hype.

THE PROVIDER DOES: ${input.service}
${input.category ? `CATEGORY: ${input.category}` : ''}
${input.area ? `SERVICE AREA: ${input.area}` : ''}
${input.experience ? `IN THEIR WORDS: ${input.experience}` : ''}

Produce a gig draft with three price tiers (Basic / Standard / Premium). Prices are rough US-dollar starting points the provider will adjust — base them on realistic collector-car service rates. Return ONLY valid JSON:
{
  "title": "I will ... (max ~70 chars, starts with 'I will')",
  "description": "2 short paragraphs, plain and specific",
  "packageSuggestions": [
    {"tier":"basic","title":"","suggestedPrice":0,"deliveryDays":0,"features":["",""]},
    {"tier":"standard","title":"","suggestedPrice":0,"deliveryDays":0,"features":["",""]},
    {"tier":"premium","title":"","suggestedPrice":0,"deliveryDays":0,"features":["",""]}
  ]
}`;

  const anthropic = getAnthropic();
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1200,
    messages: [{ role: 'user', content: prompt }],
  });
  const text = message.content[0].type === 'text' ? message.content[0].text : '';
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) throw new Error('No JSON in gig-copy response');
  return JSON.parse(match[0]) as GigCopyResult;
}
