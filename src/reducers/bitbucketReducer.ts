import {
    BitbucketActionTypes,
    BitbucketDispatchTypes,
} from 'actions/bitbucketActionTypes';
import { IDefaultPlatformState, initialPlatformState } from './common';

const bitbucketReducer = (
    state: IDefaultPlatformState = initialPlatformState,
    action: BitbucketDispatchTypes
): IDefaultPlatformState => {
    switch (action.type) {
        case BitbucketActionTypes.LOADING:
            return {
                ...state,
                loading: true,
            };
        case BitbucketActionTypes.LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                isLoaded: true,
                accounts: action.payload,
            };
        case BitbucketActionTypes.LOAD_FAIL:
        case BitbucketActionTypes.REMOVE:
            return {
                ...initialPlatformState,
            };
        default:
            return state;
    }
};

export default bitbucketReducer;
