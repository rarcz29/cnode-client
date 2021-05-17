import { IAccount } from './common';

export enum GithubActionTypes {
  LOADING = 'GITHUB_LOADING',
  LOAD_SUCCESS = 'GITHUB_LOAD_SUCCESS',
  LOAD_FAIL = 'GITHUB_LOAD_FAIL',
  NEW_REPO_SUCCESS = 'GITHUB_NEW_REPO_SUCCESS',
  NEW_REPO_FAIL = 'GITHUB_NEW_REPO_FAIL',
  CONNECT_ACCOUNT_SUCCESS = 'GITHUB_CONNECT_ACCOUNT_SUCCESS',
  CONNECT_ACCOUNT_FAIL = 'GITHUB_CONNECT_ACCOUNT_FAIL',
  REMOVE = 'GITHUB_REMOVE',
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

export interface IGithubNewRepoSuccess {
  type: typeof GithubActionTypes.NEW_REPO_SUCCESS;
}

export interface IGithubNewRepoFail {
  type: typeof GithubActionTypes.NEW_REPO_FAIL;
}

export interface IGithubConnectAccountSuccess {
  type: typeof GithubActionTypes.CONNECT_ACCOUNT_SUCCESS;
  payload: IAccount;
}

export interface IGithubConnectAccountFail {
  type: typeof GithubActionTypes.CONNECT_ACCOUNT_FAIL;
}

export interface IGithubRemove {
  type: typeof GithubActionTypes.REMOVE;
}

export type GithubDispatchTypes =
  | IGithubLoading
  | IGithubSuccess
  | IGithubFail
  | IGithubNewRepoSuccess
  | IGithubNewRepoFail
  | IGithubConnectAccountSuccess
  | IGithubConnectAccountFail
  | IGithubRemove;
