# UX4G Spacing Foundation Page — Benchmark & Recommendation

> Based on direct reads of 17 live design system spacing pages (20 attempted; 3 blocked).  
> Systems read: Carbon (IBM), Atlassian, GOV.UK, Cloudscape (Amazon), Pajamas (GitLab), PatternFly (Red Hat), Australian Gov Agriculture, UAE Design System, REI Cedar, Porsche DS, ServiceNow Horizon, Duet (LocalTapiola), Washington Post WPDS.  
> Blocked/JS-only: GE Edison (robots), Docplanner Watson (400 error), Razorpay Blade (Storybook), Pluralsight Pando (Storybook), Denmark DS (permissions), Thumbtack (permissions).

---

## Part 1 — What the 17 Systems Actually Do

### Section frequency (from real page reads)

| Section | Present in |
|---|---|
| Base unit explanation (4px or 8px grid) | 14 / 17 |
| Spacing scale table (token name + px + visual) | 16 / 17 |
| Principles (why spacing matters, proximity, grouping) | 11 / 17 |
| Semantic groups (padding vs margin vs gap vs section) | 10 / 17 |
| Usage guidance per token (when to use which value) | 9 / 17 |
| Box model explanation (padding vs margin distinction) | 4 / 17 |
| Responsive spacing (values change at breakpoints) | 5 / 17 |
| Code examples (CSS syntax, utility classes) | 11 / 17 |
| Do's and Don'ts | 6 / 17 |
| Fluid vs static spacing distinction | 2 / 17 |
| Visual examples per token (mini bar / square) | 13 / 17 |
| Negative spacing | 3 / 17 |

---

### Key findings per system

**Carbon (IBM)**  
Sections: Introduction → Spacing scale (13-token table with visual bar per step, 2px–160px) → Applying spacing (CSS examples: margin, padding, all directions) → Other spacing options (center/auto/gutter) → Stacking (Stack component, horizontal and vertical orientation) → Designing with space (principles) → FAQ.  
Key differentiator: The **Stack component** explanation — Carbon explicitly teaches that layout components should handle spacing, not individual components. Components "do not use margin and instead delegate the responsibility of positioning and layout to parent components." This margin-free component model is the most architecturally sophisticated spacing approach across all 17 systems.  
FAQ section: Addresses common questions like "Can I use negative margin?" and "When should I use a layout component vs spacing tokens?"

**Atlassian**  
Sections: 8px base unit → Scale (token table, 0–80px, with percentage-of-base-unit column: `space.200` = 200% of 8px = 16px) → Negative values → Usage (three size ranges: Small 0–8px / Medium 12–24px / Large 32–80px) → Layout guidelines (Group by similarity / Gestalt proximity / Whitespace for visual hierarchy) → Do's and Don'ts.  
Key differentiator: Three-zone breakdown of the scale — Small (detail-level component internals), Medium (component containers and larger elements), Large (page-level layout and sections). This is the clearest "when to use which range" framework across all 17 systems.  
Negative values: documented with the `Bleed` primitive as the recommended alternative before reaching for negative values.

**GOV.UK**  
Sections: Responsive spacing scale (table with Small screen / Large screen columns — 9 units, 0–60px) → Static spacing scale → Applying spacing in CSS (Sass mixins: `govuk-responsive-padding`, `govuk-spacing`) → Overriding spacing (utility classes: `govuk-!-margin-9`, `govuk-!-padding-right-5`).  
Key differentiator: **Responsive spacing** — every spacing unit has two values: one for small screens (≤640px) and one for large screens. Units 0–3 stay the same; units 4–9 expand on large screens. This is the most practical responsive spacing documentation across all 17 systems.  
Utility class pattern: `govuk-!-padding-bottom-9` — the numeric scale maps directly to utility classes, so designers and devs share the same language.

