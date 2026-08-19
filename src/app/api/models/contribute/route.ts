import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { deliver, undeliverableResponse } from '@/lib/submissions';

/**
 * POST /api/models/contribute — public. An owner submits a correction to a
 * model history, or a story about their car.
 *
 * Nothing submitted here is ever shown publicly without review. The model pages
 * promise cited, cross-checked research; unmoderated text rendered beside that
 * would quietly break the promise the whole encyclopedia rests on.
 *
 * Goes through deliver() so the contributor is only told it worked if it
 * actually reached us — see src/lib/submissions.ts.
 */
const KINDS = ['correction', 'story'] as const;
const SECTIONS = ['summary', 'history', 'production', 'specs', 'problems', 'market', 'general'] as const;

export async function POST(req: NextRequest) {
  const limited = rateLimit(req, 'model-contribute', 5, 60_000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const s = (v: unknown, max = 500) => (v == null ? null : String(v).trim().slice(0, max) || null);

  const modelId = parseInt(String(body.modelId ?? ''), 10);
  const modelName = s(body.modelName, 200) || 'a model page';
  const kind = KINDS.includes(String(body.kind) as typeof KINDS[number])
    ? String(body.kind)
    : 'correction';
  const section = SECTIONS.includes(String(body.section) as typeof SECTIONS[number])
    ? String(body.section)
    : 'general';
  const contribution = s(body.body, 4000);
  const sourceUrl = s(body.sourceUrl, 1000);
  const name = s(body.name, 200);
  const email = s(body.email, 255);
  const credential = s(body.credential, 200);

  if (!Number.isFinite(modelId)) {
    return NextResponse.json({ error: 'Missing model reference.' }, { status: 400 });
  }
  if (!contribution || contribution.length < 20) {
    return NextResponse.json(
      { error: 'Tell us a little more — at least a sentence or two.' },
      { status: 400 }
    );
  }
  // A correction without a source is an opinion. Say so plainly rather than
  // accepting it and quietly weighting it the same as a cited claim.
  if (kind === 'correction' && !sourceUrl) {
    return NextResponse.json(
      { error: 'For a correction, please include a source we can check — a link, book, or document reference.' },
      { status: 400 }
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'That email address does not look right.' }, { status: 400 });
  }

  const result = await deliver({
    label: `model ${kind}`,
    save: process.env.DATABASE_URL
      ? async () => {
          const { neon } = await import('@neondatabase/serverless');
          const sql = neon(process.env.DATABASE_URL!);
          await sql`
            INSERT INTO model_contributions
              (model_id, kind, section, body, source_url, submitter_name, submitter_email, submitter_credential, status)
            VALUES (${modelId}, ${kind}, ${section}, ${contribution}, ${sourceUrl},
                    ${name}, ${email}, ${credential}, 'pending')
          `;
        }
      : undefined,
    notify: async () => {
      const { notifyModelContribution } = await import('@/lib/email');
      return notifyModelContribution({
        modelName, kind, section, body: contribution,
        sourceUrl, name, email, credential,
      });
    },
  });

  if (!result.delivered) {
    return undeliverableResponse(`${kind === 'correction' ? 'Correction' : 'Story'}: ${modelName}`, {
      Page: modelName,
      Type: kind,
      Section: section,
      Source: sourceUrl,
      Name: name,
      Email: email,
      'About you': credential,
      Contribution: contribution,
    });
  }

  return NextResponse.json({
    success: true,
    message:
      kind === 'correction'
        ? "Thank you — every correction gets read. If it checks out, the page gets updated and you'll be credited."
        : "Thank you — every one of these gets read. If it goes on the page, you'll be credited.",
  });
}
