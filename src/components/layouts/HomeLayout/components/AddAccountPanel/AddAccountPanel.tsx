import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faBitbucket,
    faGithub,
    faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextInput } from 'components/common';
import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import React, { useState } from 'react';
// import { AddAccountPanelContainer } from './styles';
import styled from 'styled-components';

type Props = {
    show: boolean;
};

type IconProps = {
    icon: IconProp;
    checked: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const AddAccountPanelContainer = styled.div<Props>`
    width: 100%;
    height: 200px;
    position: absolute;
    left: 0;
    bottom: ${(props: Props) => (props.show ? '0' : '-200px')};
    border: 1px solid ${COLORS.MAIN_COLOR};
    padding: 1rem;
    transition: bottom ease-in-out ${TRANSITIONS.SLOW}ms;

    & > * {
        margin-bottom: 1.125rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const IconsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & svg {
        font-size: 2.25rem;
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)<IconProps>`
    color: ${COLORS.FOREGROUND.MAIN};
    opacity: ${(props) => (props.checked ? '1' : '0.3')};
    cursor: pointer;
    transition: opacity ease-in-out ${TRANSITIONS.FAST}ms;
`;

const AddAccountPanel: React.FC<Props> = (props) => {
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

    return (
        <AddAccountPanelContainer {...props}>
            <IconsContainer>
                <StyledIcon
                    icon={faGithub}
                    onClick={handleGithubClick}
                    checked={github}
                />
                <StyledIcon
                    icon={faBitbucket}
                    onClick={handleBitbucketClick}
                    checked={bitbucket}
                />
                <StyledIcon
                    icon={faGitlab}
                    onClick={handleGitlabClick}
                    checked={gitlab}
                />
            </IconsContainer>
            <TextInput
                placeholder="Find a repository..."
                width="100%"
            ></TextInput>
            <Button fontSize="1.125rem" height="inherit">
                Sign in
            </Button>
        </AddAccountPanelContainer>
    );
};

export default AddAccountPanel;
