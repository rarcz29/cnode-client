import {
    faGlobe,
    faLink,
    faLock,
    faStar,
    faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidePanelItem from 'components/SidePanelItem';
import React from 'react';
import SideSection from '../SideSection';
import { AccountContainer } from './styles';

type AccountsProps = {
    showGithub: boolean;
    showBitbucket: boolean;
    showGitlab: boolean;
};

const Accounts: React.FC<AccountsProps> = (props) => {
    return (
        <AccountContainer>
            {props.showGithub && (
                <SideSection
                    headerItem={
                        <SidePanelItem
                            text="GitHub"
                            fontSize="bigger"
                            buttons={[<FontAwesomeIcon icon={faUserPlus} />]}
                        />
                    }
                >
                    {/* {accounts.map((account, index) => (
                        <div key={index}>{account.username}</div>
                    ))} */}
                </SideSection>
            )}
            {props.showBitbucket && (
                <SideSection
                    headerItem={
                        <SidePanelItem
                            text="Bitbucket"
                            fontSize="bigger"
                            buttons={[<FontAwesomeIcon icon={faUserPlus} />]}
                        />
                    }
                >
                    <SideSection
                        headerItem={
                            <SidePanelItem
                                text="username"
                                textColor="secondary"
                                buttons={[<FontAwesomeIcon icon={faLink} />]}
                            />
                        }
                    >
                        <SidePanelItem
                            icon={<FontAwesomeIcon icon={faGlobe} />}
                            text="reponame"
                            textColor="primary"
                            buttons={[
                                <FontAwesomeIcon icon={faLink} />,
                                <FontAwesomeIcon icon={faStar} />,
                            ]}
                        />
                        <SidePanelItem
                            icon={<FontAwesomeIcon icon={faLock} />}
                            text="reponame"
                            textColor="primary"
                            buttons={[
                                <FontAwesomeIcon icon={faLink} />,
                                <FontAwesomeIcon icon={faStar} />,
                            ]}
                        />
                    </SideSection>
                </SideSection>
            )}
            {props.showGitlab && (
                <SideSection
                    headerItem={
                        <SidePanelItem
                            text="GitLab"
                            fontSize="bigger"
                            buttons={[<FontAwesomeIcon icon={faUserPlus} />]}
                        />
                    }
                ></SideSection>
            )}
        </AccountContainer>
    );
};

export default Accounts;
