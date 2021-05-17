import { AuthActionTypes, AuthDispatchTypes } from 'actions/authActionTypes';
import LOCAL_STORAGE from 'constants/localStorage';

interface IDefaultState {
  loading: boolean;
  isLoggedIn: boolean;
  success: boolean;
  username?: string;
  email?: string;
  token?: string;
  refreshToken?: string;
}

const initialState: IDefaultState = {
  loading: false,
  isLoggedIn: false,
  success: true,
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
      };
    case AuthActionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...action.payload,
        loading: false,
        isLoggedIn: true,
        success: true,
      };
    case AuthActionTypes.REFRESH_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case AuthActionTypes.REFRESH_FAIL:
    case AuthActionTypes.REGISTER_FAIL:
    case AuthActionTypes.LOGIN_FAIL:
      return {
        ...initialState,
        success: false,
      };
    case AuthActionTypes.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
