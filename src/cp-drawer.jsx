/* global React */
(function () {
  function D({ side = "right", width = 320, title, body, actions }) {
    return (
      <div style={{ width, background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, padding: 16, display: "flex", flexDirection: "column", gap: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
        {title && <div style={{ fontWeight: 600, fontSize: 16 }}>{title}</div>}
        {body && <div style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>{body}</div>}
        {actions && <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>{actions}</div>}
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", right: 60, transform: "translateY(-50%)", zIndex: 3, width: 320, height: 320, borderRadius: "16px 0 0 16px", background: "#fff", boxShadow: "-24px 0 60px -12px rgba(48,28,125,0.5)", padding: 24, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 18, fontWeight: 700, color: "var(--primary-dark)" }}>Filters</span>
            <span style={{ width: 24, height: 24, borderRadius: "50%", background: "rgba(48,28,125,0.08)", color: "var(--primary-dark)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 600 }}>×</span>
          </div>
          <div style={{ height: 1, background: "rgba(48,28,125,0.08)" }}></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[1,2,3,4].map(i => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 18, height: 18, borderRadius: 4, background: i === 1 ? "var(--amber)" : "rgba(48,28,125,0.1)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--primary-dark)", fontWeight: 800, fontSize: 11 }}>{i === 1 ? "✓" : ""}</span>
                <div style={{ flex: 1, height: 10, borderRadius: 5, background: "rgba(48,28,125,0.12)", maxWidth: i === 1 ? 200 : 160 - i * 8 }}></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "auto", display: "flex", gap: 8 }}>
            <div style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRadius: 8, border: "1.5px solid rgba(48,28,125,0.2)", color: "var(--primary-dark)", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 13, fontWeight: 600 }}>Reset</div>
            <div style={{ flex: 1, padding: "10px 0", textAlign: "center", borderRadius: 8, background: "var(--primary-dark)", color: "#fff", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 13, fontWeight: 600 }}>Apply</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Drawer",
    navName: "Drawer",
    group: "Navigation",
    desc: "Side-anchored panel for filters, side navigation, and secondary detail. Slides in from the screen edge - less blocking than a Modal.",
    bannerVariant: "modal",
    hero: Hero,
    anatomy: [
      { n: 1, label: "Surface", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Backdrop scrim", token: "rgba(0,0,0,0.4)" },
      { n: 3, label: "Header / title", token: "ux4g-title-m-strong" },
      { n: 4, label: "Body content", token: "ux4g-body-m-default" },
      { n: 5, label: "Close icon", token: "ux4g-icon-outlined" },
      { n: 6, label: "Footer actions", token: "ux4g-padding-m" },
      { n: 7, label: "Elevation", token: "ux4g-elevation-4" },
    ],
    properties: [
      { label: "Anchor side", desc: "Right is default for filters and detail panels. Left for navigation menus. Top / bottom for mobile sheet patterns.", demos: [
        { label: "Right", node: <D side="right" title="Filters" body="Filter content here." actions={<><button className="ux4g-btn-outline-primary ux4g-btn-sm">Reset</button><button className="ux4g-btn-primary ux4g-btn-sm">Apply</button></>} /> },
        { label: "Left (nav)", node: <D side="left" title="Sections" body="Navigation list here." /> },
      ] },
      { label: "Width", desc: "Compact (320px) for filters. Standard (400px) for detail view. Wide (520px) for forms and rich content.", demos: [
        { label: "Compact 320px", node: <D width={320} title="Quick filters" /> },
        { label: "Standard 400px", node: <D width={400} title="Application detail" /> },
      ] },
    ],
    scenarios: [
      { title: "Filter panel", desc: "Drawer from right edge with filter controls. User adjusts filters, taps Apply, results update.", stage: <D title="Filters" body="3 active filters" actions={<><button className="ux4g-btn-outline-primary ux4g-btn-sm">Reset</button><button className="ux4g-btn-primary ux4g-btn-sm">Apply</button></>} /> },
      { title: "Mobile navigation", desc: "Drawer from left edge with main navigation. Triggered by hamburger icon. Backdrop dims the rest.", stage: <D side="left" title="Navigation" body="Home / Services / Documents / Settings" /> },
      { title: "Quick edit form", desc: "Drawer holds a 3-4 field edit form so users don't lose context of the underlying list.", stage: <D title="Edit contact" body="Form fields here" actions={<><button className="ux4g-btn-outline-primary ux4g-btn-sm">Cancel</button><button className="ux4g-btn-primary ux4g-btn-sm">Save</button></>} /> },
      { title: "Detail panel", desc: "Tapping a row in a list opens a Drawer with full details. Doesn't navigate away - just slides in.", stage: <D title="AP-83942" body="Income certificate · Verified · 18 days" /> },
    ],
    responsive: [
      { title: "Full-width below 480px", desc: "On mobile, Drawer spans the entire viewport width. Looks like a regular page replacement.", sample: <D title="Filters" body="Mobile takes full width" /> },
      { title: "Backdrop tap dismisses", desc: "On all viewports, tapping the backdrop closes the Drawer. Confirm before discarding if form is dirty.", sample: <D title="Drawer" body="Tap backdrop to close" /> },
    ],
    practices: [
      { do: { stage: <D title="Filters" body="Apply or Reset" actions={<button className="ux4g-btn-primary ux4g-btn-sm">Apply</button>} />, rule: "Drawer for non-blocking secondary content - lets users see and dismiss easily." }, dont: { stage: <D title="Sign in?" body="Critical confirmation" actions={<button className="ux4g-btn-primary ux4g-btn-sm">Sign in</button>} />, rule: "Don't use Drawer for blocking confirmations - use Modal/Dialog instead." } },
      { do: { stage: <D title="Filters" body="Easy access to dismiss" />, rule: "Always have a clear close button (×) in the top-right corner." }, dont: { stage: <D body="No title or close" />, rule: "Without a close path, users feel trapped." } },
    ],
    accessibility: [
      { t: "Use role='dialog' with aria-modal.", b: "Wrap the Drawer in `role='dialog' aria-modal='true' aria-labelledby='drawer-title'`. Screen readers announce 'dialog'." },
      { t: "Trap focus inside Drawer.", b: "Tab cycles only within the Drawer. Background is `inert` and `aria-hidden`. Critical for keyboard users." },
      { t: "Escape closes the Drawer.", b: "Pressing Escape dismisses, returns focus to the trigger. Required for keyboard accessibility." },
      { t: "Backdrop tap dismisses.", b: "Tapping the backdrop closes the Drawer. Mirror this with Escape for keyboard users." },
      { t: "Focus moves to first focusable element on open.", b: "Don't start focus on the close icon; start on the first meaningful element (title or first input)." },
    ],
    related: [
      { name: "Modal", note: "For blocking confirmations that need centered attention, use Modal. Drawer is less blocking - slides in from edge.", preview: (<div style={{ background: "var(--ux4g-bg-neutral-elevated)", boxShadow: "0 8px 16px rgba(0,0,0,0.08)", borderRadius: 8, padding: 12, maxWidth: 180 }}><div style={{ fontWeight: 600, fontSize: 13 }}>Confirm?</div></div>) },
      { name: "Popover", note: "For small contextual menus anchored to a trigger, use Popover. Drawer is for full-side content.", preview: (<div style={{ padding: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, fontSize: 12, maxWidth: 140 }}>Menu</div>) },
      { name: "Dialog", note: "For destructive confirmations, use Dialog. Drawer is not a confirm dialog.", preview: (<div style={{ padding: 10, borderTop: "3px solid #dc2626", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, fontSize: 12, maxWidth: 180 }}>Delete?</div>) },
      { name: "Tab", note: "For switching between sibling views on the same page, use Tab. Drawer is for sliding in new content.", preview: (<div className="ux4g-tab ux4g-tab-underline ux4g-tab-sm"><ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}><li className="ux4g-tab-item is-active" role="tab">A</li><li className="ux4g-tab-item" role="tab">B</li></ul></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
