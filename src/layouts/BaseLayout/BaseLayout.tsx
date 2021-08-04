import React from 'react';
import Container from 'components/Container';
import Header from './Header';

interface BaseLayoutProps {}

const BaseLayout : React.FC<BaseLayoutProps> = () => {
  return (
    <Container>
      <Header />
    </Container>
  );
};

export default BaseLayout;
