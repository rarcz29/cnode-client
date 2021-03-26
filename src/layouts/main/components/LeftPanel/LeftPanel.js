import Button from 'components/Button';
import SearchInput from 'components/SearchInput';
import React from 'react';
import { ButtonsContainer, Container } from './style';

const LeftPanel = () => {
    return (
        <Container>
            <SearchInput width="100%" height="45px" />
            <ButtonsContainer>
                <Button width="48%" height="40px" />
                <Button width="48%" height="40px" />
            </ButtonsContainer>
        </Container>
    );
};

export default LeftPanel;
