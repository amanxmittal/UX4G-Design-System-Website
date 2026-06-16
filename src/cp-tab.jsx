/* global React */
(function () {
  function Tabs({ items, variant = "underline", size = "m", active = 0 }) {
    return (
      <div className={"ux4g-tab ux4g-tab-" + variant + " ux4g-tab-" + size}>
        <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((it, i) => (
            <li key={i} className={"ux4g-tab-item" + (i === active ? " is-active" : "")} role="tab">{it}</li>
          ))}
        </ul>
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-tab-mock">
          <div className="hb-tab-strip">
            <div className="hb-tab-item active">Overview</div>
            <div className="hb-tab-item">Documents</div>
            <div className="hb-tab-item">History</div>
          </div>
          <div className="hb-tab-body">
            <div className="hb-tab-row"></div>
            <div className="hb-tab-row short"></div>
            <div className="hb-tab-row"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Tab",
    navName: "Tab",
    group: "Navigation",
    desc: "Mutually exclusive content panels within a single page. Switch view without losing the current page context - URL, scroll, sidebar all preserved.",
    bannerVariant: "tab",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Tab strip", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Tab item", token: "ux4g-label-l-default" },
      { n: 3, label: "Active indicator", token: "ux4g-bg-primary-strong" },
      { n: 4, label: "Hover state", token: "ux4g-bg-neutral-soft" },
      { n: 5, label: "Panel surface", token: "ux4g-bg-neutral-elevated" },
      { n: 6, label: "Focus ring", token: "ux4g-border-color-primary-strong" },
    ],

    properties: [
      {
        label: "Variant",
        desc: "Underline is the default for page-level tabs. Pill style suits filter contexts. Vertical tabs work in side panels with 5+ items.",
        demos: [
          { label: "Underline", node: <Tabs items={["Overview", "Documents", "History"]} /> },
          { label: "Pill", node: <Tabs variant="pill" size="s" items={["Today", "Week", "Month"]} /> },
          { label: "Vertical", wide: true, node: (
            <div className="ux4g-tab ux4g-tab-vertical ux4g-tab-underline ux4g-tab-md" style={{ display: "flex" }}>
              <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4, minWidth: 160 }}>
                <li className="ux4g-tab-item is-active" role="tab" style={{ textAlign: "left", padding: "10px 14px" }}>Profile</li>
                <li className="ux4g-tab-item" role="tab" style={{ textAlign: "left", padding: "10px 14px" }}>Documents</li>
                <li className="ux4g-tab-item" role="tab" style={{ textAlign: "left", padding: "10px 14px" }}>Applications</li>
                <li className="ux4g-tab-item" role="tab" style={{ textAlign: "left", padding: "10px 14px" }}>Notifications</li>
              </ul>
            </div>
          ) },
        ],
      },
      {
        label: "Size",
        desc: "SM for dense toolbars or secondary tabs. MD for page-level tabs. LG for primary navigation in dashboards.",
        demos: [
          { label: "SM", node: <Tabs size="s" items={["Overview", "Details"]} /> },
          { label: "MD", node: <Tabs items={["Overview", "Documents", "History"]} /> },
          { label: "LG", node: <Tabs size="l" items={["Citizen", "Services"]} /> },
        ],
      },
      {
        label: "With icons or badges",
        desc: "Icons help with quick scanning - pair with text, never icon-only at page level. Badges show counts for tabs with unread items.",
        demos: [
          { label: "Icon + label", node: <Tabs items={["★ Saved", "✉ Inbox", "📂 Docs"]} /> },
          { label: "With badge", node: <Tabs items={["Inbox (3)", "Sent", "Drafts"]} /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Page-level tabs",
        desc: "Switch sub-sections within a detail page - Profile / Documents / History. URL hash reflects active tab so direct links work.",
        stage: <Tabs items={["Overview", "Documents", "History", "Notifications"]} />,
      },
      {
        title: "Filter tabs in a list",
        desc: "Pill-style tabs above a list filter by status - Active / Pending / Closed. Counts in parentheses show how many in each.",
        stage: <Tabs variant="pill" size="s" items={["Active (12)", "Pending (4)", "Closed (45)"]} />,
      },
      {
        title: "Vertical tabs in settings",
        desc: "Settings pages use vertical tabs on the left so users see all categories at once. Active tab marker on the left edge.",
        stage: (
          <div className="ux4g-tab ux4g-tab-vertical ux4g-tab-underline ux4g-tab-md" style={{ display: "flex", width: "100%" }}>
            <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4, minWidth: 180 }}>
              <li className="ux4g-tab-item is-active" role="tab" style={{ textAlign: "left", padding: "10px 14px" }}>Account</li>
              <li className="ux4g-tab-item" role="tab" style={{ textAlign: "left", padding: "10px 14px" }}>Notifications</li>
              <li className="ux4g-tab-item" role="tab" style={{ textAlign: "left", padding: "10px 14px" }}>Privacy</li>
              <li className="ux4g-tab-item" role="tab" style={{ textAlign: "left", padding: "10px 14px" }}>Accessibility</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Overflow → scrollable",
        desc: "When tabs exceed container width, the strip becomes horizontally scrollable with fade hints at the edges. Never wrap to two lines.",
        stage: (
          <div style={{ width: "100%", overflowX: "auto" }}>
            <Tabs items={["Overview", "Documents", "History", "Notifications", "Permissions", "Audit", "Billing"]} />
          </div>
        ),
      },
      {
        title: "Disabled tab",
        desc: "When a tab is unavailable (feature flag off, plan restriction), keep it visible but disabled with a tooltip explaining why.",
        stage: (
          <div className="ux4g-tab ux4g-tab-underline ux4g-tab-md">
            <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="ux4g-tab-item is-active" role="tab">Overview</li>
              <li className="ux4g-tab-item" role="tab">Documents</li>
              <li className="ux4g-tab-item" role="tab" style={{ opacity: 0.5, cursor: "not-allowed" }}>Reports (Pro)</li>
            </ul>
          </div>
        ),
      },
      {
        title: "Tab → segmented control",
        desc: "When tabs control a small binary or trinary view (Today / Week / Month), use the pill-style segmented variant. Visually distinct from page tabs.",
        stage: <Tabs variant="pill" size="s" items={["Today", "Week", "Month"]} />,
      },
    ],

    responsive: [
      {
        title: "Tabs scroll horizontally below 768px",
        desc: "Below tablet width, tab strips become horizontally scrollable. Active tab stays in view; fade hints show more tabs are off-screen.",
        sample: <Tabs items={["Overview", "Documents", "History", "Notifications"]} />,
      },
      {
        title: "Vertical tabs collapse to horizontal on mobile",
        desc: "Settings-style vertical tabs become a horizontal scrollable strip below 768px. Preserves all tabs without sacrificing screen space.",
        sample: <Tabs items={["Account", "Notifications", "Privacy"]} />,
      },
      {
        title: "Tap target stays 44 × 44px on every tab",
        desc: "Each tab gets invisible padding to reach 44px tap area regardless of label length. Critical for thumb-first mobile.",
        sample: <Tabs items={["A", "B", "C", "D"]} />,
      },
    ],

    practices: [
      {
        do: { stage: <Tabs items={["Overview", "Documents", "History"]} />, rule: "3-5 tabs work best. Beyond that, users miss tabs at the right edge." },
        dont: { stage: <Tabs items={["1", "2", "3", "4", "5", "6", "7", "8"]} />, rule: "8 page tabs become a scrollable strip - users lose orientation." },
      },
      {
        do: { stage: <Tabs items={["Active (12)", "Pending (4)"]} />, rule: "Show counts for status tabs - context for what's behind each tab." },
        dont: { stage: <Tabs items={["Active", "Pending"]} />, rule: "Without counts, users have to switch tabs to see if anything's there." },
      },
      {
        do: { stage: <Tabs items={["Overview", "Documents"]} />, rule: "Use Tabs for mutually exclusive views of the same content." },
        dont: { stage: <Tabs items={["Save", "Cancel"]} />, rule: "Don't use tabs as buttons - users expect tabs to switch view, not commit." },
      },
      {
        do: { stage: <Tabs variant="pill" size="s" items={["Today", "Week", "Month"]} />, rule: "Use pill style for filter or segmented context - visually different from page tabs." },
        dont: { stage: <Tabs items={["Today", "Week", "Month"]} />, rule: "Underline for filters confuses with page tabs - same shape, different intent." },
      },
    ],

    accessibility: [
      { t: "Use role='tablist' / 'tab' / 'tabpanel'.", b: "The strip is `role='tablist'`; each tab `role='tab'`; each panel `role='tabpanel'`. Screen readers announce 'tab 2 of 3, Documents'." },
      { t: "Arrow keys move between tabs.", b: "Left/Right (horizontal) or Up/Down (vertical) moves focus. Tab moves out to the panel. Home/End jump to first/last." },
      { t: "Active tab has aria-selected='true'.", b: "Only one tab can be selected at a time. `aria-controls` points to the panel id; the panel uses `aria-labelledby` pointing back." },
      { t: "Tap targets stay 44 × 44px or larger.", b: "Each tab has invisible padding to reach 44px in every direction. Touch users hit the same target as the visible label." },
      { t: "Focus ring is always visible.", b: "Keyboard focus shows a 2px outline ring on the tab. Never suppress :focus-visible." },
      { t: "Panel content is focusable.", b: "When the user switches tabs, focus moves to the panel (`tabindex='0'`). Allows screen-reader users to start reading the new content immediately." },
      { t: "Disabled tabs stay in tab order.", b: "Use `aria-disabled='true'` instead of skipping. Users hear the reason the tab is locked, not silence." },
    ],

    related: [
      {
        name: "Stepper",
        note: "When tabs represent sequential steps in a flow (1 → 2 → 3), use Stepper. Stepper enforces order; Tab allows free-jumping.",
        preview: (
          <ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", padding: 0, margin: 0 }}>
            <li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done"><span className="ux4g-stepper-head-icon">1</span></li>
            <li className="ux4g-stepper-step ux4g-stepper-completed"><span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span></span></li>
            <li className="ux4g-stepper-step"><span className="ux4g-stepper-head-icon"><span className="ux4g-stepper-head-check">3</span></span></li>
          </ul>
        ),
      },
      {
        name: "Chip Group",
        note: "For multi-select filtering (apply multiple filters at once), use Chip Group instead. Tabs only show one view at a time.",
        preview: (
          <div style={{ display: "flex", gap: 6 }}>
            <span className="ux4g-filter-chip-md active">All</span>
            <span className="ux4g-filter-chip-md">Live</span>
            <span className="ux4g-filter-chip-md">WIP</span>
          </div>
        ),
      },
      {
        name: "Accordion",
        note: "When users may need to see multiple sections at once or content fits on one page, use Accordion. Tabs hide non-active content.",
        preview: (
          <div className="ux4g-accordion">
            <div className="ux4g-accordion__item">
              <h2 className="ux4g-accordion__header" style={{ margin: 0 }}>
                <button className="ux4g-accordion__button"><span className="ux4g-accordion__title">Required documents</span></button>
              </h2>
            </div>
          </div>
        ),
      },
      {
        name: "Breadcrumb",
        note: "For showing the user's position in a hierarchy (Services > Identity > Aadhaar), use Breadcrumb. Tabs switch view; breadcrumb navigates up.",
        preview: (
          <nav className="ux4g-breadcrumb ux4g-breadcrumb-divider">
            <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: 6 }}>
              <li>Services</li><li>/</li><li>Identity</li><li>/</li><li>Aadhaar</li>
            </ol>
          </nav>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
