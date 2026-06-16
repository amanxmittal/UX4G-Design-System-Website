/* global React */
(function () {
  function Chip({ active, children }) {
    return <span className={"ux4g-filter-chip-md" + (active ? " active" : "")}>{children}</span>;
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-tag-mock">
          <div className="hb-tag-chip amber">Aadhaar</div>
          <div className="hb-tag-chip">PAN card</div>
          <div className="hb-tag-chip outline">Voter ID</div>
          <div className="hb-tag-chip">Passport</div>
          <div className="hb-tag-chip amber">Active filter</div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Chip Group",
    navName: "Chip Group",
    group: "Navigation",
    desc: "Grouped filter chips with single- or multi-select behaviour. Consistent spacing, alignment, and overflow handling across the whole group.",
    bannerVariant: "badge",
    hero: Hero,
    anatomy: [
      { n: 1, label: "Group container", token: "ux4g-bg-neutral-soft" },
      { n: 2, label: "Chip", token: "ux4g-filter-chip-md" },
      { n: 3, label: "Active chip", token: "ux4g-bg-primary-strong" },
      { n: 4, label: "Gap between chips", token: "ux4g-inline-xs" },
      { n: 5, label: "Wrap overflow", token: "flex-wrap" },
    ],
    properties: [
      { label: "Selection mode", desc: "Single-select for mutually exclusive filters. Multi-select for combining filters (verified + pending).", demos: [
        { label: "Single", node: (<div style={{ display: "flex", gap: 6 }}><Chip active>All</Chip><Chip>Live</Chip><Chip>WIP</Chip></div>) },
        { label: "Multi", node: (<div style={{ display: "flex", gap: 6 }}><Chip active>Identity</Chip><Chip active>Welfare</Chip><Chip>Property</Chip></div>) },
      ] },
      { label: "With clear-all", desc: "When 2+ filters are active, surface a 'Clear all' link to reset the group in one tap.", demos: [
        { label: "Clear all visible", wide: true, node: (<div style={{ display: "flex", gap: 6, alignItems: "center" }}><Chip active>Identity</Chip><Chip active>Welfare</Chip><Chip>Property</Chip><button className="ux4g-btn-text-primary ux4g-btn-sm">Clear all</button></div>) },
      ] },
    ],
    scenarios: [
      { title: "Service catalogue filter", desc: "Above the components grid, a Chip Group filters by category. Default has 'All' active so users see everything.", stage: (<div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}><Chip active>All</Chip><Chip>Form</Chip><Chip>Feedback</Chip><Chip>Data</Chip><Chip>Navigation</Chip></div>) },
      { title: "Applied filters bar", desc: "Selected filters shown together with a clear-all action. Tapping × on any chip removes that specific filter.", stage: (<div style={{ display: "flex", gap: 6, alignItems: "center" }}><span className="ux4g-tag-tonal-primary">Maharashtra ×</span><span className="ux4g-tag-tonal-primary">Active ×</span><button className="ux4g-btn-text-primary ux4g-btn-sm">Clear</button></div>) },
      { title: "Overflow to next line", desc: "When chips exceed container width, wrap to a new line. Never horizontal-scroll the group.", stage: (<div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}><Chip active>All</Chip><Chip>Identity</Chip><Chip>Welfare</Chip><Chip>Property</Chip><Chip>Health</Chip><Chip>Education</Chip><Chip>Banking</Chip></div>) },
      { title: "With counts", desc: "Each chip can show a count in parentheses - 'Active (12)'. Helps users see filter impact before applying.", stage: (<div style={{ display: "flex", gap: 6 }}><Chip active>All (156)</Chip><Chip>Active (12)</Chip><Chip>Pending (4)</Chip></div>) },
    ],
    responsive: [
      { title: "Wraps to multiple lines", desc: "On narrow viewports, chip group wraps to multiple lines. Group container grows vertically.", sample: (<div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}><Chip active>All</Chip><Chip>A</Chip><Chip>B</Chip><Chip>C</Chip></div>) },
      { title: "Horizontal scroll only on toolbar contexts", desc: "Inside a top toolbar where vertical space is limited, the group can horizontally scroll instead of wrapping.", sample: (<div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 4 }}><Chip active>All</Chip><Chip>A</Chip><Chip>B</Chip><Chip>C</Chip><Chip>D</Chip><Chip>E</Chip></div>) },
    ],
    practices: [
      { do: { stage: (<div style={{ display: "flex", gap: 6 }}><Chip active>All</Chip><Chip>Live</Chip></div>), rule: "Always include 'All' as the default reset state." }, dont: { stage: (<div style={{ display: "flex", gap: 6 }}><Chip>Live</Chip><Chip>WIP</Chip></div>), rule: "No 'All' means users can't easily clear filters." } },
      { do: { stage: (<div style={{ display: "flex", gap: 6 }}><Chip active>All (156)</Chip><Chip>Active (12)</Chip></div>), rule: "Include counts so users see filter impact upfront." }, dont: { stage: (<div style={{ display: "flex", gap: 6 }}><Chip active>All</Chip><Chip>Active</Chip></div>), rule: "Without counts, users have to apply each filter to discover results." } },
    ],
    accessibility: [
      { t: "Use role='group' or 'radiogroup'.", b: "Single-select chip groups use `role='radiogroup'`. Multi-select use `role='group'` with each chip as `role='checkbox'`. Tells AT what selection behaviour to expect." },
      { t: "Group has a visible heading or aria-label.", b: "'Filter by category' as either a label above or `aria-label`. Screen-reader users know what the group filters." },
      { t: "Arrow keys navigate within group.", b: "Single-select chip groups support arrow-key navigation within the group. Tab moves to the next focusable element." },
      { t: "Selected state announces.", b: "Active chips use `aria-pressed='true'` (multi) or `aria-checked='true'` (single). State change announced live." },
      { t: "Clear-all action labelled.", b: "'Clear all filters' button gets a clear label and is reachable by Tab. Don't rely on a × icon alone." },
    ],
    related: [
      { name: "Chip", note: "Individual filter pills used inside a Chip Group. Same component, grouped behaviour managed by Chip Group.", preview: <Chip active>All</Chip> },
      { name: "Tag", note: "For display-only status markers (not interactive), use Tag. Chip Group is for interactive filtering.", preview: <span className="ux4g-tag-tonal-success">Verified</span> },
      { name: "Tab", note: "When chips would replace the entire view (Overview vs Documents), use Tab. Chip Group filters; Tab swaps.", preview: (<div className="ux4g-tab ux4g-tab-underline ux4g-tab-sm"><ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}><li className="ux4g-tab-item is-active" role="tab">Overview</li><li className="ux4g-tab-item" role="tab">Documents</li></ul></div>) },
      { name: "Search", note: "For type-ahead filtering when categories aren't pre-defined, use Search. Chips are for fixed filter sets.", preview: (<div className="ux4g-search" style={{ width: "100%" }}><span className="ux4g-search-leading-icon ux4g-icon-outlined">search</span><input type="text" className="ux4g-search-input" placeholder="Search" readOnly /></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
