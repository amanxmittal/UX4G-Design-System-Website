/* global React */
(function () {
  function SG({ slots = [{ t: "09:00" }, { t: "10:00", state: "full" }, { t: "11:00", state: "active" }, { t: "12:00" }, { t: "14:00" }, { t: "15:00" }] }) {
    return (
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, width: "100%" }}>
        {slots.map((s, i) => (
          <button key={i} disabled={s.state === "full"} style={{ padding: "10px 0", fontSize: 13, fontWeight: 500, borderRadius: 6, background: s.state === "active" ? "var(--ux4g-bg-primary-strong)" : s.state === "full" ? "var(--ux4g-bg-neutral-soft)" : "var(--ux4g-bg-neutral-elevated)", color: s.state === "active" ? "#fff" : s.state === "full" ? "var(--ux4g-text-neutral-tertiary)" : "var(--ux4g-text-neutral-primary)", border: s.state === "active" ? "none" : "1px solid var(--ux4g-border-color-neutral-subtle)", cursor: s.state === "full" ? "not-allowed" : "pointer", textDecoration: s.state === "full" ? "line-through" : "none" }}>{s.t}</button>
        ))}
      </div>
    );
  }
  function Hero() {
    const slots = [
      { t: "09:00", state: "" },
      { t: "10:00", state: "full" },
      { t: "11:00", state: "on" },
      { t: "12:00", state: "" },
      { t: "14:00", state: "" },
      { t: "15:00", state: "full" },
      { t: "16:00", state: "" },
      { t: "17:00", state: "" },
    ];
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, width: 480, background: "#fff", borderRadius: 16, padding: "24px 28px", boxShadow: "0 16px 32px -12px rgba(48,28,125,0.4)" }}>
          <div style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 14, fontWeight: 700, color: "var(--primary-dark)", marginBottom: 14 }}>Wed, 18 Apr · Verification</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
            {slots.map(s => (
              <div key={s.t} style={{
                height: 48, borderRadius: 10,
                background: s.state === "on" ? "var(--amber)" : s.state === "full" ? "rgba(48,28,125,0.08)" : "#fff",
                border: s.state === "full" ? "1px solid rgba(48,28,125,0.08)" : s.state === "on" ? "none" : "1.5px solid rgba(48,28,125,0.2)",
                color: s.state === "full" ? "rgba(48,28,125,0.35)" : "var(--primary-dark)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 14, fontWeight: 600,
                textDecoration: s.state === "full" ? "line-through" : "none",
              }}>{s.t}</div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Slot Grid", navName: "Slot Grid", group: "Data Display",
    desc: "Time-slot selection for appointments and biometric capture. Visual grid of available, selected, and full slots.",
    bannerVariant: "table", hero: Hero,
    anatomy: [
      { n: 1, label: "Slot cell (available)", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Selected slot", token: "ux4g-bg-primary-strong" },
      { n: 3, label: "Full / unavailable", token: "ux4g-bg-neutral-soft" },
      { n: 4, label: "Slot label", token: "ux4g-label-m-default" },
      { n: 5, label: "Grid spacing", token: "ux4g-inline-xs" },
      { n: 6, label: "Tap target", token: "≥ 44 × 44px" },
    ],
    properties: [
      { label: "Slot state", desc: "Available (outlined), selected (filled primary), full (greyed + strikethrough). Disabled slots stay visible for context.", demos: [
        { label: "All states", wide: true, node: <SG /> },
      ] },
    ],
    scenarios: [
      { title: "Biometric capture booking", desc: "User picks an available slot at the nearest service centre. Full slots stay visible so users see availability.", stage: <SG slots={[{ t: "09:00" }, { t: "10:00", state: "full" }, { t: "11:00", state: "active" }, { t: "12:00" }]} /> },
      { title: "Multi-day availability", desc: "Slot grid grouped by date - 'Today / Tomorrow / Mon 21 Apr'. Each day has its own grid.", stage: (<div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}><div><div style={{ fontSize: 12, fontWeight: 600, marginBottom: 6 }}>TODAY</div><SG slots={[{ t: "09:00", state: "full" }, { t: "10:00" }, { t: "11:00" }]} /></div></div>) },
      { title: "Locked slot - explanation", desc: "When a slot is locked due to user error (must complete previous steps), greyed-out with hint text below the grid.", stage: (<div style={{ width: "100%" }}><SG slots={[{ t: "09:00", state: "full" }, { t: "10:00", state: "full" }, { t: "11:00", state: "full" }]} /><div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)", marginTop: 8 }}>All slots booked today - try tomorrow</div></div>) },
      { title: "No slots available - empty state", desc: "When no slots exist (centre closed), surface Empty State explaining and offering alternative dates.", stage: (<div style={{ width: "100%", padding: 24, textAlign: "center", border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 8 }}><div style={{ fontSize: 14, fontWeight: 600 }}>No slots today</div><div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>Try tomorrow or pick a different centre</div></div>) },
    ],
    responsive: [
      { title: "3 columns desktop, 2 columns mobile", desc: "Below 480px, columns reduce from 3 to 2 so each slot stays tappable.", sample: <SG /> },
      { title: "Tap targets stay 44 × 44px", desc: "Each slot has minimum 44px height with padding for tap area.", sample: <SG /> },
    ],
    practices: [
      { do: { stage: <SG slots={[{ t: "09:00" }, { t: "10:00", state: "full" }, { t: "11:00" }]} />, rule: "Show full slots greyed out - users see what's not available without scrolling for alternatives." }, dont: { stage: <SG slots={[{ t: "09:00" }, { t: "11:00" }]} />, rule: "Hiding full slots looks like there are fewer options - confusing." } },
      { do: { stage: <SG slots={[{ t: "10:00", state: "active" }]} />, rule: "Selected slot uses strong fill - obvious which one was picked." }, dont: { stage: <SG slots={[{ t: "10:00" }]} />, rule: "No selected state means users wonder if their tap registered." } },
    ],
    accessibility: [
      { t: "Use role='grid' with role='gridcell'.", b: "Slot grid is `role='grid'`; each slot is `role='gridcell'`. Arrow keys navigate." },
      { t: "Unavailable slots use aria-disabled.", b: "Full slots use `aria-disabled='true'` instead of native disabled - stay in tab order with reason." },
      { t: "Selected slot uses aria-selected.", b: "Active slot marks `aria-selected='true'`. Screen readers announce 'selected' alongside time." },
      { t: "Tap targets stay 44 × 44px.", b: "Slot cells include invisible padding for full 44px area. Thumb-friendly." },
      { t: "Group header announces context.", b: "Each day group has `<h3>Today</h3>` heading. Screen readers can jump between days." },
    ],
    related: [
      { name: "Time Picker", note: "For free-form time entry (not constrained to slots), use the Time Picker. Slot Grid is for limited availability windows.", preview: (<div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}><div className="ux4g-input"><span className="ux4g-input-leading-icon ux4g-icon-outlined">calendar_today</span><input type="text" className="ux4g-input-input" defaultValue="14:30" readOnly /></div></div>) },
      { name: "Chip", note: "For simple availability filters (Morning / Afternoon / Evening), use Chip Group. Slot Grid is for specific times.", preview: (<div style={{ display: "flex", gap: 6 }}><span className="ux4g-filter-chip-md">AM</span><span className="ux4g-filter-chip-md active">PM</span></div>) },
      { name: "Calendar Event Link", note: "After picking a slot, surface 'Add to Calendar' via Calendar Event Link.", preview: <button className="ux4g-btn-outline-primary ux4g-btn-sm">Add to Calendar</button> },
      { name: "Empty State", note: "When no slots are available, replace the grid with Empty State that offers alternative dates.", preview: (<div style={{ padding: 12, textAlign: "center", border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, color: "var(--ux4g-text-neutral-secondary)", fontSize: 12 }}>No slots</div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
