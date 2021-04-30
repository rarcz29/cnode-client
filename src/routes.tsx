import {
    AuthLayout,
    CommunityLayout,
    HomeLayout,
    MainLayout,
} from 'components/layouts';
import { Navigate } from 'react-router-dom';
import { InfoView, NewRepoView, SigninView, SignupView } from 'views';

const routes = (isLoggedIn: boolean) => [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: isLoggedIn ? (
                    <HomeLayout />
                ) : (
                    <Navigate to="auth/login" />
                ),
                children: [
                    { path: '/', element: <InfoView /> },
                    { path: 'new', element: <NewRepoView /> },
                ],
            },
            {
                path: 'community',
                element: <CommunityLayout />,
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
