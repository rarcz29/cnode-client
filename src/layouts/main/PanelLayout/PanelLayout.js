import LeftPanel from 'layouts/main/components/LeftPanel';
import TopBar from 'layouts/main/components/TopBar';
import React from 'react';
import { Outlet } from 'react-router';
import { LeftPanelContainer, PageSeparator, TopBarContainer } from './style';

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
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default PanelLayout;
