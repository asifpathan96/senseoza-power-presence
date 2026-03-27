

# Hero Section Redesign — Bold, Colorful & CTA-Driven

## Overview

Redesign the hero section with a more vibrant, impactful layout that puts CTAs front and center while keeping bold 3D visuals and energetic colors.

---

## Key Design Changes

### Background
- Replace the current dark gradient with a **vibrant blue gradient** (`from-[#0a1628] via-[#1a3a6e] to-[#0ea5e9]`) flowing left-to-right
- Add animated **gradient mesh blobs** (cyan, purple, blue) for depth
- Keep particle background but reduce opacity for cleaner look
- Remove corner stripe decorations (outdated feel)

### Layout — Two-Column, Left-Heavy
- **Left (60%)**: Tagline badge, large heading, description, star rating row, and two prominent CTA buttons
- **Right (40%)**: 3D character with social media icons orbiting around it
- On mobile: stack vertically, CTAs stay prominent

### Typography & Content
- Italic tagline above heading: *"Pune's #1 AI-Powered Digital Marketing Agency"*
- Heading in bold uppercase with gradient accent text
- Add a **trust row** below description: star rating (4.8/5 by 500+ clients) with gold stars
- Two CTA buttons with **rounded-full** styling, larger padding, and glow shadows

### CTA Buttons (Primary Focus)
- **Primary CTA**: "Get Free Marketing Audit" — white bg, primary text, large with arrow icon and pulse-glow shadow
- **Secondary CTA**: "View Our Work" — glass/transparent with white border
- Both buttons larger than current (py-7 px-10)

### 3D Illustrations (Right Side)
- Keep main 3D character centered
- Social icons (Insta, FB, LinkedIn, Google, GMB) positioned in a **circular orbit** around the character instead of scattered randomly
- Add subtle **glow rings** behind the character
- Increase icon sizes slightly for visibility

### Decorative Elements
- Two blurred **circle outlines** (white/10 opacity) for depth
- Gradient glow spot behind the 3D character
- Remove dot-pattern overlay (cleaner look)

---

## Technical Implementation

### File: `src/pages/Home.tsx` (Hero section, lines 234-455)
- Restructure hero background with new gradient classes
- Update grid to `lg:grid-cols-[1.2fr_0.8fr]` for asymmetric split
- Add star rating row component between description and CTAs
- Restyle CTA buttons with `rounded-full`, larger sizing, glow effects
- Reposition social icons in circular layout using absolute positioning with calculated offsets
- Remove corner stripes divs
- Remove dot-pattern overlay div

### File: `src/index.css`
- Add `.hero-gradient-bold` class with vibrant left-to-right gradient
- Add `.cta-glow` class for primary button glow animation
- Add `.orbit-icon` positioning helpers for circular icon layout

---

## Expected Result

A bold, energetic hero section that immediately draws attention to the CTAs while maintaining visual excitement through vibrant colors, 3D illustrations, and smooth animations. The trust signals (rating row) add credibility right in the hero.

