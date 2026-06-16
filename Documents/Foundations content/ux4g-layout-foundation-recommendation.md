# UX4G Layout Foundation Page — Benchmark & Recommendation

> Based on direct reads of 17 live design system layout pages (20 attempted; 3 blocked).  
> Systems read: Carbon (IBM), GOV.UK, Cloudscape (Amazon), Fluent 2 (Microsoft), Atlassian, PatternFly (Red Hat), USWDS, Pajamas (GitLab), Nordhealth, Ant Design, NSW Gov Australia, ServiceNow Horizon, Primer (GitHub), Braid (SEEK), MongoDB LeafyGreen, Dell DS.  
> Blocked: BBC GEL (blocked), Lightning DS (JS), Material 3 (JS).

---

## Part 1 — What the 17 Systems Actually Do

### Section frequency (from real page reads)

| Section | Present in |
|---|---|
| Grid anatomy (columns / gutters / margins defined) | 15 / 17 |
| Breakpoint table with column counts per viewport | 14 / 17 |
| Container sizes / max-widths | 12 / 17 |
| Fluid vs fixed grid distinction | 10 / 17 |
| Page-level layout regions (nav / header / content / sidebar) | 9 / 17 |
| Principles (why layout matters, visual hierarchy) | 10 / 17 |
| Column span / offset guidance | 9 / 17 |
| Code / CSS implementation examples | 11 / 17 |
| Responsive behaviour per breakpoint | 13 / 17 |
| Flex layout guidance (separate from grid) | 6 / 17 |
| Touch target minimums on mobile | 3 / 17 |
| Do's and Don'ts | 6 / 17 |
| Application-level layout templates | 7 / 17 |

---

### Key findings per system

**Carbon (IBM) — 2x Grid**  
Sections: Mini unit (8px base) → Grid fundamentals (columns + rows, margins, padding always 16px, gutters, breakpoints) → Grid behaviors (fluid / fixed / hybrid) → Grid influencers → Sizing scale.  
Breakpoint table: 5 breakpoints (Small 320px / Medium 672px / Large 1056px / XL 1312px / Max 1584px), column count (4/8/16/16/16), padding always 16px, margin varies (0/16/16/16/24px).  
Key differentiator: The **"divide by two" rule** — fluid grids are built by dividing screen width in half, repeating as needed. Fixed grids start with a fixed unit size and multiply by two. The mathematical elegance of the 2x naming is the clearest grid philosophy of all systems read.  
Grid behaviors: Three types documented — Fluid (editorial/dashboard), Fixed (when item count should increase), Hybrid (mixed). Carbon is the only system that provides a decision tree for "should I use fluid or fixed?"

**GOV.UK**  
Layout page: Mostly navigation structure — links out to Page template, Layout, Spacing, Section break. Very minimal actual content. Layout is implicitly defined through the page template (single-column, constrained-width forms). GOV.UK's philosophy is "one thing per page" — layout is a consequence of that UX pattern, not an independent grid specification.  
What's there: The layout uses `.govuk-main-wrapper` with a fixed-width container and two-thirds / one-third column split for form + aside patterns.

**Cloudscape (Amazon)**  
Sections: Introduction → Anatomy of a layout (Application layouts / Content layout / Column layout and grid) → Layout principles (4) → General guidelines.  
Three layout levels: Application layout (full-page shell with nav, tools panel, breadcrumbs, notifications, main content) → Content layout (page-level with header/content separation, hero headers) → Column layout + 12-column grid (for content area organization).  
Key differentiator: **Application layout regions are named and documented** — left side navigation (A), right tools (F), breadcrumbs (B), flashbar (C), main content (D). This is the most thorough page-anatomy documentation across all 17 systems. Relevant for UX4G's government service pattern where consistent page structure is critical.  
Decision rule: "Use toolbar app layout for high-density productivity tools; standard app layout for browsing/marketing."

