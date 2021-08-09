import React from 'react';
import LayoutWrapper from 'layouts/LayoutWrapper';
import { useRoutes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import routes from './routes';
import GlobalStyle from './styles/GlobalStyle';

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
