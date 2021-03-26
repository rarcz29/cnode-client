import React from 'react';
import { Outlet } from 'react-router';
import { PageSeparator } from './style';

const PanelLayout = () => {
    return (
        <>
            <PageSeparator />
            <Outlet />
        </>
    );
};

export default PanelLayout;