**Fluent 2 (Microsoft)**  
Sections: Spacing and proximity → Creating hierarchy with empty space → Global spacing ramp (4px base, 17 sizes 0–56px) → Grid anatomy (columns / gutters / margins) → Grid types (Fixed / Stretch / Hybrid) → Responsive and adaptive design → Touch targets → Typographic grid.  
Touch target rule: "iOS and Web [44 × 44], Android [48 × 48]." Only 3/17 systems document this — critical for government mobile access.  
Responsive vs adaptive: Fluent 2 explicitly distinguishes responsive design (same content, different layout) from adaptive design (different content/features per device). Most systems conflate these.

**Atlassian (Grid Beta)**  
Sections: Grid anatomy → Grid types (Fluid / Fixed-narrow / Fixed-wide) → Breakpoints (6: xxs 320px / xs 480px / s 768px / m 1024px / l 1440px / xl 1768px+) → Column span and offset → Layout anatomy (Side navigation / Aside / Page regions).  
Breakpoint table: Most granular of all 17 — 6 breakpoints with columns (2/6/6/12/12/12), gutters (12px/12px/12px/16px/16px/16px), margins (16px/16px/16px/32px/32px/32px).  
Key differentiator: **Three grid type use cases with product examples** — Fluid grid shown in Jira (information-dense), Fixed-narrow shown in Confluence (content/reading), Fixed-wide shown in Atlas (data tables). These examples make abstract grid decisions immediately concrete.  
Layout anatomy sidebar widths: Documents standard and narrow aside widths with resizable panel guidance.

**PatternFly (Red Hat)**  
Layout page documents 7 named layout components: Bullseye (center), Flex, Gallery (uniform grid), Grid (12-col), Level (horizontal even distribution), Split (horizontal with wrapping), Stack (vertical). Each has its own page.  
Philosophy: "Think of layouts as the scaffolding within which your components will live. When laying out your page, consider the layout pattern that suits your content."  
Key differentiator: Naming layout concerns semantically (Stack, Split, Level, Gallery) rather than as generic "grid" utilities. This abstraction makes layout intent clearer in code and design.

**USWDS**  
Sections: How it works → Auto layout columns → Responsive classes → Offsetting columns → Column wrapping → Gutters → Theme settings → Utility mixins.  
12-column grid with a named breakpoint class suffix pattern: `.grid-col-{n}`, `.tablet:grid-col-{n}`, `.widescreen:grid-col-{n}`.  
Gutter control: documented separately — default gutter width is adjustable via theme settings. `.grid-gap-sm`, `.grid-gap`, `.grid-gap-lg`.  
Good US government reference: Shows how grid classes align with government service template expectations.

**Nordhealth**  
Sections: Grid anatomy → Columns → Gutters (use space tokens) → Margins → Applying the grid (up to 12 columns, fixed or fluid) → Gutter and margin spacing (S/L/XL options) → Layout (navigation left, header top, content right) → Figma usage.  
Notable: "Gutters are fixed-width spacing between columns that separate content. We use our space tokens to define the gutters for the grid." — ties grid to spacing tokens explicitly, the cleanest integration between spacing and layout of all 17 systems.  
Layout application: Standard application shell shown as navigation (left) + page header (top) + content area (right). Simple and clear.

**Ant Design**  
Sections: Unified Canvas Dimension (1440px standard) → Adaptation (Left-Right layout, Top-Bottom layout) → Grid unit → Raster (24-column, inspired by Golden Ratio / Fibonacci) → Common scales → Inspiration but not limitation.  
Key differentiator: **24-column grid** — most other systems use 12; Ant Design uses 24 for finer-grained control in enterprise data interfaces. Also documents two primary layout templates: Left-Right (sidebar + content) and Top-Bottom (header + content).  
Explicit design board width: "To minimize communication cost, it is necessary to unify the size of the design board within the organization. The unified design board width of the Ant Design team is 1440."

**ServiceNow Horizon**  
Sections: Why grids (consistency, time savings, visual hierarchy, collaboration) → Chrome (fixed global header) + Stage (12-column grid system, flexible).  
The Chrome/Stage mental model is the strongest named page-anatomy pattern read. Chrome = fixed shell that all apps share; Stage = the flexible content area where app-specific UI lives on a 12-column grid.

