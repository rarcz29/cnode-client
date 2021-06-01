const CLIENT_ID = {
  GITHUB: '008d4433666f7d02672d',
  BITBUCKET: 'GNKnwGaKGC98aLns65',
  GITLAB: '51ac13816c0fecaa2938f1b239e7d49d463df7f0e5246c8bb297a61d87ada113',
};

const URL = {
  GITHUB: `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID.GITHUB}&scope=repo`,
  BITBUCKET: `https://id.atlassian.com/login/select-account?application=bitbucket&continue=https%3A%2F%2Fbitbucket.org%2Faccount%2Fsignin%2F%3FredirectCount%3D1%26next%3D%252Fsite%252Foauth2%252Fauthorize%253Fclient_id%253D${CLIENT_ID.BITBUCKET}%2526response_type%253Dcode`,
  GITLAB: `https://gitlab.com/oauth/authorize?response_type=code&redirect_uri=https://localhost:3000&client_id=${CLIENT_ID.GITLAB}`,
};

const PLATFORMS = {
  CLIENT_ID,
  URL,
};

export default PLATFORMS;
