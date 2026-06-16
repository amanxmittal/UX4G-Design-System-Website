/* global React, ReactDOM */
(function(){
const { useToasts, Toasts, Navbar, Sidebar, useScrollSpy, BottomCTA, Pager } = window.UX4G_AI;

const SECTIONS = [
  { id: "products", label: "Three Figma AI products" },
  { id: "design-agent", label: "Workflow A · Design Agent" },
  { id: "make", label: "Workflow B · Figma Make" },
  { id: "handoff", label: "Design Agent ↔ Make handoff" },
  { id: "docframe", label: "Documentation frame" },
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
                  <span className="current">In Figma</span>
                </div>
                <div className="cd-title-row">
                  <h1 className="cd-title">AI in Figma</h1>
                  <span className="cd-chip">AI-01 · For designers</span>
                </div>
              </div>
              <div className="cd-meta-block">
                Three Figma AI products, all of which can work with the UX4G design system today. The
                Design Agent for canvas-native iteration, Figma Make for prompt-to-app via the UX4G
                Make kit, and the MCP server for code handoff.
                <div className="cd-meta-row">
                  <span>Audience · designers, design leads</span>
                  <span>Read time · 12 minutes</span>
                </div>
              </div>
            </header>

            {/* 1 */}
            <section id="products" className="cd-section">
              <div className="cd-section-num">01 · Landscape</div>
              <h2 className="cd-section-title">Three Figma AI products. All work with UX4G today.</h2>
              <p className="cd-section-lede">
                With the UX4G design system now available as an npm package, every Figma AI surface
                is component-aware. The Design Agent uses your connected library; Make uses a kit built
                from the npm package; MCP exposes your file to external coding agents with Code Connect
                mappings.
              </p>
              <div className="surface-table">
                <div className="surface-row head">
                  <div>Product</div>
                  <div>What it does</div>
                  <div>UX4G readiness</div>
                </div>
                <div className="surface-row">
                  <div className="s-name">Figma Design Agent<span className="s-meta">canvas-native · beta May 2026</span></div>
                  <div className="s-what">Lives on the canvas. Generates, edits and iterates designs using UX4G components from any connected library. Supports @mentions, parallel prompts, bulk edits.</div>
                  <div><span className="s-pill ready"><span className="dot"></span>Full with UX4G</span></div>
                </div>
                <div className="surface-row">
                  <div className="s-name">Figma Make<span className="s-meta">chat-first prompt-to-app</span></div>
                  <div className="s-what">Generates real React + Tailwind code from a chat prompt with a live preview. Component-accurate via the UX4G Make kit built from the npm package.</div>
                  <div><span className="s-pill ready"><span className="dot"></span>Full with UX4G</span></div>
                </div>
                <div className="surface-row">
                  <div className="s-name">MCP server<span className="s-meta">Dev Mode · remote and local</span></div>
                  <div className="s-what">Exposes selected frames, variables and Code Connect mappings to external agents (Cursor, Claude Code, Copilot, Codex) over MCP.</div>
                  <div><span className="s-pill ready"><span className="dot"></span>Best path for code</span></div>
                </div>
              </div>
              <p className="ai-prose" style={{ marginTop: 20, fontStyle: "italic", color: "var(--gray-700)" }}>
                The Design Agent is in rolling beta as of May 2026 and does not consume AI credits
                during beta. Available to Full seat users on Professional, Organisation and Enterprise
                plans.
              </p>
            </section>

            {/* 2 · Workflow A · Design Agent */}
            <section id="design-agent" className="cd-section">
              <div className="cd-section-num">02 · Workflow A</div>
              <h2 className="cd-section-title">Designing with the Figma Design Agent on the canvas</h2>
              <p className="cd-section-lede">
                The Design Agent lives in the left rail of Figma Design. No context switching, no
                separate setup. It is fine-tuned for editing Figma files and reads your connected
                libraries directly.
              </p>
              <div className="steps">
                {[
                  { t: "Enable the UX4G design system library on the file.", b: "Assets → Team libraries → enable UX4G. The agent uses the most recently and frequently used components in your file as its default starting point." },
                  { t: "@mention components, tokens, and variables by name.", b: "Steer the agent toward exactly what you need: @Button/Primary/Large, @Input/Text/Default, @Status/Under Review. It functions as a keyboard shortcut for the design system." },
                  { t: "Run parallel prompts to explore directions.", b: "Ask for three layouts for an application status page, each optimised for a different citizen literacy level. Compare outputs side by side." },
                  { t: "Use bulk edits for design-system consistency.", b: "Update all instances of a component to a new variant, apply token changes across a flow, rename variables, document component states across the library." },
                  { t: "Iterate with short prompts and edit by hand alongside.", b: "Going hands-on is often faster than prompting for precision work. The agent is interruptible, you can edit manually while it continues iterating." },
                  { t: "Process feedback into next steps.", b: "Paste comment threads or stakeholder notes and ask the agent to summarise themes, create next steps, or generate a revised design that incorporates the feedback." },
                ].map((s, i) => (
                  <div className="step" key={i}>
                    <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <strong>{s.t}</strong>
                      <span>{s.b}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3 · Workflow B · Make */}
            <section id="make" className="cd-section">
              <div className="cd-section-num">03 · Workflow B</div>
              <h2 className="cd-section-title">Building with Figma Make and the UX4G Make kit</h2>
              <p className="cd-section-lede">
                Make's two-pane chat-first interface produces real React + Tailwind code. With the
                UX4G npm package registered as a Make kit, every prompt starts from real UX4G
                components instead of generic UI elements.
              </p>
              <div className="steps">
                {[
                  { t: "Register the UX4G npm package as a Make kit.", b: "In Figma Make settings, add the UX4G design system's npm package. Figma generates a guidelines.md automatically. This is the single most important step.", tip: "Tip · Without a Make kit, Make falls back to generic UI primitives. Always check the kit is loaded before any serious prompt." },
                  { t: "Edit the auto-generated guidelines.md.", b: "Add UX4G-specific constraints: token vocabulary, naming conventions, government UX patterns. DD/MM/YYYY dates. Pre-filled read-only Aadhaar fields. Required bilingual labels." },
                  { t: "Reference UX4G component names verbatim.", b: "'Use the UX4G Stepper component for the 3-step form.' Even with a kit connected, explicit naming is the biggest determinant of which components Make instantiates." },
                  { t: "Use a two-prompt pattern.", b: "A setup prompt establishes design system context. A screen prompt specifies the UI. Use a checkpoint ('Tell me what components you plan to use, don't generate code yet') before each major screen." },
                  { t: "Use Make attachments for composite components.", b: "If a specific composite pattern isn't being picked up from the kit, paste a Figma frame URL containing that component's documentation as a Make attachment." },
                  { t: "Use connectors for real requirements.", b: "Pull in the brief from Notion, Jira or GitHub via Make connectors so the prototype reflects what's actually agreed, not what the model guessed." },
                  { t: "Iterate one change at a time. Revert is your friend.", b: "Short specific prompts beat long ones. Don't fight a wandering output with a longer prompt; revert to last-good and re-prompt." },
                ].map((s, i) => (
                  <div className="step" key={i}>
                    <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                    <div>
                      <strong>{s.t}</strong>
                      <span>{s.b}</span>
                      {s.tip ? <span className="step-tip">{s.tip}</span> : null}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 4 · Handoff */}
            <section id="handoff" className="cd-section">
              <div className="cd-section-num">04 · Together</div>
              <h2 className="cd-section-title">Design Agent ↔ Make handoff</h2>
              <p className="cd-section-lede">
                The two products are designed to work together. Start where the task fits, hand off
                where the next product is stronger. Both directions work.
              </p>
              <div className="row-2 ai-prose">
                <div>
                  <h3>Design first, code second</h3>
                  <p>
                    Start in Figma Design with the Design Agent to clarify intent across flows, states
                    and structure. UX4G components are placed exactly where they need to be; copy and
                    micro-interactions get locked in. Then send to Figma Make to generate working code
                    from the agreed designs.
                  </p>
                  <p>
                    This is the right direction when the design problem is open, when stakeholders
                    need to react to layouts, and when the eventual handoff is to a development team
                    that wants something concrete to estimate against.
                  </p>
                </div>
                <div>
                  <h3>Prototype first, design second</h3>
                  <p>
                    Start in Make with the UX4G kit when the task is concrete and you want working
                    code to react to. Copy frames back into Figma Design once the prototype is close;
                    iterate with the Design Agent to polish.
                  </p>
                  <p>
                    This is the right direction when the spec is well-defined (e.g., "build sign-in
                    with OTP and DigiLocker"), when you need stakeholder buy-in via a working
                    artefact, or when speed of first draft matters more than design exploration.
                  </p>
                </div>
              </div>

              <div className="quote-card violet" style={{ marginTop: 24 }}>
                <div className="qt">
                  Work can flow in both directions. The boundary between the Design Agent and Make is
                  not a hard wall, it's a permeable interface designed for round-tripping.
                </div>
                <div className="qa">Use the surface that fits the work, not the workflow chart</div>
              </div>
            </section>

            {/* 5 · Doc frame */}
            <section id="docframe" className="cd-section">
              <div className="cd-section-num">05 · Optional</div>
              <h2 className="cd-section-title">The documentation-frame supplement</h2>
              <p className="cd-section-lede">
                With the Make kit in place, you usually do not need a separate documentation frame.
                Reach for one only when a composite or service-specific pattern isn't being picked up
                cleanly from the kit's component inventory.
              </p>

              <div className="row-2 ai-prose">
                <div>
                  <h3>When to build one</h3>
                  <p>
                    Composite components, status pipelines, SLA indicators, Aadhaar-input groups,
                    DPDP consent surfaces, sometimes need richer context than the kit's guidelines.md
                    carries. A focused frame with one or two such components, labelled with exact
                    Asset names, is the lightest-weight supplement.
                  </p>
                  <h3 style={{ marginTop: 28 }}>How to attach it</h3>
                  <p>
                    Copy the frame's share link from Figma. In Make's chat, paste it as an attachment
                    before your first prompt. Reference it explicitly: "use the composite components
                    shown in the attached UX4G documentation frame, but defer to the Make kit for
                    everything else."
                  </p>
                </div>
                <div>
                  <div style={{ border: "1px solid var(--gray-200)", borderRadius: 10, padding: 20, background: "#fff" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--gray-500)", letterSpacing: "0.06em", marginBottom: 14, textTransform: "uppercase" }}>
                      UX4G · composite supplement · v3.0
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      <div>
                        <div style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", color: "var(--gray-500)", marginBottom: 6 }}>data-display/status-pipeline</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                          {["✓","✓","3","4"].map((v,i) => (
                            <React.Fragment key={i}>
                              <div style={{ width: 22, height: 22, borderRadius: "50%", display: "grid", placeItems: "center", background: i < 2 ? "var(--success)" : i === 2 ? "var(--primary)" : "var(--gray-200)", color: i <= 2 ? "#fff" : "var(--gray-500)", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700 }}>{v}</div>
                              {i < 3 ? <div style={{ height: 2, flex: 1, background: i < 2 ? "var(--success)" : "var(--gray-200)" }} /> : null}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", color: "var(--gray-500)", marginBottom: 6 }}>data-display/sla-indicator</div>
                        <div>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                            <span style={{ fontSize: 11.5, fontWeight: 600 }}>Income cert · 30-day SLA</span>
                            <span style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", color: "var(--primary)" }}>18 left</span>
                          </div>
                          <div style={{ height: 5, borderRadius: 3, background: "var(--gray-200)", overflow: "hidden" }}>
                            <div style={{ width: "40%", height: "100%", background: "var(--primary)" }}></div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: 10.5, fontFamily: "var(--font-mono)", color: "var(--gray-500)", marginBottom: 6 }}>identity/aadhaar-group</div>
                        <div style={{ height: 32, border: "1px solid var(--gray-300)", borderRadius: 5, padding: "6px 10px", fontSize: 12, color: "var(--gray-500)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <span>**** **** 4567</span>
                          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--success)" }}>VERIFIED ✓</span>
                        </div>
                      </div>
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--gray-500)", marginTop: 12, letterSpacing: "0.04em" }}>
                      Attach only when the kit's defaults need supplementing.
                    </div>
                  </div>
                </div>
              </div>

              <Pager
                prev={{ title: "AI overview", href: "UX4G AI.html" }}
                next={{ title: "AI-02 · Coding tools", href: "UX4G AI Coding.html" }}
              />

              <BottomCTA
                text='See the <strong>Figma Make deep dive</strong> for the kit registration workflow, library transfer details, and embed / share caveats.'
                ctaLabel="Open AI-05 · Figma Make ↗"
                ctaHref="UX4G AI Make.html"
              />
            </section>

          </div>

          <Sidebar sections={SECTIONS} active={active}
            extras={[
              { label: "AI overview", href: "UX4G AI.html" },
              { label: "AI-05 · Figma Make", href: "UX4G AI Make.html" },
              { label: "AI-04 · Prompting", href: "UX4G AI Prompting.html" },
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
