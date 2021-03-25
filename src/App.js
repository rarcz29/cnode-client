import GlobalStyle from 'components/GlobalStyle';
import React from 'react';
import { useRoutes } from 'react-router';
import routes from 'routes';

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
