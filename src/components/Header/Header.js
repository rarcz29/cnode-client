import { Avatar } from '@material-ui/core';
import Logo from 'components/Logo';
import React from 'react';
import { RightSideContainer, StyledHeader, StyledNav } from './styles';

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <RightSideContainer>
                <StyledNav>
                    <ul>
                        <li>Home</li>
                        <li>Community</li>
                        <li>About</li>
                    </ul>
                </StyledNav>
                <Avatar>R</Avatar>
            </RightSideContainer>
        </StyledHeader>
    );
};

export default Header;
