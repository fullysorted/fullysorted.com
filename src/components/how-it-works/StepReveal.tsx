"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * One step of the walkthrough: the words on the left, the live piece of the
 * site on the right, each sliding in as it scrolls into view. The "demo"
 * is a real component or a faithful mock of one, never a screenshot, so the
 * page cannot go stale when the site changes.
 */
export function StepReveal({
  n,
  title,
  body,
  demo,
  caption,
  flip = false,
}: {
  n: number;
  title: string;
  body: string;
  demo: ReactNode;
  caption?: string;
  flip?: boolean;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
    >
      <div className={`lg:col-span-4 ${flip ? "lg:order-2" : ""}`}>
        <p
          className="text-[11px] uppercase"
          style={{ fontFamily: "var(--font-jetbrains-mono), 'JetBrains Mono', Menlo, monospace", letterSpacing: "0.12em", color: "#1C8C87" }}
        >
          Step {n}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight leading-[1.1] mt-2" style={{ color: "#12352A" }}>
          {title}
        </h3>
        <p className="mt-3 text-base leading-relaxed" style={{ color: "#6B7280" }}>
          {body}
        </p>
      </div>
      <div className={`lg:col-span-8 ${flip ? "lg:order-1" : ""}`}>
        <div className="rounded-2xl p-4 sm:p-6" style={{ background: "#F4F6F5", border: "1px solid rgba(18,53,42,0.14)" }}>
          {demo}
        </div>
        {caption && (
          <p className="mt-2 text-xs" style={{ color: "#9a9a8a" }}>
            {caption}
          </p>
        )}
      </div>
    </motion.li>
  );
}
