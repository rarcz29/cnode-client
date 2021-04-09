import styled from 'styled-components';

export const StyledSelect = styled.select`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.backgroundColor || 'white'};
    color: ${(props) => props.color || 'black'};
    font-size: ${(props) => props.fontSize || '1rem'};
    padding: 0 2rem;
    border: none;
`;
