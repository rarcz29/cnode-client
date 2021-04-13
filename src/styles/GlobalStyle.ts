import COLORS from 'constants/colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        font-family: 'Karla', sans-serif;
        font-size: 100%;
    }

    body {
        background-color: ${COLORS.BACKGROUND.DARK_1};
        color: ${COLORS.FOREGROUND.MAIN};
    }
`;

export default GlobalStyle;
