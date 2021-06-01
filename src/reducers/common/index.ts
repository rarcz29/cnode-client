import { Account } from 'actions/common';

export interface DefaultPlatformState {
  loading: boolean;
  accounts: Account[];
}

export const initialPlatformState: DefaultPlatformState = {
  loading: false,
  accounts: [],
};
