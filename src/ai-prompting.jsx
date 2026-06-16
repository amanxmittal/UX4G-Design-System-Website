/* global React, AiShell, BottomCTA, Pager, renderAiPage */

const SECTIONS = [
  { id: "anatomy", label: "Six-part prompt structure" },
  { id: "techniques", label: "Five techniques, with examples" },
  { id: "library", label: "UX4G prompt library" },
  { id: "checkpoints", label: "Checkpoint pattern" },
  { id: "anti", label: "Anti-patterns" },
];

function CopyablePrompt({ tag, name, body }) {
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(body);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  };
  return (
    <div className="prompt-card">
      <div className="pc-head">
        <div className="pc-meta">
          <span className="pc-tag">{tag}</span>
          <span className="pc-name">{name}</span>
        </div>
        <button className="pc-copy" onClick={copy}>{copied ? "Copied ✓" : "Copy"}</button>
      </div>
      <div className="pc-body">{body}</div>
    </div>
  );
}

function AiPrompting() {
  return (
    <AiShell
      code="AI-04"
      crumb="Prompting"
      title="Prompting"
      desc="A library of vetted UX4G prompts your team can copy, plus the five techniques that lift quality the most, with one bad example and one good example each."
      sections={SECTIONS}
    >
      {/* 1 · Six-part prompt structure */}
      <section id="anatomy" className="cd-section">
        <div className="cd-section-num">01 · Structure</div>
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
              <span className="n-num">{p.n}</span>
              <h3 className="n-name">{p.name}</h3>
              <div className="n-rule"></div>
              <p className="n-text">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2 · Techniques */}
      <section id="techniques" className="cd-section">
        <div className="cd-section-num">02 · Techniques</div>
        <h2 className="cd-section-title">Five techniques, with one bad and one good</h2>
        <p className="cd-section-lede">
          The same five techniques from the coding-tools page, expanded with concrete examples.
          Use these names in your documentation; the technical ones are useful when reading
          papers, not when training a team.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 18, margin: "0 0 6px", letterSpacing: "-0.012em" }}>
              Just ask <span style={{ color: "var(--gray-500)", fontWeight: 400, fontSize: 14, fontFamily: "var(--font-mono)" }}>· zero-shot</span>
            </h3>
            <p style={{ fontSize: 14, color: "var(--gray-700)", margin: "0 0 12px" }}>
              Use when the task is so common the model has seen a thousand examples already.
            </p>
            <div className="dd-row">
              <div className="dd-cell dont">
                <div className="dd-label">✕ Don't</div>
                <div className="dd-text">make a form</div>
              </div>
              <div className="dd-cell do">
                <div className="dd-label">✓ Do</div>
                <div className="dd-text">Write a UX4G mobile-number input with bilingual label and a 10-digit numeric pattern. Noto Sans, WCAG AA.</div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 18, margin: "0 0 6px", letterSpacing: "-0.012em" }}>
              Show two examples <span style={{ color: "var(--gray-500)", fontWeight: 400, fontSize: 14, fontFamily: "var(--font-mono)" }}>· few-shot</span>
            </h3>
            <p style={{ fontSize: 14, color: "var(--gray-700)", margin: "0 0 12px" }}>
              Use when you want a specific structure or format. The model imitates structure.
            </p>
            <div className="dd-row">
              <div className="dd-cell dont">
                <div className="dd-label">✕ Don't</div>
                <div className="dd-text">make an alert that looks like UX4G's</div>
              </div>
              <div className="dd-cell do">
                <div className="dd-label">✓ Do</div>
                <div className="dd-text">Write a UX4G success alert.

Example A:
&lt;div class="alert alert-success"&gt;
  &lt;span class="alert-icon"&gt;✓&lt;/span&gt;
  ...

Example B:
&lt;div class="alert alert-warning"&gt;
  &lt;span class="alert-icon"&gt;!&lt;/span&gt;
  ...

Now write the same pattern for an info alert.</div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 18, margin: "0 0 6px", letterSpacing: "-0.012em" }}>
              Ask it to think step by step <span style={{ color: "var(--gray-500)", fontWeight: 400, fontSize: 14, fontFamily: "var(--font-mono)" }}>· chain-of-thought</span>
            </h3>
            <p style={{ fontSize: 14, color: "var(--gray-700)", margin: "0 0 12px" }}>
              Use for multi-step layouts or anything with hidden constraints.
            </p>
            <div className="dd-row">
              <div className="dd-cell dont">
                <div className="dd-label">✕ Don't</div>
                <div className="dd-text">build the grievance filing flow</div>
              </div>
              <div className="dd-cell do">
                <div className="dd-label">✓ Do</div>
                <div className="dd-text">Think step by step.

