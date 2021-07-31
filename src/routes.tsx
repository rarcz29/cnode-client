import { HomeLayout } from 'components/layouts';
import React from 'react';
import { ContactsView, RepositoriesView } from 'views';

const routes = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { path: 'repositories', element: <RepositoriesView /> },
      { path: 'contacts', element: <ContactsView /> },
    ],
  },
];

export default routes;
