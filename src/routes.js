import AuthLayout from 'layouts/auth/AuthLayout/AuthLayout';
import PageLayout from 'layouts/main/PageLayout';
import PanelLayout from 'layouts/main/PanelLayout';
import React from 'react';
import { Navigate } from 'react-router';

const routes = (isLoggedIn) => [
    {
        path: '/',
        element: isLoggedIn ? <PanelLayout /> : <Navigate to="/auth" />,
    },
    { path: 'community', element: <PageLayout /> },
    {
        path: 'auth',
        element: <AuthLayout />,
    },
];

export default routes;
