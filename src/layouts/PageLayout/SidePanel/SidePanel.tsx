import React from 'react';
import { Aside, StyleProps } from './SidePanel.style';

interface SidePanelProps extends StyleProps {}

const SidePanel : React.FC<SidePanelProps> = ({ width, children }) => {
  return (
    <Aside width={width}>
      {children}
    </Aside>
  );
};

export default SidePanel;

