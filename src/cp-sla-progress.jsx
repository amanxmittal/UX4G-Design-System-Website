/* global React */
(function () {
  function SLA({ service = "Income certificate", remaining = 18, total = 30, severity }) {
    const pct = (remaining / total) * 100;
    const sev = severity || (pct > 40 ? "success" : pct > 15 ? "warning" : "danger");
    const color = { success: "#16a34a", warning: "#f59e0b", danger: "#dc2626" }[sev];
    return (
      <div style={{ width: "100%", padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
          <span style={{ fontSize: 13, fontWeight: 500 }}>{service}</span>
          <span style={{ fontSize: 12, color, fontWeight: 600 }}>{remaining}d left</span>
        </div>
        <div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3, overflow: "hidden" }}>
          <div style={{ width: pct + "%", height: "100%", background: color, borderRadius: 3 }}></div>
        </div>
        <div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)", marginTop: 4 }}>RTS Act deadline · {total}-day window</div>
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, width: 520, background: "#fff", borderRadius: 16, padding: "24px 28px", display: "flex", flexDirection: "column", gap: 14, boxShadow: "0 16px 32px -12px rgba(48,28,125,0.4)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div>
              <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 11, color: "var(--primary-dark)", opacity: 0.55, letterSpacing: "0.08em", fontWeight: 700 }}>RIGHT-TO-SERVICE SLA</div>
              <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 18, color: "var(--primary-dark)", fontWeight: 700, marginTop: 4 }}>Income certificate</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 28, color: "#16a34a", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1 }}>18d</div>
              <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 11, color: "var(--primary-dark)", opacity: 0.5, marginTop: 2 }}>of 30 days left</div>
            </div>
          </div>
          <div style={{ height: 10, borderRadius: 5, background: "rgba(48,28,125,0.1)", overflow: "hidden", position: "relative" }}>
            <div style={{ height: "100%", width: "60%", background: "linear-gradient(90deg, #16a34a, var(--amber))", borderRadius: 5 }}></div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 11, color: "var(--primary-dark)", opacity: 0.5, letterSpacing: "0.04em" }}>
            <span>FILED 14 APR</span>
            <span>DEADLINE 13 MAY</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "SLA Progress Indicator", navName: "SLA Progress Indicator", group: "Feedback",
    desc: "Right-to-Service Act timer showing time remaining against the statutory deadline. Counts down from issued to resolved; colour shifts as urgency rises.",
    bannerVariant: "spinner", hero: Hero,
    anatomy: [
      { n: 1, label: "Service name", token: "ux4g-body-m-strong" },
      { n: 2, label: "Days remaining", token: "ux4g-label-m-strong" },
      { n: 3, label: "Progress bar", token: "ux4g-bg-success-strong" },
      { n: 4, label: "Statutory window label", token: "ux4g-body-xs-default" },
      { n: 5, label: "Severity colour", token: "success / warning / danger" },
    ],
    properties: [
      { label: "Severity", desc: "Green (>40% remaining), amber (<40%), red (<15%). Automatic shift as days deplete.", demos: [
        { label: "Comfortable", node: <SLA remaining={25} total={30} /> },
        { label: "Approaching", node: <SLA remaining={8} total={30} /> },
        { label: "Critical", node: <SLA remaining={2} total={30} /> },
      ] },
    ],
    scenarios: [
      { title: "Application SLA tracker", desc: "In citizen's dashboard, each open application shows its SLA progress. Green at the start, shifting amber and red as deadline nears.", stage: <SLA service="Income certificate" remaining={18} total={30} /> },
      { title: "Approaching deadline", desc: "When SLA enters amber (<40% remaining), surface as a notification so officer escalates the case.", stage: <SLA service="PMAY-U" remaining={5} total={30} /> },
      { title: "Breach - red urgent", desc: "Once <15% remaining or breached, red state. Pair with notification to assign officer or escalate.", stage: <SLA service="Caste certificate" remaining={1} total={30} /> },
      { title: "Resolved before SLA", desc: "On resolution, show 'Resolved in 12 days of 30'. Closed state, no bar.", stage: (<div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, fontSize: 13 }}><div style={{ fontWeight: 500 }}>Voter ID issued</div><div style={{ color: "#16a34a", fontSize: 12 }}>✓ Resolved in 12 of 30 days</div></div>) },
    ],
    responsive: [
      { title: "Compact on mobile", desc: "Below 480px, label and days-left stack onto separate lines. Bar stays prominent.", sample: <SLA service="Income cert." remaining={18} total={30} /> },
      { title: "List of SLAs scrolls", desc: "Dashboards show multiple SLAs stacked. Each fixed height; container scrolls.", sample: <SLA service="PAN" remaining={4} total={7} /> },
    ],
    practices: [
      { do: { stage: <SLA service="Income cert." remaining={5} total={30} />, rule: "Show RTS Act window so users understand the statutory context." }, dont: { stage: <SLA service="Income cert." remaining={5} total={30} severity="success" />, rule: "Keeping green when only 5/30 days remain misleads - users feel safe but aren't." } },
      { do: { stage: <SLA remaining={2} total={30} />, rule: "Red state at critical urgency triggers action." }, dont: { stage: <SLA remaining={2} total={30} severity="warning" />, rule: "Amber when truly critical fails to convey urgency." } },
    ],
    accessibility: [
      { t: "Use role='progressbar' with aria-valuenow.", b: "Bar uses `role='progressbar' aria-valuenow='18' aria-valuemax='30'`. Screen readers say '18 of 30 days'." },
      { t: "Days-remaining text reinforces colour.", b: "Text '18d left' carries the meaning. Colour is reinforcement, not the only signal." },
      { t: "Live region announces breach milestones.", b: "When SLA enters amber or red, announce 'PMAY-U entering critical SLA' in `aria-live='polite'`." },
      { t: "Statutory context provided.", b: "Helper text 'RTS Act deadline · 30-day window' frames the meaning of the timer." },
    ],
    related: [
      { name: "Progress Indicator", note: "SLA is a specialised Progress that counts DOWN. Same bar visualisation, opposite direction.", preview: (<div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3 }}><div style={{ width: "68%", height: "100%", background: "var(--ux4g-bg-success-strong)", borderRadius: 3 }}></div></div>) },
      { name: "Alert / Toast", note: "When SLA approaches deadline, surface an Alert with the case reference and escalate action.", preview: (<div className="ux4g-alert ux4g-alert-warning" style={{ padding: 10 }}><span className="ux4g-alert-icon ux4g-icon-outlined">warning</span><div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>SLA breaching soon</p></div></div>) },
      { name: "Status Pipeline", note: "Status Pipeline shows progress through stages. SLA shows time remaining within current stage.", preview: (<ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", padding: 0, margin: 0 }}><li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done"><span className="ux4g-stepper-head-icon">1</span></li><li className="ux4g-stepper-step ux4g-stepper-completed"><span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span></span></li></ul>) },
      { name: "Tag", note: "Status alongside SLA - 'Pending · 18d left' badge in lists is a compact summary.", preview: <span className="ux4g-tag-tonal-warning">Pending · 18d</span> },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
