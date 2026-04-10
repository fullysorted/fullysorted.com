'use client';

import { CheckCircle2, ArrowRight, Home } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { trackMetaEvent } from '@/components/analytics/MetaPixel';

export default function SuccessPage() {
  // Fire Meta Pixel CompleteRegistration on success page mount
  // (the actual Purchase event is server-side via webhook for accuracy)
  useEffect(() => {
    trackMetaEvent('CompleteRegistration', { content_category: 'seller_listing_paid' });
  }, []);

  return (
    <main className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg w-full text-center"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
          </motion.div>

          <h1 className="text-3xl font-bold text-stone-900 mb-3">
            You&apos;re Listed!
          </h1>

          <p className="text-stone-600 mb-6 text-lg">
            Your listing has been submitted and payment received. I&apos;ll review it
            personally and get it live within 24 hours.
          </p>

          <div className="bg-amber-50 rounded-xl p-4 mb-8 text-left">
            <p className="text-stone-700 text-sm">
              <strong className="text-amber-800">What happens next:</strong>
            </p>
            <ul className="text-stone-600 text-sm mt-2 space-y-1.5">
              <li>1. I review your listing for accuracy and completeness</li>
              <li>2. The AI description gets a human check (by me)</li>
              <li>3. Your listing goes live on the marketplace</li>
              <li>4. You get an email confirmation with your listing link</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/browse"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Browse Listings <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              <Home className="w-4 h-4" /> Back Home
            </Link>
          </div>
        </div>

        <p className="text-stone-400 text-sm mt-6">
          Questions? Email me at chris@fullysorted.com
        </p>
      </motion.div>
    </main>
  );
}
