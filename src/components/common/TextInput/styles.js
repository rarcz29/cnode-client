import styled from 'styled-components';

export const StyledInput = styled.input`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border: ${(props) => (props.outlined ? '1px' : '0')} solid
        ${(props) => props.borderColor || 'black'};
    border-radius: ${(props) => (props.rounded ? '9999999999999px' : '0')};
    background-color: ${(props) => props.backgroundColor || 'white'};
    color: ${(props) => props.color || 'black'};
    font-size: ${(props) => props.fontSize || '1rem'};
    padding: 0 2rem;
`;
