/* global React */
(function () {
  function Ft() {
    return (
      <div style={{ width: "100%", maxWidth: 700, background: "var(--primary-dark, #1c1042)", color: "#fff", padding: "32px 24px", borderRadius: 12 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginBottom: 24 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>UX4G</div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>A Government of India Initiative</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em", marginBottom: 4 }}>RESOURCES</div>
            <div style={{ fontSize: 13 }}>Documentation</div>
            <div style={{ fontSize: 13 }}>Storybook</div>
            <div style={{ fontSize: 13 }}>Releases</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em", marginBottom: 4 }}>LEGAL</div>
            <div style={{ fontSize: 13 }}>Privacy</div>
            <div style={{ fontSize: 13 }}>Terms</div>
            <div style={{ fontSize: 13 }}>DPDP Act 2023</div>
          </div>
        </div>
        <div style={{ height: 4, background: "linear-gradient(90deg, #FF9933 33%, #fff 33%, #fff 66%, #138808 66%)", borderRadius: 2, marginBottom: 12 }}></div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>© 2026 · NEGD · MeitY</div>
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, width: 600, background: "var(--primary-dark)", borderRadius: 16, padding: 28, color: "#fff", display: "flex", flexDirection: "column", gap: 18, boxShadow: "0 16px 32px -12px rgba(0,0,0,0.4)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
            <div>
              <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontWeight: 800, fontSize: 22, letterSpacing: "-0.03em" }}>UX4G</div>
              <div style={{ fontSize: 11, opacity: 0.6, marginTop: 4, letterSpacing: "0.06em" }}>A GOVERNMENT OF INDIA INITIATIVE</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 11, color: "rgba(255,255,255,0.6)", textAlign: "right" }}>
              <span>About</span>
              <span>Helpline</span>
              <span>Privacy</span>
            </div>
          </div>
          <div style={{ display: "flex", height: 3, borderRadius: 2, overflow: "hidden" }}>
            <span style={{ flex: 1, background: "#FF9933" }}></span>
            <span style={{ flex: 1, background: "#FFFFFF" }}></span>
            <span style={{ flex: 1, background: "#138808" }}></span>
          </div>
          <div style={{ fontSize: 10, opacity: 0.5, letterSpacing: "0.05em" }}>© 2026 · NeGD · MeitY</div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Footer", navName: "Footer", group: "Utility",
    desc: "Statutory disclosures, helplines, and the tricolour bar. Every page ends here. Always includes copyright, government identity, and key resources.",
    bannerVariant: "divider", hero: Hero,
    anatomy: [
      { n: 1, label: "Brand mark", token: "ux4g-title-s-strong" },
      { n: 2, label: "Government tagline", token: "ux4g-body-xs-default" },
      { n: 3, label: "Section headers", token: "ux4g-label-s-strong" },
      { n: 4, label: "Link list", token: "ux4g-text-link-default" },
      { n: 5, label: "Tricolour bar", token: "#FF9933 / #fff / #138808" },
      { n: 6, label: "Copyright line", token: "ux4g-body-xs-default" },
      { n: 7, label: "Dark background", token: "var(--primary-dark)" },
    ],
    properties: [
      { label: "Layout", desc: "3-column on desktop. 2-column on tablet. 1-column stacked on mobile. Brand always first.", demos: [
        { label: "3-column desktop", wide: true, node: <Ft /> },
      ] },
    ],
    scenarios: [
      { title: "Standard public service footer", desc: "3 columns - brand + resources + legal. Tricolour bar above copyright reinforces government identity.", stage: <Ft /> },
      { title: "Sticky helpline at bottom", desc: "On citizen service pages, footer includes a sticky helpline 1800-... and email at the very bottom.", stage: <Ft /> },
      { title: "Compact admin footer", desc: "Admin / dashboard pages use a single-line footer with copyright + version + build date.", stage: (<div style={{ width: "100%", padding: 12, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 6, fontSize: 11, display: "flex", justifyContent: "space-between", color: "var(--ux4g-text-neutral-secondary)" }}><span>© 2026 NEGD / MeitY</span><span>UX4G v3.0 · Apr 2026</span></div>) },
    ],
    responsive: [
      { title: "Columns stack on mobile", desc: "Below 768px, columns stack vertically. Brand on top, then resource columns. Tricolour and copyright last.", sample: <Ft /> },
      { title: "Reduced padding on small screens", desc: "Padding shrinks from 32px to 16px below 480px. Maintains breathing room without dominating the viewport.", sample: <Ft /> },
    ],
    practices: [
      { do: { stage: <Ft />, rule: "Always include the tricolour bar - reinforces government identity." }, dont: { stage: (<div style={{ padding: 16, background: "var(--primary-dark)", color: "#fff", borderRadius: 6 }}>© 2026 UX4G</div>), rule: "Bare copyright line misses the chance to anchor government identity." } },
      { do: { stage: <Ft />, rule: "Group links into clear categories - resources, legal, contact." }, dont: { stage: (<div style={{ padding: 16, background: "var(--primary-dark)", color: "#fff", fontSize: 12 }}>{"link · link · link · link · link · link · link"}</div>), rule: "Flat link list of 10+ items is hard to scan." } },
    ],
    accessibility: [
      { t: "Use <footer> landmark.", b: "Wrap in `<footer>` for landmark navigation. Screen readers can jump straight to it." },
      { t: "Each column has a heading.", b: "'RESOURCES', 'LEGAL' are `<h3>` headings. AT users can navigate by heading within the footer." },
      { t: "Tricolour bar is decorative.", b: "Visual tricolour bar uses `role='presentation'` or `aria-hidden='true'`. Screen readers skip - it's not informational." },
      { t: "Helpline numbers are tel: links.", b: "Phone numbers wrapped in `<a href='tel:...'>` so mobile users can tap to call." },
      { t: "Contrast on dark background meets 4.5:1.", b: "Link text on dark footer background uses opacity adjustments to maintain WCAG AA contrast." },
    ],
    related: [
      { name: "Navbar", note: "Navbar at the top, Footer at the bottom. Together they bookend every page consistently.", preview: (<div style={{ width: "100%", maxWidth: 240, background: "#fff", padding: "8px 12px", display: "flex", alignItems: "center", gap: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6 }}><span style={{ fontSize: 13, fontWeight: 700 }}>UX4G</span></div>) },
      { name: "Social Links", note: "Footer often includes Social Links - X, LinkedIn, YouTube icons for the department's official accounts.", preview: (<div style={{ display: "flex", gap: 8 }}>{["X","in","G","▶"].map((s, i) => <span key={i} style={{ width: 24, height: 24, borderRadius: 4, background: "var(--ux4g-bg-neutral-soft)", color: "var(--ux4g-text-neutral-secondary)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11 }}>{s}</span>)}</div>) },
      { name: "Link", note: "Each footer item is a Link. White on dark footer; standard underline on hover.", preview: <a className="ux4g-text-link-md" href="#" onClick={(e) => e.preventDefault()}>Privacy policy</a> },
      { name: "Divider", note: "Optional Divider separates link columns from copyright row. Subtle 1px line in low-opacity white.", preview: (<div style={{ width: 100, height: 1, background: "var(--ux4g-border-color-neutral-subtle)" }}></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
