/* global React, ReactDOM */
/* Foundations — Border & Radius (one page, two parts, per
   Documents/Foundations content/ux4g-border-radius-foundation-recommendation.md) */
const { useState, useCallback } = React;

function useToasts(){const[t,s]=useState([]);return{toasts:t,push:useCallback(m=>{const i=Date.now()+Math.random();s(x=>[...x,{id:i,msg:m}]);setTimeout(()=>s(x=>x.filter(y=>y.id!==i)),2400);},[])};}
function Toasts({items}){return <div className="toast-stack">{items.map(t=><div key={t.id} className="toast"><span className="t-mark">i</span><span>{t.msg}</span></div>)}</div>;}

function Header(){return(
  <header className="mbys-header"><div className="container">
    <div className="mbys-crumb"><a href="index.html">Home</a><span className="sep">/</span><a href="UX4G Foundations.html">Foundations</a><span className="sep">/</span><span className="current">Border &amp; Radius</span></div>
    <h1 className="mbys-title">Border &amp; Radius</h1>
    <p className="mbys-contrib" style={{margin:0}}><span className="org" style={{fontWeight:400,color:"var(--gray-700)",fontSize:18,lineHeight:1.5}}>Borders define space, separate content and signal state. Radius rounds corners and communicates element size. Together they give UX4G components a consistent edge treatment across every page.</span></p>
  </div></header>);}

/* ─────────────── Border ─────────────── */
function BorderIntro(){return(<section id="border-intro" className="col-section">
  <h2 className="col-section-title">Border</h2>
  <p className="col-section-lede">Border is always composed from two orthogonal properties — <strong>width</strong> and <strong>colour</strong> — chosen independently. A 1px neutral border on a card means something different to a 2px primary border on a focused input.</p>
  <div className="ev-concept">
    <div className="ev-concept-card"><span className="ev-tag">Define</span><h3>Boundary</h3><p>Draws the boundary of a component — input field, card, table cell.</p></div>
    <div className="ev-concept-card"><span className="ev-tag">Separate</span><h3>Hierarchy</h3><p>Creates visual hierarchy between adjacent content areas — section dividers, table rows.</p></div>
    <div className="ev-concept-card"><span className="ev-tag">Signal</span><h3>State</h3><p>Communicates state changes — focus ring, error state, selected state.</p></div>
  </div>
</section>);}

function BorderWidths(){
  const W=[
    ["--ux4g-border-width-none","0px","Remove border (overrides)"],
    ["--ux4g-border-width-sm","1px","Default — cards, dividers, input fields at rest"],
    ["--ux4g-border-width-md","2px","Emphasis — focus rings, selected / active state, inline alerts"],
    ["--ux4g-border-width-lg","3px","Strong emphasis — left-border pattern for info panels"],
    ["--ux4g-border-width-xl","4px","Maximum — decorative borders, step indicators, brand accent bars"],
  ];
  return(<section id="border-width" className="col-section">
    <h2 className="col-section-title">Border width tokens</h2>
    <p className="col-section-lede">Five semantic widths. Default service UI uses <code>border-width-sm</code> for almost everything. Reserve <code>md</code> for focus and selection. Use <code>lg</code> and <code>xl</code> sparingly.</p>
    <div className="sem-table">
      <div className="sem-table-head" style={{gridTemplateColumns:"1.5fr 1fr 2fr"}}><span>Semantic token</span><span>Width</span><span>Primary use</span></div>
      {W.map((r,i)=>(<div key={i} className="sem-table-row" style={{gridTemplateColumns:"1.5fr 1fr 2fr",alignItems:"center"}}>
        <span><code>{r[0]}</code></span>
        <span style={{display:"flex",gap:12,alignItems:"center"}}><span style={{display:"inline-block",width:60,borderBottom:`${r[1]} solid var(--ink)`}}/><span>{r[1]}</span></span>
        <span>{r[2]}</span>
      </div>))}
    </div>
  </section>);}

