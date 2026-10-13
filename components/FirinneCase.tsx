"use client";
import Link from "next/link";
import {motion, useScroll, useTransform, useReducedMotion} from "framer-motion";
import {useRef, useState} from "react";
import Header from "@/components/Header";

const images={home:"/images/firinne/firinne-home.png",library:"/images/firinne/firinne-library.png",admin:"/images/firinne/firinne-admin.png",editor:"/images/firinne/firinne-editor.png"};
function Fade({children,className=""}:{children:React.ReactNode,className?:string}){return <motion.div className={className} initial={{opacity:0,y:65}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.85,ease:[.22,1,.36,1]}}>{children}</motion.div>}
function Screen({src,alt,className=""}:{src:string,alt:string,className?:string}){return <div className={"cin-screen "+className}><div className="cin-window"><span/><span/><span/><small>FIRINNE / DIGITAL PLATFORM</small></div><img src={src} alt={alt} loading="lazy"/></div>}
function Intro(){const ref=useRef<HTMLElement>(null);const reduced=useReducedMotion();const {scrollYProgress}=useScroll({target:ref,offset:["start start","end start"]});const y=useTransform(scrollYProgress,[0,1],[0,260]);const opacity=useTransform(scrollYProgress,[0,.9],[1,0]);return <section ref={ref} className="cin-intro"><div className="cin-topline"><span>GIOELE FRIGGIA / SELECTED WORK</span><span>2026 — CASE STUDY 01/04</span></div><motion.div style={reduced?{}:{y,opacity}} className="cin-title-wrap"><p className="cin-kicker"><span className="cin-status"/> FULL STACK DEVELOPMENT — DIGITAL PRODUCT</p><div className="cin-brand-lockup"><h1>FIRINNE</h1><span className="cin-brand-divider" aria-hidden="true"/><img className="cin-aramark-logo" src="/images/firinne/aramark-mark.png" alt="Aramark" /></div><div className="cin-intro-foot"><p>A better way to manage<br/><i>what matters.</i></p><span>SCROLL TO EXPLORE <b>↓</b></span></div></motion.div><div className="cin-intro-orbit" aria-hidden="true">F</div></section>}
function Feature(){const ref=useRef<HTMLElement>(null);const reduced=useReducedMotion();const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});const scale=useTransform(scrollYProgress,[0,.38,.8],[.77,1,1.06]);const rotate=useTransform(scrollYProgress,[0,.38,.8],[-7,0,2]);const float=useTransform(scrollYProgress,[0,1],[90,-100]);return <section ref={ref} className="cin-feature"><div className="cin-feature-head"><span>01 / THE EXPERIENCE</span><span>FROM INFORMATION TO INTERACTION</span></div><div className="cin-feature-stage"><motion.div className="cin-feature-main" style={reduced?{}:{scale,rotate}}><DeviceFrame kind="desktop" src={images.home}/></motion.div><motion.div className="cin-float cin-float-one" style={reduced?{}:{y:float}}><Screen src={images.library} alt="Firinne recipe library"/></motion.div><span className="cin-side-label">DESIGNED FOR EVERYDAY USE — 2026</span></div><div className="cin-feature-caption"><span>FIG. 01 — THE DIGITAL EBOOK</span><p>One connected experience.<br/>Built around the people who use it.</p></div></section>}
const chapters=[{num:"02",tag:"THE LIBRARY",title:<>Everything,<br/><i>in its place.</i></>,body:"Searchable product sheets, clear categories and structured content make information easier to find.",image:images.library,alt:"Recipe library and product information"},{num:"03",tag:"THE CONTROL ROOM",title:<>Content that<br/><i>stays current.</i></>,body:"An administration workspace brings recipe management, publishing controls and organised workflows together.",image:images.admin,alt:"Firinne administration dashboard"},{num:"04",tag:"THE EDITOR",title:<>Built to create.<br/><i>Made to evolve.</i></>,body:"A purpose-built editor brings ingredients, images, commercial details and publishing into a single flow.",image:images.editor,alt:"Firinne recipe editor"}];
function Chapter({chapter,index}:{chapter:typeof chapters[number],index:number}){const ref=useRef<HTMLElement>(null);const reduced=useReducedMotion();const {scrollYProgress}=useScroll({target:ref,offset:["start end","end start"]});const y=useTransform(scrollYProgress,[0,1],[110,-90]);return <section ref={ref} className={'cin-chapter cin-chapter-'+index}><div className="cin-chapter-copy"><Fade><div className="cin-chapter-index"><span>{chapter.num} / {chapter.tag}</span><span>↗</span></div><h2>{chapter.title}</h2><p>{chapter.body}</p></Fade></div><div className="cin-chapter-art"><motion.div className="cin-chapter-device"><Screen src={chapter.image} alt={chapter.alt}/></motion.div><span className="cin-art-caption">FIRINNE / PRODUCT EXPERIENCE — {chapter.num}</span></div></section>}

