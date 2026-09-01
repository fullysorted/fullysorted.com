# Fully Sorted — Sitewide Design Brief v2 ("Racing Green Heritage")

Purpose: bring every page in line with the new RACING GREEN heritage design language. Chris's direction: he liked the structure but found the orange-led look boring/stale. New direction = British Racing Green heritage + real car photography + characterful display typography + confident motion.

## Positioning context
- Fully Sorted is an automotive SERVICES HUB first, P2P marketplace second.
- Primary CTA sitewide: **Find a Pro** (→ /services). Secondary: Sell a Car.
- Audience: collector-car owners, but open to "all loved vehicles."

## Color system v2 (already live in globals.css tokens — PREFER TOKENS over hex)
- **Primary / CTAs: British Racing Green** `var(--accent)` = `#1E5B3E`, hover `var(--accent-hover)` = `#154730`, tint `var(--accent-light)` = `#E8F1EB`. Tailwind: `bg-accent`, `hover:bg-accent-hover`, `bg-accent-light`, `text-accent`.
- **Secondary: heritage blue** `var(--accent-blue)` = `#1E6091` (Tailwind `bg-blue` etc.). Sky-blue `#29ABE2` allowed for small info accents.
- **Support green (success/trust):** `#6ab04c` (`--sorted-green`).
- **Trophy gold (rare, premium moments only):** `var(--accent-gold)` = `#B08D3F`, tint `#F7F0DF` (Tailwind `text-gold`, `bg-gold-light`). Use for "Premium" tier, featured badges, award/concours references. Sparingly.
- **ORANGE `#E8722A` IS RETIRED.** Replace every occurrence (and `#C85E1E`, `rgba(232,114,42,x)`) with BRG or, where a warm pop is genuinely needed, trophy gold.
- Ink `#1a1a18`/`#1A1A1A`; muted `#6b6b5e`/`#6B7280`; warm paper `var(--bg-primary)` `#F5EFE6`; cards white on paper, border `rgba(0,0,0,0.10)`.
- Tricolor motif (small squares/dots rows): now **green `#1E5B3E`, blue `#1E6091`, gold `#B08D3F`**.

## Typography v2
- **Display headlines: Fraunces** — available as `font-display` (Tailwind utility from `--font-display`) / `var(--font-fraunces)`. Use for h1/h2 hero and section headlines: `font-display font-semibold tracking-tight`. It's a characterful heritage serif; let it breathe (leading ~1.05–1.1 on heroes).
- Body/UI stays Inter (`font-sans`); prices/data stay JetBrains Mono (`.price-display`).
- Eyebrows/labels: xs, bold, uppercase, `tracking-widest`, Inter.

## Photography v2 (the biggest anti-boring move)
- Use REAL car imagery where a page currently relies on abstract icon panels or empty gradient space — heroes, section backdrops, category cards.
- Source: `images.unsplash.com` (already whitelisted in next.config). Use `next/image` where practical; plain `<img>` acceptable inside client components already using it.
- Subject guidance: classic 911s, vintage racing, garage/workshop scenes, detailing close-ups (hand + fender), enclosed transporters, patina. Prefer moody/editorial shots that sit well under a green/cream overlay. Example URLs (append `?w=1600&q=80`):
  - https://images.unsplash.com/photo-1503376780353-7e6692767b70 (classic Porsche)
  - https://images.unsplash.com/photo-1552519507-da3b142c6e3d (classic sports car)
  - https://images.unsplash.com/photo-1486262715619-67b85e0b08d3 (vintage garage)
  - https://images.unsplash.com/photo-1489824904134-891ab64532f1 (detailing/wash)
  - https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7 (classic front end)
- Always add a legible overlay (e.g. `linear-gradient(rgba(20,40,30,0.55), rgba(20,40,30,0.75))`) when text sits on photos; keep contrast AA.
- Don't force photos onto legal/forms pages — those stay typographic.

## Signature chrome v2
- Top accent line: 1px gradient `transparent → #1E5B3E 35% → #B08D3F 65% → transparent`.
- Background layers: `paddock-mesh` (now green/blue/gold), `film-grain` (~0.05), `speed-lines` (~0.03) — keep using.
- Eyebrow badge: pill, `border: 1px solid rgba(30,91,62,0.28)`, `background: rgba(30,91,62,0.07)`, uppercase bold tracking-widest text in `#1E5B3E`, preceded by tricolor squares (green/blue/gold).
- Headline underline: hand-drawn wavy SVG underline in BRG, strokeOpacity ~0.45.
- Bottom feather: 12px gradient to `rgba(0,0,0,0.04)`.

## Components / patterns
- Primary buttons: solid BRG, white bold text, `rounded-lg`/`rounded-xl`, hover darker BRG. Secondary: outlined or muted text buttons.
- Cards: `rounded-2xl`, white bg, border `rgba(0,0,0,0.10)`, shadow `0_24px_60px_-20px rgba(26,26,24,0.35)`, optional `shine` sweep.
- Chips/quick-picks: `rounded-full` bordered; hover fills solid BRG with white text.
- Icon tiles: keep custom stroke SVGs where photos don't fit; color them BRG/blue/gold rotation.
- `flag-border` and `glass` utilities available for premium cards.

## Motion v2 (richer, still tasteful)
- framer-motion entrances (fade/slide-up 0.45–0.7s, staggered delays) — keep and use confidently.
- Hover lifts `-translate-y-0.5`+shadow; `shine` sweeps on premium cards.
- Subtle parallax on hero imagery where the file is already a client component (`useScroll`/`useTransform`) — small translate only (≤40px).
- Count-up numbers for stats where present. Respect `prefers-reduced-motion` (site already has CSS guards; don't fight them).
- ONLY use framer-motion in files already marked 'use client'. In server components use CSS transitions.

## Tone guardrails
- Enthusiast-literate, no fluff ("Know before the wire goes", "Wrenches you can trust").
- NEVER mention any concours co-chairman/vice-chairman title in site copy.
- Zero-commission marketplace is second billing — present but not leading.

## Pass rules for agents
1. Do NOT restructure layouts or change information architecture, routes, data fetching, props, handlers, or business logic. Visual upgrade only (photos may replace decorative/icon-only panels — that's visual, not structural).
2. Kill ALL retired-orange occurrences in your files (`#E8722A`, `#C85E1E`, `232,114,42`, `#FEF0E6` → `--accent-light`).
3. Prefer design tokens/Tailwind utilities (`bg-accent`, `text-accent`, `font-display`) over raw hex when practical.
4. Apply Fraunces (`font-display`) to the main h1/h2 headlines on your pages.
5. Add photography per the photography rules where your pages have heroes or decorative panels.
6. CTA hierarchy: services actions primary (BRG solid), marketplace actions secondary.
7. Preserve accessibility: aria-labels, focus states, AA contrast (BRG on white/cream passes; white on BRG passes).
8. Keep diffs surgical; don't reformat whole files. Verify with `npx tsc --noEmit` that YOU introduced no new type errors.
