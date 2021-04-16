import axios from 'axios';
import API_URLS from 'constants/apiUrls';
import LOCAL_STORAGE from 'constants/localStorage';
import { Dispatch } from 'redux';
import {
    AuthActionTypes,
    LoginDispatchTypes,
    LogoutDispatchTypes,
    RegisterDispatchTypes,
} from './authActionTypes';

export const register = (
    username: string,
    email: string,
    password: string
) => async (dispatch: Dispatch<RegisterDispatchTypes>) => {
    try {
        dispatch({
            type: AuthActionTypes.LOADING,
        });

        await axios.post(API_URLS.AUTH.REGISTER, {
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

export const loginAction = (
    usernameOrEmail: string,
    password: string
) => async (dispatch: Dispatch<LoginDispatchTypes>) => {
    try {
        dispatch({
            type: AuthActionTypes.LOADING,
        });

        const res = await axios
            .post(API_URLS.AUTH.LOGIN, { usernameOrEmail, password })
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

        dispatch({
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload: {
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

export const logoutAction = () => (dispatch: Dispatch<LogoutDispatchTypes>) => {
    dispatch({
        type: AuthActionTypes.LOADING,
    });

    localStorage.removeItem(LOCAL_STORAGE.USER_DATA_NAME);

    dispatch({
        type: AuthActionTypes.LOGOUT,
    });
};
