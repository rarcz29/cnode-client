import React from 'react';
import { Outlet } from 'react-router';
import { AuthContainer, AuthContent, AuthImage } from './styles';

const AuthLayout = () => {
    return (
        <AuthContainer>
            <AuthImage />
            <AuthContent>
                <Outlet />
            </AuthContent>
        </AuthContainer>
    );
};

export default AuthLayout;
