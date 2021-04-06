import { Avatar } from '@material-ui/core';
import Logo from 'components/Logo';
import React from 'react';
import {
    RightSideContainer,
    StyledHeader,
    StyledNav,
    StyledNavLink,
} from './styles';

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <RightSideContainer>
                <StyledNav>
                    <ul>
                        <li>
                            <StyledNavLink to="/">Home</StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink to="/community">
                                Community
                            </StyledNavLink>
                        </li>
                        <li>
                            <StyledNavLink to="/about">About</StyledNavLink>
                        </li>
                    </ul>
                </StyledNav>
                <Avatar>R</Avatar>
            </RightSideContainer>
        </StyledHeader>
    );
};

export default Header;
