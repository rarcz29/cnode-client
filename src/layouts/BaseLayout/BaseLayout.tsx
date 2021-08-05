import React from 'react';
import Container from 'layouts/BaseLayout/Container';
import { Outlet } from 'react-router';
import Header from './Header';

interface BaseLayoutProps {}

const BaseLayout : React.FC<BaseLayoutProps> = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default BaseLayout;
