/* global React, AiShell, BottomCTA, Pager, renderAiPage */

const SECTIONS = [
  { id: "what", label: "What Make actually is" },
  { id: "inputs", label: "Three context inputs" },
  { id: "kit", label: "Register the UX4G Make kit" },
  { id: "transfer", label: "What the kit transfers" },
  { id: "share", label: "Embed & share" },
  { id: "agent", label: "Make + Design Agent" },
];

function AiMake() {
  return (
    <AiShell
      code="AI-05"
      crumb="Figma Make"
      title="Figma Make"
      desc="Figma's prompt-to-app product, in detail. What its model is, the three context inputs, and how to register the UX4G npm package as a Make kit so every prompt generates component-accurate code from the first turn."
      sections={SECTIONS}
    >
      {/* 1 · What */}
      <section id="what" className="cd-section">
        <div className="cd-section-num">01 · Product</div>
        <h2 className="cd-section-title">What Figma Make actually is</h2>
        <p className="cd-section-lede">
          Make is a two-pane, chat-first prompt-to-app product launched at Config 2025. A
          persistent AI chat on the left; a live, interactive preview of the generated web app
          on the right. Output is real React + Tailwind code you can switch to a Code view, edit,
          and re-prompt.
        </p>
        <div className="make-sketch">
          <div className="ms-chat">
            <div className="ms-msg user">build a UX4G OTP screen with 6 cells</div>
            <div className="ms-msg bot">Using the UX4G Make kit. Components: Input/OTP, Button/Primary, Alert/Info. Generating now.</div>
            <div className="ms-msg bot">Done. Preview on the right. What should I change?</div>
            <div className="ms-msg user">add a resend countdown</div>
          </div>
          <div className="ms-preview">
            <div className="ms-label">PREVIEW · LIVE</div>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 22, letterSpacing: "-0.018em", color: "var(--ink)" }}>
              Enter the 6-digit code
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, color: "var(--gray-500)", letterSpacing: "0.04em" }}>
              Sent to +91 ●●●●● ●●234
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
              {[4,8,3,"","",""].map((v,i)=>(
                <div key={i} style={{ width: 38, height: 48, border: "1px solid var(--gray-300)", borderRadius: 6, display: "grid", placeItems: "center", fontSize: 17, fontWeight: 600, color: "var(--ink)", background: "#fff" }}>{v}</div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 8 }}>
              <span style={{ fontSize: 12, color: "var(--gray-500)", fontFamily: "var(--font-mono)" }}>Resend in 0:24</span>
              <span style={{ background: "var(--primary)", color: "#fff", padding: "8px 14px", borderRadius: 6, fontSize: 13, fontWeight: 600 }}>Verify →</span>
            </div>
          </div>
        </div>
        <p style={{ fontSize: 12.5, color: "var(--gray-500)", fontStyle: "italic", marginTop: 10, textAlign: "center" }}>
          AI-generated adaptation of how the interface looks while using Figma Make.
        </p>
        <p className="ai-prose" style={{ marginTop: 20 }}>
          Behind the chat is a model that has Figma library context plus a registered Make kit
          plus, optionally, external attachments and live connector data. The next three sections
          unpack each of those.
        </p>
      </section>

      {/* 2 · Inputs */}
      <section id="inputs" className="cd-section">
        <div className="cd-section-num">02 · Inputs</div>
        <h2 className="cd-section-title">Three context inputs that decide quality</h2>
        <p className="cd-section-lede">
          Make uses three context channels in addition to its prompt. With UX4G shipping as an
          npm package, all three are available to UX4G teams today.
        </p>
        <div className="input-strip">
          <div className="input-cell">
            <div className="ic-glyph">A</div>
            <div className="ic-when">GA · 2 APRIL 2026 · WORKS WITH UX4G</div>
            <h3>Make kits</h3>
            <p>A React npm package + machine-generated guidelines.md. Lets Make use your actual production components. The UX4G npm package can be registered as a Make kit today, this is the channel to invest in first.</p>
          </div>
          <div className="input-cell">
            <div className="ic-glyph">B</div>
            <div className="ic-when">AVAILABLE TODAY</div>
            <h3>Make attachments</h3>
            <p>Paste a Figma frame URL, an image, or a Notion / Jira / GitHub document for one-shot context. Useful for supplementing the kit with documentation of composite components.</p>
          </div>
          <div className="input-cell">
            <div className="ic-glyph">C</div>
            <div className="ic-when">GA · APRIL 2026</div>
            <h3>Connectors</h3>
            <p>Persistent integrations with Notion, GitHub, Linear, Jira and more. Prompts can reference live specs and copy, so the prototype reflects the actual requirement.</p>
          </div>
        </div>
      </section>

      {/* 3 · Register the kit */}
      <section id="kit" className="cd-section">
        <div className="cd-section-num">03 · Setup</div>
        <h2 className="cd-section-title">Register the UX4G Make kit in three steps</h2>
        <p className="cd-section-lede">
          The single most important action in this section. Without a kit, Make falls back to
          generic UI primitives. With a kit, every generation starts from real UX4G components.
        </p>
        <div className="row-2 ai-prose">
          <div>
            <div className="steps">
              {[
                { t: "Open Make settings → Make kits.", b: "Available on Professional, Organisation and Enterprise plans. Personal plans don't include Make kits today." },
                { t: "Add the UX4G npm package by name.", b: "Public npm and (paid plans) private Figma org npm registries are supported. UX4G is on public npm, so any team can register it." },
                { t: "Edit the auto-generated guidelines.md.", b: "Figma creates a guidelines.md from the kit. Edit it to add UX4G-specific constraints, government UX patterns, DD/MM/YYYY date format, Aadhaar input rules, required bilingual labels.", tip: "Tip · The guidelines.md edit is the most leveraged investment in this section. Spend an afternoon on it." },
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
          </div>
          <div>
            <div className="code-window">
              <div className="cw-bar">
                <div className="dots"><i></i><i></i><i></i></div>
                <span className="title">guidelines.md · UX4G additions (excerpt)</span>
              </div>
<pre>
<span className="c"># UX4G design system Make kit</span>

<span className="c"># Dates</span>
Always render dates as <span className="v">DD/MM/YYYY</span>.
Never use US-format MM/DD/YYYY in citizen UI.

<span className="c"># Aadhaar</span>
Aadhaar number inputs are <span className="v">12 digits</span>,
masked as **** **** XXXX on display.
On a verified user, render as read-only.

<span className="c"># Bilingual</span>
Every form label must support
<span className="v">Hindi + English</span>. Use UX4G's
language switcher in the page header.

<span className="c"># Consent (DPDP 2023)</span>
A consent surface is required on the
final step of every form that
captures personal data.
</pre>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · Library transfer */}
      <section id="transfer" className="cd-section">
        <div className="cd-section-num">04 · Transfer</div>
        <h2 className="cd-section-title">What the kit + library connection transfers</h2>
        <p className="cd-section-lede">
          With the kit installed, component structure transfers cleanly. The connected Figma
          library still contributes styles (colours, Noto Sans) on top of the kit's component
          inventory.
        </p>
        <div className="row-stack ai-prose">
          <div>
            <h3>What's covered by the kit</h3>
            <p>
              Every UX4G component in the npm package, plus structural rules from
              <code className="inline">guidelines.md</code>. Make instantiates real component instances, not
              look-alikes, so the generated React code already imports from the UX4G package and
              uses production class names.
            </p>
            <h3 style={{ marginTop: 28 }}>What's covered by the library</h3>
            <p>
              Colour values, Google fonts (Noto Sans transfers as-is), and any tokens defined as
              Figma variables in the UX4G file. The kit and the library are additive; both
              contribute, and where they overlap, the kit wins.
            </p>
            <h3 style={{ marginTop: 28 }}>What still needs a documentation frame</h3>
            <p>
              Composite government patterns, status pipelines with field-verification stages,
              SLA indicators with statutory deadline rules, sometimes need richer context. Drop a
              documentation frame in as a Make attachment for those.
            </p>
          </div>
          <div>
            <div className="surface-table">
              <div className="surface-row head">
                <div>Asset</div>
                <div>Source</div>
                <div>Transfers?</div>
              </div>
              <div className="surface-row">
                <div className="s-name">Component structure<span className="s-meta">Button, Input, Alert, OTP</span></div>
                <div className="s-what">UX4G Make kit (npm)</div>
                <div><span className="s-pill ready"><span className="dot"></span>Yes, via kit</span></div>
              </div>
              <div className="surface-row">
                <div className="s-name">Colour tokens<span className="s-meta">UX4G primary palette</span></div>
                <div className="s-what">Figma library + kit</div>
                <div><span className="s-pill ready"><span className="dot"></span>Yes</span></div>
              </div>
              <div className="surface-row">
                <div className="s-name">Noto Sans<span className="s-meta">Google font</span></div>
                <div className="s-what">Library + kit</div>
                <div><span className="s-pill ready"><span className="dot"></span>Yes</span></div>
              </div>
              <div className="surface-row">
                <div className="s-name">Composite patterns<span className="s-meta">Pipeline, SLA, Stepper</span></div>
                <div className="s-what">guidelines.md + attachment</div>
                <div><span className="s-pill partial"><span className="dot"></span>Improve with attachment</span></div>
              </div>
              <div className="surface-row">
                <div className="s-name">Government rules<span className="s-meta">Aadhaar, DPDP consent, DD/MM/YYYY</span></div>
                <div className="s-what">Edited guidelines.md</div>
                <div><span className="s-pill ready"><span className="dot"></span>Yes, after edit</span></div>
              </div>
              <div className="surface-row">
                <div className="s-name">Devanagari / Tamil glyphs<span className="s-meta">multi-script</span></div>
                <div className="s-what">Noto Sans fallbacks</div>
                <div><span className="s-pill partial"><span className="dot"></span>Partial</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 · Share */}
      <section id="share" className="cd-section">
        <div className="cd-section-num">05 · Sharing</div>
        <h2 className="cd-section-title">Embed and share, with one big caveat</h2>
        <p className="cd-section-lede">
          Make prototypes embed into Figma Design, FigJam and Figma Slides. Useful for internal
          review. The chat history travels with the prototype URL unless you publish it
          somewhere else.
        </p>
        <div className="num-grid cols-2">
          <div className="num-cell">
            <span className="n-num">01</span>
            <h3 className="n-name">Embed into Figma Slides</h3>
            <div className="n-rule"></div>
            <p className="n-text">For internal walkthroughs. Reviewers see the live prototype embedded in the deck and can interact without leaving Figma. Best for non-confidential reviews.</p>
          </div>
          <div className="num-cell">
            <span className="n-num">02</span>
            <h3 className="n-name">Publish to a separate URL</h3>
            <div className="n-rule"></div>
            <p className="n-text">Strips the chat history. Use this for any external share, vendor handoff, or anything that might leave departmental control. The default behaviour leaks chat.</p>
          </div>
          <div className="num-cell">
            <span className="n-num">03</span>
            <h3 className="n-name">Embed into Figma Design / FigJam</h3>
            <div className="n-rule"></div>
            <p className="n-text">Useful for working sessions, paired with designers iterating in the same file. Same chat-history caveat applies.</p>
          </div>
          <div className="num-cell" style={{ background: "var(--amber-soft)" }}>
            <span className="n-num">04</span>
            <h3 className="n-name">Caveat · chat history travels</h3>
            <div className="n-rule"></div>
            <p className="n-text">By default, anyone with the prototype link can see the chat. For government internal reviews of unreleased policy or draft services, this is a confidentiality risk. Publish to a separate URL or share screenshots.</p>
          </div>
        </div>
      </section>

      {/* 6 · Design Agent */}
      <section id="agent" className="cd-section">
        <div className="cd-section-num">06 · Together</div>
        <h2 className="cd-section-title">How Make and the Figma Design Agent fit together</h2>
        <p className="cd-section-lede">
          Two separate Figma AI products, designed to round-trip. Use the surface that fits the
          work, not the workflow chart.
        </p>
        <div className="row-2 ai-prose">
          <div>
            <p>
              Use the <strong style={{ color: "var(--ink)" }}>Figma Design Agent</strong> on the canvas to generate and iterate
              design layers, clarifying intent, flows, states and structure using UX4G components.
              Hands-on editing is fast and the agent stays out of the way when you take over.
            </p>
            <p>
              Use <strong style={{ color: "var(--ink)" }}>Figma Make</strong> to generate working code from those designs, using the
              UX4G Make kit for component-accurate output. The code view lets you re-prompt or
              edit directly, and the live preview reacts to changes immediately.
            </p>
            <p>
              Work can flow in both directions: designs from Make can be brought back into Figma
              Design for agent-assisted iteration, and designs from the agent can be sent to Make
              for code generation.
            </p>
          </div>
          <div>
            <div className="quote-card violet">
              <div className="qt">
                Start in the Design Agent to clarify intent. Hand off to Make to ship working
                code. Bounce back to the agent to iterate. The kit makes the handoff lossless.
              </div>
              <div className="qa">The recommended UX4G workflow as of May 2026</div>
            </div>
            <div style={{ marginTop: 14, padding: "18px 20px", border: "1px solid var(--gray-200)", borderRadius: 10, background: "#fff" }}>
              <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", margin: "0 0 8px" }}>The single highest-impact NeGD action</h4>
              <p style={{ fontSize: 13.5, color: "var(--gray-700)", lineHeight: 1.55, margin: 0 }}>
                Publish an opinionated <code className="inline">guidelines.md</code> for the UX4G Make kit, complete
                with government UX patterns, and distribute it to state departments. One-time
                investment, unlocks every Make user against UX4G.
              </p>
            </div>
          </div>
        </div>

        <Pager
          prev={{ title: "AI-01 · In Figma", href: "UX4G AI Figma.html" }}
          next={{ title: "AI-06 · Testing", href: "UX4G AI Testing.html" }}
        />

        <BottomCTA
          text='Make produces real code. Real code needs <strong>real review</strong>. See the testing ladder before anything Make-generated ships to citizens.'
          ctaLabel="Open AI-06 · Testing ↗"
          ctaHref="UX4G AI Testing.html"
        />
      </section>
    </AiShell>
  );
}

renderAiPage(<AiMake />);
