import React from 'react';
import styled from 'styled-components';

type Props = {
    name: string;
};

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;

const Image = styled.div`
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background-color: gray;
    margin-right: 1.25rem;
`;

const Contact: React.FC<Props> = ({ name }) => {
    return (
        <Container>
            <Image />
            <p>{name}</p>
        </Container>
    );
};

export default Contact;
