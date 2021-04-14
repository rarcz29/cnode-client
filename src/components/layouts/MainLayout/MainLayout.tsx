import React from 'react';
import { Outlet } from 'react-router';
import { Right, StyledHeader, UserContainer } from './styles';

const MainLayout = () => {
    return (
        <>
            <StyledHeader>
                LOGO
                <Right>
                    <UserContainer></UserContainer>
                </Right>
            </StyledHeader>
            <Outlet />
        </>
    );
};

export default MainLayout;
