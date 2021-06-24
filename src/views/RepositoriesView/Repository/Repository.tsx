import COLOUR from 'constants/colour';
import React from 'react';
import styled from 'styled-components';

type RepositoryProps = {
  username: string;
  reponame: string;
  description: string;
};

const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 6px;
`;

const Reponame = styled.span`
  font-weight: bold;
`;

const Description = styled.p`
  color: ${COLOUR.foreground2};
  font-size: 18px;
`;

const Repository: React.FC<RepositoryProps> = ({
  username,
  reponame,
  description,
}) => {
  return (
    <div>
      <Title>
        {username}
        {' / '}
        <Reponame>{reponame}</Reponame>
      </Title>
      <Description>{description}</Description>
    </div>
  );
};

export default Repository;
