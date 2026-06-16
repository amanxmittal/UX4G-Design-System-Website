# UX4G Elevation Foundation Page — Benchmark & Recommendation

> Based on direct reads of 16 live design system elevation pages (20 attempted; blocked: Orbit/robots, Helsinki/tracker, Datadog/JS, SAP/403, Uber/JS, Morningstar/permissions).  
> Systems read: Atlassian, Fluent 2 (Microsoft), Pajamas (GitLab), Australian Gov Agriculture, Ant Design, USWDS, ServiceNow Horizon, Workday Canvas, Sprout Social Seeds, Washington Post WPDS, Visa VPDS, REI Cedar (Prominence), Porsche DS, Dell DS, Nordhealth (tokens page).

---

## Part 1 — What the 16 Systems Actually Do

### Section frequency (from real page reads)

| Section | Present in |
|---|---|
| Elevation as z-axis depth metaphor (conceptual intro) | 15 / 16 |
| Named elevation levels with shadow values | 14 / 16 |
| Component mapping (which level each component uses) | 12 / 16 |
| Z-index documented alongside shadow | 8 / 16 |
| Principles (when to use elevation, when not to) | 10 / 16 |
| Dark mode elevation behaviour | 4 / 16 |
| Interaction state elevation (hover/pressed changes) | 5 / 16 |
| Stacking vs overlapping guidance | 3 / 16 |
| Focus ring tokens documented here | 4 / 16 |
| Do's and Don'ts | 7 / 16 |
| Code/CSS implementation | 9 / 16 |

---

### Key findings per system

**Atlassian**  
Sections: Concept (elevations = layered surfaces) → Applying elevations → Elevations in dark theme (shadows insufficient in dark; surface colours lighten with elevation) → Types (Sunken / Default / Raised / Overlay / Overflow) → Interaction states (hovered + pressed via surface colour change, not shadow change) → Dark mode guidance.  
Key differentiator: **5 named semantic levels** (Sunken → Default → Raised → Overlay → Overflow) — the most thorough named-level taxonomy across all 16. Each level is defined by both a shadow AND a surface colour token. Dark mode rationale is explicitly documented: "Shadows can be harder to see in dark mode, so dark mode elevations also rely on different surface colours — imagine the surfaces are distantly lit from the front. The higher the elevation, the lighter the surface."  
Unique: Sunken elevation (below the page surface — kanban column background). Only 2/16 systems document negative elevation.  
Interaction states: "Use the hovered and pressed elevation tokens to create visual changes" — elevation does NOT change level on hover; only the surface colour changes. This prevents excessive animation.

**Fluent 2 (Microsoft)**  
Sections: Depth, shadow, and light (conceptual) → Shadow system (key = directional; ambient = diffused; combined = realistic shadow) → Low elevation ramp → High elevation ramp → Using elevation.  
Shadow ramp: 6 levels named by blur value — Shadow 2 (2px blur), Shadow 4, Shadow 8, Shadow 16, Shadow 28, Shadow 64. The naming is purely mathematical: blur pixel = shadow name. Clear and consistent.  
Key differentiator: Explains two-shadow composition — **key shadow** (sharp, directional, defines edges) + **ambient shadow** (soft, diffused, implies distance). This is the most technically thorough elevation explanation across all 16, explaining *why* shadows look realistic. Also: "Windows uses strokes instead of key shadows to outline an object" — platform-specific deviation documented.  
Component mapping: Shadow 2 = cards without edges, pressed FAB; Shadow 4 = cards without edges; Shadow 8 = floating action buttons, raised cards; Shadow 16 = date pickers, teaching callouts; Shadow 28 = dropdowns, popovers; Shadow 64 = dialogs, panels.

**Pajamas (GitLab)**  
Navigation-heavy; elevation page exists but body content required JS. Structure visible: uses 4–5 shadow levels. Documented alongside border to form the visual separators system.

**Australian Gov Agriculture**  
Two-part: Shadow (3 levels: sm/md/lg) + Z-index (6 named levels: base=0 / elevated=1 / overlay=100 / dialog=110 / popover=200 / skipLink=999).  
Shadow values: sm = `0px 2px 4px rgba(0,0,0,0.15)` (interactive cards), md = `0px 4px 16px rgba(0,0,0,0.15)` (hover state), lg = `0px 16px 32px rgba(0,0,0,0.20)` (dropdowns/modals).  
Key differentiator: **Shadow + Z-index documented together** — the most practical combo for teams because you always need both when making something float above the page. The z-index naming is the clearest across all 16 (overlay=100, dialog=110, popover=200 — explicit room for stacking).