**Cloudscape (Amazon)**  
Sections: Grid system (4px base unit, soft grid approach) → Spacing types (inside components = padding; between components = margin) → Spacing scale (table with semantic names: xxx-small/xx-small/x-small/small/medium/large/x-large/xx-large/xxx-large, 2–40px, each with component examples in the "Examples" column) → Key concepts (Create relationships / Establish hierarchy / Provide breathing room) → Implementation.  
Key differentiator: **Examples column in the scale table** — every spacing step has 2–3 concrete component examples ("Vertical space between form field label and control" for 4px; "Horizontal padding inside a popover" for 16px). This directly answers "what value do I use for this?" which is the most-asked designer question.  
Inside vs between distinction: clearly explained — component padding = smaller values; layout margin = larger values.

**Pajamas (GitLab)**  
Navigation-heavy page; spacing page mostly links to token reference. Uses Tailwind utilities. Documents that GitLab uses a 4-unit scale and refers teams to the design tokens directory for specific values.

**PatternFly (Red Hat)**  
Sections: Spacer sizing (rem units, 16px root default) → PatternFly spacers (8-value table: xs/sm/md/lg/xl/2xl/3xl/4xl, 4–80px) → Spacer tokens → Semantic spacers (Action spacers, Control spacers, Layout spacers, Gap spacers) → Considering line height and padding → Using spacers with text.  
Key differentiator: **Semantic spacer sub-groups** — not just a flat scale but named contextual sub-groups: Action spacers (button padding), Control spacers (input padding), Layout spacers (gap between elements/groups). This is the closest to UX4G's own semantic grouping model (Section / Padding / Margin / Inline / Stack).  
Using spacers with text: unique section — explains how line height affects perceived spacing and how to account for it when applying top/bottom spacing to text elements.

**Australian Gov Agriculture**  
Sections: Intro (spacing = distance between interface elements, affects grouping/hierarchy/aesthetics) → 4 Gestalt-based principles (closer = more related; more space = more prominent; ensure sufficient distinction) → Spacing tokens (11 values, 0–96px, 8px-based) → How to use spacing tokens (per-value usage guide: 8px for icon-text gap; 12px for nav items; 16px for card gaps; 24px for gutter; 32px for form fields; 48px for page sections; 64px for page padding).  
Key differentiator: Per-value usage guide anchored to specific component contexts — the most practically useful spacing reference for UX4G given the similar governance context. Each value maps to 2–4 concrete use cases.

**UAE Design System**  
Combined layout + spacing page. Documents 5 breakpoints → containers → spacing as part of the grid. Uses Tailwind utility classes (`p-{size}`, `m-{size}`, `gap-{size}`). Spacing defined by the TailwindCSS default scale. Explicitly mobile-first. Does not publish a standalone spacing token table — spacing lives inside the layout framework.

**REI Cedar**  
Sections: Understanding spacing (Cedar elements are self-contained, provide no spacing outside borders — spacing is always applied externally) → Box model → Spacing margins (8 values from a 16px base: 2/4/8/16/24/32/48/64px) → Inset padding (3 variants: Default / Squish / Stretch for each size) → Breakpoints → Using spacing tokens.  
Key differentiator: **Inset padding variants** — Default (equal on all sides), Squish (top/bottom 50% smaller), Stretch (top/bottom 50% larger). This is the most sophisticated inset system seen across all 17 systems, addressing the real design scenario where compact vs spacious component variants are needed.  
Also unique: explicitly states that "Cedar elements are self-contained and provide no spacing outside of their border and box shadows" — defines where spacing responsibility lives.

**Porsche DS**  
Sections: Fluid spacing (scales with viewport) → Static spacing → Do's and Don'ts.  
Key differentiator: **Fluid vs static distinction** — fluid spacing scales with viewport width (same vocabulary as fluid typography), while static spacing stays fixed. Porsche is the only system of the 17 to document this distinction explicitly. Only 2 of 17 systems document fluid spacing — it's a gap in most design systems.

