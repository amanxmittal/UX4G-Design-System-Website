/* global React */
(function () {
  function SP({ steps = [{ s: "done", l: "Filed" }, { s: "done", l: "Verified" }, { s: "active", l: "In review" }, { s: "", l: "Issued" }] }) {
    return (
      <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
        {steps.map((step, i) => (
          <React.Fragment key={i}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, flex: "0 0 auto" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: step.s === "done" ? "var(--ux4g-bg-success-strong)" : step.s === "active" ? "#fff" : "var(--ux4g-bg-neutral-soft)", color: step.s === "done" ? "#fff" : "var(--ux4g-text-neutral-secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, border: step.s === "active" ? "2px solid var(--ux4g-border-color-primary-strong)" : "none", boxShadow: step.s === "active" ? "0 0 0 4px rgba(74, 43, 194, 0.2)" : "none" }}>{step.s === "done" ? "✓" : i + 1}</div>
              <span style={{ fontSize: 11, color: step.s === "active" ? "var(--ux4g-text-primary-default)" : "var(--ux4g-text-neutral-secondary)", fontWeight: step.s === "active" ? 600 : 400 }}>{step.l}</span>
            </div>
            {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: step.s === "done" ? "var(--ux4g-bg-success-strong)" : "var(--ux4g-bg-neutral-soft)", margin: "0 8px", marginBottom: 24 }}></div>}
          </React.Fragment>
        ))}
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-step-mock" style={{ width: 620 }}>
          <div className="hb-step-node done">1</div>
          <div className="hb-step-line done"></div>
          <div className="hb-step-node done">2</div>
          <div className="hb-step-line done"></div>
          <div className="hb-step-node current">3</div>
          <div className="hb-step-line"></div>
          <div className="hb-step-node pending">4</div>
        </div>
        <div style={{ position: "absolute", top: "calc(50% + 50px)", left: "50%", transform: "translateX(-50%)", zIndex: 4, display: "flex", gap: 100, fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
          <span>Filed</span>
          <span>Verified</span>
          <span style={{ color: "var(--amber)", fontWeight: 700 }}>In review</span>
          <span style={{ opacity: 0.5 }}>Issued</span>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Status Pipeline", navName: "Status Pipeline", group: "Data Display",
    desc: "Horizontal stepper for application status - Filed → Verified → Issued. Read-only visual showing where the citizen is in the lifecycle.",
    bannerVariant: "stepper", hero: Hero,
    anatomy: [
      { n: 1, label: "Step node", token: "ux4g-bg-success-strong" },
      { n: 2, label: "Current step ring", token: "ux4g-border-color-primary-strong" },
      { n: 3, label: "Connector line", token: "ux4g-bg-success-strong" },
      { n: 4, label: "Step label", token: "ux4g-label-m-default" },
      { n: 5, label: "Pending step", token: "ux4g-bg-neutral-soft" },
    ],
    properties: [
      { label: "Status state", desc: "Done (filled green + check). Active (ring around number). Pending (outline only).", demos: [
        { label: "Mid-pipeline", wide: true, node: <SP /> },
      ] },
    ],
    scenarios: [
      { title: "Application lifecycle", desc: "Citizen-facing pipeline showing where their application is. Each stage clearly labelled with completion status.", stage: <SP steps={[{ s: "done", l: "Filed" }, { s: "done", l: "Verified" }, { s: "active", l: "In review" }, { s: "", l: "Issued" }]} /> },
      { title: "Quick scan in card", desc: "Compact pipeline inside an application card. Users see status without clicking through.", stage: <SP steps={[{ s: "done", l: "1" }, { s: "active", l: "2" }, { s: "", l: "3" }, { s: "", l: "4" }]} /> },
      { title: "Branching - failed stage", desc: "If a stage fails (verification rejected), mark with error indicator and surface recovery action below.", stage: (<div style={{ width: "100%" }}><SP steps={[{ s: "done", l: "Filed" }, { s: "active", l: "Rejected" }, { s: "", l: "Issued" }]} /><div style={{ fontSize: 12, color: "var(--ux4g-text-error-default)", marginTop: 8 }}>Address proof rejected - upload new one</div></div>) },
      { title: "Resolved - all stages done", desc: "Completed lifecycle shows all stages green + check. Final state.", stage: <SP steps={[{ s: "done", l: "Filed" }, { s: "done", l: "Verified" }, { s: "done", l: "Issued" }]} /> },
    ],
    responsive: [
      { title: "Horizontal scroll on mobile", desc: "Wide pipelines with 5+ stages scroll horizontally below 480px. Active stage centres.", sample: <SP /> },
      { title: "Vertical option for tall layouts", desc: "Detail pages may use vertical pipeline. Each stage on its own line with timestamp.", sample: <SP /> },
    ],
    practices: [
      { do: { stage: <SP />, rule: "Show stage labels - users understand exactly where they are." }, dont: { stage: <SP steps={[{ s: "done", l: "" }, { s: "active", l: "" }, { s: "", l: "" }]} />, rule: "Unlabelled nodes leave users guessing what each stage means." } },
      { do: { stage: <SP />, rule: "Use Status Pipeline for read-only display of progress." }, dont: { stage: <SP />, rule: "Don't use for interactive form steppers - use Stepper component instead." } },
    ],
    accessibility: [
      { t: "Use ordered list with aria-current.", b: "Pipeline is `<ol>` with current step having `aria-current='step'`. Screen readers announce position." },
      { t: "Status labels are explicit text.", b: "'Filed', 'Verified', 'Issued' - clear words. No icons-only representation." },
      { t: "Failure state announces clearly.", b: "Failed stage uses `aria-invalid='true'` with linked error message via `aria-describedby`." },
      { t: "Live region for stage transitions.", b: "When application advances stages, announce 'Now in review' in `aria-live='polite'`." },
    ],
    related: [
      { name: "Stepper", note: "Status Pipeline is the read-only display sibling of Stepper. Stepper drives user input; Pipeline shows process state.", preview: (<ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", padding: 0, margin: 0 }}><li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done"><span className="ux4g-stepper-head-icon">1</span></li><li className="ux4g-stepper-step ux4g-stepper-completed"><span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span></span></li></ul>) },
      { name: "Journey Timeline", note: "For vertical chronological log of all events in a case, use Journey Timeline. Pipeline shows current stage; Timeline shows every event.", preview: (<div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12 }}><div>● Filed</div><div>● Verified</div></div>) },
      { name: "SLA Progress Indicator", note: "Pair Pipeline with SLA Progress - 'In review' stage shown with 18 days remaining.", preview: (<div style={{ width: "100%" }}><div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3 }}><div style={{ width: "68%", height: "100%", background: "var(--ux4g-bg-success-strong)", borderRadius: 3 }}></div></div></div>) },
      { name: "Tag", note: "Current stage often shown as Tag in lists - 'Pipeline: In review' is a compact summary.", preview: <span className="ux4g-tag-tonal-primary">In review</span> },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
