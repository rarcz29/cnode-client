import TopBar from 'layouts/main/components/TopBar';
import React from 'react';
import { Outlet } from 'react-router';
import LeftPanel from '../components/LeftPanel';
import {
    FixedRightPanel,
    HeaderContainer,
    Main,
    PageSeparator,
    SidePanelContainer,
} from './style';

const PanelLayout = () => {
    return (
        <>
            <HeaderContainer>
                <TopBar />
                <PageSeparator />
            </HeaderContainer>
            <SidePanelContainer>
                <LeftPanel />
                <PageSeparator vertical />
            </SidePanelContainer>
            <FixedRightPanel />
            <Main>
                <Outlet />
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas
                asdfasdfasa asdfasdfas asdfasdfasa asdfasdfas asdfasdfasa
                asdfasdfas asdfasdfasa
            </Main>
        </>
    );
};

export default PanelLayout;
