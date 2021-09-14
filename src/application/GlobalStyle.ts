import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: ${props => props.theme.fonts.family.default}, sans-serif;
    font-weight: ${props => props.theme.fonts.weight.normal};
    font-size: ${props => props.theme.fonts.p2.fontSize};
    line-height: ${props => props.theme.fonts.p2.lineHeight};
  }
`;
