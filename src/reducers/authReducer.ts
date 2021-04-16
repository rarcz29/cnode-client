import { AuthActionTypes, AuthDispatchTypes } from 'actions/authActionTypes';

interface IDefaultState {
    loading: boolean;
    userId?: number;
    username?: string;
    email?: string;
    token?: string;
    refreshToken?: string;
}

const initialState: IDefaultState = {
    loading: false,
};

const authReducer = (
    state: IDefaultState = initialState,
    action: AuthDispatchTypes
): IDefaultState => {
    switch (action.type) {
        case AuthActionTypes.LOADING:
            return state;
        case AuthActionTypes.REGISTER_SUCCESS:
            return state;
        case AuthActionTypes.REGISTER_FAIL:
            return state;
        case AuthActionTypes.LOGIN_SUCCESS:
            return state;
        case AuthActionTypes.LOGIN_FAIL:
            return state;
        case AuthActionTypes.LOGOUT:
            return state;
    }

    return state;
};

export default authReducer;
