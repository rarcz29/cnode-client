import React from 'react';
import { useContext } from 'react';
import { IconLink, List } from 'components';
import { MediaQueryContext } from 'context/MediaQueryContext';
import { Outlet } from 'react-router';
import { LayoutContainer, Main } from './PageLayout.style';
import SidePanel from './SidePanel';

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

const PageLayout: React.FC<PageLayoutProps> = () => {
  const { laptopMin, desktopMin } = useContext(MediaQueryContext);

  const renderLeftPanel = () => {
    return (
      <SidePanel width="180px">
        <List
          render={navItems.map(item =>
            <IconLink key={item.text} icon="x" text={item.text} to="#" />)}
          direction="column"
        />
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
      {laptopMin && renderLeftPanel()}
      <Main>
        <Outlet />
      </Main>
      {desktopMin && renderRightPanel()}
    </LayoutContainer>
  );
};

export default PageLayout;
