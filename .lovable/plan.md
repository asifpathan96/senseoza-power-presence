

## Add Missing Blog Content + New AI Personalization Post

### Problem
`Blog.tsx` lists 9 posts, but `BlogPost.tsx` only has full content for 5. These 4 slugs lead to a "Post Not Found" page:
- `/blog/social-media-roi-measurement`
- `/blog/content-marketing-trends`
- `/blog/ppc-advanced-strategies`
- `/blog/email-marketing-automation`

Also, user wants a brand new blog post: **"AI-Driven Personalization"** (Pune/Hinjewadi angle), published today (April 20, 2026).

### Changes

#### 1. `src/pages/BlogPost.tsx` — Add 5 missing post entries
Add full SEO-optimized content (6–8 paragraphs each, ~600–900 words) for:

| Slug | Title | Date | Category |
|---|---|---|---|
| `social-media-roi-measurement` | Social Media ROI: How to Measure What Actually Matters | Feb 8, 2026 | Social Media |
| `content-marketing-trends` | Content Marketing Trends: Creating Content That Converts | Feb 5, 2026 | Content Marketing |
| `ppc-advanced-strategies` | PPC Mastery: Advanced Strategies for Maximum ROI | Feb 1, 2026 | PPC |
| `email-marketing-automation` | Email Marketing in 2026: Automation and Personalization | Jan 28, 2026 | Email Marketing |
| `ai-driven-personalization-pune-2026` | **NEW** — AI-Driven Personalization: How Pune Businesses Are Boosting Conversions in 2026 | April 20, 2026 | AI Marketing |

**New post focus** (SEO-optimized, ~800 words):
- Hook: AI tools exploding in Pune's IT hubs (Hinjewadi, Kharadi, Baner)
- Sections covered as paragraphs: AI content creation tools, smart chatbots, customer behavior analysis, error reduction, conversion lift case examples, why Pune startups & SMEs are early adopters, how Senseoza helps local brands implement personalization
- Keywords woven naturally: "AI marketing Pune", "Hinjewadi digital marketing", "AI personalization India", "chatbots for business", "customer analytics Pune"

#### 2. `src/pages/Blog.tsx` — Add new post to top of `latestPosts`
Insert AI-Driven Personalization as the **newest featured post** (April 20, 2026), keeping the list ordered by date.

#### 3. `src/pages/Home.tsx` — Update featured blog section
Replace the oldest of the 3 latest posts with the new AI-Driven Personalization post so homepage shows the freshest content.

#### 4. `public/sitemap.xml` — Add new blog URL
Add `<url>` entry for `/blog/ai-driven-personalization-pune-2026` with `lastmod` 2026-04-20.

### SEO Notes
- Each new post uses unique title, meta description (excerpt), and canonical URL via existing `SEOHead` component
- Pune/Hinjewadi keywords in new post align with local SEO priority
- All paragraphs render in DOM (no animation gating) so crawlers see full content

