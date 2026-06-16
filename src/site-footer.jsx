/* global React */
/* Shared SiteFooter — used across every page. */
function SiteFooter() {
  const arrowOutward = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
  const social = [
    {
      label: "Facebook",
      href: "#",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54v-2.2c0-2.51 1.5-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.79 8.44-4.94 8.44-9.94z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "#",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
        </svg>
      ),
    },
    {
      label: "X (Twitter)",
      href: "#",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.6 3H20.7l-6.78 7.75L22 21h-6.4l-5-6.57L4.7 21H1.6l7.25-8.28L1.4 3h6.55l4.52 5.98L17.6 3zm-2.24 16.1h1.72L7.7 4.8H5.85l9.51 14.3z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      svg: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23 12c0-1.7-.2-3.4-.5-5-.3-1-1-1.7-2-2C18.4 4.7 12 4.7 12 4.7s-6.4 0-8.5.3c-1 .3-1.7 1-2 2C1.2 8.6 1 10.3 1 12s.2 3.4.5 5c.3 1 1 1.7 2 2 2.1.3 8.5.3 8.5.3s6.4 0 8.5-.3c1-.3 1.7-1 2-2 .3-1.6.5-3.3.5-5zm-13.5 3.2V8.8L15.5 12l-6 3.2z" />
        </svg>
      ),
    },
  ];
  const links = ["About platform", "Departments", "Who’s who"];
  return (
    <footer className="sf" aria-label="Site footer">
      <div className="sf-main">
        <div className="container sf-main-grid">
          <div className="sf-left">
            <div className="sf-brand">
              <img src="assets/ux4g-wordmark.svg" alt="UX4G" className="sf-logo" />
              <div className="sf-brand-meta">
                <p className="sf-brand-title">UX4G Design System</p>
                <p className="sf-brand-desc">The official component library and pattern repository for Government of India digital initiatives.</p>
              </div>
            </div>
            <div className="sf-gov" aria-label="Government bodies">
              <img src="assets/images/NeGD%20logo.png" alt="National e-Governance Division" className="sf-gov-img sf-gov-img--negd" />
              <span className="sf-gov-divider" aria-hidden="true"></span>
              <img src="assets/images/Digital%20India%20logo.png" alt="Digital India" className="sf-gov-img sf-gov-img--di" />
            </div>
            <div className="sf-meta-row">
              <span className="sf-updated">Last updated: 18-05-2026</span>
              <div className="sf-social" role="list">
                {social.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label} className="sf-social-link" role="listitem">{s.svg}</a>
                ))}
              </div>
            </div>
            <nav className="sf-links" aria-label="Footer">
              {links.map((l) => (<a key={l} href="#" className="sf-link">{l}</a>))}
              <a href="#" className="sf-link sf-link--tagged">
                Directorates
                <span className="sf-tag">New</span>
              </a>
              <a href="#" className="sf-link sf-link--ext">State Award {arrowOutward}</a>
            </nav>
          </div>
          <aside className="sf-right" aria-label="Support">
            <p className="sf-cta-title">Need Support?</p>
            <p className="sf-cta-desc">Reach out to us and we will get back to you.</p>
            <a href="#contact" className="sf-cta-btn">
              <span>Get in touch</span>
              {arrowOutward}
            </a>
          </aside>
        </div>
      </div>
      <div className="sf-strip">
        <div className="container sf-strip-row">
          <p className="sf-copy">© 2022 — Copyright UX4G. All rights reserved. Powered by NeGD | MeitY, Government of India · ®2022 UX4G</p>
          <div className="sf-bottom-links">
            <a href="#terms" className="sf-bottom-link">Terms &amp; Conditions</a>
            <a href="#privacy" className="sf-bottom-link">Privacy policy</a>
            <a href="#contact" className="sf-bottom-link">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* Wrap SiteFooter so the Storybook banner precedes every footer automatically */
const _SiteFooterInner = SiteFooter;
SiteFooter = function SiteFooterWithBanner() {
  return (
    <>
      <section className="cx-bottom">
        <div className="container">
          <div className="line">
            Looking for developer docs, API references, or code snippets?
            <a href="https://storybook.ux4g.gov.in" target="_blank" rel="noreferrer">Visit our Storybook →</a>
          </div>
        </div>
      </section>
      <_SiteFooterInner />
    </>
  );
};
window.SiteFooter = SiteFooter;
