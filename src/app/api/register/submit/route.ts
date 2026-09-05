import { NextRequest, NextResponse } from 'next/server';
import { rateLimit } from '@/lib/rate-limit';
import { deliver, undeliverableResponse } from '@/lib/submissions';
import { normalizeChassis, normalizeVin } from '@/lib/register/chassis';

/**
 * POST /api/register/submit, public. A reader adds a record, corrects one, or
 * reports owning a car in the Chassis Register.
 *
 * Everything lands in registry_submissions as pending. The only way a
 * submission reaches the public register is an admin approving it in
 * /admin/register, and even then it is rendered as owner-reported forever.
 * Names and email addresses are stored for follow-up and never rendered.
 */
const KINDS = ['event', 'correction', 'ownership'] as const;
const RELATIONS = ['owner', 'former_owner', 'dealer', 'historian', 'other'] as const;

export async function POST(req: NextRequest) {
  const limited = rateLimit(req, 'register-submit', 5, 60_000);
  if (limited) return limited;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const s = (v: unknown, max = 500) => (v == null ? null : String(v).trim().slice(0, max) || null);

  const modelSlug = (s(body.modelSlug, 300) || '').toLowerCase();
  if (!/^[a-z0-9-]+\/[a-z0-9-]+$/.test(modelSlug)) {
    return NextResponse.json({ error: 'Missing model reference.' }, { status: 400 });
  }
  const kindRaw = String(body.kind ?? '');
  if (!(KINDS as readonly string[]).includes(kindRaw)) {
    return NextResponse.json({ error: 'Choose what kind of submission this is.' }, { status: 400 });
  }
  const kind = kindRaw as (typeof KINDS)[number];
  const relationRaw = String(body.submitterRelation ?? '');
  if (!(RELATIONS as readonly string[]).includes(relationRaw)) {
    return NextResponse.json({ error: 'Tell us your connection to the car.' }, { status: 400 });
  }
  const relation = relationRaw as (typeof RELATIONS)[number];

  const chassis = normalizeChassis(s(body.chassis, 64));
  if (!chassis || chassis.length > 64) {
    return NextResponse.json({ error: 'A chassis number is required.' }, { status: 400 });
  }
  const vinInput = s(body.vin, 64);
  const vin = vinInput ? normalizeVin(vinInput) : null;
  if (vinInput && (!vin || vin.length > 32)) {
    return NextResponse.json({ error: 'That VIN does not look right. Leave it blank if you are not sure.' }, { status: 400 });
  }
  const eventDate = s(body.eventDate, 10);
  if (eventDate && !/^\d{4}(-\d{2}(-\d{2})?)?$/.test(eventDate)) {
    return NextResponse.json({ error: 'Dates should be YYYY, YYYY-MM or YYYY-MM-DD.' }, { status: 400 });
  }
  const sourceUrl = s(body.sourceUrl, 1000);
  if (sourceUrl && !/^https?:\/\//i.test(sourceUrl)) {
    return NextResponse.json({ error: 'A source link should start with http.' }, { status: 400 });
  }
  const text = s(body.body, 4000);
  if (!text || text.length < 20) {
    return NextResponse.json({ error: 'Tell us a little more, at least a sentence or two.' }, { status: 400 });
  }
  if (text.length > 2000) {
    return NextResponse.json({ error: 'Please keep it under 2,000 characters.' }, { status: 400 });
  }
  const name = s(body.submitterName, 255);
  const email = s(body.submitterEmail, 255);
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'An email address is needed in case we have a question.' }, { status: 400 });
  }

  const result = await deliver({
    label: `register ${kind}`,
    save: process.env.DATABASE_URL
      ? async () => {
          const { neon } = await import('@neondatabase/serverless');
          const sql = neon(process.env.DATABASE_URL!);
          await sql`
            INSERT INTO registry_submissions
              (model_slug, chassis, vin, kind, body, event_date, source_url,
               submitter_name, submitter_email, submitter_relation, status)
            VALUES (${modelSlug}, ${chassis}, ${vin}, ${kind}, ${text}, ${eventDate}, ${sourceUrl},
                    ${name}, ${email}, ${relation}, 'pending')
          `;
        }
      : undefined,
    notify: async () => {
      const { notifyRegisterSubmission } = await import('@/lib/email');
      return notifyRegisterSubmission({
        modelSlug, chassis, vin, kind, body: text, eventDate, sourceUrl, relation, name, email,
      });
    },
  });

  if (!result.delivered) {
    return undeliverableResponse(`Register submission: ${modelSlug} chassis ${chassis}`, {
      Model: modelSlug,
      Chassis: chassis,
      VIN: vin,
      Kind: kind,
      Date: eventDate,
      Source: sourceUrl,
      Relation: relation,
      Name: name,
      Email: email,
      Submission: text,
    });
  }

  return NextResponse.json({
    success: true,
    message: 'Thank you. A person will check this before anything appears.',
  });
}
