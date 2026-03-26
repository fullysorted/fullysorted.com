import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Vercel Blob Storage (user-uploaded photos)
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      // Unsplash (placeholder/stock images)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // BaT and other auction sites (thumbnails from scraping)
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
