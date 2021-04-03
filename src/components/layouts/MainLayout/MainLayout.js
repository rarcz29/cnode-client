import Header from 'components/Header';
import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};

export default MainLayout;
