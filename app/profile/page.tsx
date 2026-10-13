import type {Metadata} from 'next';
import Header from '@/components/Header';
import Reveal from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'About Gioele Friggia | Full-Stack Web Developer',
  description: 'Meet Gioele Friggia, an Italian full-stack web developer based in Limerick, Ireland. Learn about his approach to design and development.'
};

export default function ProfilePage(){return <main className="profile-page"><Header/>
<section id="profile" className="about-gioele" aria-labelledby="about-gioele-title">
<div className="about-gioele-inner">
  <div className="about-gioele-copy">
    <Reveal><p className="about-gioele-eyebrow"><span className="about-gioele-dot"/>03 / MORE ABOUT ME</p><h2 id="about-gioele-title">BEYOND <span>THE CODE.</span></h2>
    <p className="about-gioele-tagline">Curiosity, craft<br/>and a human touch.</p></Reveal>
    <Reveal delay={.1}><div className="about-gioele-bio">
      <p>I’m an Italian full-stack web developer based in Limerick, Ireland. I build distinctive websites and practical digital products that make everyday tasks simpler.</p>
      <p>My journey combines experience working with people and real-world operations with a passion for technology. That perspective shapes how I approach every project: understanding the problem first, then designing and building a solution that feels effortless to use.</p>
      <p>From responsive interfaces to APIs, databases and deployment, I enjoy bringing an idea to life from start to finish. I care about thoughtful design, reliable code and the small details that make a digital experience memorable.</p>
    </div></Reveal>
    <Reveal delay={.2}><div className="about-gioele-facts"><span>↗ &nbsp; Based in Ireland</span><span>⌘ &nbsp; Full-stack development</span><span>✳ &nbsp; Web design &amp; applications</span></div>
    <div className="about-gioele-actions"><a href="/#work" className="about-gioele-primary">VIEW MY WORK <span>↗</span></a><a href="/contact" className="about-gioele-secondary">GET IN TOUCH ↗</a></div></Reveal>
  </div>
  <div className="about-gioele-portrait"><img src="/images/profile/gioele-natural-shirt.webp" alt="Portrait of Gioele Friggia wearing a light shirt" loading="lazy"/><span className="about-gioele-side-note">THE PERSON<br/>BEHIND THE WORK</span></div>
</div>
</section>
<footer id="contact"><p>Have a problem worth solving?</p><a href="/contact">Let’s build it together ↗</a><a className="contact-email" href="mailto:giofriggia@gmail.com" aria-label="Email Gioele Friggia">giofriggia@gmail.com ↗</a><span>© 2026 Gioele Friggia</span></footer>
</main>}
