/* eslint-disable react/react-in-jsx-scope */
import BaseLayout from 'layouts/BaseLayout';
import MainLayout from 'layouts/MainLayout';

const routes = [
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
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

export default routes;
