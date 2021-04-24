import React from 'react';
import { Checkmark, Container, StyledInput } from './styles';

type Props = { label: string };

const Checkbox: React.FC<Props> = ({ label }) => {
    return (
        <Container>
            {label}
            <StyledInput type="checkbox" />
            <Checkmark />
        </Container>
    );
};

export default Checkbox;