**ServiceNow Horizon**  
Sections: Overview → Spacing and proximity (conceptual) → Application in components → Sizes (8-value scale table: 2–32px, each with a named SCSS token).  
Concise and conceptual. Strong on the "proximity = relationship" principle. Scale is modest (maxes at 32px) which reflects its dense enterprise UI context.

**Duet (LocalTapiola)**  
Full page mostly navigation; Duet documents spacing as a guideline + token reference. Scale appears straightforward (8px-based, T-shirt sizes). Interesting: color-blind mode and low-vision mode toggles on the site — shows accessibility-first thinking in their documentation itself.

**Washington Post WPDS**  
Pure token reference: space tokens relative to baseSize, shown as rem + calculated px, 16 steps (4–80px). Terse and reference-oriented only — no usage guidance.

---

### The 3 biggest differentiators of "great" vs "average"

1. **Usage examples per token step** — Cloudscape and Australian Gov Agriculture both map each token value to 2–4 concrete component use cases. Most systems show the token table but don't answer "what do I use this for?" — leaving designers to guess.

2. **Semantic grouping by context** — PatternFly's Action/Control/Layout/Gap sub-groups and UX4G's own Section/Padding/Margin/Inline/Stack model are the most practical. A flat 10-token scale with no semantic context is harder to use correctly than a grouped semantic layer.

3. **Inside vs between distinction** — Cloudscape and Carbon both explicitly distinguish "spacing inside components (padding)" from "spacing between components (margin)" as the primary mental model. This is the single most useful frame for understanding when to use small vs large values.

---

## Part 2 — UX4G Spacing Foundation Page Recommendation

### UX4G spacing system as-built (from CSS files)

**Primitive tokens (17 values):**

| Token | Value |
|---|---|
| `--ux4g-space-none` | 0px |
| `--ux4g-space-1` | 2px |
| `--ux4g-space-2` | 4px |
| `--ux4g-space-3` | 6px |
| `--ux4g-space-4` | 8px |
| `--ux4g-space-5` | 12px |
| `--ux4g-space-6` | 16px |
| `--ux4g-space-7` | 20px |
| `--ux4g-space-8` | 24px |
| `--ux4g-space-9` | 32px |
| `--ux4g-space-10` | 40px |
| `--ux4g-space-11` | 48px |
| `--ux4g-space-12` | 56px |
| `--ux4g-space-13` | 64px |
| `--ux4g-space-14` | 80px |
| `--ux4g-space-15` | 120px |
| `--ux4g-space-16` | 360px |

**Semantic groups (5 categories):**

| Group | Tokens | Values |
|---|---|---|
| **Section** | section-xs → section-2xl | 24, 32, 48, 56, 64, 80px |
| **Padding** | padding-3xs → padding-4xl | 2, 4, 8, 12, 16, 20, 24, 32, 120, 360px |
| **Margin** | margin-3xs → margin-2xl | 2, 4, 8, 12, 16, 20, 24, 32px |
| **Inline** | inline-2xs → inline-l | 2, 4, 8, 12, 16px |
| **Stack** | stack-2xs → stack-l | 4, 8, 12, 16, 24px |

**Utility classes:** Full margin (`ux4g-m-*`, `ux4g-mt/mb/ml/mr/mx/my-*`), padding (`ux4g-p-*`, directional), gap (`ux4g-gap-*`, `ux4g-stack-gap-*`, `ux4g-inline-gap-*`). RTL-safe via logical properties (`margin-block`, `margin-inline`).

---

### Recommended page structure — 8 sections

---

#### Section 1 — Introduction + 3 Principles
*Pattern: Atlassian (principles) + Cloudscape (inside/between as primary frame) + Australian Gov Agriculture (Gestalt rationale)*

**Opening:**
> "Spacing creates breathing room, communicates relationships, and guides attention. In government interfaces — where citizens are completing tasks, not browsing — consistent spacing reduces cognitive load and makes forms, instructions, and actions feel clear and predictable."

**3 principles:**

