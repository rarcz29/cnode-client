import axios from 'axiosConfig';
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

        const res = await axios.post(API_URLS.LOGIN, {
            usernameOrEmail,
            password,
        });

        const tokens = {
            token: res.data.token,
            refreshToken: res.data.refreshToken,
        };

        localStorage.setItem(
            LOCAL_STORAGE.USER_DATA_NAME,
            JSON.stringify(tokens)
        );

        const userData = JSON.parse(atob(res.data.token.split('.')[1]));

        dispatch({
            type: AuthActionTypes.LOGIN_SUCCESS,
            payload: {
                username: userData.username,
                email: userData.email,
                token: res.data.token,
                refreshToken: res.data.refreshToken,
            },
        });
    } catch (e) {
        dispatch({
            type: AuthActionTypes.LOGIN_FAIL,
        });
    }
};

interface IState {}

export const refresh = () => async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
        dispatch({
            type: AuthActionTypes.LOADING,
        });

        const dataStr = localStorage.getItem(LOCAL_STORAGE.USER_DATA_NAME);
        const { token, refreshToken } = dataStr
            ? JSON.parse(dataStr)
            : undefined;

        if (token && refreshToken) {
            const res = await axios.post(API_URLS.REFRESH, {
                token,
                refreshToken,
            });

            const newTokens = {
                token: res.data.token,
                refreshToken: res.data.refreshToken,
            };

            localStorage.setItem(
                LOCAL_STORAGE.USER_DATA_NAME,
                JSON.stringify(newTokens)
            );

            dispatch({
                type: AuthActionTypes.REFRESH_SUCCESS,
                payload: {
                    ...newTokens,
                },
            });

            console.log(2); // TODO: remove
        } else {
            // TODO: refactor
            dispatch({
                type: AuthActionTypes.REFRESH_FAIL,
            });
        }
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
