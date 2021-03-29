import LeftPanel from 'layouts/main/components/LeftPanel';
import TopBar from 'layouts/main/components/TopBar';
import React from 'react';
import { Outlet } from 'react-router';
import {
    LeftPanelContainer,
    Main,
    PageSeparator,
    TopBarContainer,
} from './style';

const PanelLayout = () => {
    return (
        <>
            <TopBarContainer>
                <TopBar />
                <PageSeparator />
            </TopBarContainer>
            <LeftPanelContainer>
                <LeftPanel />
                <PageSeparator vertical />
            </LeftPanelContainer>
            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default PanelLayout;
