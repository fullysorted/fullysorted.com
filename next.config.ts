import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required to enable src/instrumentation.ts in Next.js 14
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.bringatrailer.com",
      },
      {
        protocol: "https",
        hostname: "bringatrailer.com",
      },
    ],
  },
};

export default nextConfig;
