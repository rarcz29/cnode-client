const LOGIN = '/auth/login';
const REGISTER = '/auth/register';
const REFRESH = '/auth/refresh';
const USER = '/user';

// TODO: urls
// const LOAD_GITHUB = '/github';
// const LOAD_BITBUCKET = '';
// const LOAD_GITLAB = '';

// const GITHUB_NEW_REPO = '/github/repository';

const PLATFORMS = {
  github: {
    account: '/github',
    repo: '/github/repository',
  },
  bitbucket: {
    account: '/bitbucket',
    repo: '/bitbucket/repository',
  },
  gitlab: {
    account: '/gitlab',
    repo: '/gitlab/repository',
  },
};

const API_URLS = {
  USER,
  LOGIN,
  REGISTER,
  REFRESH,
  PLATFORMS,
  // LOAD_GITHUB,
  // LOAD_BITBUCKET,
  // LOAD_GITLAB,
  // GITHUB_NEW_REPO,
};

export default API_URLS;
