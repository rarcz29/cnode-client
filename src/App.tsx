import React from 'react';
import LayoutWrapper from 'layouts/LayoutWrapper/LayoutWrapper';
import { useRoutes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import GlobalStyle from './GlobalStyle';
import routes from './routes';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const routing = useRoutes(routes);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutWrapper>
        {routing}
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default App;
