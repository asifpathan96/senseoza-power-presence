## Revert Canonical Domain to senseoza.com

Earlier the SEO pass switched canonical URLs, og:url, sitemap, and robots.txt to `https://senseoza-ai.lovable.app` (the Lovable staging URL). You want the production custom domain `https://senseoza.com` everywhere instead.

### Change
Sitewide find-and-replace: `https://senseoza-ai.lovable.app` → `https://senseoza.com`

### Files affected
- `index.html`
- `public/robots.txt` (Sitemap directive + header comment)
- `public/sitemap.xml` (all `<loc>` entries)
- `public/llms.txt` (if any references)
- `src/utils/schema.ts`
- `src/components/SEOHead.tsx` defaults (if any)
- `src/components/Footer.tsx`
- All page files using canonical/og URLs:
  - `src/pages/Home.tsx`, `About.tsx`, `Blog.tsx`, `BlogPost.tsx`, `CaseStudies.tsx`, `Contact.tsx`, `Services.tsx`, `Testimonials.tsx`
  - All `src/pages/services/*.tsx`

### Method
Run a single `sed` replace across the listed files, then spot-verify with `rg`.

### Notes
- No code logic changes — string replacement only.
- Custom domain `senseoza.com` is already configured (also `www.senseoza.com`, `senseoza.in`).
- Sitemap will continue to be valid; just the host changes.
