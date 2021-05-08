import { IAccount } from './common';

export enum BitbucketActionTypes {
    LOADING = 'BITBUCKET_LOADING',
    LOAD_SUCCESS = 'BITBUCKET_LOAD_SUCCESS',
    LOAD_FAIL = 'BITBUCKET_LOAD_FAIL',
    REMOVE = 'BITBUCKET_REMOVE',
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
