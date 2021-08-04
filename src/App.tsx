import React from 'react';
import BaseLayout from 'layouts/BaseLayout';
import { GlobalStyle } from 'styles';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return <><GlobalStyle /><BaseLayout /></>;
};

export default App;
