import Button from 'components/common/Button';
import SearchInput from 'components/common/SearchInput';
import React from 'react';
import { ButtonsContainer, Container } from './style';

const LeftPanel = ({ className }) => {
    return (
        <Container className={className}>
            <SearchInput width="100%" height="45px" />
            <ButtonsContainer>
                <Button width="48%" height="40px" variant="contained" />
                <Button width="48%" height="40px" variant="outlined" />
            </ButtonsContainer>
        </Container>
    );
};

export default LeftPanel;
