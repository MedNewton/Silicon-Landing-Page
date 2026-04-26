# "Who we are" page — Design Spec

Date: 2026-04-26
Status: Approved, ready for implementation plan

## Goal

Build a new "Who we are" marketing page at `/about/who-are-we` and wire it into the existing `About us` header dropdown. The page introduces SiliconPlan — who it's for and what it produces — through a portrait-led hero and a 5-card capabilities grid. Visual reference: design mockup provided 2026-04-26 (portrait of a woman with floating "Business plan" / "Pitch Deck" tags on the right; left column with title, description, and two bullet items; followed by a 5-card grid under a "Through an approach based on artificial intelligence…" heading).

## Scope

**In scope**
- New route `/about/who-are-we` (Next.js App Router), serving the same responsive component to desktop and mobile clients (no separate mobile route).
- Two new section components: `WhoAreWeHero` and `WhoAreWeCapabilities`.
- Wiring the existing "Who we are" entry in `ABOUT_ITEMS` (`src/components/layout/navItems.tsx` line 46) to the new route.
- Reusing the existing `<Header />` and `<Footer />` so the page sits within the standard chrome.
- Relocating the supplied portrait PNG from `/assets/whoarewe/img.png` into `src/assets/whoarewe/img.png` to match the project's static-import convention.

**Out of scope**
- The other three `ABOUT_ITEMS` dropdown links (Mission, Vision, Values) — they keep `href="#"` until separately specced.
- i18n / Italian translations — the page ships English-only and gets localized in the next-intl Phase 1 work already specced under `2026-04-25-i18n-design.md`.
- Final per-card descriptive copy. Each of the 5 cards uses an identical placeholder string for now; per-card copy will be filled in by the user post-launch.
- Custom metadata / OG tags / structured data for the page (matches current homepage which has none).
- Backend, CMS, or analytics wiring.

## Approach

### Routing & file layout

```
src/app/about/who-are-we/page.tsx              # page entry — composes Header, sections, Footer
src/components/whoAreWe/whoAreWeHero.tsx       # hero section (text left, portrait right)
src/components/whoAreWe/whoAreWeCapabilities.tsx  # heading + 5-card grid
src/assets/whoarewe/img.png                    # portrait PNG (relocated from public/assets/whoarewe/)
```

Pattern matches every other section in the codebase: each visual section gets its own component file, the page file just composes them. Mirrors how `src/app/page.tsx` composes the homepage.

The path `/about/who-are-we` uses a nested `about/` segment so future Mission / Vision / Values pages can sit alongside as `/about/mission`, `/about/vision`, `/about/values` without restructuring.

### Page composition

`src/app/about/who-are-we/page.tsx`:

```tsx
<Stack
  component="main"
  width="100%"
  minHeight="100vh"
  sx={{ background: theme.palette.background.default }}
>
  <Stack width="100%" alignItems="center" py={1.5} px={2}>
    <Header />
    <WhoAreWeHero />
    <WhoAreWeCapabilities />
  </Stack>
  <Footer />
</Stack>
```

- Mirrors `src/app/page.tsx`: `background.default` (`#F9F9F9`) at the page level, content sections wrapped in an inner `Stack` with `py={1.5} px={2}`, footer outside that wrapper.
- `minHeight: "100vh"` prevents content collapse on short pages.
- **Header placement is intentionally different from the homepage.** On the homepage, `<Header />` is absolutely positioned inside `<Hero />` so it overlays the hero gradient. On this page, the header is a normal flow child at the top of the inner stack — the design doesn't call for a header-overlaying-hero effect. The Header component is self-centering (`marginX="auto"`, `width="92vw"`), so it renders correctly in normal flow without modification.
- No locale logic — middleware mobile rewrite only applies to `/`, so this route serves identical markup everywhere.

### Hero section — `WhoAreWeHero`

Two-column on desktop (`md` and up), single column on mobile. Image renders **above** text on mobile so the visual leads.

**Left column (text):**
1. **Title** — "Who we are"
   - Color: `theme.palette.titleGradient` (the same purple gradient `#3F4DCC` used on the homepage hero — keeps brand consistency).
   - Typography: `variant="h2"` (matches homepage hero scale).
2. **Description** — body text, max-width ~480px:
   > "SiliconPlan is a digital platform that helps aspiring entrepreneurs, professionals, and organizations transform an idea into a structured, presentable, and financeable project."
3. **Bullet list** — two items, each rendered as a horizontal `Stack`:
   - Small purple dot — `Box` with `bgcolor: "#3F6DDD"` (the indigo stop from `theme.palette.titleGradient`), `borderRadius: "50%"`, `width: 8`, `height: 8`, top-aligned with the first text line via a small `mt` to compensate for line-height.
   - Two-line copy on the right.

   Note: `theme.palette.primary.main` is dark navy `rgba(30, 43, 66, 1)` — **not** the purple shown in the design. The bullet dots use a hex color picked from `titleGradient` (`#3F6DDD`) so they visually match the title and the card icons.
   - Items:
     1. "Today, doing business requires multidisciplinary skills, diverse tools, and often high costs."
     2. "SiliconPlan combines all of this in a single, accessible, and guided platform."

