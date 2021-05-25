import { Account, AccountRepository } from './common';

export enum BitbucketActionTypes {
  LOADING = 'BITBUCKET_LOADING',
  LOAD_SUCCESS = 'BITBUCKET_LOAD_SUCCESS',
  LOAD_FAIL = 'BITBUCKET_LOAD_FAIL',
  NEW_REPO_SUCCESS = 'BITBUCKET_NEW_REPO_SUCCESS',
  NEW_REPO_FAIL = 'BITBUCKET_NEW_REPO_FAIL',
  CONNECT_ACCOUNT_SUCCESS = 'BITBUCKET_CONNECT_ACCOUNT_SUCCESS',
  CONNECT_ACCOUNT_FAIL = 'BITBUCKET_CONNECT_ACCOUNT_FAIL',
  REMOVE = 'BITBUCKET_REMOVE',
}

export interface Loading {
  type: typeof BitbucketActionTypes.LOADING;
}

export interface LoadSuccess {
  type: typeof BitbucketActionTypes.LOAD_SUCCESS;
  payload: Account[];
}

export interface LoadFail {
  type: typeof BitbucketActionTypes.LOAD_FAIL;
}

export interface NewRepoSuccess {
  type: typeof BitbucketActionTypes.NEW_REPO_SUCCESS;
  payload: AccountRepository;
}

export interface NewRepoFail {
  type: typeof BitbucketActionTypes.NEW_REPO_FAIL;
}

export interface ConnectAccountSuccess {
  type: typeof BitbucketActionTypes.CONNECT_ACCOUNT_SUCCESS;
  payload: Account;
}

export interface ConnectAccountFail {
  type: typeof BitbucketActionTypes.CONNECT_ACCOUNT_FAIL;
}

export interface Remove {
  type: typeof BitbucketActionTypes.REMOVE;
}

export type BitbucketDispatchTypes =
  | Loading
  | LoadSuccess
  | LoadFail
  | NewRepoSuccess
  | NewRepoFail
  | ConnectAccountSuccess
  | ConnectAccountFail
  | Remove;
