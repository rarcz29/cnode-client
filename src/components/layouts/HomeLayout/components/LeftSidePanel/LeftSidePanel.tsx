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
import axios from 'axiosConfig';
import { CircleButton, TextInput } from 'components/common';
import COLORS from 'constants/colors';
import LOCAL_STORAGE from 'constants/localStorage';
import { useQueryString } from 'hooks';
import React, { useEffect, useState } from 'react';
import AddAccountPanel from '../AddAccountPanel';
import SideSection from '../SideSection';
import {
    AddBtAndFiltersContainer,
    LSidePanel,
    SearchAndFilter,
} from './styles';

// TODO: refactor

type RepoData = {
    title: string;
};

type AccountData = {
    username: string;
    repos: RepoData[];
};

const LeftSidePanel = () => {
    const queryString = useQueryString();
    const [showGithub, setShowGithub] = useState(true);
    const [showBitbucket, setShowBitbucket] = useState(true);
    const [showGitlab, setShowGitlab] = useState(true);
    const [showAddAccountPanel, setShowAddAccountPanel] = useState(false);
    const [accounts, setAccounts] = useState<AccountData[]>([]);

    const handleGithubConnection = (code: string) => {
        axios
            .post('github/auth/account', { code })
            .then((response) =>
                setAccounts((prev) => [
                    ...prev,
                    { username: response.data.username, repos: [] },
                ])
            );
    };

    const handleBitbucketConnection = (code: string) => {};

    const handleGitlabConnection = (code: string) => {};

    useEffect(() => {
        const code = queryString.get('code');

        if (code) {
            const platform = localStorage.getItem(LOCAL_STORAGE.PLATFORM_NAME);

            switch (platform) {
                case LOCAL_STORAGE.GITHUB_VALUE:
                    handleGithubConnection(code);
                    break;
                case LOCAL_STORAGE.BITBUCKET_VALUE:
                    handleBitbucketConnection(code);
                    break;
                case LOCAL_STORAGE.GITLAB_VALUE:
                    handleGitlabConnection(code);
                    break;
            }
        }

        localStorage.removeItem(LOCAL_STORAGE.PLATFORM_NAME);
    }, []);

    return (
        <LSidePanel>
            <SearchAndFilter>
                <TextInput
                    placeholder="Find a repository..."
                    width="100%"
                    rounded
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
                >
                    {accounts.map((account, index) => (
                        <div key={index}>{account.username}</div>
                    ))}
                </SideSection>
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
