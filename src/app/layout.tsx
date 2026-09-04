import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLd, organizationSchema, websiteSchema } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

export const metadata: Metadata = {
  title: {
    default: "Fully Sorted: The Collector Car Services Hub",
    template: "%s | Fully Sorted",
  },
  description:
    "Find owner-reviewed specialists for everything your collector car needs: inspection, transport, mechanical work, body work and paint, restoration, detailing, storage and photography. Plus a marketplace of private and dealer listings and a research center built on real sold prices.",
  keywords: [
    "collector car services",
    "classic car specialists",
    "pre-purchase inspection collector car",
    "classic car detailing",
    "enclosed car transport",
    "collector car storage",
    "collector cars",
    "classic cars for sale",
    "vintage cars",
    "collector car marketplace",
    "sell my classic car",
    "collector car value",
    "classic car pricing",
    "peer to peer car sale",
    "San Diego collector cars",
  ],
  authors: [{ name: "Fully Sorted", url: "https://fullysorted.com" }],
  creator: "Fully Sorted",
  metadataBase: new URL("https://fullysorted.com"),
  // NO site-wide `alternates.canonical` here. Next.js inherits `alternates`
  // into every child segment that does not override it, so a default of "/"
  // silently told crawlers that /research, /vin, /browse, /sell, /services and
  // a dozen other indexable pages were all duplicates of the homepage. Each
  // page sets its own canonical; a page with none is better off with none.
  category: "Automotive Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fullysorted.com",
    siteName: "Fully Sorted",
    title: "Fully Sorted: The Collector Car Services Hub",
    description:
      "Specialists for everything your collector car needs: inspection, transport, mechanical work, body work and paint, restoration, detailing, storage and photography.",
    // Note: opengraph-image.png in src/app/ is auto-registered by Next.js
    // metadata conventions — do NOT set images[] here or it will override.
  },
  twitter: {
    card: "summary_large_image",
    title: "Fully Sorted: The Collector Car Services Hub",
    description: "Specialists for everything your collector car needs: inspection, transport, mechanical work, body work and paint, restoration, detailing, storage and photography.",
    creator: "@fully_sorted",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#1E6091",
          colorTextOnPrimaryBackground: "#ffffff",
          borderRadius: "0.75rem",
        },
      }}
    >
      <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable}`}>
        <head>
          <meta name="theme-color" content="#1E6091" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          {/* Favicon, apple-icon, opengraph-image, and twitter-image are
              auto-registered by Next.js from files in src/app/ (file-based
              metadata convention). Do not add manual <link rel="icon"> here. */}
          <JsonLd data={[organizationSchema, websiteSchema]} />
        </head>
        <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
          <MetaPixel />
          <GoogleAnalytics />
          <Header />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
          <Footer />
          <MobileNav />
          <CookieBanner />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
