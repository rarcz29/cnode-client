import Button from 'components/common/Button';
import Logo from 'components/Logo';
import COLORS from 'constants/colors';
import React from 'react';
import { NavLink } from 'react-router-dom';
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
                {/* <Avatar>R</Avatar> */}
                <Button
                    width="106px"
                    height="35px"
                    color={COLORS.RED}
                    rounded
                    outlined
                    component={NavLink}
                    to="/login"
                >
                    Sign in
                </Button>
            </RightSideContainer>
        </StyledHeader>
    );
};

export default Header;
