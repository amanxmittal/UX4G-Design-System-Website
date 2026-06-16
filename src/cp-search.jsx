/* global React */
(function () {
  function Sr({ value, placeholder = "Search…", size = "m", state, clearable, trailing }) {
    return (
      <div className={"ux4g-search ux4g-search-" + size + (state === "disabled" ? " state-disabled" : "")} style={{ width: "100%" }}>
        <span className="ux4g-search-leading-icon ux4g-icon-outlined">search</span>
        <input type="text" className="ux4g-search-input" placeholder={placeholder} defaultValue={value} disabled={state === "disabled"} readOnly />
        {(clearable && value) && <span className="ux4g-search-trailing-icon ux4g-icon-outlined">close</span>}
        {trailing && <span className="ux4g-search-trailing-icon ux4g-icon-outlined">{trailing}</span>}
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-search-mock">
          <div className="hb-search-bar">
            <span className="hb-search-icon"></span>
            <span className="hb-search-text">Property tax payment<span className="hb-input-caret"></span></span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/search/";

  const config = {
    name: "Search",
    navName: "Search",
    group: "Form Elements",
    desc: "Type-ahead search across services, documents, and component library. Suggestions appear as the user types; matches highlight in results.",
    bannerVariant: "search",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Search field anatomy. A labelled search field with a leading magnifier icon, a 'Search for...' placeholder, a voice-input mic, a clear (X) button, a trailing search button, and a description below. Six numbered markers point to the Leading icon, Label, Input/placeholder, Clear button, Description, and Search button.",
    anatomy: [
      { n: 1, label: "Leading icon", desc: "The magnifier glyph cueing the search field." },
      { n: 2, label: "Label", desc: "An optional label naming the search." },
      { n: 3, label: "Input / placeholder", desc: "Where the query is typed; placeholder shows when empty." },
      { n: 4, label: "Clear button", desc: "An X to clear the current query." },
      { n: 5, label: "Description", desc: "Helper text below the field." },
      { n: 6, label: "Search button", desc: "The button that submits the query." },
    ],

    properties: [
      {
        label: "Size",
        desc: "Four sizes — S (32px) for compact toolbars, M (40px) the form default, L (48px, mobile default) for hero/landing search, and XL for marketing pages. Every size carries the default search button.",
        img: IMG + "properties-size.png",
        imgAlt: "Search fields at four sizes — Small, Medium, Large and Extra large — each labelled and each with a leading magnifier and a trailing search button.",
        demos: [
          { label: "SM · 32px", node: <Sr size="s" placeholder="Filter rows" /> },
          { label: "MD · 40px", node: <Sr placeholder="Search services" /> },
          { label: "LG · 48px", node: <Sr size="l" placeholder="Search 55+ components" /> },
        ],
      },
      {
        label: "State",
        desc: "Six states cover the full lifecycle — Default, Focused, Error, Success, Warning and Disabled. Error/Success/Warning each surface a matching caption message below the field.",
        img: IMG + "properties-state.png",
        imgAlt: "Six annotated search fields — Default, Focused, Error, Success, Warning and Disabled — each with a search button. Error/Success/Warning show a caption message such as ‘Found 12 matching services’.",
        demos: [
          { label: "Empty", node: <Sr placeholder="Search services" /> },
          { label: "With value", node: <Sr value="property tax" clearable /> },
          { label: "Disabled", node: <Sr state="disabled" value="Search disabled" /> },
        ],
      },
      {
        label: "Trailing controls",
        desc: "The trailing area can carry a clear (×) button, an optional voice-input mic, and the default search button. The search button can be switched off for inline filters where Enter submits.",
        img: IMG + "properties-clear.png",
        imgAlt: "Three search fields annotated Clear button, Voice input and No search button — showing the trailing controls that can be combined.",
        demos: [
          { label: "Clear icon", node: <Sr value="income certificate" clearable /> },
          { label: "Keyboard hint", node: <Sr placeholder="Search   ⌘K" /> },
        ],
      },
      {
        label: "Suggestions panel",
        desc: "When focused with a query, the field opens a suggestions panel: a primary/recent row at the top followed by suggestion list items. It has two states — Open (with results) and Open (no results).",
        img: IMG + "properties-suggestions.png",
        imgAlt: "An open search showing the suggestions panel. Four numbered markers point to the Search field, the Primary / recent row, a Suggestion item, and the Suggestions panel container.",
        demos: [
          { label: "With results", node: <Sr value="income" clearable /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Type-ahead suggestions",
        desc: "As the user types, the menu shows top 5 matching results. Pressing Enter on a highlight navigates; pressing Escape closes the menu.",
        img: IMG + "scenarios-typeahead.png",
        imgAlt: "A focused search for ‘prop’ with a type-ahead dropdown: Property tax highlighted, Property registration, Property mutation.",
        stage: (
          <div style={{ width: "100%" }}>
            <Sr value="prop" clearable />
            <div style={{ marginTop: 6, background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, padding: 6 }}>
              <div style={{ padding: "8px 12px", borderRadius: 4, background: "var(--ux4g-bg-neutral-soft)" }}><strong>Prop</strong>erty tax</div>
              <div style={{ padding: "8px 12px" }}><strong>Prop</strong>erty registration</div>
            </div>
          </div>
        ),
      },
      {
        title: "Recent searches",
        desc: "When the field is empty but focused, show the user's recent searches. Clear in one tap. Encourages re-use of past queries.",
        img: IMG + "scenarios-recent.png",
        imgAlt: "A focused search showing a recent-searches dropdown: Income certificate, Ration card, Voter ID.",
        stage: (
          <div style={{ width: "100%" }}>
            <Sr placeholder="Search services" />
            <div style={{ marginTop: 6, background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, padding: 6 }}>
              <div style={{ fontSize: 11, color: "var(--ux4g-text-neutral-tertiary)", padding: "4px 12px", letterSpacing: "0.08em" }}>RECENT</div>
              <div style={{ padding: "8px 12px" }}>↻ income certificate</div>
              <div style={{ padding: "8px 12px" }}>↻ pmkisan</div>
            </div>
          </div>
        ),
      },
      {
        title: "No results",
        desc: "When the query has no matches, show a friendly empty state with at least one suggestion (refine, browse, or contact support).",
        img: IMG + "scenarios-noresults.png",
        imgAlt: "A search with no results, suggesting the user try property tax or ration card.",
        stage: (
          <div style={{ width: "100%" }}>
            <Sr value="xqzy" clearable />
            <div style={{ marginTop: 6, padding: "20px 16px", textAlign: "center", color: "var(--ux4g-text-neutral-secondary)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6 }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>No services matched "xqzy"</div>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ fontSize: 12 }}>Browse all services →</a>
            </div>
          </div>
        ),
      },
      {
        title: "Global search shortcut",
        desc: "On desktop, pressing ⌘K (Ctrl+K) opens the global search overlay from anywhere. The hint sits in the placeholder so it's discoverable.",
        img: IMG + "scenarios-shortcut.png",
        imgAlt: "A search field with a keyboard shortcut hint (Command-K).",
        stage: <Sr placeholder="Search          ⌘K" />,
      },
      {
        title: "Filter search inside a table",
        desc: "An SM search input above a table filters rows as the user types. No menu - the table itself updates with each keystroke.",
        img: IMG + "scenarios-table.png",
        imgAlt: "A small search filtering a table, with two matching income certificate rows below.",
        stage: <Sr size="s" value="income certificate" clearable placeholder="Filter applications" />,
      },
      {
        title: "Loading state during fetch",
        desc: "When suggestions require a server round-trip, replace the search icon with a spinner briefly. Cap loading time to 300ms - fall back to client-side filter beyond that.",
        img: IMG + "scenarios-loading.png",
        imgAlt: "A search with a loading indicator while results are fetched.",
        stage: (
          <div className="ux4g-search ux4g-search-m" style={{ width: "100%" }}>
            <span className="ux4g-spinner ux4g-spinner-sm" style={{ marginLeft: 4 }}></span>
            <input type="text" className="ux4g-search-input" defaultValue="pin" readOnly />
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Default size scales up to LG on mobile",
        desc: "On small viewports, search becomes LG (48px) and gains a back button on the left. Suggestions menu becomes a fullscreen overlay.",
        img: IMG + "responsive-mobile.png",
        imgAlt: "A large search field sized for mobile.",
        sample: <Sr size="l" placeholder="Search services" />,
      },
      {
        title: "Sticky to top on scroll",
        desc: "On the components page and other list pages, the search bar sticks to the top of the viewport on scroll. Always reachable without scrolling back.",
        img: IMG + "responsive-sticky.png",
        imgAlt: "A search field that stays sticky at the top on scroll.",
        sample: <Sr placeholder="Search 55+ components" />,
      },
      {
        title: "Suggestions take full screen below 480px",
        desc: "On small phones, suggestions take over the whole viewport while focused. Easier to scan than a 200px-wide floating menu.",
        img: IMG + "responsive-fullwidth.png",
        imgAlt: "A search with a full-width suggestions dropdown for narrow screens.",
        sample: <Sr value="prop" clearable />,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A search field with a leading magnifier icon.",
          rule: "Show a magnifier icon so the field reads as search at a glance.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A search field with no icon, indistinguishable from a text input.",
          rule: "Do not drop the magnifier; without it the field looks like an ordinary text input.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "A filled search with a clear (×) button.",
          rule: "Offer a clear button once the field has text so users can reset in one tap.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A filled search with no clear button.",
          rule: "Do not omit the clear control; users have to select-all and delete to reset.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "A search with a descriptive placeholder naming what can be searched.",
          rule: "Use a placeholder that says what can be searched (services, schemes, documents).",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "A search whose placeholder is just the word Search.",
          rule: "Do not use a bare 'Search' placeholder; it wastes the chance to set expectations.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-4-do.png",
          imgAlt: "A search showing a loading indicator while fetching.",
          rule: "Show a loading indicator while results are fetched so users know it is working.",
        },
        dont: {
          img: IMG + "best-practices-4-dont.png",
          imgAlt: "A search with no feedback during fetch.",
          rule: "Do not leave the field static during a fetch; it feels frozen.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-5-do.png",
          imgAlt: "A comfortably sized search field.",
          rule: "Use a comfortable size so the field is easy to tap and read.",
        },
        dont: {
          img: IMG + "best-practices-5-dont.png",
          imgAlt: "A tiny search field.",
          rule: "Do not shrink search below a comfortable tap size.",
        },
      },
    ],

    accessibility: [
      { t: "Use role='combobox' with aria-expanded.", b: "The search input itself uses combobox semantics. The suggestions list is `role='listbox'` with `aria-activedescendant` pointing at the focused option." },
      { t: "Arrow keys navigate suggestions.", b: "Down enters the menu from the input; Up/Down moves between options; Enter selects; Escape closes and returns focus to the input." },
      { t: "Live region announces result count.", b: "After each keystroke (debounced 300ms), announce '3 results' in a polite live region. Users hear the menu updating without manual scan." },
      { t: "Clear button has an accessible name.", b: "Use `aria-label='Clear search'` on the × icon. The icon alone fails screen readers - the label gives it meaning." },
      { t: "Visible focus ring on input and menu items.", b: "Both the input and the highlighted menu option show a 2px outline. Never rely on hover-only states." },
      { t: "Loading state announces 'Searching'.", b: "When the spinner appears, announce 'Searching' in a live region so the user knows the system is responding to their input." },
      { t: "Empty state is in the tab order.", b: "Make the 'Browse all' link inside the empty-state menu reachable by Tab. Users shouldn't get trapped in a dead search." },
    ],

    related: [
      {
        name: "Combobox",
        note: "When search reads from a fixed local list (state, district, scheme), use Combobox. Search hits the backend; Combobox filters in-memory.",
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
        name: "Auto Complete",
        note: "For input fields that suggest as the user types (name lookup, address autofill), use Auto Complete. Same UX as Search but tied to a specific form field.",
        preview: <Sr value="Anjali Bha" clearable />,
      },
      {
        name: "Input",
        note: "For free-text entry that's not searched (name, ID, address), use Input. Search always has a query → results loop.",
        preview: (
          <div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}>
            <div className="ux4g-input">
              <input type="text" className="ux4g-input-input" defaultValue="+91 98765 43210" readOnly />
            </div>
          </div>
        ),
      },
      {
        name: "Empty State",
        note: "No-results state for Search is the Empty State component scaled into the suggestions menu. Same friendly tone, same next-step CTA.",
        preview: (
          <div style={{ padding: 12, textAlign: "center", border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, color: "var(--ux4g-text-neutral-secondary)" }}>
            <div style={{ fontSize: 22 }}>∅</div>
            <div style={{ fontSize: 12 }}>No applications yet</div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
