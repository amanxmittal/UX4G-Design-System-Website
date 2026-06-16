/* global React */
(function () {
  function Chip({ active, removable, children, size = "md" }) {
    return (
      <span className={"ux4g-filter-chip-" + size + (active ? " active" : "")} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        {children}
        {removable && <span style={{ cursor: "pointer", opacity: 0.7 }}>×</span>}
      </span>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-tag-mock">
          <div className="hb-tag-chip">All services</div>
          <div className="hb-tag-chip amber">Identity ×</div>
          <div className="hb-tag-chip outline">Property</div>
          <div className="hb-tag-chip outline">Welfare</div>
          <div className="hb-tag-chip outline">Health</div>
          <div className="hb-tag-chip amber">Pincode 110001 ×</div>
        </div>
      </React.Fragment>
    );
  }
  const IMG = "assets/images/component-anatomy/chip/";
  const config = {
    name: "Chip",
    navName: "Chip",
    group: "Navigation",
    desc: "Toggleable filter pill for faceted navigation across long service catalogues. Active state is filled; inactive is outlined.",
    bannerVariant: "badge",
    hero: Hero,
    anatomy: [
      { n: 1, label: "Container", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Label", token: "ux4g-label-m-default" },
      { n: 3, label: "Active fill", token: "ux4g-bg-primary-strong" },
      { n: 4, label: "Remove icon (optional)", token: "ux4g-icon-outlined" },
      { n: 5, label: "Border", token: "ux4g-border-color-neutral-subtle" },
    ],
    properties: [
      { label: "State", desc: "Inactive (outlined) and active (filled). Active commits the filter; one tap toggles back to inactive.", img: IMG + "properties-state.png", imgAlt: "Chips: an inactive All chip, an active Live chip (filled), and a removable Maharashtra chip with an × button.", demos: [
        { label: "Inactive", node: <Chip>All</Chip> },
        { label: "Active", node: <Chip active>Live</Chip> },
        { label: "Removable", node: <Chip removable>Maharashtra</Chip> },
      ] },
      { label: "Size", desc: "Medium is default for filter bars. Small for inline filters inside tables.", img: IMG + "properties-size.png", imgAlt: "An active filter chip at small and medium sizes.", demos: [
        { label: "Small", node: <Chip size="sm" active>Filter</Chip> },
        { label: "Medium", node: <Chip size="md" active>Filter</Chip> },
      ] },
    ],
    scenarios: [
      { title: "Single-select filter", desc: "One chip active at a time. Tapping another deactivates the previous. Default state has 'All' active.", img: IMG + "scenarios-single.png", imgAlt: "A single-select filter row with All active, beside Live and WIP.", stage: (<div style={{ display: "flex", gap: 6 }}><Chip active>All</Chip><Chip>Live</Chip><Chip>WIP</Chip></div>) },
      { title: "Multi-select filter", desc: "Multiple chips can be active simultaneously. Each commits its own filter on tap. Combine to narrow results.", img: IMG + "scenarios-multi.png", imgAlt: "A multi-select filter row with Identity and Welfare both active, beside Property.", stage: (<div style={{ display: "flex", gap: 6 }}><Chip active>Identity</Chip><Chip active>Welfare</Chip><Chip>Property</Chip></div>) },
      { title: "Removable selection", desc: "Selected items shown as removable chips. One tap on × clears that filter.", img: IMG + "scenarios-removable.png", imgAlt: "Removable selection chips for Maharashtra and Pune district, each with an × button.", stage: (<div style={{ display: "flex", gap: 6 }}><Chip removable>Maharashtra</Chip><Chip removable>Pune district</Chip></div>) },
    ],
    responsive: [
      { title: "Wraps on overflow", desc: "Chips wrap to next line when row is full. Never horizontal-scrolls - users may miss filters at the edge.", img: IMG + "responsive-wrap.png", imgAlt: "Filter chips wrapping to a second line instead of scrolling.", sample: (<div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}><Chip active>All</Chip><Chip>Active</Chip><Chip>Pending</Chip><Chip>Closed</Chip></div>) },
      { title: "Tap target stays 44 × 44px", desc: "Even small chips include invisible padding for 44px tap target.", img: IMG + "responsive-tap.png", imgAlt: "A small chip that still keeps a 44px tap target.", sample: <Chip size="sm" active>Filter</Chip> },
    ],
    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A filter row where the active chip is clearly filled.",
          rule: "Make the active chip clearly distinct so users can see the current filter.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A filter row where no chip looks active.",
          rule: "Do not leave the active state ambiguous; users can't tell what's filtered.",
        },
      },
    ],
    accessibility: [
      { t: "Use role='button' or role='checkbox' as fits.", b: "Single-select chips behave like radios (role='radio'). Multi-select chips behave like checkboxes (role='checkbox'). Use the right role for screen-reader meaning." },
      { t: "aria-pressed reflects state.", b: "Toggleable chips use `aria-pressed='true|false'` for screen readers to announce 'pressed' / 'not pressed'." },
      { t: "Tap targets stay 44 × 44px.", b: "Even compact chips include invisible padding to reach 44px. Thumb-friendly across all sizes." },
      { t: "Removal action announces context.", b: "× button gets `aria-label='Remove Maharashtra filter'`. Icon alone fails screen readers." },
      { t: "Active state is announced.", b: "Screen readers say 'pressed' for active chips. Visual fill reinforces but isn't the only cue." },
    ],
    related: [
      { name: "Chip Group", note: "When multiple Chips group together for faceted filtering, use Chip Group for consistent spacing and behaviour.", preview: (<div style={{ display: "flex", gap: 4 }}><Chip active size="sm">All</Chip><Chip size="sm">Live</Chip></div>) },
      { name: "Tag", note: "For display-only status markers (not toggleable), use Tag. Chip is interactive; Tag is informational.", preview: <span className="ux4g-tag-tonal-success">Verified</span> },
      { name: "Dropdown Menu", note: "When the filter has 10+ options, use Dropdown instead. Chips work best for 3-7 visible options.", preview: (<div className="ux4g-dropdown" style={{ width: "100%" }}><div className="ux4g-dropdown-control"><div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text">All states</span></div><span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span></div></div>) },
      { name: "Tab", note: "For switching the entire view (not filtering data), use Tab. Chips filter results; Tabs swap panels.", preview: (<div className="ux4g-tab ux4g-tab-underline ux4g-tab-sm"><ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}><li className="ux4g-tab-item is-active" role="tab">Overview</li><li className="ux4g-tab-item" role="tab">Documents</li></ul></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
