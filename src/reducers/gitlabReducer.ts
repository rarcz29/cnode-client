import {
  GitlabActionTypes,
  GitlabDispatchTypes,
} from 'actions/gitlabActionTypes';
import { IDefaultPlatformState, initialPlatformState } from './common';

const gitlabReducer = (
  state: IDefaultPlatformState = initialPlatformState,
  action: GitlabDispatchTypes
): IDefaultPlatformState => {
  switch (action.type) {
    case GitlabActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case GitlabActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        accounts: action.payload,
      };
    case GitlabActionTypes.LOAD_FAIL:
    case GitlabActionTypes.REMOVE:
      return {
        ...initialPlatformState,
      };
    default:
      return state;
  }
};

export default gitlabReducer;
