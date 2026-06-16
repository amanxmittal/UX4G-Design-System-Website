/* global React */
(function () {
  function SL({ size = "md", variant = "tonal" }) {
    const sz = { sm: 28, md: 36, lg: 44 }[size];
    const labels = [{ s: "X", lbl: "X (Twitter)" }, { s: "in", lbl: "LinkedIn" }, { s: "G", lbl: "Google" }, { s: "▶", lbl: "YouTube" }];
    return (
      <div style={{ display: "flex", gap: 8 }}>
        {labels.map((l, i) => (
          <a key={i} href="#" onClick={(e) => e.preventDefault()} aria-label={l.lbl} style={{ width: sz, height: sz, borderRadius: variant === "round" ? "50%" : 6, background: variant === "filled" ? "var(--ux4g-bg-primary-strong)" : "var(--ux4g-bg-neutral-soft)", color: variant === "filled" ? "#fff" : "var(--ux4g-text-neutral-primary)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>{l.s}</a>
        ))}
      </div>
    );
  }
  function Hero() {
    const ic = (label, color) => (
      <div style={{ width: 84, height: 84, borderRadius: 18, background: color, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontWeight: 800, fontSize: 32, boxShadow: "0 12px 28px -8px rgba(0,0,0,0.35)" }}>{label}</div>
    );
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, display: "flex", gap: 16 }}>
          {ic("X", "#0E0E12")}
          {ic("in", "#0A66C2")}
          {ic("ⓕ", "#1877F2")}
          {ic("▶", "#FF0000")}
          {ic("@", "var(--amber)")}
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Social Links", navName: "Social Links", group: "Utility",
    desc: "Row of social media icons (X, LinkedIn, YouTube) linking to the department's official accounts. Sits in the footer or contact section.",
    bannerVariant: "avatar", hero: Hero,
    anatomy: [
      { n: 1, label: "Icon container", token: "ux4g-bg-neutral-soft" },
      { n: 2, label: "Social icon glyph", token: "ux4g-icon-outlined" },
      { n: 3, label: "External-link semantics", token: "target=_blank rel=noopener" },
      { n: 4, label: "Hover state", token: "ux4g-bg-primary-subtle" },
      { n: 5, label: "Focus ring", token: "ux4g-border-color-primary-strong" },
    ],
    properties: [
      { label: "Size", desc: "SM for compact footer rows. MD is default. LG for hero footer sections.", demos: [
        { label: "Small", node: <SL size="sm" /> },
        { label: "Medium", node: <SL size="md" /> },
        { label: "Large", node: <SL size="lg" /> },
      ] },
      { label: "Variant", desc: "Tonal (subtle background). Filled (primary). Round (circular shape) for hero contexts.", demos: [
        { label: "Tonal", node: <SL variant="tonal" /> },
        { label: "Round filled", node: <SL variant="filled" /> },
      ] },
    ],
    scenarios: [
      { title: "Footer social row", desc: "Row of 4-5 official social accounts in the footer. Each opens in a new tab with rel=noopener.", stage: <SL /> },
      { title: "Contact card with socials", desc: "Department contact section pairs a phone/email block with social icons for verified channels.", stage: (<div style={{ width: "100%", padding: 16, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8 }}><div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Find us</div><div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)", marginBottom: 12 }}>1800-XXX-XXXX · ux4g@gov.in</div><SL /></div>) },
      { title: "Embed in newsletter signup", desc: "Below a 'Subscribe to updates' form, surface social channels for users who prefer to follow there.", stage: (<div style={{ width: "100%", padding: 12, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 8 }}><div style={{ fontSize: 13, marginBottom: 8 }}>Prefer social?</div><SL size="sm" /></div>) },
    ],
    responsive: [
      { title: "Wraps on narrow viewports", desc: "Icon row wraps to a second line below 320px so they don't crowd. Maintains 44 × 44px tap target.", sample: <SL /> },
      { title: "Tap targets stay 44 × 44px", desc: "Even SM icons have invisible padding for tap target. Critical for thumb-first mobile.", sample: <SL size="sm" /> },
    ],
    practices: [
      { do: { stage: <SL />, rule: "Use 4-5 official accounts. Each must be verified to avoid impersonation risks." }, dont: { stage: (<div style={{ display: "flex", gap: 6 }}>{[..."XLYWFP12345"].map((s, i) => <span key={i} style={{ width: 32, height: 32, borderRadius: 4, background: "var(--ux4g-bg-neutral-soft)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12 }}>{s}</span>)}</div>), rule: "12 social icons is overwhelming - users pick none." } },
      { do: { stage: <SL />, rule: "Each icon links to a real, active account." }, dont: { stage: <SL />, rule: "Linking to dead accounts (404) is worse than not linking at all." } },
    ],
    accessibility: [
      { t: "Each icon has aria-label.", b: "X icon gets `aria-label='X (Twitter)'`. Icon alone fails screen readers; descriptive label gives meaning." },
      { t: "External links use rel='noopener'.", b: "All external social links use `target='_blank' rel='noopener noreferrer'`. Security and accessibility best practice." },
      { t: "Tap targets stay 44 × 44px.", b: "Even small icons have invisible padding for full tap area." },
      { t: "Focus ring is always visible.", b: "Keyboard focus shows a 2px outline on the icon container. Never suppress :focus-visible." },
      { t: "Group has nav landmark.", b: "Wrap social row in `<nav aria-label='Social media'>`. Screen readers can jump straight to it." },
    ],
    related: [
      { name: "Footer", note: "Social Links most commonly appear in the Footer. Provides verified contact channels.", preview: (<div style={{ width: "100%", padding: 12, background: "var(--primary-dark, #1c1042)", color: "#fff", borderRadius: 6, fontSize: 11 }}>Footer with social links</div>) },
      { name: "Icon Button", note: "Each social link is essentially an Icon Button with external link semantics. Inherits same tap target and focus rules.", preview: (<button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">share</span></button>) },
      { name: "Link", note: "Text alternative to social icons - 'Find us on X / LinkedIn / YouTube' as inline Link list.", preview: (<a className="ux4g-text-link-md" href="#" onClick={(e) => e.preventDefault()}>Find us on X</a>) },
      { name: "Tooltip", note: "Each social icon may carry a Tooltip on hover showing the account handle (@ux4g_official).", preview: (<div className="ux4g-tooltip ux4g-tooltip-s show" style={{ position: "relative", transform: "none" }}>@ux4g_official</div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
