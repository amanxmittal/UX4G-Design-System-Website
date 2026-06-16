/* global React, ReactDOM */
/* Foundations — Layout (9 sections, per
   Documents/Foundations content/ux4g-layout-foundation-recommendation.md) */
const { useState, useCallback } = React;

function useToasts(){const[t,s]=useState([]);return{toasts:t,push:useCallback(m=>{const i=Date.now()+Math.random();s(x=>[...x,{id:i,msg:m}]);setTimeout(()=>s(x=>x.filter(y=>y.id!==i)),2400);},[])};}
function Toasts({items}){return <div className="toast-stack">{items.map(t=><div key={t.id} className="toast"><span className="t-mark">i</span><span>{t.msg}</span></div>)}</div>;}

function Header(){return(
  <header className="mbys-header"><div className="container">
    <div className="mbys-crumb"><a href="index.html">Home</a><span className="sep">/</span><a href="UX4G Foundations.html">Foundations</a><span className="sep">/</span><span className="current">Layout</span></div>
    <h1 className="mbys-title">Layout</h1>
    <p className="mbys-contrib" style={{margin:0}}><span className="org" style={{fontWeight:400,color:"var(--gray-700)",fontSize:18,lineHeight:1.5}}>Layout is the structure beneath everything. Consistent layouts let citizens build a mental model of government services quickly — they know where the header is, where the form is, where help lives. A predictable layout reduces orientation time and lets people focus on the task.</span></p>
  </div></header>);}

function Principles(){
  const P=[
    ["Hierarchy through space","Elements with more surrounding space draw more attention and are perceived as more important. Use layout to direct focus — page title before form, primary action before secondary."],
    ["Consistency builds confidence","Every UX4G service page should feel like it belongs to the same system. Use the same page shell, container widths and content regions across all services."],
    ["Mobile first","Design the smallest screen first. The majority of India's citizens access government services from mobile devices with variable connectivity. Start at 360px and expand upward."],
  ];
  return(<section id="principles" className="col-section">
    <h2 className="col-section-title">Principles</h2>
    <p className="col-section-lede">Three rules that frame every layout decision.</p>
    <div className="col-principles">{P.map(([t,b],i)=>(<div key={i} className="col-principle"><span className="n">{String(i+1).padStart(2,"0")}</span><div><h3>{t}</h3><p>{b}</p></div></div>))}</div>
  </section>);}

function BaseUnit(){return(<section id="base" className="col-section">
  <h2 className="col-section-title">Base unit</h2>
  <p className="col-section-lede">UX4G's layout system is built on a <strong>4px base unit</strong>. All grid gutters, column widths, container sizes and spacing values are multiples of 4px. This creates natural alignment between type, icons and layout regions.</p>
</section>);}

function Hierarchy(){return(<section id="hierarchy" className="col-section">
  <h2 className="col-section-title">Three-level layout hierarchy</h2>
  <p className="col-section-lede">UX4G layout operates at three levels. Knowing which level you're designing at is the key to picking the right tool.</p>

  <div className="ly-levels">
    <div className="ly-level">
      <div className="ly-level-num">01</div>
      <div className="ly-level-body">
        <h3>Page shell (application layout)</h3>
        <p>The fixed outer structure shared across all pages in a service: header / navbar, optional side navigation, footer. Defined by UX4G's Navbar and layout patterns, not by the grid.</p>
        <div className="ly-shell-diagram" aria-hidden="true">
          <div className="ly-shell-navbar">Navbar / Header</div>
          <div className="ly-shell-body">
            <div className="ly-shell-side">Side nav<br/><em>(optional)</em></div>
            <div className="ly-shell-content">Content area</div>
          </div>
          <div className="ly-shell-footer">Footer</div>
        </div>
      </div>
    </div>

    <div className="ly-level">
      <div className="ly-level-num">02</div>
      <div className="ly-level-body">
        <h3>Page layout (content regions)</h3>
        <p>How the main content area is divided into logical sections: hero / page header, main form / content zone, optional sidebar or contextual help panel.</p>
      </div>
    </div>

    <div className="ly-level">
      <div className="ly-level-num">03</div>
      <div className="ly-level-body">
        <h3>Component grid (content layout)</h3>
        <p>The 12-column CSS grid used inside the content area to arrange components, cards, form fields and data tables.</p>
      </div>
    </div>
  </div>

  <div className="col-callout note">Most layout decisions happen at Level 3. Levels 1 and 2 are defined by UX4G patterns (Navbar, page templates) and should rarely be customised by teams building individual services.</div>
</section>);}

