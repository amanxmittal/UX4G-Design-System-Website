---
name: UX4G Design System
description: The official component library and pattern repository for Government of India digital initiatives.
colors:
  primary: "#6a4eff"
  primary-deep: "#4a2bc2"
  primary-dark: "#301c7d"
  primary-tint: "#f2efff"
  primary-tint-2: "#dcd4ff"
  amber: "#ffa827"
  amber-soft: "#fff3e6"
  tertiary: "#a66acc"
  ink: "#171717"
  ink-2: "#262626"
  ink-3: "#404040"
  neutral-500: "#737373"
  neutral-400: "#a1a1a1"
  neutral-300: "#d9d9d9"
  neutral-200: "#e5e5e5"
  neutral-100: "#f5f5f5"
  neutral-50: "#fafafa"
typography:
  display:
    fontFamily: "\"Schibsted Grotesk\", \"Helvetica Neue\", sans-serif"
    fontSize: "80px"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "\"Schibsted Grotesk\", \"Helvetica Neue\", sans-serif"
    fontSize: "48px"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "\"Schibsted Grotesk\", \"Helvetica Neue\", sans-serif"
    fontSize: "32px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "\"Noto Sans\", system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-large:
    fontFamily: "\"Noto Sans\", system-ui, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.6
  label:
    fontFamily: "\"Noto Sans\", system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  none: "0px"
  xs: "2px"
  sm: "4px"
  md: "8px"
  lg: "12px"
  xl: "16px"
  2xl: "24px"
  circular: "999px"
spacing:
  1: "2px"
  2: "4px"
  3: "6px"
  4: "8px"
  5: "12px"
  6: "16px"
  7: "20px"
  8: "24px"
  9: "32px"
  10: "40px"
  11: "48px"
  12: "56px"
  13: "64px"
  14: "80px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.circular}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.ink-2}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.circular}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.circular}"
    padding: "12px 24px"
  button-brand:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.circular}"
    padding: "10px 22px"
  button-brand-hover:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.neutral-50}"
    rounded: "{rounded.circular}"
    padding: "10px 22px"
  chip:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.circular}"
    padding: "4px 12px"
  card:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xl}"
    padding: "24px"
  input:
    backgroundColor: "{colors.neutral-50}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
---

# Design System: UX4G

## 1. Overview

**Creative North Star: "The Civic Atlas"**

UX4G is the authoritative navigational reference for Indian government digital design. Like a well-made atlas, it serves two audiences in the same moment: the designer charting new territory and the developer following a precise route. Every page is organized for fast lookup, every component is documented to resolve ambiguity, and the visual language earns trust through consistency and craft, not decoration.

The register is **brand**: the site's quality IS the argument. A sloppy documentation site undermines every component it documents. Because UX4G is the design system for a billion citizens, this site must demonstrate that Indian government digital work competes at the highest international level, not aspires to it. The ambition is quiet but absolute.

The aesthetic is committed: deep indigo-purple carries 40-60% of any given surface (component hero banners, nav elements, accent touches), with amber used surgically as a directive signal. Backgrounds are near-white with a neutral-warm cast, never pure white. Type is large and assured. Spacing is generous. Hierarchy is engineered, not felt.

**Key Characteristics:**
- Indigo-to-violet primary palette with amber as the single accent, never both at once
- Schibsted Grotesk for display and UI headings; Noto Sans for body (22 Indic scripts)
- Generous whitespace with tight internal component density
- Flat surfaces with purple-tinted shadows (never neutral gray)
- Scale + blur dissolve on scroll-triggered card entrances (0.45s expo-out)
- No gradients in body copy; no glassmorphism; no side-stripe borders

## 2. Colors: The Indigo-Amber System

The palette is committed on the primary axis: indigo carries the brand weight. Amber appears once per view, never twice.

