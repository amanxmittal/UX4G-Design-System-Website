/* global React */
/* Shared building blocks for pattern category pages.
   Exposes: PtCategories (data), PtNavbar, PtLeftNav, PtHero, PtSidebar, PtPattern, PtFrame, PtMeta, PtMock, PtMockBits */

const PT_CATEGORIES = [
  { slug: "identity-access",   num: "P-01", name: "Identity & Access",        href: "UX4G Identity & Access.html",        live: true },
  { slug: "consent",           num: "P-02", name: "Consent & Declaration",    href: "UX4G Consent.html",                  live: true },
  { slug: "application",       num: "P-03", name: "Application & Submission", href: "UX4G Application.html",              live: true },
  { slug: "status-tracking",   num: "P-04", name: "Status & Tracking",        href: "UX4G Status & Tracking.html",        live: true },
  { slug: "payments",          num: "P-05", name: "Payment & Transactions",   href: "UX4G Payments.html",                 live: true },
  { slug: "search-discovery",  num: "P-06", name: "Search & Discovery",       href: "UX4G Search & Discovery.html",       live: true },
  { slug: "dashboard",         num: "P-07", name: "Dashboard & Applications", href: "UX4G Dashboard.html",                live: true },
  { slug: "notifications",     num: "P-08", name: "Notifications",            href: "UX4G Notifications.html",            live: true },
  { slug: "feedback",          num: "P-09", name: "Feedback & Communication", href: "UX4G Feedback.html",                 live: true },
];
window.PT_CATEGORIES = PT_CATEGORIES;

window.PtNavbar = function PtNavbar() {
  const links = [
    { l: "Foundations",  href: "UX4G Foundations.html" },
    { l: "Fundamentals", href: "UX4G Fundamentals.html" },
    { l: "Components",   href: "UX4G Components.html" },
    { l: "Patterns",     href: "UX4G Patterns.html" },
    { l: "Made by You", href: "UX4G Made by You.html" },
  ];
  return (
    <SiteNavbar />
  );
};

