import axios from 'axios';
import API_URLS from 'constants/apiUrls';

class AuthService {
    login = (username: string, password: string) => {
        return axios
            .post(API_URLS.AUTH.LOGIN, { username, password })
            .then((response) => {
                if (response.data.token) {
                    localStorage.setItem(
                        'token',
                        JSON.stringify(response.data.token)
                    );
                }

                return response.data;
            });
    };

    register = (username: string, email: string, password: string) => {
        return axios.post(API_URLS.AUTH.REGISTER, {
            username,
            email,
            password,
        });
    };

    logout = () => {
        localStorage.removeItem('user');
    };
}

export default new AuthService();
