import axios from 'axios';
import API_URLS from 'constants/apiUrls';

export const login = (username: string, password: string) => {
    return axios
        .post(API_URLS.AUTH.LOGIN, { username, password })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
};

export const register = (username: string, email: string, password: string) => {
    return axios.post(API_URLS.AUTH.REGISTER, {
        username,
        email,
        password,
    });
};

export const logout = () => {
    localStorage.removeItem('user');
};
