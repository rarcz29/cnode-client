import {
    faBitbucket,
    faGithub,
    faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import {
    faFilter,
    faPlus,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CircleButton, TextInput } from 'components/common';
import COLORS from 'constants/colors';
import React, { useState } from 'react';
import AddAccountPanel from '../AddAccountPanel';
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
    const [showAddAccountPanel, setShowAddAccountPanel] = useState(true);

    return (
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
                        color={COLORS.FOREGROUND.MAIN}
                        to="new"
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </CircleButton>
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
            {showGithub && (
                <SideSection
                    header="GitHub"
                    icons={
                        <FontAwesomeIcon
                            onClick={() => setShowAddAccountPanel(true)}
                            icon={faUserPlus}
                        />
                    }
                ></SideSection>
            )}
            {showBitbucket && <SideSection header="Bitbucket"></SideSection>}
            {showGitlab && <SideSection header="GitLab"></SideSection>}
            <AddAccountPanel
                show={showAddAccountPanel}
                setShow={setShowAddAccountPanel}
            >
                asdf
            </AddAccountPanel>
        </LSidePanel>
    );
};

export default LeftSidePanel;
