import {
    faBell,
    faHome,
    faInfoCircle,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Outlet } from 'react-router';
import { MainNav, Right, StyledHeader, UserContainer } from './styles';

const mainNavbarItems = [
    { icon: faHome, href: '#' },
    { icon: faUsers, href: '#' },
    { icon: faInfoCircle, href: '#' },
];

const MainLayout = () => {
    return (
        <>
            <StyledHeader>
                LOGO
                <MainNav>
                    <ul>
                        {mainNavbarItems.map((item, index) => (
                            <li key={index}>
                                <FontAwesomeIcon icon={item.icon} />
                            </li>
                        ))}
                    </ul>
                </MainNav>
                <Right>
                    <UserContainer></UserContainer>
                    <FontAwesomeIcon icon={faBell} />
                </Right>
            </StyledHeader>
            <Outlet />
        </>
    );
};

export default MainLayout;
