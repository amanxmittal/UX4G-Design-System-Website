/* global React */
(function () {
  function Pr({ value = 60, label, meta, variant = "linear", severity = "primary" }) {
    if (variant === "circular") {
      const radius = 24, circ = 2 * Math.PI * radius;
      return (
        <svg width="64" height="64" viewBox="0 0 64 64">
          <circle cx="32" cy="32" r={radius} fill="none" stroke="var(--ux4g-bg-neutral-soft)" strokeWidth="6" />
          <circle cx="32" cy="32" r={radius} fill="none" stroke={`var(--ux4g-bg-${severity}-strong)`} strokeWidth="6" strokeDasharray={circ} strokeDashoffset={circ - (circ * value) / 100} strokeLinecap="round" transform="rotate(-90 32 32)" />
          <text x="32" y="36" textAnchor="middle" fontSize="13" fontWeight="600" fill="var(--ux4g-text-neutral-primary)">{value}%</text>
        </svg>
      );
    }
    return (
      <div style={{ width: "100%" }}>
        {(label || meta) && (
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
            {label && <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>{label}</span>}
            {meta && <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>{meta}</span>}
          </div>
        )}
        <div style={{ height: 8, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ height: "100%", width: value + "%", background: `var(--ux4g-bg-${severity}-strong)`, borderRadius: 4 }}></div>
        </div>
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-spin-mock">
          <div className="hb-spin-ring"></div>
          <div className="hb-spin-bar"><div className="hb-spin-bar-fill"></div></div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Progress Indicator",
    navName: "Progress Indicator",
    group: "Feedback",
    desc: "Linear and stepped progress for forms, uploads, and multi-page journeys. Shows how far the user has come and how much remains.",
    bannerVariant: "spinner",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Track", token: "ux4g-bg-neutral-soft" },
      { n: 2, label: "Fill", token: "ux4g-bg-primary-strong" },
      { n: 3, label: "Label", token: "ux4g-body-xs-default" },
      { n: 4, label: "Percent / count", token: "ux4g-label-s-strong" },
      { n: 5, label: "Stripe / indeterminate animation", token: "1.5s ease-in-out infinite" },
    ],

    properties: [
      {
        label: "Variant",
        desc: "Linear bar is the default for upload, form completion. Circular for compact dashboards. Indeterminate when total unknown.",
        demos: [
          { label: "Linear", wide: true, node: <Pr value={68} label="STEP 4 OF 6" meta="68%" /> },
          { label: "Circular", node: <Pr variant="circular" value={68} /> },
        ],
      },
      {
        label: "Severity",
        desc: "Primary for normal progress. Success when complete. Warning when nearing a limit. Danger when over budget / failing.",
        demos: [
          { label: "Primary", wide: true, node: <Pr value={45} severity="primary" /> },
          { label: "Success", wide: true, node: <Pr value={100} severity="success" /> },
          { label: "Warning", wide: true, node: <Pr value={85} severity="warning" /> },
          { label: "Danger", wide: true, node: <Pr value={95} severity="danger" /> },
        ],
      },
      {
        label: "With label and meta",
        desc: "Show what's progressing (label, left) and where you are (meta, right). 'STEP 4 OF 6' + '68%' is the standard pattern.",
        demos: [
          { label: "Step + percent", wide: true, node: <Pr value={68} label="STEP 4 OF 6" meta="68%" /> },
          { label: "File size + speed", wide: true, node: <Pr value={42} label="aadhaar-scan.pdf" meta="1.2 MB / 2.8 MB · 320 KB/s" /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "File upload progress",
        desc: "Below the upload tile, show file name, size remaining, and speed. Bar fills as bytes transfer. Switch to Success on complete.",
        stage: <Pr value={42} label="aadhaar-scan.pdf" meta="1.2 MB / 2.8 MB · 320 KB/s" />,
      },
      {
        title: "Multi-step form journey",
        desc: "Above the form, show 'STEP 4 OF 6' with a percent meter. Reinforces the Stepper above; gives an emotional sense of nearness to completion.",
        stage: <Pr value={68} label="STEP 4 OF 6" meta="68% complete" />,
      },
      {
        title: "Indeterminate - unknown duration",
        desc: "When total is unknown (server pre-processing, OAuth handshake), use indeterminate stripe animation. Tells users 'working' without false promises.",
        stage: (
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12 }}>
              <span>Authorising with DigiLocker</span>
              <span style={{ color: "var(--ux4g-text-neutral-secondary)" }}>Please wait…</span>
            </div>
            <div style={{ height: 8, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, overflow: "hidden", position: "relative" }}>
              <div style={{ height: "100%", width: "40%", background: "var(--ux4g-bg-primary-strong)", borderRadius: 4, animation: "indet 1.5s ease-in-out infinite" }}></div>
            </div>
          </div>
        ),
      },
      {
        title: "Circular for dashboards",
        desc: "Compact dashboards use circular progress for KPIs - 'Application completion 75%' in a 64-72px circle.",
        stage: (
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <Pr variant="circular" value={75} severity="success" />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Profile completion</div>
              <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>3 of 4 required documents uploaded</div>
            </div>
          </div>
        ),
      },
      {
        title: "Near-limit warning",
        desc: "When approaching a quota (storage 85% full), switch severity to Warning. At 95+%, switch to Danger - the colour change signals urgency.",
        stage: (
          <div style={{ width: "100%" }}>
            <Pr value={87} severity="warning" label="DigiLocker storage" meta="870 MB / 1 GB" />
            <div style={{ fontSize: 12, color: "var(--ux4g-text-warning-default)", marginTop: 6 }}>13% remaining - delete old documents to free space</div>
          </div>
        ),
      },
      {
        title: "Completion - success state",
        desc: "When the task finishes, the bar reaches 100% in Success colour. Optionally add a tick icon on the right and a 'Done' label.",
        stage: <Pr value={100} severity="success" label="Application submitted" meta="Done" />,
      },
    ],

    responsive: [
      {
        title: "Bar height stays constant at all breakpoints",
        desc: "8px height works at every viewport. Smaller bars (4px) for compact dashboards; 12px for hero / kiosk surfaces.",
        sample: <Pr value={68} label="Progress" meta="68%" />,
      },
      {
        title: "Label wraps if narrow",
        desc: "When the label + meta don't fit on one line, label wraps to a new line above the bar. Meta stays right-aligned.",
        sample: <Pr value={42} label="Uploading aadhaar-card-front-side.pdf" meta="1.2 MB" />,
      },
      {
        title: "Circular size scales for mobile",
        desc: "Circular progress is 64px on desktop, 80px on mobile - more readable when fingers are the input device.",
        sample: <Pr variant="circular" value={75} />,
      },
    ],

    practices: [
      {
        do: { stage: <Pr value={68} label="STEP 4 OF 6" meta="68%" />, rule: "Show both count and percent - users get context two ways." },
        dont: { stage: <Pr value={68} />, rule: "Just the bar with no numbers tells users 'something' but not 'what'." },
      },
      {
        do: { stage: <Pr value={87} severity="warning" />, rule: "Switch severity colour at 80% / 95% thresholds to signal urgency." },
        dont: { stage: <Pr value={95} severity="primary" />, rule: "Same primary colour at 95% full tells users nothing about urgency." },
      },
      {
        do: { stage: <div style={{ width: "100%" }}><div style={{ height: 8, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, overflow: "hidden" }}><div style={{ height: "100%", width: "40%", background: "var(--ux4g-bg-primary-strong)", borderRadius: 4 }}></div></div></div>, rule: "Use indeterminate (stripe animation) only when total really is unknown." },
        dont: { stage: <Pr value={50} />, rule: "Fake progress (jump from 0 to 50 to 100) erodes trust - users see the lie." },
      },
      {
        do: { stage: <Pr value={100} severity="success" label="Submitted" />, rule: "Hit 100% in Success colour - clear completion signal." },
        dont: { stage: <Pr value={99} severity="primary" />, rule: "Stuck at 99% feels worse than stuck at 75% - perception of nearly done failing." },
      },
    ],

    accessibility: [
      { t: "Use role='progressbar' with aria-valuemin/max/now.", b: "`<div role='progressbar' aria-valuenow='68' aria-valuemin='0' aria-valuemax='100'>`. Screen readers announce '68 percent'." },
      { t: "Label progress with aria-label or aria-labelledby.", b: "If the visual label is 'STEP 4 OF 6', use the same string in `aria-label='STEP 4 OF 6, 68% complete'`." },
      { t: "Indeterminate sets aria-valuenow=undefined.", b: "Omit `aria-valuenow` when the duration is unknown. Screen readers announce 'loading, busy' instead of a fake percent." },
      { t: "Live region announces milestones.", b: "Wrap progress + label in `aria-live='polite'` so 'now 75 percent' is read at milestones (25, 50, 75, 100), not on every increment." },
      { t: "Severity is announced via label text.", b: "Pair Warning Progress with label text 'Nearly full' or similar. Colour reinforces; text carries the meaning." },
      { t: "Completion announces 'Done' or '100%'.", b: "On reaching 100%, the live region announces 'Complete' or '100 percent'. Don't leave users wondering if the action finished." },
      { t: "Stripe animation respects prefers-reduced-motion.", b: "If reduced motion is set, replace the indeterminate stripe with a pulsing fill or static dotted track." },
    ],

    related: [
      {
        name: "Spinner",
        note: "For very short waits (< 1s) or when total is unknown and small, use Spinner. Progress is for measurable, longer waits.",
        preview: <span className="ux4g-spinner ux4g-spinner-md"></span>,
      },
      {
        name: "Stepper",
        note: "For discrete sequential steps in a flow (Identity → Documents → Submit), use Stepper. Progress shows percent; Stepper shows step.",
        preview: (
          <ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", padding: 0, margin: 0 }}>
            <li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done"><span className="ux4g-stepper-head-icon">1</span></li>
            <li className="ux4g-stepper-step ux4g-stepper-completed"><span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span></span></li>
          </ul>
        ),
      },
      {
        name: "SLA Progress Indicator",
        note: "Specialised Progress for showing time remaining against statutory deadlines (RTS Act SLA). Counts down from 100% to 0%.",
        preview: (
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}><span style={{ fontSize: 12 }}>Income cert.</span><span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>18d left</span></div>
            <div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: "70%", height: "100%", background: "var(--ux4g-bg-success-strong)" }}></div>
            </div>
          </div>
        ),
      },
      {
        name: "Alert / Toast",
        note: "When the action completes, surface the result via an Alert. Progress shows in-flight; Alert reports outcome.",
        preview: (
          <div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span>
            <div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Uploaded</p></div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
