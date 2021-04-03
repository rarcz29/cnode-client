import MainLayout from 'components/layouts/MainLayout';
import PanelLayout from 'components/layouts/PanelLayout';

const routes = (isLoggedIn) => [
    {
        path: '/',
        element: <MainLayout />,
        children: [{ path: '/', element: <PanelLayout /> }],
    },
    // { path: 'community', element: <PageLayout /> },
    // {
    //     path: 'auth',
    //     element: <AuthLayout />,
    // },
];

export default routes;
