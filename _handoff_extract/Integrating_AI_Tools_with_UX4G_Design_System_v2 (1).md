# Integrating AI Tools with the UX4G Design System: A Practical Guide for Government Design & Development Teams

## TL;DR
- **Treat AI as a junior collaborator that must be told about the UX4G design system explicitly.** Inside Figma, enable the UX4G design system team library before prompting and use exact component names; inside coding tools like Claude Code, Cursor, GitHub Copilot, and Codex, commit a project-level instructions file (`CLAUDE.md` / `.cursor/rules/*.mdc` / `.github/copilot-instructions.md` / `AGENTS.md`) that points the agent at the UX4G design system's npm package, the GitHub repo, and a short `DESIGN.md` describing tokens, do's and don'ts.
- **Figma Make is now fully component-aware for the UX4G design system via "Make kits" (rolled out 2 April 2026).** Because the UX4G design system is available as an npm package, a Make kit can be registered directly, enabling prompt-to-app generation that starts from the actual production components. Additionally, the Figma Design Agent (launched May 2026) works on the canvas and can use any team library connected to the file — including the UX4G design system — to generate and manipulate designs without leaving Figma.
- **For a government context governed by the DPDP Act, 2023 and the Finance Ministry's 29 January 2025 internal advisory against ChatGPT/DeepSeek on office devices, never paste citizen personal data, Aadhaar/PAN fragments, internal drafts, or unreleased policy text into public LLMs.** Use enterprise tenancies with data-retention controls, run Storybook/`axe-core` checks on every AI-generated screen, and require human review before merge.

## Key Findings

1. **Figma's AI surface has three distinct products, all of which can work with the UX4G design system.** The Figma Design Agent (launched May 2026) is a canvas-native agent that works directly alongside designers in Figma Design, with access to connected libraries including the UX4G design system; Figma Make (launched at Config 2025) is the chat-first preview-driven app builder that can use the UX4G design system via a Make kit built from the npm package; and the Figma MCP server (Dev Mode) exposes frames, variables, and Code Connect mappings to external coding agents over the Model Context Protocol.
2. **Figma Make's "Make kits" (GA 2 April 2026) enable fully component-aware generation using the UX4G design system's npm package.** A Make kit is a React npm package plus a machine-generated `guidelines.md`; since the UX4G design system ships as an npm package, a Make kit can be registered from it today, so prompts in Make generate React code using real production UX4G components from the start.
3. **In AI coding tools, the durable pattern is "context-as-text".** All four major agents — Claude Code (CLAUDE.md / Skills), Cursor (`.cursor/rules/*.mdc`), GitHub Copilot (`.github/copilot-instructions.md` and path-scoped `.instructions.md`), and Codex/agentic CLIs (`AGENTS.md`) — read plain-Markdown context files. A single, well-written `DESIGN.md` plus a per-tool rules file is the highest-leverage investment a design system team can make.
4. **Storybook MCP is the most accurate way to expose the UX4G design system to AI coding agents.** The UX4G design system's Storybook is already available; with `@storybook/addon-mcp` enabled, agents can query a Component Manifest and run interaction/`axe-core` tests against generated stories — closing the loop between generation and design-system compliance.
5. **"Vibe coding" — coined by Andrej Karpathy on 2 February 2025 — is fine for prototypes, dangerous for production.** Veracode's 2025 GenAI Code Security Report tested 100+ LLMs across 80 coding tasks in Java, JavaScript, Python, and C# and found that 45% of AI-generated code samples failed security tests by introducing OWASP Top 10 vulnerabilities. The same report found AI-generated code carries 2.74× more vulnerabilities overall than human-written code; CodeRabbit's 17 December 2025 "State of AI vs Human Code Generation" report on 470 open-source GitHub PRs found AI co-authored code 2.74× more likely to introduce XSS vulnerabilities specifically. For citizen-facing government services, AI output must be treated as untrusted draft, not finished code.
6. **The most effective prompts for design-system work follow a six-part structure** (Context → Role → Instructions → Specifics → Parameters → Examples), with explicit plain-language equivalents of prompting patterns where appropriate. Translate the jargon: "few-shot" = "show two examples"; "chain-of-thought" = "ask it to reason step by step"; "role" = "tell it who to be".
7. **For Indian government services, the controlling rules are the DPDP Act, 2023 (especially Section 10 obligations for Significant Data Fiduciaries) and the MeitY March 2024 GenAI advisory on labelling.** The 29 January 2025 Finance Ministry (Department of Expenditure) internal note explicitly directed officers not to use ChatGPT and DeepSeek on office devices because they *"pose risks for confidentiality of (government) data and documents"* (Reuters, confirmed by three Finance Ministry officials). Treat this as the de-facto baseline across departments.

