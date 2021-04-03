import SidePanel from 'components/SidePanel';
import React from 'react';
import { MainContainer, PanelContainer } from './styles';

const PanelLayout = () => {
    return (
        <PanelContainer>
            <SidePanel></SidePanel>
            <MainContainer>
                <main></main>
            </MainContainer>
            <SidePanel></SidePanel>
        </PanelContainer>
    );
};

export default PanelLayout;
