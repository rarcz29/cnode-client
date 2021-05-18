interface ILinkable {
  originUrl: string;
}

export interface IRepository extends ILinkable {
  name: string;
  description: string;
  private: boolean;
}

export interface IAccount extends ILinkable {
  login: string;
  repos: IRepository[];
}

export interface IAccountRepository {
  login: string;
  repo: IRepository;
}
