/* global React, AiShell, BottomCTA, Pager, renderAiPage */

const SECTIONS = [
  { id: "vibe", label: "Vibe coding" },
  { id: "risks", label: "What the evidence says" },
  { id: "never", label: "The never-paste list" },
  { id: "law", label: "The Indian baseline" },
  { id: "vendors", label: "Vendor checklist" },
  { id: "ladder", label: "The testing ladder" },
];

function AiSafety() {
  return (
    <AiShell
      code="AI-03"
      crumb="Governance & safety"
      title="Governance & safety"
      desc="The hard never-list, the vendor checklist, the testing ladder, and why vibe coding is fine for prototypes and dangerous for citizen-facing production. Aligned with the DPDP Act, 2023 and the Finance Ministry's January 2025 advisory."
      sections={SECTIONS}
    >
      {/* 1 */}
      <section id="vibe" className="cd-section">
        <div className="cd-section-num">01 · Framing</div>
        <h2 className="cd-section-title">Vibe coding: useful name, dangerous default</h2>
        <p className="cd-section-lede">
          The term was coined on 2 February 2025 to describe low-stakes prototyping where you
          don't read the code. The phrase escaped into the wild and now means whatever the
          speaker wants it to. Be explicit in your documentation.
        </p>
        <div className="row-2 ai-prose">
          <div>
            <div className="quote-card">
              <div className="qt">
                "There's a new kind of coding I call 'vibe coding', where you fully give in to the
                vibes, embrace exponentials, and forget that the code even exists."
              </div>
              <div className="qa">Andrej Karpathy · 2 February 2025 · later clarified as a "throwaway tweet"</div>
            </div>
            <div className="quote-card violet">
              <div className="qt">
                "When I talk about vibe coding I mean building software with an LLM without
                reviewing the code it writes."
              </div>
              <div className="qa">Simon Willison · March 2025 · the working definition to teach</div>
            </div>
          </div>
          <div>
            <p><strong style={{ color: "var(--ink)" }}>Two senses, two policies.</strong></p>
            <p>
              <em>Karpathy's strict sense</em>: no reading, no understanding, just vibes. Fine for
              personal weekend prototypes and throwaway demos. Never acceptable for anything that
              touches a citizen.
            </p>
            <p>
              <em>The colloquial sense</em>: any AI-assisted coding. This is just modern software
              development. The security guidance is the same as for human code, plus the
              assumption that AI output is an untrusted pull request.
            </p>
            <p>
              In your departmental policy, use Willison's definition. Then say: vibe coding
              (strict sense) is prohibited on any system that processes citizen data, statutory
              deadlines, or unreleased policy. AI-assisted coding is permitted under the rules in
              AI-02.
            </p>
          </div>
        </div>
      </section>

      {/* 2 */}
      <section id="risks" className="cd-section">
        <div className="cd-section-num">02 · Evidence</div>
        <h2 className="cd-section-title">What the evidence says when nobody reviews</h2>
        <p className="cd-section-lede">
          Four independent studies from 2025, four different methodologies, one consistent
          direction. AI code that ships without human review carries real, measurable security
          risk. For citizen services, "measurable risk" is not a tolerable category.
        </p>
        <div className="risk-stats">
          <div className="risk-stat">
            <div className="big">45<span className="u">%</span></div>
            <div className="what">of AI-generated code samples introduced OWASP Top 10 vulnerabilities.</div>
            <div className="src">Veracode · 2025 · 100+ LLMs · 80 tasks</div>
          </div>
          <div className="risk-stat">
            <div className="big">2.74<span className="u">×</span></div>
            <div className="what">more vulnerabilities than human-written code overall.</div>
            <div className="src">Veracode · 2025 · same study</div>
          </div>
          <div className="risk-stat">
            <div className="big">69<span className="u"></span></div>
            <div className="what">vulnerabilities across 15 AI-generated web apps; CSRF protection was absent in all 15.</div>
            <div className="src">Tenzai · December 2025 · 5 tools tested</div>
          </div>
          <div className="risk-stat">
            <div className="big">10.3<span className="u">%</span></div>
            <div className="what">of 1,645 Lovable showcase apps had critical security flaws exposing 303 endpoints.</div>
            <div className="src">Palmer / Low · 2025 · CVE-2025-48757</div>
          </div>
        </div>

        <div className="row-2 ai-prose" style={{ marginTop: 32 }}>
          <div>
            <p><strong style={{ color: "var(--ink)" }}>Slopsquatting is a real attack class.</strong></p>
            <p>
              An AI hallucinates a non-existent npm package name. An attacker registers it and
              ships malware in the next release. For UX4G work specifically, verify the
              package name matches the official one exactly, do not accept agent-suggested
              variants. Maintain an allowlist; CI fails on unknown dependencies.
            </p>
          </div>
          <div>
            <p><strong style={{ color: "var(--ink)" }}>The comprehension gap is the silent risk.</strong></p>
            <p>
              The team can't debug what they shipped. A Replit AI agent deleted a production
              database in 2025 despite explicit instructions. The post-mortem is the same every
              time: nobody read what the agent did.
            </p>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section id="never" className="cd-section">
        <div className="cd-section-num">03 · Boundaries</div>
        <h2 className="cd-section-title">The hard never-paste list</h2>
        <p className="cd-section-lede">
          What follows must <em>never</em> be entered into a public AI tool. Enterprise tenancies
          with zero-retention contracts move some of these into a "with controls" category, but
          the default policy across departments is the list below.
        </p>
        <div className="never-list">
          {[
            "Citizen personal data, names + DOB + address combinations, Aadhaar fragments, PAN, mobile / email lists.",
            "Biometric data, health records, financial records, transaction logs with PII.",
            "Unreleased policy text, cabinet notes, draft RFPs, procurement evaluations.",
            "Internal logs, error traces with PII, database dumps.",
            "Production credentials, tokens, certificates, signing keys.",
            "File paths, server names, schema details that could enable reconnaissance.",
            "Content marked classified or restricted under the Official Secrets Act.",
            "Anything covered by departmental classification at any level.",
          ].map((it, i) => (
            <div className="never-item" key={i}>
              <div className="x">×</div>
              <div>{it}</div>
            </div>
          ))}
        </div>
        <div className="quote-card" style={{ marginTop: 24 }}>
          <div className="qt">
            "AI tools and AI apps such as ChatGPT, DeepSeek etc. in the office computers and
            devices pose risks for confidentiality of (government) data and documents."
          </div>
          <div className="qa">Department of Expenditure · Ministry of Finance · internal advisory · 29 January 2025</div>
        </div>
      </section>

      {/* 4 */}
      <section id="law" className="cd-section">
        <div className="cd-section-num">04 · Regulation</div>
        <h2 className="cd-section-title">The Indian regulatory baseline</h2>
        <p className="cd-section-lede">
          Three live instruments shape every AI decision a department makes. None is the whole
          story, and the law is moving. Treat these as pointers, not as a substitute for
          departmental legal review.
        </p>
        <div className="reg-row">
          <div className="reg-card">
            <div className="ref">DPDP Act, 2023 · §10</div>
            <h4>Significant Data Fiduciaries</h4>
            <p>Empowers Central Government to notify Data Fiduciaries as SDFs based on data volume, sensitivity, and risk to rights, sovereignty and public order. Most large government portals will be designated SDFs.</p>
          </div>
          <div className="reg-card">
            <div className="ref">MeitY · March 2024</div>
            <h4>GenAI labelling advisory</h4>
            <p>Advisory 2(4)/2023-CyberLaws-3, revised 15 March 2024. Aimed at intermediaries; mandates labelling of AI-generated content and addresses deepfakes and electoral integrity.</p>
          </div>
          <div className="reg-card">
            <div className="ref">Finance Ministry · Jan 2025</div>
            <h4>No public LLMs on office devices</h4>
            <p>Department of Expenditure internal note directing officers not to use AI tools such as ChatGPT and DeepSeek on office computers. The de-facto baseline across departments as of May 2026.</p>
          </div>
        </div>

        <div style={{ marginTop: 28, background: "#fff", border: "1px solid var(--gray-200)", borderRadius: 12, padding: "20px 24px" }}>
          <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 16, letterSpacing: "-0.012em", margin: "0 0 14px" }}>SDF obligations once designated</h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, fontSize: 13.5, color: "var(--gray-700)", lineHeight: 1.55 }}>
            <div><strong style={{ color: "var(--ink)" }}>(a)</strong> Appoint a Data Protection Officer based in India.</div>
            <div><strong style={{ color: "var(--ink)" }}>(b)</strong> Appoint an independent data auditor.</div>
            <div><strong style={{ color: "var(--ink)" }}>(c)</strong> Undertake periodic Data Protection Impact Assessments.</div>
          </div>
        </div>
      </section>

      {/* 5 */}
      <section id="vendors" className="cd-section">
        <div className="cd-section-num">05 · Procurement</div>
        <h2 className="cd-section-title">Ten questions for any AI vendor</h2>
        <p className="cd-section-lede">
          A checklist for the procurement cell, the legal officer, and the CISO. No vendor that
          can't answer all ten in writing should be approved for departmental use against
          citizen data.
        </p>
        <div className="checklist">
          {[
            { n: 1, head: "Tenancy and residency", body: "Is there an India-region deployment? Where are prompts, completions and embeddings stored?" },
            { n: 2, head: "Training opt-out", body: "Is enterprise / API traffic excluded from model training by contractual default, not opt-in?" },
            { n: 3, head: "Retention controls", body: "What is the default retention? Can it be set to zero? How is deletion verified?" },
            { n: 4, head: "Access logs", body: "Are admin audit logs available? Who at the vendor can see prompts?" },
            { n: 5, head: "DPA / SCCs", body: "Data Processing Addendum reflecting DPDP Act obligations? SCCs available for cross-border transfers?" },
            { n: 6, head: "SSO + RBAC + DLP", body: "Does it integrate with the department's identity provider and data-loss-prevention tooling?" },
            { n: 7, head: "Sub-processors", body: "What sub-processors handle the data? Can high-risk ones be excluded?" },
            { n: 8, head: "Certifications", body: "SOC 2 Type II, ISO 27001, ISO 27701. For sovereign cloud, MeitY empanelment." },
            { n: 9, head: "Indemnification", body: "Does the vendor indemnify for IP claims arising from training data?" },
            { n: 10, head: "Vulnerability disclosure", body: "Published security.txt or VDP? An SLA on critical issues?" },
          ].map((it) => (
            <div className="check-item" key={it.n}>
              <div className="n">{String(it.n).padStart(2, "0")}</div>
              <div className="body">
                <strong>{it.head}</strong> <span>· {it.body}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6 */}
      <section id="ladder" className="cd-section">
        <div className="cd-section-num">06 · Quality gates</div>
        <h2 className="cd-section-title">The testing ladder. Every AI-touched PR climbs it.</h2>
        <p className="cd-section-lede">
          Treat AI output as a draft that must pass the same gates as any human contribution.
          The ladder is layered, every rung adds confidence. Skip none for citizen-facing
          services.
        </p>
        <div className="ladder">
          <div className="ladder-row head">
            <div>Layer</div>
            <div>Tool</div>
            <div>What it catches</div>
          </div>
          {[
            { layer: "Token compliance", tool: "Stylelint with UX4G token config; CSS variable allowlists", catch: "Use of non-UX4G colours, spacing, radii." },
            { layer: "Component compliance", tool: "Storybook MCP query + Component Manifest; ESLint rule banning ad-hoc HTML", catch: "Reinvented buttons, inputs, cards." },
            { layer: "Accessibility · automated", tool: "axe-core via @axe-core/playwright + Storybook a11y addon", catch: "Missing labels, low contrast, ARIA misuse, focus order." },
            { layer: "Accessibility · semi-auto", tool: "Axe DevTools Intelligent Guided Tests; Recite Me Checker", catch: "Colour meaning, alt-text quality, keyboard traps." },
            { layer: "Accessibility · manual", tool: "Screen reader walkthrough (NVDA / TalkBack / VoiceOver); UX4G Compliance Matrix; Audit 360", catch: "Real user issues, Hindi / regional language quirks." },
            { layer: "Functional behaviour", tool: "Storybook interaction tests + Playwright E2E; MCP run-story-tests for self-heal loops", catch: "Broken states, hover / focus regressions." },
            { layer: "Security", tool: "Gitleaks (secrets), OSV-Scanner (deps), Semgrep / CodeQL (SAST), SBOM", catch: "OWASP Top 10, slopsquatting, supply chain." },
            { layer: "Visual regression", tool: "Chromatic / Percy snapshot diffing against the UX4G Storybook", catch: "Token drift, layout shifts." },
            { layer: "Performance", tool: "Lighthouse CI; gzipped bundle ceiling", catch: "Regressions on 2G / 3G / 4G citizen networks." },
            { layer: "Cross-locale", tool: "Snapshot tests in English + Hindi + one other Indian script", catch: "Devanagari / Tamil / Bengali wrap, RTL, font fallback." },
          ].map((r, i) => (
            <div className="ladder-row" key={i}>
              <div className="l-layer">{r.layer}</div>
              <div className="l-tool">{r.tool}</div>
              <div className="l-catch">{r.catch}</div>
            </div>
          ))}
        </div>

        <div className="quote-card violet" style={{ marginTop: 28 }}>
          <div className="qt">
            "Review this PR against DESIGN.md and our UX4G compliance matrix. List every place a
            UX4G component was not used where one exists, every non-token value, every WCAG 2.1
            AA violation you can detect statically. Do not propose fixes yet, just enumerate."
          </div>
          <div className="qa">A reliable first-pass review prompt for AI-touched PRs</div>
        </div>

        <Pager
          prev={{ title: "AI-02 · Coding tools", href: "UX4G AI Coding.html" }}
          next={{ title: "Back to AI overview", href: "UX4G AI.html" }}
        />

        <BottomCTA
          text='Run the <strong>testing ladder, vendor checklist, and never-paste list</strong> through every team using AI on UX4G. The poster version is one page; ask NeGD.'
          ctaLabel="Back to AI overview ↗"
          ctaHref="UX4G AI.html"
        />
      </section>
    </AiShell>
  );
}

renderAiPage(<AiSafety />);
