import React from 'react';
import { Outlet } from 'react-router';
import { LayoutContainer, Main } from './MainLayout.style';
import SidePanel from './SidePanel/SidePanel';

interface MainLayoutProps {}

const MainLayout : React.FC<MainLayoutProps> = () => {
  return (
    <LayoutContainer>
      <SidePanel width="180px">
        <h1>asdf</h1>
      </SidePanel>
      <Main>
        <Outlet />
      </Main>
      <SidePanel width="324px">
        <h1>asdf</h1>
      </SidePanel>
    </LayoutContainer>
  );
};

export default MainLayout;
