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
import PLATFORMS from 'constants/platforms';
import React, { useState } from 'react';
import {
    ContentContainer,
    IconsContainer,
    StyledDiv,
    StyledIcon,
} from './styles';

const FixedPanel = () => {
    const [showPanel, setShowPanel] = useState(false);
    const [github, setGithub] = useState(true);
    const [bitbucket, setBitbucket] = useState(false);
    const [gitlab, setGitlab] = useState(false);
    const [username, setUsername] = useState('');

    const handleGithubClick = () => {
        setGithub(true);
        setBitbucket(false);
        setGitlab(false);
    };

    const handleBitbucketClick = () => {
        setGithub(false);
        setBitbucket(true);
        setGitlab(false);
    };

    const handleGitlabClick = () => {
        setGithub(false);
        setBitbucket(false);
        setGitlab(true);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (github) {
            window.location.assign(PLATFORMS.URL.GITHUB + '&login=' + username);
        } else if (bitbucket) {
        } else if (gitlab) {
        }
    };

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
                        <StyledIcon
                            icon={faGithub}
                            onClick={handleGithubClick}
                            checked={!showPanel || github}
                        />
                    </Badge>
                    <Badge
                        badgeContent={4}
                        color={COLORS.GREEN}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <StyledIcon
                            icon={faBitbucket}
                            onClick={handleBitbucketClick}
                            checked={!showPanel || bitbucket}
                        />
                    </Badge>
                    <Badge
                        badgeContent={4}
                        color={COLORS.GREEN}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                    >
                        <StyledIcon
                            icon={faGitlab}
                            onClick={handleGitlabClick}
                            checked={!showPanel || gitlab}
                        />
                    </Badge>
                </IconsContainer>
                <ContentContainer>
                    <form onSubmit={handleFormSubmit}>
                        <TextInput
                            onChange={(event) =>
                                setUsername(event.target.value)
                            }
                            width="100%"
                            height="40px"
                            placeholder="username..."
                            backgroundColor={COLORS.BACKGROUND.MAIN}
                            color={COLORS.FOREGROUND.MAIN}
                        />
                        <Button
                            type="submit"
                            width="100%"
                            height="35px"
                            backgroundColor={COLORS.BLUE}
                            color={COLORS.FOREGROUND.MAIN}
                            rounded
                        >
                            Connect
                        </Button>
                    </form>
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
