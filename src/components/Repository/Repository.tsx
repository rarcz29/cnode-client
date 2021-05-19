import COLORS from 'constants/colors';
import React from 'react';
import styled from 'styled-components';

type RepositoryProps = {
  username: string;
  reponame: string;
  description: string;
  technologies?: string[];
};

const Container = styled.div`
  width: 100%;
  border: 1px solid ${COLORS.LAYOUT_SEPARATOR};
  border-radius: 1rem;
`;

const Header = styled.header`
  width: 100%;
  border-bottom: 1px solid ${COLORS.LAYOUT_SEPARATOR};
  background-color: ${COLORS.BACKGROUND.DARK_2};
  line-height: 4rem;
  font-size: 1.125rem;
  padding: 0 20px;
  color: ${COLORS.FOREGROUND.DARKER};

  span {
    color: ${COLORS.FOREGROUND.MAIN};
  }
`;

const Content = styled.div`
  width: 100%;
  margin: 10px 20px;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: ${COLORS.FOREGROUND.DARKER};
  margin-bottom: 1rem;
`;

const TechnologyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Technology = styled.div`
  background-color: red;
`;

const Repository: React.FC<RepositoryProps> = (props) => {
  return (
    <Container>
      <Header>
        {props.username} / <span>{props.reponame}</span>
      </Header>
      <Content>
        <Description>{props.description}</Description>
        <p>Technologies</p>
        {props.technologies && (
          <TechnologyContainer>
            {props.technologies.map((item, index) => (
              <Technology key={index}>{item}</Technology>
            ))}
          </TechnologyContainer>
        )}
      </Content>
    </Container>
  );
};

export default Repository;
