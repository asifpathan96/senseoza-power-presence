

## Remove Hero Icon from All Service Pages

Each service page has a `motion.div` block containing an icon (with class `icon-3d`) just before the `<h1>` title in the hero section. This block needs to be removed from all 10 service pages.

### Files to Edit (10 files)
Remove the `motion.div` icon container (the ~6 line block with `whileHover`, `p-4 bg-gradient-to-br`, and the icon) from:

1. `src/pages/services/SEOServices.tsx`
2. `src/pages/services/PPCAds.tsx`
3. `src/pages/services/SocialMedia.tsx`
4. `src/pages/services/ContentMarketing.tsx`
5. `src/pages/services/AIMarketing.tsx`
6. `src/pages/services/WebDesign.tsx`
7. `src/pages/services/Analytics.tsx`
8. `src/pages/services/EmailAutomation.tsx`
9. `src/pages/services/InfluencerMarketing.tsx`
10. `src/pages/services/AIAgentsAutomation.tsx`

### What Gets Removed
The block that looks like this on each page:
```jsx
<motion.div 
  className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl w-fit mb-6 border border-white/10"
  whileHover={{ scale: 1.05, rotate: 5 }}
  transition={{ type: 'spring', stiffness: 300 }}
>
  <IconName className="h-12 w-12 text-accent icon-3d" />
</motion.div>
```

Also clean up any now-unused icon imports (e.g., `Search`, `Brain`, `Mail`, etc.) if they are only used in that hero block.

