/* global React, ReactDOM */
/* Foundations — Spacing (8 sections, per
   Documents/Foundations content/ux4g-spacing-foundation-recommendation.md) */
const { useState, useCallback } = React;

function useToasts(){const[t,s]=useState([]);return{toasts:t,push:useCallback(m=>{const i=Date.now()+Math.random();s(x=>[...x,{id:i,msg:m}]);setTimeout(()=>s(x=>x.filter(y=>y.id!==i)),2400);},[])};}
function Toasts({items}){return <div className="toast-stack">{items.map(t=><div key={t.id} className="toast"><span className="t-mark">i</span><span>{t.msg}</span></div>)}</div>;}

function Header(){return(
  <header className="mbys-header"><div className="container">
    <div className="mbys-crumb"><a href="index.html">Home</a><span className="sep">/</span><a href="UX4G Foundations.html">Foundations</a><span className="sep">/</span><span className="current">Spacing</span></div>
    <h1 className="mbys-title">Spacing</h1>
    <p className="mbys-contrib" style={{margin:0}}><span className="org" style={{fontWeight:400,color:"var(--gray-700)",fontSize:18,lineHeight:1.5}}>Spacing creates breathing room, communicates relationships and guides attention. In government interfaces — where citizens are completing tasks, not browsing — consistent spacing reduces cognitive load and makes forms, instructions and actions feel predictable.</span></p>
  </div></header>);}

function Principles(){
  const P=[
    ["Proximity signals relationship","Elements placed close together are perceived as related. More space separates them. Use this intentionally: form fields within a group should be closer together than separate groups are to each other."],
    ["Inside and between are different jobs","Spacing inside a component (padding) is a different concern from spacing between components (margin and gap). Inside spacing creates comfortable reading and touch targets. Between spacing creates hierarchy and visual separation."],
    ["Use tokens, not arbitrary values","Every spacing decision must use a UX4G spacing token. Arbitrary pixel values break visual rhythm and make future updates impossible."],
  ];
  return(<section id="principles" className="col-section">
    <h2 className="col-section-title">Principles</h2>
    <p className="col-section-lede">Three rules behind every spacing decision.</p>
    <div className="col-principles">{P.map(([t,b],i)=>(<div key={i} className="col-principle"><span className="n">{String(i+1).padStart(2,"0")}</span><div><h3>{t}</h3><p>{b}</p></div></div>))}</div>
  </section>);}

function BaseUnit(){
  return(<section id="base" className="col-section">
    <h2 className="col-section-title">Base unit</h2>
    <p className="col-section-lede">UX4G's spacing system is built on a <strong>4px base unit</strong>. All spacing tokens are multiples (or half-multiples) of 4px. This keeps spacing aligned with the grid, icon sizes and component dimensions — creating a naturally harmonious layout.</p>
    <div className="sp-base-grid">
      {[1,2,3,4,6,8,10,14,20].map(m=>(
        <div key={m} className="sp-base-card"><div className="sp-base-bar" style={{width:m*4}}/><span className="sp-base-label">{m}× <em>{m*4}px</em></span></div>
      ))}
    </div>
  </section>);}

const PRIMITIVES=[
  ["--ux4g-space-none",0],["--ux4g-space-1",2],["--ux4g-space-2",4],["--ux4g-space-3",6],
  ["--ux4g-space-4",8],["--ux4g-space-5",12],["--ux4g-space-6",16],["--ux4g-space-7",20],
  ["--ux4g-space-8",24],["--ux4g-space-9",32],["--ux4g-space-10",40],["--ux4g-space-11",48],
  ["--ux4g-space-12",56],["--ux4g-space-13",64],["--ux4g-space-14",80],["--ux4g-space-15",120],
  ["--ux4g-space-16",360],
];

function Primitives(){
  return(<section id="scale" className="col-section">
    <h2 className="col-section-title">Primitive scale</h2>
    <p className="col-section-lede">17 raw values. These are reference tokens — use the semantic tokens below in design and code work.</p>
    <div className="sem-table">
      <div className="sem-table-head" style={{gridTemplateColumns:"1.4fr 80px 1fr"}}><span>Token</span><span>Value</span><span>Visual</span></div>
      {PRIMITIVES.map(([t,v],i)=>(
        <div key={i} className="sem-table-row" style={{gridTemplateColumns:"1.4fr 80px 1fr",alignItems:"center"}}>
          <span><code>{t}</code></span>
          <span>{v}px</span>
          <span className="sp-bar-cell"><span className="sp-bar" style={{width:Math.min(v,360)}}/></span>
        </div>
      ))}
    </div>
    <div className="col-callout note">Primitive tokens are the raw reference values. Use semantic tokens in all design and code work — never use primitive token names directly.</div>
  </section>);}

