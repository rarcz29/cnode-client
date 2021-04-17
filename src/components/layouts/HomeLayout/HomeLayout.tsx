import {
    faBitbucket,
    faGithub,
    faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CircleButton } from 'components/common';
import Container from 'components/common/Container';
import TextInput from 'components/common/TextInput';
import Contact from 'components/Contact';
import SideSection from 'components/SideSection';
import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import {
    AddBtAndFiltersContainer,
    AddBtContainer,
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
    const [showGithub, setShowGithub] = useState(true);
    const [showBitbucket, setShowBitbucket] = useState(true);
    const [showGitlab, setShowGitlab] = useState(true);
    const [showAddButtons, setShowAddButtons] = useState(false);

    return (
        <LayoutContainer>
            <LSidePanel>
                <SearchAndFilter>
                    <TextInput
                        placeholder="Find a repository..."
                        width="100%"
                    ></TextInput>
                    <AddBtAndFiltersContainer
                        filtersWidth={showAddButtons ? '200%' : '100%'}
                    >
                        <AddBtContainer
                            width={
                                showAddButtons
                                    ? `calc(${DIMENSIONS.SIDE_PANEL_WIDTH}px - 2rem)`
                                    : '1.75rem'
                            }
                            onMouseLeave={() => setShowAddButtons(false)}
                        >
                            <div>
                                <CircleButton
                                    fontSize="0.875rem"
                                    backgroundColor={
                                        showAddButtons
                                            ? 'transparent'
                                            : COLORS.BUTTONS.GREEN.MAIN
                                    }
                                    highlightColor={
                                        showAddButtons
                                            ? 'transparent'
                                            : COLORS.BUTTONS.GREEN.HIGHLIGHT
                                    }
                                    onClick={() =>
                                        setShowAddButtons((prev) => !prev)
                                    }
                                    rotation={showAddButtons ? 45 : 0}
                                    color={
                                        showAddButtons
                                            ? COLORS.MAIN_COLOR
                                            : COLORS.FOREGROUND.MAIN
                                    }
                                >
                                    <FontAwesomeIcon icon={faPlus} />
                                </CircleButton>
                                <Button
                                    color={COLORS.BUTTONS.GREEN.MAIN}
                                    height="100%"
                                    width="40%"
                                >
                                    Repository
                                </Button>
                                <Button
                                    color={COLORS.BUTTONS.GREEN.MAIN}
                                    height="100%"
                                    width="40%"
                                >
                                    Account
                                </Button>
                            </div>
                        </AddBtContainer>
                        <CircleButton
                            checked={showGithub}
                            onClick={() => setShowGithub((prev) => !prev)}
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </CircleButton>
                        <CircleButton
                            checked={showBitbucket}
                            onClick={() => setShowBitbucket((prev) => !prev)}
                        >
                            <FontAwesomeIcon icon={faBitbucket} />
                        </CircleButton>
                        <CircleButton
                            checked={showGitlab}
                            onClick={() => setShowGitlab((prev) => !prev)}
                        >
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
                {showGithub && <SideSection header="GitHub"></SideSection>}
                {showBitbucket && (
                    <SideSection header="Bitbucket"></SideSection>
                )}
                {showGitlab && <SideSection header="GitLab"></SideSection>}
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