function BorderColours(){
  const N=[
    ["--ux4g-border-color-neutral-subtle","Very light dividers; table row separators; background zones"],
    ["--ux4g-border-color-neutral-default","Default card border; section dividers; read-only containers"],
    ["--ux4g-border-color-neutral-strong","Prominent dividers; emphasised containers"],
    ["--ux4g-border-color-neutral-hover","Input / interactive element on hover"],
    ["--ux4g-border-color-neutral-active","Input / interactive element in active / pressed"],
    ["--ux4g-border-color-neutral-focus","Neutral focus ring (when primary is inappropriate)"],
    ["--ux4g-border-color-neutral-elevated","White border — elevated surfaces against coloured backgrounds"],
  ];
  const S=[
    ["--ux4g-border-color-success-default","Success alert border (light)"],
    ["--ux4g-border-color-success-strong","Success input validation border"],
    ["--ux4g-border-color-info-default","Info alert border"],
    ["--ux4g-border-color-info-strong","Info emphasis border"],
    ["--ux4g-border-color-error-default","Error alert border"],
    ["--ux4g-border-color-error-strong","Error input validation border — always pair with icon + message"],
    ["--ux4g-border-color-warning-default","Warning alert border"],
    ["--ux4g-border-color-warning-strong","Warning emphasis border"],
  ];
  const B=[
    ["--ux4g-border-color-primary-default","Selected / active tab, focused checkbox, selected radio"],
    ["--ux4g-border-color-primary-strong","Active form step, selected navigation item"],
    ["--ux4g-border-color-primary-hover","Primary interactive element on hover"],
    ["--ux4g-border-color-primary-active","Primary interactive element on press"],
    ["--ux4g-border-color-secondary-default","Secondary brand elements"],
    ["--ux4g-border-color-tertiary-default","Tertiary brand elements"],
  ];
  return(<section id="border-color" className="col-section">
    <h2 className="col-section-title">Border colour tokens</h2>
    <p className="col-section-lede">Grouped by semantic purpose. Width and colour are always chosen independently.</p>

    <h3 className="col-h3">Neutral — general UI structure</h3>
    <div className="sem-table"><div className="sem-table-head"><span>Token</span><span>Use</span></div>{N.map((r,i)=>(<div key={i} className="sem-table-row"><span><code>{r[0]}</code></span><span>{r[1]}</span></div>))}</div>

    <h3 className="col-h3">Control — form inputs</h3>
    <div className="sem-table">
      <div className="sem-table-head"><span>Token</span><span>Use</span></div>
      <div className="sem-table-row"><span><code>--ux4g-control-border-default</code></span><span>Text input, select, textarea — resting state. Verify it clears <strong>3:1 contrast</strong> against the background (WCAG 1.4.11).</span></div>
    </div>

    <h3 className="col-h3">Status — feedback states</h3>
    <div className="sem-table"><div className="sem-table-head"><span>Token</span><span>Use</span></div>{S.map((r,i)=>(<div key={i} className="sem-table-row"><span><code>{r[0]}</code></span><span>{r[1]}</span></div>))}</div>
    <div className="col-callout note">Never use a status border colour as the sole indicator of state — always pair with an icon and a text label.</div>

    <h3 className="col-h3">Brand — primary interactions</h3>
    <div className="sem-table"><div className="sem-table-head"><span>Token</span><span>Use</span></div>{B.map((r,i)=>(<div key={i} className="sem-table-row"><span><code>{r[0]}</code></span><span>{r[1]}</span></div>))}</div>
  </section>);}

function BorderStyles(){
  return(<section id="border-styles" className="col-section">
    <h2 className="col-section-title">Border styles and directional borders</h2>
    <p className="col-section-lede">Three CSS border styles. UX4G applies them via logical properties — automatically RTL-safe.</p>
    <div className="bd-styles">
      <div className="bd-style-card"><div className="bd-style-demo solid"/><h3>Solid</h3><code>.ux4g-border</code><p>Default. All component borders, dividers, inputs.</p></div>
      <div className="bd-style-card"><div className="bd-style-demo dashed"/><h3>Dashed</h3><code>.ux4g-border-dashed</code><p>Drag-and-drop targets; upload zones; editable region indicators. Never use for error states.</p></div>
      <div className="bd-style-card"><div className="bd-style-demo dotted"/><h3>Dotted</h3><code>.ux4g-border-dotted</code><p>Rare; decorative separators only.</p></div>
    </div>

    <h3 className="col-h3">Directional utilities (RTL-safe)</h3>
    <pre className="tp-code">{`<!-- Full border -->
<div class="ux4g-border ux4g-border-neutral-subtle">Card</div>

<!-- Bottom border only (divider) -->
<div class="ux4g-bb ux4g-border-neutral-default">Section header</div>

<!-- Left accent border — becomes right border in RTL -->
<div class="ux4g-bl ux4g-border-primary ux4g-border-bold">Info panel</div>

<!-- Error state input -->
<div class="ux4g-border ux4g-border-error-strong ux4g-border-bold">Error input</div>`}</pre>
    <p className="col-foot-note">
      <code>.ux4g-br</code> uses <code>border-inline-end</code>; <code>.ux4g-bl</code> uses <code>border-inline-start</code> — they flip automatically in right-to-left layouts.
    </p>
  </section>);}

