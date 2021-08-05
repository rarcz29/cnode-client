import React from 'react';
import { useRoutes } from 'react-router';
import { GlobalStyle } from 'styles';
import routes from './routes';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  const routing = useRoutes(routes);

  return (
    <>
      <GlobalStyle />
      {routing}
    </>
  );
};

export default App;
