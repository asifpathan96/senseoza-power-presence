

## Redesign "Trusted by Leading Brands" Section

### Problem
- Some logos (Fastrack, Aurum Icecreams) aren't visible — likely dark logos on dark backgrounds
- Logo sizes appear inconsistent
- Cards need uniform styling

### Solution
Redesign the client logo grid with consistent white/light background cards so all logos are visible regardless of their original colors.

### Changes to `src/pages/Home.tsx` (lines 334-360)

1. **Uniform card styling**: Give each logo card a solid white/light background (`bg-white`) so dark logos like Fastrack and Aurum are always visible against it
2. **Consistent sizing**: Fixed dimensions for all cards (e.g., `h-32 w-full`) with uniform padding
3. **Grid layout**: Clean 5-column grid on desktop, 3 on tablet, 2 on mobile — evenly spaced
4. **Hover effect**: Subtle border glow on hover with scale effect
5. **Image sizing**: All logos constrained to same `max-h-12` and `max-w-[120px]` with `object-contain` for uniform appearance

### Card design
```
┌─────────────────────┐
│                     │
│    [LOGO IMAGE]     │  ← white bg, centered
│     Brand Name      │  ← small text below
│                     │
└─────────────────────┘
```

Each card: `bg-white rounded-2xl border border-white/10 shadow-md` with the brand name in small muted text below the logo. This ensures dark logos (Fastrack, Aurum) are fully visible.

### Technical Details
- Edit only `src/pages/Home.tsx` lines ~334-360
- No new files or dependencies needed
- Add brand name label under each logo for better identification

