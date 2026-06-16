/* global React */
/* UX4G Input component page config */

(function () {
  const { Btn } = window.UX4G_CP;

  // Reusable Input component using real UX4G classes
  function Input({ size = "m", state, leadingIcon, trailingIcon, placeholder, value, label, helper, error }) {
    const sizeCls = { s: "ux4g-input-sm", m: "ux4g-input-md", l: "ux4g-input-lg" }[size] || "ux4g-input-md";
    const stateCls = (state === "error" || error) ? "ux4g-input-error" : state === "success" ? "ux4g-input-success" : state === "disabled" ? "ux4g-input-is-disabled" : "ux4g-input-default";
    const containerCls = "ux4g-input-container " + sizeCls + " " + stateCls + (value ? " ux4g-has-value" : "");
    return (
      <div className={containerCls} style={{ width: "100%" }}>
        {label && <label className="ux4g-label-m-default">{label}</label>}
        <div className="ux4g-input">
          {leadingIcon && <span className="ux4g-input-leading-icon ux4g-icon-outlined">{leadingIcon}</span>}
          <input
            type="text"
            className="ux4g-input-input"
            placeholder={placeholder}
            defaultValue={value}
            disabled={state === "disabled"}
            readOnly
          />
          {trailingIcon && <span className="ux4g-input-trailing-icon ux4g-icon-outlined" style={{ marginLeft: 4 }}>{trailingIcon}</span>}
        </div>
        {(helper || error) && (
          <span className="ux4g-input-helper" style={{ fontSize: 12, color: error ? "var(--ux4g-text-error-default)" : "var(--ux4g-text-neutral-secondary)", display: "flex" }}>{error || helper}</span>
        )}
      </div>
    );
  }

  // Hero banner, "type interaction" scene
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-input-mock">
          <div className="hb-input-label">Mobile number</div>
          <div className="hb-input-box">
            <span className="hb-input-text">+91 98765 43210<span className="hb-input-caret"></span></span>
          </div>
        </div>
        <svg className="hb-cursor" viewBox="0 0 60 76" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4 L52 38 L30 42 L42 68 L32 72 L20 46 L6 60 Z"
            fill="var(--amber)" stroke="var(--primary-dark)" strokeWidth="3" strokeLinejoin="round" />
        </svg>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/input/";

  const config = {
    name: "Input",
    navName: "Input",
    group: "Form Elements",
    desc: "Single-line text entry for short, free-form data like names, numbers, and IDs. The workhorse of every citizen-facing form.",
    bannerVariant: "input",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Input anatomy. A field labelled Label with a leading icon and a trailing clear icon, a Placeholder inside, and a Description below. Five numbered markers point to the Label, Container, Description, Leading icon, and Trailing icon.",
    anatomy: [
      { n: 1, label: "Label", desc: "Names the field; sits above the input." },
      { n: 2, label: "Container (input field)", desc: "The bordered box that holds the value, prefix/suffix and icons." },
      { n: 3, label: "Description (caption)", desc: "Helper, hint or error text below the field." },
      { n: 4, label: "Leading icon (optional)", desc: "An optional icon at the start, e.g. search or currency." },
      { n: 5, label: "Trailing icon (optional)", desc: "An optional icon or clear control at the end." },
    ],

    properties: [
      {
        label: "Size",
        desc: "Four sizes ship out of the box. M is the default on desktop, S for dense tables and inline search, L is the default on mobile for a thumb-friendly tap, XL for identity-defining hero fields.",
        img: IMG + "properties-size.png",
        imgAlt: "Four inputs shown at sizes Small, Medium, Large (mobile default), and Extra large, with the field height increasing at each step.",
        demos: [
          { label: "S", node: <Input size="s" placeholder="Search services" /> },
          { label: "M", node: <Input size="m" placeholder="Enter your full name" /> },
          { label: "L (Mobile default)", node: <Input size="l" placeholder="Mobile number" /> },
          { label: "XL", node: <Input size="l" placeholder="Enter amount" /> },
        ],
      },
      {
        label: "State",
        desc: "Eight states cover the full lifecycle, from idle to disabled. Always pair an error state with a specific message, never just a red border.",
        img: IMG + "properties-state.png",
        imgAlt: "Inputs in five states: Default, Focused with a purple border, Error with a red border and message, Disabled in grey, and Success with a green border and confirmation.",
        demos: [
          { label: "Default", node: <Input label="Full name" placeholder="Enter full name" /> },
          { label: "Focused", node: <Input label="Full name" value="Anjali Bhattacharya" /> },
          { label: "Error", node: <Input state="error" label="Email address" value="anjali@" error="Enter a valid email address" /> },
          { label: "Disabled", node: <Input state="disabled" label="Constituency" value="Bengaluru South" /> },
          { label: "Success", node: <Input state="success" label="Email address" value="anjali@gov.in" helper="Looks good" /> },
        ],
      },
      {
        label: "Label",
        desc: "Every Input ships with a visible label by default. Hide it only when the surrounding context makes the purpose obvious, like a single search field in a toolbar.",
        img: IMG + "properties-label.png",
        imgAlt: "Two inputs with visible field labels above them: Full name and Email address.",
        demos: [
          { label: "Full name", node: <Input label="Full name" placeholder="Enter full name" /> },
          { label: "Email", node: <Input label="Email address" placeholder="name@example.com" /> },
        ],
      },
      {
        label: "Caption",
        desc: "Use the caption to explain the expected format up front, like (10-digit number) or (We'll send a one-time password). Keep it to one short sentence.",
        img: IMG + "properties-caption.png",
        imgAlt: "Two inputs with helper captions below the field: an email field noting it will receive a confirmation, and a mobile field noting a one-time password.",
        demos: [
          { label: "Email", node: <Input label="Email address" helper="We'll send a confirmation here" placeholder="name@example.com" /> },
          { label: "Mobile", node: <Input label="Mobile number" helper="We'll send a one-time password" placeholder="10-digit number" /> },
        ],
      },
      {
        label: "Leading icon",
        desc: "Leading icons set context, like a magnifier for search, a person for identity, an envelope for email. Use sparingly so labels stay the primary signal.",
        img: IMG + "properties-leading-icon.png",
        imgAlt: "Three inputs with leading Material icons: a search magnifier, a person account icon, and an email envelope.",
        demos: [
          { label: "Search", node: <Input leadingIcon="search" placeholder="Search services" /> },
          { label: "Name", node: <Input leadingIcon="account_circle" label="Full name" value="Anjali" /> },
          { label: "Email", node: <Input leadingIcon="email" label="Email" placeholder="name@example.com" /> },
        ],
      },
      {
        label: "Trailing icon",
        desc: "Trailing icons usually trigger actions, like a clear button on a filled field or a reveal toggle on a password.",
        img: IMG + "properties-trailing-icon.png",
        imgAlt: "Two inputs with trailing Material icons: a clear (close) icon on a filled name field, and a reveal (eye) icon on a password field.",
        demos: [
          { label: "Clear", node: <Input trailingIcon="close" label="Full name" value="Anjali Bhattacharya" /> },
          { label: "Reveal", node: <Input trailingIcon="visibility" label="Password" value="••••••••" /> },
        ],
      },
      {
        label: "Prefix",
        desc: "A prefix sits inside the field on the left, used for fixed text like a country code, currency, or URL scheme. The user types after it.",
        img: IMG + "properties-prefix.png",
        imgAlt: "Three inputs with fixed prefixes inside the field: +91 for a mobile number, the rupee sign for a fee, and https:// for a URL.",
        demos: [
          { label: "+91", node: <Input label="Mobile number" placeholder="+91  98765 43210" /> },
          { label: "₹", node: <Input label="Fee amount" placeholder="₹  1,250" /> },
        ],
      },
      {
        label: "Postfix",
        desc: "A postfix sits inside the field on the right, used for fixed units like kg, %, or a fixed email domain. It does not respond to clicks.",
        img: IMG + "properties-postfix.png",
        imgAlt: "Three inputs with fixed postfixes inside the field: kg for a weight, percent for a rate, and @gov.in for a username.",
        demos: [
          { label: "kg", node: <Input label="Weight" placeholder="68  kg" /> },
          { label: "%", node: <Input label="Interest rate" placeholder="7.5  %" /> },
        ],
      },
      {
        label: "Voice input",
        desc: "Show the microphone trailing affordance on fields where users may prefer speaking, like search, address, or a grievance description.",
        img: IMG + "properties-voice-input.png",
        imgAlt: "Two inputs with a trailing microphone affordance: a search field and a grievance description field.",
        demos: [
          { label: "Search", node: <Input trailingIcon="mic" placeholder="Search services" /> },
          { label: "Grievance", node: <Input trailingIcon="mic" label="Describe your grievance" placeholder="Speak or type" /> },
        ],
      },
      {
        label: "Trailing items",
        desc: "Use a leading icon plus a trailing action when a field carries both context and a control, like a password (person plus reveal) or a date (calendar plus clear).",
        img: IMG + "properties-trailing-items.png",
        imgAlt: "Two inputs each with a leading icon and a trailing action: a password field with a person icon and reveal control, and an appointment date field with a calendar icon and clear control.",
        demos: [
          { label: "Password", node: <Input leadingIcon="account_circle" trailingIcon="visibility" label="Password" value="••••••••" /> },
          { label: "Date", node: <Input leadingIcon="event" trailingIcon="close" label="Appointment date" value="18 Apr 2026" /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Default to filled",
        desc: "As the user types, the placeholder disappears and the value fills the field. The label stays above so context is never lost.",
        img: IMG + "scenarios-default-filled.png",
        imgAlt: "A mobile number field shown first with a placeholder, then filled with +91 98765 43210 below a downward arrow.",
        stage: (
          <React.Fragment>
            <Input label="Mobile number" placeholder="Enter mobile number" />
            <span className="scn-arrow" aria-hidden="true">→</span>
            <Input value="+91 98765 43210" />
          </React.Fragment>
        ),
      },
      {
        title: "Validation on blur",
        desc: "Validate when the field loses focus, not on every keystroke. The error message tells the user exactly how to fix the input.",
        img: IMG + "scenarios-validation.png",
        imgAlt: "An email field in error state showing the value anjali@ and the message Enter a valid email address.",
        stage: (
          <Input state="error" label="Email address" value="anjali@" error="Enter a valid email address" />
        ),
      },
      {
        title: "Verified from a trusted source",
        desc: "When a value comes from a trusted source like DigiLocker, show it in success state with a verified note so users trust the source.",
        img: IMG + "scenarios-verified.png",
        imgAlt: "An email field in success state showing anjali@gov.in and the note Verified via DigiLocker.",
        stage: (
          <Input state="success" label="Email (verified)" value="anjali@gov.in" helper="Verified via DigiLocker" />
        ),
      },
      {
        title: "Inline search",
        desc: "Use the S size with a leading magnifier and a trailing clear for type-ahead search across services, documents, and lists. Clears on Escape.",
        img: IMG + "scenarios-search.png",
        imgAlt: "A small search field with a leading magnifier and a trailing clear icon containing the query property tax.",
        stage: (
          <Input size="s" leadingIcon="search" trailingIcon="close" value="property tax" />
        ),
      },
      {
        title: "Disabled with reason",
        desc: "Disable inputs that are derived or locked after submission. Always explain why nearby, never leave a silent disabled field.",
        img: IMG + "scenarios-disabled.png",
        imgAlt: "A disabled Constituency field auto-filled with Bengaluru South and a caption reading From your voter record.",
        stage: (
          <Input state="disabled" label="Constituency (auto-filled)" value="Bengaluru South" helper="From your voter record" />
        ),
      },
      {
        title: "Masked sensitive value",
        desc: "Account numbers and other sensitive values are masked except for the last few digits, with a toggle to reveal. Protects against shoulder-surfing.",
        img: IMG + "scenarios-masked.png",
        imgAlt: "A bank account number field showing a masked value ending in 4271 with a leading person icon and a trailing reveal (eye) icon.",
        stage: (
          <Input leadingIcon="account_circle" trailingIcon="visibility" label="Bank account number" value="XXXXXX4271" />
        ),
      },
    ],

    responsive: [
      {
        title: "Default size scales up to L on mobile",
        desc: "On small viewports the default Input size becomes L (48px) for thumb-friendly tap targets. Critical for key fields on a 5-inch screen.",
        img: IMG + "responsive-mobile-l.png",
        imgAlt: "A large (48px) mobile-default mobile number field sized for thumb input.",
        sample: <Input size="l" label="Mobile number" placeholder="Enter 10-digit number" />,
      },
      {
        title: "Width matches expected content",
        desc: "Short codes get a fixed narrow width (PIN, date), longer values fill the form column. Width is a signal of expected length.",
        img: IMG + "responsive-width.png",
        imgAlt: "A narrow PIN code field above a wide Address field, showing field width matched to the expected content length.",
        sample: <Input size="m" label="Address" placeholder="House no, street, locality" />,
      },
      {
        title: "44px tap-target floor",
        desc: "Even the S size (32px visual) carries invisible padding to reach the 44px tap target floor. L is the comfortable default on touch screens.",
        img: IMG + "responsive-tap.png",
        imgAlt: "A small PIN code field in error state retaining a 44px tap target, with the message Enter a valid 6-digit PIN code.",
        sample: <Input size="s" state="error" label="PIN code" value="11" error="Enter a valid 6-digit PIN code" />,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "An input with a visible Full name label above the field.",
          rule: "Always show a visible field label above the input. The label anchors context even after the user starts typing.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "An input with no label, using the placeholder Full name as the only label.",
          rule: "Do not use the placeholder as the only label. It vanishes on typing and fails screen readers.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "A PIN code field in error showing the message Enter a valid 6-digit PIN code.",
          rule: "Write specific error messages that say exactly how to fix the input.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A PIN code field in error showing only the message Invalid input.",
          rule: "Do not use vague errors like 'Invalid input'. They leave the user guessing what went wrong.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "A mobile number field with a caption explaining a one-time password will be sent.",
          rule: "Add a caption with the expected format or outcome up front, before the user makes a mistake.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "A mobile number field with no caption or format hint.",
          rule: "Do not leave the format unstated and surface it only as an error after the user submits.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-4-do.png",
          imgAlt: "A narrow PIN code field sized to fit six digits.",
          rule: "Match field width to the expected content length. Width is a silent cue for how much to type.",
        },
        dont: {
          img: IMG + "best-practices-4-dont.png",
          imgAlt: "A full-width PIN code field that stretches far beyond six digits.",
          rule: "Do not stretch short inputs to full width. An oversized field misleads the expected length.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-5-do.png",
          imgAlt: "A disabled Constituency field with a caption From your voter record.",
          rule: "Explain why a field is disabled with a caption nearby, so the state never feels like a dead end.",
        },
        dont: {
          img: IMG + "best-practices-5-dont.png",
          imgAlt: "A disabled Constituency field with no explanation.",
          rule: "Do not leave a disabled field silent. A locked field with no reason reads as a bug.",
        },
      },
    ],

    accessibility: [
      { t: "Every Input has a visible label.", b: "Use a `<label htmlFor>` linked to the input id. Never rely on the placeholder as the only label, it disappears on focus and fails screen readers." },
      { t: "Error messages link to the field.", b: "Use `aria-describedby` on the input to point at the error text id. Screen readers announce the error alongside the field name." },
      { t: "Required fields are programmatically marked.", b: "Use `aria-required='true'`. The visual asterisk pairs with a 'required' aria-label so it is not just a colour signal." },
      { t: "Validation does not steal focus.", b: "Errors appear inline next to the field, not in a modal. Focus stays where the user expects so they can continue or fix in place." },
      { t: "Helper text uses live regions for dynamic hints.", b: "If the helper updates as the user types (password strength), wrap it in `aria-live='polite'` so screen readers announce changes without interrupting." },
      { t: "Disabled state is still focusable for keyboard users.", b: "Use `aria-disabled='true'` instead of `disabled` for non-skippable inputs so they appear in tab order with a clear reason." },
      { t: "Input meets the 44 by 44px tap target floor.", b: "S Inputs (32px visual height) carry invisible padding to reach 44px. Critical for thumb-first use and motor accessibility." },
    ],

    related: [
      {
        name: "Form Field Group",
        note: "The canonical pattern, label, input, helper text, and error stacked into a reusable form unit.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
            <span style={{ fontSize: 12, fontWeight: 500 }}>Email address</span>
            <Input size="s" value="anjali@gov.in" />
            <span style={{ fontSize: 11, color: "var(--ux4g-text-neutral-secondary)" }}>We'll send a confirmation here</span>
          </div>
        ),
      },
      {
        name: "Textarea",
        note: "When users need to write more than a single line (addresses, grievance descriptions, notes), reach for Textarea instead.",
        preview: (
          <textarea readOnly defaultValue="Briefly describe the issue you faced…" style={{ width: "100%", height: 60, padding: 8, borderRadius: 6, border: "1px solid var(--ux4g-border-color-neutral-subtle)", fontSize: 13, resize: "none" }} />
        ),
      },
      {
        name: "Input OTP",
        note: "For 4-6 digit one-time passwords, use the segmented OTP input. Auto-advance, paste support, and resend timer built in.",
        preview: (
          <div style={{ display: "flex", gap: 6 }}>
            {["4","8","3","7","",""].map((v,i) => (
              <div key={i} style={{ width: 28, height: 36, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, color: v ? "var(--ux4g-text-neutral-primary)" : "var(--ux4g-text-neutral-tertiary)" }}>{v || "·"}</div>
            ))}
          </div>
        ),
      },
      {
        name: "Search",
        note: "For type-ahead search across services and documents, use the dedicated Search component with built-in clear, suggestions, and recent searches.",
        preview: <Input size="s" leadingIcon="search" value="property tax" trailingIcon="close" />,
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) {
    window.UX4G_CP.render(config);
  } else {
    window.UX4G_COMPONENT_CONFIG = config;
  }
})();