| Principle | What it means |
|---|---|
| **Proximity signals relationship** | Elements placed close together are perceived as related. More space separates them. Use this intentionally: form fields within a group should be closer together than separate groups are to each other. |
| **Inside and between are different jobs** | Spacing inside a component (padding) is a different concern from spacing between components (margin and gap). Inside spacing creates comfortable reading and touch targets. Between spacing creates hierarchy and visual separation. |
| **Use tokens, not arbitrary values** | Every spacing decision must use a UX4G spacing token. Arbitrary pixel values break visual rhythm and make future updates impossible. |

---

#### Section 2 — Base unit
*Pattern: Atlassian (explicit base unit explanation) + Cloudscape (4px grid)*

> "UX4G's spacing system is built on a **4px base unit**. All spacing tokens are multiples or half-multiples of 4px. This keeps spacing consistent with the grid, icon sizes, and component dimensions — creating a naturally harmonious layout."

Show a simple visual: a grid of 4px cells, with 1×, 2×, 3×, 4×, 6×, 8× annotations.

---

#### Section 3 — Primitive scale
*Pattern: Cloudscape (examples column) + Carbon (visual bar per step)*

Show the 17 primitive tokens as a scale table. Each row: token name + value in px + visual bar + when NOT to use (these are reference values only).

| Token | Value | Visual |
|---|---|---|
| `--ux4g-space-none` | 0px | — |
| `--ux4g-space-1` | 2px | ▌ |
| `--ux4g-space-2` | 4px | ▌▌ |
| `--ux4g-space-3` | 6px | ▌▌▌ |
| `--ux4g-space-4` | 8px | ▌▌▌▌ |
| `--ux4g-space-5` | 12px | — |
| `--ux4g-space-6` | 16px | — |
| … | … | … |
| `--ux4g-space-14` | 80px | — |
| `--ux4g-space-15` | 120px | — |
| `--ux4g-space-16` | 360px | — |

**Rule (Paste/Primer pattern):**
> "Primitive tokens are the raw reference values. Use semantic tokens in all design and code work — never use primitive token names directly."

---

#### Section 4 — Semantic tokens grouped by purpose
*Pattern: PatternFly (sub-groups) + Australian Gov Agriculture (per-value usage) + Cloudscape (inside vs between)*

This is the heart of the page. Five groups, each with a dedicated visual and usage table.

---

**4.1 — Inline spacing** (horizontal gaps between sibling elements in a row)  
*"How much space between items sitting side by side."*

| Token | Value | Use when |
|---|---|---|
| `--ux4g-inline-2xs` | 2px | Tight: between icon and badge counter |
| `--ux4g-inline-xs` | 4px | Icon + text label in a compact row |
| `--ux4g-inline-s` | 8px | Icon + button label; checkbox + label text |
| `--ux4g-inline-m` | 12px | Input field + helper icon; tag + tag |
| `--ux4g-inline-l` | 16px | Button group gap; nav item gap |

Utility class: `.ux4g-inline-gap-s`, `.ux4g-inline-gap-m`

---

**4.2 — Stack spacing** (vertical gaps between stacked elements)  
*"How much space between elements stacked one above another."*

| Token | Value | Use when |
|---|---|---|
| `--ux4g-stack-2xs` | 4px | Label to input field (tightly paired) |
| `--ux4g-stack-xs` | 8px | Input field to helper text; radio button to radio button |
| `--ux4g-stack-s` | 12px | Form field group items; list item to list item |
| `--ux4g-stack-m` | 16px | Between adjacent form fields; card body items |
| `--ux4g-stack-l` | 24px | Between form field groups; between card sections |

Utility class: `.ux4g-stack-gap-xs`, `.ux4g-stack-gap-m`

---

**4.3 — Padding** (space inside a component, between its content and its edge)  
*"How much space between the container's boundary and the content inside it."*

