/* global React, ReactDOM */
const { useState, useEffect, useRef, useCallback } = React;

function useToasts() {
  const [toasts, setToasts] = useState([]);
  const push = useCallback((msg) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2400);
  }, []);
  return { toasts, push };
}
function Toasts({ items }) {
  return (
    <div className="toast-stack">
      {items.map((t) => (
        <div className="toast" key={t.id}>
          <span className="t-mark">i</span>
          <span>{t.msg}</span>
        </div>
      ))}
    </div>
  );
}
function Navbar({ onStub }) {
  const links = ["Foundations", "Fundamentals", "Components", "Patterns"];
  return (
    <SiteNavbar />
  );
}

const SECTIONS = [
  { id: "what-it-means", label: "What accessibility means here" },
  { id: "who-benefits", label: "Who benefits" },
  { id: "by-default", label: "What UX4G does by default" },
  { id: "writing", label: "Writing for accessibility" },
  { id: "testing", label: "Testing and checking" },
  { id: "mistakes", label: "Common mistakes" },
];

function Sidebar({ active }) {
  return (
    <aside className="cd-side">
      <p className="side-label">On this page</p>
      <ul>
        {SECTIONS.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`} className={active === s.id ? "active" : ""}>{s.label}</a>
          </li>
        ))}
        <li className="divider" aria-hidden="true"></li>
        <li><a className="ext" href="#storybook">For developers</a></li>
      </ul>
    </aside>
  );
}

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-140px 0px -55% 0px", threshold: [0, 0.1] });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* ───────── Benefits cell ───────── */
function Benefit({ num, name, text }) {
  return (
    <div className="benefit-cell">
      <span className="b-num">{num}</span>
      <h3 className="b-name">{name}</h3>
      <div className="b-rule"></div>
      <p className="b-text">{text}</p>
    </div>
  );
}

function App() {
  const { toasts, push } = useToasts();
  const stub = (n) => push(`${n}, page coming soon`);
  const active = useScrollSpy(SECTIONS.map((s) => s.id));

  return (
    <>
      <Navbar onStub={stub} />
      <main className="cd-page a11y-page">
        <section className="fu-header">
          <div className="container">
            <div className="fu-crumb">
              <a href="index.html">Home</a>
              <span className="sep">/</span>
              <a href="UX4G Fundamentals.html">Fundamentals</a>
              <span className="sep">/</span>
              <span className="current">Accessibility</span>
            </div>
            <div className="fu-title-row">
              <h1 className="fu-h">Accessibility</h1>
              <p className="fu-desc">
                UX4G is built so that every citizen, regardless of ability, device, or familiarity with technology, can use government digital services successfully.
              </p>
            </div>
          </div>
        </section>

        <div className="cd-layout">
          <div className="cd-main">
            {/* 1, What it means */}
            <section id="what-it-means" className="cd-section">
              <div className="cd-section-num">01 · Framing</div>
              <h2 className="cd-section-title">What accessibility means here</h2>
              <p className="cd-lede">
                Accessibility in UX4G is not a compliance checkbox, it is a design decision made at every level, from colour contrast in Foundations to keyboard navigation in every component. The work is built into the system so that teams using UX4G inherit it without having to think about it.
              </p>
              <p className="cd-lede">
                India's government services are used by citizens with visual, motor, cognitive, and situational impairments, and by millions using low-cost devices, slow networks, and shared phones. Accessibility decisions in UX4G account for all of these, not just screen reader users.
              </p>
            </section>

            {/* 2, Who benefits */}
            <section id="who-benefits" className="cd-section">
              <div className="cd-section-num">02 · People</div>
              <h2 className="cd-section-title">Accessibility helps more people than you think</h2>
              <p className="cd-section-lede">
                The list below is not edge cases. It is the population of citizens who routinely use Indian government services, every team should be able to picture each of them.
              </p>
              <div className="benefit-grid">
                <Benefit num="01" name="Low vision"
                  text="Relies on sufficient contrast and scalable text to read form labels and status messages." />
                <Benefit num="02" name="Motor impairment"
                  text="Navigates entirely by keyboard or switch device, never uses a mouse." />
                <Benefit num="03" name="Cognitive load"
                  text="Benefits from clear labels, simple language, and consistent layouts that reduce memory demands." />
                <Benefit num="04" name="First-time smartphone user"
                  text="Needs large tap targets, clear affordances, and error messages that explain what went wrong." />
                <Benefit num="05" name="Slow connection"
                  text="Needs meaningful loading states, offline handling, and content that doesn't depend on images loading." />
                <Benefit num="06" name="Shared device"
                  text="May be using a public kiosk or a family member's phone, session management and privacy matter more." />
              </div>
            </section>

            {/* 3, By default */}
            <section id="by-default" className="cd-section">
              <div className="cd-section-num">03 · Defaults</div>
              <h2 className="cd-section-title">What you get without any extra work</h2>
              <p className="cd-section-lede">
                Use UX4G components as documented and these accessibility properties are already in place. No additional configuration required.
              </p>
              <div className="default-grid">
                <div className="default-card">
                  <div className="d-cap">DEFAULT · 01</div>
                  <h3>Colour contrast</h3>
                  <p>Every colour combination in the palette meets WCAG 2.1 AA. Primary #6A4EFF on white passes. Amber #FFA827 is never used as text on white.</p>
                  <div className="acontrast-row">
                    <span className="swatch-demo s-primary">Submit application <span className="ratio">7.4 : 1</span></span>
                    <span className="swatch-demo s-on-tint">Save draft <span className="ratio">5.1 : 1</span></span>
                  </div>
                </div>
                <div className="default-card">
                  <div className="d-cap">DEFAULT · 02</div>
                  <h3>Keyboard navigation</h3>
                  <p>Every interactive component works without a mouse. Focus states are visible and use the UX4G Focus Ring component, with a 2px violet ring at 3px offset.</p>
                  <div className="acontrast-row" style={{ marginTop: 22 }}>
                    <button className="btn-primary-real btn-m state-focus">Continue</button>
                    <span className="t-kbd">Tab</span>
                    <span className="t-kbd">Shift + Tab</span>
                    <span className="t-kbd">Enter</span>
                  </div>
                </div>
                <div className="default-card">
                  <div className="d-cap">DEFAULT · 03</div>
                  <h3>Touch targets</h3>
                  <p>All interactive elements meet the 44×44px minimum. Especially important on low-cost devices with less precise touch input.</p>
                  <div className="acontrast-row" style={{ marginTop: 22, alignItems: "flex-end" }}>
                    <div style={{ position: "relative", width: 44, height: 44, border: "1.5px dashed #6A4EFF", borderRadius: 8, display: "grid", placeItems: "center", background: "rgba(106,78,255,0.06)" }}>
                      <div style={{ width: 24, height: 24, background: "#6A4EFF", borderRadius: 4 }}></div>
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--gray-500)", lineHeight: 1.4 }}>
                      44 × 44px<br/>min. tap area
                    </div>
                  </div>
                </div>
                <div className="default-card">
                  <div className="d-cap">DEFAULT · 04</div>
                  <h3>Plain language</h3>
                  <p>Component labels, error messages, and status text are written in clear, direct language, tested against the needs of low-literacy users.</p>
                  <div className="acontrast-row" style={{ marginTop: 22 }}>
                    <div className="errdemo good"><span className="ico">✓</span>Enter your 10-digit mobile number to receive an OTP.</div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4, Writing */}
            <section id="writing" className="cd-section">
              <div className="cd-section-num">04 · Language</div>
              <h2 className="cd-section-title">Writing for accessibility</h2>
              <p className="cd-section-lede">
                Words do more work than visuals when it comes to accessibility. These four principles apply to every label, error, and status message in a UX4G service.
              </p>

              <div className="dd-pair">
                <div className="dd-card do">
                  <div className="dd-label"><span>✓</span> Do</div>
                  <div className="dd-stage">
                    <div className="errdemo good" style={{ maxWidth: 320 }}>
                      <span className="ico">!</span>
                      Enter a valid 10-digit mobile number.
                    </div>
                  </div>
                  <div className="dd-rule">Errors say what went wrong and how to fix it.</div>
                </div>
                <div className="dd-card dont">
                  <div className="dd-label"><span>✕</span> Don't</div>
                  <div className="dd-stage">
                    <div className="errdemo bad" style={{ maxWidth: 320 }}>
                      <span className="ico">!</span>
                      Invalid input.
                    </div>
                  </div>
                  <div className="dd-rule">Vague errors leave citizens stuck without a next step.</div>
                </div>
              </div>

              <div className="dd-pair">
                <div className="dd-card do">
                  <div className="dd-label"><span>✓</span> Do</div>
                  <div className="dd-stage">
                    <button className="btn-primary-real btn-m">Submit application</button>
                    <button className="btn-ghost-real btn-m">Verify identity</button>
                  </div>
                  <div className="dd-rule">Buttons describe the action they trigger.</div>
                </div>
                <div className="dd-card dont">
                  <div className="dd-label"><span>✕</span> Don't</div>
                  <div className="dd-stage">
                    <button className="btn-primary-real btn-m">Submit</button>
                    <button className="btn-ghost-real btn-m">OK</button>
                  </div>
                  <div className="dd-rule">"Submit", "OK", "Click here" lose meaning out of context.</div>
                </div>
              </div>

              <div className="dd-pair">
                <div className="dd-card do">
                  <div className="dd-label"><span>✓</span> Do</div>
                  <div className="dd-stage" style={{ flexDirection: "column", alignItems: "flex-start", gap: 6 }}>
                    <span className="statusdemo">Under review</span>
                    <div className="statusline">Your application is under review.<br/><span className="meta">Expected decision by 20 Apr.</span></div>
                  </div>
                  <div className="dd-rule">Status messages explain the situation, not just the state.</div>
                </div>
                <div className="dd-card dont">
                  <div className="dd-label"><span>✕</span> Don't</div>
                  <div className="dd-stage">
                    <span className="statusdemo">Under review</span>
                  </div>
                  <div className="dd-rule">A status badge alone leaves citizens guessing what comes next.</div>
                </div>
              </div>

              <div className="dd-pair">
                <div className="dd-card do">
                  <div className="dd-label"><span>✓</span> Do</div>
                  <div className="dd-stage">
                    <div className="errdemo good" style={{ maxWidth: 360 }}>
                      <span className="ico">i</span>
                      Aadhaar number must be 12 digits. Spaces and dashes are fine.
                    </div>
                  </div>
                  <div className="dd-rule">Simple, direct sentences in plain Hindi or English.</div>
                </div>
                <div className="dd-card dont">
                  <div className="dd-label"><span>✕</span> Don't</div>
                  <div className="dd-stage">
                    <div className="errdemo bad" style={{ maxWidth: 360 }}>
                      <span className="ico">i</span>
                      The unique identification number furnished is non-conformant with the prescribed numeric standard.
                    </div>
                  </div>
                  <div className="dd-rule">Bureaucratic phrasing is a barrier, not a courtesy.</div>
                </div>
              </div>
            </section>

            {/* 5, Testing */}
            <section id="testing" className="cd-section">
              <div className="cd-section-num">05 · Practice</div>
              <h2 className="cd-section-title">How to check your work</h2>
              <p className="cd-section-lede">
                Four checks any designer or programme officer can run on their own screen, before involving an auditor.
              </p>
              <div className="test-list">
                <div className="test-row">
                  <span className="t-num">01</span>
                  <div className="t-body">
                    <strong>Tab through your screen</strong>
                    <span>Can you reach every interactive element using only the Tab key? Is the focus order logical from top to bottom?</span>
                  </div>
                  <span className="t-kbd">Tab</span>
                </div>
                <div className="test-row">
                  <span className="t-num">02</span>
                  <div className="t-body">
                    <strong>Zoom to 200%</strong>
                    <span>Does the layout still work? Does text stay readable? Do buttons remain tappable without horizontal scrolling?</span>
                  </div>
                  <span className="t-kbd">Ctrl +</span>
                </div>
                <div className="test-row">
                  <span className="t-num">03</span>
                  <div className="t-body">
                    <strong>Check colour contrast</strong>
                    <span>Use a contrast checker on any text that isn't a standard UX4G component. Aim for 4.5 : 1 minimum on body text.</span>
                  </div>
                  <span className="t-kbd">4.5 : 1</span>
                </div>
                <div className="test-row">
                  <span className="t-num">04</span>
                  <div className="t-body">
                    <strong>Read your error messages aloud</strong>
                    <span>If they sound bureaucratic or unhelpful spoken out loud, rewrite them. The voice test catches what the eye misses.</span>
                  </div>
                  <span className="t-kbd">🔊</span>
                </div>
              </div>
            </section>

            {/* 6, Common mistakes */}
            <section id="mistakes" className="cd-section">
              <div className="cd-section-num">06 · Pitfalls</div>
              <h2 className="cd-section-title">Common mistakes</h2>
              <p className="cd-section-lede">
                Every mistake on the left has a real consequence on the right. Catching them in design is far cheaper than catching them after launch.
              </p>
              <div className="mistake-list">
                <div className="mistake-row">
                  <div className="m-left">Using colour alone to show status</div>
                  <div className="m-arrow">→</div>
                  <div className="m-right">Citizens with colour blindness cannot distinguish approved from rejected.</div>
                </div>
                <div className="mistake-row">
                  <div className="m-left">Placeholder text as the only label</div>
                  <div className="m-arrow">→</div>
                  <div className="m-right">Screen readers and low-vision users lose context once they start typing.</div>
                </div>
                <div className="mistake-row">
                  <div className="m-left">Disabling a button without explanation</div>
                  <div className="m-arrow">→</div>
                  <div className="m-right">Citizens don't know what they need to do to proceed.</div>
                </div>
                <div className="mistake-row">
                  <div className="m-left">Auto-advancing carousels without pause controls</div>
                  <div className="m-arrow">→</div>
                  <div className="m-right">Seizure risk and loss of control for motor-impaired users.</div>
                </div>
              </div>

              <div className="sb-cta">
                <div className="sb-text">
                  Implementing UX4G in code? See <strong>focus management, ARIA patterns, and screen-reader testing</strong> for every component in Storybook.
                </div>
                <a className="sb-link" href="#storybook">Open Storybook ↗</a>
              </div>
            </section>
          </div>

          <Sidebar active={active} />
        </div>
      </main>

      <SiteFooter />
      <Toasts items={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
