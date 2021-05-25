import { faGlobe, faLink, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidePanelItem from 'components/SidePanelItem';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from 'store';
import SideSection from '../SideSection';
import { AccountContainer } from './styles';

// TODO: DRY

type AccountsProps = {
  setAddAccountPanel: React.Dispatch<React.SetStateAction<boolean>>;
};

const Accounts: React.FC<AccountsProps> = (props) => {
  const githubState = useSelector((state: RootStore) => state.github);
  const bitbucketState = useSelector((state: RootStore) => state.bitbucket);
  const gitlabState = useSelector((state: RootStore) => state.gitlab);

  // TODO: specific handlers
  const handleAddGithubAccount = () => {
    props.setAddAccountPanel(true);
  };

  const handleAddBitbucketAccount = () => {
    props.setAddAccountPanel(true);
  };

  const handleAddGitlabAccount = () => {
    props.setAddAccountPanel(true);
  };

  const handleLinkClick = (to: string) => {
    window.open(to, '_blank')?.focus();
  };

  return (
    <AccountContainer>
      <SideSection
        headerItem={<SidePanelItem text="GitHub" fontSize="bigger" />}
      >
        {githubState.accounts?.map(
          (
            // TODO: improve
            account: {
              login: string;
              originUrl: string;
              repos: { private: any; name: string; originUrl: string }[];
            },
            index: React.Key | null | undefined
          ) => (
            <SideSection
              key={index}
              headerItem={
                <SidePanelItem
                  text={account?.login}
                  textColor="secondary"
                  buttons={[
                    <FontAwesomeIcon
                      icon={faLink}
                      onClick={() => handleLinkClick(account?.originUrl)}
                    />,
                  ]}
                />
              }
            >
              {account.repos?.map(
                (
                  // TODO: improve
                  repo: { private: any; name: string; originUrl: string },
                  index: React.Key | null | undefined
                ) => (
                  <SidePanelItem
                    key={index}
                    icon={
                      <FontAwesomeIcon
                        icon={repo?.private ? faLock : faGlobe}
                      />
                    }
                    text={account?.login + '/' + repo?.name}
                    textColor="primary"
                    buttons={[
                      <FontAwesomeIcon
                        icon={faLink}
                        onClick={() => handleLinkClick(repo?.originUrl)}
                      />,
                    ]}
                  />
                )
              )}
            </SideSection>
          )
        )}
      </SideSection>
      <SideSection
        headerItem={<SidePanelItem text="Bitbucket" fontSize="bigger" />}
      >
        {bitbucketState.accounts?.map(
          (
            // TODO: improve
            account: {
              login: string;
              originUrl: string;
              repos: { private: any; name: string; originUrl: string }[];
            },
            index: React.Key | null | undefined
          ) => (
            <SideSection
              key={index}
              headerItem={
                <SidePanelItem
                  text={account?.login}
                  textColor="secondary"
                  buttons={[
                    <FontAwesomeIcon
                      icon={faLink}
                      onClick={() => handleLinkClick(account?.originUrl)}
                    />,
                  ]}
                />
              }
            >
              {account.repos?.map(
                (
                  // TODO: improve
                  repo: { private: any; name: string; originUrl: string },
                  index: React.Key | null | undefined
                ) => (
                  <SidePanelItem
                    key={index}
                    icon={
                      <FontAwesomeIcon
                        icon={repo?.private ? faLock : faGlobe}
                      />
                    }
                    text={account?.login + '/' + repo?.name}
                    textColor="primary"
                    buttons={[
                      <FontAwesomeIcon
                        icon={faLink}
                        onClick={() => handleLinkClick(repo?.originUrl)}
                      />,
                    ]}
                  />
                )
              )}
            </SideSection>
          )
        )}
      </SideSection>
      <SideSection
        headerItem={<SidePanelItem text="GitLab" fontSize="bigger" />}
      >
        {gitlabState.accounts?.map(
          (
            // TODO: improve
            account: {
              login: string;
              originUrl: string;
              repos: { private: any; name: string; originUrl: string }[];
            },
            index: React.Key | null | undefined
          ) => (
            <SideSection
              key={index}
              headerItem={
                <SidePanelItem
                  text={account?.login}
                  textColor="secondary"
                  buttons={[
                    <FontAwesomeIcon
                      icon={faLink}
                      onClick={() => handleLinkClick(account?.originUrl)}
                    />,
                  ]}
                />
              }
            >
              {account.repos?.map(
                (
                  // TODO: improve
                  repo: { private: any; name: string; originUrl: string },
                  index: React.Key | null | undefined
                ) => (
                  <SidePanelItem
                    key={index}
                    icon={
                      <FontAwesomeIcon
                        icon={repo?.private ? faLock : faGlobe}
                      />
                    }
                    text={account?.login + '/' + repo?.name}
                    textColor="primary"
                    buttons={[
                      <FontAwesomeIcon
                        icon={faLink}
                        onClick={() => handleLinkClick(repo?.originUrl)}
                      />,
                    ]}
                  />
                )
              )}
            </SideSection>
          )
        )}
      </SideSection>
    </AccountContainer>
  );
};

export default Accounts;
