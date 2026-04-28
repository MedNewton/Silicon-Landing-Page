# Responsiveness fix-and-polish — design spec

**Date:** 2026-04-28
**Scope:** breakage fixes on inner pages + polish across the site (no homepage-tree unification, no `sm` tier).

## Problem

1. **Inner pages (`/consultants`, `/about/who-are-we`, `/about/mission`, `/about/vision`, `/about/values`) have no mobile header.** They render `Header` (desktop) directly. `Header` has no `display` gate, and `MobileHeader` is only rendered transitively through `MobileHero` (which lives only in the mobile homepage tree). On a phone, inner pages show the desktop pill nav — eight items + two pill buttons + language switcher — crammed into ~360 px.
2. **Mobile drawer hardcodes a US flag and "EN" label**, regardless of the active locale. The drawer also has no way to switch language at all — the language switcher only exists in the desktop header.
3. **Animations ignore `prefers-reduced-motion`.** Two infinite marquees, two autoplay slideshows, a pulsing green dot in three places, and a shimmer-gradient button in three places all run unconditionally.
4. **Desktop dropdowns open on hover only.** Touch users hitting `md+` (large iPads in landscape) get jittery emulated-hover behavior. Click-to-toggle exists but races with the hover handlers.
5. **Desktop hero title/subtitle use viewport-percentage widths (`60%`/`40%`).** On viewports just over the `md` breakpoint (~900–1100 px), the text is cramped.

## Non-goals

- Unifying the desktop and mobile homepage trees into one responsive tree.
- Adding a tablet (`sm`) tier across shared sections.
- Touch-target minimum enforcement (e.g. 44×44).
- Removing `body { overflow-x: hidden }` and fixing root causes.
- Pricing-card stacking redesign.

These were considered and explicitly deferred.

## Design

### §1 — Inner-page mobile header

Mirror the homepage pattern: render both headers, gate each with `display`.

**`src/components/layout/header.tsx`** — root `<Stack component="header">` gains `display: { xs: "none", md: "flex" }`. No other prop or markup changes.

**`src/components/layout/mobile/mobileHeader.tsx`** — already gated `display: { xs: "flex", md: "none" }`. No change here for §1.

**Inner pages** — at the top of the inner `<Stack>` in each page below, render `<MobileHeader />` next to the existing `<Header />`. Both mount in the DOM; `display` picks one per viewport.

- `src/app/[locale]/consultants/page.tsx`
- `src/app/[locale]/about/who-are-we/page.tsx`
- `src/app/[locale]/about/mission/page.tsx`
- `src/app/[locale]/about/vision/page.tsx`
- `src/app/[locale]/about/values/page.tsx`

The homepage (`/` and `/mobile`) is untouched — `Hero`/`MobileHero` already include the right header for each tree.

### §2 — Mobile drawer: locale-aware flag and language switching

**Shared data source.** Lift the `LANGUAGES` array out of `src/components/layout/languageSwitcher.tsx` into a new sibling file `src/components/layout/locales.ts` exporting `LANGUAGES` and the `LocaleCode` / `Language` types. Both `languageSwitcher.tsx` and `mobileHeader.tsx` import from there.

**Drawer change.** In `src/components/layout/mobile/mobileHeader.tsx`, replace the bottom block (currently a hardcoded `<USFlag size={24} />` + `"EN"` `Stack`) with an inline two-pill toggle:

- A `Stack direction="row" gap={1}` of two buttons, one per locale.
- The active locale's pill is filled with `theme.palette.titleGradient`, white text.
- The inactive pill has a white background, dark text, light border (matches the existing `whitePillSx` aesthetic).
- Each pill shows the flag (`<Flag size={20} />`) and label (`EN` / `IT`).
- Tapping the inactive pill calls `router.replace(pathname, { locale: code })` inside a `useTransition`, then calls `handleClose()` to dismiss the drawer.

The `useRouter` and `usePathname` imports come from `@/i18n/navigation`, same as in `languageSwitcher.tsx`.

No dropdown inside the drawer.

### §3 — Reduced motion

Use the cheapest mechanism per case: CSS media queries inside `sx` for declarative `@keyframes`, `useMediaQuery` for JS timers.

**CSS-only — add `"@media (prefers-reduced-motion: reduce)": { animation: "none" }` to the existing `sx` block:**

- `src/components/hero/hero.tsx` — pulse dot.
- `src/components/hero/mobile/mobileHero.tsx` — pulse dot.
- `src/components/consultants/consultantsSection.tsx` — pulse dot.
- `src/components/layout/header.tsx` — `gradientButtonSx` shimmer.
- `src/components/layout/mobile/mobileHeader.tsx` — `gradientPillSx` shimmer.
- `src/components/consultantsPage/consultantsHero.tsx` — "Find a Consultant" button shimmer.
- `src/components/testimonials/testimonialsSection.tsx` — both marquee rows. Strips freeze at `translateX(0)`.
- `src/components/consultantsPage/consultantsMarquee.tsx` — single marquee freezes.

For the marquees, the existing animation triple-renders the items list to make the loop seamless. When animation is disabled the visible content is just the first third — fine, no layout change needed.

**JS-gated — add `const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)")` and skip the autoplay timer when true:**

- `src/components/bento/mobileBusinessPlanSlider.tsx` — `useEffect` autoplay loop becomes a no-op when reduced. Touch swipe and dot-tap still work.
- `src/components/consultantsPage/consultantsHero.tsx` — screenshot rotation `useEffect` becomes a no-op when reduced. The first screenshot stays visible; dots still navigate.

