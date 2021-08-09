/* eslint-disable react/react-in-jsx-scope */
import BaseLayout from 'layouts/BaseLayout';
import PageLayout from 'layouts/PageLayout';

const routes = [
  {
    path: '/',
    element: <BaseLayout />,
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

export default routes;
