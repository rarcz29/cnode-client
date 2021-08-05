import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants';

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
    background-color: ${COLORS.background1};
  }
`;

export default GlobalStyle;
