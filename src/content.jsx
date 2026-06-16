/* global React, ReactDOM */
const { useState, useEffect, useCallback } = React;

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
  { id: "principles", label: "Writing principles" },
  { id: "labels", label: "Labels and actions" },
  { id: "errors", label: "Error messages" },
  { id: "status", label: "Status language" },
  { id: "multilingual", label: "Multilingual considerations" },
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
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

/* ────── Error field demo ────── */
function FieldStub({ tone, label, value, help, required }) {
  return (
    <div className="field-stub">
      <label>{label}{required && <span className="req">*</span>}</label>
      <div className="input">{value || <span style={{ color: "#9CA1B0" }}>,</span>}</div>
      <div className="help">
        <span className="lead">{tone === "bad" ? "!" : "✓"}</span>{help}
      </div>
    </div>
  );
}

const STATUSES = [
  { name: "Submitted",    swatch: "#9AA1B2", pill: "#EDEFF3", pillFg: "#52596B", note: "Used immediately after the citizen submits. Never say 'Received' or 'Pending'." },
  { name: "Under Review", swatch: "#FFA827", pill: "#FFF1DA", pillFg: "#7A4900", note: "Department is actively reviewing. Never say 'Processing' or 'In Progress'." },
  { name: "Approved",     swatch: "#1E9E55", pill: "#E5F4EC", pillFg: "#0C6B36", note: "Application approved but certificate not yet issued." },
  { name: "Issued",       swatch: "#0E9A8C", pill: "#DBF1EE", pillFg: "#0A6E64", note: "Certificate or document has been issued and is available to download." },
  { name: "Action Needed",swatch: "#3061D6", pill: "#E5ECFB", pillFg: "#1B4AAA", note: "Citizen must do something before the application can proceed." },
  { name: "Rejected",     swatch: "#D2362D", pill: "#FBE6E4", pillFg: "#9F231B", note: "Always accompanied by a specific reason, never just the label alone." },
];

