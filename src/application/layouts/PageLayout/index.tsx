import React from 'react';
import { useContext } from 'react';
import { ContactsView } from 'application/views/ContactsView';
import { MediaQueryContext } from 'infrastructure/mediaQuery';
import { Outlet } from 'react-router';
import { Button, IconLink } from 'ui/components';
import { navbarItems } from './navbarItems';
import { Separator } from './Separator';
import { SidePanel } from './SidePanel';
import {
  FeedbackSection,
  LayoutContainer,
  Main,
  StyledList,
} from './style';

export const PageLayout: React.FC = () => {
  const { laptopMin, desktopMin } = useContext(MediaQueryContext);

  const renderLeftPanel = () => {
    return (
      <SidePanel>
        <section>
          <nav>
            <StyledList
              render={navbarItems.map(item =>
                <IconLink
                  key={item.text}
                  icon={item.icon}
                  text={item.text}
                  to={item.url}
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
      <SidePanel>
        <ContactsView />
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
