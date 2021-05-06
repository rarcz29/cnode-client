interface ILinkable {
    originUrl: string;
}

export interface IRepository extends ILinkable {
    repoName: string;
    description: string;
    private: boolean;
}

export interface IAccount extends ILinkable {
    accountName: string;
    repositories: IRepository[];
}
