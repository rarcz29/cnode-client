import { Container } from 'components/common';
import DIMENSIONS from 'constants/dimensions';
import React from 'react';
import { Outlet } from 'react-router';
import LeftSidePanel from './components/LeftSidePanel';
import Navbar from './components/Navbar';
import RightSidePanel from './components/RightSidePanel';
import { LayoutContainer, LayoutContent, PageContent } from './styles';

const HomeLayout = () => {
    return (
        <LayoutContainer>
            <LeftSidePanel />
            <LayoutContent>
                <Navbar />
                <PageContent>
                    <Container width={DIMENSIONS.HOME_PAGE_WIDTH + 'px'}>
                        <Outlet />
                    </Container>
                </PageContent>
            </LayoutContent>
            <RightSidePanel />
        </LayoutContainer>
    );
};

export default HomeLayout;
