# Header Redesign — Design Spec

Date: 2026-04-25
Status: Approved, ready for implementation plan

## Goal

Replace the current header on both desktop and mobile with a richer navigation bar that includes three hover-triggered dropdowns (Product, Resources, About us), additional plain nav links (Consultants, Pricing, Become a consultant), a decorative language switcher, and two action pills (Our Experts, Log In / Sign Up). Mobile drawer surfaces the same structure as accordion sections.

Visual reference: four images supplied by the user showing the new header bar and the contents of the three dropdowns. Icons follow the Vuesax / Iconsax linear style.

## Scope

**In scope**
- Desktop header rewrite (`src/components/layout/header.tsx`)
- Mobile header rewrite (`src/components/layout/mobile/mobileHeader.tsx`)
- New shared dropdown component (desktop) and accordion component (mobile)
- Shared nav-items module with icons + placeholder hrefs
- Inline US-flag SVG component for the language switcher
- New dependency: `iconsax-reactjs`

**Out of scope**
- Wiring real URLs — every new menu item uses `href="#"`
- Real i18n / language switching — flag + "EN" is decorative only
- Creating any new pages for the menu items
- Changes to Hero, Bento, Pricing, Footer, Theme

## Architecture

### File plan

**New**
- `src/components/layout/headerDropdown.tsx` — reusable hover dropdown for the three desktop menus
- `src/components/layout/navItems.tsx` — exported nav-item arrays with iconsax components inlined
- `src/components/layout/mobile/mobileNavAccordion.tsx` — reusable accordion section for the drawer
- `src/components/icons/USFlag.tsx` — small inline circular US-flag SVG

**Rewritten**
- `src/components/layout/header.tsx`
- `src/components/layout/mobile/mobileHeader.tsx`

### Why parametrize

The three dropdowns and three mobile accordion sections all render the same shape (icon + label rows). One component for each surface (desktop, mobile) takes `{ label, items }` props, eliminating duplication and ensuring visual consistency.

### Shared nav-items module

`navItems.tsx` exports three constants used by both desktop and mobile:

```
type NavItem = { Icon: React.ComponentType<IconProps>; label: string; href: string };

PRODUCT_ITEMS: NavItem[]    // Overview, How it works, Business Plan, Pitch Deck, Business Model Canvas, Pre-Money Valuation
RESOURCES_ITEMS: NavItem[]  // Contact Us, Blog, FAQ
ABOUT_ITEMS: NavItem[]      // Who we are, Mission, Vision, Values
```

Every `href` is `"#"` until URLs are decided.

## Desktop header

### Layout (left → right inside the existing pill container)

`Logo` · `Product▾` · `Consultants` · `Pricing` · `Resources▾` · `About us▾` · `Become a consultant` · `🇺🇸 EN` · `Our Experts` (white pill) · `Log In / Sign Up` (gradient pill)

### Container

- Keep the existing pill outer container, `theme.palette.headerGradient` background, `backdrop-filter: blur(10px)`, and rounded corners
- Width: `min-width: max-content`, `max-width: 95vw` (the current `55vw` / `70vw` clamp is too narrow for the new item count)
- Padding and gap reduced slightly to fit; nav links use `gap` ~3 instead of ~5

### Plain nav links

- Color: `text.secondary` default → `text.primary` on hover (current behavior preserved)
- Dropdown triggers (Product, Resources, About us) get an `iconsax-reactjs` `ArrowDown2` chevron next to the label
- "Pricing" replaces "Subscribe" wording (still placeholder `href="#"` per scope decision)

### Language switcher

- `<USFlag />` (24px circle) + "EN" text
- No click handler, no hover state — purely decorative
- `cursor: default`

### Action pills

- "Our Experts": white background, dark navy text, pill shape, links to `https://app.silicon-plan.live/?nav=consultants` (preserved from current Header)
- "Log In / Sign Up": existing gradient-shimmer pill style preserved, label changed from "Login" to "Log In / Sign Up", links to `https://app.silicon-plan.live` (preserved)

## Desktop dropdown component (`HeaderDropdown`)

### Behavior

- Hover trigger with debounced timers
- 150ms open delay on `mouseenter` (cleared if cursor leaves before firing)
- 200ms close delay on `mouseleave` (cleared if cursor returns to trigger or card before firing)
- Trigger and card share an `onMouseEnter` / `onMouseLeave` group so traveling between them does not close the menu
- Click on trigger toggles open state for keyboard / touch fallback
- Closing on outside click is implicit via `mouseleave`

### Visual

