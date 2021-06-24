import COLOUR from 'constants/colour';
import React from 'react';
import styled from 'styled-components';

type RepositoryProps = {
  username: string;
  reponame: string;
  description: string;
  privateRepo: boolean;
};

const Wrapper = styled.section`
  display: flex;
`;

const MainData = styled.article`
  width: calc(100% - 108px);
`;

const RightSection = styled.aside`
  width: 88px;
  margin-left: 20px;
`;

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

const Visibility = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${COLOUR.foreground2};
  border-radius: 3px;
  border-color: ${COLOUR.foreground2};
  font-size: 16px;
  letter-spacing: 0.04rem;
`;

const Repository: React.FC<RepositoryProps> = ({
  username,
  reponame,
  description,
  privateRepo,
}) => {
  return (
    <Wrapper>
      <MainData>
        <Title>
          {username}
          {' / '}
          <Reponame>{reponame}</Reponame>
        </Title>
        <Description>{description}</Description>
      </MainData>
      <RightSection>
        <Visibility>{privateRepo ? 'Private' : 'Public'}</Visibility>
      </RightSection>
    </Wrapper>
  );
};

export default Repository;
