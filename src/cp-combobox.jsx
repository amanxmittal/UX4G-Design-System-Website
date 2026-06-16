/* global React */
(function () {
  function Cb({ value, placeholder = "Search…", open, disabled, options = [] }) {
    return (
      <div className={"ux4g-dropdown" + (open ? " is-open" : "") + (disabled ? " state-disabled" : "")} style={{ width: "100%", position: "relative" }}>
        <div className="ux4g-dropdown-control">
          <div className="ux4g-dropdown-value">
            <span className={"ux4g-dropdown-text" + (value ? "" : " is-placeholder")}>{value || placeholder}</span>
          </div>
          <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
        </div>
        {open && options.length > 0 && (
          <div style={{ position: "absolute", top: "100%", left: 0, right: 0, marginTop: 4, background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, padding: 6, zIndex: 2, boxShadow: "0 8px 16px rgba(0,0,0,0.06)" }}>
            {options.map((o, i) => (
              <div key={i} style={{ padding: "8px 12px", borderRadius: 4, background: o.active ? "var(--ux4g-bg-primary-subtle)" : "transparent", fontSize: 13 }}>
                {o.label}
              </div>
            ))}
          </div>
        )}
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
            <span className="hb-dd-field-text">Pune<span className="hb-input-caret"></span></span>
            <span className="hb-dd-caret"></span>
          </div>
          <div className="hb-dd-menu">
            <div className="hb-dd-item on">Pune</div>
            <div className="hb-dd-item">Pune (rural)</div>
            <div className="hb-dd-item">Punjab</div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/combobox/";

  const config = {
    name: "Combobox",
    navName: "Combobox",
    group: "Form Elements",
    desc: "Searchable dropdown for long lists - districts, pincodes, organisations, schemes. Users type to filter and pick from suggestions.",
    bannerVariant: "dropdown",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Combobox anatomy. A labelled field with a typed query 'Pu' and a chevron, opening a suggestions menu (Pune highlighted, Pune (rural), Pulwama). Five numbered markers point to the Label, Typed input, Chevron, Suggestions menu, and a List item.",
    anatomy: [
      { n: 1, label: "Label", desc: "Names the field; sits above the input." },
      { n: 2, label: "Typed input", desc: "A text field that filters options as the user types." },
      { n: 3, label: "Chevron", desc: "The caret that opens or closes the suggestions." },
      { n: 4, label: "Suggestions menu", desc: "The dropdown list of matching options." },
      { n: 5, label: "List item", desc: "A single selectable option in the menu." },
    ],

    properties: [
      {
        label: "State",
        desc: "Six form states — Default, Focused, Error, Success, Warning and Disabled. Error/Success/Warning carry a matching caption (e.g. ‘Did you mean Mumbai?’); Disabled explains why it is locked.",
        img: IMG + "properties-state.png",
        imgAlt: "Six annotated combobox fields — Default, Focused, Error, Success, Warning and Disabled — each labelled District, with Error/Success/Warning showing a caption message.",
        demos: [
          { label: "Empty", node: <Cb placeholder="Type to search…" /> },
          { label: "Open", node: <Cb value="Pu" open options={[{ label: "Pune", active: true }, { label: "Pune (rural)" }, { label: "Punjab" }]} /> },
          { label: "Selected", node: <Cb value="Pune" /> },
          { label: "Disabled", node: <Cb value="Pune" disabled /> },
        ],
      },
      {
        label: "Selection mode",
        desc: "Single-select replaces the field value on pick. Multi-select displays chosen items as removable chips inside the trigger, with a typing area for the next match.",
        img: IMG + "properties-mode.png",
        imgAlt: "Two annotated combobox fields — Single-select showing a chosen ‘Pune’, and Multi-select showing a removable ‘Pune’ chip above a typing area.",
        imgAlt: "A single-select combobox set to Maharashtra, and a multi-select combobox holding Pune and Mumbai.",
        demos: [
          { label: "Single", node: <Cb value="Maharashtra" /> },
          { label: "Multi", wide: true, node: (
            <div className="ux4g-dropdown" style={{ width: "100%" }}>
              <div className="ux4g-dropdown-control">
                <div className="ux4g-dropdown-value" style={{ display: "flex", gap: 6, alignItems: "center" }}>
                  <span className="ux4g-tag-tonal-primary" style={{ padding: "2px 8px", fontSize: 11 }}>Maharashtra ×</span>
                  <span className="ux4g-tag-tonal-primary" style={{ padding: "2px 8px", fontSize: 11 }}>Karnataka ×</span>
                  <span className="ux4g-dropdown-text is-placeholder" style={{ marginLeft: 6 }}>Add more…</span>
                </div>
                <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
              </div>
            </div>
          ) },
        ],
      },
    ],

    scenarios: [
      {
        title: "Search 700+ districts",
        desc: "Type the first 2-3 letters to narrow 700+ districts to a handful. Top match is auto-highlighted; Enter selects it.",
        img: IMG + "scenarios-search.png",
        imgAlt: "An open combobox filtered to 'Pu' showing Pune (highlighted), Pune (rural), Pulwama.",
        stage: <Cb value="Pu" open options={[{ label: "Pune", active: true }, { label: "Pune (rural)" }, { label: "Pulwama" }]} />,
      },
      {
        title: "Pincode autofill from PIN",
        desc: "Combobox tied to a backend PIN database. Type 6 digits to auto-fill district, state, and post office in one go.",
        img: IMG + "scenarios-pincode.png",
        imgAlt: "A combobox autofilled from a pincode, showing 411001 — Pune.",
        stage: <Cb value="411014" />,
      },
      {
        title: "Recent / suggested at top",
        desc: "When the user opens the menu without typing, show the 3 most recent picks at the top under a 'Recent' header.",
        img: IMG + "scenarios-recent.png",
        imgAlt: "An open combobox suggesting recent districts: Pune, Mumbai, Nashik.",
        stage: (
          <div style={{ width: "100%" }}>
            <Cb value="" placeholder="District" open options={[{ label: "Pune" }, { label: "Mumbai" }, { label: "Nashik" }]} />
          </div>
        ),
      },
      {
        title: "No matches - free-text fallback",
        desc: "If the user's text doesn't match any option, allow them to submit as free text with a clear 'use as typed' affordance.",
        img: IMG + "scenarios-nomatch.png",
        imgAlt: "An open combobox for 'xyz' showing No matching options and a free-text fallback option.",
        stage: (
          <div style={{ width: "100%" }}>
            <Cb value="xyz" open options={[{ label: "No matching options" }, { label: '+ Use "xyz" as typed' }]} />
          </div>
        ),
      },
      {
        title: "Multi-select for filters",
        desc: "On filter panels, multi-select adds each pick as a Tag inside the trigger. Click the × on any tag to remove.",
        img: IMG + "scenarios-multi.png",
        imgAlt: "A multi-select combobox holding Pune, Mumbai, Nashik.",
        stage: (
          <div className="ux4g-dropdown" style={{ width: "100%" }}>
            <div className="ux4g-dropdown-control">
              <div className="ux4g-dropdown-value" style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
                <span className="ux4g-tag-tonal-primary" style={{ padding: "2px 8px", fontSize: 11 }}>PM-KISAN ×</span>
                <span className="ux4g-tag-tonal-primary" style={{ padding: "2px 8px", fontSize: 11 }}>PMAY ×</span>
                <span className="ux4g-tag-tonal-primary" style={{ padding: "2px 8px", fontSize: 11 }}>MGNREGA ×</span>
              </div>
              <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
            </div>
          </div>
        ),
      },
      {
        title: "Async loading",
        desc: "For server-side filtered lists, show a brief spinner while results load. Cap at 300ms - cache common queries to feel instant.",
        img: IMG + "scenarios-async.png",
        imgAlt: "An open combobox showing a Loading… state while options fetch.",
        stage: (
          <div className="ux4g-dropdown" style={{ width: "100%" }}>
            <div className="ux4g-dropdown-control">
              <div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text">Searching…</span></div>
              <span className="ux4g-spinner ux4g-spinner-sm"></span>
            </div>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Menu becomes bottom sheet on mobile",
        desc: "Below 480px, the suggestions menu takes over as a full-height bottom sheet with the keyboard pinned to the bottom.",
        img: IMG + "responsive-bottomsheet.png",
        imgAlt: "A combobox menu opening as a bottom sheet on mobile.",
        sample: <Cb value="Pu" open options={[{ label: "Pune", active: true }, { label: "Pulwama" }]} />,
      },
      {
        title: "Tap target stays 44 × 44px on every row",
        desc: "Each menu option gets at least 44px height on mobile. Easy to tap without zooming or accidentally hitting the next row.",
        img: IMG + "responsive-mobile.png",
        imgAlt: "A large combobox sized for mobile.",
        sample: <Cb value="" open options={[{ label: "Pune" }, { label: "Mumbai" }]} />,
      },
      {
        title: "Multi-select tags wrap onto multiple lines",
        desc: "Selected-tag chips inside the trigger wrap to a new line as needed. The trigger grows vertically instead of horizontal scrolling.",
        img: IMG + "responsive-wrap.png",
        imgAlt: "A multi-select combobox with four district chips (Maharashtra, Karnataka, Tamil Nadu, Punjab) wrapping onto a second line, with the typing caret on the next row.",
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A combobox with a helpful placeholder, Type to search a district.",
          rule: "Use a placeholder that tells the user they can type to filter.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A combobox with a blank trigger.",
          rule: "Do not leave the trigger blank; users won't know they can search.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "A combobox in error with a helpful message.",
          rule: "Pair an error with a message that says how to fix it.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A combobox in error with no message.",
          rule: "Do not show an error with no explanation.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "A comfortably sized combobox.",
          rule: "Use a comfortable trigger size that's easy to tap and read.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "A very small combobox trigger.",
          rule: "Do not shrink the trigger below a comfortable tap size.",
        },
      },
    ],

    accessibility: [
      { t: "Use ARIA combobox pattern.", b: "Input has `role='combobox'` with `aria-expanded` reflecting menu state. Menu is `role='listbox'` with `role='option'` children." },
      { t: "Active option uses aria-activedescendant.", b: "Don't move focus to menu options. Keep focus on the input and set `aria-activedescendant` to the highlighted option's id. Arrow keys navigate; Enter picks." },
      { t: "Live region announces filtered count.", b: "'3 results' updates in an `aria-live='polite'` region after each filter. Users hear progress without manual scan." },
      { t: "Escape clears and closes.", b: "First Escape closes the menu; second Escape clears the input. Familiar from native browser combobox." },
      { t: "Multi-select tags use aria-label='Remove [tag]'.", b: "Each removable tag inside the trigger gets a clear remove action accessible to keyboard and screen readers." },
      { t: "No-results state stays in the tab order.", b: "If the empty state offers free-text fallback or 'browse all', that link must be Tab-reachable. Don't trap users in a dead menu." },
      { t: "Auto-highlight first match only when query is non-empty.", b: "Empty-query menus should not auto-highlight - users haven't yet expressed preference. Auto-highlight on type so Enter has a clear default." },
    ],

    related: [
      {
        name: "Dropdown Menu",
        note: "When the list is short (under 10 items) and doesn't need filtering, use Dropdown. Combobox adds typing - unnecessary for 5 options.",
        preview: (
          <div className="ux4g-dropdown" style={{ width: "100%" }}>
            <div className="ux4g-dropdown-control">
              <div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text">English (en-IN)</span></div>
              <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
            </div>
          </div>
        ),
      },
      {
        name: "Search",
        note: "For free-text search across services or documents (not picking one item to fill a form field), use Search. Combobox fills a single value; Search navigates.",
        preview: (
          <div className="ux4g-search" style={{ width: "100%" }}>
            <span className="ux4g-search-leading-icon ux4g-icon-outlined">search</span>
            <input type="text" className="ux4g-search-input" placeholder="Search services" readOnly />
          </div>
        ),
      },
      {
        name: "Auto Complete",
        note: "For input fields that suggest as the user types but allow free-text (name, address line), use Auto Complete. Same UX, looser matching.",
        preview: (
          <div className="ux4g-search" style={{ width: "100%" }}>
            <span className="ux4g-search-leading-icon ux4g-icon-outlined">person_search</span>
            <input type="text" className="ux4g-search-input" defaultValue="Anjali Bha" readOnly />
          </div>
        ),
      },
      {
        name: "Tag",
        note: "Multi-select Combobox uses Tags inside its trigger to show chosen items. Each Tag is removable via × icon.",
        preview: (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span className="ux4g-tag-tonal-primary">Maharashtra ×</span>
            <span className="ux4g-tag-tonal-primary">Karnataka ×</span>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
