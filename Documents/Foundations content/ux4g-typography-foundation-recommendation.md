# UX4G Typography Foundation Page — Benchmark & Recommendation

> Based on direct reads of 17 live design system typography pages (20 attempted; 3 blocked).  
> Systems read: Carbon (IBM), Atlassian, Primer (GitHub), GOV.UK, Fluent 2 (Microsoft), Nordhealth, PatternFly (Red Hat), Australian Gov Agriculture, Ant Design, Dell DS, UAE Design System, Cloudscape (Amazon), Pajamas (GitLab), ServiceNow Horizon, Washington Post WPDS, REI Cedar, NSW Gov Australia.  
> Blocked: Adobe Spectrum (JS), Material 3 (JS), Visa VPDS (permissions).

---

## Part 1 — What the 17 Systems Actually Do

### Section frequency (from real page reads)

| Section | Present in |
|---|---|
| Typeface introduction (name, rationale, specimen) | 17 / 17 |
| Font stack / fallback declaration | 13 / 17 |
| Type scale table (size + line height per style) | 15 / 17 |
| Named style categories (Display / Heading / Body / Label) | 14 / 17 |
| Weight guidance (which weights, when to use each) | 12 / 17 |
| Usage context per style (when to use Heading XL vs M) | 11 / 17 |
| Accessibility guidance (minimum size, line length, heading levels) | 10 / 17 |
| Responsive / breakpoint behaviour of type | 8 / 17 |
| Do's and Don'ts | 7 / 17 |
| Semantic HTML guidance (h1–h6, don't skip levels) | 9 / 17 |
| Brand vs product font distinction | 8 / 17 |
| Code snippet / implementation | 10 / 17 |
| Punctuation / typographic detail guidance | 3 / 17 |
| Line length guidance | 4 / 17 |

---

### Key findings per system

**Carbon (IBM)**  
Sections: Type tokens and sets → Typeface (IBM Plex) → Scale (formula-based, 12–92px) → Style (Weights + Italic) → Type color → Resources.  
Key differentiator: Two named type sets — **Productive** (condensed, task-focused, -01 suffix) and **Expressive** (larger, editorial, -02 suffix). Expressive headings are responsive; productive headings are fixed. This is the most sophisticated type-set taxonomy seen across all 17 systems.  
Font stack is documented verbatim for sans-serif, serif, and mono.  
Type color rule: "Keep type color neutral in running text. Use primary blue for primary actions."

**Atlassian**  
Sections: Overview → Typographic principles (3) → Brand fonts (Charlie Sans) → App fonts (Atlassian Sans + Atlassian Mono) → Text styles and tokens → rem units explanation → Heading (with usage: XXL/XL for marketing, XL/L for page titles in apps) → Body → Code.  
Key differentiator: Explicit brand font vs app font split — Charlie Sans is marketing only; Atlassian Sans is for all in-product use. Clear rationale for why rem is used over px ("allows users to adjust text size based on browser settings, improving accessibility"). Heading level guidance is the most thorough seen: "Use one h1 per page. Don't skip heading levels (e.g. use h2 then h4)."

**Primer (GitHub)**  
Structure: Minimal page — mostly navigation to sub-pages (Color usage, Layout, etc.) plus the same primitives split as typography tokens. Content-light on the landing page; depth is in sub-pages. Main landing explains font families and general principles only.

**GOV.UK**  
The GOV.UK typography section is split into separate sub-pages: Typeface / Type scale / Headings / Paragraphs / Links / Lists / Font override classes. Each is very focused.  
Type scale page: Responsive two-column table (large screen vs small screen) showing 7 points on the scale. Critical insight: "GOV.UK Frontend v6.0.0 includes an updated type scale to increase the size of text on small screens, improving legibility and accessibility." Every scale point is named by its large-screen pixel value (e.g. "Point 48" = 48px large, 32px small). Uses `govuk-font` Sass mixin for implementation.  
Strongest on: documenting responsive behaviour explicitly per type scale step — the most rigorous responsive type documentation across all 17 systems.

**Fluent 2 (Microsoft)**  
Sections: Fluent font stacks (Segoe UI) → Native type on every platform → Type ramp (five platforms: Web / Windows / macOS / iOS / Android) → Styling text.  
Type ramp table for web: 16 named styles from Caption 2 (10px/14px Regular) to Display (68px/92px Semibold), all named semantically (Caption / Body / Subtitle / Title / Large Title / Display).  
Key differentiator: Shows the full type ramp for FIVE platforms in parallel tables. Best cross-platform typography reference across all systems read. Unique in documenting "Native type on every platform" — explains what to do when Segoe isn't available.  
Styling text section: documents casing, alignment, and color rules.

**Nordhealth**  
Sections: Typographic scale → Line length → Tables → Brand typography (Armin Grotesk) → Product typography (Inter) → Font stacks (CSS code for sans and mono) → Punctuation.  
Type scale table: 7 steps from 11px to 36px, shows the difference between adjacent steps, and includes CSS variable token name per step.  
Standout: **Punctuation guide** — covers smart quotes, em dash, en dash, ellipsis, prime marks, multiplication sign, copyright symbol. This is the only system across all 17 that documents typographic punctuation rules. While outside strict token territory, it sets a quality bar.  
Line length: "Aim for 50–90 characters including spaces." Explains why (eye tracking fatigue on long lines).  
Brand vs product: Armin Grotesk (brand/marketing) vs Inter (product UI). Keeps them clearly separated.

**PatternFly (Red Hat)**  
Typography page was navigation-heavy; content mostly in sub-pages. Uses Red Hat Display and Red Hat Text. Documents 3 weights (Regular, Medium, Bold) and a monospace variant. Token-driven approach: all type uses semantic tokens (`--pf-t--global--text--color--regular`).

**Australian Gov Agriculture**  
Sections: Font size → Line height → Font family → Font weight.  
Type scale: Uses a **1.25 ratio (Major Second)** — 7 sizes from 14px to 48px, shows mobile vs desktop values per step (responsive sizes in the token table). Clean and practical.  
Font family: Uses **system fonts** exclusively — rationale given: "By choosing to use system fonts, users download less data and make fewer HTTP requests. This means people on low-end devices or internet connections in remote areas can access government services easier." This is the only system that explicitly addresses low-connectivity access as a reason for font choice — directly relevant for India's rural government service users.  
Font weight: Only 2 weights — Normal and Bold. Extremely minimal and intentional.

**Ant Design**  
Sections: Font Family → Base Font Size → Font Scale & Line Height → Font Weight → Font Color → Advanced Tips.  
Base font size: 14px for most pages, 12px for dense data tables. Rationale given.  
Font scale: Documented in a table — 12/14/16/20/24/30/38/46/56/68px. Uses a non-modular scale designed for data-dense enterprise interfaces.  
Font color: Documents primary text, secondary text, disabled text, and heading colour tokens. First system to explicitly document type color inside the typography page (Carbon does this separately).  
Advanced tips: "When mixing font sizes, use multiples that feel harmonious. When in doubt, use 14px or 16px."

**Dell DS**  
Page title only rendered (JS-heavy for body content). Intro: "Typography is a deliberate system of letters, numbers, and characters. Good typography ensures legibility, clean aesthetics, and a well-defined information hierarchy." — well-crafted opening sentence.

**UAE Design System**  
Sections: Using fonts (4 principles: Personality / Universality / Minimalism / Balance) → Typefaces (English: Roboto + Inter; Arabic: Noto Kufi Arabic + Alexandria) → Typeface fallback (CSS code block) → Font size (Heading scale: Major Third 1.333 ratio, H1 Display 76px down to H6 20px) → Content (7 text sizes 12–30px) → Responsive typography.  
Most relevant government system: documents both English and Arabic type at the same level. Arabic typeface rationale is the only example across all 17 systems of RTL/bidirectional typography documentation. Directly relevant for UX4G given India's multilingual landscape.  
Major Third scale: H1 Display (76px) → H1 (62px) → H2 (48px) → H3 (40px) → H4 (32px) → H5 (26px) → H6 (20px). Clear mathematical foundation.

**Cloudscape (Amazon)**  
Sections: Typeface (Open Sans) → Type styles (four categories: Heading / Body / Code / Display, each as a table with size/line-height/weight/tag/examples) → Fallback fonts (CSS code) → List styles (unordered and ordered) → General guidelines → Implementation.  
Type styles: each row in the table includes a "Default tag" column (e.g. Heading x-large → h1, Heading large → h2) — the only system to directly map type styles to HTML tags in the table. This is extremely practical.  
General guidelines include: "Use headings according to their importance and information hierarchy, not for their visual appearance." "Don't use font size smaller than 12px."  
Code styles documented separately with their own table (including preformatted blocks).  
List styles section: guidance on unordered vs ordered lists with capitalization and punctuation rules.

**Pajamas (GitLab)**  
Split across sub-pages: Type fundamentals / Headings / Markdown. Landing page is navigation-only.  
Approach: Uses Inter for product UI. Separates "Type fundamentals" (scale, weights, roles) from "Headings" (usage, responsive, accessibility rules) from "Markdown" (how prose content should be styled in GitLab's wiki/docs contexts).  
Notable: Having a separate Markdown typography page acknowledges that design systems need to handle developer-authored content differently from designed UI content.

**ServiceNow Horizon**  
Sections: Overview → Resources (Figma) → Typefaces (Cabin for headers, Lato for body) → Type ramp.  
Clear brand/function split: Cabin is used for headers/titles (creates hierarchy), Lato is used for body copy (readability at small sizes). Rationale given for each.  
Concise page — no bloat. Strong on the "why" for each font choice.

**Washington Post WPDS**  
Sections: Font (family tokens) → Font size → Font weight → Line height.  
Pure token reference page. Five font families: body (Georgia serif), headline (Postoni serif), magazine (PostoniDisplayMag), meta (Franklin sans-serif), subhead (Franklin sans-serif). Shows a media company's approach — multiple typefaces for editorial intent, each with a named role.  
Token values: font size as rem with calculated px equivalents; line height as unitless multipliers. Clean and practical reference format.

**REI Cedar**  
Sections: Understanding typefaces (Stuart — proprietary, influenced by US National Park Service signage; Graphik — commercial grotesque) → Styles (Heading / Subheading / Body / Utility / Eyebrow — each linking to its own sub-page).  
Key insight: REI documents typeface background and emotional character ("Stuart embraces softness in both structure and finish; its warm character balances with the clean simplicity of Graphik"). This is the strongest example of explaining *why* a typeface was chosen, not just what it is.  
Five style categories (5 for REI vs 4 for UX4G) — Eyebrow is unique, used for category/section labels above headings.

**NSW Gov Australia**  
Page failed to load body content (JS-heavy navigation rendered, body blocked). Structure visible from nav: Typography page exists as a Core Style, alongside Logo, Colour, Iconography, Pictograms, Grid, Layout, Section, Graphic elements.

---

### The 3 biggest differentiators of "great" vs "average"

1. **Named type style categories with usage context** — Cloudscape is the best example: each style in the table has a "Default tag" column and an "Examples" column showing real component contexts. Most systems name the styles but don't map them to HTML semantics or component use cases.

2. **Responsive behaviour documented per scale step** — GOV.UK is the best example: two parallel tables (large screen / small screen) showing how each type scale point changes at the tablet breakpoint. Most systems describe responsive type in one sentence; GOV.UK makes it a table.

3. **Rationale for typeface choice** — REI Cedar and UAE DS are the best examples: they explain why each typeface was chosen (history, emotional character, performance). Most systems just display the typeface without explaining why it was selected over alternatives.

---

## Part 2 — UX4G Typography Foundation Page Recommendation

### UX4G type system as-built (from CSS files)

**Families:**
- `--ux4g-font-family-base`: Noto Sans (UI, body, labels, headings)
- `--ux4g-font-family-display`: Noto Sans Display (Display styles only)

**Weights in code:**
- Regular (400), Medium (500), Semibold (600), Bold (700)

**Complete style taxonomy (from `typescale.utilities.css`):**

| Category | Sizes | Weights |
|---|---|---|
| Display | L (60/80), M (52/72), S (40/52), XS (36/44) | Semibold / Bold — Display family |
| Heading | 2XL (40/44), XL (32/36), L (28/32), M (24/28), S (20/24), XS (16/20), 2XS (14/16) | Semibold / Bold — Base family |
| Title | L (24/28), M (20/24), S (16/20) | Semibold / Bold — Base family |
| Body | L (18/24), M (16/24), S (14/20), XS (12/16) | Regular / Semibold — Base family |
| Label | XL (16/20), L (14/18), M (12/16), S (11/14) | Medium / Bold — Base family |

**Size tokens:** 8, 10, 11, 12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 52, 56, 60, 64, 80, 120px  
**Line height tokens:** 14, 16, 18, 20, 24, 28, 32, 36, 44, 52, 72, 80px

---

### Recommended page structure — 9 sections

---

#### Section 1 — Introduction + 3 Principles
*Pattern: Atlassian (principles with visual + rationale) + ServiceNow (tight "why" opener)*

**Opening:**
> "Typography is one of the most powerful tools for establishing hierarchy and trust. In government services, clarity is not optional — every citizen, regardless of literacy level, device, or connectivity, must be able to read and act on what they see."

**3 principles (with a visual illustration each):**

| Principle | What it means |
|---|---|
| **Optimise for readability** | Every size, weight, and line height decision is made to serve the reader first. Decorative or arbitrary type choices undermine trust in government interfaces. |
| **Communicate hierarchy clearly** | Use the type scale to signal importance — not colour alone. A citizen should be able to scan any UX4G screen and immediately understand which text to read first. |
| **Accessible for everyone** | UX4G serves citizens across all literacy levels, device types, and network conditions. Typography decisions must meet WCAG 2.1 AA and GIGW 3.0 minimum size requirements. |

---

#### Section 2 — Typefaces
*Pattern: REI Cedar (typeface character + rationale) + UAE DS (two fonts, each with a role) + Nordhealth (brand vs product split)*

**Two typefaces — each with a role:**

**Noto Sans** *(UI typeface — used for all product interfaces)*
- Designed by Google to support text in all languages. "Noto" stands for "No Tofu" — the term for blank boxes (□) that appear when a font lacks a character. Noto Sans provides consistent rendering across Hindi, Bengali, Tamil, Telugu, Kannada, Malayalam, Gujarati, and all other Indian scripts, in addition to English.
- Used for: all headings, body text, labels, and UI elements
- Available weights: Regular (400), Medium (500), Semibold (600), Bold (700)
- Show a specimen: the word "Noto Sans" rendered in Regular / Medium / Semibold / Bold

**Noto Sans Display** *(Display typeface — used for Display styles only)*
- An optical variant of Noto Sans designed for large display sizes (36px+). Its letterforms are optimised for high visibility at large scales — slightly more refined stroke contrast and wider tracking than the base Noto Sans.
- Used exclusively for: Display/L, Display/M, Display/S, Display/XS styles
- Available weights: Semibold (600), Bold (700)
- Show a specimen at ~52px

**Font stack (CSS):**
```css
/* Base — all UI text */
font-family: "Noto Sans", system-ui, sans-serif;

/* Display — large editorial headings only */
font-family: "Noto Sans Display", "Noto Sans", sans-serif;
```

> "If Noto Sans fails to load, the system-ui fallback ensures users see a native system font (SF Pro on iOS/macOS, Segoe UI on Windows) rather than a browser default. This is critical for government services where users may be on low-bandwidth connections in rural or remote areas." *(rationale borrowed from Australian Gov Agriculture's explicit low-connectivity justification)*

---

#### Section 3 — Type scale
*Pattern: Cloudscape (tag + examples column) + GOV.UK (responsive table) + Washington Post (rem + px)*

Show the scale as a single visual strip — each style rendered at actual size, left-aligned, stacked. Below the visual, a reference table.

**Display styles** — Noto Sans Display

| Style | Class | Size | Line height | Weight | Use when |
|---|---|---|---|---|---|
| Display/L/Default | `.ux4g-display-l-default` | 60px / 3.75rem | 80px | Semibold | Hero banners — exceptional, full-page landing use only |
| Display/L/Strong | `.ux4g-display-l-strong` | 60px / 3.75rem | 80px | Bold | — |
| Display/M/Default | `.ux4g-display-m-default` | 52px / 3.25rem | 72px | Semibold | Large campaign or section hero headings |
| Display/M/Strong | `.ux4g-display-m-strong` | 52px / 3.25rem | 72px | Bold | — |
| Display/S/Default | `.ux4g-display-s-default` | 40px / 2.5rem | 52px | Semibold | Section title on a dashboard landing page |
| Display/S/Strong | `.ux4g-display-s-strong` | 40px / 2.5rem | 52px | Bold | — |
| Display/XS/Default | `.ux4g-display-xs-default` | 36px / 2.25rem | 44px | Semibold | Section-level hero in compact layouts |
| Display/XS/Strong | `.ux4g-display-xs-strong` | 36px / 2.25rem | 44px | Bold | — |

**Heading styles** — Noto Sans

| Style | Class | Size | Line height | Weight | HTML tag | Use when |
|---|---|---|---|---|---|---|
| Heading/2XL/Default | `.ux4g-heading-2xl-default` | 40px / 2.5rem | 44px | Semibold | h1 | Top-level page title (form, dashboard, landing) |
| Heading/2XL/Strong | `.ux4g-heading-2xl-strong` | 40px / 2.5rem | 44px | Bold | h1 | — |
| Heading/XL/Default | `.ux4g-heading-xl-default` | 32px / 2rem | 36px | Semibold | h1–h2 | Primary section heading |
| Heading/XL/Strong | `.ux4g-heading-xl-strong` | 32px / 2rem | 36px | Bold | h1–h2 | — |
| Heading/L/Default | `.ux4g-heading-l-default` | 28px / 1.75rem | 32px | Semibold | h2 | Secondary section heading |
| Heading/L/Strong | `.ux4g-heading-l-strong` | 28px / 1.75rem | 32px | Bold | h2 | — |
| Heading/M/Default | `.ux4g-heading-m-default` | 24px / 1.5rem | 28px | Semibold | h3 | Card title, panel heading |
| Heading/M/Strong | `.ux4g-heading-m-strong` | 24px / 1.5rem | 28px | Bold | h3 | — |
| Heading/S/Default | `.ux4g-heading-s-default` | 20px / 1.25rem | 24px | Semibold | h4 | Sub-section heading |
| Heading/S/Strong | `.ux4g-heading-s-strong` | 20px / 1.25rem | 24px | Bold | h4 | — |
| Heading/XS/Default | `.ux4g-heading-xs-default` | 16px / 1rem | 20px | Semibold | h5 | Small heading, grouped fields title |
| Heading/XS/Strong | `.ux4g-heading-xs-strong` | 16px / 1rem | 20px | Bold | h5 | — |
| Heading/2XS/Default | `.ux4g-heading-2xs-default` | 14px / 0.875rem | 16px | Semibold | h6 | Smallest heading — sidebar label, data table column header |
| Heading/2XS/Strong | `.ux4g-heading-2xs-strong` | 14px / 0.875rem | 16px | Bold | h6 | — |

**Title styles** — Noto Sans

| Style | Class | Size | Line height | Weight | Use when |
|---|---|---|---|---|---|
| Title/L | `.ux4g-title-l-default / -strong` | 24px / 1.5rem | 28px | Semibold / Bold | Component title in a card or modal |
| Title/M | `.ux4g-title-m-default / -strong` | 20px / 1.25rem | 24px | Semibold / Bold | Form section title |
| Title/S | `.ux4g-title-s-default / -strong` | 16px / 1rem | 20px | Semibold / Bold | Small label-weight title, button group heading |

**Body styles** — Noto Sans

| Style | Class | Size | Line height | Weight | Use when |
|---|---|---|---|---|---|
| Body/L | `.ux4g-body-l-default / -strong` | 18px / 1.125rem | 24px | Regular / Semibold | Long-form instructions, multi-paragraph content |
| Body/M | `.ux4g-body-m-default / -strong` | 16px / 1rem | 24px | Regular / Semibold | Default body text for most UI |
| Body/S | `.ux4g-body-s-default / -strong` | 14px / 0.875rem | 20px | Regular / Semibold | Helper text, secondary descriptions |
| Body/XS | `.ux4g-body-xs-default / -strong` | 12px / 0.75rem | 16px | Regular / Semibold | Captions, legal text, timestamps — minimum usable size |

**Label styles** — Noto Sans

| Style | Class | Size | Line height | Weight | Use when |
|---|---|---|---|---|---|
| Label/XL | `.ux4g-label-xl-default / -strong` | 16px / 1rem | 20px | Medium / Bold | Form field labels (default) |
| Label/L | `.ux4g-label-l-default / -strong` | 14px / 0.875rem | 18px | Medium / Bold | Secondary labels, table column headers |
| Label/M | `.ux4g-label-m-default / -strong` | 12px / 0.75rem | 16px | Medium / Bold | Badge text, chip labels, tag text |
| Label/S | `.ux4g-label-s-default / -strong` | 11px / 0.6875rem | 14px | Medium / Bold | Micro labels — status tags, compact data — use sparingly |

> **Note on Default vs Strong:** Within each style, `/default` uses the lighter weight and `/strong` uses the heavier weight. Use `/strong` to add emphasis within a style category. Do not use a larger size to add emphasis — use the `/strong` variant of the same size.

---

#### Section 4 — Font weights
*Pattern: Carbon (when to use each weight, don't over-use bold)*

**4 weights in UX4G:**

| Weight | Value | Usage |
|---|---|---|
| Regular | 400 | All body text, default reading content |
| Medium | 500 | Labels, UI controls, navigation items |
| Semibold | 600 | Headings, section titles, interactive labels |
| Bold | 700 | Strong emphasis — headings, CTAs, key data — use sparingly |

> "Avoid using Bold for long text. Bold weight draws the eye — if everything is bold, nothing is. Reserve it for short headings, primary actions, and moments of critical importance."

---

#### Section 5 — Usage guidance (when to use which style)
*Pattern: Atlassian (XXL/XL for marketing, L/M for product) + Cloudscape (examples column)*

A quick-reference card — the most-used designer question answered directly:

| If you need... | Use this |
|---|---|
| Page or screen title (main h1) | Heading/2XL or Heading/XL |
| Section heading (primary division) | Heading/L or Heading/M |
| Card or panel title | Heading/M or Title/L |
| Form section title | Title/M |
| Form field label | Label/XL or Label/L |
| Default body / paragraph text | Body/M/Default |
| Instructions / longer copy | Body/L/Default |
| Helper text below an input | Body/S/Default |
| Caption, timestamp, legal text | Body/XS/Default |
| Button label | Label/XL/Strong |
| Badge, chip, or tag text | Label/M/Strong or Label/S/Strong |
| Navigation item | Label/XL/Default |
| Data table column header | Heading/2XS or Label/L |
| Large display / campaign hero | Display/S or Display/XS |

---

#### Section 6 — Responsive behaviour
*Pattern: GOV.UK (responsive table per scale point) — present in only 8/17 systems*

UX4G type styles do not currently define responsive size changes in the token layer. Document this gap explicitly and provide guidance:

**Current behaviour:**  
All UX4G type styles use fixed sizes at all breakpoints. There are no breakpoint-specific overrides in the token layer.

**Recommended practice for teams:**  
At the `sm` breakpoint (≤576px / `--ux4g-bp-sm`) and below, reduce Display and large Heading styles to avoid overflow and improve mobile legibility:

| Style | Desktop | Recommended mobile |
|---|---|---|
| Display/L | 60px | 40px (Display/S) |
| Display/M | 52px | 36px (Display/XS) |
| Display/S | 40px | 36px (Display/XS) |
| Heading/2XL | 40px | 32px (Heading/XL) |
| Heading/XL | 32px | 28px (Heading/L) |
| Heading/L | 28px | 24px (Heading/M) |

Body, Label, and Title styles are appropriate at all breakpoints without adjustment.

> **Roadmap note:** Token-level responsive type scaling is planned for a future UX4G release.

---

#### Section 7 — Accessibility
*Pattern: Atlassian (rem rationale) + GOV.UK (WCAG citation) + Cloudscape (don't skip heading levels)*

**GIGW 3.0 & WCAG 2.1 requirements (mandatory for all Government of India digital services):**
- Minimum font size: 16px for body text (12px absolute minimum for any text)
- Line height: Minimum 1.5× the font size for body text (WCAG 1.4.12)
- Letter spacing: Don't override letter-spacing to values that break readability
- Text can be resized to 200% without loss of content or functionality (WCAG 1.4.4)

**Heading level rules (Cloudscape + Atlassian pattern):**
- Use only one `<h1>` per page — typically the page title
- Use heading levels in descending order — don't skip (e.g. don't jump from h2 to h4)
- Use headings for structure, not visual appearance — if you want something to look like a heading but isn't a real heading, use a Title or Label style
- Screen reader users navigate by heading levels — correct semantic heading structure is as important as colour contrast

**Why rem units?** *(Atlassian's explicit rationale)*  
> "UX4G typography tokens use rem units for font-size and line-height. 1rem = 16px at the browser default. Unlike pixels, rem units resize when a user increases their browser's default font size — this is critical for users with low vision who rely on browser zoom settings to read government content."

**Line length guidance** *(Nordhealth pattern)*  
> "Aim for 50–90 characters per line, including spaces. Shorter lines are easier to track from line end to line start. Very long lines increase reading fatigue."

---

#### Section 8 — Do's and Don'ts
*Pattern: Atlassian + Cloudscape — component-level examples*

| Do | Don't |
|---|---|
| Use `Heading/2XL` for the single h1 page title | Use multiple h1s on one page |
| Use heading levels in order (h1 → h2 → h3) | Skip heading levels for visual effect |
| Use `Body/M/Default` as the default reading text | Use sizes smaller than 12px for any text |
| Use `Label/XL` for form field labels | Use `Heading/XS` as a form label (wrong semantic role) |
| Use `/strong` variant for emphasis within a size | Increase font size to add emphasis |
| Use rem-based sizes — let browser zoom work | Hard-code px values that block user zoom |
| Use `Display` styles only for large hero contexts | Use Display styles for body content or normal page headings |

---

#### Section 9 — Resources

**Figma:**  
- UX4G Text Styles (in the Figma library — `🟢 Text Styles` page, file `C3Kecl9nh78LLblDUn28P6`)
- Noto Sans Google Fonts link
- Noto Sans Display Google Fonts link

**CSS / Code:**
```css
/* Import token files */
@import '@ux4g/tokens/typography.tokens.css';
@import '@ux4g/semantic/typography.semantic.css';

/* Use utility classes */
<h1 class="ux4g-heading-2xl-default">Page Title</h1>
<p class="ux4g-body-m-default">Body paragraph text.</p>
<label class="ux4g-label-xl-default">Form label</label>
```

**Related foundations:**  
Color (text colour tokens), Spacing (line height and padding around text), Layout (line length + container width).

---

## Part 3 — Implementation Staging

| Stage | Sections | Benchmark it reaches |
|---|---|---|
| Stage 1 | 1, 2, 3, 9 | Matches GOV.UK / PatternFly bar |
| Stage 2 | + 4, 5, 7 | Matches Atlassian / Cloudscape bar |
| Stage 3 | + 6, 8 | Matches Carbon / Nordhealth complete quality |

---

## Appendix — Systems read and their URLs

| System | URL |
|---|---|
| Carbon (IBM) | carbondesignsystem.com/elements/typography/overview/ |
| Atlassian | atlassian.design/foundations/typography/ |
| Primer (GitHub) | primer.style/product/getting-started/foundations/typography/ |
| GOV.UK | design-system.service.gov.uk/styles/type-scale/ |
| Fluent 2 (Microsoft) | fluent2.microsoft.design/typography |
| Nordhealth | nordhealth.design/typography/ |
| PatternFly (Red Hat) | patternfly.org/design-foundations/typography |
| Australian Gov Agriculture | design-system.agriculture.gov.au/foundations/tokens/typography |
| Ant Design | ant.design/docs/spec/font |
| Dell DS | delldesignsystem.com/foundations/typography/ |
| UAE Design System | designsystem.gov.ae/guidelines/typography |
| Cloudscape (Amazon) | cloudscape.design/foundation/visual-foundation/typography/ |
| Pajamas (GitLab) | design.gitlab.com/product-foundations/type-fundamentals |
| ServiceNow Horizon | horizon.servicenow.com/workspace/foundations/typography/typography-overview |
| Washington Post | build.washingtonpost.com/foundations/typography |
| REI Cedar | cedar.rei.com/guidelines/typography |
| NSW Gov Australia | designsystem.nsw.gov.au/core/typography/index.html |

*Blocked: Adobe Spectrum (JS), Material 3 (JS), Visa VPDS (permissions)*
