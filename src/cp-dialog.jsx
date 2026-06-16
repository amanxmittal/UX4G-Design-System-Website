/* global React */
(function () {
  function Dialog({ title, body, severity = "warning", actions }) {
    const accent = severity === "danger" ? "#dc2626" : severity === "warning" ? "#f59e0b" : "var(--ux4g-text-primary-default)";
    const icon = severity === "danger" ? "delete" : severity === "warning" ? "warning" : "info";
    return (
      <div style={{ position: "relative", display: "flex", flexDirection: "column", width: "100%", maxWidth: 440, boxShadow: "0 24px 48px -12px rgba(48, 28, 125, 0.25)", borderRadius: 16, overflow: "hidden", background: "var(--ux4g-bg-neutral-elevated)", borderTop: "4px solid " + accent }}>
        <div style={{ padding: "20px 24px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
          <span className="ux4g-icon-outlined" style={{ color: accent, fontSize: 24 }}>{icon}</span>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: 18, fontWeight: 600, margin: 0, marginBottom: 4 }}>{title}</p>
            {body && <p style={{ fontSize: 14, color: "var(--ux4g-text-neutral-secondary)", margin: 0 }}>{body}</p>}
          </div>
        </div>
        {actions && <div style={{ padding: "0 24px 20px", display: "flex", gap: 8, justifyContent: "flex-end" }}>{actions}</div>}
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-modal-mock" style={{ borderLeft: "4px solid #dc2626" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#fee2e2", color: "#dc2626", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, flexShrink: 0 }}>!</div>
            <div style={{ flex: 1 }}>
              <div className="hb-modal-title">Delete this record?</div>
              <div className="hb-modal-body"></div>
              <div className="hb-modal-body short"></div>
            </div>
          </div>
          <div className="hb-modal-actions" style={{ marginTop: 12 }}>
            <span className="hb-modal-btn ghost">Cancel</span>
            <span className="hb-modal-btn solid" style={{ background: "#dc2626" }}>Delete</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const cancelBtn = <button className="ux4g-btn-outline-primary ux4g-btn-md">Cancel</button>;
  const dangerBtn = <button className="ux4g-btn-danger ux4g-btn-md">Delete</button>;
  const confirmBtn = <button className="ux4g-btn-primary ux4g-btn-md">Continue</button>;

  const config = {
    name: "Dialog",
    navName: "Dialog",
    group: "Feedback",
    desc: "Destructive-action confirmation with explicit accept and dismiss paths. The 'are you sure' for delete, discard, and log-out everywhere flows.",
    bannerVariant: "modal",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Surface", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Severity accent bar", token: "ux4g-bg-error-strong" },
      { n: 3, label: "Severity icon", token: "ux4g-icon-outlined" },
      { n: 4, label: "Title (question)", token: "ux4g-title-m-strong" },
      { n: 5, label: "Body explanation", token: "ux4g-body-s-default" },
      { n: 6, label: "Destructive action", token: "ux4g-btn-danger" },
      { n: 7, label: "Cancel action", token: "ux4g-btn-outline-primary" },
    ],

    properties: [
      {
        label: "Severity",
        desc: "Danger for irreversible actions (delete, log out everywhere). Warning for risky-but-recoverable (discard draft). Info for non-destructive confirms.",
        demos: [
          { label: "Danger", node: <Dialog severity="danger" title="Delete this record?" body="This cannot be undone." actions={<>{cancelBtn}{dangerBtn}</>} /> },
          { label: "Warning", node: <Dialog severity="warning" title="Discard draft?" body="Unsaved changes will be lost." actions={<>{cancelBtn}<button className="ux4g-btn-danger ux4g-btn-md">Discard</button></>} /> },
          { label: "Info", node: <Dialog severity="info" title="Switch language?" body="The page will reload in हिन्दी." actions={<>{cancelBtn}{confirmBtn}</>} /> },
        ],
      },
      {
        label: "Action layout",
        desc: "Cancel always on the left, destructive on the right. Primary on the right matches Western reading order; mobile stacks with destructive on top.",
        demos: [
          { label: "Inline (desktop)", node: <Dialog severity="danger" title="Delete?" actions={<>{cancelBtn}{dangerBtn}</>} /> },
          { label: "Stacked (mobile)", node: (
            <Dialog severity="danger" title="Delete?" actions={
              <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
                <button className="ux4g-btn-danger ux4g-btn-lg" style={{ width: "100%" }}>Delete</button>
                <button className="ux4g-btn-outline-primary ux4g-btn-lg" style={{ width: "100%" }}>Cancel</button>
              </div>
            } />
          ) },
        ],
      },
    ],

    scenarios: [
      {
        title: "Delete a record",
        desc: "The signature destructive Dialog. Title is the question; body restates what's being deleted; destructive button uses Danger variant.",
        stage: <Dialog severity="danger" title="Delete grievance AP-2026-DM-83942?" body="This will permanently remove the grievance and its 4 supporting documents. This action cannot be undone." actions={<>{cancelBtn}<button className="ux4g-btn-danger ux4g-btn-md">Delete grievance</button></>} />,
      },
      {
        title: "Discard unsaved changes",
        desc: "When the user navigates away from a dirty form, a Dialog confirms before discarding. Body shows when they last saved.",
        stage: <Dialog severity="warning" title="Discard your changes?" body="You'll lose 4 fields you've edited since 09:14. Saved drafts remain." actions={<>{cancelBtn}<button className="ux4g-btn-danger ux4g-btn-md">Discard</button></>} />,
      },
      {
        title: "Log out everywhere",
        desc: "Logging out from all devices is a security action. Confirm with a Dialog that lists how many devices will be signed out.",
        stage: <Dialog severity="danger" title="Sign out of all devices?" body="3 sessions will end. You'll need to re-verify with Aadhaar on next sign-in." actions={<>{cancelBtn}<button className="ux4g-btn-danger ux4g-btn-md">Sign out all</button></>} />,
      },
      {
        title: "Switch language mid-flow",
        desc: "Switching language reloads the page. If the user has filled fields, warn them before reload. Info severity - it's recoverable.",
        stage: <Dialog severity="info" title="Switch to हिन्दी?" body="The page will reload. Your filled fields are saved as a draft." actions={<>{cancelBtn}<button className="ux4g-btn-primary ux4g-btn-md">Switch language</button></>} />,
      },
      {
        title: "Confirm submission of a final form",
        desc: "Use a Warning Dialog before submitting an irreversible form (Aadhaar update, scheme application). User reviews before commit.",
        stage: <Dialog severity="warning" title="Submit your Aadhaar update?" body="Once submitted, you cannot edit this request. Processing takes 7-10 working days." actions={<>{cancelBtn}<button className="ux4g-btn-primary ux4g-btn-md">Submit</button></>} />,
      },
      {
        title: "Loading state on confirm",
        desc: "When the user confirms, the destructive button shows a spinner. Both buttons disable so the action doesn't fire twice.",
        stage: <Dialog severity="danger" title="Deleting…" body="This may take a few seconds." actions={<><button className="ux4g-btn-outline-primary ux4g-btn-md" disabled>Cancel</button><button className="ux4g-btn-danger ux4g-btn-md state-loading"><span className="spin"></span>Deleting…</button></>} />,
      },
    ],

    responsive: [
      {
        title: "Fullscreen below 480px",
        desc: "On small phones, Dialog expands to fill the screen. Accent bar stays at top. Footer actions stack with destructive on top.",
        sample: <Dialog severity="danger" title="Delete?" body="Cannot be undone." actions={<>{cancelBtn}{dangerBtn}</>} />,
      },
      {
        title: "Tap target stays 44 × 44px on actions",
        desc: "Both buttons grow to LG size on mobile (48px). Invisible padding keeps the tap area 44px even when buttons are smaller.",
        sample: <Dialog severity="danger" title="Confirm?" actions={<>{cancelBtn}{dangerBtn}</>} />,
      },
      {
        title: "Body text wraps without truncation",
        desc: "Explanatory body wraps as needed. Never truncate - users need full context to confirm a destructive action.",
        sample: <Dialog severity="danger" title="Delete?" body="This will remove the record and all linked documents. Cannot be undone. Processing may take a few moments depending on the size of the data." actions={<>{cancelBtn}{dangerBtn}</>} />,
      },
    ],

    practices: [
      {
        do: { stage: <Dialog severity="danger" title="Delete record?" body="Cannot be undone." actions={<>{cancelBtn}<button className="ux4g-btn-danger ux4g-btn-md">Delete</button></>} />, rule: "Spell out the destructive verb in the button - 'Delete', not 'OK'." },
        dont: { stage: <Dialog severity="danger" title="Delete record?" actions={<>{cancelBtn}<button className="ux4g-btn-primary ux4g-btn-md">OK</button></>} />, rule: "'OK' for delete is ambiguous - and the wrong button variant." },
      },
      {
        do: { stage: <Dialog severity="warning" title="Discard draft?" body="You'll lose 4 unsaved fields." actions={<>{cancelBtn}<button className="ux4g-btn-danger ux4g-btn-md">Discard</button></>} />, rule: "Body explains exactly what's lost. User makes an informed decision." },
        dont: { stage: <Dialog severity="warning" title="Discard?" actions={<>{cancelBtn}<button className="ux4g-btn-danger ux4g-btn-md">Discard</button></>} />, rule: "No context - user doesn't know what they're discarding." },
      },
      {
        do: { stage: <Dialog severity="info" title="Switch language?" actions={<>{cancelBtn}{confirmBtn}</>} />, rule: "Use Dialog for blocking confirmations only. Reversible actions don't need this." },
        dont: { stage: <Dialog severity="info" title="Toggle dark mode?" actions={<>{cancelBtn}{confirmBtn}</>} />, rule: "Dialog for instant-revert toggles is over-protective and annoying." },
      },
      {
        do: { stage: <Dialog severity="danger" title="Delete?" actions={<>{cancelBtn}{dangerBtn}</>} />, rule: "Cancel on the left (default focus), destructive on the right." },
        dont: { stage: <Dialog severity="danger" title="Delete?" actions={<>{dangerBtn}{cancelBtn}</>} />, rule: "Destructive on the left risks accidental taps - and breaks platform conventions." },
      },
    ],

    accessibility: [
      { t: "Use role='alertdialog' for destructive Dialogs.", b: "Screen readers announce 'alert dialog' which carries more urgency than 'dialog'. The body content is announced immediately on open." },
      { t: "Initial focus lands on Cancel, not destructive.", b: "Pressing Enter on a Dialog shouldn't trigger the destructive action. Cancel takes initial focus so the safe action is the default." },
      { t: "Escape always cancels.", b: "Pressing Escape closes the Dialog without firing the destructive action. Critical for keyboard users." },
      { t: "Focus trap enforced.", b: "Tab cycles within the Dialog only. Page behind is `inert` and `aria-hidden='true'` for the duration." },
      { t: "Focus returns to the trigger on close.", b: "When the Dialog dismisses, focus returns to the button that opened it. Users don't get lost." },
      { t: "Body content is aria-describedby.", b: "Link the Dialog (`role='alertdialog'`) to the body text via `aria-describedby`. Screen readers read the explanation alongside the title." },
      { t: "Severity is announced via the icon's aria-label.", b: "The warning / error icon includes `aria-label='Warning'` or `'Danger'`. Colour is reinforcement, not the only cue." },
    ],

    related: [
      {
        name: "Modal",
        note: "For non-destructive confirmations, forms, and consent capture, use Modal. Dialog is the destructive specialisation with red accent.",
        preview: (
          <div className="ux4g-modal-box ux4g-modal-s" style={{ position: "relative", display: "flex", flexDirection: "column", maxWidth: 240, boxShadow: "0 8px 16px rgba(0,0,0,0.06)", borderRadius: 8 }}>
            <div className="ux4g-modal-header" style={{ padding: 12 }}>
              <p className="ux4g-modal-header-title" style={{ fontSize: 14, margin: 0 }}>Confirm submission</p>
            </div>
            <div style={{ display: "flex", gap: 6, padding: "0 12px 12px", justifyContent: "flex-end" }}>
              <button className="ux4g-btn-outline-primary ux4g-btn-sm">Cancel</button>
              <button className="ux4g-btn-primary ux4g-btn-sm">Submit</button>
            </div>
          </div>
        ),
      },
      {
        name: "Alert / Toast",
        note: "For non-blocking success / error messages (no decision needed), use Alert or Toast. Dialog demands a choice; Alert just informs.",
        preview: (
          <div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span>
            <div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Saved</p></div>
          </div>
        ),
      },
      {
        name: "Button",
        note: "Destructive Buttons (Danger variant) always pair with a Dialog. Single-tap delete is never allowed.",
        preview: <button className="ux4g-btn-danger ux4g-btn-md">Delete record</button>,
      },
      {
        name: "Popover",
        note: "For contextual hints anchored to a trigger, use Popover. Dialog is centred and blocking; Popover floats next to the trigger.",
        preview: (
          <div style={{ background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, padding: 10, fontSize: 12, maxWidth: 200 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Available in 36 states</div>
            <div style={{ color: "var(--ux4g-text-neutral-secondary)" }}>From April 2026.</div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
