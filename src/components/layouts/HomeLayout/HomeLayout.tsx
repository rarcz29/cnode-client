import React from 'react';
import { Outlet } from 'react-router';
import {
    LayoutContainer,
    LayoutContent,
    LSidePanel,
    NavBarExternal,
    RSidePanel,
    SearchAndFilter,
} from './styles';

const HomeLayout = () => {
    return (
        <LayoutContainer>
            <LSidePanel>
                <SearchAndFilter>Search and filter</SearchAndFilter>
            </LSidePanel>
            <LayoutContent>
                <NavBarExternal></NavBarExternal>
                <Outlet />
            </LayoutContent>
            <RSidePanel></RSidePanel>
        </LayoutContainer>
    );
};

export default HomeLayout;
