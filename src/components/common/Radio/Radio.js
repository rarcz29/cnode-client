import React from 'react';
import { Checkmark, Circle, Container, Icon, Input } from './styles';

const Radio = ({ className, label, name, width, icon, checked }) => {
    return (
        <Container className={className} width={width}>
            <Icon>{icon}</Icon>
            {label}
            <Input type="radio" name={name} checked={checked} />
            <Checkmark>
                <Circle />
            </Checkmark>
        </Container>
    );
};

export default Radio;
