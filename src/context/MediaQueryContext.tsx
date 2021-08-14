import React, { createContext, useContext } from 'react';
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
}

export const MediaQueryContext = createContext<MediaQueryContent>({
  isMobile: false,
  isTablet: false,
  isLaptop: false,
  isDesktop: false,
  isWideScreen: false,
});

export const MediaQueryProvider: React.FC<ProviderProps> = ({ children }) => {
  const theme = useContext(ThemeContext);
  const isMobile = useMediaQuery(theme.mediaQueries.mobile);
  const isTablet = useMediaQuery(theme.mediaQueries.tablet);
  const isLaptop = useMediaQuery(theme.mediaQueries.laptop);
  const isDesktop = useMediaQuery(theme.mediaQueries.desktop);
  const isWideScreen = useMediaQuery(theme.mediaQueries.wideScreen);

  return (
    <MediaQueryContext.Provider
      value={{ isMobile, isTablet, isLaptop, isDesktop, isWideScreen }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};
