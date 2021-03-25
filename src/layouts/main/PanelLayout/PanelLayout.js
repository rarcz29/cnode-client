import React from 'react';
import { Outlet } from 'react-router';

const PanelLayout = () => {
    return (
        <div>
            Panel Layout
            <Outlet />
        </div>
    );
};

export default PanelLayout;