| Token | Value | Use when |
|---|---|---|
| `--ux4g-padding-3xs` | 2px | Tight badge padding, compact chip |
| `--ux4g-padding-2xs` | 4px | Small badge or tag padding |
| `--ux4g-padding-xs` | 8px | Small button (compact), input inset |
| `--ux4g-padding-s` | 12px | Medium button vertical padding; tooltip |
| `--ux4g-padding-m` | 16px | Default button padding; card internal padding |
| `--ux4g-padding-l` | 20px | Comfortable card padding; input horizontal padding |
| `--ux4g-padding-xl` | 24px | Spacious card padding; modal padding |
| `--ux4g-padding-2xl` | 32px | Page section internal padding |
| `--ux4g-padding-3xl` | 120px | Hero section padding (special use only) |
| `--ux4g-padding-4xl` | 360px | Full-width sidebar width (not a spacing value — layout only) |

Utility classes: `.ux4g-p-m`, `.ux4g-pt-xl`, `.ux4g-px-2xl`

---

**4.4 — Section spacing** (gaps between major content sections / layout regions)  
*"How much space between distinct sections of a page — the macro rhythm of the layout."*

| Token | Value | Use when |
|---|---|---|
| `--ux4g-section-xs` | 24px | Gap between elements in a multi-step form card |
| `--ux4g-section-s` | 32px | Gap between form groups / primary content blocks |
| `--ux4g-section-m` | 48px | Gap between major form sections on a page |
| `--ux4g-section-l` | 56px | Vertical spacing between page layout zones |
| `--ux4g-section-xl` | 64px | Top/bottom page padding on desktop |
| `--ux4g-section-2xl` | 80px | Hero / landing section vertical padding |

Utility class: `.ux4g-gap-xs`, `.ux4g-gap-m`, `.ux4g-gap-2xl`

---

**4.5 — Margin** (external space around a component, pushing siblings away)  
*"Used to create separation between components at the same level."*

> Prefer gap-based layout (Flexbox/Grid with gap tokens) over margin whenever possible. Margins are harder to reason about when stacking direction changes. Margin is best reserved for adjusting specific elements that need to be offset from the flow.

| Token | Value | Use when |
|---|---|---|
| `--ux4g-margin-3xs` | 2px | Micro-adjustment (rare) |
| `--ux4g-margin-xs` | 8px | Small offset from sibling |
| `--ux4g-margin-s` | 12px | Section label offset |
| `--ux4g-margin-m` | 16px | Standard component margin |
| `--ux4g-margin-l` | 20px | — |
| `--ux4g-margin-xl` | 24px | Section margin |
| `--ux4g-margin-2xl` | 32px | Large layout offset |

Utility classes: `.ux4g-mt-m`, `.ux4g-mb-xl`, `.ux4g-mx-auto` (centre horizontally)

---

#### Section 5 — Three-zone guide (quick reference)
*Pattern: Atlassian's Small/Medium/Large breakdown — the most-cited practical framework*

> "Think of the spacing scale in three zones based on what you're spacing:"

| Zone | Range | Semantic tokens | Use for |
|---|---|---|---|
| **Micro** (detail) | 2–8px | Inline-2xs → Inline-s, Stack-2xs → Stack-xs, Padding-3xs → Padding-xs | Icon-text gaps, label-input pairs, badge padding, tight list items |
| **Component** (container) | 12–32px | Inline-m/l, Stack-s/m/l, Padding-s → Padding-2xl | Button padding, card internals, form field spacing, component gaps |
| **Layout** (page) | 48–80px | Section-m → Section-2xl | Between page sections, hero padding, content region separation |

---

#### Section 6 — Do's and Don'ts
*Pattern: Atlassian (Gestalt-based) + Carbon (margin vs gap)*

| Do | Don't |
|---|---|
| Use gap utilities (`.ux4g-stack-gap-m`) to space flex/grid children | Use margins on individual child components for layout |
| Use closer spacing within related groups (e.g. radio options) | Use the same spacing between everything — flattens hierarchy |
| Use Section tokens for page-level layout, Padding for component internals | Use Section-2xl for button padding or Padding-xs for a page margin |
| Use `.ux4g-mx-auto` to centre a container horizontally | Hard-code `margin: 0 auto` with arbitrary pixel values |
| Increase space to make important elements stand out | Pack everything tightly to fit more content — this increases cognitive load |

