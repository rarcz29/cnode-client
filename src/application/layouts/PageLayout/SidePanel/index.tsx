import React from 'react';
import { Aside } from './style';

export const SidePanel: React.FC = ({ children }) => {
  return (
    <Aside>
      {children}
    </Aside>
  );
};