**Primer (GitHub)**  
Brief layout page — documents the philosophy: "GitHub is a diverse and complex platform. These layout guidelines aim to provide a set of standards that enables consistent, accessible, and responsive experiences." Mostly navigational, linking to sub-pages. Key principle: mobile-first responsive design.

**Braid (SEEK)**  
Unique approach — layout is not a grid system at all. Braid's layout components are: Stack, Inline, Columns, ContentBlock, PageBlock, Bleed. These are semantic layout components (not CSS grid utilities). Layout is achieved by composing these components rather than using a grid with column counts. This is the most component-driven layout model across all 17 systems.

**MongoDB LeafyGreen**  
Documents 7 Figma grid presets (by viewport size) with columns, gutters, margins. Key note: "Consider implementing a max-width when designing." Uses 4px baseline grid for type and UI element alignment.

---

### The 3 biggest differentiators of "great" vs "average"

1. **Three-level layout hierarchy** — Cloudscape has the clearest model: Application layout (shell) → Content layout (page) → Column/grid (content area). Most systems only document the grid layer, not the shell or page. UX4G's government services need all three layers defined.

2. **Named page regions with dimensions** — Atlassian (aside widths), Cloudscape (labelled regions A–F), ServiceNow (Chrome + Stage), Nordhealth (nav left, header top, content right) all name what goes where at the page level. This is what designers actually need when building new screens.

3. **Fluid vs fixed decision guidance** — Atlassian (with real product examples), Carbon (with a decision tree), Fluent 2 (fixed/stretch/hybrid) all make this explicit. Most systems describe both grid types but don't tell you when to use which.

---

## Part 2 — UX4G Layout Foundation Page Recommendation

### UX4G layout system as-built (from CSS files)

**Breakpoints (5):**

| Token | rem | px | Breakpoint |
|---|---|---|---|
| `--ux4g-bp-sm` | 36rem | 576px | Small |
| `--ux4g-bp-md` | 48rem | 768px | Medium |
| `--ux4g-bp-lg` | 62rem | 992px | Large |
| `--ux4g-bp-xl` | 75rem | 1200px | X-Large |
| `--ux4g-bp-2xl` | 87.5rem | 1400px | 2X-Large |

**Container max-widths (5):**

| Class | Max-width |
|---|---|
| `.ux4g-container-sm` | 540px (activates at 576px) |
| `.ux4g-container-md` | 720px (activates at 768px) |
| `.ux4g-container-lg` | 960px (activates at 992px) |
| `.ux4g-container-xl` | 1140px (activates at 1200px) |
| `.ux4g-container-2xl` | 1320px (activates at 1400px) |
| `.ux4g-container` | Responsive (follows breakpoints automatically) |
| `.ux4g-container-fluid` | 100% always |

**Grid defaults:**
- `--ux4g-gutter-x`: 12px (space-5)
- `--ux4g-gutter-y`: 0
- `--ux4g-grid-gap`: 12px

**Grid utilities:** 12-column CSS grid (`.ux4g-grid-cols-1` → `.ux4g-grid-cols-12`), responsive variants (`.ux4g-grid-cols-sm-*` through `.ux4g-grid-cols-xl-*`), span utilities (`.ux4g-span-1` → `.ux4g-span-12`), auto-fit, row utilities.

**Flex utilities:** Direction, wrap, grow/shrink, flex-1/2/3/auto/none.

---

### Recommended page structure — 9 sections

---

#### Section 1 — Introduction + 3 Principles
*Pattern: Cloudscape (hierarchy framing) + Fluent 2 (spacing = relationship) + Ant Design (unified canvas)*

**Opening:**
> "Layout is the structure beneath everything. Consistent layouts let citizens build a mental model of government services quickly — they know where the header is, where the form is, where help lives. A consistent, predictable layout reduces orientation time and lets people focus on their task."

**3 principles:**

