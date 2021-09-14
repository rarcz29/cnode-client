import React, { useContext, useEffect, useState } from 'react';
import { MediaQueryContext, useMediaQuery } from 'infrastructure/mediaQuery';
import { ThemeContext } from 'styled-components';

export const MediaQueryProvider: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);
  const isMobile = useMediaQuery(theme.mediaQueries.mobile);
  const isTablet = useMediaQuery(theme.mediaQueries.tablet);
  const isLaptop = useMediaQuery(theme.mediaQueries.laptop);
  const isDesktop = useMediaQuery(theme.mediaQueries.desktop);
  const isWideScreen = useMediaQuery(theme.mediaQueries.wideScreen);
  const [mobileMax, setMobileMax] = useState(false);
  const [tabletMax, setTabletMax] = useState(false);
  const [laptopMax, setLaptopMax] = useState(false);
  const [desktopMax, setDesktopMax] = useState(false);
  const [tabletMin, setTabletMin] = useState(false);
  const [laptopMin, setLaptopMin] = useState(false);
  const [desktopMin, setDesktopMin] = useState(false);
  const [wideScreenMin, setWideScreenMin] = useState(false);

  useEffect(() => {
    setMobileMax(isMobile);
    setTabletMax(isMobile || isTablet);
    setLaptopMax(isMobile || isTablet || isLaptop);
    setDesktopMax(isMobile || isTablet || isLaptop || isDesktop);
    setTabletMin(!isMobile);
    setLaptopMin(!isMobile && !isTablet);
    setDesktopMin(!isMobile && !isTablet && !isLaptop);
    setWideScreenMin(!isMobile && !isTablet && !isLaptop && !isDesktop);
  }, [isMobile, isTablet, isLaptop, isDesktop, isWideScreen]);

  return (
    <MediaQueryContext.Provider
      value={{
        isMobile,
        isTablet,
        isLaptop,
        isDesktop,
        isWideScreen,
        mobileMax,
        tabletMax,
        laptopMax,
        desktopMax,
        tabletMin,
        laptopMin,
        desktopMin,
        wideScreenMin,
      }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};
