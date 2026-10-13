import PinnaCase from '@/components/PinnaCase';
import SassariCase from '@/components/SassariCase';
import CartlyCase from '@/components/CartlyCase';
import FirinneCase from '@/components/FirinneCase';
import {notFound} from 'next/navigation';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';
import ProjectVisual from '@/components/ProjectVisual';
import {projects} from '@/data/projects';

import type {Metadata} from 'next';
const baseUrl = 'https://gioelefriggia.com';
export function generateMetadata({params}:{params:{slug:string}}):Metadata {
 const project = projects.find(p => p.slug === params.slug);
 if (!project) return {title:'Project not found'};
 const title = project.title.replace('\n',' ');
 const url = baseUrl + '/project/' + project.slug;
 return {
  title,
  description: project.description,
  alternates: {canonical:url},
  openGraph: {title:title + ' | Gioele Friggia',description:project.description,url,type:'article'},
  twitter: {card:'summary_large_image',title:title + ' | Gioele Friggia',description:project.description}
 };
}

export function generateStaticParams(){return projects.map(p=>({slug:p.slug}))}
export default function ProjectPage({params}:{params:{slug:string}}){const p=projects.find(x=>x.slug===params.slug);if(!p)notFound();if(p.slug==='firinne-ebook')return <FirinneCase/>;if(p.slug==='cartly')return <CartlyCase/>;if(p.slug==='pinna-corse')return <PinnaCase/>;if(p.slug==='sassari-soccorso')return <SassariCase/>;const idx=projects.indexOf(p);return <main style={{'--accent':p.accent} as React.CSSProperties}><Header/><section className="case-hero" style={{background:p.accent,color:p.dark}}><p className="eyebrow">Project {p.index}</p><h1>{p.title.split('\n').map(x=><span key={x}>{x}</span>)}</h1><div className="case-intro"><p>{p.description}</p><div><span>{p.year}</span><span>{p.stack.join(', ')}</span></div></div></section><section className="case-visual" style={{background:p.dark}}><ProjectVisual accent={p.accent} title={p.title} variant={idx}/></section><section className="case-copy"><Reveal><p className="eyebrow">The project / {p.category}</p><h2>{p.statement}</h2></Reveal><div className="case-grid"><Reveal><p>{p.challenge}</p></Reveal><Reveal delay={.1}><ul>{p.features.map(f=><li key={f}>{f}<span>↗</span></li>)}</ul></Reveal></div><div className="case-detail"><div><p className="eyebrow">My approach</p><p>{p.solution}</p></div><div><p className="eyebrow">Role & status</p><p>{p.role} · {p.status}</p>{p.liveUrl&&<a className="project-live" href={p.liveUrl} target="_blank" rel="noopener noreferrer">Visit live project ↗</a>}</div></div></section><section className="gallery" style={{background:p.accent}}><div className="poster"><p>{p.kicker}</p><b>{p.index}</b></div><div className="poster inverse"><b>UI</b><p>A focused, practical digital experience.</p></div></section><section className="next"><a href={`/project/${projects[(idx+1)%projects.length].slug}`}>Next project <span>↗</span><strong>{projects[(idx+1)%projects.length].title.replace('\n',' ')}</strong></a></section></main>}
