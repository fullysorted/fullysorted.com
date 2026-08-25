import type { Metadata } from 'next';
import LeadOutcome from './LeadOutcome';

export const dynamic = 'force-dynamic';

// Never index a page addressed by a private token.
export const metadata: Metadata = {
  title: 'About that enquiry · Fully Sorted',
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ do?: string }>;
}

/**
 * Where the two links at the bottom of a lead email land.
 *
 * The link itself does nothing — this page asks for one confirming click, and
 * that click POSTs. Mail scanners, link previewers and "safe browsing" fetchers
 * follow links in email routinely, so a GET that recorded an outcome would be
 * recording spam filters rather than shops.
 */
export default async function LeadActionPage({ params, searchParams }: Props) {
  const { token } = await params;
  const { do: intent } = await searchParams;
  const preset = intent === 'junk' ? 'junk' : intent === 'replied' ? 'replied' : null;

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <LeadOutcome token={token} preset={preset} />
      </div>
    </main>
  );
}