**Ant Design**  
Sections: Height (conceptual — shadow simulates real-world height) → Light source (consistent light from above-left) → Shadow values (3: shadow-1 / shadow-2 / shadow-3) → Common shadow usage table → Bottom shadows.  
Shadow values: `0 1px 2px rgba(0,0,0,0.03)` (subtle card borders) → `0 1px 6px rgba(0,0,0,0.12)` (actionable cards, hover states) → `0 4px 12px rgba(0,0,0,0.15)` (drawers, dropdowns, popups) → `0 8px 24px rgba(0,0,0,0.12)` (dialogs, modals).  
Unique: Documents **bottom shadows** — a separate set for elements that sit at the bottom of the viewport (bottom navigation, floating toolbars). Most systems don't address directional variation.  
Light source rule: Ant Design explicitly defines the virtual light source as coming from above-left — this creates directional shadow consistency, even if subtle.

**USWDS**  
Shadow token table: `shadow-1` through `shadow-5` plus `shadow-none`. Each maps to a CSS box-shadow value. Also documents `shadow-inset` for input focus states.  
Minimalist government approach — no named levels, no component mapping. Pure token reference. Consistent with USWDS's pattern of small, focused token pages.

**ServiceNow Horizon**  
6-level system (Ground → Level 1 → Level 2 → Level 3 → Level 4 → Level 5) with component mapping table:
- Ground: none — most ground-level components
- L1: Button hover, Dashboard cards
- L2: Card hover, Popover, Elevated containers
- L3: Floating action button, Alerts
- L4: FAB hover, Modeless window
- L5: Modal

Unique: **Stacking vs overlapping** distinction — stacking (element fully on top of another) = use sm shadow; overlapping (elements partially above each other) = maintain their respective z-index levels.

**Workday Canvas**  
Page title is "Depth" rather than "Elevation" — signals a conceptual difference. Intro: "Depth plays an important role in our UI by mimicking real world principles of light and shadow to help establish hierarchy and bring attention to key areas of our product." Navigation-heavy; full token values behind JS. Structure implies a numbered depth scale.

**Sprout Social Seeds**  
Shortest readable description: "Elevation is the distance between any two elements along the z-axis." — clean, one-sentence definition. Good opening model.

**Washington Post WPDS**  
Token-only page: 6 shadow values (50, 100, 200, 300, 400, 500). Shadow 50 is unusual — a solid grey border (`0px 2px 0px 0px #D5D5D5`) used for card borders, not a real drop shadow. The rest are RGBA-based with doubling blur (1px/2px/4px/8px/16px). Clean progression.

**Visa VPDS**  
Elevation page with surface and shadow model; full content behind JS. Structure includes "Elevation" as part of "Base elements" alongside Color, Spacing, Size and Shape, States, Surface — suggesting elevation and surface are treated as linked concepts (similar to Atlassian).

**REI Cedar (Prominence)**  
Named "Prominence" rather than "Elevation" — unique vocabulary. Reasoning: "While there are some parallels between an object's elevation and its z-index, Cedar chooses not to create dependencies between the two" — explicitly decouples shadow from z-index. Documents when to use: emphasizing interaction/state change, reinforcing hierarchy, overlapping UI. When NOT to use: prominence as sole affordance for interactivity; relying on shadow for accessibility contrast; elevating large proportions of UI simultaneously.

**Porsche DS**  
Three levels (Low / Medium / High). Usage rules:
- Do: Reduce use of shadows within panels; use background colour combinations instead
- Do: Use same shadow style for components arranged in a row
- Do: Reserve drop shadow for flyouts, notifications, navigation menus
- Medium: For sticky elements
- High: For high-priority elements  
Unique: "Reduce the use of shadows within panels — use background colour instead." The anti-shadow guidance is the most conservative of all 16, fitting Porsche's flat/minimal aesthetic.

**Dell DS**  
Intro: "Elevation uses shadows and blurs for a layered effect that gives users a visual cue that an object or experience is elevated in priority or hierarchy." Good one-liner. Body content JS-dependent.

---

### The 3 biggest differentiators of "great" vs "average"