1. List the UX4G components needed.
2. Plan the 4 screens. Don't generate yet.
3. Confirm with me which screen to build first.
4. Then write the code.

Show your work at each step.</div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 18, margin: "0 0 6px", letterSpacing: "-0.012em" }}>
              Tell it who to be <span style={{ color: "var(--gray-500)", fontWeight: 400, fontSize: 14, fontFamily: "var(--font-mono)" }}>· role / persona</span>
            </h3>
            <p style={{ fontSize: 14, color: "var(--gray-700)", margin: "0 0 12px" }}>
              Use to anchor specialised tone or expertise. The single most leverageable line.
            </p>
            <div className="dd-row">
              <div className="dd-cell dont">
                <div className="dd-label">✕ Don't</div>
                <div className="dd-text">audit this for accessibility</div>
              </div>
              <div className="dd-cell do">
                <div className="dd-label">✓ Do</div>
                <div className="dd-text">You are a senior accessibility auditor with 10 years of WCAG experience and screen-reader certification.

Audit the attached UX4G screen against WCAG 2.1 AA and UX4G's compliance matrix. List violations with line numbers; do not propose fixes yet.</div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 18, margin: "0 0 6px", letterSpacing: "-0.012em" }}>
              Plan first, then build <span style={{ color: "var(--gray-500)", fontWeight: 400, fontSize: 14, fontFamily: "var(--font-mono)" }}>· plan-and-solve</span>
            </h3>
            <p style={{ fontSize: 14, color: "var(--gray-700)", margin: "0 0 12px" }}>
              Use for any flow that spans more than two screens. Plan in chat, build in code.
            </p>
            <div className="dd-row">
              <div className="dd-cell dont">
                <div className="dd-label">✕ Don't</div>
                <div className="dd-text">build a sign-in flow with OTP and DigiLocker</div>
              </div>
              <div className="dd-cell do">
                <div className="dd-label">✓ Do</div>
                <div className="dd-text">First, outline the 5 screens for a UX4G sign-in flow with OTP and DigiLocker, including the auth-error screen.

For each screen, list:
- the UX4G components used
- the validation rules
- the empty / error states

