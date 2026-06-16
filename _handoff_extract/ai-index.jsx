/* global React, ReactDOM */
(function(){
const { useToasts, Toasts, Navbar, Sidebar, useScrollSpy, BottomCTA } = window.UX4G_AI;

const SECTIONS = [
  { id: "what-it-means", label: "What AI means here" },
  { id: "routes", label: "Routes through this section" },
  { id: "surface", label: "The AI surface map" },
  { id: "principles", label: "Four principles" },
  { id: "roadmap", label: "The 90-day plan" },
  { id: "caveats", label: "Honest caveats" },
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
                  <span className="current">AI</span>
                </div>
                <div className="cd-title-row">
                  <h1 className="cd-title">AI</h1>
                  <span className="cd-chip">v3.0 · NEW</span>
                </div>
              </div>
              <div className="cd-meta-block">
                A practical guide for designers and developers using AI tools across the Government of India.
                What works today with Figma Make, Cursor, Claude Code, Copilot and Codex, where the limits
                are, and the safety rules under the DPDP Act, 2023.
                <div className="cd-meta-row">
                  <span>3 sub-pages · for designers, developers, governance</span>
                  <span>Last reviewed · 21 May 2026</span>
                </div>
              </div>
            </header>

            {/* 1 */}
            <section id="what-it-means" className="cd-section ai-prose">
              <div className="cd-section-num">01 · Framing</div>
              <h2 className="cd-section-title">What AI means in a UX4G project</h2>
              <p>
                AI is a junior collaborator that must be told about the UX4G design system explicitly.
                It does not know your tokens, components, or government context by default. Every
                working AI workflow on UX4G starts from this premise.
              </p>
              <p>
                Inside Figma, that means enabling the UX4G team library and prompting by exact
                component name, whether you're using the Figma Design Agent on the canvas or Figma
                Make for prompt-to-app. Inside coding tools, it means committing a project-level
                instructions file (<code className="inline">CLAUDE.md</code>,
                <code className="inline">.cursor/rules/*.mdc</code>, <code className="inline">.github/copilot-instructions.md</code>,
                <code className="inline">AGENTS.md</code>) that points the agent at the UX4G npm
                package, the Storybook, and a short <code className="inline">DESIGN.md</code> describing
                tokens, do's and don'ts.
              </p>
              <p>
                For a government context governed by the DPDP Act, 2023 and the Finance Ministry's
                29 January 2025 internal advisory against ChatGPT and DeepSeek on office devices,
                never paste citizen personal data, Aadhaar / PAN fragments, internal drafts, or
                unreleased policy text into public LLMs.
              </p>
            </section>

            {/* 2 */}
            <section id="routes" className="cd-section">
              <div className="cd-section-num">02 · Navigation</div>
              <h2 className="cd-section-title">Six routes through this section</h2>
              <p className="cd-section-lede">
                Three audience-led routes plus three deep-dive expansions. Designers can stop after
                AI-01 and AI-05. Developers should read AI-02, AI-04 and AI-06. Governance leads must
                read AI-03.
              </p>
              <div className="ai-route-grid" style={{ marginBottom: 14 }}>
                <a className="ai-route-card" href="UX4G AI Figma.html">
                  <span className="rc-num">AI-01 · DESIGNERS</span>
                  <h3 className="rc-name">AI in Figma</h3>
                  <p className="rc-desc">
                    Three Figma AI products, what each one can do with UX4G today, and the prompt
                    patterns that keep components on-system.
                  </p>
                  <span className="rc-arrow">Open route →</span>
                </a>
                <a className="ai-route-card" href="UX4G AI Coding.html">
                  <span className="rc-num">AI-02 · DEVELOPERS</span>
                  <h3 className="rc-name">AI coding tools</h3>
                  <p className="rc-desc">
                    The DESIGN.md + per-tool rules file pattern that works across Claude Code, Cursor,
                    Copilot and Codex.
                  </p>
                  <span className="rc-arrow">Open route →</span>
                </a>
                <a className="ai-route-card" href="UX4G AI Safety.html">
                  <span className="rc-num">AI-03 · GOVERNANCE</span>
                  <h3 className="rc-name">Governance & safety</h3>
                  <p className="rc-desc">
                    The hard never-list, the vendor checklist, the testing ladder, and why vibe coding
                    is fine for prototypes and dangerous for production.
                  </p>
                  <span className="rc-arrow">Open route →</span>
                </a>
              </div>
              <div className="ai-route-grid">
                <a className="ai-route-card" href="UX4G AI Prompting.html">
                  <span className="rc-num">AI-04 · DEEP DIVE</span>
                  <h3 className="rc-name">Prompting</h3>
                  <p className="rc-desc">
                    Anatomy of a UX4G prompt, five techniques with bad / good examples, a copyable
                    prompt library, and the anti-patterns to retire.
                  </p>
                  <span className="rc-arrow">Open route →</span>
                </a>
                <a className="ai-route-card" href="UX4G AI Make.html">
                  <span className="rc-num">AI-05 · DEEP DIVE</span>
                  <h3 className="rc-name">Figma Make</h3>
                  <p className="rc-desc">
                    The product itself, the three context inputs, what the library connection
                    transfers, and the @ux4g/react recommendation.
                  </p>
                  <span className="rc-arrow">Open route →</span>
                </a>
                <a className="ai-route-card" href="UX4G AI Testing.html">
                  <span className="rc-num">AI-06 · DEEP DIVE</span>
                  <h3 className="rc-name">Testing & evaluation</h3>
                  <p className="rc-desc">
                    The full ten-layer ladder, the three-pass AI-aided review prompt, ready-to-run CI
                    snippets, and the benchmarks that should flip the plan.
                  </p>
                  <span className="rc-arrow">Open route →</span>
                </a>
              </div>
            </section>

            {/* 3 */}
            <section id="surface" className="cd-section">
              <div className="cd-section-num">03 · Landscape</div>
              <h2 className="cd-section-title">The AI surface map</h2>
              <p className="cd-section-lede">
                AI shows up in six places that matter for a UX4G team. This is what each one is, what
                it takes as context, and how ready it is for production use against UX4G today.
              </p>
              <div className="surface-table">
                <div className="surface-row head">
                  <div>Surface</div>
                  <div>What it does</div>
                  <div>Readiness</div>
                </div>
                {[
                  {
                    name: "Figma · Design Agent", meta: "canvas-native · beta May 2026",
                    what: "Lives in the left rail of Figma Design. Generates, edits and iterates on designs; can @mention UX4G components, tokens and variables.",
                    status: "ready", statusLabel: "Full with UX4G",
                  },
                  {
                    name: "Figma · Make", meta: "chat-first prompt-to-app",
                    what: "Generates React + Tailwind from a chat prompt with a live preview. Component-aware via the UX4G Make kit (built from the npm package).",
                    status: "ready", statusLabel: "Full with UX4G",
                  },
                  {
                    name: "Figma · MCP server", meta: "Dev Mode · remote and local",
                    what: "Exposes selected frames, variables and Code Connect mappings to external coding agents over MCP.",
                    status: "ready", statusLabel: "Best path for code",
                  },
                  {
                    name: "Claude Code · Cursor · Copilot · Codex", meta: "agentic coding · CLI / IDE",
                    what: "Read project-level instructions files and generate code. UX4G context flows through CLAUDE.md, AGENTS.md, .cursor/rules.",
                    status: "ready", statusLabel: "Ready now",
                  },
                  {
                    name: "Storybook · addon-mcp", meta: "UX4G Storybook · component manifest",
                    what: "Lets any MCP-aware agent query the UX4G Component Manifest and run interaction + axe-core tests against generated stories.",
                    status: "ready", statusLabel: "Available today",
                  },
                  {
                    name: "UX4G npm package", meta: "import { Button } from '@ux4g/react'",
                    what: "The first-class npm distribution that unlocks Make kits, Code Connect mapping, Storybook MCP and any AI-assisted codebase.",
                    status: "ready", statusLabel: "Ready now",
                  },
                ].map((r) => (
                  <div className="surface-row" key={r.name}>
                    <div className="s-name">{r.name}<span className="s-meta">{r.meta}</span></div>
                    <div className="s-what">{r.what}</div>
                    <div>
                      <span className={"s-pill " + r.status}><span className="dot"></span>{r.statusLabel}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4 */}
            <section id="principles" className="cd-section">
              <div className="cd-section-num">04 · Discipline</div>
              <h2 className="cd-section-title">Four principles for AI inside government</h2>
              <p className="cd-section-lede">
                These principles sit upstream of every prompt, every rules file, and every tool
                decision in this section.
              </p>
              <div className="num-grid cols-4">
                {[
                  { n: "01", name: "Treat AI as untrusted draft", text: "Every line generated runs the same review, lint, type-check, axe-core and SAST gates as a human pull request. No bypass for speed." },
                  { n: "02", name: "Constrain with context, not hope", text: "Models don't know UX4G unless you tell them, every time. A DESIGN.md and a rules file are the constraint, in plain text." },
                  { n: "03", name: "Never paste sensitive data", text: "Citizen records, Aadhaar fragments, draft policy, internal logs. Enterprise tenancies with zero-retention are the floor, not the ceiling." },
                  { n: "04", name: "Adherence over invention", text: "If a UX4G component exists, the AI must use it. Reinvented buttons and ad-hoc colour values are a tooling failure, not a creative success." },
                ].map((p) => (
                  <div className="num-cell" key={p.n}>
                    <span className="n-num">PRINCIPLE · {p.n}</span>
                    <h3 className="n-name">{p.name}</h3>
                    <div className="n-rule"></div>
                    <p className="n-text">{p.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 */}
            <section id="roadmap" className="cd-section">
              <div className="cd-section-num">05 · Plan</div>
              <h2 className="cd-section-title">The 90-day plan for NeGD</h2>
              <p className="cd-section-lede">
                A staged path from individual teams adopting better rules to UX4G being usable as a
                first-class React package in any AI agent.
              </p>
              <div className="num-grid">
                {[
                  {
                    n: "Week 1 · basics", name: "Get the floor in place",
                    items: [
                      "Adopt enterprise tenancies for Cursor, Claude Code or Copilot. Ban personal tiers for work.",
                      "Add DESIGN.md and AGENTS.md to every project repository that uses the UX4G design system. Reference the UX4G npm package in both.",
                      "Publish a 'never paste this into AI' poster, signed off by the department CISO.",
                    ],
                  },
                  {
                    n: "Month 1 · gaps", name: "Close the obvious gaps",
                    items: [
                      "Stand up axe-core checks in CI for every repo using the UX4G design system.",
                      "Enable @storybook/addon-mcp on the existing UX4G Storybook so agents can query the manifest.",
                      "Use Figma's Code Connect to map every UX4G Figma component to its npm-package implementation.",
                    ],
                  },
                  {
                    n: "Quarter 1 · strategic", name: "Operationalise the Make kit",
                    items: [
                      "Create and publish a Figma Make kit from the UX4G npm package; edit guidelines.md for government constraints.",
                      "Run a closed pilot with two state departments using Design Agent + Make + UX4G Make kit end to end.",
                      "Stand up an AI Centre of Practice inside NeGD to maintain the prompt library, rules and kit guidelines.",
                    ],
                  },
                ].map((c) => (
                  <div className="num-cell" key={c.n} style={{ minHeight: 240 }}>
                    <span className="n-num">{c.n}</span>
                    <h3 className="n-name">{c.name}</h3>
                    <div className="n-rule"></div>
                    <ul style={{ padding: 0, margin: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                      {c.items.map((it, i) => (
                        <li key={i} style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--gray-700)", display: "flex", gap: 8 }}>
                          <span style={{ color: "var(--primary)", fontFamily: "var(--font-mono)", fontWeight: 700, flexShrink: 0 }}>→</span>
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* 6 */}
            <section id="caveats" className="cd-section">
              <div className="cd-section-num">06 · Footnotes</div>
              <h2 className="cd-section-title">Honest caveats</h2>
              <p className="cd-section-lede">
                This is a guide, not law. The footnotes that matter before any team commits to a
                workflow.
              </p>
              <div className="caveat-list">
                {[
                  { t: "Speed of change.", b: "The AI tooling landscape moves in weeks, not quarters. Re-verify Make kit dates, Code Connect features and Figma Design Agent beta status at the start of any major project." },
                  { t: "Make kit output is only as good as its guidelines.md.", b: "Auto-generated guidelines from the UX4G npm package will need editing to capture government-specific constraints. Plan for this as a one-time investment." },
                  { t: "The Figma Design Agent is in rolling beta as of May 2026.", b: "Behaviour, credit consumption and plan availability will change at general availability. Track Figma's release notes." },
                  { t: "Automated a11y catches roughly 57% of issues.", b: "axe-core and similar tools are necessary but not sufficient. Manual testing with assistive technology and citizens with disabilities is mandatory for any production service." },
                  { t: "DPDP rules are evolving.", b: "Treat any specific clause cited here as a pointer, not a substitute for legal review by the department's law officer." },
                  { t: "'Vibe coding' is used in two senses.", b: "Karpathy's original (don't read the code) and the colloquial (any AI-assisted coding). Be explicit about which sense you mean; the security guidance differs sharply." },
                  { t: "Security studies use different methodologies.", b: "Veracode 2025, Tenzai December 2025 and CodeRabbit's analyses have different samples. The signal is consistent; precise percentages should not be treated as the same metric." },
                ].map((c, i) => (
                  <div className="caveat-row" key={i}>
                    <strong>{c.t}</strong> {c.b}
                  </div>
                ))}
              </div>

              <BottomCTA
                text='Designers, start with <strong>AI in Figma</strong>. Developers, go to <strong>AI coding tools</strong>. Governance leads, <strong>read all three</strong>.'
                ctaLabel="Open AI-01 · In Figma ↗"
                ctaHref="UX4G AI Figma.html"
              />
            </section>

          </div>

          <Sidebar sections={SECTIONS} active={active}
            extras={[
              { label: "View on GitHub", href: "#" },
              { label: "Submit feedback", href: "#" },
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
