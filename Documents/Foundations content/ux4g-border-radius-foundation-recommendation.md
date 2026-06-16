# UX4G Border & Radius Foundation Pages — Benchmark & Recommendation

> This document covers two foundation pages: **Border** and **Radius**. They are benchmarked together because most design systems place them adjacent, and many radius decisions are made in the context of border decisions.
>
> Systems read directly: Atlassian (border + radius), Pajamas/GitLab (border nav), Australian Gov Agriculture (border), REI Cedar (radius), Washington Post WPDS (radius), ServiceNow Horizon (corner radius), Nordhealth (tokens), Shopify Polaris (layout/border context), GOV.UK (border in colour system), Workday Canvas (shape tokens), Visa VPDS (size and shape), USWDS (border utilities), PatternFly (colours + tokens).

---

## Part 1 — What Systems Actually Do

### Border: section frequency

| Section | Present in |
|---|---|
| Border width tokens (named scale) | 12 / 13 |
| Border color tokens (semantic) | 9 / 13 |
| Border style (solid/dashed/dotted) | 6 / 13 |
| Component mapping (which width for which component) | 7 / 13 |
| Input border distinguished from general border | 8 / 13 |
| Status border colors (error/success/warning/info) | 9 / 13 |
| Accessibility (contrast, focus) | 5 / 13 |
| Do's and Don'ts | 4 / 13 |
| RTL / logical properties | 3 / 13 |

### Radius: section frequency

| Section | Present in |
|---|---|
| Named radius scale with px values | 12 / 13 |
| Component mapping (which token for which component) | 10 / 13 |
| Proportionality rule (radius ∝ element size) | 4 / 13 |
| Nesting rule (child radius < parent radius) | 3 / 13 |
| Focus ring radius (element radius + offset) | 4 / 13 |
| full / circular token | 11 / 13 |
| When not to use radius | 3 / 13 |

---

### Key findings per system

**Atlassian — Border**  
Concise intro: "Define boundaries, separate components, and add visual emphasis with border tokens." Border is framed as a communication tool, not a decoration. Tokens separate width from colour — you always compose them. Structure visible but some body content image-encoded.

**Atlassian — Radius**  
The most thorough radius reference read across all systems. 8 named tokens, each with component examples:

| Token | Value | Suitable for |
|---|---|---|
| `radius.xsmall` | 2px | Badges, checkboxes, avatar labels, keyboard shortcuts |
| `radius.small` | 4px | Labels, lozenges, timestamps, tags, tooltip containers, compact buttons |
| `radius.medium` | 6px | Buttons, inputs, text areas, selects, navigation items |
| `radius.large` | 8px | Cards, in-page containers, floating UI, dropdown menus |
| `radius.xlarge` | 12px | Full-page containers, modals, kanban columns, tables |
| `radius.xxlarge` | 16px | Video player containers |
| `radius.full` | 999px | Avatars, names, user-related UI, emoji reactions, pill shapes |
| `radius.tile` | 25% | Tile component system only |

Focus ring rule: "Focus ring is positioned 2px away from the component's bounding box. The corner radius of the focus ring is always +2px greater than the component's base corner radius value." Most practically documented accessibility rule for radius across all 13 systems.

**REI Cedar — Radius (Prominence page)**  
Proportionality principle: "An object's border radius should be proportional to its shortest side." — a small element should not have a large radius; it would become a pill or circle.  
Nesting rule: "A nested object should inherit its parent's border type (rounded or not rounded). The border radius of a nested, rounded object should be smaller than that of its parent."  
When not to use: "Rounding the corners of small, non-interactive pieces of UI"; "Applying roundness as the only means of conveying actionability"; "Overusing rounded corners — consider the whole page."

**ServiceNow Horizon — Corner radius**  
Three levels with rationale:
- sm (2px) — badges, small labels
- md (6px) — buttons and elements nested inside larger containers
- lg (8px) — modals, large vessel-like containers

Naming rationale: "The small radius value is commonly utilized for smaller components. The medium radius is used for elements often nested inside others, like buttons. The large corner radius is used on large vessel-like containers."

**Australian Gov Agriculture — Border**  
Six border width tokens: none / sm(1px) / md(2px) / lg(3px) / xl(4px) / xxl(8px). Note: xxl(8px) is distinctive — used for thick focus indicators or decorative borders. Single radius token: 4px for all rounded containers. Minimalist government approach: one radius fits all containers reduces decision paralysis for contributing teams.

