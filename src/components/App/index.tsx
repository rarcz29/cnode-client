import React from 'react';
import { MediaQueryProvider } from 'context/MediaQueryContext';
import GlobalStyle from 'GlobalStyle';
import LayoutWrapper from 'layouts/LayoutWrapper';
import { useRoutes } from 'react-router';
import routes from 'routes';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';

interface AppProps {}

const App: React.FC<AppProps> = () => {
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

export default App;
