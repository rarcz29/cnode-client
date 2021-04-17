const BASE_API = 'https://localhost:5001/api/v1/';

const BASE_AUTH = 'auth/';

const BASE_AUTH_FULL = BASE_API + BASE_AUTH;

const AUTH = {
    LOGIN: BASE_AUTH_FULL + 'login',
    REGISTER: BASE_AUTH_FULL + 'register',
};

const API_URLS = {
    AUTH,
};

export default API_URLS;
