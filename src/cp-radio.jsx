/* global React */
(function () {
  function Rb({ checked, disabled, label, hint, name = "rg", error }) {
    return (
      <label className={"ux4g-radio" + (disabled ? " state-disabled" : "") + (error ? " state-error" : "")}>
        <input type="radio" name={name} className="ux4g-radio-input" defaultChecked={checked} disabled={disabled} readOnly />
        <div className="ux4g-radio-control"><span className="ux4g-radiomark"></span></div>
        {label && (
          <div className="ux4g-radio-content">
            <div className="ux4g-radio-header"><span className="ux4g-radio-label">{label}</span></div>
            {hint && <span className="ux4g-radio-hint">{hint}</span>}
          </div>
        )}
      </label>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-choice-mock">
          <div className="hb-choice-row on">
            <div className="hb-choice-box radio"></div>
            <div className="hb-choice-label"></div>
          </div>
          <div className="hb-choice-row">
            <div className="hb-choice-box radio"></div>
            <div className="hb-choice-label"></div>
          </div>
          <div className="hb-choice-row">
            <div className="hb-choice-box radio"></div>
            <div className="hb-choice-label"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/radio/";

  const config = {
    name: "Radio Button",
    navName: "Radio Button",
    group: "Form Elements",
    desc: "Single-choice control for mutually exclusive options - authentication method, language, scheme tier. One option in a group is always selected.",
    bannerVariant: "radio",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Radio button anatomy. A radio control sits left of a required Label, an optional helper icon follows the label, and a Description sits below. Four numbered markers point to the Control, Label, Helper icon, and Description.",
    anatomy: [
      { n: 1, label: "Control", desc: "The circle that fills when the option is selected." },
      { n: 2, label: "Label", desc: "The option text in the mutually-exclusive set." },
      { n: 3, label: "Helper icon", desc: "An optional info icon for extra context." },
      { n: 4, label: "Description", desc: "Supporting text below the option." },
    ],

    properties: [
      {
        label: "State",
        desc: "Selected and unselected are the two core states. Disabled keeps the option visible but inert. Error highlights an entire group missing a required choice.",
        img: IMG + "properties-state.png",
        imgAlt: "Five labelled radio states, each annotated with its name: Unselected, Selected, Focused, Disabled, and Error (red ring).",
        demos: [
          { label: "Unselected", node: <Rb name="p1" label="OTP on mobile" /> },
          { label: "Selected", node: <Rb name="p2" checked label="OTP on mobile" /> },
          { label: "Disabled", node: <Rb name="p3" disabled label="DigiLocker" /> },
          { label: "Disabled + selected", node: <Rb name="p4" disabled checked label="OTP on mobile (pre-selected)" /> },
          { label: "Error", node: <Rb name="p5" error label="OTP on mobile" /> },
        ],
      },
      {
        label: "Label and hint",
        desc: "Always pair a radio with a visible label. Use a hint to explain trade-offs ('Slower but no OTP') or consequences ('Auto-deducted from bank account').",
        img: IMG + "properties-label-hint.png",
        imgAlt: "Two radio buttons: one with a label only, and one with a label plus a helper hint below it.",
        demos: [
          { label: "Label only", node: <Rb name="p6" checked label="OTP on mobile" /> },
          { label: "Label + hint", node: <Rb name="p7" label="UPI" hint="Settles in 2 hours via NPCI" /> },
        ],
      },
      {
        label: "Grouped",
        desc: "Radio groups always live in a single fieldset with a legend. Vertical stack is default; horizontal allowed only for short binary choices on desktop.",
        img: IMG + "properties-grouped.png",
        imgAlt: "A vertical radio group of four payment options with the first selected.",
        demos: [
          { label: "Vertical group", wide: true, node: (
            <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
              <Rb name="g1" checked label="OTP on mobile" hint="Quickest, requires linked mobile" />
              <Rb name="g1" label="DigiLocker" hint="Use if your DigiLocker is set up" />
              <Rb name="g1" label="Username & password" hint="Use your portal credentials" />
            </div>
          ) },
        ],
      },
    ],

    scenarios: [
      {
        title: "Authentication method",
        desc: "Citizens pick how they want to verify identity. Each option explains trade-off in hint text so the choice is informed, not arbitrary.",
        img: IMG + "scenarios-auth.png",
        imgAlt: "An authentication method radio group: OTP on mobile selected, DigiLocker, and Username and password.",
        stage: (
          <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <Rb name="s1" checked label="OTP on mobile" hint="Quickest, requires linked mobile" />
            <Rb name="s1" label="DigiLocker" hint="Use if your DigiLocker is set up" />
            <Rb name="s1" label="Username & password" hint="Use your portal credentials" />
          </div>
        ),
      },
      {
        title: "Default pre-selection",
        desc: "Pre-select the most common or recommended option when there's a clear default. Saves a tap for 80% of users without locking out alternatives.",
        img: IMG + "scenarios-preselect.png",
        imgAlt: "A delivery radio group with Standard delivery pre-selected and its Free hint, above Express delivery.",
        stage: (
          <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <Rb name="s2" checked label="English (en-IN)" />
            <Rb name="s2" label="हिन्दी (hi-IN)" />
          </div>
        ),
      },
      {
        title: "Error - no choice made",
        desc: "If a required group is submitted with no selection, highlight all options in error state and surface a message above or below the group.",
        img: IMG + "scenarios-error.png",
        imgAlt: "A payment radio group shown in error state with red rings and no option selected.",
        stage: (
          <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <Rb name="s3" error label="UPI" />
            <Rb name="s3" error label="Card" />
            <span style={{ color: "var(--ux4g-text-error-default)", fontSize: 12 }}>Pick a payment method to continue</span>
          </div>
        ),
      },
      {
        title: "Locked due to eligibility",
        desc: "When an option is unavailable - geographic restriction, scheme cap reached - keep it visible but disabled with the reason in hint.",
        img: IMG + "scenarios-locked.png",
        imgAlt: "A radio group with General category selected and a disabled Senior citizen quota option marked available from age 60.",
        stage: (
          <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <Rb name="s4" checked label="Standard delivery" hint="3-5 business days" />
            <Rb name="s4" disabled label="Express delivery" hint="Not available for your pincode" />
          </div>
        ),
      },
      {
        title: "Card-style radio for rich options",
        desc: "When each option carries more information than a line of text (price, ETA, features), use the card variant so users compare side-by-side.",
        img: IMG + "scenarios-card.png",
        imgAlt: "Two card-style radio options on subtle backgrounds: Video KYC selected and In-person at CSC.",
        stage: (
          <div role="radiogroup" style={{ display: "flex", gap: 12, width: "100%" }}>
            <div style={{ flex: 1, padding: 16, border: "2px solid var(--ux4g-border-color-primary-strong)", borderRadius: 8, background: "var(--ux4g-bg-primary-subtle)" }}>
              <Rb name="s5" checked label="UPI" hint="Free · Instant" />
            </div>
            <div style={{ flex: 1, padding: 16, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8 }}>
              <Rb name="s5" label="Card" hint="₹10 fee · Instant" />
            </div>
          </div>
        ),
      },
      {
        title: "Settings - committed on selection",
        desc: "In settings screens, selecting a radio commits the change immediately. Show a brief inline confirmation so users know the change saved.",
        img: IMG + "scenarios-settings.png",
        imgAlt: "A language settings radio group with English selected, above हिन्दी and தமிழ்.",
        stage: (
          <div style={{ width: "100%" }}>
            <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Rb name="s6" checked label="Light theme" />
              <Rb name="s6" label="Dark theme" />
              <Rb name="s6" label="System default" />
            </div>
            <span style={{ fontSize: 11, color: "var(--ux4g-text-success-default)", marginTop: 8, display: "inline-block" }}>✓ Saved</span>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Tap target stays 44 × 44px on every breakpoint",
        desc: "The visible 18-20px control sits inside an invisible 44px tap area. Critical for thumb-first mobile use and motor accessibility.",
        img: IMG + "responsive-tap.png",
        imgAlt: "Large radio buttons keeping a 44 by 44px tap target.",
        sample: <Rb name="r1" checked label="OTP on mobile" />,
      },
      {
        title: "Vertical stacking, never horizontal on mobile",
        desc: "Radio groups always stack vertically on mobile. Horizontal arrangement (rare on desktop) collapses to vertical below 768px.",
        img: IMG + "responsive-vertical.png",
        imgAlt: "A vertically stacked radio group of three payment options.",
        sample: (
          <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Rb name="r2" checked label="UPI" />
            <Rb name="r2" label="Card" />
            <Rb name="r2" label="Net banking" />
          </div>
        ),
      },
      {
        title: "Card variant collapses to full-width on mobile",
        desc: "Card-style radios that sit side-by-side on desktop stack vertically below 480px, each taking full container width.",
        img: IMG + "responsive-mobile.png",
        imgAlt: "Full-width radio options with hints, stacked for mobile.",
        sample: (
          <div role="radiogroup" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ padding: 14, border: "2px solid var(--ux4g-border-color-primary-strong)", borderRadius: 8, background: "var(--ux4g-bg-primary-subtle)" }}>
              <Rb name="r3" checked label="UPI" hint="Free · Instant" />
            </div>
            <div style={{ padding: 14, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8 }}>
              <Rb name="r3" label="Card" hint="₹10 fee · Instant" />
            </div>
          </div>
        ),
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A vertically stacked radio group, easy to scan.",
          rule: "Stack radio options vertically so each is easy to scan and tap.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "Three radios crammed into one horizontal row.",
          rule: "Do not cram options into a horizontal row; labels collide and scanning gets harder.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "A radio group with a sensible default pre-selected and marked Recommended.",
          rule: "Pre-select a sensible default so users can proceed with one fewer decision.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A radio group with nothing selected.",
          rule: "Do not leave every option blank when a reasonable default exists.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "Radio options with clear labels and helpful hints.",
          rule: "Write clear labels and add a hint when an option needs explanation.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "Radio options labelled only Option 1 and Option 2.",
          rule: "Do not use terse, ambiguous labels users cannot tell apart.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-4-do.png",
          imgAlt: "Comfortably sized radio buttons.",
          rule: "Use a comfortable size so the control and its tap target are easy to hit.",
        },
        dont: {
          img: IMG + "best-practices-4-dont.png",
          imgAlt: "Very small radio buttons that are hard to tap.",
          rule: "Do not shrink radios below a comfortable tap size, especially on touch screens.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-5-do.png",
          imgAlt: "A short radio list of three options.",
          rule: "Use radios for a small set of mutually exclusive options.",
        },
        dont: {
          img: IMG + "best-practices-5-dont.png",
          imgAlt: "A long list of seven cramped radio options.",
          rule: "Do not use radios for long lists; past about five options, switch to a dropdown.",
        },
      },
    ],

    accessibility: [
      { t: "Wrap a group in fieldset + legend.", b: "Screen readers announce the legend when entering the group, so users know what choice they're making before hearing the options." },
      { t: "Use arrow keys to move within a group.", b: "Tab enters the group; arrow keys move between options. Native `<input type=radio>` with shared `name` provides this for free." },
      { t: "Tap targets stay 44 × 44px or larger.", b: "The visible 18-20px control sits inside invisible 44px padding. Touch users hit the same target as the visible control." },
      { t: "Required groups use aria-required.", b: "Mark required radio groups with `aria-required='true'` on the fieldset. Validation errors get linked via `aria-describedby`." },
      { t: "Disabled options stay in tab order.", b: "Use `aria-disabled='true'` instead of native `disabled` when context matters - so users hear why the option is locked." },
      { t: "Selection state has a non-colour cue.", b: "The filled dot itself signals selection. Colour reinforces but is never the only signal - critical for monochrome and colour-blind users." },
      { t: "Pre-selected default is announced clearly.", b: "If a radio is checked by default, screen readers say 'selected' on first encounter so users know they don't need to act unless changing." },
    ],

    related: [
      {
        name: "Checkbox",
        note: "When users can pick zero, one, or many options, use Checkbox. Radio forces exactly one - wrong for multi-select cases.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
            <label className="ux4g-checkbox">
              <input type="checkbox" className="ux4g-checkbox-input" defaultChecked readOnly />
              <div className="ux4g-checkbox-control"><span className="ux4g-checkmark"></span></div>
              <div className="ux4g-checkbox-content"><div className="ux4g-checkbox-header"><span className="ux4g-checkbox-label">Send SMS updates</span></div></div>
            </label>
            <label className="ux4g-checkbox">
              <input type="checkbox" className="ux4g-checkbox-input" readOnly />
              <div className="ux4g-checkbox-control"><span className="ux4g-checkmark"></span></div>
              <div className="ux4g-checkbox-content"><div className="ux4g-checkbox-header"><span className="ux4g-checkbox-label">Email digest</span></div></div>
            </label>
          </div>
        ),
      },
      {
        name: "Switch / Toggle",
        note: "For binary on/off preferences that commit on flip (notifications, dark mode), use Toggle instead. Radios commit on form submit.",
        preview: (
          <label className="ux4g-switch">
            <input type="checkbox" className="ux4g-switch-input" defaultChecked readOnly />
            <div className="ux4g-switch-control"><div className="ux4g-switch-track"><div className="ux4g-switch-thumb"></div></div></div>
          </label>
        ),
      },
      {
        name: "Dropdown Menu",
        note: "When the list of options is long (10+) or space is tight, use Dropdown. Radio works best for 2-6 visible options.",
        preview: (
          <div className="ux4g-dropdown" style={{ width: "100%" }}>
            <div className="ux4g-dropdown-control">
              <div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text">Maharashtra</span></div>
              <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
            </div>
          </div>
        ),
      },
      {
        name: "Tab",
        note: "When switching between content panels rather than choosing a value, use Tab. Radios commit on submit; tabs switch view immediately.",
        preview: (
          <div className="ux4g-tab ux4g-tab-underline ux4g-tab-sm">
            <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="ux4g-tab-item is-active" role="tab">Overview</li>
              <li className="ux4g-tab-item" role="tab">Documents</li>
            </ul>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
