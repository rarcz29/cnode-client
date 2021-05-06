import {
    GithubActionTypes,
    GithubDispatchTypes,
} from 'actions/githubActionTypes';
import { IDefaultPlatformState, initialPlatformState } from './common';

const githubReducer = (
    state: IDefaultPlatformState = initialPlatformState,
    action: GithubDispatchTypes
): IDefaultPlatformState => {
    switch (action.type) {
        case GithubActionTypes.LOADING:
            return {
                ...state,
                loading: true,
            };
        case GithubActionTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoaded: true,
                accounts: action.payload,
            };
        case GithubActionTypes.LOAD_FAIL:
        case GithubActionTypes.REMOVE:
            return {
                ...initialPlatformState,
            };
        default:
            return state;
    }
};

export default githubReducer;
