/* global React */
(function () {
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-input-mock">
          <div className="hb-input-label">Full name <span style={{ color: "var(--amber)" }}>*</span></div>
          <div className="hb-input-box">
            <span className="hb-input-text">Anjali Bhattacharya<span className="hb-input-caret"></span></span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.7)", fontFamily: "var(--ux4g-ff-display, sans-serif)", fontSize: 13 }}>
            <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--amber)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--primary-dark)", fontWeight: 700, fontSize: 10 }}>✓</span>
            <span>Field group · header, fields, banner, footer</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/form-field-group/";

  const config = {
    name: "Form Field Group", navName: "Form Field Group", group: "Form Elements",
    desc: "A complete form section — a header, grouped fields, a required-fields legend, an inline status banner, and footer actions — composed from any UX4G field controls. The building block of every multi-field form.",
    bannerVariant: "input", hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Form Field Group anatomy. A form with a ‘Form title’ and description, a ‘Field Group Heading’ with its own description, a required-fields legend, a collapse chevron at the top-right, a large empty field-slot area, an inline ‘Error message’ status banner, and Cancel / Submit footer actions. Ten numbered markers point to: 1 the form title, 2 the form description, 3 the field group heading, 4 the field group description, 5 the required-fields legend, 6 the status banner, 7 the Cancel action, 8 the Submit action, 9 the collapse / expand control, and 10 the field slot where any combination of field controls is placed.",
    anatomy: [
      { n: 1, label: "Form title", desc: "The overall title of the form." },
      { n: 2, label: "Form description", desc: "A short subtitle that frames the form's purpose." },
      { n: 3, label: "Field group heading", desc: "Labels a logical section of related fields." },
      { n: 4, label: "Field group description", desc: "Optional helper text for the section." },
      { n: 5, label: "Required-fields legend", desc: "Explains that the asterisk marks required fields." },
      { n: 6, label: "Status banner", desc: "A form-level success or error message." },
      { n: 7, label: "Cancel action", desc: "Secondary action to abandon the form." },
      { n: 8, label: "Submit action", desc: "Primary action that submits the form." },
      { n: 9, label: "Collapse / expand control", desc: "Collapses the group to save space." },
      { n: 10, label: "Field slot", desc: "Holds any combination of field controls — Input, Dropdown, Checkbox, Radio, Textarea, Slider." },
    ],

    properties: [
      {
        label: "Field composition",
        desc: "The group is a slot-based container — it accepts any UX4G field control: Input, Select / Dropdown, Radio, Checkbox, Textarea, or Slider. Mix and match in a single group; spacing and alignment stay consistent.",
        img: IMG + "properties-composition.png",
        imgAlt: "A ‘Grievance details’ form group composing different control types — a Subject text input, a Category select, and an ‘Accept terms and conditions’ checkbox — under one ‘About your complaint’ heading.",
      },
      {
        label: "Structure",
        desc: "The form header, field-group heading, required-fields legend, status banner, and footer actions are each optional. Toggle them off for a compact, fields-only group, or on for a full form section.",
        img: IMG + "properties-structure.png",
        imgAlt: "A compact ‘Newsletter signup’ form group with just two fields (Full name, Email address) and footer actions — the group heading, required legend, and status banner switched off.",
      },
    ],

    scenarios: [
      {
        title: "Citizen registration",
        desc: "The most common pattern — a header, a required-fields legend, and a stack of labelled fields. Helper text and the legend set expectations up front.",
        img: IMG + "scenarios-registration.png",
        imgAlt: "A ‘Register for the scheme’ form group with a required-fields legend and three fields: Full name, Mobile number, and Email address.",
      },
      {
        title: "Validation error on submit",
        desc: "When validation fails, the form shows a form-level status banner at the top and flips the offending field into its error state — both visible at once so the user can act.",
        img: IMG + "scenarios-validation.png",
        imgAlt: "An ‘Update your profile’ form group with an inline banner reading ‘2 fields need your attention’, an Email address field in a red error state, and a PIN code field.",
      },
      {
        title: "Mixed control types",
        desc: "One group can hold an Input, a Radio set, and a Checkbox together — useful for eligibility checks and consent. Every control inherits the group’s spacing.",
        img: IMG + "scenarios-mixed.png",
        imgAlt: "An ‘Eligibility check’ form group with an Annual income input, a radio-button question with four options, and an ‘Accept terms and conditions’ checkbox.",
      },
      {
        title: "Sectioned form with a group heading",
        desc: "Use the field-group heading and its description to label a logical section — like a bank-details block — so long forms stay scannable.",
        img: IMG + "scenarios-bank.png",
        imgAlt: "An ‘Add bank account’ form group with a ‘Bank account’ section heading, a required-fields legend, an Account number input, and a Bank name select.",
      },
    ],

    responsive: [
      {
        title: "Adapts to mobile (full-width actions)",
        desc: "The Mobile variant stacks every field full-width and stretches the footer buttons for thumb-friendly tap targets. Labels stay above their controls.",
        img: IMG + "responsive-mobile.png",
        imgAlt: "An ‘Apply on mobile’ form group in its mobile layout — full-width fields and footer buttons sized for touch.",
      },
      {
        title: "Two columns collapse to one",
        desc: "On desktop, fields can sit two-up in a row (e.g. first and last name); below the breakpoint they collapse to a single column so nothing is ever cramped.",
        img: IMG + "responsive-columns.png",
        imgAlt: "A ‘Personal details’ form group with First name and Last name side by side in two columns on desktop, plus a full-width City field below.",
      },
    ],

    practices: [
      {
        do: { img: IMG + "best-practices-1-do.png", imgAlt: "A ‘Residential address’ form group with a clear section heading grouping the address fields.", rule: "Group related fields under a heading so long forms stay scannable." },
        dont: { img: IMG + "best-practices-1-dont.png", imgAlt: "An untitled form with address fields dumped together with no grouping heading.", rule: "A wall of ungrouped fields with no heading makes a long form hard to parse." },
      },
      {
        do: { img: IMG + "best-practices-2-do.png", imgAlt: "A ‘Contact details’ form group showing a required-fields legend.", rule: "Show the required-fields legend so users know which fields they must fill." },
        dont: { img: IMG + "best-practices-2-dont.png", imgAlt: "The same ‘Contact details’ form group with no required-fields legend.", rule: "Without a legend or markers, required vs optional is a guessing game." },
      },
      {
        do: { img: IMG + "best-practices-3-do.png", imgAlt: "A ‘Verify mobile’ form group with a specific banner: ‘Mobile number must be 10 digits’.", rule: "Make the status banner specific and actionable." },
        dont: { img: IMG + "best-practices-3-dont.png", imgAlt: "The same form group with a vague banner that just reads ‘Error’.", rule: "A banner that just says ‘Error’ tells the user nothing useful." },
      },
    ],

    accessibility: [
      { t: "Each field label is programmatically linked.", b: "Use `<label htmlFor>` linked to the input id. Tapping the label focuses the input — critical for motor-limited users." },
      { t: "Required marker has accessible context.", b: "The visual `*` is paired with `aria-required='true'` on the input, and the legend explains the convention. Screen readers announce 'required'." },
      { t: "Field-level errors use aria-describedby.", b: "Each input's `aria-describedby` points at its error-text id so screen readers announce the error alongside the field name." },
      { t: "The status banner is a live region.", b: "Wrap the form-level banner in `role='status'` / `aria-live='polite'` so it is announced when it appears after a failed submit." },
      { t: "Group heading uses a real heading level.", b: "The field-group heading is a true `<h2>`/`<h3>`, so screen-reader users can navigate the form by section." },
      { t: "Footer actions have a sensible focus order.", b: "Cancel precedes Submit in the DOM; the primary action is reachable without leaving the keyboard, and Enter submits from any field." },
    ],

    related: [
      { name: "Input", note: "The most common control inside a group. The group wraps Input with a label, helper, and error treatment.", preview: (<div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}><div className="ux4g-input"><input type="text" className="ux4g-input-input" defaultValue="Anjali Bhattacharya" readOnly /></div></div>) },
      { name: "Dropdown Menu", note: "Use a Select / Dropdown inside the group for state, district, or bank selection.", preview: (<div className="ux4g-dropdown" style={{ width: "100%" }}><div className="ux4g-dropdown-control"><div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text">Maharashtra</span></div><span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span></div></div>) },
      { name: "Textarea", note: "Drop a Textarea into a group for longer free-text answers like address or remarks.", preview: <textarea readOnly defaultValue="House, street, locality" style={{ width: "100%", padding: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, resize: "none", height: 40 }} /> },
      { name: "Alert / Toast", note: "The form's status banner is an inline Alert. Use a toast for transient, non-blocking confirmations after submit.", preview: (<div className="ux4g-alert ux4g-alert-error" style={{ padding: 10 }}><span className="ux4g-alert-icon ux4g-icon-outlined">error</span><div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Fix 2 errors</p></div></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
