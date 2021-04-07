import { faExclamation } from '@fortawesome/free-solid-svg-icons';
import { TreeFontAwesomeIcon } from 'components/layouts/PanelLayout/styles';
import React from 'react';
import { StyledPageHeader, StyledSection } from 'styles/commonStyles';
import { Link, OrderedList, UnorderedList, Warning } from './styles';

const HomeView = () => {
    return (
        <>
            <StyledPageHeader>
                <h1>Get started</h1>
                <p>
                    Connect your GitHub, Bitbucket and GitLab accounts to manage
                    them from one place.
                </p>
                <Warning>
                    <TreeFontAwesomeIcon icon={faExclamation} />
                    <span>
                        Remember that you’re allowed to have only one free
                        account of each platform.
                    </span>
                </Warning>
            </StyledPageHeader>
            <StyledSection>
                <h1>Instructions</h1>
                <p>
                    <OrderedList>
                        <li>
                            Open one of the following instructions:
                            <UnorderedList>
                                <li>
                                    <Link href="#">GitHub</Link>
                                </li>
                                <li>
                                    <Link href="#">Bitbucket</Link>
                                </li>
                                <li>
                                    <Link href="#">GitLab</Link>
                                </li>
                            </UnorderedList>
                        </li>
                        <li>
                            Select a platform from the panel on the bottom right
                            corner, insert a username and click the button
                            “Connect”.
                        </li>
                        <li>
                            If your account is connected successfuly, click the
                            “New” button from the left panel.
                        </li>
                        <li>
                            Fill in the form and create your first repository.
                        </li>
                    </OrderedList>
                </p>
            </StyledSection>
        </>
    );
};

export default HomeView;
