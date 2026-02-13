# SiliconPlan Landing Page - Tasks from Client Feedback

## 1. CTA Button Text
- **Change** "Create My First Plan" → "Create My Plan"
- **Files:**
  - `src/components/hero/cta.tsx` (line 35)
  - `src/components/hero/mobile/mobileCta.tsx`

---

## 2. Fix Typos
- **"Standart" → "Standard"**
  - `src/components/pricing/pricing.tsx` (line 227)
  - `src/components/pricing/mobile/mobilePricing.tsx` (line 232)
- **"Quaterly" → "Quarterly"**
  - `src/components/bento/bentoSection.tsx` (line 292)

---

## 3. Pricing Section - Align Plans with Pitch Deck
Current state: "Standard" ($20) and "Premium" ($40)
Required state: **"Free" (0€), "Start-up" (27.90€), "Unicorn" (49.90€)** per month, with currency in EUR (€), not USD ($).

- Update plan names, prices, and descriptions in:
  - `src/components/pricing/pricing.tsx` (price constants lines 67-70, plan names lines 227, 393)
  - `src/components/pricing/mobile/mobilePricing.tsx`
- Update feature lists per plan to match the pitch deck (3 tiers instead of 2).
- **Remove** QuickBooks/Xero integration from the feature list (not in functional requirements).
- **Remove or update** the "550+ sample plans" claim (not currently supported).

---

## 4. Footer - Replace Placeholder Contact Data
Current: `+00 000 000 000` placeholder phone number, no real company info.

Replace with real company data:
- **Company:** Silicon Plan è un prodotto Smartool Srl - Start-up innovativa
- **Address:** Via Eleuterio Ruggiero 123, Caserta (CE)
- **P.IVA:** 04738960618
- **Phone:** +39 0823 21 04 74
- **Email:** info@siliconplan.com
- **PEC:** startool@pec.it

**Files:**
  - `src/components/layout/footer.tsx` (line 163 and surrounding area)
  - `src/components/layout/mobile/mobileFooter.tsx`

---

## 5. Footer - Update Social Media Links
Social icon buttons currently have no `href` attributes (they are placeholders). Add real URLs:

- **Facebook:** https://www.facebook.com/siliconplan
- **Instagram:** https://www.instagram.com/siliconplan/
- **LinkedIn:** https://www.linkedin.com/company/silicon-plan/

**Files:**
  - `src/components/layout/footer.tsx` (lines 168, 176, 184)
  - `src/components/layout/mobile/mobileFooter.tsx` (lines 161, 169, 177)

---

## 6. Footer - Privacy & Terms of Service Links
The "Privacy & Terms of Service" link currently leads to a generic/placeholder page. Connect it to the real legal page or create one.

**Files:**
  - `src/components/layout/footer.tsx` (lines 108-127)
  - `src/components/layout/mobile/mobileFooter.tsx`

---

## 7. Footer - Update Copyright Year
Current: `© 2025 SiliconPlan`
Update to: `© 2026 SiliconPlan` (or make it dynamic).

**Files:**
  - `src/components/layout/footer.tsx` (line 148)
  - `src/components/layout/mobile/mobileFooter.tsx` (line 194)

---

## 8. Testimonials Section
The Testimonials section is referenced in the header navigation but does not exist as a component. Either:
- **Option A:** Remove the "Testimonials" nav link until real testimonials are available.
- **Option B:** Build the section and populate with real use cases.

**Files:**
  - `src/components/layout/header.tsx` (line 40 - nav link)
  - `src/components/layout/mobile/mobileHeader.tsx`

---

## 9. Logo Assets (Design Task - Non-code)
Request the complete logo in vector format from the design team:
- Complete logo (symbol + logotype)
- Icon-only version
- Horizontal / vertical variants
- Light / dark versions
- Formats: SVG, AI, PDF

---

## 10. Hero Section - AI Preview Visual (Enhancement)
Consider adding a visual preview (mock screenshot of the dashboard/AI or a mini-flow "onboarding → output") to reinforce the "Companion AI" value proposition mentioned in the subtitle.

**File:** `src/components/hero/hero.tsx`
