import React from 'react';
import styled from 'styled-components';
import Repository from '../Repository';

const description = `Application for integrating accounts from: GitHub,
  Bitbucket and GitLab. It enables users to connect accounts, connect
  or create repositories and to manage them.`;

const data = [
  { id: 1, username: 'username1', reponame: 'reponame1' },
  { id: 2, username: 'username2', reponame: 'reponame2' },
  { id: 3, username: 'username3', reponame: 'reponame3' },
  { id: 4, username: 'username4', reponame: 'reponame4' },
];

type RepositoriesProps = {};

const Wrapper = styled.div`
  width: 100%;

  & > * {
    margin-bottom: 24px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Repositories: React.FC<RepositoriesProps> = () => {
  return (
    <Wrapper>
      {data.map((item) => (
        <Repository
          key={item.id}
          username={item.username}
          reponame={item.reponame}
          description={description}
        />
      ))}
    </Wrapper>
  );
};

export default Repositories;
