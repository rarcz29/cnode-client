/* eslint-disable react/react-in-jsx-scope */
import { HeaderLayout } from 'application/layouts/HeaderLayout';
import { PageLayout } from 'application/layouts/PageLayout';

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
        ],
      },
    ],
  },
];
