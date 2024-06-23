'use client';

import { MinimeThemeProvider } from '@minime-front/ui';
import { Montserrat } from 'next/font/google';
import { StyledComponentsRegistry } from './registry';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <MinimeThemeProvider>
        <style global jsx>{`
          html {
            font-family: ${montserrat.style.fontFamily};
          }
        `}</style>
        {props.children}
      </MinimeThemeProvider>
    </StyledComponentsRegistry>
  );
};

export default Providers;
