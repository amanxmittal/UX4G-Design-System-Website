/* global React */
(function () {
  function Bc({ items = [] }) {
    return (
      <nav className="ux4g-breadcrumb ux4g-breadcrumb-divider" aria-label="Breadcrumb">
        <ol className="ux4g-breadcrumb-list" style={{ display: "flex", alignItems: "center", flexWrap: "wrap", listStyle: "none", padding: 0, margin: 0 }}>
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <React.Fragment key={i}>
                <li className={"ux4g-breadcrumb-item" + (last ? " active" : "")} style={{ display: "flex", alignItems: "center" }}>
                  {last ? it : <a className="ux4g-breadcrumb-link" href="#" onClick={(e) => e.preventDefault()}>{it}</a>}
                </li>
                {!last && <li style={{ padding: "0 8px", color: "var(--ux4g-text-neutral-tertiary)" }}>/</li>}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-crumb-mock">
          <span className="hb-crumb-item">Home</span>
          <span className="hb-crumb-sep">/</span>
          <span className="hb-crumb-item">Services</span>
          <span className="hb-crumb-sep">/</span>
          <span className="hb-crumb-item">Identity</span>
          <span className="hb-crumb-sep">/</span>
          <span className="hb-crumb-item current">Driving Licence</span>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/breadcrumb/";

  const config = {
    name: "Breadcrumb",
    navName: "Breadcrumb",
    group: "Navigation",
    desc: "Where am I, and how did I get here. Anchors the user inside deep service catalogues and multi-level hierarchies.",
    bannerVariant: "breadcrumb",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Parent link", token: "ux4g-text-link-default" },
      { n: 2, label: "Separator", token: "ux4g-text-neutral-tertiary" },
      { n: 3, label: "Current page", token: "ux4g-text-neutral-primary" },
      { n: 4, label: "Overflow ellipsis", token: "ux4g-text-neutral-tertiary" },
      { n: 5, label: "Hover state", token: "ux4g-text-link-hover" },
      { n: 6, label: "Focus ring", token: "ux4g-border-color-primary-strong" },
    ],

    properties: [
      {
        label: "Length",
        desc: "Up to 4 levels show every breadcrumb. Beyond that, collapse middle levels with an ellipsis menu.",
        img: IMG + "properties-length.png",
        imgAlt: "A short three-level breadcrumb and a longer collapsed breadcrumb with an overflow menu.",
        demos: [
          { label: "Short (≤4)", node: <Bc items={["Home", "Services", "Identity", "Driving Licence"]} /> },
          { label: "Long (collapsed)", wide: true, node: <Bc items={["Home", "…", "Identity", "Driving Licence", "Address change"]} /> },
        ],
      },
      {
        label: "Separator",
        desc: "Slash (/) is the default. Arrow (›) for visual flavour, never inside dense data tables. Match the separator across the whole product.",
        img: IMG + "properties-separator.png",
        imgAlt: "The same breadcrumb shown with slash separators and with chevron separators.",
        demos: [
          { label: "Slash", node: <Bc items={["Home", "Services", "Driving Licence"]} /> },
          { label: "Arrow", node: (
            <nav className="ux4g-breadcrumb">
              <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, alignItems: "center" }}>
                <li><a className="ux4g-breadcrumb-link" href="#" onClick={(e) => e.preventDefault()}>Home</a></li>
                <li style={{ padding: "0 8px", color: "var(--ux4g-text-neutral-tertiary)" }}>›</li>
                <li><a className="ux4g-breadcrumb-link" href="#" onClick={(e) => e.preventDefault()}>Services</a></li>
                <li style={{ padding: "0 8px", color: "var(--ux4g-text-neutral-tertiary)" }}>›</li>
                <li className="active">Driving Licence</li>
              </ol>
            </nav>
          ) },
        ],
      },
      {
        label: "State",
        desc: "Each non-current level is a link with default, hover, focus, and visited states. Current page is plain text - never a link to itself.",
        img: IMG + "properties-state.png",
        imgAlt: "A default breadcrumb and one with a parent link in its hover state.",
        demos: [
          { label: "Default", node: <Bc items={["Home", "Services", "Driving Licence"]} /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Deep service catalogue",
        desc: "Citizen navigates 3-4 levels into a service category. Breadcrumb makes the path back to higher categories one tap away.",
        img: IMG + "scenarios-deep-catalogue.png",
        imgAlt: "A four-level breadcrumb: Home, Services, Identity, Driving Licence.",
        stage: <Bc items={["Home", "Services", "Identity & Access", "Driving Licence", "Update address"]} />,
      },
      {
        title: "Inside a tabbed page",
        desc: "Breadcrumb shows page-level position. Tab is for sub-section switching - they coexist on the same page.",
        img: IMG + "scenarios-tabbed.png",
        imgAlt: "A breadcrumb sitting above a row of page tabs.",
        stage: (
          <div style={{ width: "100%" }}>
            <Bc items={["Home", "My Account", "Applications"]} />
            <div style={{ marginTop: 12 }}>
              <div className="ux4g-tab ux4g-tab-underline ux4g-tab-md">
                <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li className="ux4g-tab-item is-active" role="tab">Active</li>
                  <li className="ux4g-tab-item" role="tab">Past</li>
                </ul>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Collapsed middle for very deep paths",
        desc: "When the path has 5+ levels, collapse middle items behind an ellipsis. Tap the ellipsis to expand into a Popover with hidden levels.",
        img: IMG + "scenarios-collapsed.png",
        imgAlt: "A deep path collapsed with an overflow menu between Home and the current page.",
        stage: <Bc items={["Home", "…", "Driving Licence", "Update address", "Verify OTP"]} />,
      },
      {
        title: "Inside a filterable list page",
        desc: "When the list filter changes (Active → Closed), the breadcrumb stays the same - it tracks where you are in the site hierarchy, not the data state.",
        img: IMG + "scenarios-list-page.png",
        imgAlt: "A breadcrumb above a row of filter chips on a list page.",
        stage: <Bc items={["Home", "Applications"]} />,
      },
      {
        title: "Mobile - back chevron instead of full crumb",
        desc: "Below 480px, the breadcrumb collapses to a back chevron with parent label. Tapping returns to the parent; long press shows the full trail.",
        img: IMG + "scenarios-mobile-back.png",
        imgAlt: "A mobile back affordance: a back chevron with the parent label Services.",
        stage: (
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--ux4g-text-primary-default)" }}>
            <span className="ux4g-icon-outlined">chevron_left</span>
            <span>Services</span>
          </div>
        ),
      },
      {
        title: "Root-level breadcrumb in app",
        desc: "On the home page, the breadcrumb shows just 'Home'. Surface the page title separately - the breadcrumb isn't a substitute for an H1.",
        img: IMG + "scenarios-root.png",
        imgAlt: "A shallow breadcrumb near the app root: Home, Dashboard, Overview.",
        stage: (
          <div style={{ width: "100%" }}>
            <Bc items={["Home"]} />
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Back chevron on mobile (≤ 480px)",
        desc: "Below 480px, the breadcrumb collapses to a single back chevron + parent label. Saves horizontal space for the page title.",
        img: IMG + "responsive-mobile-back.png",
        imgAlt: "On narrow screens the breadcrumb collapses to a single back chevron to the parent.",
        sample: (
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14, color: "var(--ux4g-text-primary-default)" }}>
            <span className="ux4g-icon-outlined">chevron_left</span>
            <span>Services</span>
          </div>
        ),
      },
      {
        title: "Truncate middle levels at narrow widths",
        desc: "Between 480px and 768px, middle levels truncate with ellipsis. First (Home) and last (current) always stay visible.",
        img: IMG + "responsive-truncate.png",
        imgAlt: "Middle levels truncate into an overflow menu at narrow widths.",
        sample: <Bc items={["Home", "…", "Driving Licence"]} />,
      },
      {
        title: "Wrap to next line on overflow",
        desc: "If the breadcrumb is too long to fit, allow it to wrap. Never truncate the current page label - users need to know where they are.",
        img: IMG + "responsive-wrap.png",
        imgAlt: "A long breadcrumb wrapping onto a second line.",
        sample: <Bc items={["Home", "Services", "Identity", "Driving Licence", "Address"]} />,
      },
    ],

    practices: [
      {
        do: { img: IMG + "best-practices-1-do.png", imgAlt: "A breadcrumb showing every level back to Home.", stage: <Bc items={["Home", "Services", "Driving Licence"]} />, rule: "Show every level back to Home. Single source of truth for hierarchy." },
        dont: { img: IMG + "best-practices-1-dont.png", imgAlt: "A breadcrumb showing only the current page.", stage: <Bc items={["Driving Licence"]} />, rule: "Showing only the current page defeats the purpose - users can't navigate up." },
      },
      {
        do: { img: IMG + "best-practices-2-do.png", imgAlt: "The current page rendered as plain text.", stage: <Bc items={["Home", "Services", "Driving Licence"]} />, rule: "Current page is plain text. Users can't link to where they already are." },
        dont: { img: IMG + "best-practices-2-dont.png", imgAlt: "The current page wrongly rendered as a link.", stage: (<nav><ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0 }}><li><a href="#" onClick={(e) => e.preventDefault()}>Home</a></li><li style={{ padding: "0 8px" }}>/</li><li><a href="#" onClick={(e) => e.preventDefault()}>Driving Licence</a></li></ol></nav>), rule: "Linking the current page suggests it's somewhere else to go to - confusing." },
      },
      {
        do: { img: IMG + "best-practices-3-do.png", imgAlt: "A deep path collapsed with an overflow menu.", stage: <Bc items={["Home", "…", "Driving Licence", "Update"]} />, rule: "Collapse middle levels when path is 5+ deep. Saves space, keeps endpoints clear." },
        dont: { img: IMG + "best-practices-3-dont.png", imgAlt: "Six breadcrumb levels all shown at once.", stage: <Bc items={["Home", "Services", "Identity & Access", "Driving Licence", "Update", "OTP"]} />, rule: "6 visible levels eat horizontal space and slow scanning." },
      },
      {
        do: { img: IMG + "best-practices-4-do.png", imgAlt: "A single back chevron on mobile.", stage: (<div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}><span className="ux4g-icon-outlined">chevron_left</span><span>Services</span></div>), rule: "Back chevron on mobile - one tap to parent, no need to show full hierarchy." },
        dont: { img: IMG + "best-practices-4-dont.png", imgAlt: "A full breadcrumb cramped onto a mobile width.", stage: <div style={{ overflowX: "auto", whiteSpace: "nowrap" }}><Bc items={["Home", "Services", "Identity", "Driving Licence"]} /></div>, rule: "Full horizontal scroll on mobile is cramped and slow to use." },
      },
    ],

    accessibility: [
      { t: "Wrap in <nav aria-label='Breadcrumb'>.", b: "Screen readers announce 'Breadcrumb navigation' when entering the region. Distinct from main nav and tabs." },
      { t: "Use ordered list (<ol>).", b: "Hierarchy is sequential - parent → child. Ordered list semantics match. Visual layout is horizontal but DOM order is top-down." },
      { t: "Current page uses aria-current='page'.", b: "Even when rendered as plain text, mark the current item with `aria-current='page'`. Screen readers announce 'current page, Driving Licence'." },
      { t: "Separators are aria-hidden='true'.", b: "Visual / or › separators are decoration. Hide them from screen readers - users hear 'Home, Services, Driving Licence' without 'slash, slash'." },
      { t: "Links have visible focus.", b: "Tab through each link with a 2px focus ring. Never suppress :focus-visible." },
      { t: "Collapsed ellipsis is a button.", b: "Tapping the … opens a Popover with hidden levels. Make it an actual `<button>` with `aria-label='Show more levels'`." },
      { t: "Breadcrumb is not a substitute for back.", b: "The browser back button takes users to the previous page (could be elsewhere). Breadcrumb takes them up the hierarchy. Both are useful, neither replaces the other." },
    ],

    related: [
      {
        name: "Tab",
        note: "Breadcrumb shows where you are in the hierarchy. Tab switches view within a single page. They coexist - breadcrumb above, tabs below.",
        preview: (
          <div className="ux4g-tab ux4g-tab-underline ux4g-tab-sm">
            <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="ux4g-tab-item is-active" role="tab">Overview</li>
              <li className="ux4g-tab-item" role="tab">Documents</li>
            </ul>
          </div>
        ),
      },
      {
        name: "Navbar",
        note: "The top-level Navbar shows the major site sections. Breadcrumb shows current position within a section - they complement each other.",
        preview: (
          <div style={{ display: "flex", gap: 12, padding: 8, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 6, fontSize: 12 }}>
            <span style={{ fontWeight: 700 }}>UX4G</span>
            <span>FND</span><span style={{ color: "var(--ux4g-text-primary-default)" }}>COMP</span><span>PAT</span>
          </div>
        ),
      },
      {
        name: "Stepper",
        note: "For showing position in a sequential task (form steps), use Stepper. Breadcrumb is for site hierarchy; Stepper is for process steps.",
        preview: (
          <ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", padding: 0, margin: 0 }}>
            <li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done"><span className="ux4g-stepper-head-icon">1</span></li>
            <li className="ux4g-stepper-step ux4g-stepper-completed"><span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span></span></li>
          </ul>
        ),
      },
      {
        name: "Link",
        note: "Each non-current breadcrumb item is a Link. Inherits Link's underline, hover, focus, and visited states.",
        preview: <a className="ux4g-text-link-md" href="#" onClick={(e) => e.preventDefault()}>View grievance status →</a>,
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