### Primary
- **Electric Indigo** (`#6a4eff`): Primary interactive color. Used on CTA buttons (brand tier), active nav states, focus rings, and component hero banner backgrounds at full saturation.
- **Deep Indigo** (`#4a2bc2`): Hover state for primary-branded interactive elements. Never used for text.
- **Near-Indigo Night** (`#301c7d`): Used for headlines set against light backgrounds, and as the shadow color in purple-tinted box-shadows. The backbone of the dark registration.
- **Lavender Wash** (`#f2efff`): Background tints for selected states, chip backgrounds, and subtle section washes. The lightest step of the primary ramp.
- **Soft Lavender** (`#dcd4ff`): Border color for primary-tinted containers.

### Secondary
- **Signal Amber** (`#ffa827`): The single accent. Used on decorative bolt icons in hero banners, progress indicators, and highlight chips. Never on text. Never on more than one element per viewport.
- **Amber Glow** (`#fff3e6`): Background tint for amber-accented callout areas.

### Tertiary
- **Muted Violet** (`#a66acc`): Soft counterpart to the primary ramp. Used in the UX4G wordmark (the "4G" syllable), tertiary illustration elements, and avatar fallbacks. Not used for interactive states.

### Neutral
- **Ink Black** (`#171717`): All body text, primary button background. Near-black with a neutral cast; never pure `#000`.
- **Warm Near-Black** (`#262626`): Secondary text, hover background for dark buttons.
- **Charcoal** (`#404040`): Tertiary body text; captions and metadata.
- **Mid Grey** (`#737373`): Placeholder text, disabled states, hint copy.
- **Light Mid Grey** (`#a1a1a1`): Inactive borders, dividers in dense layouts.
- **Soft Grey** (`#d9d9d9`): Default border color for cards and inputs.
- **Very Light Grey** (`#e5e5e5`): Section separators and horizontal rules.
- **Surface White** (`#f5f5f5`): Page background in light mode.
- **Near White** (`#fafafa`): Card surfaces, input backgrounds.

### Named Rules
**The One Amber Rule.** Signal Amber (`#ffa827`) appears at most once per viewport, on the single most directive element. Its rarity is the point; two amber elements cancel each other.

**The Purple Shadow Rule.** Box-shadows on elevated cards use `rgba(48, 28, 125, 0.5)` as the shadow color, not neutral gray. Every surface that floats is tinted toward the brand.

## 3. Typography: The Atlas Pairing

**Display Font:** Schibsted Grotesk (with Helvetica Neue, sans-serif fallback) — used for all page titles, section headings, and UI labels on the documentation site.

**Body Font:** Noto Sans (with system-ui, sans-serif fallback) — used for all body copy, component descriptions, and any text requiring multilingual rendering across 22 Indic scripts.

**Character:** Schibsted Grotesk is authoritative without being cold: its slightly condensed proportions and tight negative tracking at large sizes produce the confident scale of an official standard, while Noto Sans's humanist legibility keeps long-form reading frictionless across scripts. They share weight ranges without competing.

### Hierarchy
- **Display** (800 weight, 80px, line-height 1, tracking −0.04em): Used once per page for the hero or section headline. Never for body copy, never centered unless explicitly a one-line lockup.
- **Headline** (700 weight, 48px, line-height 1.1, tracking −0.02em): Major section titles. One per section.
- **Title** (700 weight, 32px, line-height 1.2, tracking −0.01em): Component category headings, card-level emphasis. The workhorse heading.
- **Body Large** (500 weight, 20px, line-height 1.6): Introductory paragraphs and hero supporting copy. Max 68ch line length.
- **Body** (400 weight, 16px, line-height 1.6): Standard documentation copy. Max 72ch line length.
- **Label** (600 weight, 12px, line-height 1, tracking +0.08em, uppercase): Tags, status indicators, UI labels, anatomy callouts. Always uppercase.

### Named Rules
**The Two-Font Rule.** Schibsted Grotesk and Noto Sans are the only type families on the documentation site. No third typeface. The component library internally uses Noto Sans Display for illustration-level labels, but that font does not surface in site UI.

**The No-Gradient-Text Rule.** `background-clip: text` with a gradient is prohibited. Headline emphasis is achieved through size and weight, not color shifts.

## 4. Elevation

