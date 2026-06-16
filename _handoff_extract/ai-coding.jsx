/* global React, ReactDOM */
(function(){
const { useToasts, Toasts, Navbar, Sidebar, useScrollSpy, BottomCTA, Pager } = window.UX4G_AI;

const SECTIONS = [
  { id: "channels", label: "Five context channels" },
  { id: "tree", label: "Where rules files live" },
  { id: "tools", label: "Per-tool rules" },
  { id: "design-md", label: "DESIGN.md anatomy" },
  { id: "example", label: "A working .mdc example" },
  { id: "prompts", label: "Prompting, translated" },
  { id: "structure", label: "Six-part prompt structure" },
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
                  <span className="current">Coding tools</span>
                </div>
                <div className="cd-title-row">
                  <h1 className="cd-title">AI coding tools</h1>
                  <span className="cd-chip">AI-02 · For developers</span>
                </div>
              </div>
              <div className="cd-meta-block">
                The DESIGN.md plus per-tool rules-file pattern that works across Claude Code, Cursor,
                Copilot and Codex. Plus prompting techniques, translated out of ML jargon, that your
                team can actually use.
                <div className="cd-meta-row">
                  <span>Audience · developers, tech leads</span>
                  <span>Read time · 14 minutes</span>
                </div>
              </div>
            </header>

            {/* 1 */}
            <section id="channels" className="cd-section">
              <div className="cd-section-num">01 · Channels</div>
              <h2 className="cd-section-title">Five channels for UX4G context. Use them in combination.</h2>
              <p className="cd-section-lede">
                Every AI coding tool, all the way back to early Copilot, reads context the same way:
                as text. Five channels let you give it that text. Each carries different weight; none is
                exclusive of the others.
              </p>
              <div className="num-grid">
                {[
                  { n: "a · Files", name: "Project-level instructions", text: "A single DESIGN.md at the repo root plus a per-tool rules file. The highest-leverage move you can make." },
                  { n: "b · System", name: "A well-structured DESIGN.md", text: "Product brief, principles, tokens with intent, type logic, components, and the most-skipped section: Don'ts." },
                  { n: "c · npm", name: "The UX4G npm package", text: "Install and import from the UX4G design system package. Code Connect maps every Figma component to its npm implementation." },
                  { n: "d · Figma", name: "The Figma MCP server", text: "Exposes UX4G variables, components and Code Connect mappings to any MCP-aware agent. Pairs the Figma file to the code mirror." },
                  { n: "e · Stories", name: "Storybook MCP", text: "@storybook/addon-mcp on the UX4G Storybook exposes a Component Manifest agents can query, plus a11y and interaction tests they can run." },
                ].map((c) => (
                  <div className="num-cell" key={c.n}>
                    <span className="n-num">CHANNEL · {c.n}</span>
                    <h3 className="n-name">{c.name}</h3>
                    <div className="n-rule"></div>
                    <p className="n-text">{c.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 2 */}
            <section id="tree" className="cd-section">
              <div className="cd-section-num">02 · Layout</div>
              <h2 className="cd-section-title">Where rules files live in a UX4G repo</h2>
              <p className="cd-section-lede">
                The canonical layout. One DESIGN.md as the source of truth, then a per-tool rules file
                that points back at it.
              </p>
              <div className="row-2 ai-prose">
                <div className="file-tree">
{`my-portal/
├── `}<span className="ft-hl">DESIGN.md</span>{`              `}<span className="ft-comment"># AI context: tokens, components, Don'ts</span>{`
├── `}<span className="ft-hl">CLAUDE.md</span>{`              `}<span className="ft-comment"># Claude Code; can symlink to DESIGN.md</span>{`
├── `}<span className="ft-hl">AGENTS.md</span>{`              `}<span className="ft-comment"># Codex, agentic CLIs, Copilot CLI</span>{`
├── `}<span className="ft-dir">.cursor/</span>{`
│   └── `}<span className="ft-dir">rules/</span>{`
│       └── `}<span className="ft-hl">ux4g.mdc</span>{`       `}<span className="ft-comment"># Cursor project rule (with frontmatter)</span>{`
├── `}<span className="ft-dir">.github/</span>{`
│   ├── `}<span className="ft-hl">copilot-instructions.md</span>{`  `}<span className="ft-comment"># Repo-wide Copilot</span>{`
│   └── `}<span className="ft-dir">instructions/</span>{`
│       └── `}<span className="ft-file">forms.instructions.md</span>{`   `}<span className="ft-comment"># Path-scoped</span>{`
├── `}<span className="ft-dir">.claude/</span>{`
│   └── `}<span className="ft-dir">skills/</span>{`
│       └── `}<span className="ft-file">ux4g-component.md</span>{`     `}<span className="ft-comment"># Claude Skills</span>{`
└── `}<span className="ft-dir">src/</span>
                </div>
                <div>
                  <p>
                    DESIGN.md is the canonical description of UX4G in this repo. Everything else is a
                    thin pointer that says "before generating anything, read DESIGN.md."
                  </p>
                  <p>
                    CLAUDE.md, AGENTS.md and the path-scoped instruction files can be symlinks to
                    DESIGN.md or short wrappers that include a one-line reference. Cursor's
                    <code className="inline">.mdc</code> needs frontmatter, so it stays a separate file.
                  </p>
                  <p>
                    Path-scoped instructions are useful when one folder has different rules. Forms
                    inside <code className="inline">/forms</code> might need stricter validation than
                    presentation pages inside <code className="inline">/marketing</code>.
                  </p>
                </div>
              </div>
            </section>

            {/* 3 */}
            <section id="tools" className="cd-section">
              <div className="cd-section-num">03 · Tools</div>
              <h2 className="cd-section-title">Per-tool rules files. Same content, four locations.</h2>
              <p className="cd-section-lede">
                Each tool reads a specific file at a specific path. The good news: the contents are
                largely identical. Write the system once, point every tool at it.
              </p>
              <div className="tool-row">
                {[
                  { name: "Claude Code", pill: "Anthropic · CLI + IDE", file: "CLAUDE.md", desc: "Reads CLAUDE.md at the repo root. Also reads .claude/skills/*.md (Skills) and AGENTS.md as a fallback." },
                  { name: "Cursor", pill: "Anysphere · IDE", file: ".cursor/rules/ux4g.mdc", desc: "Modern rules use .mdc with frontmatter (description, globs). The legacy .cursorrules file is still supported." },
                  { name: "GitHub Copilot", pill: "GitHub · IDE", file: ".github/copilot-instructions.md", desc: "Repo-wide file is capped at the first 4,000 characters for code review. Path-scoped .instructions.md files exist for finer grain." },
                  { name: "Codex / agentic CLIs", pill: "Open standard", file: "AGENTS.md", desc: "AGENTS.md is now an open standard. It coexists alongside CLAUDE.md and the Copilot file in the same repo." },
                ].map((t) => (
                  <div className="tool-mini" key={t.name}>
                    <h3>{t.name}</h3>
                    <div className="tm-pill">{t.pill}</div>
                    <div className="tm-file">{t.file}</div>
                    <p>{t.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4 */}
            <section id="design-md" className="cd-section">
              <div className="cd-section-num">04 · Anatomy</div>
              <h2 className="cd-section-title">What a good DESIGN.md actually contains</h2>
              <p className="cd-section-lede">
                The common failure mode is files that start with a colour palette and stop there. What
                a model needs is constraint: what the system permits, what it forbids, and what to do
                when it hits a situation no one anticipated.
              </p>
              <div className="num-grid">
                {[
                  { n: "01", name: "Product brief", text: "Who uses this and in what conditions. Two-three sentences. 2G citizen networks, multilingual readers, public counters." },
                  { n: "02", name: "Design principles", text: "Three to seven sentences. The decisions a junior collaborator should defer to when the rest of the doc isn't enough." },
                  { n: "03", name: "Tokens with intent", text: "Not just hex values. 'primary #6A4EFF, CTAs and active states only, never a background, one per screen.'" },
                  { n: "04", name: "Type decision logic", text: "Noto Sans scale, when to switch weights, Devanagari fallbacks. Models pick the right size when told why, not just what." },
                  { n: "05", name: "Component inventory", text: "Every UX4G component with one line of usage notes. Cuts the model's instinct to invent new ones." },
                  { n: "06", name: "The Don'ts", text: "The most-skipped section, the highest-value one. List every common failure: ad-hoc colours, ad-hoc spacing, reinvented buttons." },
                ].map((c) => (
                  <div className="num-cell" key={c.n}>
                    <span className="n-num">SECTION · {c.n}</span>
                    <h3 className="n-name">{c.name}</h3>
                    <div className="n-rule"></div>
                    <p className="n-text">{c.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 */}
            <section id="example" className="cd-section">
              <div className="cd-section-num">05 · Example</div>
              <h2 className="cd-section-title">A working example: the UX4G Cursor rule</h2>
              <p className="cd-section-lede">
                Short. Imperative. Names exact files, exact CDNs, exact tokens. This is what an agent
                reads before its first line of generated code.
              </p>
              <div className="row-2 ai-prose">
                <div className="code-window">
                  <div className="cw-bar">
                    <div className="dots"><i></i><i></i><i></i></div>
                    <span className="title">.cursor/rules/ux4g.mdc</span>
                  </div>
<pre>
<span className="c">---</span>
<span className="k">description</span>: <span className="s">UX4G design system rules</span>
<span className="k">globs</span>: [<span className="s">"**/*.tsx"</span>,<span className="s">"**/*.jsx"</span>,<span className="s">"**/*.html"</span>,<span className="s">"**/*.css"</span>]
<span className="c">---</span>

<span className="p">Before generating any UI, read DESIGN.md.</span>

<span className="k">-</span> Install and import from the UX4G npm package.
<span className="k">-</span> Use <span className="v">ONLY</span> UX4G components and CSS classes
  (doc.ux4g.gov.in).
<span className="k">-</span> Reference the UX4G Storybook for component API
  and usage examples.
<span className="k">-</span> Use <span className="v">Noto Sans</span> as the type family.
<span className="k">-</span> Follow <span className="v">WCAG 2.1 AA</span>.
<span className="k">-</span> <span className="v">Never</span> invent new colours, spacing values,
  or component names.
<span className="k">-</span> If unsure, refer to DESIGN.md. Do not guess.
</pre>
                </div>
                <div>
                  <p>
                    Each line removes a degree of freedom the model would otherwise take. "Import from
                    the UX4G npm package" forecloses inline reimplementations. "Reference the UX4G
                    Storybook" forecloses guessing component APIs. "Never invent new colours" forecloses
                    the entire genre of hallucinated brand palettes.
                  </p>
                  <p>
                    With <code className="inline">@storybook/addon-mcp</code> enabled on the UX4G Storybook, add a line:
                    "before merging, run the Storybook MCP tests against generated stories and
                    self-heal failures." That single line turns the agent into a compliant author
                    <em> and</em> a reviewer.
                  </p>
                </div>
              </div>
            </section>

            {/* 6 */}
            <section id="prompts" className="cd-section">
              <div className="cd-section-num">06 · Vocabulary</div>
              <h2 className="cd-section-title">Prompting, with the ML jargon translated</h2>
              <p className="cd-section-lede">
                The same techniques, in language a department officer can read. Use these names in
                your documentation; the technical ones are useful when reading papers, not when
                training a team.
              </p>
              <div className="prompt-table">
                <div className="pt-head">
                  <div>Technical name</div>
                  <div>Plain language</div>
                  <div>Use when…</div>
                </div>
                {[
                  { tech: "Zero-shot prompting", plain: "Just ask", when: "The task is common, like 'write a sentiment classifier'." },
                  { tech: "One-shot / Few-shot", plain: "Show two examples", when: "You want a specific format or pattern, like a UX4G alert structure." },
                  { tech: "Chain-of-thought", plain: "Ask it to think step by step", when: "Multi-step reasoning, calculations, complex multi-screen layouts." },
                  { tech: "Role / Persona prompting", plain: "Tell it who to be", when: "Specialised tone or expertise, like 'a senior accessibility auditor'." },
                  { tech: "Meta prompting", plain: "Ask AI to write the prompt", when: "You're stuck framing the task. The model can outline the prompt for you to refine." },
                  { tech: "Plan-and-Solve", plain: "Plan first, then build", when: "Multi-screen flows. Get the plan agreed before any code is generated." },
                ].map((r) => (
                  <div className="pt-row" key={r.tech}>
                    <div className="pt-tech">{r.tech}</div>
                    <div className="pt-plain">{r.plain}</div>
                    <div className="pt-when">{r.when}</div>
                  </div>
                ))}
              </div>

              <div className="quote-card violet" style={{ marginTop: 24 }}>
                <div className="qt">
                  "Think step by step. Reference DESIGN.md before generating. List the UX4G components
                  you will use, then write the code. Show your work."
                </div>
                <div className="qa">A reliable opener for any UX4G-bound coding task</div>
              </div>
            </section>

            {/* 7 */}
            <section id="structure" className="cd-section">
              <div className="cd-section-num">07 · Structure</div>
              <h2 className="cd-section-title">The six-part prompt structure</h2>
              <p className="cd-section-lede">
                A CRISPE-style frame your team can keep on a desk card. Every prompt that hits a UX4G
                repo should have answers to all six, even if the answer to some is one line.
              </p>
              <div className="num-grid">
                {[
                  { n: "01", name: "Context", text: "What we're building and for whom. 'A Janma Pramaan Patra application form for a state portal serving citizens on 2G-4G mobiles.'" },
                  { n: "02", name: "Role", text: "Who the model is. 'You are a senior front-end developer using UX4G v3.0.'" },
                  { n: "03", name: "Instructions", text: "The task itself. 'Build a 3-step form using UX4G Stepper, Input, Button components.'" },
                  { n: "04", name: "Specifics & examples", text: "Sample inputs, target screenshots, links to UX4G docs. Concrete, not abstract." },
                  { n: "05", name: "Parameters & constraints", text: "WCAG 2.1 AA. Noto Sans only. No external CDNs beyond cdn.ux4g.gov.in. Hindi + English support." },
                  { n: "06", name: "Expected output", text: "Paste one good component implementation as a few-shot example. The model imitates structure faithfully when shown structure." },
                ].map((p) => (
                  <div className="num-cell" key={p.n}>
                    <span className="n-num">PART · {p.n}</span>
                    <h3 className="n-name">{p.name}</h3>
                    <div className="n-rule"></div>
                    <p className="n-text">{p.text}</p>
                  </div>
                ))}
              </div>

              <Pager
                prev={{ title: "AI-01 · In Figma", href: "UX4G AI Figma.html" }}
                next={{ title: "AI-03 · Governance & safety", href: "UX4G AI Safety.html" }}
              />

              <BottomCTA
                text='Before any AI-touched code ships, read the <strong>never-paste list, the vendor checklist, and the testing ladder</strong> in the governance route.'
                ctaLabel="Open AI-03 · Safety ↗"
                ctaHref="UX4G AI Safety.html"
              />
            </section>

          </div>

          <Sidebar sections={SECTIONS} active={active}
            extras={[
              { label: "AI overview", href: "UX4G AI.html" },
              { label: "AI-01 · Figma", href: "UX4G AI Figma.html" },
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
