/**
 * One Anthropic client for every AI surface (2026-10-14).
 *
 * Before this, four files each built their own client and hardcoded a model
 * string, so moving to a new model meant editing four places and nobody could
 * see what a call cost. Everything model-related now lives here:
 *
 *   MODELS        which model does which job. Sonnet for writing that goes on
 *                 the site, Haiku for extraction and repair. Never Opus or
 *                 Fable on the Console credits (project rule).
 *   runAgent()    one call with server tools (web search, web fetch). Streams
 *                 so long research calls never hit the SDK's non-streaming
 *                 timeout guard, and continues on `pause_turn`, which the API
 *                 returns when a server-tool loop runs long.
 *   parseJson()   tolerant JSON extraction, with a cheap Haiku repair pass
 *                 using structured outputs when the first parse fails.
 *   logUsage()    one console line per call with tokens and an estimated
 *                 dollar cost. Read it in Vercel logs; the Console usage page
 *                 is the bill of record. No DB table on purpose (Neon cost).
 *
 * The key lives in Vercel only (ANTHROPIC_API_KEY, fullysorted-prod
 * workspace). Never on the Mac.
 */

import Anthropic from '@anthropic-ai/sdk';

export const MODELS = {
  /** Writing that a person reads on the site: model histories, profiles, listings. */
  write: 'claude-sonnet-5-5',
  /** Extraction, classification, JSON repair. About 20x cheaper than Sonnet. */
  fast: 'claude-haiku-5-5',
} as const;

export type ModelId = (typeof MODELS)[keyof typeof MODELS];
export type Effort = 'low' | 'medium' | 'high';

// USD per million tokens, list price, checked 2026-10-14 against
// platform.claude.com/docs/en/about-claude/pricing. Haiku 5.5 doubles past a
// 100k-token prompt, five times over; the drafters cap fetch sizes to stay under.
const PRICES: Record<string, { in: number; out: number; cacheWrite: number; cacheRead: number }> = {
  'claude-sonnet-5-5': { in: 2, out: 10, cacheWrite: 2.5, cacheRead: 0.1 },
  'claude-haiku-5-5': { in: 0.1, out: 0.5, cacheWrite: 0.125, cacheRead: 0.01 },
};
const WEB_SEARCH_USD = 0.01; // $10 per 1,000 searches

let _client: Anthropic | null = null;
export function getAnthropic(): Anthropic {
  if (!_client) {
    if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY is not set');
    _client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  }
  return _client;
}

export function aiConfigured(): boolean {
  return !!process.env.ANTHROPIC_API_KEY;
}

/** Server tools. Dynamic filtering (the 2026 versions) trims search and page
 *  content in a sandbox before it reaches the context, which is the single
 *  biggest token saver on research calls. */
export function webSearchTool(opts: { maxUses: number; blockedDomains?: string[] }) {
  return {
    type: 'web_search_20260318',
    name: 'web_search',
    max_uses: opts.maxUses,
    ...(opts.blockedDomains?.length ? { blocked_domains: opts.blockedDomains } : {}),
  };
}

export function webFetchTool(opts: { maxUses: number; maxContentTokens: number; blockedDomains?: string[] }) {
  return {
    type: 'web_fetch_20260318',
    name: 'web_fetch',
    max_uses: opts.maxUses,
    max_content_tokens: opts.maxContentTokens,
    ...(opts.blockedDomains?.length ? { blocked_domains: opts.blockedDomains } : {}),
  };
}

export interface UsageTotals {
  input: number;
  output: number;
  cacheWrite: number;
  cacheRead: number;
  searches: number;
  fetches: number;
  usd: number;
}

