import React from 'react';
import { Checkmark, Container, StyledInput } from './styles';

type Props = {};

const Checkbox: React.FC<Props> = ({ children }) => {
    return (
        <Container>
            {children}
            <StyledInput type="checkbox" />
            <Checkmark />
        </Container>
    );
};

export default Checkbox;
