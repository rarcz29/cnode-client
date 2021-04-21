import {
    faBitbucket,
    faGithub,
    faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CircleButton, TextInput } from 'components/common';
import COLORS from 'constants/colors';
import DIMENSIONS from 'constants/dimensions';
import React, { useState } from 'react';
import SideSection from '../SideSection';
import {
    AddBtAndFiltersContainer,
    AddBtContainer,
    LSidePanel,
    SearchAndFilter,
} from './styles';

const LeftSidePanel = () => {
    const [showGithub, setShowGithub] = useState(true);
    const [showBitbucket, setShowBitbucket] = useState(true);
    const [showGitlab, setShowGitlab] = useState(true);
    const [showAddButtons, setShowAddButtons] = useState(false);

    return (
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
                {showAddButtons && (
                    <CircleButton
                        fontSize="0.875rem"
                        backgroundColor={COLORS.BUTTONS.DARK.MAIN}
                        highlightColor={COLORS.BUTTONS.DARK.HIGHLIGHT}
                    >
                        <FontAwesomeIcon icon={faFilter} />
                    </CircleButton>
                )}
            </SearchAndFilter>
            {showGithub && <SideSection header="GitHub"></SideSection>}
            {showBitbucket && <SideSection header="Bitbucket"></SideSection>}
            {showGitlab && <SideSection header="GitLab"></SideSection>}
        </LSidePanel>
    );
};

export default LeftSidePanel;
