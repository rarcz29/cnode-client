import { IAccount } from './common';

export enum BitbucketActionTypes {
    LOADING = 'LOADING',
    LOAD_SUCCESS = 'LOAD_SUCCESS',
    LOAD_FAIL = 'LOAD_FAIL',
    REMOVE = 'REMOVE',
}

export interface IBitbucketLoading {
    type: typeof BitbucketActionTypes.LOADING;
}

export interface IBitbucketSuccess {
    type: typeof BitbucketActionTypes.LOAD_SUCCESS;
    payload: IAccount[];
}

export interface IBitbucketFail {
    type: typeof BitbucketActionTypes.LOAD_FAIL;
}

export interface IBitbucketRemove {
    type: typeof BitbucketActionTypes.REMOVE;
}

export type BitbucketDispatchTypes =
    | IBitbucketLoading
    | IBitbucketSuccess
    | IBitbucketFail
    | IBitbucketRemove;
