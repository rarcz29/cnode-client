const SIZE = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopM: '1250px',
    laptopL: '1440px',
    desktop: '2560px',
};

export const BREAKPOINTS = {
    mobileS: `(min-width: ${SIZE.mobileS})`,
    mobileM: `(min-width: ${SIZE.mobileM})`,
    mobileL: `(min-width: ${SIZE.mobileL})`,
    tablet: `(min-width: ${SIZE.tablet})`,
    laptop: `(min-width: ${SIZE.laptop})`,
    laptopM: `(min-width: ${SIZE.laptopM})`,
    laptopL: `(min-width: ${SIZE.laptopL})`,
    desktop: `(min-width: ${SIZE.desktop})`,
    desktopL: `(min-width: ${SIZE.desktop})`,
};

export const BREAKPOINTS_MQ = {
    mobileS: `(max-width: ${SIZE.mobileS})`,
    mobileM: `(max-width: ${SIZE.mobileM})`,
    mobileL: `(max-width: ${SIZE.mobileL})`,
    tablet: `(max-width: ${SIZE.tablet})`,
    laptop: `(max-width: ${SIZE.laptop})`,
    laptopM: `(max-width: ${SIZE.laptopM})`,
    laptopL: `(max-width: ${SIZE.laptopL})`,
    desktop: `(max-width: ${SIZE.desktop})`,
    desktopL: `(max-width: ${SIZE.desktop})`,
};