window.PtLeftNav = function PtLeftNav({ activeSlug }) {
  return (
    <div className="ptc-nav-left-wrap" aria-label="Pattern categories">
      <aside className="ptc-nav-left">
        <div className="ptc-nl-head">Pattern groups</div>
        <ul className="ptc-nl-list ptc-nl-groups">
          {PT_CATEGORIES.map((c) => (
            <li key={c.slug}>
              <a
                href={c.href}
                className={"ptc-nl-item" + (c.slug === activeSlug ? " current" : "") + (c.live ? "" : " soon")}
              >
                <span className="ptc-nl-num">{c.num}</span>
                <span className="ptc-nl-label">{c.name}</span>
                {!c.live && <span className="ptc-nl-tag">Soon</span>}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

/* Per-category hero marquee data — each pattern with a tag + name + tiny preview. */
window.PT_HERO = {};

const mockI = (label) => <div className="ptc-mock__input">{label}</div>;
const mockBtn = (label, kind) => <div className={"ptc-mock__btn" + (kind ? " ptc-mock__btn--" + kind : "")}>{label}</div>;
const mockAlert = (kind, txt, ico) => (
  <div className={"ptc-mock__alert ptc-mock__alert--" + kind}><span className="ico">{ico || (kind === "success" ? "✓" : "!")}</span><span>{txt}</span></div>
);
const mockChip = (kind, txt) => <span className={"ptc-mock__chip" + (kind ? " ptc-mock__chip--" + kind : "")}>{txt}</span>;
const mockOtp = (cells) => <div className="ptc-mock__otp">{cells.map((c, i) => <i key={i} className={c.s || ""}>{c.v || ""}</i>)}</div>;
const mockBar = (pct, color) => <div className="ptc-mock__bar-prog"><i style={{ width: pct + "%", background: color }}></i></div>;

window.PT_HERO["identity-access"] = {
  colA: [
    { tag: "PATTERN · 1.1", name: "Sign In",                 preview: mockOtp([{v:"4",s:"f"},{v:"8"},{v:"3"},{v:""},{v:""},{v:""}]) },
    { tag: "PATTERN · 1.3", name: "OTP Verification",        preview: mockAlert("error","Incorrect OTP · 2 left") },
    { tag: "PATTERN · 1.5", name: "Forgot Password",         preview: mockBtn("Send reset link") },
    { tag: "PATTERN · 1.7", name: "Aadhaar Auth Gate",       preview: <div className="ptc-mock__row" style={{gap:4,flexWrap:"wrap"}}>{mockChip("purple","● OTP")}{mockChip(null,"Face")}{mockChip(null,"Fingerprint")}</div> },
  ],
  colB: [
    { tag: "PATTERN · 1.2", name: "Sign Up",                 preview: mockI("+91 — Mobile number") },
    { tag: "PATTERN · 1.4", name: "Session Timeout",         preview: mockChip("warn","● 04:47 remaining") },
    { tag: "PATTERN · 1.6", name: "Auth Lockout",            preview: mockChip("error","🔒 Locked · 28:43") },
    { tag: "PATTERN · 1.8", name: "Biometric Verification",  preview: mockAlert("success","Identity verified · UID •••• 4519") },
  ],
};

window.PT_HERO["consent"] = {
  colA: [
    { tag: "PATTERN · 2.1", name: "Consent Capture",            preview: <div>{mockChip("purple","DPDP · Required")}<div className="ptc-mock__sub" style={{marginTop:4}}>☑ Aadhaar · ☐ Email</div></div> },
    { tag: "PATTERN · 2.3", name: "Declaration",                preview: mockAlert("warn","Section 193 IPC · false info is punishable") },
  ],
  colB: [
    { tag: "PATTERN · 2.2", name: "Data Sharing Consent",       preview: <div className="ptc-mock__row"><span className="ptc-mock__chip" style={{background:"#fdecea",color:"#aa2920"}}>Required</span><span style={{fontSize:9}}>Bank of India</span></div> },
    { tag: "PATTERN · 2.1", name: "Consent Capture",            preview: mockAlert("success","Consented · 10 Apr · v2.1") },
  ],
};

window.PT_HERO["application"] = {
  colA: [
    { tag: "PATTERN · 3.1", name: "Eligibility Wizard",         preview: <div><div className="ptc-mock__sub">Question 3 of 5</div>{mockBar(60)}</div> },
    { tag: "PATTERN · 3.3", name: "Form with Validation",       preview: mockAlert("error","Enter a valid 10-digit mobile number") },
    { tag: "PATTERN · 3.5", name: "Save & Resume",              preview: mockAlert("warn","Last saved 10 Apr · Step 3 of 5") },
  ],
  colB: [
    { tag: "PATTERN · 3.2", name: "Journey Progress",           preview: <div className="ptc-mock__row" style={{gap:6}}><span className="ptc-mock__icon" style={{background:"#106c35",color:"#fff"}}>1</span><span className="ptc-mock__icon" style={{background:"var(--primary)",color:"#fff"}}>2</span><span className="ptc-mock__icon">3</span></div> },
    { tag: "PATTERN · 3.4", name: "Document Upload",            preview: <div><div className="ptc-mock__sub">2 of 4 uploaded</div>{mockBar(50)}</div> },
    { tag: "PATTERN · 3.6", name: "Submission Ack",             preview: <div><div className="ptc-mock__sub">INC-2026-MH-04127</div>{mockBtn("Track application")}</div> },
  ],
};

window.PT_HERO["status-tracking"] = {
  colA: [
    { tag: "PATTERN · 4.1", name: "Application Tracker",        preview: <div>{mockChip("warn","● Under Review")}{mockBar(72,"#c97a0c")}</div> },
    { tag: "PATTERN · 4.3", name: "Slot Scheduling",            preview: <div className="ptc-mock__row" style={{gap:4,flexWrap:"wrap"}}>{mockChip(null,"10:00")}{mockChip("purple","● 11:00")}{mockChip("warn","1 left")}</div> },
  ],
  colB: [
    { tag: "PATTERN · 4.2", name: "Grievance Escalation",       preview: mockChip("purple","● Escalated to State") },
    { tag: "PATTERN · 4.1", name: "Application Tracker",        preview: mockAlert("error","Action Required · Upload by 15 Apr","!") },
  ],
};

window.PT_HERO["payments"] = {
  colA: [
    { tag: "PATTERN · 5.1", name: "Fee Summary",                preview: <div><div className="ptc-mock__row" style={{justifyContent:"space-between",fontWeight:700}}><span>Total</span><span>₹41.30</span></div></div> },
    { tag: "PATTERN · 5.1", name: "Payment Success",            preview: mockAlert("success","₹41.30 paid via UPI") },
    { tag: "PATTERN · 5.1", name: "Fee Waiver",                 preview: mockAlert("success","SC/ST waiver applied · ₹0.00") },
  ],
  colB: [
    { tag: "PATTERN · 5.1", name: "Method Selector",            preview: <div className="ptc-mock__row" style={{gap:4,flexWrap:"wrap"}}>{mockChip("purple","● UPI")}{mockChip(null,"Net Bank")}{mockChip(null,"Card")}</div> },
    { tag: "PATTERN · 5.1", name: "Payment Failed",             preview: mockAlert("error","Bank declined · No amount deducted") },
    { tag: "PATTERN · 5.1", name: "Receipt",                    preview: mockBtn("Download receipt (PDF)","ghost") },
  ],
};

window.PT_HERO["search-discovery"] = {
  colA: [
    { tag: "PATTERN · 6.1", name: "Search, Browse & Book",      preview: mockI("🔍  Search 3,000+ services") },
    { tag: "PATTERN · 6.3", name: "Consultation Booking",       preview: <div className="ptc-mock__row" style={{gap:4,flexWrap:"wrap"}}>{mockChip(null,"10:00")}{mockChip("purple","● 11:00")}</div> },
  ],
  colB: [
    { tag: "PATTERN · 6.2", name: "Global Discovery",           preview: <div className="ptc-mock__row" style={{gap:4,flexWrap:"wrap"}}>{mockChip(null,"Health")}{mockChip(null,"Agri")}{mockChip(null,"Edu")}</div> },
    { tag: "PATTERN · 6.1", name: "Service Result",             preview: mockBtn("Apply →") },
  ],
};

window.PT_HERO["dashboard"] = {
  colA: [
    { tag: "PATTERN · 7.1", name: "My Applications",            preview: <div className="ptc-mock__row" style={{gap:4,flexWrap:"wrap"}}>{mockChip(null,"Active 2")}{mockChip("error","Action 1")}{mockChip("success","Done 5")}</div> },
    { tag: "PATTERN · 7.3", name: "Citizen Profile",            preview: <div className="ptc-mock__row"><span className="ptc-mock__icon">RK</span><span style={{fontSize:10,fontWeight:600}}>Ramesh Kumar</span></div> },
  ],
  colB: [
    { tag: "PATTERN · 7.2", name: "Pending Tasks",              preview: mockAlert("warn","3 tasks need attention","!") },
    { tag: "PATTERN · 7.1", name: "Action-needed card",         preview: mockBtn("Upload now","danger") },
  ],
};

window.PT_HERO["notifications"] = {
  colA: [
    { tag: "PATTERN · 8.1", name: "Notification Centre",        preview: <div className="ptc-mock__row"><span className="ptc-mock__icon" style={{background:"#db372d",color:"#fff"}}>3</span><span style={{fontSize:10,fontWeight:600}}>3 new</span></div> },
    { tag: "PATTERN · 8.3", name: "Proactive Updates",          preview: mockChip("success","● LIVE · Real-time") },
    { tag: "PATTERN · 8.5", name: "Preferences",                preview: <div className="ptc-mock__row" style={{gap:4,flexWrap:"wrap"}}>{mockChip("success","SMS · On")}{mockChip("success","Email · On")}{mockChip(null,"WhatsApp · Off")}</div> },
  ],
  colB: [
    { tag: "PATTERN · 8.2", name: "SMS Template",               preview: <div className="ptc-mock__sub" style={{lineHeight:1.5}}><strong>APPROVED</strong> · Your Income Cert is approved. bit.ly/cert</div> },
    { tag: "PATTERN · 8.4", name: "Reminders · D-5",            preview: mockAlert("warn","Draft expires in 5 days") },
    { tag: "PATTERN · 8.2", name: "WhatsApp Template",          preview: mockAlert("success","💬 Status update · Ration") },
  ],
};

window.PT_HERO["feedback"] = {
  colA: [
    { tag: "PATTERN · 9.2", name: "Service Rating",             preview: <div style={{display:"flex",gap:3,color:"#c97a0c",fontSize:18,lineHeight:1}}><span>★</span><span>★</span><span>★</span><span>★</span><span style={{color:"var(--gray-300)"}}>★</span></div> },
    { tag: "PATTERN · 9.4", name: "Language Switcher",          preview: <div className="ptc-mock__row" style={{gap:4,flexWrap:"wrap"}}>{mockChip("purple","✓ EN")}{mockChip(null,"हिंदी")}{mockChip(null,"தமிழ்")}</div> },
  ],
  colB: [
    { tag: "PATTERN · 9.1", name: "Inline Feedback",            preview: mockAlert("success","Amount format looks correct") },
    { tag: "PATTERN · 9.3", name: "Contact & Support",          preview: <div className="ptc-mock__row" style={{gap:4,flexWrap:"wrap"}}>{mockChip("success","● Chat available")}{mockChip(null,"📞 1800-XXX")}</div> },
  ],
};

/* Hero marquee — two columns scrolling vertically through this category's patterns.
   Pass colA / colB as arrays of { tag, name, preview } where preview is a React node. */
window.PtHeroMarquee = function PtHeroMarquee({ colA, colB }) {
  const Snip = ({ name, preview }) => (
    <div className="ptc-hero-snip">
      <h4 className="ptc-hero-snip__name">{name}</h4>
      {preview && <div className="ptc-hero-snip__preview">{preview}</div>}
    </div>
  );
  return (
    <div className="ptc-hero-marquee">
      <div className="ptc-hero-marquee__col ptc-hero-marquee__col--a">
        <div className="ptc-hero-marquee__inner">
          {colA.map((s, i) => <Snip key={`a1-${i}`} {...s} />)}
          {colA.map((s, i) => <Snip key={`a2-${i}`} {...s} />)}
        </div>
      </div>
      <div className="ptc-hero-marquee__col ptc-hero-marquee__col--b">
        <div className="ptc-hero-marquee__inner">
          {colB.map((s, i) => <Snip key={`b1-${i}`} {...s} />)}
          {colB.map((s, i) => <Snip key={`b2-${i}`} {...s} />)}
        </div>
      </div>
    </div>
  );
};

window.PtHero = function PtHero({ num, tag, title, desc, meta, slug, children }) {
  return (
    <section className="ptc-hero-wrap">
      <div className="ptc-hero-crumb">
        <a href="index.html">Home</a>
        <span className="sep">/</span>
        <a href="UX4G Patterns.html">Patterns</a>
        <span className="sep">/</span>
        <span className="current">{title}</span>
      </div>
      <div className={"ptc-hero ptc-hero--" + (slug || "default")}>
        <div className="ptc-hero-text">
          <h1 className="ptc-hero-h">{title}</h1>
          <p className="ptc-hero-desc">{desc}</p>
          {meta && (
            <div className="ptc-hero-meta">
              {meta.map((m, i) => <span className="chip" key={i}>{m}</span>)}
            </div>
          )}
        </div>
        <div className="ptc-hero-viz">{children}</div>
      </div>
      <div className="ptc-link-pills">
        <a className="ptc-meta-pill" href="#" onClick={(e) => { e.preventDefault(); }}>
          <span className="ptc-meta-ico" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" fill="currentColor"/>
            </svg>
          </span>
          <span>View code</span>
        </a>
        <a className="ptc-meta-pill" href="https://storybook.ux4g.gov.in" target="_blank" rel="noreferrer">
          <span className="ptc-meta-ico" style={{ background: "#FF4785", color: "#fff" }} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
              <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"/>
            </svg>
          </span>
          <span>View Storybook</span>
        </a>
        <a className="ptc-meta-pill" href="#" onClick={(e) => { e.preventDefault(); }}>
          <span className="ptc-meta-ico fig" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00006 24C10.2081 24 12.0001 22.208 12.0001 20V15.9999H8.00006C5.79205 15.9999 4 17.792 4 20C4 22.208 5.79205 24 8.00006 24Z" fill="#0ACF83"/>
              <path d="M4 12C4 9.79197 5.79205 7.99994 8.00006 7.99994H12.0001V15.9999H8.00006C5.79205 16 4 14.208 4 12Z" fill="#A259FF"/>
              <path d="M4 4.00003C4 1.79203 5.79205 0 8.00006 0H12.0001V7.99997H8.00006C5.79205 7.99997 4 6.20803 4 4.00003Z" fill="#F24E1E"/>
              <path d="M12 0H16.0001C18.2081 0 20.0001 1.79203 20.0001 4.00003C20.0001 6.20803 18.2081 7.99997 16.0001 7.99997H12V0Z" fill="#FF7262"/>
              <path d="M20.0001 12C20.0001 14.208 18.2081 16 16.0001 16C13.792 16 12 14.208 12 12C12 9.79197 13.792 7.99994 16.0001 7.99994C18.2081 7.99994 20.0001 9.79197 20.0001 12Z" fill="#1ABCFE"/>
            </svg>
          </span>
          <span>View Design</span>
        </a>
      </div>
    </section>
  );
};

window.PtSidebar = function PtSidebar({ patterns }) {
  const { useState, useEffect, useMemo } = React;

  // Flat list of every trackable section: parent pattern + each sub, in document order.
  const flatIds = useMemo(() => {
    const out = [];
    patterns.forEach((p) => {
      out.push({ id: p.id, parent: p.id });
      (p.subs || []).forEach((s) => out.push({ id: s.id, parent: p.id }));
    });
    return out;
  }, [patterns]);

  const [activeId, setActiveId] = useState(flatIds[0] ? flatIds[0].id : null);

  useEffect(() => {
    const onScroll = () => {
      const probe = 140;
      let cur = flatIds[0] ? flatIds[0].id : null;
      for (const s of flatIds) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top < probe) cur = s.id;
      }
      setActiveId(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [flatIds]);

  const activeParent = (flatIds.find((s) => s.id === activeId) || {}).parent;

  const onJump = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <aside className="ptc-side">
      <div className="ptc-side-head">On this page</div>
      <ul className="ptc-side-list">
        {patterns.map((p) => {
          const isActiveParent = activeParent === p.id;
          const isPatternActive = activeId === p.id;
          return (
            <li
              key={p.id}
              className={"ptc-side-pattern" + (isActiveParent ? " is-open" : "")}
            >
              <a
                href={`#${p.id}`}
                onClick={(e) => onJump(e, p.id)}
                className={"ptc-side-pat" + (isPatternActive ? " active" : "")}
              >
                {p.title}
              </a>
              {p.subs && isActiveParent && (
                <ul className="ptc-side-sub">
                  {p.subs.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        onClick={(e) => onJump(e, s.id)}
                        className={activeId === s.id ? "active" : ""}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

window.PtPattern = function PtPattern({ id, num, title, lede, children }) {
  return (
    <section id={id} className="ptc-pattern">
      <header className="ptc-pat-head">
        <span className="ptc-pat-num">{num}</span>
        <h2 className="ptc-pat-title">{title}</h2>
        <p className="ptc-pat-lede">{lede}</p>
      </header>
      {children}
    </section>
  );
};

window.PtSub = function PtSub({ id, title, intro, children, tone }) {
  const cls = "ptc-sub" + (tone ? ` ptc-sub--block ptc-sub--${tone}` : "");
  return (
    <div id={id} className={cls}>
      <h3 className="ptc-sub-head">{title}</h3>
      <div className="ptc-sub-rule"></div>
      {intro && <p className="ptc-sub-intro">{intro}</p>}
      {children}
    </div>
  );
};

/* ───────── New section renderers — universal + conditional ───────── */

window.PtWhenToUse = function PtWhenToUse({ id, items, notFor }) {
  return (
    <PtSub id={id} title="When to use">
      <div className="ptc-when">
        <div className="ptc-when-block">
          <div className="h">Use this pattern when</div>
          <ul className="ptc-bullets ptc-bullets--check">
            {items.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
        {notFor && (
          <div className="ptc-when-block is-not">
            <div className="h">When not to use</div>
            <p style={{ fontSize: 14.5, color: "var(--gray-800, var(--ink))", lineHeight: 1.55, margin: 0 }}>{notFor}</p>
          </div>
        )}
      </div>
    </PtSub>
  );
};

window.PtFlow = function PtFlow({ id, steps }) {
  return (
    <PtSub id={id} title="Flow diagram">
      <div className="ptc-flow">
        {steps.map((s, i) => (
          <React.Fragment key={i}>
            <div className="ptc-flow__step">
              <span className="num">{i + 1}</span>
              <span className="lbl">{s}</span>
            </div>
            {i < steps.length - 1 && <span className="arr">→</span>}
          </React.Fragment>
        ))}
      </div>
    </PtSub>
  );
};

window.PtComponents = function PtComponents({ id, items }) {
  return (
    <PtSub id={id} title="Components used">
      <div className="ptc-comps">
        {items.map((c) => (
          <a key={c.name} href={c.href || "UX4G Components.html"} className="ptc-comp-link">{c.name}</a>
        ))}
      </div>
    </PtSub>
  );
};

window.PtBehaviour = function PtBehaviour({ id, items }) {
  return (
    <PtSub id={id} title="Behaviour & interaction notes">
      <ul className="ptc-bullets">
        {items.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </PtSub>
  );
};

window.PtEdges = function PtEdges({ id, items, screens }) {
  return (
    <PtSub id={id} title="Edge cases">
      {items && items.length > 0 && (
        <ul className="ptc-bullets ptc-bullets--warn">
          {items.map((s, i) => <li key={i}>{s}</li>)}
        </ul>
      )}
      {screens && screens.length > 0 && (
        <div style={{ marginTop: items && items.length > 0 ? 20 : 0 }}>
          <PtFrameGrid>
            {screens.map((s, i) => (
              <PtFrame key={i} num={`Edge ${i + 1}`} name={s.name} desc={s.desc}>{s.frame}</PtFrame>
            ))}
          </PtFrameGrid>
        </div>
      )}
    </PtSub>
  );
};

window.PtDoDont = function PtDoDont({ id, pairs }) {
  return (
    <PtSub id={id} title="Do and don't">
      <div className="ptc-dodont">
        {pairs.map((p, i) => (
          <React.Fragment key={i}>
            <div className="ptc-dodont__col ptc-dodont__col--do">
              <div className="ptc-dodont__mark">✓</div>
              <div className="ptc-dodont__copy">
                <div className="ptc-dodont__h">Do</div>
                <p className="ptc-dodont__text">{p.do}</p>
              </div>
            </div>
            <div className="ptc-dodont__col ptc-dodont__col--dont">
              <div className="ptc-dodont__mark">✕</div>
              <div className="ptc-dodont__copy">
                <div className="ptc-dodont__h">Don't</div>
                <p className="ptc-dodont__text">{p.dont}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </PtSub>
  );
};

window.PtA11y = function PtA11y({ id, items }) {
  return (
    <PtSub id={id} title="Accessibility notes">
      <ul className="ptc-bullets">
        {items.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </PtSub>
  );
};

window.PtRelated = function PtRelated({ id, items }) {
  return (
    <PtSub id={id} title="Related patterns">
      <div className="ptc-related">
        {items.map((r) => (
          <a key={r.name} href={r.href || "#"} className="ptc-related__card">
            <span className="ptc-related__tag">{r.tag || "Related"}</span>
            <span className="ptc-related__name">{r.name}</span>
            {r.desc && <span className="ptc-related__desc">{r.desc}</span>}
          </a>
        ))}
      </div>
    </PtSub>
  );
};

/* ───── Conditional callouts ───── */

/* Internal helper — renders text content as one or more paragraphs */
function _Body({ body }) {
  if (!body) return null;
  if (Array.isArray(body)) return <>{body.map((p, i) => <p key={i}>{p}</p>)}</>;
  return <p>{body}</p>;
}

window.PtCompliance = function PtCompliance({ id, law, body }) {
  return (
    <PtSub id={id} title="Compliance" tone="compliance">
      {law && <h4 className="ptc-conditional__title">{law}</h4>}
      <div className="ptc-conditional__body"><_Body body={body} /></div>
    </PtSub>
  );
};

window.PtDataHandling = function PtDataHandling({ id, body }) {
  const items = Array.isArray(body) ? body : (body ? [body] : []);
  return (
    <PtSub id={id} title="Data handling" tone="data">
      <ul className="ptc-bullets">
        {items.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </PtSub>
  );
};

/* VLE — supports body text + optional flow diagram (when the path differs) + at least one screen */
window.PtVle = function PtVle({ id, body, flow, screens }) {
  // Backward compat: accept a string as body
  const txt = typeof body === "string" || Array.isArray(body) ? body : (body && body.text);
  const _flow = flow || (body && body.flow);
  const _screens = screens || (body && body.screens);
  return (
    <PtSub id={id} title="VLE / Kiosk">
      {txt && (
        <div className="ptc-prose"><_Body body={txt} /></div>
      )}
      {_flow && (
        <div style={{ marginTop: 22 }}>
          <div className="ptc-flow">
            {_flow.map((s, i) => (
              <React.Fragment key={i}>
                <div className="ptc-flow__step"><span className="num">{i + 1}</span><span className="lbl">{s}</span></div>
                {i < _flow.length - 1 && <span className="arr">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
      {_screens && _screens.length > 0 && (
        <div style={{ marginTop: 22 }}>
          <PtFrameGrid>
            {_screens.map((s, i) => (
              <PtFrame key={i} num={`Kiosk · ${i + 1}`} name={s.name} desc={s.desc}>{s.frame}</PtFrame>
            ))}
          </PtFrameGrid>
        </div>
      )}
    </PtSub>
  );
};

window.PtChannels = function PtChannels({ id, items }) {
  return (
    <PtSub id={id} title="Channel variants">
      <div className="ptc-channels">
        {items.map((c) => (
          <div key={c.channel} className="ptc-channel">
            <h4 className="ptc-channel__h"><span className="ico">{c.ico || c.channel[0]}</span>{c.channel}</h4>
            <div className="ptc-channel__body">{c.body}</div>
          </div>
        ))}
      </div>
    </PtSub>
  );
};

window.PtOfficer = function PtOfficer({ id, body, screens }) {
  return (
    <PtSub id={id} title="Officer-facing view">
      <div className="ptc-conditional ptc-conditional--officer">
        {body && <div className="ptc-conditional__body"><_Body body={body} /></div>}
      </div>
      {screens && screens.length > 0 && (
        <div style={{ marginTop: 22 }}>
          <PtFrameGrid>
            {screens.map((s, i) => (
              <PtFrame key={i} num={`Officer · ${i + 1}`} name={s.name} desc={s.desc}>{s.frame}</PtFrame>
            ))}
          </PtFrameGrid>
        </div>
      )}
    </PtSub>
  );
};

window.PtIntegrations = function PtIntegrations({ id, items }) {
  return (
    <PtSub id={id} title="Integration dependencies" tone="data">
      <div className="ptc-integrations">
        {items.map((i) => (
          <div key={i.sys} className="ptc-integration">
            <div className="sys">{i.sys}</div>
            <div className="purpose">{i.purpose}</div>
          </div>
        ))}
      </div>
    </PtSub>
  );
};

/* Tag style matrix lifted from the Figma Tag component (node 12850:26515).
   For each colour family × tag style, the actual fill / stroke / text colour
   that the design system uses, alongside its semantic + base token names. */
const TAG_VARIANTS = {
  brand: {
    Tonal:   { fill: { color: "#DCD4FF", semantic: "Background/Brand/Primary/Soft",   base: "Colors/Primary/100" }, text: { color: "#4A2BC2", semantic: "Text/Brand/Primary/Default", base: "Colors/Primary/600" } },
    Filled:  { fill: { color: "#4A2BC2", semantic: "Background/Brand/Primary/Strong", base: "Colors/Primary/600" }, text: { color: "#FAFAFA", semantic: "Text/Neutral/Inverse",       base: "Colors/Neutral/50" } },
    Outline: { stroke: { color: "#A391FF", semantic: "Border/Brand/Primary/Default",  base: "Colors/Primary/300" }, text: { color: "#4A2BC2", semantic: "Text/Brand/Primary/Default", base: "Colors/Primary/600" } },
    Text:    { text: { color: "#4A2BC2", semantic: "Text/Brand/Primary/Default", base: "Colors/Primary/600" } },
  },
  warning: {
    Tonal:   { fill: { color: "#FFE7BF", semantic: "Background/Status/Warning/Soft",   base: "Colors/Orange/100" }, text: { color: "#AD4E00", semantic: "Text/Status/Warning/Default", base: "Colors/Orange/800" } },
    Filled:  { fill: { color: "#FA8C16", semantic: "Background/Status/Warning/Strong", base: "Colors/Orange/600" }, text: { color: "#FAFAFA", semantic: "Text/Neutral/Inverse",         base: "Colors/Neutral/50" } },
    Outline: { stroke: { color: "#FFC973", semantic: "Border/Status/Warning/Default",  base: "Colors/Orange/300" }, text: { color: "#AD4E00", semantic: "Text/Status/Warning/Default", base: "Colors/Orange/800" } },
    Text:    { text: { color: "#AD4E00", semantic: "Text/Status/Warning/Default", base: "Colors/Orange/800" } },
  },
  success: {
    Tonal:   { fill: { color: "#DDF8D8", semantic: "Background/Status/Success/Soft",   base: "Colors/Green/100" }, text: { color: "#00522C", semantic: "Text/Status/Success/Default", base: "Colors/Green/800" } },
    Filled:  { fill: { color: "#128937", semantic: "Background/Status/Success/Strong", base: "Colors/Green/600" }, text: { color: "#FAFAFA", semantic: "Text/Neutral/Inverse",         base: "Colors/Neutral/50" } },
    Outline: { stroke: { color: "#80DA88", semantic: "Border/Status/Success/Default",  base: "Colors/Green/300" }, text: { color: "#00522C", semantic: "Text/Status/Success/Default", base: "Colors/Green/800" } },
    Text:    { text: { color: "#00522C", semantic: "Text/Status/Success/Default", base: "Colors/Green/800" } },
  },
  error: {
    Tonal:   { fill: { color: "#FFECEE", semantic: "Background/Status/Error/Soft",     base: "Colors/Red/100" }, text: { color: "#8A1A16", semantic: "Text/Status/Error/Default", base: "Colors/Red/800" } },
    Filled:  { fill: { color: "#DB372D", semantic: "Background/Status/Error/Strong",   base: "Colors/Red/600" }, text: { color: "#FAFAFA", semantic: "Text/Neutral/Inverse",      base: "Colors/Neutral/50" } },
    Outline: { stroke: { color: "#FFB3AE", semantic: "Border/Status/Error/Default",    base: "Colors/Red/300" }, text: { color: "#8A1A16", semantic: "Text/Status/Error/Default", base: "Colors/Red/800" } },
    Text:    { text: { color: "#8A1A16", semantic: "Text/Status/Error/Default", base: "Colors/Red/800" } },
  },
  neutral: {
    Tonal:   { fill: { color: "#E5E5E5", semantic: "Background/Neutral/Subtle",  base: "Colors/Neutral/200" }, text: { color: "#171717", semantic: "Text/Neutral/Primary", base: "Colors/Neutral/900" } },
    Filled:  { fill: { color: "#171717", semantic: "Background/Neutral/Inverse", base: "Colors/Neutral/900" }, text: { color: "#FAFAFA", semantic: "Text/Neutral/Inverse",  base: "Colors/Neutral/50" } },
    Outline: { stroke: { color: "#D9D9D9", semantic: "Border/Neutral/Default",   base: "Colors/Neutral/300" }, text: { color: "#171717", semantic: "Text/Neutral/Primary", base: "Colors/Neutral/900" } },
    Text:    { text: { color: "#171717", semantic: "Text/Neutral/Primary", base: "Colors/Neutral/900" } },
  },
  info: {
    Tonal:   { fill: { color: "#C9F7F2", semantic: "Background/Status/Information/Soft",   base: "Colors/Cyan/100" }, text: { color: "#006D75", semantic: "Text/Status/Information/Default", base: "Colors/Cyan/800" } },
    Filled:  { fill: { color: "#13C2C2", semantic: "Background/Status/Information/Strong", base: "Colors/Cyan/600" }, text: { color: "#FAFAFA", semantic: "Text/Neutral/Inverse",            base: "Colors/Neutral/50" } },
    Outline: { stroke: { color: "#91E8E0", semantic: "Border/Status/Information/Default",  base: "Colors/Cyan/300" }, text: { color: "#006D75", semantic: "Text/Status/Information/Default", base: "Colors/Cyan/800" } },
    Text:    { text: { color: "#006D75", semantic: "Text/Status/Information/Default", base: "Colors/Cyan/800" } },
  },
};

const TAG_TYPES = ["Tonal", "Filled", "Outline", "Text"];

function PtVocabTag({ name, variant }) {
  const style = { color: variant.text.color };
  if (variant.fill) style.background = variant.fill.color;
  if (variant.stroke) {
    style.border = `1px solid ${variant.stroke.color}`;
  } else {
    style.border = "1px solid transparent"; // keeps vertical rhythm steady
  }
  if (!variant.fill && !variant.stroke) {
    style.padding = "4px 0"; // Text variant has no surface, drop horizontal padding
  }
  return <span className="ptc-vocab__tag" style={style}>{name}</span>;
}

function PtVocabSwatches({ variant, tagType }) {
  // What's worth swatching depends on the style:
  //   Tonal   → background + text (both vary per row)
  //   Filled  → background only (text is always Neutral/Inverse, fixed by the style)
  //   Outline → border + text
  //   Text    → text
  const swatches = [];
  if (variant.fill) swatches.push({ role: "Background", token: variant.fill });
  if (variant.stroke) swatches.push({ role: "Border", token: variant.stroke });
  if (tagType !== "Filled") swatches.push({ role: "Text", token: variant.text });
  return (
    <div className="ptc-vocab__swatch-pair">
      {swatches.map((s, i) => (
        <span key={i} className="ptc-vocab__chip"
              style={{ background: s.token.color }}
              data-tip={`${s.token.semantic}\n${s.token.base}`}
              aria-label={`${s.role}: ${s.token.semantic}, ${s.token.base}`} />
      ))}
    </div>
  );
}

window.PtVocab = function PtVocab({ id, items, intro }) {
  const isNewShape = items && items[0] && items[0].family;
  const [tagType, setTagType] = React.useState("Tonal");
  return (
    <PtSub id={id} title="Status vocabulary" intro={intro}>
      {isNewShape && (
        <div className="ptc-vocab-control" role="radiogroup" aria-label="Tag style">
          <span className="ptc-vocab-control__label">Tag style</span>
          <span className="ptc-vocab-control__group">
            {TAG_TYPES.map(t => (
              <button key={t} type="button" role="radio"
                aria-checked={tagType === t}
                className={"ptc-vocab-control__btn" + (tagType === t ? " is-active" : "")}
                onClick={() => setTagType(t)}>{t}</button>
            ))}
          </span>
        </div>
      )}
      {items && items.length > 0 && (
        <div className="ptc-vocab">
          <div className="ptc-vocab__row h">
            <div>Status</div><div>Colour</div><div>Meaning</div>
          </div>
          {items.map((v) => {
            if (isNewShape) {
              const variant = TAG_VARIANTS[v.family]?.[tagType];
              if (!variant) return null;
              return (
                <div key={v.name} className="ptc-vocab__row">
                  <div className="ptc-vocab__name"><PtVocabTag name={v.name} variant={variant} /></div>
                  <div><PtVocabSwatches variant={variant} tagType={tagType} /></div>
                  <div className="ptc-vocab__meaning">{v.meaning}</div>
                </div>
              );
            }
            return (
              <div key={v.name} className="ptc-vocab__row">
                <div className="ptc-vocab__name">{v.name}</div>
                <div className="ptc-vocab__swatch">
                  <i style={{ background: v.hex || v.color }}></i>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--gray-500)" }}>{v.hex || v.color}</span>
                </div>
                <div className="ptc-vocab__meaning">{v.meaning}</div>
              </div>
            );
          })}
        </div>
      )}
    </PtSub>
  );
};

/* Error & recovery flows — now screens-based (same treatment as Screens & states).
   Accepts either an array of strings (legacy) or { intro, screens, body }. */
window.PtErrorRecovery = function PtErrorRecovery({ id, body, intro, screens }) {
  const isObj = body && typeof body === "object" && !Array.isArray(body);
  const _screens = screens || (isObj ? body.screens : null);
  const _text = isObj ? body.text : (Array.isArray(body) || typeof body === "string" ? body : null);
  return (
    <PtSub id={id} title="Error & recovery">
      {_text && (
        <div style={{ marginBottom: _screens ? 22 : 0 }}>
          <ul className="ptc-bullets ptc-bullets--warn">
            {(Array.isArray(_text) ? _text : [_text]).map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
      {_screens && _screens.length > 0 && (
        <PtFrameGrid>
          {_screens.map((s, i) => (
            <PtFrame key={i} num={`Recovery · ${i + 1}`} name={s.name} desc={s.desc}>{s.frame}</PtFrame>
          ))}
        </PtFrameGrid>
      )}
    </PtSub>
  );
};

window.PtNotifTouchpoints = function PtNotifTouchpoints({ id, items }) {
  return (
    <PtSub id={id} title="Notification touchpoints">
      <div className="ptc-notify">
        {items.map((n, i) => (
          <div key={i} className="ptc-notify__row">
            <div className="ptc-notify__moment">{n.moment}</div>
            <div className="ptc-notify__channel">{n.channel}</div>
            <div className="ptc-notify__content">{n.content}</div>
          </div>
        ))}
      </div>
    </PtSub>
  );
};

/* ───── PtPatternScreens — rich screens-and-states viewer ─────
   Replaces the static PtFrameGrid for Pattern pages that ship real Figma
   screenshots. Data shape:
   {
     intro?: string,
     devices: [
       { id: 'desktop'|'mobile', label: 'Desktop'|'Mobile', layouts: [
         { id: string, label: string, screens: [
           { id: string, label: string, desc?: string, src: string }
         ]}
       ]}
     ]
   }
   UI: device toggle (Desktop / Mobile), layout selector (Column / Card /
   Full screen — only renders when more than one exists for the active device),
   carousel of screens with prev/next + dot index, screen card = bare image +
   caption (no card chrome), click image opens a fullscreen lightbox. */
window.PtPatternScreens = function PtPatternScreens({ data }) {
  const { useState, useEffect, useMemo, useRef } = React;
  const devices = (data && data.devices) || [];
  const [deviceId, setDeviceId] = useState(devices[0] ? devices[0].id : null);
  const device = devices.find((d) => d.id === deviceId) || devices[0];
  const layouts = (device && device.layouts) || [];
  const [layoutId, setLayoutId] = useState(layouts[0] ? layouts[0].id : null);

  /* Reset layout selection when device flips. */
  useEffect(() => {
    if (!layouts.length) return;
    const exists = layouts.find((l) => l.id === layoutId);
    if (!exists) setLayoutId(layouts[0].id);
  }, [deviceId]);

  const layout = layouts.find((l) => l.id === layoutId) || layouts[0];
  const screens = (layout && layout.screens) || [];

  const [index, setIndex] = useState(0);
  /* Reset carousel position when device or layout changes. */
  useEffect(() => { setIndex(0); }, [deviceId, layoutId]);

  const current = screens[index] || screens[0] || { id: "", label: "", desc: "", src: "" };
  const next = () => setIndex((i) => (i + 1) % screens.length);
  const prev = () => setIndex((i) => (i - 1 + screens.length) % screens.length);

  /* Track scroll state for the in-card screen and the lightbox screen.
     The "Scroll" hint shows only when the screen is taller than its
     container AND the user hasn't yet scrolled to the bottom. */
  const cardScrollRef = useRef(null);
  const lightboxScrollRef = useRef(null);
  const [cardScrollable, setCardScrollable] = useState(false);
  const [cardAtBottom, setCardAtBottom] = useState(false);
  const [lightboxScrollable, setLightboxScrollable] = useState(false);
  const [lightboxAtBottom, setLightboxAtBottom] = useState(false);

  /* Shared bottom-check (4px tolerance to absorb sub-pixel scroll deltas). */
  const updateScrollState = React.useCallback(() => {
    const card = cardScrollRef.current;
    if (card) {
      const ov = card.scrollHeight - card.clientHeight > 4;
      setCardScrollable(ov);
      setCardAtBottom(ov && card.scrollHeight - card.scrollTop - card.clientHeight <= 4);
    }
    const lb = lightboxScrollRef.current;
    if (lb) {
      const ov = lb.scrollHeight - lb.clientHeight > 4;
      setLightboxScrollable(ov);
      setLightboxAtBottom(ov && lb.scrollHeight - lb.scrollTop - lb.clientHeight <= 4);
    }
  }, []);

  /* Fullscreen lightbox state — clicking a screen opens the larger image. */
  const [zoomIdx, setZoomIdx] = useState(-1);
  const lightboxOpen = zoomIdx >= 0;
  const openZoom = (i) => setZoomIdx(i);
  const closeZoom = () => setZoomIdx(-1);

  /* Probe scrollability when device/layout/screen/lightbox changes.
     Reset bottom state since the new screen starts at scrollTop=0. */
  useEffect(() => {
    /* Reset scroll position so the new screen always starts at the top. */
    if (cardScrollRef.current) cardScrollRef.current.scrollTop = 0;
    if (lightboxScrollRef.current) lightboxScrollRef.current.scrollTop = 0;
    updateScrollState();
    const t1 = setTimeout(updateScrollState, 80);
    const t2 = setTimeout(updateScrollState, 320);
    window.addEventListener("resize", updateScrollState);
    return () => { clearTimeout(t1); clearTimeout(t2); window.removeEventListener("resize", updateScrollState); };
  }, [current.src, deviceId, layoutId, lightboxOpen, zoomIdx, updateScrollState]);

  /* Keyboard nav inside the lightbox. */
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") { e.preventDefault(); closeZoom(); }
      if (e.key === "ArrowRight") { e.preventDefault(); setZoomIdx((i) => (i + 1) % screens.length); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); setZoomIdx((i) => (i - 1 + screens.length) % screens.length); }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.removeProperty("overflow"); };
  }, [lightboxOpen, screens.length]);

  const isMobileDevice = device && device.id === "mobile";

  if (!device) return null;

  const DeviceIcon = ({ kind, active }) => {
    const stroke = active ? "currentColor" : "currentColor";
    if (kind === "mobile") {
      return (
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="7" y="2.5" width="10" height="19" rx="2.2"/><path d="M11 18.5h2"/>
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>
      </svg>
    );
  };

  return (
    <div className="ptc-pscreens">
      {/* Controls row — device toggle (always) + layout selector (when > 1) */}
      <div className="ptc-pscreens-controls">
        <div className="ptc-pscreens-devices" role="tablist" aria-label="Device">
          {devices.map((d) => (
            <button
              key={d.id}
              type="button"
              role="tab"
              aria-selected={d.id === deviceId}
              className={"ptc-pscreens-device" + (d.id === deviceId ? " is-active" : "")}
              onClick={() => setDeviceId(d.id)}
            >
              <DeviceIcon kind={d.id} active={d.id === deviceId} />
              <span>{d.label}</span>
            </button>
          ))}
        </div>
        {layouts.length > 1 && (
          <div className="ptc-pscreens-layouts" role="radiogroup" aria-label="Layout">
            <span className="ptc-pscreens-layout-label">Layout</span>
            {layouts.map((l) => (
              <button
                key={l.id}
                type="button"
                role="radio"
                aria-checked={l.id === layoutId}
                className={"ptc-pscreens-layout-chip" + (l.id === layoutId ? " is-active" : "")}
                onClick={() => setLayoutId(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Carousel: one persistent device card. Prev/Next controls live
          INSIDE the framed card so the frame + mock never re-mount on swap —
          only the screen image src + the caption text change. */}
      <div className={"ptc-pscreens-carousel" + (isMobileDevice ? " is-mobile" : " is-desktop")}>
        <figure className="ptc-pscreens-screen is-active">
          <button
            type="button"
            className="ptc-pscreens-img-btn"
            onClick={() => openZoom(index)}
            aria-label={"Open " + (current.label || ("screen " + (index + 1))) + " in full screen"}
          >
            <span className={"ptc-device-frame ptc-device-frame--" + (isMobileDevice ? "mobile" : "desktop")} aria-hidden="true">
              <span className={"ptc-device ptc-device--" + (isMobileDevice ? "mobile" : "desktop")}>
                {/* The screen image lives inside a scrollable container, sized to
                    the device's transparent cutout. When the screen content is
                    taller than the cutout, the user can scroll it inside the
                    mock. mousedown.stopPropagation lets the wheel/touch scroll
                    happen without the parent button capturing it. */}
                <span
                  className="ptc-device-screen-scroll"
                  ref={cardScrollRef}
                  /* Click bubbles up so tapping the screen opens the
                     fullscreen lightbox just like clicking the surrounding
                     frame. Only wheel events are stopped, so wheel-scrolling
                     inside the device doesn't scroll the page. onScroll
                     updates the at-bottom state to hide the scroll hint
                     when the user reaches the end. */
                  onWheel={(e) => e.stopPropagation()}
                  onScroll={updateScrollState}
                >
                  <img
                    className="ptc-device-screen-img"
                    key={current.id || index}
                    src={current.src}
                    alt=""
                    draggable="false"
                    onLoad={updateScrollState}
                  />
                </span>
                <img
                  className="ptc-device-mock"
                  src={"assets/images/Device mocks/" + (isMobileDevice ? "iPhone 17 - White - Portrait.png" : "MacBook Air M5 15-inch Silver.png")}
                  alt={current.label || ""}
                  draggable="false"
                />
                {/* The in-card mock is non-scrolling; scrolling lives in the lightbox.
                    The hint pill is intentionally not rendered here. */}
              </span>
            </span>

            {/* Prev / Next controls overlaid INSIDE the frame, vertically centred.
                e.stopPropagation prevents the button click from also opening
                the lightbox. */}
            {screens.length > 1 && (
              <span
                className="ptc-pscreens-nav ptc-pscreens-nav--prev"
                role="button"
                tabIndex={0}
                aria-label="Previous screen"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); prev(); } }}
              >
                <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m10 3-5 5 5 5"/>
                </svg>
              </span>
            )}
            {screens.length > 1 && (
              <span
                className="ptc-pscreens-nav ptc-pscreens-nav--next"
                role="button"
                tabIndex={0}
                aria-label="Next screen"
                onClick={(e) => { e.stopPropagation(); next(); }}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); next(); } }}
              >
                <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m6 3 5 5-5 5"/>
                </svg>
              </span>
            )}

            <span className="ptc-pscreens-zoom-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>
              </svg>
              Click to expand
            </span>
          </button>
          <figcaption className="ptc-pscreens-meta">
            <span className="ptc-pscreens-num">Screen {index + 1} of {screens.length}</span>
            <h4 className="ptc-pscreens-name">{current.label}</h4>
            {current.desc && <p className="ptc-pscreens-desc">{current.desc}</p>}
          </figcaption>
        </figure>
      </div>

      {/* Dot index */}
      {screens.length > 1 && (
        <div className="ptc-pscreens-dots" role="tablist" aria-label="Screens">
          {screens.map((s, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={(s.label || ("Screen " + (i + 1)))}
              className={"ptc-pscreens-dot" + (i === index ? " is-active" : "")}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}

      {/* Fullscreen lightbox */}
      {lightboxOpen && (
        <div
          className={"ptc-pscreens-lightbox" + (isMobileDevice ? " is-mobile" : "")}
          role="dialog"
          aria-modal="true"
          aria-label={(screens[zoomIdx] && screens[zoomIdx].label) || "Screen"}
          onClick={(e) => { if (e.target === e.currentTarget) closeZoom(); }}
        >
          <button type="button" className="ptc-pscreens-lightbox-close" onClick={closeZoom} aria-label="Close fullscreen">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18"/>
            </svg>
          </button>
          {screens.length > 1 && (
            <button
              type="button"
              className="ptc-pscreens-lightbox-nav prev"
              onClick={() => setZoomIdx((i) => (i - 1 + screens.length) % screens.length)}
              aria-label="Previous screen"
            >
              <svg viewBox="0 0 16 16" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m10 3-5 5 5 5"/>
              </svg>
            </button>
          )}
          <figure className={"ptc-pscreens-lightbox-figure" + (isMobileDevice ? " is-mobile" : " is-desktop")}>
            <div
              className="ptc-pscreens-lightbox-scroll"
              ref={lightboxScrollRef}
              onClick={(e) => e.stopPropagation()}
              onWheel={(e) => e.stopPropagation()}
              onScroll={updateScrollState}
            >
              <img
                src={screens[zoomIdx].src}
                alt={screens[zoomIdx].label || ""}
                onLoad={updateScrollState}
              />
            </div>
            {lightboxScrollable && !lightboxAtBottom && (
              <span className="ptc-pscreens-lightbox-scroll-hint" aria-hidden="true">
                <span className="ptc-device-scroll-arrow">
                  <svg viewBox="0 0 14 18" width="12" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 2v14M2 11l5 5 5-5"/>
                  </svg>
                </span>
                Scroll
              </span>
            )}
            <figcaption>
              <strong>{screens[zoomIdx].label}</strong>
              {screens[zoomIdx].desc && <span>{screens[zoomIdx].desc}</span>}
            </figcaption>
          </figure>
          {screens.length > 1 && (
            <button
              type="button"
              className="ptc-pscreens-lightbox-nav next"
              onClick={() => setZoomIdx((i) => (i + 1) % screens.length)}
              aria-label="Next screen"
            >
              <svg viewBox="0 0 16 16" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m6 3 5 5-5 5"/>
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

/* ───── PtPatternFull — renders a pattern from a data object ───── */
window.PtPatternFull = function PtPatternFull({ p }) {
  const id = p.id;
  return (
    <PtPattern id={id} num={p.num} title={p.title} lede={p.lede}>
      {p.whenToUse && <PtWhenToUse id={`${id}-when`} items={p.whenToUse} notFor={p.whenNotFor} />}
      {p.flow && <PtFlow id={`${id}-flow`} steps={p.flow} />}
      {p.screensSet && (
        <PtSub id={`${id}-screens`} title="Screens & states" intro={p.screensIntro || p.screensSet.intro}>
          <PtPatternScreens data={p.screensSet} />
        </PtSub>
      )}
      {!p.screensSet && p.screens && (
        <PtSub id={`${id}-screens`} title="Screens & states" intro={p.screensIntro}>
          <PtFrameGrid>{p.screens.map((s, i) => (
            <PtFrame key={i} num={`Screen ${i + 1}`} name={s.name} desc={s.desc}>{s.frame}</PtFrame>
          ))}</PtFrameGrid>
        </PtSub>
      )}
      {p.components && <PtComponents id={`${id}-components`} items={p.components} />}
      {p.behaviour && <PtBehaviour id={`${id}-behaviour`} items={p.behaviour} />}
      {(p.edgeCases || p.edgeCaseScreens) && <PtEdges id={`${id}-edges`} items={p.edgeCases} screens={p.edgeCaseScreens} />}
      {p.doDont && <PtDoDont id={`${id}-dodont`} pairs={p.doDont} />}
      {p.a11y && <PtA11y id={`${id}-a11y`} items={p.a11y} />}
      {p.related && <PtRelated id={`${id}-related`} items={p.related} />}

      {p.compliance && <PtCompliance id={`${id}-compliance`} law={p.compliance.law} body={p.compliance.body} />}
      {p.dataHandling && <PtDataHandling id={`${id}-data`} body={p.dataHandling} />}
      {p.vle && <PtVle id={`${id}-vle`} body={p.vle} />}
      {p.channels && <PtChannels id={`${id}-channels`} items={p.channels} />}
      {p.officer && (() => {
        const o = p.officer;
        const isObj = o && typeof o === "object" && !Array.isArray(o);
        return <PtOfficer id={`${id}-officer`} body={isObj ? o.body : o} screens={isObj ? o.screens : undefined} />;
      })()}
      {p.integrations && <PtIntegrations id={`${id}-integrations`} items={p.integrations} />}
      {p.statusVocab && (() => {
        const sv = p.statusVocab;
        const isArr = Array.isArray(sv);
        return <PtVocab id={`${id}-vocab`}
          items={isArr ? sv : sv.items}
          intro={isArr ? null : sv.intro} />;
      })()}
      {p.errorRecovery && <PtErrorRecovery id={`${id}-recovery`} body={p.errorRecovery} />}
      {p.notifications && <PtNotifTouchpoints id={`${id}-notify`} items={p.notifications} />}
    </PtPattern>
  );
};

/* ───── Build sidebar subs from a pattern data object ───── */
window.PtPatternSubs = function PtPatternSubs(p) {
  const out = [];
  if (p.whenToUse)     out.push({ id: `${p.id}-when`,        label: "When to use" });
  if (p.flow)          out.push({ id: `${p.id}-flow`,        label: "Flow diagram" });
  if (p.screens)       out.push({ id: `${p.id}-screens`,     label: "Screens & states" });
  if (p.components)    out.push({ id: `${p.id}-components`,  label: "Components used" });
  if (p.behaviour)     out.push({ id: `${p.id}-behaviour`,   label: "Behaviour & interaction" });
  if (p.edgeCases)     out.push({ id: `${p.id}-edges`,       label: "Edge cases" });
  if (p.doDont)        out.push({ id: `${p.id}-dodont`,      label: "Do & don't" });
  if (p.a11y)          out.push({ id: `${p.id}-a11y`,        label: "Accessibility" });
  if (p.related)       out.push({ id: `${p.id}-related`,     label: "Related patterns" });
  if (p.compliance)    out.push({ id: `${p.id}-compliance`,  label: "Compliance" });
  if (p.dataHandling)  out.push({ id: `${p.id}-data`,        label: "Data handling" });
  if (p.vle)           out.push({ id: `${p.id}-vle`,         label: "VLE / kiosk variant" });
  if (p.channels)      out.push({ id: `${p.id}-channels`,    label: "Channel variants" });
  if (p.officer)       out.push({ id: `${p.id}-officer`,     label: "Officer-facing view" });
  if (p.integrations)  out.push({ id: `${p.id}-integrations`,label: "Integrations" });
  if (p.statusVocab)   out.push({ id: `${p.id}-vocab`,       label: "Status vocabulary" });
  if (p.errorRecovery) out.push({ id: `${p.id}-recovery`,    label: "Error & recovery" });
  if (p.notifications) out.push({ id: `${p.id}-notify`,      label: "Notifications" });
  return out;
};

/* ───── PtStickyBar — pill-shaped sticky header that tracks the active
   pattern as the user scrolls through the page. Shows: prefix · title
   + View code / View Storybook / View Design link pills.
   Active pattern switches when the next pattern's heading crosses the
   25%-from-top probe line (user spec: "heading is at least 75% from bottom"). */
window.PtStickyBar = function PtStickyBar({ patterns, activeSlug }) {
  const { useState, useEffect, useRef } = React;
  const [activeIdx, setActiveIdx] = useState(-1);
  const [catOpen, setCatOpen] = useState(false);
  const [patOpen, setPatOpen] = useState(false);
  const catRef = useRef(null);
  const patRef = useRef(null);

  useEffect(() => {
    if (!patterns || patterns.length === 0) return;
    const onScroll = () => {
      const probe = window.innerHeight * 0.25; // 25% from top = 75% from bottom
      let cur = -1;
      patterns.forEach((p, i) => {
        const el = document.getElementById(p.id);
        if (!el) return;
        const head = el.querySelector(".ptc-pat-head") || el;
        const top = head.getBoundingClientRect().top;
        if (top <= probe) cur = i;
      });
      setActiveIdx(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [patterns]);

  // Click-outside to close either dropdown.
  useEffect(() => {
    if (!catOpen && !patOpen) return;
    const onDocClick = (e) => {
      if (catOpen && catRef.current && !catRef.current.contains(e.target)) setCatOpen(false);
      if (patOpen && patRef.current && !patRef.current.contains(e.target)) setPatOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") { setCatOpen(false); setPatOpen(false); } };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [catOpen, patOpen]);

  if (!patterns || patterns.length === 0) return null;
  const visible = activeIdx >= 0;
  const active = visible ? patterns[activeIdx] : null;

  const cats = (typeof window !== "undefined" && window.PT_CATEGORIES) || [];
  const activeCat = cats.find((c) => c.slug === activeSlug);

  // Patterns carry a num like "PATTERN · 1.1" because the in-page section
  // heading wants the full prefix. The sticky bar just needs "1.1".
  const stripPattern = (n) => (n || "").replace(/^PATTERN\s*·\s*/i, "");

  const onPickPattern = (id) => {
    setPatOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const Caret = (
    <svg className="ptc-sticky-caret" viewBox="0 0 16 16" width="12" height="12"
         fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
         aria-hidden="true">
      <path d="m4 6 4 4 4-4"/>
    </svg>
  );

  // Icons reused from the hero link pills for visual continuity.
  const GitHubIcon = (
    <span className="ptc-meta-ico" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.3724 0 0 5.3808 0 12.0204C0 17.3304 3.438 21.8364 8.2068 23.4252C8.8068 23.5356 9.0252 23.1648 9.0252 22.8456C9.0252 22.5612 9.0156 21.804 9.0096 20.802C5.6712 21.528 4.9668 19.1904 4.9668 19.1904C4.422 17.8008 3.6348 17.4312 3.6348 17.4312C2.5452 16.6872 3.7176 16.7016 3.7176 16.7016C4.9212 16.7856 5.5548 17.94 5.5548 17.94C6.6252 19.776 8.364 19.2456 9.0468 18.9384C9.1572 18.162 9.4668 17.6328 9.81 17.3328C7.146 17.0292 4.344 15.9972 4.344 11.3916C4.344 10.08 4.812 9.006 5.5788 8.166C5.4552 7.8624 5.0436 6.6396 5.6964 4.986C5.6964 4.986 6.7044 4.662 8.9964 6.2172C9.97532 5.95022 10.9853 5.81423 12 5.8128C13.02 5.8176 14.046 5.9508 15.0048 6.2172C17.2956 4.662 18.3012 4.9848 18.3012 4.9848C18.9564 6.6396 18.5436 7.8624 18.4212 8.166C19.1892 9.006 19.6548 10.08 19.6548 11.3916C19.6548 16.0092 16.848 17.0256 14.1756 17.3232C14.6064 17.694 14.9892 18.4272 14.9892 19.5492C14.9892 21.1548 14.9748 22.452 14.9748 22.8456C14.9748 23.1672 15.1908 23.5416 15.8004 23.424C18.19 22.6225 20.2672 21.0904 21.7386 19.0441C23.2099 16.9977 24.001 14.5408 24 12.0204C24 5.3808 18.6264 0 12 0Z" fill="currentColor"/>
      </svg>
    </span>
  );
  const StorybookIcon = (
    <span className="ptc-meta-ico" style={{ background: "#FF4785", color: "#fff" }} aria-hidden="true">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
        <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"/>
      </svg>
    </span>
  );
  const FigmaIcon = (
    <span className="ptc-meta-ico fig" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.00006 24C10.2081 24 12.0001 22.208 12.0001 20V15.9999H8.00006C5.79205 15.9999 4 17.792 4 20C4 22.208 5.79205 24 8.00006 24Z" fill="#0ACF83"/>
        <path d="M4 12C4 9.79197 5.79205 7.99994 8.00006 7.99994H12.0001V15.9999H8.00006C5.79205 16 4 14.208 4 12Z" fill="#A259FF"/>
        <path d="M4 4.00003C4 1.79203 5.79205 0 8.00006 0H12.0001V7.99997H8.00006C5.79205 7.99997 4 6.20803 4 4.00003Z" fill="#F24E1E"/>
        <path d="M12 0H16.0001C18.2081 0 20.0001 1.79203 20.0001 4.00003C20.0001 6.20803 18.2081 7.99997 16.0001 7.99997H12V0Z" fill="#FF7262"/>
        <path d="M20.0001 12C20.0001 14.208 18.2081 16 16.0001 16C13.792 16 12 14.208 12 12C12 9.79197 13.792 7.99994 16.0001 7.99994C18.2081 7.99994 20.0001 9.79197 20.0001 12Z" fill="#1ABCFE"/>
      </svg>
    </span>
  );

  return (
    <div className={"ptc-sticky-bar" + (visible ? " is-visible" : "")} aria-hidden={!visible}>
      {/* Two nested grids mirror the page layout (.ptc-page outer grid +
          .ptc-layout inner grid) so the pill aligns exactly with .ptc-main. */}
      <div className="ptc-sticky-outer">
        <div className="ptc-sticky-inner">
          <div className="ptc-sticky-pill">
            {/* Desktop view: static label */}
            <div className="ptc-sticky-id">
              {active && <span className="ptc-sticky-num">{active.num}</span>}
              {active && <span className="ptc-sticky-title">{active.title}</span>}
            </div>

            {/* Mobile/tablet view: two dropdowns. Hidden on desktop via CSS. */}
            <div className="ptc-sticky-pickers">
              <div className={"ptc-sticky-dd cat" + (catOpen ? " is-open" : "")} ref={catRef}>
                <button type="button" className="ptc-sticky-dd__trigger"
                        aria-haspopup="listbox" aria-expanded={catOpen}
                        onClick={() => { setCatOpen((v) => !v); setPatOpen(false); }}>
                  {activeCat && <span className="ptc-sticky-dd__num">{activeCat.num}</span>}
                  <span className="ptc-sticky-dd__label">{activeCat ? activeCat.name : "Category"}</span>
                  {Caret}
                </button>
                {catOpen && (
                  <ul className="ptc-sticky-dd__menu" role="listbox">
                    {cats.map((c) => (
                      <li key={c.slug} role="option" aria-selected={c.slug === activeSlug}>
                        <a href={c.href} className={c.slug === activeSlug ? "is-active" : ""}>
                          <span className="ptc-sticky-dd__num">{c.num}</span>
                          <span>{c.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className={"ptc-sticky-dd pat" + (patOpen ? " is-open" : "")} ref={patRef}>
                <button type="button" className="ptc-sticky-dd__trigger"
                        aria-haspopup="listbox" aria-expanded={patOpen}
                        onClick={() => { setPatOpen((v) => !v); setCatOpen(false); }}>
                  <span className="ptc-sticky-dd__num">{active ? stripPattern(active.num) : ""}</span>
                  <span className="ptc-sticky-dd__label">{active ? active.title : "Pattern"}</span>
                  {Caret}
                </button>
                {patOpen && (
                  <ul className="ptc-sticky-dd__menu" role="listbox">
                    {patterns.map((p, i) => (
                      <li key={p.id} role="option" aria-selected={i === activeIdx}>
                        <button type="button"
                                className={i === activeIdx ? "is-active" : ""}
                                onClick={() => onPickPattern(p.id)}>
                          <span className="ptc-sticky-dd__num">{stripPattern(p.num)}</span>
                          <span>{p.title}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="ptc-sticky-links">
              <a className="ptc-meta-pill" href="#" onClick={(e) => e.preventDefault()}>
                {GitHubIcon}<span>View code</span>
              </a>
              <a className="ptc-meta-pill" href="https://storybook.ux4g.gov.in" target="_blank" rel="noreferrer">
                {StorybookIcon}<span>View Storybook</span>
              </a>
              <a className="ptc-meta-pill" href="#" onClick={(e) => e.preventDefault()}>
                {FigmaIcon}<span>View Design</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.PtFrameGrid = function PtFrameGrid({ children }) {
  return <div className="ptc-frames">{children}</div>;
};

window.PtFrame = function PtFrame({ num, name, desc, children }) {
  return (
    <article className="ptc-frame">
      <div className="ptc-frame__stage">{children}</div>
      <div className="ptc-frame__body">
        <div className="ptc-frame__num">{num}</div>
        <h4 className="ptc-frame__name">{name}</h4>
        {desc && <p className="ptc-frame__desc">{desc}</p>}
      </div>
    </article>
  );
};

window.PtMeta = function PtMeta({ components, edges }) {
  return (
    <div className="ptc-meta-grid">
      <div className="ptc-meta">
        <div className="ptc-meta-h">Components used</div>
        <div className="ptc-tags">
          {components.map((c) => <span className="ptc-tag" key={c}>{c}</span>)}
        </div>
      </div>
      <div className="ptc-meta ptc-meta--edges">
        <div className="ptc-meta-h">Edge cases · States</div>
        <ul>
          {edges.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      </div>
    </div>
  );
};

/* ───────── Mock UI fragments — composable bits for stage previews ─────────
   These build small device-agnostic screens with real UX4G aesthetics. */
window.PtMock = function PtMock({ children, variant, style }) {
  const cls = "ptc-mock" + (variant ? ` ptc-mock--${variant}` : "");
  return (
    <div className={cls} style={style}>
      <div className="ptc-mock__body">{children}</div>
    </div>
  );
};

window.MH = function MH({ children }) { return <div className="ptc-mock__head">{children}</div>; };
window.MS = function MS({ children }) { return <div className="ptc-mock__sub">{children}</div>; };
window.MIn = function MIn({ label, active }) {
  return <div className={"ptc-mock__input" + (active ? " ptc-mock__input--active" : "")}>{label}</div>;
};
window.MBtn = function MBtn({ children, kind }) {
  const cls = "ptc-mock__btn" + (kind ? ` ptc-mock__btn--${kind}` : "");
  return <div className={cls}>{children}</div>;
};
window.MAlert = function MAlert({ kind, icon, children }) {
  const ic = icon || ({ info: "i", warn: "!", error: "!", success: "✓" })[kind || "info"];
  return (
    <div className={`ptc-mock__alert ptc-mock__alert--${kind || "info"}`}>
      <span className="ico">{ic}</span>
      <span>{children}</span>
    </div>
  );
};
window.MOtp = function MOtp({ pattern }) {
  // pattern: array of {v, state} e.g. [{v:"4",state:"f"}, ...]
  return (
    <div className="ptc-mock__otp">
      {pattern.map((b, i) => (
        <i key={i} className={b.state || ""}>{b.v || ""}</i>
      ))}
    </div>
  );
};
window.MChip = function MChip({ kind, children }) {
  const cls = "ptc-mock__chip" + (kind ? ` ptc-mock__chip--${kind}` : "");
  return <span className={cls}>{children}</span>;
};
window.MRow = function MRow({ children, style }) {
  return <div className="ptc-mock__row" style={style}>{children}</div>;
};
window.MIcon = function MIcon({ children, color }) {
  return <span className="ptc-mock__icon" style={color ? { background: color, color: "#fff" } : null}>{children}</span>;
};
window.MProg = function MProg({ pct, color }) {
  return (
    <div className="ptc-mock__bar-prog">
      <i style={{ width: `${pct}%`, background: color || undefined }}></i>
    </div>
  );
};
window.MDiv = function MDiv() { return <div className="ptc-mock__divider"></div>; };
window.MLabel = function MLabel({ children }) { return <div className="ptc-mock__label">{children}</div>; };
window.MCenter = function MCenter({ children }) { return <div className="ptc-mock__center">{children}</div>; };
window.MCheck = function MCheck({ color }) {
  return <div className="ptc-mock__check" style={color ? { background: color } : null}>✓</div>;
};
