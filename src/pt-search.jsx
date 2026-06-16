/* global React, ReactDOM */
/* Pattern category: Search & Discovery — full data-driven build */

/* ───────── Frame mockups ───────── */
const F = {
  /* ── 6.1 Global Service Search ── */
  SearchLanding: (
    <PtMock>
      <MH>Find any government service</MH>
      <MIn label="🔍  Search 3,000+ services" active />
      <MRow><MChip>Hindi</MChip><MChip>English</MChip><MChip>தமிழ்</MChip></MRow>
      <MS>Popular: Income Certificate · Aadhaar Update · Ration Card</MS>
      <MLabel>🎤 Tap to speak (Bhashini)</MLabel>
    </PtMock>
  ),
  SearchTypeahead: (
    <PtMock>
      <MIn label="🔍  आय प्र" active />
      <MDiv />
      <MRow><MChip kind="purple">Suggested</MChip></MRow>
      <MS><strong>आय प्रमाण पत्र</strong> · Income Certificate</MS>
      <MS><strong>आय कर रिटर्न</strong> · Income Tax Return</MS>
      <MS><strong>आयुष्मान भारत</strong> · Health Scheme</MS>
    </PtMock>
  ),
  SearchResults: (
    <PtMock>
      <MS>7 results for "income"</MS>
      <MRow><MChip kind="purple">Hindi · English ✓</MChip></MRow>
      <MDiv />
      <MH>Income Certificate</MH>
      <MS>Revenue Dept · ₹30 · 15 days</MS>
      <MRow><MChip kind="success">Eligible</MChip></MRow>
      <MBtn>Apply →</MBtn>
    </PtMock>
  ),
  SearchVoice: (
    <PtMock>
      <MCenter>
        <MIcon color="var(--primary)">🎤</MIcon>
        <MH>Listening…</MH>
        <MS>"मुझे आय प्रमाण पत्र चाहिए"</MS>
      </MCenter>
      <MProg pct={62} color="var(--primary)" />
      <MLabel>Bhashini · हिन्दी → English</MLabel>
    </PtMock>
  ),
  SearchZeroResult: (
    <PtMock>
      <MCenter>
        <div style={{ fontSize: 32 }}>🔍</div>
        <MS>No exact match for "xyz123"</MS>
      </MCenter>
      <MAlert kind="info">Did you mean <strong>Income Certificate</strong>?</MAlert>
      <MRow><MChip>Aadhaar Update</MChip><MChip>Ration Card</MChip></MRow>
    </PtMock>
  ),
  SearchSpelling: (
    <PtMock>
      <MS>Showing results for <strong>income certificate</strong></MS>
      <MS>Search instead for "incom sertifikat" →</MS>
      <MDiv />
      <MH>Income Certificate</MH>
      <MS>Revenue Dept · ₹30</MS>
    </PtMock>
  ),

  /* ── 6.2 Filter & Refine ── */
  FilterPanel: (
    <PtMock>
      <MH>Refine results</MH>
      <MS>State</MS>
      <MRow><MChip kind="purple">Maharashtra ✕</MChip><MChip>Kerala</MChip></MRow>
      <MS>Category</MS>
      <MRow><MChip>Health</MChip><MChip kind="purple">Revenue ✕</MChip></MRow>
      <MS>Fee</MS>
      <MRow><MChip>Free</MChip><MChip>Under ₹50</MChip></MRow>
      <MBtn>Apply filters (24)</MBtn>
    </PtMock>
  ),
  FilterChips: (
    <PtMock>
      <MS>3 filters · 24 results</MS>
      <MRow><MChip kind="purple">Maharashtra ✕</MChip><MChip kind="purple">Revenue ✕</MChip></MRow>
      <MRow><MChip kind="purple">Free ✕</MChip><MLabel>Clear all</MLabel></MRow>
      <MDiv />
      <MH>Income Certificate</MH>
      <MS>Revenue · Free · 15 days</MS>
    </PtMock>
  ),
  FilterMobile: (
    <PtMock>
      <MS>24 results</MS>
      <MBtn kind="ghost">Filter (3) · Sort</MBtn>
      <MDiv />
      <MH>Income Certificate</MH>
      <MS>Revenue · Free · 15 days</MS>
      <MH>Domicile Certificate</MH>
      <MS>Revenue · Free · 21 days</MS>
    </PtMock>
  ),
  FilterEmpty: (
    <PtMock>
      <MS>0 results · 4 filters applied</MS>
      <MAlert kind="warn">No services match all filters. Try removing <strong>Free</strong> to see 18 paid services.</MAlert>
      <MBtn kind="ghost">Remove "Free" filter</MBtn>
      <MLabel>Clear all filters</MLabel>
    </PtMock>
  ),

  /* ── 6.3 Discover by Category ── */
  CategoryHome: (
    <PtMock>
      <MH>Browse by category</MH>
      <MRow><MChip>🏥 Health</MChip><MChip>🌾 Agriculture</MChip></MRow>
      <MRow><MChip>📚 Education</MChip><MChip>🏠 Land Records</MChip></MRow>
      <MRow><MChip>🚌 Transport</MChip><MChip>💼 Welfare</MChip></MRow>
      <MRow><MChip>💧 Utilities</MChip><MChip>⚖️ Legal</MChip></MRow>
    </PtMock>
  ),
  CategorySubcat: (
    <PtMock>
      <MS>Health › Sub-categories</MS>
      <MH>Health Services</MH>
      <MDiv />
      <MRow><MLabel><strong>Ayushman Bharat</strong></MLabel><MChip kind="success">Eligible</MChip></MRow>
      <MS>Health insurance up to ₹5 lakh</MS>
      <MRow><MLabel><strong>Janani Suraksha</strong></MLabel></MRow>
      <MS>Maternity benefit scheme</MS>
    </PtMock>
  ),
  CategoryDetail: (
    <PtMock>
      <MH>Ayushman Bharat — PMJAY</MH>
      <MRow><MChip>Free</MChip><MChip>Online</MChip></MRow>
      <MRow><MChip>Overview</MChip><MChip kind="purple">Eligibility</MChip><MChip>Docs</MChip></MRow>
      <MS>Families in SECC database · Annual income below ₹2.5L.</MS>
      <MAlert kind="success">You appear eligible based on your profile.</MAlert>
      <MBtn>Apply now</MBtn>
    </PtMock>
  ),
  CategoryRelated: (
    <PtMock>
      <MS>Related schemes</MS>
      <MDiv />
      <MH>Janani Suraksha Yojana</MH>
      <MS>Maternity · Free</MS>
      <MH>PM Jan Aushadhi</MH>
      <MS>Generic medicines · Subsidised</MS>
    </PtMock>
  ),

  /* ── Shared / VLE / error ── */
  VleAssisted: (
    <PtMock>
      <MS>VLE Kiosk · Assisted search</MS>
      <MH>What does the citizen need?</MH>
      <MRow><MChip kind="purple">मराठी</MChip><MChip>हिन्दी</MChip><MChip>English</MChip></MRow>
      <MIn label="🔍  Type or speak…" active />
      <MBtn>Search</MBtn>
    </PtMock>
  ),
  SearchOffline: (
    <PtMock>
      <MAlert kind="warn">Network slow — showing cached popular services.</MAlert>
      <MRow><MChip>Aadhaar Update</MChip><MChip>Ration Card</MChip></MRow>
      <MRow><MChip>Income Cert</MChip><MChip>Voter ID</MChip></MRow>
      <MLabel>Retry online search</MLabel>
    </PtMock>
  ),
  SmsDiscovery: (
    <PtMock>
      <MS>SMS to 7738299899</MS>
      <MH>"INCOME MH"</MH>
      <MDiv />
      <MS>↩ Reply received</MS>
      <MS>1. Income Certificate (Revenue)</MS>
      <MS>2. Income Tax Return</MS>
      <MS>Reply with number to get steps.</MS>
    </PtMock>
  ),
};

