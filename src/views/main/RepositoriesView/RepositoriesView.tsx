import Repository from 'components/Repository';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootStore } from 'store';
import styled from 'styled-components';

const Container = styled.div`
  & > * {
    margin-bottom: 1rem;

    &:last-child {
      margin: 0;
    }
  }
`;

const RepositoriesView = () => {
  const githubState = useSelector((state: RootStore) => state.github);

  return (
    <Container>
      {githubState.accounts.map((account, accountIndex) =>
        account.repos.map((repo, repoIndex) => (
          <Repository
            key={'index' + accountIndex + repoIndex}
            username={account.login}
            reponame={repo.name}
            description={repo.description}
          />
        ))
      )}
    </Container>
  );
};

export default RepositoriesView;
