import React from 'react';
import { StyledButton } from './Button.style';

interface ButtonProps {
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};

export default Button;
