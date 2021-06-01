import { Account, AccountRepository } from 'actions/common';
import {
  GitlabActionTypes,
  GitlabDispatchTypes,
} from 'actions/gitlabActionTypes';
import { DefaultPlatformState, initialPlatformState } from './common';

// TODO: improve
const insertRepo = (accounts: Account[], repo: AccountRepository) => {
  const index = accounts.findIndex((account) => account.login === repo.login);
  accounts[index].repos = accounts[index].repos
    ? [...accounts[index].repos, repo.repo]
    : [repo.repo];
  return accounts;
};

const gitlabReducer = (
  state: DefaultPlatformState = initialPlatformState,
  action: GitlabDispatchTypes
): DefaultPlatformState => {
  switch (action.type) {
    case GitlabActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    case GitlabActionTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        accounts: action.payload,
      };
    case GitlabActionTypes.NEW_REPO_SUCCESS:
      const newAccounts = insertRepo(state.accounts, action.payload);
      return {
        ...state,
        loading: false,
        accounts: newAccounts,
      };
    case GitlabActionTypes.CONNECT_ACCOUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        accounts: [...state.accounts, action.payload],
      };
    case GitlabActionTypes.NEW_REPO_FAIL:
    case GitlabActionTypes.CONNECT_ACCOUNT_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GitlabActionTypes.LOAD_FAIL:
    case GitlabActionTypes.REMOVE:
      return initialPlatformState;
    default:
      return state;
  }
};

export default gitlabReducer;
