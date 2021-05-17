import axios from 'axiosConfig';
import { CircleButton } from 'components/common';
import COLORS from 'constants/colors';
import LOCAL_STORAGE from 'constants/localStorage';
import { useOnClickOutside, useQueryString } from 'hooks';
import React, { useEffect, useRef, useState } from 'react';
import Accounts from '../Accounts';
import AddAccountPanel from '../AddAccountPanel';
import SearchAndFilters from '../SearchAndFilters';
import { HiddenPanel, LSidePanel } from './styles';

// TODO: refactor

type LeftSidePanelProps = {
  laptop: boolean;
};

type RepoData = {
  title: string;
};

type AccountData = {
  username: string;
  repos: RepoData[];
};

const LeftSidePanel: React.FC<LeftSidePanelProps> = (props) => {
  const ref = useRef(null);
  const queryString = useQueryString();
  const [isLeftPanelHidden, setIsLeftPanelHidden] = useState(true);
  const [showAddAccountPanel, setShowAddAccountPanel] = useState(false);
  useOnClickOutside(ref, () => setIsLeftPanelHidden(true));

  const handleGithubConnection = (code: string) => {
    axios.post('github/account', { code }).then((response) => {
      console.log(response.data);
    });
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
    <LSidePanel isHidden={isLeftPanelHidden} ref={ref}>
      {!props.laptop && isLeftPanelHidden ? (
        <HiddenPanel>
          <CircleButton
            onClick={() => setIsLeftPanelHidden(false)}
            backgroundColor={COLORS.BUTTONS.GREEN.MAIN}
            highlightColor={COLORS.BUTTONS.GREEN.HIGHLIGHT}
          >
            x
          </CircleButton>
        </HiddenPanel>
      ) : (
        <>
          <SearchAndFilters
            showNewAccountPanel={() => setShowAddAccountPanel(true)}
          />
          <Accounts setAddAccountPanel={setShowAddAccountPanel} />
          <AddAccountPanel
            show={showAddAccountPanel}
            setShow={setShowAddAccountPanel}
          />
        </>
      )}
    </LSidePanel>
  );
};

export default LeftSidePanel;
