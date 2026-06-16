/* global React */
(function () {
  function Step({ items = [], orientation = "horizontal", size = "small" }) {
    const orientCls = orientation === "vertical" ? "ux4g-stepper-vertical" : "ux4g-stepper-horizontal";
    return (
      <ul className={"ux4g-stepper " + orientCls + " ux4g-stepper-" + size} style={{ width: "100%", padding: 0, margin: 0, listStyle: "none" }}>
        {items.map((it, i) => {
          const stateCls = it.status === "done" ? " ux4g-stepper-completed ux4g-stepper-done" : it.status === "active" ? " ux4g-stepper-completed" : "";
          return (
            <li key={i} className={"ux4g-stepper-step" + stateCls}>
              <span className={"ux4g-stepper-head-icon" + (it.status === "active" ? " ux4g-stepper-head-icon-active" : "")}>
                <span className={"ux4g-stepper-head-check" + (it.status === "active" ? " ux4g-stepper-head-check-active" : "")}>{i + 1}</span>
              </span>
              {it.label && <span className="ux4g-stepper-head-label" style={{ fontSize: 12 }}>{it.label}</span>}
            </li>
          );
        })}
      </ul>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-step-mock">
          <div className="hb-step-node done">✓</div>
          <div className="hb-step-line done"></div>
          <div className="hb-step-node done">✓</div>
          <div className="hb-step-line done"></div>
          <div className="hb-step-node current">3</div>
          <div className="hb-step-line"></div>
          <div className="hb-step-node pending">4</div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Stepper",
    navName: "Stepper",
    group: "Navigation",
    desc: "Multi-step process indicator with completed, active, and pending states. Anchors the user inside long forms and verification flows.",
    bannerVariant: "stepper",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Step node", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Done state fill", token: "ux4g-bg-primary-strong" },
      { n: 3, label: "Active ring", token: "ux4g-border-color-primary-strong" },
      { n: 4, label: "Connector line", token: "ux4g-bg-neutral-soft" },
      { n: 5, label: "Step label", token: "ux4g-label-m-default" },
      { n: 6, label: "Step number / check", token: "ux4g-label-l-strong" },
    ],

    properties: [
      {
        label: "Orientation",
        desc: "Horizontal is the default for desktop. Vertical for mobile and for flows with long step labels.",
        demos: [
          { label: "Horizontal", wide: true, node: <Step items={[{ status: "done" }, { status: "active" }, {}, {}]} /> },
          { label: "Vertical", node: (
            <Step orientation="vertical" items={[
              { status: "done", label: "Identity" },
              { status: "done", label: "Address" },
              { status: "active", label: "Documents" },
              { label: "Submit" },
            ]} />
          ) },
        ],
      },
      {
        label: "Size",
        desc: "Small for compact toolbars and modals. Medium is the default for form headers. Large for hero verification flows on mobile.",
        demos: [
          { label: "Small", node: <Step size="small" items={[{ status: "done" }, { status: "active" }, {}]} /> },
          { label: "Medium", node: <Step size="medium" items={[{ status: "done" }, { status: "active" }, {}]} /> },
        ],
      },
      {
        label: "Step state",
        desc: "Done = ✓ filled. Active = ring around the step number. Pending = outline only. Error optionally flips a done step to a × marker.",
        demos: [
          { label: "All states", wide: true, node: <Step items={[{ status: "done", label: "Done" }, { status: "active", label: "Active" }, { label: "Pending" }, { label: "Pending" }]} /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Application form header",
        desc: "Long forms (Identity → Address → Documents → Review → Submit) anchor each section with a stepper at the top. User sees overall progress.",
        stage: <Step items={[{ status: "done", label: "Identity" }, { status: "done", label: "Address" }, { status: "active", label: "Documents" }, { label: "Review" }, { label: "Submit" }]} />,
      },
      {
        title: "Verification flow on mobile",
        desc: "Vertical stepper for narrow viewports. Active step expands to show input; done steps collapse to a summary; pending steps stay outlined.",
        stage: (
          <Step orientation="vertical" items={[
            { status: "done", label: "Aadhaar verified" },
            { status: "active", label: "Capture selfie" },
            { label: "Confirm details" },
          ]} />
        ),
      },
      {
        title: "Status pipeline - application lifecycle",
        desc: "Read-only stepper for showing application status - Filed → Verified → Issued. No interaction; just a visual progress marker.",
        stage: <Step items={[{ status: "done", label: "Filed" }, { status: "done", label: "Verified" }, { status: "active", label: "In review" }, { label: "Issued" }]} />,
      },
      {
        title: "Failed step - show recovery action",
        desc: "If a step fails (document rejected, address mismatched), mark it with an error indicator and surface the recovery action inline.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            <Step items={[{ status: "done", label: "Filed" }, { status: "done", label: "Verified" }, { status: "active", label: "Re-upload doc" }, { label: "Issued" }]} />
            <div style={{ fontSize: 13, color: "var(--ux4g-text-error-default)" }}>Address proof rejected - <a href="#" onClick={(e) => e.preventDefault()}>upload a new one</a></div>
          </div>
        ),
      },
      {
        title: "Compact stepper in a modal",
        desc: "When stepping inside a Modal, use the small size and skip labels - the modal title carries context.",
        stage: <Step size="small" items={[{ status: "done" }, { status: "done" }, { status: "active" }, {}]} />,
      },
      {
        title: "Allow back-navigation on done steps",
        desc: "Users can tap a done step to edit. Active and pending steps are not tappable - they're reached only by completing the current step.",
        stage: <Step items={[{ status: "done", label: "Edit identity" }, { status: "done", label: "Edit address" }, { status: "active", label: "Documents" }, { label: "Submit" }]} />,
      },
    ],

    responsive: [
      {
        title: "Horizontal → vertical below 768px",
        desc: "Horizontal stepper collapses to vertical on tablet width. Labels become visible on each step since horizontal space is no longer constrained.",
        sample: (
          <Step orientation="vertical" items={[
            { status: "done", label: "Identity" },
            { status: "active", label: "Documents" },
            { label: "Submit" },
          ]} />
        ),
      },
      {
        title: "Step labels truncate at 12 characters on mobile horizontal",
        desc: "On horizontal stepper at narrow widths, labels truncate with ellipsis. Full label shown on tap as a tooltip.",
        sample: <Step items={[{ status: "done", label: "Filed" }, { status: "active", label: "Verifying…" }, { label: "Issue" }]} />,
      },
      {
        title: "Active step always in view on scroll",
        desc: "If the stepper sticks to the top while the form scrolls, the active step centres horizontally. Done and pending steps stay visible at the edges.",
        sample: <Step items={[{ status: "done" }, { status: "done" }, { status: "active", label: "Now" }, {}, {}]} />,
      },
    ],

    practices: [
      {
        do: { stage: <Step items={[{ status: "done", label: "Identity" }, { status: "active", label: "Documents" }, { label: "Submit" }]} />, rule: "Label every step so users know what they're on and what's next." },
        dont: { stage: <Step items={[{ status: "done" }, { status: "active" }, {}]} />, rule: "Unlabelled steps tell users only 'where you are', not 'what's coming'." },
      },
      {
        do: { stage: <Step items={[{ status: "done", label: "1" }, { status: "active", label: "2" }, { label: "3" }, { label: "4" }, { label: "5" }]} />, rule: "Keep step count to 3-6. Beyond that, users lose track of overall progress." },
        dont: { stage: <Step items={[...Array(10)].map((_, i) => ({ status: i < 3 ? "done" : i === 3 ? "active" : "pending", label: String(i + 1) }))} />, rule: "10 steps overwhelm - users feel they'll never finish." },
      },
      {
        do: { stage: <Step items={[{ status: "done", label: "Edit identity" }, { status: "active", label: "Documents" }]} />, rule: "Done steps are tappable - lets users edit without losing progress." },
        dont: { stage: <Step items={[{ status: "done", label: "Identity" }, { status: "active", label: "Documents" }]} />, rule: "Locked done steps trap users when they realise an earlier value was wrong." },
      },
      {
        do: { stage: (<div style={{ display: "flex", flexDirection: "column", gap: 8 }}><Step items={[{ status: "done", label: "Filed" }, { status: "active", label: "Re-upload doc" }]} /><div style={{ fontSize: 12, color: "var(--ux4g-text-error-default)" }}>Address proof rejected. Try again.</div></div>), rule: "Surface failed-step reason inline. User knows exactly what to fix." },
        dont: { stage: <Step items={[{ status: "done", label: "Filed" }, { status: "active", label: "Documents" }]} />, rule: "Silent failure leaves users wondering why they're stuck on step 2." },
      },
    ],

    accessibility: [
      { t: "Use role='progressbar' or list semantics.", b: "Wrap the stepper in `role='list'` with each step as `role='listitem'`. Or use `role='progressbar'` with `aria-valuenow` and `aria-valuemax` for status pipelines." },
      { t: "aria-current='step' marks the active step.", b: "Screen readers announce 'current step' when reaching the active node. Users know exactly where they are." },
      { t: "Done steps are keyboard-reachable.", b: "Make completed steps Tab-reachable buttons so users can navigate back. Active and pending steps are not focusable - only the current form is." },
      { t: "Status is announced as text, not just colour.", b: "Each step's status label ('Completed', 'Current', 'Pending') is read aloud. The visual fill / ring is a reinforcement, not the only cue." },
      { t: "Live region announces transitions.", b: "When the user advances from step 2 to step 3, announce 'Step 3 of 5: Documents' in an `aria-live='polite'` region." },
      { t: "Failed step has aria-invalid='true'.", b: "Mark the failed step with `aria-invalid='true'` and link the error message via `aria-describedby`. Screen readers hear the failure clearly." },
      { t: "Stepper is supplementary, not primary navigation.", b: "Even without the stepper, the form must be completable using Tab + form fields. The stepper aids orientation; it's not a required nav widget." },
    ],

    related: [
      {
        name: "Tab",
        note: "When users can switch freely between sections (not sequentially), use Tab. Stepper enforces order; Tab allows free-jumping.",
        preview: (
          <div className="ux4g-tab ux4g-tab-underline ux4g-tab-sm">
            <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="ux4g-tab-item is-active" role="tab">Overview</li>
              <li className="ux4g-tab-item" role="tab">Documents</li>
            </ul>
          </div>
        ),
      },
      {
        name: "Progress Indicator",
        note: "For continuous progress (file upload 68%), use Progress Indicator. Stepper is for discrete steps; Progress is for percent complete.",
        preview: (
          <div style={{ width: "100%" }}>
            <div style={{ height: 8, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: "68%", height: "100%", background: "var(--ux4g-bg-primary-strong)" }}></div>
            </div>
          </div>
        ),
      },
      {
        name: "Breadcrumb",
        note: "For showing position in a content hierarchy (Services > Identity > Aadhaar), use Breadcrumb. Steppers track a process; Breadcrumbs map a tree.",
        preview: (
          <nav className="ux4g-breadcrumb ux4g-breadcrumb-divider">
            <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: 6 }}>
              <li>Services</li><li>/</li><li>Identity</li><li>/</li><li>Aadhaar</li>
            </ol>
          </nav>
        ),
      },
      {
        name: "Status Pipeline",
        note: "Status Pipeline is a read-only Stepper for application lifecycle - Filed → Verified → Issued. Same shape, different intent (display vs control).",
        preview: <Step items={[{ status: "done" }, { status: "done" }, { status: "active" }, {}]} />,
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
