import { SignUp } from '@clerk/nextjs';

/**
 * `redirect_url` is passed through explicitly rather than left to Clerk's
 * default handling, because one flow depends on surviving this round trip: a
 * provider linking an existing listing arrives from /services/link/<token>,
 * and losing that destination lands them on a dashboard that tells them they
 * have no listing — which is the exact bug the link flow exists to fix.
 *
 * Only same-origin paths are accepted, so the parameter can't be used to bounce
 * someone off the site after they authenticate.
 */
function safeRedirect(raw: string | string[] | undefined): string | undefined {
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (!v || !v.startsWith('/') || v.startsWith('//')) return undefined;
  return v;
}

export default async function SignUpPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect_url?: string | string[] }>;
}) {
  const sp = await searchParams;
  const redirectTo = safeRedirect(sp?.redirect_url);
  const linkingListing = !!redirectTo?.startsWith('/services/link/');
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          {/* Tricolor motif */}
          <div className="flex items-center justify-center gap-1.5 mb-4" aria-hidden>
            <span className="w-2 h-2 bg-accent" />
            <span className="w-2 h-2 bg-blue" />
            <span className="w-2 h-2 bg-gold" />
          </div>
          <h1 className="font-display font-semibold tracking-tight text-3xl text-foreground mb-2">
            {linkingListing ? 'One quick step' : 'Join Fully Sorted'}
          </h1>
          <p className="text-text-secondary">
            {linkingListing
              ? 'Set up your login and we\u2019ll take you straight back to your listing.'
              : 'Create an account to list your car, save favorites, and join the community.'}
          </p>
        </div>
        <SignUp
          {...(redirectTo ? { forceRedirectUrl: redirectTo, fallbackRedirectUrl: redirectTo } : {})}
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-xl rounded-2xl',
              formButtonPrimary:
                'bg-accent hover:bg-accent-hover text-white font-semibold',
            },
          }}
        />
      </div>
    </div>
  );
}