## Details

### 1. Using the UX4G design system inside Figma with AI

**The three AI features inside Figma you'll encounter:**

| Feature | What it does | UX4G design system readiness |
|---|---|---|
| **Figma Design Agent** | Canvas-native AI agent that works directly in Figma Design. Generates, edits, and iterates on designs; can @mention components, tokens, and variables from any library connected to the file. Supports parallel prompts, bulk edits, and design system documentation. | Full — enable the UX4G design system library in the file and @mention UX4G components by name. Uses most recently/frequently used UX4G components as a starting point by default. |
| **Figma Make** | Chat-first prompt-to-app with a live preview pane; generates working React + Tailwind code. | Full — register the UX4G design system npm package as a Make kit to generate code using real production UX4G components from the first prompt. |
| **Figma MCP server (Dev Mode)** | Exposes selected frames, variables, and Code Connect mappings to external agents (Cursor / Claude Code / Copilot / Codex) over the Model Context Protocol. | Best path for code — works with the UX4G design system's Figma file and Code Connect mappings to the npm package components. |

---

#### Workflow A: Designing with the Figma Design Agent on the canvas

The Figma Design Agent (launched May 2026) lives directly on the Figma canvas in the left rail — no context switching, no separate setup. It is fine-tuned for editing Figma files and has deep access to your connected libraries.

1. **Open a file with the UX4G design system library enabled.** Go to Assets → Team libraries → enable the UX4G design system. The agent uses the most recently and frequently used components in your file as its default starting point.
2. **@mention components, tokens, and variables by name** to steer the agent toward exactly what you need — e.g., `@Button/Primary/Large`, `@Input/Text/Default`, `@Status/Under Review`. This functions as a keyboard shortcut for the design system.
3. **Use parallel prompts to explore directions.** You can run multiple prompts simultaneously and compare outputs — for example, ask for three layouts for an application status page, each optimised for a different citizen literacy level.
4. **Prompt the agent for bulk edits and design system consistency.** Use it to update all instances of a component to a new variant, apply token changes across a flow, rename variables, or document component states and variants across the library.
5. **Iterate with short prompts and use the agent alongside manual edits.** Going hands-on is often faster than prompting for precision work. The agent is designed to be interruptible — you can edit manually while it continues iterating.
6. **Use the agent to process feedback.** Paste comment threads from Figma or stakeholder notes and ask it to summarise themes, create next steps, or generate a revised design incorporating the feedback.

**Design Agent → Make handoff:** Start in Figma Design with the agent to clarify intent across flows, states, and structure. Then send to Figma Make to generate working code. You can also go the other way: start in Make, copy frames into Figma Design, iterate with the agent, and send back.

> **Note:** The Figma Design Agent is rolling out gradually in beta from May 2026. During beta it does not consume AI credits. It is available to Full seat users on Professional, Organisation, and Enterprise plans.

---

#### Workflow B: Building with Figma Make and the UX4G design system Make kit

Figma Make is Figma's prompt-to-app product: a two-pane, chat-first interface with a live interactive preview on the right. Output is real React + Tailwind code that you can view, edit, and re-prompt.

1. **Register the UX4G design system npm package as a Make kit.** In Figma Make settings, add the UX4G design system's npm package. Figma generates a `guidelines.md` from it automatically. This is the most important step — with a Make kit in place, every prompt starts from real UX4G components rather than generic UI elements.
2. **Edit the generated `guidelines.md`** to add UX4G-specific constraints: token vocabulary, component naming conventions, government UX patterns (e.g., DD/MM/YYYY date fields, pre-filled read-only Aadhaar fields, required bilingual labels).
3. **Reference UX4G component names verbatim in prompts** — e.g., `use the UX4G Stepper component for the 3-step form`. Even with a Make kit connected, explicit naming is the single biggest determinant of which components Make actually instantiates.
4. **Use a two-prompt pattern.** A *setup prompt* that establishes the design system context and constraints, then a *screen prompt* with the specific UI requirement. Use a checkpoint ("Tell me what components you plan to use — don't generate code yet") before each major screen to prevent hallucination.
5. **Use Make attachments to bring in UX4G documentation frames.** If specific composite components are not being picked up from the kit, paste a Figma frame URL containing that component's documentation as a Make attachment.
6. **Use connectors** to pull in requirements from Notion, Jira, or GitHub so the generated prototype reflects the actual requirement rather than the model's interpretation.
7. **Iterate one change at a time and use Revert as a workflow tool** — short, specific prompts beat long ones.