- Card anchored under the trigger with a small vertical offset (~8px)
- Background: `#FFFFFF`, `borderRadius: 16px`
- Shadow: `0px 24px 60px rgba(15, 27, 60, 0.12)` (matches existing bento card shadow)
- Padding: `p: 1.5`, item gap: `0.5`
- Each item row:
  - Icon: iconsax-reactjs Linear variant, `size={22}`, color `#3D537B` (text.secondary)
  - Label: 15px, color `#1E2B42` (primary), font weight 500
  - Row padding: `py: 1.25, px: 2`, `borderRadius: 12`
  - Hover row background: `rgba(63, 109, 221, 0.06)`
- Items render as MUI `Link` with `underline="none"`

### Props

```
type HeaderDropdownProps = {
  label: string;
  items: NavItem[];
};
```

## Icon mapping

All icons from `iconsax-reactjs`, `Linear` variant. Names below are first-pass picks based on the provided screenshots; if any name does not exist in the package, the implementation uses the closest visual match and notes the swap.

- **Product**
  - Overview → `Book1`
  - How it works → `Hierarchy` (fallback: `Diagram`)
  - Business Plan → `Note1` (fallback: `NoteText`)
  - Pitch Deck → `PresentionChart`
  - Business Model Canvas → `Element4`
  - Pre-Money Valuation → `Chart`
- **Resources**
  - Contact Us → `Magicpen`
  - Blog → `Edit2` (pencil)
  - FAQ → `MessageQuestion` (closest match for the hex-with-? glyph in the screenshot)
- **About us**
  - Who we are → `Profile` (or `ProfileCircle`)
  - Mission → `Sun1`
  - Vision → `TickSquare`
  - Values → `Star1` (or `Star`)
- **Trigger chevron** → `ArrowDown2`

## Mobile header

### Top bar

Unchanged from current: logo on left, "Silicon Plan" text in center, hamburger menu button on right; same pill container, same gradient background, same backdrop blur.

### Drawer content

Right-side `Drawer` (existing). New body:

```
[ logo ]                                [ X ]

Product                                  ▾
  · Overview
  · How it works
  · Business Plan
  · Pitch Deck
  · Business Model Canvas
  · Pre-Money Valuation
Consultants
Pricing
Resources                                ▾
  · Contact Us
  · Blog
  · FAQ
About us                                 ▾
  · Who we are
  · Mission
  · Vision
  · Values
Become a consultant
─────────────────────────
🇺🇸 EN
[ Our Experts ]            (full-width white pill)
[ Log In / Sign Up ]       (full-width gradient pill)
```

### `MobileNavAccordion` component

- Trigger row: label on left, `ArrowDown2` chevron on right, rotates 180° when open
- Body: MUI `Collapse`, renders the same `NavItem[]` with icon + label rows
- Sub-items inherit the `text.primary` color from the existing drawer typography
- One section open at a time: clicking a closed section closes whichever is currently open. State for which section is open lives in `mobileHeader.tsx` and is passed down as `{ openId, onToggle }` to each accordion.
- Tapping any sub-item closes the entire drawer (existing `handleClose` behavior preserved)

### Action pills inside drawer

Both render at the bottom of the drawer body, full-width:
- "Our Experts" — white pill, dark text, links to `app.silicon-plan.live/?nav=consultants`
- "Log In / Sign Up" — gradient pill (reuse `gradientButtonSx` style currently used in desktop header), white text, links to `app.silicon-plan.live`

## Dependency

Add `iconsax-reactjs` to `package.json` `dependencies`. Imports use named exports per icon: `import { Book1, Hierarchy, ... } from "iconsax-reactjs"`.

## Risks / known unknowns

- Some icon names in the spec may not exist in `iconsax-reactjs` exactly as written. The implementation will swap to the closest visual match where needed and note the swap inline.
- Hover-only dropdown is not keyboard-accessible by default. A click-to-toggle on the trigger is included to cover keyboard / touch users, but full focus-trap / arrow-key navigation inside the dropdown is out of scope.
- The header pill outer container width may need additional tuning at narrow desktop breakpoints — final width values will be set during implementation, validated visually.

## Verification

The redesigned header is verified by:
1. Running `npm run dev` and visiting `http://localhost:3000` to confirm desktop layout, dropdowns, hover behavior, and pill widths match the screenshots.
2. Resizing to a mobile width or visiting in a mobile UA to confirm the drawer renders the new accordion structure and all sections expand/collapse correctly with the open-one-at-a-time rule.
3. `npm run check` passes (lint + typecheck).
