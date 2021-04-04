import {
    faBitbucket,
    faGithub,
    faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ClickAwayListener } from '@material-ui/core';
import Badge from 'components/common/Badge';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import COLORS from 'constants/colors';
import React, { useState } from 'react';
import { ContentContainer, IconsContainer, StyledDiv } from './styles';

const FixedPanel = () => {
    const [showPanel, setShowPanel] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => setShowPanel(false)}>
            <StyledDiv show={showPanel} onMouseEnter={() => setShowPanel(true)}>
                <IconsContainer>
                    <Badge
                        badgeContent={4}
                        color={COLORS.GREEN}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </Badge>
                    <FontAwesomeIcon icon={faBitbucket} />
                    <FontAwesomeIcon icon={faGitlab} />
                </IconsContainer>
                <ContentContainer>
                    <TextInput
                        width="100%"
                        height="40px"
                        placeholder="username..."
                        backgroundColor={COLORS.BACKGROUND.MAIN}
                        color={COLORS.FOREGROUND.MAIN}
                    />
                    <Button
                        width="100%"
                        height="35px"
                        backgroundColor={COLORS.BLUE}
                        color={COLORS.FOREGROUND.MAIN}
                        rounded
                    >
                        Connect
                    </Button>
                    <div>
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            onClick={() => setShowPanel(false)}
                        />
                    </div>
                </ContentContainer>
            </StyledDiv>
        </ClickAwayListener>
    );
};

export default FixedPanel;
