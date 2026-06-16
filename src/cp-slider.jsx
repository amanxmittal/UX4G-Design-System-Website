/* global React */
(function () {
  function Sl({ value = 50, size = "m", state, label, valueLabel }) {
    return (
      <div className={"ux4g-slider-field ux4g-slider-" + size + (state === "disabled" ? " state-disabled" : "")} style={{ width: "100%" }}>
        {label && (
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 500 }}>{label}</span>
            {valueLabel && <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ux4g-text-primary-default)" }}>{valueLabel}</span>}
          </div>
        )}
        <div className={"ux4g-slider ux4g-slider-" + size}>
          <input type="range" className="ux4g-slider-input" min="0" max="100" defaultValue={value} disabled={state === "disabled"} readOnly />
          <div className="ux4g-slider-track">
            <div className="ux4g-slider-fill" style={{ width: value + "%" }}></div>
            <div className="ux4g-slider-thumb" style={{ left: value + "%" }}></div>
          </div>
        </div>
      </div>
    );
  }

  function Hero() {
    return (
      <React.Fragment>
        <div className="hb-grain"></div>
        <div className="hb-soft-blur"></div>
        <div className="hb-slider-mock">
          <div className="hb-slider-track">
            <div className="hb-slider-fill"></div>
            <div className="hb-slider-thumb"></div>
          </div>
          <div className="hb-slider-labels">
            <span>₹0</span>
            <span style={{ color: "#fff", fontWeight: 600 }}>₹3.1 L</span>
            <span>₹5 L</span>
          </div>
        </div>
      </React.Fragment>
    );
  }

  const IMG = "assets/images/component-anatomy/slider/";

  const config = {
    name: "Slider",
    navName: "Slider",
    group: "Form Elements",
    desc: "Range and single-thumb input for income brackets, age, filter ranges, and any continuous value where exact precision is less important than relative position.",
    bannerVariant: "slider",
    hero: Hero,

    anatomyImg: IMG + "anatomy.png",
    anatomyImgAlt: "Range slider anatomy. A labelled range slider with two thumbs spanning 0%–25% over a track with tick marks (0–100), the from/to values shown above, and a description below. Four numbered markers point to the Slider (track, fill and thumbs), the Label, the Value (from/to), and the Description.",
    anatomy: [
      { n: 1, label: "Slider (track · fill · thumbs)", desc: "The rail, the filled portion, and the draggable thumb(s)." },
      { n: 2, label: "Label", desc: "Names what the slider adjusts." },
      { n: 3, label: "Value (from / to)", desc: "The current value, or the from/to pair for a range." },
      { n: 4, label: "Description", desc: "Supporting helper text below the slider." },
    ],

    properties: [
      {
        label: "Variant",
        desc: "Single thumb sets one value (volume, brightness). Range thumb (two thumbs) defines a span (price filter, age bracket).",
        img: IMG + "properties-variant.png",
        imgAlt: "Two labelled sliders. Single: a ‘Volume’ slider at 62% over a track with 0–100 tick marks. Range: a ‘Household income’ two-thumb range slider with from/to values, over a track with 0–10 tick marks.",
        demos: [
          { label: "Single", node: <Sl value={62} label="Volume" valueLabel="62%" /> },
          { label: "Range (min/max)", wide: true, node: (
            <div className="ux4g-slider-field ux4g-slider-md" style={{ width: "100%", position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>Income</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ux4g-text-primary-default)" }}>₹2L - ₹6L</span>
              </div>
              <div className="ux4g-slider ux4g-slider-md" style={{ position: "relative" }}>
                <div className="ux4g-slider-track">
                  <div className="ux4g-slider-fill" style={{ width: "40%", left: "20%", position: "absolute" }}></div>
                  <div className="ux4g-slider-thumb" style={{ left: "20%" }}></div>
                  <div className="ux4g-slider-thumb" style={{ left: "60%" }}></div>
                </div>
              </div>
            </div>
          ) },
        ],
      },
      {
        label: "Size",
        desc: "Two sizes — S for dense filter panels and toolbars, and M (default) for forms. The track and thumb grow at M for an easier touch target.",
        img: IMG + "properties-size.png",
        imgAlt: "Two ‘Brightness’ sliders at 50% with 0–100 tick marks, shown at the Small (S) and Medium (M) sizes — the track and thumb grow at M.",
        demos: [
          { label: "SM", node: <Sl size="s" value={50} /> },
          { label: "MD", node: <Sl value={50} /> },
          { label: "LG", node: <Sl size="l" value={50} /> },
        ],
      },
      {
        label: "State",
        desc: "Default, focused (thumb gets a focus ring), disabled (locked, lower opacity), error (rare - usually for out-of-range linked inputs).",
        img: IMG + "properties-state.png",
        imgAlt: "Two sliders: Default — a ‘Volume’ slider at 50%; Disabled — a greyed-out ‘Service radius’ slider at 3 km.",
        demos: [
          { label: "Default", node: <Sl value={50} /> },
          { label: "Disabled", node: <Sl state="disabled" value={30} /> },
          { label: "With value label", node: <Sl value={75} label="Brightness" valueLabel="75%" /> },
        ],
      },
      {
        label: "Value input",
        desc: "The current value can be plain read-only text, or an editable input field (Input = True) so users can type an exact value. Dragging the thumb and typing stay in sync.",
        img: IMG + "properties-input.png",
        imgAlt: "Two ‘Volume’ sliders at 50%: Static (read-only) shows the value as plain text; Editable input shows the value inside a bordered number input box.",
        demos: [
          { label: "Read-only value", node: <Sl value={62} label="Volume" valueLabel="62%" /> },
        ],
      },
    ],

    scenarios: [
      {
        title: "Income bracket filter",
        desc: "Two-thumb range slider for the most common form pattern - 'show me schemes for households earning ₹2L to ₹6L'.",
        img: IMG + "scenarios-bracket.png",
        imgAlt: "A two-thumb ‘Household income’ range slider with from/to values, the fill spanning a middle band over a 0–10 tick track.",
        stage: (
          <div className="ux4g-slider-field ux4g-slider-md" style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
              <span style={{ fontSize: 13, fontWeight: 500 }}>Annual income</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ux4g-text-primary-default)" }}>₹2 L - ₹6 L</span>
            </div>
            <div className="ux4g-slider ux4g-slider-md" style={{ position: "relative" }}>
              <div className="ux4g-slider-track">
                <div className="ux4g-slider-fill" style={{ width: "40%", left: "20%", position: "absolute" }}></div>
                <div className="ux4g-slider-thumb" style={{ left: "20%" }}></div>
                <div className="ux4g-slider-thumb" style={{ left: "60%" }}></div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "Age picker - tick marks",
        desc: "When the value space is small (age 18-70), show tick marks at major intervals (every 10 years). Easier to land on round values.",
        img: IMG + "scenarios-age.png",
        imgAlt: "An ‘Age’ slider set to 25 with tick marks every 10 years (0, 10, 20, 30, 40, 50) along the track.",
        stage: <Sl value={35} label="Age" valueLabel="35 years" />,
      },
      {
        title: "Volume / brightness",
        desc: "The classic single-thumb use. Live preview of the change happens immediately - audio plays at the new volume, screen brightens.",
        img: IMG + "scenarios-volume.png",
        imgAlt: "A single-thumb ‘Volume’ slider at 70%.",
        stage: <Sl value={70} label="Volume" valueLabel="70%" />,
      },
      {
        title: "Coupled to a numeric input",
        desc: "Pair the slider with a number input for users who want exact values. Both stay in sync - dragging the slider updates the input and vice versa.",
        img: IMG + "scenarios-coupled.png",
        imgAlt: "A ‘Plot area (hectare)’ slider paired with a numeric input box reading 7.1, both showing the same value, over a 0–100 tick track.",
        stage: (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 12 }}>
            <Sl value={42} label="Discount" valueLabel="42%" />
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <input type="text" defaultValue="42" readOnly style={{ width: 70, padding: "6px 10px", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, textAlign: "right" }} />
              <span style={{ color: "var(--ux4g-text-neutral-secondary)" }}>%</span>
            </div>
          </div>
        ),
      },
      {
        title: "Disabled with reason",
        desc: "When the slider is unavailable (depends on an earlier choice, value locked by policy), keep it visible but disabled with a hint.",
        img: IMG + "scenarios-disabled.png",
        imgAlt: "A disabled (greyed) ‘Service radius’ slider with a hint below: ‘Select your state first to set the radius’.",
        stage: (
          <div style={{ width: "100%" }}>
            <Sl state="disabled" value={50} label="Loan amount" />
            <div style={{ fontSize: 12, color: "var(--ux4g-text-neutral-secondary)", marginTop: 4 }}>Complete identity verification to enable</div>
          </div>
        ),
      },
      {
        title: "Discrete steps for SLAs",
        desc: "When the value space is small and discrete (1 / 3 / 7 / 14 / 30 days), snap to those values. Use tick marks to communicate the valid stops.",
        img: IMG + "scenarios-steps.png",
        imgAlt: "A ‘Resolution SLA’ slider snapped to 7 days, ranging from 1 day to 30 days with tick marks at the discrete stops.",
        stage: <Sl value={50} label="SLA target" valueLabel="7 days" />,
      },
    ],

    responsive: [
      {
        title: "Default size scales up on mobile (S → M)",
        desc: "On small viewports the slider steps up from S to M - the thumb and track grow so it's easier to grab. The tap target stays at least 44 × 44px.",
        img: IMG + "responsive-size.png",
        imgAlt: "Two ‘Volume’ sliders at 62% with 0–100 tick marks — Desktop (S) with a thinner track and smaller thumb, and Mobile (M) with a larger thumb and track.",
        sample: <Sl size="l" value={60} label="Volume" valueLabel="60%" />,
      },
      {
        title: "Value label floats above the thumb on touch",
        desc: "On touch devices, dragging the thumb shows a floating value label above it so users see the new value without the thumb covering it.",
        img: IMG + "responsive-tooltip.png",
        imgAlt: "A ‘Volume’ slider with a dark value tooltip bubble floating above the thumb as it is dragged — the slider component’s built-in value tooltip.",
        sample: <Sl value={75} valueLabel="75%" />,
      },
      {
        title: "Range thumbs collide gracefully",
        desc: "If the min and max thumbs come within 4% of each other, they snap together but stay individually grabbable - one taps the left thumb to widen.",
        img: IMG + "responsive-collide.png",
        imgAlt: "A ‘Price range’ range slider with the two thumbs nearly touching near the centre (from/to ₹45k and ₹55k) but still individually grabbable, over a 0–100 tick track.",
        sample: <Sl value={50} />,
      },
    ],

    practices: [
      {
        do: { img: IMG + "best-practices-1-do.png", imgAlt: "A ‘Volume’ slider clearly showing its 62% value, over a 0–100 tick track.", stage: <Sl value={62} label="Volume" valueLabel="62%" />, rule: "Always show the current value somewhere - users can't read positions blindly." },
        dont: { img: IMG + "best-practices-1-dont.png", imgAlt: "A ‘Volume’ slider with the thumb near 60% but no value shown — the user can't read the exact figure.", stage: <Sl value={62} />, rule: "A slider with no value label is a guessing game." },
      },
      {
        do: { img: IMG + "best-practices-2-do.png", imgAlt: "A ‘Loan amount (₹)’ slider paired with a number input box showing 41,000, both in sync, over a 0–100 tick track.", stage: <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 8 }}><Sl value={42} label="Discount" valueLabel="42%" /><input type="text" defaultValue="42" readOnly style={{ width: 70, padding: "6px 10px", border: "1px solid var(--ux4g-border-color-neutral-subtle)", borderRadius: 6, textAlign: "right" }} /></div>, rule: "Pair sliders with a number input when exact values matter. Both stay in sync." },
        dont: { img: IMG + "best-practices-2-dont.png", imgAlt: "A ‘Loan amount (₹)’ slider alone showing ₹41,000 as plain text, with no way to type an exact figure.", stage: <Sl value={42} label="Loan amount (₹)" valueLabel="₹42,000" />, rule: "Slider alone for financial values fails users who want to type ₹50,000 exactly." },
      },
      {
        do: { img: IMG + "best-practices-3-do.png", imgAlt: "An ‘SLA target’ slider snapped to a clean 7 days over a 0–10 tick track.", stage: <Sl value={50} label="SLA target" valueLabel="7 days" />, rule: "Use discrete snapping when the value space is small (1 / 3 / 7 / 14 / 30)." },
        dont: { img: IMG + "best-practices-3-dont.png", imgAlt: "An ‘SLA target’ slider showing a meaningless 6.83 days.", stage: <Sl value={50} label="SLA target" valueLabel="6.83 days" />, rule: "A continuous slider for a discrete value produces meaningless precision." },
      },
      {
        do: { img: IMG + "best-practices-4-do.png", imgAlt: "A disabled ‘Loan amount’ slider at ₹5,00,000 with a hint below: ‘Verify your identity to unlock this slider’.", stage: <Sl state="disabled" value={50} label="Loan amount" />, rule: "Disabled with a paired hint explains why the slider is locked." },
        dont: { img: IMG + "best-practices-4-dont.png", imgAlt: "A disabled ‘Loan amount’ slider with no value and no hint, looking broken.", stage: <Sl state="disabled" value={50} />, rule: "Disabled with no context feels broken." },
      },
    ],

    accessibility: [
      { t: "Use native <input type='range'>.", b: "Built-in keyboard nav (arrow keys, Home/End), screen-reader support, and touch handling come free. Custom sliders must reproduce all of this manually." },
      { t: "Always pair with a visible label and value.", b: "The label tells the user what they're adjusting; the value tells them where they are. Both are required for screen-reader users." },
      { t: "Arrow keys move by step.", b: "Left/Right and Up/Down move by the slider's `step` attribute. Page Up/Down moves by 10×; Home/End jump to min/max." },
      { t: "Focus ring is always visible on the thumb.", b: "Keyboard focus shows a 3px ring around the thumb with 3:1 contrast against the surrounding background. Never suppress focus." },
      { t: "Tap targets stay 44 × 44px.", b: "The thumb's visible 16-24px sits inside invisible 44px padding. Thumb-friendly on touch." },
      { t: "aria-valuetext for non-numeric values.", b: "If the slider's value is semantic (Small / Medium / Large / XL), set `aria-valuetext='Medium'` so screen readers say 'Medium' not '50'." },
      { t: "Range sliders use two separate inputs.", b: "Min and max are independently focusable, with `aria-label='Minimum'` and `aria-label='Maximum'`. Avoid custom two-thumb single inputs - they fail screen readers." },
    ],

    related: [
      {
        name: "Input",
        note: "For exact numeric values (loan ₹, age, weight), use Input. Sliders trade precision for relative positioning - wrong for hard numbers.",
        preview: (
          <div className="ux4g-input-container ux4g-input-md" style={{ width: "100%" }}>
            <div className="ux4g-input">
              <input type="text" className="ux4g-input-input" defaultValue="₹2,50,000" readOnly />
            </div>
          </div>
        ),
      },
      {
        name: "Dropdown Menu",
        note: "For 5-15 discrete options (state, language, scheme), use Dropdown. Slider only fits when the value space is continuous.",
        preview: (
          <div className="ux4g-dropdown" style={{ width: "100%" }}>
            <div className="ux4g-dropdown-control">
              <div className="ux4g-dropdown-value"><span className="ux4g-dropdown-text">Maharashtra</span></div>
              <span className="ux4g-dropdown-caret ux4g-icon-outlined">arrow_drop_down</span>
            </div>
          </div>
        ),
      },
      {
        name: "Progress Indicator",
        note: "For showing read-only progress through a long task (upload %, multi-step flow), use Progress Indicator. Slider is for input; Progress is for display.",
        preview: (
          <div style={{ width: "100%" }}>
            <div style={{ height: 8, background: "var(--ux4g-bg-neutral-soft)", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: "68%", height: "100%", background: "var(--ux4g-bg-primary-strong)" }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 11, color: "var(--ux4g-text-neutral-secondary)" }}><span>STEP 4 OF 6</span><span>68%</span></div>
          </div>
        ),
      },
      {
        name: "Chip Group",
        note: "For discrete value picking like price brackets (₹0-1K, ₹1K-5K, ₹5K+), use a Chip Group of pre-defined ranges. Easier than dragging.",
        preview: (
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            <span className="ux4g-filter-chip-md active">All</span>
            <span className="ux4g-filter-chip-md">₹0-1K</span>
            <span className="ux4g-filter-chip-md">₹1K+</span>
          </div>
        ),
      },
    ],
  };

  if (window.UX4G_CP && window.UX4G_CP.render) window.UX4G_CP.render(config);
  else window.UX4G_COMPONENT_CONFIG = config;
})();