---

### 2. Using the UX4G design system in AI coding tools

There are five practical channels to give an AI coding agent UX4G design system context. Use them in combination.

**(a) A project-level instructions file.** The current best practice is to write a single `DESIGN.md` at the project root plus a per-tool rules file:

```
project-root/
├── DESIGN.md              # AI context: tokens, components, do's & don'ts
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
- Install and import from the UX4G design system npm package
- Use ONLY the UX4G components and CSS classes documented at https://doc.ux4g.gov.in
- Reference UX4G Storybook for component API and usage examples
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

**(c) The UX4G design system npm package.** The UX4G design system is available as an npm package. Reference it in your project's package.json and instruct your AI agent to install and use it:

```bash
npm install [ux4g-package-name]
```

Add to your rules file:
```
Import components from the UX4G design system npm package.
Do not write custom CSS for anything the UX4G design system already provides.
```

**(d) The Figma MCP server.** The remote server at `https://mcp.figma.com/mcp` (or the desktop server at `http://127.0.0.1:3845/sse`) lets Cursor, VS Code/Copilot, Claude Code, and Codex pull variables, components, and layout data from the UX4G design system's Figma file directly. Combined with **Code Connect** (`@figma/code-connect` on npm), design components in the UX4G design system Figma file are mapped to their npm package implementations so the agent uses the production component instead of inventing one. Figma states: *"By providing references to specific variables, components, and styles, the Figma MCP server can make generated code more precise, efficient, and reduce LLM token usage."*

**(e) Storybook MCP.** The UX4G design system's Storybook is available. With `@storybook/addon-mcp` enabled, any MCP-aware agent can query the Component Manifest and run interaction/accessibility tests against generated stories, creating a self-healing loop between generation and compliance. This is the highest-leverage investment for a design system team because the same MCP serves designers, developers, and reviewers.

**Comparison of tool-specific files (as of May 2026):**

| Tool | Primary file | Notes |
|---|---|---|
| Claude Code | `CLAUDE.md` at repo root | Also reads `.claude/skills/*.md` (Skills) and AGENTS.md |
| Cursor | `.cursor/rules/*.mdc` (with frontmatter `globs:`) | Legacy `.cursorrules` still supported |
| GitHub Copilot | `.github/copilot-instructions.md` (repo-wide); `.github/instructions/*.instructions.md` (path-scoped) | Repo file capped at first 4,000 characters for code review |
| Codex / agentic CLIs | `AGENTS.md` (open standard) | Works alongside CLAUDE.md and Copilot instructions |
| Figma Make (in Figma) | Make kit `guidelines.md` auto-generated from npm package, then editable | Supplement with Make attachments for composite component documentation |

---

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

---

### 4. Prompting techniques — with plain-language names for non-ML staff

Translate the academic vocabulary into accessible names for your documentation:

| Technical name | Plain-language name | Use when… |
|---|---|---|
| Zero-shot prompting | "Just ask" | The task is self-evident (e.g., "Build a status badge component") |
| One-shot / Few-shot | "Show an example" | You want a specific format, pattern, or code style |
| Chain-of-thought | "Ask it to think step by step" | Multi-step reasoning, complex layouts, multi-screen flows |
| Role / Persona prompting | "Tell it who to be" | Specialised tone or expertise ("You are a senior accessibility auditor…") |
| Meta prompting | "Ask AI to write the prompt" | When you are stuck framing a task |
| Plan-and-Solve | "Plan first, then build" | Multi-screen service journeys |

**Recommended structure (six parts):**
1. **Context** — what we're building and for whom ("a Janma Pramaan Patra application form for a state portal serving citizens across India on 2G–4G mobiles")
2. **Role** — who the model is ("You are a senior front-end developer using the UX4G design system")
3. **Instructions** — the task ("Build a 3-step form using UX4G's Stepper, Form Field Group, and Button components")
4. **Specifics / Examples** — sample inputs, target screenshots, links to UX4G design system docs and Storybook
5. **Parameters / Constraints** — WCAG 2.1 AA; Noto Sans only; import from the UX4G npm package; supports Hindi + English
6. **Examples of expected output** (show an example) — paste one good UX4G component implementation

