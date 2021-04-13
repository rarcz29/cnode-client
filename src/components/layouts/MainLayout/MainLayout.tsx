import React from 'react';
import { Right, StyledHeader, UserContainer } from './styles';

const MainLayout = () => {
    return (
        <StyledHeader>
            LOGO
            <Right>
                <UserContainer></UserContainer>
            </Right>
        </StyledHeader>
    );
};

export default MainLayout;
