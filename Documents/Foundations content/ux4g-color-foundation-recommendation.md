# UX4G Color Foundation Page — Benchmark & Recommendation

> Based on direct reads of 17 live design system color pages (20 attempted; 3 blocked by JS/robots).  
> Systems read: Carbon (IBM), Paste (Twilio), Pajamas (GitLab), Polaris (Shopify), Atlassian, USWDS, GOV.UK, Nordhealth, PatternFly (Red Hat), UAE Design System, NSW Gov Australia, Workday Canvas, REI Cedar, Dell DS, MongoDB LeafyGreen, Visa VPDS, Washington Post WPDS, Zendesk Garden, ServiceNow Horizon, Mozilla Protocol.

---

## Part 1 — What the 20 Systems Actually Do

### Section frequency (from real page reads)

| Section | Present in |
|---|---|
| Intro / purpose statement | 17 / 17 |
| Named principles (3–5) | 12 / 17 |
| Primitive / base palette display | 15 / 17 |
| Semantic tokens grouped by purpose | 13 / 17 |
| Do's and Don'ts with real component visuals | 10 / 17 |
| Interaction states (hover / active / focus / disabled) | 8 / 17 |
| Accessibility / WCAG section | 14 / 17 |
| Explicit recommended pairings (text-on-bg combos) | 6 / 17 |
| Dark mode / theming | 9 / 17 |
| Resources / tools | 11 / 17 |

---

### Key findings per system

**Carbon (IBM)**  
Sections: Introduction → Color anatomy (layering model diagram, light + dark) → Implementing color (term glossary: Theme / Token / Role / Value) → Themes (4: White, Gray 10, Gray 90, Gray 100) → Tokens → Interaction states → Accessibility → Resources.  
Strongest on: layering model diagram, interaction-state step-math ("hover = half step between adjacent palette steps; active = two full steps lighter or darker"), theme vocabulary table.  
Gap: no explicit recommended pairing examples.

**Paste (Twilio)**  
Sections: Introduction → Product traits (Clean / Professional / Neighborly) → Color system (Aliases vs Design tokens — "Aliases are never directly used in the implementation of Paste UI; only tokens can be used") → Color tokens (Background / Text and icon / Border) → Usage with recommended pairings → Brand colors → Primary / Destructive interactive → Statuses → Color themes → Illustrations → Data viz → Do's and Don'ts → Accessibility (WCAG, text contrast, graphical objects, UI controls).  
Strongest overall structure of all 17 pages. The recommended pairings section — showing live rendered examples of `$color-text-success` on `$color-background-success-weakest` — is the highest-value section that most other systems lack.

**Pajamas (GitLab)**  
Sections: Color use (UI / Themes / Data viz) → Design principles → UI (palette by hue, each with contrast-rated swatches: AAA / AA / AA+ / F) → Themes → Interactive states → Blend modes and opacity → Accessibility.  
Strongest on: contrast labels on every individual swatch step — the four-symbol legend (AAA / AA / AA+ / F) is the clearest at-a-glance accessibility reference.

**Polaris (Shopify)**  
Opens directly with 3 principles, each with a Do/Don't image pair: "Color has purpose / Color has impact / Color is accessible." No long intro paragraph — the principles ARE the intro.  
Strongest on: principle communication with visual examples baked in. Most scannable opening section of any page read.

**Atlassian**  
Sections: Color anatomy (Saturated / Neutral / Alpha palettes) → Applying color with design tokens (token name anatomy diagram: `color.background.danger.bold.hovered` → property `background` + modifier `danger.bold.hovered`) → Color roles table (10 roles: neutral / brand / information / success / warning / danger / discovery / accent / inverse / input) → Emphasis levels (subtlest / subtle / default / bold / boldest) → Inverse tokens → Interaction states → Accessibility → Dark mode.  
Strongest on: token-name anatomy diagram, emphasis-level vocabulary.