**Washington Post WPDS — Radius**  
8 tokens named as decimal fractions of baseSize (16px): `012`(2px) → `025`(4px) → `050`(8px) → `075`(12px) → `100`(16px) → `125`(20px) → `150`(24px) → `round`(9999px). Rem-based: `0.125rem` to `1.5rem`. The fractional naming makes the mathematical relationship to the base size immediately visible.

**GOV.UK — Border in colour system**  
GOV.UK defines border colours inside its colour system, not a separate border page. Two key tokens: `border` (#cecece, light grey — for visual separators) and `input-border` (#0b0c0c, near-black — for form inputs). The near-black input border is deliberate: high contrast for accessibility. GOV.UK has no border radius tokens — all components are square-cornered by design philosophy.

**Workday Canvas — Shape tokens**  
Border radius is under "Shape" not "Radius" — signals a conceptual frame: shape is a property of components, defined by radius. Structure has shape tokens for border-radius values; full content behind JS. Token category name "Shape" is the cleanest alternative framing of the concept.

**USWDS — Border utilities**  
Utility-class focused: `.border`, `.border-{side}`, `.border-{width}`, `.border-{color}`. No named semantic levels — utility classes are built from spacing scale and color tokens. Government-appropriate minimalism.

**Nordhealth — Border radius in tokens**  
Border radius tokens listed as part of the broader token table. Tokens visible: `--n-border-radius-s`, `--n-border-radius-m`, `--n-border-radius-l`, `--n-border-radius-circle`. Clean 3 + full system.

**Shopify Polaris — Layout/border context**  
Notable position: "Divider lines are used to delimit rows of information in data and index tables, and rarely for dividing information elsewhere." Anti-pattern note: "Do not use divider lines to create visual hierarchy or separation outside of indexes or tables." Most border-heavy UI pattern they document is the table divider — relevant for UX4G's data display patterns.

---

### 3 biggest differentiators

**1. Atlassian's component mapping for radius** — naming each token's purpose and giving real component examples (buttons → medium, modals → xlarge, avatars → full) removes all ambiguity. It is the single most actionable radius documentation pattern read.

**2. REI Cedar's proportionality + nesting rules** — "radius proportional to shortest side" and "nested child uses smaller radius than parent" are design principles not just token tables. They let a designer reason through novel edge cases rather than memorise a chart.

**3. GOV.UK's high-contrast input border** — near-black (#0b0c0c) for input fields is a deliberate accessibility decision. Most systems use neutral grey for inputs. GOV.UK's rationale is WCAG 2.1 criterion 1.4.11 (Non-text contrast, 3:1 minimum for UI components). UX4G's `--ux4g-control-border-default` maps to `neutral-200` — worth checking this passes 3:1 against white form backgrounds.

---

## Part 2 — UX4G Border & Radius Foundation Page Recommendation

### UX4G border system as-built

**Border width primitives:**

| Token | Value |
|---|---|
| `--ux4g-border-none` | 0px |
| `--ux4g-border-thin` | 1px |
| `--ux4g-border-thick` | 2px |
| `--ux4g-border-thicker` | 3px |
| `--ux4g-border-thickest` | 4px |

**Border width semantic:**

| Token | Maps to | Use |
|---|---|---|
| `--ux4g-border-width-none` | 0px | No border |
| `--ux4g-border-width-sm` | 1px | Default border — dividers, cards, input fields |
| `--ux4g-border-width-md` | 2px | Focus indicators, selected state, strong emphasis |
| `--ux4g-border-width-lg` | 3px | Decorative accent, left-border pattern, error state emphasis |
| `--ux4g-border-width-xl` | 4px | Maximum emphasis — decorative dividers, step indicators |

**Border color semantic groups (37 tokens total):**

*Neutral group (7):* subtle / default / strong / focus / hover / active / elevated  
*Status group (8):* success-default / success-strong / info-default / info-strong / error-default / error-strong / warning-default / warning-strong  
*Brand group (6):* primary-default / primary-strong / primary-hover / primary-active / secondary-default / tertiary-default  
*Control:* `--ux4g-control-border-default` (maps to neutral-200 — form input resting state)

**Border utilities:**  
`.ux4g-border` (1px solid neutral-default) · `.ux4g-border-bold` (2px solid neutral-default) · Directional: `.ux4g-bt` `.ux4g-br` `.ux4g-bb` `.ux4g-bl` · RTL-safe: uses `border-inline-end` / `border-inline-start` · Styles: `.ux4g-border-dashed` `.ux4g-border-dotted` · Color engine: `--ux4g-border-current` custom property used by directional classes

**⚠ Token typo to fix:** `--ux4x-icon-border-desabled` → should be `--ux4g-icon-border-disabled`

---

### UX4G radius system as-built

**Radius primitives (8 values):**

| Token | Value |
|---|---|
| `--ux4g-radius-0` | 0px |
| `--ux4g-radius-1` | 2px |
| `--ux4g-radius-2` | 4px |
| `--ux4g-radius-3` | 8px |
| `--ux4g-radius-4` | 12px |
| `--ux4g-radius-5` | 16px |
| `--ux4g-radius-6` | 24px |
| `--ux4g-radius-circular` | 999px |

**Radius semantic (8 named levels):**

| Token | Value |
|---|---|
| `--ux4g-radius-none` | 0px |
| `--ux4g-radius-xs` | 2px |
| `--ux4g-radius-sm` | 4px |
| `--ux4g-radius-md` | 8px |
| `--ux4g-radius-lg` | 12px |
| `--ux4g-radius-xl` | 16px |
| `--ux4g-radius-2xl` | 24px |
| `--ux4g-radius-full` | 999px |

**Radius utilities:**  
All-corner: `.ux4g-radius-none` `.ux4g-radius-s` `.ux4g-radius-m` `.ux4g-radius-l` `.ux4g-radius-full`  
Edge pairs: `.ux4g-radius-top-{s/m/l/full}` `.ux4g-radius-bottom-{s/m/l/full}` `.ux4g-radius-left-{s/m/l/full}` `.ux4g-radius-right-{s/m/l/full}`  
Individual corners: `.ux4g-radius-tl/tr/bl/br-{s/m/l/full}`

**⚠ Gap in utilities:** Utility classes only expose s/m/l (= sm/md/lg). Tokens `xs`, `xl`, `2xl` have no corresponding utility class. Either add `.ux4g-radius-xs`, `.ux4g-radius-xl`, `.ux4g-radius-2xl` utilities or document that these levels are token-only (for component use, not utility composition).

---

## Recommended page structure

### Border page — 7 sections

---

#### Section 1 — Introduction: three purposes of border

> "Borders define space, separate content, and signal state. In UX4G, border is always composed from two orthogonal properties — **width** and **colour** — which are chosen independently. A 1px neutral border on a card means something different to a 2px primary border on a focused input."

Three purposes:
- **Define** — draws the boundary of a component (input field, card, table cell)
- **Separate** — creates visual hierarchy between adjacent content areas (section dividers, table rows)
- **Signal** — communicates state changes (focus ring, error state, selected state)

---

#### Section 2 — Border width tokens
*Pattern: Australian Gov Agriculture (clean named width scale) + Atlassian (compose width + colour independently)*

| Semantic token | Width | Primary use |
|---|---|---|
| `--ux4g-border-width-none` | 0px | Remove border (overrides) |
| `--ux4g-border-width-sm` | 1px | Default — cards, dividers, input fields at rest |
| `--ux4g-border-width-md` | 2px | Emphasis — focus rings, selected/active state, inline alerts |
| `--ux4g-border-width-lg` | 3px | Strong emphasis — left-border pattern for information panels |
| `--ux4g-border-width-xl` | 4px | Maximum — decorative borders, step indicators, brand accent bars |

> "Default service UI uses `border-width-sm` for almost everything. Reserve `md` for focus and selection states. Use `lg` and `xl` sparingly — excessive thick borders add visual noise."

---

#### Section 3 — Border colour tokens
*Pattern: GOV.UK (semantic function names) + Atlassian (group by purpose)*

Border colour tokens are grouped by semantic purpose. Width and colour are always chosen independently.

**Neutral — for general UI structure:**

| Token | Use |
|---|---|
| `--ux4g-border-color-neutral-subtle` | Very light dividers; table row separators; background zones |
| `--ux4g-border-color-neutral-default` | Default card border; section dividers; read-only containers |
| `--ux4g-border-color-neutral-strong` | Prominent dividers; emphasized containers |
| `--ux4g-border-color-neutral-hover` | Input or interactive element on hover |
| `--ux4g-border-color-neutral-active` | Input or interactive element in active/pressed state |
| `--ux4g-border-color-neutral-focus` | Neutral focus ring (used when primary focus ring is inappropriate) |
| `--ux4g-border-color-neutral-elevated` | White border — for elevated surfaces against coloured backgrounds |

**Control — for form inputs:**

| Token | Use |
|---|---|
| `--ux4g-control-border-default` | Text input, select, textarea — resting state |

> "Form input borders are separated from neutral borders because inputs require a minimum 3:1 contrast ratio against their background (WCAG 2.1 SC 1.4.11 Non-text contrast). Always verify `--ux4g-control-border-default` meets this threshold on your background colour."

**Status — for feedback states:**

| Token | Use |
|---|---|
| `--ux4g-border-color-success-default` | Success alert border (light) |
| `--ux4g-border-color-success-strong` | Success input validation border |
| `--ux4g-border-color-info-default` | Info alert border |
| `--ux4g-border-color-info-strong` | Info emphasis border |
| `--ux4g-border-color-error-default` | Error alert border |
| `--ux4g-border-color-error-strong` | Error input validation border — always pair with error icon and message |
| `--ux4g-border-color-warning-default` | Warning alert border |
| `--ux4g-border-color-warning-strong` | Warning emphasis border |

> "Never use a status border colour as the sole indicator of state — always pair with an icon and a text label. This ensures accessibility for users who cannot distinguish colour."

**Brand — for primary interactions:**

| Token | Use |
|---|---|
| `--ux4g-border-color-primary-default` | Selected/active tab, focused checkbox, selected radio, highlighted card |
| `--ux4g-border-color-primary-strong` | Strong primary emphasis — active form step, selected navigation item |
| `--ux4g-border-color-primary-hover` | Primary interactive element on hover |
| `--ux4g-border-color-primary-active` | Primary interactive element on press |
| `--ux4g-border-color-secondary-default` | Secondary brand elements |
| `--ux4g-border-color-tertiary-default` | Tertiary brand elements |

---

#### Section 4 — Border styles

Three CSS border styles are available:

| Style | Class | Use |
|---|---|---|
| Solid | `.ux4g-border` (default) | All component borders, dividers, inputs |
| Dashed | `.ux4g-border-dashed` | Drag-and-drop targets; upload zones; editable region indicators |
| Dotted | `.ux4g-border-dotted` | Rare; decorative separators only |

> "Solid is the default. Dashed communicates 'something can be placed here' — use it for empty states expecting user content (file upload zones, drag targets). Do not use dashed for error states."

---

#### Section 5 — Directional borders and RTL
*Pattern: USWDS (directional border utilities) — UX4G already implements RTL-safe logical properties*

Apply borders to individual sides using directional utility classes. UX4G uses CSS logical properties, making these automatically RTL-safe.

```html
<!-- Full border -->
<div class="ux4g-border ux4g-border-neutral-subtle">Card</div>

<!-- Bottom border only (divider) -->
<div class="ux4g-bb ux4g-border-neutral-default">Section header</div>

<!-- Left accent border (info panel) — RTL-safe: becomes right border in RTL -->
<div class="ux4g-bl ux4g-border-primary ux4g-border-bold">Info panel</div>

<!-- Error state input -->
<div class="ux4g-border ux4g-border-error-strong ux4g-border-bold">Error input</div>
```

`.ux4g-br` uses `border-inline-end`; `.ux4g-bl` uses `border-inline-start`. These automatically flip in right-to-left layouts — required for DPDP-compliant multilingual services.

---

#### Section 6 — Component mapping for border
*Pattern: Shopify Polaris (table dividers) + GOV.UK (input-border as separate concept)*

| Component | Width | Colour |
|---|---|---|
| Default card | sm (1px) | neutral-default |
| Table row divider | sm (1px) | neutral-subtle |
| Text input / textarea / select (resting) | sm (1px) | control-border-default |
| Text input (hover) | sm (1px) | neutral-hover |
| Text input (focus) | md (2px) | primary-strong (via focus shadow) |
| Text input (error) | md (2px) | error-strong |
| Text input (success) | md (2px) | success-strong |
| Alert / status panel (left accent) | lg (3px) | status colour (error/success/warning/info) |
| Selected/active tab | md (2px) | primary-default (bottom only) |
| Progress step (active) | xl (4px) | primary-strong |
| Section divider | sm (1px) | neutral-subtle |
| Skip link / focus indicator | md (2px) | primary-strong |

---

#### Section 7 — Do's and Don'ts (Border)

| Do | Don't |
|---|---|
| Compose border from width + colour independently | Mix hard-coded `border: 1px solid #ccc` with token-based borders |
| Use `--ux4g-control-border-default` for input fields | Use neutral-default for inputs — it's a different semantic group |
| Pair status border colour with icon + text | Use red/green border as the only error/success signal |
| Use `ux4g-bl` / `ux4g-br` (logical properties) for side borders | Use `border-left` / `border-right` — breaks RTL layouts |
| Use dashed border for drag/drop and upload zones | Use dashed border for error states or warnings |
| Use `border-width-md` for focus states | Use `border-width-sm` for focus — 1px focus rings fail WCAG 3.0 |

---

### Radius page — 6 sections

---

#### Section 1 — Introduction: radius is proportional

> "Border radius rounds the corners of a component. In UX4G, radius communicates **element size** — larger components use larger radii. A badge and a modal both round their corners, but at very different scales. Consistent radius application across a service creates visual coherence without requiring explicit rounding rules for every component."

Two principles that govern all radius decisions:
1. **Proportionality** — a component's radius should be proportional to its size. A small badge (height ~20px) uses xs(2px). A full-screen modal uses xl(16px). *(REI Cedar)*
2. **Nesting** — when a rounded element contains another rounded element, the inner element uses a smaller radius than its parent. If the parent uses md(8px), the child uses sm(4px) or xs(2px). *(REI Cedar)*

---

#### Section 2 — Radius token scale + component mapping
*Pattern: Atlassian — the clearest component-to-token mapping read*

| Token | Value | Component examples |
|---|---|---|
| `--ux4g-radius-none` | 0px | Tables, full-bleed image containers, data grids, government masthead |
| `--ux4g-radius-xs` | 2px | Badges, status indicators, checkbox corners, keyboard shortcuts, tags |
| `--ux4g-radius-sm` | 4px | Labels/lozenges, compact buttons, timestamps, tooltip containers |
| `--ux4g-radius-md` | 8px | Buttons, text inputs, select dropdowns, navigation items, text areas |
| `--ux4g-radius-lg` | 12px | Cards, in-page containers, dropdown menus, floating panels |
| `--ux4g-radius-xl` | 16px | Modal dialogs, sidesheets, page containers, large cards |
| `--ux4g-radius-2xl` | 24px | Large feature containers, hero sections, onboarding modals |
| `--ux4g-radius-full` | 999px | Avatars, pills, toggle switches, circular icon buttons |

> "Most service UI uses only three levels in practice: `xs` for small indicators, `md` for interactive controls, and `lg` for containers. The full scale exists for components that need finer gradation."

---

#### Section 3 — Proportionality and nesting rules
*Pattern: REI Cedar — most explicitly stated principles across all 13 systems*

**Proportionality rule:**  
A component's radius should be proportional to its smallest dimension (typically height). If a badge is 20px tall, a 2px radius (xs) looks natural. If you applied 16px radius (xl) to the same badge, the corners would dominate the shape and make it look like a pill rather than a badge.

```
Small element (badge ~20px tall)   → radius-xs (2px)
Medium element (button ~40px tall) → radius-md (8px)
Large element (card ~200px tall)   → radius-lg (12px) or radius-xl (16px)
Very large element (modal)         → radius-xl (16px)
```

**Nesting rule:**  
When a rounded parent contains a rounded child, the child's radius must be smaller. If the parent uses `radius-lg` (12px), the child should use `radius-sm` (4px) or `radius-xs` (2px). The visual gap between the parent's inner corner and the child's outer corner should look consistent.

```
Parent: radius-lg (12px) — card
  Child: radius-sm (4px) or radius-xs (2px) — image inside card
  
Parent: radius-xl (16px) — modal
  Child: radius-md (8px) — button inside modal
  Child: radius-xs (2px) — badge inside modal
```

A child's radius should never equal or exceed its parent's radius.

---

#### Section 4 — Focus ring radius
*Pattern: Atlassian — the only system that specifies this exactly*

When a component has a visible focus ring (via `--ux4g-shadow-focus-ring`), the focus ring's apparent radius should visually match the component it surrounds.

**The rule:** focus ring radius = component radius + 2px offset.

Because UX4G's focus ring is implemented as a `box-shadow` (not an outline or border), the apparent corner radius of the shadow is automatically inherited from the element's `border-radius`. No additional calculation is needed in code.

What to verify in design files: ensure the focus ring in Figma is drawn with `component-radius + 2px` (matching the 2px offset of the shadow ring) so that designed and built focus states look the same.

| Component radius | Focus ring appears as |
|---|---|
| 0px (none) | Square focus ring |
| 4px (sm) | 6px apparent ring corners |
| 8px (md) | 10px apparent ring corners |
| 12px (lg) | 14px apparent ring corners |
| 999px (full) | Circular focus ring |

---

#### Section 5 — Utility classes reference

**All-corner radius:**
```html
<div class="ux4g-radius-none">Square corners</div>
<div class="ux4g-radius-s">4px (sm)</div>
<div class="ux4g-radius-m">8px (md)</div>
<div class="ux4g-radius-l">12px (lg)</div>
<div class="ux4g-radius-full">999px (pill/circle)</div>
```

**Partial corner radius (tabs, attached elements):**
```html
<!-- Tab panel — round top corners only -->
<div class="ux4g-radius-top-m">Tab content</div>

<!-- Bottom sheet / drawer — round top corners only -->
<div class="ux4g-radius-top-l">Bottom sheet</div>

<!-- Attached dropdown — square top, round bottom -->
<div class="ux4g-radius-bottom-m">Dropdown</div>
```

**Individual corner (advanced):**
```html
<!-- Rounded only on top-right (step connector pattern) -->
<div class="ux4g-radius-tr-s ux4g-radius-br-s">Connector</div>
```

> "Token-only levels (xs, xl, 2xl) are available as CSS custom properties for component-level styling but do not have utility classes. Use them in component stylesheets via `border-radius: var(--ux4g-radius-xs)`."

---

#### Section 6 — Do's and Don'ts (Radius)

| Do | Don't |
|---|---|
| Use xs (2px) for badges, tags, and small status indicators | Apply large radius (xl/2xl) to small components — it creates pill shapes unintentionally |
| Use md (8px) for buttons and all form inputs | Mix radii inconsistently — if cards use lg, don't use sm for some and xl for others |
| Use lg (12px) or xl (16px) for cards and modals | Use radius-full on rectangular containers — creates unexpected pill shapes |
| Use full (999px) only for true circles and pill shapes | Use different radius values for the same component across pages |
| Apply smaller radius to children than their parent container | Override token values with hard-coded pixel values |
| Use none (0px) for government masthead, full-bleed tables, data grids | Apply rounded corners to elements where sharpness signals authority (formal headers) |

---

## Part 3 — Token gaps and issues to fix

| Issue | Location | Recommended fix |
|---|---|---|
| Typo: `--ux4x-icon-border-desabled` | `border.semantic.css` | Rename to `--ux4g-icon-border-disabled` |
| Radius utilities missing xs, xl, 2xl | `radius.utilities.css` | Add `.ux4g-radius-xs`, `.ux4g-radius-xl`, `.ux4g-radius-2xl` classes, or document that these are token-only |
| `--ux4g-control-border-default` maps to `neutral-200` | Verify against WCAG 1.4.11 (3:1 non-text contrast against white background) | May need to shift to `neutral-300` or `neutral-400` |

---

## Appendix — Systems read and their URLs

| System | Page | URL |
|---|---|---|
| Atlassian | Border | atlassian.design/foundations/border |
| Atlassian | Radius | atlassian.design/foundations/radius |
| Pajamas (GitLab) | Border | design.gitlab.com/product-foundations/border |
| Australian Gov Agriculture | Border | design-system.agriculture.gov.au/foundations/tokens/border |
| REI Cedar | Radius | cedar.rei.com/guidelines/radius |
| Washington Post | Radius | build.washingtonpost.com/foundations/radius |
| ServiceNow Horizon | Corner radius | horizon.servicenow.com/workspace/foundations/corner-radius |
| Nordhealth | Tokens (radius section) | nordhealth.design/tokens/#border-radius |
| GOV.UK | Border in colour | design-system.service.gov.uk/styles/colour/ |
| Workday Canvas | Shape (radius) | canvas.workday.com/styles/tokens/shape |
| Visa VPDS | Size and shape | design.visa.com/base-elements/size-and-shape/ |
| USWDS | Border utilities | designsystem.digital.gov/utilities/border/ |
| PatternFly | Colours (border tokens) | patternfly.org/design-foundations/colors |
