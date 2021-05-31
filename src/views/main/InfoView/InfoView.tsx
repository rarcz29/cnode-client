import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  & > * {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InfoView = () => {
  return (
    <Container>
      {/* <Info />
            <Info />
            <Info />
            <Info />
            <Info />
            <Info />
            <Info />
            <Info /> */}
    </Container>
  );
};

export default InfoView;
