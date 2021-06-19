import { Container } from 'components/common';
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './components/SideNav';
import TopBar from './components/TopBar';
import { Main, Wrapper } from './style';

type HomeLayoutProps = {};

const HomeLayout: React.FC<HomeLayoutProps> = () => (
  <Container>
    <TopBar />
    <Wrapper>
      <SideNav />
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  </Container>
);

export default HomeLayout;
