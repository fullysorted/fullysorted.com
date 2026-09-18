import { getPublishedModelBySlug } from '@/lib/data/models';
import { modelToMarkdown } from '@/lib/seo/model-markdown';

// Reached through the rewrite in next.config.ts:
//   /research/models/{make}/{model}.md
// Cached for a day: the record changes when a seed lands, not per request.
export const revalidate = 86400;

export async function GET(_req: Request, { params }: { params: Promise<{ make: string; model: string }> }) {
  const { make, model } = await params;
  const m = await getPublishedModelBySlug(make, model);
  if (!m) return new Response('Not found\n', { status: 404, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  return new Response(modelToMarkdown(m), {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=604800',
      // The HTML page is the canonical; this is an alternate of it.
      Link: `<https://fullysorted.com/research/models/${m.slug}>; rel="canonical"`,
    },
  });
}
