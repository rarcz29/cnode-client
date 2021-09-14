import React from 'react';
import { Container } from 'application/layouts/HeaderLayout/Container';
import { Outlet } from 'react-router';
import { Header } from './Header';

export const HeaderLayout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};
