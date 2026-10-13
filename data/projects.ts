export type Project = {
  slug:string; index:string; title:string; kicker:string; year:string; stack:string[];
  description:string; accent:string; dark:string; features:string[]; statement:string;
  category:string; role:string; status:string; challenge:string; solution:string; liveUrl?:string;
};

export const projects: Project[] = [
  {
    slug:'firinne-ebook',index:'01',title:'Firinne\nDigital eBook',kicker:'A better way to share operational knowledge.',year:'2026',
    category:'Full-stack · Internal tools',role:'Design & development',status:'In development',
    stack:['React','Vite','Node.js','Express','Prisma','PostgreSQL'],
    description:'A digital recipe and operations resource built for food-service teams, with a multilingual frontend and an evolving management platform.',
    accent:'#e9ff4f',dark:'#11120b',
    features:['Digital recipe library','Multilingual interface','Manager and admin workflows','Authentication and audit logging'],
    statement:'Operational knowledge, made easier to access and maintain.',
    challenge:'Operational content needs to stay accessible, consistent and easy to update across teams.',
    solution:'I developed a responsive digital resource and a backend foundation for authenticated recipe management and change tracking.'
  },
  {
    slug:'cartly',index:'02',title:'Cartly\nShopping Lists',kicker:'Shopping together, without the back-and-forth.',year:'2026',
    category:'Full-stack · PWA',role:'Design & development',status:'Live project',
    stack:['React','Vite','Express','Prisma','PostgreSQL','PWA'],
    description:'A shared shopping-list web app with user accounts, collaborative lists and an installable mobile-friendly experience.',
    accent:'#b8f3cb',dark:'#102019',
    features:['Account registration and login','Shared lists with invite codes','Shopping item management','Installable progressive web app'],
    statement:'One list. Everyone in sync.',
    challenge:'Shared shopping is often fragmented across messages, notes and individual lists.',
    solution:'I built a full-stack application where users can create and share lists through a simple, responsive interface.',
    liveUrl:'https://cartlylist.vercel.app'
  },
  {
    slug:'pinna-corse',index:'03',title:'Pinna Corse\nWebsite',kicker:'Passion, precision and power — built for the rally world.',year:'2026',
    category:'Motorsport · Web design & development',role:'Website development',status:'Website project',
    stack:['Next.js','React','Framer Motion','Responsive design'],
    description:'A bold motorsport website for Team Pinna Corse, featuring race-inspired visual storytelling, team information, news and a gallery.',
    accent:'#b9f406',dark:'#090b08',
    features:['Rally-led hero design','Team and news sections','Gallery and partners','Parallax and animated headline'],
    statement:'Built for the rush.',
    challenge:'Presenting an organisation online requires clarity, personality and an experience that works across devices.',
    solution:'I built a Next.js site with an animated hero, visual storytelling and sections for the team, news, partners and gallery.'
  },
  {
    slug:'sassari-soccorso',index:'04',title:'Sassari\nSoccorso',kicker:'Technology with purpose. Built for people who show up.',year:'2024',
    category:'Full-stack · Volunteer organisation',role:'Design & development',status:'Web application project',
    stack:['React','Vite','Java','Spring Boot','PostgreSQL'],
    description:'A full-stack platform for Sassari Soccorso, combining public information, volunteer resources, training content and operational checklists.',
    accent:'#ee634e',dark:'#0d1c24',
    features:['Organisation and services website','Emergency training resources','Vehicle and medical-compartment checklists','Login, user and admin sections'],
    statement:'Technology with purpose.',
    challenge:'A volunteer organisation needs accessible public information alongside useful, structured operational tools.',
    solution:'I developed a React interface and a Java Spring Boot backend with sections for volunteers, operational checklists and organisation resources.'
  }
];
