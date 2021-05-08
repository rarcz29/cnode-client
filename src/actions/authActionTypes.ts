export enum AuthActionTypes {
    LOADING,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REFRESH_SUCCESS,
    REFRESH_FAIL,
    LOGOUT,
}

export interface IAuthLoading {
    type: typeof AuthActionTypes.LOADING;
}

export interface IRegisterSuccess {
    type: typeof AuthActionTypes.REGISTER_SUCCESS;
}

export interface IRegisterFail {
    type: typeof AuthActionTypes.REGISTER_FAIL;
}

export interface ILoginSuccess {
    type: typeof AuthActionTypes.LOGIN_SUCCESS;
    payload: {
        token: string;
        refreshToken: string;
    };
}

export interface ILoginFail {
    type: typeof AuthActionTypes.LOGIN_FAIL;
}

export interface IRefreshSuccess {
    type: typeof AuthActionTypes.REFRESH_SUCCESS;
    payload: {
        token: string;
        refreshToken: string;
    };
}

export interface IRefreshFail {
    type: typeof AuthActionTypes.REFRESH_FAIL;
}

export interface ILogout {
    type: typeof AuthActionTypes.LOGOUT;
}

export type AuthDispatchTypes =
    | IAuthLoading
    | IRegisterSuccess
    | IRegisterFail
    | ILoginSuccess
    | ILoginFail
    | IRefreshSuccess
    | IRefreshFail
    | ILogout;
