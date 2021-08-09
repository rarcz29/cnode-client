import React from 'react';
import { IconLink } from 'components';
import { useMediaQuery } from 'hooks';
import { Outlet } from 'react-router';
import { MEDIA_QUERIES } from '../../constants';
import { LayoutContainer, Main } from './PageLayout.style';
import SidePanel from './SidePanel/SidePanel';

interface PageLayoutProps {}

const PageLayout : React.FC<PageLayoutProps> = () => {
  const isMinLaptop = useMediaQuery(MEDIA_QUERIES.laptopMin);
  const isMinDesktop = useMediaQuery(MEDIA_QUERIES.desktopMin);

  const renderLeftPanel = () => {
    return (
      <SidePanel width="180px">
        <IconLink icon="x" text="abcdef" to="#" />
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
      {isMinLaptop && renderLeftPanel()}
      <Main>
        <Outlet />
      </Main>
      {isMinDesktop && renderRightPanel()}
    </LayoutContainer>
  );
};

export default PageLayout;
