/**
 * AI model-page generation agent (Phase 1).
 *
 * Given a make / model / generation, this drafts a structured, CITED history
 * page by researching across multiple independent public sources via Claude's
 * web-search tool, following the Sourcing & Truth-Seeking methodology:
 *
 *   - Cross-check several independent sources (marque registries, factory
 *     records, reference books, reputable journalism, marque clubs).
 *   - Cite every non-obvious fact.
 *   - Show confidence and explain uncertainty.
 *   - When accounts conflict, present BOTH sides neutrally (a 'disputed' claim).
 *   - Never fabricate. Unknown → say "not documented".
 *
 * The output is ALWAYS written as status = 'draft'. A human reviews and
 * publishes it in /admin/models. This function never publishes anything.
 */

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

export const GENERATION_MODEL = 'claude-sonnet-4-6';

export interface GenSource {
  ref: string;
  title: string;
  url: string;
  publisher: string;
  sourceType:
    | 'manufacturer'
    | 'registry'
    | 'factory-record'
    | 'reference-book'
    | 'journalism'
    | 'club-forum';
  reliability: 'high' | 'medium' | 'low';
  notes?: string;
}

export interface GenClaim {
  section: 'summary' | 'history' | 'production' | 'specs' | 'problems' | 'market';
  claimText: string;
  confidence: 'high' | 'medium' | 'low';
  status: 'verified' | 'unverified' | 'disputed';
  sourceRefs: string[];
  conflictNote?: string;
}

export interface GeneratedModelPage {
  slug: string;
  make: string;
  model: string;
  generation: string | null;
  generationCode: string | null;
  yearStart: number | null;
  yearEnd: number | null;
  bodyStyles: string[];
  engines: string[];
  productionTotal: number | null;
  productionNotes: string;
  notableTrims: { name: string; note: string }[];
  specs: Record<string, string>;
  summary: string;
  history: string;
  marketNotes: string;
  whatToLookFor: string;
  commonProblems: string;
  valueTrajectory: string;
  overallConfidence: 'high' | 'medium' | 'low';
  sources: GenSource[];
  claims: GenClaim[];
}

const SYSTEM_PROMPT = `You are the research agent for Fully Sorted, a collector-car platform. You write deeply researched, scrupulously honest model-history pages. You are an expert in the collector-car market and in marque history.

NON-NEGOTIABLE METHODOLOGY:
1. Cross-check MULTIPLE INDEPENDENT sources before stating any non-obvious fact. Prefer marque registries (e.g. barchetta.cc for Ferrari chassis), factory records (Marti for Ford, Kardex/Certificate of Authenticity for Porsche, Heritage Certificates for Jaguar/Aston), respected reference books, marque clubs (e.g. PCA), and reputable journalism (Hagerty, marque magazines). Use the web_search tool to find and verify them.
2. CITE every non-obvious fact. Each citation must be a real source you actually found via search — never invent a URL, title, or publisher.
3. SHOW CONFIDENCE and EXPLAIN UNCERTAINTY. Where a fact is thin, inferred, or contested, say so plainly.
4. When accounts CONFLICT, present BOTH sides neutrally as a 'disputed' claim with a conflictNote that lays out each version and its source. Do not pick a winner unless the evidence is decisive — and if it is, explain why.
5. NEVER FABRICATE. No invented provenance, production numbers, owners, or results. If something is unknown, write "not documented".
6. Do NOT copy any source's text or database verbatim. Synthesize in your own words and cite.

VOICE: knowledgeable enthusiast talking to a friend — direct, honest, specific. No dealer-speak, no hype.

OUTPUT: After researching, return ONLY a single JSON object (no prose before or after, no markdown fences) matching the requested schema. Narrative fields use lightweight markdown ("## Heading" and **bold** only).`;

function buildUserPrompt(make: string, model: string, generation?: string | null): string {
  const name = [make, model, generation && `(${generation})`].filter(Boolean).join(' ');
  return `Research and draft the model-history page for the ${name}.

First, search the web and cross-check at least 3 independent reputable sources. Then return a JSON object with EXACTLY these keys:

{
  "slug": "lowercase-make/model-or-generation, e.g. porsche/911-964",
  "make": "", "model": "", "generation": "" | null, "generationCode": "" | null,
  "yearStart": number|null, "yearEnd": number|null,
  "bodyStyles": [string], "engines": [string],
  "productionTotal": number|null, "productionNotes": "string with citations in prose",
  "notableTrims": [{"name":"","note":""}],
  "specs": {"Label":"Value"},
  "summary": "2-3 paragraphs",
  "history": "markdown with ## sections",
  "marketNotes": "honest market context; date-stamp value commentary; not a quote",
  "whatToLookFor": "buyer's notes",
  "commonProblems": "known faults",
  "valueTrajectory": "1 paragraph",
  "overallConfidence": "high"|"medium"|"low",
  "sources": [{"ref":"shortkey","title":"","url":"","publisher":"","sourceType":"manufacturer|registry|factory-record|reference-book|journalism|club-forum","reliability":"high|medium|low","notes":""}],
  "claims": [{"section":"summary|history|production|specs|problems|market","claimText":"","confidence":"high|medium|low","status":"verified|unverified|disputed","sourceRefs":["shortkey"],"conflictNote":"only when disputed"}]
}

Every entry in "sources" must be a real page you found via search. Every claim's sourceRefs must reference keys that exist in "sources". Include at least one 'disputed' claim if the sources genuinely disagree; do not manufacture disputes.`;
}

function extractJson(text: string): GeneratedModelPage {
  // Tolerate accidental prose or code fences around the JSON.
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start === -1 || end === -1) {
    throw new Error('No JSON object found in model agent response');
  }
  return JSON.parse(candidate.slice(start, end + 1)) as GeneratedModelPage;
}

export interface GenerateOptions {
  make: string;
  model: string;
  generation?: string | null;
  maxSearches?: number;
}

export async function generateModelPage(
  opts: GenerateOptions
): Promise<{ page: GeneratedModelPage; model: string }> {
  const anthropic = getAnthropic();

  // Server-side web search so the agent can actually cross-check sources.
  // Typed loosely so this compiles across SDK versions (the web-search server
  // tool may not be in every SDK's exported tool union).
  const webSearchTool = {
    type: 'web_search_20250305',
    name: 'web_search',
    max_uses: opts.maxSearches ?? 8,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const message = await anthropic.messages.create({
    model: GENERATION_MODEL,
    max_tokens: 8000,
    system: SYSTEM_PROMPT,
    tools: [webSearchTool] as any,
    messages: [
      { role: 'user', content: buildUserPrompt(opts.make, opts.model, opts.generation) },
    ],
  });

  // Concatenate all returned text blocks (web search interleaves tool blocks).
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const text = (message.content as any[])
    .filter((b) => b?.type === 'text')
    .map((b) => b.text as string)
    .join('\n');

  const page = extractJson(text);
  return { page, model: GENERATION_MODEL };
}
