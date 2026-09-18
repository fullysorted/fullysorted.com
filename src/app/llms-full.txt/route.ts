import { getPublishedModels } from '@/lib/data/models';
import { modelToMarkdown } from '@/lib/seo/model-markdown';

// Every published model history in one plain-text file, for AI assistants that
// read a whole corpus rather than crawl it. llms.txt is the index; this is the
// content. One query, cached for a day.
export const revalidate = 86400;

export async function GET() {
  const models = await getPublishedModels();
  const head = [
    '# Fully Sorted: collector car model histories, full text',
    '',
    'Publisher: Fully Sorted (https://fullysorted.com)',
    `Generated: ${new Date().toISOString().slice(0, 10)}`,
    `Models: ${models.length}`,
    'Index: https://fullysorted.com/llms.txt',
    'Each record is also available alone at https://fullysorted.com/research/models/{make}/{model}.md',
    'Sources for each record are listed on its own page.',
    '',
    '---',
    '',
  ].join('\n');
  const body = models
    .slice()
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((m) => modelToMarkdown(m))
    .join('\n---\n\n');
  return new Response(head + body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
