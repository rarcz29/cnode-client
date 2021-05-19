import React from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import { RootStore } from 'store';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
  const authState = useSelector((state: RootStore) => state.auth);
  const routing = useRoutes(routes(authState.isLoggedIn));
  // TODO: remove
  // const routing = useRoutes(routes(true));

  return (
    <>
      <GlobalStyle />
      {routing}
    </>
  );
};

export default App;
