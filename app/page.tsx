import Link from 'next/link';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import ProjectVisual from '@/components/ProjectVisual';
import {projects} from '@/data/projects';

export default function Home(){return <main><Header/>
<section id="home" className="gioele-intro" aria-labelledby="gioele-intro-title"><div className="gioele-intro-main"><div className="gioele-intro-content"><Reveal><p className="gioele-intro-label"><span>01</span> / ABOUT ME</p><h1 id="gioele-intro-title">HI, I’M<br/><span>GIOELE.</span></h1><p className="gioele-intro-lead">Developer by craft.<br/>Creative by nature.</p></Reveal><Reveal delay={.12}><div className="gioele-intro-description"><p>I’m an Italian full-stack web developer based in Ireland, passionate about creating modern websites and useful digital products.</p><p>I turn ideas into working applications, combining clean design, practical functionality and attention to detail.</p></div><div className="gioele-intro-buttons"><a className="gioele-intro-button-primary" href="#work">VIEW MY WORK <span>↗</span></a><a className="gioele-intro-button-secondary" href="/profile">MORE ABOUT ME <span>↗</span></a></div><div className="gioele-intro-facts"><span>⌖ <small>Based in<br/><b>Ireland</b></small></span><span>⌘ <small>Full-stack<br/><b>development</b></small></span><span>▣ <small>Open to<br/><b>freelance projects</b></small></span></div></Reveal></div><div className="gioele-intro-photo"><img src="/images/profile/gioele-natural-shirt.webp" alt="Gioele Friggia wearing a light shirt" fetchPriority="high"/><span className="gioele-intro-photo-note">BASED IN IRELAND ↗</span></div></div></section>
<section id="work" className="work gioele-work"><div className="section-head"><p><span className="gioele-work-number">02 /</span> SELECTED WORK</p><p>2026 — 04 PROJECTS</p></div>
{projects.map((p,i)=><article className="project-row" key={p.slug} style={{background:p.dark,color:p.accent}}><Link href={`/project/${p.slug}`} className="project-link"><div className="project-top"><span>{p.index}</span><h2>{p.title.split('\n').map(x=><span key={x}>{x}</span>)}</h2><span className="arrow">↗</span></div><ProjectVisual accent={p.accent} title={p.title} variant={i}/><div className="project-bottom"><p>{p.kicker}</p><p>{p.stack.join(' · ')}</p><p>{p.year}</p></div></Link></article>)}
</section>

<footer id="contact"><p>Have a problem worth solving?</p><a href="/contact">Let’s build it together ↗</a><a className="contact-email" href="/contact" aria-label="Email Gioele Friggia">giofriggia@gmail.com ↗</a><span>© 2026 Gioele Friggia</span></footer>
</main>}