function GridAnatomy(){return(<section id="anatomy" className="col-section">
  <h2 className="col-section-title">Grid anatomy</h2>
  <p className="col-section-lede">Every grid has three elements. UX4G uses a 12-column grid.</p>
  <div className="ly-anatomy">
    <div className="ly-anatomy-card">
      <h3>Columns</h3>
      <p>Vertical divisions that organise content horizontally. UX4G uses 12 columns. Content should span 3 or more columns; spanning fewer than 3 is rarely appropriate except for narrow utility elements.</p>
    </div>
    <div className="ly-anatomy-card">
      <h3>Gutters</h3>
      <p>The gap between columns. UX4G's default gutter is <code>12px</code> (<code>--ux4g-gutter-x</code>). On larger viewports, consider <code>--ux4g-section-xs</code> (24px) or <code>--ux4g-section-s</code> (32px) for more breathing room.</p>
    </div>
    <div className="ly-anatomy-card">
      <h3>Margins</h3>
      <p>The space between the grid and the viewport edge. Managed by container padding — each container applies half of <code>--ux4g-gutter-x</code> as horizontal padding.</p>
    </div>
  </div>

  <div className="ly-grid-vis" aria-hidden="true">
    {Array.from({length:12}).map((_,i)=>(<div key={i} className="ly-grid-col"><span>{i+1}</span></div>))}
  </div>
</section>);}

function Breakpoints(){
  const BP=[
    ["Default (no class)","< 576px","Mobile","Single-column forms, stacked navigation"],
    ["--ux4g-bp-sm","≥ 576px","Small","2-column layouts begin, wider form fields"],
    ["--ux4g-bp-md","≥ 768px","Medium (tablet)","Side navigation becomes visible, 2–4 column grids"],
    ["--ux4g-bp-lg","≥ 992px","Large","Full desktop layout, side panels, 6–12 columns"],
    ["--ux4g-bp-xl","≥ 1200px","X-Large","Wider containers, max content width reached"],
    ["--ux4g-bp-2xl","≥ 1400px","2X-Large","Ultra-wide screens, max container = 1320px"],
  ];
  const C=[
    [".ux4g-container","Responsive (follows breakpoints)","Default — all standard page content"],
    [".ux4g-container-fluid","100% always","Full-width layouts (maps, full-bleed banners)"],
    [".ux4g-container-sm","Max 540px","Narrow forms, single-question pages, login"],
    [".ux4g-container-md","Max 720px","Standard form pages"],
    [".ux4g-container-lg","Max 960px","Content-rich pages, article layouts"],
    [".ux4g-container-xl","Max 1140px","Dashboard / data pages"],
    [".ux4g-container-2xl","Max 1320px","Wide dashboards, data tables"],
  ];
  return(<section id="breakpoints" className="col-section">
    <h2 className="col-section-title">Breakpoints and containers</h2>
    <p className="col-section-lede">Six breakpoints, seven container utilities. Design mobile-first — base styles for mobile, then breakpoint prefixes for larger screens.</p>

    <h3 className="col-h3">Breakpoints</h3>
    <div className="sem-table"><div className="sem-table-head" style={{gridTemplateColumns:"1.5fr 1fr 1fr 2fr"}}><span>Token</span><span>Viewport</span><span>Name</span><span>Typical use</span></div>
      {BP.map((r,i)=>(<div key={i} className="sem-table-row" style={{gridTemplateColumns:"1.5fr 1fr 1fr 2fr"}}><span><code>{r[0]}</code></span><span>{r[1]}</span><span>{r[2]}</span><span>{r[3]}</span></div>))}
    </div>

    <h3 className="col-h3">Containers</h3>
    <div className="sem-table"><div className="sem-table-head" style={{gridTemplateColumns:"1.5fr 1fr 2fr"}}><span>Class</span><span>Max-width</span><span>Use for</span></div>
      {C.map((r,i)=>(<div key={i} className="sem-table-row" style={{gridTemplateColumns:"1.5fr 1fr 2fr"}}><span><code>{r[0]}</code></span><span>{r[1]}</span><span>{r[2]}</span></div>))}
    </div>

    <div className="col-callout note">Always use a container. Never place content directly against the viewport edge.</div>
  </section>);}