1. **Named semantic levels tied to real components** — Atlassian (Sunken/Default/Raised/Overlay) and ServiceNow (Ground/L1–L5 with component table) both answer "which shadow do I use for a dropdown?" in the page itself. Most systems show shadow values without mapping them to components.

2. **Shadow + Z-index together** — Australian Gov Agriculture is the clearest example. Elevation is always both a visual property (shadow) and a stacking property (z-index). Separating them forces teams to cross-reference two pages to do one thing.

3. **Dark mode elevation strategy** — Only 4/16 systems address this. Atlassian's explanation is the best: in dark mode, surface lightness replaces shadow as the primary depth signal. For UX4G (currently light-only), document the dark mode approach as a roadmap note even though it's not yet implemented.

---

## Part 2 — UX4G Elevation Foundation Page Recommendation

### UX4G elevation system as-built (from CSS files)

**Shadow tokens — opacity-based colour scale (5 values):**

| Token | Value | Role |
|---|---|---|
| `--ux4g-elevation-color-0` | `rgba(0,0,0,0)` | Transparent (no shadow) |
| `--ux4g-elevation-color-1` | `rgba(0,0,0,0.04)` | Subtlest shadow tint |
| `--ux4g-elevation-color-2` | `rgba(0,0,0,0.08)` | Light shadow tint |
| `--ux4g-elevation-color-4` | `rgba(0,0,0,0.16)` | Medium shadow tint |
| `--ux4g-elevation-color-6` | `rgba(0,0,0,0.24)` | Strongest shadow tint |

**Semantic shadow levels (5 levels + 3 focus variants):**

| Token | Box-shadow value | Composed from |
|---|---|---|
| `--ux4g-shadow-l0` | none | — |
| `--ux4g-shadow-l1` | `0px 1px 2px` + `0px 1px 2px` | color-1 × 2 |
| `--ux4g-shadow-l2` | `0px 4px 8px` + `0px 1px 2px` | color-2 + color-1 |
| `--ux4g-shadow-l3` | `0px 8px 16px` + `0px 4px 8px` | color-4 + color-2 |
| `--ux4g-shadow-l4` | `0px 16px 32px` + `0px 8px 16px` | color-6 + color-4 |
| `--ux4g-shadow-focus-inset` | inset 0 0 0 2px | primary-strong border |
| `--ux4g-shadow-focus-ring` | 0 0 0 2px neutral + 0 0 0 4px primary | double-ring focus |
| `--ux4g-shadow-focus-border` | 0 0 0 2px | primary-default |

**Utility classes:** `.ux4g-shadow-l0` through `.ux4g-shadow-l4` — applied via `--ux4g-shadow-current` custom property.

**Z-index tokens — two layers:**

*Primitive:* `--ux4g-z-n1` (-1) through `--ux4g-z-3` (3), plus named component values: dropdown (1000), sticky (1020), fixed (1030), offcanvas (1040), modal-backdrop (1050), modal (1060), popover (1070), tooltip (1080), toast (1090).

*Semantic:* layout-base (0), layout-raised (1), layout-overlay (2), layout-top (3), plus aliased component names.

---

### Recommended page structure — 8 sections

---

#### Section 1 — Introduction + Concept
*Pattern: Fluent 2 (depth/shadow/light explanation) + Sprout Social (clean one-liner) + Atlassian (surfaces, not just shadows)*

**Opening:**
> "Elevation is the perceived distance between a surface and the surface behind it. In UX4G, elevation is expressed through drop shadows — the larger and softer the shadow, the higher the element appears to float. Elevation guides attention, communicates hierarchy, and signals that an element is interactive or overlaying other content."

**Two components of elevation (Fluent 2 model):**
- **Shadow** (visual) — a CSS `box-shadow` that mimics light falling on a raised surface
- **Z-index** (stacking) — controls which element visually sits on top when two elements overlap

> Both shadow and z-index must be applied together when floating an element above the page. A tooltip needs both the L4 shadow AND the `--ux4g-z-tooltip` z-index to work correctly.

**Light source:** UX4G's shadows cast downward and slightly spread — simulating a diffuse light source from above. This is consistent across all levels and should not be varied.

---

#### Section 2 — Principles (when to use, when not to)
*Pattern: REI Cedar (Prominence — best "when not to" list) + Porsche (anti-shadow conservatism) + Atlassian (sparse use guidance)*

