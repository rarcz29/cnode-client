import {
    faBitbucket,
    faGithub,
    faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faFilter, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircleButton, TextInput } from 'components/common';
import COLORS from 'constants/colors';
import React, { useState } from 'react';
import SideSection from '../SideSection';
import {
    AddBtAndFiltersContainer,
    LSidePanel,
    SearchAndFilter,
} from './styles';

const LeftSidePanel = () => {
    const [showGithub, setShowGithub] = useState(true);
    const [showBitbucket, setShowBitbucket] = useState(true);
    const [showGitlab, setShowGitlab] = useState(true);

    return (
        <LSidePanel>
            <SearchAndFilter>
                <TextInput
                    placeholder="Find a repository..."
                    width="100%"
                ></TextInput>
                <AddBtAndFiltersContainer>
                    {/* <AddBtContainer
                        width={
                            showAddButtons
                                ? `calc(${DIMENSIONS.SIDE_PANEL_WIDTH}px - 2rem)`
                                : '1.75rem'
                        }
                        onMouseLeave={() => setShowAddButtons(false)}
                    > */}
                    {/* <div> */}
                    <CircleButton
                        fontSize="0.875rem"
                        backgroundColor={COLORS.BUTTONS.GREEN.MAIN}
                        highlightColor={COLORS.BUTTONS.GREEN.HIGHLIGHT}
                        color={COLORS.FOREGROUND.MAIN}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </CircleButton>
                    {/* <Button
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
                        </Button> */}
                    {/* </div> */}
                    {/* </AddBtContainer> */}
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
            {showBitbucket && <SideSection header="Bitbucket"></SideSection>}
            {showGitlab && <SideSection header="GitLab"></SideSection>}
        </LSidePanel>
    );
};

export default LeftSidePanel;
