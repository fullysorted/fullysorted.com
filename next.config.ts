import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  async headers() {
    // Defense-in-depth security headers applied to every response.
    // NOTE: no strict Content-Security-Policy is set here because the app loads
    // inline GA/Meta Pixel scripts; adding a CSP requires nonces/hashes for those
    // and should be done deliberately (see SECURITY-AND-QA-REPORT.md). The headers
    // below are safe to ship now and add clickjacking/MIME/referrer protection.
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
