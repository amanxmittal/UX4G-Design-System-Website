# Integrating AI Tools with the UX4G Design System: A Practical Guide for Government Design & Development Teams

## TL;DR
- **Treat AI as a junior collaborator that must be told about UX4G explicitly.** Inside Figma, enable the UX4G team library before prompting and use exact component names; inside coding tools like Claude Code, Cursor, GitHub Copilot, and Codex, commit a project-level instructions file (`CLAUDE.md` / `.cursor/rules/*.mdc` / `.github/copilot-instructions.md` / `AGENTS.md`) that points the agent at the UX4G CDN, the GitHub repo, and a short `DESIGN.md` describing tokens, do's and don'ts.
- **Figma Make is now component-aware via "Make kits" (rolled out 2 April 2026), but only for React npm packages.** Because UX4G ships as a CDN bundle (`cdn.ux4g.gov.in/UX4G@2.0.8/...`) and not an npm package, full kit-level integration is not yet available; in the interim, use Figma library connection, paste documentation frames as Make attachments, and use prompt templates that name UX4G components verbatim.
- **For a government context governed by the DPDP Act, 2023 and the Finance Ministry's 29 January 2025 internal advisory against ChatGPT/DeepSeek on office devices, never paste citizen personal data, Aadhaar/PAN fragments, internal drafts, or unreleased policy text into public LLMs.** Use enterprise tenancies with data-retention controls, run Storybook/`axe-core` checks on every AI-generated screen, and require human review before merge.

## Key Findings

1. **Figma's AI surface has three distinct products, and only one is component-aware today.** First Draft (the in-canvas AI panel) generates designs from Figma-built wireframing libraries and cannot use a custom design system today; Figma Make (the prompt-to-app product launched at Config 2025) is the chat-first preview-driven app builder; and the Figma MCP server (Dev Mode) exposes selected frames, variables and components to external coding agents over the Model Context Protocol.
2. **Figma Make's "Make kits" (GA 2 April 2026) are the only path to truly component-aware generation, and they require a React npm package.** UX4G is distributed only as CDN + GitHub, so today UX4G teams should rely on (a) connecting the UX4G Figma library, (b) using Make attachments to feed in a documentation frame, and (c) explicit-name prompting. A roadmap option is for NeGD to publish `@ux4g/react` to npm.
3. **In AI coding tools, the durable pattern is "context-as-text".** All four major agents — Claude Code (CLAUDE.md / Skills), Cursor (`.cursor/rules/*.mdc`), GitHub Copilot (`.github/copilot-instructions.md` and path-scoped `.instructions.md`), and Codex/agentic CLIs (`AGENTS.md`) — read plain-Markdown context files. A single, well-written `DESIGN.md` plus a per-tool rules file is the highest-leverage investment a design system team can make.
4. **Storybook MCP is the most accurate way to expose a code design system to AI agents.** With `@storybook/addon-mcp`, agents can query a Component Manifest and run interaction/`axe-core` tests against generated stories — closing the loop between generation and design-system compliance.
5. **"Vibe coding" — coined by Andrej Karpathy on 2 February 2025 — is fine for prototypes, dangerous for production.** Veracode's 2025 GenAI Code Security Report tested 100+ LLMs across 80 coding tasks in Java, JavaScript, Python, and C# and found that 45% of AI-generated code samples failed security tests by introducing OWASP Top 10 vulnerabilities — "Java was the riskiest language, with a 72% security failure rate across tasks." The same report found AI-generated code carries 2.74× more vulnerabilities overall than human-written code; CodeRabbit's 17 December 2025 "State of AI vs Human Code Generation" report on 470 open-source GitHub PRs found AI co-authored code 2.74× more likely to introduce XSS vulnerabilities specifically. For citizen-facing government services, AI output must be treated as untrusted draft, not finished code.
6. **The most effective prompts for design-system work follow a six-part structure** (Context → Role → Instructions → Specifics → Parameters → Examples), with explicit zero-shot / few-shot / chain-of-thought patterns where appropriate. Translate the jargon: "few-shot" = "show two examples"; "chain-of-thought" = "ask it to reason step by step"; "role" = "tell it who to be".
7. **For Indian government services, the controlling rules are the DPDP Act, 2023 (especially Section 10 obligations for Significant Data Fiduciaries) and the MeitY March 2024 GenAI advisory on labelling.** The 29 January 2025 Finance Ministry (Department of Expenditure) internal note explicitly directed officers not to use ChatGPT and DeepSeek on office devices because they *"pose risks for confidentiality of (government) data and documents"* (Reuters, confirmed by three Finance Ministry officials). Treat this as the de-facto baseline across departments.

