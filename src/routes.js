import React from 'react';

const routes = [
    {
        path: '/',
        element: <div>home</div>,
        children: [{ path: 'page', element: <div>page</div> }],
    },
    {
        path: '/xd',
        element: <div>xd</div>,
    },
];

export default routes;
