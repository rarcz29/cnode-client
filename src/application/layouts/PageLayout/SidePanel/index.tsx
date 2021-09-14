import React from 'react';
import { Aside, StyleProps } from './style';

interface SidePanelProps extends StyleProps {}

export const SidePanel: React.FC<SidePanelProps> = ({ width, children }) => {
  return (
    <Aside width={width}>
      {children}
    </Aside>
  );
};
