import { IAccount } from 'actions/common';

export interface IDefaultPlatformState {
    loading: boolean;
    isLoaded: boolean;
    accounts: IAccount[];
}

export const initialPlatformState: IDefaultPlatformState = {
    loading: false,
    isLoaded: false,
    accounts: [],
};
