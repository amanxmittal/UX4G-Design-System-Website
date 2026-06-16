/* global React */
(function () {
  function Tbl({ headers, rows, density = "default", striped }) {
    return (
      <div style={{ width: "100%", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: density === "compact" ? 12 : 13 }}>
          <thead>
            <tr style={{ background: "var(--ux4g-bg-neutral-soft)" }}>
              {headers.map((h, i) => (
                <th key={i} style={{ textAlign: "left", padding: density === "compact" ? "8px 10px" : "12px 14px", fontWeight: 600, fontSize: 11, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--ux4g-text-neutral-secondary)", borderBottom: "1px solid var(--ux4g-border-color-neutral-subtle)" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ background: striped && i % 2 ? "var(--ux4g-bg-neutral-soft)" : "transparent" }}>
                {r.map((c, j) => (
                  <td key={j} style={{ padding: density === "compact" ? "8px 10px" : "12px 14px", borderBottom: i === rows.length - 1 ? "none" : "1px solid var(--ux4g-border-color-neutral-subtle)" }}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-table-mock">
          <div className="hb-table-row head"><span>Service</span><span>Status</span><span>SLA</span></div>
          <div className="hb-table-row"><span className="hb-table-cell text" style={{ fontSize: 13, color: "var(--primary-dark)", fontWeight: 500 }}>Income cert.</span><span className="hb-table-pill">Verified</span><span className="hb-table-cell text" style={{ fontSize: 13, color: "var(--primary-dark)", fontWeight: 500 }}>18d</span></div>
          <div className="hb-table-row"><span className="hb-table-cell text" style={{ fontSize: 13, color: "var(--primary-dark)", fontWeight: 500 }}>PAN update</span><span className="hb-table-pill">Active</span><span className="hb-table-cell text" style={{ fontSize: 13, color: "var(--primary-dark)", fontWeight: 500 }}>4d</span></div>
          <div className="hb-table-row"><span className="hb-table-cell text" style={{ fontSize: 13, color: "var(--primary-dark)", fontWeight: 500 }}>PMAY-U</span><span className="hb-table-pill" style={{ background: "rgba(245, 158, 11, 0.15)", color: "#f59e0b" }}>Pending</span><span className="hb-table-cell text" style={{ fontSize: 13, color: "var(--primary-dark)", fontWeight: 500 }}>12d</span></div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Table",
    navName: "Table",
    group: "Data Display",
    desc: "Sortable, paginated rows for transaction history, applications, and audit logs. Each row is a record; each column is a fact about it.",
    bannerVariant: "table",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Header cell", token: "ux4g-label-m-strong" },
      { n: 1, label: "Sort indicator", token: "ux4g-icon-outlined" },
      { n: 2, label: "Data cell", token: "ux4g-body-s-default" },
      { n: 3, label: "Row separator", token: "ux4g-border-color-neutral-subtle" },
      { n: 4, label: "Selected row", token: "ux4g-bg-primary-subtle" },
      { n: 5, label: "Hover state", token: "ux4g-bg-neutral-soft" },
      { n: 6, label: "Footer / pagination", token: "ux4g-bg-neutral-elevated" },
    ],

    properties: [
      {
        label: "Density",
        desc: "Default is the balanced density for citizen-facing tables. Compact for admin dashboards with 20+ rows visible.",
        demos: [
          { label: "Default", wide: true, node: <Tbl headers={["Service", "Status", "SLA"]} rows={[["Income cert.", <span className="ux4g-tag-tonal-success">Verified</span>, "18d"], ["PAN update", <span className="ux4g-tag-tonal-primary">Active</span>, "4d"]]} /> },
          { label: "Compact", wide: true, node: <Tbl density="compact" headers={["Ref", "Type", "Status", "SLA"]} rows={[["AP-83942", "Income cert.", <span className="ux4g-tag-tonal-success">Verified</span>, "18d"], ["AP-83943", "PAN update", <span className="ux4g-tag-tonal-primary">Active</span>, "4d"], ["AP-83944", "PMAY-U", <span className="ux4g-tag-tonal-warning">Pending</span>, "12d"]]} /> },
        ],
      },
      {
        label: "Striped vs plain",
        desc: "Plain rows for 5-10 row tables. Striped alternating-row background for 10+ rows where eyes need help tracking across columns.",
        demos: [
          { label: "Plain", wide: true, node: <Tbl headers={["Service", "Status"]} rows={[["A", "Active"], ["B", "Active"]]} /> },
          { label: "Striped", wide: true, node: <Tbl striped headers={["Service", "Status"]} rows={[["Service A", "Active"], ["Service B", "Pending"], ["Service C", "Closed"], ["Service D", "Active"]]} /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Application history",
        desc: "Citizens see all their past applications. Sortable by date, filterable by status. Each row links to the application detail.",
        stage: (
          <Tbl headers={["Reference", "Service", "Status", "SLA"]} rows={[
            ["AP-83942", "Income certificate", <span className="ux4g-tag-tonal-success">Verified</span>, "18d"],
            ["AP-83941", "PAN update", <span className="ux4g-tag-tonal-primary">Active</span>, "4d"],
            ["AP-83940", "PMAY-U", <span className="ux4g-tag-tonal-warning">Pending</span>, "12d"],
            ["AP-83939", "Voter ID", <span className="ux4g-tag-tonal-neutral">Closed</span>, "—"],
          ]} />
        ),
      },
      {
        title: "Sortable header",
        desc: "Tapping a header sorts the column. Visual arrow shows direction (ascending / descending). Default sort is the most-recent column.",
        stage: (
          <Tbl headers={["Service", "Filed ↓", "Status"]} rows={[
            ["Income cert.", "14 Apr 2026", <span className="ux4g-tag-tonal-success">Verified</span>],
            ["PAN update", "12 Apr 2026", <span className="ux4g-tag-tonal-primary">Active</span>],
            ["PMAY-U", "8 Apr 2026", <span className="ux4g-tag-tonal-warning">Pending</span>],
          ]} />
        ),
      },
      {
        title: "Row actions menu",
        desc: "Each row has a ⋮ menu on the right for actions like Edit, Download, Delete. The menu opens as a Popover anchored to the icon.",
        stage: (
          <Tbl headers={["Service", "Status", ""]} rows={[
            ["Income cert.", <span className="ux4g-tag-tonal-success">Verified</span>, <button className="ux4g-icon-btn ux4g-icon-btn-sm"><span className="ux4g-icon-outlined">more_vert</span></button>],
            ["PAN update", <span className="ux4g-tag-tonal-primary">Active</span>, <button className="ux4g-icon-btn ux4g-icon-btn-sm"><span className="ux4g-icon-outlined">more_vert</span></button>],
          ]} />
        ),
      },
      {
        title: "Empty state",
        desc: "When there are no rows, show the Empty State component inside the table area. Don't render an empty `<table>`.",
        stage: (
          <div style={{ width: "100%", padding: 32, textAlign: "center", border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, color: "var(--ux4g-text-neutral-secondary)" }}>
            <div style={{ fontSize: 32, marginBottom: 8 }}>∅</div>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>No applications yet</div>
            <div style={{ fontSize: 12, marginBottom: 12 }}>File your first application to see it here.</div>
            <button className="ux4g-btn-primary ux4g-btn-sm">Browse services</button>
          </div>
        ),
      },
      {
        title: "With selection",
        desc: "Checkbox column on the left enables bulk actions. Header checkbox selects all visible rows; selected rows highlight with primary tint.",
        stage: (
          <Tbl headers={[<input type="checkbox" readOnly />, "Service", "Status"]} rows={[
            [<input type="checkbox" defaultChecked readOnly />, "Income cert.", <span className="ux4g-tag-tonal-success">Verified</span>],
            [<input type="checkbox" readOnly />, "PAN update", <span className="ux4g-tag-tonal-primary">Active</span>],
          ]} />
        ),
      },
      {
        title: "With pagination",
        desc: "When the rowset exceeds the page size, surface a Pagination component below the table with 'X-Y of Z' on the left.",
        stage: (
          <div style={{ width: "100%" }}>
            <Tbl headers={["Service", "Status", "SLA"]} rows={[
              ["Income cert.", "Verified", "18d"],
              ["PAN update", "Active", "4d"],
              ["PMAY-U", "Pending", "12d"],
            ]} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 12, fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>
              <span>Showing 1-3 of 156</span>
              <div className="ux4g-pagination-wrapper" style={{ margin: 0 }}>
                <div className="ux4g-pagination">
                  <button className="ux4g-page-nav prev ux4g-icon-outlined" disabled>chevron_left</button>
                  <button className="ux4g-page-number active">1</button>
                  <button className="ux4g-page-number">2</button>
                  <button className="ux4g-page-nav next ux4g-icon-outlined">chevron_right</button>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Horizontal scroll on overflow",
        desc: "Wide tables (5+ columns) scroll horizontally on narrow viewports instead of compressing columns. First column can be sticky for context.",
        sample: <Tbl headers={["Ref", "Service", "Status"]} rows={[["AP-83942", "Income certificate", "Verified"], ["AP-83941", "PAN update", "Active"]]} />,
      },
      {
        title: "Stack to cards below 768px (optional)",
        desc: "Citizen-facing tables can collapse to a card-per-row layout on mobile. Each row becomes a stack: label : value pairs.",
        sample: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
            <div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ux4g-text-neutral-tertiary)", marginBottom: 6 }}><span>SERVICE</span><span>STATUS</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}><span>Income cert.</span><span className="ux4g-tag-tonal-success">Verified</span></div>
            </div>
          </div>
        ),
      },
      {
        title: "Density adapts at narrow widths",
        desc: "Compact density stays compact across all widths. Default density auto-shrinks padding by 2px at narrow widths to fit more columns.",
        sample: <Tbl density="compact" headers={["Service", "Status"]} rows={[["Income cert.", "Verified"], ["PAN update", "Active"]]} />,
      },
    ],

    practices: [
      {
        do: { stage: <Tbl headers={["Service", "Status"]} rows={[["A", <span className="ux4g-tag-tonal-success">Verified</span>]]} />, rule: "Use Tag for status columns - colour-coded but readable in greyscale too." },
        dont: { stage: <Tbl headers={["Service", "Status"]} rows={[["A", <span style={{ color: "#16a34a" }}>●</span>]]} />, rule: "Coloured dots fail screen readers and colour-blind users." },
      },
      {
        do: { stage: <Tbl headers={["Service", "Filed ↓"]} rows={[["A", "14 Apr 2026"], ["B", "12 Apr 2026"]]} />, rule: "Default sort: newest first. Matches user expectation for activity logs." },
        dont: { stage: <Tbl headers={["Service", "Filed"]} rows={[["A", "12 Apr 2026"], ["B", "14 Apr 2026"]]} />, rule: "Unsorted rows make users scan to find the most recent entry." },
      },
      {
        do: { stage: <Tbl density="compact" headers={["A", "B", "C"]} rows={[["1", "2", "3"]]} />, rule: "Compact density for admin / 20+ row tables. Default for under 20 rows." },
        dont: { stage: <Tbl headers={["A", "B", "C"]} rows={[["1", "2", "3"], ["1", "2", "3"], ["1", "2", "3"]]} />, rule: "Default density for a long admin table eats vertical space - admins scroll a lot." },
      },
      {
        do: { stage: <Tbl headers={["Service", "Status"]} rows={[["A", "Active"]]} />, rule: "Header cells use uppercase + smaller font - clearly distinct from data." },
        dont: { stage: <Tbl headers={["service", "status"]} rows={[["A", "Active"]]} />, rule: "Lowercase headers blend with data - hierarchy lost." },
      },
    ],

    accessibility: [
      { t: "Use semantic <table>, not divs.", b: "Real `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>` elements get screen-reader table semantics for free. Avoid div-tables." },
      { t: "Headers link to their cells via scope.", b: "Column headers get `scope='col'`; row headers get `scope='row'`. Screen readers announce the header alongside each cell value." },
      { t: "Sortable headers are buttons.", b: "Wrap the header label in a `<button>` so it's keyboard-tabbable. Use `aria-sort='ascending'` / `'descending'` / `'none'` to announce sort state." },
      { t: "Selected rows have aria-selected='true'.", b: "Checkbox-selection rows mark `aria-selected='true'` on the row. Screen readers announce 'selected' as user navigates." },
      { t: "Empty state replaces table, not blank rows.", b: "When there's no data, render the Empty State component instead of an empty `<table>`. Screen readers don't announce empty tables usefully." },
      { t: "Pagination is a separate nav landmark.", b: "Wrap pagination below the table in `<nav aria-label='Pagination'>` so screen readers can jump to it directly." },
      { t: "Caption summarises the table.", b: "Use `<caption>` (or `aria-label` on the table) to describe what the table contains - 'Your applications by status, most recent first'." },
    ],

    related: [
      {
        name: "Pagination",
        note: "Long tables pair with Pagination below. Server-side paginate beyond 100 rows; client-side fine for under 50.",
        preview: (
          <div className="ux4g-pagination-wrapper">
            <div className="ux4g-pagination">
              <button className="ux4g-page-nav prev ux4g-icon-outlined" disabled>chevron_left</button>
              <button className="ux4g-page-number active">1</button>
              <button className="ux4g-page-number">2</button>
              <button className="ux4g-page-nav next ux4g-icon-outlined">chevron_right</button>
            </div>
          </div>
        ),
      },
      {
        name: "Card",
        note: "On mobile, Tables can collapse to a card-per-row layout. Same data, less horizontal cramping.",
        preview: (
          <div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, fontSize: 13, width: "100%", maxWidth: 200 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Income Certificate</div>
            <span className="ux4g-tag-tonal-success">Verified</span>
          </div>
        ),
      },
      {
        name: "Tag",
        note: "Status columns in tables almost always use Tag - colour-coded labels that work in greyscale too.",
        preview: (
          <div style={{ display: "flex", gap: 4 }}>
            <span className="ux4g-tag-tonal-success">Verified</span>
            <span className="ux4g-tag-tonal-warning">Pending</span>
          </div>
        ),
      },
      {
        name: "Empty State",
        note: "Tables with no rows replace their body with an Empty State - friendly copy + next-step CTA.",
        preview: (
          <div style={{ padding: 12, textAlign: "center", border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, color: "var(--ux4g-text-neutral-secondary)", fontSize: 12 }}>
            <div style={{ fontSize: 22 }}>∅</div>
            <div>No applications yet</div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
