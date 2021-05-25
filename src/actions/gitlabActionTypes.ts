import { Account, AccountRepository } from './common';

export enum GitlabActionTypes {
  LOADING = 'GITLAB_LOADING',
  LOAD_SUCCESS = 'GITLAB_LOAD_SUCCESS',
  LOAD_FAIL = 'GITLAB_LOAD_FAIL',
  NEW_REPO_SUCCESS = 'GITLAB_NEW_REPO_SUCCESS',
  NEW_REPO_FAIL = 'GITLAB_NEW_REPO_FAIL',
  CONNECT_ACCOUNT_SUCCESS = 'GITLAB_CONNECT_ACCOUNT_SUCCESS',
  CONNECT_ACCOUNT_FAIL = 'GITLAB_CONNECT_ACCOUNT_FAIL',
  REMOVE = 'GITLAB_REMOVE',
}

export interface Loading {
  type: typeof GitlabActionTypes.LOADING;
}

export interface LoadSuccess {
  type: typeof GitlabActionTypes.LOAD_SUCCESS;
  payload: Account[];
}

export interface LoadFail {
  type: typeof GitlabActionTypes.LOAD_FAIL;
}

export interface NewRepoSuccess {
  type: typeof GitlabActionTypes.NEW_REPO_SUCCESS;
  payload: AccountRepository;
}

export interface NewRepoFail {
  type: typeof GitlabActionTypes.NEW_REPO_FAIL;
}

export interface ConnectAccountSuccess {
  type: typeof GitlabActionTypes.CONNECT_ACCOUNT_SUCCESS;
  payload: Account;
}

export interface ConnectAccountFail {
  type: typeof GitlabActionTypes.CONNECT_ACCOUNT_FAIL;
}

export interface Remove {
  type: typeof GitlabActionTypes.REMOVE;
}

export type GitlabDispatchTypes =
  | Loading
  | LoadSuccess
  | LoadFail
  | NewRepoSuccess
  | NewRepoFail
  | ConnectAccountSuccess
  | ConnectAccountFail
  | Remove;
