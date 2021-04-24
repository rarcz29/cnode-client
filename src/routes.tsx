import { AuthLayout, HomeLayout, MainLayout } from 'components/layouts';
import { Navigate } from 'react-router-dom';
import { NewRepoView, SigninView, SignupView } from 'views';

const routes = (isLoggedIn: boolean) => [
    {
        path: '/',
        element: isLoggedIn ? <MainLayout /> : <Navigate to="auth/login" />,
        children: [
            {
                path: '/',
                element: <HomeLayout />,
                children: [{ path: 'new', element: <NewRepoView /> }],
            },
        ],
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            { path: 'login', element: <SigninView /> },
            { path: 'register', element: <SignupView /> },
        ],
    },
];

export default routes;
