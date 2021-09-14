import { createContext } from 'react';

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
