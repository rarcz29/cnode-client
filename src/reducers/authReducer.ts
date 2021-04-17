import { AuthActionTypes, AuthDispatchTypes } from 'actions/authActionTypes';

interface IDefaultState {
    loading: boolean;
    isLoggedIn: boolean;
    userId?: number;
    username?: string;
    email?: string;
    token?: string;
    refreshToken?: string;
}

const initialState: IDefaultState = {
    loading: false,
    isLoggedIn: false,
};

const authReducer = (
    state: IDefaultState = initialState,
    action: AuthDispatchTypes
): IDefaultState => {
    switch (action.type) {
        case AuthActionTypes.LOADING:
            return {
                ...state,
                loading: true,
                isLoggedIn: false,
            };
        case AuthActionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
            };
        case AuthActionTypes.REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
            };
        case AuthActionTypes.LOGIN_SUCCESS:
            return {
                ...action.payload,
                loading: false,
                isLoggedIn: true,
            };
        case AuthActionTypes.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
            };
        case AuthActionTypes.LOGOUT:
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
