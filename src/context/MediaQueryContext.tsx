import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMediaQuery } from 'hooks';
import { ThemeContext } from 'styled-components';

interface ProviderProps {
  children: React.ReactNode;
}

interface MediaQueryContent {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
  isWideScreen: boolean;
  mobileMax: boolean;
  tabletMax: boolean;
  laptopMax: boolean;
  desktopMax: boolean;
  tabletMin: boolean;
  laptopMin: boolean;
  desktopMin: boolean;
  wideScreenMin: boolean;
}

export const MediaQueryContext = createContext<MediaQueryContent>({
  isMobile: false,
  isTablet: false,
  isLaptop: false,
  isDesktop: false,
  isWideScreen: false,
  mobileMax: false,
  tabletMax: false,
  laptopMax: false,
  desktopMax: false,
  tabletMin: false,
  laptopMin: false,
  desktopMin: false,
  wideScreenMin: false,
});

export const MediaQueryProvider: React.FC<ProviderProps> = ({ children }) => {
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
