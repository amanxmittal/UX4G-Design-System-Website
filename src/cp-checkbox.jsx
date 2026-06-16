/* global React */
(function () {
  function Cb({ checked, indeterminate, disabled, label, hint, error }) {
    return (
      <label className={"ux4g-checkbox" + (disabled ? " state-disabled" : "") + (error ? " state-error" : "")}>
        <input type="checkbox" className="ux4g-checkbox-input" defaultChecked={checked} disabled={disabled} readOnly />
        <div className={"ux4g-checkbox-control" + (indeterminate ? " is-indeterminate" : "")}>
          <span className="ux4g-checkmark"></span>
        </div>
        {label && (
          <div className="ux4g-checkbox-content">
            <div className="ux4g-checkbox-header">
              <span className="ux4g-checkbox-label">{label}</span>
            </div>
            {hint && <span className="ux4g-checkbox-hint">{hint}</span>}
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
            <div className="hb-choice-box"></div>
            <div className="hb-choice-label"></div>
          </div>
          <div className="hb-choice-row on">
            <div className="hb-choice-box"></div>
            <div className="hb-choice-label"></div>
          </div>
          <div className="hb-choice-row">
            <div className="hb-choice-box"></div>
            <div className="hb-choice-label"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/checkbox/";

  const config = {
    name: "Checkbox",
    navName: "Checkbox",
    group: "Form Elements",
    desc: "Multi-select control for consent, opt-ins and document checklists. Use when users can pick zero, one, or many options from a list.",
    bannerVariant: "checkbox",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Checkbox anatomy. A control box (shown in the indeterminate state) sits left of a required Label, an optional helper icon follows the label, and a Description sits below. Four numbered markers point to the Control box, Label, Helper icon, and Description.",
    anatomy: [
      { n: 1, label: "Control box", desc: "The square that toggles checked, unchecked or indeterminate." },
      { n: 2, label: "Label", desc: "The option text the user is selecting." },
      { n: 3, label: "Helper icon", desc: "An optional info icon for extra context." },
      { n: 4, label: "Description", desc: "Supporting text below the option." },
    ],

    properties: [
      {
        label: "Type",
        desc: "Three value types: unchecked, checked, and indeterminate. Indeterminate is for a parent checkbox when some - but not all - of its children are checked.",
        img: IMG + "properties-type.png",
        imgAlt: "Three checkbox types, each annotated with its name: Unchecked, Checked, and Indeterminate.",
        demos: [
          { label: "Unchecked", node: <Cb label="Subscribe to updates" /> },
          { label: "Checked", node: <Cb checked label="I agree to the terms" /> },
          { label: "Indeterminate", node: <Cb checked indeterminate label="Select all documents" /> },
        ],
      },
      {
        label: "State",
        desc: "Interaction states the control moves through: default, hover, focused, disabled, and error. Hover and focus give visual feedback; disabled locks the option; error flags a missing required consent.",
        img: IMG + "properties-state.png",
        imgAlt: "Five labelled checkbox states, each annotated with its name: Default, Hover, Focused, Disabled, and Error.",
        demos: [
          { label: "Default", node: <Cb checked label="Subscribe to updates" /> },
          { label: "Disabled", node: <Cb disabled checked label="Pre-filled from your profile" /> },
          { label: "Error", node: <Cb error label="I consent under DPDP Act 2023" /> },
        ],
      },
      {
        label: "Label and hint",
        desc: "Always pair a checkbox with a visible label. Add a hint to explain consequence ('You can change this later') or constraint ('Required for submission').",
        img: IMG + "properties-label-hint.png",
        imgAlt: "Two checkboxes: one with a label only, and one with a label plus a helper hint about data sharing.",
        demos: [
          { label: "Label only", node: <Cb checked label="Send me SMS updates" /> },
          { label: "Label + hint", node: <Cb label="Consent to data sharing" hint="Your details will be shared with the Income Tax Department" /> },
        ],
      },
      {
        label: "Grouped",
        desc: "Stack checkboxes vertically with consistent spacing. Group related options under a single legend so screen readers announce them together.",
        img: IMG + "properties-grouped.png",
        imgAlt: "A vertical checkbox group of four certificate options with the first two checked.",
        demos: [
          { label: "Stacked group", wide: true, node: (
            <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
              <Cb checked label="Income certificate" />
              <Cb checked label="Caste certificate" />
              <Cb label="Domicile certificate" />
              <Cb label="Birth certificate" />
            </div>
          ) },
        ],
      },
    ],

    scenarios: [
      {
        title: "Single consent",
        desc: "Required consent before submission - DPDP Act 2023, terms of service, data sharing. Pair with helper text linking to the full policy.",
        img: IMG + "scenarios-consent.png",
        imgAlt: "A single required DPDP Act 2023 consent checkbox, checked, with a hint that it is required to process the application.",
        stage: <Cb checked label="I agree to the DPDP Act 2023 consent" hint="View full privacy notice" />,
      },
      {
        title: "Document checklist",
        desc: "Show citizens what they have and haven't uploaded. Disabled means already verified; unchecked means still required.",
        img: IMG + "scenarios-checklist.png",
        imgAlt: "A document checklist with Income and Caste certificates checked and Domicile certificate unchecked.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <Cb disabled checked label="Income certificate" />
            <Cb disabled checked label="Caste certificate" />
            <Cb label="Domicile certificate" />
          </div>
        ),
      },
      {
        title: "Select-all parent",
        desc: "Use indeterminate state when some children are selected. Tapping the parent toggles all children to checked or unchecked.",
        img: IMG + "scenarios-selectall.png",
        imgAlt: "A Select all parent checkbox in indeterminate state above two indented child checkboxes, one checked.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <Cb checked indeterminate label="Select all schemes (2 of 4)" />
            <div style={{ paddingLeft: 32, display: "flex", flexDirection: "column", gap: 8 }}>
              <Cb checked label="PM-KISAN" />
              <Cb checked label="PMJAY" />
              <Cb label="PMAY" />
              <Cb label="MGNREGA" />
            </div>
          </div>
        ),
      },
      {
        title: "Error - missing consent",
        desc: "If the user tries to submit without checking a required consent, surface the error inline with a specific message.",
        img: IMG + "scenarios-error.png",
        imgAlt: "A required terms-of-service checkbox in error state with the message You must accept to continue.",
        stage: <Cb error label="I consent under DPDP Act 2023" hint="Consent is required to proceed" />,
      },
      {
        title: "Pre-filled from previous session",
        desc: "When users return mid-flow, pre-fill choices they previously made. Lets them review without re-doing work.",
        img: IMG + "scenarios-prefilled.png",
        imgAlt: "A checked Use my saved address checkbox with a hint that it was filled from the last application.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
            <Cb checked label="Hindi" />
            <Cb checked label="English" />
            <Cb label="Tamil" />
          </div>
        ),
      },
      {
        title: "Disabled with reason",
        desc: "When an option is unavailable - already used, mutually exclusive with another choice - keep it visible but disabled with a tooltip or hint.",
        img: IMG + "scenarios-disabled.png",
        imgAlt: "A disabled Apply for ration card checkbox with a hint that it is already linked to this household.",
        stage: <Cb disabled label="Express delivery" hint="Not available for this pincode" />,
      },
    ],

    responsive: [
      {
        title: "Tap target stays 44 × 44px on every breakpoint",
        desc: "The visible 18-20px control sits inside an invisible 44px tap area. Critical for thumb-first mobile use and motor accessibility.",
        img: IMG + "responsive-tap.png",
        imgAlt: "Large checkboxes keeping a 44 by 44px tap target.",
        sample: <Cb checked label="I agree" />,
      },
      {
        title: "Label wraps below 480px",
        desc: "On narrow viewports, long labels wrap to a second line. The control stays top-aligned so it's clearly attached to the first line.",
        img: IMG + "responsive-label.png",
        imgAlt: "A checkbox with a long consent label that wraps to multiple lines.",
        sample: <Cb label="I authorise UX4G to share my details with the Income Tax Department for verification under section 139AA" />,
      },
      {
        title: "Vertical stacking, never horizontal on mobile",
        desc: "Checkbox groups always stack vertically on mobile. Horizontal arrangement (rare on desktop) collapses to vertical below 768px.",
        img: IMG + "responsive-vertical.png",
        imgAlt: "A vertically stacked checkbox group of three certificate options.",
        sample: (
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Cb checked label="Hindi" />
            <Cb checked label="English" />
            <Cb label="Tamil" />
          </div>
        ),
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A specific DPDP-Act consent checkbox naming exactly what is shared.",
          rule: "Spell out exactly what the user is consenting to.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A checkbox labelled only 'I agree'.",
          rule: "Do not use a vague 'I agree' that hides what is being consented to.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "A Select all parent in indeterminate state over a partially-checked group.",
          rule: "Use the indeterminate state when only some children are selected.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A fully-checked Select all parent over a partially-checked group.",
          rule: "Do not show the parent as fully checked when only some children are selected.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "Two separate consent checkboxes, one per agreement.",
          rule: "Give each distinct consent its own checkbox so users can agree selectively.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "One checkbox bundling terms, privacy, and data sharing together.",
          rule: "Do not bundle multiple distinct consents into a single checkbox.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-4-do.png",
          imgAlt: "A vertically stacked checkbox group.",
          rule: "Stack checkboxes vertically so each is easy to scan and tap.",
        },
        dont: {
          img: IMG + "best-practices-4-dont.png",
          imgAlt: "Checkboxes crammed into one horizontal row.",
          rule: "Do not cram checkboxes into a horizontal row.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-5-do.png",
          imgAlt: "Comfortably sized checkboxes.",
          rule: "Use a comfortable size so the box and its tap target are easy to hit.",
        },
        dont: {
          img: IMG + "best-practices-5-dont.png",
          imgAlt: "Very small checkboxes that are hard to tap.",
          rule: "Do not shrink checkboxes below a comfortable tap size.",
        },
      },
    ],

    accessibility: [
      { t: "Tap targets stay 44 × 44px or larger.", b: "The visible control is 18-20px but invisible padding extends to 44px in every direction. Pointer and touch users hit the same target." },
      { t: "Labels are programmatically linked.", b: "Wrap the input inside `<label>` or use `htmlFor`. Tapping the label toggles the checkbox - critical for motor-limited users." },
      { t: "Indeterminate state is announced.", b: "Use `aria-checked='mixed'` not just `indeterminate`. Screen readers say 'partially checked' instead of skipping the state." },
      { t: "Required consent uses aria-required.", b: "Mark required checkboxes with `aria-required='true'`. The error appears in the field's `aria-describedby` so it's read alongside the label." },
      { t: "Disabled checkboxes are still focusable.", b: "Use `aria-disabled='true'` instead of native `disabled` when context matters. Keeps the option in tab order so users hear why it's locked." },
      { t: "Focus ring is always visible.", b: "Keyboard focus shows a 2px outline ring that meets 3:1 contrast against the surrounding background. Never suppress :focus-visible." },
      { t: "Checkboxes work without colour.", b: "The check glyph itself communicates 'on'. Colour reinforces but is never the only signal - works for monochrome and colour-blind users." },
    ],

    related: [
      {
        name: "Radio Button",
        note: "When users can only pick one option from a group, reach for Radio instead. Same look-and-feel, mutually exclusive behaviour.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
            <label className="ux4g-radio">
              <input type="radio" name="rel-r" className="ux4g-radio-input" defaultChecked readOnly />
              <div className="ux4g-radio-control"><span className="ux4g-radiomark"></span></div>
              <div className="ux4g-radio-content"><div className="ux4g-radio-header"><span className="ux4g-radio-label">Mobile OTP</span></div></div>
            </label>
            <label className="ux4g-radio">
              <input type="radio" name="rel-r" className="ux4g-radio-input" readOnly />
              <div className="ux4g-radio-control"><span className="ux4g-radiomark"></span></div>
              <div className="ux4g-radio-content"><div className="ux4g-radio-header"><span className="ux4g-radio-label">DigiLocker SSO</span></div></div>
            </label>
          </div>
        ),
      },
      {
        name: "Switch / Toggle",
        note: "For immediate-effect on/off preferences (notifications, dark mode), use Toggle. Switches commit on flip; checkboxes commit on form submit.",
        preview: (
          <label className="ux4g-switch">
            <input type="checkbox" className="ux4g-switch-input" defaultChecked readOnly />
            <div className="ux4g-switch-control"><div className="ux4g-switch-track"><div className="ux4g-switch-thumb"></div></div></div>
          </label>
        ),
      },
      {
        name: "Checklist",
        note: "For required-documents lists with completion tracking and inline upload hooks, use Checklist - a Checkbox specialised for the verification flow.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Cb checked label="Income certificate verified" />
            <Cb checked label="PAN verified" />
            <Cb label="Photograph attached" />
          </div>
        ),
      },
      {
        name: "Tag",
        note: "For filter-style multi-select that displays selected items as removable pills (e.g. applied filters), use Tag instead of a Checkbox group.",
        preview: (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span className="ux4g-tag-tonal-primary">DPDP 2023</span>
            <span className="ux4g-tag-tonal-success">Verified</span>
            <span className="ux4g-tag-tonal-neutral">v3.0</span>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