## Details

### 1. Using the UX4G design system inside Figma with AI

**The three AI features inside Figma you'll encounter:**

| Feature | What it does | UX4G readiness |
|---|---|---|
| **First Draft (Figma AI panel)** | Generates wireframes / first-pass screens from a prompt and a chosen Figma-built library | Cannot use UX4G today. Figma's docs state: *"It's not possible to generate designs using your own design system, although we hope to make that functionality available soon."* |
| **Figma Make** | Chat-first prompt-to-app with a live preview pane; generates working React + Tailwind code | Partial — can connect a Figma library for *styles* (colors, Google fonts); component-aware generation requires a React **Make kit** delivered via npm |
| **Figma MCP server (Dev Mode)** | Exposes selected frames, variables, and Code Connect mappings to external agents (Cursor / Claude Code / Copilot / Codex) over MCP | Best path today — works with the UX4G Figma file and a published code mirror |

**Workflow for designers using UX4G inside Figma Make:**

1. **Open a file already attached to the UX4G Figma library** (Assets → Team library → enable UX4G). Figma Make can only see styles/components from libraries enabled on the file.
2. **Reference UX4G component names verbatim** in your prompt — e.g., `button/primary/large`, `input/text/default`. Romina Kavcic's testing on `learn.thedesignsystem.guide` shows that naming exactly as they appear in Assets is the single biggest determinant of which components Figma Make actually instantiates instead of inventing new ones.
3. **Use a two-prompt pattern**: a *system setup prompt* that loads the design system context, then a *screen prompt* with minimal structural scaffolding. Suniv Ashraf's published workflow notes: "Always name your component library and force Make to use it" and "Use a checkpoint prompt ('Tell me what you have… Don't generate prompts yet.') to prevent hallucination."
4. **Paste a "documentation frame"** into Figma Make if components aren't being picked up. Community workarounds on the Figma Forum report that copying instance sets into a fresh frame and linking that frame as an attachment is the most reliable way to surface UX4G components today.
5. **Use Make attachments and connectors** (GA April 2026) to bring in specs from Notion / Jira / GitHub so the prototype reflects the actual requirement, not the model's guess.
6. **Iterate one change at a time and use Revert as a workflow tool** — short prompts beat long ones.

**Known limitation:** Independent testing by Gerard Pàmies (Bootcamp/Medium) confirms that Figma Make currently extracts only styling information (colors, Google fonts) from a connected library and ignores custom typefaces and component structure. UX4G uses Noto Sans (a Google font), so colors and type should transfer; complex composite components will not.

### 2. Using the UX4G design system in AI coding tools

There are five practical channels to give an AI coding agent UX4G context. Use them in combination.

**(a) A project-level instructions file.** The current best practice is to write a single `DESIGN.md` at the project root plus a per-tool rules file:

```
project-root/
├── DESIGN.md              # The system itself (tokens, components, do's & don'ts)
├── CLAUDE.md              # For Claude Code (or symlink to DESIGN.md)
├── AGENTS.md              # For Codex, agentic CLIs, Copilot CLI
├── .cursor/rules/
│   └── ux4g.mdc           # Cursor project rule
├── .github/
│   └── copilot-instructions.md   # For GitHub Copilot
```

The instruction in each rules file should be short and imperative — e.g.:

