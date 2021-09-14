import React from 'react';
import { useContext } from 'react';
import {
  faHome,
  faProjectDiagram,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { MediaQueryContext } from 'infrastructure/mediaQuery/MediaQueryContext';
import { Outlet } from 'react-router';
import { IconLink } from 'ui/components';
import Button from 'ui/components/Button';
import Separator from './Separator';
import SidePanel from './SidePanel';
import {
  FeedbackSection,
  LayoutContainer,
  Main,
  StyledList,
} from './style';

interface PageLayoutProps {}

const navItems = [
  {
    text: 'Home',
    icon: faHome,
  },
  {
    text: 'Accounts',
    icon: faProjectDiagram,
  },
  {
    text: 'Repositories',
    icon: faProjectDiagram,
  },
  {
    text: 'Contacts',
    icon: faUsers,
  },
  {
    text: 'Teams',
    icon: faUsers,
  },
];

const PageLayout: React.FC<PageLayoutProps> = () => {
  const { laptopMin, desktopMin } = useContext(MediaQueryContext);

  const renderLeftPanel = () => {
    return (
      <SidePanel width="324px">
        <section>
          <nav>
            <StyledList
              render={navItems.map(item =>
                <IconLink
                  key={item.text}
                  icon={item.icon}
                  text={item.text}
                  to="#"
                />)}
              direction="column"
            />
          </nav>
        </section>
        <Separator />
        <FeedbackSection>
          <p>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit.
            Sed convallis sit amet ipsum eu accumsan.
          </p>
          <Button>Feedback</Button>
        </FeedbackSection>
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
