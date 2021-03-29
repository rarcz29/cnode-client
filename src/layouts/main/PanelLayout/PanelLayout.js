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
            {/* <TopBarContainer>
                <TopBar />
                <PageSeparator />
            </TopBarContainer>
            <LeftPanelContainer>
                <LeftPanel />
                <PageSeparator vertical />
            </LeftPanelContainer>
            <RightPanelContainer>
                <RightPanel />
            </RightPanelContainer> */}
            {/* <FixedContainer width="100%" height="100vh"> */}
            <HeaderContainer>
                <TopBar />
                <PageSeparator />
            </HeaderContainer>
            {/* <SidePanelsContainer> */}
            <SidePanelContainer>
                <LeftPanel />
                <PageSeparator vertical />
            </SidePanelContainer>
            <FixedRightPanel />
            {/* </SidePanelsContainer> */}
            {/* </FixedContainer> */}
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
