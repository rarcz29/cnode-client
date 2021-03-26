import React from 'react';
import { Outlet } from 'react-router';
import TopBar from '../common/TopBar';

const MainLayout = () => {
    return (
        <>
            <TopBar />
            <Outlet />
        </>
    );
};

export default MainLayout;
