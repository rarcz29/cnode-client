import React from 'react';
import { useMediaQuery } from 'hooks';
import { Outlet } from 'react-router';
import { MEDIA_QUERIES } from '../../constants';
import { LayoutContainer, Main } from './MainLayout.style';
import SidePanel from './SidePanel/SidePanel';

interface MainLayoutProps {}

const MainLayout : React.FC<MainLayoutProps> = () => {
  const isLaptop = useMediaQuery(MEDIA_QUERIES.laptop);
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);

  const renderLeftPanel = () => {
    return (
      <SidePanel width="180px">
        <h1>asdf</h1>
      </SidePanel>
    );
  };

  const renderRightPanel = () => {
    return (
      <SidePanel width="324px">
        <h1>asdf</h1>
      </SidePanel>
    );
  };

  return (
    <LayoutContainer>
      {(isDesktop || isLaptop) && renderLeftPanel()}
      <Main>
        <Outlet />
      </Main>
      {isDesktop && renderRightPanel()}
    </LayoutContainer>
  );
};

export default MainLayout;
