import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gioele Friggia — Full Stack Developer',
  description: 'Digital products for hospitality and enterprise operations.'
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
