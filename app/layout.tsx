import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://gioelefriggia.com'),
  title: { default: 'Gioele Friggia | Full-Stack Web Developer in Ireland', template: '%s | Gioele Friggia' },
  description: 'Full-stack web developer based in Limerick, Ireland. I design and build modern websites, web applications and digital experiences for businesses.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'en_IE', siteName: 'Gioele Friggia',
    title: 'Gioele Friggia | Full-Stack Web Developer in Ireland',
    description: 'Modern websites and full-stack web applications designed and developed in Limerick, Ireland.',
    url: '/', images: [{ url: '/images/profile/gioele-natural-shirt.webp', alt: 'Gioele Friggia' }]
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true }
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
