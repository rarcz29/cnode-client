import COLORS from 'constants/colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }

    html, input {
        font-family: 'Karla', sans-serif;
        font-size: 100%;
    }

    body {
        background-color: ${COLORS.BACKGROUND.DARK_1};
        color: ${COLORS.FOREGROUND.MAIN};
        overflow-y: scroll;
    }
`;

export default GlobalStyle;