Phrases that consistently improve quality: *"Think step by step. Reference DESIGN.md before generating. List the UX4G design system components you will use, then write the code. Show your work."*

---

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
- "Slopsquatting" mitigation: maintain an internal allowlist of approved npm/pip packages; CI fails on unknown dependencies. This is especially relevant for AI agents that reference the UX4G design system — verify that the package name used matches the official one exactly.
- Anonymise / synthesise data before any AI prompt that needs sample records.
- Centralise logging of which prompts were used to generate which commits.

---

### 6. Figma Make — what it actually is

Figma Make is Figma's prompt-to-app product launched at Config 2025. Its model:

- **Two-pane, chat-first interface.** A persistent AI chat on the left; a live, interactive preview of the generated web app on the right. (Note: as of May 2026 the chat history travels with the prototype URL unless you publish to a separate URL — relevant for confidentiality of internal reviews.)
- **Produces real code.** Output is React + Tailwind; you can switch to a Code view, edit, and re-prompt.
- **Three context inputs:**
  1. **Make kits** (GA 2 April 2026) — a Make kit is a React npm package plus a machine-generated `guidelines.md` that lets Make use *your actual production components*. Public npm and (paid plans) private Figma org npm registry are supported. Make kits currently support React only. The UX4G design system's npm package can be registered as a Make kit today. Per Figma's launch blog: *"With Make kits, that starting point shifts. Makes begin with production-aligned components, so structure matches your codebase from the start."*
  2. **Make attachments** — paste a Figma frame URL, an image, or a Notion/Jira/GitHub document for one-shot context. Useful for supplementing the Make kit with UX4G design system documentation frames for composite components.
  3. **Connectors** — persistent integrations with external tools (Notion, GitHub, Linear, Jira and more) so prompts can reference live specs and copy.
- **Figma library connection.** A connected team library contributes styles (colors, Google fonts) in addition to the Make kit's component inventory. The UX4G design system uses Noto Sans (a Google font), so colors and type transfer via library connection; component structure is handled by the Make kit.
- **Embed and share.** Make prototypes can be embedded into Figma Design, FigJam, and Figma Slides.

**How Figma Make and the Figma Design Agent fit together:**
- Use the **Figma Design Agent** on the canvas to generate and iterate design layers — clarifying intent, flows, states, and structure using UX4G design system components.
- Use **Figma Make** to generate working code from those designs, using the UX4G design system Make kit for component-accurate output.
- Work can flow in both directions: designs from Make can be brought back into Figma Design for agent-assisted iteration.

---

### 7. Testing & evaluating AI output against the UX4G design system

Treat AI output as a draft that must pass the same gates as any human contribution. Build the following ladder into your CI / review workflow:

| Layer | Tool | What it catches |
|---|---|---|
| Token compliance | Stylelint with UX4G design system token config; CSS variable allowlists | Use of non-UX4G colors, spacing, radii |
| Component compliance | UX4G design system Storybook MCP query + Component Manifest; ESLint rule banning ad-hoc HTML where a UX4G component exists | Reinvented buttons, inputs, cards |
| Accessibility (automated) | `axe-core` — open source, ~57% of WCAG issues by volume — via `@axe-core/playwright` or browser extension, plus Storybook's a11y addon | Missing labels, low contrast, ARIA misuse, focus order |
| Accessibility (semi-automated) | Deque Axe DevTools Intelligent Guided Tests or Recite Me Checker | Color meaning, alt-text quality, keyboard traps |
| Accessibility (manual) | Screen reader walkthrough (NVDA / TalkBack / VoiceOver) with users; UX4G design system Compliance Matrix; UX4G Audit 360 self-check covering 99+ UX parameters | Real user issues, Hindi/regional language quirks |
| Functional behaviour | Storybook interaction tests + Playwright E2E; Storybook MCP `run-story-tests` exposed to the agent so it self-heals | Broken states, hover/focus regressions |
| Security | Gitleaks (secrets), npm audit / OSV-Scanner (dependencies), SAST (Semgrep/CodeQL), SBOM | OWASP Top 10, slopsquatting, supply-chain risk |
| Visual regression | Chromatic / Percy snapshot diffing against the UX4G design system Storybook | Token drift, layout shifts |
| Performance | Lighthouse CI; gzipped bundle ceiling | Regressions on 2G/3G/4G citizen networks |
| Cross-locale | Snapshot tests in English + Hindi (and at least one other Indian script) | Devanagari/Tamil/Bengali wrap, RTL, font fallback |

