import React, { useMemo, useState } from 'react';
import { useContext } from 'react';
import { ContactsView } from 'application/views/ContactsView';
import { MediaQueryContext } from 'infrastructure/mediaQuery';
import { Outlet } from 'react-router';
import { Button, IconLink } from 'ui/components';
import { IconButton } from 'ui/components/IconLink';
import { NavbarItem, navbarItems } from './navbarItems';
import { Separator } from './Separator';
import { SidePanel } from './SidePanel';
import {
  FeedbackSection,
  LayoutContainer,
  Main,
  StyledList,
} from './style';

const selectComplexNavlinks = () => {
  return navbarItems
    .filter(item => item.type === 'tabletAndMobileOnly')
    .map(item => item.text);
};

export const PageLayout: React.FC = () => {
  const { laptopMin, desktopMin } = useContext(MediaQueryContext);
  const complexNavlinks = useMemo(selectComplexNavlinks, []);
  const [secondRouteName, setSecondRouteName] =
    useState<string | null>(complexNavlinks[0]);

  const setSecondRoutePath = (path: string) => {
    setSecondRouteName(complexNavlinks.find(item => item === path) ?? null);
  };

  const renderNavLinkOrButton = (navItem: NavbarItem) => {
    return navItem.type === 'tabletAndMobileOnly' && desktopMin
      ? (
        <IconButton
          icon={navItem.icon}
          text={navItem.text}
          onClick={() => setSecondRoutePath(navItem.text)}
        />
      ) : (
        <IconLink
          icon={navItem.icon}
          text={navItem.text}
          to={navItem.url}
        />
      );
  };

  const renderLeftPanel = () => {
    return (
      <SidePanel>
        <section>
          <nav>
            <StyledList
              render={navbarItems.map(item => renderNavLinkOrButton(item))}
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
    const viewSelector = () => {
      switch (secondRouteName?.toLowerCase()) {
        case 'contacts':
          return <ContactsView />;
        default:
          return null;
      }
    };

    return (
      <SidePanel>
        {viewSelector()}
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
