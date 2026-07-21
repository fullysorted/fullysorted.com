import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
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
            Join Fully Sorted
          </h1>
          <p className="text-text-secondary">
            Create an account to list your car, save favorites, and join the community.
          </p>
        </div>
        <SignUp
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