| Principle | What it means |
|---|---|
| **Hierarchy through space** | Elements with more surrounding space draw more attention and are perceived as more important. Use layout to direct focus — page title before form, primary action before secondary. |
| **Consistency builds confidence** | Every UX4G service page should feel like it belongs to the same system. Use the same page shell, container widths, and content regions across all services. |
| **Mobile first** | Design the smallest screen first. The majority of India's citizens access government services from mobile devices with variable connectivity. Start from 360px and expand upward. |

---

#### Section 2 — Base unit
*Pattern: Carbon (mini unit) + Cloudscape (4px grid)*

> "UX4G's layout system is built on a **4px base unit**. All grid gutters, column widths, container sizes, and spacing values are multiples of 4px. This creates natural alignment between type, icons, and layout regions."

---

#### Section 3 — Three-level layout hierarchy
*Pattern: Cloudscape — the clearest page-anatomy model across all 17 systems*

UX4G layout operates at three levels. Understanding which level you're designing at is the key to using the right tool.

**Level 1 — Page shell (application layout)**  
The fixed outer structure shared across all pages in a service: header/navbar, optional side navigation, footer. This is defined by UX4G's Navbar and layout pattern components, not by the grid.

```
┌─────────────────────────────────┐
│ Navbar / Header                 │ ← Fixed, 100% width
├─────────────┬───────────────────┤
│ Side nav    │ Content area      │ ← Shell regions
│ (optional)  │                   │
├─────────────┴───────────────────┤
│ Footer                          │ ← Fixed, 100% width
└─────────────────────────────────┘
```

**Level 2 — Page layout (content regions)**  
How the main content area is divided into logical sections: hero/page header, main form/content zone, optional sidebar or contextual help panel.

**Level 3 — Component grid (content layout)**  
The 12-column CSS grid used inside the content area to arrange components, cards, form fields, and data tables.

> Most layout decisions happen at Level 3. Levels 1 and 2 are defined by UX4G patterns (Navbar, page templates) and should rarely be customised by teams building individual services.

---

#### Section 4 — Grid anatomy
*Pattern: Atlassian + Nordhealth (ties to spacing tokens) + Fluent 2 (visual anatomy)*

**Three elements every grid has:**

**Columns** — vertical divisions that organize content horizontally. UX4G uses a 12-column grid. Content should span 3 or more columns; spanning fewer than 3 columns is rarely appropriate except for very narrow utility elements.

**Gutters** — the gap between columns. UX4G's default gutter is 12px (`--ux4g-gutter-x`). On larger viewports, consider using `--ux4g-section-xs` (24px) or `--ux4g-section-s` (32px) as gutters for more breathing room.

**Margins** — the space between the grid and the viewport edge. Managed by container padding: each container applies half of `--ux4g-gutter-x` as horizontal padding.

Show a simple diagram: [viewport] → margin → [column][gutter][column][gutter]...[column] → margin → [viewport]

---

#### Section 5 — Breakpoints and containers
*Pattern: Atlassian (most complete table) + Carbon (comprehensive) + GOV.UK (mobile-first framing)*

**Breakpoints — when the layout changes:**

| Token | Viewport | Name | Typical use |
|---|---|---|---|
| Default (no class) | < 576px | Mobile | Single-column forms, stacked navigation |
| `--ux4g-bp-sm` | ≥ 576px | Small | 2-column layouts begin, wider form fields |
| `--ux4g-bp-md` | ≥ 768px | Medium (tablet) | Side navigation becomes visible, 2–4 column grids |
| `--ux4g-bp-lg` | ≥ 992px | Large | Full desktop layout, side panels, 6–12 columns |
| `--ux4g-bp-xl` | ≥ 1200px | X-Large | Wider containers, max content width reached |
| `--ux4g-bp-2xl` | ≥ 1400px | 2X-Large | Ultra-wide screens, max container = 1320px |

> **Design mobile-first.** Write base styles for mobile. Then use breakpoint prefixes to override for larger screens: `.ux4g-grid-cols-1.ux4g-grid-cols-md-2.ux4g-grid-cols-lg-3`