Wait for me to approve before generating any code.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 · Library */}
      <section id="library" className="cd-section">
        <div className="cd-section-num">03 · Library</div>
        <h2 className="cd-section-title">Five vetted prompts your team can copy</h2>
        <p className="cd-section-lede">
          Each prompt has been tested against Claude Code, Cursor and Copilot on the UX4G v3.0
          component set. Replace highlighted placeholders with your specifics and run.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <CopyablePrompt
            tag="BUILD"
            name="A 3-step service form"
            body={`You are a senior front-end developer using the UX4G design system.

Build a 3-step form for [SERVICE_NAME] using UX4G's Stepper, Form Field Group, Input, Select, Checkbox and Button components. Import every component from the UX4G npm package. Reference DESIGN.md and the UX4G Storybook before generating.

Step 1: applicant details (full name as on Aadhaar, DOB DD/MM/YYYY, mobile, email).
Step 2: address with PIN-code lookup.
Step 3: review summary + DPDP 2023 consent surface.

Constraints:
- WCAG 2.1 AA. Visible focus state on every interactive element.
- Noto Sans only. Bilingual (Hindi + English) using lang switches.
- Import from the UX4G npm package; do not write custom CSS for anything UX4G already provides.
- 44px minimum tap target.
- Validation messages explain what to fix, never "Invalid input".

Show your work: list the UX4G components you will use, then write the code.`}
          />
          <CopyablePrompt
            tag="CONVERT"
            name="Convert a hand-rolled HTML page to UX4G"
            body={`Convert the attached HTML to use the UX4G design system.

Rules:
- Replace every hand-rolled control with the matching UX4G component imported from the UX4G npm package.
- Strip every inline style.
- Strip every non-UX4G CSS variable; map to UX4G tokens.
- Do not write custom CSS for anything UX4G already provides.
- Keep the existing copy verbatim.

Output a single component file plus a short diff summary of what you changed and why.`}
          />
          <CopyablePrompt
            tag="REVIEW"
            name="Review a PR against UX4G compliance"
            body={`Review this PR against DESIGN.md and the UX4G design system compliance matrix.

List, in this order:
1. Every place a UX4G component was not used where one exists.
2. Every non-token colour, spacing or radius value.
3. Every WCAG 2.1 AA violation you can detect statically.
4. Every dependency you cannot find in the UX4G npm package or the approved allowlist (slopsquatting risk).

Do not propose fixes yet. Just enumerate, with file:line references.`}
          />
          <CopyablePrompt
            tag="GENERATE"
            name="A UX4G empty state for a service"
            body={`Generate a UX4G empty state for the [SERVICE_NAME] dashboard.

It should:
- Use the UX4G empty-state pattern (icon, title, sub, primary action).
- Title in plain Hindi or English, 7 words max.
- Sub-text explains what to do, 18 words max.
- One primary CTA. No secondary CTAs.
- Render at 1440x900 and on 360px mobile without horizontal scroll.

Return one HTML snippet.`}
          />
          <CopyablePrompt
            tag="AUDIT"
            name="Accessibility audit on a single component"
            body={`You are a senior accessibility auditor with WCAG 2.1 AA certification.

Audit the attached UX4G component (file: [PATH]) for:
- Visible focus, with 3px ring.
- Programmatic label (aria-label or visible label connected by for/id).
- Tab order matches reading order.
- Colour is never the only carrier of meaning.
- Tap target ≥ 44x44.
- Error messages are descriptive, not generic.

For each finding: severity (A / AA / AAA), file:line, fix outline.`}
          />
        </div>
      </section>

      {/* 4 · Checkpoints */}
      <section id="checkpoints" className="cd-section">
        <div className="cd-section-num">04 · Discipline</div>
        <h2 className="cd-section-title">The checkpoint pattern</h2>
        <p className="cd-section-lede">
          The single biggest cause of hallucinated code from the UX4G design system is models generating before they
          understand. Use this two-step opener on any non-trivial task.
        </p>
        <div className="row-2">
          <div>
            <CopyablePrompt
              tag="CP · STEP 1"
              name="Tell me what you have"
              body={`Tell me what you have understood about this task in 5 bullets. List the UX4G components you intend to use. Do not generate code yet.`}
            />
          </div>
          <div>
            <CopyablePrompt
              tag="CP · STEP 2"
              name="Now build, one screen at a time"
              body={`Good. Build only screen 1. Show the file path you will write to. Pause for confirmation before screen 2.`}
            />
          </div>
        </div>
        <p className="ai-prose" style={{ marginTop: 20, fontSize: 14.5 }}>
          The checkpoint pattern catches the two biggest failure modes upfront, model misreading
          the task and model running past the brief, before any code is generated. It costs one
          round-trip and saves five.
        </p>
      </section>

      {/* 5 · Anti-patterns */}
      <section id="anti" className="cd-section">
        <div className="cd-section-num">05 · Pitfalls</div>
        <h2 className="cd-section-title">Anti-patterns to retire</h2>
        <p className="cd-section-lede">
          The prompt habits that look productive but cost you twice the time downstream.
        </p>
        <div className="num-grid cols-2">
          {[
            { n: "01", name: "Long, kitchen-sink prompts", text: "Five paragraphs of context the model can't keep track of. Short prompts beat long ones. Iterate." },
            { n: "02", name: "'Make it nicer'", text: "Vague adjectives like 'nicer', 'cleaner', 'modern' produce drift. Name the specific token, component, or behaviour to change." },
            { n: "03", name: "Asking for fixes before enumeration", text: "Models love to fix things they imagined. Always ask to enumerate problems first, propose fixes in a second pass." },
            { n: "04", name: "Reusing yesterday's chat for a different task", text: "Old context contaminates new tasks. Start a fresh chat for a fresh task; carry context in DESIGN.md, not history." },
          ].map((c) => (
            <div className="num-cell" key={c.n}>
              <span className="n-num">{c.n}</span>
              <h3 className="n-name">{c.name}</h3>
              <div className="n-rule"></div>
              <p className="n-text">{c.text}</p>
            </div>
          ))}
        </div>

        <Pager
          prev={{ title: "AI-02 · Coding tools", href: "UX4G AI Coding.html" }}
          next={{ title: "AI-05 · Figma Make", href: "UX4G AI Make.html" }}
        />

        <BottomCTA
          text='Promptcraft is half the battle. The other half is <strong>checking what the model actually shipped</strong>. See the testing ladder.'
          ctaLabel="Open AI-06 · Testing ↗"
          ctaHref="UX4G AI Testing.html"
        />
      </section>
    </AiShell>
  );
}

renderAiPage(<AiPrompting />);
