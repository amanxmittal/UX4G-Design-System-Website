/* global React */
(function () {
  function Dd({ value, placeholder = "Select…", open, disabled, error }) {
    return (
      <div className={"ux4g-dropdown" + (open ? " is-open" : "") + (disabled ? " state-disabled" : "") + (error ? " state-error" : "")} style={{ width: "100%" }}>
        <div className="ux4g-dropdown-control">
          <div className="ux4g-dropdown-value">
            <span className={"ux4g-dropdown-text" + (value ? "" : " is-placeholder")}>{value || placeholder}</span>
          </div>
          <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
        </div>
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-dd-mock">
          <div className="hb-dd-field">
            <span className="hb-dd-field-text">Maharashtra</span>
            <span className="hb-dd-caret"></span>
          </div>
          <div className="hb-dd-menu">
            <div className="hb-dd-item">Karnataka</div>
            <div className="hb-dd-item on">Maharashtra</div>
            <div className="hb-dd-item">Tamil Nadu</div>
            <div className="hb-dd-item">West Bengal</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/dropdown/";

  const config = {
    name: "Dropdown Menu",
    navName: "Dropdown Menu",
    group: "Form Elements",
    desc: "Compact single-select for fixed-length lists like state, district, language. When the list is long or searchable, reach for Combobox instead.",
    bannerVariant: "dropdown",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Dropdown trigger anatomy. A labelled trigger with a leading icon, a 'Please select' value, a trailing chevron, and a description below. Six numbered markers point to the Label, Container, Leading icon, Chevron, Value/placeholder, and Description.",
    anatomy: [
      { n: 1, label: "Label", desc: "Names the field; sits above the control." },
      { n: 2, label: "Container", desc: "The closed control that opens the option menu." },
      { n: 3, label: "Leading icon", desc: "An optional icon at the start of the control." },
      { n: 4, label: "Chevron", desc: "The caret indicating the menu opens downward." },
      { n: 5, label: "Value / placeholder", desc: "The selected option, or placeholder text when empty." },
      { n: 6, label: "Description", desc: "Helper or error text below the control." },
    ],

    properties: [
      {
        label: "State",
        desc: "Six form states — Default, Focused, Error, Success, Warning and Disabled. Error/Success/Warning each carry a matching caption below the trigger; Disabled explains why it is locked.",
        img: IMG + "properties-state.png",
        imgAlt: "Six annotated dropdown triggers — Default, Focused, Error, Success, Warning and Disabled — each labelled, with Error/Success/Warning showing a caption message.",
        demos: [
          { label: "Placeholder", node: <Dd /> },
          { label: "Selected", node: <Dd value="English (en-IN)" /> },
          { label: "Open", node: <Dd value="Maharashtra" open /> },
          { label: "Disabled", node: <Dd value="Mumbai" disabled /> },
          { label: "Error", node: <Dd value="Invalid choice" error /> },
        ],
      },
      {
        label: "Size",
        desc: "MD is the default. SM for dense filter bars and table headers; LG for primary form fields on mobile.",
        img: IMG + "properties-size.png",
        imgAlt: "Dropdown triggers at three sizes: small, medium, and large.",
        demos: [
          { label: "SM · 32px", node: <Dd value="Filter" /> },
          { label: "MD · 40px", node: <Dd value="State" /> },
          { label: "LG · 48px", node: <Dd value="Mobile state picker" /> },
        ],
      },
      {
        label: "Width",
        desc: "Match width to the longest expected value. Full-width is the default in form columns; narrower widths suit toolbars.",
        img: IMG + "properties-width.png",
        imgAlt: "A hug-width dropdown next to a full-width dropdown.",
        demos: [
          { label: "Hug content", node: <div style={{ width: 180 }}><Dd value="EN" /></div> },
          { label: "Full width", wide: true, node: <Dd value="Choose your district" /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Closed → Open → Selected",
        desc: "Tap or click the trigger to open the menu. Pick an option, the menu closes and the value updates. Click outside or press Escape to dismiss.",
        img: IMG + "scenarios-open.png",
        imgAlt: "An open dropdown: the trigger with an up-caret above a menu listing Maharashtra (selected), Karnataka, Tamil Nadu.",
        stage: (
          <React.Fragment>
            <Dd placeholder="State" />
            <span className="scn-arrow" aria-hidden="true">→</span>
            <Dd value="Karnataka" open />
          </React.Fragment>
        ),
      },
      {
        title: "Geographic picker",
        desc: "State → District → Block follows a strict hierarchy. Selecting a state resets the district and block fields so users don't carry stale picks.",
        img: IMG + "scenarios-geographic.png",
        imgAlt: "An open geographic picker listing Karnataka (selected), Kerala, Tamil Nadu, Telangana.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
            <Dd value="Maharashtra" />
            <Dd value="Pune" />
            <Dd placeholder="Block (after district)" />
          </div>
        ),
      },
      {
        title: "Language switcher in navbar",
        desc: "A compact dropdown in the navbar lets users switch between Indic scripts. Persists the choice across sessions in localStorage.",
        img: IMG + "scenarios-language.png",
        imgAlt: "A language dropdown showing English (en-IN) selected.",
        stage: <div style={{ width: 200 }}><Dd value="हिन्दी (hi-IN)" /></div>,
      },
      {
        title: "Disabled with reason",
        desc: "When a dropdown is unavailable (filtered out by an earlier choice), keep it visible but disabled. Add a hint explaining what enables it.",
        img: IMG + "scenarios-disabled.png",
        imgAlt: "A disabled District dropdown set to Mumbai, with a caption that it is locked to the registered district.",
        stage: (
          <div style={{ width: "100%" }}>
            <Dd disabled placeholder="District (pick a state first)" />
          </div>
        ),
      },
      {
        title: "Error - invalid choice",
        desc: "When the chosen value becomes invalid (e.g. scheme closed mid-flow), highlight the dropdown in error state with a recovery message.",
        img: IMG + "scenarios-error.png",
        imgAlt: "A District dropdown in error state with the message Please select a valid district.",
        stage: (
          <div style={{ width: "100%" }}>
            <Dd value="MGNREGA-2025-Q1" error />
            <span style={{ color: "var(--ux4g-text-error-default)", fontSize: 12, marginTop: 4, display: "inline-block" }}>This scheme is no longer accepting applications</span>
          </div>
        ),
      },
      {
        title: "Default to most-common value",
        desc: "Pre-select the most common value (country = India, language = English). Saves a tap for 80% of users without locking out alternatives.",
        img: IMG + "scenarios-default.png",
        imgAlt: "A State dropdown pre-set to a sensible default of Maharashtra.",
        stage: <Dd value="India (+91)" />,
      },
    ],

    responsive: [
      {
        title: "Default size scales up to LG on mobile",
        desc: "On small viewports, the default Dropdown becomes LG (48px) for thumb-friendly tap targets. The menu drops into a fullscreen sheet below 480px.",
        img: IMG + "responsive-mobile.png",
        imgAlt: "A large dropdown trigger sized for mobile.",
        sample: <Dd value="Maharashtra" />,
      },
      {
        title: "Menu as bottom sheet on mobile",
        desc: "Below 480px, the menu surface appears as a bottom sheet from the screen edge - easier to reach with one thumb than a floating menu.",
        img: IMG + "responsive-bottomsheet.png",
        imgAlt: "A dropdown opening as a bottom-sheet menu on mobile.",
        sample: <Dd value="Select district" open />,
      },
      {
        title: "Search bar appears at the menu top for 10+ options",
        desc: "When the option count exceeds 10, the menu gains a search field at the top. For longer lists with type-ahead, use Combobox.",
        img: IMG + "responsive-fullwidth.png",
        imgAlt: "A full-width dropdown trigger on mobile.",
        sample: <Dd value="Search 36 states" />,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A dropdown with a clear placeholder, Select a state.",
          rule: "Give the closed dropdown a placeholder that says what to pick.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A dropdown with an empty trigger and no placeholder.",
          rule: "Do not leave the trigger blank; users can't tell what it's for.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "A dropdown in error with a helpful message.",
          rule: "Pair an error state with a message that says how to fix it.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A dropdown in error with a red border but no message.",
          rule: "Do not show an error with no explanation.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "A comfortably sized dropdown.",
          rule: "Use a comfortable trigger size that's easy to tap.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "A very small dropdown trigger.",
          rule: "Do not shrink the trigger below a comfortable tap size.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-4-do.png",
          imgAlt: "A dropdown pre-set to a sensible default, English (en-IN).",
          rule: "Default to the most common choice when one clearly fits.",
        },
        dont: {
          img: IMG + "best-practices-4-dont.png",
          imgAlt: "A required dropdown left on its placeholder.",
          rule: "Do not force users to open the menu when a sensible default exists.",
        },
      },
    ],

    accessibility: [
      { t: "Use a native <select> for short lists.", b: "Built-in keyboard nav, screen-reader support, and mobile-native pickers come free with `<select>`. Only build custom for rich content or filter behaviour." },
      { t: "Custom dropdowns use ARIA combobox pattern.", b: "Wrap the trigger in `role='combobox'` with `aria-expanded`, `aria-controls`, and `aria-haspopup='listbox'`. The menu uses `role='listbox'` with `role='option'` children." },
      { t: "Arrow keys navigate options.", b: "Up/Down moves focus within the menu; Home/End jump to first/last; Enter or Space selects; Escape closes. Tab moves to the next form field." },
      { t: "Type-ahead matches first character.", b: "When the menu is open, typing a letter focuses the next option starting with that letter - matches the native `<select>` behaviour." },
      { t: "Disabled options are skipped in nav.", b: "Use `aria-disabled='true'` on disabled options so they're announced but skipped during arrow-key navigation." },
      { t: "Selected value is announced on focus.", b: "Screen readers announce 'combobox, English selected' on focus. State changes announce in real time as the user navigates." },
      { t: "Menu width matches the trigger.", b: "Don't let the menu spill beyond the trigger's width on small viewports. Bottom-sheet display below 480px sidesteps the issue entirely." },
    ],

    related: [
      {
        name: "Combobox",
        note: "When the list is long (10+ items) or users benefit from typing to filter, use Combobox. Same look as Dropdown plus a search field built in.",
        preview: (
          <div className="ux4g-dropdown" style={{ width: "100%" }}>
            <div className="ux4g-dropdown-control">
              <div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text is-placeholder">District…</span></div>
              <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
            </div>
          </div>
        ),
      },
      {
        name: "Radio Button",
        note: "For 2-5 visible options where comparison matters, use Radio. Dropdown hides options until tapped - radios show them all upfront.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <label className="ux4g-radio">
              <input type="radio" name="rel-d" className="ux4g-radio-input" defaultChecked readOnly />
              <div className="ux4g-radio-control"><span className="ux4g-radiomark"></span></div>
              <div className="ux4g-radio-content"><div className="ux4g-radio-header"><span className="ux4g-radio-label">UPI</span></div></div>
            </label>
            <label className="ux4g-radio">
              <input type="radio" name="rel-d" className="ux4g-radio-input" readOnly />
              <div className="ux4g-radio-control"><span className="ux4g-radiomark"></span></div>
              <div className="ux4g-radio-content"><div className="ux4g-radio-header"><span className="ux4g-radio-label">Card</span></div></div>
            </label>
          </div>
        ),
      },
      {
        name: "Search",
        note: "For free-text input that matches against a backend (not a fixed list), use Search. Comboboxes search within a known set; Search reaches the server.",
        preview: (
          <div className="ux4g-search" style={{ width: "100%" }}>
            <span className="ux4g-search-leading-icon ux4g-icon-outlined">search</span>
            <input type="text" className="ux4g-search-input" placeholder="Search services" readOnly />
          </div>
        ),
      },
      {
        name: "Tab",
        note: "When picking from a small set switches content (overview vs documents vs history), use Tab. Dropdown is for choosing a value to submit.",
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