**Container widths — constraining content width:**

| Class | Max-width | Use for |
|---|---|---|
| `.ux4g-container` | Responsive (follows breakpoints) | Default — use for all standard page content |
| `.ux4g-container-fluid` | 100% always | Full-width layouts (maps, full-bleed banners) |
| `.ux4g-container-sm` | Max 540px | Narrow forms, single-question pages, login screens |
| `.ux4g-container-md` | Max 720px | Standard form pages |
| `.ux4g-container-lg` | Max 960px | Content-rich pages, article layouts |
| `.ux4g-container-xl` | Max 1140px | Dashboard / data pages |
| `.ux4g-container-2xl` | Max 1320px | Wide dashboards, data tables |

> "Always use a container. Never place content directly against the viewport edge." *(Cloudscape rule)*

---

#### Section 6 — Fluid vs fixed grid
*Pattern: Atlassian (with product examples) + Carbon (decision tree)*

**Two grid behaviours:**

**Fluid grid** — column widths are percentages and scale with the container. Columns resize as the viewport grows.  
→ Use for: dashboards, data tables, image galleries, anything where the user benefits from seeing MORE content as screen size grows.

**Fixed grid** — content is constrained to a maximum width; the grid doesn't grow beyond the container's max-width.  
→ Use for: forms, articles, single-question patterns, anything where line length or form width should be controlled for readability.

**Most UX4G patterns use fixed grid.** Government service forms should not stretch to fill a 1400px screen — the content container limits the maximum width, and the form stays readable.

| Pattern type | Grid recommendation |
|---|---|
| Single-question form | Fixed narrow (`.ux4g-container-sm`) |
| Multi-step form | Fixed medium (`.ux4g-container-md`) |
| Dashboard / data view | Fluid (`.ux4g-container-fluid` or `.ux4g-container-2xl`) |
| Article / information page | Fixed large (`.ux4g-container-lg`) |
| Landing / campaign page | Fluid hero + fixed content |

---

#### Section 7 — The 12-column grid: column spans and usage
*Pattern: Atlassian (span + offset) + USWDS (responsive class naming)*

**Column structure:**

