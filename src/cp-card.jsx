/* global React */
(function () {
  function Card({ variant = "solid", title, subtitle, body, tag, footer, image }) {
    return (
      <div className={"ux4g-card ux4g-card-" + variant} style={{ width: "100%", maxWidth: 280, background: "var(--ux4g-bg-neutral-elevated)", border: variant === "outlined" ? "1px solid var(--ux4g-border-color-neutral-subtle)" : "none", borderRadius: 12, overflow: "hidden", boxShadow: variant === "solid" ? "0 2px 6px rgba(0,0,0,0.04)" : "none" }}>
        {image && <div style={{ height: 120, background: image }}></div>}
        <div className="ux4g-card-body" style={{ padding: 16 }}>
          {tag && <div style={{ marginBottom: 8 }}>{tag}</div>}
          {title && <h5 className="ux4g-card-title" style={{ margin: 0, marginBottom: 4, fontSize: 16, fontWeight: 600 }}>{title}</h5>}
          {subtitle && <h5 className="ux4g-card-sub-title" style={{ margin: 0, marginBottom: 12, fontSize: 13, color: "var(--ux4g-text-neutral-secondary)", fontWeight: 400 }}>{subtitle}</h5>}
          {body && <div style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)", marginBottom: footer ? 12 : 0 }}>{body}</div>}
          {footer}
        </div>
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-card-mock">
          <div className="hb-card-tile">
            <div className="hb-card-thumb"></div>
            <div className="hb-card-row"></div>
            <div className="hb-card-row short"></div>
          </div>
          <div className="hb-card-tile">
            <div className="hb-card-thumb"></div>
            <div className="hb-card-row"></div>
            <div className="hb-card-row short"></div>
          </div>
          <div className="hb-card-tile">
            <div className="hb-card-thumb"></div>
            <div className="hb-card-row"></div>
            <div className="hb-card-row short"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const config = {
    name: "Card",
    navName: "Card",
    group: "Data Display",
    desc: "Surface for a discrete unit of content, like a service, certificate, scheme, or application. Self-contained, scannable, groups into responsive grids.",
    bannerVariant: "card",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Top margin", token: "ux4g-bg-primary-default" },
      { n: 2, label: "Image region", token: "ux4g-bg-neutral-soft" },
      { n: 3, label: "Body region", token: "ux4g-padding-m" },
      { n: 4, label: "Footer region", token: "ux4g-padding-m" },
    ],

    properties: [
      {
        label: "Fill",
        desc: "Solid is the default and uses elevation to signal that the card is a unit. Outlined trades the shadow for a border and works well in dense grids. Translucent layers the card over imagery or coloured backgrounds. No Fill removes the surface, suitable for nested cards inside a section.",
        demos: [
          { label: "Solid", node: <Card variant="solid" title="Income Certificate" subtitle="Issued by SDM office" tag={<span className="ux4g-tag-tonal-success">Verified</span>} /> },
          { label: "Outlined", node: <Card variant="outlined" title="PAN Card" subtitle="Active since 2018" tag={<span className="ux4g-tag-tonal-primary">Active</span>} /> },
        ],
      },
      {
        label: "State",
        desc: "Default is the resting state. Hover lifts the card to signal that the whole surface is clickable. Pressed lowers it to confirm a tap. Disabled dims the surface, removes interaction, and is used while the card waits for data or while a record is locked.",
        demos: [
          { label: "Default", node: <Card title="Aadhaar" subtitle="Verified" /> },
          { label: "Hover", node: <Card title="Aadhaar" subtitle="Verified" /> },
        ],
      },
      {
        label: "Top margin",
        desc: "Optional accent stripe at the very top of the card. Use it to signal category or status at a glance, for example a coloured stripe per service department. Turn it off when the card already carries a tag or a banner image, so the surface does not feel busy.",
        demos: [
          { label: "On", node: <Card title="Top margin on" subtitle="Coloured accent stripe shown" /> },
          { label: "Off", node: <Card title="Top margin off" subtitle="No accent stripe" /> },
        ],
      },
      {
        label: "Header",
        desc: "The header holds the avatar or icon, the title, the subtitle, and a top-right action slot. Turn it off when the card has no identifier and exists only to host a body block, for example a chart card or a metric tile.",
        demos: [
          { label: "With header", node: <Card title="Income certificate" subtitle="SDM office" /> },
          { label: "Without header", node: <Card body="Body-only card used for a metric or chart tile." /> },
        ],
      },
      {
        label: "Body",
        desc: "The primary content area. Holds tags, paragraphs, lists, or media. Turn it off only when the card is a slim header plus footer pattern, for example a compact selection chip card or a quick-action launcher.",
        demos: [
          { label: "Body on", node: <Card title="Service" body="Apply for the official income certificate issued by the SDM office." /> },
          { label: "Body off", node: <Card title="Service" subtitle="Compact header only" /> },
        ],
      },
      {
        label: "Footer",
        desc: "The footer holds 1 to 3 buttons or an icon slot, aligned to the right edge. Keep it to a single primary action whenever you can. Reserve a paired layout for cases where the user genuinely has two equally important choices, for example Resume and Discard on a draft.",
        demos: [
          { label: "With footer", node: <Card title="Application draft" footer={<button className="ux4g-btn-primary ux4g-btn-sm">Resume</button>} /> },
          { label: "Without footer", node: <Card title="Read-only tile" subtitle="No actions in the footer" /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Service catalogue card",
        desc: "Each service in the citizen catalogue is a Card. The title is the service name, the body is one sentence on what the service does, and a tag flags the status, like Live or Coming soon. The footer carries a single primary action.",
        stage: <Card title="Income Certificate" body="Apply for the official income certificate issued by the SDM office." tag={<span className="ux4g-tag-tonal-success">Live</span>} footer={<button className="ux4g-btn-primary ux4g-btn-sm">Apply now</button>} />,
      },
      {
        title: "Document or certificate card",
        desc: "Shows a citizen's issued document, like Aadhaar, PAN, or an income certificate. The Outlined fill keeps the card calm so that the verification tag and quick actions are the focal points. Footer carries View and DigiLocker actions.",
        stage: <Card title="Income Certificate" subtitle="Issued 14 Apr 2026 to 14 Apr 2027" tag={<span className="ux4g-tag-tonal-success">Verified</span>} footer={<div style={{ display: "flex", gap: 6 }}><button className="ux4g-btn-outline-primary ux4g-btn-sm">View</button><button className="ux4g-btn-tonal-primary ux4g-btn-sm">DigiLocker</button></div>} />,
      },
      {
        title: "Scheme highlight card",
        desc: "Featured schemes use a Solid card with the image region on. The image sets context, the title and body explain the benefit in citizen language, and the footer drives the next action, like Check eligibility.",
        stage: <Card image="linear-gradient(135deg, #34d399, #10b981)" title="PM-KISAN" subtitle="Income support for farmers" body="Rs 6,000 per year, paid in 3 instalments via direct benefit transfer." footer={<button className="ux4g-btn-primary ux4g-btn-sm">Check eligibility</button>} />,
      },
      {
        title: "Empty or placeholder card",
        desc: "When a card slot has no data yet, render a placeholder card with a dashed border and a primary action to populate the slot. The Outlined fill with all sections off, plus a single action, communicates that the slot is waiting for input.",
        stage: (
          <div style={{ width: "100%", maxWidth: 280, padding: 24, border: "1.5px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 12, textAlign: "center", color: "var(--ux4g-text-neutral-secondary)" }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>+</div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>No documents yet</div>
            <div style={{ fontSize: 12, marginBottom: 12 }}>Upload your first document to begin.</div>
            <button className="ux4g-btn-primary ux4g-btn-sm">Upload</button>
          </div>
        ),
      },
      {
        title: "Selected state in a grid",
        desc: "Inside a selection grid, like picking one PMAY tier, the selected card uses the Pressed state so the choice is visible without reading the labels. Pair the visual cue with aria-selected on the underlying control.",
        stage: (
          <div className="ux4g-card" style={{ width: "100%", maxWidth: 280, background: "var(--ux4g-bg-primary-subtle)", border: "2px solid var(--ux4g-border-color-primary-strong)", borderRadius: 12, padding: 16 }}>
            <h5 style={{ margin: 0, marginBottom: 4 }}>PMAY-Urban</h5>
            <div style={{ fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>Subsidy up to Rs 2.67 L on home loan interest.</div>
          </div>
        ),
      },
      {
        title: "Loading skeleton",
        desc: "While data fetches, render a Translucent Disabled card at the same dimensions as the final card. The placeholder content keeps page layout stable and prevents shift when the real data arrives.",
        stage: (
          <div style={{ width: "100%", maxWidth: 280, background: "var(--ux4g-bg-neutral-elevated)", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 12, padding: 16 }}>
            <div style={{ height: 14, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, marginBottom: 8, width: "60%" }}></div>
            <div style={{ height: 10, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, marginBottom: 6 }}></div>
            <div style={{ height: 10, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, width: "80%" }}></div>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Grid collapses to a single column on mobile",
        desc: "Card grids step down 3 columns to 2 to 1 as the viewport narrows. Below 480 px each card spans the full width so the citizen never has to pinch and zoom to read.",
        sample: <Card title="Income Certificate" subtitle="SDM office" tag={<span className="ux4g-tag-tonal-success">Verified</span>} />,
      },
      {
        title: "Image region keeps a 16:9 ratio at every breakpoint",
        desc: "When the image region is on, the ratio stays 16:9 from desktop to phone. The image scales with the card width so the picture never crops in an awkward way.",
        sample: <Card image="linear-gradient(135deg, #f59e0b, #ea580c)" title="PM-KISAN" body="Rs 6,000 per year" />,
      },
      {
        title: "Footer actions stack on mobile",
        desc: "When the footer has two actions, they sit inline on desktop and stack to full width below 480 px, with the primary action on top. Citizens with smaller phones get the same hierarchy without the awkward squeeze.",
        sample: <Card title="Draft" body="Resume editing" footer={<div style={{ display: "flex", flexDirection: "column", gap: 6, width: "100%" }}><button className="ux4g-btn-primary ux4g-btn-md" style={{ width: "100%" }}>Resume</button><button className="ux4g-btn-outline-primary ux4g-btn-md" style={{ width: "100%" }}>Discard</button></div>} />,
      },
    ],

    accessibility: [
      { t: "Use a real heading element for the title.", b: "The card title is an h3 or h4 so screen readers map the page hierarchy. A card-as-link wraps the whole card in an anchor." },
      { t: "Click target is the whole card.", b: "When the entire card is clickable, the anchor wraps everything so the citizen can tap anywhere. Internal action buttons stop propagation to avoid double navigation." },
      { t: "Selected state has aria-selected true.", b: "In a selection grid, the chosen card carries aria-selected. The visual Pressed state reinforces but is not the only signal." },
      { t: "Image has descriptive alt text.", b: "Card images get alt text that describes the subject, like PM-KISAN scheme illustration. Decorative-only images use alt empty plus role presentation." },
      { t: "Loading skeleton announces loading.", b: "Wrap the skeleton in aria-busy true so screen readers say loading instead of reading placeholder shapes." },
      { t: "Focus ring shows on the card or its action.", b: "Whole-card links: focus ring outlines the whole card. Cards with internal actions: ring sits on the button. Keyboard nav has a visible target either way." },
      { t: "Body text meets the 4.5 to 1 contrast floor.", b: "All text inside cards meets WCAG AA. Subtitle and body text use neutral-secondary; never drop below 4.5 to 1 on the card surface." },
    ],

    related: [
      {
        name: "List",
        note: "For vertically stacked, denser records with avatar plus name plus meta, use List. Cards spread; List packs.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%" }}>
            {["AB Anjali Bhattacharya", "VR Vikram Reddy", "PJ Priya Joshi"].map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderBottom: "1px solid var(--ux4g-border-color-neutral-subtle)", fontSize: 13 }}>
                <span style={{ width: 24, height: 24, borderRadius: "50%", background: "var(--ux4g-bg-primary-subtle)", color: "var(--ux4g-text-primary-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 600 }}>{s.slice(0, 2)}</span>
                {s.slice(3)}
              </div>
            ))}
          </div>
        ),
      },
      {
        name: "Table",
        note: "For row-by-row data with multiple columns and sorting, use Table. Cards are best for content; Tables for tabular data.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 4, width: "100%", fontSize: 11 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "6px 8px", background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4 }}><span>Service</span><span>Status</span><span>SLA</span></div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "6px 8px" }}><span>Income cert.</span><span>Verified</span><span>18d</span></div>
          </div>
        ),
      },
      {
        name: "Tag",
        note: "Cards often carry a status Tag, like Verified, Pending, or Live. Tag sits in the header area above the title for quick scanning.",
        preview: <span className="ux4g-tag-tonal-success">Verified</span>,
      },
      {
        name: "Tab",
        note: "When a card has multiple views, like Overview, History, and Documents, put Tabs inside it. Each tab swaps the card body.",
        preview: (
          <div className="ux4g-tab ux4g-tab-underline ux4g-tab-sm">
            <ul className="ux4g-tab-list" role="tablist" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="ux4g-tab-item is-active" role="tab">Overview</li>
              <li className="ux4g-tab-item" role="tab">History</li>
            </ul>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
