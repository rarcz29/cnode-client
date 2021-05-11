import React from 'react';
import { Checkmark, Container, StyledInput } from './styles';

type Props = {
    label: string;
    name?: string;
    value?: string | number | readonly string[] | undefined;
    forwardRef?: React.RefObject<HTMLInputElement>;
};

const Checkbox: React.FC<Props> = ({ label, forwardRef, ...rest }) => {
    return (
        <Container>
            {label}
            <StyledInput {...rest} ref={forwardRef} type="checkbox" />
            <Checkmark />
        </Container>
    );
};

export default Checkbox;
