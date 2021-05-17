import COLORS from 'constants/colors';
import TRANSITIONS from 'constants/transitions';
import React from 'react';
import { useNavigate } from 'react-router';
import styled, { css } from 'styled-components';

type Props = {
  size?: 'medium' | 'big' | 'max';
  color?: 'primary' | 'secondary';
  form?: any;
  to?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const handleFontSize = (size?: string): string => {
  switch (size) {
    case 'big':
      return '1.125rem';
    case 'medium':
    case 'max':
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
  width: ${(props: Props) => (props.size === 'max' ? '100%' : 'auto')};
  padding: 0.625rem 2.375rem;
  position: relative;
  overflow: hidden;
  border-radius: 100vh;
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

  & {
    span.ripple {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple 600ms linear;
      background-color: rgba(255, 255, 255, 0.5);
    }

    @keyframes ripple {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  }
`;

const handleClickEffect = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => {
  const button = event.currentTarget;
  const pos = button.getBoundingClientRect();

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (pos.left + radius)}px`;
  circle.style.top = `${event.clientY - (pos.top + radius)}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];
  ripple && ripple.remove();

  button.appendChild(circle);
};

const Button: React.FC<Props> = ({ to, onClick, ...others }) => {
  const navigate = useNavigate();

  const handleRedirection = () => {
    to && navigate(to);
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    handleClickEffect(event);
    to ? handleRedirection() : onClick && onClick(event);
  };

  return <StyledButton {...others} onClick={handleClick} />;
};

export default Button;
