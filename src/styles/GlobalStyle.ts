import { createGlobalStyle } from 'styled-components';
import { p2 } from 'styles';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    ${p2}
  }
`;

export default GlobalStyle;
