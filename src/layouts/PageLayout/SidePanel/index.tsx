import React from 'react';
import { Aside } from './style';

interface SidePanelProps {
  children?: React.ReactNode;
}

const SidePanel: React.FC<SidePanelProps> = ({ children }) => {
  return (
    <Aside>
      {children}
    </Aside>
  );
};

export default SidePanel;