```
--- description: UX4G design system rules
    globs: ["**/*.tsx","**/*.jsx","**/*.html","**/*.css"] ---
Before generating any UI, read DESIGN.md at the project root.
- Use ONLY the UX4G CSS classes documented at https://doc.ux4g.gov.in
- Include the UX4G CSS/JS via the official CDN
  (https://cdn.ux4g.gov.in/UX4G@2.0.8/css/ux4g-min.css and …/js/ux4g.min.js)
- Use Noto Sans as the type family
- Follow WCAG 2.1 AA (UX4G's compliance matrix)
- Never invent new colors, spacing values, or component names
- If unsure, refer to DESIGN.md; do not guess
```

**(b) A well-structured `DESIGN.md`.** Process to Pixels' analysis of high- and low-performing files concludes the common failure mode is "files that start with a colour palette" with no context: "What a model actually needs is constraint — here's what the system permits, what it forbids, and what to do when it hits a situation you didn't anticipate." Sections that consistently improve output:
- Product brief (who uses this, in what conditions)
- Design principles (3–7 sentences)
- Tokens with intent and boundary (e.g., "`primary: #1B4DFF` — CTAs and active states only; never a background; one per screen")
- Typography decision logic (Noto Sans scale; when to use Devanagari fallbacks)
- Component inventory with usage notes
- Don'ts (the most-skipped section, the highest-value)

**(c) The Figma MCP server.** The remote server at `https://mcp.figma.com/mcp` (or the desktop server at `http://127.0.0.1:3845/sse`) lets Cursor, VS Code/Copilot, Claude Code, and Codex pull variables, components, and layout data from the UX4G Figma file directly. Combined with **Code Connect** (`@figma/code-connect` on npm), design components in the UX4G Figma file are mapped to the actual React/HTML implementations so the agent uses the production component instead of inventing one. Figma's blog states explicitly: *"By providing references to specific variables, components, and styles, the Figma MCP server can make generated code more precise, efficient, and reduce LLM token usage."*

**(d) Storybook MCP.** Once UX4G v2 components are published in a Storybook, installing `@storybook/addon-mcp` exposes a Component Manifest that any MCP-aware agent can query. From the Storybook docs: agents can run interaction tests and accessibility checks on generated stories and "fix issues and re-run the tests… creating a self-healing loop." For a government design system, this is the highest-leverage investment because the same MCP serves designers, developers and reviewers.

**(e) Referencing the UX4G GitHub repo or CDN.** When a UX4G React port lands (currently UX4G ships only as CSS/JS via `cdn.ux4g.gov.in`), it can be added the same way any npm package is referenced — `npm install @ux4g/react` and an instruction line in `DESIGN.md`/rules. Until then, instruct the agent to load CSS/JS via the CDN above and to use UX4G's documented class names.

**Comparison of tool-specific files (as of May 2026):**

| Tool | Primary file | Notes |
|---|---|---|
| Claude Code | `CLAUDE.md` at repo root | Also reads `.claude/skills/*.md` (Skills) and AGENTS.md |
| Cursor | `.cursor/rules/*.mdc` (with frontmatter `globs:`) | Legacy `.cursorrules` still supported |
| GitHub Copilot | `.github/copilot-instructions.md` (repo-wide); `.github/instructions/*.instructions.md` (path-scoped) | Repo file capped at first 4,000 characters for code review |
| Codex / agentic CLIs | `AGENTS.md` (open standard) | Works alongside CLAUDE.md and Copilot instructions |
| Figma Make (in Figma) | A `guidelines.md` and per-component spec markdown attached to the project | Generated automatically by Figma Make from a Make kit, then editable |

### 3. Vibe coding — what it is, what it isn't, and the risks for government work

The term "vibe coding" was coined by Andrej Karpathy on 2 February 2025: *"There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."* He clarified later that it was a "shower of thoughts throwaway tweet" originally intended to describe low-stakes prototyping where you do not read the code.

