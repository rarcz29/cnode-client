import { createGlobalStyle } from 'styled-components';
import COLORS from 'themes/colors';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html {
        font-family: 'Lato', sans-serif;
        font-size: 100%;
    }
    
    body {
        background-color: ${COLORS.BACKGROUND.main};
        color: ${COLORS.FOREGROUND.main};
    }
`;

export default GlobalStyle;
