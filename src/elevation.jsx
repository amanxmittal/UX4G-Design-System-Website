/* global React, ReactDOM */
/* Foundations — Elevation (8 sections, per
   Documents/Foundations content/ux4g-elevation-foundation-recommendation.md) */
const { useState, useCallback } = React;

function useToasts(){const[t,s]=useState([]);return{toasts:t,push:useCallback(m=>{const i=Date.now()+Math.random();s(x=>[...x,{id:i,msg:m}]);setTimeout(()=>s(x=>x.filter(y=>y.id!==i)),2400);},[])};}
function Toasts({items}){return <div className="toast-stack">{items.map(t=><div key={t.id} className="toast"><span className="t-mark">i</span><span>{t.msg}</span></div>)}</div>;}

function Header(){return(
  <header className="mbys-header"><div className="container">
    <div className="mbys-crumb"><a href="index.html">Home</a><span className="sep">/</span><a href="UX4G Foundations.html">Foundations</a><span className="sep">/</span><span className="current">Elevation</span></div>
    <h1 className="mbys-title">Elevation</h1>
    <p className="mbys-contrib" style={{margin:0}}><span className="org" style={{fontWeight:400,color:"var(--gray-700)",fontSize:18,lineHeight:1.5}}>Elevation is the perceived distance between a surface and the surface behind it. In UX4G it is expressed through drop shadows — the larger and softer the shadow, the higher the element appears to float. Elevation guides attention, communicates hierarchy and signals that an element overlays other content.</span></p>
  </div></header>);}

function Concept(){return(<section id="concept" className="col-section">
  <h2 className="col-section-title">Two components of elevation</h2>
  <p className="col-section-lede">A floating element needs both a shadow and a z-index — apply them together.</p>
  <div className="ev-concept">
    <div className="ev-concept-card">
      <span className="ev-tag">Shadow</span>
      <h3>Visual depth</h3>
      <p>A CSS <code>box-shadow</code> that mimics light falling on a raised surface. UX4G's shadows always cast downward and slightly spread, simulating a diffuse light source from above.</p>
    </div>
    <div className="ev-concept-card">
      <span className="ev-tag">Z-index</span>
      <h3>Stacking order</h3>
      <p>Controls which element visually sits on top when two elements overlap. A tooltip needs both the L4 shadow AND <code>--ux4g-z-tooltip</code> to render correctly above the page.</p>
    </div>
  </div>
</section>);}

