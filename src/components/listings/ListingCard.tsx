"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, MessageCircle, Camera, CheckCircle } from "lucide-react";
import { cn, formatPrice, formatMileage } from "@/lib/utils";
import type { Vehicle } from "@/lib/sample-data";
import { motion } from "framer-motion";

interface ListingCardProps {
  vehicle: Vehicle;
  index?: number;
}

export function ListingCard({ vehicle, index = 0 }: ListingCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
    >
      <Link
        href={`/listings/${vehicle.slug}`}
        className="group block bg-white rounded-xl overflow-hidden border border-border hover:border-border-medium transition-all duration-300 hover:shadow-lg"
      >
        {/* Image Container */}
        <div className="listing-image-container relative aspect-[16/10]">
          <Image
            src={vehicle.imageUrl}
            alt={vehicle.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
            priority={index < 2}
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {vehicle.featured && (
              <span className="px-2.5 py-1 text-xs font-semibold bg-orange text-white rounded-md">
                Featured
              </span>
            )}
            {vehicle.sortedPrice && (
              <span className="px-2.5 py-1 text-xs font-semibold bg-green text-white rounded-md flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Sorted Price
              </span>
            )}
          </div>

          {/* Photo Count */}
          <div className="absolute bottom-3 right-3 px-2 py-1 text-xs font-medium bg-black/60 text-white rounded-md flex items-center gap-1">
            <Camera className="w-3.5 h-3.5" />
            {vehicle.photoCount}
          </div>

          {/* Category */}
          <div className="absolute top-3 right-3 px-2 py-1 text-xs font-medium bg-white/90 text-foreground rounded-md backdrop-blur-sm">
            {vehicle.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h3 className="font-semibold text-foreground leading-snug group-hover:text-accent transition-colors">
            {vehicle.title}
          </h3>

          {/* Location & Mileage */}
          <p className="text-sm text-text-secondary mt-1">
            {vehicle.location} &middot; {formatMileage(vehicle.mileage)} miles
          </p>

          {/* Price & Actions */}
          <div className="flex items-end justify-between mt-3">
            <span className="price-display text-xl text-foreground">
              {formatPrice(vehicle.price)}
            </span>
            <div className="flex items-center gap-3 text-text-tertiary">
              <span className="flex items-center gap-1 text-xs">
                <Heart className="w-4 h-4" />
                {vehicle.saves}
              </span>
              <span className="flex items-center gap-1 text-xs">
                <MessageCircle className="w-4 h-4" />
                {vehicle.comments}
              </span>
            </div>
          </div>

          {/* Comp Line (subtle) */}
          {vehicle.sortedPrice && (
            <p className="text-xs text-green mt-2">
              Within fair market range &middot; {vehicle.compCount} comps
            </p>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
