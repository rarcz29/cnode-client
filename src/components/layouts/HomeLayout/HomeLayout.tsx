import {
    faBitbucket,
    faGithub,
    faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircleButton } from 'components/common';
import Container from 'components/common/Container';
import TextInput from 'components/common/TextInput';
import Contact from 'components/Contact';
import SideSection from 'components/SideSection';
import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import React from 'react';
import { Outlet } from 'react-router';
import {
    AddBtAndFiltersContainer,
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
                    <AddBtAndFiltersContainer>
                        <CircleButton
                            fontSize="0.875rem"
                            backgroundColor={COLORS.BUTTONS.GREEN.MAIN}
                            highlightColor={COLORS.BUTTONS.GREEN.HIGHLIGHT}
                        >
                            <FontAwesomeIcon icon={faPlus} />
                        </CircleButton>
                        <CircleButton>
                            <FontAwesomeIcon icon={faGithub} />
                        </CircleButton>
                        <CircleButton>
                            <FontAwesomeIcon icon={faBitbucket} />
                        </CircleButton>
                        <CircleButton>
                            <FontAwesomeIcon icon={faGitlab} />
                        </CircleButton>
                        <CircleButton
                            fontSize="0.875rem"
                            backgroundColor={COLORS.BUTTONS.DARK.MAIN}
                            highlightColor={COLORS.BUTTONS.DARK.HIGHLIGHT}
                        >
                            <FontAwesomeIcon icon={faFilter} />
                        </CircleButton>
                    </AddBtAndFiltersContainer>
                </SearchAndFilter>
                <SideSection header="GitHub"></SideSection>
                <SideSection header="Bitbucket"></SideSection>
                <SideSection header="GitLab"></SideSection>
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
