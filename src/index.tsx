import React from 'react';
import { App } from 'application/App';
import { MediaQueryProvider } from 'infrastructure/mediaQuery';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'ui/theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <MediaQueryProvider>
          <App />
        </MediaQueryProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
