import { Container } from 'components/common';
import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import SideNav from './components/SideNav';
import TopBar from './components/TopBar';

type HomeLayoutProps = {};

const Wrapper = styled.div`
  display: flex;
`;

const Main = styled.main`
  width: calc(100% - 248px);
  background-color: red;
`;

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
