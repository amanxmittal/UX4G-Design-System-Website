/* global React */
(function () {
  function JT({ events }) {
    return (
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        {events.map((e, i) => (
          <div key={i} style={{ display: "flex", gap: 12 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", background: e.state === "done" ? "var(--ux4g-bg-success-strong)" : e.state === "active" ? "var(--ux4g-bg-primary-strong)" : "var(--ux4g-bg-neutral-soft)", border: e.state === "active" ? "3px solid var(--ux4g-bg-primary-subtle)" : "none", boxSizing: "border-box" }}></div>
              {i < events.length - 1 && <div style={{ width: 2, flex: 1, background: e.state === "done" ? "var(--ux4g-bg-success-strong)" : "var(--ux4g-bg-neutral-soft)", margin: "4px 0" }}></div>}
            </div>
            <div style={{ paddingBottom: 14, flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{e.title}</div>
              <div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)", letterSpacing: "0.04em" }}>{e.meta}</div>
              {e.body && <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)", marginTop: 4 }}>{e.body}</div>}
            </div>
          </div>
        ))}
      </div>
    );
  }
  function Hero() {
    const ev = (title, meta, state) => (
      <div style={{ display: "flex", gap: 18, position: "relative" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 24, flexShrink: 0 }}>
          <span style={{
            width: state === "active" ? 22 : 16, height: state === "active" ? 22 : 16,
            borderRadius: "50%",
            background: state === "done" ? "var(--amber)" : state === "active" ? "#fff" : "rgba(255,255,255,0.18)",
            border: state === "active" ? "4px solid var(--amber)" : "none",
            boxShadow: state === "active" ? "0 0 24px rgba(255,168,39,0.6)" : "none",
          }}></span>
          <span style={{ flex: 1, width: 2, background: state === "done" ? "var(--amber)" : "rgba(255,255,255,0.2)" }}></span>
        </div>
        <div style={{ paddingBottom: 16 }}>
          <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 15, fontWeight: state === "pending" ? 500 : 700, color: state === "pending" ? "rgba(255,255,255,0.55)" : "#fff" }}>{title}</div>
          <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 11, color: state === "active" ? "var(--amber)" : "rgba(255,255,255,0.5)", marginTop: 3, letterSpacing: "0.06em", fontWeight: 600 }}>{meta}</div>
        </div>
      </div>
    );
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, display: "flex", flexDirection: "column", minWidth: 360 }}>
          {ev("Application filed", "14 APR · 09:24", "done")}
          {ev("Documents verified", "15 APR · 14:02", "done")}
          {ev("Field verification", "IN PROGRESS", "active")}
          {ev("Certificate issued", "PENDING", "pending")}
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Journey Timeline", navName: "Journey Timeline", group: "Data Display",
    desc: "Vertical chronological log of every event in a citizen's case. Each event has a marker, title, timestamp, and optional detail.",
    bannerVariant: "stepper", hero: Hero,
    anatomy: [
      { n: 1, label: "Vertical axis", token: "ux4g-bg-neutral-soft" },
      { n: 2, label: "Event marker", token: "ux4g-bg-success-strong" },
      { n: 3, label: "Active marker", token: "ux4g-border-color-primary-strong" },
      { n: 4, label: "Event title", token: "ux4g-body-m-strong" },
      { n: 5, label: "Timestamp", token: "ux4g-body-xs-default" },
      { n: 6, label: "Optional body", token: "ux4g-body-s-default" },
    ],
    properties: [
      { label: "Event state", desc: "Done (green marker), active (primary ring), pending (greyed). Done events have completed timestamps.", demos: [
        { label: "Mid-journey", wide: true, node: <JT events={[{ state: "done", title: "Application filed", meta: "14 APR · 09:24" }, { state: "done", title: "Document uploaded", meta: "14 APR · 09:31" }, { state: "active", title: "Field verification", meta: "IN PROGRESS" }, { state: "pending", title: "Certificate issued", meta: "PENDING" }]} /> },
      ] },
    ],
    scenarios: [
      { title: "Application audit log", desc: "Every event tied to a citizen's application - filed, verified, escalated, resolved. Sortable; recent at top by default.", stage: <JT events={[{ state: "done", title: "Application filed", meta: "14 APR · 09:24" }, { state: "done", title: "Documents verified", meta: "16 APR · 14:12", body: "Verified by Officer Sharma" }, { state: "active", title: "In SDM review", meta: "IN PROGRESS" }]} /> },
      { title: "Grievance escalation history", desc: "Chronological list of when grievance was filed, escalated, assigned. Each event tagged with officer.", stage: <JT events={[{ state: "done", title: "Filed at SDM", meta: "14 APR" }, { state: "done", title: "Escalated to DM", meta: "20 APR", body: "Reason: SLA breach" }, { state: "active", title: "DM review", meta: "IN PROGRESS" }]} /> },
      { title: "Status update notifications", desc: "When new event occurs, mark with active marker and surface in user's notifications.", stage: <JT events={[{ state: "active", title: "New: Verification completed", meta: "JUST NOW" }, { state: "done", title: "Application filed", meta: "14 APR · 09:24" }]} /> },
      { title: "Compact version - card overlay", desc: "Inside a card, compact timeline shows 3 most-recent events with 'View all' link.", stage: <JT events={[{ state: "done", title: "Verified", meta: "16 APR" }, { state: "done", title: "Filed", meta: "14 APR" }]} /> },
    ],
    responsive: [
      { title: "Vertical layout at all breakpoints", desc: "Always vertical - horizontal timeline doesn't work for chronological scanning. Markers and content scale with viewport.", sample: <JT events={[{ state: "done", title: "Event A", meta: "14 APR" }, { state: "active", title: "Event B", meta: "NOW" }]} /> },
      { title: "Tap target on markers", desc: "Markers are minimum 24px for tappability. Tapping opens an event detail view.", sample: <JT events={[{ state: "done", title: "Event", meta: "14 APR" }]} /> },
    ],
    practices: [
      { do: { stage: <JT events={[{ state: "done", title: "Filed", meta: "14 APR · 09:24" }]} />, rule: "Include precise timestamps - users want to know exactly when events occurred." }, dont: { stage: <JT events={[{ state: "done", title: "Filed", meta: "RECENTLY" }]} />, rule: "Vague timestamps ('recently') don't help debugging or accountability." } },
      { do: { stage: <JT events={[{ state: "done", title: "Verified", meta: "16 APR", body: "By Officer Sharma" }]} />, rule: "Add context - who did it, why - in the body line." }, dont: { stage: <JT events={[{ state: "done", title: "Verified", meta: "16 APR" }]} />, rule: "Bare event without context leaves users unsure of accountability." } },
    ],
    accessibility: [
      { t: "Use ordered list semantics.", b: "Timeline is `<ol>` with each event as `<li>`. Screen readers announce 'list with 5 items'." },
      { t: "Mark current event with aria-current.", b: "Active event uses `aria-current='step'`. Screen readers announce 'current event'." },
      { t: "Timestamp uses time element.", b: "`<time datetime='2026-04-14T09:24'>14 APR · 09:24</time>`. Machine-readable for AT and search." },
      { t: "Live region for new events.", b: "When new event appears, announce 'New event: Verification completed' in `aria-live='polite'`." },
    ],
    related: [
      { name: "Status Pipeline", note: "Pipeline shows discrete stages (Filed → Verified → Issued). Timeline shows every event including timestamps.", preview: (<ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", padding: 0, margin: 0 }}><li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done"><span className="ux4g-stepper-head-icon">1</span></li><li className="ux4g-stepper-step ux4g-stepper-completed"><span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span></span></li></ul>) },
      { name: "Escalation Tree", note: "For hierarchy of where grievance has been escalated (SDM → DM → Commissioner), use Escalation Tree.", preview: (<div style={{ fontSize: 12 }}><div>SDM</div><div style={{ paddingLeft: 12 }}>→ DM</div></div>) },
      { name: "List", note: "For non-chronological event lists, use List. Timeline implies chronological order; List doesn't.", preview: (<div style={{ display: "flex", flexDirection: "column", gap: 4 }}><div style={{ padding: 6, fontSize: 13 }}>Item A</div><div style={{ padding: 6, fontSize: 13 }}>Item B</div></div>) },
      { name: "Calendar Event Link", note: "For events with calendar integration (Add to Google Calendar), use Calendar Event Link inside Timeline items.", preview: <button className="ux4g-btn-outline-primary ux4g-btn-sm">Add to Calendar</button> },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
