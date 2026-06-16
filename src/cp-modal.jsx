/* global React */
(function () {
  function Modal({ size = "s", title = "Confirm submission", subtitle, body, actions, withClose = true }) {
    return (
      <div className={"ux4g-modal-box ux4g-modal-" + size} style={{ position: "relative", display: "flex", flexDirection: "column", width: "100%", maxWidth: 480, boxShadow: "0 24px 48px -12px rgba(48, 28, 125, 0.25)", borderRadius: 16, overflow: "hidden", background: "var(--ux4g-bg-neutral-elevated)" }}>
        <div className="ux4g-modal-header" style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div className="ux4g-modal-header-title-content" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <p className="ux4g-modal-header-title" style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{title}</p>
            {subtitle && <p className="ux4g-modal-header-sub-heading" style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)", margin: 0 }}>{subtitle}</p>}
          </div>
          {withClose && <span className="ux4g-icon-outlined" style={{ cursor: "pointer", color: "var(--ux4g-text-neutral-tertiary)" }}>close</span>}
        </div>
        {body && <div className="ux4g-modal-body" style={{ padding: "0 24px 16px", fontSize: 14, color: "var(--ux4g-text-neutral-secondary)" }}>{body}</div>}
        {actions && <div className="ux4g-modal-footer" style={{ padding: "16px 24px 20px", display: "flex", gap: 8, justifyContent: "flex-end" }}>{actions}</div>}
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-modal-mock">
          <div className="hb-modal-title">Confirm submission</div>
          <div className="hb-modal-body"></div>
          <div className="hb-modal-body short"></div>
          <div className="hb-modal-actions">
            <span className="hb-modal-btn ghost">Cancel</span>
            <span className="hb-modal-btn solid">Submit</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const cancelBtn = <button className="ux4g-btn-outline-primary ux4g-btn-md">Cancel</button>;
  const submitBtn = <button className="ux4g-btn-primary ux4g-btn-md">Submit</button>;
  const dangerBtn = <button className="ux4g-btn-danger ux4g-btn-md">Delete record</button>;

  const config = {
    name: "Modal",
    navName: "Modal",
    group: "Feedback",
    desc: "Blocking overlay for confirmations, submissions, and consent capture. Demands user attention until the user resolves the choice the Modal asks for.",
    bannerVariant: "modal",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Header banner", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Leading icon area", token: "ux4g-icon-outlined" },
      { n: 3, label: "Header title", token: "ux4g-title-m-strong" },
      { n: 4, label: "Close icon trigger", token: "ux4g-icon-outlined" },
      { n: 5, label: "Description (subtitle)", token: "ux4g-body-s-default" },
      { n: 6, label: "Body subtitle", token: "ux4g-body-s-default" },
      { n: 7, label: "Body text", token: "ux4g-body-m-default" },
      { n: 8, label: "Secondary action (Cancel)", token: "ux4g-btn-outline-primary" },
      { n: 9, label: "Primary action (Confirm)", token: "ux4g-btn-primary" },
    ],

    properties: [
      {
        label: "Status",
        desc: "Default status for routine confirmations and consent. Error status for blocking failures the user must acknowledge before continuing (failed payment, expired session, validation that cannot resolve inline).",
        demos: [
          { label: "Default", node: <Modal size="s" title="Confirm submission" subtitle="Once submitted, this cannot be edited." actions={<>{cancelBtn}{submitBtn}</>} /> },
        ],
      },
      {
        label: "Status (Error)",
        desc: "Error variant tints the header strip and routes the user to a recovery action. Use only when the failure blocks the journey, never for inline form errors that belong next to the field.",
        demos: [
          { label: "Error", node: <Modal size="s" title="Payment failed" subtitle="Your bank declined the transaction. Try again or use a different account." actions={<>{cancelBtn}<button className="ux4g-btn-primary ux4g-btn-md">Try again</button></>} /> },
        ],
      },
      {
        label: "Layout (Left aligned)",
        desc: "Default layout: title, body, and footer actions align to the left edge. Use for routine forms, consent screens, and any modal that reads top-to-bottom like a document.",
        demos: [
          { label: "Left aligned", node: <Modal size="s" title="Update profile" subtitle="Edits will be reviewed within 24 hours." body="Fields you change here will trigger re-verification with Aadhaar." actions={<>{cancelBtn}{submitBtn}</>} /> },
        ],
      },
      {
        label: "Layout (Centered)",
        desc: "Centered layout puts an icon or illustration above a centred title and body. Use for success acknowledgements, milestone confirmations, and acknowledgement gates that need emotional weight.",
        demos: [
          { label: "Centered", node: <Modal size="s" title="Application submitted" subtitle="Reference AP-2026-DM-83942" actions={<>{cancelBtn}{submitBtn}</>} /> },
        ],
      },
      {
        label: "Sections (Header, Body, Footer)",
        desc: "Standard composition: Header (title plus close), Body (subtitle plus content), Footer (one Cancel plus one primary action). All three sections are togglable so a Modal can collapse to a confirmation that only needs a title plus actions.",
        demos: [
          { label: "All sections", node: <Modal title="Aadhaar consent" subtitle="DPDP Act 2023" body="Your Aadhaar number will be shared with the Income Tax Department for verification." actions={<>{cancelBtn}{submitBtn}</>} /> },
        ],
      },
      {
        label: "Sections (compact)",
        desc: "When the title and actions carry the entire message, hide the body. Use for short confirmations like Discard draft? where additional copy adds nothing.",
        demos: [
          { label: "Header + Footer", node: <Modal title="Discard draft?" actions={<>{cancelBtn}<button className="ux4g-btn-danger ux4g-btn-md">Discard</button></>} /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Confirmation before submit",
        desc: "Form submission opens a confirmation Modal. The user sees what they are committing to and has one chance to back out before the action commits. Title carries the verb plus the object, never just Are you sure.",
        stage: <Modal title="Submit application?" subtitle="Once submitted, this cannot be edited." actions={<>{cancelBtn}{submitBtn}</>} />,
      },
      {
        title: "Destructive action confirm",
        desc: "Delete and discard actions open a Modal in Error status. The confirm button uses the Danger variant and the label spells out the destructive verb (Delete record, not Confirm). Never auto-focus the destructive button.",
        stage: <Modal title="Delete this draft?" subtitle="You will lose all changes since 09:14." actions={<>{cancelBtn}{dangerBtn}</>} />,
      },
      {
        title: "Consent capture under DPDP Act 2023",
        desc: "Before sharing Aadhaar or any sensitive identifier with a department, the Modal explains exactly what data goes where, for how long, and how to revoke. The user explicitly consents. Never auto-check.",
        stage: <Modal size="m" title="Consent under DPDP Act 2023" subtitle="Aadhaar share with Income Tax Department" body="Your 12-digit Aadhaar will be shared once for PAN-Aadhaar linking. You can revoke consent within 30 days." actions={<>{cancelBtn}{submitBtn}</>} />,
      },
      {
        title: "Centered confirmation with weight",
        desc: "When the moment matters (one-way submission, payment about to commit, irreversible upgrade), switch to Centered layout. The visual hierarchy slows the user down and asks for a deliberate click.",
        stage: <Modal title="Submit PAN application?" subtitle="This is your final submit. Refunds cannot be processed after this step." actions={<>{cancelBtn}{submitBtn}</>} />,
      },
      {
        title: "Success on resolution",
        desc: "Once the action commits, swap the Modal contents to a success state with a single Done action and a reference number the user can screenshot or copy. Auto-dismiss only if the user has somewhere obvious to land.",
        stage: (
          <Modal
            title="Application submitted"
            subtitle="Reference AP-2026-DM-83942"
            body={<div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ux4g-text-success-default)" }}><span className="ux4g-icon-outlined">check_circle</span><span>You will receive SMS updates as it progresses.</span></div>}
            actions={<button className="ux4g-btn-primary ux4g-btn-md">Done</button>}
          />
        ),
      },
      {
        title: "Acknowledgement gate",
        desc: "First-visit privacy notices, session-timeout warnings, and policy updates use a Modal with the close icon disabled. The user must choose: accept, dismiss, or act. Reserve this pattern for unavoidable moments.",
        stage: <Modal size="m" title="Your session is about to expire" subtitle="For your security, we will sign you out in 60 seconds." actions={<>{cancelBtn}<button className="ux4g-btn-primary ux4g-btn-md">Stay signed in</button></>} />,
      },
    ],

    responsive: [
      {
        title: "Fullscreen takeover below 480px",
        desc: "On small phones the Modal expands to fill the viewport. The backdrop disappears (it is all Modal now). The close icon stays top-right and gets a 44 by 44 hit area for thumbs.",
        sample: <Modal size="s" title="Confirm submission" actions={<>{cancelBtn}{submitBtn}</>} />,
      },
      {
        title: "Footer actions stack on mobile",
        desc: "Below 480px the footer buttons stack vertically with the primary on top (thumb-friendly). Desktop keeps them inline with the primary on the right edge.",
        sample: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
            <button className="ux4g-btn-primary ux4g-btn-lg" style={{ width: "100%" }}>Submit</button>
            <button className="ux4g-btn-outline-primary ux4g-btn-lg" style={{ width: "100%" }}>Cancel</button>
          </div>
        ),
      },
      {
        title: "Backdrop tap dismiss with dirty-form confirm",
        desc: "On every viewport, tapping the backdrop dismisses the Modal. If the user has typed into a form, intercept with a quick confirm before discarding their work.",
        sample: <Modal title="Discard changes?" subtitle="Unsaved fields will be lost." actions={<>{cancelBtn}<button className="ux4g-btn-danger ux4g-btn-md">Discard</button></>} />,
      },
    ],

    accessibility: [
      { t: "Modal traps focus.", b: "Tab cycles within the Modal and never escapes to the page behind. Shift+Tab cycles backwards. Initial focus lands on the first interactive element (often the close icon)." },
      { t: "Escape dismisses.", b: "Pressing Escape closes the Modal (with confirm if the form is dirty). Critical for keyboard users so they do not need a mouse to back out." },
      { t: "Focus returns to the trigger.", b: "When the Modal closes, focus returns to the element that opened it. Users do not get lost in the page hierarchy." },
      { t: "Page behind is inert.", b: "Set aria-hidden=true and the inert attribute on the page behind so screen readers and Tab order ignore it entirely while the Modal is open." },
      { t: "Use role=dialog with aria-labelledby.", b: "Wrap the Modal in role=dialog with aria-modal=true and aria-labelledby pointing to the title element. Screen readers announce dialog, then the title." },
      { t: "Destructive actions need explicit confirmation.", b: "Delete buttons inside a Modal use the Danger variant. Never auto-focus a destructive button because the user might trigger it on Enter." },
      { t: "Loading state announces in flight.", b: "When the user confirms, announce Submitting in an aria-live=polite region so screen-reader users hear the action is in flight." },
    ],

    related: [
      {
        name: "Dialog",
        note: "For destructive-action confirmations specifically (delete, discard), use Dialog: a specialised Modal in Error status with explicit verb-noun copy.",
        preview: (
          <div className="ux4g-alert ux4g-alert-warning" style={{ padding: 10, maxWidth: 280 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">warning</span>
            <div className="ux4g-alert-content">
              <p className="ux4g-alert-title" style={{ fontSize: 13 }}>Discard draft?</p>
              <p className="ux4g-alert-message" style={{ fontSize: 11 }}>Changes since 09:14 will be lost.</p>
            </div>
          </div>
        ),
      },
      {
        name: "Drawer",
        note: "For multi-step or long-form flows that need more canvas, use Drawer. It slides in from the side without taking over the whole viewport.",
        preview: (
          <div style={{ width: 140, height: 100, background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, padding: 10 }}>
            <div style={{ fontWeight: 600, fontSize: 12, marginBottom: 6 }}>Filters</div>
            <div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3, marginBottom: 4 }}></div>
            <div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3 }}></div>
          </div>
        ),
      },
      {
        name: "Alert / Toast",
        note: "For non-blocking confirmations (action succeeded, draft saved), use Alert or Toast. No overlay, no focus trap, no interruption.",
        preview: (
          <div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span>
            <div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Application submitted</p></div>
          </div>
        ),
      },
      {
        name: "Popover",
        note: "For contextual content anchored to a trigger (date picker, menu, info bubble), use Popover. Modal is for centred, blocking overlays.",
        preview: (
          <div style={{ background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, padding: 10, fontSize: 12, maxWidth: 200 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Service availability</div>
            <div style={{ color: "var(--ux4g-text-neutral-secondary)" }}>Available in 36 states from Apr 2026.</div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
