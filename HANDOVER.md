# UX4G Design System Website — Handover

Last updated: 2026-06-15

This document is the single source of truth for picking up the **component
documentation** work. Read it fully before touching Figma or the JSX.

---

## 1. What this project is

A static, no-build documentation site for the UX4G Design System (Indian
government services). Each component has a page that documents its **Anatomy,
Properties, Scenarios, Responsive behaviour, Best practices, Accessibility,
and Related components** — using **PNG images exported from Figma**, not live
HTML mocks.

The **Button** page is the gold-standard reference. The **Tag** page is the
most recent, fully-corrected build and is the **canonical recipe** to copy.

### Run it

```bash
npm start          # browser-sync, serves on http://localhost:3000, live-reload
```

No build step. JSX is transpiled in the browser by Babel-standalone. Edit a
`.jsx` / `.css` / `.html` file and the browser reloads.

---

## 2. The Figma file changed (key only — IDs are preserved)

The active UX4G Design System Figma file is now a **duplicate** of the original.
A Figma duplicate **preserves internal node IDs** — only the **file key** (the
URL identifier) changes.

| | File key |
|---|---|
| OLD original | `C3Kecl9nh78LLblDUn28P6` |
| **NEW / current (use this)** | `D0zpnBrmX5uwv0tawKuP9a` |
| Current file URL | https://www.figma.com/design/D0zpnBrmX5uwv0tawKuP9a/UX4G-Design-System-3.0 |

**Verified (2026-06-15):** node IDs from the prior sessions still resolve in the
new file — the Tag component set (`9639:31262`), the Text Field set
(`9708:13270`), the `Background/Neutral/Default` variable (`VariableID:8404:27`),
and even the Tag **Documentation Stages** section built this work cycle
(`19097:1494815`) are all present. So the recipe's IDs are a reliable starting
point; you do **not** have to re-resolve everything from scratch.

**But the new file is the live, actively-edited file**, so individual nodes can
be moved, renamed, or deleted by ongoing design work. One example already drifted:
the original Tag anatomy frame `19080:384506` no longer resolves. So:

> **Rule:** trust an old node ID only after `getNodeByIdAsync` confirms it still
> resolves. If it doesn't, re-discover it by **name** (§5). Prefer stable
> **names** (variables, text styles, component names) over hardcoded IDs when
> writing anything durable. Nothing in the website code references a Figma file
> key — only exported PNGs — so there is no code to "repoint."

---

## 3. The task in one sentence

> The documentation images built for the **first component category** need to be
> built for **every remaining category**, to the **Tag/Button standard**.

The UX4G components are organised into categories (matching the Figma file):
**Form elements, Feedback, Data Display, Navigation, Capture & verification,
Utility.** The first category (Form elements) was largely built in earlier
sessions; the rest are open.

### Status

| Bucket | Components | Notes |
|---|---|---|
| ✅ Reference — current recipe, correct | **Button**, **Tag** | Copy these. |
| ⚠️ Has images from earlier sessions — **built to an earlier standard, needs a QA/refresh pass against the Tag recipe** | avatar, badge, breadcrumb, checkbox, chip, combobox, date-picker, divider, dropdown, file-upload, form-field-group, input, link, otp, radio, search, slider, spinner, switch, textarea, time-picker, tooltip | Don't assume "done." Earlier images predate the corrections in §6 (real icons, bound bg variables, single-frame, 1.5× scale, wrap). Compare each against Tag before calling final. |
| ⛔ Not started | accordion, alert/toast, backdrop, card, carousel, checklist, chip-group, dialog/modal, draft-banner, drawer, empty-state, footer, icon-button, image, journey-timeline, list, navbar, pagination, popover, progress, rating, sla-progress, slot-grid, social-links, status-pipeline, stepper, tab, table, escalation-tree, biometric, accessibility-bar, … | The bulk of the remaining work. |

Check current wiring at any time:
```bash
grep -l "anatomyImg" src/cp-*.jsx        # which components reference v3 images
ls assets/images/component-anatomy/      # which have an asset folder
```

---

## 4. Architecture

- **`src/cp-template.jsx`** — the shared renderer. Registers
  `window.UX4G_CP.render(config)`. Every component page calls it with a config
  object. **This is where image-mode rendering lives** for each section.
- **`src/cp-<slug>.jsx`** — one per component. Exports a `config` object and
  hands it to the renderer. This is the file you edit to wire images + copy.
- **`UX4G <Name>.html`** — the page shell that loads Babel, the template, and
  the component's `cp-*.jsx`.