/* ───────── Hero stage ───────── */
function HeroViz() {
  return (
    <>
      <div className="ptc-vc" style={{ top: "10px", right: "20%", width: "240px", transform: "rotate(-3deg)" }}>
        <MIn label="🔍  Search 3,000+ government services" active />
        <MDiv />
        <MRow><MChip>Health</MChip><MChip>Agriculture</MChip><MChip>Education</MChip></MRow>
        <MRow><MChip>Land Records</MChip><MChip>Transport</MChip></MRow>
      </div>
      <div className="ptc-vc" style={{ top: "140px", right: "8%", width: "210px", transform: "rotate(2deg)" }}>
        <MS>7 results for "income"</MS>
        <MDiv />
        <MH>Income Certificate</MH>
        <MS>Revenue Dept · ₹30 · 15 days</MS>
        <MBtn>Apply →</MBtn>
      </div>
      <div className="ptc-vc" style={{ top: "30px", right: "55%", width: "170px", transform: "rotate(-2deg)" }}>
        <MRow><MChip kind="purple">State: Maharashtra ✕</MChip></MRow>
      </div>
    </>
  );
}

/* ───────── Pattern data ───────── */
const PATTERNS_DATA = [
  /* ───── 6.1 Global service search ───── */
  {
    id: "search-browse",
    num: "PATTERN · 6.1",
    title: "Global Service Search",
    lede: "The single doorway for citizens who know what they need but not what it's called. The same scheme surfaces whether they type, transliterate, or speak it.",

    whenToUse: [
      "Citizen knows roughly what they want but not the exact scheme name or owning ministry.",
      "Homepage and global navigation — search must be reachable from every screen.",
      "Whenever a single result can match across name, transliteration, synonym, or department.",
    ],
    whenNotFor: "Deep-dive taxonomy browsing where the citizen wants to see every scheme in a category — use Discover by Category instead. Searches that need structured eligibility filters from the first interaction — start with Filter & Refine.",

    flow: [
      "Citizen lands on search",
      "Types or speaks query",
      "Type-ahead suggests in-script",
      "Result list with eligibility chip",
      "Tap to apply",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/search/search-browse';
      const flow = [
        { id: 'browse', label: 'Browse', desc: 'Start with somewhere to go, not an empty stare. Popular services and a language choice meet citizens who arrived without a query in mind.' },
        { id: 'suggestions', label: 'Suggestions', desc: 'Answer in the script the citizen is typing. Predictions appear within two keystrokes so the next tap completes the journey, not a second guess.' },
        { id: 'results', label: 'Results', desc: 'Lead with what citizens decide on: who runs it, what it costs, how long it takes, and whether they qualify before tapping further.' },
        { id: 'empty', label: 'Empty', desc: 'A no-match query is still a question worth answering. Offer the likely spelling or a popular nearby service so the journey continues.' },
      ];
      const mk = (device, layout) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + '-' + layout.id + '-' + s.id,
          label: s.label, desc: s.desc,
          src: base + '/' + device + '-' + layout.id + '-' + s.id + '.png',
        })),
      });
      return {
        intro: 'Four moments in the search journey, from a blank field to a no-result recovery. Every state keeps the citizen moving toward an answer.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'default', label: 'Default' })] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'default', label: 'Default' })] },
        ],
      };
    })(),

    screens: [
      { name: "Search landing", desc: "Single search field, language chips, voice button, popular services strip.", frame: F.SearchLanding },
      { name: "Type-ahead (Hindi)", desc: "Devanagari typing shows matched schemes in both Hindi and English transliteration.", frame: F.SearchTypeahead },
      { name: "Voice search", desc: "Bhashini-powered voice input — transcribes spoken Hindi to the query string.", frame: F.SearchVoice },
      { name: "Search results", desc: "Service card with department, fee, processing time, and a personalised eligibility chip.", frame: F.SearchResults },
      { name: "Spelling correction", desc: "Auto-correct shows results for the corrected term with a link back to the original.", frame: F.SearchSpelling },
      { name: "Zero results", desc: "Did-you-mean banner plus 2-3 popular service chips — never show empty.", frame: F.SearchZeroResult },
    ],

    components: [
      { name: "Search field" }, { name: "Chip group" }, { name: "Voice button" },
      { name: "Card · service" }, { name: "Alert · info" }, { name: "Button" },
    ],

    behaviour: [
      "Type-ahead fires from the 2nd character with a 150ms debounce — never on every keystroke.",
      "Bi-directional matching: typing \"income\" returns the same top result as typing \"आय\" — the index merges English, Hindi, and 20 other scheduled-language synonyms.",
      "Voice search invokes Bhashini and shows a live transcript so the citizen can correct mid-query.",
      "Empty query state shows popular services, never a blank panel.",
      "Recent searches are stored on-device only — never sent to the search backend until queried.",
    ],

    edgeCases: [
      "Mixed-script query (Hinglish): \"income praman patra\" should resolve to the same Income Certificate top result.",
      "Voice mis-transcription: show the transcript above results so the citizen can correct before searching again.",
      "Regional name variants: \"jamabandi\" (Punjab) and \"7/12\" (Maharashtra) both surface the Land Records service.",
      "Zero results: always suggest 2-3 popular services or a did-you-mean — never end the citizen at a dead end.",
    ],

    doDont: [
      { do: "Index every scheme under its Hindi name, English name, transliterations, and regional synonyms.", dont: "Restrict the index to English — citizens type in their own script and expect results in it." },
      { do: "Show the language the citizen is typing in as the active chip — feedback that the right index is being searched.", dont: "Silently fall back to English when the query contains non-Latin characters and return no results." },
    ],

    a11y: [
      "Search field has a visible label and an associated role=\"combobox\" with aria-expanded reflecting the suggestions panel.",
      "Voice button announces \"Voice search · Bhashini\" and is reachable by keyboard with Enter to start listening.",
      "Type-ahead suggestions are a proper listbox — arrow keys cycle, Enter selects, Esc closes without losing the typed text.",
      "Result counts (\"7 results for income\") are announced via aria-live=\"polite\" on update.",
    ],

    related: [
      { tag: "Pair with", name: "Filter & Refine", href: "#filter-refine", desc: "Once results are shown, citizens often narrow by state, fee, or department." },
      { tag: "Alt entry", name: "Discover by Category", href: "#discover-category", desc: "For citizens who want to browse the catalogue rather than search." },
    ],

    compliance: {
      law: "Official Languages Act 1963 · RPwD Act 2016",
      body: [
        "Every search index must support Hindi and English at minimum; the eight high-population scheduled languages are required for portals operating nation-wide.",
        "Voice search and screen-reader output must be available — RPwD Act mandates discoverability for citizens with low vision or low literacy.",
        "Search-result content is translated, not just transliterated — service names, descriptions, and eligibility text are localised by Bhashini translation memory.",
      ],
    },
    dataHandling: [
      "Search queries are logged in anonymised form (no user ID) for query-improvement analytics; retention is 90 days max.",
      "Personalised eligibility chips are computed on the citizen's device or from the signed-in session — the search backend does not see profile attributes.",
      "Recent searches are stored locally and cleared on sign-out; they are never synced to the server.",
    ],
    channels: [
      { channel: "Web", ico: "🌐", body: "Full type-ahead, voice search, language chip switcher, infinite-scroll results." },
      { channel: "Mobile app", ico: "📱", body: "Same search index; voice button uses native mic permission and runs Bhashini on-device where possible." },
      { channel: "Voice / IVR", ico: "📞", body: "Citizen calls a toll-free number, speaks the query, IVR reads back top three matches with reference codes." },
      { channel: "USSD / SMS", ico: "💬", body: "Send INCOME MH to a short code; receive the top 3 matching services with menu numbers to pick from." },
    ],
    vle: {
      text: "At a Common Service Centre, the VLE searches on the citizen's behalf. The kiosk variant defaults to the citizen's spoken regional language and shows both the typed query and the Bhashini transcript so the citizen can confirm before the VLE commits the search.",
      flow: ["VLE picks language", "Citizen speaks", "Bhashini transcribes", "VLE confirms and searches"],
      screens: [
        { name: "Assisted search at kiosk", desc: "Language chip first, then a single search field with voice as the primary input.", frame: F.VleAssisted },
      ],
    },
    integrations: [
      { sys: "Bhashini", purpose: "Voice-to-text and language translation across 22 scheduled Indian languages." },
      { sys: "DigiLocker schemes catalogue", purpose: "Source of truth for scheme names, descriptions, fees, and ministry ownership." },
      { sys: "State services API", purpose: "State-specific services merged into the global index — Maharashtra 7/12, Punjab Jamabandi, etc." },
      { sys: "AI search backend", purpose: "Synonym graph and intent ranking for cross-language and regional-variant queries." },
    ],
    errorRecovery: {
      text: [
        "When the search backend times out beyond 3 seconds, fall back to a cached list of popular services rather than an empty state.",
        "When Bhashini voice transcription fails, switch to text input automatically and preserve any partial transcript as the seed query.",
      ],
      screens: [
        { name: "Network slow", desc: "Cached popular-services strip shown with an explicit \"showing cached\" notice and a retry affordance.", frame: F.SearchOffline },
        { name: "Spelling fallback", desc: "When the typed query has no match, show results for the corrected term with a link back to the original.", frame: F.SearchSpelling },
        { name: "SMS discovery", desc: "Low-bandwidth fallback — SMS short code returns top three matches by reference number.", frame: F.SmsDiscovery },
      ],
    },
  },

  /* ───── 6.2 Filter & Refine ───── */
  {
    id: "filter-refine",
    num: "PATTERN · 6.2",
    title: "Filter & Refine",
    lede: "Narrow a long list without losing the way back. Filters layer on top of search or browse, and any dead end always names the one to drop.",

    whenToUse: [
      "After the citizen has seen an initial result set and wants to narrow by attribute.",
      "Catalogue browse pages where the result space is large enough to need refinement (50+ services).",
      "Service-comparison or eligibility-screening pages where multiple attributes drive the choice.",
    ],
    whenNotFor: "First-touch search — let citizens type or browse first; filters layer on top. Result sets under ten items — show all and let the citizen scan instead of forcing a filter UI.",

    flow: [
      "Initial result list",
      "Open filter panel",
      "Select facets",
      "Live count updates",
      "Active filters as chips",
    ],

    screens: [
      { name: "Filter panel", desc: "State, category, fee — each facet a chip group. Apply button shows the live result count.", frame: F.FilterPanel },
      { name: "Active filter chips", desc: "Selected filters as removable chips above results, with a clear-all link.", frame: F.FilterChips },
      { name: "Mobile bottom-sheet", desc: "On mobile, filter panel collapses behind a Filter (n) · Sort button.", frame: F.FilterMobile },
      { name: "Empty filtered state", desc: "Zero results due to over-filtering — suggest which filter to drop to recover matches.", frame: F.FilterEmpty },
    ],

    components: [
      { name: "Filter chip group" }, { name: "Bottom sheet" }, { name: "Button" },
      { name: "Alert · warn" }, { name: "Result count" },
    ],

    behaviour: [
      "Result count updates live as filters are toggled — no Apply tap required on desktop.",
      "Mobile filters collapse into a bottom-sheet to preserve content width; Apply is required on mobile to dismiss the sheet.",
      "Active filters are always visible above the results — never hidden behind an Edit Filters link.",
      "Clear-all is a single tap; individual filter removal happens via the chip ✕ affordance.",
      "Filter state persists across pagination but is cleared on a fresh search query.",
    ],

    edgeCases: [
      "Over-filtering: when the result count drops to zero, propose the single highest-impact filter to remove (\"Remove Free to see 18 paid services\").",
      "Filter and search conflict: a new search clears category-specific filters but preserves state and fee.",
      "URL-shareable filter state: the active filter set is reflected in the URL so a citizen can share a refined view with the VLE.",
      "Mobile sort and filter share one button: opening the sheet exposes both as tabs.",
    ],

    doDont: [
      { do: "Show the live result count next to the Apply button — citizens know if they're about to dead-end.", dont: "Hide the result count until after the citizen taps Apply and waits for a reload." },
      { do: "Suggest the filter to drop when over-filtering produces zero results.", dont: "Show a generic \"no results\" with no path back to a working set." },
    ],

    a11y: [
      "Filter facets are grouped under a labelled fieldset; the legend names the facet (State, Fee, Department).",
      "Active filter chips have aria-label=\"Remove filter: Maharashtra\" — the ✕ is announced as a button, not decoration.",
      "Live result count is an aria-live=\"polite\" region — updates announce \"24 results\" without stealing focus.",
      "Bottom-sheet on mobile uses role=\"dialog\" with focus trap and Esc to close.",
    ],

    related: [
      { tag: "Pair with", name: "Global Service Search", href: "#search-browse", desc: "Filters narrow a search result set." },
      { tag: "Pair with", name: "Discover by Category", href: "#discover-category", desc: "Category browse pages share the same facet UI." },
    ],

    dataHandling: [
      "Filter selections are reflected in the URL query string so a refined view is bookmark-able and shareable.",
      "No filter state is logged to the server beyond the resulting query — facet-by-facet analytics are aggregated and anonymised.",
      "Citizen profile attributes (income band, state) can pre-fill filters once on sign-in but are never auto-applied without a visible chip.",
    ],
    channels: [
      { channel: "Web", ico: "🌐", body: "Sticky filter sidebar with live count; filters persist across pagination." },
      { channel: "Mobile app", ico: "📱", body: "Bottom-sheet for filter and sort; haptic confirmation on Apply." },
      { channel: "Voice / IVR", ico: "📞", body: "IVR offers one-axis refinement only — \"Press 1 for free services, 2 for state services\"." },
    ],
    integrations: [
      { sys: "Search backend facet API", purpose: "Returns counts per facet alongside results so the UI can show live counts." },
      { sys: "Citizen profile service", purpose: "Optional pre-fill of state / income band; only with explicit consent." },
    ],
    errorRecovery: {
      text: [
        "When facet counts are slow to return, render the results immediately and update facet counts asynchronously rather than blocking the whole panel.",
        "When the citizen filters into zero results, never let the next action be a re-search — always offer the specific filter removal that recovers the set.",
      ],
      screens: [
        { name: "Filter dead-end recovery", desc: "Specific filter to drop, with the resulting count baked into the CTA.", frame: F.FilterEmpty },
      ],
    },
  },

  /* ───── 6.3 Discover by Category ───── */
  {
    id: "discover-category",
    num: "PATTERN · 6.3",
    title: "Discover by Category",
    lede: "The second doorway, for citizens who do not know a scheme exists. Eight everyday categories let people browse to what they need without naming it first.",

    whenToUse: [
      "Citizen wants to discover what's available rather than search for a specific scheme.",
      "Homepage and category landing pages — discovery is a parallel entry to search.",
      "Service-detail pages where related schemes belong on the same page.",
    ],
    whenNotFor: "Citizens who already know the scheme name — search is faster. Single-service portals where there is nothing to browse.",

    flow: [
      "Citizen lands on category grid",
      "Picks top-level category",
      "Sees sub-categories and schemes",
      "Service detail with eligibility",
      "Apply or save for later",
    ],

    screensSet: (() => {
      const base = 'assets/images/pattern-screens/search/global-discovery';
      const flow = [
        { id: 'homepage', label: 'Homepage', desc: 'Meet citizens where intent is fuzzy. Familiar life areas like health, land, and welfare anchor the catalogue so browsing replaces remembering a name.' },
        { id: 'category', label: 'Category', desc: 'A list of schemes the citizen can scan, with a quick read on whether each one fits their situation before opening anything.' },
        { id: 'service-detail', label: 'Service detail', desc: 'Show the cost, the eligibility, the documents, and the wait before the commit moment, so applying is a decision, not a discovery.' },
      ];
      const mk = (device, layout) => ({
        id: layout.id, label: layout.label,
        screens: flow.map((s) => ({
          id: device + '-' + layout.id + '-' + s.id,
          label: s.label, desc: s.desc,
          src: base + '/' + device + '-' + layout.id + '-' + s.id + '.png',
        })),
      });
      return {
        intro: 'Three stops on the discovery path: scan the catalogue, drill into a category, and read the full service before committing to apply.',
        devices: [
          { id: 'desktop', label: 'Desktop', layouts: [mk('desktop', { id: 'default', label: 'Default' })] },
          { id: 'mobile',  label: 'Mobile',  layouts: [mk('mobile',  { id: 'default', label: 'Default' })] },
        ],
      };
    })(),

    screens: [
      { name: "Category grid", desc: "Eight top-level categories with iconography — large tap targets for low-literacy and assisted use.", frame: F.CategoryHome },
      { name: "Sub-category listing", desc: "Breadcrumb, sub-category title, schemes with eligibility chip per row.", frame: F.CategorySubcat },
      { name: "Service detail", desc: "Eligibility, documents, fee, processing time — all visible BEFORE the Apply button.", frame: F.CategoryDetail },
      { name: "Related schemes", desc: "Three contextually related schemes shown at the bottom of any service detail page.", frame: F.CategoryRelated },
    ],

    components: [
      { name: "Category tile grid" }, { name: "Breadcrumb" }, { name: "Tabs" },
      { name: "Card · service" }, { name: "Badge · eligibility" }, { name: "Button" },
    ],

    behaviour: [
      "Category grid uses icons and large labels — the same tile is readable from a kiosk at 1m distance.",
      "Eligibility chips on listings are personalised when the citizen is signed-in; otherwise they're hidden, never shown as generic.",
      "Service detail always renders Eligibility, Documents, Fee, and Processing Time tabs above the Apply button — no scheme can hide them.",
      "Related schemes are computed from co-application patterns, not just shared category — citizens who apply for X often also apply for Y.",
      "Breadcrumb is always present from sub-category onwards — never let the citizen lose their place in the taxonomy.",
    ],

    edgeCases: [
      "Citizen profile incomplete: eligibility chips are hidden rather than guessed; a prompt suggests completing the profile to see eligibility.",
      "Scheme moved to a new category: legacy URLs 301 to the new path; the old slug never silently 404s.",
      "Featured banner: max one featured scheme per category; never paid promotion — featured is for time-bound campaigns only (e.g., PM Awas enrolment window).",
      "Cross-category schemes (Ayushman Bharat is both Health and Welfare) appear under both with the same canonical detail page.",
    ],

    doDont: [
      { do: "Show eligibility, documents, fee, and processing time before the Apply button — every time.", dont: "Hide eligibility behind the Apply button and surprise citizens with rejection mid-form." },
      { do: "Compute related schemes from co-application data — schemes citizens actually apply for together.", dont: "Pad related schemes with anything in the same category just to fill the row." },
    ],

    a11y: [
      "Category tile is a single landmark link — the icon is decorative (aria-hidden), the label carries the accessible name.",
      "Breadcrumb is a proper nav landmark with aria-label=\"Breadcrumb\" and the current page marked aria-current=\"page\".",
      "Service-detail tabs are a real tablist — arrow keys cycle, Tab moves out, the panel changes are announced.",
      "Eligibility badge text is meaningful on its own — \"Eligible\" / \"Check eligibility\" — not colour-only.",
    ],

    related: [
      { tag: "Pair with", name: "Global Service Search", href: "#search-browse", desc: "Search and browse are parallel entries to the same catalogue." },
      { tag: "Pair with", name: "Filter & Refine", href: "#filter-refine", desc: "Category browse uses the same facet filter UI." },
    ],

    compliance: {
      law: "Right to Information Act 2005 · Official Languages Act 1963",
      body: [
        "All scheme details (eligibility, documents, fee, processing time) must be published in Hindi and English at minimum, with the regional language for state-specific schemes.",
        "RTI-disclosable information about scheme rules and beneficiary numbers must be linked from each detail page — citizens have a right to that data.",
        "Featured banners must disclose the originating ministry — no anonymous \"sponsored\" placements on government portals.",
      ],
    },
    dataHandling: [
      "Category and sub-category browse counts are aggregated and anonymised — used to retire under-trafficked sub-categories.",
      "Personalised eligibility computation runs on the signed-in session; results are not retained beyond the page view.",
      "Co-application data used for Related schemes is computed from aggregate apply patterns, never linked to individual citizens.",
    ],
    channels: [
      { channel: "Web", ico: "🌐", body: "Eight-tile grid, breadcrumb navigation, tabs on detail page." },
      { channel: "Mobile app", ico: "📱", body: "Same grid in a 2-column layout; tabs collapse to an accordion below 360px width." },
      { channel: "Voice / IVR", ico: "📞", body: "Spoken category menu — \"Press 1 for Health, 2 for Agriculture…\" followed by scheme list." },
      { channel: "USSD", ico: "💬", body: "Numbered category menu for feature-phone users; SMS reply lists schemes in the chosen category." },
    ],
    vle: {
      text: "At a CSC kiosk, browse-by-category is the recommended path for citizens who don't have a specific scheme in mind. The VLE narrates each category in the citizen's language, picks the relevant tile, and walks through the service detail page including eligibility before any application is started.",
      screens: [
        { name: "Category landing at kiosk", desc: "Same tile grid, larger touch targets, language chip locked to the citizen's spoken language.", frame: F.CategoryHome },
      ],
    },
    integrations: [
      { sys: "DigiLocker schemes catalogue", purpose: "Master taxonomy and service detail content." },
      { sys: "Citizen profile service", purpose: "Personalised eligibility chips when signed-in." },
      { sys: "Co-application analytics", purpose: "Drives the Related schemes block." },
      { sys: "Bhashini", purpose: "Translates service detail content into the citizen's chosen language." },
    ],
    errorRecovery: {
      text: [
        "When personalised eligibility cannot be computed (profile incomplete, service down), hide the eligibility chip rather than showing a stale or guessed value.",
        "When a sub-category has zero published schemes, never show an empty page — redirect to the parent category with a notice that schemes are being onboarded.",
      ],
      screens: [
        { name: "Related schemes block", desc: "Three contextually related schemes — always present on a detail page even when the primary scheme is unavailable.", frame: F.CategoryRelated },
      ],
    },
  },
];

/* ───────── Sidebar items ───────── */
const SIDEBAR_PATTERNS = PATTERNS_DATA.map((p) => ({
  id: p.id,
  num: p.num,
  title: p.title,
  subs: PtPatternSubs(p),
}));

function App() {
  return (
    <>
      <PtNavbar />
      <main className="ptc-page">
        <PtStickyBar patterns={SIDEBAR_PATTERNS} activeSlug="search-discovery" />
        <PtLeftNav activeSlug="search-discovery" />
        <PtHero
          slug="search-discovery"
          num="P-06"
          tag="P-06 · Search & Discovery · Live"
          title="Search & Discovery"
          desc="How citizens find the right service when they don't know what to look for. Multilingual search via Bhashini, facet refinement, and category browse — built for low-literacy, voice-first, and assisted access at CSC kiosks."
          meta={["3 patterns"]}
        >
          <img className="ptc-hero-img" src="assets/images/Search & Discovery.png" alt="Search & Discovery illustration" />
        </PtHero>

        <div className="ptc-layout">
          <div className="ptc-main">
            {PATTERNS_DATA.map((p) => <PtPatternFull key={p.id} p={p} />)}
          </div>
          <PtSidebar patterns={SIDEBAR_PATTERNS} />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