function FluidVsFixed(){
  const R=[
    ["Single-question form","Fixed narrow",".ux4g-container-sm"],
    ["Multi-step form","Fixed medium",".ux4g-container-md"],
    ["Dashboard / data view","Fluid",".ux4g-container-fluid or .ux4g-container-2xl"],
    ["Article / information page","Fixed large",".ux4g-container-lg"],
    ["Landing / campaign page","Fluid hero + fixed content","mixed"],
  ];
  return(<section id="types" className="col-section">
    <h2 className="col-section-title">Fluid vs fixed grid</h2>
    <p className="col-section-lede">Two grid behaviours. Most UX4G patterns use fixed — government service forms shouldn't stretch to fill a 1400px screen.</p>
    <div className="ly-grid-types">
      <div className="ly-grid-type">
        <span className="ly-grid-type-tag">Fluid</span>
        <h3>Scales with the container</h3>
        <p>Column widths are percentages. The grid grows as the viewport grows, so users see more content on larger screens.</p>
        <ul>
          <li>Dashboards</li>
          <li>Data tables</li>
          <li>Image galleries</li>
          <li>Anywhere the user benefits from <em>more</em> content as the screen grows</li>
        </ul>
      </div>
      <div className="ly-grid-type ly-grid-type-fixed">
        <span className="ly-grid-type-tag">Fixed</span>
        <h3>Capped at a max width</h3>
        <p>Content is constrained to a max-width — the grid stops growing past the container's cap, keeping line length readable.</p>
        <ul>
          <li>Forms</li>
          <li>Articles</li>
          <li>Single-question patterns</li>
          <li>Anywhere line length or form width should be controlled for readability</li>
        </ul>
      </div>
    </div>
    <h3 className="col-h3">Pattern → grid recommendation</h3>
    <div className="sem-table">
      <div className="sem-table-head" style={{gridTemplateColumns:"1.4fr 1.4fr 1.4fr"}}><span>Pattern type</span><span>Grid type</span><span>Container</span></div>
      {R.map((r,i)=>(<div key={i} className="sem-table-row" style={{gridTemplateColumns:"1.4fr 1.4fr 1.4fr"}}><span>{r[0]}</span><span>{r[1]}</span><span><code>{r[2]}</code></span></div>))}
    </div>
  </section>);}