function emptyUsage(): UsageTotals {
  return { input: 0, output: 0, cacheWrite: 0, cacheRead: 0, searches: 0, fetches: 0, usd: 0 };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addUsage(total: UsageTotals, model: string, u: any) {
  if (!u) return;
  const p = PRICES[model] ?? PRICES[MODELS.write];
  const input = u.input_tokens ?? 0;
  const output = u.output_tokens ?? 0;
  const cw = u.cache_creation_input_tokens ?? 0;
  const cr = u.cache_read_input_tokens ?? 0;
  const searches = u.server_tool_use?.web_search_requests ?? 0;
  const fetches = u.server_tool_use?.web_fetch_requests ?? 0;
  total.input += input;
  total.output += output;
  total.cacheWrite += cw;
  total.cacheRead += cr;
  total.searches += searches;
  total.fetches += fetches;
  total.usd +=
    (input * p.in + output * p.out + cw * p.cacheWrite + cr * p.cacheRead) / 1_000_000 +
    searches * WEB_SEARCH_USD;
}

export function logUsage(feature: string, model: string, u: UsageTotals, extra = '') {
  console.log(
    `[ai] ${feature} model=${model} in=${u.input} out=${u.output} cacheW=${u.cacheWrite} cacheR=${u.cacheRead} ` +
      `searches=${u.searches} fetches=${u.fetches} est=$${u.usd.toFixed(4)}${extra ? ' ' + extra : ''}`
  );
}

export interface AgentCall {
  feature: string;
  model: ModelId;
  effort: Effort;
  /** Stable instructions. Cached, so keep anything per-request out of it. */
  system: string;
  user: string;
  tools?: unknown[];
  maxTokens: number;
}

export interface AgentResult {
  text: string;
  usage: UsageTotals;
  stopReason: string | null;
}

/**
 * One research or writing call. Returns the concatenated final text.
 * Continues up to three times on `pause_turn` (long server-tool loops).
 */
export async function runAgent(call: AgentCall): Promise<AgentResult> {
  const client = getAnthropic();
  const usage = emptyUsage();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: any[] = [{ role: 'user', content: call.user }];
  let stopReason: string | null = null;
  const textParts: string[] = [];

  for (let turn = 0; turn < 4; turn++) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {
      model: call.model,
      max_tokens: call.maxTokens,
      // The system prompt is the same on every call of a feature, so cache it.
      system: [{ type: 'text', text: call.system, cache_control: { type: 'ephemeral' } }],
      messages,
      output_config: { effort: call.effort },
      ...(call.tools?.length ? { tools: call.tools } : {}),
    };
    const msg = await client.messages.stream(params).finalMessage();
    addUsage(usage, call.model, msg.usage);
    stopReason = msg.stop_reason ?? null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const blocks = msg.content as any[];
    if (stopReason === 'pause_turn') {
      messages.push({ role: 'assistant', content: blocks });
      continue;
    }
    // Only the text after the last tool block is the answer; earlier text is
    // the model narrating its research.
    let lastTool = -1;
    blocks.forEach((b, i) => {
      if (b?.type && b.type !== 'text' && b.type !== 'thinking' && b.type !== 'redacted_thinking') lastTool = i;
    });
    for (const b of blocks.slice(lastTool + 1)) if (b?.type === 'text') textParts.push(b.text as string);
    break;
  }

  logUsage(call.feature, call.model, usage, `stop=${stopReason}`);
  return { text: textParts.join('\n'), usage, stopReason };
}

/** Pull a JSON object out of model text, tolerating fences or stray prose. */
export function extractJsonObject(text: string): unknown {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.indexOf('{');
  const end = candidate.lastIndexOf('}');
  if (start === -1 || end === -1) throw new Error('No JSON object in model response');
  return JSON.parse(candidate.slice(start, end + 1));
}

/**
 * Parse JSON; on failure, ask Haiku to repair it into the given schema using
 * structured outputs (guaranteed-valid JSON). Costs a fraction of a cent and
 * saves a research call that already cost dollars.
 */
export async function parseJson<T>(
  feature: string,
  text: string,
  schema: Record<string, unknown>
): Promise<{ value: T; repaired: boolean; usd: number }> {
  try {
    return { value: extractJsonObject(text) as T, repaired: false, usd: 0 };
  } catch {
    const client = getAnthropic();
    const usage = emptyUsage();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {
      model: MODELS.fast,
      max_tokens: 16000,
      output_config: { effort: 'low', format: { type: 'json_schema', schema } },
      messages: [
        {
          role: 'user',
          content:
            'The text below was meant to be a single JSON object but does not parse. ' +
            'Return the same content as valid JSON matching the schema. Do not add, invent or drop facts.\n\n' +
            text.slice(0, 120_000),
        },
      ],
    };
    const msg = await client.messages.stream(params).finalMessage();
    addUsage(usage, MODELS.fast, msg.usage);
    logUsage(`${feature}:repair`, MODELS.fast, usage);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const out = (msg.content as any[]).find((b) => b?.type === 'text')?.text ?? '';
    return { value: JSON.parse(out) as T, repaired: true, usd: usage.usd };
  }
}

/** House punctuation, applied mechanically to prose fields: no em or en dashes. */
export function houseDashes(s: string): string {
  if (!s) return s;
  return s
    .replace(/(\d)\s*[–—]\s*(\d)/g, '$1-$2')
    .replace(/\s*—\s*/g, ' - ')
    .replace(/\s*–\s*/g, ' - ');
}

/** Copy the site never prints. Shared by every drafter's post-check. */
export const BANNED_COPY = [
  'vetted',
  'verified shop',
  'get verified',
  'we verify',
  'guaranteed',
  'no commission',
  'zero commission',
  'iconic',
  'legendary',
  'holy grail',
  'unicorn',
  'investment-grade',
  'world-class',
  'second to none',
  'passion for',
  'one-stop shop',
];

export function bannedCopyHits(text: string): string[] {
  const t = text.toLowerCase();
  const hits = BANNED_COPY.filter((w) => t.includes(w));
  if (text.includes('!')) hits.push('exclamation mark');
  return hits;
}
