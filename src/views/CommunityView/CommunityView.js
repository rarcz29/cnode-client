import React from 'react';
import {
    Container,
    MarginedContainer,
    StyledHeader,
    StyledNav,
    StyledParagraph,
    Wrapper,
} from './styles';

const CommunityView = () => {
    return (
        <Container>
            <Wrapper>
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
