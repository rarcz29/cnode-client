import MainLayout from 'components/layouts/MainLayout';
import PanelLayout from 'components/layouts/PanelLayout';
import NewRepoView from 'views/NewRepoView';

const routes = (isLoggedIn) => [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <PanelLayout />,
                children: [{ path: 'new', element: <NewRepoView /> }],
            },
        ],
    },
    // { path: 'community', element: <PageLayout /> },
    // {
    //     path: 'auth',
    //     element: <AuthLayout />,
    // },
];

export default routes;