function App() {
  const { toasts, push } = useToasts();
  const stub = (n) => push(`${n}, page coming soon`);
  const active = useScrollSpy(SECTIONS.map((s) => s.id));

  return (
    <>
      <Navbar onStub={stub} />
      <main className="cd-page cn-page">
        <section className="fu-header">
          <div className="container">
            <div className="fu-crumb">
              <a href="index.html">Home</a>
              <span className="sep">/</span>
              <a href="UX4G Fundamentals.html">Fundamentals</a>
              <span className="sep">/</span>
              <span className="current">Content</span>
            </div>
            <div className="fu-title-row">
              <h1 className="fu-h">Content</h1>
              <p className="fu-desc">
                Words are part of the design. Clear, honest, and direct language makes government services usable for everyone, regardless of literacy level or familiarity with bureaucratic language.
              </p>
            </div>
          </div>
        </section>

        <div className="cd-layout">
          <div className="cd-main">
            {/* 1, Principles */}
            <section id="principles" className="cd-section">
              <div className="cd-section-num">01 · Principles</div>
              <h2 className="cd-section-title">Writing principles</h2>
              <p className="cd-section-lede">
                Four principles that apply to every label, button, error, and status message in a UX4G service.
              </p>
              <div className="princ-grid">
                <div className="princ-item">
                  <span className="p-num">01</span>
                  <h3>Use plain language</h3>
                  <div className="p-rule"></div>
                  <p>Write at a standard that a first-time user can understand. Avoid jargon, legal language, and passive voice in citizen-facing UI.</p>
                </div>
                <div className="princ-item">
                  <span className="p-num">02</span>
                  <h3>Be specific, not vague</h3>
                  <div className="p-rule"></div>
                  <p>"Enter your 12-digit Aadhaar number" is better than "Enter your ID". Citizens should never have to guess what is needed.</p>
                </div>
                <div className="princ-item">
                  <span className="p-num">03</span>
                  <h3>Tell people what to do next</h3>
                  <div className="p-rule"></div>
                  <p>Every error message, empty state, and status update should include a clear next action. Never leave someone stuck.</p>
                </div>
                <div className="princ-item">
                  <span className="p-num">04</span>
                  <h3>Write for the situation</h3>
                  <div className="p-rule"></div>
                  <p>A success message and an error message have different emotional registers. Match the tone to the moment.</p>
                </div>
              </div>
            </section>

            {/* 2, Labels and actions */}
            <section id="labels" className="cd-section">
              <div className="cd-section-num">02 · Labels</div>
              <h2 className="cd-section-title">Labels and actions</h2>
              <p className="cd-section-lede">
                Labels carry context out of the screen and into the citizen's mind. Specific labels survive translation, screen readers, and stress.
              </p>

              <div className="dd-pair">
                <div className="dd-card do">
                  <div className="dd-label"><span>✓</span> Do</div>
                  <div className="dd-stage">
                    <button className="btn-primary-real btn-m">Submit application</button>
                    <button className="btn-ghost-real btn-m">Save draft</button>
                  </div>
                  <div className="dd-rule"><strong>Button labels:</strong> Describe the action and what it acts on.</div>
                </div>
                <div className="dd-card dont">
                  <div className="dd-label"><span>✕</span> Don't</div>
                  <div className="dd-stage">
                    <button className="btn-primary-real btn-m">Submit</button>
                    <button className="btn-ghost-real btn-m">OK</button>
                  </div>
                  <div className="dd-rule">"Submit", "OK" lose meaning once a user is reviewing a screen reader announcement.</div>
                </div>
              </div>

              <div className="dd-pair">
                <div className="dd-card do">
                  <div className="dd-label"><span>✓</span> Do</div>
                  <div className="dd-stage" style={{ alignItems: "flex-start", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 13.5, fontWeight: 600 }}>Date of birth (DD/MM/YYYY)</label>
                    <div className="input" style={{ width: 200, padding: "10px 12px", border: "1.5px solid var(--gray-300)", borderRadius: 8, fontSize: 14, color: "#9CA1B0" }}>DD / MM / YYYY</div>
                  </div>
                  <div className="dd-rule"><strong>Field labels:</strong> Spell it out, format expectation included.</div>
                </div>
                <div className="dd-card dont">
                  <div className="dd-label"><span>✕</span> Don't</div>
                  <div className="dd-stage" style={{ alignItems: "flex-start", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 13.5, fontWeight: 600 }}>DOB</label>
                    <div className="input" style={{ width: 200, padding: "10px 12px", border: "1.5px solid var(--gray-300)", borderRadius: 8, fontSize: 14, color: "#9CA1B0" }}>,</div>
                  </div>
                  <div className="dd-rule">"DOB" expects citizens to know the abbreviation.</div>
                </div>
              </div>

              <div className="dd-pair">
                <div className="dd-card do">
                  <div className="dd-label"><span>✓</span> Do</div>
                  <div className="dd-stage">
                    <a className="btn-link-real btn-m" href="#">Download income certificate (PDF, 2 pages)</a>
                  </div>
                  <div className="dd-rule"><strong>Link labels:</strong> Tell the user what they will get.</div>
                </div>
                <div className="dd-card dont">
                  <div className="dd-label"><span>✕</span> Don't</div>
                  <div className="dd-stage">
                    <a className="btn-link-real btn-m" href="#">Click here</a>
                  </div>
                  <div className="dd-rule">"Click here" reads as nothing to a screen reader scanning by link.</div>
                </div>
              </div>
            </section>

            {/* 3, Error messages */}
            <section id="errors" className="cd-section">
              <div className="cd-section-num">03 · Errors</div>
              <h2 className="cd-section-title">Error messages that help, not frustrate</h2>
              <p className="cd-section-lede">
                Error text is read at the moment a citizen is most stuck. Tell them what went wrong and exactly how to fix it.
              </p>

              <div className="err-grid">
                <div className="err-pair">
                  <div className="err-block bad">
                    <span className="e-tag"><span className="dot">✕</span> Avoid</span>
                    <FieldStub tone="bad" label="Mobile number" required value="98xxx 12" help="Invalid input." />
                  </div>
                  <div className="err-block good">
                    <span className="e-tag"><span className="dot">✓</span> Use</span>
                    <FieldStub tone="good" label="Mobile number" required value="98xxx 12345" help="Enter a valid 10-digit mobile number without spaces or dashes." />
                  </div>
                </div>

                <div className="err-pair">
                  <div className="err-block bad">
                    <span className="e-tag"><span className="dot">✕</span> Avoid</span>
                    <FieldStub tone="bad" label="Date of birth" required value="" help="Required field." />
                  </div>
                  <div className="err-block good">
                    <span className="e-tag"><span className="dot">✓</span> Use</span>
                    <FieldStub tone="good" label="Date of birth (DD/MM/YYYY)" required value="" help="Enter your date of birth, this is needed to verify your identity." />
                  </div>
                </div>

                <div className="err-pair">
                  <div className="err-block bad">
                    <span className="e-tag"><span className="dot">✕</span> Avoid</span>
                    <FieldStub tone="bad" label="Income certificate" value="proof_of_income.tiff (8.4 MB)" help="Upload failed." />
                  </div>
                  <div className="err-block good">
                    <span className="e-tag"><span className="dot">✓</span> Use</span>
                    <FieldStub tone="good" label="Income certificate" value="proof_of_income.tiff (8.4 MB)" help="File is too large. Upload a file smaller than 5 MB in PDF, JPG, or PNG format." />
                  </div>
                </div>
              </div>
            </section>

            {/* 4, Status language */}
            <section id="status" className="cd-section">
              <div className="cd-section-num">04 · Reference</div>
              <h2 className="cd-section-title">Consistent words for application states</h2>
              <p className="cd-section-lede">
                The shared UX4G status vocabulary. Use these exact labels, and only these, so citizens see the same words across every department's service.
              </p>
              <div className="status-ref">
                {STATUSES.map((s) => (
                  <div className="status-row" key={s.name}>
                    <div className="s-left">
                      <span className="s-swatch" style={{ background: s.swatch }}></span>
                      <span className="s-name">{s.name}</span>
                    </div>
                    <div className="s-right">
                      <span className="s-pill" style={{ background: s.pill, color: s.pillFg }}>
                        <span className="pdot"></span>{s.name}
                      </span>
                      <span className="s-note">{s.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5, Multilingual */}
            <section id="multilingual" className="cd-section">
              <div className="cd-section-num">05 · Languages</div>
              <h2 className="cd-section-title">Multilingual considerations</h2>
              <p className="cd-section-lede">
                Practical notes for writing UI copy that translates well into the 22 scheduled languages of India.
              </p>
              <div className="multi-grid">
                <div className="multi-card">
                  <div className="m-cap">NOTE · 01</div>
                  <h3>Keep sentences short</h3>
                  <p>Long English sentences become very long in Hindi and Tamil. Short, single-clause sentences translate more cleanly and fit the same layout.</p>
                  <div className="script-strip">
                    <span className="lang">EN</span>
                    <span className="line">Enter your 10-digit mobile number.</span>
                    <span className="lang" style={{ marginTop: 4 }}>HI</span>
                    <span className="line">अपना 10-अंकों का मोबाइल नंबर दर्ज करें।</span>
                  </div>
                </div>
                <div className="multi-card">
                  <div className="m-cap">NOTE · 02</div>
                  <h3>Avoid idioms</h3>
                  <p>"Your application is in the pipeline" does not translate meaningfully. Use literal, direct language that survives word-for-word conversion.</p>
                  <div className="script-strip">
                    <span className="lang">USE</span>
                    <span className="line">Your application is under review.</span>
                    <span className="lang" style={{ marginTop: 4 }}>AVOID</span>
                    <span className="line" style={{ color: "var(--gray-500)" }}>Your application is in the pipeline.</span>
                  </div>
                </div>
                <div className="multi-card">
                  <div className="m-cap">NOTE · 03</div>
                  <h3>Test with the actual script</h3>
                  <p>Latin alphabet previews do not reveal line-length problems in Devanagari or Tamil. Always test layouts with real translated text before launch.</p>
                  <div className="script-strip">
                    <span className="lang">TA</span>
                    <span className="line">உங்கள் விண்ணப்பம் பரிசீலனையில் உள்ளது.</span>
                    <span className="lang" style={{ marginTop: 4 }}>BN</span>
                    <span className="line">আপনার আবেদন পর্যালোচনাধীন।</span>
                  </div>
                </div>
                <div className="multi-card">
                  <div className="m-cap">NOTE · 04</div>
                  <h3>Numbers and dates</h3>
                  <p>Use DD / MM / YYYY consistently. Never MM / DD / YYYY. Numbers should use the locale's numeral system where the script requires it.</p>
                  <div className="script-strip">
                    <span className="lang">USE</span>
                    <span className="line">20 / 04 / 2026</span>
                    <span className="lang" style={{ marginTop: 4 }}>HI · NUMERALS</span>
                    <span className="line">२० / ०४ / २०२६</span>
                  </div>
                </div>
              </div>
            </section>

            {/* 6, Common mistakes */}
            <section id="mistakes" className="cd-section">
              <div className="cd-section-num">06 · Pitfalls</div>
              <h2 className="cd-section-title">Common mistakes</h2>
              <p className="cd-section-lede">
                Every mistake on the left has a real consequence on the right. Catch these in writing, not in user testing.
              </p>
              <div className="mistake-list">
                <div className="mistake-row">
                  <div className="m-left">Using abbreviations without explanation</div>
                  <div className="m-arrow">→</div>
                  <div className="m-right">Citizens unfamiliar with government terminology get stuck on acronyms like DOB, EPIC, NoC.</div>
                </div>
                <div className="mistake-row">
                  <div className="m-left">Mixing formal and informal address within one flow</div>
                  <div className="m-arrow">→</div>
                  <div className="m-right">Creates a jarring, untrustworthy experience, pick one register and hold it across every screen.</div>
                </div>
                <div className="mistake-row">
                  <div className="m-left">Writing passive voice for errors</div>
                  <div className="m-arrow">→</div>
                  <div className="m-right">"An error was encountered" gives no agency. "Something went wrong. Try again." is better.</div>
                </div>
                <div className="mistake-row">
                  <div className="m-left">Translating English UI literally into Hindi</div>
                  <div className="m-arrow">→</div>
                  <div className="m-right">Word-for-word translation produces unnatural, hard-to-read text. Work with native writers, not just translators.</div>
                </div>
              </div>

              <div className="sb-cta">
                <div className="sb-text">
                  Localising for additional Indian languages? See the <strong>full UX4G translation glossary, character-set fallbacks, and string keys</strong> in Storybook.
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
