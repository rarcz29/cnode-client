import COLORS from 'constants/colors';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');

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
        background-color: ${COLORS.BACKGROUND.MAIN};
        color: ${COLORS.FOREGROUND.MAIN};
    }
`;

export default GlobalStyle;
