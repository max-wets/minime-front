'use client';

import { MinimeThemeProvider } from '@minime-front/ui';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Index() {
  return (
    <MinimeThemeProvider>
      <style global jsx>{`
        html {
          font-family: ${montserrat.style.fontFamily};
        }
      `}</style>

      <div>HELLO</div>
    </MinimeThemeProvider>
  );
}
