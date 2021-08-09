import React from 'react';
import { IconLink, List } from 'components';
import { useMediaQuery } from 'hooks';
import { Outlet } from 'react-router';
import { MARGINS, MEDIA_QUERIES } from '../../constants';
import { LayoutContainer, Main } from './PageLayout.style';
import SidePanel from './SidePanel/SidePanel';

interface PageLayoutProps {}

const navItems = [
  {
    text: 'asdf1',
  },
  {
    text: 'asdf2',
  },
  {
    text: 'asdf3',
  },
  {
    text: 'asdf4',
  },
  {
    text: 'asdf5',
  },
];

const PageLayout : React.FC<PageLayoutProps> = () => {
  const isMinLaptop = useMediaQuery(MEDIA_QUERIES.laptopMin);
  const isMinDesktop = useMediaQuery(MEDIA_QUERIES.desktopMin);

  const renderLeftPanel = () => {
    return (
      <SidePanel width="180px">
        <List
          render={navItems.map(item =>
            <IconLink key={item.text} icon="x" text={item.text} to="#" />)}
          direction="column"
          space={`${MARGINS.margin32}px`} />
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
