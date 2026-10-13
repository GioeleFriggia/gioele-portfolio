import {AppScreen,Phone} from './CartlyCase';
export default function ProjectVisual({accent,title,variant=0}:{accent:string;title:string;variant?:number}){
 const words=title.split('\n');
 if(variant===0)return <div className="firinne-preview"><div className="firinne-preview-glow"/><div className="firinne-preview-browser"><div className="firinne-browser-top"><span/><span/><span/><small>FIRINNE / DIGITAL EXPERIENCE</small></div><img src="/images/firinne/firinne-home.png" alt="Firinne digital eBook homepage" loading="lazy" /></div><div className="firinne-preview-tag">01 — FEATURED CASE STUDY <span>↗</span></div></div>;
 if(variant===2)return <div className="pinna-home-preview"><div className="pinna-home-image" style={{backgroundImage:"linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.02)),url('https://raw.githubusercontent.com/teampinnacorse-sys/team-pinna-corse/main/public/foto/Homepage.png')"}}/><div className="pinna-home-overlay"><small>03 / TEAM PINNA CORSE</small><strong>CHASE THE<br/><i>ADRENALINE.</i></strong><span>RALLY / TEAM / DIGITAL EXPERIENCE</span></div><div className="pinna-home-tag">EXPLORE THE PROJECT ↗</div></div>;
 if(variant===3)return <div className="ss-home-preview"><div className="ss-home-photo" style={{backgroundImage:"linear-gradient(90deg,rgba(7,20,29,.96),rgba(7,20,29,.25)),url('https://raw.githubusercontent.com/GioeleFriggia/sassari_soccorso/main/public/foto1carosel.webp')"}}/><div className="ss-home-copy"><small>04 / SASSARI SOCCORSO</small><strong>READY<br/>TO <em>HELP.</em></strong><span>REACT / JAVA / SPRING BOOT</span></div><div className="ss-home-device"><div className="ss-home-device-top"><b>✳</b><span>SASSARI SOCCORSO</span><i>◉</i></div><h4>Volunteer tools.</h4><p>Practical resources for every mission.</p><div><span>Vehicle checklist</span><b>↗</b></div><div><span>Emergency training</span><b>↗</b></div><div><span>Civil protection</span><b>↗</b></div></div><div className="ss-home-tag">EXPLORE PROJECT ↗</div></div>;
 if(variant===1)return <div className="cartly-showcase">
   <div className="cartly-showcase-glow"/>
   <div className="cartly-showcase-copy"><span>02 / CARTLY — SHARED SHOPPING</span><h3>Better lists.<br/><em>Better together.</em></h3><p>A simpler way to plan, share and shop.</p></div>
   <div className="cartly-showcase-devices">
     <div className="cartly-showcase-monitor"><div className="cartly-showcase-ui">
       <header><span className="cartly-showcase-mark">✓</span><b>Cartly</b><small>GF</small></header>
       <main><label>YOUR SHOPPING, TOGETHER</label><h4>Keep everything<br/>in sync.</h4><p>All your shopping lists, in one place.</p>
         <div className="cartly-showcase-list"><span>🛒</span><div><b>Weekly groceries</b><small>5 products · 2 members</small></div><i>↗</i></div>
         <div className="cartly-showcase-list"><span>🥑</span><div><b>Weekend dinner</b><small>8 products · 3 members</small></div><i>↗</i></div>
         <div className="cartly-showcase-action">+ Create a new list</div>
       </main></div><div className="cartly-showcase-stand"/></div>
     <div className="cartly-showcase-phone"><div className="cartly-showcase-island"/><div className="cartly-showcase-phone-ui"><div className="cartly-showcase-mobile-top"><b>✓ Cartly</b><span>GF</span></div><label>SHARED SHOPPING LIST</label><h4>Weekly<br/>groceries.</h4><small>2 members · <span>Everyone in sync</span></small><div className="cartly-showcase-budget">Budget progress <b>€16.19 / €60.00</b><div><span/></div></div><label>TO BUY <span>3 ITEMS</span></label>{['Milk','Sourdough bread','Avocados'].map((item,i)=><div className="cartly-showcase-product" key={item}><span>□</span><b>{item}</b><small>{['€3.20','€3.50','€4.20'][i]}</small></div>)}<div className="cartly-showcase-product checked"><span>✓</span><b>Cherry tomatoes</b><small>€2.99</small></div></div></div>
   </div><span className="cartly-showcase-corner">FULL STACK APPLICATION <b>↗</b></span>
 </div>;
 return <div className={`visual v${variant}`} style={{'--accent':accent} as React.CSSProperties}>
   <div className="orb a"/><div className="orb b"/><div className="gridlines"/>
   <div className="device desktop"><div className="devicebar"/><div className="screen-ui"><span/><span/><span/><b/></div></div>
   <div className="device phone"><div className="screen-ui"><span/><b/><span/></div></div>
   <p className="visual-title">{words.map((w,i)=><span key={i}>{w}</span>)}</p>
   <span className="badge">PROJECT PREVIEW</span>
 </div>
}
