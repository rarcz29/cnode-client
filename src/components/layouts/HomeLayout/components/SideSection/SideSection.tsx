import React from 'react';
import SideSectionProps from './props';
import { Content, StyledSection } from './styles';

const SideSection: React.FC<SideSectionProps> = ({
    header,
    type,
    children,
    icons,
}) => {
    return (
        <StyledSection type={type}>
            <header>
                <h1>{header}</h1>
                <div>{icons}</div>
            </header>
            <Content>{children}</Content>
        </StyledSection>
    );
};

export default SideSection;
