const mobileMax = '(max-width: 480.98px)';
const tabletMax = '(max-width: 768.98px)';
const laptopMax = '(max-width: 1024.98px)';

const tabletMin = '(min-width: 481px)';
const laptopMin = '(min-width: 769px)';
const desktopMin = '(min-width: 1025px)';

const mobile = mobileMax;
const tablet = `${tabletMin} and ${tabletMax}`;
const laptop = `${laptopMin} and ${laptopMax}`;
const desktop = desktopMin;

const MEDIA_QUERIES = {
  mobileMax,
  tabletMax,
  laptopMax,
  tabletMin,
  laptopMin,
  desktopMin,
  mobile,
  tablet,
  laptop,
  desktop,
};

export default MEDIA_QUERIES;
