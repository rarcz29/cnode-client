import React from 'react';
import { GlobalStyle } from 'application/GlobalStyle';
import { LayoutWrapper } from 'application/layouts/LayoutWrapper';
import { Router } from 'application/Router';
import { MediaQueryProvider } from 'infrastructure/mediaQuery';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui/theme';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <MediaQueryProvider>
        <GlobalStyle />
        <LayoutWrapper>
          <Router />
        </LayoutWrapper>
      </MediaQueryProvider>
    </ThemeProvider>
  );
};
