import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
    faBitbucket,
    faGithub,
    faGitlab,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, TextInput } from 'components/common';
import COLORS from 'constants/colors';
import PLATFORMS from 'constants/platforms';
import TRANSITIONS from 'constants/transitions';
import { useOnClickOutside } from 'hooks';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';
// TODO:
interface Props {
    show: boolean;
}

interface FullProps extends Props {
    setShow: (show: boolean) => void;
}

type IconProps = {
    icon: IconProp;
    checked: boolean;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

const AddAccountPanel: React.FC<FullProps> = ({ show, setShow }) => {
    const ref = useRef(null);
    const [github, setGithub] = useState(true);
    const [bitbucket, setBitbucket] = useState(false);
    const [gitlab, setGitlab] = useState(false);
    const [username, setUsername] = useState('');

    const handleClickOutside = () => setShow(false);

    useOnClickOutside(ref, handleClickOutside);

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

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (github) {
            window.location.assign(PLATFORMS.URL.GITHUB + '&login=' + username);
        } else if (bitbucket) {
            alert('not implemented');
        } else if (gitlab) {
            alert('not implemented');
        }
    };

    return (
        <AddAccountPanelContainer show={show} ref={ref}>
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
            <form id="add-account-form" onSubmit={handleSubmit}>
                <TextInput
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="username..."
                    width="100%"
                ></TextInput>
            </form>
            <Center>
                <Button color="secondary" form="add-account-form">
                    Connect
                </Button>
            </Center>
        </AddAccountPanelContainer>
    );
};

///////////////////////////
// Styles
///////////////////////////

const AddAccountPanelContainer = styled.div<Props>`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: ${(props: Props) => (props.show ? '0' : '-200px')};
    border-top: 1px solid ${COLORS.LAYOUT_SEPARATOR};
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
        font-size: 2rem;
    }
`;

const StyledIcon = styled(FontAwesomeIcon)<IconProps>`
    color: ${COLORS.FOREGROUND.MAIN};
    opacity: ${(props) => (props.checked ? '1' : '0.3')};
    cursor: pointer;
    transition: opacity ease-in-out ${TRANSITIONS.FAST}ms;
`;

const Center = styled.div`
    display: flex;
    justify-content: center;
`;

export default AddAccountPanel;
