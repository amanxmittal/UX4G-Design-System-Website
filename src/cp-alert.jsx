/* global React */
(function () {
  function Alt({ severity = "success", title, message, dismissable, action }) {
    const sev = { success: { bg: "#dcfce7", fg: "#16a34a", icon: "check_circle" }, warning: { bg: "#fef3c7", fg: "#d97706", icon: "warning" }, error: { bg: "#fee2e2", fg: "#dc2626", icon: "error" }, info: { bg: "#dbeafe", fg: "#2563eb", icon: "info" } }[severity];
    return (
      <div className={"ux4g-alert ux4g-alert-" + severity} style={{ width: "100%", display: "flex", gap: 12, padding: "14px 16px", background: sev.bg, borderRadius: 8, alignItems: "flex-start", borderLeft: "4px solid " + sev.fg }}>
        <span className="ux4g-alert-icon ux4g-icon-outlined" style={{ color: sev.fg, fontSize: 22, flexShrink: 0 }}>{sev.icon}</span>
        <div className="ux4g-alert-content" style={{ flex: 1 }}>
          {title && <p className="ux4g-alert-title" style={{ margin: 0, fontSize: 14, fontWeight: 600, marginBottom: message ? 4 : 0 }}>{title}</p>}
          {message && <p className="ux4g-alert-message" style={{ margin: 0, fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>{message}</p>}
          {action && <div style={{ marginTop: 8 }}>{action}</div>}
        </div>
        {dismissable && <button style={{ background: "transparent", border: "none", color: "var(--ux4g-text-neutral-tertiary)", cursor: "pointer" }}><span className="ux4g-icon-outlined">close</span></button>}
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-alert-mock">
          <div className="hb-alert-icon">✓</div>
          <div className="hb-alert-content">
            <div className="hb-alert-title">Application submitted</div>
            <div className="hb-alert-body"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Alert / Toast",
    navName: "Alert / Toast",
    group: "Feedback",
    desc: "Inline and floating notifications across success, warning, danger, info. Tell users what just happened, what's happening, or what they must do next.",
    bannerVariant: "alert",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Container", token: "ux4g-bg-success-subtle" },
      { n: 2, label: "Severity accent bar", token: "ux4g-border-color-success-strong" },
      { n: 3, label: "Severity icon", token: "ux4g-icon-outlined" },
      { n: 4, label: "Title", token: "ux4g-body-m-strong" },
      { n: 5, label: "Message", token: "ux4g-body-s-default" },
      { n: 6, label: "Action (optional)", token: "ux4g-btn-text-primary" },
      { n: 7, label: "Dismiss icon", token: "ux4g-icon-outlined" },
    ],

    properties: [
      {
        label: "Severity",
        desc: "Success for completed actions. Info for neutral updates. Warning for risky-but-recoverable. Error for failed actions or required fixes.",
        demos: [
          { label: "Success", node: <Alt severity="success" title="Application submitted" message="Reference AP-2026-DM-83942" /> },
          { label: "Info", node: <Alt severity="info" title="New feature" message="SLA tracking is now available on your dashboard." /> },
          { label: "Warning", node: <Alt severity="warning" title="Session expiring" message="Sign in again in 2 minutes to continue." /> },
          { label: "Error", node: <Alt severity="error" title="Submission failed" message="The server didn't respond. Try again." /> },
        ],
      },
      {
        label: "Structure",
        desc: "Title-only for short confirmations. Title + message for context. Add a trailing action for retry / undo / learn-more flows.",
        demos: [
          { label: "Title only", node: <Alt severity="success" title="Saved" /> },
          { label: "Title + message", node: <Alt severity="warning" title="Session expiring" message="2 minutes remaining" /> },
          { label: "With action", node: <Alt severity="error" title="Submission failed" message="The server didn't respond." action={<button className="ux4g-btn-text-primary ux4g-btn-sm">Retry</button>} /> },
          { label: "Dismissable", node: <Alt severity="info" title="Welcome to UX4G 3.0" message="Explore the redesigned dashboard." dismissable /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Inline alert on a form",
        desc: "Above a form, an Alert summarises validation errors or success after submit. Inline = part of page flow, doesn't disappear automatically.",
        stage: <Alt severity="error" title="Fix 2 errors to submit" message="PAN number must be 10 alphanumeric characters. PIN code is required." />,
      },
      {
        title: "Toast - floating temporary notification",
        desc: "After an async action (save, submit, share), a Toast appears top-right and auto-dismisses after 4 seconds. Slides in from off-screen.",
        stage: <Alt severity="success" title="Draft saved" message="Your changes are stored locally." dismissable />,
      },
      {
        title: "Sticky session warning",
        desc: "30 seconds before session expires, a Warning Alert appears at the top of the page with a 'Stay signed in' action.",
        stage: <Alt severity="warning" title="Your session expires in 30 seconds" message="Tap below to stay signed in." action={<button className="ux4g-btn-primary ux4g-btn-sm">Stay signed in</button>} />,
      },
      {
        title: "Maintenance / outage banner",
        desc: "Site-wide Info banner for planned maintenance or known outages. Persists across page loads until the user dismisses or the issue resolves.",
        stage: <Alt severity="info" title="Scheduled maintenance" message="Aadhaar verification will be unavailable from 02:00 to 04:00 IST on 18 Apr." dismissable />,
      },
      {
        title: "Success with reference number",
        desc: "After submitting an application, show a Success Alert with the reference number. Critical - users may screenshot this for their records.",
        stage: <Alt severity="success" title="Application AP-2026-DM-83942 submitted" message="You'll receive SMS updates as it progresses." action={<button className="ux4g-btn-text-primary ux4g-btn-sm">Track application →</button>} />,
      },
      {
        title: "Error with retry path",
        desc: "When an action fails (network drop, server error), show an Error Alert with a Retry action. Never leave users with a dead-end.",
        stage: <Alt severity="error" title="Couldn't save" message="The server didn't respond. Your input is preserved locally." action={<button className="ux4g-btn-text-primary ux4g-btn-sm">Retry now</button>} />,
      },
    ],

    responsive: [
      {
        title: "Full-width on mobile, max 480px on desktop",
        desc: "Toasts span full width below 480px (top-anchored). On desktop, they cap at 480px and appear top-right corner.",
        sample: <Alt severity="success" title="Saved" message="Draft stored locally." dismissable />,
      },
      {
        title: "Action wraps below title on narrow viewports",
        desc: "When the Alert has both message and action, the action button wraps onto a new line below the message on small viewports.",
        sample: <Alt severity="warning" title="Session expiring" message="2 minutes remaining" action={<button className="ux4g-btn-primary ux4g-btn-sm">Stay signed in</button>} />,
      },
      {
        title: "Toast stack limits to 3",
        desc: "Stack of toasts on screen caps at 3 - oldest dismisses when the 4th arrives. Prevents notification spam on long-running pages.",
        sample: <Alt severity="success" title="Toast 1" dismissable />,
      },
    ],

    practices: [
      {
        do: { stage: <Alt severity="success" title="Application submitted" message="Reference AP-2026-DM-83942" />, rule: "Lead with what happened. Detail follows in message line." },
        dont: { stage: <Alt severity="success" title="Success" />, rule: "'Success' tells nothing. What succeeded? When? Reference?" },
      },
      {
        do: { stage: <Alt severity="error" title="Submission failed" message="Server timeout" action={<button className="ux4g-btn-text-primary ux4g-btn-sm">Retry</button>} />, rule: "Error Alerts always offer a recovery action - retry, undo, contact support." },
        dont: { stage: <Alt severity="error" title="Error" message="Submission failed." />, rule: "Dead-end error with no action leaves users stuck." },
      },
      {
        do: { stage: <Alt severity="info" title="New feature" message="SLA tracking is now available" dismissable />, rule: "Info Alerts are dismissable - users can hide them once read." },
        dont: { stage: <Alt severity="info" title="New feature" message="SLA tracking is now available" />, rule: "Persistent info banner becomes background noise users can't escape." },
      },
      {
        do: { stage: <Alt severity="warning" title="Session expiring" action={<button className="ux4g-btn-primary ux4g-btn-sm">Stay signed in</button>} />, rule: "Warning + clear action = users can prevent the bad outcome." },
        dont: { stage: <Alt severity="warning" title="Session expiring" />, rule: "Warning with no action leaves users helpless watching the clock." },
      },
    ],

    accessibility: [
      { t: "Use role='alert' or 'status' as appropriate.", b: "Error and warning Alerts use `role='alert'` (announces immediately). Success and info Alerts use `role='status'` (announces politely)." },
      { t: "Severity is announced via icon's aria-label.", b: "The icon includes `aria-label='Success'` or `'Warning'`. Colour is reinforcement, not the only cue." },
      { t: "Live region for toasts.", b: "Floating toasts live in an `aria-live='polite'` region (`aria-live='assertive'` for errors). Screen readers announce them as they appear." },
      { t: "Dismiss button has aria-label.", b: "The × icon gets `aria-label='Dismiss notification'`. Icon alone fails screen readers." },
      { t: "Action button is focusable.", b: "Tab from page content into the Alert's action. Critical for keyboard users who need to retry or undo." },
      { t: "Auto-dismiss timer respects user preferences.", b: "If `prefers-reduced-motion: reduce` is set, also lengthen auto-dismiss timer (or disable) - some users need more time to read." },
      { t: "Inline Alerts inside forms link to invalid fields.", b: "Form-summary Alerts use `aria-describedby` to point at the field ids. Screen readers jump from the Alert to the specific failing field." },
    ],

    related: [
      {
        name: "Dialog",
        note: "For destructive confirmations that demand a choice, use Dialog. Alert is for informational notifications - no decision required.",
        preview: (
          <div style={{ padding: 12, borderTop: "4px solid #dc2626", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, maxWidth: 240 }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>Delete record?</div>
            <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
              <button className="ux4g-btn-outline-primary ux4g-btn-sm">Cancel</button>
              <button className="ux4g-btn-danger ux4g-btn-sm">Delete</button>
            </div>
          </div>
        ),
      },
      {
        name: "Badge",
        note: "For persistent status markers (Verified, Pending) on items, use Badge. Alert is a one-off notification; Badge is ongoing state.",
        preview: <span className="ux4g-tag-tonal-success">Verified</span>,
      },
      {
        name: "Modal",
        note: "For blocking notifications that need user attention before they can continue, use Modal. Alert is non-blocking.",
        preview: (
          <div style={{ background: "var(--ux4g-bg-neutral-elevated)", boxShadow: "0 8px 16px rgba(0,0,0,0.06)", borderRadius: 8, padding: 14, maxWidth: 220 }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>Sign out?</div>
            <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
              <button className="ux4g-btn-outline-primary ux4g-btn-sm">Cancel</button>
              <button className="ux4g-btn-primary ux4g-btn-sm">Sign out</button>
            </div>
          </div>
        ),
      },
      {
        name: "Spinner",
        note: "For showing an action is in flight (before the success/error Alert appears), use Spinner. Alert reports outcome; Spinner reports activity.",
        preview: <span className="ux4g-spinner ux4g-spinner-md"></span>,
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