function BorderComponentMap(){
  const R=[
    ["Default card","sm (1px)","neutral-default"],
    ["Table row divider","sm (1px)","neutral-subtle"],
    ["Text input / select / textarea (resting)","sm (1px)","control-border-default"],
    ["Text input (hover)","sm (1px)","neutral-hover"],
    ["Text input (focus)","md (2px)","primary-strong (via focus shadow)"],
    ["Text input (error)","md (2px)","error-strong"],
    ["Text input (success)","md (2px)","success-strong"],
    ["Alert / status panel (left accent)","lg (3px)","status colour (error/success/warning/info)"],
    ["Selected / active tab","md (2px)","primary-default (bottom only)"],
    ["Progress step (active)","xl (4px)","primary-strong"],
    ["Section divider","sm (1px)","neutral-subtle"],
    ["Skip link / focus indicator","md (2px)","primary-strong"],
  ];
  return(<section id="border-mapping" className="col-section">
    <h2 className="col-section-title">Border component mapping</h2>
    <p className="col-section-lede">Width and colour combined for the most common UX4G components.</p>
    <div className="sem-table">
      <div className="sem-table-head" style={{gridTemplateColumns:"2fr 1fr 1.6fr"}}><span>Component</span><span>Width</span><span>Colour</span></div>
      {R.map((r,i)=>(<div key={i} className="sem-table-row" style={{gridTemplateColumns:"2fr 1fr 1.6fr"}}><span>{r[0]}</span><span>{r[1]}</span><span>{r[2]}</span></div>))}
    </div>
  </section>);}

function BorderDoDont(){
  const R=[
    ["Compose border from width + colour independently","Mix hard-coded border: 1px solid #ccc with token-based borders"],
    ["Use --ux4g-control-border-default for input fields","Use neutral-default for inputs — different semantic group"],
    ["Pair status border colour with icon + text","Use red / green border as the only error / success signal"],
    ["Use ux4g-bl / ux4g-br (logical) for side borders","Use border-left / border-right — breaks RTL layouts"],
    ["Use dashed border for drag / drop and upload zones","Use dashed border for error states or warnings"],
    ["Use border-width-md for focus states","Use border-width-sm for focus — 1px focus rings fail WCAG"],
  ];
  return(<section id="border-dodont" className="col-section">
    <h2 className="col-section-title">Border — do and don't</h2>
    <p className="col-section-lede">Six common border decisions, summarised.</p>
    <div className="dd-table"><div className="dd-head"><span>Do</span><span>Don't</span></div>{R.map((r,i)=>(<div key={i} className="dd-row"><span>{r[0]}</span><span>{r[1]}</span></div>))}</div>
  </section>);}

/* ─────────────── Radius ─────────────── */
function RadiusIntro(){return(<section id="radius-intro" className="col-section">
  <h2 className="col-section-title">Radius</h2>
  <p className="col-section-lede">Radius rounds the corners of a component. In UX4G it communicates <strong>element size</strong> — larger components use larger radii. Two principles govern every radius decision.</p>
  <div className="ev-concept">
    <div className="ev-concept-card">
      <span className="ev-tag">01</span>
      <h3>Proportionality</h3>
      <p>A component's radius should be proportional to its size. A small badge (height ~20px) uses xs (2px). A full-screen modal uses xl (16px). Apply 16px radius to a 20px badge and the corners dominate the shape.</p>
    </div>
    <div className="ev-concept-card">
      <span className="ev-tag">02</span>
      <h3>Nesting</h3>
      <p>When a rounded parent contains a rounded child, the child uses a smaller radius. If the parent uses <code>md (8px)</code>, the child uses <code>sm (4px)</code> or <code>xs (2px)</code>. A child's radius should never equal or exceed its parent's.</p>
    </div>
  </div>
</section>);}