**Right column (image):**
- `next/image` rendering the statically-imported portrait PNG.
- The "Business plan / Download" and "Pitch Deck / View" floating tags shown in the mockup are **baked into the PNG** — no overlay markup is needed.
- `priority` flag set since the image is above-the-fold.
- Reasonable `sizes` for responsive optimization (e.g. `"(min-width: 900px) 50vw, 100vw"`).

**Spacing:**
- Section: `py: { xs: 8, md: 14 }`, `px: { xs: 3, md: 10 }` — matches the scale used by the homepage hero / bento.
- Column gap: `~8` (64px) on desktop.

### Capabilities section — `WhoAreWeCapabilities`

**Heading (above grid):**

> "Through an approach based on artificial intelligence, a structured methodology, and human support, we enable users to develop"

- Plain dark text (no gradient).
- Left-aligned.
- `fontSize: { xs: 22, md: 28 }`, `fontWeight: 500`, `lineHeight: 1.4`.
- Bottom margin separates it from the grid below (`mb: { xs: 4, md: 6 }`).

**Grid:**
- CSS grid via MUI `sx`: `gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }`.
- `gap: 3` (24px).
- 5 cards in DOM order — row 1 has 3 cards, row 2 has 2 cards left-aligned with the third grid cell empty (matches the screenshot exactly).

**Card data (typed array, top of file):**

```ts
const PLACEHOLDER = "Access Business Plans, Canvas models, and Pitch Decks directly inside the platform.";

type CapabilityCard = {
  Icon: ComponentType<IconProps>;
  title: string;
  description: string;
};

const CARDS: CapabilityCard[] = [
  { Icon: Element4,        title: "Business Model",       description: PLACEHOLDER },
  { Icon: Note1,           title: "Business Plan",        description: PLACEHOLDER },
  { Icon: PresentionChart, title: "Pitch Deck",           description: PLACEHOLDER },
  { Icon: Chart2,          title: "Financial Analysis",   description: PLACEHOLDER },
  { Icon: Chart,           title: "Pre-Money Valuations", description: PLACEHOLDER },
];
```

`Element4`, `Note1`, `PresentionChart`, `Chart` already appear in `navItems.tsx` for the matching Product dropdown items — reused here for visual consistency. `Chart2` is the iconsax icon picked for "Financial Analysis" (no existing nav entry to mirror).

`PLACEHOLDER` is defined once and referenced 5×. When the user replaces the per-card descriptive copy, they edit the array entries directly.

**Card visual:**
- White background, `borderRadius: 4` (16px), 1px border in light grey (`#E5E7EB`), subtle shadow on hover.
- Padding: `3` (24px).
- Top → bottom layout:
  1. Icon block — ~56×56 square, `borderRadius: 3` (12px), light purple tint background (`rgba(63, 109, 221, 0.08)` — alpha of `#3F6DDD`), iconsax icon centered in color `#3F6DDD`, size 28. (Same indigo as the bullet dots, again because `primary.main` is dark navy and would not match the design.)
  2. ~20px gap.
  3. Title — `fontWeight: 600`, ~18px, color `text.primary`.
  4. ~10px gap.
  5. Description — light grey (`text.secondary`), ~14–15px, `lineHeight: 1.5`.

**Spacing:**
- Section: `py: { xs: 8, md: 12 }`, `px: { xs: 3, md: 10 }`.

### Header link wiring

`src/components/layout/navItems.tsx`, line 46, change:

```ts
{ Icon: Profile, label: "Who we are", href: "#" },
```

to:

```ts
{ Icon: Profile, label: "Who we are", href: "/about/who-are-we" },
```

The existing `headerDropdown.tsx` already renders the `href` as a navigable link, so no other code change is required to make the dropdown entry work.

### Component contracts

Both new section components are stateless, take no props, and render fixed content. They consume the theme via `useTheme()` only where needed (gradient title, primary color for bullets/icons). No hooks, no client-side state, no effects — they can stay as React Server Components, matching the rest of the codebase's section components.

## Responsive behavior summary

| Breakpoint | Hero columns | Image position | Cards grid |
|------------|--------------|----------------|------------|
| `xs` (mobile) | 1 column | Above text | 1 column |
| `sm` (tablet) | 1 column | Above text | 2 columns |
| `md`+ (desktop) | 2 columns (text left, image right) | Right column | 3 columns |

## Out of scope (explicit)

- Mission / Vision / Values pages — separate specs later.
- i18n / IT translations — handled by the broader i18n Phase 1 workstream.
- Page metadata (`<Metadata>`, OG tags, etc.) — none of the existing pages have it; can be added project-wide later.
- Custom mobile route under `/mobile/about/who-are-we` — not needed; responsive sx handles it.
- Floating-tag overlay markup over the hero image — tags are baked into the PNG.
- Per-card descriptive copy — placeholder for now, user edits in place after launch.
