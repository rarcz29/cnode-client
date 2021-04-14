import React from 'react';
import { Outlet } from 'react-router';
import {
    LayoutContainer,
    LayoutContent,
    LSidePanel,
    RSidePanel,
} from './styles';

const HomeLayout = () => {
    return (
        <LayoutContainer>
            <LSidePanel></LSidePanel>
            <LayoutContent>
                <Outlet />
            </LayoutContent>
            <RSidePanel></RSidePanel>
        </LayoutContainer>
    );
};

export default HomeLayout;
