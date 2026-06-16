/* global React */
(function () {
  function Pag({ current = 2, last = 9 }) {
    const pages = [];
    if (last <= 7) {
      for (let i = 1; i <= last; i++) pages.push(i);
    } else {
      pages.push(1);
      if (current > 3) pages.push("…");
      for (let i = Math.max(2, current - 1); i <= Math.min(last - 1, current + 1); i++) pages.push(i);
      if (current < last - 2) pages.push("…");
      pages.push(last);
    }
    return (
      <div className="ux4g-pagination-wrapper">
        <div className="ux4g-pagination">
          <button className="ux4g-page-nav prev ux4g-icon-outlined" disabled={current === 1}>chevron_left</button>
          {pages.map((p, i) => p === "…" ? (
            <span key={i} className="ux4g-page-number-more">…</span>
          ) : (
            <button key={i} className={"ux4g-page-number" + (p === current ? " active" : "")}>{p}</button>
          ))}
          <button className="ux4g-page-nav next ux4g-icon-outlined" disabled={current === last}>chevron_right</button>
        </div>
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-step-mock">
          <div className="hb-step-node pending" style={{ background: "#fff", color: "var(--primary-dark)" }}>‹</div>
          <div style={{ width: 20 }}></div>
          <div className="hb-step-node pending" style={{ background: "#fff", color: "var(--primary-dark)" }}>1</div>
          <div style={{ width: 12 }}></div>
          <div className="hb-step-node current">2</div>
          <div style={{ width: 12 }}></div>
          <div className="hb-step-node pending" style={{ background: "#fff", color: "var(--primary-dark)" }}>3</div>
          <div style={{ width: 12 }}></div>
          <div className="hb-step-node pending" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)", border: "2px solid transparent" }}>…</div>
          <div style={{ width: 12 }}></div>
          <div className="hb-step-node pending" style={{ background: "#fff", color: "var(--primary-dark)" }}>9</div>
          <div style={{ width: 20 }}></div>
          <div className="hb-step-node pending" style={{ background: "#fff", color: "var(--primary-dark)" }}>›</div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Pagination",
    navName: "Pagination",
    group: "Navigation",
    desc: "Page-by-page navigation for tables, search results, and long lists. Use when total results exceed what fits in a comfortable scroll.",
    bannerVariant: "stepper",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Previous arrow", token: "ux4g-icon-outlined" },
      { n: 2, label: "Page number", token: "ux4g-label-l-default" },
      { n: 3, label: "Active page", token: "ux4g-bg-primary-strong" },
      { n: 4, label: "Ellipsis", token: "ux4g-text-neutral-tertiary" },
      { n: 5, label: "Next arrow", token: "ux4g-icon-outlined" },
      { n: 6, label: "Disabled state", token: "ux4g-text-neutral-tertiary" },
      { n: 7, label: "Tap target", token: "≥ 44 × 44px" },
    ],

    properties: [
      {
        label: "Length",
        desc: "Up to 7 pages, show all numbers. Beyond that, collapse middle pages with ellipsis - first, current ± 1, last always visible.",
        demos: [
          { label: "Short (≤7)", node: <Pag current={3} last={5} /> },
          { label: "Long (collapsed)", wide: true, node: <Pag current={4} last={20} /> },
          { label: "At start", node: <Pag current={1} last={9} /> },
          { label: "At end", node: <Pag current={9} last={9} /> },
        ],
      },
      {
        label: "Position",
        desc: "Centered below the content is the default. Right-aligned on data tables where the count label sits on the left.",
        demos: [
          { label: "Centered", wide: true, node: <Pag /> },
          { label: "With count label", wide: true, node: (
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
              <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>Showing 11-20 of 156</span>
              <Pag />
            </div>
          ) },
        ],
      },
    ],

    scenarios: [
      {
        title: "Table of applications",
        desc: "10 rows per page is the default for citizen-facing tables. Show '11-20 of 156' on the left so users know the total count.",
        stage: (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>Showing 11-20 of 156 applications</span>
            <Pag current={2} last={16} />
          </div>
        ),
      },
      {
        title: "Search results",
        desc: "Below search results, pagination plus 'X-Y of Z'. On mobile, the count moves above the pagination to free up horizontal space.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>21-30 of 423 results for "income certificate"</span>
            <Pag current={3} last={43} />
          </div>
        ),
      },
      {
        title: "At first / last page",
        desc: "Previous arrow disabled on page 1; Next arrow disabled on the last page. Disabled buttons stay visible to confirm boundary.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
            <Pag current={1} last={9} />
            <Pag current={9} last={9} />
          </div>
        ),
      },
      {
        title: "Jump to page input",
        desc: "For very long result sets (50+ pages), pair the pagination with a 'Jump to page' input so users can leap to a specific page.",
        stage: (
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Pag current={4} last={50} />
            <span style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>Jump to</span>
            <input type="text" defaultValue="4" readOnly style={{ width: 50, padding: "4px 8px", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, textAlign: "center" }} />
          </div>
        ),
      },
      {
        title: "Per-page selector",
        desc: "Let power users change rows per page (10 / 25 / 50). Save the preference so they don't reset every visit.",
        stage: (
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)", display: "flex", alignItems: "center", gap: 8 }}>
              Rows per page:
              <select defaultValue="10" style={{ padding: "2px 8px", borderRadius: 4 }}><option>10</option><option>25</option><option>50</option></select>
            </div>
            <Pag />
          </div>
        ),
      },
      {
        title: "Mobile - prev / next only",
        desc: "Below 480px, pagination reduces to Previous / Page X of Y / Next. Page numbers eat too much horizontal space on small screens.",
        stage: (
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button className="ux4g-page-nav prev ux4g-icon-outlined">chevron_left</button>
            <span style={{ fontSize: 13 }}>Page 2 of 16</span>
            <button className="ux4g-page-nav next ux4g-icon-outlined">chevron_right</button>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Compact prev / next below 480px",
        desc: "On small screens, only Previous, page indicator, and Next are visible. Numbers don't fit comfortably with 44px tap targets.",
        sample: (
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <button className="ux4g-page-nav prev ux4g-icon-outlined">chevron_left</button>
            <span style={{ fontSize: 13 }}>2 / 16</span>
            <button className="ux4g-page-nav next ux4g-icon-outlined">chevron_right</button>
          </div>
        ),
      },
      {
        title: "Count label moves above pagination on mobile",
        desc: "Below 600px, the 'X-Y of Z' label stacks above the pagination so neither truncates. Center-aligned both.",
        sample: (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>11-20 of 156</span>
            <Pag />
          </div>
        ),
      },
      {
        title: "Tap targets stay 44 × 44px on every button",
        desc: "Each page number and arrow has invisible padding to reach 44px regardless of visible size. Critical for thumb-first mobile.",
        sample: <Pag />,
      },
    ],

    practices: [
      {
        do: { stage: (<div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}><span style={{ fontSize: 12 }}>11-20 of 156</span><Pag /></div>), rule: "Show 'X-Y of Z' alongside pagination - users know the total count." },
        dont: { stage: <Pag />, rule: "Pagination without count leaves users guessing if there's 10 pages or 1000." },
      },
      {
        do: { stage: <Pag current={4} last={20} />, rule: "Use ellipsis to collapse long page lists - first, near-current, last." },
        dont: { stage: (<div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>{[...Array(20)].map((_, i) => <button key={i} className={"ux4g-page-number" + (i === 3 ? " active" : "")}>{i + 1}</button>)}</div>), rule: "Showing all 20 numbers eats horizontal space and breaks visual rhythm." },
      },
      {
        do: { stage: <Pag current={1} last={9} />, rule: "Disable Previous on page 1, Next on last page - clear boundary cue." },
        dont: { stage: (<div className="ux4g-pagination-wrapper"><div className="ux4g-pagination"><button className="ux4g-page-nav prev ux4g-icon-outlined">chevron_left</button><button className="ux4g-page-number active">1</button><button className="ux4g-page-number">2</button><button className="ux4g-page-nav next ux4g-icon-outlined">chevron_right</button></div></div>), rule: "Enabled Previous on page 1 wraps to last page - unexpected and disorienting." },
      },
      {
        do: { stage: (<div style={{ display: "flex", alignItems: "center", gap: 16 }}><button className="ux4g-page-nav prev ux4g-icon-outlined">chevron_left</button><span style={{ fontSize: 13 }}>2 / 16</span><button className="ux4g-page-nav next ux4g-icon-outlined">chevron_right</button></div>), rule: "On mobile, simplify to Prev / Page X of Y / Next." },
        dont: { stage: <Pag current={2} last={16} />, rule: "Full pagination on mobile makes tap targets too small or wraps awkwardly." },
      },
    ],

    accessibility: [
      { t: "Use nav element with aria-label='Pagination'.", b: "Wrap the pagination in `<nav aria-label='Pagination'>` so screen readers announce its purpose distinctly from other navigation." },
      { t: "Current page uses aria-current='page'.", b: "The active page button gets `aria-current='page'` so screen readers announce 'page 2, current'. Visual highlight reinforces but is not the only cue." },
      { t: "Disabled arrows use aria-disabled.", b: "Previous on page 1 and Next on last page use `aria-disabled='true'` instead of native `disabled` so they stay in the tab order for context." },
      { t: "Ellipsis is hidden from assistive tech.", b: "Wrap the '…' character in `aria-hidden='true'`. Screen-reader users hear 'page 1, page 4, page 5, page 6, page 20' without the visual placeholder." },
      { t: "Each page button has an accessible label.", b: "'Page 1', 'Page 2', etc. - so screen readers announce position clearly. Native button text works if you spell out the number." },
      { t: "Arrows have aria-label='Previous page' / 'Next page'.", b: "Icon-only arrows fail without labels. The chevron symbol alone is not enough for screen-reader users." },
      { t: "Tap targets stay 44 × 44px or larger.", b: "Each button has invisible padding to reach 44px. Touch users hit the same target as the visible button." },
    ],

    related: [
      {
        name: "Table",
        note: "Pagination most commonly sits below a Table. Use server-side pagination for tables with 100+ rows; client-side for under 50.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%", fontSize: 11 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "6px 8px", background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4 }}><span>Service</span><span>Status</span><span>SLA</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "6px 8px" }}><span>Income cert.</span><span>Verified</span><span>18d</span></div>
          </div>
        ),
      },
      {
        name: "Stepper",
        note: "For multi-step processes (form steps, verification flow), use Stepper. Pagination is for browsing equal items; Stepper is for sequential tasks.",
        preview: (
          <ul className="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small" style={{ width: "100%", padding: 0, margin: 0 }}>
            <li className="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done"><span className="ux4g-stepper-head-icon">1</span></li>
            <li className="ux4g-stepper-step ux4g-stepper-completed"><span className="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span className="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span></span></li>
            <li className="ux4g-stepper-step"><span className="ux4g-stepper-head-icon"><span className="ux4g-stepper-head-check">3</span></span></li>
          </ul>
        ),
      },
      {
        name: "Empty State",
        note: "When the current page has no results, fall back to the Empty State component instead of showing 'Page 1 of 1' with empty content.",
        preview: (
          <div style={{ padding: 16, textAlign: "center", border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, color: "var(--ux4g-text-neutral-secondary)", fontSize: 12 }}>
            <div style={{ fontSize: 22 }}>∅</div>
            <div>No applications yet</div>
          </div>
        ),
      },
      {
        name: "Chip",
        note: "For load-more-style 'infinite scroll' patterns, use a 'Load more' Chip / Button instead of numbered pagination. Better on mobile.",
        preview: <button className="ux4g-btn-outline-primary ux4g-btn-sm">Load more</button>,
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
