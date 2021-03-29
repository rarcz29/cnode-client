import React from 'react';
import { useRoutes } from 'react-router';
import routes from 'routes';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
    const routing = useRoutes(routes(true));

    return (
        <>
            <GlobalStyle />
            {routing}
        </>
    );
}

export default App;
