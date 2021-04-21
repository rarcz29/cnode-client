import React from 'react';
import { Outlet } from 'react-router';
import LeftSidePanel from './components/LeftSidePanel';
import Navbar from './components/Navbar';
import RightSidePanel from './components/RightSidePanel';
import { LayoutContainer, LayoutContent } from './styles';

const HomeLayout = () => {
    return (
        <LayoutContainer>
            <LeftSidePanel />
            <LayoutContent>
                <Navbar />
                <Outlet />
            </LayoutContent>
            <RightSidePanel />
        </LayoutContainer>
    );
};

export default HomeLayout;
