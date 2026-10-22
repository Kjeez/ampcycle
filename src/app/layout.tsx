import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { Intro } from '@/components/site/Intro';
import { PageTransition } from '@/components/site/PageTransition';
import { Cursor } from '@/components/site/Cursor';
import { RevealManager } from '@/components/site/RevealManager';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: { default: 'AmpCycle · Li-ion battery recycling', template: '%s · AmpCycle' },
  description:
    'AmpCycle recovers lithium, cobalt and nickel from spent lithium-ion batteries with low-energy electrochemical extraction. Pune, India.',
};

// Runs before paint: enables reveal styles and skips the intro after the first visit this session.
const bootScript = `(function(){var d=document.documentElement;d.classList.add('js');try{if(sessionStorage.getItem('ampIntro'))d.classList.add('no-intro');else sessionStorage.setItem('ampIntro','1')}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body>
        <Intro />
        <Header />
        <main>{children}</main>
        <Footer />
        <PageTransition />
        <Cursor />
        <RevealManager />
      </body>
    </html>
  );
}
