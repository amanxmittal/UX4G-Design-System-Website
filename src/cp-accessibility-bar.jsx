/* global React */
(function () {
  function Bar() {
    return (
      <div style={{ display: "flex", gap: 12, padding: 8, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 8 }}>
        <div style={{ display: "flex", gap: 2, padding: 4, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4 }}>
          <span style={{ padding: "2px 6px", fontSize: 12 }}>A−</span>
          <span style={{ padding: "2px 6px", fontSize: 12, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 2 }}>A</span>
          <span style={{ padding: "2px 6px", fontSize: 12 }}>A+</span>
        </div>
        <div style={{ display: "flex", gap: 2, padding: 4, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4 }}>
          <span style={{ padding: "2px 6px", fontSize: 12, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 2 }}>हि</span>
          <span style={{ padding: "2px 6px", fontSize: 12 }}>EN</span>
        </div>
        <div style={{ display: "flex", gap: 2, padding: 4, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4 }}>
          <span style={{ padding: "2px 6px", fontSize: 12 }}>☼</span>
          <span style={{ padding: "2px 6px", fontSize: 12, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 2 }}>☾</span>
        </div>
      </div>
    );
  }
  function Hero() {
    const btn = (label, active) => (
      <span style={{
        padding: "10px 14px", borderRadius: 10,
        background: active ? "var(--amber)" : "rgba(48,28,125,0.06)",
        color: "var(--primary-dark)",
        fontFamily: "var(--ux4g-ff-display, sans-serif)",
        fontWeight: active ? 800 : 600,
        fontSize: 14,
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        minWidth: 44,
      }}>{label}</span>
    );
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, background: "#fff", borderRadius: 16, padding: "16px 18px", display: "flex", alignItems: "center", gap: 18, boxShadow: "0 16px 32px -12px rgba(48,28,125,0.4)" }}>
          <div style={{ display: "flex", gap: 6 }}>
            {btn("A−", false)}
            {btn("A", true)}
            {btn("A+", false)}
          </div>
          <div style={{ width: 1, height: 32, background: "rgba(48,28,125,0.12)" }}></div>
          <div style={{ display: "flex", gap: 6 }}>
            {btn("हि", false)}
            {btn("EN", true)}
          </div>
          <div style={{ width: 1, height: 32, background: "rgba(48,28,125,0.12)" }}></div>
          <div style={{ display: "flex", gap: 6 }}>
            {btn("☼", true)}
            {btn("☾", false)}
          </div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Accessibility Bar", navName: "Accessibility Bar", group: "Utility",
    desc: "Always-on toolbar surfacing text size, language, and contrast controls. Sits at the top of every page so users can self-serve accessibility.",
    bannerVariant: "tab", hero: Hero,
    anatomy: [
      { n: 1, label: "Bar container", token: "ux4g-bg-neutral-soft" },
      { n: 2, label: "Control group", token: "ux4g-border-color-neutral-subtle" },
      { n: 3, label: "Active toggle", token: "ux4g-bg-primary-strong" },
      { n: 4, label: "Icon / label", token: "ux4g-icon-outlined" },
      { n: 5, label: "Separator", token: "ux4g-bg-neutral-soft" },
    ],
    properties: [
      { label: "Control groups", desc: "Text size (A− / A / A+). Language (हि / EN). Theme (☼ / ☾). Each is a segmented control with one active state.", demos: [
        { label: "All controls", wide: true, node: <Bar /> },
      ] },
    ],
    scenarios: [
      { title: "Sticky to top across pages", desc: "Accessibility Bar persists on every page, always above the navbar. Critical for users who configure once and forget.", stage: <Bar /> },
      { title: "Settings persist via localStorage", desc: "Once a user sets larger text or dark mode, preference saves locally and applies on every visit.", stage: <Bar /> },
      { title: "Mobile collapses to single icon", desc: "Below 480px, the bar collapses to an accessibility icon that opens a sheet with all controls.", stage: <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">accessibility</span></button> },
    ],
    responsive: [
      { title: "Collapses to accessibility icon on mobile", desc: "Below 480px, bar becomes a single icon button. Tapping opens a bottom sheet with all controls.", sample: <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">accessibility</span></button> },
      { title: "Tap targets stay 44 × 44px", desc: "Each control inside meets the tap target floor. Critical for users with motor limitations.", sample: <Bar /> },
    ],
    practices: [
      { do: { stage: <Bar />, rule: "Always visible at top - users need quick access without hunting." }, dont: { stage: <button className="ux4g-icon-btn ux4g-icon-btn-md"><span className="ux4g-icon-outlined">accessibility</span></button>, rule: "Hiding behind a settings menu defeats the purpose - users won't dig for it." } },
      { do: { stage: <Bar />, rule: "Persist settings in localStorage so users configure once." }, dont: { stage: <Bar />, rule: "Reset every session forces users to re-set their preferences on every visit." } },
    ],
    accessibility: [
      { t: "Use role='toolbar' with aria-label.", b: "Wrap in `<div role='toolbar' aria-label='Accessibility controls'>`. Tells AT this is a grouped set of related controls." },
      { t: "Each segmented control uses radio semantics.", b: "Text-size group is `role='radiogroup'`; each size is `role='radio'`. Arrow keys move between options." },
      { t: "State changes announce via aria-live.", b: "When user picks 'A+', announce 'Text size now large' in `aria-live='polite'`. Confirms the action took effect." },
      { t: "Settings persist across sessions.", b: "Use localStorage to remember settings. Users with persistent needs (low vision, screen reader) don't reset on every visit." },
    ],
    related: [
      { name: "Switch / Toggle", note: "Individual A11y settings could use Toggle inside a settings page. Bar provides quick top-level access.", preview: (<label className="ux4g-switch"><input type="checkbox" className="ux4g-switch-input" defaultChecked readOnly /><div className="ux4g-switch-control"><div className="ux4g-switch-track"><div className="ux4g-switch-thumb"></div></div></div></label>) },
      { name: "Chip Group", note: "Text size segmented control is essentially a Chip Group with single-select behaviour.", preview: (<div style={{ display: "flex", gap: 4 }}><span className="ux4g-filter-chip-md">A−</span><span className="ux4g-filter-chip-md active">A</span><span className="ux4g-filter-chip-md">A+</span></div>) },
      { name: "Tooltip", note: "Each icon button in the bar carries a Tooltip explaining its purpose for sighted users.", preview: (<div className="ux4g-tooltip ux4g-tooltip-s show" style={{ position: "relative", transform: "none" }}>Increase text size</div>) },
      { name: "Dropdown Menu", note: "Language selector with many options uses Dropdown inside the bar instead of segmented chips.", preview: (<div className="ux4g-dropdown" style={{ width: 100 }}><div className="ux4g-dropdown-control"><div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text">हि</span></div><span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span></div></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
