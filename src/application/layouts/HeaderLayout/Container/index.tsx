import React from 'react';
import { Wrapper } from './style';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};