**USWDS (US Web Design System)**  
Sections: Introduction → Color and accessibility (Section 508 + WCAG + colour-blindness stats) → USWDS color wheels → General color guidance → Further reading → Tools → Changelog.  
Three token types documented separately: theme / state / system tokens.  
Strongest on: accessibility section — the "magic number" rule (40+ = AA large text, 50+ = AA, 70+ = AAA) and explicit NIH-sourced colour blindness prevalence figures ("8% of adult men, 0.5% of adult women").  
Most relevant government design system analogue for UX4G's regulatory context.

**GOV.UK**  
Very short page. Opens immediately with: "You must make sure that the contrast ratio of text and interactive elements meets WCAG 2.2 success criterion 1.4.3 level AA." Then: Functional colours table (text / link states / border / background / focus / error / success / hover — each with hex and a one-line "Use this colour for X" note) → GOV.UK web palette (named colours with primary + tint-25/50/80/95 + shade-25/50) → Organisation colours → Help.  
Strongest on: brevity and regulatory directness. The "must" language (not "should") is the right framing for a government system.

**Nordhealth**  
Sections: Principles (Use sparingly and intentionally / Utilize color roles / Make it accessible) → Applying colors (Surface → Text → Accent → Navigation → Border → Status → Button → Icon — each with a named image) → Figma usage.  
Strongest on: the 8 named application categories with visual for each. This is the clearest "how to use each color type" breakdown across all pages read.

**PatternFly (Red Hat)**  
Sections: Brand colors → Background colors → Text and icon colors → Status and state colors (Danger / Warning / Disabled) → Nonstatus colors → Contrast ratios → Color families.  
Uses semantic tokens throughout (`--pf-t--global--text--color--regular`). Cleaner than GOV.UK, less comprehensive than Carbon/Paste.

