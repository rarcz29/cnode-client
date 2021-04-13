import MainLayout from 'components/layouts/MainLayout';

const routes = (isLoggedIn: boolean) => [
    {
        path: '/',
        element: <MainLayout />,
    },
    {
        path: 'auth',
        element: <div>auth</div>,
    },
];

export default routes;
