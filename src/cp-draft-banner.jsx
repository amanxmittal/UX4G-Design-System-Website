/* global React */
(function () {
  function DB({ state = "saved", time = "2 min ago" }) {
    const map = { saved: { bg: "#dcfce7", fg: "#16a34a", icon: "check_circle", label: "Draft saved" }, saving: { bg: "#dbeafe", fg: "#2563eb", icon: "sync", label: "Saving…" }, failed: { bg: "#fee2e2", fg: "#dc2626", icon: "error", label: "Couldn't save" } };
    const s = map[state];
    return (
      <div style={{ padding: "10px 16px", background: s.bg, borderRadius: 6, display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="ux4g-icon-outlined" style={{ color: s.fg, fontSize: 18 }}>{s.icon}</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: s.fg }}>{s.label}</span>
        </div>
        <span style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)", textTransform: "uppercase", letterSpacing: "0.05em" }}>{time}</span>
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-alert-mock" style={{ borderLeftColor: "#d97706", padding: "18px 22px", gap: 14, alignItems: "center" }}>
          <div className="hb-alert-icon" style={{ background: "#d97706", width: 36, height: 36, fontSize: 18 }}>⟳</div>
          <div className="hb-alert-content" style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
            <div>
              <div className="hb-alert-title">Draft saved</div>
              <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 12, color: "var(--primary-dark)", opacity: 0.55, marginTop: 2, letterSpacing: "0.06em" }}>2 MIN AGO · AUTO-SAVED</div>
            </div>
            <div style={{ padding: "6px 14px", borderRadius: 999, background: "rgba(217,119,6,0.12)", color: "#d97706", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 12, fontWeight: 700, letterSpacing: "0.04em" }}>RESUME</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Draft Status Banner", navName: "Draft Status Banner", group: "Feedback",
    desc: "Persistent banner confirming drafts are auto-saved and recoverable. Reassures users their work is safe during long-form filling.",
    bannerVariant: "alert", hero: Hero,
    anatomy: [
      { n: 1, label: "Container", token: "ux4g-bg-success-subtle" },
      { n: 2, label: "Status icon", token: "ux4g-icon-outlined" },
      { n: 3, label: "Status label", token: "ux4g-body-m-strong" },
      { n: 4, label: "Last-saved timestamp", token: "ux4g-body-xs-default" },
      { n: 5, label: "State colour", token: "success / info / error" },
    ],
    properties: [
      { label: "State", desc: "Saved (green), saving (blue), failed (red). State transitions live as user types and auto-save fires.", demos: [
        { label: "Saved", node: <DB state="saved" /> },
        { label: "Saving", node: <DB state="saving" time="just now" /> },
        { label: "Failed", node: <DB state="failed" time="3 min ago" /> },
      ] },
    ],
    scenarios: [
      { title: "Long-form auto-save", desc: "Sticky banner at the top of a long form. Updates every 30 seconds with the last-saved time.", stage: <DB state="saved" time="30 sec ago" /> },
      { title: "Currently saving", desc: "While auto-save fires, briefly switch to 'Saving…' with spinner. Returns to 'Saved' on success.", stage: <DB state="saving" time="just now" /> },
      { title: "Save failed - offline", desc: "When network fails, switch to red 'Couldn't save' with retry action. Draft stays in localStorage.", stage: <DB state="failed" time="2 min ago" /> },
      { title: "Restored on return", desc: "When user returns to a partially-filled form, banner shows 'Resumed draft from 14 Apr'.", stage: <DB state="saved" time="14 APR" /> },
    ],
    responsive: [
      { title: "Sticky to top on long forms", desc: "Banner sticks under the form header. Always visible as users scroll through fields.", sample: <DB state="saved" /> },
      { title: "Compact on mobile", desc: "On mobile, banner uses single-line layout with icon + label. Timestamp drops to a hover Tooltip.", sample: <DB state="saved" time="2m" /> },
    ],
    practices: [
      { do: { stage: <DB state="saved" time="30 sec ago" />, rule: "Show last-saved timestamp - users trust the system more with proof." }, dont: { stage: <DB state="saved" time="" />, rule: "'Saved' without time is vague - 'saved when?' users wonder." } },
      { do: { stage: <DB state="failed" />, rule: "Loud red state when save fails - users notice and can act." }, dont: { stage: <DB state="saved" />, rule: "Silent failure (showing 'saved' when actually failed) erodes trust." } },
    ],
    accessibility: [
      { t: "Use role='status' for save state.", b: "Banner uses `role='status' aria-live='polite'`. Save updates announce without interrupting." },
      { t: "Error state uses role='alert'.", b: "Failed save uses `role='alert'` for assertive announcement - critical that users hear it." },
      { t: "Timestamp updates announce sparingly.", b: "Only announce major transitions (saved → saving → failed). Don't announce every minute update." },
      { t: "Visible icon supports the colour.", b: "Each state has a distinct icon (check / sync / error). Colour reinforces but isn't the only cue." },
    ],
    related: [
      { name: "Alert / Toast", note: "For one-off save notifications, use Toast. Draft Banner is persistent; Toast is temporary.", preview: (<div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}><span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span><div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Saved</p></div></div>) },
      { name: "Progress Indicator", note: "For showing how much of a multi-step form is complete, use Progress. Draft Banner is about save state; Progress is about completion.", preview: (<div style={{ height: 6, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 3 }}><div style={{ width: "68%", height: "100%", background: "var(--ux4g-bg-primary-strong)", borderRadius: 3 }}></div></div>) },
      { name: "Spinner", note: "Spinner appears next to 'Saving…' state inline. Subtle indication that save is in flight.", preview: <span className="ux4g-spinner ux4g-spinner-sm"></span> },
      { name: "Textarea", note: "Long textareas often pair with Draft Banner - auto-saves user's writing every 30 seconds.", preview: <textarea readOnly defaultValue="Long content…" style={{ width: "100%", height: 40, padding: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, resize: "none" }}></textarea> },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
