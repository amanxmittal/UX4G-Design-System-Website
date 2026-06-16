/* global React */
(function () {
  function ET() {
    return (
      <div style={{ width: "100%", fontSize: 13 }}>
        <div style={{ padding: 10, fontWeight: 600 }}>Citizen complaint</div>
        <div style={{ marginLeft: 16, padding: 8, color: "var(--ux4g-text-neutral-secondary)", borderLeft: "2px solid var(--ux4g-bg-neutral-soft)" }}><span style={{ color: "var(--ux4g-text-primary-default)", fontWeight: 600 }}>→ SDM office (Lv. 1) - Current</span></div>
        <div style={{ marginLeft: 32, padding: 8, color: "var(--ux4g-text-neutral-tertiary)", borderLeft: "2px solid var(--ux4g-bg-neutral-soft)" }}>→ DM office (Lv. 2)</div>
        <div style={{ marginLeft: 48, padding: 8, color: "var(--ux4g-text-neutral-tertiary)", borderLeft: "2px solid var(--ux4g-bg-neutral-soft)" }}>→ Commissioner (Lv. 3)</div>
      </div>
    );
  }
  function Hero() {
    const lvl = (label, level, current) => (
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginLeft: level * 32 }}>
        <span style={{ width: 38, height: 38, borderRadius: "50%", background: current ? "var(--amber)" : level === 0 ? "#fff" : "rgba(255,255,255,0.12)", border: level > 0 && !current ? "2px solid rgba(255,255,255,0.25)" : "none", color: "var(--primary-dark)", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>L{level + 1}</span>
        <span style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 15, fontWeight: current ? 700 : 500, color: current ? "var(--amber)" : level === 0 ? "#fff" : "rgba(255,255,255,0.65)" }}>{label}</span>
      </div>
    );
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, display: "flex", flexDirection: "column", gap: 18, minWidth: 360 }}>
          {lvl("Citizen complaint", 0, false)}
          {lvl("SDM office", 1, true)}
          {lvl("DM office", 2, false)}
          {lvl("Commissioner", 3, false)}
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Escalation Tree", navName: "Escalation Tree", group: "Data Display",
    desc: "Hierarchical view of grievance escalation levels - SDM → DM → Commissioner. Shows where the complaint currently sits and what's next.",
    bannerVariant: "stepper", hero: Hero,
    anatomy: [
      { n: 1, label: "Root node", token: "ux4g-body-m-strong" },
      { n: 2, label: "Tree branch", token: "ux4g-border-color-neutral-subtle" },
      { n: 3, label: "Current level", token: "ux4g-text-primary-default" },
      { n: 4, label: "Pending escalation", token: "ux4g-text-neutral-tertiary" },
      { n: 5, label: "Past resolved", token: "ux4g-text-neutral-secondary" },
    ],
    properties: [
      { label: "Layout", desc: "Standard 3-level RTS Act tree (SDM → DM → Commissioner). Custom trees for departmental escalations.", demos: [
        { label: "RTS Act", wide: true, node: <ET /> },
      ] },
    ],
    scenarios: [
      { title: "Grievance escalation path", desc: "Shows where a complaint currently sits in the RTS Act escalation tree. User can request escalation if SLA breached.", stage: <ET /> },
      { title: "Departmental routing", desc: "Show which department / officer the case has reached. Each level shows assigned officer name.", stage: <ET /> },
      { title: "Escalation requested", desc: "User taps 'Escalate to next level' - shows confirmation Modal then triggers escalation up the tree.", stage: <ET /> },
    ],
    responsive: [
      { title: "Indentation reduces on mobile", desc: "Below 480px, indentation collapses to keep nested levels readable on narrow screens.", sample: <ET /> },
    ],
    practices: [
      { do: { stage: <ET />, rule: "Mark current level clearly - users know where their case is right now." }, dont: { stage: <ET />, rule: "Tree without 'current' marker fails its primary purpose." } },
    ],
    accessibility: [
      { t: "Use role='tree' with role='treeitem'.", b: "Tree wrapper is `role='tree'`; each level is `role='treeitem' aria-level='1'`. Screen readers announce hierarchy." },
      { t: "Current level uses aria-current.", b: "Current escalation level marked with `aria-current='true'`. Screen readers announce position." },
      { t: "Keyboard arrow navigation.", b: "Up/Down arrows move between levels. Right/Left expand/collapse branches." },
      { t: "Visual depth supplemented with text.", b: "'Level 1', 'Level 2' text labels alongside visual indentation - depth conveyed in two ways." },
    ],
    related: [
      { name: "Status Pipeline", note: "For linear progress (Filed → Verified → Issued), use Status Pipeline. Escalation Tree shows hierarchy; Pipeline shows sequence.", preview: (<ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", padding: 0, margin: 0 }}><li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done"><span className="ux4g-stepper-head-icon">1</span></li><li className="ux4g-stepper-step ux4g-stepper-completed"><span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span></span></li></ul>) },
      { name: "Journey Timeline", note: "Timeline of every event in a case (when escalated, who assigned). Tree shows where; Timeline shows when.", preview: (<div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 12 }}><div>● Filed 14 Apr</div><div>● Escalated 18 Apr</div></div>) },
      { name: "List", note: "Past escalations can be shown as a List of historic actions below the tree.", preview: (<div style={{ display: "flex", flexDirection: "column", gap: 4 }}><div style={{ padding: "6px 10px", fontSize: 13 }}>Escalation 1</div><div style={{ padding: "6px 10px", fontSize: 13 }}>Escalation 2</div></div>) },
      { name: "Button", note: "'Escalate to next level' is a primary action below the tree. Pair with a Dialog to confirm the escalation.", preview: <button className="ux4g-btn-primary ux4g-btn-md">Escalate to DM</button> },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
