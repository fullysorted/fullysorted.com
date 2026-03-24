"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Share2,
  MapPin,
  Gauge,
  Cog,
  Palette,
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { formatPrice, formatMileage, cn } from "@/lib/utils";
import type { Vehicle } from "@/lib/sample-data";
import { motion } from "framer-motion";

interface Props {
  vehicle: Vehicle;
}

export function ListingDetail({ vehicle }: Props) {
  const priceDiff = vehicle.price - vehicle.compAvg;
  const priceDiffPct = ((priceDiff / vehicle.compAvg) * 100).toFixed(1);
  const isAbove = priceDiff > 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      {/* Back Link */}
      <Link
        href="/browse"
        className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Browse
      </Link>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-[16/9] sm:aspect-[16/8] rounded-xl overflow-hidden mb-6 bg-surface"
      >
        <Image
          src={vehicle.imageUrl}
          alt={vehicle.title}
          fill
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {vehicle.featured && (
            <span className="px-3 py-1 text-xs font-semibold bg-orange text-white rounded-md">
              Featured
            </span>
          )}
          {vehicle.sortedPrice && (
            <span className="px-3 py-1 text-xs font-semibold bg-green text-white rounded-md flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Sorted Price
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1.5 text-sm font-medium bg-black/60 text-white rounded-lg">
          {vehicle.photoCount} photos
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Title & Location */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
              {vehicle.title}
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-text-secondary">
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {vehicle.location}
              </span>
              <span className="flex items-center gap-1">
                <Gauge className="w-4 h-4" />
                {formatMileage(vehicle.mileage)} miles
              </span>
              <span className="flex items-center gap-1">
                <Cog className="w-4 h-4" />
                {vehicle.transmission}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-lg hover:bg-surface transition-colors">
              <Heart className="w-4 h-4" />
              Save
            </button>
            <button className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium border border-border rounded-lg hover:bg-surface transition-colors">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Chris's Take */}
          <div className="bg-surface border border-border rounded-xl p-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold shrink-0">
                CP
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Chris&apos;s Take
                </p>
                <p className="text-text-secondary mt-1 leading-relaxed">
                  &ldquo;{vehicle.chrisTake}&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              About This Car
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {vehicle.description}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Highlights
            </h2>
            <ul className="space-y-2">
              {vehicle.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2 text-sm text-text-secondary">
                  <CheckCircle className="w-4 h-4 text-green mt-0.5 shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Specs Table */}
          <div>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Specifications
            </h2>
            <div className="bg-white border border-border rounded-xl overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-border">
                {[
                  { label: "Year", value: vehicle.year },
                  { label: "Make", value: vehicle.make },
                  { label: "Model", value: `${vehicle.model}${vehicle.variant ? ` ${vehicle.variant}` : ""}` },
                  { label: "Engine", value: vehicle.engine },
                  { label: "Transmission", value: vehicle.transmission },
                  { label: "Mileage", value: `${formatMileage(vehicle.mileage)} miles` },
                  { label: "Exterior", value: vehicle.exteriorColor },
                  { label: "Interior", value: vehicle.interiorColor },
                  { label: "Condition", value: vehicle.condition },
                  { label: "Originality", value: vehicle.originality },
                ].map((spec, i) => (
                  <div
                    key={spec.label}
                    className={cn(
                      "px-4 py-3 flex justify-between",
                      i >= 2 && "border-t border-border"
                    )}
                  >
                    <span className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                      {spec.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-5">
          {/* Price Card */}
          <div className="bg-white border border-border rounded-xl p-5 sticky top-24">
            <p className="text-xs font-medium text-text-secondary uppercase tracking-wider mb-1">
              Asking Price
            </p>
            <p className="price-display text-3xl text-foreground">
              {formatPrice(vehicle.price)}
            </p>

            {/* Pricing Verdict */}
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-2">
                Pricing Verdict
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">BaT Average</span>
                  <span className="price-display font-medium">
                    {formatPrice(vehicle.compAvg)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">vs. Market</span>
                  <span
                    className={cn(
                      "font-semibold flex items-center gap-1",
                      isAbove ? "text-orange" : "text-green"
                    )}
                  >
                    {isAbove ? (
                      <TrendingUp className="w-3.5 h-3.5" />
                    ) : (
                      <TrendingDown className="w-3.5 h-3.5" />
                    )}
                    {isAbove ? "+" : ""}
                    {priceDiffPct}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Comps Found</span>
                  <span className="font-medium">{vehicle.compCount}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Source</span>
                  <span className="text-xs text-text-tertiary">
                    {vehicle.compSource}
                  </span>
                </div>
              </div>

              {vehicle.sortedPrice ? (
                <div className="mt-3 px-3 py-2 bg-green-light rounded-lg">
                  <p className="text-xs font-semibold text-green flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Fair Market Price
                  </p>
                  <p className="text-xs text-green/80 mt-0.5">
                    Within range of recent comparable sales
                  </p>
                </div>
              ) : (
                <div className="mt-3 px-3 py-2 bg-orange-light rounded-lg">
                  <p className="text-xs font-semibold text-orange">
                    Above Average
                  </p>
                  <p className="text-xs text-orange/80 mt-0.5">
                    Priced above recent comps — condition or rarity may justify
                  </p>
                </div>
              )}
            </div>

            {/* Contact Seller */}
            <div className="mt-5 space-y-2.5">
              <button className="w-full h-12 bg-accent text-white text-sm font-semibold rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Contact Seller
              </button>
              <button className="w-full h-12 border border-border text-foreground text-sm font-medium rounded-lg hover:bg-surface transition-colors">
                Make an Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
