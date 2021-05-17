import { IAccount } from 'actions/common';

export interface IDefaultPlatformState {
  loading: boolean;
  accounts: IAccount[];
}

export const initialPlatformState: IDefaultPlatformState = {
  loading: false,
  accounts: [],
};