function RadiusScale(){
  const R=[
    ["--ux4g-radius-none",0,"Tables, full-bleed image containers, data grids, government masthead"],
    ["--ux4g-radius-xs",2,"Badges, status indicators, checkbox corners, keyboard shortcuts, tags"],
    ["--ux4g-radius-sm",4,"Labels / lozenges, compact buttons, timestamps, tooltip containers"],
    ["--ux4g-radius-md",8,"Buttons, text inputs, select dropdowns, navigation items, text areas"],
    ["--ux4g-radius-lg",12,"Cards, in-page containers, dropdown menus, floating panels"],
    ["--ux4g-radius-xl",16,"Modal dialogs, sidesheets, page containers, large cards"],
    ["--ux4g-radius-2xl",24,"Large feature containers, hero sections, onboarding modals"],
    ["--ux4g-radius-full",999,"Avatars, pills, toggle switches, circular icon buttons"],
  ];
  return(<section id="radius-scale" className="col-section">
    <h2 className="col-section-title">Radius scale and component mapping</h2>
    <p className="col-section-lede">Eight tokens. Most service UI uses only three levels in practice: <code>xs</code> for small indicators, <code>md</code> for interactive controls, <code>lg</code> for containers.</p>
    <div className="rd-scale">
      {R.map(([t,v,u])=>(
        <div key={t} className="rd-scale-row">
          <div className="rd-shape" style={{borderRadius:v===999?"999px":v+"px"}}/>
          <div className="rd-meta">
            <code className="tp-face-token">{t}</code>
            <div className="rd-value">{v===999?"999px (pill / circle)":v+"px"}</div>
            <div className="rd-use">{u}</div>
          </div>
        </div>
      ))}
    </div>
  </section>);}

function RadiusFocus(){
  const F=[
    ["0px (none)","Square focus ring"],
    ["4px (sm)","6px apparent ring corners"],
    ["8px (md)","10px apparent ring corners"],
    ["12px (lg)","14px apparent ring corners"],
    ["999px (full)","Circular focus ring"],
  ];
  return(<section id="radius-focus" className="col-section">
    <h2 className="col-section-title">Focus ring radius</h2>
    <p className="col-section-lede">When a component has a visible focus ring, the ring's apparent radius should visually match the component it surrounds. <strong>Focus ring radius = component radius + 2px offset.</strong></p>
    <p className="col-foot-note" style={{marginBottom:18}}>
      Because UX4G's focus ring is a <code>box-shadow</code> (not an outline or border), the apparent corner radius is automatically inherited from the element's <code>border-radius</code>. No extra calculation needed in code — only check Figma matches.
    </p>
    <div className="sem-table">
      <div className="sem-table-head"><span>Component radius</span><span>Focus ring appears as</span></div>
      {F.map((r,i)=>(<div key={i} className="sem-table-row"><span>{r[0]}</span><span>{r[1]}</span></div>))}
    </div>
  </section>);}

function RadiusUtilities(){return(<section id="radius-utilities" className="col-section">
  <h2 className="col-section-title">Radius utility classes</h2>
  <h3 className="col-h3">All-corner</h3>
  <pre className="tp-code">{`<div class="ux4g-radius-none">Square corners</div>
<div class="ux4g-radius-s">4px (sm)</div>
<div class="ux4g-radius-m">8px (md)</div>
<div class="ux4g-radius-l">12px (lg)</div>
<div class="ux4g-radius-full">999px (pill / circle)</div>`}</pre>

  <h3 className="col-h3">Partial corner (tabs, attached elements)</h3>
  <pre className="tp-code">{`<!-- Tab panel — round top corners only -->
<div class="ux4g-radius-top-m">Tab content</div>

<!-- Bottom sheet / drawer — round top corners only -->
<div class="ux4g-radius-top-l">Bottom sheet</div>

<!-- Attached dropdown — square top, round bottom -->
<div class="ux4g-radius-bottom-m">Dropdown</div>`}</pre>

  <h3 className="col-h3">Individual corner (advanced)</h3>
  <pre className="tp-code">{`<!-- Rounded only on top-right and bottom-right -->
<div class="ux4g-radius-tr-s ux4g-radius-br-s">Connector</div>`}</pre>

  <div className="col-callout note">
    Token-only levels (<code>xs</code>, <code>xl</code>, <code>2xl</code>) are available as CSS custom properties but do not have utility classes. Use them in component stylesheets via <code>border-radius: var(--ux4g-radius-xs);</code>.
  </div>
</section>);}

function RadiusDoDont(){
  const R=[
    ["Use xs (2px) for badges, tags and small status indicators","Apply large radius (xl / 2xl) to small components — creates pill shapes unintentionally"],
    ["Use md (8px) for buttons and all form inputs","Mix radii inconsistently — if cards use lg, don't use sm for some and xl for others"],
    ["Use lg (12px) or xl (16px) for cards and modals","Use radius-full on rectangular containers — creates unexpected pill shapes"],
    ["Use full (999px) only for true circles and pill shapes","Use different radius values for the same component across pages"],
    ["Apply smaller radius to children than their parent container","Override token values with hard-coded pixel values"],
    ["Use none (0px) for government masthead, full-bleed tables, data grids","Apply rounded corners to elements where sharpness signals authority"],
  ];
  return(<section id="radius-dodont" className="col-section">
    <h2 className="col-section-title">Radius — do and don't</h2>
    <p className="col-section-lede">Six common radius decisions, summarised.</p>
    <div className="dd-table"><div className="dd-head"><span>Do</span><span>Don't</span></div>{R.map((r,i)=>(<div key={i} className="dd-row"><span>{r[0]}</span><span>{r[1]}</span></div>))}</div>
  </section>);}

