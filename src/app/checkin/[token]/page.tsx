import type { Metadata } from 'next';
import CheckinForm from './CheckinForm';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'How did it go? · Fully Sorted',
  robots: { index: false, follow: false },
};

interface Props {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ a?: string }>;
}

/** Landing page for the owner check-in email. The link records nothing; the button does. */
export default async function CheckinPage({ params, searchParams }: Props) {
  const { token } = await params;
  const { a } = await searchParams;
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <CheckinForm token={token} preset={a || ''} />
      </div>
    </main>
  );
}
