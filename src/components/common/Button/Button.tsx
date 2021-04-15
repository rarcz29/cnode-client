import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import React from 'react';
import styled from 'styled-components';

type Props = {
    fontSize?: string;
    width?: string;
    height?: string;
    color?: string;
};

const StyledButton = styled.button<Props>`
    width: ${(props: Props) => props.width};
    height: ${(props: Props) => props.height || '2.1875rem'};
    padding: ${(props: Props) => (props.width ? '0 0' : '0 2.375rem')};
    position: relative;
    font-size: ${(props: Props) => props.fontSize || '0.875rem'};
    border: none;
    background: none;
    outline: none;
    color: ${(props: Props) => props.color || COLORS.MAIN_COLOR};
    mix-blend-mode: screen;
    transition: color ease-in-out ${TRANSITIONS.FAST}ms;

    &:hover {
        color: black;
        cursor: pointer;

        &::before {
            background: ${(props: Props) => props.color || COLORS.MAIN_COLOR};
        }
    }

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 100vh;
        border: 1px solid ${(props: Props) => props.color || COLORS.MAIN_COLOR};
        background: transparent;
        content: '';
        mix-blend-mode: color-burn;
        transition: background ease-in-out ${TRANSITIONS.FAST}ms;
    }
`;

const Button: React.FC<Props> = (props) => {
    return <StyledButton {...props} />;
};

export default Button;
