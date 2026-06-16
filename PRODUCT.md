# Product

## Register

brand

## Users

Two equal audiences who use the site as a shared implementation reference:

**Designers** at government ministries, NIC, and state digital teams: evaluating patterns, understanding design rationale, checking component anatomy, sourcing handoff assets. They need confidence that what they spec here is what gets built.

**Frontend developers** building GoI digital services: copying components, checking API/props specs, verifying accessibility requirements, onboarding to the system. They need clarity and speed — find-it-fast documentation.

Both audiences are professionals doing a job. They are not browsing casually; they are making decisions that affect millions of citizen-facing touchpoints.

## Product Purpose

UX4G is the official component library and pattern repository for Government of India digital initiatives. Its documentation site has two jobs: (1) be the authoritative reference that replaces guesswork in government product teams, and (2) prove by its own existence that Indian government digital design can be world-class.

Success means a designer in Hyderabad and a developer in Patna reach for UX4G first, without friction. Every poorly-documented component is a decision made without the system.

## Brand Personality

Modern, authoritative, aspirational.

Three words: **precise, civic, confident**.

Emotional goal: inspire pride and raise the bar. A designer who opens this site should feel that Indian government digital can hold its own against the best in the world. Not "this is good for government." Just: this is good.

## References

- eBay Playbook (https://playbook.ebay.com/design-system): structured component docs with clear hierarchy, professional without being sterile
- Radix UI (https://www.radix-ui.com/): minimal, developer-first, strong typographic rhythm
- Visa Design System (https://design.visa.com/components/): polished financial-grade credibility, serious without being heavy

## Anti-references

- **Generic SaaS docs**: white background, bland component grid, zero personality. Looks like every other design system site and signals nothing about India or UX4G's ambition.
- **Old government web**: NIC-era blue/maroon table-layouts, dense text walls, no visual hierarchy. The explicit failure mode this site exists to replace.
- **Startup landing page**: gradient blobs, floating cards, "10x faster" copy. Commercial framing undermines civic trust and feels dishonest about what this is.

## Design Principles

1. **Practice what you preach.** The site IS the design system's portfolio. Every typographic decision, spacing choice, and animation must meet the quality bar we're asking of government product teams.

2. **Credibility through precision.** Over-designed flourishes erode trust. Authority comes from extreme care in the details: consistent spacing, exact contrast ratios, components that work flawlessly. Less chrome, more craft.

3. **Serve two masters equally.** The designer checking anatomy and the developer copying props are using the same page. Information architecture must serve both without compromise. Hierarchy solves this; hiding information does not.

4. **India-scale inclusivity.** 22 Indic scripts, reduced-data users, screen reader users, low-spec devices. These are not edge cases; they are the primary audience at scale. Never optimize for the power user at the expense of reach.

5. **Confident, not aspirational.** Do not hedge. UX4G is not "inspired by" world-class design systems; it competes with them. The tone, the visuals, the documentation depth should all reflect that without stating it.

## Accessibility & Inclusion

Target: WCAG 2.1 AA minimum, WCAG 2.2 AA where feasible, GIGW 3.0 for India-specific requirements.

Known considerations:
- Multilingual support: 22 Indic scripts with appropriate font stacks and line-height scales
- Reduced-data environments: no heavy video, optimized font loading, graceful degradation
- Screen reader support: semantic HTML, ARIA labels, logical reading order
- Keyboard navigation: all interactive elements reachable and operable without mouse
- Reduced motion: `prefers-reduced-motion` respected on all animations
- Color contrast: 4.5:1 for normal text, 3:1 for large text, at minimum
