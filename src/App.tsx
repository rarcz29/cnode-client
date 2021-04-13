import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from 'routes';
import GlobalStyle from 'styles/GlobalStyle';

const App = () => {
    const routing = useRoutes(routes(true));

    return (
        <>
            <GlobalStyle />
            {routing}
        </>
    );
};

export default App;