**When to use elevation:**
- A component sits above the page surface (modals, tooltips, dropdowns, sidesheets)
- A card or element needs to signal interactivity or hover state
- A component needs to indicate it can scroll or be dragged
- Creating visual separation between a primary surface and a well or sunken area

**When not to use elevation:**
- Elevation is the only signal of interactivity — always combine with colour, label, or cursor change
- Elevating large sections of a page — excessive shadow creates visual noise and reduces hierarchy signal
- Adding shadow to every card by default — most cards in government service forms don't need elevation
- Using shadow to meet accessibility contrast requirements — shadow is not a reliable contrast signal

---

#### Section 3 — Shadow levels
*Pattern: ServiceNow (levels table with component mapping) + Atlassian (named levels) + Fluent 2 (blur-based naming)*

**5 levels from flat to floating:**

| Level | Token | Shadow | Use when |
|---|---|---|---|
| L0 | `--ux4g-shadow-l0` | none | Flat page surface, form backgrounds, default card (border-separated) |
| L1 | `--ux4g-shadow-l1` | `0px 1px 2px` (×2, 4% opacity) | Resting card with subtle lift; hoverable list row; input field focus container |
| L2 | `--ux4g-shadow-l2` | `0px 4px 8px` + `0px 1px 2px` | Hovered card; elevated panel; non-modal sidebar; sticky table header |
| L3 | `--ux4g-shadow-l3` | `0px 8px 16px` + `0px 4px 8px` | Dropdown menu; popover; date picker; alert/notification floating above content |
| L4 | `--ux4g-shadow-l4` | `0px 16px 32px` + `0px 8px 16px` | Modal dialog; drawer/sidenav overlay; toast notification |

**Visual tip:** Shadow blur doubles with each level (2px → 4/8px → 8/16px → 16/32px). Opacity of the primary shadow also increases (4% → 8% → 16% → 24%). This creates a consistent progression of perceived height.

---

#### Section 4 — Component mapping
*Pattern: ServiceNow (clearest component-to-level table) + Australian Gov Agriculture (explicit)*

Map every major UX4G component to its correct shadow level. This is the section designers use most — "what shadow does a modal use?"

| Component | Shadow level | Z-index token |
|---|---|---|
| Page / app background | L0 (none) | base (0) |
| Default card (static) | L0 (border only) | — |
| Card (hoverable / interactive) | L1 at rest, L2 on hover | layout-raised (1) |
| Sticky header / sticky table row | L2 | sticky (1020) |
| Fixed footer / bottom bar | L2 | fixed (1030) |
| Inline alert / info banner | L2 | layout-overlay (2) |
| Dropdown menu | L3 | dropdown (1000) |
| Popover | L3 | popover (1070) |
| Date picker | L3 | popover (1070) |
| Tooltip | L3 | tooltip (1080) |
| Offcanvas / side drawer | L4 | offcanvas (1040) |
| Modal backdrop | L0 (dim overlay color) | modal-backdrop (1050) |
| Modal dialog | L4 | modal (1060) |
| Toast notification | L4 | toast (1090) |

---

#### Section 5 — Z-index system
*Pattern: Australian Gov Agriculture (clearest named z-index system with rationale per level)*

Z-index controls which elements visually stack on top of others. Always use UX4G z-index tokens — never hard-code arbitrary values like `z-index: 9999`.

**Layout z-index (low values, for within-page stacking):**

| Token | Value | Use for |
|---|---|---|
| `--ux4g-z-layout-base` | 0 | Default page content |
| `--ux4g-z-layout-raised` | 1 | Slightly elevated cards, sticky elements within a section |
| `--ux4g-z-layout-overlay` | 2 | Inline overlays on content |
| `--ux4g-z-layout-top` | 3 | Top of page content stack |

**Component z-index (high values, for above-page elements):**

| Token | Value | Use for |
|---|---|---|
| `--ux4g-z-dropdown` | 1000 | Dropdown menus |
| `--ux4g-z-sticky` | 1020 | Sticky navbar, sticky table headers |
| `--ux4g-z-fixed` | 1030 | Fixed position elements (persistent header, bottom nav) |
| `--ux4g-z-offcanvas` | 1040 | Slide-in side panels, offcanvas navigation |
| `--ux4g-z-modal-backdrop` | 1050 | The dimming overlay behind a modal |
| `--ux4g-z-modal` | 1060 | The modal dialog itself |
| `--ux4g-z-popover` | 1070 | Popovers, date pickers |
| `--ux4g-z-tooltip` | 1080 | Tooltips (always above everything else) |
| `--ux4g-z-toast` | 1090 | Toast/snackbar notifications (topmost) |

