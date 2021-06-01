import React from 'react';
import { SideSectionProps } from './props';
import { Content, StyledSection } from './styles';

const SideSection: React.FC<SideSectionProps> = ({ children, headerItem }) => {
    return (
        <StyledSection>
            {headerItem}
            <Content>{children}</Content>
        </StyledSection>
    );
};

export default SideSection;
