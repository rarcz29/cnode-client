import { IAccount } from './common';

export enum GitlabActionTypes {
    LOADING = 'GITLAB_LOADING',
    LOAD_SUCCESS = 'GITLAB_LOAD_SUCCESS',
    LOAD_FAIL = 'GITLAB_LOAD_FAIL',
    REMOVE = 'GITLAB_REMOVE',
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
