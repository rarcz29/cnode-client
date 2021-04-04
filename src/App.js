import { MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { useRoutes } from 'react-router';
import routes from 'routes';
import GlobalStyle from 'styles/GlobalStyle';
import materialTheme from 'styles/materialTheme';

function App() {
    const routing = useRoutes(routes(true));

    return (
        <MuiThemeProvider theme={materialTheme}>
            <StylesProvider injectFirst>
                <GlobalStyle />
                {routing}
            </StylesProvider>
        </MuiThemeProvider>
    );
}

export default App;
