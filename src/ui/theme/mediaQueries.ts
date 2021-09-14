const MOBILE_MAX = '(max-width: 480.98px)';
const TABLET_MAX = '(max-width: 768.98px)';
const LAPTOP_MAX = '(max-width: 1024.98px)';
const DESKTOP_MAX = '(max-width: 1920.98px)';

const TABLET_MIN = '(min-width: 481px)';
const LAPTOP_MIN = '(min-width: 769px)';
const DESKTOP_MIN = '(min-width: 1025px)';
const WIDE_SCREEN_MIN = '(min-width: 1921px)';

const mediaQueries = {
  mobileMax: MOBILE_MAX,
  tabletMax: TABLET_MAX,
  laptopMax: LAPTOP_MAX,
  desktopMax: DESKTOP_MAX,
  tabletMin: TABLET_MIN,
  laptopMin: LAPTOP_MIN,
  desktopMin: DESKTOP_MIN,
  wideScreenMin: WIDE_SCREEN_MIN,
  mobile: MOBILE_MAX,
  tablet: `${TABLET_MIN} and ${TABLET_MAX}`,
  laptop: `${LAPTOP_MIN} and ${LAPTOP_MAX}`,
  desktop: `${DESKTOP_MIN} and ${DESKTOP_MAX}`,
  wideScreen: WIDE_SCREEN_MIN,
};

export default mediaQueries;
