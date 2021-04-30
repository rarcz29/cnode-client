import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import React from 'react';
import styled from 'styled-components';

interface ILeftProps {
    fontSize?: 'normal' | 'bigger';
    textColor?: 'default' | 'primary' | 'secondary';
}

interface ISidePanelItemProps extends ILeftProps {
    icon?: React.ReactNode;
    text: string;
    buttons?: React.ReactNode[];
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover > div:last-child > * {
        opacity: 0.3;
    }
`;

const Left = styled.div<ILeftProps>`
    display: inherit;
    font-size: 1rem;

    & h1 {
        font-weight: normal;
        font-size: ${(props: ILeftProps) =>
            props.fontSize === 'bigger' ? '1.125rem' : '1rem'};
        color: ${(props: ILeftProps) => {
            switch (props.textColor) {
                case 'primary':
                    return COLORS.FOREGROUND.MAIN;
                case 'secondary':
                    return COLORS.MAIN_COLOR;
                case 'default':
                default:
                    return COLORS.FOREGROUND.DARKER;
            }
        }};
    }
`;

const Right = styled.div`
    display: flex;

    & > * {
        margin-right: 0.5rem;
        opacity: 0.1;
        transition: opacity ease-in-out ${TRANSITIONS.FAST}ms;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            cursor: pointer;
            opacity: 1 !important;
        }
    }
`;

const IconContainer = styled.div`
    width: 1.875rem;
`;

const SidePanelItem: React.FC<ISidePanelItemProps> = ({
    icon,
    text,
    buttons,
    ...leftProps
}) => {
    return (
        <Wrapper>
            <Left {...leftProps}>
                {icon && <IconContainer>{icon}</IconContainer>}
                <h1>{text}</h1>
            </Left>
            <Right>
                {buttons?.map((item, index) => (
                    <React.Fragment key={index}>{item}</React.Fragment>
                ))}
            </Right>
        </Wrapper>
    );
};

export default SidePanelItem;