Simon Willison's working definition (March 2025) is the one to teach non-engineers: **"When I talk about vibe coding I mean building software with an LLM without reviewing the code it writes."** If an LLM wrote the code but a developer reviewed, tested, and understood it, that is *software development with AI assistance*, not vibe coding.

**Core risks for government services (documented in 2025–2026 research):**
- Security startup Tenzai's December 2025 study tested Claude Code, OpenAI Codex, Cursor, Replit, and Devin — each prompted to build three identical web applications — and found **69 vulnerabilities across all 15 apps, including roughly 6 rated "critical"; CSRF protection was absent in all 15 apps and SSRF was present in every tool tested** (reported by CSO Online and InfoWorld).
- Veracode's 2025 GenAI Code Security Report (100+ LLMs, 80 coding tasks) found **45% of AI-generated code samples failed security tests by introducing OWASP Top 10 vulnerabilities**, with Java the riskiest language at a 72% failure rate; AI-generated code carried 2.74× more vulnerabilities overall than human-written code.
- CodeRabbit's December 2025 analysis of 470 open-source PRs (320 AI-co-authored, 150 human-only) found AI code 2.74× more likely to introduce XSS vulnerabilities and ~1.7× more major issues overall.
- "Slopsquatting" — AI hallucinates a non-existent npm package name and an attacker registers it to ship malware.
- A "comprehension gap" where the team cannot debug what they shipped.
- *"Vibe coding fundamentally breaks traditional application security models by creating a development culture where pre-production security tools are often bypassed entirely"* (Contrast Security).
- Real-world failures: in 2025, security researchers Matt Palmer and Kody Low built an automated scanner and **found 170 of 1,645 Lovable showcase apps (10.3%) had critical security flaws exposing 303 vulnerable endpoints — leaking names, emails, financial records, and API keys** (first reported to Lovable on 21 March 2025; catalogued as CVE-2025-48757). A Replit AI agent deleted a production database despite explicit instructions.

**Best practices teams must adopt:**
1. **Treat all AI output as an untrusted pull request.** Human review, lint, type-check, unit + interaction tests, `axe-core`, and SAST run before merge.
2. **Constrain the model** with a system prompt or rules file that mandates parameterised queries, output encoding, secrets in a vault, dependency allowlists, and bounds checks.
3. **Decompose tasks into small prompts** and commit frequently (Git as a vibe-coding safety net).
4. **Verify dependencies** the AI suggests against your allowlist; check the package actually exists and is the right one.
5. **For citizen-facing or sensitive workloads, prohibit "pure" vibe coding** — every line must be read.

### 4. Prompting techniques — with plain-language names for non-ML staff

Translate the academic vocabulary into accessible names for your documentation:

| Technical name | Plain-language name | Use when… |
|---|---|---|
| Zero-shot prompting | "Just ask" | The task is common (e.g., "Write a sentiment classifier") |
| One-shot / Few-shot | "Show two examples" | You want a specific format or pattern |
| Chain-of-thought | "Ask it to think step by step" | Multi-step reasoning, calculations, complex layouts |
| Role / Persona prompting | "Tell it who to be" | Specialised tone or expertise ("You are a senior accessibility auditor…") |
| Meta prompting | "Ask AI to write the prompt" | When you are stuck framing a task |
| Plan-and-Solve | "Plan first, then build" | Multi-screen flows |

**Recommended structure (CRISPE-style, six parts):**
1. **Context** — what we're building and for whom ("a Janma Pramaan Patra application form for a state portal serving citizens across India on 2G–4G mobiles")
2. **Role** — who the model is ("You are a senior front-end developer using UX4G v2.0.8")
3. **Instructions** — the task ("Build a 3-step form using UX4G's Stepper, Input, Button components")
4. **Specifics / Examples** — sample inputs, target screenshots, links to UX4G docs
5. **Parameters / Constraints** — WCAG 2.1 AA; Noto Sans only; no external CDNs other than `cdn.ux4g.gov.in`; supports Hindi + English
6. **Examples of expected output** (few-shot) — paste one good component implementation

