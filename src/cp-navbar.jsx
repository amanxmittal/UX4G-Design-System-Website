/* global React */
(function () {
  function NB() {
    return (
      <div style={{ width: "100%", maxWidth: 600, background: "#fff", padding: "12px 20px", display: "flex", alignItems: "center", gap: 24, borderRadius: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)", boxShadow: "0 2px 4px rgba(0,0,0,0.04)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 32, height: 32, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12 }}>U4</div>
          <span style={{ fontSize: 14, fontWeight: 700 }}>UX4G</span>
        </div>
        <nav style={{ flex: 1, display: "flex", gap: 16, fontSize: 13 }}>
          <span style={{ color: "var(--ux4g-text-neutral-secondary)" }}>Foundations</span>
          <span style={{ color: "var(--ux4g-text-primary-default)", fontWeight: 600, borderBottom: "2px solid var(--ux4g-text-primary-default)", paddingBottom: 2 }}>Components</span>
          <span style={{ color: "var(--ux4g-text-neutral-secondary)" }}>Patterns</span>
        </nav>
        <button className="ux4g-btn-primary ux4g-btn-sm">Get started</button>
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, width: 600, background: "#fff", borderRadius: 16, padding: "16px 24px", display: "flex", alignItems: "center", gap: 28, boxShadow: "0 16px 32px -12px rgba(48,28,125,0.4)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 32, height: 32, borderRadius: 8, background: "var(--primary-dark)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontWeight: 800, fontSize: 13 }}>U4</span>
            <span style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontWeight: 800, color: "var(--primary-dark)", fontSize: 16, letterSpacing: "-0.02em" }}>UX4G</span>
          </div>
          <div style={{ display: "flex", gap: 22, flex: 1, justifyContent: "center", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 14 }}>
            <span style={{ color: "var(--primary-dark)", opacity: 0.55 }}>Foundations</span>
            <span style={{ color: "var(--primary-dark)", fontWeight: 700, position: "relative" }}>Components<span style={{ position: "absolute", left: 0, right: 0, bottom: -8, height: 3, background: "var(--amber)", borderRadius: 2 }}></span></span>
            <span style={{ color: "var(--primary-dark)", opacity: 0.55 }}>Patterns</span>
          </div>
          <span style={{ padding: "8px 16px", borderRadius: 999, background: "var(--primary-dark)", color: "#fff", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 13, fontWeight: 600 }}>Sign in</span>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Navbar", navName: "Navbar", group: "Navigation",
    desc: "Top-level navigation with logo, primary nav links, language switch, and search. Sits at the top of every page; sticks on scroll.",
    bannerVariant: "tab", hero: Hero,
    anatomy: [
      { n: 1, label: "Logo / brand mark", token: "ux4g-bg-primary-strong" },
      { n: 2, label: "Wordmark", token: "ux4g-title-s-strong" },
      { n: 3, label: "Primary nav links", token: "ux4g-label-l-default" },
      { n: 4, label: "Active link underline", token: "ux4g-bg-primary-strong" },
      { n: 5, label: "CTA button (Home)", token: "ux4g-btn-primary" },
      { n: 6, label: "Mobile hamburger (≤768px)", token: "ux4g-icon-outlined" },
    ],
    properties: [
      { label: "Density", desc: "Default (44px height) for top nav. Compact (36px) for embedded admin views. Hero (56px) for landing pages.", demos: [
        { label: "Default", wide: true, node: <NB /> },
      ] },
    ],
    scenarios: [
      { title: "Top-level site nav", desc: "Foundations / Components / Patterns links. Active link underlined. CTA on the right to take user home.", stage: <NB /> },
      { title: "Sticky on scroll", desc: "Navbar sticks to viewport top as user scrolls. Background gains a subtle shadow to lift off the page.", stage: <NB /> },
      { title: "Mobile hamburger collapse", desc: "Below 768px, primary nav collapses into a hamburger icon. Tapping opens a Drawer with the full nav.", stage: (<div style={{ width: "100%", maxWidth: 360, background: "#fff", padding: "10px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)" }}><div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ width: 28, height: 28, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 5, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 11 }}>U4</div><span style={{ fontSize: 13, fontWeight: 700 }}>UX4G</span></div><button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">menu</span></button></div>) },
      { title: "With language switcher", desc: "Right side hosts language toggle (हिन्दी / EN) and a primary CTA. Useful for citizen-facing portals.", stage: (<div style={{ width: "100%", maxWidth: 600, background: "#fff", padding: "12px 20px", display: "flex", alignItems: "center", gap: 24, borderRadius: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)" }}><div style={{ display: "flex", alignItems: "center", gap: 8 }}><div style={{ width: 32, height: 32, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12 }}>U4</div><span style={{ fontSize: 14, fontWeight: 700 }}>UX4G</span></div><div style={{ flex: 1 }}></div><div style={{ display: "flex", alignItems: "center", gap: 4, padding: 4, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4 }}><span style={{ padding: "2px 6px", fontSize: 12, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 2 }}>EN</span><span style={{ padding: "2px 6px", fontSize: 12 }}>हि</span></div><button className="ux4g-btn-primary ux4g-btn-sm">Sign in</button></div>) },
    ],
    responsive: [
      { title: "Hamburger menu below 768px", desc: "Primary nav collapses into hamburger icon. Drawer opens from left with nav items.", sample: <NB /> },
      { title: "Sticky to viewport on scroll", desc: "Navbar always visible as user scrolls long pages. Gains subtle shadow when not at top.", sample: <NB /> },
      { title: "CTA shrinks but stays visible", desc: "Primary CTA on the right scales down on mobile (SM size) but never hides - users need access to the main action.", sample: <NB /> },
    ],
    practices: [
      { do: { stage: <NB />, rule: "Highlight active page clearly - users always know where they are." }, dont: { stage: (<div style={{ display: "flex", gap: 16, fontSize: 13 }}><span>A</span><span>B</span><span>C</span></div>), rule: "No active indicator means users lose orientation on deep pages." } },
      { do: { stage: <NB />, rule: "Keep top-level items to 3-5. Beyond that, group under a Mega Menu or Drawer." }, dont: { stage: <NB />, rule: "10 top-level items in the navbar overflows and confuses." } },
    ],
    accessibility: [
      { t: "Use <nav> with aria-label='Primary'.", b: "Top-level nav uses `<nav aria-label='Primary'>`. Screen readers can jump straight to it via landmark navigation." },
      { t: "Active page uses aria-current.", b: "Active link marked with `aria-current='page'`. Visual underline reinforces but isn't the only cue." },
      { t: "Skip-to-main-content link.", b: "First focusable element is 'Skip to main content' link. Keyboard users bypass nav after first page." },
      { t: "Logo links to homepage.", b: "Logo / brand mark is a link to `/`. Universal convention - users expect this." },
      { t: "Hamburger button has aria-expanded.", b: "Mobile hamburger uses `aria-expanded='true|false'` to reflect Drawer state." },
    ],
    related: [
      { name: "Breadcrumb", note: "Below Navbar, Breadcrumb shows position within section. Navbar is site-level; Breadcrumb is page-level.", preview: (<nav className="ux4g-breadcrumb ux4g-breadcrumb-divider"><ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: 6 }}><li>Home</li><li>/</li><li>Components</li></ol></nav>) },
      { name: "Drawer", note: "Mobile hamburger menu opens a Drawer with the full nav. Slides from left edge.", preview: (<div style={{ width: 140, height: 100, background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, padding: 10 }}><div style={{ fontWeight: 600, fontSize: 12, marginBottom: 6 }}>Menu</div></div>) },
      { name: "Tab", note: "Sub-page navigation within a single page uses Tab. Navbar switches major sections; Tab switches sub-views.", preview: (<div className="ux4g-tab ux4g-tab-underline ux4g-tab-sm"><ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}><li className="ux4g-tab-item is-active" role="tab">Overview</li><li className="ux4g-tab-item" role="tab">Docs</li></ul></div>) },
      { name: "Link", note: "Each nav item is a Link with active / hover / focus states. Inherits Link styles.", preview: <a className="ux4g-text-link-md" href="#" onClick={(e) => e.preventDefault()}>Foundations</a> },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
