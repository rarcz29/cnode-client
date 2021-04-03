import TextInput from 'components/common/TextInput';
import SidePanel from 'components/SidePanel';
import COLORS from 'constants/colors';
import React from 'react';
import { MainContainer, PanelContainer } from './styles';

const PanelLayout = () => {
    return (
        <PanelContainer>
            <SidePanel>
                <TextInput
                    width="100%"
                    height="40px"
                    backgroundColor="transparent"
                    borderColor={COLORS.GREY}
                    color={COLORS.GREY}
                    placeholder="Search..."
                    rounded
                    showBorder
                ></TextInput>
            </SidePanel>
            <MainContainer>
                <main></main>
            </MainContainer>
            <SidePanel></SidePanel>
        </PanelContainer>
    );
};

export default PanelLayout;
