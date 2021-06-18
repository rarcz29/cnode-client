import { Container } from 'components/common';
import React from 'react';
import TopBar from './components/TopBar';

type HomeLayoutProps = {};

const HomeLayout: React.FC<HomeLayoutProps> = () => (
  <Container>
    <TopBar />
  </Container>
);

export default HomeLayout;
