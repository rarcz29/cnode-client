import React from 'react';
import Typical from 'react-typical';
import {
    Container,
    MarginedContainer,
    StyledHeader,
    StyledNav,
    StyledParagraph,
    TypicalWrapper,
    Wrapper,
} from './styles';

const TYPICAL_DATA = [
    'Hi',
    2000,
    'My name is Raphael.',
    2000,
    `I'm the creator of this website.`,
    2000,
    'Pay me money for that.',
    2000,
];

const CommunityView = () => {
    return (
        <Container>
            <Wrapper>
                <MarginedContainer>
                    <TypicalWrapper>
                        <Typical
                            steps={TYPICAL_DATA}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </TypicalWrapper>
                </MarginedContainer>
                <main>
                    <StyledHeader>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                    </StyledHeader>
                    <MarginedContainer>
                        <StyledParagraph>
                            Find people, teams or projects you want to work
                            with. Connect accounts from: GitHub, Bitbucket and
                            GitLab. Create repositories and manage them from one
                            place.
                        </StyledParagraph>
                    </MarginedContainer>
                </main>
                <MarginedContainer>
                    <StyledNav>
                        <ul>
                            <li>Users</li>
                            <li>Teams</li>
                            <li>Projects</li>
                        </ul>
                    </StyledNav>
                </MarginedContainer>
            </Wrapper>
        </Container>
    );
};

export default CommunityView;
