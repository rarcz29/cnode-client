import React from 'react';
import { Checkmark, Circle, Container, Icon, Input } from './styles';

const Radio = ({ className, label, name, width, icon }) => {
    return (
        <Container className={className} width={width}>
            <Icon>{icon}</Icon>
            {label}
            <Input type="radio" name={name} />
            <Checkmark>
                <Circle />
            </Checkmark>
        </Container>
    );
};

export default Radio;
