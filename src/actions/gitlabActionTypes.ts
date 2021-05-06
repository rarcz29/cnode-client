import { IAccount } from './common';

export enum GitlabActionTypes {
    LOADING = 'LOADING',
    LOAD_SUCCESS = 'LOAD_SUCCESS',
    LOAD_FAIL = 'LOAD_FAIL',
    REMOVE = 'REMOVE',
}

export interface IGitlabLoading {
    type: typeof GitlabActionTypes.LOADING;
}

export interface IGitlabSuccess {
    type: typeof GitlabActionTypes.LOAD_SUCCESS;
    payload: IAccount[];
}

export interface IGitlabFail {
    type: typeof GitlabActionTypes.LOAD_FAIL;
}

export interface IGitlabRemove {
    type: typeof GitlabActionTypes.REMOVE;
}

export type GitlabDispatchTypes =
    | IGitlabLoading
    | IGitlabSuccess
    | IGitlabFail
    | IGitlabRemove;