The system uses a **flat-with-state** philosophy: surfaces are flush by default. Depth emerges as a response to interaction state (hover, focus, floating containers) rather than as decoration.

### Shadow Vocabulary
- **Ambient lift** (`0 6px 14px -6px rgba(48, 28, 125, 0.5)`): Applied to component cards and mini hero thumbnails on hover. Purple-tinted, tight Y-offset, strong negative spread. Signals interactive elevation.
- **Modal / popover** (`0 20px 40px -12px rgba(48, 28, 125, 0.35), 0 4px 8px rgba(0, 0, 0, 0.08)`): Larger floating surfaces. Two-layer: purple primary, neutral secondary.
- **Input focus** (`0 0 0 3px rgba(106, 78, 255, 0.25)`): Focus ring halo, not a cast shadow. Signals keyboard navigation state.
- **Flat / no shadow**: Page sections, group headings, horizontal rules — no elevation.

### Named Rules
**The Purple Tint Rule.** No neutral-gray shadows. Every shadow that lifts a surface toward the user is tinted `rgba(48, 28, 125, ...)`. If it casts a shadow, it acknowledges the brand.

**The Flat-By-Default Rule.** Sections, text blocks, and static containers carry no shadow at rest. Elevation appears only when an element floats (modal, tooltip, dropdown) or is interacted with (hover card).

## 5. Components

### Buttons

Buttons come in three registers: **site hero** (pill-shaped, near-black with internal icon circle), **brand** (pill-shaped, Electric Indigo fill), and **ghost** (pill-shaped, outlined with near-black stroke).

- **Shape:** Fully pill (999px radius). No other radius for buttons.
- **Site Hero Primary:** Ink black (`#171717`) fill, near-white text, pill shape, left-heavy padding (`12px 12px 12px 24px`), internal 32px icon circle at right.
  - Hover: `scale(0.98)`, background shifts to `#262626`, icon circle fills to Electric Indigo and translates 4px right.
  - Transition: 700ms `cubic-bezier(0.32, 0.72, 0, 1)` on icon; 200ms on background.
- **Brand CTA:** Electric Indigo (`#6a4eff`) fill, white text, same pill shape.
  - Hover: Deep Indigo (`#4a2bc2`) fill.
- **Ghost / Outline:** Transparent fill, 1.5px near-black border, near-black text, pill shape.
  - Hover: Near-white fill (`#f5f5f5`).
- **Icon buttons:** Circular (999px), 40px × 40px, same color registers.

### Chips / Tags

Used for filter labels, status indicators, and category tags.

- **Style:** Lavender Wash (`#f2efff`) background, Near-Indigo Night (`#301c7d`) text, pill shape, compact padding (`4px 12px`), 600-weight 12px label.
- **Amber variant:** Signal Amber background, near-black text. Reserved for the single directive label per view.
- **Neutral:** Surface White background, 1px Soft Grey border, Charcoal text.

### Cards / Component Tiles

The component listing grid uses two card variants: **grid card** (thumbnail dominant) and **list card** (thumbnail + description).

- **Corner Style:** 14px radius (between `{rounded.lg}` and `{rounded.xl}`)
- **Grid Card:** 280px wide, 280px tall, white background. Purple-gradient thumbnail fills two-thirds of height. Name in 14px Schibsted Grotesk 700 at bottom. Hover: `scale(1.02)` + ambient lift shadow.
- **List Card:** Full-width, 80px tall, white background. 120px thumbnail strip at left. Name + description at right. Same hover treatment.
- **Hover transition:** `transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)`, scale + blur entrance animation on scroll.

### Component Hero Banners

The signature pattern: full-width purple-gradient panels at the top of each component page, each containing a custom JSX illustration of the component.

- **Background:** Linear gradient from Electric Indigo (`#6a4eff`) to Deep Indigo (`#4a2bc2`) at 135 degrees, with a soft grain texture overlay and a single strategic amber glow accent (radial gradient, ~200px diameter, placed adjacent to the illustrated element).
- **Height:** ~240px on component pages; ~160px (mini) on component listing thumbnails.
- **Illustration style:** Abstract but recognizable component mockups in white and near-white, using the same card/input/button shapes as the system. No photographic assets.

