/* global React */
(function () {
  function Ib({ icon, size = "md", variant = "ghost", shape = "round", state, ariaLabel }) {
    const shapeCls = shape === "square" ? " ux4g-icon-btn-square" : "";
    const variantCls = " ux4g-icon-btn-" + variant;
    return (
      <button className={"ux4g-icon-btn ux4g-icon-btn-" + size + shapeCls + variantCls + (state === "loading" ? " state-loading" : "")} disabled={state === "disabled"} aria-label={ariaLabel || icon}>
        <span className="ux4g-icon-outlined">{icon}</span>
      </button>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-step-mock" style={{ width: 480 }}>
          <div className="hb-step-node current" style={{ width: 56, height: 56, fontSize: 24 }}>+</div>
          <div style={{ width: 12 }}></div>
          <div className="hb-step-node pending" style={{ width: 56, height: 56, fontSize: 24, background: "#fff", color: "var(--primary-dark)" }}>⌕</div>
          <div style={{ width: 12 }}></div>
          <div className="hb-step-node pending" style={{ width: 56, height: 56, fontSize: 24, background: "#fff", color: "var(--primary-dark)" }}>≡</div>
          <div style={{ width: 12 }}></div>
          <div className="hb-step-node pending" style={{ width: 56, height: 56, fontSize: 24, background: "#fff", color: "var(--primary-dark)" }}>⋮</div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Icon Button",
    navName: "Icon Button",
    group: "Utility",
    desc: "When you need a Button but have no room for a label. Always paired with a Tooltip and aria-label so the action's purpose is never lost.",
    bannerVariant: "stepper",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Container", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Icon glyph", token: "ux4g-icon-outlined" },
      { n: 3, label: "Tap target", token: "≥ 44 × 44px" },
      { n: 4, label: "Hover state", token: "ux4g-bg-neutral-soft" },
      { n: 5, label: "Focus ring", token: "ux4g-border-color-primary-strong" },
      { n: 6, label: "Disabled state", token: "ux4g-text-neutral-tertiary" },
    ],

    properties: [
      {
        label: "Size",
        desc: "SM for table-row actions. MD is the default. LG for primary toolbar surfaces. Tap target always meets 44 × 44px regardless of visible size.",
        demos: [
          { label: "SM · 28px", node: <Ib icon="add" size="sm" ariaLabel="Add" /> },
          { label: "MD · 40px", node: <Ib icon="add" size="md" ariaLabel="Add" /> },
          { label: "LG · 48px", node: <Ib icon="add" size="lg" ariaLabel="Add" /> },
        ],
      },
      {
        label: "Variant",
        desc: "Ghost (default) has no background until hover. Filled (primary-tonal) for emphasis. Outlined for secondary surfaces.",
        demos: [
          { label: "Ghost", node: <Ib icon="add" ariaLabel="Add" variant="ghost" /> },
          { label: "Tonal", node: <Ib icon="add" ariaLabel="Add" variant="tonal" /> },
          { label: "Outlined", node: <Ib icon="add" ariaLabel="Add" variant="outline" /> },
          { label: "Solid", node: <Ib icon="add" ariaLabel="Add" variant="solid" /> },
        ],
      },
      {
        label: "Shape",
        desc: "Round is the default for one-off actions. Square (4px radius) for toolbar groups where buttons sit edge-to-edge.",
        demos: [
          { label: "Round", node: <Ib icon="search" ariaLabel="Search" /> },
          { label: "Square", node: <Ib icon="search" ariaLabel="Search" shape="square" /> },
        ],
      },
      {
        label: "State",
        desc: "Default, hover, focused, loading (spinner replaces icon), disabled (locked + greyed). Disabled always paired with a Tooltip explaining why.",
        demos: [
          { label: "Default", node: <Ib icon="add" ariaLabel="Add" /> },
          { label: "Disabled", node: <Ib icon="add" ariaLabel="Add" state="disabled" /> },
          { label: "Loading", node: (
            <button className="ux4g-icon-btn ux4g-icon-btn-md state-loading"><span className="ux4g-spinner ux4g-spinner-sm"></span></button>
          ) },
        ],
      },
    ],

    scenarios: [
      {
        title: "Action toolbar",
        desc: "A row of icon buttons at the top of a table or canvas - add, search, filter, more. Each carries an aria-label and visible Tooltip.",
        stage: (
          <div style={{ display: "flex", gap: 4, padding: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 8 }}>
            <Ib icon="add" ariaLabel="Add" />
            <Ib icon="search" ariaLabel="Search" />
            <Ib icon="tune" ariaLabel="Filter" />
            <Ib icon="download" ariaLabel="Download" />
            <Ib icon="more_vert" ariaLabel="More" />
          </div>
        ),
      },
      {
        title: "Row actions (⋮ menu)",
        desc: "The 3-dot icon opens a Popover of row-specific actions. One small button hides many actions without crowding the row.",
        stage: (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 12px", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, width: "100%" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>AP-2026-DM-83942</div>
              <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>Income certificate · Verified</div>
            </div>
            <Ib icon="more_vert" ariaLabel="Actions for application AP-2026-DM-83942" size="sm" />
          </div>
        ),
      },
      {
        title: "Modal close (×)",
        desc: "Top-right of a Modal carries an × Icon Button. aria-label='Close dialog' so screen readers describe its purpose clearly.",
        stage: (
          <div style={{ padding: 16, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, width: "100%", maxWidth: 280, display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Confirm submission</div>
              <div style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>Once submitted, cannot edit.</div>
            </div>
            <Ib icon="close" ariaLabel="Close dialog" size="sm" />
          </div>
        ),
      },
      {
        title: "Like / favourite toggle",
        desc: "A heart icon toggles 'saved' state. Same button, two states - empty heart (off) vs filled heart (on). aria-pressed reflects state.",
        stage: (
          <div style={{ display: "flex", gap: 12 }}>
            <button className="ux4g-icon-btn ux4g-icon-btn-md" aria-label="Save to favourites" aria-pressed="false">
              <span className="ux4g-icon-outlined">favorite_border</span>
            </button>
            <button className="ux4g-icon-btn ux4g-icon-btn-md" aria-label="Saved to favourites" aria-pressed="true" style={{ color: "#dc2626" }}>
              <span className="ux4g-icon-outlined">favorite</span>
            </button>
          </div>
        ),
      },
      {
        title: "Loading state during async",
        desc: "When the icon button fires an async action (save, share), replace the icon with a spinner. Disable to prevent double-fire.",
        stage: (
          <div style={{ display: "flex", gap: 12 }}>
            <Ib icon="save" ariaLabel="Save" />
            <span className="scn-arrow" aria-hidden="true">→</span>
            <button className="ux4g-icon-btn ux4g-icon-btn-md state-loading" disabled aria-label="Saving">
              <span className="ux4g-spinner ux4g-spinner-sm"></span>
            </button>
          </div>
        ),
      },
      {
        title: "Disabled with reason",
        desc: "When the action is unavailable (no items to delete, not yet eligible), keep the button visible but disabled with a Tooltip explaining why.",
        stage: (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Ib icon="delete" ariaLabel="Delete (locked - no items selected)" state="disabled" />
            <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>Select rows to enable delete</span>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Tap target stays 44 × 44px at every breakpoint",
        desc: "Even SM (28px visible) icon buttons have invisible padding to reach 44px tap area. Thumb-friendly across all sizes.",
        sample: <Ib icon="add" size="sm" ariaLabel="Add" />,
      },
      {
        title: "Mobile primary nav uses LG icon buttons",
        desc: "Bottom-bar mobile navigation uses LG (48px) icon buttons with optional labels. Tap-friendly without taking too much vertical space.",
        sample: (
          <div style={{ display: "flex", gap: 16, padding: 8, background: "var(--ux4g-bg-neutral-elevated)", borderRadius: 8 }}>
            <Ib icon="home" size="lg" ariaLabel="Home" />
            <Ib icon="search" size="lg" ariaLabel="Search" />
            <Ib icon="person" size="lg" ariaLabel="Profile" />
          </div>
        ),
      },
      {
        title: "Toolbar wraps below 480px",
        desc: "If a 5-button toolbar doesn't fit on mobile, wrap to a new line. Never truncate or hide actions - users need them.",
        sample: (
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
            <Ib icon="add" ariaLabel="Add" />
            <Ib icon="search" ariaLabel="Search" />
            <Ib icon="tune" ariaLabel="Filter" />
            <Ib icon="download" ariaLabel="Download" />
            <Ib icon="more_vert" ariaLabel="More" />
          </div>
        ),
      },
    ],

    practices: [
      {
        do: { stage: <Ib icon="add" ariaLabel="Add new application" />, rule: "Always set aria-label - icon alone fails screen readers." },
        dont: { stage: <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">add</span></button>, rule: "No aria-label = screen-reader users hear 'button' with no purpose." },
      },
      {
        do: { stage: <Ib icon="search" ariaLabel="Search" />, rule: "Pair Icon Button with a Tooltip - sighted users get a hover hint." },
        dont: { stage: <Ib icon="search" ariaLabel="Search" />, rule: "Icon without tooltip leaves users guessing - is this search? Zoom in?" },
      },
      {
        do: { stage: <Ib icon="add" ariaLabel="Add" />, rule: "Use Icon Button when space is tight - toolbars, row actions, navigation." },
        dont: { stage: <Ib icon="check" ariaLabel="Submit application" />, rule: "Don't use Icon Button for primary actions - users want a labelled Button there." },
      },
      {
        do: { stage: <Ib icon="delete" ariaLabel="Delete (locked - no items selected)" state="disabled" />, rule: "Disabled Icon Button explains why via Tooltip / aria-label." },
        dont: { stage: <Ib icon="delete" ariaLabel="Delete" state="disabled" />, rule: "Disabled with no explanation feels broken - users tap once, then give up." },
      },
    ],

    accessibility: [
      { t: "aria-label is mandatory.", b: "Every Icon Button needs `aria-label='Add application'` (or similar). Without it, screen readers announce only 'button' - useless." },
      { t: "Tap target stays 44 × 44px.", b: "Even SM Icon Buttons (28px visible) get invisible padding to reach 44px. Thumb-friendly across all sizes." },
      { t: "Pair with a Tooltip for sighted users.", b: "Hover / focus shows a Tooltip with the same text as aria-label. Both sighted and AT users get the purpose." },
      { t: "Toggle buttons use aria-pressed.", b: "Like / favourite toggles use `aria-pressed='true|false'`. Screen readers announce 'pressed' / 'not pressed' alongside the action name." },
      { t: "Focus ring is always visible.", b: "Keyboard focus shows a 2px outline ring. Critical for icon-only buttons - users can't tell from icon position alone where focus is." },
      { t: "Loading state announces 'busy'.", b: "When the spinner appears, wrap the button in `aria-busy='true'` so screen readers know the action is in flight." },
      { t: "Don't use icon ambiguously.", b: "A house icon could mean 'home' or 'address'. Always pair with explicit aria-label so meaning is unambiguous." },
    ],

    related: [
      {
        name: "Button",
        note: "For primary actions with labels, use Button. Icon Button is for compact toolbars and row actions; Button is for committed CTAs.",
        preview: <button className="ux4g-btn-primary ux4g-btn-md">Submit application</button>,
      },
      {
        name: "Tooltip",
        note: "Every Icon Button needs a Tooltip - the visible label sighted users need. Tooltip + aria-label together cover both audiences.",
        preview: (
          <div className="ux4g-tooltip ux4g-tooltip-s show" style={{ position: "relative", transform: "none" }}>
            Add application
          </div>
        ),
      },
      {
        name: "Badge",
        note: "Icon Buttons frequently carry a Badge in the top-right corner for unread counts (inbox 3, notifications 5).",
        preview: (
          <span style={{ position: "relative", display: "inline-block" }}>
            <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">notifications</span></button>
            <span className="ux4g-badge-digit-primary ux4g-badge-m" style={{ position: "absolute", top: 0, right: 0 }}>3</span>
          </span>
        ),
      },
      {
        name: "Popover",
        note: "Icon Buttons often trigger Popovers - the ⋮ menu opens a Popover of row actions; the (i) icon opens a Popover with explanation.",
        preview: (
          <div style={{ background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, padding: 8, maxWidth: 140, fontSize: 13 }}>
            <div style={{ padding: 4 }}>Edit</div>
            <div style={{ padding: 4 }}>Delete</div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