**Specific prompt for AI-aided review:**
> *"Review this PR against `DESIGN.md` and the UX4G design system compliance matrix. List every place a UX4G component was not used where one exists, every non-token color/spacing value, every WCAG 2.1 AA violation you can detect statically, and every dependency you cannot find in the UX4G design system npm package or the approved allowlist. Do not propose fixes yet — just enumerate."*

Then run a second pass that proposes fixes, and a third pass (human) that decides.

---

## Recommendations (staged)

**Week 1 — get the basics in place**
- Adopt enterprise tenancies for Cursor, Claude Code, GitHub Copilot, or equivalent; ban personal tiers for work.
- Add `DESIGN.md` and `AGENTS.md` to every project repository that uses the UX4G design system (template available from NeGD). Reference the UX4G design system npm package in both files.
- Publish a one-page "What you must never paste into an AI tool" poster, signed off by the department CISO, referencing the Finance Ministry's 29 January 2025 advisory.

**Month 1 — close the obvious gaps**
- Stand up `axe-core` checks in CI for every repo using the UX4G design system.
- Enable `@storybook/addon-mcp` on the existing UX4G design system Storybook so AI agents can query the Component Manifest and run interaction tests against generated stories.
- Use Figma's Code Connect UI to map every UX4G design system Figma component to its npm package implementation; this immediately improves every MCP-aware agent and the Figma Design Agent's output.

**Quarter 1 — the strategic moves**
- Create and publish a Figma Make kit using the UX4G design system's npm package, complete with an edited `guidelines.md` covering UX4G-specific constraints (government service patterns, bilingual labels, DD/MM/YYYY dates, Aadhaar field rules). Distribute to state departments.
- Run a closed pilot with two state departments using the Figma Design Agent + Figma Make + UX4G Make kit for end-to-end design-to-code workflows, measuring time-to-prototype and component-reuse rates against the current baseline.
- Stand up a small AI Centre of Practice inside NeGD that maintains the prompt library, rules files, Make kit guidelines, and DESIGN.md template.

**Benchmarks that should change the plan:**
- If `axe-core` violations per AI-generated PR > 5 → tighten rules files; require human accessibility review before merge.
- If component-reuse rate < 70% (UX4G components used / total components in PR) → tune `DESIGN.md` Don'ts section and prompt templates.
- If Storybook MCP tests fail > 20% of generated stories → invest in better stories/documentation, not better prompts.
- If a security incident traces to an AI-suggested dependency → enforce an allowlist immediately.
- If a Tenzai-style independent audit finds >2 critical vulnerabilities in an AI-assisted release → halt the rollout and add a mandatory SAST gate before any further AI-generated merges.

---

## Caveats

- **Speed of change.** The AI tooling landscape is moving in weeks, not quarters. Anything specific in this guide (Figma Make kit GA date, Code Connect features, Figma Design Agent beta status) should be re-verified at the start of any major project.
- **Make kit output is only as good as the kit's `guidelines.md`.** Even with the UX4G design system npm package registered as a Make kit, the auto-generated guidelines will need editing to capture government-specific constraints. Plan for this as a one-time investment.
- **The Figma Design Agent is in rolling beta as of May 2026.** Behaviour, credit consumption, and plan availability will change at general availability. Track Figma's release notes.
- **`axe-core` and similar automated tools catch roughly 57% of WCAG issues by volume**; they are necessary but not sufficient. Manual testing with assistive technology and citizens with disabilities is mandatory for any production government service.
- **DPDP rules and an India-specific AI law are evolving.** The DPDP Rules 2025 introduce DPIA expectations; treat any specific clause cited here as a pointer, not a substitute for legal review by the department's law officer.
- **The MeitY March 2024 advisories address intermediaries, not government employees directly.** The only explicit ministry-level ban on public LLMs known publicly as of May 2026 is the Finance Ministry's 29 January 2025 note; departments are advised to issue their own equivalent internal guidance.
- **"Vibe coding" is being used in two conflicting senses.** Karpathy's original (don't read the code) and the colloquial (any AI-assisted coding). Be explicit in your documentation about which sense you mean — the security guidance differs sharply.
- **Independent security studies cited above** (Veracode 2025, Tenzai December 2025, CodeRabbit 17 December 2025, Palmer/Low 2025) have differing methodologies and sample sizes; the directional signal is consistent but precise percentages should not be treated as the same metric.
