/* global React */
(function () {
  function Lk({ size = "m", inline, external, icon, children }) {
    return (
      <a className={"ux4g-text-link-" + size} href="#" onClick={(e) => e.preventDefault()} style={{ textDecoration: inline ? "underline" : "none", color: "var(--ux4g-text-link-default)", display: "inline-flex", alignItems: "center", gap: 4 }}>
        {children}
        {(external || icon) && <span className="ux4g-icon-outlined" style={{ fontSize: 16 }}>{external ? "open_in_new" : icon}</span>}
      </a>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-input-mock" style={{ width: 520 }}>
          <div className="hb-input-label">Inline navigation</div>
          <div className="hb-input-box" style={{ height: 88, padding: "20px 24px", alignItems: "center" }}>
            <span style={{ fontSize: 20, color: "var(--primary-dark)" }}>View grievance status </span>
            <span style={{ fontSize: 20, color: "var(--amber)", fontWeight: 600, borderBottom: "2px solid var(--amber)" }}>→</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/link/";

  const config = {
    name: "Link",
    navName: "Link",
    group: "Navigation",
    desc: "In-line text navigation that respects underline, focus, visited, and external-marker states. The bedrock of every text-rich page.",
    bannerVariant: "input",
    hero: Hero,

    anatomy: [
      { n: 1, label: "Label text", desc: "The clickable link text." },
      { n: 2, label: "Underline", desc: "The underline that marks the text as a link." },
      { n: 3, label: "Hover state", desc: "The colour and underline change on pointer hover." },
      { n: 4, label: "Visited state", desc: "A distinct colour once the link has been followed." },
      { n: 5, label: "External icon", desc: "An icon marking links that open externally." },
      { n: 6, label: "Focus ring", desc: "The keyboard-focus outline around the link." },
    ],

    properties: [
      {
        label: "Size",
        desc: "SM for compact contexts (table rows, footer). MD is the default. LG for hero CTAs that aren't full Buttons.",
        img: IMG + "properties-size.png",
        imgAlt: "A small link and a medium link in brand colour.",
        demos: [
          { label: "SM · 12px", node: <Lk size="sm">View status</Lk> },
          { label: "MD · 14px", node: <Lk size="md">View status</Lk> },
          { label: "LG · 16px", node: <Lk size="lg">View grievance status</Lk> },
        ],
      },
      {
        label: "Inline vs standalone",
        desc: "Inline links inside paragraphs underline by default. Standalone links (footer, nav) skip the underline; rely on colour to read as links.",
        img: IMG + "properties-inline.png",
        imgAlt: "An inline link within a sentence, and a standalone link.",
        demos: [
          { label: "Inline in text", wide: true, node: <span style={{ fontSize: 14 }}>By submitting, you agree to the <Lk inline>DPDP Act 2023 consent</Lk> and our terms.</span> },
          { label: "Standalone", node: <Lk>View grievance status</Lk> },
        ],
      },
      {
        label: "With icon",
        desc: "Trailing arrow (→) for forward navigation. External-page icon for outbound links. Both flag the link's destination clearly.",
        img: IMG + "properties-icon.png",
        imgAlt: "Links with a trailing external-link icon.",
        demos: [
          { label: "Trailing arrow", node: <Lk icon="arrow_forward">View status</Lk> },
          { label: "External", node: <Lk external>UIDAI website</Lk> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Inline link in body text",
        desc: "Plain text with a link mid-sentence. Always underlined so the link is identifiable even at a glance and for colour-blind users.",
        img: IMG + "scenarios-inline.png",
        imgAlt: "A link to the eligibility criteria embedded in a sentence.",
        stage: <span style={{ fontSize: 14 }}>By submitting, you agree to the <Lk inline>DPDP Act 2023 consent</Lk> and our <Lk inline>privacy notice</Lk>.</span>,
      },
      {
        title: "Footer link list",
        desc: "Standalone links in footer columns. No underline (relies on colour); underline appears on hover.",
        img: IMG + "scenarios-footer.png",
        imgAlt: "A vertical footer list of links: About UX4G, Contact support, Privacy policy, Terms of use.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Lk>About UX4G</Lk>
            <Lk>Privacy policy</Lk>
            <Lk>Terms of service</Lk>
            <Lk external>UIDAI website</Lk>
          </div>
        ),
      },
      {
        title: "Forward navigation in a card",
        desc: "Card footers often use a Link with trailing arrow as a lightweight CTA. Stronger than text; lighter than a Button.",
        img: IMG + "scenarios-forward.png",
        imgAlt: "A View grievance status link with a trailing forward icon.",
        stage: (
          <div style={{ padding: 14, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, maxWidth: 260 }}>
            <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4 }}>Income Certificate</div>
            <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)", marginBottom: 10 }}>Apply for the official certificate.</div>
            <Lk size="sm" icon="arrow_forward">Apply now</Lk>
          </div>
        ),
      },
      {
        title: "External link with icon",
        desc: "Links to external sites (UIDAI, IRCTC) include the open_in_new icon and open in a new tab. Always announce 'external' for screen readers.",
        img: IMG + "scenarios-external.png",
        imgAlt: "A UIDAI website link with an external-link icon.",
        stage: <Lk external>Open UIDAI portal</Lk>,
      },
      {
        title: "Visited state",
        desc: "Visited links shift to a slightly darker purple to help users remember 'I already went there'. Use sparingly in app context (some apps prefer no visited).",
        img: IMG + "scenarios-visited.png",
        imgAlt: "A visited-state link in a muted colour.",
        stage: (
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--ux4g-text-link-default)" }}>Read article on PMAY</a>
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#4c1d95" }}>Read article on PMJAY (visited)</a>
          </div>
        ),
      },
      {
        title: "Disabled link (when feature unavailable)",
        desc: "Disabled links keep the text greyed-out and are not clickable. Add a Tooltip explaining why - same convention as disabled Buttons.",
        img: IMG + "scenarios-disabled.png",
        imgAlt: "A disabled Download (coming soon) link.",
        stage: <span style={{ color: "var(--ux4g-text-neutral-tertiary)", cursor: "not-allowed", textDecoration: "line-through" }}>Download (coming soon)</span>,
      },
    ],

    responsive: [
      {
        title: "Tap target stays 44 × 44px",
        desc: "Even short inline links (Read more, ›) get invisible padding to reach 44 × 44px tap target. Critical for thumb-first mobile.",
        img: IMG + "responsive-tap.png",
        imgAlt: "A small link that still keeps a 44px tap target.",
        sample: <Lk>Read more</Lk>,
      },
      {
        title: "Underline always visible on mobile",
        desc: "On touch devices, the underline stays on always (no hover). Standalone links get underlined to remain obvious as links.",
        img: IMG + "responsive-underline.png",
        imgAlt: "A link whose underline stays visible rather than relying on colour alone.",
        sample: <Lk>View grievance status</Lk>,
      },
      {
        title: "Long link text wraps within parent",
        desc: "Multi-word links wrap to a new line when needed. Underline follows each line break. Never truncate link text.",
        img: IMG + "responsive-wrap.png",
        imgAlt: "A long link that wraps within its parent container.",
        sample: <span style={{ fontSize: 14 }}>For more information, see our <Lk inline>detailed guide on PMAY-Urban subsidy calculation and eligibility</Lk>.</span>,
      },
    ],

    practices: [
      {
        do: {
          img: IMG + "best-practices-1-do.png",
          imgAlt: "A link labelled View grievance status.",
          rule: "Use descriptive link text that says where the link goes.",
        },
        dont: {
          img: IMG + "best-practices-1-dont.png",
          imgAlt: "A link labelled Click here.",
          rule: "Do not use vague link text like 'Click here'.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-2-do.png",
          imgAlt: "An external link with a trailing external-link icon.",
          rule: "Mark external links with an icon so users know they leave the site.",
        },
        dont: {
          img: IMG + "best-practices-2-dont.png",
          imgAlt: "An external link with no icon, looking internal.",
          rule: "Do not leave external links unmarked.",
        },
      },
      {
        do: {
          img: IMG + "best-practices-3-do.png",
          imgAlt: "A concise link, Track your application.",
          rule: "Keep link text concise — a few meaningful words.",
        },
        dont: {
          img: IMG + "best-practices-3-dont.png",
          imgAlt: "A whole sentence turned into one long link.",
          rule: "Do not turn an entire sentence into a link.",
        },
      },
    ],

    accessibility: [
      { t: "Use <a href> for navigation, <button> for actions.", b: "Links go to URLs (even hash routes). Buttons trigger JS actions. Confusing them breaks keyboard nav and screen-reader expectations." },
      { t: "Underline at minimum on hover and focus.", b: "Inline links underline always. Standalone links underline on hover and focus. Never rely on colour alone - 8% of men are red-green colour-blind." },
      { t: "External links announce 'external'.", b: "Use `aria-label='UIDAI website (opens in new tab)'`. The visual icon reinforces; the label carries the meaning." },
      { t: "Focus ring is always visible.", b: "Keyboard focus shows a 2px outline. Never suppress :focus-visible. Without it, keyboard users lose track of where they are." },
      { t: "Tap target stays 44 × 44px.", b: "Even tiny inline links get invisible padding. Touch users hit the same target as the visible text." },
      { t: "Link text is descriptive when read out of context.", b: "Screen readers can list 'all links on this page'. 'Read more' is useless out of context - 'Read more about PMAY' works." },
      { t: "Same destination = same link text.", b: "If two links go to the same place, use the same text. Screen readers de-duplicate same-text links, reducing noise." },
    ],

    related: [
      {
        name: "Button",
        note: "For actions that commit changes (submit, delete), use Button. Links go to URLs; Buttons fire actions.",
        preview: <button className="ux4g-btn-primary ux4g-btn-md">Submit application</button>,
      },
      {
        name: "Breadcrumb",
        note: "Each non-current breadcrumb item is a Link. Inherits Link's underline, hover, focus, and visited states.",
        preview: (
          <nav className="ux4g-breadcrumb ux4g-breadcrumb-divider">
            <ol style={{ display: "flex", listStyle: "none", padding: 0, margin: 0, gap: 6 }}>
              <li><Lk>Home</Lk></li><li>/</li><li>Services</li>
            </ol>
          </nav>
        ),
      },
      {
        name: "Tag",
        note: "Removable filter chips often behave like links - tap removes the filter. Tag is the right primitive for filter pills with state.",
        preview: <span className="ux4g-tag-tonal-primary">DPDP 2023 ×</span>,
      },
      {
        name: "Navbar",
        note: "Top-level Navbar entries are Links. Active nav item gets an underline / fill to indicate current page.",
        preview: (
          <div style={{ display: "flex", gap: 12, padding: 8, fontSize: 13 }}>
            <Lk>Foundations</Lk>
            <Lk>Components</Lk>
            <Lk>Patterns</Lk>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