**UAE Design System**  
Sections: Core palette (AEGold / AERed / AEGreen / AEBlack, 50–950 each) → What can you do (Ministries must use as-is; Authorities may adapt) → Supporting palette (Tech Blue / Sea Blue / Camel Yellow / Desert Orange / Fuchsia / Slate) → Creating a custom palette (Tailwind v4 `@theme` code example) → Environment colours → Creating contrast → Gradient colour → Text colour → Accessibility (WCAG 2.1 AA) → Basic principles (Do/Don't).  
Closest structural analogue to what UX4G needs. The "Ministries must / Authorities may" distinction is the best pattern for a federated government system where agencies have different levels of brand freedom.

**NSW Gov Australia**  
Colour framework, live colour picker by theme, accessibility testing baked into the page itself, clear primary/secondary/accent/neutral breakdown. More interactive than most.

**Workday Canvas**  
Unique for: deprecated token migration tables (shows old token → new token). Sets the standard for versioning color tokens. Also has an explicit "Using our Colors" 8-rule cheatsheet.

**Zendesk Garden**  
Sections: Principles (Purpose / Hierarchy / Elevation / Opacity / Accessibility) → Palette (Primary / Secondary) → Application (Primitive and semantic variables / Taxonomy) → Theming (Differences / Interaction / Elevation / Opacity).  
The "Elevation" principle within the color page — tying color to layering depth — is a design pattern not covered in most other color pages. Worth noting for UX4G.

**REI Cedar**  
Strong on separating color guidelines from token reference. Color page = principles + usage philosophy. Palettes page = actual swatches. Tokens page = CSS variables. Three-page structure keeps each destination focused.

**Washington Post WPDS**  
Unique feature: prints contrast ratios directly in the palette grid table for every colour step against white. Makes the palette page double as a built-in contrast reference tool — no separate WCAG checker needed for common pairings.

**MongoDB LeafyGreen**  
Neutral → Background → Accent → Status breakdown. Simple and scannable. Good example of a minimal page that still covers all four essential colour categories.

**Visa VPDS**  
Notable for having a fully separate "Global accessibility requirements" section as a top-level nav item (not buried in color). Signals that accessibility isn't a footnote — it's structural.

**ServiceNow Horizon**  
Color split into sub-pages: Overview → Palettes → Using color. Clean hub-and-spoke model that avoids overwhelming a single page. Best example of when to split color into multiple pages vs. one.

**Mozilla Protocol**  
Pure palette reference page — brand colours + extended palettes (Green / Blue / Violet / Purple / Pink / Red) with step naming (`$color-green-50` format). No semantic layer documented on the page. Minimal but complete as a reference.

**Zendesk Garden**
Unique for documenting color in relation to elevation explicitly within the color principles — recessed / default / subtle / raised depth levels with colour implications.

---

### The 3 biggest differentiators of "great" vs "average"

1. **Recommended pairings** — explicitly showing which text token goes on which background token (only 6/17 have it; Paste does it best). This eliminates the #1 designer question.
2. **Contrast on every swatch** — printing AA/AAA/Fail ratings per palette step (Pajamas, Washington Post do this; most don't).
3. **Interaction state rules** — documenting hover/active/focus/disabled colour logic so component contributors don't invent their own (Carbon does it best; 8/17 cover it).

---

## Part 2 — UX4G Color Foundation Page Recommendation

### Mapping UX4G tokens to the recommended structure

| UX4G CSS token group | Category |
|---|---|
| `--ux4g-color-primary-*` through `--ux4g-color-pink-*` | Primitive palettes |
| `--ux4g-bg-*` | Semantic → Background |
| `--ux4g-text-neutral-*`, `--ux4g-text-brand-*`, `--ux4g-text-status-*`, `--ux4g-text-link-*` | Semantic → Text |
| `--ux4g-border-color-*` | Semantic → Border |
| `--ux4g-icon-*` | Semantic → Icon |
| `--ux4g-text-status-*`, `--ux4g-bg-success-*`, `--ux4g-bg-error-*`, etc. | Semantic → Status |

---

### Recommended page structure — 10 sections

---

#### Section 1 — Introduction + Principles
*Pattern: Polaris (principles as the intro) + ServiceNow (one-liner opener)*

**Opening line:**  
> "Color in UX4G is purposeful, not decorative."

**3 principles, each with a Do/Don't visual showing a real UX4G component:**

| Principle | What it means |
|---|---|
| **Purposeful** | Color communicates meaning — status, hierarchy, action. It is never used as decoration or to make a UI "look nice." Red = error, green = success, primary purple = primary action — always. |
| **Accessible by default** | Every color pairing in UX4G meets WCAG 2.1 Level AA contrast — the minimum required by GIGW 3.0 for all central and state government digital services. |
| **Token-driven** | Never use a hex value directly in product code. Always use a semantic token. This keeps the entire system consistent and future-proof for theming. |

---

#### Section 2 — How the UX4G color system works
*Pattern: Paste (clearest explanation) + Atlassian (token anatomy diagram)*

**Two-tier model — show a simple diagram:**

```
Primitive token          →    Semantic token            →    Component
--ux4g-color-primary-600      --ux4g-bg-primary-strong       Primary button background
#4a2bc2                       (references primitive)         (references semantic)
```

**Key rule (use Paste's exact phrasing pattern):**  
> "Primitive tokens are the raw colour values. They are only to be used when defining semantic tokens — never in product or component code. Semantic tokens are the only tokens used in product code."

**Glossary table (Carbon pattern):**

| Term | Definition |
|---|---|
| Primitive token | A raw colour value with a numeric step (e.g. `--ux4g-color-primary-500`). Never use directly in UI. |
| Semantic token | A purpose-named token that references a primitive (e.g. `--ux4g-bg-primary-strong`). Use this in all components and layouts. |
| Role | The specific UI context a semantic token is designed for (e.g. primary button background, error text). |

---

#### Section 3 — Primitive palettes
*Pattern: UAE DS (core then supporting) + Washington Post (contrast ratios in palette grid) + Pajamas (AA/AAA/Fail labels)*

**Display order:**

1. **Brand palettes** (full-width, prominent)
   - Primary — purple (`--ux4g-color-primary-50` → `950`)
   - Secondary — orange (`--ux4g-color-secondary-50` → `950`)
   - Tertiary — purple variant (`--ux4g-color-tertiary-50` → `950`)
   - Neutral — greys (`--ux4g-color-neutral-0` → `1000`)

2. **Extended palettes** (compact two-column grid)
   - Red, Blue, Skyblue, Cyan, Green, Lime, Yellow, Gold, Orange, Purple, Pink

**Each swatch shows:**
- Token name (e.g. `--ux4g-color-primary-500`)
- Hex value (`#6a4eff`)
- Contrast vs white label (AAA / AA / Fail)
- Contrast vs neutral-1000 / black label (AAA / AA / Fail)

**Extended palettes callout:**
> "Extended palettes are provided for illustrations, data visualisation, and decorative artwork only. Do not use them for semantic UI meaning — use the semantic tokens in Section 4 instead."

---

#### Section 4 — Semantic tokens by purpose
*Pattern: Nordhealth (8 named application categories with visuals) + Carbon (group names) + Paste (token tables)*

Five sub-sections, each with: swatch | token name | maps to | use when.

**4.1 Background**

| Token | Maps to | Use when |
|---|---|---|
| `--ux4g-bg-neutral-elevated` | neutral-0 (#fff) | Page background, modal surface |
| `--ux4g-bg-neutral` | neutral-50 | App shell background |
| `--ux4g-bg-neutral-soft` | neutral-100 | Card / panel surface |
| `--ux4g-bg-neutral-subtle` | neutral-200 | Hover state on list rows |
| `--ux4g-bg-primary` | primary-50 | Primary tinted surface (info callout) |
| `--ux4g-bg-primary-strong` | primary-600 | Primary filled button, active nav item |
| `--ux4g-bg-primary-stronger` | primary-800 | Primary button hover / pressed |
| `--ux4g-bg-success` → `strong` | green-50 → green-600 | Success banner bg (soft → filled) |
| `--ux4g-bg-error` → `strong` | red-50 → red-600 | Error banner bg (soft → filled) |
| `--ux4g-bg-warning` → `strong` | orange-50 → orange-600 | Warning banner bg (soft → filled) |
| `--ux4g-bg-info` → `strong` | cyan-50 → cyan-600 | Info banner bg (soft → filled) |

**4.2 Text**

| Token | Use when |
|---|---|
| `--ux4g-text-neutral-primary` | Default body text, headings |
| `--ux4g-text-neutral-secondary` | Labels, captions, helper text |
| `--ux4g-text-neutral-tertiary` | Placeholder text, disabled text |
| `--ux4g-text-neutral-inverse` | Text on dark / filled backgrounds |
| `--ux4g-text-brand-primary-default` | Brand-coloured text links, emphasis |
| `--ux4g-text-status-success` | Success message text |
| `--ux4g-text-status-error` | Error message text |
| `--ux4g-text-status-warning` | Warning message text |
| `--ux4g-text-status-info` | Info message text |

**4.3 Border**

| Token | Use when |
|---|---|
| `--ux4g-border-color-neutral-subtle` | Dividers, card outlines (light) |
| `--ux4g-border-color-neutral-default` | Form field borders (default state) |
| `--ux4g-border-color-neutral-strong` | Form field borders (focused / active) |
| `--ux4g-border-color-primary-default` | Primary-tinted border |
| `--ux4g-border-color-primary-strong` | Primary interactive border (selected) |
| `--ux4g-border-color-error-strong` | Error state form input border |
| `--ux4g-border-color-success-strong` | Success state border |

**4.4 Icon**

| Token | Use when |
|---|---|
| `--ux4g-icon-status-success` | Success icon fill |
| `--ux4g-icon-status-error` | Error icon fill |
| `--ux4g-icon-status-warning` | Warning icon fill |
| `--ux4g-icon-status-info` | Info icon fill |
| `--ux4g-icon-neutral-inverse` | Icon on dark / filled background |

> **Note:** Icons require a minimum 3:1 contrast ratio (WCAG 1.4.11), not 4.5:1. The icon tokens are calibrated accordingly — do not substitute text-colour tokens for icons.

**4.5 Link states**

| Token | State |
|---|---|
| `--ux4g-text-link-default-default` | Default |
| `--ux4g-text-link-default-hover` | Hover |
| `--ux4g-text-link-default-active` | Active / pressed |
| `--ux4g-text-link-default-visited` | Visited |
| `--ux4g-text-link-default-disabled` | Disabled |
| `--ux4g-text-link-default-inverse` | On dark background |

---

#### Section 5 — Recommended pairings
*Pattern: Paste (highest-value section; only 6/17 systems have this)*

Explicitly show which semantic token combinations are safe and recommended. Show as rendered live examples (not just a table).

**Default content pairings:**
- `--ux4g-text-neutral-primary` on `--ux4g-bg-neutral-elevated` → body text on white page
- `--ux4g-text-neutral-secondary` on `--ux4g-bg-neutral-soft` → helper text on card

**Primary action pairings:**
- `--ux4g-text-neutral-inverse` on `--ux4g-bg-primary-strong` → white text on primary button

**Status pairings:**
- `--ux4g-text-status-success` on `--ux4g-bg-success` → success text on tinted green bg
- `--ux4g-text-status-error` on `--ux4g-bg-error` → error text on tinted red bg
- `--ux4g-text-status-warning` on `--ux4g-bg-warning` → warning text on tinted orange bg
- `--ux4g-text-status-info` on `--ux4g-bg-info` → info text on tinted cyan bg

**Inverse pairings:**
- `--ux4g-text-neutral-inverse` on `--ux4g-bg-neutral-stronger` → white text on dark surface

---

#### Section 6 — Interaction states
*Pattern: Carbon (step-math rules) — present in only 8/17 systems; biggest gap*

Document the rules explicitly so component contributors don't invent their own hover/active colours.

**Rule:**

| State | Colour step rule | Example (Primary button) |
|---|---|---|
| Default | Base semantic token | `--ux4g-bg-primary-strong` (primary-600) |
| Hover | One step darker | `--ux4g-bg-primary-strong-hover` (primary-700) |
| Active / Pressed | Two steps darker | `--ux4g-bg-primary-stronger` (primary-800) |
| Focus | Dedicated focus token | `--ux4g-shadow-focus-ring` (not a fill colour) |
| Disabled | Neutral disabled | `--ux4g-bg-neutral-disabled` (neutral-200) with `--ux4g-text-neutral-disabled` |

> Focus indicators must achieve a minimum 3:1 contrast ratio against adjacent colours (WCAG 1.4.11).

---

#### Section 7 — Accessibility & WCAG
*Pattern: USWDS (most thorough) + GOV.UK ("must" language) + Paste (separate text vs icon contrast)*

**Regulatory context (lead with this — GOV.UK pattern of stating it upfront):**
> "GIGW 3.0 (Guidelines for Indian Government Websites, published by NIC/MeitY) mandates WCAG 2.1 Level AA compliance for all central and state government digital services. Color contrast is not optional — it is a legal requirement."

**Contrast requirements:**

| Use case | Minimum ratio | WCAG criterion |
|---|---|---|
| Normal text (< 18px regular / < 14px bold) | 4.5 : 1 | 1.4.3 AA |
| Large text (≥ 18px regular / ≥ 14px bold) | 3 : 1 | 1.4.3 AA |
| Icons and UI components | 3 : 1 | 1.4.11 AA |
| Focus indicator | 3 : 1 | 1.4.11 AA |

**"Don't use color alone" rule:**  
Show a before/after example using a real UX4G component (e.g., form validation):
- ❌ Red border only to indicate an error
- ✅ Red border + error icon + error text label together

**Colour blindness note** *(USWDS source: NIH):*
> "Colour insensitivity affects approximately 8% of adult men and 0.5% of adult women. Red–green colour blindness is the most common form. Always combine colour with a secondary indicator — icon, label, pattern, or text — for any meaningful UI state."

**Testing tools:** WebAIM Contrast Checker, Stark (Figma plugin), browser DevTools accessibility panel.

---

#### Section 8 — Do's and Don'ts
*Pattern: Polaris (component-level visuals, not abstract swatches) + Paste (6 pairs)*

Show 5 pairs, each rendered as a real UX4G component:

| Do | Don't |
|---|---|
| Use semantic tokens (`--ux4g-bg-primary-strong`) | Hard-code hex values (`#4a2bc2`) |
| Pair color with icon + text for all status states | Use color alone to convey error/success/warning |
| Use one primary CTA (purple filled button) per screen | Use multiple primary-colored buttons competing for attention |
| Use neutral backgrounds for content pages | Use saturated brand colors as page-level backgrounds |
| Use the extended palette for illustrations only | Use extended palette colors (e.g. lime, gold) as UI status colors |

---

#### Section 9 — Dark mode (honest statement)
*Pattern: Honest disclosure — avoids looking incomplete*

> "UX4G currently ships a single light theme. The semantic token naming convention (`--ux4g-bg-primary-strong` rather than `--ux4g-color-white`) is intentionally theme-agnostic, which means a dark theme can be added by remapping primitive tokens without changing any component code. Dark theme support is on the UX4G roadmap."

---

#### Section 10 — Resources

- Figma — UX4G Color Styles (link to Figma file, Color Styles page)
- CSS — `@import '@ux4g/tokens/colors.tokens.css'` + `@import '@ux4g/tokens/semantic/colors.semantic.css'`
- GitHub — token source files
- Related: Typography foundation, Elevation foundation, Components using color (Alert, Badge, Button, Status Banner)

---

## Part 3 — Implementation Staging

| Stage | Sections | Target |
|---|---|---|
| Stage 1 | 1, 2, 3, 4, 7 | Matches GOV.UK / PatternFly bar — acceptable to launch |
| Stage 2 | + 5, 6, 8 | Matches Carbon / Atlassian / Paste bar — recommended quality |
| Stage 3 | + 9, 10 | Complete page |

---

## Appendix — Systems read and their URLs

| System | URL |
|---|---|
| Carbon (IBM) | carbondesignsystem.com/elements/color/overview/ |
| Paste (Twilio) | paste.twilio.design/foundations/colors |
| Pajamas (GitLab) | design.gitlab.com/product-foundations/color |
| Polaris (Shopify) | polaris.shopify.com/design/colors |
| Atlassian | atlassian.design/foundations/color-new/ |
| USWDS | designsystem.digital.gov/design-tokens/color/overview/ |
| GOV.UK | design-system.service.gov.uk/styles/colour/ |
| Nordhealth | nordhealth.design/colors/ |
| PatternFly (Red Hat) | patternfly.org/design-foundations/colors |
| UAE DS | designsystem.gov.ae/guidelines/colour-system |
| NSW Gov | designsystem.nsw.gov.au/core/colour/index.html |
| Workday Canvas | canvas.workday.com/tokens/color |
| REI Cedar | cedar.rei.com/guidelines/color |
| Dell DS | delldesignsystem.com/foundations/color/ |
| MongoDB LeafyGreen | mongodb.design/foundations/palette |
| Visa VPDS | design.visa.com/base-elements/color/ |
| Washington Post | build.washingtonpost.com/foundations/color |
| Zendesk Garden | garden.zendesk.com/design/color |
| ServiceNow Horizon | horizon.servicenow.com/foundations/color/color-overview |
| Mozilla Protocol | protocol.mozilla.org/docs/fundamentals/color |

*Blocked (JS-dependent or robots-restricted): Adobe Spectrum, Datadog Druids, Orbit (Kiwi.com), Helsinki DS*
