import Anthropic from '@anthropic-ai/sdk';

let _anthropic: Anthropic | null = null;

function getAnthropic(): Anthropic {
  if (!_anthropic) {
    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY is not set');
    }
    _anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return _anthropic;
}

interface VehicleInfo {
  year: number;
  make: string;
  model: string;
  trim?: string;
  mileage?: number;
  transmission?: string;
  engine?: string;
  exteriorColor?: string;
  interiorColor?: string;
  bodyStyle?: string;
  condition?: string;
  sellerNotes?: string;
}

interface GeneratedContent {
  description: string;
  highlights: string[];
  chrisTake: string;
}

export async function generateListingDescription(
  vehicle: VehicleInfo
): Promise<GeneratedContent> {
  const vehicleDetails = [
    `${vehicle.year} ${vehicle.make} ${vehicle.model}${vehicle.trim ? ` ${vehicle.trim}` : ''}`,
    vehicle.mileage ? `${vehicle.mileage.toLocaleString()} miles` : null,
    vehicle.transmission,
    vehicle.engine,
    vehicle.exteriorColor ? `${vehicle.exteriorColor} exterior` : null,
    vehicle.interiorColor ? `${vehicle.interiorColor} interior` : null,
    vehicle.bodyStyle,
    vehicle.condition,
  ]
    .filter(Boolean)
    .join(', ');

  const prompt = `You are Chris Peterson, a 44-year-old collector car specialist from San Diego with 25 years in the industry. Your grandfather Robert O. Peterson founded Jack in the Box in 1951. You're knowledgeable, approachable, and passionate about collector cars. You speak like a car enthusiast talking to a friend — no dealer speak, no fluff.

Generate three things for this listing:

VEHICLE: ${vehicleDetails}
${vehicle.sellerNotes ? `SELLER'S NOTES: ${vehicle.sellerNotes}` : ''}

1. **DESCRIPTION** (2-3 paragraphs): Write a compelling listing description in Chris's voice. Be specific about what makes this car special. Mention era-appropriate details. Sound like an enthusiast, not a salesman. Include what a buyer should know — the good and the honest.

2. **HIGHLIGHTS** (5-7 bullet points): Key selling points. Short, punchy. What would catch a buyer's eye scrolling through listings.

3. **CHRIS'S TAKE** (2-3 sentences): Your personal, honest opinion. Would you buy it? What's the play here? Is it a driver, a project, a flipper, or a keeper?

Return ONLY valid JSON in this exact format:
{
  "description": "...",
  "highlights": ["...", "..."],
  "chrisTake": "..."
}`;

  const anthropic = getAnthropic();
  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 1500,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  const text = message.content[0].type === 'text' ? message.content[0].text : '';

  try {
    // Extract JSON from the response (handle potential markdown wrapping)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }
    return JSON.parse(jsonMatch[0]) as GeneratedContent;
  } catch {
    // Fallback if parsing fails
    return {
      description: text,
      highlights: [],
      chrisTake: '',
    };
  }
}
