import MainLayout from 'components/layouts/MainLayout';

const routes = (isLoggedIn) => [
    {
        path: '/',
        element: <MainLayout />,
    },
    // { path: 'community', element: <PageLayout /> },
    // {
    //     path: 'auth',
    //     element: <AuthLayout />,
    // },
];

export default routes;
