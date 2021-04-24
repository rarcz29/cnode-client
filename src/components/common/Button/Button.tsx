import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import React from 'react';
import { useNavigate } from 'react-router';
import styled, { css } from 'styled-components';

type Props = {
    size?: 'medium' | 'big';
    color?: 'primary' | 'secondary';
    form?: any;
    to?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
};

const handleFontSize = (size?: string): string => {
    switch (size) {
        case 'big':
            return '1.125rem';
        case 'medium':
        default:
            return '0.875rem';
    }
};

const handleColor = (color?: string): string => {
    switch (color) {
        case 'secondary':
            return COLORS.BUTTONS.GREEN.MAIN;
        case 'primary':
        default:
            return COLORS.MAIN_COLOR;
    }
};

const StyledButton = styled.button<Props>`
    padding: 0.625rem 2.375rem;
    position: relative;
    font-size: ${(props: Props) => handleFontSize(props.size)};
    border: none;
    background: none;
    outline: none;
    color: ${(props: Props) => handleColor(props.color)};
    mix-blend-mode: screen;
    transition: color ease-in-out ${TRANSITIONS.FAST}ms;

    ${(props: Props) =>
        props.disabled !== true &&
        css`
            &:hover {
                color: black;
                cursor: pointer;

                &::before {
                    background: ${(props: Props) => handleColor(props.color)};
                }
            }
        `}

    &::before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: 100vh;
        border: 1px solid ${(props: Props) => handleColor(props.color)};
        background: transparent;
        content: '';
        mix-blend-mode: color-burn;
        transition: background ease-in-out ${TRANSITIONS.FAST}ms;
    }
`;

const Button: React.FC<Props> = ({ to, onClick, ...others }) => {
    const navigate = useNavigate();

    const handleRedirection = () => {
        to && navigate(to);
    };

    return (
        <StyledButton {...others} onClick={to ? handleRedirection : onClick} />
    );
};

export default Button;
