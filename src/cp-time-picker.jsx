/* global React */
(function () {
  function Hero() {
    const hrs = ["06", "07", "08"];
    const mins = ["35", "40", "45"];
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-modal-mock" style={{ width: 320, padding: "20px 24px" }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
            <span style={{ flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 8, background: "var(--amber)", color: "var(--primary-dark)", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontWeight: 700, fontSize: 13 }}>AM</span>
            <span style={{ flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 8, color: "var(--primary-dark)", opacity: 0.5, fontFamily: "var(--ux4g-ff-display, sans-serif)", fontWeight: 700, fontSize: 13 }}>PM</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, fontFamily: "var(--ux4g-ff-display, sans-serif)" }}>
            {[hrs, mins].map((col, ci) => (
              <div key={ci} style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
                <div style={{ fontSize: 10, color: "var(--primary-dark)", opacity: 0.4, fontWeight: 700, letterSpacing: "0.08em" }}>{ci === 0 ? "HH" : "MM"}</div>
                {col.map((v, i) => (
                  <div key={v} style={{ fontSize: 15, fontWeight: i === 1 ? 800 : 500, color: "var(--primary-dark)", opacity: i === 1 ? 1 : 0.45, padding: "4px 14px", borderRadius: 8, background: i === 1 ? "rgba(255,255,255,0.18)" : "transparent" }}>{v}</div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/time-picker/";

  const config = {
    name: "Time Picker", navName: "Time Picker", group: "Form Elements",
    desc: "A time-of-day picker — scroll hours and minutes, with an AM/PM toggle in 12-hour mode or a 24-hour clock for government services. For dates, use the Date Picker.",
    bannerVariant: "card", hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Time Picker anatomy, shown as two parts. The closed trigger (top) has four markers: 1 the label, 2 the trigger field reading ‘Select time’, 3 the clock icon, and 4 the description. The open picker menu (bottom) has four markers: 1 the minute column (MM) with 15 selected, 2 the hour column (HH) with 04 selected, 3 the Done / Cancel footer actions, and 4 the AM / PM toggle (AM selected) on the right.",
    anatomy: [
      { n: 1, label: "Label", desc: "Names the field." },
      { n: 2, label: "Trigger field", desc: "The input that displays the time and opens the picker." },
      { n: 3, label: "Clock icon", desc: "Affordance that the field opens a time picker." },
      { n: 4, label: "Description / helper", desc: "Format hint or supporting text below the field." },
      { n: 1, label: "Open picker · Minute column (MM)", desc: "Scrolls minutes; the selected value is highlighted." },
      { n: 2, label: "Open picker · Hour column (HH)", desc: "Scrolls hours; the selected value is highlighted." },
      { n: 3, label: "Open picker · Footer actions", desc: "Done confirms the time; Cancel dismisses the picker." },
      { n: 4, label: "Open picker · AM / PM toggle", desc: "Switches meridiem in 12-hour mode." },
    ],

    properties: [
      { label: "Format", desc: "12-hour mode shows an AM / PM toggle alongside the hour and minute columns. 24-hour mode drops the toggle and runs hours 00–23 — the government-services default.", img: IMG + "properties-format.png", imgAlt: "Two time-picker menus side by side: ‘12-hour (AM/PM)’ with an AM/PM toggle above the HH and MM columns, and ‘24-hour’ with just HH and MM columns and no toggle." },
      { label: "Field state", desc: "The trigger field carries the full input state set — default with a helper, error with an inline message, and disabled when the time is locked by an earlier choice.", img: IMG + "properties-state.png", imgAlt: "Three ‘Appointment time’ trigger fields: Default showing 10 : 30 AM with an office-hours helper, Error showing 25 : 30 AM with ‘Enter a valid time’, and Disabled (greyed) reading ‘Select time’ with ‘Pick a date first’." },
    ],

    scenarios: [
      { title: "Appointment time", desc: "A closed time field shows the chosen slot with a clock affordance and a helper that frames the allowed window — typical for booking and scheduling.", img: IMG + "scenarios-appointment.png", imgAlt: "An ‘Appointment time’ field showing 10 : 30 AM with a clock icon and the helper ‘Office is open 10:00–17:00’." },
      { title: "Pick a time", desc: "Opening the field reveals the scroll picker — an AM/PM toggle with hour and minute columns that snap to the configured step (here every 5 minutes).", img: IMG + "scenarios-pick.png", imgAlt: "An opened 12-hour time picker with an AM/PM toggle and HH / MM columns stepping in fives, plus Done / Cancel." },
    ],

    responsive: [
      { title: "Full-width trigger field", desc: "On mobile the trigger field stretches to the form width and keeps the clock icon as the tap affordance, with the label above. The picker opens as a sheet.", img: IMG + "responsive-field.png", imgAlt: "A full-width ‘Reminder time’ Time Picker trigger field reading ‘Select time’ with a clock icon." },
    ],

    practices: [
      { do: { img: IMG + "best-practices-1-do.png", imgAlt: "A 24-hour time picker — HH and MM columns with no AM/PM toggle.", rule: "Use 24-hour time for government services — it removes AM/PM ambiguity." },
        dont: { img: IMG + "best-practices-1-dont.png", imgAlt: "A 12-hour time picker with an AM/PM toggle.", rule: "12-hour AM/PM invites mistakes — was that 7 in the morning or evening?" } },
      { do: { img: IMG + "best-practices-2-do.png", imgAlt: "A ‘Pickup time’ field showing 09 : 00 AM with a clock icon and the hint ‘Tap the clock to choose’.", rule: "Keep the clock icon — it signals the field opens a time picker." },
        dont: { img: IMG + "best-practices-2-dont.png", imgAlt: "A ‘Pickup time’ field showing 09 : 00 AM with no icon, looking like a plain text box.", rule: "Without the clock icon the field looks like a plain text box." } },
    ],

    accessibility: [
      { t: "Hour and minute columns use listbox semantics.", b: "Each column is a `role='listbox'` of `role='option'` values; Up/Down arrows move the selection and announce the new value." },
      { t: "The selected value uses aria-selected.", b: "The active hour, minute, and AM/PM option carry `aria-selected='true'` so screen-reader users hear the current time." },
      { t: "Input accepts a typed time as fallback.", b: "Power users type HH:MM directly instead of scrolling. Auto-format and validate against the chosen 12- or 24-hour mode." },
      { t: "State (AM/PM, 24h) is announced.", b: "The picker exposes the clock mode so assistive tech reads ‘14:30’ or ‘2:30 PM’ unambiguously, matching the visible format." },
      { t: "Format hint stays near the field.", b: "A helper such as ‘24-hour’ or ‘HH:MM’ tells users the expected format — critical for screen-reader and low-vision users." },
    ],

    related: [
      { name: "Date Picker", note: "For calendar date selection (single or range), use the Date Picker. Pair the two when you need both a date and a time.", preview: (<div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}><div className="ux4g-input"><span className="ux4g-input-leading-icon ux4g-icon-outlined">calendar_today</span><input type="text" className="ux4g-input-input" defaultValue="23 / 04 / 2026" readOnly /></div></div>) },
      { name: "Slot Grid", note: "When time choices come from a fixed set of bookable slots (10:00, 11:00, 14:00), use Slot Grid instead of free-form scrolling.", preview: (<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, maxWidth: 140 }}><span style={{ padding: 4, fontSize: 11, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4, textAlign: "center" }}>09:00</span><span style={{ padding: 4, fontSize: 11, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 4, textAlign: "center" }}>10:00</span><span style={{ padding: 4, fontSize: 11, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4, textAlign: "center" }}>11:00</span></div>) },
      { name: "Input", note: "The Time Picker is an Input with a clock trigger — it inherits all Input states (error, disabled, success).", preview: (<div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}><div className="ux4g-input"><input type="text" className="ux4g-input-input" defaultValue="14:30" readOnly /></div></div>) },
      { name: "Dropdown Menu", note: "For coarse time bands (Morning / Afternoon / Evening) rather than exact times, a Dropdown is simpler than a scroll picker.", preview: (<div className="ux4g-dropdown" style={{ width: "100%" }}><div className="ux4g-dropdown-control"><div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text">Morning</span></div><span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span></div></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
