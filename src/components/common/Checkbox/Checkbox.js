import React from 'react';
import { Checkmark, Container, Styledinput } from './styles';

const Checkbox = (props) => {
    return (
        <Container>
            Initialize this repository with a README file
            <Styledinput type="checkbox" {...props} />
            <Checkmark></Checkmark>
        </Container>
    );
};

export default Checkbox;
