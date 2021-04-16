const BASE_API = 'https://localhost:xxxx/api/';

const BASE_AUTH = 'auth/';

const BASE_AUTH_FULL = BASE_API + BASE_AUTH;

const AUTH = {
    LOGIN: BASE_AUTH_FULL + 'login',
    REGISTER: BASE_AUTH_FULL + 'login',
};

const API_URLS = {
    AUTH,
};

export default API_URLS;