No new dependencies. `useMediaQuery` is already exported from `@mui/material`.

Both JS-gated components are already client components (`"use client"`). No server-component conversions needed in this pass; the pulse dot inside `consultants/consultantsSection.tsx` is a server component but uses CSS-only handling, so no `"use client"` boundary change is required.

### §4 — Tap-friendly dropdowns

**`src/components/layout/headerDropdown.tsx`** and **`src/components/layout/languageSwitcher.tsx`** — both bind `onMouseEnter` / `onMouseLeave` on the trigger `<Box>` unconditionally.

Change: at the top of each component, add `const canHover = useMediaQuery("(hover: hover) and (pointer: fine)")`. Pass `onMouseEnter={canHover ? handleEnter : undefined}` and `onMouseLeave={canHover ? handleLeave : undefined}` (or render a different prop bag conditionally — equivalent).

Click-to-toggle (`handleTriggerClick`, `setOpen((prev) => !prev)`) stays exactly as today and serves both modes.

Both files are already `"use client"`. No boundary change.

### §5 — Hero title/subtitle width

**`src/components/hero/hero.tsx`** — desktop only.

- Title `<Typography variant="h2">`: change `width: "60%"` to `maxWidth: 720, width: "100%", px: { md: 2 }`.
- Subtitle `<Typography variant="subtitle1">`: change `width: "40%"` to `maxWidth: 480, width: "100%", px: { md: 2 }`.

Both keep `textAlign: "center"`. The parent `<Stack>` has `alignItems="center"`, so the bounded-width text centers under the badge.

`src/components/hero/mobile/mobileHero.tsx` — no change. Existing `width: "90%"` / `"85%"` is appropriate for narrow viewports.

## Files touched (summary)

Added:
- `src/components/layout/locales.ts`

Modified:
- `src/components/layout/header.tsx` — display gate, shimmer reduced-motion
- `src/components/layout/headerDropdown.tsx` — hover gate
- `src/components/layout/languageSwitcher.tsx` — hover gate, import LANGUAGES from locales.ts
- `src/components/layout/mobile/mobileHeader.tsx` — locale toggle, shimmer reduced-motion, import LANGUAGES from locales.ts
- `src/components/hero/hero.tsx` — title/subtitle widths, pulse reduced-motion
- `src/components/hero/mobile/mobileHero.tsx` — pulse reduced-motion
- `src/components/consultants/consultantsSection.tsx` — pulse reduced-motion
- `src/components/consultantsPage/consultantsHero.tsx` — shimmer reduced-motion, autoplay reduced-motion gate
- `src/components/testimonials/testimonialsSection.tsx` — marquee reduced-motion
- `src/components/consultantsPage/consultantsMarquee.tsx` — marquee reduced-motion
- `src/components/bento/mobileBusinessPlanSlider.tsx` — autoplay reduced-motion gate
- `src/app/[locale]/consultants/page.tsx` — render `<MobileHeader />`
- `src/app/[locale]/about/who-are-we/page.tsx` — render `<MobileHeader />`
- `src/app/[locale]/about/mission/page.tsx` — render `<MobileHeader />`
- `src/app/[locale]/about/vision/page.tsx` — render `<MobileHeader />`
- `src/app/[locale]/about/values/page.tsx` — render `<MobileHeader />`

## Verification

For each section, the manual check on a phone-sized viewport (and desktop where relevant):

- §1 — visit `/consultants` and each `/about/*` route on a 360–414 px viewport (or with iPhone DevTools device emulation). Drawer header shows; desktop pill is hidden. At ≥900 px desktop pill shows; drawer trigger is hidden.
- §2 — open the drawer on `/it/...`, see IT pill highlighted with Italian flag; tap EN, drawer closes, route swaps to `/en/...`. Reload on `/en/...`, drawer shows EN pill highlighted.
- §3 — set DevTools "Emulate CSS prefers-reduced-motion: reduce". Marquees freeze, pulse dots stop glowing, shimmer buttons stop shifting, the bento and consultants-hero auto-rotations stop advancing. Manual swipe / tap-dot still works on the sliders.
- §4 — on touch (e.g. device emulation with touch on, or a real iPad in landscape ≥md), tapping the desktop "Product" / "Resources" / "About us" / language switcher trigger toggles open/close cleanly without a hover-delay ghost-open. With a mouse on desktop, hover behavior is identical to today.
- §5 — at viewports of 900, 1024, and 1440 px on the homepage (`/`), the hero title and subtitle wrap at sensible measures and remain centered. No regressions in mobile hero.

## Risks

- The marquee `@media (prefers-reduced-motion: reduce)` rule must be more specific than the existing `animation: "marqueeLeft 90s linear infinite"` declaration. Inside `sx`, the media-query block is applied as a separate rule and wins by source order. Verify in DevTools that it overrides; if not, raise specificity (e.g. `&&` selector).
- `useMediaQuery` returns `false` on the server during SSR for clients with reduced motion until hydration. The marquee will start animating, then snap to frozen on hydration. Acceptable for this pass — the alternative (suppress hydration mismatch warnings or duplicate animations in a `<noscript>`) is more code than the issue warrants.
- Lifting `LANGUAGES` to `locales.ts` and re-importing from `languageSwitcher.tsx` is a cross-file refactor; touching the existing language switcher must not regress the desktop header. Manual test the desktop switcher after the refactor.