Phrases that consistently improve quality: *"Think step by step. Reference DESIGN.md before generating. List the UX4G components you will use, then write the code. Show your work."*

### 5. Security considerations when using AI tools with government / sensitive data

**Hard "never" list — data that should not be entered into a public AI tool:**
- Citizen personal data (names + DOB + address combinations, Aadhaar fragments, PAN, mobile/email lists)
- Biometric data, health records, financial records
- Unreleased policy text, cabinet notes, draft RFPs, procurement evaluations
- Internal logs, error traces with PII, database dumps, production credentials, tokens, certificates
- File paths, server names, or schema details that could enable reconnaissance
- Content marked classified/restricted under the Official Secrets Act or departmental classification

**Indian regulatory baseline (May 2026):**
- **Digital Personal Data Protection Act, 2023, Section 10:** Empowers the Central Government to notify Data Fiduciaries as **Significant Data Fiduciaries** based on volume and sensitivity of personal data, risk to rights of Data Principals, and risk to sovereignty, security of the State and public order. SDFs must (a) appoint a Data Protection Officer based in India, (b) appoint an independent data auditor, and (c) undertake periodic Data Protection Impact Assessments. Most large government portals will be designated SDFs. The Schedule provides penalties up to ₹150 crore per breach of SDF obligations.
- **MeitY GenAI Advisory, Advisory No. 2(4)/2023-CyberLaws-3 (1 March 2024, revised 15 March 2024):** Aimed at intermediaries; mandates labelling of AI-generated content and addresses deepfakes and electoral integrity. The original advisory stated that under-tested AI models must be deployed *"only after appropriately labeling the possible and inherent fallibility or unreliability of the output generated."*
- **Department of Expenditure (Ministry of Finance) internal advisory, 29 January 2025:** Directs officers not to use AI tools/apps such as ChatGPT and DeepSeek on office computers and devices: *"It has been determined that AI tools and AI apps (such as ChatGPT, DeepSeek etc.) in the office computers and devices pose risks for confidentiality of (government) data and documents"* (Reuters, confirmed by three Finance Ministry officials). Treat this as the de-facto baseline across departments.

**Questions to ask any AI vendor before approving it for departmental use:**
1. **Tenancy and residency.** Is there an India-region deployment? Where are prompts, completions, and embeddings stored?
2. **Training opt-out.** Is enterprise/API traffic excluded from model training by contractual default (not opt-in)?
3. **Retention controls.** What is the default retention; can it be set to zero / "no logging"; how is deletion verified?
4. **Access logs.** Are admin audit logs available? Who at the vendor can see prompts?
5. **DPA / SCCs.** Is there a Data Processing Addendum reflecting DPDP Act obligations? Are Standard Contractual Clauses available for cross-border transfers?
6. **SSO + RBAC + DLP integration.** Does it integrate with the department's identity provider and data-loss-prevention tooling?
7. **Sub-processors.** What sub-processors handle the data; can high-risk ones be excluded?
8. **Certifications.** SOC 2 Type II, ISO 27001, ISO 27701; for sovereign cloud, MeitY empanelment.
9. **Indemnification.** Does the vendor indemnify for IP claims arising from training data?
10. **Vulnerability disclosure.** Is there a published security.txt / VDP and an SLA on critical issues?

**Defensive practices for development teams:**
- Use enterprise tenancies (Copilot for Business / Cursor Business / Claude Team / Codex enterprise) with zero-retention; ban free/personal tools for work.
- Pre-commit hooks: secret scanning (e.g., gitleaks), dependency scanning, SAST.
- "Slopsquatting" mitigation: maintain an internal allowlist of approved npm/pip packages; CI fails on unknown dependencies.
- Anonymise / synthesise data before any AI prompt that needs sample records.
- Centralise logging of which prompts were used to generate which commits.

### 6. Figma Make — what it actually is

Figma Make is Figma's prompt-to-app product launched at Config 2025. Its model:

