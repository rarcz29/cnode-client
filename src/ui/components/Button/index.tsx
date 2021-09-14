import React from 'react';
import { StyledButton } from './style';

export const Button: React.FC = ({ children }) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  );
};
