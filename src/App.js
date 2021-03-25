import GlobalStyles from 'components/GlobalStyles';
import React from 'react';
import { useRoutes } from 'react-router';
import routes from 'routes';

function App() {
    const routing = useRoutes(routes);

    return (
        <>
            <GlobalStyles />
            {routing}
        </>
    );
}

export default App;
