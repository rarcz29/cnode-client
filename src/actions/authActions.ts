import axios from 'axios';
import API_URLS from 'constants/apiUrls';
import LOCAL_STORAGE from 'constants/localStorage';
import { Dispatch } from 'redux';
import { AuthActionTypes, AuthDispatchTypes } from './authActionTypes';

export const register = (
    username: string,
    email: string,
    password: string
) => async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
        dispatch({
            type: AuthActionTypes.LOADING,
        });

        await axios.post(API_URLS.REGISTER, {
            username,
            email,
            password,
        });

        dispatch({
            type: AuthActionTypes.REGISTER_SUCCESS,
        });
    } catch (e) {
        dispatch({
            type: AuthActionTypes.REGISTER_FAIL,
        });
    }
};

export const login = (usernameOrEmail: string, password: string) => async (
    dispatch: Dispatch<AuthDispatchTypes>
) => {
    try {
        dispatch({
            type: AuthActionTypes.LOADING,
        });

        const res = await axios
            .post(API_URLS.LOGIN, { usernameOrEmail, password })
            .then((response) => {
                if (response.data.token) {
                    const userData = {
                        token: response.data.token,
                        refreshToken: response.data.refreshToken,
                    };

                    localStorage.setItem(
                        LOCAL_STORAGE.USER_DATA_NAME,
                        JSON.stringify(userData)
                    );
                }

                return response.data;
            });

        const userData = JSON.parse(atob(res.token.split('.')[1]));

        dispatch({
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload: {
                username: userData.token.username,
                email: userData.token.email,
                token: res.token,
                refreshToken: res.refreshToken,
            },
        });
    } catch (e) {
        dispatch({
            type: AuthActionTypes.LOGIN_FAIL,
        });
    }
};

export const logout = () => (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch({
        type: AuthActionTypes.LOADING,
    });

    localStorage.removeItem(LOCAL_STORAGE.USER_DATA_NAME);

    dispatch({
        type: AuthActionTypes.LOGOUT,
    });
};
