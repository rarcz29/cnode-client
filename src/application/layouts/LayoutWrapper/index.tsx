import React from 'react';
import { StyledLayoutWrapper } from './style';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      {children}
    </StyledLayoutWrapper>
  );
};

export default LayoutWrapper;
