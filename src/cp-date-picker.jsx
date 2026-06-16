/* global React */
(function () {
  function DP({ value = "28 / 04 / 2026", showCalendar }) {
    return (
      <div style={{ position: "relative", width: "100%" }}>
        <div className="ux4g-input-container ux4g-input-md ux4g-input-default" style={{ width: "100%" }}>
          <div className="ux4g-input">
            <span className="ux4g-input-leading-icon ux4g-icon-outlined">calendar_today</span>
            <input type="text" className="ux4g-input-input" defaultValue={value} readOnly />
          </div>
        </div>
        {showCalendar && (
          <div style={{ position: "absolute", top: "100%", marginTop: 4, background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, padding: 12, boxShadow: "0 8px 24px rgba(0,0,0,0.08)", width: 220 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 12, fontWeight: 600 }}><span>‹</span><span>April 2026</span><span>›</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 2 }}>
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => <div key={"h"+i} style={{ fontSize: 10, color: "var(--ux4g-text-neutral-tertiary)", textAlign: "center" }}>{d}</div>)}
              {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((d) => (
                <div key={d} style={{ padding: 4, fontSize: 11, textAlign: "center", borderRadius: 4, background: d === 28 ? "var(--ux4g-bg-primary-strong)" : "transparent", color: d === 28 ? "#fff" : "var(--ux4g-text-neutral-primary)", fontWeight: d === 28 ? 600 : 400 }}>{d}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  function Hero() {
    const wkd = ["S","M","T","W","T","F","S"];
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-modal-mock" style={{ width: 380, padding: "24px 28px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 17, fontWeight: 700, color: "var(--primary-dark)", letterSpacing: "-0.01em" }}>April 2026</span>
            <span style={{ color: "var(--primary-dark)", opacity: 0.4, fontSize: 18, fontFamily: "var(--ux4g-ff-display, sans-serif)" }}>‹ ›</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, fontFamily: "var(--ux4g-ff-display, sans-serif)" }}>
            {wkd.map((d, i) => (
              <div key={"h"+i} style={{ textAlign: "center", fontSize: 10, color: "var(--primary-dark)", opacity: 0.4, fontWeight: 700, padding: "4px 0", letterSpacing: "0.08em" }}>{d}</div>
            ))}
            {Array.from({ length: 30 }).map((_, i) => {
              const day = i + 1;
              const selected = day === 18;
              const today = day === 12;
              return (
                <div key={day} style={{
                  textAlign: "center", padding: "8px 0", fontSize: 13, fontWeight: today ? 700 : 500,
                  color: selected ? "var(--primary-dark)" : "var(--primary-dark)",
                  background: selected ? "var(--amber)" : "transparent",
                  borderRadius: 8,
                  border: today && !selected ? "1.5px solid var(--primary-dark)" : "1.5px solid transparent",
                }}>{day}</div>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
  const IMG = "assets/images/component-anatomy/date-picker/";

  const config = {
    name: "Date Picker", navName: "Date Picker", group: "Form Elements",
    desc: "Calendar-based date selection — single date or date range in DD/MM/YYYY, today highlighted, with month and year quick-jump and a mobile bottom-sheet fallback. For time-of-day, use the Time Picker.",
    bannerVariant: "card", hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Date Picker anatomy. A labelled trigger field reading ‘Select date’ with a required marker, info icon, calendar icon and a description, opening a calendar popover for April 2026 (previous/next month arrows, weekday header, a date grid with today marked by a dot and the 23rd selected) beside a year-and-month quick-jump panel (a 2020–2027 year range with 2026 selected and a Jan–Dec month grid with Apr selected), and Cancel / Confirm footer actions. Ten numbered markers point to the label, the trigger field, the calendar icon, the description, the month navigation, the year-range navigation, the year selection, the month selection, the date grid, and the footer actions.",
    anatomy: [
      { n: 1, label: "Label", desc: "Names the field; may carry a required marker and info icon." },
      { n: 2, label: "Trigger field", desc: "The input that displays the value and opens the calendar." },
      { n: 3, label: "Calendar icon", desc: "Affordance that the field opens a date picker." },
      { n: 4, label: "Description / helper", desc: "Format hint or supporting text below the field." },
      { n: 5, label: "Month navigation", desc: "Previous / next arrows to change the month." },
      { n: 6, label: "Year-range navigation", desc: "Steps through year ranges in the quick-jump panel." },
      { n: 7, label: "Year selection", desc: "Pick a year from the grid." },
      { n: 8, label: "Month selection", desc: "Pick a month from the grid." },
      { n: 9, label: "Date grid", desc: "Weekdays and dates; today is dotted, the selected date is filled." },
      { n: 10, label: "Footer actions", desc: "Cancel or Confirm the selection." },
    ],
    properties: [
      { label: "Mode", desc: "Single date picks one day (DD/MM/YYYY). Date range picks a start and end with a two-field trigger — used for report and table filters.", img: IMG + "properties-mode.png", imgAlt: "Two closed Date Picker triggers: a single-date field reading ‘Select date’, and a date-range pair of fields joined by a dash." },
      { label: "Field state", desc: "The trigger field inherits the full input state set — default with a format hint, error with an inline message, and disabled when the value is locked by an earlier step.", img: IMG + "properties-state.png", imgAlt: "Three ‘Date of birth’ trigger fields: Default with a ‘Format: DD / MM / YYYY’ hint, Error with a red border and ‘Use DD / MM / YYYY format’, and Disabled (greyed) with ‘Set after identity is verified’." },
    ],
    scenarios: [
      { title: "Pick a birth date", desc: "A common citizen-form field. The field shows the chosen date in DD/MM/YYYY and a helper sets the age rule. Power users can type the date directly.", img: IMG + "scenarios-birthdate.png", imgAlt: "A ‘Date of birth’ Date Picker field showing 14 / 03 / 1990 with the helper ‘You must be 18 or older’." },
      { title: "Filter by date range", desc: "Date-range mode picks a start and end on one calendar — the range fills between them. Ideal for report and listing filters.", img: IMG + "scenarios-range.png", imgAlt: "An opened date-range calendar for April 2026 with the 9th to 23rd highlighted as a continuous range, two date fields above, and Cancel / Confirm." },
    ],
    responsive: [
      { title: "Calendar as an overlay on mobile", desc: "On small viewports the calendar opens as a centered overlay over a dimmed backdrop instead of a floating popover, so dates stay thumb-sized and the rest of the page is masked.", img: IMG + "responsive-mobile.png", imgAlt: "A mobile calendar for April 2026 shown as a centered overlay over a dimmed backdrop, with month navigation and Cancel / Confirm." },
      { title: "Full-width trigger field", desc: "The trigger field stretches to the form width on mobile, keeping the calendar icon as the tap affordance and the label above.", img: IMG + "responsive-field.png", imgAlt: "A full-width ‘Travel date’ Date Picker trigger field with a calendar icon." },
    ],
    practices: [
      { do: { img: IMG + "best-practices-1-do.png", imgAlt: "An ‘Appointment date’ field with a calendar icon and the hint ‘Tap the calendar to pick a date’.", rule: "Keep the calendar icon — it signals the field opens a date picker." },
        dont: { img: IMG + "best-practices-1-dont.png", imgAlt: "An ‘Appointment date’ field with no icon, looking like a plain text box.", rule: "Without the calendar icon the field looks like a plain text box." } },
      { do: { img: IMG + "best-practices-2-do.png", imgAlt: "A ‘Date of birth’ field in error with the specific message ‘Use DD / MM / YYYY format’.", rule: "Make date errors specific — state the expected format." },
        dont: { img: IMG + "best-practices-2-dont.png", imgAlt: "A ‘Date of birth’ field in error with a vague message that just reads ‘Invalid’.", rule: "‘Invalid’ doesn’t tell the user what format to use." } },
    ],
    accessibility: [
      { t: "Calendar uses role='grid' with keyboard nav.", b: "Arrow keys move between dates. Home/End jump to row start/end. Page Up/Down jump to prev/next month." },
      { t: "Selected date uses aria-selected.", b: "Today and selected dates announce their state via `aria-selected='true'` and `aria-current='date'`." },
      { t: "Disabled dates have aria-disabled.", b: "Past dates, holidays, blocked slots announce as 'unavailable' via `aria-disabled='true'`." },
      { t: "Input accepts typed date as fallback.", b: "Power users type DD/MM/YYYY directly instead of opening the calendar. Auto-format as they type." },
      { t: "Format displayed near input.", b: "Helper text 'DD / MM / YYYY' tells users the expected format. Critical for screen readers and low-vision users." },
    ],
    related: [
      { name: "Input", note: "Date picker is an Input with a calendar trigger. Inherits all Input states (error, disabled, success).", preview: (<div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}><div className="ux4g-input"><input type="text" className="ux4g-input-input" defaultValue="+91 98765 43210" readOnly /></div></div>) },
      { name: "Time Picker", note: "For time-of-day entry (HH:MM, 12- or 24-hour), use the Time Picker. Pair the two when you need both a date and a time.", preview: (<div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}><div className="ux4g-input"><span className="ux4g-input-leading-icon ux4g-icon-outlined">schedule</span><input type="text" className="ux4g-input-input" defaultValue="10 : 30 AM" readOnly /></div></div>) },
      { name: "Popover", note: "Calendar opens as a Popover anchored below the input. Same auto-flip behaviour to stay in viewport.", preview: (<div style={{ background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, padding: 8, maxWidth: 160, fontSize: 12 }}><div style={{ fontWeight: 600, marginBottom: 4 }}>April 2026</div></div>) },
      { name: "Slot Grid", note: "For picking time slots from a fixed set (10:00, 11:00, 14:00), use Slot Grid instead of free-form time entry.", preview: (<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 4, maxWidth: 140 }}><span style={{ padding: 4, fontSize: 11, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4, textAlign: "center" }}>09:00</span><span style={{ padding: 4, fontSize: 11, background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 4, textAlign: "center" }}>10:00</span><span style={{ padding: 4, fontSize: 11, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4, textAlign: "center" }}>11:00</span></div>) },
      { name: "Calendar Event Link", note: "After picking a date for an appointment, surface 'Add to Google Calendar' via Calendar Event component.", preview: (<button className="ux4g-btn-outline-primary ux4g-btn-sm">Add to Calendar</button>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
