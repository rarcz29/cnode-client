import COLOUR from 'constants/colour';
import React from 'react';
import styled from 'styled-components';

type Props = {
  color?: 'primary' | 'secondary';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const StyledButton = styled.button<Props>`
  height: 28px;
  padding: 0 16px;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  font-size: 18px;
  border: none;
  background: none;
  outline: none;
  color: ${COLOUR.green};
  mix-blend-mode: screen;
  transition: color ease-in-out 200ms;
  cursor: pointer;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 3px;
    border: 1px solid ${COLOUR.green};
    background: transparent;
    content: '';
    mix-blend-mode: color-burn;
    transition: background ease-in-out 200ms;
  }

  span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:hover {
    color: black;

    &::before {
      background: ${COLOUR.green};
    }
  }

  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;

const handleClickEffect = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => {
  const button = event.currentTarget;
  const pos = button.getBoundingClientRect();

  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (pos.left + radius)}px`;
  circle.style.top = `${event.clientY - (pos.top + radius)}px`;
  circle.classList.add('ripple');

  const ripple = button.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
};

const Button: React.FC<Props> = ({ onClick, children, ...others }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    handleClickEffect(event);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <StyledButton {...others} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
