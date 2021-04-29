import COLORS from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.section`
    width: 100%;
    border-radius: 1rem;
    padding: 1rem;
    border: 1px solid red;
`;

const Header = styled.header`
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
`;

const StyledParagraph = styled.p`
    color: ${COLORS.FOREGROUND.DARKER};
`;

const Info = () => {
    return (
        <InfoWrapper>
            <Header>You don’t have any connected accounts.</Header>
            <StyledParagraph>
                Use the panel from the bottom right corner to add an account
                from: GitHub, Bitbucket or GitLab
            </StyledParagraph>
        </InfoWrapper>
    );
};

export default Info;