---

#### Section 7 — Utility classes reference
*Pattern: GOV.UK (utility class naming matches scale names) + Carbon (CSS examples)*

**Margin utilities:**
```css
/* All sides */
.ux4g-m-{size}     /* e.g. ux4g-m-m = 16px all sides */

/* Block (vertical) */
.ux4g-my-{size}    /* top and bottom */
.ux4g-mt-{size}    /* top only */
.ux4g-mb-{size}    /* bottom only */

/* Inline (horizontal, RTL-safe) */
.ux4g-mx-{size}    /* left and right */
.ux4g-ml-{size}    /* left (inline-start) */
.ux4g-mr-{size}    /* right (inline-end) */

/* Special */
.ux4g-mx-auto      /* centre horizontally */
```

**Padding utilities:**
```css
.ux4g-p-{size}     /* all sides */
.ux4g-py-{size}    /* top and bottom */
.ux4g-px-{size}    /* left and right */
.ux4g-pt/pb/pl/pr-{size}   /* directional */
```

**Gap utilities (for flex/grid layouts):**
```css
.ux4g-gap-{size}           /* section gap — layout level */
.ux4g-stack-gap-{size}     /* row-gap — vertical rhythm */
.ux4g-inline-gap-{size}    /* column-gap — horizontal flow */
```

**Sizes available:** `none`, `2xs`, `xs`, `s`, `m`, `l`, `xl`, `2xl`

---

#### Section 8 — Resources

- Figma: UX4G Spacing tokens (Spacing collection, `🟢 Spacing` page in the Figma file)
- CSS: `@import '@ux4g/tokens/spacing.tokens.css'` + `@import '@ux4g/semantic/spacing.semantic.css'`
- Utilities: `@import '@ux4g/utilities/spacing.utilities.css'` + `@import '@ux4g/utilities/gap.utilities.css'`
- Related foundations: Layout (grid + breakpoints), Typography (line height affects perceived vertical spacing)

---

## Part 3 — Implementation Staging

| Stage | Sections | Benchmark it reaches |
|---|---|---|
| Stage 1 | 1, 2, 3, 4 | Matches Australian Gov Agriculture / GOV.UK |
| Stage 2 | + 5, 6 | Matches Atlassian / Cloudscape bar |
| Stage 3 | + 7, 8 | Matches Carbon / PatternFly complete quality |

---

## Appendix — Systems read and their URLs

| System | URL |
|---|---|
| Carbon (IBM) | carbondesignsystem.com/elements/spacing/overview/ |
| Atlassian | atlassian.design/foundations/spacing/ |
| GOV.UK | design-system.service.gov.uk/styles/spacing/ |
| Cloudscape (Amazon) | cloudscape.design/foundation/visual-foundation/spacing/ |
| Pajamas (GitLab) | design.gitlab.com/product-foundations/spacing |
| PatternFly (Red Hat) | patternfly.org/design-foundations/spacers |
| Australian Gov Agriculture | design-system.agriculture.gov.au/foundations/tokens/spacing |
| UAE Design System | designsystem.gov.ae/guidelines/layout |
| REI Cedar | cedar.rei.com/guidelines/spacing |
| Porsche DS | designsystem.porsche.com/v3/styles/spacing |
| ServiceNow Horizon | horizon.servicenow.com/workspace/foundations/spacing/spacing-overview |
| Duet (LocalTapiola) | duetds.com/spacing/ |
| Washington Post | build.washingtonpost.com/foundations/space |

*Blocked: GE Edison (robots.txt), Docplanner Watson (400), Razorpay Blade (Storybook), Pluralsight Pando (Storybook), Denmark DS (permissions), Thumbtack (permissions)*