const deviceModes = [
  {id:"desktop",label:"Desktop",detail:"A complete view of the digital workspace",image:images.home},
  {id:"phone",label:"Smartphone",detail:"An editorial mobile adaptation of the original interface",image:"/images/firinne/firinne-phone-adapted.jpg"},
  {id:"tablet",label:"Tablet",detail:"Product information in a portable format",image:images.library},
  {id:"tv",label:"TV",detail:"The interface on a large display",image:images.home},
] as const;
type DeviceId = typeof deviceModes[number]["id"];
function DeviceFrame({kind,src,compact=false}:{kind:DeviceId,src:string,compact?:boolean}){
  return <div className={`dv-device dv-${kind} ${compact?'dv-compact':''}`}>
    {kind==="desktop"&&<><div className="dv-monitor"><div className="dv-screen"><img src={src} alt="Firinne displayed on a desktop monitor"/></div><span className="dv-monitor-chin"/></div><div className="dv-monitor-neck"/><div className="dv-monitor-foot"/></>}
    {kind==="phone"&&<div className="dv-phone-shell"><span className="dv-phone-island"/><div className="dv-phone-screen"><img src={src} alt="Firinne interface preview on a smartphone"/></div></div>}
    {kind==="tablet"&&<div className="dv-tablet-shell"><span className="dv-tablet-camera"/><div className="dv-tablet-screen"><img src={src} alt="Firinne interface preview on a tablet"/></div></div>}
    {kind==="tv"&&<><div className="dv-tv-shell"><div className="dv-tv-screen"><img src={src} alt="Firinne displayed on a TV"/></div></div><div className="dv-tv-stand"/></>}
  </div>
}
function DeviceShowcase(){
  const [active,setActive]=useState<DeviceId>("desktop");
  const selected=deviceModes.find(d=>d.id===active)!;
  return <section className="dv-showcase" aria-label="Firinne across devices">
    <div className="dv-heading"><span>06 / MULTI-SCREEN EXPERIENCE</span><span>EXPLORE THE INTERFACE ↘</span></div>
    <Fade><h2>One experience.<br/><i>Every screen.</i></h2></Fade>
    <p className="dv-lede">Explore how the Firinne interface can be presented across different screen sizes.</p>
    <div className="dv-selector" role="group" aria-label="Choose a device">
      {deviceModes.map(d=><button key={d.id} type="button" className={active===d.id?'dv-selected':''} aria-pressed={active===d.id} onClick={()=>setActive(d.id)}>{d.label}<span>↗</span></button>)}
    </div>
    <div className="dv-stage">
      <motion.div key={active} initial={{opacity:0,y:34,scale:.94}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.65,ease:[.22,1,.36,1]}} className="dv-stage-device"><DeviceFrame kind={active} src={selected.image}/></motion.div>
      <div className="dv-stage-caption"><span>FIG. 06 — {selected.label.toUpperCase()} VIEW</span><span>{selected.detail}</span></div>
    </div>
    <div className="dv-all-heading"><span>THE COMPLETE LINEUP</span><span>FOUR SCREENS / ONE PLATFORM</span></div>
    <div className="dv-lineup">
      {deviceModes.map(d=><button type="button" key={d.id} className="dv-lineup-item" onClick={()=>setActive(d.id)}><div className="dv-lineup-art"><DeviceFrame kind={d.id} src={d.image} compact/></div><span>{d.label} ↗</span></button>)}
    </div>
    
  </section>
}

export default function FirinneCase(){return <main className="firinne-case cinematic"><Header/><Intro/><Feature/><section className="cin-manifesto"><Fade><span>THE THINKING / 01</span><p>Good software isn’t about adding more. <em>It’s about making the complicated feel effortless.</em></p></Fade><div className="cin-manifesto-bottom"><span>THE CHALLENGE</span><p>Product information needs to be accessible, consistent and simple to maintain. Firinne brings it into one responsive digital environment.</p></div></section>{chapters.map((chapter,index)=><Chapter chapter={chapter} index={index} key={chapter.num}/>)}<section className="cin-engineering"><div className="cin-engineering-head"><span>05 / BEHIND THE EXPERIENCE</span><span>ENGINEERING THE SYSTEM</span></div><Fade><h2>Design-led.<br/><i>Code-driven.</i></h2></Fade><div className="cin-engineering-grid">{[["01","FRONTEND","React · Vite · Responsive UI"],["02","BACKEND","Node.js · Express · REST APIs"],["03","DATA LAYER","PostgreSQL · Prisma ORM"],["04","WORKFLOWS","Role-based access · Audit logging"]].map(x=><div key={x[0]}><span>{x[0]} / {x[1]}</span><p>{x[2]}</p></div>)}</div></section><DeviceShowcase/><section className="cin-outro"><span>END OF CASE STUDY — 01/04</span><Fade><p>Have an idea<br/>worth <i>building?</i></p></Fade><a href="mailto:giofriggia@gmail.com" className="cin-email">Let’s talk <span>↗</span></a><div className="cin-outro-links"><Link href="/project/cartly">NEXT PROJECT <strong>CARTLY ↗</strong></Link><Link href="/#work">ALL PROJECTS ↑</Link></div></section></main>}