- **`css/component-page.css`** — all the doc-page styling, including the
  image-stage wrappers (see the `anatomy-stage--image`, `cd-stage-img-wrap`
  rules — important, see §6 gotcha #10).
- **`assets/images/component-anatomy/<slug>/`** — exported PNGs per component.

### `cp-<slug>.jsx` config shape (what the renderer reads)

```js
const IMG = "assets/images/component-anatomy/<slug>/";
const config = {
  name, navName, group, desc, hero,
  anatomyImg: IMG + "anatomy.png",
  anatomyImgAlt: "…",
  anatomy:   [{ n, label, token }],                         // numbered legend
  properties:[{ label, desc, img: IMG+"properties-x.png", imgAlt, demos }],
  scenarios: [{ title, desc, img: IMG+"scenarios-x.png", imgAlt, stage }],
  responsive:[{ title, desc, img: IMG+"responsive-x.png", imgAlt, sample }],
  practices: [{ do:{img,imgAlt,rule}, dont:{img,imgAlt,rule} }],
  accessibility:[{ t, b }],
  related:   [{ name, note, preview }],
};
```
When an `img` is present the renderer shows the PNG; otherwise it falls back to
the React `demos`/`stage`/`sample` node. So you can wire images incrementally.

**`src/cp-tag.jsx` is the reference implementation** — read it end to end before
building a new component.

---

## 5. The recipe — build one component's docs

Do this in Figma via the `figma-console` MCP (`figma_execute`), then export and
wire. All node IDs below are **examples from the old file** — re-resolve in the
current file.

1. **Find the component set.** Load its page, then
   `page.findAllWithCriteria({types:['COMPONENT_SET']})`. Read
   `set.variantGroupProperties` and `set.componentPropertyDefinitions` — these
   tell you the **real** properties. Document **only** properties that exist and
   that visibly change the component. Never invent props; never skip real ones.
2. **Make a Section** on the page named `🟣 Documentation Stages`, placed clear
   of existing content. Bind its fill to the **`Background/Neutral/Default`**
   variable.
3. **Anatomy.** Find the design team's official labelled anatomy frame (named
   like `Example - Container` or `<Component> - Anatomy`). **Clone it**, strip
   its stroke and set `cornerRadius = 0`, and rebind its bg to
   `Background/Neutral/Default`. Do **not** hand-build one if an official exists.
4. **Property frames** (960×320 each). One per real property. Inside, place real
   component instances and drive them with `instance.setProperties({...})`.
   **Verify each property actually changes by screenshotting** — a silent
   no-op was the #1 defect in v1/v2.
