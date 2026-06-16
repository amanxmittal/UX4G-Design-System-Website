/* global React, ReactDOM */
(function(){
const { useToasts, Toasts, Navbar, Sidebar, useScrollSpy, BottomCTA, Pager } = window.UX4G_AI;

const SECTIONS = [
  { id: "ladder", label: "The full ladder" },
  { id: "review", label: "AI-aided review" },
  { id: "ci", label: "CI setup" },
  { id: "benchmarks", label: "Benchmarks that flip the plan" },
  { id: "failures", label: "Real-world failures" },
];

function App() {
  const { toasts } = useToasts();
  const active = useScrollSpy(SECTIONS.map((s) => s.id));

  return (
    <>
      <Navbar />
      <main className="cd-page ai-page">
        <div className="cd-layout">
          <div className="cd-main">

            <header className="cd-header">
              <div className="cd-title-block">
                <div className="cd-crumb">
                  <a href="UX4G Homepage.html">Home</a>
                  <span className="sep">/</span>
                  <a href="UX4G AI.html">AI</a>
                  <span className="sep">/</span>
                  <span className="current">Testing & evaluation</span>
                </div>
                <div className="cd-title-row">
                  <h1 className="cd-title">Testing & evaluation</h1>
                  <span className="cd-chip">AI-06 · Deep dive</span>
                </div>
              </div>
              <div className="cd-meta-block">
                The full ten-layer ladder, the three-pass AI-aided review prompt, ready-to-run CI
                snippets, the benchmarks that should flip your AI plan, and the real-world failures
                that prove every gate.
                <div className="cd-meta-row">
                  <span>Audience · tech leads, QA, accessibility</span>
                  <span>Read time · 15 minutes</span>
                </div>
              </div>
            </header>

            {/* 1 · Ladder */}
            <section id="ladder" className="cd-section">
              <div className="cd-section-num">01 · Ladder</div>
              <h2 className="cd-section-title">The full testing ladder, with what each layer catches</h2>
              <p className="cd-section-lede">
                Treat AI output as a draft that must pass the same gates as any human contribution.
                The ladder is layered, token compliance is cheap and runs on every save, manual a11y
                is expensive and runs before any release.
              </p>
              <div className="ladder">
                <div className="ladder-row head">
                  <div>Layer</div>
                  <div>Tool</div>
                  <div>What it catches</div>
                </div>
                {[
                  { layer: "Token compliance", tool: "Stylelint with UX4G token config + CSS variable allowlists", catch: "Non-UX4G colours, spacing, radii. Pre-commit." },
                  { layer: "Component compliance", tool: "UX4G Storybook MCP query + Component Manifest; ESLint banning ad-hoc HTML", catch: "Reinvented buttons, inputs, cards. CI." },
                  { layer: "A11y · automated", tool: "axe-core via @axe-core/playwright + Storybook a11y addon", catch: "Labels, contrast, ARIA misuse, focus order. CI." },
                  { layer: "A11y · semi-auto", tool: "Axe DevTools Intelligent Guided Tests; Recite Me Checker", catch: "Colour meaning, alt-text quality, keyboard traps. Pre-release." },
                  { layer: "A11y · manual", tool: "Screen readers (NVDA / TalkBack / VoiceOver); UX4G Compliance Matrix; Audit 360 (99+ params)", catch: "Real user issues, Hindi / regional quirks. Release-gate." },
                  { layer: "Functional behaviour", tool: "Storybook interaction tests + Playwright E2E; MCP run-story-tests for self-heal loops", catch: "Broken states, hover / focus regressions. CI." },
                  { layer: "Security", tool: "Gitleaks, OSV-Scanner, Semgrep / CodeQL (SAST), SBOM", catch: "OWASP Top 10, slopsquatting, supply chain. CI." },
                  { layer: "Visual regression", tool: "Chromatic / Percy snapshot diffing against the UX4G design system Storybook", catch: "Token drift, layout shifts. CI." },
                  { layer: "Performance", tool: "Lighthouse CI + gzipped bundle ceiling", catch: "Regressions on 2G / 3G / 4G citizen networks. CI." },
                  { layer: "Cross-locale", tool: "Snapshot tests in English + Hindi + one other Indian script", catch: "Devanagari / Tamil / Bengali wrap, RTL, fallback. Pre-release." },
                ].map((r, i) => (
                  <div className="ladder-row" key={i}>
                    <div className="l-layer">{r.layer}</div>
                    <div className="l-tool">{r.tool}</div>
                    <div className="l-catch">{r.catch}</div>
                  </div>
                ))}
              </div>
              <p className="ai-prose" style={{ marginTop: 24, fontStyle: "italic", color: "var(--gray-700)" }}>
                axe-core and similar tools catch roughly 57% of WCAG issues by volume. They are
                necessary but not sufficient. Manual testing with assistive technology and citizens
                with disabilities is mandatory for any production government service.
              </p>
            </section>

            {/* 2 · AI-aided review */}
            <section id="review" className="cd-section">
              <div className="cd-section-num">02 · Three passes</div>
              <h2 className="cd-section-title">AI-aided review, in three passes</h2>
              <p className="cd-section-lede">
                The mistake most teams make: ask the AI to "review and fix" in one call. The model
                hallucinates a problem, fixes it, and you ship a regression. Three passes catches this.
              </p>
              <div className="num-grid">
                {[
                  { n: "PASS 01 · ENUMERATE", name: "List every problem", text: "Ask only for findings, with file:line. No fixes. The model is loose with this if not constrained. Insist." },
                  { n: "PASS 02 · PROPOSE", name: "Propose fixes for each", text: "Take the enumerated list back and ask for one fix per finding. Each fix shows a diff and a justification." },
                  { n: "PASS 03 · HUMAN", name: "A human decides", text: "Take the proposed fixes into a human review. Accept, reject, modify. AI-assisted, not AI-automated." },
                ].map((c) => (
                  <div className="num-cell" key={c.n}>
                    <span className="n-num">{c.n}</span>
                    <h3 className="n-name">{c.name}</h3>
                    <div className="n-rule"></div>
                    <p className="n-text">{c.text}</p>
                  </div>
                ))}
              </div>

              <div className="quote-card violet" style={{ marginTop: 24 }}>
                <div className="qt">
                  "Review this PR against DESIGN.md and the UX4G design system compliance matrix.
                  List every place a UX4G component was not used where one exists, every non-token
                  value, every WCAG 2.1 AA violation you can detect statically, and every dependency
                  you cannot find in the UX4G npm package or the approved allowlist. Do not propose
                  fixes yet, just enumerate."
                </div>
                <div className="qa">PASS 01 · the only prompt you give first</div>
              </div>
            </section>

            {/* 3 · CI setup */}
            <section id="ci" className="cd-section">
              <div className="cd-section-num">03 · CI</div>
              <h2 className="cd-section-title">The CI workflow, in three files</h2>
              <p className="cd-section-lede">
                A skeleton workflow that wires the cheap layers into every commit and the expensive
                layers into the release gate. Drop into <code className="inline">.github/workflows/</code>.
              </p>
              <div className="row-2 ai-prose tight">
                <div className="code-window">
                  <div className="cw-bar">
                    <div className="dots"><i></i><i></i><i></i></div>
                    <span className="title">.github/workflows/ai-touched.yml</span>
                  </div>
<pre>
<span className="k">name</span>: <span className="s">AI-touched checks</span>
<span className="k">on</span>:
  <span className="k">pull_request</span>:
    <span className="k">paths</span>: [<span className="s">"src/**"</span>]

<span className="k">jobs</span>:
  <span className="k">guardrails</span>:
    <span className="k">runs-on</span>: ubuntu-latest
    <span className="k">steps</span>:
      <span className="c">- run: pnpm install</span>
      <span className="c">- run: pnpm lint:tokens   # Stylelint + UX4G allowlist</span>
      <span className="c">- run: pnpm lint:eslint   # ban ad-hoc HTML</span>
      <span className="c">- run: pnpm test:axe      # axe-core via Playwright</span>
      <span className="c">- run: pnpm test:visual   # Chromatic</span>
      <span className="c">- run: pnpm sec:gitleaks  # secrets</span>
      <span className="c">- run: pnpm sec:osv       # OSV-Scanner</span>
</pre>
                </div>
                <div>
                  <p>
                    Five seconds of Stylelint + ESLint at pre-commit kills most non-UX4G code before
                    it ever lands. axe-core in CI catches the obvious a11y violations. OSV-Scanner is
                    the slopsquatting defence: if the model has hallucinated a package name, the
                    scanner will tell you because the package will not be in the OSV database.
                  </p>
                  <p>
                    The release gate runs the rest: semi-auto a11y, manual NVDA / TalkBack, Lighthouse
                    on the production build, snapshot diffs in Hindi, Tamil and English. None of these
                    should run on every commit; all of them must run before any release tag.
                  </p>
                </div>
              </div>

              <div className="code-window" style={{ marginTop: 14 }}>
                <div className="cw-bar">
                  <div className="dots"><i></i><i></i><i></i></div>
                  <span className="title">.stylelintrc.ux4g.json · UX4G allowlist (excerpt)</span>
                </div>
<pre>
<span className="p">{`{`}</span>
  <span className="s">"plugins"</span>: [<span className="s">"stylelint-declaration-strict-value"</span>],
  <span className="s">"rules"</span>: <span className="p">{`{`}</span>
    <span className="s">"declaration-strict-value"</span>: [
      [<span className="s">"/color/"</span>, <span className="s">"font-family"</span>, <span className="s">"font-size"</span>, <span className="s">"border-radius"</span>],
      <span className="p">{`{`}</span>
        <span className="s">"ignoreValues"</span>: [<span className="s">"/^var\\(--/"</span>, <span className="s">"inherit"</span>, <span className="s">"transparent"</span>],
        <span className="s">"message"</span>: <span className="s">"Use a UX4G token (var(--*)) instead of a raw value."</span>
      <span className="p">{`}`}</span>
    ]
  <span className="p">{`}`}</span>
<span className="p">{`}`}</span>
</pre>
              </div>
            </section>

            {/* 4 · Benchmarks */}
            <section id="benchmarks" className="cd-section">
              <div className="cd-section-num">04 · Benchmarks</div>
              <h2 className="cd-section-title">Benchmarks that should flip the plan</h2>
              <p className="cd-section-lede">
                Numbers your team should be watching. Each one is a tripwire: if it crosses, the right
                response is to pause AI-assisted work and tighten an upstream rule, not to keep
                shipping.
              </p>
              <div className="bench-grid">
                {[
                  { cond: "IF · axe-core violations per AI-PR > 5", then: "THEN tighten rules files; require human accessibility review before merge." },
                  { cond: "IF · component-reuse rate < 70%", then: "THEN tune DESIGN.md Don'ts section and prompt templates." },
                  { cond: "IF · Storybook MCP test failure rate > 20%", then: "THEN invest in better stories and documentation, not better prompts." },
                  { cond: "IF · a security incident traces to an AI-suggested dependency", then: "THEN enforce a dependency allowlist immediately. CI fails on unknown packages." },
                  { cond: "IF · a Tenzai-style audit finds > 2 critical vulnerabilities", then: "THEN halt the rollout. Mandatory SAST gate before any further AI-generated merges." },
                  { cond: "IF · Hindi / Tamil snapshot diffs change without intent", then: "THEN your AI is silently translating again. Pin language; re-prompt." },
                ].map((b, i) => (
                  <div className="bench-card" key={i}>
                    <div className="bc-cond">{b.cond}</div>
                    <div className="bc-then" dangerouslySetInnerHTML={{ __html: b.then.replace("THEN", '<strong>THEN</strong>') }}></div>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 · Failures */}
            <section id="failures" className="cd-section">
              <div className="cd-section-num">05 · Lessons</div>
              <h2 className="cd-section-title">Real-world failures, in case the abstraction doesn't land</h2>
              <p className="cd-section-lede">
                Three concrete failures from 2025. Each is a different gate that the ladder above would
                have caught. Print them; pin them above the team's monitor.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
                <div className="fail-card">
                  <h4>Lovable · 303 exposed endpoints</h4>
                  <div className="fc-date">First reported · 21 March 2025 · CVE-2025-48757</div>
                  <p>Security researchers Matt Palmer and Kody Low built an automated scanner and found 170 of 1,645 Lovable showcase apps (10.3%) with critical security flaws exposing 303 vulnerable endpoints, leaking names, emails, financial records, and API keys.</p>
                </div>
                <div className="fail-card">
                  <h4>Replit AI · production DB wiped</h4>
                  <div className="fc-date">2025 · vendor post-mortem</div>
                  <p>A Replit AI agent deleted a production database despite explicit instructions not to. The post-mortem found the agent had reasoned its way past every guardrail. Lesson: write rules that constrain actions, not just intent.</p>
                </div>
                <div className="fail-card">
                  <h4>Tenzai · 15 of 15 missing CSRF</h4>
                  <div className="fc-date">December 2025 · 5 tools tested</div>
                  <p>Tenzai built three identical web applications with each of Claude Code, Codex, Cursor, Replit and Devin and found 69 vulnerabilities total, with CSRF protection absent in all 15 apps and SSRF present in every tool tested.</p>
                </div>
              </div>

              <Pager
                prev={{ title: "AI-05 · Figma Make", href: "UX4G AI Make.html" }}
                next={{ title: "AI-03 · Governance & safety", href: "UX4G AI Safety.html" }}
              />

              <BottomCTA
                text='Testing is necessary but not enough on its own. <strong>Read the governance route</strong> for the never-paste list, the vendor checklist, and the DPDP baseline.'
                ctaLabel="Open AI-03 · Safety ↗"
                ctaHref="UX4G AI Safety.html"
              />
            </section>

          </div>

          <Sidebar sections={SECTIONS} active={active}
            extras={[
              { label: "AI overview", href: "UX4G AI.html" },
              { label: "AI-02 · Coding", href: "UX4G AI Coding.html" },
              { label: "AI-03 · Safety", href: "UX4G AI Safety.html" },
            ]}
          />
        </div>
      </main>
      <Toasts items={toasts} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