function ColumnGrid(){
  const P=[
    { name:"Full width",            cols:"1 column",  spans:[12],         label:"span 12" },
    { name:"Two equal halves",      cols:"2 columns", spans:[6,6],        label:"span 6 + span 6" },
    { name:"Main + narrow sidebar", cols:"2 columns", spans:[8,4],        label:"span 8 + span 4" },
    { name:"Three equal",           cols:"3 columns", spans:[4,4,4],      label:"span 4 each" },
    { name:"Four equal (cards)",    cols:"4 columns", spans:[3,3,3,3],    label:"span 3 each" },
    { name:"Two-thirds + one-third",cols:"2 columns", spans:[8,4],        label:"span 8 + span 4" },
  ];
  return(<section id="columns" className="col-section">
    <h2 className="col-section-title">The 12-column grid</h2>
    <p className="col-section-lede">Column spans and responsive utilities for arranging content inside any container.</p>

    <h3 className="col-h3">Code example</h3>
    <pre className="tp-code">{`<!-- Basic 2-column layout at medium+ -->
<div class="ux4g-container">
  <div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2">
    <div class="ux4g-span-1">Main content</div>
    <div class="ux4g-span-1">Sidebar</div>
  </div>
</div>

<!-- 3-column card grid -->
<div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>`}</pre>

    <h3 className="col-h3">Common column patterns</h3>
    <div className="ly-pattern-grid">
      {P.map((p,i)=>(
        <div key={i} className="ly-pattern">
          <div className="ly-pattern-vis" aria-hidden="true">
            {p.spans.map((s,j)=>(
              <div key={j} className="ly-pattern-col" style={{flex:s}}>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div className="ly-pattern-meta">
            <h4>{p.name}</h4>
            <span className="ly-pattern-cols">{p.cols}</span>
            <code>{p.label}</code>
          </div>
        </div>
      ))}
    </div>

    <div className="col-callout note">
      Responsive syntax: <code>.ux4g-grid-cols-1.ux4g-grid-cols-md-2.ux4g-grid-cols-lg-3</code> renders 1 column on mobile, 2 on tablet, 3 on desktop.
    </div>
  </section>);}

function PageRegions(){
  return(<section id="regions" className="col-section">
    <h2 className="col-section-title">Page-level regions</h2>
    <p className="col-section-lede">Standard UX4G government service page structure. Stay within these regions when building new pages.</p>
    <div className="ly-regions" aria-hidden="true">
      <div className="ly-region ly-region-nav"><span className="ly-region-label">A</span>Navbar · 100vw, fixed height</div>
      <div className="ly-region-body">
        <div className="ly-container-frame">
          <span className="ly-container-tag">.ux4g-container</span>
          <div className="ly-region-row">
            <div className="ly-region-main">
              <div className="ly-region ly-region-crumb"><span className="ly-region-label">B</span>Breadcrumb</div>
              <div className="ly-region ly-region-header"><span className="ly-region-label">C</span>Page header — h1 + description</div>
              <div className="ly-region ly-region-content"><span className="ly-region-label">D</span>Main content<br/><em>form · data · article body</em></div>
            </div>
            <div className="ly-region ly-region-side"><span className="ly-region-label">—</span>Side panel<br/><em>(optional)</em></div>
          </div>
        </div>
      </div>
      <div className="ly-region ly-region-footer"><span className="ly-region-label">E</span>Footer · 100vw</div>
    </div>
    <div className="sem-table">
      <div className="sem-table-head" style={{gridTemplateColumns:"60px 1.4fr 2.4fr"}}><span>Region</span><span>Label</span><span>Description</span></div>
      <div className="sem-table-row" style={{gridTemplateColumns:"60px 1.4fr 2.4fr"}}><span><strong>A</strong></span><span>Navbar</span><span>UX4G Navbar component — 100% width, fixed height, always present</span></div>
      <div className="sem-table-row" style={{gridTemplateColumns:"60px 1.4fr 2.4fr"}}><span><strong>B</strong></span><span>Breadcrumb</span><span>Page location context — always inside <code>.ux4g-container</code></span></div>
      <div className="sem-table-row" style={{gridTemplateColumns:"60px 1.4fr 2.4fr"}}><span><strong>C</strong></span><span>Page header</span><span>h1 + optional description — aligned to left of content zone</span></div>
      <div className="sem-table-row" style={{gridTemplateColumns:"60px 1.4fr 2.4fr"}}><span><strong>D</strong></span><span>Main content</span><span>Form, data table, article body — constrained by container</span></div>
      <div className="sem-table-row" style={{gridTemplateColumns:"60px 1.4fr 2.4fr"}}><span><strong>—</strong></span><span>Side panel</span><span>Optional contextual help, status or secondary navigation</span></div>
      <div className="sem-table-row" style={{gridTemplateColumns:"60px 1.4fr 2.4fr"}}><span><strong>E</strong></span><span>Footer</span><span>Service footer — 100% width</span></div>
    </div>
    <p className="col-foot-note"><strong>Side panel standard widths:</strong> Narrow 240px · Standard 320px · Wide 400px.</p>
  </section>);}

function DoDontAndResources(){
  const R=[
    ["Design mobile-first — start at the smallest breakpoint","Design for 1440px first and try to make it work on mobile"],
    ["Use .ux4g-container for all main content","Place content directly against the viewport edge"],
    ["Use fluid grid for dashboards and data views","Stretch a form to fill 1400px — constrain it with container-sm or container-md"],
    ["Use responsive grid classes (.ux4g-grid-cols-md-2)","Set a fixed column count that doesn't respond to viewport"],
    ["Use spacing tokens for gutters","Hard-code pixel values for gaps between columns"],
    ["Use UX4G page templates for standard service pages","Re-invent the shell regions (header / nav / footer)"],
  ];
  return(<><section id="dodont" className="col-section">
    <h2 className="col-section-title">Do and don't</h2>
    <p className="col-section-lede">Six common layout decisions, summarised.</p>
    <div className="dd-table"><div className="dd-head"><span>Do</span><span>Don't</span></div>{R.map((r,i)=>(<div key={i} className="dd-row"><span>{r[0]}</span><span>{r[1]}</span></div>))}</div>
  </section>
  <Related exclude="layout"/></>);}

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
const LY_TOC=[
  { id:"principles",  label:"Principles" },
  { id:"base",        label:"Base unit" },
  { id:"hierarchy",   label:"Layout hierarchy" },
  { id:"anatomy",     label:"Grid anatomy" },
  { id:"breakpoints", label:"Breakpoints & containers" },
  { id:"types",       label:"Fluid vs fixed" },
  { id:"columns",     label:"12-column grid" },
  { id:"regions",     label:"Page regions" },
  { id:"dodont",      label:"Do and don't" },
  { id:"related",     label:"Related foundations" },
];

function App(){const{toasts}=useToasts();return(
  <><SiteNavbar/><main className="col-page"><Header/>
    <div className="container col-body">
      <div className="fnd-layout">
        <div className="fnd-main">
          <Principles/><BaseUnit/><Hierarchy/><GridAnatomy/><Breakpoints/><FluidVsFixed/><ColumnGrid/><PageRegions/><DoDontAndResources/>
        </div>
        <OnThisPage items={LY_TOC}/>
      </div>
    </div>
  </main><SiteFooter/><Toasts items={toasts}/></>);}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
