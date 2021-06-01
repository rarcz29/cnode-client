import { Account, AccountRepository } from 'actions/common';
import {
  GithubActionTypes,
  GithubDispatchTypes,
} from 'actions/githubActionTypes';
import { DefaultPlatformState, initialPlatformState } from './common';

// TODO: improve
const insertRepo = (accounts: Account[], repo: AccountRepository) => {
  const index = accounts.findIndex((account) => account.login === repo.login);
  accounts[index].repos = accounts[index].repos
    ? [...accounts[index].repos, repo.repo]
    : [repo.repo];
  return accounts;
};

const githubReducer = (
  state: DefaultPlatformState = initialPlatformState,
  action: GithubDispatchTypes
): DefaultPlatformState => {
  switch (action.type) {
    case GithubActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case GithubActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        accounts: action.payload,
      };
    case GithubActionTypes.NEW_REPO_SUCCESS:
      const newAccounts = insertRepo(state.accounts, action.payload);
      return {
        ...state,
        loading: false,
        accounts: newAccounts,
      };
    case GithubActionTypes.CONNECT_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        accounts: [...state.accounts, action.payload],
      };
    case GithubActionTypes.NEW_REPO_FAIL:
    case GithubActionTypes.CONNECT_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GithubActionTypes.LOAD_FAIL:
    case GithubActionTypes.REMOVE:
      return initialPlatformState;
    default:
      return state;
  }
};

export default githubReducer;
