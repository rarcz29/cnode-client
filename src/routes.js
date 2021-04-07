import MainLayout from 'components/layouts/MainLayout';
import PanelLayout from 'components/layouts/PanelLayout';
import HomeView from 'views/HomeView';
import NewRepoView from 'views/NewRepoView';

const routes = (isLoggedIn) => [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <PanelLayout />,
                children: [
                    { path: '/', element: <HomeView /> },
                    { path: 'home', element: <HomeView /> },
                    { path: 'new', element: <NewRepoView /> },
                ],
            },
            {
                path: 'page',
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
