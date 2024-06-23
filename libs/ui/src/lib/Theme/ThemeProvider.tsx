import { PropsWithChildren } from 'react';
import { BaseTheme, color, font, theme } from './theme';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import React = require('react');

export interface MinimeThemeProps {
  theme: BaseTheme;
}

const GlobalStyle = createGlobalStyle`
    body {
        font-size: 1.4rem;
        line-height: 1.32;
        background: ${color('background.color')}
        color: ${color('font.color')}
    }

    * {
        box-sizing: border-box;
    }
`;

export const MinimeThemeProvider: React.FC<PropsWithChildren> = ({
  children,
}) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
