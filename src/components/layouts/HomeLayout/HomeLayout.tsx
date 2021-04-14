import Container from 'components/common/Container';
import TextInput from 'components/common/TextInput';
import Contact from 'components/Contact';
import SideSection from 'components/SideSection';
import DIMENSIONS from 'constants/dimensions';
import React from 'react';
import { Outlet } from 'react-router';
import {
    LayoutContainer,
    LayoutContent,
    LSidePanel,
    NavBarExternal,
    NavBarInternal,
    RSidePanel,
    SearchAndFilter,
} from './styles';

const NAVBAR_ITEMS = [
    { text: 'Informations', href: '#' },
    { text: 'Repositories', href: '#' },
    { text: 'News', href: '#' },
    { text: 'Contacts', href: '#' },
    { text: 'Teams', href: '#' },
];

const CONTACTS = [
    { name: 'Carter Aminoff' },
    { name: 'Kaiya Rhiel Madsen' },
    { name: 'Jaydon Geidt' },
    { name: 'Miracle George' },
];

const TEAMS = [{ name: 'Remarkable Bears' }, { name: 'Remarkable Guppies' }];

const HomeLayout = () => {
    return (
        <LayoutContainer>
            <LSidePanel>
                <SearchAndFilter>
                    <TextInput
                        placeholder="Find a repository..."
                        width="100%"
                    ></TextInput>
                </SearchAndFilter>
            </LSidePanel>
            <LayoutContent>
                <NavBarExternal>
                    <Container
                        width={DIMENSIONS.HOME_PAGE_WIDTH + 'px'}
                        height="inherit"
                    >
                        <NavBarInternal>
                            <ul>
                                {NAVBAR_ITEMS.map((item, index) => (
                                    <li key={index}>{item.text}</li>
                                ))}
                            </ul>
                        </NavBarInternal>
                    </Container>
                </NavBarExternal>
                <Outlet />
            </LayoutContent>
            <RSidePanel>
                <SideSection header="Contacts">
                    {CONTACTS.map((item, index) => (
                        <Contact key={index} name={item.name} />
                    ))}
                </SideSection>
                <SideSection header="Teams">
                    {TEAMS.map((item, index) => (
                        <Contact key={index} name={item.name} />
                    ))}
                </SideSection>
            </RSidePanel>
        </LayoutContainer>
    );
};

export default HomeLayout;
