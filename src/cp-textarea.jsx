/* global React */
(function () {
  function Ta({ value, placeholder, state, rows = 4, label, helper, error, counter }) {
    const cls = "ux4g-textarea" + (state === "error" || error ? " state-error" : "") + (state === "disabled" ? " state-disabled" : "");
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
        {label && <label style={{ fontSize: 13, fontWeight: 500, color: "var(--ux4g-text-neutral-primary)" }}>{label}</label>}
        <textarea
          className={cls}
          rows={rows}
          disabled={state === "disabled"}
          placeholder={placeholder}
          defaultValue={value}
          readOnly
          style={{ width: "100%", boxSizing: "border-box", resize: "vertical", padding: "10px 12px", fontFamily: "inherit", fontSize: 14, lineHeight: 1.5, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8 }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {(helper || error) && <span style={{ fontSize: 12, color: error ? "var(--ux4g-text-error-default)" : "var(--ux4g-text-neutral-secondary)" }}>{error || helper}</span>}
          {counter && <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-tertiary)", marginLeft: "auto" }}>{counter}</span>}
        </div>
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-input-mock" style={{ width: 520 }}>
          <div className="hb-input-label">Describe the issue</div>
          <div className="hb-input-box" style={{ height: 160, alignItems: "flex-start", padding: 24, flexDirection: "column", gap: 8 }}>
            <span className="hb-input-text" style={{ fontSize: 18 }}>The water supply has been disrupted</span>
            <span className="hb-input-text" style={{ fontSize: 18 }}>for the last 3 days in our locality<span className="hb-input-caret"></span></span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/textarea/";

  const config = {
    name: "Textarea",
    navName: "Textarea",
    group: "Form Elements",
    desc: "Multi-line input for grievance text, address details, and longform fields. Resizable vertically with optional character counter.",
    bannerVariant: "input",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Textarea anatomy. A field labelled Label with a Placeholder inside, a character counter in the bottom-right, a resize handle, and a Description below. Five numbered markers point to the Label, Container, Description, Placeholder, and the counter and resize handle.",
    anatomy: [
      { n: 1, label: "Label", desc: "Names the field; sits above the text area." },
      { n: 2, label: "Container (text area)", desc: "The multi-line box that grows with the entered text." },
      { n: 3, label: "Description (helper)", desc: "Helper, hint or error text below the field." },
      { n: 4, label: "Placeholder", desc: "Greyed example text shown until the user types." },
      { n: 5, label: "Counter & resize handle", desc: "A character counter and a corner handle to resize the box." },
    ],

    properties: [
      {
        label: "State",
        desc: "Use the same state vocabulary as Input — default, focused, error, disabled, success. Pair every error with a clear, specific message.",
        img: IMG + "properties-state.png",
        imgAlt: "A grievance description text area in five states: Default with a placeholder, Focused with a purple border, Error with a red border and message, Disabled in grey, and Success with a green border and message.",
        demos: [
          { label: "Default", node: <Ta placeholder="Describe the issue you faced…" /> },
          { label: "Filled", node: <Ta value="The water supply has been disrupted for 3 days." /> },
          { label: "Disabled", node: <Ta state="disabled" value="This grievance has been resolved." /> },
          { label: "Error", node: <Ta state="error" value="abc" error="Add at least 20 characters" /> },
        ],
      },
      {
        label: "Size",
        desc: "Pick the starting height to match expected content length. Size M suits short summaries; Size L suits detailed accounts. Users can resize vertically; horizontal resize is locked to prevent layout breakage.",
        img: IMG + "properties-size.png",
        imgAlt: "Two text areas side by side: a shorter Size M Summary field and a taller Size L Details field.",
        demos: [
          { label: "M · summary", node: <Ta rows={2} placeholder="One-line summary of your issue" /> },
          { label: "L · details", node: <Ta rows={6} placeholder="Describe what happened, when, and where in detail" /> },
        ],
      },
      {
        label: "Counter and limits",
        desc: "When the field has a character or word limit, show a live counter below the field. Warn as the user nears the limit; error at 100%.",
        img: IMG + "properties-counter.png",
        imgAlt: "Two text areas with character counters: one at 33 of 200 with a 200-character hint, and one at 170 of 200 noting 30 characters remaining.",
        demos: [
          { label: "Soft limit", node: <Ta value="Water supply disrupted for 3 days." counter="33 / 200" helper="Brief description, 200 characters max" /> },
          { label: "Near limit", wide: true, node: <Ta value={"The municipal tap has run dry since Monday and no tanker has arrived despite repeated calls to the helpline."} counter="170 / 200" helper="30 characters remaining" /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Grievance description",
        desc: "The signature use case — citizens describing an issue in their own words. Provide a clear prompt, a generous height, and a counter if there is a length cap.",
        img: IMG + "scenarios-grievance.png",
        imgAlt: "A grievance description field filled with a complaint about a dry municipal tap, with a counter reading 120 of 500.",
        stage: <Ta label="Grievance description" value="The municipal tap has run dry since Monday and no tanker has arrived." rows={4} counter="120 / 500" />,
      },
      {
        title: "Address — multi-line",
        desc: "House, street, locality, landmark — all in one field. Use a few rows by default so users see the whole address without scrolling.",
        img: IMG + "scenarios-address.png",
        imgAlt: "An address field with a three-line postal address across house, street, locality, and city.",
        stage: <Ta label="Address" value={"12, MG Road\nIndiranagar\nBengaluru 560038"} rows={3} />,
      },
      {
        title: "Error — below minimum length",
        desc: "Validate on blur, not on every keystroke. Show the minimum length expected so users know what to add.",
        img: IMG + "scenarios-error.png",
        imgAlt: "A grievance description field in error state showing the message Add at least 20 characters so officers can act.",
        stage: <Ta state="error" label="Grievance description" value="Tap dry" error="Add at least 20 characters so officers can act" />,
      },
      {
        title: "Disabled with reason",
        desc: "When a grievance is closed or under review, lock the textarea but keep the content visible. Add a hint explaining why it is locked.",
        img: IMG + "scenarios-disabled.png",
        imgAlt: "A disabled grievance description field showing a resolved complaint with the caption Locked — this grievance is closed.",
        stage: <Ta state="disabled" label="Grievance description" value="Resolved on 12 Apr 2026 by the ward officer." helper="Locked — this grievance is closed" />,
      },
      {
        title: "Auto-save draft",
        desc: "For long-form fields, auto-save the draft periodically and show a subtle confirmation so users trust the system.",
        img: IMG + "scenarios-draft.png",
        imgAlt: "A grievance description field with a caption reading Draft saved 2 minutes ago.",
        stage: <Ta label="Grievance description" value="Water supply has been disrupted for three days in our locality." helper="Draft saved 2 minutes ago" />,
      },
      {
        title: "Near character limit",
        desc: "As the user approaches the limit, the counter warns; at the limit it errors and the field stops accepting input.",
        img: IMG + "scenarios-counter.png",
        imgAlt: "A short description field near its limit, with a counter at 190 of 200 and a caption noting 10 characters remaining.",
        stage: <Ta label="Short description" value={"The municipal tap has run dry since Monday and no tanker has arrived despite calls."} counter="190 / 200" helper="10 characters remaining" />,
      },
    ],

    responsive: [
      {
        title: "Full-width in form columns",
        desc: "Textareas span the full container width. Multi-column forms collapse to a single column on small screens — the textarea stays wide.",
        img: IMG + "responsive-full-width.png",
        imgAlt: "An address text area filling the full width of its form column.",
        sample: <Ta label="Address" rows={3} placeholder="House no, street, locality, city" />,
      },
      {
        title: "Rows scale with content, not viewport",
        desc: "A detailed-account field keeps its generous height on mobile — we don't shrink rows to save space at the cost of usability. Long content scrolls within the field.",
        img: IMG + "responsive-rows.png",
        imgAlt: "A tall Size L detailed-account text area sized for longer entries.",
        sample: <Ta label="Detailed account" rows={6} placeholder="Describe what happened, when, and where in as much detail as you can" />,
      },
      {
        title: "Helper and counter wrap on narrow viewports",
        desc: "On narrow screens, helper text and counter stack onto two lines (helper above, counter below). Both stay readable without truncation.",
        img: IMG + "responsive-wrap.png",
        imgAlt: "A short description field with a helper line and a 29 of 200 counter that wrap on a narrow viewport.",
        sample: <Ta label="Short description" value="Tap has run dry since Monday." counter="29 / 200" helper="Brief description, 200 characters max" />,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A short description field showing a 33 of 200 character counter.",
          rule: "Show a counter when there is a character limit, so users know how much they can write before they hit the cap.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "The same field with no counter and no visible limit.",
          rule: "Do not hide the limit. Users discover the cap only when they hit it, after they have already written too much.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "A grievance field in error showing Add at least 20 characters so officers can act.",
          rule: "Write specific error messages that tell the user exactly how to fix the entry.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A grievance field in error showing only the message Invalid input.",
          rule: "Do not use vague errors like 'Invalid input'. The user cannot fix what the message does not explain.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "A text area with a visible Grievance description label above it.",
          rule: "Always show a visible label above the text area. The label anchors context even after the user starts typing.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "A text area with no label, using the placeholder Grievance description as the only label.",
          rule: "Do not use the placeholder as the only label. It vanishes on typing and fails screen readers.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-4-do.png",
          imgAlt: "A text area with a guiding placeholder: Describe what happened, when, and where.",
          rule: "Use a placeholder that guides the answer, hinting at the detail the user should include.",
        },
        dont: {
          img: IMG + "best-practices-4-dont.png",
          imgAlt: "A text area with a vague placeholder reading Enter text.",
          rule: "Do not use a generic placeholder like 'Enter text'. It wastes the chance to guide a good answer.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-5-do.png",
          imgAlt: "A tall Size L detailed-account field with room for the full entry.",
          rule: "Give long-form fields a generous starting height so the whole entry is visible without scrolling.",
        },
        dont: {
          img: IMG + "best-practices-5-dont.png",
          imgAlt: "A short Size M field cramming the same long entry into a small box.",
          rule: "Do not cram a detailed account into a short field. A cramped box hides content and discourages detail.",
        },
      },
    ],

    accessibility: [
      { t: "Always pair a Textarea with a visible label.", b: "Use `<label htmlFor>` linked to the textarea id. Never rely on placeholder as the only label - it disappears on focus and fails screen readers." },
      { t: "Character counters use aria-live='polite'.", b: "Updates announce after a brief pause so screen-reader users aren't interrupted on every keystroke." },
      { t: "Required fields are programmatically marked.", b: "Use `aria-required='true'`. The visual asterisk is paired with a 'required' aria-label so it's not just a colour cue." },
      { t: "Errors link to the field.", b: "Use `aria-describedby` on the textarea to point at the error text id. Screen readers announce the error alongside the field name." },
      { t: "Resize handle works with keyboard.", b: "If you provide a resize handle, ensure it's keyboard-operable. Native `resize: vertical` is automatically accessible." },
      { t: "Validation triggers on blur, not on every keystroke.", b: "Inline validation while typing creates a 'shouting' field. Validate when the user moves away from the field." },
      { t: "Maximum length matches both visual counter and HTML.", b: "Set `maxLength` on the textarea so paste-truncation is automatic. Counter mirrors the same number." },
    ],

    related: [
      {
        name: "Input",
        note: "For single-line text - names, numbers, IDs - use Input. Textarea is for content that spans multiple lines.",
        preview: (
          <div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}>
            <div className="ux4g-input">
              <input type="text" className="ux4g-input-input" defaultValue="+91 98765 43210" readOnly />
            </div>
          </div>
        ),
      },
      {
        name: "Form Field Group",
        note: "Wrap your Textarea with label, helper, counter, and error in a single Form Field Group for consistent vertical rhythm.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
            <span style={{ fontSize: 13, fontWeight: 500 }}>Address</span>
            <Ta rows={2} value="12, MG Road, Indiranagar" />
          </div>
        ),
      },
      {
        name: "Alert / Toast",
        note: "If the textarea reaches a character cap or fails validation server-side, surface the message via an inline Alert above the form.",
        preview: (
          <div className="ux4g-alert ux4g-alert-warning" style={{ padding: 10 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">warning</span>
            <div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Description too short</p></div>
          </div>
        ),
      },
      {
        name: "Draft Status Banner",
        note: "Auto-save state for long-form textareas lives in the Draft Status Banner - shows 'Draft saved 2 min ago' across the top of the page.",
        preview: (
          <div style={{ padding: 8, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 6, fontSize: 12, display: "flex", justifyContent: "space-between" }}>
            <span style={{ fontWeight: 600 }}>Draft saved</span>
            <span style={{ color: "var(--ux4g-text-neutral-secondary)" }}>2 MIN AGO</span>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
