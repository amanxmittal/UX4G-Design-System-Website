/* global React */
(function () {
  function Sw({ on, disabled, label, hint }) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <label className={"ux4g-switch" + (disabled ? " state-disabled" : "")}>
          <input type="checkbox" className="ux4g-switch-input" defaultChecked={on} disabled={disabled} readOnly />
          <div className="ux4g-switch-control">
            <div className="ux4g-switch-track">
              <div className="ux4g-switch-thumb"></div>
            </div>
          </div>
        </label>
        {label && (
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span style={{ fontSize: 14, fontWeight: 500, color: "var(--ux4g-text-neutral-primary)" }}>{label}</span>
            {hint && <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>{hint}</span>}
          </div>
        )}
      </div>
    );
  }

  const IMG = "assets/images/component-anatomy/switch/";

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-toggle-mock">
          <div className="hb-toggle-track">
            <div className="hb-toggle-thumb"></div>
          </div>
          <span className="hb-toggle-arrow">→</span>
          <div className="hb-toggle-track on">
            <div className="hb-toggle-thumb"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Switch / Toggle",
    navName: "Switch / Toggle",
    group: "Form Elements",
    desc: "Immediate-effect on/off control for preferences and accessibility modes. Flipping the switch commits the change - no save button needed.",
    bannerVariant: "toggle",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Switch anatomy. A required Label with an optional helper icon and a Description sits left of the toggle control. Five numbered markers point to the Label, Required indicator, Helper icon, Description, and Toggle control.",
    anatomy: [
      { n: 1, label: "Label", desc: "Names what the toggle turns on or off." },
      { n: 2, label: "Required indicator", desc: "An asterisk marking the field as required." },
      { n: 3, label: "Helper icon", desc: "An optional info icon for extra context." },
      { n: 4, label: "Description", desc: "Supporting text below the toggle." },
      { n: 5, label: "Toggle control", desc: "The track and knob that slide between on and off." },
    ],

    properties: [
      {
        label: "State",
        desc: "On and off are the two core states. Each flip commits immediately - no save step. Disabled keeps the control visible but inert.",
        img: IMG + "properties-state.png",
        imgAlt: "Five labelled switch states, each annotated with its name: Off, On, Focused, Disabled (off), and Disabled (on).",
        demos: [
          { label: "Off", node: <Sw /> },
          { label: "On", node: <Sw on /> },
          { label: "Disabled · off", node: <Sw disabled /> },
          { label: "Disabled · on", node: <Sw disabled on /> },
        ],
      },
      {
        label: "Label and hint",
        desc: "Toggles always sit alongside a label. Add a hint to explain consequence ('Auto-saves every 30 seconds') or scope ('Only affects this device').",
        img: IMG + "properties-label-hint.png",
        imgAlt: "Two switches with labels: High-contrast mode, and Auto-save drafts with a helper hint.",
        demos: [
          { label: "Label only", node: <Sw on label="High-contrast mode" /> },
          { label: "Label + hint", node: <Sw on label="Auto-save drafts" hint="Saves every 30 seconds while you type" /> },
        ],
      },
      {
        label: "Group",
        desc: "Stack toggles vertically in settings panels. Each row commits its own value - never group toggles into a single submit action.",
        img: IMG + "properties-group.png",
        imgAlt: "A settings group with label on the left and switch on the right for SMS, Email, and WhatsApp alerts.",
        demos: [
          { label: "Settings group", wide: true, node: (
            <div style={{ display: "flex", flexDirection: "column", gap: 16, width: "100%" }}>
              <Sw on label="SMS notifications" hint="OTPs and status updates" />
              <Sw on label="Email digest" hint="Weekly summary on Sunday" />
              <Sw label="Marketing emails" hint="Scheme launches and surveys" />
            </div>
          ) },
        ],
      },
    ],

    scenarios: [
      {
        title: "Off → On",
        desc: "Flipping the switch commits the change immediately. The thumb slides across the track with a 200ms ease; the fill colour follows.",
        img: IMG + "scenarios-toggle.png",
        imgAlt: "A switch shown off, then on, across an arrow.",
        stage: (
          <React.Fragment>
            <Sw label="Dark mode" />
            <span className="scn-arrow" aria-hidden="true">→</span>
            <Sw on label="Dark mode" />
          </React.Fragment>
        ),
      },
      {
        title: "Settings panel",
        desc: "Every toggle in a settings panel saves on flip - no global Save button. Show a brief 'Saved' confirmation per row for clarity.",
        img: IMG + "scenarios-settings.png",
        imgAlt: "A settings panel with SMS, Email, and WhatsApp alert switches.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            <Sw on label="SMS notifications" />
            <Sw label="Email digest" />
          </div>
        ),
      },
      {
        title: "Accessibility shortcuts",
        desc: "Toggles surface high-contrast, large text, screen-reader optimisations in the Accessibility Bar. Critical to commit on flip - users can't tap Save if they can't see it.",
        img: IMG + "scenarios-a11y.png",
        imgAlt: "An accessibility shortcuts panel: High-contrast mode, Large text, and Screen-reader hints switches.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Sw on label="High-contrast theme" />
            <Sw label="Large text" />
            <Sw label="Reduce motion" />
          </div>
        ),
      },
      {
        title: "Disabled with reason",
        desc: "When a toggle is unavailable - feature in beta, plan restriction, geographic limit - keep it visible but disabled with the reason in the hint.",
        img: IMG + "scenarios-disabled.png",
        imgAlt: "A disabled WhatsApp alerts switch with a hint to add a mobile number to enable it.",
        stage: <Sw disabled label="Biometric login" hint="Available from Aug 2026" />,
      },
      {
        title: "Loading after flip",
        desc: "When the change requires a server round-trip, show a brief loading state on the switch. Roll back to previous state if the request fails.",
        img: IMG + "scenarios-loading.png",
        imgAlt: "An Auto-save drafts switch turned on with a Saving… hint.",
        stage: (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Sw on label="Cloud sync" hint="Syncing your DigiLocker…" />
            <span className="ux4g-spinner ux4g-spinner-sm" style={{ marginLeft: -4 }}></span>
          </div>
        ),
      },
      {
        title: "Pair with confirmation for destructive flips",
        desc: "Flipping a toggle that erases data (delete history, clear cache) opens a confirmation Dialog first. The toggle only commits after the user confirms.",
        img: IMG + "scenarios-confirm.png",
        imgAlt: "A Sign out of all devices switch with a hint that the user will need to sign in again everywhere.",
        stage: <Sw label="Clear browsing history on close" hint="Will ask before erasing" />,
      },
    ],

    responsive: [
      {
        title: "Tap target stays 44 × 44px",
        desc: "The visible 32px track sits inside a 44px tap area. Critical for thumb-first mobile use and motor accessibility.",
        img: IMG + "responsive-tap.png",
        imgAlt: "A large switch keeping a 44 by 44px tap target.",
        sample: <Sw on label="High-contrast mode" />,
      },
      {
        title: "Label wraps below the switch on narrow viewports",
        desc: "On viewports below 360px, long-label toggles stack the label below the switch. Keeps the row touch-friendly without truncation.",
        img: IMG + "responsive-label.png",
        imgAlt: "A switch with a long label that wraps below the control.",
        sample: <Sw on label="Auto-detect language from system settings" hint="Default off for Indic scripts" />,
      },
      {
        title: "Settings panels keep one-toggle-per-row at every breakpoint",
        desc: "Even on wide desktop, toggles always sit one per row in a settings panel. Two-column toggle grids hurt scannability.",
        img: IMG + "responsive-rows.png",
        imgAlt: "Settings switches kept one per row.",
        sample: (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Sw on label="SMS" />
            <Sw label="Email" />
          </div>
        ),
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "An Email alerts switch that applies instantly.",
          rule: "Use a switch for an on/off setting that takes effect immediately.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A switch labelled Submit application.",
          rule: "Do not use a switch for a one-time action; use a button instead.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "A switch labelled Enable two-factor authentication with a hint.",
          rule: "Label the switch with what turning it on does.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A switch labelled only Setting 1.",
          rule: "Do not use vague labels the user cannot interpret.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "A settings group with every label left and switch right.",
          rule: "Keep label and switch alignment consistent down a settings list.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "A settings group where one row flips the label and switch sides.",
          rule: "Do not mix alignment; inconsistent rows are hard to scan.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-4-do.png",
          imgAlt: "Comfortably sized switches.",
          rule: "Use a comfortable size so the switch and its tap target are easy to hit.",
        },
        dont: {
          img: IMG + "best-practices-4-dont.png",
          imgAlt: "Very small switches that are hard to tap.",
          rule: "Do not shrink switches below a comfortable tap size.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-5-do.png",
          imgAlt: "One switch per row in a settings list.",
          rule: "Give each switch its own row so labels and state stay clear.",
        },
        dont: {
          img: IMG + "best-practices-5-dont.png",
          imgAlt: "Two switches crammed side by side in one row.",
          rule: "Do not place multiple switches in a single row.",
        },
      },
    ],

    accessibility: [
      { t: "Use role='switch' with aria-checked.", b: "Native `<input type='checkbox'>` doesn't communicate switch semantics to screen readers. Add `role='switch'` and toggle `aria-checked` so 'on' / 'off' is announced." },
      { t: "Tap targets stay 44 × 44px or larger.", b: "The visible track is 32px wide but invisible padding extends to 44px. Thumb users and touch users hit the same target." },
      { t: "Label is programmatically linked.", b: "Wrap the input in a `<label>` or use `htmlFor`. Tapping the label flips the switch - critical for motor-limited users." },
      { t: "Confirm destructive flips before committing.", b: "If flipping the switch loses data (clear history, log out everywhere), open a confirmation Dialog. The switch only flips after user confirms." },
      { t: "Disabled state still focusable for keyboard users.", b: "Use `aria-disabled='true'` instead of native `disabled` so disabled toggles stay in tab order with a clear reason." },
      { t: "State is communicated without colour.", b: "Thumb position alone signals on/off. Colour reinforces but is never the only signal - works for monochrome and colour-blind users." },
      { t: "Live region announces server-side commit.", b: "If the toggle calls an API, announce 'Saved' in an `aria-live='polite'` region so screen-reader users hear confirmation." },
    ],

    related: [
      {
        name: "Checkbox",
        note: "When users pick multiple options to be submitted together (form, document list), use Checkbox. Toggle commits each value individually on flip.",
        preview: (
          <label className="ux4g-checkbox">
            <input type="checkbox" className="ux4g-checkbox-input" defaultChecked readOnly />
            <div className="ux4g-checkbox-control"><span className="ux4g-checkmark"></span></div>
            <div className="ux4g-checkbox-content"><div className="ux4g-checkbox-header"><span className="ux4g-checkbox-label">I agree to terms</span></div></div>
          </label>
        ),
      },
      {
        name: "Radio Button",
        note: "When users pick one from a fixed set of mutually exclusive options, use Radio. Toggle is for binary on/off only.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label className="ux4g-radio">
              <input type="radio" name="rel-rs" className="ux4g-radio-input" defaultChecked readOnly />
              <div className="ux4g-radio-control"><span className="ux4g-radiomark"></span></div>
              <div className="ux4g-radio-content"><div className="ux4g-radio-header"><span className="ux4g-radio-label">Light</span></div></div>
            </label>
            <label className="ux4g-radio">
              <input type="radio" name="rel-rs" className="ux4g-radio-input" readOnly />
              <div className="ux4g-radio-control"><span className="ux4g-radiomark"></span></div>
              <div className="ux4g-radio-content"><div className="ux4g-radio-header"><span className="ux4g-radio-label">Dark</span></div></div>
            </label>
          </div>
        ),
      },
      {
        name: "Accessibility Bar",
        note: "Toggles for text size, contrast, and language live in the Accessibility Bar component, which surfaces them on every page.",
        preview: (
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ padding: "4px 8px", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4, fontSize: 12 }}>A−</div>
            <div style={{ padding: "4px 8px", background: "var(--ux4g-bg-primary-strong)", color: "#fff", borderRadius: 4, fontSize: 12 }}>A</div>
            <div style={{ padding: "4px 8px", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 4, fontSize: 12 }}>A+</div>
          </div>
        ),
      },
      {
        name: "Tag",
        note: "For toggleable filter chips that show selected state (e.g. 'live' / 'coming soon'), use Tag or Chip - not a Toggle.",
        preview: (
          <div style={{ display: "flex", gap: 6 }}>
            <span className="ux4g-filter-chip-md active">Live</span>
            <span className="ux4g-filter-chip-md">Coming</span>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
