import HomeLayout from 'components/layouts/HomeLayout';
import MainLayout from 'components/layouts/MainLayout';

const routes = (isLoggedIn: boolean) => [
    {
        path: '/',
        element: <MainLayout />,
        children: [{ path: '/', element: <HomeLayout /> }],
    },
    {
        path: 'auth',
        element: <div>auth</div>,
    },
];

export default routes;
