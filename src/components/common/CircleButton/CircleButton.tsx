import TRANSITIONS from 'constants/transitions';
import React from 'react';
import styled from 'styled-components';

type Props = {
    size?: string;
    fontSize?: string;
    checked?: boolean;
    backgroundColor?: string;
    highlightColor?: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button<Props>`
    width: ${(props: Props) => props.size || '1.75rem'};
    height: ${(props: Props) => props.size || '1.75rem'};
    font-size: ${(props: Props) => props.fontSize || '1.5rem'};
    background-color: ${(props: Props) =>
        props.backgroundColor || 'transparent'};
    color: ${(props: Props) => props.color || 'white'};
    border-width: 0;
    border-radius: 50%;
    transition: background-color ease-in-out ${TRANSITIONS.FAST}ms;

    &:hover {
        cursor: pointer;
        background-color: ${(props: Props) =>
            props.highlightColor || props.backgroundColor || 'transparent'};
    }

    & > div {
        opacity: ${(props: Props) =>
            props.checked ? '1' : props.checked === undefined ? '1' : '0.3'};
        transition: opacity ease-in-out ${TRANSITIONS.FAST}ms;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CircleButton: React.FC<Props> = ({ children, ...other }) => {
    return (
        <StyledButton {...other}>
            <Content>{children}</Content>
        </StyledButton>
    );
};

export default CircleButton;
