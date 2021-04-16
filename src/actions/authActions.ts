import { Dispatch } from 'redux';
import authService from 'services/authService';
import { AuthActionTypes, MessageActionTypes } from './actionTypes';

export const registerAction = (
    username: string,
    email: string,
    password: string
) => (dispatch: Dispatch) => {
    return authService.register(username, email, password).then(
        (response) => {
            dispatch({
                type: AuthActionTypes.REGISTER_SUCCESS,
            });

            dispatch({
                type: MessageActionTypes.SET_MESSAGE,
                payload: response.data.message,
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: AuthActionTypes.REGISTER_FAIL,
            });

            dispatch({
                type: MessageActionTypes.SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const loginAction = (username: string, password: string) => (
    dispatch: Dispatch
) => {
    return authService.login(username, password).then(
        (data) => {
            dispatch({
                type: AuthActionTypes.LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: AuthActionTypes.LOGIN_FAIL,
            });

            dispatch({
                type: MessageActionTypes.SET_MESSAGE,
                payload: message,
            });

            return Promise.reject();
        }
    );
};

export const logoutAction = () => (dispatch: Dispatch) => {
    authService.logout();

    dispatch({
        type: AuthActionTypes.LOGOUT,
    });
};