### Inputs / Fields

- **Style:** Near-white (`#fafafa`) background, 1.5px Soft Grey border (`#d9d9d9`), 8px radius, `10px 14px` padding.
- **Focus:** 3px Electric Indigo halo (`0 0 0 3px rgba(106,78,255,0.25)`), border color shifts to Electric Indigo.
- **Error:** Border and label shift to danger red (`#db372d`).
- **Disabled:** 40% opacity, `not-allowed` cursor.

### Navigation

Top-level site navigation: transparent background on scroll, transitions to near-white with border on scroll.

- **Default state:** 60px height, Schibsted Grotesk 600 14px uppercase labels, Near-Indigo Night text.
- **Active state:** Electric Indigo text, no underline.
- **Hover:** Lavender Wash background pill, transition 150ms.
- **Mobile:** Collapses to hamburger menu; full-screen overlay with same type scale.

### Component Hero Thumbnails (Signature Component)

Mini hero panels used as card thumbnails on the components listing. Each is a compact 200×160px version of the full component hero, containing the same JSX illustration scaled down.

- **Background:** Same purple gradient + grain + amber glow as full heroes.
- **Illustration:** Simplified version of the hero JSX (fewer elements, larger relative scale).
- **Border radius:** 10px, matching the card tile's inner thumbnail stage.

## 6. Do's and Don'ts

### Do:
- **Do** use `rgba(48, 28, 125, 0.5)` as the shadow color for any elevated card. Purple-tinted shadows are the signature.
- **Do** keep Signal Amber (`#ffa827`) to one use per viewport. One bolt icon, one highlight chip, one CTA badge — then stop.
- **Do** use Schibsted Grotesk at negative tracking (−0.02em to −0.04em) for display sizes. The tight spacing is intentional and essential to the authority of the type.
- **Do** set Noto Sans as the body font for all textual content, including component documentation. Its multilingual coverage is a feature, not a fallback.
- **Do** animate cards on scroll with the scale + blur dissolve (scale from 0.92, blur from 8px, 0.45s ease-out-expo, staggered 45ms per card).
- **Do** use `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo) for all interface transitions. No bounce, no elastic, no linear.
- **Do** use pill radius (999px) on all buttons and filter chips. Partial rounding on buttons is never correct.
- **Do** keep body line length between 65–75ch. Documentation text should not span full-width containers.
- **Do** use Near White (`#fafafa`) for card surfaces and input backgrounds, not pure `#fff`. Every neutral should carry a faint warm cast.

### Don't:
- **Don't** make a generic SaaS docs site: white-background component grids with no personality, generic icon-heading-text card arrays, zero brand presence. The UX4G site is the argument for the system's quality.
- **Don't** reproduce old government web patterns: table-heavy layouts, maroon-on-grey color schemes, dense unspaced paragraphs. The explicit purpose of this system is to replace that era.
- **Don't** use startup-landing-page framing: gradient blobs, floating 3D cards, "10x faster" marketing copy, animated particle backgrounds. Commercial framing undermines civic trust.
- **Don't** use gradient text (`background-clip: text` + gradient). Never. Emphasis through weight and scale only.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored stripe on cards, list items, or callouts. Rewrite with full borders, background tints, or nothing.
- **Don't** use neutral gray shadows. If a surface casts a shadow, it should be purple-tinted.
- **Don't** animate CSS layout properties (`width`, `height`, `top`, `left`, `margin`). Use `transform` and `opacity` only.
- **Don't** use bounce or elastic easing curves. They undermine the "precise, civic, confident" personality.
- **Don't** use glassmorphism as a default. Blur-and-glass surfaces are decorative and erode the system's credibility.
- **Don't** introduce a third typeface. Schibsted Grotesk + Noto Sans is the complete typographic palette.
- **Don't** center-align body paragraphs. Only single-line display text and UI labels may be centered.
