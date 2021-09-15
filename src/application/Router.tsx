/* eslint-disable react/react-in-jsx-scope */
import { useContext } from 'react';
import { HeaderLayout } from 'application/layouts/HeaderLayout';
import { PageLayout } from 'application/layouts/PageLayout';
import { MediaQueryContext } from 'infrastructure/mediaQuery';
import { Navigate, useRoutes } from 'react-router';
import { ContactsView } from './views/ContactsView';
import { RepositoriesView } from './views/RepositoriesView';

export const routes = (desktopMax: boolean) => [
  {
    path: '/',
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <PageLayout />,
        children: [
          {
            path: '/',
            element: <h1>asdf</h1>,
          },
          {
            path: 'repositories',
            element: <RepositoriesView />,
          },
          {
            path: 'contacts',
            element: desktopMax ? <Navigate to='/' /> : <ContactsView />,
          },
        ],
      },
    ],
  },
];

export const Router = () => {
  const { desktopMin } = useContext(MediaQueryContext);
  const routing = useRoutes(routes(desktopMin));
  return routing;
};