- **Two-pane, chat-first interface.** A persistent AI chat on the left; a live, interactive preview of the generated web app on the right. (Note: as of May 2026 the chat history travels with the prototype URL unless you publish to a separate URL — relevant for confidentiality of internal reviews.)
- **Produces real code.** Output is React + Tailwind; you can switch to a Code view, edit, and re-prompt.
- **Three context inputs:**
  1. **Make kits** (GA 2 April 2026) — a Make kit is a React npm package + machine-generated `guidelines.md` that lets Make use *your actual production components*. Public npm and (paid plans) private Figma org npm registry are supported. Make kits currently support React only. Per Figma's launch blog: *"With Make kits, that starting point shifts. Makes begin with production-aligned components, so structure matches your codebase from the start."*
  2. **Make attachments** — paste a Figma frame URL, an image, or a Notion/Jira/GitHub document for one-shot context.
  3. **Connectors** — persistent integrations with external tools (Notion, GitHub, Linear, Jira and more) so prompts can reference live specs and copy.
- **Figma library connection.** A connected team library contributes styles (colors, Google fonts) today; Figma is rolling out component reading (Holly Li, Figma PM, has stated component support is coming in late 2025/2026).
- **Embed and share.** Make prototypes can be embedded into Figma Design, FigJam, and Figma Slides.

**Recommendation for UX4G specifically:**
- Build a public `@ux4g/react` npm package (mirroring the CSS/JS framework) so it can be used as a Make kit. This is the single highest-impact action NeGD/MeitY can take to make UX4G first-class in Figma Make.
- Until then, publish a small "UX4G Documentation Frame" Figma file that designers can paste as a Make attachment.

### 7. Testing & evaluating AI output against UX4G

Treat AI output as a draft that must pass the same gates as any human contribution. Build the following ladder into your CI / review workflow:

| Layer | Tool | What it catches |
|---|---|---|
| Token compliance | Stylelint with UX4G token config; CSS variable allowlists | Use of non-UX4G colors, spacing, radii |
| Component compliance | Storybook MCP query + Component Manifest; ESLint rule banning ad-hoc HTML where a UX4G component exists | Reinvented buttons, inputs, cards |
| Accessibility (automated) | `axe-core` — open source, 57.38% of WCAG issues by volume per Deque's Automated Accessibility Coverage Report (derived from 2,000+ audits, 13,000+ pages, ~300,000 issues; Deque CTO Dylan Barrell: *"When we shifted the definition of accessibility coverage beyond the number of WCAG Success Criteria to total volume of issues, the true impact of automated testing became clear."*) — via `@axe-core/playwright` or browser extension, plus Storybook's a11y addon | Missing labels, low contrast, ARIA misuse, focus order |
| Accessibility (semi-automated) | Deque Axe DevTools Intelligent Guided Tests or Recite Me Checker | Color meaning, alt-text quality, keyboard traps |
| Accessibility (manual) | Screen reader walkthrough (NVDA / TalkBack / VoiceOver) with users; UX4G Compliance Matrix; UX4G Audit 360 self-check covering 99+ UX parameters | Real user issues, Hindi/regional language quirks |
| Functional behaviour | Storybook interaction tests + Playwright E2E; Storybook MCP `run-story-tests` exposed to the agent so it self-heals | Broken states, hover/focus regressions |
| Security | Gitleaks (secrets), npm audit / OSV-Scanner (dependencies), SAST (Semgrep/CodeQL), SBOM | OWASP Top 10, slopsquatting, supply-chain risk |
| Visual regression | Chromatic / Percy snapshot diffing against the UX4G Storybook | Token drift, layout shifts |
| Performance | Lighthouse CI; gzipped bundle ceiling | Regressions on 2G/3G/4G citizen networks |
| Cross-locale | Snapshot tests in English + Hindi (and at least one other Indian script) | Devanagari/Tamil/Bengali wrap, RTL, font fallback |

