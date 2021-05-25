interface Linkable {
  originUrl: string;
}

export interface Repository extends Linkable {
  name: string;
  description: string;
  private: boolean;
}

export interface Account extends Linkable {
  login: string;
  repos: Repository[];
}

export interface AccountRepository {
  login: string;
  repo: Repository;
}
