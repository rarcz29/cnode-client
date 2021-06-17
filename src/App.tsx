import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import GlobalStyle from './styles/GlobalStyle';

type AppProps = {};

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
