/* global React */
(function () {
  function C({ active = 1, total = 4 }) {
    return (
      <div style={{ width: "100%", maxWidth: 480 }}>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", height: 140, alignItems: "center" }}>
          {Array.from({ length: total }).map((_, i) => {
            const isActive = i === active;
            return <div key={i} style={{ flex: isActive ? "1 1 60%" : "0 0 20%", height: isActive ? 140 : 100, background: isActive ? "linear-gradient(135deg, #6366f1, #a78bfa)" : "var(--ux4g-bg-neutral-soft)", borderRadius: 10, transition: "all .25s ease" }}></div>;
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 12 }}>
          {Array.from({ length: total }).map((_, i) => (
            <span key={i} style={{ width: i === active ? 24 : 8, height: 8, borderRadius: 4, background: i === active ? "var(--ux4g-bg-primary-strong)" : "var(--ux4g-bg-neutral-soft)" }}></span>
          ))}
        </div>
      </div>
    );
  }
  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-card-mock" style={{ alignItems: "center" }}>
          <div className="hb-card-tile" style={{ transform: "translateX(-20px) scale(0.9)", opacity: 0.7 }}>
            <div className="hb-card-thumb"></div>
            <div className="hb-card-row"></div>
            <div className="hb-card-row short"></div>
          </div>
          <div className="hb-card-tile" style={{ transform: "translateY(0) scale(1.05)", zIndex: 2 }}>
            <div className="hb-card-thumb"></div>
            <div className="hb-card-row"></div>
            <div className="hb-card-row short"></div>
          </div>
          <div className="hb-card-tile" style={{ transform: "translateX(20px) scale(0.9)", opacity: 0.7 }}>
            <div className="hb-card-thumb"></div>
            <div className="hb-card-row"></div>
            <div className="hb-card-row short"></div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 8, zIndex: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }}></span>
          <span style={{ width: 24, height: 8, borderRadius: 4, background: "var(--amber)" }}></span>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }}></span>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.3)" }}></span>
        </div>
      </React.Fragment>
    );
  }
  const config = {
    name: "Carousel", navName: "Carousel", group: "Data Display",
    desc: "Slideshow for announcements, schemes, and featured services. Cycles through slides with manual or auto-advance navigation.",
    bannerVariant: "card", hero: Hero,
    anatomy: [
      { n: 1, label: "Slide track", token: "ux4g-bg-neutral-soft" },
      { n: 2, label: "Active slide", token: "ux4g-bg-primary-strong" },
      { n: 3, label: "Adjacent slides (preview)", token: "ux4g-bg-neutral-soft" },
      { n: 4, label: "Progress dots", token: "ux4g-bg-primary-strong" },
      { n: 5, label: "Prev / Next arrows", token: "ux4g-icon-outlined" },
      { n: 6, label: "Auto-advance timer (optional)", token: "5s ease-in-out" },
    ],
    properties: [
      { label: "Layout", desc: "Single slide visible (centered). Multi-slide preview (active + 2 adjacent). Stacked card carousel for hero schemes.", demos: [
        { label: "Multi-preview", wide: true, node: <C active={1} total={4} /> },
      ] },
    ],
    scenarios: [
      { title: "Featured schemes on homepage", desc: "Auto-advancing carousel showcases 3-5 schemes. Manual nav (dots + arrows) for users who want control.", stage: <C active={1} total={4} /> },
      { title: "Onboarding walkthrough", desc: "First-visit tour explains UX4G via 4-5 slides. Manual progression only (no auto-advance for content users must read).", stage: <C active={0} total={5} /> },
      { title: "Image gallery", desc: "Document scans or photographs cycle through. Tap to enlarge in Modal.", stage: <C active={2} total={5} /> },
      { title: "Disabled controls at boundaries", desc: "First slide disables Prev arrow; last slide disables Next. Visual cue users have reached the edge.", stage: <C active={3} total={4} /> },
    ],
    responsive: [
      { title: "Touch-swipe on mobile", desc: "Below 768px, slides advance via swipe. Arrows hide; only dots remain.", sample: <C active={1} total={4} /> },
      { title: "Single slide on narrow viewports", desc: "Multi-preview collapses to single-slide-visible below 480px. Otherwise slides crop awkwardly.", sample: <C active={0} total={3} /> },
    ],
    practices: [
      { do: { stage: <C active={1} total={4} />, rule: "Show dots so users see how many slides total - prevents wondering if there's more." }, dont: { stage: <C active={1} total={20} />, rule: "20-slide carousel is too long - users won't reach the end." } },
      { do: { stage: <C active={1} total={4} />, rule: "Disable auto-advance for content users must read. Auto-advance only for decorative banners." }, dont: { stage: <C active={1} total={4} />, rule: "Auto-advance through long text mid-read frustrates users." } },
    ],
    accessibility: [
      { t: "Use role='region' with aria-roledescription='carousel'.", b: "Carousel wrapper gets `aria-roledescription='carousel'`. Screen readers announce 'carousel' as a distinct element type." },
      { t: "Slides have role='group' with aria-roledescription='slide'.", b: "Each slide has `role='group' aria-roledescription='slide' aria-label='2 of 5: PM-KISAN'`." },
      { t: "Pause on hover / focus.", b: "Auto-advance pauses when user hovers or tabs into the carousel. Critical for users who need more reading time." },
      { t: "Prev / Next as buttons.", b: "Arrows are `<button aria-label='Previous slide'>`. Native keyboard support and accessible name." },
      { t: "Skip-carousel link for keyboard users.", b: "Add a 'Skip carousel' link at the start so keyboard users can bypass without tabbing through every slide." },
    ],
    related: [
      { name: "Card", note: "Each slide in a Carousel is often a Card with image, title, and CTA. Same content rules.", preview: (<div style={{ padding: 8, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, fontSize: 12, maxWidth: 160 }}><div style={{ height: 50, background: "linear-gradient(135deg, #a78bfa, #6366f1)", borderRadius: 4, marginBottom: 4 }}></div><div style={{ fontWeight: 600 }}>Slide title</div></div>) },
      { name: "Pagination", note: "Dots in a Carousel are like Pagination - one segment per slide, active state on current.", preview: (<div className="ux4g-pagination-wrapper"><div className="ux4g-pagination"><button className="ux4g-page-nav prev ux4g-icon-outlined">chevron_left</button><button className="ux4g-page-number active">1</button><button className="ux4g-page-number">2</button></div></div>) },
      { name: "Image", note: "Carousel slides often hold Image components. Aspect ratio preserved across slides.", preview: (<div style={{ width: 80, height: 50, background: "linear-gradient(135deg, #a78bfa, #6366f1)", borderRadius: 4 }}></div>) },
      { name: "Modal", note: "Tapping a slide can open a Modal with the full content / image at higher resolution.", preview: (<div style={{ padding: 12, border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 8, maxWidth: 200, fontSize: 12 }}><div style={{ fontWeight: 600 }}>Modal</div></div>) },
    ],
  };
  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
