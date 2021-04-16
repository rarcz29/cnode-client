import axios from 'axios';
import API_URLS from 'constants/apiUrls';
import LOCAL_STORAGE from 'constants/localStorage';

export const login = async (username: string, password: string) => {
    return await axios
        .post(API_URLS.AUTH.LOGIN, { username, password })
        .then((response) => {
            if (response.data.token) {
                const userData = {
                    token: response.data.token,
                    refreshToken: 'asdfasdf',
                };

                localStorage.setItem(
                    LOCAL_STORAGE.USER_DATA_NAME,
                    JSON.stringify(userData)
                );
            }

            return response.data;
        });
};

export const register = async (
    username: string,
    email: string,
    password: string
) => {
    return await axios.post(API_URLS.AUTH.REGISTER, {
        username,
        email,
        password,
    });
};

export const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE.USER_DATA_NAME);
};