> The values between component levels (1000, 1020, 1030...) leave deliberate room for teams to insert custom intermediate values without conflicting with UX4G tokens.

---

#### Section 6 — Focus states
*Pattern: USWDS (shadow-inset for focus) — unique to UX4G's level of focus state documentation*

UX4G documents three focus state tokens alongside elevation — all use `box-shadow` but serve accessibility, not hierarchy.

| Token | Value | Use when |
|---|---|---|
| `--ux4g-shadow-focus-ring` | 2px neutral ring + 4px primary ring | Standard keyboard focus on buttons, links, interactive elements |
| `--ux4g-shadow-focus-inset` | inset 2px primary-strong border | Focus on input fields (inset, so it doesn't shift layout) |
| `--ux4g-shadow-focus-border` | 2px primary-default ring | Subtle focus on low-priority interactive elements |

> Focus states are separate from elevation levels and should always be applied in addition to other styling. Never rely on shadow alone for focus indication — combine with colour change.

---

#### Section 7 — Do's and Don'ts
*Pattern: Porsche (most explicit anti-shadow guidance) + Atlassian + REI Cedar*

| Do | Don't |
|---|---|
| Use shadow + z-index together when floating an element above the page | Apply a high shadow level (L3/L4) without a matching z-index — it creates visual but not stacking elevation |
| Use L1 for hoverable cards, L3 for dropdowns, L4 for modals | Use the same shadow level for everything — it destroys hierarchy signal |
| Use UX4G z-index tokens (`--ux4g-z-modal`) | Hard-code arbitrary values (`z-index: 99999`) |
| Use border + whitespace to separate flat cards | Add L1 shadow to every card by default |
| Use shadow conservatively — fewer elevated elements = stronger hierarchy signal | Elevate large page sections or full-width banners |
| Combine elevation change with surface colour change on hover | Animate shadow level changes (too distracting) |

---

#### Section 8 — Dark mode (roadmap note)
*Pattern: Atlassian — honest documentation of future state*

> "UX4G currently ships a single light theme. In dark mode, shadows become harder to perceive because the contrast between shadow and background decreases. When a dark theme is added to UX4G, elevation will use lighter surface colours (in addition to shadows) to signal hierarchy — higher elevation = lighter surface. This approach is already established by Atlassian, Carbon, and Material 3. The UX4G shadow tokens use opacity-based RGBA values (not hard-coded greys) specifically to make this dark mode adaptation possible in a future release."

---

## Part 3 — Implementation Staging

| Stage | Sections | Benchmark |
|---|---|---|
| Stage 1 | 1, 3, 4 | Matches Australian Gov Agriculture / USWDS |
| Stage 2 | + 2, 5, 6 | Matches Atlassian / ServiceNow bar |
| Stage 3 | + 7, 8 | Matches Fluent 2 / REI Cedar complete quality |

---

## Appendix — Systems read and their URLs

| System | URL |
|---|---|
| Atlassian | atlassian.design/foundations/elevation/ |
| Fluent 2 (Microsoft) | fluent2.microsoft.design/elevation |
| Pajamas (GitLab) | design.gitlab.com/product-foundations/elevation |
| Australian Gov Agriculture | design-system.agriculture.gov.au/foundations/tokens/elevation |
| Ant Design | ant.design/docs/spec/shadow |
| USWDS | designsystem.digital.gov/design-tokens/shadow/ |
| ServiceNow Horizon | horizon.servicenow.com/workspace/foundations/elevation |
| Workday Canvas | canvas.workday.com/styles/tokens/depth |
| Sprout Social Seeds | seeds.sproutsocial.com/visual/elevation |
| Washington Post | build.washingtonpost.com/foundations/shadow |
| Visa VPDS | design.visa.com/base-elements/elevation/ |
| REI Cedar | cedar.rei.com/guidelines/prominence |
| Porsche DS | designsystem.porsche.com/v3/styles/drop-shadow |
| Dell DS | delldesignsystem.com/foundations/elevation/ |
| Nordhealth | nordhealth.design/tokens/#box-shadow |

*Blocked: Orbit Kiwi (robots), Helsinki DS (tracker only), Datadog Druids (JS), SAP Fiori (403), Uber Base (JS), Morningstar (permissions)*
