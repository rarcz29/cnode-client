import { Account, AccountRepository } from './common';

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

export interface Loading {
  type: typeof GithubActionTypes.LOADING;
}

export interface LoadSuccess {
  type: typeof GithubActionTypes.LOAD_SUCCESS;
  payload: Account[];
}

export interface LoadFail {
  type: typeof GithubActionTypes.LOAD_FAIL;
}

export interface NewRepoSuccess {
  type: typeof GithubActionTypes.NEW_REPO_SUCCESS;
  payload: AccountRepository;
}

export interface NewRepoFail {
  type: typeof GithubActionTypes.NEW_REPO_FAIL;
}

export interface ConnectAccountSuccess {
  type: typeof GithubActionTypes.CONNECT_ACCOUNT_SUCCESS;
  payload: Account;
}

export interface ConnectAccountFail {
  type: typeof GithubActionTypes.CONNECT_ACCOUNT_FAIL;
}

export interface Remove {
  type: typeof GithubActionTypes.REMOVE;
}

export type GithubDispatchTypes =
  | Loading
  | LoadSuccess
  | LoadFail
  | NewRepoSuccess
  | NewRepoFail
  | ConnectAccountSuccess
  | ConnectAccountFail
  | Remove;
