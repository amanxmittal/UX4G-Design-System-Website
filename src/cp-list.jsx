/* global React */
(function () {
  function L({ items, divider = true, density = "default" }) {
    const pad = density === "compact" ? "8px 12px" : "12px 16px";
    return (
      <div style={{ width: "100%", background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, overflow: "hidden" }}>
        {items.map((it, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: pad, borderBottom: divider && i < items.length - 1 ? "1px solid var(--ux4g-border-color-neutral-subtle)" : "none" }}>
            {it.leading && <div>{it.leading}</div>}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ux4g-text-neutral-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{it.title}</div>
              {it.subtitle && <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>{it.subtitle}</div>}
            </div>
            {it.trailing && <div>{it.trailing}</div>}
          </div>
        ))}
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-card-mock" style={{ width: 360, flexDirection: "column", gap: 0, background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 16px 32px -12px rgba(48, 28, 125, 0.4)" }}>
          {["AB Anjali Bhattacharya", "VR Vikram Reddy", "PJ Priya Joshi"].map((s, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderBottom: i < 2 ? "1px solid rgba(48,28,125,0.1)" : "none" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: ["var(--amber)", "#a78bfa", "#34d399"][i], color: "var(--primary-dark)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14 }}>{s.slice(0, 2)}</div>
              <div style={{ fontFamily: "Noto Sans, sans-serif", fontSize: 16, fontWeight: 500, color: "var(--primary-dark)" }}>{s.slice(3)}</div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }

  const Av = (initials, colour) => (
    <span style={{ width: 32, height: 32, borderRadius: "50%", background: colour || "var(--ux4g-bg-primary-subtle)", color: colour ? "#fff" : "var(--ux4g-text-primary-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600 }}>{initials}</span>
  );

  const config = {
    name: "List",
    navName: "List",
    group: "Data Display",
    desc: "Vertically stacked records - people, documents, addresses, applications. Denser than Cards; more structured than free text.",
    bannerVariant: "card",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Container", token: "ux4g-bg-neutral-elevated" },
      { n: 2, label: "Row", token: "ux4g-padding-m" },
      { n: 3, label: "Leading slot (icon / avatar)", token: "ux4g-icon-outlined" },
      { n: 4, label: "Title", token: "ux4g-body-m-strong" },
      { n: 5, label: "Subtitle / metadata", token: "ux4g-body-xs-default" },
      { n: 6, label: "Trailing slot (action / badge)", token: "ux4g-icon-outlined" },
      { n: 7, label: "Divider", token: "ux4g-border-color-neutral-subtle" },
    ],

    properties: [
      {
        label: "Row content",
        desc: "Title-only for simple lists. Title + subtitle for two-line entries. Leading icon / avatar for visual identification.",
        demos: [
          { label: "Title only", wide: true, node: <L items={[{ title: "Aadhaar card" }, { title: "PAN card" }, { title: "Voter ID" }]} /> },
          { label: "With subtitle", wide: true, node: <L items={[
            { title: "Aadhaar card", subtitle: "Verified · 14 Apr 2026" },
            { title: "PAN card", subtitle: "Verified · 12 Apr 2026" },
          ]} /> },
          { label: "With avatar + trailing", wide: true, node: <L items={[
            { leading: Av("AB"), title: "Anjali Bhattacharya", subtitle: "Citizen since 2024", trailing: <span style={{ color: "var(--ux4g-text-neutral-tertiary)" }}>›</span> },
            { leading: Av("VR", "#a78bfa"), title: "Vikram Reddy", subtitle: "Citizen since 2022", trailing: <span style={{ color: "var(--ux4g-text-neutral-tertiary)" }}>›</span> },
          ]} /> },
        ],
      },
      {
        label: "Density",
        desc: "Default for citizen-facing lists. Compact for admin tables with 20+ rows visible at once.",
        demos: [
          { label: "Default", wide: true, node: <L items={[{ title: "Item A" }, { title: "Item B" }]} /> },
          { label: "Compact", wide: true, node: <L density="compact" items={[{ title: "Item A" }, { title: "Item B" }, { title: "Item C" }, { title: "Item D" }]} /> },
        ],
      },
      {
        label: "Divider",
        desc: "Default has dividers between rows. Toggle off for borderless lists inside Cards or where padding alone separates rows.",
        demos: [
          { label: "With divider", wide: true, node: <L items={[{ title: "A" }, { title: "B" }, { title: "C" }]} /> },
          { label: "Without divider", wide: true, node: <L divider={false} items={[{ title: "A" }, { title: "B" }, { title: "C" }]} /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Documents in DigiLocker",
        desc: "List of citizen's stored documents. Title is document name; subtitle is issued-by + date; trailing is download / view icon.",
        stage: (
          <L items={[
            { leading: <span className="ux4g-icon-outlined" style={{ color: "var(--ux4g-text-neutral-tertiary)", fontSize: 24 }}>description</span>, title: "Income Certificate", subtitle: "SDM Office · 14 Apr 2026", trailing: <button className="ux4g-icon-btn ux4g-icon-btn-sm"><span className="ux4g-icon-outlined">download</span></button> },
            { leading: <span className="ux4g-icon-outlined" style={{ color: "var(--ux4g-text-neutral-tertiary)", fontSize: 24 }}>badge</span>, title: "Aadhaar Card", subtitle: "UIDAI · 12 Mar 2024", trailing: <button className="ux4g-icon-btn ux4g-icon-btn-sm"><span className="ux4g-icon-outlined">download</span></button> },
          ]} />
        ),
      },
      {
        title: "Contact / team list",
        desc: "Avatar leads each row. Title is name; subtitle is role or last activity. Tapping the row opens the contact details.",
        stage: (
          <L items={[
            { leading: Av("AB"), title: "Anjali Bhattacharya", subtitle: "SDM · Online now", trailing: <span style={{ color: "#16a34a", fontSize: 18 }}>●</span> },
            { leading: Av("VR", "#a78bfa"), title: "Vikram Reddy", subtitle: "Verifier · Last seen 2h ago" },
            { leading: Av("PJ", "#34d399"), title: "Priya Joshi", subtitle: "Reviewer · Active today" },
          ]} />
        ),
      },
      {
        title: "Applications - status with badge",
        desc: "Each row is an application reference. Trailing slot holds a status Tag for at-a-glance scanning.",
        stage: (
          <L items={[
            { title: "AP-83942 · Income certificate", subtitle: "Filed 14 Apr 2026", trailing: <span className="ux4g-tag-tonal-success">Verified</span> },
            { title: "AP-83941 · PAN update", subtitle: "Filed 12 Apr 2026", trailing: <span className="ux4g-tag-tonal-primary">Active</span> },
            { title: "AP-83940 · PMAY-U", subtitle: "Filed 8 Apr 2026", trailing: <span className="ux4g-tag-tonal-warning">Pending</span> },
          ]} />
        ),
      },
      {
        title: "Address book",
        desc: "List of saved addresses. Leading icon identifies type (home, work, other); subtitle is the full address; trailing is edit / set-default action.",
        stage: (
          <L items={[
            { leading: <span className="ux4g-icon-outlined" style={{ color: "var(--ux4g-text-primary-default)", fontSize: 24 }}>home</span>, title: "Home (default)", subtitle: "Flat 3B, Sai Apartments, Worli, Mumbai 400018", trailing: <button className="ux4g-btn-text-primary ux4g-btn-sm">Edit</button> },
            { leading: <span className="ux4g-icon-outlined" style={{ color: "var(--ux4g-text-neutral-tertiary)", fontSize: 24 }}>work</span>, title: "Work", subtitle: "Tower B, BKC, Bandra East, Mumbai 400051", trailing: <button className="ux4g-btn-text-primary ux4g-btn-sm">Edit</button> },
          ]} />
        ),
      },
      {
        title: "Settings menu",
        desc: "Navigation list inside settings. Each row is a section; trailing chevron hints at drill-down. No subtitle for cleaner look.",
        stage: (
          <L items={[
            { leading: <span className="ux4g-icon-outlined" style={{ color: "var(--ux4g-text-neutral-secondary)", fontSize: 22 }}>person</span>, title: "Account", trailing: <span style={{ color: "var(--ux4g-text-neutral-tertiary)" }}>›</span> },
            { leading: <span className="ux4g-icon-outlined" style={{ color: "var(--ux4g-text-neutral-secondary)", fontSize: 22 }}>notifications</span>, title: "Notifications", trailing: <span style={{ color: "var(--ux4g-text-neutral-tertiary)" }}>›</span> },
            { leading: <span className="ux4g-icon-outlined" style={{ color: "var(--ux4g-text-neutral-secondary)", fontSize: 22 }}>lock</span>, title: "Privacy & Security", trailing: <span style={{ color: "var(--ux4g-text-neutral-tertiary)" }}>›</span> },
            { leading: <span className="ux4g-icon-outlined" style={{ color: "var(--ux4g-text-neutral-secondary)", fontSize: 22 }}>accessibility</span>, title: "Accessibility", trailing: <span style={{ color: "var(--ux4g-text-neutral-tertiary)" }}>›</span> },
          ]} />
        ),
      },
      {
        title: "Selection list",
        desc: "When users pick items from the list (multi-select), use checkbox in the leading slot. Selected rows highlight with primary tint.",
        stage: (
          <L items={[
            { leading: <input type="checkbox" defaultChecked readOnly />, title: "PM-KISAN", subtitle: "Income support · ₹6K / year" },
            { leading: <input type="checkbox" defaultChecked readOnly />, title: "PMJAY", subtitle: "Health cover · ₹5L / year" },
            { leading: <input type="checkbox" readOnly />, title: "PMAY-U", subtitle: "Housing subsidy · up to ₹2.67L" },
          ]} />
        ),
      },
    ],

    responsive: [
      {
        title: "Truncate long titles with ellipsis",
        desc: "Single-line titles truncate with `…` on narrow viewports. Subtitle stays visible below to give context.",
        sample: <L items={[
          { leading: Av("AB"), title: "Application reference AP-2026-DM-83942-XYZ-LONG-IDENTIFIER", subtitle: "Filed 14 Apr 2026" },
        ]} />,
      },
      {
        title: "Trailing slot collapses on mobile",
        desc: "When the trailing slot is a button, it collapses to an icon-only variant below 480px to save horizontal space.",
        sample: <L items={[
          { leading: <span className="ux4g-icon-outlined" style={{ fontSize: 24, color: "var(--ux4g-text-primary-default)" }}>home</span>, title: "Home address", trailing: <button className="ux4g-icon-btn ux4g-icon-btn-sm"><span className="ux4g-icon-outlined">edit</span></button> },
        ]} />,
      },
      {
        title: "Tap targets stay 44 × 44px on rows",
        desc: "Each row gets at least 44px height even with compact density. Critical for thumb-first mobile use.",
        sample: <L density="compact" items={[{ title: "Compact row 1" }, { title: "Compact row 2" }, { title: "Compact row 3" }]} />,
      },
    ],

    practices: [
      {
        do: { stage: <L items={[{ leading: Av("AB"), title: "Anjali Bhattacharya", subtitle: "Citizen since 2024" }]} />, rule: "Use 3-zone layout: leading slot · title + subtitle · trailing slot." },
        dont: { stage: <L items={[{ title: "Anjali Bhattacharya - Citizen since 2024 - Online" }]} />, rule: "Cramming everything into a single string loses scannable hierarchy." },
      },
      {
        do: { stage: <L items={[{ title: "Item A" }, { title: "Item B" }]} />, rule: "Use dividers when rows have similar density - helps the eye track." },
        dont: { stage: <L items={[{ title: "Item A" }, { title: "Item B" }]} divider={false} />, rule: "No dividers + similar density = rows blur into one another." },
      },
      {
        do: { stage: <L items={[{ title: "Application", trailing: <span className="ux4g-tag-tonal-success">Verified</span> }]} />, rule: "Use Tag in trailing slot for status. Scans well even in dense lists." },
        dont: { stage: <L items={[{ title: "Application", subtitle: "Status: Verified" }]} />, rule: "Status in subtitle blends with metadata - hard to scan." },
      },
      {
        do: { stage: <L items={[{ leading: <span className="ux4g-icon-outlined">person</span>, title: "Account" }]} />, rule: "Use leading icon when there's a clear semantic association." },
        dont: { stage: <L items={[{ leading: <span className="ux4g-icon-outlined">star</span>, title: "Account" }]} />, rule: "Decorative icons in lists waste space and confuse meaning." },
      },
    ],

    accessibility: [
      { t: "Use <ul> / <li> semantics.", b: "Wrap the list in `<ul role='list'>` with each row as `<li>`. Screen readers announce 'list with 5 items, item 1 of 5' for orientation." },
      { t: "Row as link or button.", b: "If the row navigates, wrap it in `<a>`. If it triggers an action, wrap in `<button>`. Whole row is clickable; tap target is the entire row." },
      { t: "Trailing actions stop propagation.", b: "Inner buttons (edit, delete) call `stopPropagation()` so the row's click handler doesn't fire on action tap." },
      { t: "Selected rows have aria-selected='true'.", b: "Multi-select Lists mark selected rows with `aria-selected='true'`. Checkbox state is the source of truth; aria mirrors it." },
      { t: "Tap targets stay 44 × 44px.", b: "Each row gets at least 44px height regardless of density. Inner action buttons also meet 44px through invisible padding." },
      { t: "Divider is decorative.", b: "Hide row dividers from screen readers (`role='presentation'`). Sighted users use them for scanning; AT users don't need them announced." },
      { t: "Leading icons use aria-hidden if decorative.", b: "Functional icons (Edit, Delete) get `aria-label`. Decorative icons (just for visual flavour) get `aria-hidden='true'`." },
    ],

    related: [
      {
        name: "Card",
        note: "For richer content per record (image, body, footer actions), use Card. List is denser and works better for 10+ records.",
        preview: (
          <div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, fontSize: 13, maxWidth: 200 }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>Income Certificate</div>
            <div style={{ color: "var(--ux4g-text-neutral-secondary)" }}>Issued by SDM office.</div>
          </div>
        ),
      },
      {
        name: "Table",
        note: "For multi-column data with sorting, use Table. List is single-column; Table is multi-column.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 11 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "6px 8px", background: "var(--ux4g-bg-neutral-soft)" }}><span>Service</span><span>Status</span><span>SLA</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "6px 8px" }}><span>Income cert.</span><span>Verified</span><span>18d</span></div>
          </div>
        ),
      },
      {
        name: "Avatar",
        note: "Avatars frequently sit in the leading slot of List rows. SM size is the default for list contexts.",
        preview: (
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            {Av("AB")}{Av("VR", "#a78bfa")}{Av("PJ", "#34d399")}
          </div>
        ),
      },
      {
        name: "Empty State",
        note: "When the list has no items, render Empty State instead of an empty container. Always offer a next-step CTA.",
        preview: (
          <div style={{ padding: 16, textAlign: "center", border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, color: "var(--ux4g-text-neutral-secondary)", fontSize: 12 }}>
            <div style={{ fontSize: 22 }}>∅</div>
            <div>No items yet</div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