**Specific prompt for AI-aided review:**
> *"Review this PR against `DESIGN.md` and our UX4G compliance matrix. List every place a UX4G component was not used where one exists, every non-token color/spacing value, every WCAG 2.1 AA violation you can detect statically, and every dependency you cannot find on npm. Do not propose fixes yet — just enumerate."*

Then run a second pass that proposes fixes, and a third pass (human) that decides.

## Recommendations (staged)

**Week 1 — get the basics in place**
- Adopt enterprise tenancies for Cursor, Claude Code, GitHub Copilot, or equivalent; ban personal tiers for work.
- Add `DESIGN.md` and `AGENTS.md` to every UX4G-adopting repository (template available from NeGD).
- Publish a one-page "What you must never paste into an AI tool" poster, signed off by the department CISO, referencing the Finance Ministry's 29 January 2025 advisory.

**Month 1 — close the obvious gaps**
- Stand up `axe-core` checks in CI for every repo using UX4G.
- Publish UX4G v2 component documentation as a hosted Storybook with `@storybook/addon-mcp` enabled.
- Use Figma's Code Connect UI to map every UX4G Figma component to its CSS-class implementation; this immediately improves every MCP-aware agent.

**Quarter 1 — the strategic moves**
- Build and publish `@ux4g/react` (or `@ux4g/web-components`) to public npm so UX4G is usable as a Figma Make kit and any AI agent can `npm install` it.
- Run a closed pilot with two state departments using Figma Make + Make kit for prototyping, comparing time-to-prototype and design-system-adherence rates against the current baseline.
- Stand up a small AI Centre of Practice inside NeGD that maintains the prompt library, rules files, and "Make kit" guidelines.

**Benchmarks that should change the plan:**
- If `axe-core` violations per AI-generated PR > 5 → tighten rules files; require human accessibility review before merge.
- If component-reuse rate < 70% (UX4G components used / total components in PR) → tune `DESIGN.md` Don'ts section and prompt templates.
- If Storybook MCP tests fail > 20% of generated stories → invest in better stories/documentation, not better prompts.
- If a security incident traces to an AI-suggested dependency → enforce an allowlist immediately.
- If a Tenzai-style independent audit finds >2 critical vulnerabilities in an AI-assisted release → halt the rollout and add a mandatory SAST gate before any further AI-generated merges.

## Caveats

- **Speed of change.** The AI tooling landscape is moving in weeks, not quarters. Anything specific in this guide (Figma Make kit GA date, Code Connect features, MCP client lists) should be re-verified at the start of any major project.
- **Component-aware generation in Figma Make is only as good as the kit.** Independent testing (Pàmies; Figma Forum threads; Process to Pixels) shows that even with libraries connected, Make can ignore custom typefaces and component structure. Plan for clean-up time.
- **`axe-core` and similar automated tools catch roughly 57% of WCAG issues by volume**; they are necessary but not sufficient. Manual testing with assistive technology and citizens with disabilities is mandatory for any production government service.
- **DPDP rules and an India-specific AI law are evolving.** The DPDP Rules 2025 introduce DPIA expectations; treat any specific clause cited here as a pointer, not a substitute for legal review by the department's law officer.
- **The MeitY March 2024 advisories address intermediaries, not government employees directly.** The only explicit ministry-level ban on public LLMs known publicly as of May 2026 is the Finance Ministry's 29 January 2025 note; departments are advised to issue their own equivalent internal guidance.
- **Some claims about future Figma capability are based on Figma PM statements** ("Reading Components by Figma Make will be added this fall (2025)") rather than shipped features. Track Figma's release notes before promising specific behaviour to teams.
- **"Vibe coding" is being used in two conflicting senses.** Karpathy's original (don't read the code) and the colloquial (any AI-assisted coding). Be explicit in your documentation about which sense you mean — the security guidance differs sharply.
- **Independent security studies cited above** (Veracode 2025, Tenzai December 2025, CodeRabbit 17 December 2025, Palmer/Low 2025) have differing methodologies and sample sizes; the directional signal is consistent but precise percentages should not be treated as the same metric.