5. **Real content + real icons.** No "Placeholder"/"Lorem ipsum". Use gov.in
   content (₹, +91, Aadhaar, PMAY-U, DPDP 2023, Verified/Pending/Rejected, …).
   Swap placeholder icons for real Material icons (see §6 gotcha #4).
6. **Scenarios / Responsive / Best practices** (480×360 each). Build realistic
   compositions from real instances. DO frames bind to
   `Background/Status/Success/Default`; DON'T frames to
   `Background/Status/Error/Default`. **No "DO"/"DON'T" text baked into the
   image** (Button doesn't).
7. **Annotations** inside frames use **DS text styles** (`Label/M/Default`,
   `Body/M/Default`, etc.) via `node.setTextStyleIdAsync(...)`. Never Inter or
   ad-hoc sizes.
8. **Scale + wrap** (see §6 gotchas #11, #12).
9. **Export** every frame with `figma_get_component_image` at `scale: 2`,
   `curl` the returned S3 URL into `assets/images/component-anatomy/<slug>/`
   with the canonical filename (`anatomy.png`, `properties-<x>.png`,
   `scenarios-<x>.png`, `responsive-<x>.png`, `best-practices-<n>-do.png` /
   `-dont.png`).
10. **Wire** `cp-<slug>.jsx`: `anatomyImg`, per-row `img`/`imgAlt`, `practices`.
11. **Verify on the live site** (`npm start`) at wide **and** narrow widths.

---

## 6. Gotchas (hard-won — ignore at your peril)

1. **Node IDs survived the file duplicate, but the file is live.** Old IDs
   mostly still resolve; verify each with `getNodeByIdAsync` before trusting it,
   and re-resolve by name if a node has drifted. (§2)
2. **Variable IDs need the `VariableID:` prefix.**
   `getVariableByIdAsync('VariableID:8404:27')` works;
   `getVariableByIdAsync('8404:27')` returns `null` and the bg binding **fails
   silently** (the paint looks bound but isn't). Resolve variables by **name**
   via `getLocalVariableCollectionsAsync()` to be safe.
3. **`figma_execute` is single-threaded and times out on broad searches.**
   Scope `findAll` to **one page at a time**; never walk all pages in one call.
   Subagents can't parallelise Figma work — they queue on the one bridge.
4. **Icon swaps don't cascade.** `setProperties` on the parent instance does not
   change a nested icon. Find the nested `_<comp> item/Leading icon` instance
   and call `setProperties({'Icon#<key>': <variantId>})` **on it**. Material
   icons are individual `COMPONENT_SET`s (`check_circle`, `home`, `warning`,
   `check`, …); find the `Style=Outlined` variant's id to swap in.
5. **Async page APIs.** Use `setTextStyleIdAsync`, `setCurrentPageAsync`,
   `getNodeByIdAsync` — the sync versions throw under `documentAccess: dynamic-page`.
6. **No `SPACE_AROUND`.** `primaryAxisAlignItems` only accepts
   `MIN|MAX|CENTER|SPACE_BETWEEN`. `itemSpacing = 'AUTO'` (string) is rejected by
   this bridge. To distribute, use `CENTER` + a fixed `itemSpacing`, and size
   content with `rescale()`.
7. **Export cache.** `figma_get_component_image` returns a cached URL keyed to
   node state. After editing a frame, **bust the cache** by toggling
   `node.visible = false; node.visible = true;` (or renaming) before
   re-exporting, or you'll download a stale render.
8. **Frame dimensions must match Button**, or images render at inconsistent
   scale on the page: **properties 960×320**, everything else **480×360**
   (exported at `scale:2` → 1920×640 / 960×720). Set `cornerRadius = 0`, **no
   stroke**, flat bg. The page CSS wrapper provides the card chrome — baking a
   card into the PNG causes the **double-frame** bug.
9. **Anatomy double-frame.** The cloned anatomy frame carries its own
   stroke + corner radius; clear both. AND the template must add the
   **`anatomy-stage--image`** modifier class (it does this only when
   `config.anatomyImg` is set) so the wrapper's background/border are stripped
   and the PNG is the only visible surface.
10. **Component reads too small.** A 24px Tag on a Button-sized canvas looks
    empty. `rescale()` the component instances ~**1.5×** so they read at a
    comparable density. **Do not scale the caption text** — captions stay at
    `Label/M/Default`. For multi-element compositions (scenarios, lists, cards)
    scale the **whole inner composition** so text and component scale together.
11. **Wrap or it overflows.** Any multi-element row must have
    `layoutWrap = 'WRAP'` **and** the inner container resized to
    `frame.width − paddingL − paddingR`, or content runs off the right edge of
    the canvas (invisible in Figma's infinite canvas, clipped on the website).
12. **Viewing exported PNGs:** the Read tool rejects images > ~2000px. Thumbnail
    to < 1500px first (`PIL`; install via
    `pip3 install --user --break-system-packages Pillow`).
13. **JSX parse check:** `node --check` doesn't handle `.jsx`. Validate with
    `@babel/parser` (`plugins:['jsx']`).

---

## 7. Stable references (resolve current IDs by these names)

**Background variables** (bind frame fills to these):
- `Background/Neutral/Default` — neutral surface (all property/scenario frames)
- `Background/Status/Success/Default` — DO frames
- `Background/Status/Error/Default` — DON'T frames

**Text styles** (annotations/captions): `Label/M/Default` (12px captions),
`Body/M/Default`, `Body/S/Default`, `Title/S/Default`, `Title/M/Default`,
`Heading/*`. Family is **Noto Sans**.

`Background/Neutral/Default` resolves to ~`#FAFAFA` in light mode — a very
subtle off-white. That is intentional per the original spec.

---

## 8. Housekeeping / repo notes

- This is now a **git repo** (initialised at handover). `node_modules`,
  `.DS_Store`, and OS cruft are git-ignored.
- Working/scratch dirs that aren't part of the site: `.agent/`, `.impeccable/`,
  `scratch/`, `from claude design/`, `_handoff_extract/`, `Documents/`. Review
  before relying on anything in them.
- `PRODUCT.md` and `DESIGN.md` hold brand/design context (used by the
  `impeccable` design skill).
- `.claude/launch.json` defines dev-server presets (ports 4000/4001) used by the
  in-editor preview tool; the canonical run command is still `npm start` (3000).

---

## 9. Suggested first move for the next owner

1. Open the **current** Figma file (`D0zpnBrmX5uwv0tawKuP9a`). The Tag
   **Documentation Stages** section (`19097:1494815`) is already there — open it
   to see the finished frames you're replicating, not just the exported PNGs.
2. Open **Tag** in the running site and in Figma side by side — that is the bar.
3. Pick the next component (Input is the natural next — it has the richest
   earlier-session images to compare/refresh; its set `9708:13270` resolves),
   and run the §5 recipe.
4. Do them **category by category**; verify each on the live site before moving on.
