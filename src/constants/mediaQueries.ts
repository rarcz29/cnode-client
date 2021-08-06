const mobileMax = '(max-width: 480.98px)';
const tabletMax = '(max-width: 768.98px)';
const laptopMax = '(max-width: 1024.98px)';
const desktopMax = '(max-width: 1920.98px)';

const tabletMin = '(min-width: 481px)';
const laptopMin = '(min-width: 769px)';
const desktopMin = '(min-width: 1025px)';
const wideScreenMin = '(min-width: 1921px)';

const mobile = mobileMax;
const tablet = `${tabletMin} and ${tabletMax}`;
const laptop = `${laptopMin} and ${laptopMax}`;
const desktop = `${desktopMin} and ${desktopMax}`;
const wideScreen = wideScreenMin;

const MEDIA_QUERIES = {
  mobileMax,
  tabletMax,
  laptopMax,
  tabletMin,
  laptopMin,
  desktopMin,
  wideScreenMin,
  mobile,
  tablet,
  laptop,
  desktop,
  wideScreen,
};

export default MEDIA_QUERIES;
