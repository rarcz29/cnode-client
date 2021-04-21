import COLORS from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

type Props = {
    header: string;
    children?: React.ReactNode;
};

const StyledSection = styled.section`
    width: calc(100% - 2rem);
    margin: 1rem;
    margin-bottom: 1.5rem;

    & > header {
        font-size: 1.125rem;
        color: ${COLORS.FOREGROUND.DARKER};
        margin-bottom: 0.875rem;
    }
`;

const Content = styled.div`
    & > * {
        margin-bottom: 0.5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
`;

const SideSection: React.FC<Props> = ({ header, children }) => {
    return (
        <StyledSection>
            <header>{header}</header>
            <Content>{children}</Content>
        </StyledSection>
    );
};

export default SideSection;
