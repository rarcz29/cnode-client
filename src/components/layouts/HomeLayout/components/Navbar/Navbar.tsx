import { Container } from 'components/common';
import DIMENSIONS from 'constants/dimensions';
import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarExternal, NavBarInternal } from './styles';

const NAVBAR_ITEMS = [
    { text: 'Informations', href: '#' },
    { text: 'Repositories', href: '#' },
    { text: 'News', href: '#' },
    { text: 'Contacts', href: '#' },
    { text: 'Teams', href: '#' },
];

const Navbar = () => {
    return (
        <NavBarExternal>
            <Container
                width={DIMENSIONS.HOME_PAGE_WIDTH + 'px'}
                height="inherit"
            >
                <NavBarInternal>
                    <ul>
                        {NAVBAR_ITEMS.map((item, index) => (
                            <li key={index}>
                                <Link to="#">{item.text}</Link>
                            </li>
                        ))}
                    </ul>
                </NavBarInternal>
            </Container>
        </NavBarExternal>
    );
};

export default Navbar;
