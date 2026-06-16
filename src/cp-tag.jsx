/* global React */
(function () {
  function Tg({ tone = "primary", children, removable, icon, variant = "tonal" }) {
    return (
      <span className={"ux4g-tag-" + variant + "-" + tone} style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        {icon && <span className="ux4g-icon-outlined" style={{ fontSize: 14 }}>{icon}</span>}
        {children}
        {removable && <span style={{ cursor: "pointer", marginLeft: 4 }}>×</span>}
      </span>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-tag-mock">
          <div className="hb-tag-chip">Verified</div>
          <div className="hb-tag-chip amber">DPDP 2023</div>
          <div className="hb-tag-chip outline">v3.0</div>
          <div className="hb-tag-chip">Pending</div>
          <div className="hb-tag-chip amber">Live</div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/tag/";

  const config = {
    name: "Tag",
    navName: "Tag",
    group: "Feedback",
    desc: "Display-only metadata label. Communicates status, category, version, or compliance at a glance, next to the item it describes.",
    bannerVariant: "badge",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Tag anatomy. A Success Tonal Tag labelled Verified with a check_circle icon, three numbered markers point to the Container, Leading icon, and Label.",
    anatomy: [
      { n: 1, label: "Container", token: "Border radius driven by Shape. Fill, border, and text colour derive from Type and Color." },
      { n: 2, label: "Leading icon slot (optional)", token: "Icon, avatar, or slot. Scales with Tag size. Colour inherits from the Color token." },
      { n: 3, label: "Label", token: "The Tag's text content. Always present. Colour inherits from Type and Color." },
    ],

    properties: [
      {
        label: "Size",
        desc: "Two sizes, S (20px) and M (24px). Choose S for dense tables and chips inside cards. Choose M when the Tag stands alone or sits inside a header.",
        img: IMG + "properties-size.png",
        imgAlt: "Two Success Tonal Tags labelled Verified shown side by side at Small and Medium sizes.",
        demos: [
          { label: "Small", node: <Tg tone="neutral">Label</Tg> },
          { label: "Medium", node: <Tg tone="neutral">Label</Tg> },
        ],
      },
      {
        label: "Color",
        desc: "Six tones reuse the system semantic palette. Neutral for category and version. Brand for filters. Success, Warning, Error for status. Info for notices.",
        img: IMG + "properties-color.png",
        imgAlt: "Six Tags using each tone: Neutral v3.2.1, Brand PMAY-U with home icon, Success Verified with check_circle, Warning Pending with warning icon, Error Rejected, and Info Draft.",
        demos: [
          { label: "Neutral", node: <Tg tone="neutral">Neutral</Tg> },
          { label: "Brand", node: <Tg tone="primary">Brand</Tg> },
          { label: "Success", node: <Tg tone="success">Success</Tg> },
          { label: "Warning", node: <Tg tone="warning">Warning</Tg> },
          { label: "Danger", node: <Tg tone="danger">Error</Tg> },
        ],
      },
      {
        label: "Type",
        desc: "Tonal (default) is the everyday status look. Filled uses a strong fill for emphasis on cards and headers. Outline keeps weight light on dense surfaces. Text is for supplementary labels in data tables.",
        img: IMG + "properties-type.png",
        imgAlt: "The same Brand Tag labelled DPDP 2023 shown in all four types: Tonal, Filled, Outline, Text.",
        demos: [
          { label: "Tonal", node: <Tg tone="primary" variant="tonal">Tonal</Tg> },
          { label: "Outline", node: <Tg tone="primary" variant="outline">Outline</Tg> },
        ],
      },
      {
        label: "Shape",
        desc: "Rectangular fits data tables, headers, and structured layouts. Circular (pill) fits chip-like UI such as filter bars and avatar groups. Pick one and stay consistent within a section.",
        img: IMG + "properties-shape.png",
        imgAlt: "Two Brand Tonal Tags labelled PMAY-U with a home icon, one Rectangular and one Circular pill.",
        demos: [
          { label: "Rectangular", node: <Tg tone="primary">Rectangular</Tg> },
          { label: "Circular", node: <Tg tone="primary">Circular</Tg> },
        ],
      },
      {
        label: "Leading icon",
        desc: "Optional icon, avatar, or slot before the label. Use only when the icon adds meaning the label cannot carry alone, for example a certification mark next to DPDP 2023.",
        img: IMG + "properties-leading-icon.png",
        imgAlt: "Two Success Tonal Tags labelled Verified, one without an icon and one with a check_circle icon.",
        demos: [
          { label: "With icon", node: <Tg tone="success" icon="check_circle">Verified</Tg> },
          { label: "Without icon", node: <Tg tone="success">Verified</Tg> },
        ],
      },
      {
        label: "Tag label",
        desc: "Sentence case. Short. An adjective that describes the state, not a verb that asks the user to act. Aim for one or two words. Longer labels belong in body text or a tooltip.",
        img: IMG + "properties-label.png",
        imgAlt: "Three Brand Tonal Tags with progressively longer labels: New, DPDP 2023, Awaiting Aadhaar OTP.",
        demos: [
          { label: "Short", node: <Tg tone="primary">New</Tg> },
          { label: "Medium", node: <Tg tone="primary">DPDP 2023</Tg> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Application status in a list",
        desc: "Each application row carries a Tag in the right column. Success, Warning, and Error tones let users scan progress without reading each label.",
        img: IMG + "scenarios-status-list.png",
        imgAlt: "List of three applications, each with a status Tag: Income certificate (Verified, Success), PMAY-U application (Pending, Warning), Voter ID update (Rejected, Error).",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", borderBottom: "1px solid var(--ux4g-border-color-neutral-subtle)" }}>
              <span style={{ fontSize: 13 }}>Income certificate</span>
              <Tg tone="success">Verified</Tg>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px", borderBottom: "1px solid var(--ux4g-border-color-neutral-subtle)" }}>
              <span style={{ fontSize: 13 }}>PMAY-U</span>
              <Tg tone="warning">Pending</Tg>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "8px 12px" }}>
              <span style={{ fontSize: 13 }}>Voter ID</span>
              <Tg tone="danger">Rejected</Tg>
            </div>
          </div>
        ),
      },
      {
        title: "Applied filters above results",
        desc: "When users apply filters, each filter renders as a Brand Tonal Tag above the result list. The collection makes active filters scannable at a glance.",
        img: IMG + "scenarios-applied-filters.png",
        imgAlt: "Five Brand Tonal Tags wrapping across two rows: Maharashtra, Active, Last 30 days, Aadhaar verified, PMAY-U.",
        stage: (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <Tg tone="primary">Maharashtra</Tg>
            <Tg tone="primary">Active</Tg>
            <Tg tone="primary">Last 30 days</Tg>
            <Tg tone="primary">Aadhaar verified</Tg>
          </div>
        ),
      },
      {
        title: "Service category labels",
        desc: "On scheme and service cards, Outline Tags identify the category. The light visual weight keeps the card content (title, description) primary.",
        img: IMG + "scenarios-service-categories.png",
        imgAlt: "PM-KISAN Yojana title with three Outline category Tags below: Identity (Brand), Welfare (Success), Agriculture (Warning).",
        stage: (
          <div style={{ display: "flex", gap: 6 }}>
            <Tg tone="primary" variant="outline">Identity</Tg>
            <Tg tone="success" variant="outline">Welfare</Tg>
            <Tg tone="warning" variant="outline">Agriculture</Tg>
          </div>
        ),
      },
      {
        title: "Compliance and standard badges",
        desc: "DPDP 2023, WCAG, version markers, and similar credentials appear as Tags in footers and service detail pages. They communicate compliance without taking the space an Alert or banner would.",
        img: IMG + "scenarios-compliance.png",
        imgAlt: "Three Tags in a row: DPDP 2023 with check_circle (Success), WCAG 2.1 AA with check (Success), v3.0 (Neutral).",
        stage: (
          <div style={{ display: "flex", gap: 6 }}>
            <Tg tone="success" variant="tonal" icon="verified">DPDP 2023</Tg>
            <Tg tone="success" variant="tonal" icon="check">WCAG 2.1 AA</Tg>
            <Tg tone="neutral" variant="tonal">v3.0</Tg>
          </div>
        ),
      },
      {
        title: "Version or environment marker",
        desc: "In admin and developer views, Neutral, Warning, and Success Tags mark versions and environments such as staging and production. The tone tells the engineer at a glance which environment they are in.",
        img: IMG + "scenarios-env-markers.png",
        imgAlt: "Three Tags in a row: v3.2.1 (Neutral), staging (Warning), production (Success).",
        stage: (
          <div style={{ display: "flex", gap: 6 }}>
            <Tg tone="neutral">v3.2.1</Tg>
            <Tg tone="warning">staging</Tg>
            <Tg tone="success">production</Tg>
          </div>
        ),
      },
      {
        title: "Tag inside a Card title row",
        desc: "Cards often carry a Tag in the header showing Live, In review, or Deprecated status. Placing the Tag next to the title keeps the headline status above the fold.",
        img: IMG + "scenarios-card-header.png",
        imgAlt: "PM-KISAN Card with a Live (Success, check_circle) Tag in the header row and a one-line description below.",
        stage: (
          <div style={{ padding: 14, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, maxWidth: 280 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ fontSize: 15, fontWeight: 600 }}>PM-KISAN</span>
              <Tg tone="success">Live</Tg>
            </div>
            <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>Income support for farmer households. ₹6,000 / year.</div>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Tags wrap on overflow",
        desc: "When a row of Tags exceeds the container width, they wrap to a new line. Never truncate. The user needs to read the whole label to act on it.",
        img: IMG + "responsive-wrap.png",
        imgAlt: "Five Brand Tonal state Tags wrapping to three lines inside a narrow container: Maharashtra, Karnataka, Tamil Nadu, Andhra Pradesh, Telangana.",
        sample: (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <Tg tone="primary">Maharashtra</Tg>
            <Tg tone="primary">Karnataka</Tg>
            <Tg tone="primary">Tamil Nadu</Tg>
            <Tg tone="primary">Andhra Pradesh</Tg>
            <Tg tone="primary">Telangana</Tg>
          </div>
        ),
      },
      {
        title: "Two sizes for context, not breakpoint",
        desc: "Size S (20px) and Size M (24px) are picked by context, not by viewport. S inside dense tables, M in card headers and standalone usage. Both sizes hold their proportions on mobile.",
        img: IMG + "responsive-two-sizes.png",
        imgAlt: "Two Success Tonal Tags labelled Verified with check_circle icon: Size S on the left, Size M on the right.",
        sample: <Tg tone="success">Verified</Tg>,
      },
      {
        title: "Text size stays constant",
        desc: "Tag label stays at 12 to 13 px on every breakpoint. Smaller text fails on mobile. Larger Tags compete with body content.",
        img: IMG + "responsive-text-constant.png",
        imgAlt: "Success Tag labelled Verified with a caption noting the 12 to 13 px label size holds across breakpoints.",
        sample: <Tg tone="success">Verified</Tg>,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "Four Tags using only Success, Warning, Error, and Neutral tones: Verified, Pending, Rejected, Draft.",
          rule: "Reuse four to five system tones across the product. Consistent colour helps users learn what each tone means.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "Six Tags piled together in noisy tones: New, Live, Hold, Issue, Soon, v2.",
          rule: "Do not invent new tones per page. A noisy palette is harder to scan than four consistent ones.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "Two Tags using adjectives: Verified (Success), Pending (Warning).",
          rule: "Use adjectives that describe the state. Verified, Pending, Live, Deprecated.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "Two Tags using verbs: Verify (Success), Hold (Warning).",
          rule: "Do not use verbs. Verify and Hold read as buttons and invite the user to click a label that is not interactive.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "Two Tags using sentence case: Verified, In review.",
          rule: "Use sentence case. It reads faster, matches body text, and respects Indian-language transliteration.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "Two Tags in uppercase: VERIFIED, IN REVIEW.",
          rule: "Do not use uppercase. It shouts, slows reading, and fails when the same Tag carries Devanagari or Tamil content.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-4-do.png",
          imgAlt: "One Brand Tonal Tag with a short two-word label: DPDP 2023.",
          rule: "Keep labels to one or two words. The Tag is metadata, not body text.",
        },
        dont: {
          img: IMG + "best-practices-4-dont.png",
          imgAlt: "One Brand Tonal Tag with a long-sentence label: Digital Personal Data Protection Act 2023.",
          rule: "Do not stuff a sentence into a Tag. Long content belongs in body text, a tooltip, or an Alert.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-5-do.png",
          imgAlt: "One Success Tonal Tag with a visible background, labelled Live.",
          rule: "Use Tonal or Filled type when the Tag carries status. Visible background makes it read as a Tag, not text.",
        },
        dont: {
          img: IMG + "best-practices-5-dont.png",
          imgAlt: "One Brand Text-style Tag without a background, labelled Live, indistinguishable from a link.",
          rule: "Do not use Text type for status. Without a background the Tag is mistaken for a link.",
        },
      },
    ],

    accessibility: [
      { t: "Tag has an accessible name.", b: "The label text itself is the accessible name. A decorative Tag (e.g. a category colour swatch with no text) gets `aria-label`." },
      { t: "Tone is communicated in text, not just colour.", b: "Severity (Verified, Pending, Failed) is in the text. Colour reinforces; it never carries the meaning alone. This passes WCAG 1.4.1 Use of Color." },
      { t: "Tag inside a table cell announces its semantic.", b: "Tags in status columns get `aria-label='Status: Verified'`. Screen readers hear 'Status: Verified' as they navigate cells." },
      { t: "Do not style static Tags like buttons.", b: "Tags are non-interactive. Do not add hover, focus, or active styles to a static Tag, the affordance suggests a click that does nothing." },
      { t: "Sentence case for screen-reader pronunciation.", b: "Uppercase Tags are spelled out letter by letter by some screen readers. Sentence case reads as a word." },
      { t: "Adjacent placement to the subject.", b: "Place the Tag in the row, card header, or beside the title it describes. A Tag floating in a separate column loses meaning to non-sighted users." },
      { t: "Avoid Tag-only navigation.", b: "If a Tag must navigate to a category page, also provide a textual link. Tags as primary nav fail at-a-glance scannability." },
    ],

    related: [
      {
        name: "Badge",
        note: "For compact counts and presence dots (without text label), use Badge. Tag is for labelled status; Badge is for unlabelled markers.",
        preview: <span className="ux4g-badge-digit-primary ux4g-badge-m">3</span>,
      },
      {
        name: "Chip",
        note: "For toggleable filter pills (selected / unselected), use Chip. Tag is decorative metadata; Chip is interactive on/off.",
        preview: (
          <div style={{ display: "flex", gap: 6 }}>
            <span className="ux4g-filter-chip-md active">All</span>
            <span className="ux4g-filter-chip-md">Live</span>
          </div>
        ),
      },
      {
        name: "Alert / Toast",
        note: "For one-off status notifications with full message text, use Alert. Tag is persistent on items; Alert is a moment-in-time message.",
        preview: (
          <div className="ux4g-alert ux4g-alert-success" style={{ padding: 10 }}>
            <span className="ux4g-alert-icon ux4g-icon-outlined">check_circle</span>
            <div className="ux4g-alert-content"><p className="ux4g-alert-title" style={{ fontSize: 13 }}>Saved</p></div>
          </div>
        ),
      },
      {
        name: "Tooltip",
        note: "When a Tag's label is itself shortened (e.g. 'DPDP'), pair with a Tooltip on hover expanding to the full term.",
        preview: (
          <div className="ux4g-tooltip ux4g-tooltip-s show" style={{ position: "relative", transform: "none" }}>
            Digital Personal Data Protection Act 2023
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
