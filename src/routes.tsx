/* eslint-disable react/react-in-jsx-scope */
import HeaderLayout from 'layouts/HeaderLayout';
import PageLayout from 'layouts/PageLayout';

const routes = [
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

export default routes;
