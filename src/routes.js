import MainLayout from 'components/layouts/MainLayout';
import PanelLayout from 'components/layouts/PanelLayout';
import CommunityView from 'views/CommunityView';
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
                path: 'community',
                element: <CommunityView />,
            },
        ],
    },
];

export default routes;
