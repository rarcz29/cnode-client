import { BREAKPOINTS } from 'constants/breakpoints';
import { useMediaQuery } from 'hooks';
import React from 'react';
import { Outlet } from 'react-router';
import { AuthContainer, AuthContent, AuthImage } from './styles';

const AuthLayout = () => {
    const isLaptop = useMediaQuery(BREAKPOINTS.laptop);
    const isTablet = useMediaQuery(BREAKPOINTS.tablet);
    const isMobile = useMediaQuery(BREAKPOINTS.mobileM);

    return (
        <AuthContainer>
            {isLaptop && <AuthImage />}

            <AuthContent>
                <Outlet />
            </AuthContent>
        </AuthContainer>
    );
};

export default AuthLayout;
