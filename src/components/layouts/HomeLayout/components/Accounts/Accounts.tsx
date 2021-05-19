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
        {githubState.accounts?.map((account, index) => (
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
            {account.repos?.map((repo, index) => (
              <SidePanelItem
                key={index}
                icon={
                  <FontAwesomeIcon icon={repo?.private ? faLock : faGlobe} />
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
            ))}
          </SideSection>
        ))}
      </SideSection>
      <SideSection
        headerItem={<SidePanelItem text="Bitbucket" fontSize="bigger" />}
      ></SideSection>
      <SideSection
        headerItem={<SidePanelItem text="GitLab" fontSize="bigger" />}
      ></SideSection>
    </AccountContainer>
  );
};

export default Accounts;