const FND_LIST=[
  { key:"colour",     name:"Colour",          desc:"Palettes, semantic tokens, pairings and contrast",     href:"UX4G Colour.html",     iconCls:"rel-icon-colour",     iconNodes:[<span key="1"/>,<span key="2"/>,<span key="3"/>,<span key="4"/>] },
  { key:"typography", name:"Typography",      desc:"Families, scale, weights and accessibility",            href:"UX4G Typography.html", iconCls:"rel-icon-typography", iconNodes:"Aa" },
  { key:"spacing",    name:"Spacing",         desc:"4px scale, inline / stack / padding / section tokens",  href:"UX4G Spacing.html",    iconCls:"rel-icon-spacing",    iconNodes:[<span key="1"/>,<span key="2"/>,<span key="3"/>] },
  { key:"layout",     name:"Layout",          desc:"Breakpoints, containers, 12-column grid, page regions", href:"UX4G Layout.html",     iconCls:"rel-icon-layout",     iconNodes:Array.from({length:12}).map((_,i)=><span key={i}/>) },
  { key:"elevation",  name:"Elevation",       desc:"Shadow levels, z-index and focus states",               href:"UX4G Elevation.html",  iconCls:"rel-icon-elevation",  iconNodes:<span/> },
  { key:"border",     name:"Border & Radius", desc:"Widths, colours, styles, radius scale and proportionality", href:"UX4G Borders.html",iconCls:"rel-icon-border",     iconNodes:<span/> },
];
function Related({ exclude }){return(<section id="related" className="col-section last">
  <h2 className="col-section-title">Related foundations</h2>
  <p className="col-section-lede">Other building blocks of the UX4G design language.</p>
  <div className="rel-grid">
    {FND_LIST.filter(f=>f.key!==exclude).map(f=>(
      <a key={f.key} href={f.href} className="rel-card">
        <div className={"rel-icon "+f.iconCls}>{f.iconNodes}</div>
        <h3>{f.name}</h3>
        <p>{f.desc}</p>
        <span className="rel-arrow" aria-hidden="true">→</span>
      </a>
    ))}
  </div>
</section>);}

/* ─────────────── On-this-page rail ─────────────── */
function useScrollSpy(ids){
  const [active,setActive]=React.useState(ids[0]);
  React.useEffect(()=>{
    const onScroll=()=>{
      let cur=ids[0];
      for(const id of ids){
        const el=document.getElementById(id);
        if(el && el.getBoundingClientRect().top<=160) cur=id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll",onScroll,{passive:true});
    onScroll();
    return ()=>window.removeEventListener("scroll",onScroll);
  },[ids.join("|")]);
  return active;
}
function OnThisPage({ items }){
  const active=useScrollSpy(items.map(i=>i.id));
  return (
    <aside className="fnd-side">
      <p className="side-label">On this page</p>
      <ul>{items.map(i=>(
        <li key={i.id}><a href={"#"+i.id} className={active===i.id?"active":""}>{i.label}</a></li>
      ))}</ul>
    </aside>
  );
}
const BD_TOC=[
  { id:"border-intro",     label:"Border" },
  { id:"border-width",     label:"Width tokens" },
  { id:"border-color",     label:"Colour tokens" },
  { id:"border-styles",    label:"Styles & directional" },
  { id:"border-mapping",   label:"Component mapping" },
  { id:"border-dodont",    label:"Border do and don't" },
  { id:"radius-intro",     label:"Radius" },
  { id:"radius-scale",     label:"Radius scale" },
  { id:"radius-focus",     label:"Focus ring radius" },
  { id:"radius-utilities", label:"Radius utilities" },
  { id:"radius-dodont",    label:"Radius do and don't" },
  { id:"related",          label:"Related foundations" },
];

function App(){const{toasts}=useToasts();return(
  <><SiteNavbar/><main className="col-page"><Header/>
    <div className="container col-body">
      <div className="fnd-layout">
        <div className="fnd-main">
          <BorderIntro/><BorderWidths/><BorderColours/><BorderStyles/><BorderComponentMap/><BorderDoDont/>
          <RadiusIntro/><RadiusScale/><RadiusFocus/><RadiusUtilities/><RadiusDoDont/>
          <Related exclude="border"/>
        </div>
        <OnThisPage items={BD_TOC}/>
      </div>
    </div>
  </main><SiteFooter/><Toasts items={toasts}/></>);}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
