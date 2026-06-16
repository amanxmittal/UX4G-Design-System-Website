/* global React */
(function () {
  function Img({ src, alt, ratio = "16/9", radius = 8 }) {
    return (
      <div style={{ width: "100%", aspectRatio: ratio, background: src || "linear-gradient(135deg, #a78bfa, #6366f1)", borderRadius: radius, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 600 }}>
        {!src && alt}
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", zIndex: 3, display: "flex", gap: 18 }}>
          <div style={{ width: 200, height: 240, borderRadius: 14, background: "linear-gradient(135deg, var(--amber), #f59e0b)", boxShadow: "0 16px 32px -12px rgba(48,28,125,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transform: "rotate(-3deg)" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="rgba(255,255,255,0.85)" strokeWidth="2"/>
              <circle cx="9" cy="9" r="2" fill="rgba(255,255,255,0.85)"/>
              <path d="M3 17l5-5 4 4 3-3 6 6" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <div style={{ width: 200, height: 240, borderRadius: 14, background: "linear-gradient(135deg, #a78bfa, var(--primary-dark))", boxShadow: "0 16px 32px -12px rgba(48,28,125,0.4)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", transform: "rotate(2deg) translateY(-12px)" }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" stroke="rgba(255,255,255,0.85)" strokeWidth="2"/>
              <circle cx="9" cy="9" r="2" fill="rgba(255,255,255,0.85)"/>
              <path d="M3 17l5-5 4 4 3-3 6 6" stroke="rgba(255,255,255,0.85)" strokeWidth="2" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Image", navName: "Image", group: "Utility",
    desc: "Loading, error, and lazy-load behaviour for document scans, photographs, and decorative imagery. Maintains aspect ratio at every breakpoint.",
    bannerVariant: "card", hero: Hero,
    anatomy: [
      { n: 1, label: "Container", token: "ux4g-bg-neutral-soft" },
      { n: 2, label: "Image element", token: "ux4g-radius-md" },
      { n: 3, label: "Aspect ratio box", token: "ux4g-aspect-16-9" },
      { n: 4, label: "Skeleton placeholder", token: "ux4g-bg-neutral-soft" },
      { n: 5, label: "Error fallback", token: "ux4g-icon-outlined · broken_image" },
      { n: 6, label: "Caption (optional)", token: "ux4g-body-xs-default" },
    ],
    properties: [
      { label: "Aspect ratio", desc: "16:9 for hero / banner. 1:1 for thumbnails. 4:3 for document scans. Width fluid; height computed from ratio.", demos: [
        { label: "16:9", node: <Img alt="HERO" /> },
        { label: "1:1", node: <Img ratio="1/1" alt="SQUARE" /> },
        { label: "4:3", node: <Img ratio="4/3" alt="DOC" /> },
      ] },
      { label: "State", desc: "Loading (skeleton), success (image), error (fallback icon + caption).", demos: [
        { label: "Loading", node: <div style={{ width: "100%", aspectRatio: "16/9", background: "var(--ux4g-bg-neutral-soft)", borderRadius: 8 }}></div> },
        { label: "Loaded", node: <Img alt="LOADED" /> },
        { label: "Error", node: (<div style={{ width: "100%", aspectRatio: "16/9", background: "var(--ux4g-bg-neutral-soft)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ux4g-text-neutral-tertiary)", fontSize: 12 }}><span className="ux4g-icon-outlined" style={{ fontSize: 24, marginRight: 6 }}>broken_image</span>Failed to load</div>) },
      ] },
    ],
    scenarios: [
      { title: "Document scan thumbnail", desc: "1:1 ratio in lists. Tap to enlarge in a Modal.", stage: <div style={{ width: 120 }}><Img ratio="1/1" alt="PDF" /></div> },
      { title: "Hero banner image", desc: "16:9 ratio at top of articles and scheme pages. Captures attention.", stage: <Img alt="HERO" /> },
      { title: "Lazy load on scroll", desc: "Images below the fold load when they enter the viewport. Skeleton placeholder reserves layout to prevent shift.", stage: <Img alt="SCROLLED" /> },
      { title: "Error fallback", desc: "When image fails to load, show broken-image icon with descriptive caption.", stage: (<div style={{ width: "100%", aspectRatio: "16/9", background: "var(--ux4g-bg-neutral-soft)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", color: "var(--ux4g-text-neutral-tertiary)" }}><span className="ux4g-icon-outlined" style={{ fontSize: 32 }}>broken_image</span><span style={{ fontSize: 12, marginTop: 4 }}>Couldn't load scan</span></div>) },
    ],
    responsive: [
      { title: "Aspect ratio preserved at all widths", desc: "Width is fluid; height computed from CSS aspect-ratio. Layout shift never happens during load.", sample: <Img alt="RESPONSIVE" /> },
      { title: "Density-aware loading", desc: "srcset serves 2x images on retina displays. Bandwidth-aware on slow connections fallback to 1x.", sample: <Img alt="RETINA" /> },
    ],
    practices: [
      { do: { stage: <Img alt="MEANINGFUL ALT" />, rule: "Always provide descriptive alt text - 'PM-KISAN scheme illustration'." }, dont: { stage: <Img alt="" />, rule: "Empty alt for meaningful images fails screen readers and SEO." } },
      { do: { stage: <Img alt="LOADED" />, rule: "Set explicit aspect ratio so layout doesn't shift during load." }, dont: { stage: <img alt="" />, rule: "Img with no size causes content jumping as it loads." } },
    ],
    accessibility: [
      { t: "Alt text describes the image purpose.", b: "Functional images get descriptive alt. Decorative-only images use `alt=''` and `role='presentation'`." },
      { t: "Loading announces 'loading'.", b: "Wrap the loading placeholder in `aria-busy='true'`. Screen readers say 'loading' instead of silent." },
      { t: "Error fallback is announced.", b: "When the image fails, the fallback icon's container has `role='img' aria-label='Image failed to load'`." },
      { t: "Avoid text in images.", b: "Text inside images can't be selected, translated, or zoomed. Use real text whenever possible." },
      { t: "Contrast on overlay text meets 4.5:1.", b: "If text sits on the image, ensure 4.5:1 contrast with a darkened overlay or solid background patch." },
    ],
    related: [
      { name: "Avatar", note: "For circular profile images with initials fallback, use Avatar. Image is for general media.", preview: (<span style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--ux4g-bg-primary-subtle)", color: "var(--ux4g-text-primary-default)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 13 }}>AB</span>) },
      { name: "Card", note: "Cards often contain Image at the top. Image preserves aspect ratio; Card wraps it.", preview: (<div style={{ padding: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, maxWidth: 180 }}><div style={{ height: 60, background: "linear-gradient(135deg, #a78bfa, #6366f1)", borderRadius: 4, marginBottom: 6 }}></div><div style={{ fontSize: 12, fontWeight: 600 }}>Card title</div></div>) },
      { name: "File Upload", note: "When users upload images, File Upload component handles the input with preview. Image displays the result.", preview: (<div style={{ padding: 8, border: "1px dashed var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, fontSize: 12 }}>📁 Upload</div>) },
      { name: "Carousel", note: "For multiple images shown sequentially (gallery, schemes), use Carousel. Image is single-frame; Carousel cycles many.", preview: (<div style={{ display: "flex", gap: 4 }}><div style={{ width: 24, height: 24, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 2 }}></div><div style={{ width: 60, height: 24, background: "var(--ux4g-bg-primary-subtle)", borderRadius: 2 }}></div><div style={{ width: 24, height: 24, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 2 }}></div></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
