/* eslint-disable react/react-in-jsx-scope */
import { HeaderLayout } from 'application/layouts/HeaderLayout';
import { PageLayout } from 'application/layouts/PageLayout';
import { ContactsView } from './views/ContactsView';
import { RepositoriesView } from './views/RepositoriesView';

export const routes = [
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
            element: <ContactsView />,
          },
        ],
      },
    ],
  },
];
