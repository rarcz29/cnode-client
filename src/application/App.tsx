import React from 'react';
import { GlobalStyle } from 'application/GlobalStyle';
import { LayoutWrapper } from 'application/layouts/LayoutWrapper';
import { routes } from 'application/routes';
import { MediaQueryProvider } from 'infrastructure/mediaQuery';
import { useRoutes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui/theme';

export const App: React.FC = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <MediaQueryProvider>
        <GlobalStyle />
        <LayoutWrapper>
          {routing}
        </LayoutWrapper>
      </MediaQueryProvider>
    </ThemeProvider>
  );
};
