import { HomeLayout } from 'components/layouts';
import React from 'react';
import { RepositoriesView } from 'views';

const routes = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [{ path: '/', element: <RepositoriesView /> }],
  },
];

export default routes;
