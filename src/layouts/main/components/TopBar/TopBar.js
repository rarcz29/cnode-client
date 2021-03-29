import Logo from 'components/Logo';
import React from 'react';
import {
    Header,
    Link,
    List,
    ListElement,
    RightSideContainer,
    StyledAvatar,
} from './style';

const TopBar = ({ className }) => {
    return (
        <Header className={className}>
            <Logo height="50%" />
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
                <StyledAvatar></StyledAvatar>
            </RightSideContainer>
        </Header>
    );
};

export default TopBar;
