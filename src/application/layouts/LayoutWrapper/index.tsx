import React from 'react';
import { StyledLayoutWrapper } from './style';

export const LayoutWrapper: React.FC = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      {children}
    </StyledLayoutWrapper>
  );
};
