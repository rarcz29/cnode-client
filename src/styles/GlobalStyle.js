import COLORS from 'constants/colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html, input {
        font-family: 'Karla', sans-serif;
        font-size: 100%;
    }

    body {
        background-color: ${COLORS.BACKGROUND.MAIN};
        color: ${COLORS.FOREGROUND.MAIN};
    }
`;

export default GlobalStyle;
