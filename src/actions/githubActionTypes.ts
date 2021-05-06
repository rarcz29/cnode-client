import { IAccount } from './common';

export enum GithubActionTypes {
    LOADING = 'LOADING',
    LOAD_SUCCESS = 'LOAD_SUCCESS',
    LOAD_FAIL = 'LOAD_FAIL',
    REMOVE = 'REMOVE',
}

export interface IGithubLoading {
    type: typeof GithubActionTypes.LOADING;
}

export interface IGithubSuccess {
    type: typeof GithubActionTypes.LOAD_SUCCESS;
    payload: IAccount[];
}

export interface IGithubFail {
    type: typeof GithubActionTypes.LOAD_FAIL;
}

export interface IGithubRemove {
    type: typeof GithubActionTypes.REMOVE;
}

export type GithubDispatchTypes =
    | IGithubLoading
    | IGithubSuccess
    | IGithubFail
    | IGithubRemove;
