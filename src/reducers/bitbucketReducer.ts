import {
  BitbucketActionTypes,
  BitbucketDispatchTypes,
} from 'actions/bitbucketActionTypes';
import { Account, AccountRepository } from 'actions/common';
import { DefaultPlatformState, initialPlatformState } from './common';

// TODO: improve
const insertRepo = (accounts: Account[], repo: AccountRepository) => {
  const index = accounts.findIndex((account) => account.login === repo.login);
  accounts[index].repos = accounts[index].repos
    ? [...accounts[index].repos, repo.repo]
    : [repo.repo];
  return accounts;
};

const bitbucketReducer = (
  state: DefaultPlatformState = initialPlatformState,
  action: BitbucketDispatchTypes
): DefaultPlatformState => {
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
        accounts: action.payload,
      };
    case BitbucketActionTypes.NEW_REPO_SUCCESS:
      const newAccounts = insertRepo(state.accounts, action.payload);
      return {
        ...state,
        loading: false,
        accounts: newAccounts,
      };
    case BitbucketActionTypes.CONNECT_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        accounts: [...state.accounts, action.payload],
      };
    case BitbucketActionTypes.NEW_REPO_FAIL:
    case BitbucketActionTypes.CONNECT_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
      };
    case BitbucketActionTypes.LOAD_FAIL:
    case BitbucketActionTypes.REMOVE:
      return initialPlatformState;
    default:
      return state;
  }
};

export default bitbucketReducer;
