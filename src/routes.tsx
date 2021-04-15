import { AuthLayout, HomeLayout, MainLayout } from 'components/layouts';
import { SigninView } from 'views';

const routes = (isLoggedIn: boolean) => [
    {
        path: '/',
        element: <MainLayout />,
        children: [{ path: '/', element: <HomeLayout /> }],
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [{ path: 'login', element: <SigninView /> }],
    },
];

export default routes;