const SEM_GROUPS=[
  {key:"inline",label:"Inline spacing",sub:"Horizontal gaps between siblings in a row — \"how much space between items sitting side by side.\"",cls:"--ux4g-inline-",util:".ux4g-inline-gap-*",
    rows:[
      ["2xs",2,"Tight: between icon and badge counter"],
      ["xs",4,"Icon + text label in a compact row"],
      ["s",8,"Icon + button label; checkbox + label text"],
      ["m",12,"Input field + helper icon; tag + tag"],
      ["l",16,"Button group gap; nav item gap"],
    ]},
  {key:"stack",label:"Stack spacing",sub:"Vertical gaps between stacked elements — \"how much space between elements stacked one above another.\"",cls:"--ux4g-stack-",util:".ux4g-stack-gap-*",
    rows:[
      ["2xs",4,"Label to input field (tightly paired)"],
      ["xs",8,"Input field to helper text; radio to radio"],
      ["s",12,"Form field group items; list item to list item"],
      ["m",16,"Between adjacent form fields; card body items"],
      ["l",24,"Between form field groups; between card sections"],
    ]},
  {key:"padding",label:"Padding",sub:"Space inside a component, between its content and its edge — \"how much space between the container's boundary and the content inside it.\"",cls:"--ux4g-padding-",util:".ux4g-p-* / .ux4g-px-* / .ux4g-py-*",
    rows:[
      ["3xs",2,"Tight badge padding, compact chip"],
      ["2xs",4,"Small badge or tag padding"],
      ["xs",8,"Small button (compact), input inset"],
      ["s",12,"Medium button vertical padding; tooltip"],
      ["m",16,"Default button padding; card internal padding"],
      ["l",20,"Comfortable card padding; input horizontal padding"],
      ["xl",24,"Spacious card padding; modal padding"],
      ["2xl",32,"Page section internal padding"],
      ["3xl",120,"Hero section padding (special use only)"],
      ["4xl",360,"Full-width sidebar (layout only)"],
    ]},
  {key:"section",label:"Section spacing",sub:"Gaps between major content sections / layout regions — \"the macro rhythm of the layout.\"",cls:"--ux4g-section-",util:".ux4g-gap-*",
    rows:[
      ["xs",24,"Gap between elements in a multi-step form card"],
      ["s",32,"Gap between form groups / primary content blocks"],
      ["m",48,"Gap between major form sections on a page"],
      ["l",56,"Vertical spacing between page layout zones"],
      ["xl",64,"Top/bottom page padding on desktop"],
      ["2xl",80,"Hero / landing section vertical padding"],
    ]},
  {key:"margin",label:"Margin",sub:"External space around a component, pushing siblings away. Prefer gap-based layout (Flex/Grid with gap tokens) over margin whenever possible.",cls:"--ux4g-margin-",util:".ux4g-m-* / .ux4g-mt-* / .ux4g-mx-auto",
    rows:[
      ["3xs",2,"Micro-adjustment (rare)"],
      ["xs",8,"Small offset from sibling"],
      ["s",12,"Section label offset"],
      ["m",16,"Standard component margin"],
      ["l",20,"—"],
      ["xl",24,"Section margin"],
      ["2xl",32,"Large layout offset"],
    ]},
];

function SpacingVisual({ axis, value }) {
  // Bar that shows the actual spacing value (capped at 160px for the visualiser)
  const v = Math.min(value, 160);
  if (axis === "stack") {
    return (
      <div className="sp-vis sp-vis-stack">
        <span className="sp-vis-block"/>
        <span className="sp-vis-spacer" style={{ height: v }}/>
        <span className="sp-vis-block"/>
      </div>
    );
  }
  if (axis === "padding") {
    return (
      <div className="sp-vis sp-vis-padding" style={{ padding: v }}>
        <span className="sp-vis-inner"/>
      </div>
    );
  }
  // inline / section / margin → horizontal bar
  return (
    <div className="sp-vis sp-vis-inline">
      <span className="sp-vis-block"/>
      <span className="sp-vis-spacer" style={{ width: v }}/>
      <span className="sp-vis-block"/>
    </div>
  );
}