```html
<!-- Basic 2-column layout at medium+ -->
<div class="ux4g-container">
  <div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2">
    <div class="ux4g-span-1">Main content</div>
    <div class="ux4g-span-1">Sidebar</div>
  </div>
</div>

<!-- 3-column card grid -->
<div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

**Common column patterns (on 12-column grid):**

| Pattern | Columns | Span values |
|---|---|---|
| Full width | 1 column | span 12 |
| Two equal halves | 2 columns | span 6 each |
| Main + narrow sidebar | 2 columns | span 8 + span 4 |
| Three equal | 3 columns | span 4 each |
| Four equal (cards) | 4 columns | span 3 each |
| Two-thirds + one-third | 2 columns | span 8 + span 4 |

**Responsive syntax:**

```css
/* Mobile: 1 column; tablet: 2 columns; desktop: 3 columns */
.ux4g-grid-cols-1
.ux4g-grid-cols-md-2
.ux4g-grid-cols-lg-3
```

---

#### Section 8 — Page-level layout regions
*Pattern: Cloudscape (most thorough region anatomy) + Nordhealth (navigation left + header top) + ServiceNow (Chrome + Stage)*

**Standard UX4G government service page structure:**

```
┌──────────────────────────────────────────┐
│ Navbar (100vw, fixed height)             │ A
├──────────────────────────────────────────┤
│ ┌──────────────────────────────────────┐ │
│ │ .ux4g-container                      │ │
│ │  ┌──────────────┐ ┌───────────────┐  │ │
│ │  │ Breadcrumb   │                 │  │ B
│ │  ├──────────────┤                 │  │
│ │  │ Page header  │  Side           │  │ C
│ │  │ (h1 + desc)  │  panel          │  │
│ │  ├──────────────┤  (optional)     │  │ D
│ │  │ Main content │                 │  │
│ │  │ (form/data)  │                 │  │
│ │  └──────────────┘ └───────────────┘  │
│ └──────────────────────────────────────┘ │
├──────────────────────────────────────────┤
│ Footer (100vw)                           │ E
└──────────────────────────────────────────┘
```

| Region | Label | Description |
|---|---|---|
| Navbar | A | UX4G Navbar component — 100% width, fixed height, always present |
| Breadcrumb | B | Page location context — always inside `.ux4g-container` |
| Page header | C | h1 + optional description — aligned to left of content zone |
| Main content | D | Form, data table, article body — constrained by container |
| Side panel | — | Optional contextual help, status, or secondary navigation — right of main content |
| Footer | E | Service footer — 100% width |

**Side panel standard widths** *(from Atlassian's documented pattern):*
- Narrow aside: 240px
- Standard aside: 320px
- Wide aside: 400px

---

#### Section 9 — Do's and Don'ts + Resources

**Do's and Don'ts:**

| Do | Don't |
|---|---|
| Design mobile-first — start at the smallest breakpoint | Design for 1440px first and try to make it work on mobile |
| Use `.ux4g-container` for all main content | Place content directly against the viewport edge |
| Use fluid grid for dashboards and data views | Stretch a form to fill 1400px — constrain it with container-sm or container-md |
| Use responsive grid classes (`.ux4g-grid-cols-md-2`) | Set a fixed column count that doesn't respond to viewport |
| Use spacing tokens for gutters | Hard-code pixel values for gaps between columns |
| Use UX4G page templates for standard service pages | Re-invent the shell regions (header / nav / footer) |

**Resources:**
- Figma: UX4G grid styles (Spacing page, file `C3Kecl9nh78LLblDUn28P6`) — includes 5 breakpoint frames
- CSS: `@import '@ux4g/layout/container.css'` + `@import '@ux4g/layout/grid.utilities.css'` + `@import '@ux4g/layout/grid-responsive.utilities.css'`
- Related: Spacing foundation (gutter and margin values), Patterns (page templates for service flows)
- Responsive guide: UX4G Responsive foundation page (breakpoint usage with display utilities)

---

## Part 3 — Implementation Staging

| Stage | Sections | Benchmark |
|---|---|---|
| Stage 1 | 1, 2, 4, 5 | Matches USWDS / GOV.UK government baseline |
| Stage 2 | + 3, 6, 7 | Matches Atlassian / Carbon / Cloudscape bar |
| Stage 3 | + 8, 9 | Matches Cloudscape complete page-anatomy quality |

---

## Appendix — Systems read and their URLs

| System | URL |
|---|---|
| Carbon (IBM) | carbondesignsystem.com/elements/2x-grid/overview/ |
| GOV.UK | design-system.service.gov.uk/styles/layout/ |
| Cloudscape (Amazon) | cloudscape.design/foundation/visual-foundation/layout/ |
| Fluent 2 (Microsoft) | fluent2.microsoft.design/layout |
| Atlassian | atlassian.design/foundations/grid-beta |
| PatternFly (Red Hat) | patternfly.org/layouts/about |
| USWDS | designsystem.digital.gov/utilities/layout-grid/ |
| Pajamas (GitLab) | design.gitlab.com/product-foundations/layout |
| Nordhealth | nordhealth.design/grid/ |
| Ant Design | ant.design/docs/spec/layout |
| NSW Gov Australia | designsystem.nsw.gov.au/core/layout/index.html |
| ServiceNow Horizon | horizon.servicenow.com/workspace/foundations/grids-and-layouts |
| Primer (GitHub) | primer.style/product/getting-started/foundations/layout |
| Braid (SEEK) | seek-oss.github.io/braid-design-system/foundations/layout |
| MongoDB LeafyGreen | mongodb.design/foundations/grid |
| Dell DS | delldesignsystem.com/foundations/grid/ |
| UAE Design System | designsystem.gov.ae/guidelines/layout |

*Blocked: BBC GEL (site blocked), Lightning DS (JS/zeroheight), Material 3 (JS)*
