import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';
import SidePanel from 'components/SidePanel';
import COLORS from 'constants/colors';
import React from 'react';
import { ButtonsContainer, MainContainer, PanelContainer } from './styles';

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
                <ButtonsContainer>
                    <Button
                        width="48%"
                        height="35px"
                        backgroundColor={COLORS.GREEN}
                        color={COLORS.FOREGROUND.MAIN}
                        rounded
                    >
                        New
                    </Button>
                    <Button
                        width="48%"
                        height="35px"
                        backgroundColor="transparent"
                        color={COLORS.GREY}
                        borderColor={COLORS.GREY}
                        rounded
                        showBorder
                    >
                        Filters
                    </Button>
                </ButtonsContainer>
            </SidePanel>
            <MainContainer>
                <main></main>
            </MainContainer>
            <SidePanel></SidePanel>
        </PanelContainer>
    );
};

export default PanelLayout;