function Principles(){
  const When=[
    "A component sits above the page surface (modals, tooltips, dropdowns, side sheets)",
    "A card or element needs to signal interactivity or hover state",
    "A component needs to indicate it can scroll or be dragged",
    "Creating visual separation between a primary surface and a sunken / well area",
  ];
  const Not=[
    "Elevation is the only signal of interactivity — always combine with colour, label or cursor change",
    "Elevating large sections of a page — excessive shadow creates visual noise and reduces the hierarchy signal",
    "Adding shadow to every card by default — most cards in government service forms don't need elevation",
    "Using shadow to meet accessibility contrast requirements — shadow is not a reliable contrast signal",
  ];
  return(<section id="when" className="col-section">
    <h2 className="col-section-title">When to use, when not to</h2>
    <p className="col-section-lede">Elevation is a tool of restraint. Use it for genuine separation, not decoration.</p>
    <div className="ev-when-grid">
      <div className="ev-when good"><h3>Use elevation when</h3><ul>{When.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
      <div className="ev-when bad"><h3>Don't use elevation when</h3><ul>{Not.map((x,i)=><li key={i}>{x}</li>)}</ul></div>
    </div>
  </section>);}

/* Each level is one or two stacked box-shadow layers.
   Layer shape: [offsetY (px), blur (px), opacity (0–1)].
   The shorthand "0 1px 2px ×2 · 4% opacity" was opaque — we now show the
   actual CSS value plus a labeled-axis breakdown beneath. */
const LEVELS=[
  {l:"L0",t:"--ux4g-shadow-l0",
    use:"Flat page surface, form backgrounds, default border-separated card",
    layers:[]},
  {l:"L1",t:"--ux4g-shadow-l1",
    use:"Resting card with subtle lift; hoverable list row; input focus container",
    layers:[[1,2,0.04],[1,2,0.04]]},
  {l:"L2",t:"--ux4g-shadow-l2",
    use:"Hovered card; elevated panel; non-modal sidebar; sticky table header",
    layers:[[4,8,0.08],[1,2,0.04]]},
  {l:"L3",t:"--ux4g-shadow-l3",
    use:"Dropdown menu; popover; date picker; alert / notification floating above content",
    layers:[[8,16,0.16],[4,8,0.08]]},
  {l:"L4",t:"--ux4g-shadow-l4",
    use:"Modal dialog; drawer / sidenav overlay; toast notification",
    layers:[[16,32,0.24],[8,16,0.16]]},
];

const shadowCss = (layers) =>
  layers.length
    ? layers.map(([y,b,o]) => `0 ${y}px ${b}px rgba(0,0,0,${o})`).join(", ")
    : "none";

function ShadowLevels(){
  return(<section id="levels" className="col-section">
    <h2 className="col-section-title">Shadow levels</h2>
    <p className="col-section-lede">Five levels from flat to floating. Blur doubles with each level; opacity of the primary shadow also increases (4% → 8% → 16% → 24%). This creates a consistent progression of perceived height.</p>

    <div className="ev-levels-grid">
      {LEVELS.map(L=>{
        const css = shadowCss(L.layers);
        return (
        <div key={L.l} className="ev-level-card">
          <div className="ev-level-stage">
            <div className="ev-level-tile" style={{boxShadow:css}}>{L.l}</div>
          </div>
          <div className="ev-level-meta">
            <code className="tp-face-token">{L.t}</code>
            {L.layers.length === 0 ? (
              <div className="ev-level-spec ev-level-spec--none">No shadow</div>
            ) : (
              <div className="ev-level-spec">
                {L.layers.map(([y, b, o], i) => (
                  <div className="ev-level-layer" key={i}>
                    <span className="ev-layer-tag">Layer {i + 1}</span>
                    <span className="ev-layer-axis"><em>Y</em> {y}px</span>
                    <span className="ev-layer-sep">·</span>
                    <span className="ev-layer-axis"><em>Blur</em> {b}px</span>
                    <span className="ev-layer-sep">·</span>
                    <span className="ev-layer-axis"><em>Alpha</em> {Math.round(o * 100)}%</span>
                  </div>
                ))}
                <code className="ev-level-css" title="Copy the full box-shadow value">
                  {css}
                </code>
              </div>
            )}
            <div className="ev-level-use">{L.use}</div>
          </div>
        </div>
        );
      })}
    </div>
  </section>);}

const COMP_MAP=[
  ["Page / app background","L0 (none)","base (0)"],
  ["Default card (static)","L0 (border only)","—"],
  ["Card (hoverable / interactive)","L1 at rest, L2 on hover","layout-raised (1)"],
  ["Sticky header / sticky table row","L2","sticky (1020)"],
  ["Fixed footer / bottom bar","L2","fixed (1030)"],
  ["Inline alert / info banner","L2","layout-overlay (2)"],
  ["Dropdown menu","L3","dropdown (1000)"],
  ["Popover","L3","popover (1070)"],
  ["Date picker","L3","popover (1070)"],
  ["Tooltip","L3","tooltip (1080)"],
  ["Offcanvas / side drawer","L4","offcanvas (1040)"],
  ["Modal backdrop","L0 (dim overlay colour)","modal-backdrop (1050)"],
  ["Modal dialog","L4","modal (1060)"],
  ["Toast notification","L4","toast (1090)"],
];
function ComponentMap(){return(<section id="mapping" className="col-section">
  <h2 className="col-section-title">Component mapping</h2>
  <p className="col-section-lede">Every UX4G component maps to one shadow level and one z-index token. Use this to answer "what shadow does a modal use?" in one place.</p>
  <div className="sem-table">
    <div className="sem-table-head" style={{gridTemplateColumns:"1.5fr 1.4fr 1.4fr"}}><span>Component</span><span>Shadow level</span><span>Z-index token</span></div>
    {COMP_MAP.map((r,i)=>(<div key={i} className="sem-table-row" style={{gridTemplateColumns:"1.5fr 1.4fr 1.4fr"}}><span>{r[0]}</span><span><code>{r[1]}</code></span><span><code>{r[2]}</code></span></div>))}
  </div>
</section>);}

function ZIndex(){
  const Layout=[
    ["--ux4g-z-layout-base",0,"Default page content"],
    ["--ux4g-z-layout-raised",1,"Slightly elevated cards, sticky elements within a section"],
    ["--ux4g-z-layout-overlay",2,"Inline overlays on content"],
    ["--ux4g-z-layout-top",3,"Top of page content stack"],
  ];
  const Comp=[
    ["--ux4g-z-dropdown",1000,"Dropdown menus"],
    ["--ux4g-z-sticky",1020,"Sticky navbar, sticky table headers"],
    ["--ux4g-z-fixed",1030,"Fixed-position elements (persistent header, bottom nav)"],
    ["--ux4g-z-offcanvas",1040,"Slide-in side panels, offcanvas navigation"],
    ["--ux4g-z-modal-backdrop",1050,"Dimming overlay behind a modal"],
    ["--ux4g-z-modal",1060,"The modal dialog itself"],
    ["--ux4g-z-popover",1070,"Popovers, date pickers"],
    ["--ux4g-z-tooltip",1080,"Tooltips (always above everything else)"],
    ["--ux4g-z-toast",1090,"Toast / snackbar notifications (topmost)"],
  ];
  return(<section id="zindex" className="col-section">
    <h2 className="col-section-title">Z-index system</h2>
    <p className="col-section-lede">Always use UX4G z-index tokens — never hard-code <code>z-index: 9999</code>. Values between tokens leave deliberate room for teams to insert intermediates without conflicting with the system.</p>

    <h3 className="col-h3">Layout z-index (within-page stacking)</h3>
    <div className="sem-table"><div className="sem-table-head" style={{gridTemplateColumns:"1.6fr 80px 2fr"}}><span>Token</span><span>Value</span><span>Use for</span></div>
      {Layout.map((r,i)=>(<div key={i} className="sem-table-row" style={{gridTemplateColumns:"1.6fr 80px 2fr"}}><span><code>{r[0]}</code></span><span>{r[1]}</span><span>{r[2]}</span></div>))}
    </div>

    <h3 className="col-h3">Component z-index (above-page elements)</h3>
    <div className="sem-table"><div className="sem-table-head" style={{gridTemplateColumns:"1.6fr 80px 2fr"}}><span>Token</span><span>Value</span><span>Use for</span></div>
      {Comp.map((r,i)=>(<div key={i} className="sem-table-row" style={{gridTemplateColumns:"1.6fr 80px 2fr"}}><span><code>{r[0]}</code></span><span>{r[1]}</span><span>{r[2]}</span></div>))}
    </div>
  </section>);}

function FocusStates(){return(<section id="focus" className="col-section">
  <h2 className="col-section-title">Focus states</h2>
  <p className="col-section-lede">Focus tokens also use <code>box-shadow</code>, but they serve accessibility — never substitute them for elevation.</p>
  <div className="sem-table">
    <div className="sem-table-head" style={{gridTemplateColumns:"1.6fr 1.6fr 2fr"}}><span>Token</span><span>Value</span><span>Use when</span></div>
    <div className="sem-table-row" style={{gridTemplateColumns:"1.6fr 1.6fr 2fr"}}><span><code>--ux4g-shadow-focus-ring</code></span><span>2px neutral ring + 4px primary ring</span><span>Standard keyboard focus on buttons, links, interactive elements</span></div>
    <div className="sem-table-row" style={{gridTemplateColumns:"1.6fr 1.6fr 2fr"}}><span><code>--ux4g-shadow-focus-inset</code></span><span>inset 2px primary-strong border</span><span>Focus on input fields (inset, so it doesn't shift layout)</span></div>
    <div className="sem-table-row" style={{gridTemplateColumns:"1.6fr 1.6fr 2fr"}}><span><code>--ux4g-shadow-focus-border</code></span><span>2px primary-default ring</span><span>Subtle focus on low-priority interactive elements</span></div>
  </div>
  <div className="col-callout note">Focus states are separate from elevation levels and should always be applied in addition to other styling. Never rely on shadow alone for focus indication — combine with colour change.</div>
</section>);}

function DoDont(){
  const R=[
    ["Use shadow + z-index together when floating an element above the page","Apply a high shadow level (L3/L4) without a matching z-index — creates visual but not stacking elevation"],
    ["Use L1 for hoverable cards, L3 for dropdowns, L4 for modals","Use the same shadow level for everything — destroys hierarchy signal"],
    ["Use UX4G z-index tokens (--ux4g-z-modal)","Hard-code arbitrary values (z-index: 99999)"],
    ["Use border + whitespace to separate flat cards","Add L1 shadow to every card by default"],
    ["Use shadow conservatively — fewer elevated elements = stronger hierarchy signal","Elevate large page sections or full-width banners"],
    ["Combine elevation change with surface colour change on hover","Animate shadow level changes (too distracting)"],
  ];
  return(<section id="dodont" className="col-section">
    <h2 className="col-section-title">Do and don't</h2>
    <p className="col-section-lede">Six elevation decisions, summarised.</p>
    <div className="dd-table"><div className="dd-head"><span>Do</span><span>Don't</span></div>{R.map((r,i)=>(<div key={i} className="dd-row"><span>{r[0]}</span><span>{r[1]}</span></div>))}</div>
  </section>);}

function DarkMode(){return(<section id="darkmode" className="col-section">
  <h2 className="col-section-title">Dark mode (roadmap)</h2>
  <p className="col-section-lede">
    UX4G currently ships a single light theme. Dark theme support is on the roadmap — and the elevation tokens are already built to handle it.
  </p>
  <div className="dm-grid">
    <div className="dm-card dm-card-light">
      <div className="dm-tag">Today · Light theme</div>
      <div className="dm-preview" style={{ background: "#fff" }}>
        <div className="dm-row"><span className="dm-h" style={{ color: "#171717" }}>Floating panel</span></div>
        <div className="dm-row"><span className="dm-b" style={{ color: "#525252" }}>Shadow is the primary depth signal.</span></div>
        <div className="dm-row"><span style={{display:"inline-block",padding:"10px 16px",borderRadius:8,background:"#fff",border:"1px solid #E5E5E5",fontSize:12,fontWeight:600,color:"#171717",boxShadow:"0 8px 16px rgba(0,0,0,0.16), 0 4px 8px rgba(0,0,0,0.08)"}}>Elevated card · L3</span></div>
      </div>
    </div>
    <div className="dm-card dm-card-dark">
      <div className="dm-tag">Roadmap · Dark theme</div>
      <div className="dm-preview" style={{ background: "#0A0A0A" }}>
        <div className="dm-row"><span className="dm-h" style={{ color: "#FAFAFA" }}>Floating panel</span></div>
        <div className="dm-row"><span className="dm-b" style={{ color: "#A1A1A1" }}>Surface lightness takes over from shadow.</span></div>
        <div className="dm-row"><span style={{display:"inline-block",padding:"10px 16px",borderRadius:8,background:"#262626",border:"1px solid #404040",fontSize:12,fontWeight:600,color:"#FAFAFA"}}>Elevated card · L3</span></div>
      </div>
    </div>
  </div>
  <p className="col-foot-note" style={{marginTop:18,maxWidth:720}}>
    UX4G's shadow tokens use opacity-based RGBA values (not hard-coded greys) so the same shadow tokens can be reused on a dark surface — the alpha picks up the new background automatically.
  </p>
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
const EV_TOC=[
  { id:"concept",  label:"Two components" },
  { id:"when",     label:"When to use" },
  { id:"levels",   label:"Shadow levels" },
  { id:"mapping",  label:"Component mapping" },
  { id:"zindex",   label:"Z-index system" },
  { id:"focus",    label:"Focus states" },
  { id:"dodont",   label:"Do and don't" },
  { id:"darkmode", label:"Dark mode" },
  { id:"related",  label:"Related foundations" },
];

function App(){const{toasts}=useToasts();return(
  <><SiteNavbar/><main className="col-page"><Header/>
    <div className="container col-body">
      <div className="fnd-layout">
        <div className="fnd-main">
          <Concept/><Principles/><ShadowLevels/><ComponentMap/><ZIndex/><FocusStates/><DoDont/><DarkMode/><Related exclude="elevation"/>
        </div>
        <OnThisPage items={EV_TOC}/>
      </div>
    </div>
  </main><SiteFooter/><Toasts items={toasts}/></>);}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
