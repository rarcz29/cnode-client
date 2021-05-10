import React from 'react';
import { Checkmark, Container, StyledInput } from './styles';

type Props = {
    label: string;
    forwardRef?: React.RefObject<HTMLInputElement>;
};

const Checkbox: React.FC<Props> = ({ label, forwardRef }) => {
    return (
        <Container>
            {label}
            <StyledInput ref={forwardRef} type="checkbox" />
            <Checkmark />
        </Container>
    );
};

export default Checkbox;
