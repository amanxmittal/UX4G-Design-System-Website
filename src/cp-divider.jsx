/* global React */
(function () {
  function Dv({ orientation = "horizontal", label, weight = "default" }) {
    if (orientation === "vertical") {
      return <div style={{ width: weight === "thick" ? 2 : 1, alignSelf: "stretch", background: "var(--ux4g-border-color-neutral-subtle)" }}></div>;
    }
    if (label) {
      return (
        <div style={{ display: "flex", alignItems: "center", gap: 12, width: "100%" }}>
          <div style={{ flex: 1, height: weight === "thick" ? 2 : 1, background: "var(--ux4g-border-color-neutral-subtle)" }}></div>
          <span style={{ fontSize: 12, color: "var(--ux4g-text-neutral-tertiary)", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{label}</span>
          <div style={{ flex: 1, height: weight === "thick" ? 2 : 1, background: "var(--ux4g-border-color-neutral-subtle)" }}></div>
        </div>
      );
    }
    return <div style={{ width: "100%", height: weight === "thick" ? 2 : 1, background: "var(--ux4g-border-color-neutral-subtle)" }}></div>;
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-divider-mock">
          <div className="hb-divider-stack">
            <div className="hb-divider-block"></div>
            <div className="hb-divider-line">
              <span className="seg"></span>
              <span className="lbl">OR CONTINUE WITH</span>
              <span className="seg"></span>
            </div>
            <div className="hb-divider-block"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/divider/";

  const config = {
    name: "Divider",
    navName: "Divider",
    group: "Utility",
    desc: "Visual separator for sections, lists, and form groups. Optional label for context. Reinforces content rhythm without screaming for attention.",
    bannerVariant: "divider",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Line", token: "ux4g-border-color-neutral-subtle" },
      { n: 2, label: "Label (optional)", token: "ux4g-label-s-default" },
      { n: 3, label: "Spacing on either side of label", token: "ux4g-space-s" },
      { n: 4, label: "Vertical line (in flex row)", token: "ux4g-border-color-neutral-subtle" },
      { n: 5, label: "Weight variant", token: "ux4g-border-width-md (thick)" },
    ],

    properties: [
      {
        label: "Orientation",
        desc: "Horizontal separates sections vertically (default). Vertical separates buttons / items in a row.",
        img: IMG + "properties-orientation.png",
        imgAlt: "A horizontal divider, and vertical dividers separating Home, Profile, Settings.",
        demos: [
          { label: "Horizontal", wide: true, node: <Dv /> },
          { label: "Vertical", node: (
            <div style={{ display: "flex", alignItems: "center", gap: 12, height: 32 }}>
              <span style={{ fontSize: 13 }}>Item A</span>
              <Dv orientation="vertical" />
              <span style={{ fontSize: 13 }}>Item B</span>
              <Dv orientation="vertical" />
              <span style={{ fontSize: 13 }}>Item C</span>
            </div>
          ) },
        ],
      },
      {
        label: "With label",
        desc: "Adds context to the separator - 'OR', 'OR CONTINUE WITH', section names. Label sits centered with line on both sides.",
        img: IMG + "properties-label.png",
        imgAlt: "A horizontal divider with a centered OR CONTINUE WITH label.",
        demos: [
          { label: "Center label", wide: true, node: <Dv label="OR CONTINUE WITH" /> },
        ],
      },
      {
        label: "Weight",
        desc: "Default (1px) is the standard. Thick (2px) for hero section breaks or to separate logical groups inside a Card.",
        img: IMG + "properties-weight.png",
        imgAlt: "A solid divider above a dashed divider.",
        demos: [
          { label: "Default · 1px", wide: true, node: <Dv /> },
          { label: "Thick · 2px", wide: true, node: <Dv weight="thick" /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Authentication separator",
        desc: "Between auth methods (Aadhaar OTP / Password / DigiLocker), use a labelled Divider 'OR CONTINUE WITH' to organise without crowding.",
        img: IMG + "scenarios-auth.png",
        imgAlt: "An OR CONTINUE WITH divider separating authentication options.",
        stage: (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
            <button className="ux4g-btn-primary ux4g-btn-lg" style={{ width: "100%" }}>Continue with Aadhaar OTP</button>
            <Dv label="OR CONTINUE WITH" />
            <div style={{ display: "flex", gap: 8 }}>
              <button className="ux4g-btn-outline-primary ux4g-btn-md" style={{ flex: 1 }}>DigiLocker</button>
              <button className="ux4g-btn-outline-primary ux4g-btn-md" style={{ flex: 1 }}>Biometric</button>
            </div>
          </div>
        ),
      },
      {
        title: "Inline meta separator",
        desc: "Vertical dividers separate small metadata items - author · date · category. Lighter than commas or bullets, neater than padding.",
        img: IMG + "scenarios-meta.png",
        imgAlt: "Inline metadata separated by vertical dividers: 5 min read, 12 Jun 2026, Health.",
        stage: (
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 13, color: "var(--ux4g-text-neutral-secondary)" }}>
            <span>Anjali Bhattacharya</span>
            <Dv orientation="vertical" />
            <span>14 Apr 2026</span>
            <Dv orientation="vertical" />
            <span>SDM Office</span>
          </div>
        ),
      },
      {
        title: "Section break inside a Card",
        desc: "Inside long Cards (multi-section detail view), a Divider separates Overview from Documents from Activity sections.",
        img: IMG + "scenarios-card.png",
        imgAlt: "A card with a divider between Personal details and Contact details sections.",
        stage: (
          <div style={{ padding: 16, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, width: "100%" }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Overview</div>
            <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>Income Certificate · SDM Office</div>
            <div style={{ margin: "12px 0" }}><Dv /></div>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Documents</div>
            <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)" }}>3 attached · 250 KB total</div>
          </div>
        ),
      },
      {
        title: "List row separator",
        desc: "Within a List component, Dividers between rows. Lighter than card-per-row, denser than padding-only spacing.",
        img: IMG + "scenarios-list.png",
        imgAlt: "A list of certificates separated by row dividers.",
        stage: (
          <div style={{ width: "100%" }}>
            <div style={{ padding: "10px 12px", fontSize: 14 }}>Anjali Bhattacharya</div>
            <Dv />
            <div style={{ padding: "10px 12px", fontSize: 14 }}>Vikram Reddy</div>
            <Dv />
            <div style={{ padding: "10px 12px", fontSize: 14 }}>Priya Joshi</div>
          </div>
        ),
      },
      {
        title: "Hero section break",
        desc: "Between major landing-page sections, a thick (2px) Divider in primary colour signals 'new section starts here'.",
        img: IMG + "scenarios-hero.png",
        imgAlt: "A Services heading with a divider above a supporting line.",
        stage: (
          <div style={{ width: "100%" }}>
            <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)", marginBottom: 4 }}>HERO SECTION CONTENT</div>
            <Dv weight="thick" />
            <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)", marginTop: 4 }}>NEXT SECTION BEGINS</div>
          </div>
        ),
      },
      {
        title: "Form section grouping",
        desc: "In long forms, Dividers separate field groups (Personal / Address / Bank). Labels on the Divider clarify what each group is about.",
        img: IMG + "scenarios-form.png",
        imgAlt: "A STEP 1 · YOUR DETAILS label above a form-section divider.",
        stage: (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
            <Dv label="ADDRESS DETAILS" />
            <div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}>
              <div className="ux4g-input">
                <input type="text" className="ux4g-input-input" defaultValue="Flat 3B, Sai Apartments" readOnly />
              </div>
            </div>
          </div>
        ),
      },
    ],

    responsive: [
      {
        title: "Spacing scales with content",
        desc: "Dividers respect the surrounding margin / padding. The line itself is 1px (or 2px thick) at every breakpoint - no auto-scaling.",
        img: IMG + "responsive-spacing.png",
        imgAlt: "A divider with generous spacing between two sections.",
        sample: <Dv />,
      },
      {
        title: "Label wraps if too long for narrow viewports",
        desc: "If the centered label is wider than the container, label drops to a line of its own and the divider lines wrap below.",
        img: IMG + "responsive-label.png",
        imgAlt: "A labeled divider whose label wraps on a narrow viewport.",
        sample: <Dv label="OR CONTINUE WITH THESE ALTERNATE AUTHENTICATION METHODS" />,
      },
      {
        title: "Vertical dividers collapse on mobile",
        desc: "Inline metadata with vertical dividers (item · item · item) collapses to a stacked list with horizontal dividers on mobile.",
        img: IMG + "responsive-collapse.png",
        imgAlt: "Vertical dividers collapsing into horizontal row separators on mobile.",
        sample: (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 13 }}>Anjali</span>
            <Dv orientation="vertical" />
            <span style={{ fontSize: 13 }}>14 Apr</span>
          </div>
        ),
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A subtle 1px divider between sections.",
          rule: "Keep dividers subtle — a hairline is enough to separate.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A heavy dark line between sections.",
          rule: "Do not use a heavy dark line; it competes with the content.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "One divider grouping two related field clusters.",
          rule: "Use a divider to group related items, not to fence every row.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "A divider after every single row.",
          rule: "Do not put a divider between every row; it adds noise.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "Two sections separated by whitespace alone.",
          rule: "Prefer whitespace to separate where it reads clearly without a line.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "Decorative dividers wrapping every item.",
          rule: "Do not add decorative dividers that carry no grouping meaning.",
        },
      },
    ],

    accessibility: [
      { t: "Use role='separator' for semantic dividers.", b: "If the Divider conveys structural meaning (separates two distinct sections), add `role='separator'`. Decorative ones use `role='presentation'`." },
      { t: "Labelled Dividers announce their label.", b: "Wrap the label text in `<span aria-label='OR'>` so screen readers announce 'OR' when crossing the boundary." },
      { t: "Vertical Dividers use aria-orientation.", b: "Add `aria-orientation='vertical'` on `role='separator'` so AT distinguishes vertical from horizontal flow." },
      { t: "Decorative dividers are hidden.", b: "If the Divider is purely visual rhythm (no semantic break), use `aria-hidden='true'` so screen readers skip it entirely." },
      { t: "Sufficient contrast - 3:1 minimum.", b: "Divider line meets 3:1 contrast against its background. Otherwise it's effectively invisible to low-vision users." },
      { t: "Don't replace heading hierarchy with Dividers.", b: "Section breaks use `<h2>` / `<h3>` headings, with optional Divider as visual reinforcement. AT users navigate by headings, not dividers." },
      { t: "Spacing matters as much as the line.", b: "A Divider with no surrounding padding feels squashed and hurts scanability. 16-24px on either side is a good default." },
    ],

    related: [
      {
        name: "Card",
        note: "Cards visually separate units of content without a Divider. Use Cards when each unit deserves its own surface; Dividers when units share one.",
        preview: (
          <div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, fontSize: 13, maxWidth: 180 }}>
            <div style={{ fontWeight: 600 }}>Card title</div>
          </div>
        ),
      },
      {
        name: "List",
        note: "List rows often use Dividers between rows. Toggle `divider={true|false}` on List to control - default is on.",
        preview: (
          <div style={{ display: "flex", flexDirection: "column", gap: 0, width: "100%" }}>
            <div style={{ padding: "6px 10px", fontSize: 13 }}>Item A</div>
            <Dv />
            <div style={{ padding: "6px 10px", fontSize: 13 }}>Item B</div>
          </div>
        ),
      },
      {
        name: "Breadcrumb",
        note: "Breadcrumb uses small `/` separators between items - a typographic equivalent of vertical Dividers, sized to match text.",
        preview: (
          <nav className="ux4g-breadcrumb">
            <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: 6, alignItems: "center" }}>
              <li>Home</li><li>/</li><li>Services</li><li>/</li><li>Aadhaar</li>
            </ol>
          </nav>
        ),
      },
      {
        name: "Accordion",
        note: "Accordion items are separated by Dividers - the line between rows is a low-key Divider with no label.",
        preview: (
          <div className="ux4g-accordion">
            <div style={{ padding: "10px 12px", fontSize: 13 }}>Question 1</div>
            <Dv />
            <div style={{ padding: "10px 12px", fontSize: 13 }}>Question 2</div>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
