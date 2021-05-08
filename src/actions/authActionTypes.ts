export enum AuthActionTypes {
    LOADING = 'AUTH_LOADING',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAIL = 'REGISTER_FAIL',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    LOGOUT = 'LOGOUT',
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

export interface ILogout {
    type: typeof AuthActionTypes.LOGOUT;
}

export type AuthDispatchTypes =
    | IAuthLoading
    | IRegisterSuccess
    | IRegisterFail
    | ILoginSuccess
    | ILoginFail
    | ILogout;
