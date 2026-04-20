

## Enhance Single Blog Post UI for Engaging Reading

### Goal
Transform the current text-heavy blog post page into a visually rich, scannable, and engaging reading experience so users stay engaged through the entire article.

### Changes — `src/pages/BlogPost.tsx`

#### 1. Reading Progress Bar (top of page)
- Sticky thin gold progress bar that fills as the user scrolls the article — gives a sense of progress and reduces drop-off.

#### 2. Enhanced Hero Section
- Add a subtle parallax effect on the hero image as user scrolls.
- Add a category badge with an icon and a small "Featured Insight" tag.
- Add author avatar (initials in a gold circle) next to author name.

#### 3. Article Body — Visual Storytelling
Replace the plain stack of `<p>` tags with a varied, magazine-style layout that breaks up content visually:

- **Drop cap** on the first paragraph (large stylized first letter in gold).
- **Lead paragraph styling** — first paragraph rendered larger and bolder as an intro.
- **Inline pull quotes** — every 3rd paragraph styled as a highlighted gold-bordered "pull quote" card with a quote icon, breaking the text rhythm.
- **Section images** — insert a relevant image from existing `src/assets` (ai-marketing, seo, social-media, content-marketing, analytics, ppc-why-matters, etc.) after every 2–3 paragraphs to break the text. Images use rounded corners, subtle gold glow, and a small italic caption.
- **Highlight callout cards** — every 4th–5th paragraph rendered inside a glassmorphism card with a left gold accent border and a small icon (Lightbulb / TrendingUp / Target / Sparkles) so key points pop.
- **Animated stat strip** — for posts with numbers (e.g., "30–50% higher email revenue"), surface these as 2–3 large animated stat cards mid-article using existing `useCountUp` hook.

#### 4. Sticky Sidebar Table of Contents (desktop only, ≥lg breakpoint)
- Auto-generated mini TOC from paragraph index showing "Section 1, 2, 3..." with the active section highlighted in gold as user scrolls.
- On mobile: hidden (keeps layout clean).

#### 5. Sticky Floating Share Bar (desktop)
- Vertical share bar (Facebook, Twitter, LinkedIn, Copy Link) pinned to the left side of the article on desktop. Functional copy-link with toast confirmation.
- Existing bottom share section kept for mobile.

#### 6. Estimated Reading Time + Views (decorative)
- Small badge bar above title: read time, publish date, and a "Trending" badge with a flame icon for fresh posts.

#### 7. Related Posts Section (bottom, before CTA)
- 3-card grid showing other blog posts from the same category (or any 3 others if not enough). Each card has image, category, title, date, and hover lift animation. Links navigate to that post and scroll to top.

#### 8. Enhanced CTA Block
- Keep existing CTA but add a subtle animated gradient border and a secondary "Read More Articles" button next to "Get Started Today".

### Visual Design Notes
- All additions use existing theme tokens: `bg-card`, `border-border`, `text-primary` (gold), `gradient-hero`, `mesh-gradient`, glassmorphism utility.
- All images come from existing `src/assets` — no new asset uploads required.
- Animations use existing `motion` and `AnimatedSection` patterns; stay subtle to avoid distracting from reading.
- Fully responsive: TOC and floating share hidden below `lg`, pull quotes and images stack cleanly on mobile.

### Files Touched
- `src/pages/BlogPost.tsx` (single file rewrite of the layout, content data untouched)

