import Logo from 'components/Logo';
import React from 'react';
import { Header, Link, List, ListElement, RightSideContainer } from './style';

const TopBar = ({ className }) => {
    return (
        <Header className={className}>
            <Logo />
            <RightSideContainer>
                <nav>
                    <List>
                        <ListElement>
                            <Link href="#">Home</Link>
                        </ListElement>
                        <ListElement>
                            <Link href="#">Community</Link>
                        </ListElement>
                        <ListElement>
                            <Link href="#">About</Link>
                        </ListElement>
                    </List>
                </nav>
            </RightSideContainer>
        </Header>
    );
};

export default TopBar;
