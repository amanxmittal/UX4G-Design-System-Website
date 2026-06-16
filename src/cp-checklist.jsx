/* global React */
(function () {
  function Cl({ items }) {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, background: it.checked ? "var(--ux4g-bg-success-subtle)" : "var(--ux4g-bg-neutral-elevated)" }}>
            <span style={{ width: 24, height: 24, borderRadius: "50%", background: it.checked ? "var(--ux4g-bg-success-strong)" : "var(--ux4g-bg-neutral-soft)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, flexShrink: 0 }}>{it.checked ? "✓" : i + 1}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{it.title}</div>
              {it.hint && <div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)" }}>{it.hint}</div>}
            </div>
            {!it.checked && it.action && <button className="ux4g-btn-outline-primary ux4g-btn-sm">{it.action}</button>}
          </div>
        ))}
      </div>
    );
  }
  function Hero() {
    const row = (label, done) => (
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 22px", borderBottom: "1px solid rgba(48,28,125,0.08)" }}>
        <span style={{
          width: 22, height: 22, borderRadius: 6,
          background: done ? "var(--amber)" : "transparent",
          border: done ? "none" : "2px solid rgba(48,28,125,0.3)",
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          color: "var(--primary-dark)", fontWeight: 800, fontSize: 12, flexShrink: 0,
        }}>{done ? "✓" : ""}</span>
        <span style={{ flex: 1, fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 15, color: "var(--primary-dark)", fontWeight: done ? 500 : 600, textDecoration: done ? "line-through" : "none", opacity: done ? 0.5 : 1 }}>{label}</span>
        {done && <span style={{ fontSize: 11, color: "#16a34a", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontWeight: 700, letterSpacing: "0.06em" }}>DONE</span>}
      </div>
    );
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, width: 480, background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 16px 32px -12px rgba(48,28,125,0.4)" }}>
          {row("Aadhaar verified", true)}
          {row("Address proof uploaded", true)}
          {row("Photograph attached", true)}
          {row("Self-declaration form", false)}
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Checklist", navName: "Checklist", group: "Data Display",
    desc: "Required-documents view with completion state and inline action hooks. Specialised Checkbox for the verification flow.",
    bannerVariant: "accordion", hero: Hero,
    anatomy: [
      { n: 1, label: "Container", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Status icon", token: "ux4g-bg-success-strong" },
      { n: 3, label: "Item title", token: "ux4g-body-m-strong" },
      { n: 4, label: "Hint text", token: "ux4g-body-xs-default" },
      { n: 5, label: "Inline action", token: "ux4g-btn-outline-primary" },
      { n: 6, label: "Completed state", token: "ux4g-bg-success-subtle" },
    ],
    properties: [
      { label: "State per item", desc: "Pending (numbered, with action button). Done (green check, no action). Items disabled when prerequisite not met.", demos: [
        { label: "Pending + done mix", wide: true, node: <Cl items={[{ checked: true, title: "Aadhaar verified", hint: "Verified on 14 Apr" }, { checked: true, title: "PAN verified" }, { checked: false, title: "Address proof", hint: "Upload utility bill or rent agreement", action: "Upload" }]} /> },
      ] },
    ],
    scenarios: [
      { title: "Required documents pre-flight", desc: "Before starting application, citizens see what they need. Items they can complete in-line get upload buttons.", stage: <Cl items={[{ checked: true, title: "Aadhaar" }, { checked: false, title: "PAN card", action: "Upload" }, { checked: false, title: "Photograph", action: "Upload" }]} /> },
      { title: "Progress through completion", desc: "As user completes each item, it switches to done state. Visual progress without a separate progress bar.", stage: <Cl items={[{ checked: true, title: "Step 1" }, { checked: true, title: "Step 2" }, { checked: false, title: "Step 3 (current)", action: "Start" }]} /> },
      { title: "Conditional checklist", desc: "Some items only appear when others complete. Reveals dependent steps as user progresses.", stage: <Cl items={[{ checked: true, title: "Verify identity" }, { checked: false, title: "Choose payment method", action: "Pick" }, { checked: false, title: "Confirm submission (after payment)", hint: "Enables after payment" }]} /> },
      { title: "All done - ready to submit", desc: "When all items checked, surface a primary Submit action below the checklist.", stage: (<div style={{ width: "100%" }}><Cl items={[{ checked: true, title: "Aadhaar" }, { checked: true, title: "PAN" }, { checked: true, title: "Photo" }]} /><button className="ux4g-btn-primary ux4g-btn-md" style={{ marginTop: 12, width: "100%" }}>Submit application</button></div>) },
    ],
    responsive: [
      { title: "Items stack vertically", desc: "Always vertical - never side-by-side. Scannable scrolling list on every viewport.", sample: <Cl items={[{ checked: true, title: "Item A" }, { checked: false, title: "Item B", action: "Do" }]} /> },
      { title: "Action button collapses on mobile", desc: "Below 480px, action button wraps to a new line below the title to free up horizontal space.", sample: <Cl items={[{ checked: false, title: "Upload your scan", hint: "PDF up to 5MB", action: "Upload" }]} /> },
    ],
    practices: [
      { do: { stage: <Cl items={[{ checked: false, title: "Upload Aadhaar", action: "Upload" }]} />, rule: "Inline action button - users complete the step without leaving the page." }, dont: { stage: <Cl items={[{ checked: false, title: "Upload Aadhaar" }]} />, rule: "No action button forces users to find the upload elsewhere - friction." } },
      { do: { stage: <Cl items={[{ checked: true, title: "Done step" }, { checked: false, title: "Next step", action: "Do" }]} />, rule: "Show progress visually - completed steps look distinct from pending." }, dont: { stage: <Cl items={[{ checked: false, title: "All steps look the same" }]} />, rule: "Uniform appearance loses the sense of progress." } },
    ],
    accessibility: [
      { t: "Use ul/li with checkbox semantics.", b: "List wrapped in `<ul>`. Each item with `role='checkbox' aria-checked='true|false'` for screen-reader state." },
      { t: "Action button has descriptive label.", b: "'Upload PAN' (not just 'Upload'). Out-of-context tab through buttons stays meaningful." },
      { t: "Live region for completion.", b: "When item completes, announce 'PAN uploaded. 2 of 4 done' in `aria-live='polite'`." },
      { t: "Hint text is in aria-describedby.", b: "Format / constraint hint linked to the item via `aria-describedby` so screen readers announce alongside title." },
    ],
    related: [
      { name: "Checkbox", note: "Checklist is a specialised Checkbox pattern for verification flows. Same toggle behaviour, richer presentation.", preview: (<label className="ux4g-checkbox"><input type="checkbox" className="ux4g-checkbox-input" defaultChecked readOnly /><div className="ux4g-checkbox-control"><span className="ux4g-checkmark"></span></div><div className="ux4g-checkbox-content"><div className="ux4g-checkbox-header"><span className="ux4g-checkbox-label">Aadhaar verified</span></div></div></label>) },
      { name: "File Upload", note: "Checklist items often pair with File Upload component for the inline upload action.", preview: (<div style={{ padding: 8, border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, fontSize: 12, textAlign: "center" }}>↑ Upload</div>) },
      { name: "Stepper", note: "For multi-step processes where order matters strictly (Step 1 → 2 → 3), use Stepper. Checklist allows any order.", preview: (<ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", padding: 0, margin: 0 }}><li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done"><span className="ux4g-stepper-head-icon">1</span></li><li className="ux4g-stepper-step ux4g-stepper-completed"><span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span></span></li></ul>) },
      { name: "Progress Indicator", note: "Show overall completion percentage above the checklist (e.g. '2 of 4 done · 50%').", preview: (<div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3 }}><div style={{ width: "50%", height: "100%", background: "var(--ux4g-bg-primary-strong)", borderRadius: 3 }}></div></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