function Semantic(){
  return(<section id="semantic" className="col-section">
    <h2 className="col-section-title">Semantic tokens by purpose</h2>
    <p className="col-section-lede">Five groups, one job each. These are the only spacing tokens components and product code should reference.</p>
    {SEM_GROUPS.map(g=>(
      <div key={g.key} className="sp-group">
        <div className="sp-group-head">
          <h3 className="col-h3" style={{margin:0}}>{g.label}</h3>
          <code className="tp-face-token">{g.util}</code>
        </div>
        <p className="sp-group-sub">{g.sub}</p>
        <div className="sem-table">
          <div className="sem-table-head" style={{gridTemplateColumns:"1.6fr 64px 180px 2fr"}}>
            <span>Token</span><span>Value</span><span>Visual</span><span>Use when</span>
          </div>
          {g.rows.map(([k,v,u],i)=>(
            <div key={i} className="sem-table-row" style={{gridTemplateColumns:"1.6fr 64px 180px 2fr",alignItems:"center"}}>
              <span><code>{g.cls}{k}</code></span>
              <span>{v}px</span>
              <span><SpacingVisual axis={g.key} value={v}/></span>
              <span>{u}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>);}

function ThreeZones(){
  const Z=[
    ["Micro","detail","2–8px","Inline-2xs → Inline-s · Stack-2xs → Stack-xs · Padding-3xs → Padding-xs","Icon-text gaps, label-input pairs, badge padding, tight list items"],
    ["Component","container","12–32px","Inline-m/l · Stack-s/m/l · Padding-s → Padding-2xl","Button padding, card internals, form field spacing, component gaps"],
    ["Layout","page","48–80px","Section-m → Section-2xl","Between page sections, hero padding, content region separation"],
  ];
  return(<section id="zones" className="col-section">
    <h2 className="col-section-title">Three-zone guide</h2>
    <p className="col-section-lede">Think of the spacing scale in three zones based on what you're spacing.</p>
    <div className="sem-table">
      <div className="sem-table-head" style={{gridTemplateColumns:"1fr 1fr 1.4fr 2fr"}}><span>Zone</span><span>Range</span><span>Semantic tokens</span><span>Use for</span></div>
      {Z.map(([z,sc,r,t,u],i)=>(<div key={i} className="sem-table-row" style={{gridTemplateColumns:"1fr 1fr 1.4fr 2fr"}}><span><strong>{z}</strong><br/><span style={{color:"var(--gray-500)",fontSize:12}}>({sc})</span></span><span>{r}</span><span style={{fontFamily:"var(--font-mono)",fontSize:11.5}}>{t}</span><span>{u}</span></div>))}
    </div>
  </section>);}

function DoDont(){
  const R=[
    ["Use gap utilities (.ux4g-stack-gap-m) to space flex/grid children","Use margins on individual child components for layout"],
    ["Use closer spacing within related groups (e.g. radio options)","Use the same spacing between everything — flattens hierarchy"],
    ["Use Section tokens for page-level layout, Padding for component internals","Use Section-2xl for button padding or Padding-xs for a page margin"],
    ["Use .ux4g-mx-auto to centre a container horizontally","Hard-code margin: 0 auto with arbitrary pixel values"],
    ["Increase space to make important elements stand out","Pack everything tightly to fit more content — increases cognitive load"],
  ];
  return(<section id="dodont" className="col-section">
    <h2 className="col-section-title">Do and don't</h2>
    <p className="col-section-lede">Five common spacing decisions, summarised.</p>
    <div className="dd-table"><div className="dd-head"><span>Do</span><span>Don't</span></div>{R.map((r,i)=>(<div key={i} className="dd-row"><span>{r[0]}</span><span>{r[1]}</span></div>))}</div>
  </section>);}

function Utilities(){
  return(<section id="utilities" className="col-section">
    <h2 className="col-section-title">Utility classes</h2>
    <p className="col-section-lede">Three utility families cover margin, padding and gap. All sizes accept <code>none · 2xs · xs · s · m · l · xl · 2xl</code>. RTL-safe via logical properties.</p>
    <h3 className="col-h3">Margin</h3>
    <pre className="tp-code">{`/* All sides */
.ux4g-m-{size}          /* ux4g-m-m = 16px all sides */

/* Block (vertical) */
.ux4g-my-{size}         /* top + bottom */
.ux4g-mt-{size}         /* top only */
.ux4g-mb-{size}         /* bottom only */

/* Inline (horizontal, RTL-safe) */
.ux4g-mx-{size}         /* left + right */
.ux4g-ml-{size}         /* inline-start */
.ux4g-mr-{size}         /* inline-end */

.ux4g-mx-auto           /* centre horizontally */`}</pre>

    <h3 className="col-h3">Padding</h3>
    <pre className="tp-code">{`.ux4g-p-{size}              /* all sides */
.ux4g-py-{size}             /* top + bottom */
.ux4g-px-{size}             /* left + right */
.ux4g-pt-* / pb-* / pl-* / pr-{size}`}</pre>

    <h3 className="col-h3">Gap (flex / grid)</h3>
    <pre className="tp-code">{`.ux4g-gap-{size}            /* section gap — layout level */
.ux4g-stack-gap-{size}      /* row-gap — vertical rhythm */
.ux4g-inline-gap-{size}     /* column-gap — horizontal flow */`}</pre>
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
const SP_TOC=[
  { id:"principles", label:"Principles" },
  { id:"base",       label:"Base unit" },
  { id:"scale",      label:"Primitive scale" },
  { id:"semantic",   label:"Semantic tokens" },
  { id:"zones",      label:"Three-zone guide" },
  { id:"dodont",     label:"Do and don't" },
  { id:"utilities",  label:"Utility classes" },
  { id:"related",    label:"Related foundations" },
];

function App(){const{toasts}=useToasts();return(
  <><SiteNavbar/><main className="col-page"><Header/>
    <div className="container col-body">
      <div className="fnd-layout">
        <div className="fnd-main">
          <Principles/><BaseUnit/><Primitives/><Semantic/><ThreeZones/><DoDont/><Utilities/><Related exclude="spacing"/>
        </div>
        <OnThisPage items={SP_TOC}/>
      </div>
    </div>
  </main><SiteFooter/><Toasts items={toasts}/></>);}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
