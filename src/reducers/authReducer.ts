import { AuthActionTypes, AuthDispatchTypes } from 'actions/authActionTypes';
import LOCAL_STORAGE from 'constants/localStorage';

interface IDefaultState {
    loading: boolean;
    isLoggedIn: boolean;
    username?: string;
    email?: string;
    token?: string;
    refreshToken?: string;
}

const initialState: IDefaultState = {
    loading: false,
    isLoggedIn: false,
};

const loadStateFromLocalStorage = (): IDefaultState => {
    const dataStr = localStorage.getItem(LOCAL_STORAGE.USER_DATA_NAME);
    const data = dataStr ? JSON.parse(dataStr) : undefined;

    if (data) {
        const userData = JSON.parse(atob(data.token.split('.')[1]));
        return {
            ...data,
            ...userData,
            loading: false,
            isLoggedIn: true,
        };
    }

    return initialState;
};

const authReducer = (
    state: IDefaultState = loadStateFromLocalStorage(),
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
