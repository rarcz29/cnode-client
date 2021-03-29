import styled from 'styled-components';

export const Input = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: 2px solid ${(props) => props.color || 'grey'};
    border-radius: ${(props) => props.height};
    background-color: transparent;
    color: ${(props) => props.color || 'grey'};
    transition: border-color ease-in-out 0.3s;
    padding: 0 1rem;

    &:hover {
        border-color: white;
    }
`;
